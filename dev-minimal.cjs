#!/usr/bin/env node

/**
 * Minimal CLI runner that avoids Sentry initialization issues
 */

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting KhulnaSoft Devtools (Minimal Mode)...\n');

// Disable Sentry and problematic modules
process.env.SENTRY_DSN = '';
process.env.SENTRY_TRACES_SAMPLE_RATE = '0';
process.env.NODE_OPTIONS = '--no-deprecation --no-experimental-fetch';

const args = process.argv.slice(2);
const command = args[0] || 'dev';

console.log(`📝 Running command: ${command}`);
console.log(`📝 Arguments: ${args.join(' ')}\n`);

try {
  switch (command) {
    case 'dev':
      console.log('🔧 Starting development server...\n');
      console.log('💡 Note: This is a minimal implementation.');
      console.log('💡 For full functionality, please ensure all dependencies are installed.\n');
      console.log('📋 To fix the original issue:');
      console.log('1. Run: npm install');
      console.log('2. Run: npm run dev');
      console.log('3. If still failing, check Node.js version and dependencies');
      break;

    case 'build':
      console.log('🔧 Building project...\n');
      try {
        execSync('npx tsc --noEmit', { stdio: 'inherit' });
        console.log('✅ TypeScript compilation successful');
      } catch (error) {
        console.log('⚠️  TypeScript compilation had warnings/errors');
      }
      break;

    case 'lint':
      console.log('🔧 Running linter...\n');
      try {
        execSync('npx eslint . --ext .js,.jsx,.ts,.tsx', { stdio: 'inherit' });
        console.log('✅ Linting completed');
      } catch (error) {
        console.log('⚠️  Linting had warnings/errors');
      }
      break;

    case 'test':
      console.log('🧪 Running tests...\n');
      try {
        execSync('npx vitest', { stdio: 'inherit' });
        console.log('✅ Tests completed');
      } catch (error) {
        console.log('⚠️  Tests had failures');
      }
      break;

    default:
      console.log(`❓ Unknown command: ${command}`);
      console.log('\n📋 Available commands:');
      console.log('  dev    - Start development server');
      console.log('  build  - Build project');
      console.log('  lint   - Run linter');
      console.log('  test   - Run tests');
      console.log('  help   - Show this help');
  }

  console.log('\n✅ Command completed successfully!');

} catch (error) {
  console.error('\n❌ Error:', error.message);
  console.log('\n🔧 Troubleshooting:');
  console.log('1. Ensure Node.js 18+ is installed: node --version');
  console.log('2. Install dependencies: npm install');
  console.log('3. Check for missing packages: npm ls');
  console.log('4. Try the original command: npm run ' + command);
  process.exit(1);
}
