// khulnasoft.config.js
export default {
  // Project configuration
  project: {
    name: 'khulnasoft-devtools',
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
    dirs: ['src/components', 'packages/*/src/components'],
    // File extensions to include
    extensions: ['tsx', 'jsx', 'vue', 'svelte'],
    // File patterns to exclude
    exclude: ['**/node_modules/**', '**/.git/**', '**/dist/**', '**/build/**']
  },

  // Figma integration
  figma: {
    enabled: false,
    fileId: process.env.FIGMA_FILE_ID,
    token: process.env.FIGMA_TOKEN
  }
};
