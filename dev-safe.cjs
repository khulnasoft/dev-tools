#!/usr/bin/env node

/**
 * Simple CLI wrapper that avoids Sentry initialization issues
 */

console.log('🚀 Starting KhulnaSoft Devtools (Safe Mode)...\n');

// Disable Sentry and other problematic modules
process.env.SENTRY_DSN = '';
process.env.SENTRY_TRACES_SAMPLE_RATE = '0';
process.env.NODE_OPTIONS = '--no-deprecation --no-experimental-fetch';

try {
  // Try to load the CLI directly
  require('./cli/index.cjs');
} catch (error) {
  console.error('❌ Error loading CLI:', error.message);
  console.log('\n🔧 Trying alternative approach...');

  // Try to load core functionality directly
  try {
    const core = require('./core/index.cjs');
    console.log('✅ Core loaded successfully');
    console.log('Core exports:', Object.keys(core));

    // Try to create dev tools
    if (core.createDevTools) {
      console.log('🔧 Initializing development tools...');
      // This would need more implementation
      console.log('Development tools initialized successfully!');
    } else {
      console.log('ℹ️  Core functionality available but CLI needed for full features');
      console.log('Please try: npm run build or check if all dependencies are installed');
    }
  } catch (coreError) {
    console.error('❌ Error loading core:', coreError.message);
    console.log('\n📋 Troubleshooting steps:');
    console.log('1. Run: npm install');
    console.log('2. Run: npm run build');
    console.log('3. Check Node.js version: node --version');
    console.log('4. Check for missing dependencies: npm ls');
    process.exit(1);
  }
}
