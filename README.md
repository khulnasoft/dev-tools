# Khulnasoft.com Visual CMS Devtools

Setup and integrate [Khulnasoft.com Visual CMS](https://www.khulnasoft.com/) during development using the Devtools plugin. Khulnasoft Devtools can be integrated with a project's development through either a [Next.js config](#nextjs), [Remix config](#remix), [Vite plugin](#vite), or [Webpack plugin](#webpack).

## Installing Khulnasoft Devtools

Khulnasoft's Devtools can be [installed and initialized](https://www.npmjs.com/package/@khulnasoft.com/create) using:

**npm**

```
npm init khulnasoft.com@latest
```

**pnpm**

```
pnpm create khulnasoft.com@latest
```

This command will update the config file (such as next.config.js, or vite.config.js) and install the `@khulnasoft.com/dev-tools` package. Once installed, you can start your app's dev server:

```
npm run dev
```

## Local Development

To develop and test Khulnasoft Devtools locally:

1. In the devtools directory, build and link the package:

```bash
cd dist/dev-tools
npm link
```

2. In your application directory, link to the local devtools:

```bash
npm link @khulnasoft.com/dev-tools
```

3. You can now run the Figma generate command:

```bash
npx khulnasoft.com figma generate
```

## Manual Installation

Alternatively, you can manually install Khulnasoft's Devtools, and update the config files following the steps below.

```
npm install -D @khulnasoft.com/dev-tools
```

Next step is to add the Devtools plugin to your build tool's config file. For example, if you're using Next.js, see the docs below on how to import and add Devtools to a Next.js app.

## Next.js

A config wrapper function for the [Next.js config](https://nextjs.org/docs/app/api-reference/next-config-js) is provided in order to run Devtools during development. Wrap your existing next config using the `withKhulnasoftDevTools()` function that's created when it is required at the top of the config file.

```js
// next config file
const withKhulnasoftDevTools = require("@khulnasoft.com/dev-tools/next")({
  // Khulnasoft Devtools Options
});

module.exports = withKhulnasoftDevTools({
  // next config
});
```

Or configuration as a function:

```js
module.exports = (phase, defaultConfig) => {
  return withKhulnasoftDevTools(defaultConfig);
};
```

## Remix

A config wrapper function for the [Remix config](https://remix.run/docs/en/main/file-conventions/remix-config) is provided in order to run Devtools during development. Wrap your existing remix config using the `withKhulnasoftDevTools()` function that's created when it is required at the top of the config file.

```js
// remix config file
const withKhulnasoftDevTools = require("@khulnasoft.com/dev-tools/remix")({
  // Khulnasoft Devtools Options
});

module.exports = withKhulnasoftDevTools({
  // remix config
});
```

## Vite

The [Vite plugin](https://vitejs.dev/guide/using-plugins.html) for Devtools is meant for frameworks using Vite for its development. Currently, Devtools supports [Qwik](https://qwik.khulnasoft.com/) integrated with Vite. Import `khulnasoftDevTools` from `@khulnasoft.com/dev-tools/vite` and place it as the the first plugin to ensure it runs before others.

```js
// vite config file
import { defineConfig } from "vite";
import { khulnasoftDevTools } from "@khulnasoft.com/dev-tools/vite";

export default defineConfig(() => {
  return {
    plugins: [khulnasoftDevTools()],
  };
});
```

## Webpack

The Devtools webpack plugin is for React projects. If your project is using Next.js, please see the [Next.js](#nextjs) docs above on how to add the Devtools plugin to the next config. Below is a general [webpack config](https://webpack.js.org/configuration/plugins/) for a React project.

```js
// webpack config file
const {
  KhulnasoftDevToolsPlugin,
} = require("@khulnasoft.com/dev-tools/webpack");

module.exports = {
  plugins: [new KhulnasoftDevToolsPlugin()],
};
```

## CLI

Devtools can also be started with a CLI command, which could be useful if there is a custom setup that doesn't fit into one of the above solutions. Below is an example of running CLI from an npm script:

```json
{
  "scripts": {
    "devtools": "khulnasoft-dev-tools"
  }
}
```
