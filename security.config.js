// security.config.js
module.exports = {
  // Security scanning configuration
  scanning: {
    // Directories to scan for vulnerabilities
    scanDirs: ['.', 'core', 'cli', 'figma', 'next', 'remix', 'vite', 'webpack', 'angular', 'server', 'node'],

    // Files to exclude from security scanning
    excludePatterns: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.test.js',
      '*.test.ts',
      '*.spec.js',
      '*.spec.ts',
      '**/__tests__/**',
    ],

    // Security rules configuration
    rules: {
      // Prevent use of dangerous functions
      dangerousFunctions: [
        'eval',
        'Function',
        'setTimeout',
        'setInterval',
        'exec',
        'execSync',
        'spawn',
        'fork',
      ],

      // Required security headers
      securityHeaders: [
        'X-Content-Type-Options',
        'X-Frame-Options',
        'X-XSS-Protection',
        'Strict-Transport-Security',
      ],

      // Minimum Node.js version
      minNodeVersion: '18.0.0',

      // Maximum package age (in days)
      maxPackageAge: 365,
    },
  },

  // Environment security
  environment: {
    // Required environment variables
    required: [
      'NODE_ENV',
    ],

    // Sensitive environment variables that should not be logged
    sensitive: [
      'API_KEY',
      'SECRET',
      'TOKEN',
      'PASSWORD',
      'PRIVATE_KEY',
      'FIGMA_TOKEN',
      'KHULNASOFT_PUBLIC_KEY',
    ],

    // Environment variables that should be validated
    validate: {
      NODE_ENV: ['development', 'production', 'test'],
      LOG_LEVEL: ['error', 'warn', 'info', 'debug'],
    },
  },

  // API security
  api: {
    // Rate limiting configuration
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    },

    // CORS configuration
    cors: {
      origin: process.env.NODE_ENV === 'production'
        ? ['https://khulnasoft.com', 'https://www.khulnasoft.com']
        : ['http://localhost:3000', 'http://127.0.0.1:3000'],
      credentials: true,
    },

    // Input validation
    validation: {
      maxBodySize: '10mb',
      maxFileSize: '5mb',
      allowedFileTypes: ['.json', '.js', '.ts', '.md'],
    },
  },
};
