# 🚀 KhulnaSoft Visual CMS Devtools

**Easily set up and integrate [KhulnaSoft Visual CMS](https://www.khulnasoft.com/) into your development workflow.**  
Supports **Next.js**, **Remix**, **Vite**, and **Webpack** with built-in CLI tools.

## ✨ Why Khulnasoft Devtools?

Khulnasoft Devtools revolutionizes your development workflow with powerful features designed to boost productivity and maintain consistency across your projects.

### 🎯 Core Features

| Feature | Description |
|---------|-------------|
| **🚀 Framework Agnostic** | Seamlessly works with Next.js, Remix, Angular, Vue, and Qwik out of the box |
| **🔍 Visual Development** | Real-time component preview with instant hot reloading |
| **📦 Component Registry** | Centralized management for all your UI components |
| **🎨 Design System Integration** | Two-way sync with Figma for pixel-perfect implementation |
| **🛡️ Type Safety** | Built with TypeScript for enhanced developer experience |
| **⚡ Build Tool Support** | Optimized for Webpack, Vite, and modern build systems |

### 🏆 Benefits

- **Faster Development** - Reduce development time with live previews and hot reloading
- **Better Collaboration** - Keep designers and developers in sync with Figma integration
- **Improved Quality** - Catch type errors early with TypeScript support
- **Simplified Maintenance** - Centralized component management
- **Future-Proof** - Works with all major frameworks and build tools

## 🚀 Quick Start

### Prerequisites
- Node.js 16.14.0 or later
- npm 7+ or pnpm 7+
- A modern web framework (Next.js, Remix, etc.)

### Installation

You can install and initialize KhulnaSoft Devtools in just one command:

| Package Manager | Command | Description |
|-----------------|---------|-------------|
| **npm**         | `npm init khulnasoft.com@latest` | For npm users (version 7+ required) |
| **pnpm**        | `pnpm create khulnasoft.com@latest` | For pnpm users |

> 💡 The installer will:
> - Detect your project type (Next.js, Remix, Vite, etc.)
> - Install `@khulnasoft.com/dev-tools` and required dependencies
> - Update your framework configuration automatically
> - Set up the development environment

### Verify Installation

1. Start your development server:
   ```bash
   npm run dev
   ```
2. Open your browser to `http://localhost:3000` (or your configured port)
3. Look for the Khulnasoft Devtools interface in your browser's developer tools

## 🏗️ Core Architecture

Khulnasoft Devtools is built around a modular, framework-agnostic architecture that provides a consistent development experience across different JavaScript frameworks.

### Core Module (`/core`)

```typescript
// Core initialization example
import { createDevTools } from '@khulnasoft.com/dev-tools/core';

const devTools = await createDevTools({
  framework: 'auto', // Auto-detect framework
  componentDirs: ['src/components'],
  // ... other options
});
```

Key responsibilities:
- Framework detection and initialization
- Component registry management
- Build system integration
- Development server coordination
- Provides the main `createDevTools` factory function
- Handles framework detection and integration
- Manages the component registry and build configurations

### Framework Adapters
- **Next.js Adapter**: Webpack plugin-based integration with Next.js
- **Remix Adapter**: Deep integration with Remix's build system
- **Angular/Vue/Qwik**: Framework-specific implementations

### Component Registry
Tracks all components in the project with their metadata:

```typescript
interface ComponentRegistry {
  components: ComponentInfo[];
  registryPath: string;
  registryDisplayPath: string;
  frameworks: Framework[];
  dependencies: AppDependency[];
  publicApiKey: string | undefined;
  devToolsVersion: string;
}
```

## 🛠️ Development Server

The devtools include a powerful development server that provides:

- **Live Preview** - Real-time component preview
- **Hot Reloading** - Instant feedback during development
- **API Endpoints** - For component management
- **Figma Integration** - Sync with design systems

## ⚙️ Build Tool Integration

### Webpack Plugin
- Injects development scripts
- Handles asset processing
- Provides source map support

### Vite Plugin
- Integrates with Vite's development server
- Supports HMR (Hot Module Replacement)
- Handles environment variables

## 🚀 Getting Started

### Basic Usage

```typescript
// Example: Basic setup with Next.js
import { createDevTools } from '@khulnasoft.com/dev-tools/core';

const devTools = await createDevTools({
  framework: 'next',
  // Additional options
});
```

### Advanced Configuration

```typescript
// Advanced configuration example
const devTools = await createDevTools({
  framework: 'next',
  componentDirs: ['src/components'],
  publicApiKey: process.env.KHULNASOFT_PUBLIC_KEY,
  devServer: {
    port: 3001,
    open: true,
  },
});
```

## 🔍 API Reference

### `createDevTools(options: CreateDevToolsOptions): Promise<DevTools>`

Creates a new instance of Khulnasoft Devtools.

#### Options:
- `framework`: The target framework ('next', 'remix', 'vite', etc.)
- `componentDirs`: Array of directories to scan for components
- `publicApiKey`: Your Khulnasoft public API key
- `devServer`: Development server configuration

## 🧩 Extending Functionality

### Custom Adapters

## 🔌 Extending Khulnasoft Devtools

### Custom Adapters

You can extend Khulnasoft Devtools by creating custom adapters. Here's a basic example:

```typescript
import { DevToolsAdapter } from '@khulnasoft.com/dev-tools/core';

class MyCustomAdapter implements DevToolsAdapter {
  async getPublicApiKey() {
    // Your implementation here
    return { key: process.env.KHULNASOFT_API_KEY };
  }

  async setPublicApiKey({ key }) {
    // Your implementation here
    process.env.KHULNASOFT_API_KEY = key;
    return { key };
  }
  
  // Implement other required methods...
}

// Register your custom adapter
const devTools = await createDevTools({
  adapter: new MyCustomAdapter()
});
```

## ⚡ Vite Integration

Khulnasoft Devtools provides seamless integration with Vite, offering features like HMR, environment variable handling, and automatic server management.

### 🚀 Quick Start

1. Install the Vite plugin:
   ```bash
   # Using npm
   npm install @khulnasoft.com/dev-tools/vite --save-dev
   
   # Using pnpm
   pnpm add @khulnasoft.com/dev-tools/vite -D
   ```

2. Add the plugin to your `vite.config.js/ts`:
   ```typescript
   import { defineConfig } from 'vite';
   import { khulnasoftDevTools } from '@khulnasoft.com/dev-tools/vite';

   export default defineConfig({
     plugins: [khulnasoftDevTools()]
   });
   ```

### 🔧 Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `autoImport` | boolean | `true` | Auto-import components from configured directories |
| `debug` | boolean | `false` | Enable debug logging |
| `watchDirs` | string[] | `['src']` | Directories to watch for changes |
| `exclude` | string[] | `['node_modules']` | Directories to exclude from watching |
| `componentDirs` | string[] | `['src/components']` | Directories to scan for components |
| `framework` | string | `'auto'` | Framework to optimize for (`'auto'`, `'next'`, `'remix'`, `'vite'`) |

### 🎯 Framework-Specific Setup

#### Next.js with Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { khulnasoftDevTools } from '@khulnasoft.com/dev-tools/vite';

export default defineConfig({
  plugins: [
    react(),
    khulnasoftDevTools({
      framework: 'next',
      componentDirs: [
        'src/components',
        'src/app/**/components',
        'src/features/**/components'
      ]
    })
  ]
});
```

#### Vue 3 with Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { khulnasoftDevTools } from '@khulnasoft.com/dev-tools/vite';

export default defineConfig({
  plugins: [
    vue(),
    khulnasoftDevTools({
      framework: 'vite',
      componentDirs: [
        'src/components',
        'src/views/**/components'
      ]
    })
  ]
});
```

### 🛠️ Advanced Usage

#### Custom Environment Variables

```typescript
// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import { khulnasoftDevTools } from '@khulnasoft.com/dev-tools/vite';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode`
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      khulnasoftDevTools({
        // Pass environment variables to the devtools
        env: {
          API_URL: env.VITE_API_URL,
          ENABLE_ANALYTICS: env.VITE_ENABLE_ANALYTICS === 'true'
        }
      })
    ]
  };
});
```

#### Custom WebSocket Server

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { khulnasoftDevTools } from '@khulnasoft.com/dev-tools/vite';

export default defineConfig({
  plugins: [
    khulnasoftDevTools({
      // Custom WebSocket server configuration
      server: {
        host: 'localhost',
        port: 3001,
        // Enable HTTPS for secure connections
        https: process.env.NODE_ENV === 'production' ? {
          key: fs.readFileSync('path/to/key.pem'),
          cert: fs.readFileSync('path/to/cert.pem')
        } : false
      }
    })
  ]
});
```

### 🔍 Debugging

Enable debug mode to get detailed logs:

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { khulnasoftDevTools } from '@khulnasoft.com/dev-tools/vite';

export default defineConfig({
  plugins: [
    khulnasoftDevTools({
      debug: true, // Enable debug logging
      logger: {
        level: 'debug',
        // Custom logger implementation
        log: (message, level) => {
          if (level === 'error') console.error(`[Khulnasoft DevTools] ${message}`);
          else console.log(`[Khulnasoft DevTools] ${message}`);
        }
      }
    })
  ]
});
```

### 🧪 Testing with Vitest

Configure Khulnasoft Devtools for testing with Vitest:

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import { khulnasoftDevTools } from '@khulnasoft.com/dev-tools/vite';

export default defineConfig({
  plugins: [
    khulnasoftDevTools({
      // Disable auto-import in test environment
      autoImport: process.env.NODE_ENV !== 'test',
      // Mock API responses during tests
      mock: process.env.NODE_ENV === 'test'
    })
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.ts']
  }
});
```

### 🚀 Production Optimization

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { khulnasoftDevTools } from '@khulnasoft.com/dev-tools/vite';

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';
  
  return {
    plugins: [
      khulnasoftDevTools({
        // Disable devtools in production by default
        enabled: !isProduction,
        // Enable minimal production mode for performance
        production: isProduction ? {
          minify: true,
          analyzeBundle: true,
          sourcemap: false
        } : false
      })
    ],
    build: {
      minify: isProduction ? 'esbuild' : false,
      sourcemap: !isProduction
    }
  };
});
```

## 🔧 CLI Commands

Khulnasoft Devtools comes with a powerful CLI for various development tasks:

### Available Commands

```bash
# Start the development server
npx khulnasoft-dev-tools dev

# Build the project for production
npx khulnasoft-dev-tools build

# Preview the production build
npx khulnasoft-dev-tools preview

# Lint your code
npx khulnasoft-dev-tools lint

# Generate component documentation
npx khulnasoft-dev-tools docs
```

### CLI Configuration

You can configure the CLI using a `khulnasoft.config.js` file in your project root:

```javascript
// khulnasoft.config.js
export default {
  // Project configuration
  project: {
    name: 'my-awesome-app',
    type: 'vite', // 'vite' | 'next' | 'remix' | 'angular' | 'vue'
    port: 3000,   // Default port for dev server
  },
  
  // Vite-specific configuration
  vite: {
    // Custom Vite config overrides
    server: {
      open: true,
      port: 3000
    },
    // Additional Vite plugins
    plugins: []
  },
  
  // Component discovery
  components: {
    // Directories to scan for components
    dirs: ['src/components'],
    // File extensions to include
    extensions: ['tsx', 'jsx', 'vue', 'svelte'],
    // File patterns to exclude
    exclude: ['**/node_modules/**', '**/.git/**']
  },
  
  // Figma integration
  figma: {
    enabled: true,
    fileId: 'YOUR_FIGMA_FILE_ID',
    token: process.env.FIGMA_TOKEN
  }
};
```

### Environment Variables

Khulnasoft Devtools supports the following environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `KHULNASOFT_DEV` | Enable development mode | `false` |
| `KHULNASOFT_DEBUG` | Enable debug logging | `false` |
| `KHULNASOFT_PORT` | Port for the dev server | `3000` |
| `KHULNASOFT_HOST` | Host for the dev server | `localhost` |
| `FIGMA_TOKEN` | Figma API token | - |

### NPM Scripts

Add these scripts to your `package.json` for convenience:

```json
{
  "scripts": {
    "dev": "khulnasoft-dev-tools dev",
    "build": "khulnasoft-dev-tools build",
    "preview": "khulnasoft-dev-tools preview",
    "lint": "khulnasoft-dev-tools lint",
    "docs": "khulnasoft-dev-tools docs"
  }
}
```

Then you can run them with:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Resources & Support

### Official Documentation
- [Getting Started Guide](https://docs.khulnasoft.com/getting-started) - Step-by-step setup instructions
- [API Reference](https://docs.khulnasoft.com/api) - Complete API documentation
- [Guides & Tutorials](https://docs.khulnasoft.com/guides) - In-depth tutorials and best practices

### Community & Support
- [GitHub Discussions](https://github.com/khulnasoft/discussions) - Ask questions and share ideas
- [Example Projects](https://github.com/khulnasoft/examples) - Sample projects and integrations
- [Changelog](https://github.com/khulnasoft/changelog) - Latest updates and release notes
- [Report a Bug](https://github.com/khulnasoft/issues) - Found an issue? Let us know!

## 🤝 Contributing

We're thrilled you're interested in contributing to Khulnasoft Devtools! Here's how you can help:

### 🐛 Reporting Issues
Before creating a new issue:
1. Search existing issues to avoid duplicates
2. Include a clear, descriptive title
3. Provide detailed reproduction steps
4. Include environment details:
   - Node.js version
   - Operating System
   - Package manager (npm, pnpm, etc.)
   - Framework version (Next.js, Remix, etc.)
5. Add relevant code snippets or error messages
6. Include screenshots or screen recordings if applicable

### 🛠️ Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/khulnasoft.com.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature`
5. Make your changes
6. Run tests: `npm test`
7. Commit your changes: `git commit -am 'Add some feature'`
8. Push to the branch: `git push origin feature/your-feature`
9. Create a Pull Request

### 📝 Code Style
- Follow the existing code style
- Use TypeScript for type safety
- Add tests for new features
- Update documentation as needed

### 🧪 Testing
- Write unit tests for new features
- Ensure all tests pass before submitting a PR
- Test across different frameworks and environments

## 📄 License

MIT License

Copyright (c) 2023 KhulnaSoft

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

For more details, see the [LICENSE](LICENSE) file.
