#!/usr/bin/env node

var version = process.version;
var [majorVersion, minorVersion] = version.replace("v", "").split(".");
if (Number(majorVersion) < 18) {
  console.error(
    "Khulnasoft.com Dev Tools requires Node.js 18.11 or higher. You are currently running Node.js " +
      version
  );
  process.exit(1);
} else if (Number(majorVersion) === 18) {
  if (Number(minorVersion) < 11) {
    console.error(
      "Node.js 18.11 or higher is REQUIRED. From Node 18.0.0 to 18.11.0, there is a bug preventing correct behaviour of Khulnasoft.com. You are currently running Node.js " +
        version
    );
  }
}

require("./index.cjs");
