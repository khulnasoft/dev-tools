# KhulnaSoft Devtools - Development Environment

This directory contains the KhulnaSoft Visual CMS Devtools package that has been copied from the node_modules for development purposes.

## Getting Started

### Prerequisites
- Node.js 18+ (currently using Node.js 22.20.0)
- npm 10+ (currently using npm 10.9.3)

### Installation
Dependencies have already been installed. If you need to reinstall:

```bash
npm install
```

## Available Scripts

### Development
```bash
# Start the CLI tool
npm run cli

# Show CLI help
npm run cli:help

# Development server (when working with actual projects)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Generate documentation
npm run docs
```

## Project Structure

- `cli/` - Command line interface tools
- `core/` - Core functionality and framework detection
- `figma/` - Figma integration components
- `next/` - Next.js adapter
- `remix/` - Remix adapter
- `vite/` - Vite adapter
- `webpack/` - Webpack adapter
- `angular/` - Angular adapter
- `server/` - Development server components
- `types/` - TypeScript type definitions

## Configuration

The project uses `khulnasoft.config.js` for configuration. You can modify this file to customize:

- Project settings (name, type, port)
- Vite configuration
- Component discovery paths
- Figma integration settings

## Environment Variables

Copy `.env.example` to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

## CLI Usage

The KhulnaSoft Devtools CLI provides various commands for development:

```bash
# General help
node cli/main.cjs --help

# Development server
node cli/main.cjs dev

# Build commands
node cli/main.cjs build

# And more...
```

## Development Workflow

1. This package is primarily a toolkit for other projects
2. To develop new features, work within the appropriate framework adapter directories
3. Test changes by creating example projects that use this toolkit
4. Use the CLI tools to validate functionality

## Integration with Projects

This toolkit is designed to be integrated into other projects (Next.js, Remix, Vite, etc.). To use it:

1. Install in your project: `npm install @khulnasoft.com/dev-tools`
2. Add configuration to your build tool (Vite, Webpack, etc.)
3. Use the CLI for development tasks

## Troubleshooting

- Ensure Node.js 18+ is installed
- Check that all dependencies are installed: `npm install`
- Verify configuration in `khulnasoft.config.js`
- Check environment variables in `.env` file
