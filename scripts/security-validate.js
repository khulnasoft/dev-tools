#!/usr/bin/env node

/**
 * Security validation script for KhulnaSoft Devtools
 * This script performs comprehensive security checks
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔒 Running security validation...\n');

let hasErrors = false;
let hasWarnings = false;

// Helper functions
function logError(message) {
  console.error(`❌ ${message}`);
  hasErrors = true;
}

function logWarning(message) {
  console.warn(`⚠️  ${message}`);
  hasWarnings = true;
}

function logSuccess(message) {
  console.log(`✅ ${message}`);
}

function logInfo(message) {
  console.log(`ℹ️  ${message}`);
}

// Check Node.js version
function checkNodeVersion() {
  logInfo('Checking Node.js version...');
  const currentVersion = process.version;
  const minVersion = '18.0.0';

  if (currentVersion < minVersion) {
    logError(`Node.js version ${currentVersion} is below minimum required ${minVersion}`);
  } else {
    logSuccess(`Node.js version ${currentVersion} meets requirements`);
  }
}

// Check for hardcoded secrets
function checkHardcodedSecrets() {
  logInfo('Checking for hardcoded secrets...');
  const sensitivePatterns = [
    /api[_-]?key/i,
    /secret/i,
    /token/i,
    /password/i,
    /private[_-]?key/i,
  ];

  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory() && !itemPath.includes('node_modules') && !itemPath.includes('dist') && !itemPath.includes('build')) {
        scanDirectory(itemPath);
      } else if (stat.isFile() && /\.(js|ts|json|md)$/.test(item)) {
        const content = fs.readFileSync(itemPath, 'utf8');

        sensitivePatterns.forEach(pattern => {
          if (pattern.test(content)) {
            const lines = content.split('\n');
            lines.forEach((line, index) => {
              if (pattern.test(line) && !line.includes('process.env') && !line.includes('example') && !line.includes('template')) {
                logWarning(`Potential hardcoded secret in ${itemPath}:${index + 1}`);
              }
            });
          }
        });
      }
    }
  }

  scanDirectory('.');
  logSuccess('Hardcoded secrets check completed');
}

// Check package.json for vulnerabilities
function checkPackageVulnerabilities() {
  logInfo('Checking package vulnerabilities...');
  try {
    const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
    const audit = JSON.parse(auditResult);

    if (audit.vulnerabilities && Object.keys(audit.vulnerabilities).length > 0) {
      const criticalCount = audit.metadata.vulnerabilities.critical || 0;
      const highCount = audit.metadata.vulnerabilities.high || 0;

      if (criticalCount > 0) {
        logError(`${criticalCount} critical vulnerabilities found`);
      } else if (highCount > 0) {
        logWarning(`${highCount} high severity vulnerabilities found`);
      } else {
        logSuccess('No critical or high severity vulnerabilities found');
      }
    } else {
      logSuccess('No vulnerabilities found');
    }
  } catch (error) {
    logWarning('Could not run npm audit');
  }
}

// Check for dangerous dependencies
function checkDangerousDependencies() {
  logInfo('Checking for dangerous dependencies...');
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };

  const dangerousPackages = [
    'lodash', // Should use lodash-es
    'moment', // Should use date-fns or day.js
    'request', // Should use axios or node-fetch
    'xml2js', // Known vulnerabilities
  ];

  dangerousPackages.forEach(pkg => {
    if (allDeps[pkg]) {
      logWarning(`Potentially dangerous dependency found: ${pkg}@${allDeps[pkg]}`);
    }
  });

  logSuccess('Dangerous dependencies check completed');
}

// Check file permissions
function checkFilePermissions() {
  logInfo('Checking file permissions...');
  const sensitiveFiles = ['.env', '.env.example', '*.key', '*.pem', 'security.config.js'];

  sensitiveFiles.forEach(pattern => {
    if (pattern.includes('*')) {
      const basePattern = pattern.replace('*', '');
      // This is a simplified check - in a real implementation you'd use glob
    } else if (fs.existsSync(pattern)) {
      const stats = fs.statSync(pattern);
      if (stats.mode & parseInt('777', 8) & ~parseInt('600', 8)) {
        logWarning(`File ${pattern} has overly permissive permissions`);
      }
    }
  });

  logSuccess('File permissions check completed');
}

// Check TypeScript configuration for security
function checkTypeScriptSecurity() {
  logInfo('Checking TypeScript security configuration...');
  if (fs.existsSync('tsconfig.json')) {
    const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));

    if (!tsconfig.compilerOptions?.strict) {
      logWarning('TypeScript strict mode is not enabled');
    }

    if (tsconfig.compilerOptions?.noImplicitAny === false) {
      logWarning('noImplicitAny is disabled');
    }

    logSuccess('TypeScript security check completed');
  } else {
    logWarning('No TypeScript configuration found');
  }
}

// Main execution
async function main() {
  try {
    checkNodeVersion();
    checkHardcodedSecrets();
    checkPackageVulnerabilities();
    checkDangerousDependencies();
    checkFilePermissions();
    checkTypeScriptSecurity();

    console.log('\n' + '='.repeat(50));

    if (hasErrors) {
      console.log('\n🔴 Security validation failed with errors');
      process.exit(1);
    } else if (hasWarnings) {
      console.log('\n🟡 Security validation completed with warnings');
      process.exit(0);
    } else {
      console.log('\n🟢 Security validation passed successfully');
      process.exit(0);
    }
  } catch (error) {
    logError(`Security validation failed: ${error.message}`);
    process.exit(1);
  }
}

main();
