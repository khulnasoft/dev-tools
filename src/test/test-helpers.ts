import { vi, beforeAll, afterAll } from 'vitest';
import fs from 'fs';
import path from 'path';

// Test environment setup utilities
export async function setupTestEnvironment() {
  // Create temporary directories for testing
  const tempDir = path.join(process.cwd(), 'temp-test');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  // Mock environment variables
  process.env.NODE_ENV = 'test';
  process.env.KHULNASOFT_DEV = 'true';
  process.env.KHULNASOFT_DEBUG = 'false';

  // Setup global mocks
  vi.mock('fs', () => ({
    default: {
      existsSync: vi.fn(),
      readFileSync: vi.fn(),
      writeFileSync: vi.fn(),
      readdirSync: vi.fn(),
      statSync: vi.fn(),
      mkdirSync: vi.fn(),
      unlinkSync: vi.fn(),
    },
  }));

  vi.mock('path', () => ({
    default: {
      resolve: vi.fn((...args) => args.join('/')),
      join: vi.fn((...args) => args.join('/')),
      dirname: vi.fn(),
      basename: vi.fn(),
      extname: vi.fn(),
    },
  }));
}

export async function teardownTestEnvironment() {
  // Clean up temporary files
  const tempDir = path.join(process.cwd(), 'temp-test');
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }

  // Restore environment variables
  delete process.env.NODE_ENV;
  delete process.env.KHULNASOFT_DEV;
  delete process.env.KHULNASOFT_DEBUG;
}

// Test data factories
export function createMockComponent() {
  return {
    id: 'test-component',
    name: 'TestComponent',
    filePath: '/test/component.tsx',
    relFilePath: 'component.tsx',
    importPath: '@/components/TestComponent',
    exportName: 'TestComponent',
    framework: 'react',
    inputs: [
      {
        name: 'title',
        type: 'text',
        friendlyName: 'Title',
        required: true,
      },
      {
        name: 'variant',
        type: 'select',
        friendlyName: 'Variant',
        enum: ['primary', 'secondary', 'outline'],
        defaultValue: 'primary',
      },
    ],
  };
}

export function createMockFramework() {
  return {
    name: 'react',
    version: '18.0.0',
  };
}

export function createMockConfig() {
  return {
    project: {
      name: 'test-project',
      type: 'react',
      port: 3000,
    },
    components: {
      dirs: ['src/components'],
      extensions: ['tsx', 'jsx'],
    },
  };
}

// Mock server setup
export async function setupMockServer() {
  // Setup mock HTTP server for testing
  const server = {
    listen: vi.fn(),
    close: vi.fn(),
    on: vi.fn(),
  };

  return server;
}

// Database test helpers
export async function setupTestDatabase() {
  // Setup in-memory database for testing
  const db = new Map();

  return {
    get: (key) => db.get(key),
    set: (key, value) => db.set(key, value),
    delete: (key) => db.delete(key),
    clear: () => db.clear(),
    size: () => db.size,
  };
}

// File system test helpers
export async function createTestFiles(fileStructure) {
  const createFiles = (structure, currentPath) => {
    Object.entries(structure).forEach(([name, content]) => {
      const fullPath = path.join(currentPath, name);

      if (typeof content === 'string') {
        fs.writeFileSync(fullPath, content);
      } else {
        fs.mkdirSync(fullPath, { recursive: true });
        createFiles(content, fullPath);
      }
    });
  };

  const tempDir = path.join(process.cwd(), 'temp-test');
  createFiles(fileStructure, tempDir);
}

// Network mocking utilities
export function mockNetworkRequest() {
  return {
    status: 200,
    json: vi.fn(),
    text: vi.fn(),
    ok: true,
  };
}

export function mockNetworkError() {
  return {
    status: 500,
    ok: false,
    json: vi.fn().mockRejectedValue(new Error('Network error')),
  };
}
