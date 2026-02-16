async function e() {
  if (typeof document < "u" && window.location.hostname === "localhost") {
    let t = document.head.querySelector("script[data-khulnasoft-dev-tools]");
    t ||
      ((t = document.createElement("script")),
      t.setAttribute("src", "http://localhost:5273/~khulnasoft-dev-tools.js"),
      t.setAttribute("data-khulnasoft-dev-tools", ""),
      t.setAttribute("async", ""),
      document.head.appendChild(t));
  }
}
export { e as khulnasoftDevTools };
