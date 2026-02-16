var si = Object.create;
var Mn = Object.defineProperty;
var ui = Object.getOwnPropertyDescriptor;
var pi = Object.getOwnPropertyNames;
var li = Object.getPrototypeOf,
  ci = Object.prototype.hasOwnProperty;
var Ie = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var mi = (e, t, r, n) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let o of pi(t))
      !ci.call(e, o) &&
        o !== r &&
        Mn(e, o, {
          get: () => t[o],
          enumerable: !(n = ui(t, o)) || n.enumerable,
        });
  return e;
};
var Un = (e, t, r) => (
  (r = e != null ? si(li(e)) : {}),
  mi(
    t || !e || !e.__esModule
      ? Mn(r, "default", { value: e, enumerable: !0 })
      : r,
    e,
  )
);
var Jn = Ie(($u, qn) => {
  "use strict";
  qn.exports = function () {
    if (process.env.npm_config_user_agent)
      return di(process.env.npm_config_user_agent);
  };
  function di(e) {
    let t = e.split(" ")[0],
      r = t.lastIndexOf("/"),
      n = t.substring(0, r);
    return {
      name: n === "npminstall" ? "cnpm" : n,
      version: t.substring(r + 1),
    };
  }
});
var wn = Ie((qt) => {
  "use strict";
  Object.defineProperty(qt, "__esModule", { value: !0 });
  function vo(e) {
    return Object.prototype.toString.call(e);
  }
  qt.getType = vo;
  function Zs(e) {
    throw new TypeError("unsupported data type: " + vo(e));
  }
  qt.throwUnknownDataType = Zs;
});
var Rn = Ie((Le) => {
  "use strict";
  Object.defineProperty(Le, "__esModule", { value: !0 });
  var ke = "";
  for (let e = 0; e < 10; e++) {
    let t = String.fromCharCode(48 + e);
    ke += t;
  }
  for (let e = 0; e < 26; e++) {
    let t = String.fromCharCode(65 + e);
    ke += t;
  }
  for (let e = 0; e < 26; e++) {
    let t = String.fromCharCode(97 + e);
    ke += t;
  }
  var lt = ke.length,
    bn = {};
  for (let e = 0; e < lt; e++) {
    let t = ke[e];
    bn[t] = e;
  }
  function vn(e) {
    let t = 0,
      r = 1;
    for (let n = e.length - 1; n >= 0; n--) {
      let o = e[n],
        i = bn[o];
      ((i *= r), (t += i), (r *= lt));
    }
    return t;
  }
  Le.s_to_int = vn;
  function Io(e) {
    let t = BigInt(0),
      r = BigInt(1),
      n = BigInt(lt);
    for (let o = e.length - 1; o >= 0; o--) {
      let i = e[o],
        a = BigInt(bn[i]);
      ((a *= r), (t += a), (r *= n));
    }
    return t;
  }
  Le.s_to_big_int = Io;
  function In(e) {
    if (e === 0) return ke[0];
    let t = [];
    for (; e !== 0; ) {
      let r = e % lt,
        n = ke[r];
      (t.push(n), (e -= r), (e /= lt));
    }
    return t.reverse().join("");
  }
  Le.int_to_s = In;
  function Ro(e) {
    let t = BigInt(0),
      r = BigInt(lt);
    if (e === t) return ke[0];
    let n = [];
    for (; e !== t; ) {
      let o = e % r,
        i = ke[Number(o)];
      (n.push(i), (e -= o), (e /= r));
    }
    return n.reverse().join("");
  }
  Le.big_int_to_s = Ro;
  function Qt(e) {
    return e.split("").reverse().join("");
  }
  function No(e) {
    if (e < 0) return "-" + No(-e);
    let [t, r] = e.toString().split(".");
    if (!r) return In(e);
    let n;
    (r && ([r, n] = r.split("e")), (t = Jt(t)), (r = Qt(r)), (r = Jt(r)));
    let o = t + "." + r;
    if (n) {
      switch (((o += "."), n[0])) {
        case "+":
          n = n.slice(1);
          break;
        case "-":
          ((o += "-"), (n = n.slice(1)));
          break;
      }
      ((n = Qt(n)), (n = Jt(n)), (o += n));
    }
    return o;
  }
  Le.num_to_s = No;
  function Jt(e) {
    let t = +e;
    return t.toString() === e ? In(t) : ":" + Ro(BigInt(e));
  }
  Le.int_str_to_s = Jt;
  function Tn(e) {
    return e[0] === ":" ? Io(e.substring(1)).toString() : vn(e).toString();
  }
  function Bo(e) {
    if (e[0] === "-") return -Bo(e.substr(1));
    let [t, r, n] = e.split(".");
    if (!r) return vn(t);
    ((t = Tn(t)), (r = Tn(r)), (r = Qt(r)));
    let o = t + "." + r;
    if (n) {
      o += "e";
      let i = !1;
      (n[0] === "-" && ((i = !0), (n = n.slice(1))),
        (n = Tn(n)),
        (n = Qt(n)),
        (o += i ? -n : +n));
    }
    return +o;
  }
  Le.s_to_num = Bo;
});
var Bn = Ie((_e) => {
  "use strict";
  Object.defineProperty(_e, "__esModule", { value: !0 });
  var Nn = Rn();
  function eu(e) {
    return "n|" + Nn.num_to_s(e);
  }
  _e.encodeNum = eu;
  function tu(e) {
    return ((e = e.replace("n|", "")), Nn.s_to_num(e));
  }
  _e.decodeNum = tu;
  function nu(e) {
    return typeof e == "number" ? e : Nn.s_to_int(e);
  }
  _e.decodeKey = nu;
  function ru(e) {
    return e ? "b|T" : "b|F";
  }
  _e.encodeBool = ru;
  function ou(e) {
    switch (e) {
      case "b|T":
        return !0;
      case "b|F":
        return !1;
    }
    return !!e;
  }
  _e.decodeBool = ou;
  function iu(e) {
    switch (e[0] + e[1]) {
      case "b|":
      case "o|":
      case "n|":
      case "a|":
      case "s|":
        e = "s|" + e;
    }
    return e;
  }
  _e.encodeStr = iu;
  function au(e) {
    return e[0] + e[1] === "s|" ? e.substr(2) : e;
  }
  _e.decodeStr = au;
});
var Oo = Ie((On) => {
  "use strict";
  Object.defineProperty(On, "__esModule", { value: !0 });
  On.config = { sort_key: !1 };
});
var Ln = Ie((Xe) => {
  "use strict";
  Object.defineProperty(Xe, "__esModule", { value: !0 });
  var su = Oo(),
    uu = wn(),
    kn = Bn(),
    pu = Rn();
  function lu(e) {
    return e.store.toArray();
  }
  Xe.memToValues = lu;
  function ko() {
    let e = [];
    return {
      forEach(t) {
        for (let r = 0; r < e.length; r++) if (t(e[r]) === "break") return;
      },
      add(t) {
        e.push(t);
      },
      toArray() {
        return e;
      },
    };
  }
  Xe.makeInMemoryStore = ko;
  function Lo() {
    let e = Object.create(null),
      t = Object.create(null);
    return {
      getValue(r) {
        return e[r];
      },
      getSchema(r) {
        return t[r];
      },
      forEachValue(r) {
        for (let [n, o] of Object.entries(e)) if (r(n, o) === "break") return;
      },
      forEachSchema(r) {
        for (let [n, o] of Object.entries(t)) if (r(n, o) === "break") return;
      },
      setValue(r, n) {
        e[r] = n;
      },
      setSchema(r, n) {
        t[r] = n;
      },
      hasValue(r) {
        return r in e;
      },
      hasSchema(r) {
        return r in t;
      },
    };
  }
  Xe.makeInMemoryCache = Lo;
  function cu() {
    return { store: ko(), cache: Lo(), keyCount: 0 };
  }
  Xe.makeInMemoryMemory = cu;
  function He(e, t) {
    if (e.cache.hasValue(t)) return e.cache.getValue(t);
    let r = e.keyCount++,
      n = pu.num_to_s(r);
    return (e.store.add(t), e.cache.setValue(t, n), n);
  }
  function mu(e, t) {
    su.config.sort_key && t.sort();
    let r = t.join(",");
    if (e.cache.hasSchema(r)) return e.cache.getSchema(r);
    let n = Tt(e, t, void 0);
    return (e.cache.setSchema(r, n), n);
  }
  function Tt(e, t, r) {
    if (t === null) return "";
    switch (typeof t) {
      case "undefined":
        if (Array.isArray(r)) return Tt(e, null, r);
        break;
      case "object":
        if (t === null) return He(e, null);
        if (Array.isArray(t)) {
          let n = "a";
          for (let o = 0; o < t.length; o++) {
            let i = t[o],
              a = i === null ? "_" : Tt(e, i, t);
            n += "|" + a;
          }
          return (n === "a" && (n = "a|"), He(e, n));
        } else {
          let n = Object.keys(t);
          if (n.length === 0) return He(e, "o|");
          let o = "o",
            i = mu(e, n);
          o += "|" + i;
          for (let a of n) {
            let s = t[a],
              u = Tt(e, s, t);
            o += "|" + u;
          }
          return He(e, o);
        }
      case "boolean":
        return He(e, kn.encodeBool(t));
      case "number":
        return He(e, kn.encodeNum(t));
      case "string":
        return He(e, kn.encodeStr(t));
    }
    return uu.throwUnknownDataType(t);
  }
  Xe.addValue = Tt;
});
var jn = Ie((vt) => {
  "use strict";
  Object.defineProperty(vt, "__esModule", { value: !0 });
  var fu = wn(),
    Wt = Bn(),
    _n = Ln();
  function du(e) {
    let t = _n.makeInMemoryMemory(),
      r = _n.addValue(t, e, void 0);
    return [_n.memToValues(t), r];
  }
  vt.compress = du;
  function gu(e, t) {
    if (t === "o|") return {};
    let r = {},
      n = t.split("|"),
      o = n[1],
      i = bt(e, o),
      a = n.length;
    a - 2 === 1 && !Array.isArray(i) && (i = [i]);
    for (let s = 2; s < a; s++) {
      let u = i[s - 2],
        p = n[s];
      ((p = bt(e, p)), (r[u] = p));
    }
    return r;
  }
  function Du(e, t) {
    if (t === "a|") return [];
    let r = t.split("|"),
      n = r.length - 1,
      o = new Array(n);
    for (let i = 0; i < n; i++) {
      let a = r[i + 1];
      ((a = bt(e, a)), (o[i] = a));
    }
    return o;
  }
  function bt(e, t) {
    if (t === "" || t === "_") return null;
    let r = Wt.decodeKey(t),
      n = e[r];
    if (n === null) return n;
    switch (typeof n) {
      case "undefined":
        return n;
      case "number":
        return n;
      case "string":
        switch (n[0] + n[1]) {
          case "b|":
            return Wt.decodeBool(n);
          case "o|":
            return gu(e, n);
          case "n|":
            return Wt.decodeNum(n);
          case "a|":
            return Du(e, n);
          default:
            return Wt.decodeStr(n);
        }
    }
    return fu.throwUnknownDataType(n);
  }
  vt.decode = bt;
  function Cu(e) {
    let [t, r] = e;
    return bt(t, r);
  }
  vt.decompress = Cu;
});
var jo = Ie((Yt) => {
  "use strict";
  Object.defineProperty(Yt, "__esModule", { value: !0 });
  function xu(e) {
    for (let t in e) e[t] === void 0 && delete e[t];
  }
  Yt.trimUndefined = xu;
  function hu(e) {
    _o(e, new Set());
  }
  Yt.trimUndefinedRecursively = hu;
  function _o(e, t) {
    t.add(e);
    for (let r in e)
      if (e[r] === void 0) delete e[r];
      else {
        let n = e[r];
        n && typeof n == "object" && !t.has(n) && _o(n, t);
      }
  }
});
var Ko = Ie((Ue) => {
  "use strict";
  Object.defineProperty(Ue, "__esModule", { value: !0 });
  var Vo = jn();
  Ue.compress = Vo.compress;
  Ue.decompress = Vo.decompress;
  var Eu = jn();
  Ue.decode = Eu.decode;
  var Su = Ln();
  Ue.addValue = Su.addValue;
  var $o = jo();
  Ue.trimUndefined = $o.trimUndefined;
  Ue.trimUndefinedRecursively = $o.trimUndefinedRecursively;
});
function re(e) {
  let t = e.join(e.getAppRootDir(), "tsconfig.json");
  return e.exists(t);
}
var fi = ["node_modules", "dist", "build", "public"];
async function ae(e, t) {
  async function r(o, i) {
    if (i > 10) return;
    let a = await e.readdir(o);
    for (let s of a) {
      if (fi.includes(s)) continue;
      let u = e.join(o, s),
        p = await e.stat(u);
      if (p) {
        if (p.isFile() && s.startsWith("khulnasoft-registry.")) return u;
        if (p.isDirectory()) {
          let m = await r(u, i + 1);
          if (m) return m;
        }
      }
    }
  }
  let n = await r(e.getAppRootDir(), 0);
  if (!n) {
    let i = `khulnasoft-registry.${(await re(e)) ? "ts" : "js"}`;
    return e.join(t, i);
  }
  return n;
}
async function ct(e, t) {
  let r = e.resolve("/");
  for (let n = 0; n < 20; n++) {
    let o = e.join(t, "package.json"),
      i = await e.readFile(o);
    if (i) return JSON.parse(i);
    if (t === r) break;
    t = e.dirname(t);
  }
  return null;
}
async function zn(e, t) {
  for (let r = 0; r < 20; r++) {
    let n = e.dirname(t),
      o = e.join(n, "node_modules");
    if (await e.exists(o)) return o;
    if (t === e.getAppRootDir()) break;
    t = e.dirname(t);
  }
  return e.join(e.getAppRootDir(), "node_modules");
}
async function mt(e, t, r) {
  let n = await e.readdir(t);
  return n.includes(r)
    ? e.join(t, r)
    : (
        await Promise.all(
          n.map(async (i) => {
            if (i.startsWith(".") || i === "node_modules") return;
            let a = e.join(t, i);
            if ((await e.stat(a)).isDirectory()) {
              let u = await mt(e, a, r);
              if (u) return u;
            }
          }),
        )
      ).find((i) => typeof i == "string");
}
var Wn = Un(Jn(), 1);
function ge(e) {
  return e.endsWith(".mapper.tsx") || e.endsWith(".mapper.jsx");
}
function B(e, t, r) {
  ((t = ce(t)), (r = ce(r)), (t = e.dirname(t)));
  let n = e.basename(r, e.extname(r));
  r = e.dirname(r);
  let o;
  return (
    n === "index" ? (o = e.relative(t, r)) : (o = e.relative(t, e.join(r, n))),
    (o = ce(e.normalize(o))),
    o.startsWith(".") || (o = "./" + o),
    o
  );
}
function ce(e) {
  return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
function qe(e, t) {
  let r = e.extname(t),
    n = e.basename(t, r).split(/[\/\\]/),
    o = n[n.length - 1];
  return Qn(o === "index" ? e.basename(e.dirname(t)) : o);
}
function Qn(e) {
  return K(e).replace(/ /g, "");
}
function se(e, t) {
  let r = e.extname(t),
    n = ce(e.basename(t, r)).split("/").pop();
  return K(n === "index" ? e.basename(e.dirname(t)) : n);
}
function V(e, t) {
  let r = ce(e.relative(e.getAppRootDir(), t));
  ((r = r
    .split("/")
    .filter((o) => o !== "." && o !== ".." && o !== "")
    .join("/")),
    r.endsWith(".tsx") || r.endsWith(".jsx")
      ? (r = r.slice(0, -4))
      : (r.endsWith(".ts") || r.endsWith(".js")) && (r = r.slice(0, -3)));
  let n = e.getFrameworks();
  return (
    r.startsWith("src/") && (r = r.slice(4)),
    n.some((o) => o.name.includes("next")) ? "@/" + r : "~/" + r
  );
}
function k(e, t) {
  let r = t,
    n = [];
  for (let o = 0; o < 2; o++) {
    let i = e.basename(r);
    if (!i || i === "components") break;
    (n.unshift(i), (r = e.dirname(r)));
  }
  return n.join("/");
}
function K(e) {
  for (
    e = e
      .replace(/([A-Z])/g, " $1")
      .replace(/\./g, " ")
      .replace(/_/g, " ")
      .replace(/-/g, " ")
      .replace(/\s/g, " ")
      .trim();
    e.includes("  ");
  )
    e = e.replace(/  /g, " ");
  return e
    .split(" ")
    .map((t) => (t.length > 2 ? t[0].toUpperCase() + t.slice(1) : t))
    .join("")
    .trim();
}
function te(e) {
  return e.sort((t, r) =>
    t.name.toLocaleLowerCase().localeCompare(r.name.toLocaleLowerCase()),
  );
}
async function $(e, t, r, n) {
  if (typeof r != "string" || r === "")
    throw new Error(
      `getComponentId(), exportName must be a non-empty string, received: ${r}, ${t}`,
    );
  return (
    n && (t = n),
    (t = e.normalize(t)),
    (await e.hash(t + "#" + r)).substring(0, 8)
  );
}
function ft(e) {
  return typeof e == "number";
}
function Ze(e) {
  return typeof e == "boolean";
}
function Z(e) {
  return typeof e == "string";
}
function et(e) {
  return typeof e == "string" ? /^[A-Z][A-Za-z0-9]*$/.test(e) : !1;
}
function oe(e) {
  return JSON.parse(JSON.stringify(e));
}
function It(e, t, r) {
  for (let n of t) if (e.dirname(r).includes(n)) return !0;
  return !1;
}
function Yn() {
  try {
    let e = (0, Wn.default)();
    if (e?.name) return e.name;
  } catch {}
  return "npm";
}
async function Je(e) {
  let t = [],
    r = await ct(e, e.getRepoRootDir());
  if (r) {
    let n = await Xn(r, e);
    t.push(...n);
  }
  return t;
}
async function Hn(e) {
  let t = await ct(e, e.getRepoRootDir());
  return t?.scripts?.dev ? t.scripts.dev.includes("--turbopack") : !1;
}
async function Xn(e, t) {
  let r = [];
  if (e && typeof e == "object") {
    let n = new Set(Object.keys({ ...e.dependencies, ...e.devDependencies }));
    for (let o of gi)
      if (n.has(o) && !r.some((i) => i.name === o)) {
        let i = { name: o };
        (Gn.has(o) && (i.version = await Gn.get(o)(t)), r.push(i));
      }
  }
  return r;
}
function Xt(e) {
  let t = parseInt(e);
  return Number.isNaN(t) ? void 0 : t;
}
var Gn = new Map([
    [
      "next",
      async (e) => {
        if (!e.spawnSync) return;
        let t = Yn(),
          r = t === "npm" ? "npx" : t,
          { stdout: n } = e.spawnSync(r, ["next", "-v"], { encoding: "utf8" });
        if (!n) return;
        let o = n.match(/(Next.js v)([\d.]+)/g);
        if (!o) return;
        let i = o[0].split("Next.js v")[1],
          [a, s, u] = i.split(".");
        return { major: Xt(a), minor: Xt(s), patch: Xt(u) };
      },
    ],
  ]),
  gi = [
    "@shopify/remix-oxygen",
    "@shopify/hydrogen",
    "@khulnasoft.com/qwik-city",
    "@remix-run/react",
    "@sveltejs/kit",
    "astro",
    "gatsby",
    "next",
    "nuxt",
    "@khulnasoft.com/qwik",
    "@angular/core",
    "react",
    "solid-js",
    "svelte",
    "vue",
  ];
async function De(e) {
  let t = Zn(e),
    r = await e.readFile(t);
  return typeof r == "string" ? JSON.parse(r) : {};
}
async function Ce(e, t) {
  t = typeof t == "object" && t != null ? t : {};
  let r = Zn(e);
  await e.writeFile(r, JSON.stringify(t ?? {}, null, 2));
}
function Zn(e) {
  let t = e.getAppRootDir();
  return e.join(t, "node_modules", ".khulnasoft", "khulnasoft-cache.json");
}
async function je(e, t, r) {
  let n = { envKey: r, envValue: null, file: "" };
  for (let o of t) {
    let i = e.join(e.getAppRootDir(), o),
      a = await Di(e, i);
    if (a) {
      let s = a[r];
      if (typeof s == "string" && s.length > 0 && s !== "YOUR_API_KEY")
        return ((n.envValue = s), (n.file = i), n);
    }
  }
  return ((n.file = e.join(e.getAppRootDir(), t[t.length - 1])), n);
}
async function Di(e, t) {
  let r = await e.readFile(t);
  return typeof r == "string" ? er(r) : null;
}
function er(e) {
  let t = {},
    r = e.replace(
      /\r\n?/gm,
      `
`,
    ),
    n;
  for (; (n = Ci.exec(r)) != null; ) {
    let o = n[1],
      i = n[2] || "";
    i = i.trim();
    let a = i[0];
    ((i = i.replace(/^(['"`])([\s\S]*)\1$/gm, "$2")),
      a === '"' &&
        ((i = i.replace(
          /\\n/g,
          `
`,
        )),
        (i = i.replace(/\\r/g, "\r"))),
      (t[o] = i));
  }
  return t;
}
var Ci =
  /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
async function Ve(e, t, r, n) {
  let o = "# https://www.khulnasoft.com/c/docs/using-your-api-key",
    i = await e.readFile(t);
  if (i)
    if (i.includes(r))
      if (i.includes(n)) e.debug(`"${r}" with "${n}" already set in ${t}`);
      else
        return (
          e.debug(`Replace "${r}" in ${t}`),
          (i = i.replace(new RegExp(`${r}=.*`), `${r}=${n}`)),
          await e.writeFile(t, i),
          "update"
        );
    else
      return (
        e.debug(`Append "${r}" to ${t}`),
        (i += `

${o}
${r}=${n}

`),
        await e.writeFile(t, i),
        "update"
      );
  else
    return (
      e.debug(`Creating new .env file with "${r}" at ${t}`),
      (i = [o, `${r}=${n}`, ""].join(`
`)),
      await e.writeFile(t, i),
      "create"
    );
  return null;
}
async function dt(e) {
  return await je(
    e,
    [
      ".env.local",
      ".env.development.local",
      ".env.production.local",
      ".env.development",
      ".env.production",
      ".env",
    ],
    xe,
  );
}
async function tr(e, t) {
  let r = await dt(e),
    n = await Ve(e, r.file, r.envKey, t);
  return { ...r, modifiedType: n };
}
var xe = "NEXT_PUBLIC_KHULNASOFT_API_KEY";
var w = { gen1: "Gen 1", gen2: "Gen 2" };
function I(e, t = "") {
  return e.ts.createSourceFile(
    "module.tsx",
    typeof t == "string" ? t : "",
    e.ts.ScriptTarget.Latest,
    void 0,
  );
}
function Rt(e, t = "") {
  let r = I(e, t?.trim());
  if (r.statements.length === 0)
    throw new Error(`No statements found in code: ${t}`);
  return r.statements[0];
}
function _(e, t, r) {
  if (t) {
    let n = e.ts.createPrinter({
      newLine: e.ts.NewLineKind.LineFeed,
      removeComments: r,
    });
    return e.ts.isSourceFile(t)
      ? n.printFile(t).trim() +
          `
`
      : n
          .printNode(
            e.ts.EmitHint.Unspecified,
            t,
            e.ts.createSourceFile("module.tsx", "", e.ts.ScriptTarget.Latest),
          )
          .trim() +
          `
`;
  }
  return "";
}
function tt(e, t, r, n, o = !0) {
  let i = t.properties.filter((s) => e.ts.isPropertyAssignment(s)),
    a = xi(e, t, r);
  return a > -1
    ? n == null && o
      ? e.ts.factory.updateObjectLiteralExpression(
          t,
          i.filter((s, u) => u !== a),
        )
      : ((i[a] = e.ts.factory.updatePropertyAssignment(
          i[a],
          i[a].name,
          gt(e, n),
        )),
        e.ts.factory.updateObjectLiteralExpression(t, i))
    : (n != null && i.push(e.ts.factory.createPropertyAssignment(r, gt(e, n))),
      e.ts.factory.updateObjectLiteralExpression(t, i));
}
function xi(e, t, r) {
  return t.properties.findIndex((n) => N(e, n) === r);
}
function Dt(e, t) {
  switch (t.kind) {
    case e.ts.SyntaxKind.ArrayLiteralExpression:
      return Ei(e, t);
    case e.ts.SyntaxKind.ObjectLiteralExpression:
      return hi(e, t);
    case e.ts.SyntaxKind.StringLiteral:
      return t.text;
    case e.ts.SyntaxKind.NumericLiteral:
      return Number(t.text);
    case e.ts.SyntaxKind.NoSubstitutionTemplateLiteral:
      return t.text;
    case e.ts.SyntaxKind.TrueKeyword:
      return !0;
    case e.ts.SyntaxKind.FalseKeyword:
      return !1;
    case e.ts.SyntaxKind.Identifier:
      switch (t.escapedText) {
        case "undefined":
          return;
        case "null":
          return null;
        case "String":
          return String;
        case "Number":
          return Number;
        case "Boolean":
          return Boolean;
        case "NaN":
          return NaN;
      }
  }
}
function hi(e, t) {
  let r = {};
  if (t && e.ts.isObjectLiteralExpression(t)) {
    for (let n of t.properties)
      if (e.ts.isPropertyAssignment(n)) {
        let o = N(e, n);
        o && (r[o] = Dt(e, n.initializer));
      }
  }
  return r;
}
function Ei(e, t) {
  return t && e.ts.isArrayLiteralExpression(t)
    ? t.elements.map((r) => Dt(e, r))
    : [];
}
function N(e, t) {
  if (t && e.ts.isPropertyAssignment(t)) {
    let r = t.name;
    switch (r.kind) {
      case e.ts.SyntaxKind.Identifier:
        return r.text;
      case e.ts.SyntaxKind.StringLiteral:
      case e.ts.SyntaxKind.NumericLiteral:
        return r.text;
      case e.ts.SyntaxKind.ComputedPropertyName:
        let n = r.expression;
        if (e.ts.isStringLiteral(n) || e.ts.isNumericLiteral(n))
          return r.expression.text;
    }
  }
}
function gt(e, t) {
  return Zt(e, t, new WeakSet());
}
function Zt(e, t, r) {
  return t === void 0
    ? e.ts.factory.createIdentifier("undefined")
    : t === null
      ? e.ts.factory.createIdentifier("null")
      : typeof t == "string"
        ? e.ts.factory.createStringLiteral(t)
        : typeof t == "number"
          ? isNaN(t)
            ? e.ts.factory.createIdentifier("NaN")
            : e.ts.factory.createNumericLiteral(t)
          : t === !0
            ? e.ts.factory.createTrue()
            : t === !1
              ? e.ts.factory.createFalse()
              : t === String
                ? e.ts.factory.createIdentifier("String")
                : t === Number
                  ? e.ts.factory.createIdentifier("Number")
                  : t === Boolean
                    ? e.ts.factory.createIdentifier("Boolean")
                    : Array.isArray(t)
                      ? Si(e, t, r)
                      : typeof t == "object"
                        ? Ai(e, t, r)
                        : e.ts.factory.createIdentifier(t);
}
function Si(e, t, r) {
  let n = t.map((o) => Zt(e, o, r));
  return e.ts.factory.createArrayLiteralExpression(n, !0);
}
function Ai(e, t, r) {
  if (r.has(t)) return e.ts.factory.createIdentifier("undefined");
  r.add(t);
  let n = Object.keys(t).map((o) =>
    e.ts.factory.createPropertyAssignment(o, Zt(e, t[o], r)),
  );
  return e.ts.factory.createObjectLiteralExpression(n, !0);
}
function Qe(e, t, r) {
  let n = [];
  if (!r) return n;
  let o = null;
  if (
    e.ts.isArrowFunction(r) ||
    e.ts.isFunctionExpression(r) ||
    e.ts.isFunctionDeclaration(r)
  ) {
    let i = r.parameters;
    if (i.length > 0) {
      let a = i[0],
        s = t.getTypeAtLocation(a);
      s.aliasTypeArguments && s.aliasTypeArguments.length > 0
        ? (o = s.aliasTypeArguments[0].getProperties())
        : (o = s.getProperties());
    }
  } else if (e.ts.isIdentifier(r)) {
    let i = t.getTypeAtLocation(r),
      a = i.symbol?.valueDeclaration;
    if (a && e.ts.isClassDeclaration(a)) {
      let u = a.heritageClauses?.find(
        (p) => p.token === e.ts.SyntaxKind.ExtendsKeyword,
      )?.types;
      if (u) {
        for (let p of u)
          if (t.getSymbolAtLocation(p.expression)?.name === "Component") {
            if (e.ts.isExpressionWithTypeArguments(p)) {
              let f = p.typeArguments;
              if (f) {
                let c = f[0];
                o = t.getTypeFromTypeNode(c).getProperties();
              }
            }
            break;
          }
      }
    }
    if (!o) {
      let s = i.getCallSignatures();
      if (s.length > 0) {
        let u = s[0].getParameters();
        u.length > 0 &&
          (o = t.getTypeOfSymbolAtLocation(u[0], r).getProperties());
      }
    }
  } else if (e.ts.isExportSpecifier(r)) {
    let i = t.getSymbolAtLocation(r.name);
    if (i) {
      let s = t.getTypeOfSymbolAtLocation(i, r).getCallSignatures();
      if (s.length > 0) {
        let u = s[0].getParameters();
        u.length > 0 &&
          (o = t.getTypeOfSymbolAtLocation(u[0], r).getProperties());
      }
    }
  }
  if (o)
    for (let i of o) {
      let a = Fi(e, t, i);
      a && n.push(a);
    }
  return ((n = n.filter(rr)), n.length > 0 ? n : Pi(e, r));
}
function Fi(e, t, r) {
  let n = r.valueDeclaration,
    o = r.getName();
  if ((n || (n = r.getDeclarations()?.[0]), n && e.ts.isPropertySignature(n))) {
    if (
      o !== "children" &&
      n.getSourceFile().fileName.includes("node_modules/@types/")
    )
      return null;
    let i = "string",
      a;
    if (n?.type) {
      let u = t.getTypeFromTypeNode(n.type),
        p = t.typeToString(u),
        m = en(p);
      (m.knownType
        ? (i = m.khulnasoftType)
        : wi(p) || u.flags & e.ts.TypeFlags.StringLike
          ? (i = "string")
          : u.flags & e.ts.TypeFlags.NumberLike
            ? (i = "number")
            : u.flags & e.ts.TypeFlags.IndexedAccess
              ? (i = "list")
              : u.flags & e.ts.TypeFlags.Object ||
                  (u.isUnion() &&
                    u.types.every((f) => f.flags & e.ts.TypeFlags.Object)) ||
                  (u.isIntersection() &&
                    u.types.some((f) => f.flags & e.ts.TypeFlags.Object))
                ? (i = "object")
                : (i = "string"),
        p !== i && (a = p));
    }
    let s = { name: o, type: i, isRegistered: !1 };
    if (a && n.type) {
      let u = Ii(e, t, t.getTypeFromTypeNode(n.type));
      ((s.meta = s.meta || {}),
        u && u.length > 0 && s.type === "string" && u.every(bi)
          ? (s.enum = u.map(vi))
          : (s.meta.ts = a));
    }
    return (n.questionToken || (s.required = !0), s);
  }
  return null;
}
function Pi(e, t) {
  let r = [],
    n = e.ts.getJSDocCommentsAndTags(t);
  for (let o of n)
    if (!(!e.ts.isJSDoc(o) || !o.tags))
      for (let i of o.tags) {
        if (!e.ts.isJSDocParameterTag(i) || i.tagName.text !== "param")
          continue;
        let s = i.typeExpression?.type;
        if (!s || !e.ts.isJSDocTypeLiteral(s)) continue;
        let u = s.jsDocPropertyTags;
        if (u)
          for (let p of u) {
            if (!e.ts.isJSDocPropertyLikeTag(p)) continue;
            let m = p.name;
            if (!e.ts.isQualifiedName(m)) continue;
            let f = p.typeExpression;
            if (!f) continue;
            let c = "";
            switch (f.type.kind) {
              case e.ts.SyntaxKind.StringKeyword: {
                c = "string";
                break;
              }
              case e.ts.SyntaxKind.NumberKeyword: {
                c = "number";
                break;
              }
              case e.ts.SyntaxKind.BooleanKeyword: {
                c = "boolean";
                break;
              }
              default:
                continue;
            }
            let C = { name: m.right.text, type: c, isRegistered: !1 };
            r.push(C);
          }
      }
  return r.filter(rr);
}
var yi = [
  "ClassicComponent",
  "FunctionComponent",
  "IntrinsicElements",
  "JSX",
  "ReactNode",
  "ReactElement",
  "ReactPortal",
];
function wi(e) {
  return typeof e != "string" ? !1 : !!yi.some((t) => e.includes(t));
}
function en(e) {
  return typeof e == "string" && ((e = e.trim()), Ti.some((t) => t.value === e))
    ? { khulnasoftType: e, knownType: !0 }
    : { khulnasoftType: "string", knownType: !1 };
}
var Ti = [
  { value: "boolean", text: "boolean" },
  { value: "color", text: "color (provides a color in hex or rgb)" },
  { value: "date", text: "date (same format as the Date constructor)" },
  { value: "email", text: "email" },
  { value: "file", text: "file (uploads a file and provides a url)" },
  { value: "list", text: "list (collection of items)" },
  { value: "longText", text: "longText (multiline text editor)" },
  { value: "number", text: "number" },
  { value: "object", text: "object (set of specific names and values)" },
  { value: "richText", text: "richText (provides value as html)" },
  { value: "string", text: "string" },
];
function bi(e) {
  return /^['"].*['"]$/.test(e);
}
function vi(e) {
  return (e.startsWith('"') || e.startsWith("'")) &&
    (e.endsWith('"') || e.endsWith("'"))
    ? e.slice(1, -1)
    : e;
}
var Ii = (e, t, r) => {
    let n = new Set();
    nr(e, t, r, n);
    let o = n.delete("true"),
      i = n.delete("false");
    (o || i) && n.add("boolean");
    let a = Array.from(n.keys()).sort();
    if (
      (a.length > 1 &&
        (a = a.map((s) => (s.indexOf("=>") >= 0 ? `(${s})` : s))),
      !(a.length > 20))
    )
      return a;
  },
  Ri = (e, t, r) => {
    let n =
      e.ts.TypeFormatFlags.InElementType | e.ts.TypeFormatFlags.NoTruncation;
    return t.typeToString(r, void 0, n);
  },
  nr = (e, t, r, n) => {
    if (r.isUnion())
      r.types.forEach((o) => {
        nr(e, t, o, n);
      });
    else if (r.isLiteral()) {
      let o = Ri(e, t, r);
      n.add(o);
    }
  };
function rr(e) {
  let t = e?.name;
  if (
    typeof t != "string" ||
    t === "" ||
    t.startsWith("aria") ||
    t.startsWith("data-")
  )
    return !1;
  if (t.startsWith("on") && t.length > 2) {
    let r = t.charAt(2);
    if (r.toUpperCase() === r) return !1;
  }
  return !Ni.has(t.toLowerCase());
}
var Ni = new Set(
  [
    "about",
    "accessKey",
    "accessKeyLabel",
    "asChild",
    "autoCapitalize",
    "autoCorrect",
    "autoFocus",
    "autoSave",
    "blur",
    "contentEditable",
    "contextMenu",
    "dangerouslySetInnerHTML",
    "datatype",
    "defaultChecked",
    "defaultValue",
    "dir",
    "draggable",
    "enterKeyHint",
    "focus",
    "form",
    "formAction",
    "formEncType",
    "formMethod",
    "formNoValidate",
    "formTarget",
    "inlist",
    "innerText",
    "inputMode",
    "is",
    "isContentEditable",
    "itemID",
    "itemProp",
    "itemRef",
    "itemScope",
    "itemType",
    "lang",
    "nonce",
    "offsetHeight",
    "offsetLeft",
    "offsetTop",
    "offsetWidth",
    "outerText",
    "prefix",
    "property",
    "radioGroup",
    "rel",
    "resource",
    "results",
    "rev",
    "role",
    "security",
    "slot",
    "spellCheck",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "tabIndex",
    "translate",
    "typeof",
    "unselectable",
    "vocab",
  ].map((e) => e.toLowerCase()),
);
function ne(e, t, r) {
  for (let n of r.properties) {
    if (!e.ts.isPropertyAssignment(n)) continue;
    let o = N(e, n);
    if (o === "name" && e.ts.isStringLiteral(n.initializer)) {
      t.name = n.initializer.text;
      continue;
    }
    if (o === "description" && e.ts.isStringLiteral(n.initializer)) {
      t.description = n.initializer.text;
      continue;
    }
    if (o === "image" && e.ts.isStringLiteral(n.initializer)) {
      t.image = n.initializer.text;
      continue;
    }
    if (o === "inputs" && e.ts.isArrayLiteralExpression(n.initializer)) {
      let i = Bi(e, n.initializer);
      ie(t, i);
      continue;
    }
    if (o === "meta" && e.ts.isObjectLiteralExpression(n.initializer)) {
      let i = Dt(e, n.initializer);
      i && typeof i == "object" && (t.meta = i);
      continue;
    }
  }
  return t;
}
function Bi(e, t) {
  let r = [];
  for (let n of t.elements)
    e.ts.isObjectLiteralExpression(n) && r.push(Oi(e, n));
  return r;
}
function Oi(e, t) {
  let r = Dt(e, t),
    n = Ki(r);
  return ((n.isRegistered = !0), n);
}
function Q(e, t, r) {
  let n = Li(r);
  return (
    (t = tt(e, t, "name", n.name, !1)),
    (t = tt(e, t, "description", n.description)),
    (t = tt(e, t, "image", n.image)),
    (t = tt(e, t, "meta", n.meta)),
    (t = ki(e, t, n)),
    Mi(e, t)
  );
}
function ki(e, t, r) {
  let n = null,
    o = t.properties.filter(
      (s) => e.ts.isPropertyAssignment(s) && e.ts.isIdentifier(s.name),
    ),
    i = o.findIndex(
      (s) => e.ts.isIdentifier(s.name) && s.name.text === "inputs",
    ),
    a = [...(r.inputs ?? [])];
  if (i > -1) {
    if (a.length === 0) return tt(e, t, "inputs", null);
    let s = o[i];
    e.ts.isPropertyAssignment(s) &&
      e.ts.isArrayLiteralExpression(s.initializer) &&
      (n = s.initializer);
  }
  return a.length === 0
    ? t
    : ((n = ji(e, n || e.ts.factory.createArrayLiteralExpression(), a)),
      i > -1
        ? (o[i] = e.ts.factory.updatePropertyAssignment(o[i], o[i].name, n))
        : o.push(e.ts.factory.createPropertyAssignment("inputs", n)),
      e.ts.factory.updateObjectLiteralExpression(t, o));
}
function Li(e) {
  return {
    name: e.name,
    description: e.description,
    image: e.image,
    inputs: (e.inputs || []).filter((r) => r.isRegistered).map(_i),
    ...(e.meta ? { meta: { ...e.meta } } : {}),
  };
}
function _i(e) {
  let t = { name: e.name, type: e.type };
  return (
    (Z(e.defaultValue) || ft(e.defaultValue) || Ze(e.defaultValue)) &&
      (t.defaultValue = e.defaultValue),
    Z(e.friendlyName) && (t.friendlyName = e.friendlyName),
    Z(e.helperText) && (t.helperText = e.helperText),
    e.required === !0 && (t.required = !0),
    Array.isArray(e.enum) && (t.enum = e.enum),
    e.hideFromUI === !0 && (t.hideFromUI = !0),
    typeof e.meta == "object" &&
      e.meta != null &&
      Object.keys(e.meta).length > 0 &&
      (t.meta = e.meta),
    t
  );
}
function ji(e, t, r) {
  let n = t.elements.filter((o) => {
    if (!e.ts.isObjectLiteralExpression(o)) return !1;
    let i = o.properties.find((s) => N(e, s) === "name");
    if (!i) return !1;
    let a = i.initializer;
    return e.ts.isStringLiteral(a) ? r.some((s) => s.name === a.text) : !1;
  });
  for (let o of r) n = Vi(e, n, o);
  return (
    n.sort((o, i) => {
      let a = o.properties.find((c) => N(e, c) === "name"),
        s = i.properties.find((c) => N(e, c) === "name"),
        u = a?.initializer,
        p = s?.initializer,
        m = u && e.ts.isStringLiteral(u) ? u.text : "zz",
        f = p && e.ts.isStringLiteral(p) ? p.text : "zz";
      return m.toLowerCase().localeCompare(f.toLowerCase());
    }),
    e.ts.factory.updateArrayLiteralExpression(t, n)
  );
}
function Vi(e, t, r) {
  let n = t.findIndex((o) =>
    o.properties.some((i) => {
      let a = N(e, i);
      return (
        e.ts.isPropertyAssignment(i) &&
        a === "name" &&
        e.ts.isStringLiteral(i.initializer) &&
        i.initializer.text === r.name
      );
    }),
  );
  if (n > -1) t[n] = or(e, t[n], r);
  else {
    let o = or(
      e,
      e.ts.factory.createObjectLiteralExpression(
        [
          e.ts.factory.createPropertyAssignment(
            "name",
            e.ts.factory.createStringLiteral(r.name),
          ),
        ],
        !0,
      ),
      r,
    );
    t.push(o);
  }
  return t;
}
function or(e, t, r) {
  let n = t.properties.filter((i) => e.ts.isPropertyAssignment(i)),
    o = Object.keys(r).filter((i) => i !== "isRegistered");
  for (let i of o) n = $i(e, n, r, i);
  return (
    (n = Ui(
      e,
      n.filter((i) => {
        let a = N(e, i);
        return o.includes(a);
      }),
    )),
    e.ts.factory.updateObjectLiteralExpression(t, n)
  );
}
function $i(e, t, r, n) {
  let o = t.findIndex((i) => e.ts.isIdentifier(i.name) && i.name.text === n);
  return (
    o > -1
      ? (t[o] = e.ts.factory.updatePropertyAssignment(
          t[o],
          t[o].name,
          gt(e, r[n]),
        ))
      : t.push(e.ts.factory.createPropertyAssignment(n, gt(e, r[n]))),
    t
  );
}
function ie(e, t) {
  for (let r of t) {
    let n = e.inputs.findIndex((o) => o.name === r.name);
    n > -1
      ? (r.isRegistered || !e.inputs[n].isRegistered) && (e.inputs[n] = r)
      : e.inputs.push(r);
  }
  e.acceptsChildren = tn(e);
}
function Ki(e) {
  let t = en(e.type),
    r = { name: e.name.trim(), type: t.khulnasoftType };
  return (
    Z(e.friendlyName) &&
      e.friendlyName.trim() !== e.name.trim() &&
      (r.friendlyName = e.friendlyName),
    (Z(e.defaultValue) || ft(e.defaultValue) || Ze(e.defaultValue)) &&
      (r.defaultValue = e.defaultValue),
    Z(e.helperText) && (r.helperText = e.helperText),
    Ze(e.required) && (r.required = e.required),
    typeof e.meta == "object" &&
      e.meta != null &&
      Object.keys(e.meta).length > 0 &&
      (r.meta = e.meta),
    Array.isArray(e.enum) && e.enum.length > 0 && (r.enum = e.enum),
    e.hideFromUI === !0 && (r.hideFromUI = !0),
    nn(r)
  );
}
function tn(e) {
  let t = e.inputs.some((n) => n.name === "children"),
    r = e.inputs.some((n) => n.meta?.ts === "ReactNode");
  return !!(t || r || e.acceptsChildren === !0);
}
function nn(e) {
  if (
    (e.name === "children" && ((e.hideFromUI = !0), delete e.required),
    e.type === "object" && e.defaultValue == null && (e.hideFromUI = !0),
    e.type === "list" && e.defaultValue == null && (e.hideFromUI = !0),
    e.meta)
  ) {
    let t = e.meta.ts;
    typeof t == "string" &&
      ((t = t.trim()),
      t.endsWith("ReactNode") && (t = "ReactNode"),
      (e.meta.ts = t),
      t === "ReactNode" && (e.hideFromUI = !0));
  }
  return e;
}
function Mi(e, t) {
  let r = [...t.properties].sort((n, o) => {
    let i = N(e, n) || "zz",
      a = N(e, o) || "zz";
    if (i === "inputs") return 1;
    let s = ir.indexOf(i),
      u = ir.indexOf(a);
    return s > -1
      ? u > -1 && s > u
        ? 1
        : -1
      : u > -1
        ? s > -1 && u < s
          ? -1
          : 1
        : i.localeCompare(a);
  });
  return e.ts.factory.updateObjectLiteralExpression(t, r);
}
var ir = ["component", "name", "description"];
function Ui(e, t) {
  return [...t].sort((n, o) => {
    let i = N(e, n) || "zz",
      a = N(e, o) || "zz",
      s = ar.indexOf(i),
      u = ar.indexOf(a);
    return s > -1
      ? u > -1 && s > u
        ? 1
        : -1
      : u > -1
        ? s > -1 && u < s
          ? -1
          : 1
        : i.localeCompare(a);
  });
}
var ar = ["name", "type"];
function nt(e, t) {
  for (let r of t.properties) {
    if (!e.ts.isPropertyAssignment(r) || !e.ts.isIdentifier(r.name)) continue;
    if (N(e, r) === "canHaveChildren") {
      let { initializer: o } = r;
      return o.kind === e.ts.SyntaxKind.TrueKeyword;
    }
  }
  return !1;
}
function sr(e, t) {
  let r = `Khulnasoft.registerComponent(
`;
  if (e.appDir)
    t.acceptsChildren
      ? (r += `  withChildren(${t.importName}),
`)
      : (r += `  ${t.importName},
`);
  else {
    let o = t.externalImportPath
      ? t.externalImportPath
      : B(e, e.registryPath, t.filePath);
    t.exportName === "default"
      ? t.acceptsChildren
        ? (r += `  withChildren(dynamic(() => import(${JSON.stringify(o)}))),
`)
        : (r += `  dynamic(() => import(${JSON.stringify(o)})),
`)
      : t.acceptsChildren
        ? (r += `  withChildren(dynamic(async () => (await import(${JSON.stringify(o)})).${t.exportName})),
`)
        : (r += `  dynamic(async () => (await import(${JSON.stringify(o)})).${t.exportName}),
`);
  }
  ((r += `  {
    name: "${t.name}",
  }
`),
    (r += ");"));
  let n = Rt(e, r);
  return rn(e, n, t);
}
function rn(e, t, r) {
  if (!e.ts.isExpressionStatement(t)) return t;
  let n = t.expression;
  if (!e.ts.isCallExpression(n)) return t;
  let o = [...n.arguments];
  if (o.length < 2) return t;
  r.acceptsChildren
    ? (e.ts.isCallExpression(o[0]) &&
        e.ts.isIdentifier(o[0].expression) &&
        o[0].expression.text === "withChildren") ||
      (o[0] = e.ts.factory.createCallExpression(
        e.ts.factory.createIdentifier("withChildren"),
        void 0,
        [o[0]],
      ))
    : e.ts.isCallExpression(o[0]) &&
      e.ts.isIdentifier(o[0].expression) &&
      o[0].expression.text === "withChildren" &&
      (o[0] = o[0].arguments[0]);
  let i = o[1];
  return e.ts.isObjectLiteralExpression(i)
    ? ((o[1] = Q(e, i, r)),
      e.ts.factory.updateExpressionStatement(
        t,
        e.ts.factory.updateCallExpression(n, n.expression, n.typeArguments, o),
      ))
    : t;
}
async function G(e, t, r) {
  if (!Array.isArray(t) || t.length === 0)
    throw new Error(`createTsProgram() Invalid filePaths: ${t}`);
  let n = await zn(e, t[0]),
    o = e.join(n, "typescript", "lib"),
    i = new Map(),
    a = {
      fileExists: (s) => {
        if (((s = e.normalize(s)), s.includes("node_modules"))) {
          let u = Ct.get(s);
          if (!u) {
            try {
              e.statSync(s).isFile()
                ? (u = { exists: !0, content: e.readFileSync(s) })
                : (u = { exists: !1 });
            } catch {
              u = { exists: !1 };
            }
            Ct.set(s, u);
          }
          return u.exists;
        }
        return (i.has(s) || i.set(s, e.existsSync(s)), i.get(s));
      },
      getCanonicalFileName: (s) => e.normalize(s),
      getCurrentDirectory: () => e.cwd(),
      getDefaultLibFileName: () => e.join(o, "lib.d.ts"),
      getDefaultLibLocation: () => o,
      getNewLine: () => `
`,
      getSourceFile: (s) => {
        if (((s = e.normalize(s)), s.includes("node_modules"))) {
          let p = Ct.get(s);
          if (p) return I(e, p.content);
        }
        let u = e.readFileSync(s);
        if (u == null) {
          let p = e.basename(s),
            m = e.extname(p).toLowerCase();
          if (
            s.startsWith(o) &&
            m === ".ts" &&
            ((u = pr.get(p)),
            u == null && typeof self < "u" && typeof fetch == "function")
          )
            throw new Bt(p);
        }
        return (
          s.includes("node_modules") &&
            (u
              ? Ct.set(s, { exists: !0, content: u })
              : Ct.set(s, { exists: !1 })),
          I(e, u)
        );
      },
      readFile: (s) => {
        let u = e.readFileSync(s);
        return typeof u == "string" ? u : void 0;
      },
      useCaseSensitiveFileNames: () => !1,
      writeFile: () => {},
    };
  for (;;)
    try {
      return zi(e, a, t, r);
    } catch (s) {
      if (s instanceof Bt) {
        await qi(e, s.libName);
        continue;
      }
      throw (
        console.error("createTsProgram", s),
        new Error(`createTsProgram() Could not create program for: ${t[0]}`)
      );
    }
}
function zi(e, t, r, n) {
  let o = { rootNames: [...r], options: {}, host: t },
    i = e.ts.findConfigFile(e.dirname(r[0]), (a) => e.existsSync(a));
  if (i) {
    let a = ur.get(i);
    if (!a) {
      let s = e.ts.readConfigFile(i, (u) => {
        let p = e.readFileSync(u);
        return typeof p == "string" ? p : void 0;
      });
      s.error
        ? console.error("error reading tsconfig for createTsProgram")
        : ((a = e.ts.parseJsonConfigFileContent(
            s.config,
            e.ts.sys || {
              useCaseSensitiveFileNames: !1,
              readDirectory: (p, m) => e.readdirSync(p),
              fileExists: (p) => e.existsSync(p),
              readFile: (p) => e.readFileSync(p) || void 0,
            },
            e.dirname(i),
            void 0,
            i,
          ).options),
          ur.set(i, a));
    }
    a && (o.options = oe(a));
  }
  return (
    (o.options.noEmit = !0),
    (o.options.isolatedModules = !1),
    (o.options.strict = !1),
    (o.options.jsx = e.ts.JsxEmit.Preserve),
    (o.options.allowJs = !0),
    Object.assign(o.options, n),
    e.ts.createProgram(o)
  );
}
async function rt(e, t, r) {
  r || (r = await G(e, [t]));
  let n = r.getSourceFile(t);
  if (!n) throw new Error(`getTypeChecker() Could not find source file: ${t}`);
  return { typeChecker: r.getTypeChecker(), sourceFile: n };
}
var Bt = class {
  constructor(t) {
    this.libName = t;
  }
};
async function qi(e, t) {
  let r = `https://cdn.jsdelivr.net/npm/typescript@${e.ts.version}/lib/${t}`;
  (Nt.has(t) ||
    Nt.set(
      t,
      fetch(r)
        .then((n) => n.text())
        .then((n) => {
          pr.set(t, n);
        }),
    ),
    await Nt.get(t),
    Nt.delete(t));
}
var pr = new Map(),
  Nt = new Map(),
  Ct = new Map(),
  ur = new Map();
function v(e, t, r, n = "esm") {
  return (
    Array.isArray(r.namedImports) &&
      r.namedImports.forEach((o) => {
        t = Ji(e, t, o, r.importPath, !!r.isTypeOnly, n);
      }),
    typeof r.defaultImport == "string" &&
      (t = Qi(e, t, r.defaultImport, r.importPath, n)),
    t
  );
}
function Ji(e, t, r, n, o, i) {
  return i === "cjs" ? cr(e, t, null, r, n) : lr(e, t, null, r, n, o);
}
function Qi(e, t, r, n, o) {
  return o === "cjs" ? cr(e, t, r, null, n) : lr(e, t, r, null, n, !1);
}
function lr(e, t, r, n, o, i) {
  let a = [...t.statements],
    s = 0,
    u = !1,
    p = !1;
  for (let d = 0; d < a.length; d++) {
    let C = a[d];
    if (
      !e.ts.isImportDeclaration(C) ||
      ((s = d),
      !C.moduleSpecifier || !e.ts.isStringLiteral(C.moduleSpecifier)) ||
      C.moduleSpecifier.text !== o ||
      !!C.importClause?.isTypeOnly !== i
    )
      continue;
    let l = [],
      D = C.importClause?.namedBindings;
    if (
      (D && e.ts.isNamedImports(D) && D.elements && l.push(...D.elements),
      typeof n == "string")
    ) {
      if (l.some((x) => x.name.text === n)) return t;
      (l.push(
        e.ts.factory.createImportSpecifier(
          !1,
          void 0,
          e.ts.factory.createIdentifier(n),
        ),
      ),
        l.sort((x, E) => x.name.text.localeCompare(E.name.text)),
        (u = !0));
    }
    let g = C.importClause ? C.importClause.name : void 0;
    if (typeof r == "string") {
      if (g && g.text === r) return t;
      ((g = e.ts.factory.createIdentifier(r)), (p = !0));
    }
    if (u || p)
      return (
        (a[d] = e.ts.factory.updateImportDeclaration(
          C,
          void 0,
          e.ts.factory.createImportClause(
            i,
            g,
            e.ts.factory.createNamedImports(l),
          ),
          C.moduleSpecifier,
          void 0,
        )),
        e.ts.factory.updateSourceFile(t, a)
      );
  }
  let m, f;
  (typeof r == "string" && (m = e.ts.factory.createIdentifier(r)),
    typeof n == "string" &&
      (f = e.ts.factory.createNamedImports([
        e.ts.factory.createImportSpecifier(
          !1,
          void 0,
          e.ts.factory.createIdentifier(n),
        ),
      ])));
  let c = e.ts.factory.createImportDeclaration(
    void 0,
    e.ts.factory.createImportClause(i, m, f),
    e.ts.factory.createStringLiteral(o),
  );
  return (a.splice(s, 0, c), e.ts.factory.updateSourceFile(t, a));
}
function cr(e, t, r, n, o) {
  let i = [...t.statements],
    a = 0;
  for (let s = 0; s < i.length; s++) {
    let u = i[s];
    if (e.ts.isVariableStatement(u))
      for (let p = 0; p < u.declarationList.declarations.length; p++) {
        let m = [...u.declarationList.declarations],
          f = m[p],
          c = f.initializer;
        if (!c || !e.ts.isCallExpression(c)) continue;
        let d = c.expression;
        if (
          !e.ts.isIdentifier(d) ||
          d.text !== "require" ||
          c.arguments.length !== 1
        )
          continue;
        let C = c.arguments[0];
        if (e.ts.isStringLiteral(C) && ((a = s), C.text === o)) {
          if (e.ts.isIdentifier(f.name) && typeof r == "string")
            return f.name.text === r
              ? t
              : ((m[p] = e.ts.factory.updateVariableDeclaration(
                  f,
                  e.ts.factory.createIdentifier(r),
                  f.exclamationToken,
                  f.type,
                  f.initializer,
                )),
                (i[s] = e.ts.factory.updateVariableStatement(
                  u,
                  u.modifiers,
                  e.ts.factory.updateVariableDeclarationList(
                    u.declarationList,
                    m,
                  ),
                )),
                e.ts.factory.updateSourceFile(t, i));
          if (e.ts.isObjectBindingPattern(f.name) && typeof n == "string") {
            let l = [...f.name.elements];
            return l.some((g) =>
              !e.ts.isBindingElement(g) || !e.ts.isIdentifier(g.name)
                ? !1
                : g.name.text === n,
            )
              ? t
              : (l.push(e.ts.factory.createBindingElement(void 0, void 0, n)),
                l.sort((g, x) =>
                  !e.ts.isBindingElement(g) ||
                  !e.ts.isIdentifier(g.name) ||
                  !e.ts.isBindingElement(x) ||
                  !e.ts.isIdentifier(x.name)
                    ? 0
                    : g.name.text.localeCompare(x.name.text),
                ),
                (m[p] = e.ts.factory.updateVariableDeclaration(
                  f,
                  e.ts.factory.createObjectBindingPattern(l),
                  f.exclamationToken,
                  f.type,
                  f.initializer,
                )),
                (i[s] = e.ts.factory.updateVariableStatement(
                  u,
                  u.modifiers,
                  e.ts.factory.updateVariableDeclarationList(
                    u.declarationList,
                    m,
                  ),
                )),
                e.ts.factory.updateSourceFile(t, i));
          }
        }
      }
  }
  if (typeof r == "string") {
    let s = e.ts.factory.createVariableStatement(
      void 0,
      e.ts.factory.createVariableDeclarationList(
        [
          e.ts.factory.createVariableDeclaration(
            r,
            void 0,
            void 0,
            e.ts.factory.createCallExpression(
              e.ts.factory.createIdentifier("require"),
              void 0,
              [e.ts.factory.createStringLiteral(o)],
            ),
          ),
        ],
        e.ts.NodeFlags.Const,
      ),
    );
    return (i.splice(a, 0, s), e.ts.factory.updateSourceFile(t, i));
  }
  if (typeof n == "string") {
    let s = e.ts.factory.createVariableStatement(
      void 0,
      e.ts.factory.createVariableDeclarationList(
        [
          e.ts.factory.createVariableDeclaration(
            e.ts.factory.createObjectBindingPattern([
              e.ts.factory.createBindingElement(void 0, void 0, n),
            ]),
            void 0,
            void 0,
            e.ts.factory.createCallExpression(
              e.ts.factory.createIdentifier("require"),
              void 0,
              [e.ts.factory.createStringLiteral(o)],
            ),
          ),
        ],
        e.ts.NodeFlags.Const,
      ),
    );
    return (i.splice(a, 0, s), e.ts.factory.updateSourceFile(t, i));
  }
  return t;
}
function ue(e, t, r = "esm") {
  return r === "cjs" ? Yi(e, t) : Wi(e, t);
}
function Wi(e, t) {
  let r = [];
  for (let n of t.statements) {
    if (e.ts.isExportDeclaration(n)) {
      if (n.exportClause && e.ts.isNamedExports(n.exportClause)) {
        for (let o of n.exportClause.elements)
          if (
            (n.moduleSpecifier &&
              r.push({ isDefaultExport: !1, statement: n, node: o }),
            e.ts.isIdentifier(o.name))
          ) {
            let i = o.name.text;
            for (let a of t.statements)
              if (e.ts.isVariableStatement(a))
                for (let s of a.declarationList.declarations)
                  e.ts.isIdentifier(s.name) &&
                    s.name.text === i &&
                    r.push({ isDefaultExport: !1, statement: a, node: a });
              else
                e.ts.isFunctionDeclaration(a) &&
                  a.name &&
                  a.name.text === i &&
                  r.push({ isDefaultExport: !1, statement: a, node: a });
          }
      } else
        !n.exportClause &&
          n.moduleSpecifier &&
          r.push({ isDefaultExport: !1, statement: n, node: n });
      continue;
    }
    if (e.ts.isExportAssignment(n)) {
      let o = n.flags === e.ts.NodeFlags.None,
        i = n.expression;
      if (e.ts.isIdentifier(i)) {
        let a = i.text;
        for (let s of t.statements) {
          if (e.ts.isVariableStatement(s))
            for (let u of s.declarationList.declarations)
              e.ts.isIdentifier(u.name) &&
                u.name.text === a &&
                r.push({ isDefaultExport: o, statement: s, node: s });
          e.ts.isFunctionDeclaration(s) &&
            s.name?.text === a &&
            r.push({ isDefaultExport: o, statement: s, node: s });
        }
      } else
        (e.ts.isArrowFunction(i) ||
          e.ts.isCallExpression(i) ||
          e.ts.isFunctionDeclaration(i) ||
          e.ts.isObjectLiteralExpression(i)) &&
          r.push({ isDefaultExport: o, statement: n, node: i });
      continue;
    }
    if (
      (e.ts.isVariableStatement(n) || e.ts.isFunctionDeclaration(n)) &&
      n.modifiers &&
      n.modifiers.some((o) => o.kind === e.ts.SyntaxKind.ExportKeyword)
    ) {
      r.push({
        isDefaultExport: n.modifiers.some(
          (o) => o.kind === e.ts.SyntaxKind.DefaultKeyword,
        ),
        statement: n,
        node: n,
      });
      continue;
    }
  }
  return r;
}
function Yi(e, t) {
  let r = [];
  for (let n of t.statements)
    if (
      e.ts.isExpressionStatement(n) &&
      e.ts.isBinaryExpression(n.expression) &&
      e.ts.isPropertyAccessExpression(n.expression.left)
    ) {
      let o = n.expression.left,
        i = n.expression.right;
      if (!e.ts.isIdentifier(o.expression)) continue;
      if (o.expression.text === "module" && o.name.text === "exports") {
        if (e.ts.isIdentifier(i)) {
          let a = i.text;
          for (let s of t.statements)
            if (e.ts.isVariableStatement(s))
              for (let u of s.declarationList.declarations)
                e.ts.isIdentifier(u.name) &&
                  u.name.text === a &&
                  r.push({ isDefaultExport: !0, statement: s, node: s });
            else
              e.ts.isFunctionDeclaration(s) &&
                s.name &&
                s.name.text === a &&
                r.push({ isDefaultExport: !0, statement: s, node: s });
        } else r.push({ isDefaultExport: !0, statement: n, node: i });
        continue;
      }
    }
  return r;
}
function Gi(e, t, r) {
  for (let n of t.statements)
    if (e.ts.isImportDeclaration(n) && n.importClause) {
      if (
        n.importClause.namedBindings &&
        e.ts.isNamedImports(n.importClause.namedBindings)
      ) {
        for (let o of n.importClause.namedBindings.elements)
          if (
            e.ts.isIdentifier(o.name) &&
            o.name.text === r &&
            e.ts.isStringLiteral(n.moduleSpecifier)
          )
            return { importPath: n.moduleSpecifier.text, exportType: "named" };
      }
      if (
        n.importClause.name &&
        n.importClause.name.text === r &&
        e.ts.isStringLiteral(n.moduleSpecifier)
      )
        return { importPath: n.moduleSpecifier.text, exportType: "default" };
    }
  return null;
}
async function he(e, t, r, n) {
  let o = Gi(e, r, n);
  if (o) {
    let i = await xt(e, e.normalize(e.resolve(e.dirname(t), o.importPath))),
      a = e.relative(e.getAppRootDir(), i);
    return {
      displayFilePath: k(e, i),
      filePath: i,
      relFilePath: a,
      importPath: o.importPath,
      exportType: o.exportType,
    };
  }
  return null;
}
function ot(e, t, r) {
  for (let n = 0; n < t.statements.length; n++) {
    let o = t.statements[n];
    if (e.ts.isVariableStatement(o)) {
      for (let i of o.declarationList.declarations)
        if (e.ts.isIdentifier(i.name) && i.name.text === r)
          return { statement: o, statementIndex: n };
    }
  }
  return null;
}
function J(e, t, r) {
  let n = ot(e, t, r);
  if (n && n.statement.declarationList.declarations.length > 0) {
    let o = n.statement.declarationList.declarations[0];
    if (o.initializer && e.ts.isArrayLiteralExpression(o.initializer))
      return {
        statement: n.statement,
        statementIndex: n.statementIndex,
        variableDeclaration: o,
        arrayLiteralExp: o.initializer,
      };
  }
  return null;
}
function Ot(e, t) {
  if (t) {
    if (Hi(e, t)) return !0;
    let r = !1;
    if (
      (t.forEachChild((n) => {
        Ot(e, n) && (r = !0);
      }),
      r)
    )
      return !0;
  }
  return !1;
}
function Hi(e, t) {
  return (
    e.ts.isJsxElement(t) ||
    e.ts.isJsxOpeningElement(t) ||
    e.ts.isJsxOpeningFragment(t) ||
    e.ts.isJsxSelfClosingElement(t) ||
    e.ts.isJsxFragment(t) ||
    e.ts.isJsxChild(t)
  );
}
async function xt(e, t) {
  let r = e.extname(t).toLowerCase();
  if (r === "" || !on.includes(r)) {
    for (let n of on) {
      let o = t + n;
      if (await e.exists(o)) return o;
    }
    for (let n of on) {
      let o = e.join(t, "index" + n);
      if (await e.exists(o)) return o;
    }
  }
  return t;
}
var on = [".tsx", ".jsx", ".ts", ".js"];
function it(e, t, r) {
  if (!r || !t) return;
  let n = t.getSymbolAtLocation(r);
  if (!n) return;
  let o = n.valueDeclaration;
  if (!o) return;
  let i = o.getSourceFile().fileName,
    a = Xi(e, i);
  return a ? [{ name: a }] : void 0;
}
function Xi(e, t) {
  if (typeof t == "string") {
    t = e.normalize(ce(t));
    let r = t.split("/"),
      n = r.lastIndexOf("node_modules");
    if (n > -1) {
      let o = r.slice(n + 1),
        i = o[0];
      if (i) return (i.startsWith("@") && o[1] && (i += "/" + o[1]), i);
    }
  }
}
function Ee(e) {
  let t = [];
  for (let r of e)
    if (r.dependencies)
      for (let n of r.dependencies)
        t.some((o) => o.name === n.name) || t.push({ ...n });
  return t.sort((r, n) => r.name.localeCompare(n.name));
}
function mr(e, t, r = "esm") {
  return r === "cjs" ? ta(e, t) : ea(e, t);
}
var Zi = /^(@\w|\w)/;
function ea(e, t) {
  let r = [];
  for (let n of t.statements)
    if (
      e.ts.isImportDeclaration(n) &&
      e.ts.isLiteralExpression(n.moduleSpecifier)
    ) {
      if (!Zi.test(n.moduleSpecifier.text) || n.importClause?.isTypeOnly)
        continue;
      if (
        n.importClause &&
        n.importClause.namedBindings &&
        e.ts.isNamedImports(n.importClause.namedBindings)
      )
        for (let o of n.importClause.namedBindings.elements)
          o.isTypeOnly ||
            r.push({ isDefaultExport: !1, statement: n, node: o.name });
      n.importClause &&
        n.importClause.name &&
        r.push({
          isDefaultExport: !0,
          statement: n,
          node: n.importClause.name,
        });
    }
  return r;
}
function ta(e, t) {
  return [];
}
async function at(e, t) {
  if (!t.some((a) => !a.isRegistered)) return t;
  let n = await G(
      e,
      t.map((a) => a.filePath),
    ),
    o = n.getTypeChecker();
  return await Promise.all(
    t.map(async (a) => {
      let s = n.getSourceFile(a.filePath);
      if (s) {
        let p = (await $e(e, o, a.filePath, s, !1)).find(
          (m) => m.cmpInfo.id === a.id,
        );
        p && (a.inputs = Qe(e, o, p.node.fnNode));
      }
      return a;
    }),
  );
}
async function st(e, t, r, n) {
  if (t.node.fnNode) {
    let { sourceFile: o, typeChecker: i } = await rt(e, t.cmpInfo.filePath, r),
      s = (await $e(e, i, t.cmpInfo.filePath, o, n)).find(
        (u) => u.cmpInfo.id === t.cmpInfo.id,
      );
    if (!s)
      throw new Error(
        `createComponentInputs() Could not find component ${t.cmpInfo.name} in ${t.cmpInfo.filePath}`,
      );
    return Qe(e, i, s.node.fnNode);
  }
  return [];
}
async function dr(e, t, r) {
  let n = e.extname(t).toLowerCase();
  if (n === ".tsx" || n === ".jsx" || n === ".ts" || n === ".js") {
    let o = await e.readFile(t);
    if (o) return na(e, t, o, r);
  }
  return null;
}
function na(e, t, r, n = !1) {
  let o = I(e, r);
  return $e(e, null, t, o, n);
}
async function $e(e, t, r, n, o) {
  let i = [];
  for (let s of n.statements)
    if (
      e.ts.isExpressionStatement(s) &&
      e.ts.isStringLiteral(s.expression) &&
      s.expression.text === "use server"
    )
      return i;
  let a = ue(e, n);
  return (
    o && a.push(...mr(e, n)),
    (r = e.normalize(r)),
    await Promise.all(
      a.map(async (s) => {
        let u = await ra(e, t, r, s);
        i.push(...u);
      }),
    ),
    i
  );
}
async function ra(e, t, r, n) {
  let o = [],
    i = e.relative(e.getAppRootDir(), r),
    a = V(e, r);
  if (e.ts.isVariableStatement(n.node)) {
    for (let s of n.node.declarationList.declarations) {
      if (!e.ts.isIdentifier(s.name) || !et(s.name.text)) continue;
      let u = Re(e, t, s.initializer);
      if (u) {
        let p = u.name || s.name.text,
          m = n.isDefaultExport ? "default" : p,
          f = n.isDefaultExport ? "default" : "named";
        o.push({
          cmpInfo: {
            id: await $(e, r, m),
            displayFilePath: k(e, r),
            name: K(p),
            inputs: [],
            exportName: m,
            exportType: f,
            importName: p,
            filePath: r,
            relFilePath: i,
            importPath: a,
            dependencies: u.deps,
          },
          node: u,
        });
      }
    }
    return o;
  }
  if (e.ts.isArrowFunction(n.node)) {
    let s = Re(e, t, n.node);
    if (s) {
      let u = se(e, r),
        p = n.isDefaultExport ? "default" : u,
        m = n.isDefaultExport ? "default" : "named";
      o.push({
        cmpInfo: {
          id: await $(e, r, p),
          displayFilePath: k(e, r),
          name: u,
          inputs: [],
          exportName: p,
          exportType: m,
          importName: qe(e, r),
          filePath: r,
          relFilePath: i,
          importPath: a,
          dependencies: s.deps,
        },
        node: s,
      });
    }
    return o;
  }
  if (e.ts.isFunctionExpression(n.node) || e.ts.isFunctionDeclaration(n.node)) {
    let s = n.node.name?.text;
    if (s && !et(s)) return o;
    let u = Re(e, t, n.node);
    if (u) {
      let p = u.name || se(e, r),
        m = n.isDefaultExport || !u.name ? "default" : u.name,
        f = n.isDefaultExport ? "default" : "named";
      o.push({
        cmpInfo: {
          id: await $(e, r, m),
          displayFilePath: k(e, r),
          name: p,
          inputs: [],
          exportName: m,
          exportType: f,
          importName: u.name || qe(e, r),
          filePath: r,
          relFilePath: i,
          importPath: a,
          dependencies: u.deps,
        },
        node: u,
      });
    }
    return o;
  }
  if (
    (e.ts.isExportSpecifier(n.node) || e.ts.isIdentifier(n.node)) &&
    et(n.node.getText())
  ) {
    let s,
      u = Re(e, t, n.node);
    if (u) {
      let p = u.name || se(e, r),
        m = n.isDefaultExport || !u.name ? "default" : u.name,
        f = n.isDefaultExport ? "default" : "named",
        c = oa(e, n.node)?.moduleSpecifier ?? ia(e, n.node)?.moduleSpecifier;
      if (c && e.ts.isStringLiteral(c)) {
        let d = t?.getSymbolAtLocation(c);
        if (d && d.declarations && d.declarations.length > 0) {
          let C = d.declarations[0];
          (!e.ts.isSourceFile(C) ||
            (e.ts.isSourceFile(C) && C.fileName.includes("node_modules"))) &&
            (s = c.text);
        }
      }
      o.push({
        cmpInfo: {
          id: await $(e, r, m, s),
          displayFilePath: k(e, r),
          name: p,
          inputs: [],
          exportName: m,
          exportType: f,
          importName: u.name || qe(e, r),
          filePath: r,
          relFilePath: i,
          importPath: s || a,
          externalImportPath: s,
          dependencies: u.deps,
        },
        node: u,
      });
    }
    return o;
  }
  if (e.ts.isExportDeclaration(n.node) && n.node.exportClause === void 0) {
    let s = n.node.moduleSpecifier;
    if (s && e.ts.isStringLiteral(s)) {
      let u = await sa(e, t, r, s);
      o.push(...u);
    }
    return o;
  }
  return o;
}
function oa(e, t) {
  for (; t; ) {
    if (e.ts.isExportDeclaration(t)) return t;
    t = t.parent;
  }
  return null;
}
function ia(e, t) {
  for (; t; ) {
    if (e.ts.isImportDeclaration(t)) return t;
    t = t.parent;
  }
  return null;
}
function Re(e, t, r) {
  if (!r) return null;
  if (e.ts.isArrowFunction(r))
    return Ot(e, r.body) ? { name: "", fnNode: r, deps: it(e, t, r) } : null;
  if (e.ts.isFunctionExpression(r) || e.ts.isFunctionDeclaration(r))
    return Ot(e, r.body)
      ? { name: r.name?.text || "", fnNode: r, deps: it(e, t, r) }
      : null;
  if (e.ts.isCallExpression(r)) {
    let n = r.expression;
    if (e.ts.isPropertyAccessExpression(n)) {
      let o = r.arguments;
      if (o.length === 0) return null;
      let i = n.expression;
      if (!e.ts.isIdentifier(i) || i.text !== "React") return null;
      let a = n.name;
      return !e.ts.isIdentifier(a) || a.text !== "forwardRef"
        ? null
        : Re(e, t, o[0]);
    } else if (e.ts.isIdentifier(n) && n.text === "observer") {
      let o = r.arguments;
      return o.length === 0 ? null : Re(e, t, o[0]);
    }
    return null;
  }
  if (!t) return null;
  if (e.ts.isPropertyAccessExpression(r)) {
    let n = r.expression,
      o = r.name;
    if (!e.ts.isIdentifier(n) || !e.ts.isIdentifier(o) || !et(o.text))
      return null;
    let a = t.getTypeAtLocation(o).getCallSignatures();
    if (a.length > 0 && a[0].getParameters().length > 0)
      return { name: "", fnNode: o, deps: it(e, t, o) };
  }
  if (e.ts.isExportSpecifier(r)) {
    let n = r.name;
    return { name: n.text || "", fnNode: n, deps: it(e, t, n) };
  }
  if (e.ts.isIdentifier(r))
    return { name: r.text || "", fnNode: r, deps: it(e, t, r) };
  if (e.ts.isExpressionStatement(r)) {
    let n = r.expression;
    if (
      e.ts.isAsExpression(n) &&
      e.ts.isIdentifier(n.type) &&
      n.type.text === "default"
    )
      return Re(e, t, n.expression);
  }
  if (e.ts.isVariableStatement(r)) {
    for (let n of r.declarationList.declarations)
      if (n.initializer && e.ts.isAsExpression(n.initializer)) {
        let o = n.initializer;
        if (e.ts.isIdentifier(o.type) && o.type.text === "default") {
          let i = Re(e, t, o.expression);
          if (i && e.ts.isIdentifier(n.name))
            return { name: n.name.text, fnNode: i.fnNode, deps: i.deps };
        }
      }
  }
  return null;
}
async function gr(e, t) {
  let r = [],
    n = t.getSourceFiles(),
    o = t.getTypeChecker();
  return (
    await Promise.all(
      n.map(async (i) => {
        let a = e.normalize(i.fileName);
        if (
          It(e, aa, i.fileName) ||
          a === e.reactConfigPath ||
          a === e.khulnasoftComponentPath
        )
          return;
        let s = await $e(e, o, a, i, a === e.registryPath);
        r.push(...s);
      }),
    ),
    r.sort((i, a) => i.cmpInfo.name.localeCompare(a.cmpInfo.name))
  );
}
var aa = new Set(["node_modules", "dist"]);
async function sa(e, t, r, n) {
  let o = [],
    i = n.text;
  if (!t) return o;
  try {
    let a = t.getSymbolAtLocation(n);
    if (!a) return o;
    let s = t.getExportsOfModule(a);
    for (let u of s) {
      let p = u.valueDeclaration || u.declarations?.[0];
      if (!p) continue;
      let m = u.name;
      if ((!et(m) && m !== "default") || !Dr(e, t, p)) continue;
      let f = Re(e, t, p);
      if (f) {
        let c = u.name,
          d = c === "default" ? "default" : "named",
          C = K(c),
          l = c === "default" ? qe(e, r) : c;
        o.push({
          cmpInfo: {
            id: await $(e, r, c, i),
            displayFilePath: k(e, r),
            name: C,
            inputs: [],
            exportName: c,
            exportType: d,
            importName: l,
            filePath: r,
            relFilePath: e.relative(e.getAppRootDir(), r),
            importPath: i,
            externalImportPath: i,
            dependencies: f.deps,
          },
          node: f,
        });
      }
    }
  } catch (a) {
    console.error(`Error processing module ${i}:`, a);
  }
  return o;
}
function Dr(e, t, r) {
  if (e.ts.isInterfaceDeclaration(r) || e.ts.isTypeAliasDeclaration(r))
    return !1;
  if (e.ts.isExportSpecifier(r)) {
    let n = t.getSymbolAtLocation(r.name);
    if (n) {
      let i = t.getAliasedSymbol(n).declarations?.[0];
      if (i) return Dr(e, t, i);
    }
    return !1;
  }
  if (
    e.ts.isFunctionDeclaration(r) ||
    e.ts.isArrowFunction(r) ||
    e.ts.isFunctionExpression(r)
  ) {
    let n = t.getSignatureFromDeclaration(r);
    if (n) {
      let o = t.getReturnTypeOfSignature(n);
      return fr(o, t);
    }
  }
  return e.ts.isClassDeclaration(r)
    ? (r.heritageClauses?.some((o) =>
        o.types.some(
          (i) =>
            i.expression.getText() === "React.Component" ||
            i.expression.getText() === "Component",
        ),
      ) ?? !1)
    : e.ts.isVariableDeclaration(r)
      ? t
          .getTypeAtLocation(r)
          .getCallSignatures()
          .some((i) => fr(t.getReturnTypeOfSignature(i), t))
      : !1;
}
function fr(e, t) {
  let r = t.typeToString(e);
  return (
    r === "JSX.Element" ||
    r === "Element" ||
    r.includes("ReactElement") ||
    r.includes("React.ReactElement") ||
    r.includes("ReactNode")
  );
}
async function Cr(e, t) {
  let r = [],
    n = t.getSourceFiles(),
    o = t.getTypeChecker();
  return (
    await Promise.all(
      n.map(async (i) => {
        let a = e.basename(i.fileName);
        if (
          (e.appDir && ua.has(a)) ||
          e.dirname(i.fileName).includes("node_modules")
        )
          return;
        let s = e.normalize(i.fileName);
        if (s === e.nextConfigPath || s === e.khulnasoftComponentPath) return;
        let u = await $e(e, o, s, i, s === e.registryPath || ge(s));
        r.push(...u);
      }),
    ),
    r.sort((i, a) => i.cmpInfo.name.localeCompare(a.cmpInfo.name))
  );
}
var ua = new Set([
  "default.tsx",
  "default.ts",
  "default.jsx",
  "default.js",
  "error.tsx",
  "error.ts",
  "error.jsx",
  "error.js",
  "layout.tsx",
  "layout.ts",
  "layout.jsx",
  "layout.js",
  "loading.tsx",
  "loading.ts",
  "loading.jsx",
  "loading.js",
  "not-found.tsx",
  "not-found.ts",
  "not-found.jsx",
  "not-found.js",
  "page.tsx",
  "page.ts",
  "page.jsx",
  "page.js",
  "route.tsx",
  "route.ts",
  "route.jsx",
  "route.js",
  "template.tsx",
  "template.ts",
  "template.jsx",
  "template.js",
]);
function Se(e, t) {
  let r = [],
    n = [],
    o = [],
    i = [];
  for (let a of t.statements) {
    if (e.ts.isImportDeclaration(a)) {
      if (e.ts.isStringLiteral(a.moduleSpecifier)) {
        let u = a.moduleSpecifier.text;
        if (!u.startsWith(".") && !u.startsWith("/")) {
          r.push(a);
          continue;
        }
      }
      let s = a.importClause;
      if (s) {
        if (s.namedBindings) {
          n.push(a);
          continue;
        }
        if (s.name) {
          n.push(a);
          continue;
        }
      }
      o.push(a);
      continue;
    }
    i.push(a);
  }
  return e.ts.factory.updateSourceFile(t, [
    ...an(e, r),
    ...an(e, n),
    ...an(e, o),
    ...i,
  ]);
}
function pe(e) {
  let t = e
    .split(
      `
`,
    )
    .map((n) => n.trimEnd());
  e = "";
  let r = !1;
  for (let n = t.length - 1; n >= 0; n--) {
    let o = t[n];
    (!r &&
      o.startsWith("import ") &&
      ((r = !0),
      (o =
        o +
        `
`)),
      /^khulnasoft.init(.*)$/.test(o) &&
        (o =
          o +
          `
`),
      t[n - 1] &&
        !t[n - 1].includes("*/") &&
        (o.trim().startsWith("Khulnasoft.registerComponent") &&
          (o =
            `
` + o),
        o.trim().startsWith("/**") &&
          (o =
            `
` + o),
        o.trim().startsWith("module.exports") &&
          (o =
            `
` + o),
        o.trim().startsWith("export ") &&
          (o =
            `
` + o)),
      (e =
        o +
        `
` +
        e));
  }
  return (
    e.trim() +
    `
`
  );
}
function an(e, t) {
  return t.sort((r, n) => {
    let o = xr(e, r),
      i = xr(e, n);
    return o.toLocaleLowerCase().localeCompare(i.toLocaleLowerCase());
  });
}
function xr(e, t) {
  let r = t.importClause;
  if (r) {
    let n = r.namedBindings;
    if (n && e.ts.isNamedImports(n) && n.elements.length > 0)
      return n.elements[0].name.text;
    if (r.name) return r.name.text;
  }
  return t.moduleSpecifier && e.ts.isStringLiteral(t.moduleSpecifier)
    ? t.moduleSpecifier.text
    : "";
}
function Er(e) {
  return (
    typeof e == "string" &&
      !e.includes("'use client'") &&
      !e.includes(`"use client"'`) &&
      (e = `"use client"
${e}`),
    e
  );
}
function Sr(e, t) {
  let r = t.statements.filter(
    (n) =>
      !(
        e.ts.isExpressionStatement(n) &&
        e.ts.isStringLiteral(n.expression) &&
        e.ts.isStringLiteral(n.expression) &&
        n.expression.text === "use client"
      ),
  );
  return e.ts.factory.updateSourceFile(t, r);
}
function Ae(e, t) {
  return t.sort((r, n) => {
    if (
      e.ts.isObjectLiteralExpression(r) &&
      e.ts.isObjectLiteralExpression(n)
    ) {
      let o = hr(e, r),
        i = hr(e, n);
      return o.toLocaleLowerCase().localeCompare(i.toLocaleLowerCase());
    }
    return 1;
  });
}
function hr(e, t) {
  let r = t.properties.find((n) => N(e, n) === "name");
  return r &&
    e.ts.isPropertyAssignment(r) &&
    e.ts.isStringLiteral(r.initializer)
    ? r.initializer.text
    : "zzzz";
}
async function Ar(e) {
  let t = await e.readFile(e.registryPath);
  return t ? pa(e, t) : { components: [], sourceFile: I(e, "") };
}
async function pa(e, t) {
  let r = I(e, t);
  return e.sdkVersion === w.gen2 ? ca(e, r) : la(e, r);
}
async function la(e, t) {
  let r = [];
  for (let n = 0; n < t.statements.length; n++) {
    let o = t.statements[n];
    if (!e.ts.isExpressionStatement(o)) continue;
    let i = o.expression;
    if (!e.ts.isCallExpression(i)) continue;
    let a = i.expression;
    if (!e.ts.isPropertyAccessExpression(a)) continue;
    let s = a.expression;
    if (
      !e.ts.isIdentifier(s) ||
      s.text !== "Khulnasoft" ||
      a.name.text !== "registerComponent"
    )
      continue;
    let p = i.arguments;
    if (p.length < 2) continue;
    let m = p[1];
    if (!e.ts.isObjectLiteralExpression(m)) continue;
    let f = p[0];
    if (e.ts.isCallExpression(f)) {
      let c = e.ts.isIdentifier(f.expression) && f.expression.text;
      if (c === "withChildren") {
        let C = pn(e, f.arguments[0]);
        if (e.ts.isCallExpression(C)) {
          let l = await sn(e, n, C, m, !0);
          l && r.push(l);
        } else {
          let l = C;
          if (e.ts.isIdentifier(l)) {
            let D = await un(e, t, n, l, m, !0);
            D && r.push(D);
          }
        }
        continue;
      }
      if (c === "dynamic") {
        let C = await sn(e, n, f, m, !1);
        C && r.push(C);
        continue;
      }
      let d = pn(e, f.arguments[0]);
      if (
        e.ts.isCallExpression(d) &&
        e.ts.isIdentifier(d.expression) &&
        d.expression.text === "dynamic"
      ) {
        let C = await sn(e, n, d, m, !1);
        C && r.push(C);
        continue;
      }
      if (e.ts.isIdentifier(d)) {
        let C = await un(e, t, n, d, m, !1);
        C && r.push(C);
        continue;
      }
      continue;
    }
    if (e.ts.isIdentifier(f)) {
      let c = await un(e, t, n, f, m, !1);
      c && r.push(c);
      continue;
    }
  }
  return { sourceFile: t, components: te(r) };
}
function pn(e, t) {
  return e.ts.isCallExpression(t)
    ? (e.ts.isIdentifier(t.expression) && t.expression.text) === "dynamic"
      ? t
      : pn(e, t.arguments[0])
    : t;
}
async function sn(e, t, r, n, o) {
  let i = {
      id: "",
      name: "",
      displayFilePath: "",
      exportName: "",
      importName: "",
      filePath: "",
      relFilePath: "",
      importPath: "",
      inputs: [],
      nodeIndex: t,
      acceptsChildren: o,
    },
    a = r.arguments;
  if (a.length === 0) return null;
  let s = a[0];
  if (!e.ts.isArrowFunction(s)) return null;
  let u = s.body;
  if (e.ts.isCallExpression(u)) {
    if (
      u.expression.kind !== e.ts.SyntaxKind.ImportKeyword ||
      u.arguments.length !== 1
    )
      return null;
    let m = u.arguments[0];
    if (!e.ts.isStringLiteral(m)) return null;
    let f = m.text,
      c = await ut(e, f);
    ((i.filePath = c),
      (i.relFilePath = e.relative(e.getAppRootDir(), i.filePath)),
      (await e.exists(c))
        ? (i.importPath = V(e, i.filePath))
        : ((i.externalImportPath = f), (i.importPath = i.externalImportPath)),
      (i.name = se(e, i.filePath)),
      (i.importName = "default"),
      (i.exportName = "default"),
      (i.exportType = "default"));
  } else if (e.ts.isPropertyAccessExpression(u)) {
    let p = u.expression;
    if (!e.ts.isParenthesizedExpression(p)) return null;
    let m = p.expression;
    if (!e.ts.isAwaitExpression(m)) return null;
    let f = m.expression;
    if (
      !e.ts.isCallExpression(f) ||
      f.expression.kind !== e.ts.SyntaxKind.ImportKeyword ||
      f.arguments.length !== 1
    )
      return null;
    let d = f.arguments[0];
    if (!e.ts.isStringLiteral(d) || !e.ts.isIdentifier(u.name)) return null;
    let C = d.text,
      l = await ut(e, C);
    ((i.filePath = l),
      (i.relFilePath = e.relative(e.getAppRootDir(), i.filePath)),
      (await e.exists(l))
        ? (i.importPath = V(e, i.filePath))
        : ((i.externalImportPath = C), (i.importPath = i.externalImportPath)),
      (i.name = K(u.name.text)),
      (i.importName = u.name.text),
      (i.exportName = u.name.text),
      (i.exportType = "named"));
  } else return null;
  return (
    (i = ne(e, i, n)),
    (i.displayFilePath = k(e, i.filePath)),
    i.filePath &&
      i.exportName &&
      (i.id = await $(e, i.filePath, i.exportName, i.externalImportPath)),
    i
  );
}
async function un(e, t, r, n, o, i) {
  let a = {
      id: "",
      name: "",
      displayFilePath: "",
      exportName: "",
      importName: "",
      filePath: "",
      relFilePath: "",
      importPath: "",
      inputs: [],
      nodeIndex: r,
      acceptsChildren: i,
    },
    s = t.statements.filter((p) => e.ts.isImportDeclaration(p)),
    u = s.find((p) => p.importClause && p.importClause.name?.text === n.text);
  if (u) {
    let p = u.moduleSpecifier;
    if (!e.ts.isStringLiteral(p)) return null;
    let m = await ut(e, p.text);
    ((a.filePath = m),
      (a.relFilePath = e.relative(e.getAppRootDir(), a.filePath)),
      (await e.exists(m))
        ? (a.importPath = V(e, a.filePath))
        : ((a.externalImportPath = p.text),
          (a.importPath = a.externalImportPath)),
      (a.name = se(e, a.filePath)),
      (a.importName = n.text),
      (a.exportName = "default"),
      (a.exportType = "default"));
  } else {
    let p = s.find((c) =>
      !c.importClause ||
      !c.importClause.namedBindings ||
      !e.ts.isNamedImports(c.importClause.namedBindings)
        ? !1
        : c.importClause.namedBindings.elements.some(
            (d) => d.name.text === n.text,
          ),
    );
    if (!p) return null;
    let m = p.moduleSpecifier;
    if (!e.ts.isStringLiteral(m)) return null;
    let f = await ut(e, m.text);
    ((a.filePath = f),
      (a.relFilePath = e.relative(e.getAppRootDir(), a.filePath)),
      (await e.exists(f))
        ? (a.importPath = V(e, a.filePath))
        : ((a.externalImportPath = m.text),
          (a.importPath = a.externalImportPath)),
      (a.name = K(n.text)),
      (a.importName = n.text),
      (a.exportName = n.text),
      (a.exportType = "named"));
  }
  return (
    (a = ne(e, a, o)),
    (a.displayFilePath = k(e, a.filePath)),
    a.filePath &&
      a.exportName &&
      (a.id = await $(e, a.filePath, a.exportName, a.externalImportPath)),
    a
  );
}
function ut(e, t) {
  return xt(e, e.normalize(e.resolve(e.dirname(e.registryPath), t)));
}
function Fr(e, t, r) {
  let n = !1,
    o = 0,
    i = [...t.statements];
  for (let p = 0; p < i.length; p++) {
    let m = i[p];
    if (e.ts.isImportDeclaration(m)) {
      o = p;
      continue;
    }
    if (!e.ts.isExpressionStatement(m)) continue;
    let f = m.expression;
    if (!e.ts.isCallExpression(f)) continue;
    let c = f.expression;
    if (!e.ts.isPropertyAccessExpression(c)) continue;
    let d = c.expression;
    if (!e.ts.isIdentifier(d) || d.text !== "khulnasoft") continue;
    if (c.name.text == "init") {
      n = !0;
      break;
    } else continue;
  }
  if (n) return t;
  let a = e.ts.factory.createPropertyAccessExpression(
      e.ts.factory.createPropertyAccessExpression(
        e.ts.factory.createIdentifier("process"),
        e.ts.factory.createIdentifier("env"),
      ),
      e.ts.factory.createIdentifier(xe),
    ),
    s = r ? e.ts.factory.createNonNullExpression(a) : a,
    u = e.ts.factory.createExpressionStatement(
      e.ts.factory.createCallExpression(
        e.ts.factory.createPropertyAccessExpression(
          e.ts.factory.createIdentifier("khulnasoft"),
          e.ts.factory.createIdentifier("init"),
        ),
        void 0,
        [s],
      ),
    );
  return (i.splice(o + 1, 0, u), e.ts.factory.updateSourceFile(t, i));
}
async function ca(e, t) {
  let r = [],
    n = J(e, t, "CUSTOM_COMPONENTS");
  return (
    n &&
      (await Promise.all(
        n.arrayLiteralExp.elements.map(async (o, i) => {
          let a = await ln(e, t, o);
          a && ((a.nodeIndex = i), r.push(a));
        }),
      )),
    { sourceFile: t, components: te(r) }
  );
}
async function ln(e, t, r) {
  if (!e.ts.isObjectLiteralExpression(r)) return null;
  let n = {
    id: "",
    name: "",
    displayFilePath: "",
    exportName: "",
    importName: "",
    filePath: "",
    relFilePath: "",
    importPath: "",
    inputs: [],
    acceptsChildren: !1,
  };
  nt(e, r) && (n.acceptsChildren = !0);
  for (let i of r.properties) {
    if (!e.ts.isPropertyAssignment(i) || !e.ts.isIdentifier(i.name)) continue;
    if (N(e, i) === "component") {
      let s,
        { initializer: u } = i;
      if (
        e.ts.isCallExpression(u) &&
        (e.ts.isIdentifier(u.expression) && u.expression.text) === "dynamic"
      ) {
        let d = u.arguments;
        if (d.length === 0) return null;
        let C = d[0];
        if (!e.ts.isArrowFunction(C)) return null;
        let l = C.body;
        if (e.ts.isCallExpression(l)) {
          if (
            l.expression.kind !== e.ts.SyntaxKind.ImportKeyword ||
            l.arguments.length !== 1
          )
            return null;
          let g = l.arguments[0];
          if (!e.ts.isStringLiteral(g)) return null;
          let x = g.text,
            E = await ut(e, x);
          ((n.filePath = E),
            (n.relFilePath = e.relative(e.getAppRootDir(), n.filePath)),
            (await e.exists(E))
              ? (n.importPath = V(e, n.filePath))
              : ((n.externalImportPath = x),
                (n.importPath = n.externalImportPath)),
            (n.name = se(e, n.filePath)),
            (n.importName = "default"),
            (n.exportName = "default"),
            (n.exportType = "default"));
        } else if (e.ts.isPropertyAccessExpression(l)) {
          let D = l.expression;
          if (!e.ts.isParenthesizedExpression(D)) return null;
          let g = D.expression;
          if (!e.ts.isAwaitExpression(g)) return null;
          let x = g.expression;
          if (
            !e.ts.isCallExpression(x) ||
            x.expression.kind !== e.ts.SyntaxKind.ImportKeyword ||
            x.arguments.length !== 1
          )
            return null;
          let P = x.arguments[0];
          if (!e.ts.isStringLiteral(P) || !e.ts.isIdentifier(l.name))
            return null;
          let A = P.text,
            S = await ut(e, A);
          ((n.filePath = S),
            (n.relFilePath = e.relative(e.getAppRootDir(), n.filePath)),
            (await e.exists(S))
              ? (n.importPath = V(e, n.filePath))
              : ((n.externalImportPath = A),
                (n.importPath = n.externalImportPath)),
            (n.name = K(l.name.text)),
            (n.importName = l.name.text),
            (n.exportName = l.name.text),
            (n.exportType = "named"));
        } else return null;
        return (
          (n = ne(e, n, r)),
          (n.displayFilePath = k(e, n.filePath)),
          n.filePath &&
            n.exportName &&
            (n.id = await $(e, n.filePath, n.exportName, n.externalImportPath)),
          n
        );
      }
      if ((e.ts.isIdentifier(u) && (s = u.text), !s)) continue;
      (n.name === "" && (n.name = K(s)), (n.importName = s));
      let p = await he(e, e.registryPath, t, s);
      if (!p) continue;
      ((n.filePath = p.filePath),
        (n.relFilePath = p.relFilePath),
        (await e.exists(p.filePath))
          ? (n.importPath = V(e, p.filePath))
          : ((n.externalImportPath = p.importPath),
            (n.importPath = n.externalImportPath)),
        (n.importPath = V(e, p.filePath)),
        (n.displayFilePath = p.displayFilePath),
        (n.exportType = p.exportType));
      let m = t.statements.filter((c) => e.ts.isImportDeclaration(c)),
        f = m.find((c) => c.importClause && c.importClause.name?.text === s);
      if (f) {
        let c = f.moduleSpecifier;
        if (!e.ts.isStringLiteral(c)) return null;
        n.exportName = "default";
      } else {
        let c = m.find((C) =>
          !C.importClause ||
          !C.importClause.namedBindings ||
          !e.ts.isNamedImports(C.importClause.namedBindings)
            ? !1
            : C.importClause.namedBindings.elements.some(
                (l) => l.name.text === s,
              ),
        );
        if (!c) return null;
        let d = c.moduleSpecifier;
        if (!e.ts.isStringLiteral(d)) return null;
        n.exportName = s;
      }
      continue;
    }
  }
  return (
    (n = ne(e, n, r)),
    n.filePath &&
      n.exportName &&
      (n.id = await $(e, n.filePath, n.exportName, n.externalImportPath)),
    n
  );
}
function Fe(e, t) {
  let r = [...t.statements],
    n = !1;
  for (let o = t.statements.length - 1; o >= 0; o--) {
    let i = t.statements[o];
    if (e.ts.isImportDeclaration(i) && i.importClause) {
      let a = !1,
        s = i.importClause.namedBindings;
      if (s && e.ts.isNamedImports(s) && s.elements) {
        let u = [...s.elements];
        for (let p = u.length - 1; p >= 0; p--) {
          let m = u[p];
          if (e.ts.isImportSpecifier(m)) {
            let f = m.name;
            if (f && e.ts.isIdentifier(f)) {
              let c = f.text;
              Pr(e, t, c) || u.splice(p, 1);
            }
          }
        }
        if (u.length === 0) a = !0;
        else if (s.elements.length !== u.length) {
          let p = e.ts.factory.updateImportClause(
              i.importClause,
              !1,
              i.importClause.name,
              e.ts.factory.createNamedImports(u),
            ),
            m = e.ts.factory.updateImportDeclaration(
              i,
              void 0,
              p,
              i.moduleSpecifier,
              void 0,
            );
          ((r[o] = m), (n = !0));
        }
      } else if (
        i.importClause.name &&
        e.ts.isIdentifier(i.importClause.name)
      ) {
        let u = i.importClause.name.text;
        Pr(e, t, u) || (a = !0);
      }
      a && (r.splice(o, 1), (n = !0));
    }
  }
  return n ? e.ts.factory.updateSourceFile(t, r) : t;
}
function Pr(e, t, r) {
  let n = !1;
  function o(i) {
    if (!e.ts.isImportDeclaration(i)) {
      if (e.ts.isIdentifier(i) && i.text === r) {
        n = !0;
        return;
      }
      e.ts.forEachChild(i, o);
    }
  }
  return (e.ts.forEachChild(t, o), n);
}
function Pe(e, t, r, n, o, i, a) {
  let s = null,
    u = null,
    p = null,
    m = -1;
  ((t = oe(t)), (r = oe(r)));
  let f = t.find((d) => d.id === e),
    c = r.find((d) => d.id === e);
  if (n)
    c ||
      ((s = {
        ...oe(f),
        inputs: oe(f.inputs).map((d) => ((d.isRegistered = !0), d)),
      }),
      (m = r.length),
      r.push(s));
  else if (typeof c?.nodeIndex == "number" && c.nodeIndex > -1) {
    if (o) ((m = c.nodeIndex), (u = oe(c)), (r = r.filter((d) => d.id !== e)));
    else if (i != null) (ma(c, i), (m = c.nodeIndex), (p = c));
    else if (a != null) {
      let d = c.inputs.find((C) => C.name === a.name);
      d &&
        (a.registerInput === !1
          ? (d.isRegistered = !1)
          : (fa(d, a), (d.isRegistered = !0)),
        (p = c),
        (m = c.nodeIndex));
    }
  }
  return {
    addCmpToRegistry: s,
    removeCmpFromRegistry: u,
    updateRegisteredCmp: p,
    nodeIndex: m,
    components: me(t, r),
  };
}
function me(e, t) {
  let r = te([
    ...t.map((n) => ((n.isRegistered = !0), n)),
    ...e
      .filter((n) => !t.some((o) => o.id === n.id))
      .map((n) => ((n.isRegistered = !1), n)),
  ]);
  return (
    r.forEach((n) => {
      ((n.inputs = n.inputs.map(nn)),
        n.inputs.sort((a, s) =>
          a.name.toLowerCase().localeCompare(s.name.toLowerCase()),
        ));
      let o = t.find((a) => a.id === n.id);
      o && (o.acceptsChildren = tn(n));
      let i = e.find((a) => a.id === n.id && a.externalImportPath);
      i && ((n.filePath = i.filePath), (n.relFilePath = i.relFilePath));
    }),
    r
  );
}
function ma(e, t) {
  (Z(t.name) ? (e.name = t.name) : t.name === null && (e.name = e.importName),
    Z(t.description)
      ? (e.description = t.description)
      : t.description === null && delete e.description,
    Z(t.image) ? (e.image = t.image) : t.image === null && delete e.image);
}
function fa(e, t) {
  (Z(t.type) && (e.type = t.type),
    Z(t.friendlyName)
      ? (e.friendlyName = t.friendlyName)
      : t.friendlyName === null && delete e.friendlyName,
    Z(t.defaultValue) || ft(t.defaultValue) || Ze(t.defaultValue)
      ? (e.defaultValue = t.defaultValue)
      : t.defaultValue === null && delete e.defaultValue,
    Z(t.helperText)
      ? (e.helperText = t.helperText)
      : t.helperText === null && delete e.helperText,
    t.required === !0
      ? (e.required = t.required)
      : (t.required === null || t.required === !1) && delete e.required);
}
async function Ke(e) {
  let t = new Set(),
    r = async (o) => {
      let i = await e.readdir(o);
      await Promise.all(
        i.map(async (a) => {
          if (a.startsWith(".") || a === "node_modules") return;
          let s = e.join(o, a),
            u = e.extname(a).toLowerCase();
          if (u === ".tsx" || u === ".jsx" || u === ".ts" || u === ".js") {
            t.add(s);
            return;
          }
          (await e.stat(s)).isDirectory() && (await r(s));
        }),
      );
    };
  return (await r(e.getAppRootDir()), await G(e, [...t]));
}
function ye(e, t, r) {
  return ot(e, t, r.variableName) ? t : da(e, t, r);
}
function da(e, t, r) {
  let n =
      typeof r.arrayType == "string"
        ? e.ts.factory.createArrayTypeNode(
            e.ts.factory.createTypeReferenceNode(r.arrayType, void 0),
          )
        : void 0,
    o = e.ts.factory.createArrayLiteralExpression([]),
    i = e.ts.factory.createVariableDeclaration(r.variableName, void 0, n, o),
    a = e.ts.factory.createVariableDeclarationList([i], e.ts.NodeFlags.Const),
    s = e.ts.factory.createModifier(e.ts.SyntaxKind.ExportKeyword),
    u = e.ts.factory.createVariableStatement([s], a),
    p = [...t.statements, u];
  return e.ts.factory.updateSourceFile(t, p);
}
async function we(e, t, r, n, o, i, a, s) {
  let u = await Ke(e),
    [p, m, f, c] = await Promise.all([Cr(e, u), Ar(e), re(e), dt(e)]),
    d = p.map((E) => E.cmpInfo),
    C = m.components,
    l = {
      components: me(d, C),
      registryPath: e.registryPath,
      registryDisplayPath: k(e, e.registryPath),
      frameworks: e.getFrameworks(),
      dependencies: Ee(d),
      publicApiKey: c.envValue ?? void 0,
      devToolsVersion: e.version,
    };
  if (s) return ((l.components = await at(e, l.components)), l);
  let D = !1,
    g = m.sourceFile,
    x = Array.isArray(t) ? t : typeof t == "string" ? [t] : [];
  if (x.length > 0) {
    let E = x.map((S) => {
        let O = p.find((z) => z.cmpInfo.id === S);
        if (!O) throw new Error(`Component ${S} not found`);
        return O;
      }),
      P = Array.from(new Set(E.map((S) => S.cmpInfo.filePath))),
      A = await G(e, P);
    for (let S of E) {
      let O = l.components.find((y) => y.id === S.cmpInfo.id),
        z = await st(
          e,
          S,
          A,
          e.registryPath === S.cmpInfo.filePath || ge(S.cmpInfo.filePath),
        );
      ie(O, z);
      let j = d.findIndex((y) => y.id === S.cmpInfo.id);
      d[j].inputs = z;
      let F = Pe(S.cmpInfo.id, d, C, r, n, o, i);
      if (e.sdkVersion === w.gen2) {
        let {
          elements: y,
          elmIndex: H,
          statementIndex: le,
          statement: Y,
          variableDeclaration: L,
        } = await Ca(e, g, S);
        if (F.addCmpToRegistry) (y.push(Da(e, F.addCmpToRegistry)), (D = !0));
        else if (F.removeCmpFromRegistry) (y.splice(H, 1), (D = !0));
        else if (F.updateRegisteredCmp) {
          let X = Q(e, y[H], F.updateRegisteredCmp);
          ((y[H] = e.ts.factory.updateObjectLiteralExpression(X, [
            wr(e, F.updateRegisteredCmp),
            ...X.properties.slice(1),
          ])),
            (D = !0));
        }
        if (D && a) {
          let X = [...g.statements];
          ((X[le] = e.ts.factory.updateVariableStatement(
            Y,
            Y.modifiers,
            e.ts.factory.updateVariableDeclarationList(Y.declarationList, [
              e.ts.factory.updateVariableDeclaration(
                L,
                L.name,
                L.exclamationToken,
                L.type,
                e.ts.factory.createArrayLiteralExpression(Ae(e, y)),
              ),
            ]),
          )),
            (g = e.ts.factory.updateSourceFile(g, X)),
            (g = yr(e, F, g)),
            (g = v(e, g, {
              namedImports: ["RegisteredComponent"],
              importPath: "@khulnasoft.com/sdk-react",
              isTypeOnly: !0,
            })),
            (g = ye(e, g, {
              variableName: "CUSTOM_COMPONENTS",
              arrayType: "RegisteredComponent",
            })),
            (l.components = F.components),
            (C = F.components.filter((ze) => ze.isRegistered)));
        }
      } else {
        let y = [...g.statements];
        (F.addCmpToRegistry
          ? (y.push(sr(e, F.addCmpToRegistry)), (D = !0))
          : F.removeCmpFromRegistry
            ? (y.splice(F.nodeIndex, 1), (D = !0))
            : F.updateRegisteredCmp &&
              ((y[F.nodeIndex] = rn(e, y[F.nodeIndex], F.updateRegisteredCmp)),
              (D = !0)),
          D &&
            a &&
            ((g = e.ts.factory.updateSourceFile(g, y)),
            (g = v(e, g, {
              namedImports: ["Khulnasoft", "khulnasoft"],
              importPath: "@khulnasoft.com/react",
            })),
            (g = Fr(e, g, f)),
            (g = yr(e, F, g)),
            O?.acceptsChildren &&
              (g = v(e, g, {
                namedImports: ["withChildren"],
                importPath: "@khulnasoft.com/react",
              })),
            (l.components = F.components),
            (C = F.components.filter((H) => H.isRegistered))));
      }
    }
  }
  if (D && a) {
    ((g = Fe(e, g)), (g = Se(e, g)), e.appDir && (g = Sr(e, g)));
    let E = _(e, g);
    ((E = pe(E)),
      e.appDir && (E = Er(E)),
      (E = await e.formatCode(e.registryPath, E)),
      await e.writeFile(e.registryPath, E));
  }
  return l;
}
function wr(e, t) {
  let r = e.ts.factory.createIdentifier(t.importName);
  return e.appDir
    ? e.ts.factory.createPropertyAssignment("component", r)
    : e.ts.factory.createPropertyAssignment("component", xa(e, t));
}
function ga(e) {
  return e.ts.factory.createPropertyAssignment(
    "canHaveChildren",
    e.ts.factory.createTrue(),
  );
}
function Da(e, t) {
  return Q(
    e,
    e.ts.factory.createObjectLiteralExpression(
      [wr(e, t), ...(t.acceptsChildren ? [ga(e)] : [])],
      !0,
    ),
    t,
  );
}
async function Ca(e, t, r) {
  let n = J(e, t, "CUSTOM_COMPONENTS");
  if (!n)
    throw new Error(
      `Exported name of the Khulnasoft registry must be "CUSTOM_COMPONENTS". Please update your Khulnasoft registry file: ${e.registryPath}`,
    );
  let o = n.arrayLiteralExp.elements.filter((a) =>
      e.ts.isObjectLiteralExpression(a),
    ),
    i = -1;
  for (let a = 0; a < o.length; a++)
    if ((await ln(e, t, o[a]))?.id === r.cmpInfo.id) {
      i = a;
      break;
    }
  return { ...n, elements: o, elmIndex: i };
}
function yr(e, t, r) {
  if (e.appDir) {
    let n = t.addCmpToRegistry || t.updateRegisteredCmp;
    if (n) {
      let o = n.externalImportPath
        ? n.externalImportPath
        : B(e, e.registryPath, n.filePath);
      n.exportType === "default"
        ? (r = v(e, r, { defaultImport: n.importName, importPath: o }))
        : n.exportType === "named" &&
          (r = v(e, r, { namedImports: [n.importName], importPath: o }));
    }
  } else r = v(e, r, { defaultImport: "dynamic", importPath: "next/dynamic" });
  return r;
}
function xa(e, t) {
  let r = t.externalImportPath
      ? t.externalImportPath
      : B(e, e.registryPath, t.filePath),
    n = t.exportName !== "default",
    o;
  n
    ? (o = e.ts.factory.createPropertyAccessExpression(
        e.ts.factory.createAwaitExpression(
          e.ts.factory.createCallExpression(
            e.ts.factory.createIdentifier("import"),
            void 0,
            [e.ts.factory.createStringLiteral(r)],
          ),
        ),
        e.ts.factory.createIdentifier(t.exportName),
      ))
    : (o = e.ts.factory.createCallExpression(
        e.ts.factory.createIdentifier("import"),
        void 0,
        [e.ts.factory.createStringLiteral(r)],
      ));
  let i = e.ts.factory.createArrowFunction(
    n ? [e.ts.factory.createModifier(e.ts.SyntaxKind.AsyncKeyword)] : void 0,
    void 0,
    [],
    void 0,
    e.ts.factory.createToken(e.ts.SyntaxKind.EqualsGreaterThanToken),
    o,
  );
  return e.ts.factory.createCallExpression(
    e.ts.factory.createIdentifier("dynamic"),
    void 0,
    [i],
  );
}
async function br(e) {
  let t = [],
    r = await Fa(e, t);
  return (
    await Br(e, t, r),
    e.appDir
      ? (e.debug(`ensure khulnasoft setup for next.js app ${e.appDir}`),
        await Ea(e, e.appDir, t))
      : e.pagesDir &&
        (e.debug(`ensure khulnasoft setup for next.js pages ${e.pagesDir}`),
        await Sa(e, e.pagesDir, t)),
    t
  );
}
async function vr(e) {
  let t = [];
  return (
    await Br(e, t),
    e.appDir
      ? (e.debug(`ensure figma-imports setup for next.js app ${e.appDir}`),
        await ha(e, e.appDir, t))
      : e.pagesDir &&
        (e.debug(`ensure figma-imports setup for next.js pages ${e.pagesDir}`),
        await Aa(e, e.pagesDir, t)),
    t
  );
}
async function ha(e, t, r) {
  let n = `page.${e.typescriptEnabled ? "tsx" : "jsx"}`,
    o = e.join(t, "figma-imports", n);
  if (!(await e.exists(o))) {
    let i = await e.formatCode(
      o,
      Rr({ sys: e, routePath: o, modelName: "figma-imports" }),
    );
    (await e.writeFile(o, i), r.push({ filePath: o, modifiedType: "create" }));
  }
  if (!(await e.exists(e.khulnasoftComponentPath))) {
    let i = await e.formatCode(e.khulnasoftComponentPath, Ir(e));
    (await e.writeFile(e.khulnasoftComponentPath, i),
      r.push({ filePath: e.khulnasoftComponentPath, modifiedType: "create" }));
  }
}
async function Ea(e, t, r) {
  let n = `page.${e.typescriptEnabled ? "tsx" : "jsx"}`,
    o = e.join(t, "[...page]", n);
  if (!(await e.exists(o))) {
    let i = await e.formatCode(
      o,
      Rr({ sys: e, routePath: o, modelName: "page" }),
    );
    (await e.writeFile(o, i), r.push({ filePath: o, modifiedType: "create" }));
  }
  if (!(await e.exists(e.khulnasoftComponentPath))) {
    let i = await e.formatCode(e.khulnasoftComponentPath, Ir(e));
    (await e.writeFile(e.khulnasoftComponentPath, i),
      r.push({ filePath: e.khulnasoftComponentPath, modifiedType: "create" }));
  }
}
function Ir(e) {
  let t = e.typescriptEnabled;
  return e.sdkVersion === w.gen2
    ? `
  "use client";
  import { ${t ? "KhulnasoftContent, " : ""} isPreviewing, Content } from "@khulnasoft.com/sdk-react";
  import DefaultErrorPage from "next/error";
  import { CUSTOM_COMPONENTS } from ${JSON.stringify(B(e, e.khulnasoftComponentPath, e.registryPath))};
  ${
    t
      ? `
interface KhulnasoftPageProps {
      content: KhulnasoftContent | null;
      model: string;
      }`
      : ""
  }

  // Khulnasoft Public API Key set in .env file
  const khulnasoftApiKey = process.env.${xe}${t ? "!" : ""};

  export function RenderKhulnasoftContent({ content, model }${t ? ": KhulnasoftPageProps" : ""}) {
    // Call the isPreviewing hook to determine if
    // the page is being previewed in Khulnasoft
    // If "content" has a value or the page is being previewed in Khulnasoft,
    // render the KhulnasoftComponent with the specified content and model props.
    if (content || isPreviewing()) {
      return <Content
        content={content}
        apiKey={khulnasoftApiKey}
        model={model}
        customComponents={CUSTOM_COMPONENTS}
      />;
    }
    // If the "content" is falsy and the page is
    // not being previewed in Khulnasoft, render the
    // DefaultErrorPage with a 404.
    return <DefaultErrorPage statusCode={404} />;
  }
  `.trimStart()
    : `
"use client";
${t ? 'import { ComponentProps } from "react";' : ""}
import { KhulnasoftComponent, useIsPreviewing } from "@khulnasoft.com/react";
import { ${t ? "KhulnasoftContent, " : ""}khulnasoft } from '@khulnasoft.com/sdk';
import DefaultErrorPage from "next/error";
import ${JSON.stringify(B(e, e.khulnasoftComponentPath, e.registryPath))};
${
  t
    ? `
type KhulnasoftPageProps = ComponentProps<typeof KhulnasoftComponent>;`
    : ""
}

// Khulnasoft Public API Key set in .env file
khulnasoft.init(process.env.${xe}${t ? "!" : ""});

export function RenderKhulnasoftContent({ content, model }${t ? ": KhulnasoftPageProps" : ""}) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Khulnasoft
  const isPreviewing = useIsPreviewing();
  // If "content" has a value or the page is being previewed in Khulnasoft,
  // render the KhulnasoftComponent with the specified content and model props.
  if (content || isPreviewing) {
    return <KhulnasoftComponent content={content} model={model} />;
  }
  // If the "content" is falsy and the page is
  // not being previewed in Khulnasoft, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />;
}
`.trimStart();
}
function Tr(e) {
  return e.features.asyncParams
    ? `
interface PageProps {
      params: Promise<{
        page: string[];
      }>;
    }`
    : `
interface PageProps {
      params: {
        page: string[];
      };
    }`;
}
function Rr({ sys: e, routePath: t, modelName: r }) {
  let n = e.typescriptEnabled,
    o = B(e, t, e.khulnasoftComponentPath);
  return e.sdkVersion === w.gen2
    ? `
import { fetchOneEntry } from "@khulnasoft.com/sdk-react";
import { RenderKhulnasoftContent } from ${JSON.stringify(o)};

// Khulnasoft Public API Key set in .env file
const PUBLIC_API_KEY = process.env.${xe}${n ? "!" : ""};

${n ? Tr(e) : ""}

export default async function Page(props${n ? ": PageProps" : ""}) {
  const khulnasoftModelName = "${r}";

  // Use the page path specified in the URL to fetch the content
  const urlPath = "/" + (${e.features.asyncParams ? "(await props?.params)" : "props?.params"}?.page?.join("/") || "");

  const content = await fetchOneEntry({
   // Get the page content from Khulnasoft with the specified options
    apiKey: PUBLIC_API_KEY,
    model: khulnasoftModelName,
    userAttributes: { urlPath },
  });

  return (
    <>
      {/* Render the Khulnasoft page */}
      <RenderKhulnasoftContent content={content} model={khulnasoftModelName} />
    </>
  );
}
`.trimStart()
    : `
import { khulnasoft } from "@khulnasoft.com/sdk";
import { RenderKhulnasoftContent } from ${JSON.stringify(o)};

// Khulnasoft Public API Key set in .env file
khulnasoft.init(process.env.${xe}${n ? "!" : ""});
${n ? Tr(e) : ""}

export default async function Page(props${n ? ": PageProps" : ""}) {
  const khulnasoftModelName = "${r}";

  const content = await khulnasoft
    // Get the page content from Khulnasoft with the specified options
    .get(khulnasoftModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (${e.features.asyncParams ? "(await props?.params)" : "props?.params"}?.page?.join("/") || ""),
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Khulnasoft page */}
      <RenderKhulnasoftContent content={content} model={khulnasoftModelName} />
    </>
  );
}
`.trimStart();
}
async function Sa(e, t, r) {
  let n = `[...page].${e.typescriptEnabled ? "tsx" : "jsx"}`,
    o = e.join(t, n);
  if (!(await e.exists(o))) {
    let i = await e.formatCode(
      o,
      Nr({ sys: e, routePath: o, modelName: "page" }),
    );
    (await e.writeFile(o, i), r.push({ filePath: o, modifiedType: "create" }));
  }
}
async function Aa(e, t, r) {
  let n = `figma-imports.${e.typescriptEnabled ? "tsx" : "jsx"}`,
    o = e.join(t, n);
  if (!(await e.exists(o))) {
    let i = await e.formatCode(
      o,
      Nr({ sys: e, routePath: o, modelName: "figma-imports" }),
    );
    (await e.writeFile(o, i), r.push({ filePath: o, modifiedType: "create" }));
  }
}
function Nr({ sys: e, routePath: t, modelName: r }) {
  let n = e.typescriptEnabled;
  return e.sdkVersion === w.gen2
    ? `
import React from "react";
import { useRouter } from "next/router";
${n ? 'import type { KhulnasoftContent } from "@khulnasoft.com/sdk-react";' : ""}
import {
  Content,
  fetchEntries,
  fetchOneEntry,
  isPreviewing,
} from "@khulnasoft.com/sdk-react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
${n ? 'import { GetStaticProps } from "next";' : ""}
import { CUSTOM_COMPONENTS } from ${JSON.stringify(B(e, e.khulnasoftComponentPath, e.registryPath))};

const KHULNASOFT_API_KEY = process.env.${xe}${n ? "!" : ""};

// Define a function that fetches the Khulnasoft
// content for a given page
export const getStaticProps${n ? ": GetStaticProps" : ""} = async ({ params }) => {
  ${e.features.asyncParams ? "await params;" : ""}
  const urlPath =
    "/" +
    (Array.isArray(params?.page) ? params.page.join("/") : params?.page || "");

  // Fetch the khulnasoft content for the given page
  const page = await fetchOneEntry({
    apiKey: KHULNASOFT_API_KEY,
    model: "${r}",
    userAttributes: { urlPath },
  });

  return {
    // Return the page content as props
    props: { page },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};

${
  r === "page"
    ? `
// Define a function that generates the
// static paths for all pages in Khulnasoft
export async function getStaticPaths() {
  // Get a list of all pages in Khulnasoft
  const pages = await fetchEntries({
    apiKey: KHULNASOFT_API_KEY,
    model: "page",
    // We only need the URL field
    fields: "data.url",
    options: { noTargeting: true },
  });
  // Generate the static paths for all pages in Khulnasoft
  return {
    paths: pages.map((page) => \`\${page.data?.url}\`),
    fallback: "blocking",
  };
}
`
    : ""
}

// Define the Page component
export default function Page(props${n ? ": { page: KhulnasoftContent | null }" : ""}) {
  const router = useRouter();
  const canShowContent = props.page || isPreviewing(router.asPath);

  // If the page content is not available
  // and not in preview/editing mode, show a 404 error page
  if (!canShowContent) {
    return <DefaultErrorPage statusCode={404} />;
  }

  // If the page content is available, render
  // the KhulnasoftComponent with the page content
  return (
    <>
      <Head>
        <title>{props.page?.data?.title}</title>
      </Head>
      {/* Render the Khulnasoft page */}
      <Content
        model="${r}"
        content={props.page}
        apiKey={KHULNASOFT_API_KEY}
        customComponents={CUSTOM_COMPONENTS}
      />
    </>
  );
}

    `
    : `
import React from "react";
import { useRouter } from "next/router";
import { KhulnasoftComponent, khulnasoft, useIsPreviewing } from "@khulnasoft.com/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";${
        n
          ? `
import { KhulnasoftContent } from "@khulnasoft.com/sdk";`
          : ""
      }${
        n
          ? `
import { GetStaticProps } from "next";`
          : ""
      }
import ${JSON.stringify(B(e, t, e.registryPath))};

khulnasoft.init(process.env.${xe}${n ? "!" : ""});

// Define a function that fetches the Khulnasoft
// content for a given page
export const getStaticProps${n ? ": GetStaticProps" : ""} = async ({ params }) => {
  ${e.features.asyncParams ? "await params;" : ""}
  // Fetch the khulnasoft content for the given page
  const page = await khulnasoft
    .get("${r}", {
      userAttributes: {
        urlPath: "/" + ((params?.page${n ? " as string[]" : ""})?.join("/") || ""),
      },
    })
    .toPromise();

  // Return the page content as props
  return {
    props: {
      page: page || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};

${
  r === "page"
    ? `// Define a function that generates the
// static paths for all pages in Khulnasoft
export async function getStaticPaths() {
  // Get a list of all pages in Khulnasoft
  const pages = await khulnasoft.getAll("page", {
    // We only need the URL field
    fields: "data.url",
    options: { noTargeting: true },
  });

  // Generate the static paths for all pages in Khulnasoft
  return {
    paths: pages.map((page) => String(page.data?.url)).filter(url => url !== '/'),
    fallback: 'blocking',
  };
}`
    : ""
}

// Define the Page component
export default function Page({ page }${n ? ": { page: KhulnasoftContent | null }" : ""}) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  // If the page content is available, render
  // the KhulnasoftComponent with the page content
  return (
    <>
      <Head>
        <title>{page?.data?.title}</title>
      </Head>
      {/* Render the Khulnasoft page */}
      <KhulnasoftComponent model="${r}" content={page || undefined} />
    </>
  );
}
`.trimStart();
}
async function Fa(e, t) {
  let n = e.typescriptEnabled ? "tsx" : "jsx",
    o = e.join(e.componentsDir, "Counter"),
    i = e.join(o, `Counter.${n}`),
    a = e.join(o, "styles.module.css"),
    { component: s, styles: u } = Pa(e);
  if (!(await e.exists(i))) {
    let p = await e.formatCode(i, s);
    (await e.writeFile(i, p), t.push({ filePath: i, modifiedType: "create" }));
  }
  return (
    (await e.exists(a)) ||
      (await e.writeFile(a, u),
      t.push({ filePath: a, modifiedType: "create" })),
    i
  );
}
function Pa(e) {
  let t = e.typescriptEnabled,
    r = `
"use client"
import React, { useState } from "react";
import styles from "./styles.module.css";
${
  t
    ? `
interface CounterProps {
  initialCount?: number;
}`
    : ""
}

function Counter({ initialCount = 99 }${t ? ": CounterProps" : ""}) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={styles.counter}>
      <button className={styles.btn} onClick={decrement}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn} onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
`.trimStart(),
    n = `
.counter {
  margin: 32px auto;
  display: flex;
  width: 100%;
  max-width: 190px;
}

.btn {
  width: 42px;
  font-size: 32px;
  font-weight: bold;
  background-color: #1c6bd1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  line-height: 1.4;
}

.btn:hover {
  opacity: 0.8;
}

.count {
  flex: 1;
  font-size: 42px;
  text-align: center;
}
`.trimStart();
  return { component: r, styles: n };
}
async function Br(e, t, r) {
  if (!(await e.exists(e.registryPath))) {
    if (e.sdkVersion === w.gen2) {
      let i = ya(e);
      await e.writeFile(e.registryPath, i);
    } else await e.writeFile(e.registryPath, "");
    t.push({ filePath: e.registryPath, modifiedType: "create" });
  }
  if (!r) return;
  let o = (await we(e, null, !1, !1, null, null, !1, !1)).components.find(
    (i) => i.filePath === r,
  );
  o && (await we(e, o.id, !0, !1, null, null, !0, !1));
}
function ya(e) {
  return e.typescriptEnabled
    ? `import type { RegisteredComponent } from "@khulnasoft.com/sdk-react";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
];`
    : `export const CUSTOM_COMPONENTS = [
  ];
  `;
}
async function pt(e) {
  let t = await ct(e, e.getRepoRootDir());
  if (t && typeof t == "object") {
    let r = new Set(Object.keys({ ...t.dependencies, ...t.devDependencies }));
    if (r.has("@khulnasoft.com/sdk-react")) return w.gen2;
    if (r.has("@khulnasoft.com/react")) return w.gen1;
  }
  return null;
}
async function Or(e) {
  let t = await wa(e);
  return {
    khulnasoftPageOptions: async () => ({
      templateContentId: "3de2f13211234071a4b19a17b4fbc5a7",
      pathname: "/khulnasoft-demo",
      title: "Khulnasoft + Next.js Demo Page",
    }),
    ensureKhulnasoftSetup: () => br(t),
    ensureFigmaImportPage: () => vr(t),
    getRegistryPath: () => t.registryPath,
    getRegistry: (n) =>
      we(t, null, !1, !1, null, null, !1, !!n?.readAllInputTypes),
    addExternalPackage: (n) => {
      t.addExternalPackage(n);
    },
    loadComponent: async (n) => {
      let o = await we(t, n.cmpId, !1, !1, null, null, !1, !1);
      return { ...o, component: o.components.find((i) => i.id === n.cmpId) };
    },
    registerComponent: (n) => we(t, n.cmpId, !0, !1, null, null, !0, !1),
    setRegisteredComponentInfo: (n) => we(t, n.cmpId, !1, !1, n, null, !0, !1),
    setRegisteredComponentInput: (n) => we(t, n.cmpId, !1, !1, null, n, !0, !1),
    unregisterComponent: (n) => we(t, n.cmpId, !1, !0, null, null, !0, !1),
    getPublicApiKey: () => dt(t),
    setPublicApiKey: (n) => tr(t, n.publicApiKey),
    getDependencies: (n) =>
      n.sdkVersion === w.gen2
        ? [
            { name: "@khulnasoft.com/dev-tools" },
            { name: "@khulnasoft.com/sdk-react" },
          ]
        : [
            { name: "@khulnasoft.com/dev-tools" },
            { name: "@khulnasoft.com/react" },
            { name: "@khulnasoft.com/sdk" },
          ],
    getDevRunCommand: () => "dev",
    getCache: () => De(t),
    setCache: (n) => Ce(t, n),
  };
}
async function wa(e) {
  let t = e.getAppRootDir(),
    r = e.join(t, "src"),
    n = await Ta(e),
    o = await re(e),
    i = e.getFrameworks().find((p) => p.name === "next"),
    a = { asyncParams: i?.version?.major !== void 0 && i.version.major >= 15 },
    s = {},
    u = {
      ...e,
      addExternalPackage: (p) => {
        s[e.join(t, p, "index.ts")] = `export * from "${p}";`;
      },
      readFileSync: (p) => s[p] ?? e.readFileSync(p),
      existsSync: (p) => !!s[p] || e.existsSync(p),
      readdirSync: (p) => {
        let m = e.readdirSync(p);
        return p === t
          ? [...m, ...Object.keys(s).map((f) => f.slice(t.length + 1))]
          : m;
      },
      readdir: async (p) => {
        let m = await e.readdir(p);
        return p === t
          ? [...m, ...Object.keys(s).map((f) => f.slice(t.length + 1))]
          : m;
      },
      appDir: null,
      pagesDir: null,
      srcDir: null,
      khulnasoftComponentPath: "",
      componentsDir: "",
      registryPath: "",
      nextConfigPath: n,
      typescriptEnabled: o,
      features: a,
    };
  if (
    (e.sdkVersion
      ? (u.sdkVersion = e.sdkVersion)
      : (u.sdkVersion = await pt(u)),
    await e.exists(r))
  ) {
    ((u.srcDir = r), (u.componentsDir = e.join(r, "components")));
    let p = e.join(r, "app");
    (await e.exists(p)) && (u.appDir = p);
    let m = e.join(r, "pages");
    ((await e.exists(m)) && (u.pagesDir = m),
      (u.registryPath = await ae(e, r)));
  } else
    ((u.componentsDir = e.join(t, "components")),
      (u.registryPath = await ae(e, t)));
  if (
    ((u.khulnasoftComponentPath = e.join(
      u.componentsDir,
      `khulnasoft.${o ? "tsx" : "jsx"}`,
    )),
    !u.appDir)
  ) {
    let p = e.join(t, "app");
    (await e.exists(p)) && (u.appDir = p);
  }
  if (!u.pagesDir) {
    let p = e.join(t, "pages");
    (await e.exists(p)) && (u.pagesDir = p);
  }
  if (!u.appDir && !u.pagesDir)
    throw new Error(
      `Could not find Next.js "app" or "pages" directory. Searched in "${t}".`,
    );
  return u;
}
async function Ta(e) {
  let t = e.join(e.getAppRootDir(), "next.config.ts");
  if (await e.exists(t)) return t;
  let r = e.join(e.getAppRootDir(), "next.config.mjs");
  if (await e.exists(r)) return r;
  let n = e.join(e.getAppRootDir(), "next.config.js");
  if (await e.exists(n)) return n;
  throw new Error(
    `Could not find Next.js config file. Searched for "next.config.ts", "next.config.mjs" and "next.config.js" in "${e.getAppRootDir()}".`,
  );
}
async function ht(e) {
  return await je(e, [".env"], Lr);
}
async function kr(e, t) {
  ba(t);
  let r = await ht(e),
    n = await Ve(e, r.file, r.envKey, t);
  return { ...r, modifiedType: n };
}
function ba(e) {
  typeof process < "u" && (process.env[Lr] = e);
}
var Lr = "PUBLIC_KHULNASOFT_API_KEY";
function _r(e, t, r) {
  if (r.length === 0) return e;
  let n = e.split(`
`),
    o = n.findIndex((s) => s.includes(r));
  if (o === -1 || n.some((s) => s.includes(t[0]))) return e;
  let a = ["/**", ...t.map((s) => ` * ${s.trim()}`), " */"];
  return (
    n.splice(o, 0, ...a),
    n.join(`
`)
  );
}
async function Vr(e, t) {
  let r = [],
    n = t.getSourceFiles(),
    o = t.getTypeChecker();
  return (
    await Promise.all(
      n.map(async (i) => {
        let a = e.basename(i.fileName);
        if (a.startsWith(".") || Ra.has(a)) return;
        let s = e.normalize(i.fileName);
        if (s === e.registryPath) return;
        let u = await kt(e, o, s, i);
        r.push(...u);
      }),
    ),
    r
  );
}
async function $r(e, t) {
  if (e.extname(t).toLowerCase() === ".tsx") {
    let n = await e.readFile(t);
    if (n) return va(e, t, n);
  }
  return null;
}
function va(e, t, r) {
  let n = I(e, r);
  return kt(e, null, t, n);
}
async function kt(e, t, r, n) {
  r = e.normalize(r);
  let o = [],
    i = ue(e, n);
  return (
    await Promise.all(
      i.map(async (a) => {
        let s = await Ia(e, t, r, a);
        s && o.push(s);
      }),
    ),
    o
  );
}
async function Ia(e, t, r, n) {
  let o = e.relative(e.getAppRootDir(), r),
    i = V(e, r);
  if (e.ts.isVariableStatement(n.node))
    for (let a of n.node.declarationList.declarations) {
      let s = jr(e, a.initializer);
      if (s && e.ts.isIdentifier(a.name)) {
        let u = a.name.text;
        return {
          cmpInfo: {
            id: await $(e, r, u),
            displayFilePath: k(e, r),
            name: K(u),
            inputs: [],
            exportName: n.isDefaultExport ? "default" : u,
            exportType: n.isDefaultExport ? "default" : "named",
            importName: u,
            filePath: r,
            relFilePath: o,
            importPath: i,
          },
          node: s,
        };
      }
    }
  else if (e.ts.isCallExpression(n.node)) {
    let a = jr(e, n.node);
    if (a)
      return {
        cmpInfo: {
          id: await $(e, r, "default"),
          displayFilePath: k(e, r),
          name: se(e, r),
          inputs: [],
          exportName: "default",
          exportType: "default",
          importName: qe(e, r),
          filePath: r,
          relFilePath: o,
          importPath: i,
        },
        node: a,
      };
  }
  return null;
}
function jr(e, t) {
  if (
    t &&
    e.ts.isCallExpression(t) &&
    e.ts.isIdentifier(t.expression) &&
    t.expression.text === "component$" &&
    t.arguments.length > 0
  ) {
    let r = t.arguments[0];
    if (e.ts.isArrowFunction(r) || e.ts.isFunctionExpression(r))
      return { callExpression: t, fnNode: r };
  }
  return null;
}
var Ra = new Set(["node_modules", "layout.tsx", "404.tsx", "router-head.tsx"]);
async function Kr(e, t) {
  let r = t.node.fnNode;
  if (
    (e.ts.isArrowFunction(r) || e.ts.isFunctionExpression(r)) &&
    r.parameters.length > 0
  ) {
    let { sourceFile: o, typeChecker: i } = await rt(
      e,
      t.cmpInfo.filePath,
      null,
    );
    if (
      !(await kt(e, i, t.cmpInfo.filePath, o)).find(
        (u) => u.cmpInfo.id === t.cmpInfo.id,
      )
    )
      throw new Error(
        `createComponentInputs() Could not find component ${t.cmpInfo.name} in ${t.cmpInfo.filePath}`,
      );
    return Qe(e, i, r);
  }
  return [];
}
async function Mr(e) {
  return cn(e);
}
async function cn(e) {
  let t = [];
  return (
    (await e.exists(e.registryPath)) ||
      (await e.writeFile(e.registryPath, Na),
      t.push({ filePath: e.registryPath, modifiedType: "create" })),
    t
  );
}
var Na = `import type { RegisteredComponent } from "@khulnasoft.com/sdk-qwik";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
];
`;
async function Ur(e) {
  await cn(e);
  let t = await e.readFile(e.registryPath);
  return t ? Ba(e, t) : { components: [], sourceFile: I(e, "") };
}
async function Ba(e, t) {
  let r = I(e, t);
  return Oa(e, r);
}
async function Oa(e, t) {
  let r = [],
    n = J(e, t, "CUSTOM_COMPONENTS");
  return (
    n &&
      (await Promise.all(
        n.arrayLiteralExp.elements.map(async (o, i) => {
          let a = await mn(e, t, o);
          a && ((a.nodeIndex = i), r.push(a));
        }),
      )),
    { sourceFile: t, components: te(r) }
  );
}
async function mn(e, t, r) {
  if (!e.ts.isObjectLiteralExpression(r)) return null;
  let n = {
    id: "",
    name: "",
    displayFilePath: "",
    exportName: "",
    importName: "",
    filePath: "",
    relFilePath: "",
    importPath: "",
    inputs: [],
  };
  for (let o of r.properties) {
    if (!e.ts.isPropertyAssignment(o) || !e.ts.isIdentifier(o.name)) continue;
    if (N(e, o) === "component" && e.ts.isIdentifier(o.initializer)) {
      let a = o.initializer.text;
      (n.name === "" && (n.name = K(a)), (n.importName = a));
      let s = await he(e, e.registryPath, t, a);
      if (!s) continue;
      ((n.filePath = s.filePath),
        (n.relFilePath = s.relFilePath),
        (n.importPath = V(e, s.filePath)),
        (n.displayFilePath = s.displayFilePath),
        (n.exportType = s.exportType));
      let u = await $r(e, s.filePath);
      if (u && u.length > 0)
        if (u.length === 1) n.exportName = u[0].cmpInfo.exportName;
        else {
          let p = u.find((m) => m.cmpInfo.exportName === a);
          p && (n.exportName = p.cmpInfo.exportName);
        }
      continue;
    }
  }
  return (
    (n = ne(e, n, r)),
    n.filePath && n.exportName && (n.id = await $(e, n.filePath, n.exportName)),
    n
  );
}
async function zr(e) {
  let t = new Set(),
    r = async (o) => {
      let i = await e.readdir(o);
      await Promise.all(
        i.map(async (a) => {
          if (a.startsWith(".") || a === "node_modules") return;
          let s = e.join(o, a),
            u = e.extname(a).toLowerCase();
          if (u === ".tsx" || u === ".ts") {
            t.add(s);
            return;
          }
          (await e.stat(s)).isDirectory() && (await r(s));
        }),
      );
    };
  return (await r(e.getAppRootDir()), await G(e, [...t]));
}
async function We(e, t, r, n, o, i, a, s) {
  let u = await zr(e),
    [p, m, f] = await Promise.all([Vr(e, u), Ur(e), ht(e)]),
    c = p.map((l) => l.cmpInfo),
    d = m.components,
    C = {
      components: me(c, d),
      registryPath: e.registryPath,
      registryDisplayPath: k(e, e.registryPath),
      frameworks: e.getFrameworks(),
      dependencies: Ee(c),
      publicApiKey: f.envValue ?? void 0,
      devToolsVersion: e.version,
    };
  if (s) return C;
  if (t != null) {
    let l = p.find((F) => F.cmpInfo.id === t);
    if (!l) throw new Error(`Component ${t} not found`);
    let D = m.sourceFile,
      g = C.components.find((F) => F.id === t),
      x = await Kr(e, l);
    (ie(g, x), (t = Array.isArray(t) ? t[0] : t));
    let E = Pe(t, c, d, r, n, o, i),
      {
        elements: P,
        elmIndex: A,
        statementIndex: S,
        statement: O,
        variableDeclaration: z,
      } = await La(e, D, l),
      j = !1;
    if (
      (E.addCmpToRegistry
        ? (P.push(ka(e, E.addCmpToRegistry)), (j = !0))
        : E.removeCmpFromRegistry
          ? (P.splice(A, 1), (j = !0))
          : E.updateRegisteredCmp &&
            ((P[A] = Q(e, P[A], E.updateRegisteredCmp)), (j = !0)),
      j && a)
    ) {
      let F = [...D.statements];
      ((F[S] = e.ts.factory.updateVariableStatement(
        O,
        O.modifiers,
        e.ts.factory.updateVariableDeclarationList(O.declarationList, [
          e.ts.factory.updateVariableDeclaration(
            z,
            z.name,
            z.exclamationToken,
            z.type,
            e.ts.factory.createArrayLiteralExpression(Ae(e, P)),
          ),
        ]),
      )),
        (D = e.ts.factory.updateSourceFile(D, F)),
        g.exportType === "named"
          ? (D = v(e, D, {
              namedImports: [g.importName],
              importPath: B(e, e.registryPath, g.filePath),
            }))
          : (D = v(e, D, {
              defaultImport: g.importName,
              importPath: B(e, e.registryPath, g.filePath),
            })),
        (D = v(e, D, {
          namedImports: ["RegisteredComponent"],
          importPath: "@khulnasoft.com/sdk-qwik",
          isTypeOnly: !0,
        })),
        (D = ye(e, D, {
          variableName: "CUSTOM_COMPONENTS",
          arrayType: "RegisteredComponent",
        })),
        (D = Fe(e, D)),
        (D = Se(e, D)));
      let y = _(e, D);
      ((y = pe(y)),
        (y = _r(y, _a, "CUSTOM_COMPONENTS")),
        (y = await e.formatCode(e.registryPath, y)),
        await e.writeFile(e.registryPath, y));
    }
    C.components = E.components;
  }
  return C;
}
function ka(e, t) {
  return Q(
    e,
    e.ts.factory.createObjectLiteralExpression(
      [
        e.ts.factory.createPropertyAssignment(
          "component",
          e.ts.factory.createIdentifier(t.importName),
        ),
      ],
      !0,
    ),
    t,
  );
}
async function La(e, t, r) {
  let n = J(e, t, "CUSTOM_COMPONENTS");
  if (!n)
    throw new Error(
      `Exported name of the Khulnasoft registry must be "CUSTOM_COMPONENTS". Please update your Khulnasoft registry file: ${e.registryPath}`,
    );
  let o = n.arrayLiteralExp.elements.filter((a) =>
      e.ts.isObjectLiteralExpression(a),
    ),
    i = -1;
  for (let a = 0; a < o.length; a++)
    if ((await mn(e, t, o[a]))?.id === r.cmpInfo.id) {
      i = a;
      break;
    }
  return { ...n, elements: o, elmIndex: i };
}
var _a = [
  "This array is used to integrate custom components within Khulnasoft.",
  "https://www.khulnasoft.com/c/docs/custom-components-intro",
  "",
  'These components will be found the "Custom Components"',
  "section of Khulnasoft's visual editor.",
  'You can also turn on "components only mode" to limit',
  "editing to only these components.",
  "https://www.khulnasoft.com/c/docs/guides/components-only-mode",
];
async function qr(e) {
  let t = await ja(e);
  return {
    khulnasoftPageOptions: async () => ({
      templateContentId: "dc70f1d979ad416d8fd357137eb9ddfb",
      pathname: "/",
      title: "Khulnasoft + Qwik Demo Page",
    }),
    ensureKhulnasoftSetup: () => Mr(t),
    ensureFigmaImportPage: async () => [],
    getRegistryPath: () => t.registryPath,
    getRegistry: (n) =>
      We(t, null, !1, !1, null, null, !1, !!n?.readAllInputTypes),
    addExternalPackage: async (n) => {},
    loadComponent: async (n) => {
      let o = await We(t, n.cmpId, !1, !1, null, null, !1, !1);
      return { ...o, component: o.components.find((i) => i.id === n.cmpId) };
    },
    registerComponent: (n) => We(t, n.cmpId, !0, !1, null, null, !0, !1),
    setRegisteredComponentInfo: (n) => We(t, n.cmpId, !1, !1, n, null, !0, !1),
    setRegisteredComponentInput: (n) => We(t, n.cmpId, !1, !1, null, n, !0, !1),
    unregisterComponent: (n) => We(t, n.cmpId, !1, !0, null, null, !0, !1),
    getPublicApiKey: () => ht(t),
    setPublicApiKey: (n) => kr(t, n.publicApiKey),
    getDependencies: (n) => [
      { name: "@khulnasoft.com/dev-tools" },
      { name: "@khulnasoft.com/sdk-qwik" },
    ],
    getDevRunCommand: () => "dev",
    getCache: () => De(t),
    setCache: (n) => Ce(t, n),
  };
}
async function ja(e) {
  let t = await mt(e, e.getAppRootDir(), "components");
  if (!t)
    throw new Error(
      `Could not find components directory within project: ${e.getAppRootDir()}`,
    );
  let r = await ae(e, t),
    n = e.join(e.getAppRootDir(), ".env");
  return { ...e, componentsDir: t, registryPath: r, envPath: n };
}
async function Et(e) {
  return await je(e, [".env"], St);
}
async function Jr(e, t) {
  let r = await Et(e),
    n = await Ve(e, r.file, r.envKey, t);
  return { ...r, modifiedType: n };
}
var St = "PUBLIC_KHULNASOFT_KEY";
var Va = new Set(["dist", "node_modules"]);
async function Qr(e, t) {
  let r = [],
    n = t.getSourceFiles(),
    o = t.getTypeChecker(),
    i = e.join(e.getAppRootDir(), "build");
  return (
    await Promise.all(
      n.map(async (a) => {
        let s = e.basename(a.fileName);
        if (
          s.startsWith(".") ||
          s === "node_modules" ||
          It(e, Va, a.fileName) ||
          $a.has(s) ||
          s.includes("$.")
        )
          return;
        let u = e.normalize(a.fileName);
        if (u === e.remixConfigPath || u === i) return;
        let p = await $e(e, o, u, a, u === e.registryPath);
        r.push(...p);
      }),
    ),
    r
  );
}
var $a = new Set([
  "root.tsx",
  "root.ts",
  "root.jsx",
  "root.js",
  "_index.tsx",
  "_index.jsx",
  "_index.ts",
  "_index.js",
]);
async function Wr(e) {
  await Lt(e);
  let t = await e.readFile(e.registryPath);
  return t ? Ka(e, t) : { components: [], sourceFile: I(e, "") };
}
async function Ka(e, t) {
  let r = I(e, t);
  return Ma(e, r);
}
async function Ma(e, t) {
  let r = [],
    n = J(e, t, "CUSTOM_COMPONENTS");
  return (
    n &&
      (await Promise.all(
        n.arrayLiteralExp.elements.map(async (o, i) => {
          let a = await fn(e, t, o);
          a && ((a.nodeIndex = i), r.push(a));
        }),
      )),
    { sourceFile: t, components: te(r) }
  );
}
async function fn(e, t, r) {
  if (!e.ts.isObjectLiteralExpression(r)) return null;
  let n = {
    id: "",
    name: "",
    displayFilePath: "",
    exportName: "",
    importName: "",
    filePath: "",
    relFilePath: "",
    importPath: "",
    inputs: [],
    acceptsChildren: !1,
  };
  e.sdkVersion === w.gen2 && nt(e, r) && (n.acceptsChildren = !0);
  for (let o of r.properties) {
    if (!e.ts.isPropertyAssignment(o) || !e.ts.isIdentifier(o.name)) continue;
    if (N(e, o) === "component") {
      let a,
        { initializer: s } = o;
      if (e.ts.isIdentifier(s)) a = s.text;
      else if (e.ts.isCallExpression(s)) {
        (e.ts.isIdentifier(s.expression) && s.expression.text) ===
          "withChildren" && (n.acceptsChildren = !0);
        let m = s.arguments[0];
        e.ts.isIdentifier(m) && (a = m.text);
      }
      if (!a) continue;
      (n.name === "" && (n.name = K(a)), (n.importName = a));
      let u = await he(e, e.registryPath, t, a);
      if (!u) continue;
      if (
        ((n.filePath = u.filePath),
        (n.relFilePath = u.relFilePath),
        (await e.exists(u.filePath))
          ? (n.importPath = V(e, u.filePath))
          : ((n.externalImportPath = u.importPath),
            (n.importPath = n.externalImportPath)),
        (n.displayFilePath = u.displayFilePath),
        (n.exportType = u.exportType),
        n.externalImportPath)
      )
        n.exportName = a;
      else {
        let p = await dr(
          e,
          u.filePath,
          e.registryPath === u.filePath || ge(u.filePath),
        );
        if (p && p.length > 0)
          if (p.length === 1) n.exportName = p[0].cmpInfo.exportName;
          else {
            let m = p.find((f) => f.cmpInfo.exportName === a);
            m && (n.exportName = m.cmpInfo.exportName);
          }
      }
      continue;
    }
  }
  return (
    (n = ne(e, n, r)),
    n.filePath &&
      n.exportName &&
      (n.id = await $(e, n.filePath, n.exportName, n.externalImportPath)),
    n
  );
}
async function Te(e, t, r, n, o, i, a, s) {
  let u = await Ke(e),
    [p, m, f] = await Promise.all([Qr(e, u), Wr(e), Et(e)]),
    c = p.map((x) => x.cmpInfo),
    d = m.components,
    C = {
      components: me(c, d),
      registryPath: e.registryPath,
      registryDisplayPath: k(e, e.registryPath),
      frameworks: e.getFrameworks(),
      dependencies: Ee(c),
      publicApiKey: f.envValue ?? void 0,
      devToolsVersion: e.version,
    };
  if (s) return ((C.components = await at(e, C.components)), C);
  let l = !1,
    D = m.sourceFile,
    g = Array.isArray(t) ? t : typeof t == "string" ? [t] : [];
  if (g.length > 0) {
    let x = g.map((A) => {
        let S = p.find((O) => O.cmpInfo.id === A);
        if (!S) throw new Error(`Component ${A} not found`);
        return S;
      }),
      E = Array.from(new Set(x.map((A) => A.cmpInfo.filePath))),
      P = await G(e, E);
    for (let A of x) {
      let S = C.components.find((L) => L.id === A.cmpInfo.id),
        O = await st(
          e,
          A,
          P,
          e.registryPath === A.cmpInfo.filePath || ge(A.cmpInfo.filePath),
        );
      ie(S, O);
      let z = c.findIndex((L) => L.id === A.cmpInfo.id);
      c[z].inputs = O;
      let j = Pe(A.cmpInfo.id, c, d, r, n, o, i),
        {
          elements: F,
          elmIndex: y,
          statementIndex: H,
          statement: le,
          variableDeclaration: Y,
        } = await za(e, D, A);
      if (j.addCmpToRegistry) (F.push(Ua(e, j.addCmpToRegistry)), (l = !0));
      else if (j.removeCmpFromRegistry) (F.splice(y, 1), (l = !0));
      else if (j.updateRegisteredCmp) {
        let L = Q(e, F[y], j.updateRegisteredCmp);
        ((F[y] = e.ts.factory.updateObjectLiteralExpression(L, [
          Yr(e, j.updateRegisteredCmp),
          ...L.properties.slice(1),
        ])),
          (l = !0));
      }
      if (l && a) {
        let L = [...D.statements];
        ((L[H] = e.ts.factory.updateVariableStatement(
          le,
          le.modifiers,
          e.ts.factory.updateVariableDeclarationList(le.declarationList, [
            e.ts.factory.updateVariableDeclaration(
              Y,
              Y.name,
              Y.exclamationToken,
              Y.type,
              e.ts.factory.createArrayLiteralExpression(Ae(e, F)),
            ),
          ]),
        )),
          (D = e.ts.factory.updateSourceFile(D, L)),
          S.exportType === "named"
            ? (D = v(e, D, {
                namedImports: [S.importName],
                importPath: S.externalImportPath
                  ? S.externalImportPath
                  : B(e, e.registryPath, S.filePath),
              }))
            : (D = v(e, D, {
                defaultImport: S.importName,
                importPath: S.externalImportPath
                  ? S.externalImportPath
                  : B(e, e.registryPath, S.filePath),
              })));
        let X =
          e.sdkVersion === w.gen2
            ? "@khulnasoft.com/sdk-react"
            : "@khulnasoft.com/react";
        ((D = v(e, D, {
          namedImports: ["RegisteredComponent"],
          importPath: X,
          isTypeOnly: !0,
        })),
          S.acceptsChildren &&
            e.sdkVersion !== w.gen2 &&
            (D = v(e, D, {
              namedImports: ["withChildren"],
              importPath: "@khulnasoft.com/react",
            })),
          (D = ye(e, D, {
            variableName: "CUSTOM_COMPONENTS",
            arrayType: "RegisteredComponent",
          })),
          (C.components = j.components),
          (d = j.components.filter((ze) => ze.isRegistered)));
      }
    }
  }
  if (l && a) {
    ((D = Fe(e, D)), (D = Se(e, D)));
    let x = _(e, D);
    ((x = pe(x)),
      (x = await e.formatCode(e.registryPath, x)),
      await e.writeFile(e.registryPath, x));
  }
  return C;
}
function Yr(e, t) {
  if (e.sdkVersion === w.gen2)
    return e.ts.factory.createPropertyAssignment(
      "component",
      e.ts.factory.createIdentifier(t.importName),
    );
  let r = e.ts.factory.createIdentifier(t.importName),
    n = t.acceptsChildren
      ? e.ts.factory.createCallExpression(
          e.ts.factory.createIdentifier("withChildren"),
          void 0,
          [r],
        )
      : r;
  return e.ts.factory.createPropertyAssignment("component", n);
}
function Ua(e, t) {
  return Q(
    e,
    e.ts.factory.createObjectLiteralExpression(
      [
        Yr(e, t),
        ...(t.acceptsChildren && e.sdkVersion === w.gen2
          ? [
              e.ts.factory.createPropertyAssignment(
                "canHaveChildren",
                e.ts.factory.createTrue(),
              ),
            ]
          : []),
      ],
      !0,
    ),
    t,
  );
}
async function za(e, t, r) {
  let n = J(e, t, "CUSTOM_COMPONENTS");
  if (!n)
    throw new Error(
      `Exported name of the Khulnasoft registry must be "CUSTOM_COMPONENTS". Please update your Khulnasoft registry file: ${e.registryPath}`,
    );
  let o = n.arrayLiteralExp.elements.filter((a) =>
      e.ts.isObjectLiteralExpression(a),
    ),
    i = -1;
  for (let a = 0; a < o.length; a++)
    if ((await fn(e, t, o[a]))?.id === r.cmpInfo.id) {
      i = a;
      break;
    }
  return { ...n, elements: o, elmIndex: i };
}
async function Gr(e) {
  let t = [],
    r = await Qa(e, t);
  return (t.push(...(await Lt(e))), await Ya(e, r), await Ja(e, t), t);
}
async function Hr(e) {
  let t = [];
  return (t.push(...(await Lt(e))), await qa(e, t), t);
}
async function qa(e, t) {
  let r = `figma-imports.${e.typescriptEnabled ? "tsx" : "jsx"}`;
  e.hasLocaleParam &&
    (e.debug("remixEnsureFigmaImportRoute, hasLocaleParam"),
    (r = `($locale).${r}`));
  let n = e.join(e.routesDir, r),
    o = await e.exists(n);
  e.debug(`remixEnsureFigmaImportRoute, hasRoute: ${o}`);
  let i = await e.formatCode(
    n,
    Xr({ sys: e, routePath: n, modelName: "figma-imports" }),
  );
  (await e.writeFile(n, i),
    t.push({ filePath: n, modifiedType: o ? "update" : "create" }));
}
async function Ja(e, t) {
  let r = `$.${e.typescriptEnabled ? "tsx" : "jsx"}`;
  (e.hasLocaleParam &&
    (e.debug("remixEnsureAppRoute, hasLocaleParam"), (r = `($locale).${r}`)),
    e.sdkVersion === w.gen2 &&
      (r = `($slug)._index.${e.typescriptEnabled ? "tsx" : "jsx"}`));
  let n = e.join(e.routesDir, r),
    o = await e.exists(n);
  e.debug(`remixEnsureAppRoute, hasRoute: ${o}`);
  let i = await e.formatCode(
    n,
    Xr({ sys: e, routePath: n, modelName: "page" }),
  );
  (await e.writeFile(n, i),
    t.push({ filePath: n, modifiedType: o ? "update" : "create" }));
}
function Xr({ sys: e, routePath: t, modelName: r }) {
  let n = e.typescriptEnabled,
    o = B(e, t, e.registryPath),
    i = "",
    a = "";
  n &&
    ((i = "import type { LoaderArgs } from '@remix-run/server-runtime';"),
    (a = ": LoaderArgs"));
  let s = `process.env.${St}`;
  return (
    e.getFrameworks().some((u) => u.name === "@shopify/remix-oxygen") &&
      (s = `context.env.${St}`),
    n && (s += "!"),
    e.sdkVersion === w.gen2
      ? `
    
import {
  Content,
  fetchOneEntry,
  getKhulnasoftSearchParams,
  isPreviewing,
} from "@khulnasoft.com/sdk-react";
${n ? 'import type { LoaderFunctionArgs } from "@remix-run/node";' : ""}
import { useLoaderData } from "@remix-run/react";
import { fetch ${n ? "as webFetch" : ""}} from "@remix-run/web-fetch";
import { CUSTOM_COMPONENTS } from ${JSON.stringify(o)};

export const loader = async ({ params, request }${n ? ": LoaderFunctionArgs" : ""}) => {
  const khulnasoftApiKey = ${s};
  const url = new URL(request.url);
  const urlPath = \`/\${params["slug"] || ""}\`;

  const page = await fetchOneEntry({
    model: "${r}",
    apiKey: khulnasoftApiKey,
    options: getKhulnasoftSearchParams(url.searchParams),
    userAttributes: { urlPath },
    fetch: webFetch,
  });

  if (!page && !isPreviewing(url.search)) {
    throw new Response("Page Not Found", {
      status: 404,
      statusText: "Page not found in Khulnasoft.com",
    });
  }

  return { page, khulnasoftApiKey };
};

// Define and render the page.
export default function Page() {
  const { page, khulnasoftApiKey } = useLoaderData${n ? "<typeof loader>" : ""}();
  // Render the page content from Khulnasoft.com
  return (
    <Content
      model="${r}"
      apiKey={khulnasoftApiKey}
      content={page}
      customComponents={CUSTOM_COMPONENTS}
    />
  );
}
    `
      : `
import { KhulnasoftComponent, khulnasoft } from "@khulnasoft.com/react";
import { useLoaderData } from "@remix-run/react";
import { CUSTOM_COMPONENTS } from ${JSON.stringify(o)};
${i}

// Fetch contents of the page
export const loader = async ({ params, request, context }${a}) => {
  // Initialize the Khulnasoft client and pass in your Public API Key
  const khulnasoftApiKey = ${s};
  khulnasoft.init(khulnasoftApiKey);

  // Fetch data content from Khulnasoft.com based on the URL path
  const page = await khulnasoft
    .get("${r}", {
      userAttributes: {
        urlPath: "/" + params["*"],
      },
      locale: params.locale,
    })
    .toPromise();

  // Verify the user is previewing or editing in Khulnasoft
  const isPreviewing = new URL(request.url).searchParams.has("khulnasoft.preview");

  // If the page is not found and the user is not previewing, throw a 404.
  // The CatchBoundary component will catch the error
  if (!page && !isPreviewing) {
    throw new Response("Page Not Found", {
      status: 404,
      statusText:
        "We couldn't find this page, please check your url path and if the page is published on Khulnasoft.com.",
    });
  }

  return { page, khulnasoftApiKey };
};

// Define and render the page.
export default function Page() {
  // Use the useLoaderData hook to get the Page data from "loader" above.
  const { page, khulnasoftApiKey } = useLoaderData${n ? "<typeof loader>" : ""}();

  // Render the page content from Khulnasoft.com
  return (
    <KhulnasoftComponent
      customComponents={CUSTOM_COMPONENTS}
      apiKey={khulnasoftApiKey}
      model="${r}"
      content={page}
    />
  );
}

${
  n
    ? `
declare global {
  interface Env {
    ${St}: string;
  }
}
`
    : ""
}
`
  );
}
async function Qa(e, t) {
  let n = e.typescriptEnabled ? "tsx" : "jsx",
    o = e.join(e.componentsDir, "Counter"),
    i = e.join(o, `Counter.${n}`),
    a = e.join(o, "styles.module.css"),
    { component: s, styles: u } = Wa(e),
    p = await e.exists(i);
  if ((e.debug(`remixEnsureCounterComponent, hasCounterCmp: ${p}`), !p)) {
    let f = await e.formatCode(i, s);
    (await e.writeFile(i, f), t.push({ filePath: i, modifiedType: "create" }));
  }
  let m = await e.exists(a);
  return (
    e.debug(`remixEnsureCounterComponent, hasCounterStyles: ${m}`),
    m ||
      (await e.writeFile(a, u),
      t.push({ filePath: a, modifiedType: "create" })),
    i
  );
}
function Wa(e) {
  let t = e.typescriptEnabled,
    r = `
import { useState } from "react";
import styles from "./styles.module.css";
${
  t
    ? `
interface CounterProps {
  initialCount?: number;
}`
    : ""
}

function Counter({ initialCount = 99 }${t ? ": CounterProps" : ""}) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={styles.counter}>
      <button className={styles.btn} onClick={decrement}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn} onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
`.trimStart(),
    n = `
.counter {
  margin: 32px auto;
  display: flex;
  width: 100%;
  max-width: 190px;
  color: #1c6bd1;
}

.btn {
  width: 42px;
  font-size: 32px;
  font-weight: bold;
  background-color: #1c6bd1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  line-height: 1.4;
}

.btn:hover {
  opacity: 0.8;
}

.count {
  flex: 1;
  font-size: 42px;
  text-align: center;
}
`.trimStart();
  return { component: r, styles: n };
}
async function Ya(e, t) {
  let n = (await Te(e, null, !1, !1, null, null, !1, !1)).components.find(
    (o) => o.filePath === t,
  );
  n && (await Te(e, n.id, !0, !1, null, null, !0, !1));
}
async function Lt(e) {
  let t = [];
  return (
    (await e.exists(e.registryPath)) ||
      (await e.writeFile(e.registryPath, Ga(e)),
      t.push({ filePath: e.registryPath, modifiedType: "create" })),
    t
  );
}
function Ga(e) {
  let t = e.sdkVersion === w.gen2;
  return e.typescriptEnabled
    ? `import type { RegisteredComponent } from ${t ? '"@khulnasoft.com/sdk-react"' : '"@khulnasoft.com/react"'};
    
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
];`
    : `export const CUSTOM_COMPONENTS = [
  ];
  `;
}
async function Zr(e) {
  let t = await Ha(e);
  return {
    khulnasoftPageOptions: async () => {
      let n = "/khulnasoft-demo",
        o = t.hasLocaleParam ? `/en-us${n}` : void 0;
      return {
        templateContentId: "a5c9eef7909d4fc99554264a17de22c9",
        pathname: n,
        localePathname: o,
        title: "Khulnasoft + Remix Demo Page",
      };
    },
    ensureKhulnasoftSetup: () => Gr(t),
    ensureFigmaImportPage: () => Hr(t),
    getRegistryPath: () => t.registryPath,
    getRegistry: (n) =>
      Te(t, null, !1, !1, null, null, !1, !!n?.readAllInputTypes),
    addExternalPackage: (n) => {
      t.addExternalPackage(n);
    },
    loadComponent: async (n) => {
      let o = await Te(t, n.cmpId, !1, !1, null, null, !1, !1);
      return { ...o, component: o.components.find((i) => i.id === n.cmpId) };
    },
    registerComponent: (n) => Te(t, n.cmpId, !0, !1, null, null, !0, !1),
    setRegisteredComponentInfo: (n) => Te(t, n.cmpId, !1, !1, n, null, !0, !1),
    setRegisteredComponentInput: (n) => Te(t, n.cmpId, !1, !1, null, n, !0, !1),
    unregisterComponent: (n) => Te(t, n.cmpId, !1, !0, null, null, !0, !1),
    getPublicApiKey: () => Et(t),
    setPublicApiKey: (n) => Jr(t, n.publicApiKey),
    getDependencies: (n) =>
      n.sdkVersion === w.gen2
        ? [
            { name: "@khulnasoft.com/dev-tools" },
            { name: "@khulnasoft.com/sdk-react" },
          ]
        : [
            { name: "@khulnasoft.com/dev-tools" },
            { name: "@khulnasoft.com/react" },
            { name: "@khulnasoft.com/sdk" },
          ],
    getDevRunCommand: () => "dev",
    getCache: () => De(t),
    setCache: (n) => Ce(t, n),
  };
}
async function Ha(e) {
  let t = await Za(e),
    r = e.getAppRootDir(),
    n = await es(e),
    o = e.dirname(n),
    i = e.join(o, "components"),
    a = await re(e),
    s = await ae(e, o),
    u = {},
    p = {
      ...e,
      registryPath: s,
      remixConfigPath: t,
      typescriptEnabled: a,
      appDir: o,
      componentsDir: i,
      routesDir: n,
      hasLocaleParam: await Xa(e, n),
      addExternalPackage: (m) => {
        u[e.join(r, m, "index.ts")] = `export * from "${m}";`;
      },
      readFileSync: (m) => u[m] ?? e.readFileSync(m),
      existsSync: (m) => !!u[m] || e.existsSync(m),
      readdirSync: (m) => {
        let f = e.readdirSync(m);
        return m === r
          ? [...f, ...Object.keys(u).map((c) => c.slice(r.length + 1))]
          : f;
      },
      readdir: async (m) => {
        let f = await e.readdir(m);
        return m === r
          ? [...f, ...Object.keys(u).map((c) => c.slice(r.length + 1))]
          : f;
      },
    };
  return (
    e.sdkVersion ? (p.sdkVersion = e.sdkVersion) : (p.sdkVersion = await pt(p)),
    p
  );
}
async function Xa(e, t) {
  return (await e.readdir(t)).some((n) => n.startsWith("($locale)."));
}
async function Za(e) {
  let t = [
    "remix.config.ts",
    "remix.config.js",
    "vite.config.ts",
    "vite.config.js",
  ];
  for (let r of t) {
    let n = e.join(e.getAppRootDir(), r);
    if (await e.exists(n)) return n;
  }
  throw new Error(
    `Could not find Remix config file. Searched for ${t.join(", ")} in "${e.getAppRootDir()}".`,
  );
}
async function es(e) {
  let t = await mt(e, e.getAppRootDir(), "routes");
  if (t) return t;
  throw new Error(
    `Could not find Remix "routes" directory in "${e.getAppRootDir()}". Please ensure this command is ran from within your Remix project's directory.`,
  );
}
async function At(e) {
  let t = [".env"],
    r = e.configType === "vite" ? Ft : _t;
  return await je(e, t, r);
}
async function eo(e, t) {
  let r = await At(e),
    n = await Ve(e, r.file, r.envKey, t);
  return { ...r, modifiedType: n };
}
var Ft = "VITE_PUBLIC_KHULNASOFT_KEY",
  _t = "YOUR_PUBLIC_KHULNASOFT_KEY";
function to(e, t) {
  let r = `Khulnasoft.registerComponent(
`;
  ((r += `  ${t.importName},
`),
    (r += `  {
    name: "${t.name}",
  }
`),
    (r += ");"));
  let n = Rt(e, r);
  return dn(e, n, t);
}
function dn(e, t, r) {
  if (!e.ts.isExpressionStatement(t)) return t;
  let n = t.expression;
  if (!e.ts.isCallExpression(n)) return t;
  let o = [...n.arguments];
  if (o.length < 2) return t;
  let i = o[1];
  return e.ts.isObjectLiteralExpression(i)
    ? ((o[1] = Q(e, i, r)),
      e.ts.factory.updateExpressionStatement(
        t,
        e.ts.factory.updateCallExpression(n, n.expression, n.typeArguments, o),
      ))
    : t;
}
async function no(e) {
  let t = await e.readFile(e.registryPath);
  return t ? ts(e, t) : { components: [], sourceFile: I(e, "") };
}
async function ts(e, t) {
  let r = I(e, t);
  return e.sdkVersion === w.gen2 ? os(e, r) : ns(e, r);
}
async function ns(e, t) {
  let r = [];
  for (let n = 0; n < t.statements.length; n++) {
    let o = t.statements[n];
    if (!e.ts.isExpressionStatement(o)) continue;
    let i = o.expression;
    if (!e.ts.isCallExpression(i)) continue;
    let a = i.expression;
    if (!e.ts.isPropertyAccessExpression(a)) continue;
    let s = a.expression;
    if (
      !e.ts.isIdentifier(s) ||
      s.text !== "Khulnasoft" ||
      a.name.text !== "registerComponent"
    )
      continue;
    let p = i.arguments;
    if (p.length < 2) continue;
    let m = p[1];
    if (!e.ts.isObjectLiteralExpression(m)) continue;
    let f = p[0];
    if (e.ts.isIdentifier(f)) {
      let c = await rs(e, t, n, f, m, !1);
      c && r.push(c);
      continue;
    }
  }
  return { sourceFile: t, components: te(r) };
}
async function rs(e, t, r, n, o, i) {
  let a = {
      id: "",
      name: "",
      displayFilePath: "",
      exportName: "",
      importName: "",
      filePath: "",
      relFilePath: "",
      importPath: "",
      inputs: [],
      nodeIndex: r,
      acceptsChildren: i,
    },
    s = t.statements.filter((p) => e.ts.isImportDeclaration(p)),
    u = s.find((p) => p.importClause && p.importClause.name?.text === n.text);
  if (u) {
    let p = u.moduleSpecifier;
    if (!e.ts.isStringLiteral(p)) return null;
    ((a.filePath = await gn(e, p.text)),
      (a.relFilePath = e.relative(e.getAppRootDir(), a.filePath)),
      (a.importPath = V(e, a.filePath)),
      (a.name = se(e, a.filePath)),
      (a.importName = n.text),
      (a.exportName = "default"),
      (a.exportType = "default"));
  } else {
    let p = s.find((c) =>
      !c.importClause ||
      !c.importClause.namedBindings ||
      !e.ts.isNamedImports(c.importClause.namedBindings)
        ? !1
        : c.importClause.namedBindings.elements.some(
            (d) => d.name.text === n.text,
          ),
    );
    if (!p) return null;
    let m = p.moduleSpecifier;
    if (!e.ts.isStringLiteral(m)) return null;
    let f = await gn(e, m.text);
    ((a.filePath = await gn(e, m.text)),
      (a.relFilePath = e.relative(e.getAppRootDir(), a.filePath)),
      (await e.exists(f))
        ? (a.importPath = V(e, a.filePath))
        : ((a.externalImportPath = m.text),
          (a.importPath = a.externalImportPath)),
      (a.name = K(n.text)),
      (a.importName = n.text),
      (a.exportName = n.text),
      (a.exportType = "named"));
  }
  return (
    (a = ne(e, a, o)),
    (a.displayFilePath = k(e, a.filePath)),
    a.filePath &&
      a.exportName &&
      (a.id = await $(e, a.filePath, a.exportName, a.externalImportPath)),
    a
  );
}
function gn(e, t) {
  return xt(e, e.normalize(e.resolve(e.dirname(e.registryPath), t)));
}
async function os(e, t) {
  let r = [],
    n = J(e, t, "CUSTOM_COMPONENTS");
  return (
    n &&
      (await Promise.all(
        n.arrayLiteralExp.elements.map(async (o, i) => {
          let a = await Dn(e, t, o);
          a && ((a.nodeIndex = i), r.push(a));
        }),
      )),
    { sourceFile: t, components: te(r) }
  );
}
async function Dn(e, t, r) {
  if (!e.ts.isObjectLiteralExpression(r)) return null;
  let n = {
    id: "",
    name: "",
    displayFilePath: "",
    exportName: "",
    importName: "",
    filePath: "",
    relFilePath: "",
    importPath: "",
    inputs: [],
    acceptsChildren: !1,
  };
  nt(e, r) && (n.acceptsChildren = !0);
  for (let i of r.properties) {
    if (!e.ts.isPropertyAssignment(i) || !e.ts.isIdentifier(i.name)) continue;
    if (N(e, i) === "component") {
      let s,
        { initializer: u } = i;
      if ((e.ts.isIdentifier(u) && (s = u.text), !s)) continue;
      (n.name === "" && (n.name = K(s)), (n.importName = s));
      let p = await he(e, e.registryPath, t, s);
      if (!p) continue;
      ((n.filePath = p.filePath),
        (n.relFilePath = p.relFilePath),
        (await e.exists(p.filePath))
          ? (n.importPath = V(e, p.filePath))
          : ((n.externalImportPath = p.importPath),
            (n.importPath = n.externalImportPath)),
        (n.displayFilePath = p.displayFilePath),
        (n.exportType = p.exportType));
      let m = t.statements.filter((c) => e.ts.isImportDeclaration(c)),
        f = m.find((c) => c.importClause && c.importClause.name?.text === s);
      if (f) {
        let c = f.moduleSpecifier;
        if (!e.ts.isStringLiteral(c)) return null;
        n.exportName = "default";
      } else {
        let c = m.find((C) =>
          !C.importClause ||
          !C.importClause.namedBindings ||
          !e.ts.isNamedImports(C.importClause.namedBindings)
            ? !1
            : C.importClause.namedBindings.elements.some(
                (l) => l.name.text === s,
              ),
        );
        if (!c) return null;
        let d = c.moduleSpecifier;
        if (!e.ts.isStringLiteral(d)) return null;
        n.exportName = s;
      }
      continue;
    }
  }
  return (
    (n = ne(e, n, r)),
    n.filePath &&
      n.exportName &&
      (n.id = await $(e, n.filePath, n.exportName, n.externalImportPath)),
    n
  );
}
async function be(e, t, r, n, o, i, a, s) {
  let u = await Ke(e),
    [p, m, f, c] = await Promise.all([gr(e, u), no(e), re(e), At(e)]),
    d = p.map((E) => E.cmpInfo),
    C = m.components,
    l = {
      components: me(d, C),
      registryPath: e.registryPath,
      registryDisplayPath: k(e, e.registryPath),
      frameworks: e.getFrameworks(),
      dependencies: Ee(d),
      publicApiKey: c.envValue ?? void 0,
      devToolsVersion: e.version,
    };
  if (s) return ((l.components = await at(e, l.components)), l);
  let D = !1,
    g = m.sourceFile,
    x = Array.isArray(t) ? t : typeof t == "string" ? [t] : [];
  if (x.length > 0) {
    let E = x.map((S) => {
        let O = p.find((z) => z.cmpInfo.id === S);
        if (!O) throw new Error(`Component ${S} not found`);
        return O;
      }),
      P = Array.from(new Set(E.map((S) => S.cmpInfo.filePath))),
      A = await G(e, P);
    for (let S of E) {
      let O = l.components.find((y) => y.id === S.cmpInfo.id),
        z = await st(
          e,
          S,
          A,
          e.registryPath === S.cmpInfo.filePath || ge(S.cmpInfo.filePath),
        );
      ie(O, z);
      let j = d.findIndex((y) => y.id === S.cmpInfo.id);
      d[j].inputs = z;
      let F = Pe(S.cmpInfo.id, d, C, r, n, o, i);
      if (e.sdkVersion === w.gen2) {
        let {
          elements: y,
          elmIndex: H,
          statementIndex: le,
          statement: Y,
          variableDeclaration: L,
        } = await is(e, g, S);
        if (F.addCmpToRegistry) (y.push(as(e, F.addCmpToRegistry)), (D = !0));
        else if (F.removeCmpFromRegistry) (y.splice(H, 1), (D = !0));
        else if (F.updateRegisteredCmp) {
          let X = Q(e, y[H], F.updateRegisteredCmp),
            ze = e.ts.factory.createIdentifier(
              F.updateRegisteredCmp.importName,
            );
          ((y[H] = e.ts.factory.updateObjectLiteralExpression(X, [
            e.ts.factory.createPropertyAssignment("component", ze),
            ...X.properties.slice(1),
          ])),
            (D = !0));
        }
        if (D && a) {
          let X = [...g.statements];
          ((X[le] = e.ts.factory.updateVariableStatement(
            Y,
            Y.modifiers,
            e.ts.factory.updateVariableDeclarationList(Y.declarationList, [
              e.ts.factory.updateVariableDeclaration(
                L,
                L.name,
                L.exclamationToken,
                L.type,
                e.ts.factory.createArrayLiteralExpression(Ae(e, y)),
              ),
            ]),
          )),
            (g = e.ts.factory.updateSourceFile(g, X)),
            (g = ro(e, F, g)),
            (g = v(e, g, {
              namedImports: ["RegisteredComponent"],
              importPath: "@khulnasoft.com/sdk-react",
              isTypeOnly: !0,
            })),
            (g = ye(e, g, {
              variableName: "CUSTOM_COMPONENTS",
              arrayType: "RegisteredComponent",
            })),
            (l.components = F.components),
            (C = F.components.filter((ze) => ze.isRegistered)));
        }
      } else {
        let y = [...g.statements];
        (F.addCmpToRegistry
          ? (y.push(to(e, F.addCmpToRegistry)), (D = !0))
          : F.removeCmpFromRegistry
            ? (y.splice(F.nodeIndex, 1), (D = !0))
            : F.updateRegisteredCmp &&
              ((y[F.nodeIndex] = dn(e, y[F.nodeIndex], F.updateRegisteredCmp)),
              (D = !0)),
          D &&
            a &&
            ((g = e.ts.factory.updateSourceFile(g, y)),
            (g = v(e, g, {
              namedImports: ["Khulnasoft", "khulnasoft"],
              importPath: "@khulnasoft.com/react",
            })),
            (g = ro(e, F, g)),
            O?.acceptsChildren &&
              (g = v(e, g, {
                namedImports: ["withChildren"],
                importPath: "@khulnasoft.com/react",
              })),
            (l.components = F.components),
            (C = F.components.filter((H) => H.isRegistered))));
      }
    }
  }
  if (D && a) {
    ((g = Fe(e, g)), (g = Se(e, g)));
    let E = _(e, g);
    ((E = pe(E)),
      (E = await e.formatCode(e.registryPath, E)),
      await e.writeFile(e.registryPath, E));
  }
  return l;
}
async function is(e, t, r) {
  let n = J(e, t, "CUSTOM_COMPONENTS");
  if (!n)
    throw new Error(
      `Exported name of the Khulnasoft registry must be "CUSTOM_COMPONENTS". Please update your Khulnasoft registry file: ${e.registryPath}`,
    );
  let o = n.arrayLiteralExp.elements.filter((a) =>
      e.ts.isObjectLiteralExpression(a),
    ),
    i = -1;
  for (let a = 0; a < o.length; a++)
    if ((await Dn(e, t, o[a]))?.id === r.cmpInfo.id) {
      i = a;
      break;
    }
  return { ...n, elements: o, elmIndex: i };
}
function as(e, t) {
  let r = e.ts.factory.createIdentifier(t.importName);
  return Q(
    e,
    e.ts.factory.createObjectLiteralExpression(
      [
        e.ts.factory.createPropertyAssignment("component", r),
        ...(t.acceptsChildren
          ? [
              e.ts.factory.createPropertyAssignment(
                "canHaveChildren",
                e.ts.factory.createTrue(),
              ),
            ]
          : []),
      ],
      !0,
    ),
    t,
  );
}
function ro(e, t, r) {
  let n = t.addCmpToRegistry || t.updateRegisteredCmp;
  if (n) {
    let o = n.externalImportPath
      ? n.externalImportPath
      : B(e, e.registryPath, n.filePath);
    n.exportType === "default"
      ? (r = v(e, r, { defaultImport: n.importName, importPath: o }))
      : n.exportType === "named" &&
        (r = v(e, r, { namedImports: [n.importName], importPath: o }));
  }
  return r;
}
async function oo(e) {
  let t = [],
    r = await ss(e, t);
  if ((await so(e, t, r), !(await e.exists(e.khulnasoftComponentPath)))) {
    let n = await e.formatCode(
      e.khulnasoftComponentPath,
      ao(e, e.khulnasoftComponentPath),
    );
    (await e.writeFile(e.khulnasoftComponentPath, n),
      t.push({ filePath: e.khulnasoftComponentPath, modifiedType: "create" }));
  }
  return t;
}
async function io(e) {
  let t = [];
  await so(e, t);
  let r = `figma-imports.${e.typescriptEnabled ? "tsx" : "jsx"}`,
    n = e.join(e.componentsDir, r);
  if (!(await e.exists(n))) {
    let o = await e.formatCode(n, ao(e, n, "figma-imports"));
    (await e.writeFile(n, o), t.push({ filePath: n, modifiedType: "create" }));
  }
  return t;
}
function ao(e, t, r = "page") {
  let n = e.typescriptEnabled;
  return e.sdkVersion === w.gen2
    ? `
  import React from "react";
  import {
      Content,
      fetchOneEntry,
      getKhulnasoftSearchParams,
      isPreviewing,
    ${n ? "type KhulnasoftContent," : ""}
    } from "@khulnasoft.com/sdk-react";
  import { CUSTOM_COMPONENTS } from ${JSON.stringify(B(e, t, e.registryPath))};

  // Khulnasoft Public API Key set in .env file
  const KHULNASOFT_API_KEY = ${e.configType === "vite" ? `import.meta.env.${Ft};` : `${_t};`}
  const MODEL_NAME = "${r}";

  export default function KhulnasoftPage() {
  const [notFound, setNotFound] = React.useState(false);
  const [content, setContent] = React.useState${n ? "<KhulnasoftContent | null>" : ""}(null);

  // get the page content from Khulnasoft
  React.useEffect(() => {
    fetchOneEntry({
      model: MODEL_NAME,
      apiKey: KHULNASOFT_API_KEY,
      userAttributes: {
        urlPath: window.location.pathname,
      },
      options: getKhulnasoftSearchParams(new URL(location.href).searchParams),
    })
      .then((content) => {
        if (content) {
          setContent(content);
        }
        setNotFound(!content);
      })
      .catch((err) => {
        console.log("Oops: ", err);
      });
  }, []);

  // If no page is found, return
  // a 404 page from your code.
  if (notFound && !isPreviewing()) {
    return <div>404 Page Not Found</div>;
  }

  // return the page when found
  return (
  <>
    {/* Render the Khulnasoft page */}
    <Content
      content={content}
      model={MODEL_NAME}
      apiKey={KHULNASOFT_API_KEY}
      customComponents={CUSTOM_COMPONENTS}
    />
  </>
  );
}
    `
    : `
import React from "react";
import { KhulnasoftComponent, khulnasoft, useIsPreviewing } from "@khulnasoft.com/react"; 
import ${JSON.stringify(B(e, t, e.registryPath))};

// Khulnasoft Public API Key set in .env file
${e.configType === "vite" ? `khulnasoft.init(import.meta.env.${Ft}${n ? "!" : ""})` : `khulnasoft.init("${_t}")`}

export default function KhulnasoftPage() {
  const isPreviewingInKhulnasoft = useIsPreviewing();
  const [notFound, setNotFound] = React.useState(false);
  const [content, setContent] = React.useState(null);

  // get the page content from Khulnasoft
  React.useEffect(() => {
    async function fetchContent() {
      const content = await khulnasoft
        .get("${r}", {
          url: window.location.pathname,
        })
        .promise();

      setContent(content);
      setNotFound(!content);

      // if the page title is found, 
      // set the document title
      if (content?.data.title) {
        document.title = content.data.title;
      }
    }
    fetchContent();
  }, []);
  
  if (content === null) {
    return;
  }
  // If no page is found, return 
  // a 404 page from your code.
  if (notFound && !isPreviewingInKhulnasoft) {
    return <div>404 Page Not Found</div>;
  }

  // return the page when found
  return (
    <>
      {/* Render the Khulnasoft page */}
      <KhulnasoftComponent model="${r}" content={content} />
    </>
  );
}
`.trimStart();
}
async function so(e, t, r) {
  if (!(await e.exists(e.registryPath))) {
    if (e.sdkVersion === w.gen2) {
      let i = ps(e);
      await e.writeFile(e.registryPath, i);
    } else await e.writeFile(e.registryPath, "");
    t.push({ filePath: e.registryPath, modifiedType: "create" });
  }
  if (!r) return;
  let o = (await be(e, null, !1, !1, null, null, !1, !1)).components.find(
    (i) => i.filePath === r,
  );
  o && (await be(e, o.id, !0, !1, null, null, !0, !1));
}
async function ss(e, t) {
  let n = e.typescriptEnabled ? "tsx" : "jsx",
    o = e.join(e.componentsDir, "Counter"),
    i = e.join(o, `Counter.${n}`),
    a = e.join(o, "styles.module.css"),
    { component: s, styles: u } = us(e);
  if (!(await e.exists(i))) {
    let p = await e.formatCode(i, s);
    (await e.writeFile(i, p), t.push({ filePath: i, modifiedType: "create" }));
  }
  return (
    (await e.exists(a)) ||
      (await e.writeFile(a, u),
      t.push({ filePath: a, modifiedType: "create" })),
    i
  );
}
function us(e) {
  let t = e.typescriptEnabled,
    r = `
"use client"
import React, { useState } from "react";
import styles from "./styles.module.css";
${
  t
    ? `
interface CounterProps {
  initialCount?: number;
}`
    : ""
}

function Counter({ initialCount = 99 }${t ? ": CounterProps" : ""}) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={styles.counter}>
      <button className={styles.btn} onClick={decrement}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn} onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
`.trimStart(),
    n = `
.counter {
  margin: 32px auto;
  display: flex;
  width: 100%;
  max-width: 190px;
}

.btn {
  width: 42px;
  font-size: 32px;
  font-weight: bold;
  background-color: #1c6bd1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  line-height: 1.4;
}

.btn:hover {
  opacity: 0.8;
}

.count {
  flex: 1;
  font-size: 42px;
  text-align: center;
}
`.trimStart();
  return { component: r, styles: n };
}
function ps(e) {
  return e.typescriptEnabled
    ? `import type { RegisteredComponent } from "@khulnasoft.com/sdk-react";
    
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
];`
    : `export const CUSTOM_COMPONENTS = [
  ];
  `;
}
async function uo(e) {
  let t = await ls(e);
  return {
    khulnasoftPageOptions: async () => ({
      templateContentId: "2e36438034894a8abf279ea9e6d3596f",
      pathname: "/khulnasoft-demo",
      title: "Khulnasoft + React Demo Page",
    }),
    ensureKhulnasoftSetup: () => oo(t),
    ensureFigmaImportPage: () => io(t),
    getRegistryPath: () => t.registryPath,
    getRegistry: (n) =>
      be(t, null, !1, !1, null, null, !1, !!n?.readAllInputTypes),
    addExternalPackage: (n) => {
      t.addExternalPackage(n);
    },
    loadComponent: async (n) => {
      let o = await be(t, n.cmpId, !1, !1, null, null, !1, !1);
      return { ...o, component: o.components.find((i) => i.id === n.cmpId) };
    },
    registerComponent: (n) => be(t, n.cmpId, !0, !1, null, null, !0, !1),
    setRegisteredComponentInfo: (n) => be(t, n.cmpId, !1, !1, n, null, !0, !1),
    setRegisteredComponentInput: (n) => be(t, n.cmpId, !1, !1, null, n, !0, !1),
    unregisterComponent: (n) => be(t, n.cmpId, !1, !0, null, null, !0, !1),
    getPublicApiKey: () => At(t),
    setPublicApiKey: (n) => eo(t, n.publicApiKey),
    getDependencies: (n) =>
      n.sdkVersion === w.gen2
        ? [
            { name: "@khulnasoft.com/dev-tools" },
            { name: "@khulnasoft.com/sdk-react" },
          ]
        : [
            { name: "@khulnasoft.com/dev-tools" },
            { name: "@khulnasoft.com/react" },
            { name: "@khulnasoft.com/sdk" },
          ],
    getDevRunCommand: () => "dev",
    getCache: () => De(t),
    setCache: (n) => Ce(t, n),
  };
}
async function ls(e) {
  let t = await cs(e),
    r = e.getAppRootDir(),
    n = e.join(r, "src"),
    o = await re(e),
    i = {},
    a = {
      ...e,
      srcDir: null,
      khulnasoftComponentPath: "",
      componentsDir: "",
      registryPath: "",
      reactConfigPath: t,
      typescriptEnabled: o,
      configType: "",
      addExternalPackage: (s) => {
        i[e.join(r, s, "index.ts")] = `export * from "${s}";`;
      },
      readFileSync: (s) => i[s] ?? e.readFileSync(s),
      existsSync: (s) => !!i[s] || e.existsSync(s),
      readdirSync: (s) => {
        let u = e.readdirSync(s);
        return s === r
          ? [...u, ...Object.keys(i).map((p) => p.slice(r.length + 1))]
          : u;
      },
      readdir: async (s) => {
        let u = await e.readdir(s);
        return s === r
          ? [...u, ...Object.keys(i).map((p) => p.slice(r.length + 1))]
          : u;
      },
    };
  return (
    e.sdkVersion ? (a.sdkVersion = e.sdkVersion) : (a.sdkVersion = await pt(a)),
    t.includes("webpack.config") && (a.configType = "webpack"),
    t.includes("vite.config") && (a.configType = "vite"),
    (await e.exists(n))
      ? ((a.srcDir = n),
        (a.componentsDir = e.join(n, "components")),
        (a.registryPath = await ae(e, n)),
        (a.khulnasoftComponentPath = e.join(
          a.srcDir,
          `khulnasoft-page.${o ? "tsx" : "jsx"}`,
        )))
      : ((a.componentsDir = e.join(r, "components")),
        (a.registryPath = await ae(e, r)),
        (a.khulnasoftComponentPath = e.join(
          r,
          `khulnasoft-page.${o ? "tsx" : "jsx"}`,
        ))),
    a
  );
}
async function cs(e) {
  let t = [
    "vite.config.ts",
    "vite.config.js",
    "webpack.config.js",
    "webpack.config.ts",
  ];
  for (let r of t) {
    let n = e.join(e.getAppRootDir(), r);
    if (await e.exists(n)) return n;
  }
  if (e.ignoreMissingConfig) return "";
  throw new Error(
    `Could not find React config file. Searched for ${t.join(", ")} in "${e.getAppRootDir()}".`,
  );
}
async function Pt(e) {
  return await ms(e, ["environment.ts"], jt);
}
async function po(e, t) {
  let r = await Pt(e),
    n = await Ds(e, r.file, r.envKey, t);
  return { ...r, modifiedType: n };
}
async function ms(e, t, r) {
  let n = { envKey: r, envValue: null, file: "" };
  for (let o of t) {
    let i = e.join(e.getAppRootDir(), "src", "environments", o),
      a = await fs(e, i);
    if (typeof a == "string" && a.length > 0 && a !== "YOUR_API_KEY")
      return ((n.envValue = a), (n.file = i), n);
  }
  return (
    (n.file = e.join(
      e.getAppRootDir(),
      "src",
      "environments",
      t[t.length - 1],
    )),
    n
  );
}
async function fs(e, t) {
  let r = await e.readFile(t);
  return r ? ds(e, r) : "";
}
function ds(e, t) {
  let r = I(e, t),
    n = "",
    i = ot(e, r, "environment");
  if (i && i.statement.declarationList.declarations.length > 0) {
    let s = i.statement.declarationList.declarations[0].initializer;
    s &&
      e.ts.isObjectLiteralExpression(s) &&
      s.properties.forEach((u) => {
        e.ts.isPropertyAssignment(u) &&
          e.ts.isIdentifier(u.name) &&
          u.name.text === jt &&
          e.ts.isStringLiteral(u.initializer) &&
          (n = u.initializer.text);
      });
  }
  return n;
}
async function gs(e, t, r, n) {
  let o = I(e, t),
    a = ot(e, o, "environment");
  if (a && a.statement.declarationList.declarations.length > 0) {
    let s = a.statement.declarationList,
      u = s.declarations[0],
      p = u.initializer;
    if (p && e.ts.isObjectLiteralExpression(p)) {
      let m = e.ts.factory.createPropertyAssignment(
          e.ts.factory.createIdentifier(r),
          e.ts.factory.createStringLiteral(n),
        ),
        f = e.ts.factory.createNodeArray([...p.properties, m]),
        c = e.ts.factory.updateObjectLiteralExpression(p, f),
        d = e.ts.factory.updateVariableDeclaration(
          u,
          u.name,
          u.exclamationToken,
          u.type,
          c,
        ),
        C = e.ts.factory.updateVariableDeclarationList(s, [d]);
      return e.ts.factory.updateVariableStatement(
        a.statement,
        a.statement.modifiers,
        C,
      );
    }
    return null;
  }
  return null;
}
async function Ds(e, t, r, n) {
  let o = await e.readFile(t);
  if (o)
    if (o.includes(r)) e.debug(`"${r}" already set in ${t}`);
    else {
      e.debug(`Add "${r}" to ${t}`);
      let i = await gs(e, o, r, n);
      if (i) {
        let a = _(e, i),
          s = await e.formatCode(t, a);
        await e.writeFile(t, s);
      }
      return "update";
    }
  else {
    e.debug(`Creating new env file with "${r}" at ${t}`);
    let i = `
    // https://www.khulnasoft.com/c/docs/using-your-api-key
    export const environment = {
      production: false,
      khulnasoftApiKey: "${n}",
    };
    `.trimStart(),
      a = await e.formatCode(t, i);
    return (await e.writeFile(t, a), "create");
  }
  return null;
}
var jt = "khulnasoftApiKey";
async function co(e, t) {
  let r = [],
    n = t.getSourceFiles(),
    o = t.getTypeChecker();
  return (
    await Promise.all(
      n.map(async (i) => {
        let a = e.basename(i.fileName);
        if (
          hs(e, i.fileName) ||
          a.startsWith(".") ||
          a === "node_modules" ||
          Cs.has(a)
        )
          return;
        let s = e.normalize(i.fileName);
        if (s === e.registryPath) return;
        let u = await Vt(e, o, s, i);
        r.push(...u);
      }),
    ),
    r.sort((i, a) => i.cmpInfo.name.localeCompare(a.cmpInfo.name))
  );
}
var Cs = new Set([]),
  xs = new Set(["node_modules"]);
function hs(e, t) {
  for (let r of xs) if (e.dirname(t).includes(r)) return !0;
  return !1;
}
async function mo(e, t) {
  let r = e.extname(t).toLowerCase();
  if (r === ".tsx" || r === ".jsx" || r === ".ts" || r === ".js") {
    let n = await e.readFile(t);
    if (n) return Es(e, t, n);
  }
  return null;
}
function Es(e, t, r) {
  let n = I(e, r);
  return Vt(e, null, t, n);
}
async function Vt(e, t, r, n) {
  let o = [],
    i = {};
  r = e.normalize(r);
  let a = n.statements.filter((m) => e.ts.isClassDeclaration(m) && ys(e, m)),
    s = n.statements.find(
      (m) =>
        e.ts.isImportDeclaration(m) &&
        e.ts.isStringLiteral(m.moduleSpecifier) &&
        m.moduleSpecifier.text === "@angular/core",
    );
  if (s && e.ts.isImportDeclaration(s)) {
    let m = s.importClause?.namedBindings;
    if (m && e.ts.isNamedImports(m)) {
      let f = m.elements.find(
        (c) => (c.propertyName ?? c.name).text === "input",
      );
      f && (i.inputSignalImportName = f.name.text);
    }
  }
  let u = await As(e, t, r, n),
    p = ws(e, n);
  return (
    await Promise.all(
      a.map(async (m) => {
        let f = await Ss(e, t, r, m, p, i);
        o.push(...f);
      }),
    ),
    o.push(...u),
    o
  );
}
async function Cn(e, t, r) {
  if (t.node.fnNode) {
    let { sourceFile: n, typeChecker: o } = await rt(e, t.cmpInfo.filePath, r),
      a = (await Vt(e, o, t.cmpInfo.filePath, n)).find(
        (s) => s.cmpInfo.id === t.cmpInfo.id,
      );
    if (!a)
      throw new Error(
        `Could not find component ${t.cmpInfo.name} in ${t.cmpInfo.filePath}`,
      );
    return a.cmpInfo.inputs;
  }
  return [];
}
async function fo(e, t, r) {
  if (!r.some((s) => !s.isRegistered)) return r;
  let o = await G(
      e,
      r.map((s) => s.filePath),
    ),
    i = o.getTypeChecker();
  return await Promise.all(
    r
      .filter(
        (s) =>
          !(
            s.name.endsWith("Page") ||
            s.name.endsWith("Module") ||
            s.name === "AppComponent"
          ),
      )
      .map(async (s) => {
        if (!s.isRegistered) {
          let u = o.getSourceFile(s.filePath);
          if (u) {
            let m = (await Vt(e, i, s.filePath, u)).find(
              (f) => f.cmpInfo.id === s.id,
            );
            if (m) {
              s.inputs = Qe(e, i, m.node.fnNode);
              let f = t.find((c) => c.cmpInfo.id === s.id);
              if (f) {
                let c = await Cn(e, f, o);
                ie(s, c);
              }
            }
          }
        }
        return s;
      }),
  );
}
async function Ss(e, t, r, n, o, i) {
  let a = [],
    s = e.relative(e.getAppRootDir(), r),
    u = V(e, r),
    p = n.name?.text;
  if (!p) return a;
  let m = !1;
  n.modifiers &&
    (m = n.modifiers.some((C) => C.kind === e.ts.SyntaxKind.DefaultKeyword));
  let f = m ? "default" : p,
    c = m ? "default" : "named",
    d = [];
  return (
    n.members.forEach((C) => {
      if (
        e.ts.isPropertyDeclaration(C) ||
        e.ts.isGetAccessor(C) ||
        e.ts.isSetAccessor(C)
      ) {
        let g =
            (e.ts.getDecorators(C) ?? []).find((E) => Fs(e, E)) !== void 0 &&
            e.ts.isIdentifier(C.name),
          x =
            i?.inputSignalImportName !== void 0 &&
            e.ts.isIdentifier(C.name) &&
            Ps(e, C, i.inputSignalImportName);
        if (g || x) {
          let E = "any";
          if (e.ts.isSetAccessor(C)) E = lo(e, C.parameters[0].type);
          else if (C.type && t) {
            let A = t.getTypeAtLocation(C.type);
            E = t.typeToString(A);
          } else E = lo(e, C.type);
          let P = { name: C.name.text, type: o[E] ? "string" : E };
          (o[E] && (P.enum = o[E]), d.push(P));
        }
      }
    }),
    a.push({
      cmpInfo: {
        id: await $(e, r, p),
        displayFilePath: k(e, r),
        name: K(p),
        inputs: d,
        exportName: f,
        exportType: c,
        importName: p,
        filePath: r,
        relFilePath: s,
        importPath: u,
        meta: { ...bs(e, n) },
      },
      node: { name: p, fnNode: n, deps: void 0 },
    }),
    a
  );
}
async function As(e, t, r, n) {
  let o = [],
    i = e.relative(e.getAppRootDir(), r),
    a = V(e, r);
  for (let s of n.statements)
    if (
      e.ts.isExportDeclaration(s) &&
      s.exportClause &&
      e.ts.isNamedExports(s.exportClause)
    )
      for (let u of s.exportClause.elements) {
        let p = u.name?.text;
        if (!p) continue;
        let m = p,
          f = "named",
          c = [];
        if (t) {
          let l = t.getSymbolAtLocation(u.name);
          if (l) {
            let D = t.getDeclaredTypeOfSymbol(l);
            t.getPropertiesOfType(D).forEach((x) => {
              let E = x.getDeclarations();
              E &&
                E.forEach((P) => {
                  if (e.ts.isPropertyDeclaration(P)) {
                    let A = t.getTypeAtLocation(P),
                      S = { name: x.getName(), type: Ts(e, t, A) };
                    c.push(S);
                  }
                });
            });
          }
        }
        let d =
            e.ts.isExportSpecifier(u) && u.parent ? u.parent.parent : void 0,
          C;
        if (d) {
          let l = d.moduleSpecifier;
          if (l && e.ts.isStringLiteral(l)) {
            let D = t?.getSymbolAtLocation(l);
            if (D && D.declarations && D.declarations.length > 0) {
              let g = D.declarations[0];
              (!e.ts.isSourceFile(g) ||
                (e.ts.isSourceFile(g) &&
                  g.fileName.includes("node_modules"))) &&
                (C = l.text);
            }
          }
        }
        o.push({
          cmpInfo: {
            id: await $(e, r, p, C),
            displayFilePath: k(e, r),
            name: K(p),
            inputs: c,
            exportName: m,
            exportType: f,
            importName: p,
            filePath: r,
            relFilePath: i,
            importPath: C || a,
            externalImportPath: C,
          },
          node: { name: p, fnNode: u, deps: void 0 },
        });
      }
  return o;
}
function Fs(e, t) {
  return go(e, t, "Input");
}
function Ps(e, t, r) {
  return (
    e.ts.isPropertyDeclaration(t) &&
    t.initializer !== void 0 &&
    e.ts.isCallExpression(t.initializer) &&
    e.ts.isIdentifier(t.initializer.expression) &&
    t.initializer.expression.text === r
  );
}
function go(e, t, r) {
  if (e.ts.isCallExpression(t.expression)) {
    let n = t.expression;
    if (e.ts.isIdentifier(n.expression)) return n.expression?.text === r;
  }
  return !1;
}
function ys(e, t) {
  return !!e.ts
    .getDecorators(t)
    ?.some(
      (o) =>
        e.ts.isCallExpression(o.expression) &&
        e.ts.isIdentifier(o.expression.expression) &&
        o.expression.expression.text === "Component",
    );
}
function lo(e, t) {
  if (!t) return "any";
  let r = "any";
  switch (t.kind) {
    case e.ts.SyntaxKind.StringKeyword:
      r = "string";
      break;
    case e.ts.SyntaxKind.NumberKeyword:
      r = "number";
      break;
    case e.ts.SyntaxKind.BooleanKeyword:
      r = "boolean";
      break;
    case e.ts.SyntaxKind.TypeReference:
      e.ts.isTypeReferenceNode(t) &&
        e.ts.isIdentifier(t.typeName) &&
        (r = t.typeName.text);
      break;
  }
  return r.includes("|") ? "string" : r;
}
function ws(e, t) {
  let r = {};
  return (
    e.ts.forEachChild(t, (n) => {
      e.ts.isTypeAliasDeclaration(n) &&
        e.ts.isUnionTypeNode(n.type) &&
        n.type.types.every(
          (o) => e.ts.isLiteralTypeNode(o) && e.ts.isStringLiteral(o.literal),
        ) &&
        (r[n.name.text] = n.type.types.map((o) => o.literal.text));
    }),
    r
  );
}
function Ts(e, t, r) {
  let n = t.typeToString(r);
  if (n === "any") {
    let o = r.getSymbol();
    if (o) {
      let i = o.getDeclarations();
      if (i && i.length > 0) {
        let a = i[0];
        if (e.ts.isVariableDeclaration(a)) {
          let s = a.type;
          s && (n = t.typeToString(t.getTypeAtLocation(s)));
        }
      }
    }
  }
  return n;
}
function bs(e, t) {
  let {
      getDecorators: r,
      isCallExpression: n,
      isIdentifier: o,
      isObjectLiteralExpression: i,
      isPropertyAssignment: a,
      isStringLiteral: s,
      SyntaxKind: u,
    } = e.ts,
    p,
    m;
  return (
    r(t)?.forEach((c) => {
      if (go(e, c, "Component")) {
        let { expression: d } = c;
        if (n(d)) {
          let [C] = d.arguments;
          i(C) &&
            C.properties.forEach((l) => {
              a(l) &&
                o(l.name) &&
                (l.name.escapedText === "selector" &&
                  s(l.initializer) &&
                  (p = l.initializer.text),
                l.name.escapedText === "standalone" &&
                  (m = l.initializer.kind === u.TrueKeyword));
            });
        }
      }
    }),
    { selector: p, standalone: m }
  );
}
async function $t(e, t, r) {
  let n = e.typescriptEnabled ? ".ts" : ".js",
    o = `app.module${n}`,
    i = e.join(e.appDir, o),
    a = await e.readFile(i);
  if (!a) {
    console.error(`Unable to read app.module.${n} at ${i}`);
    return;
  }
  let s = await vs(e, i, t, r, a);
  if (!s) {
    console.error(`Unable to update app.module.${n} at ${i}`);
    return;
  }
  return (await e.writeFile(i, s), i);
}
async function vs(e, t, r, n, o) {
  let i = o,
    a = I(e, o),
    s = B(e, t, n);
  ((a = v(e, a, { namedImports: [r], importPath: s })),
    (a = v(e, a, {
      namedImports: ["Content"],
      importPath: "@khulnasoft.com/sdk-angular",
    })));
  let u = [];
  for (let p of a.statements)
    if (e.ts.isClassDeclaration(p) && p.name?.text === "AppModule") {
      let m = Is(e, r, p);
      u.push(m);
    } else u.push(p);
  return ((a = e.ts.factory.updateSourceFile(a, u)), (i = _(e, a)), i);
}
function Is(e, t, r) {
  let n = e.ts.getDecorators(r);
  if (n) {
    for (let o of n)
      if (
        e.ts.isCallExpression(o.expression) &&
        e.ts.isIdentifier(o.expression.expression) &&
        o.expression.expression.text === "NgModule"
      ) {
        let i = o.expression.arguments;
        if (i.length === 1 && e.ts.isObjectLiteralExpression(i[0])) {
          let a = Do(e, i[0], "declarations", t);
          if (a) {
            let s = Do(e, a, "imports", "Content");
            if ((s && (a = s), a)) {
              let u = e.ts.factory.updateDecorator(
                  o,
                  e.ts.factory.updateCallExpression(
                    o.expression,
                    o.expression.expression,
                    o.expression.typeArguments,
                    [a],
                  ),
                ),
                m = [
                  ...n.map((f) => (f === o ? u : f)),
                  ...(e.ts.getModifiers(r) || []),
                ];
              return e.ts.factory.updateClassDeclaration(
                r,
                m,
                r.name,
                r.typeParameters,
                r.heritageClauses,
                r.members,
              );
            }
          }
        }
      }
  }
  return r;
}
function Do(e, t, r, n) {
  let o = [...t.properties],
    i = o.findIndex((s) => N(e, s) === r);
  if (i > -1) {
    let s = o[i];
    if (
      e.ts.isPropertyAssignment(s) &&
      s.initializer &&
      e.ts.isArrayLiteralExpression(s.initializer)
    ) {
      let u = Co(e, s.initializer, n);
      return u
        ? ((o[i] = e.ts.factory.updatePropertyAssignment(s, s.name, u)),
          e.ts.factory.updateObjectLiteralExpression(t, o))
        : null;
    }
    return null;
  }
  let a = Co(e, e.ts.factory.createArrayLiteralExpression([], !0), n);
  return a
    ? e.ts.factory.updateObjectLiteralExpression(t, [
        ...o,
        e.ts.factory.createPropertyAssignment(r, a),
      ])
    : null;
}
function Co(e, t, r) {
  return t.elements.some((o) => (e.ts.isIdentifier(o) ? o.text === r : !1))
    ? null
    : e.ts.factory.updateArrayLiteralExpression(t, [
        ...t.elements,
        e.ts.factory.createIdentifier(r),
      ]);
}
async function xn(e, t, r, n) {
  try {
    if (e.magicast) {
      let i = `app.routes${e.typescriptEnabled ? ".ts" : ".js"}`,
        a = e.join(e.appDir, i),
        s = await e.magicast.loadFile(a);
      Object.keys(s.exports).length === 0 && (s.exports.routes = []);
      let p = Object.keys(s.exports)[0],
        m = s.exports[p];
      if (m.find((c) => c.path === t)) return;
      let f = e.magicast.khulnasofts.raw("{}");
      if (
        ((f.path = t),
        (f.component = e.magicast.khulnasofts.raw(r)),
        m.push(f),
        s.imports.$items.find((c) => c.imported === r))
      )
        return;
      (s.imports.$append({ imported: r, from: n }),
        await e.magicast.writeFile(s, a));
    }
  } catch (o) {
    console.error(o);
  }
}
var Rs = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/,
  Ns =
    /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
  Bs =
    /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
  hn = { Space_Separator: Rs, ID_Start: Ns, ID_Continue: Bs },
  q = {
    isSpaceSeparator(e) {
      return typeof e == "string" && hn.Space_Separator.test(e);
    },
    isIdStartChar(e) {
      return (
        typeof e == "string" &&
        ((e >= "a" && e <= "z") ||
          (e >= "A" && e <= "Z") ||
          e === "$" ||
          e === "_" ||
          hn.ID_Start.test(e))
      );
    },
    isIdContinueChar(e) {
      return (
        typeof e == "string" &&
        ((e >= "a" && e <= "z") ||
          (e >= "A" && e <= "Z") ||
          (e >= "0" && e <= "9") ||
          e === "$" ||
          e === "_" ||
          e === "\u200C" ||
          e === "\u200D" ||
          hn.ID_Continue.test(e))
      );
    },
    isDigit(e) {
      return typeof e == "string" && /[0-9]/.test(e);
    },
    isHexDigit(e) {
      return typeof e == "string" && /[0-9A-Fa-f]/.test(e);
    },
  },
  Sn,
  ee,
  Be,
  Mt,
  Me,
  fe,
  W,
  Pn,
  wt,
  Os = function (t, r) {
    ((Sn = String(t)),
      (ee = "start"),
      (Be = []),
      (Mt = 0),
      (Me = 1),
      (fe = 0),
      (W = void 0),
      (Pn = void 0),
      (wt = void 0));
    do ((W = ks()), js[ee]());
    while (W.type !== "eof");
    return typeof r == "function" ? An({ "": wt }, "", r) : wt;
  };
function An(e, t, r) {
  let n = e[t];
  if (n != null && typeof n == "object")
    if (Array.isArray(n))
      for (let o = 0; o < n.length; o++) {
        let i = String(o),
          a = An(n, i, r);
        a === void 0
          ? delete n[i]
          : Object.defineProperty(n, i, {
              value: a,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      }
    else
      for (let o in n) {
        let i = An(n, o, r);
        i === void 0
          ? delete n[o]
          : Object.defineProperty(n, o, {
              value: i,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      }
  return r.call(e, t, n);
}
var b, T, yt, Ne, R;
function ks() {
  for (b = "default", T = "", yt = !1, Ne = 1; ; ) {
    R = Oe();
    let e = ho[b]();
    if (e) return e;
  }
}
function Oe() {
  if (Sn[Mt]) return String.fromCodePoint(Sn.codePointAt(Mt));
}
function h() {
  let e = Oe();
  return (
    e ===
    `
`
      ? (Me++, (fe = 0))
      : e
        ? (fe += e.length)
        : fe++,
    e && (Mt += e.length),
    e
  );
}
var ho = {
  default() {
    switch (R) {
      case "	":
      case "\v":
      case "\f":
      case " ":
      case "\xA0":
      case "\uFEFF":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        h();
        return;
      case "/":
        (h(), (b = "comment"));
        return;
      case void 0:
        return (h(), M("eof"));
    }
    if (q.isSpaceSeparator(R)) {
      h();
      return;
    }
    return ho[ee]();
  },
  comment() {
    switch (R) {
      case "*":
        (h(), (b = "multiLineComment"));
        return;
      case "/":
        (h(), (b = "singleLineComment"));
        return;
    }
    throw U(h());
  },
  multiLineComment() {
    switch (R) {
      case "*":
        (h(), (b = "multiLineCommentAsterisk"));
        return;
      case void 0:
        throw U(h());
    }
    h();
  },
  multiLineCommentAsterisk() {
    switch (R) {
      case "*":
        h();
        return;
      case "/":
        (h(), (b = "default"));
        return;
      case void 0:
        throw U(h());
    }
    (h(), (b = "multiLineComment"));
  },
  singleLineComment() {
    switch (R) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        (h(), (b = "default"));
        return;
      case void 0:
        return (h(), M("eof"));
    }
    h();
  },
  value() {
    switch (R) {
      case "{":
      case "[":
        return M("punctuator", h());
      case "n":
        return (h(), Ye("ull"), M("null", null));
      case "t":
        return (h(), Ye("rue"), M("boolean", !0));
      case "f":
        return (h(), Ye("alse"), M("boolean", !1));
      case "-":
      case "+":
        (h() === "-" && (Ne = -1), (b = "sign"));
        return;
      case ".":
        ((T = h()), (b = "decimalPointLeading"));
        return;
      case "0":
        ((T = h()), (b = "zero"));
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        ((T = h()), (b = "decimalInteger"));
        return;
      case "I":
        return (h(), Ye("nfinity"), M("numeric", 1 / 0));
      case "N":
        return (h(), Ye("aN"), M("numeric", NaN));
      case '"':
      case "'":
        ((yt = h() === '"'), (T = ""), (b = "string"));
        return;
    }
    throw U(h());
  },
  identifierNameStartEscape() {
    if (R !== "u") throw U(h());
    h();
    let e = Fn();
    switch (e) {
      case "$":
      case "_":
        break;
      default:
        if (!q.isIdStartChar(e)) throw xo();
        break;
    }
    ((T += e), (b = "identifierName"));
  },
  identifierName() {
    switch (R) {
      case "$":
      case "_":
      case "\u200C":
      case "\u200D":
        T += h();
        return;
      case "\\":
        (h(), (b = "identifierNameEscape"));
        return;
    }
    if (q.isIdContinueChar(R)) {
      T += h();
      return;
    }
    return M("identifier", T);
  },
  identifierNameEscape() {
    if (R !== "u") throw U(h());
    h();
    let e = Fn();
    switch (e) {
      case "$":
      case "_":
      case "\u200C":
      case "\u200D":
        break;
      default:
        if (!q.isIdContinueChar(e)) throw xo();
        break;
    }
    ((T += e), (b = "identifierName"));
  },
  sign() {
    switch (R) {
      case ".":
        ((T = h()), (b = "decimalPointLeading"));
        return;
      case "0":
        ((T = h()), (b = "zero"));
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        ((T = h()), (b = "decimalInteger"));
        return;
      case "I":
        return (h(), Ye("nfinity"), M("numeric", Ne * (1 / 0)));
      case "N":
        return (h(), Ye("aN"), M("numeric", NaN));
    }
    throw U(h());
  },
  zero() {
    switch (R) {
      case ".":
        ((T += h()), (b = "decimalPoint"));
        return;
      case "e":
      case "E":
        ((T += h()), (b = "decimalExponent"));
        return;
      case "x":
      case "X":
        ((T += h()), (b = "hexadecimal"));
        return;
    }
    return M("numeric", Ne * 0);
  },
  decimalInteger() {
    switch (R) {
      case ".":
        ((T += h()), (b = "decimalPoint"));
        return;
      case "e":
      case "E":
        ((T += h()), (b = "decimalExponent"));
        return;
    }
    if (q.isDigit(R)) {
      T += h();
      return;
    }
    return M("numeric", Ne * Number(T));
  },
  decimalPointLeading() {
    if (q.isDigit(R)) {
      ((T += h()), (b = "decimalFraction"));
      return;
    }
    throw U(h());
  },
  decimalPoint() {
    switch (R) {
      case "e":
      case "E":
        ((T += h()), (b = "decimalExponent"));
        return;
    }
    if (q.isDigit(R)) {
      ((T += h()), (b = "decimalFraction"));
      return;
    }
    return M("numeric", Ne * Number(T));
  },
  decimalFraction() {
    switch (R) {
      case "e":
      case "E":
        ((T += h()), (b = "decimalExponent"));
        return;
    }
    if (q.isDigit(R)) {
      T += h();
      return;
    }
    return M("numeric", Ne * Number(T));
  },
  decimalExponent() {
    switch (R) {
      case "+":
      case "-":
        ((T += h()), (b = "decimalExponentSign"));
        return;
    }
    if (q.isDigit(R)) {
      ((T += h()), (b = "decimalExponentInteger"));
      return;
    }
    throw U(h());
  },
  decimalExponentSign() {
    if (q.isDigit(R)) {
      ((T += h()), (b = "decimalExponentInteger"));
      return;
    }
    throw U(h());
  },
  decimalExponentInteger() {
    if (q.isDigit(R)) {
      T += h();
      return;
    }
    return M("numeric", Ne * Number(T));
  },
  hexadecimal() {
    if (q.isHexDigit(R)) {
      ((T += h()), (b = "hexadecimalInteger"));
      return;
    }
    throw U(h());
  },
  hexadecimalInteger() {
    if (q.isHexDigit(R)) {
      T += h();
      return;
    }
    return M("numeric", Ne * Number(T));
  },
  string() {
    switch (R) {
      case "\\":
        (h(), (T += Ls()));
        return;
      case '"':
        if (yt) return (h(), M("string", T));
        T += h();
        return;
      case "'":
        if (!yt) return (h(), M("string", T));
        T += h();
        return;
      case `
`:
      case "\r":
        throw U(h());
      case "\u2028":
      case "\u2029":
        Vs(R);
        break;
      case void 0:
        throw U(h());
    }
    T += h();
  },
  start() {
    switch (R) {
      case "{":
      case "[":
        return M("punctuator", h());
    }
    b = "value";
  },
  beforePropertyName() {
    switch (R) {
      case "$":
      case "_":
        ((T = h()), (b = "identifierName"));
        return;
      case "\\":
        (h(), (b = "identifierNameStartEscape"));
        return;
      case "}":
        return M("punctuator", h());
      case '"':
      case "'":
        ((yt = h() === '"'), (b = "string"));
        return;
    }
    if (q.isIdStartChar(R)) {
      ((T += h()), (b = "identifierName"));
      return;
    }
    throw U(h());
  },
  afterPropertyName() {
    if (R === ":") return M("punctuator", h());
    throw U(h());
  },
  beforePropertyValue() {
    b = "value";
  },
  afterPropertyValue() {
    switch (R) {
      case ",":
      case "}":
        return M("punctuator", h());
    }
    throw U(h());
  },
  beforeArrayValue() {
    if (R === "]") return M("punctuator", h());
    b = "value";
  },
  afterArrayValue() {
    switch (R) {
      case ",":
      case "]":
        return M("punctuator", h());
    }
    throw U(h());
  },
  end() {
    throw U(h());
  },
};
function M(e, t) {
  return { type: e, value: t, line: Me, column: fe };
}
function Ye(e) {
  for (let t of e) {
    if (Oe() !== t) throw U(h());
    h();
  }
}
function Ls() {
  switch (Oe()) {
    case "b":
      return (h(), "\b");
    case "f":
      return (h(), "\f");
    case "n":
      return (
        h(),
        `
`
      );
    case "r":
      return (h(), "\r");
    case "t":
      return (h(), "	");
    case "v":
      return (h(), "\v");
    case "0":
      if ((h(), q.isDigit(Oe()))) throw U(h());
      return "\0";
    case "x":
      return (h(), _s());
    case "u":
      return (h(), Fn());
    case `
`:
    case "\u2028":
    case "\u2029":
      return (h(), "");
    case "\r":
      return (
        h(),
        Oe() ===
          `
` && h(),
        ""
      );
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw U(h());
    case void 0:
      throw U(h());
  }
  return h();
}
function _s() {
  let e = "",
    t = Oe();
  if (!q.isHexDigit(t) || ((e += h()), (t = Oe()), !q.isHexDigit(t)))
    throw U(h());
  return ((e += h()), String.fromCodePoint(parseInt(e, 16)));
}
function Fn() {
  let e = "",
    t = 4;
  for (; t-- > 0; ) {
    let r = Oe();
    if (!q.isHexDigit(r)) throw U(h());
    e += h();
  }
  return String.fromCodePoint(parseInt(e, 16));
}
var js = {
  start() {
    if (W.type === "eof") throw Ge();
    En();
  },
  beforePropertyName() {
    switch (W.type) {
      case "identifier":
      case "string":
        ((Pn = W.value), (ee = "afterPropertyName"));
        return;
      case "punctuator":
        Kt();
        return;
      case "eof":
        throw Ge();
    }
  },
  afterPropertyName() {
    if (W.type === "eof") throw Ge();
    ee = "beforePropertyValue";
  },
  beforePropertyValue() {
    if (W.type === "eof") throw Ge();
    En();
  },
  beforeArrayValue() {
    if (W.type === "eof") throw Ge();
    if (W.type === "punctuator" && W.value === "]") {
      Kt();
      return;
    }
    En();
  },
  afterPropertyValue() {
    if (W.type === "eof") throw Ge();
    switch (W.value) {
      case ",":
        ee = "beforePropertyName";
        return;
      case "}":
        Kt();
    }
  },
  afterArrayValue() {
    if (W.type === "eof") throw Ge();
    switch (W.value) {
      case ",":
        ee = "beforeArrayValue";
        return;
      case "]":
        Kt();
    }
  },
  end() {},
};
function En() {
  let e;
  switch (W.type) {
    case "punctuator":
      switch (W.value) {
        case "{":
          e = {};
          break;
        case "[":
          e = [];
          break;
      }
      break;
    case "null":
    case "boolean":
    case "numeric":
    case "string":
      e = W.value;
      break;
  }
  if (wt === void 0) wt = e;
  else {
    let t = Be[Be.length - 1];
    Array.isArray(t)
      ? t.push(e)
      : Object.defineProperty(t, Pn, {
          value: e,
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
  }
  if (e !== null && typeof e == "object")
    (Be.push(e),
      Array.isArray(e)
        ? (ee = "beforeArrayValue")
        : (ee = "beforePropertyName"));
  else {
    let t = Be[Be.length - 1];
    t == null
      ? (ee = "end")
      : Array.isArray(t)
        ? (ee = "afterArrayValue")
        : (ee = "afterPropertyValue");
  }
}
function Kt() {
  Be.pop();
  let e = Be[Be.length - 1];
  e == null
    ? (ee = "end")
    : Array.isArray(e)
      ? (ee = "afterArrayValue")
      : (ee = "afterPropertyValue");
}
function U(e) {
  return Ut(
    e === void 0
      ? `JSON5: invalid end of input at ${Me}:${fe}`
      : `JSON5: invalid character '${Eo(e)}' at ${Me}:${fe}`,
  );
}
function Ge() {
  return Ut(`JSON5: invalid end of input at ${Me}:${fe}`);
}
function xo() {
  return ((fe -= 5), Ut(`JSON5: invalid identifier character at ${Me}:${fe}`));
}
function Vs(e) {
  console.warn(
    `JSON5: '${Eo(e)}' in strings is not valid ECMAScript; consider escaping`,
  );
}
function Eo(e) {
  let t = {
    "'": "\\'",
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\v",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  };
  if (t[e]) return t[e];
  if (e < " ") {
    let r = e.charCodeAt(0).toString(16);
    return "\\x" + ("00" + r).substring(r.length);
  }
  return e;
}
function Ut(e) {
  let t = new SyntaxError(e);
  return ((t.lineNumber = Me), (t.columnNumber = fe), t);
}
var $s = function (t, r, n) {
    let o = [],
      i = "",
      a,
      s,
      u = "",
      p;
    if (
      (r != null &&
        typeof r == "object" &&
        !Array.isArray(r) &&
        ((n = r.space), (p = r.quote), (r = r.replacer)),
      typeof r == "function")
    )
      s = r;
    else if (Array.isArray(r)) {
      a = [];
      for (let l of r) {
        let D;
        (typeof l == "string"
          ? (D = l)
          : (typeof l == "number" ||
              l instanceof String ||
              l instanceof Number) &&
            (D = String(l)),
          D !== void 0 && a.indexOf(D) < 0 && a.push(D));
      }
    }
    return (
      n instanceof Number
        ? (n = Number(n))
        : n instanceof String && (n = String(n)),
      typeof n == "number"
        ? n > 0 &&
          ((n = Math.min(10, Math.floor(n))), (u = "          ".substr(0, n)))
        : typeof n == "string" && (u = n.substr(0, 10)),
      m("", { "": t })
    );
    function m(l, D) {
      let g = D[l];
      switch (
        (g != null &&
          (typeof g.toJSON5 == "function"
            ? (g = g.toJSON5(l))
            : typeof g.toJSON == "function" && (g = g.toJSON(l))),
        s && (g = s.call(D, l, g)),
        g instanceof Number
          ? (g = Number(g))
          : g instanceof String
            ? (g = String(g))
            : g instanceof Boolean && (g = g.valueOf()),
        g)
      ) {
        case null:
          return "null";
        case !0:
          return "true";
        case !1:
          return "false";
      }
      if (typeof g == "string") return f(g, !1);
      if (typeof g == "number") return String(g);
      if (typeof g == "object") return Array.isArray(g) ? C(g) : c(g);
    }
    function f(l) {
      let D = { "'": 0.1, '"': 0.2 },
        g = {
          "'": "\\'",
          '"': '\\"',
          "\\": "\\\\",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "	": "\\t",
          "\v": "\\v",
          "\0": "\\0",
          "\u2028": "\\u2028",
          "\u2029": "\\u2029",
        },
        x = "";
      for (let P = 0; P < l.length; P++) {
        let A = l[P];
        switch (A) {
          case "'":
          case '"':
            (D[A]++, (x += A));
            continue;
          case "\0":
            if (q.isDigit(l[P + 1])) {
              x += "\\x00";
              continue;
            }
        }
        if (g[A]) {
          x += g[A];
          continue;
        }
        if (A < " ") {
          let S = A.charCodeAt(0).toString(16);
          x += "\\x" + ("00" + S).substring(S.length);
          continue;
        }
        x += A;
      }
      let E = p || Object.keys(D).reduce((P, A) => (D[P] < D[A] ? P : A));
      return ((x = x.replace(new RegExp(E, "g"), g[E])), E + x + E);
    }
    function c(l) {
      if (o.indexOf(l) >= 0)
        throw TypeError("Converting circular structure to JSON5");
      o.push(l);
      let D = i;
      i = i + u;
      let g = a || Object.keys(l),
        x = [];
      for (let P of g) {
        let A = m(P, l);
        if (A !== void 0) {
          let S = d(P) + ":";
          (u !== "" && (S += " "), (S += A), x.push(S));
        }
      }
      let E;
      if (x.length === 0) E = "{}";
      else {
        let P;
        if (u === "") ((P = x.join(",")), (E = "{" + P + "}"));
        else {
          let A =
            `,
` + i;
          ((P = x.join(A)),
            (E =
              `{
` +
              i +
              P +
              `,
` +
              D +
              "}"));
        }
      }
      return (o.pop(), (i = D), E);
    }
    function d(l) {
      if (l.length === 0) return f(l, !0);
      let D = String.fromCodePoint(l.codePointAt(0));
      if (!q.isIdStartChar(D)) return f(l, !0);
      for (let g = D.length; g < l.length; g++)
        if (!q.isIdContinueChar(String.fromCodePoint(l.codePointAt(g))))
          return f(l, !0);
      return l;
    }
    function C(l) {
      if (o.indexOf(l) >= 0)
        throw TypeError("Converting circular structure to JSON5");
      o.push(l);
      let D = i;
      i = i + u;
      let g = [];
      for (let E = 0; E < l.length; E++) {
        let P = m(String(E), l);
        g.push(P !== void 0 ? P : "null");
      }
      let x;
      if (g.length === 0) x = "[]";
      else if (u === "") x = "[" + g.join(",") + "]";
      else {
        let E =
            `,
` + i,
          P = g.join(E);
        x =
          `[
` +
          i +
          P +
          `,
` +
          D +
          "]";
      }
      return (o.pop(), (i = D), x);
    }
  },
  Ks = { parse: Os, stringify: $s },
  Ms = Ks,
  So = Ms;
async function Ao(e) {
  let t = e.ts.findConfigFile(e.getAppRootDir(), e.existsSync);
  if (t) {
    let r = await e.readFile(t);
    if (!r) return;
    let n = So.parse(r);
    if (!n || typeof n != "object" || Array.isArray(n)) return;
    let o = n.compilerOptions;
    if (!o || typeof o != "object" || Array.isArray(o)) return;
    let i = o.paths;
    ((!i || typeof i != "object" || Array.isArray(i)) &&
      ((o.paths = {}), (i = o.paths)),
      Object.assign(o.paths, { "~/*": ["./src/*"] }),
      await e.writeFile(t, JSON.stringify(n, null, 2)));
  }
}
async function Fo(e) {
  let t = [],
    r = await qs(e, t);
  (t.push(...(await zt(e))), await Us(e, r));
  let n = "KhulnasoftPage";
  if (!(await e.exists(e.khulnasoftPageComponentPath))) {
    let o = await e.formatCode(
      e.khulnasoftPageComponentPath,
      yo(e, n, e.khulnasoftPageComponentPath, "khulnasoft-page", "page", !0),
    );
    (await e.writeFile(e.khulnasoftPageComponentPath, o),
      t.push({
        filePath: e.khulnasoftPageComponentPath,
        modifiedType: "create",
      }));
  }
  if (e.hasAppModule) {
    await $t(e, "Counter", r);
    let o = await $t(e, n, e.khulnasoftPageComponentPath);
    o && t.push({ filePath: o, modifiedType: "update" });
  }
  return (await xn(e, "**", n, "./components/khulnasoft-page.component"), t);
}
async function Po(e) {
  let t = [];
  t.push(...(await zt(e)));
  let r = "FigmaImportsPage",
    n = "figma-imports.component",
    o = e.join(e.componentsDir, `${n}.${e.typescriptEnabled ? "ts" : "js"}`);
  if (!(await e.exists(o))) {
    let i = await e.formatCode(
      o,
      yo(e, r, o, "figma-imports", "figma-imports", !1),
    );
    (await e.writeFile(o, i), t.push({ filePath: o, modifiedType: "create" }));
  }
  if (e.hasAppModule) {
    let i = await $t(e, r, o);
    i && t.push({ filePath: i, modifiedType: "update" });
  }
  return (await xn(e, "figma-imports", r, `./components/${n}`), await Ao(e), t);
}
async function zt(e) {
  let t = [];
  return (
    (await e.exists(e.registryPath)) ||
      (await e.writeFile(e.registryPath, zs(e)),
      t.push({ filePath: e.registryPath, modifiedType: "create" })),
    t
  );
}
async function Us(e, t) {
  let n = (await ve(e, null, !1, !1, null, null, !1, !1)).components.find(
    (o) => o.filePath === t,
  );
  n && (await ve(e, n.id, !0, !1, null, null, !0, !1));
}
function yo(e, t, r, n, o, i) {
  let a = !e.hasAppModule,
    s = B(e, r, e.registryPath),
    u = e.join(e.getAppRootDir(), "src", "environments", "environment.ts"),
    p = B(e, r, u),
    m = i
      ? `    <ng-container *ngIf="content || isPreviewing; else notFound">
      <khulnasoft-content
        [model]="model"
        [content]="content"
        [apiKey]="apiKey"
        [customComponents]="customComponents"
      ></khulnasoft-content>
    </ng-container>

    <ng-template #notFound>
      <div>404 - Content not found</div>
    </ng-template>`
      : `    <khulnasoft-content
      [model]="model"
      [content]="content"
      [apiKey]="apiKey"
      [customComponents]="customComponents"
    ></khulnasoft-content>`;
  return `
import { Component, Input } from '@angular/core';
import { fetchOneEntry, type KhulnasoftContent${i ? ", isPreviewing" : ""} } from '@khulnasoft.com/sdk-angular';
${a ? "import { Content } from '@khulnasoft.com/sdk-angular';" : ""}
${a ? "import { CommonModule } from '@angular/common';" : ""}
import { environment } from ${JSON.stringify(p)};
import { CUSTOM_COMPONENTS } from ${JSON.stringify(s)};

@Component({
  selector: 'app-${n}',
  ${a ? "standalone: true," : ""}
  ${a ? "imports: [Content, CommonModule]," : ""}
  template: \`
${m}
  \`,
})
export class ${t} {
  
  ${
    i
      ? `isPreviewing = isPreviewing();
`
      : ""
  }
  @Input() model = '${o}';

  apiKey = environment.${jt};
  ${
    e.typescriptEnabled
      ? `
  content: KhulnasoftContent | null = null;
`
      : `
  content = null;
`
  }

  customComponents = CUSTOM_COMPONENTS;

  async ngOnInit() {
    const urlPath = window.location.pathname || '/';

    const khulnasoftContent = await fetchOneEntry({
      model: this.model,
      apiKey: this.apiKey,
      userAttributes: {
        urlPath,
      },
    });

    if (!khulnasoftContent) {
      return;
    }

    this.content = khulnasoftContent;
  }
}

  `.trimStart();
}
function zs(e) {
  return e.typescriptEnabled
    ? `import type { RegisteredComponent } from "@khulnasoft.com/sdk-angular";
    
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
];`
    : `export const CUSTOM_COMPONENTS = [
  ];
  `;
}
async function qs(e, t) {
  let n = e.typescriptEnabled ? "ts" : "js",
    o = e.join(e.componentsDir, `counter.component.${n}`),
    i = await e.exists(o);
  e.debug(`angularEnsureCounterComponent, hasCounterCmp: ${i}`);
  let a = Js(e);
  if (!i) {
    let s = await e.formatCode(o, a);
    (await e.writeFile(o, s), t.push({ filePath: o, modifiedType: "create" }));
  }
  return o;
}
function Js(e) {
  return `
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  ${e.hasAppModule ? "" : "standalone: true,"}
  template: \`
    <div class="counter">
      <button class="btn" (click)="decrement()">-</button>
      <span class="count">{{ count }}</span>
      <button class="btn" (click)="increment()">+</button>
    </div>
  \`,
  styles: [
    \`
      .counter {
        margin: 32px auto;
        display: flex;
        width: 100%;
        max-width: 190px;
      }

      .btn {
        width: 42px;
        font-size: 32px;
        font-weight: bold;
        background-color: #1c6bd1;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        line-height: 1.4;
      }

      .btn:hover {
        opacity: 0.8;
      }

      .count {
        flex: 1;
        font-size: 42px;
        text-align: center;
        margin: 0 8px;
      }
    \`,
  ],
})
export class Counter {
  @Input() initialCount: number = 99;
  count: number;

  constructor() {
    this.count = this.initialCount;
  }

  ngOnInit(): void {
    this.count = this.initialCount;
  }

  increment(): void {
    this.count += 1;
  }

  decrement(): void {
    this.count -= 1;
  }
}

`.trimStart();
}
async function wo(e) {
  await zt(e);
  let t = await e.readFile(e.registryPath);
  return t ? Qs(e, t) : { components: [], sourceFile: I(e, "") };
}
async function Qs(e, t) {
  let r = I(e, t);
  return Ws(e, r);
}
async function Ws(e, t) {
  let r = [],
    n = J(e, t, "CUSTOM_COMPONENTS");
  return (
    n &&
      (await Promise.all(
        n.arrayLiteralExp.elements.map(async (o, i) => {
          let a = await yn(e, t, o);
          a && ((a.nodeIndex = i), r.push(a));
        }),
      )),
    { sourceFile: t, components: te(r) }
  );
}
async function yn(e, t, r) {
  if (!e.ts.isObjectLiteralExpression(r)) return null;
  let n = {
    id: "",
    name: "",
    displayFilePath: "",
    exportName: "",
    importName: "",
    filePath: "",
    relFilePath: "",
    importPath: "",
    inputs: [],
  };
  for (let o of r.properties) {
    if (!e.ts.isPropertyAssignment(o) || !e.ts.isIdentifier(o.name)) continue;
    if (N(e, o) === "component") {
      let a,
        { initializer: s } = o;
      if (e.ts.isIdentifier(s)) a = s.text;
      else if (e.ts.isCallExpression(s)) {
        let p = s.arguments[0];
        e.ts.isIdentifier(p) && (a = p.text);
      }
      if (!a) continue;
      (n.name === "" && (n.name = K(a)), (n.importName = a));
      let u = await he(e, e.registryPath, t, a);
      if (!u) continue;
      if (
        ((n.filePath = u.filePath),
        (n.relFilePath = u.relFilePath),
        (await e.exists(u.filePath))
          ? (n.importPath = V(e, u.filePath))
          : ((n.externalImportPath = u.importPath),
            (n.importPath = n.externalImportPath)),
        (n.displayFilePath = u.displayFilePath),
        (n.exportType = u.exportType),
        n.externalImportPath)
      )
        n.exportName = a;
      else {
        let p = await mo(e, u.filePath);
        if (p && p.length > 0)
          if (p.length === 1) n.exportName = p[0].cmpInfo.exportName;
          else {
            let m = p.find((f) => f.cmpInfo.exportName === a);
            m && (n.exportName = m.cmpInfo.exportName);
          }
      }
      continue;
    }
  }
  return (
    (n = ne(e, n, r)),
    n.filePath &&
      n.exportName &&
      (n.id = await $(e, n.filePath, n.exportName, n.externalImportPath)),
    n
  );
}
async function ve(e, t, r, n, o, i, a, s) {
  let u = await Ke(e),
    [p, m, f] = await Promise.all([co(e, u), wo(e), Pt(e)]),
    c = p.map((x) => x.cmpInfo),
    d = m.components,
    C = {
      components: me(c, d),
      registryPath: e.registryPath,
      registryDisplayPath: k(e, e.registryPath),
      frameworks: e.getFrameworks(),
      dependencies: Ee(c),
      publicApiKey: f.envValue ?? void 0,
      devToolsVersion: e.version,
    };
  if (s) return ((C.components = await fo(e, p, C.components)), C);
  let l = !1,
    D = m.sourceFile,
    g = Array.isArray(t) ? t : typeof t == "string" ? [t] : [];
  if (g.length > 0) {
    let x = g.map((A) => {
        let S = p.find((O) => O.cmpInfo.id === A);
        if (!S) throw new Error(`Component ${A} not found`);
        return S;
      }),
      E = Array.from(new Set(x.map((A) => A.cmpInfo.filePath))),
      P = await G(e, E);
    for (let A of x) {
      let S = C.components.find((L) => L.id === A.cmpInfo.id),
        O = await Cn(e, A, P);
      ie(S, O);
      let z = c.findIndex((L) => L.id === A.cmpInfo.id);
      c[z].inputs = O;
      let j = Pe(A.cmpInfo.id, c, d, r, n, o, i),
        {
          elements: F,
          elmIndex: y,
          statementIndex: H,
          statement: le,
          variableDeclaration: Y,
        } = await Gs(e, D, A);
      if (j.addCmpToRegistry) (F.push(Ys(e, j.addCmpToRegistry)), (l = !0));
      else if (j.removeCmpFromRegistry) (F.splice(y, 1), (l = !0));
      else if (j.updateRegisteredCmp) {
        let L = Q(e, F[y], j.updateRegisteredCmp);
        ((F[y] = e.ts.factory.updateObjectLiteralExpression(L, [
          To(e, j.updateRegisteredCmp),
          ...L.properties.slice(1),
        ])),
          (l = !0));
      }
      if (l && a) {
        let L = [...D.statements];
        ((L[H] = e.ts.factory.updateVariableStatement(
          le,
          le.modifiers,
          e.ts.factory.updateVariableDeclarationList(le.declarationList, [
            e.ts.factory.updateVariableDeclaration(
              Y,
              Y.name,
              Y.exclamationToken,
              Y.type,
              e.ts.factory.createArrayLiteralExpression(Ae(e, F)),
            ),
          ]),
        )),
          (D = e.ts.factory.updateSourceFile(D, L)),
          S.exportType === "named"
            ? (D = v(e, D, {
                namedImports: [S.importName],
                importPath: S.externalImportPath
                  ? S.externalImportPath
                  : B(e, e.registryPath, S.filePath),
              }))
            : (D = v(e, D, {
                defaultImport: S.importName,
                importPath: S.externalImportPath
                  ? S.externalImportPath
                  : B(e, e.registryPath, S.filePath),
              })),
          (D = v(e, D, {
            namedImports: ["RegisteredComponent"],
            importPath: "@khulnasoft.com/sdk-angular",
            isTypeOnly: !0,
          })),
          (D = ye(e, D, {
            variableName: "CUSTOM_COMPONENTS",
            arrayType: "RegisteredComponent",
          })),
          (C.components = j.components),
          (d = j.components.filter((X) => X.isRegistered)));
      }
    }
  }
  if (l && a) {
    ((D = Fe(e, D)), (D = Se(e, D)));
    let x = _(e, D);
    ((x = pe(x)),
      (x = await e.formatCode(e.registryPath, x)),
      await e.writeFile(e.registryPath, x));
  }
  return C;
}
function To(e, t) {
  let r = e.ts.factory.createIdentifier(t.importName);
  return e.ts.factory.createPropertyAssignment("component", r);
}
function Ys(e, t) {
  return Q(e, e.ts.factory.createObjectLiteralExpression([To(e, t)], !0), t);
}
async function Gs(e, t, r) {
  let n = J(e, t, "CUSTOM_COMPONENTS");
  if (!n)
    throw new Error(
      `Exported name of the Khulnasoft registry must be "CUSTOM_COMPONENTS". Please update your Khulnasoft registry file: ${e.registryPath}`,
    );
  let o = n.arrayLiteralExp.elements.filter((a) =>
      e.ts.isObjectLiteralExpression(a),
    ),
    i = -1;
  for (let a = 0; a < o.length; a++)
    if ((await yn(e, t, o[a]))?.id === r.cmpInfo.id) {
      i = a;
      break;
    }
  return { ...n, elements: o, elmIndex: i };
}
async function bo(e) {
  let t = await Hs(e),
    r = {};
  return {
    khulnasoftPageOptions: async () => ({
      templateContentId: "f0b8016ac92e474699293211a268ebaa",
      pathname: "/khulnasoft-demo",
      title: "Khulnasoft + Angular Demo Page",
    }),
    ensureKhulnasoftSetup: () => Fo(t),
    ensureFigmaImportPage: () => Po(t),
    getRegistryPath: () => t.registryPath,
    getRegistry: (o) =>
      ve(t, null, !1, !1, null, null, !1, !!o?.readAllInputTypes),
    addExternalPackage: async (o) => {
      r[o] || (r[o] = `export * from "${o}";`);
    },
    loadComponent: async (o) => {
      let i = await ve(t, o.cmpId, !1, !1, null, null, !1, !1);
      return { ...i, component: i.components.find((a) => a.id === o.cmpId) };
    },
    registerComponent: (o) => ve(t, o.cmpId, !0, !1, null, null, !0, !1),
    setRegisteredComponentInfo: (o) => ve(t, o.cmpId, !1, !1, o, null, !0, !1),
    setRegisteredComponentInput: (o) => ve(t, o.cmpId, !1, !1, null, o, !0, !1),
    unregisterComponent: (o) => ve(t, o.cmpId, !1, !0, null, null, !0, !1),
    getPublicApiKey: () => Pt(t),
    setPublicApiKey: (o) => po(t, o.publicApiKey),
    getDependencies: (o) => [
      { name: "@khulnasoft.com/dev-tools" },
      { name: "@khulnasoft.com/sdk-angular" },
      { name: "concurrently" },
    ],
    getDevRunCommand: () => "khulnasoft-dev",
    getCache: () => De(t),
    setCache: (o) => Ce(t, o),
  };
}
async function Hs(e) {
  let t = await Xs(e),
    r = e.getAppRootDir(),
    n = e.join(r, "src"),
    o = await re(e),
    i = e.join(n, "app"),
    a = await ae(e, i),
    s = {
      ...e,
      srcDir: "",
      appDir: "",
      componentsDir: "",
      registryPath: a,
      angularConfigPath: t,
      typescriptEnabled: o,
      khulnasoftPageComponentPath: "",
      hasAppModule: !1,
    };
  if (!(await e.exists(n)))
    throw new Error(
      `Could not find src directory. Searched for src in "${e.getAppRootDir()}".`,
    );
  ((s.srcDir = n),
    (s.appDir = i),
    (s.componentsDir = e.join(s.appDir, "components")),
    (s.khulnasoftPageComponentPath = e.join(
      s.componentsDir,
      `khulnasoft-page.component.${o ? "ts" : "js"}`,
    )));
  let u = `app.module.${o ? "ts" : "js"}`,
    p = e.join(s.appDir, u);
  return ((await e.exists(p)) && (s.hasAppModule = !0), s);
}
async function Xs(e) {
  let t = e.join(e.getAppRootDir(), "angular.json");
  if (await e.exists(t)) return t;
  let r = e.join(e.getAppRootDir(), "project.json");
  if (await e.exists(r)) return r;
  throw new Error(
    `Could not find Angular config file. Searched for angular.json & project.json in "${e.getAppRootDir()}".`,
  );
}
var Gt = Un(Ko(), 1);
async function Mo(e, t) {
  let n = {
    components: (await t.getRegistry()).components
      .filter((i) => i.isRegistered)
      .map((i) => {
        let a = {
          filePath: ce(e.relative(e.getAppRootDir(), i.filePath)),
          name: i.name,
          image: i.image,
          description: i.description,
          exportName: i.exportName,
          inputs: oe(i.inputs),
        };
        return oe(a);
      }),
    version: 1,
  };
  e.debug("exporting registry components:", n.components.length);
  let o = (0, Gt.compress)(n);
  return btoa(JSON.stringify(o));
}
async function Uo(e, t, r) {
  if (typeof r != "string") throw new Error("Invalid registry to import");
  let n = await t.getRegistry(),
    o = JSON.parse(atob(r)),
    i = (0, Gt.decompress)(o),
    a = oe(n);
  e.debug("importing registry components:", i.components.length);
  for (let s of i.components) {
    let u = ce(e.normalize(s.filePath)),
      p = n.components.find(
        (f) => ce(f.filePath).endsWith(u) && f.exportName === s.exportName,
      );
    if (!p) {
      console.error(
        `Could not find component to register: ${s.filePath}, ${s.exportName}`,
      );
      continue;
    }
    (e.debug(`register (${p.id})`, p.filePath),
      await t.registerComponent({ cmpId: p.id }));
    for (let f of s.inputs)
      (e.debug(`set input (${p.id})`),
        await t.setRegisteredComponentInput({
          cmpId: p.id,
          name: f.name,
          type: f.type,
          required: f.required,
          defaultValue: f.defaultValue,
          friendlyName: f.friendlyName,
          helperText: f.helperText,
        }));
    e.debug(`set input (${p.id}) info`);
    let m = await t.setRegisteredComponentInfo({
      cmpId: p.id,
      name: s.name,
      image: s.image,
      description: s.description,
    });
    a = oe(m);
  }
  return a;
}
var de = {
    react: "react",
    remix: "remix",
    angular: "angular",
    next: "next",
    qwik: "qwik",
  },
  hd = {
    [de.react]: [
      { version: w.gen1, recommended: !0 },
      { version: w.gen2, recommended: !1 },
    ],
    [de.remix]: [
      { version: w.gen1, recommended: !1 },
      { version: w.gen2, recommended: !0 },
    ],
    [de.angular]: [{ version: w.gen2, recommended: !0 }],
    [de.next]: [
      { version: w.gen1, recommended: !0 },
      { version: w.gen2, recommended: !1 },
    ],
    [de.qwik]: [{ version: w.gen2, recommended: !0 }],
  };
async function zo(e, t) {
  let r = [],
    n = new Set();
  async function o(i) {
    let a = e.join(i, "package.json");
    try {
      if (!(await e.exists(a))) return null;
      let u = await e.readFile(a);
      if (u === null) throw new Error(`Failed to read package.json at ${a}`);
      let p = JSON.parse(u);
      if (n.has(p.name)) return null;
      n.add(p.name);
      let m = { name: p.name, subPackages: [] },
        f = await e.readdir(i);
      for (let c of f)
        c !== "node_modules" &&
          (await e.stat(e.join(i, c))).isDirectory() &&
          m.subPackages.push(c);
      return (r.push(m), m);
    } catch (s) {
      return (e.Sentry?.captureException(s), null);
    }
  }
  try {
    let i = e.join(t, "package.json");
    if (await e.exists(i)) {
      let s = await e.readFile(i);
      if (s !== null) {
        let u = JSON.parse(s),
          p = { ...u.dependencies, ...u.devDependencies };
        for (let m of Object.keys(p)) {
          let f = e.join(t, "node_modules", m);
          await o(f);
        }
        if (u.workspaces)
          for (let m of u.workspaces) {
            let f = await e.readdir(e.join(t, m));
            for (let c of f) {
              let d = e.join(t, m, c);
              await o(d);
            }
          }
      }
    }
  } catch (i) {
    e.Sentry?.captureException(i);
  }
  return r;
}
var Au = {
    "@khulnasoft.com/qwik-city": qr,
    next: Or,
    "@remix-run/react": Zr,
    react: uo,
    "@angular/core": bo,
  },
  Fu = {
    "@khulnasoft.com/qwik-city": de.qwik,
    next: de.next,
    "@remix-run/react": de.remix,
    react: de.react,
    "@angular/core": de.angular,
  };
async function Pu(e) {
  if (!e.ts)
    throw new Error(
      "createDevTools() requires a TypeScript instance passed to the 'ts' option",
    );
  if (
    ((!e.frameworks || e.frameworks.length === 0) &&
      (e.frameworks = await Je(e)),
    e.frameworks.length === 0)
  )
    throw new Error("Supported Devtools framework for not found");
  for (let t of e.frameworks) {
    let r = Au[t.name];
    if (r) {
      let n = await r(e);
      return {
        ...n,
        exportRegistry: () => Mo(e, n),
        importRegistry: (i) => Uo(e, n, i),
        framework: Fu[t.name],
        findAllDependencies: async () => await zo(e, e.getRepoRootDir()),
      };
    }
  }
  throw new Error(
    `Devtools framework not found for ${e.getAppRootDir()}, ${JSON.stringify(e.frameworks, null, 2)}`,
  );
}
function qo(e) {
  function t(f) {
    if (typeof f != "string")
      throw new TypeError(
        "Path must be a string. Received " + JSON.stringify(f),
      );
  }
  function r(f, c) {
    let d = "",
      C = 0,
      l = -1,
      D = 0,
      g;
    for (let x = 0; x <= f.length; ++x) {
      if (x < f.length) g = f.charCodeAt(x);
      else {
        if (g === 47) break;
        g = 47;
      }
      if (g === 47) {
        if (!(l === x - 1 || D === 1))
          if (l !== x - 1 && D === 2) {
            if (
              d.length < 2 ||
              C !== 2 ||
              d.charCodeAt(d.length - 1) !== 46 ||
              d.charCodeAt(d.length - 2) !== 46
            ) {
              if (d.length > 2) {
                let E = d.lastIndexOf("/");
                if (E !== d.length - 1) {
                  (E === -1
                    ? ((d = ""), (C = 0))
                    : ((d = d.slice(0, E)),
                      (C = d.length - 1 - d.lastIndexOf("/"))),
                    (l = x),
                    (D = 0));
                  continue;
                }
              } else if (d.length === 2 || d.length === 1) {
                ((d = ""), (C = 0), (l = x), (D = 0));
                continue;
              }
            }
            c && (d.length > 0 ? (d += "/..") : (d = ".."), (C = 2));
          } else
            (d.length > 0
              ? (d += "/" + f.slice(l + 1, x))
              : (d = f.slice(l + 1, x)),
              (C = x - l - 1));
        ((l = x), (D = 0));
      } else g === 46 && D !== -1 ? ++D : (D = -1);
    }
    return d;
  }
  let n = function (...c) {
      let d = "",
        C = !1;
      for (let l = c.length - 1; l >= -1 && !C; l--) {
        let D;
        (l >= 0 ? (D = c[l]) : e.cwd ? (D = e.cwd()) : (D = "/"),
          t(D),
          D.length !== 0 && ((d = D + "/" + d), (C = D.charCodeAt(0) === 47)));
      }
      return (
        (d = r(d, !C)),
        C ? (d.length > 0 ? "/" + d : "/") : d.length > 0 ? d : "."
      );
    },
    o = function (c) {
      if ((t(c), c.length === 0)) return ".";
      let d = c.charCodeAt(0) === 47,
        C = c.charCodeAt(c.length - 1) === 47;
      return (
        (c = r(c, !d)),
        c.length === 0 && !d && (c = "."),
        c.length > 0 && C && (c += "/"),
        d ? "/" + c : c
      );
    };
  return {
    relative: function (c, d) {
      if ((t(c), t(d), c === d || ((c = n(c)), (d = n(d)), c === d))) return "";
      let C = 1;
      for (; C < c.length && c.charCodeAt(C) === 47; ++C);
      let l = c.length,
        D = l - C,
        g = 1;
      for (; g < d.length && d.charCodeAt(g) === 47; ++g);
      let E = d.length - g,
        P = D < E ? D : E,
        A = -1,
        S = 0;
      for (; S <= P; ++S) {
        if (S === P) {
          if (E > P) {
            if (d.charCodeAt(g + S) === 47) return d.slice(g + S + 1);
            if (S === 0) return d.slice(g + S);
          } else
            D > P &&
              (c.charCodeAt(C + S) === 47 ? (A = S) : S === 0 && (A = 0));
          break;
        }
        let z = c.charCodeAt(C + S),
          j = d.charCodeAt(g + S);
        if (z !== j) break;
        z === 47 && (A = S);
      }
      let O = "";
      for (S = C + A + 1; S <= l; ++S)
        (S === l || c.charCodeAt(S) === 47) &&
          (O.length === 0 ? (O += "..") : (O += "/.."));
      return O.length > 0
        ? O + d.slice(g + A)
        : ((g += A), d.charCodeAt(g) === 47 && ++g, d.slice(g));
    },
    resolve: n,
    join: function (...c) {
      if (c.length === 0) return ".";
      let d;
      for (let C = 0; C < c.length; ++C) {
        let l = c[C];
        (t(l), l.length > 0 && (d === void 0 ? (d = l) : (d += "/" + l)));
      }
      return d === void 0 ? "." : o(d);
    },
    isAbsolute: function (c) {
      return (t(c), c.length > 0 && c.charCodeAt(0) === 47);
    },
    basename: function (c, d) {
      if (d !== void 0 && typeof d != "string")
        throw new TypeError('"ext" argument must be a string');
      t(c);
      let C = 0,
        l = -1,
        D = !0,
        g;
      if (d !== void 0 && d.length > 0 && d.length <= c.length) {
        if (d.length === c.length && d === c) return "";
        let x = d.length - 1,
          E = -1;
        for (g = c.length - 1; g >= 0; --g) {
          let P = c.charCodeAt(g);
          if (P === 47) {
            if (!D) {
              C = g + 1;
              break;
            }
          } else
            (E === -1 && ((D = !1), (E = g + 1)),
              x >= 0 &&
                (P === d.charCodeAt(x)
                  ? --x === -1 && (l = g)
                  : ((x = -1), (l = E))));
        }
        return (C === l ? (l = E) : l === -1 && (l = c.length), c.slice(C, l));
      } else {
        for (g = c.length - 1; g >= 0; --g)
          if (c.charCodeAt(g) === 47) {
            if (!D) {
              C = g + 1;
              break;
            }
          } else l === -1 && ((D = !1), (l = g + 1));
        return l === -1 ? "" : c.slice(C, l);
      }
    },
    normalize: o,
    dirname: function (c) {
      if ((t(c), c.length === 0)) return ".";
      let d = c.charCodeAt(0),
        C = d === 47,
        l = -1,
        D = !0;
      for (let g = c.length - 1; g >= 1; --g)
        if (((d = c.charCodeAt(g)), d === 47)) {
          if (!D) {
            l = g;
            break;
          }
        } else D = !1;
      return l === -1 ? (C ? "/" : ".") : C && l === 1 ? "//" : c.slice(0, l);
    },
    extname: function (c) {
      t(c);
      let d = -1,
        C = 0,
        l = -1,
        D = !0,
        g = 0;
      for (let x = c.length - 1; x >= 0; --x) {
        let E = c.charCodeAt(x);
        if (E === 47) {
          if (!D) {
            C = x + 1;
            break;
          }
          continue;
        }
        (l === -1 && ((D = !1), (l = x + 1)),
          E === 46
            ? d === -1
              ? (d = x)
              : g !== 1 && (g = 1)
            : d !== -1 && (g = -1));
      }
      return d === -1 ||
        l === -1 ||
        g === 0 ||
        (g === 1 && d === l - 1 && d === C + 1)
        ? ""
        : c.slice(d, l);
    },
  };
}
async function yu(e) {
  let t = e.getRepoRootDir ? e.getRepoRootDir : () => "/",
    r = e.cwd ? e.cwd : () => "/",
    n = qo({ cwd: r, ...e }),
    o = new Map(),
    i = (l) => n.normalize(n.resolve(r(), l)),
    a = (l) => {
      for (let [D] of o) if ((D + "/").startsWith(l)) return !0;
      return l === t();
    },
    s = (l) => ((l = i(l)), o.has(l) ? !0 : a(l)),
    u = (l) => {
      l = i(l);
      let D = l === t() ? l : l + "/",
        g = D.split("/").length - 1,
        x = [];
      for (let [E] of o)
        if (E.split("/").slice(0, g).join("/") + "/" === D) {
          let S = E.split("/")[g];
          S && !x.includes(S) && x.push(S);
        }
      return x.sort();
    },
    p = (l) => {
      l = i(l);
      let D = o.get(l);
      return typeof D == "string" ? D : null;
    },
    m = (l) => (
      (l = i(l)),
      { isFile: () => o.has(l), isDirectory: () => !o.has(l) && a(l) }
    ),
    f = async (l) => {
      if (typeof crypto < "u") {
        let x = new TextEncoder().encode(l),
          E = await crypto.subtle.digest("SHA-256", x);
        return Array.from(new Uint8Array(E))
          .map((P) => P.toString(16).padStart(2, "0"))
          .join("");
      }
      let D = 0;
      for (let g = 0; g < l.length; g++) {
        let x = l.charCodeAt(g);
        ((D = (D << 5) - D + x), (D |= 0));
      }
      return Number(Math.abs(D)).toString(36);
    },
    c = new Set(),
    d = {
      getRepoRootDir: t,
      getAppRootDir: t,
      getCwdDir: r,
      cwd: r,
      exists: async (l) => s(l),
      existsSync: s,
      readdir: async (l) => u(l),
      readdirSync: u,
      readFile: async (l) => p(l),
      readdirRecursive: async (l, D) => u(l) ?? [],
      readFileSync: p,
      stat: async (l) => m(l),
      statSync: m,
      writeFile: async (l, D) => {
        ((l = i(l)), o.set(l, D));
        let g = {
          path: l,
          basename: n.basename(l),
          dirname: n.dirname(l),
          extname: n.extname(l),
        };
        for (let x of c) await x(g);
      },
      unlink: async (l) => {
        ((l = i(l)), o.delete(l));
      },
      unlinkSync: (l) => {
        ((l = i(l)), o.delete(l));
      },
      hash: f,
      getDeviceId: async () =>
        typeof navigator < "u" ? f(navigator.userAgent) : "",
      getRepoInfo: async () => ({
        remoteUrl: "",
        defaultBranch: "",
        currentBranch: "",
        commit: "",
      }),
      formatCode: async (l, D) => D,
      on: (l, D) => {
        l === "change" && c.add(D);
      },
      off: (l, D) => {
        l === "change" && c.delete(D);
      },
      debug: (...l) => {
        console.debug("[khulnasoft-dev-tools]", ...l);
      },
      launchEditor: async () => {},
      platform: () => ({ runtime: "", os: "" }),
      getFrameworks: () => [],
      ...n,
      ...e,
      version: "0.0.0",
      sdkVersion: null,
      kind: null,
      magicast: void 0,
      spawnSync: void 0,
      Sentry: void 0,
    },
    C = await Je(d);
  return ((d.getFrameworks = e.getFrameworks ? e.getFrameworks : () => C), d);
}
async function Jo(e, t, r) {
  try {
    let n = I(e, r),
      o = {
        content: r,
        filePath: t,
        fileName: e.basename(t),
        hasContentUpdates: !1,
      };
    if (await Hn(e))
      return (
        console.warn(
          "Turbopack does not support the Khulnasoft.com devtools cli. Please disable Turbopack or manually integrate Khulnasoft.com into your Next.js project.",
        ),
        o
      );
    if (Qo(e, n)) return o;
    let s = ue(e, n, "cjs"),
      u = ue(e, n);
    if (s.length !== 1 && u.length !== 1)
      throw new Error("Expected an export from file");
    if (u.length === 1) {
      let f = u[0];
      if (!f.isDefaultExport)
        throw new Error("Expected a default export from file");
      let c = f.statement;
      if (!e.ts.isVariableStatement(c))
        throw new Error(`Unexpected export type in ${t}
Found config content:
${r}

The config file must follow one of these formats:
1. const nextConfig = { /* config */ }
   export default nextConfig

2. const nextConfig = (phase, config) => ({ /* config */ })
   export default nextConfig

3. export default { /* config */ }

Current export type: ${c.kind ? e.ts.SyntaxKind[c.kind] : "none"}`);
      let d = f.statement;
      if (e.ts.isVariableStatement(d)) {
        let C = [...d.declarationList.declarations];
        if (C.length !== 1)
          throw new Error("Expected a single variable declaration");
        let l = C[0];
        if (!l.initializer)
          throw new Error("Expected an initializer on the declaration");
        let D = l.initializer;
        if (e.ts.isObjectLiteralExpression(D) || e.ts.isCallExpression(D)) {
          let g = "KhulnasoftDevTools()",
            x = [...n.statements],
            E = x.indexOf(d);
          return (
            (x[E] = e.ts.factory.updateVariableStatement(
              d,
              d.modifiers,
              e.ts.factory.updateVariableDeclarationList(d.declarationList, [
                e.ts.factory.updateVariableDeclaration(
                  l,
                  l.name,
                  l.exclamationToken,
                  l.type,
                  e.ts.factory.createCallExpression(
                    e.ts.factory.createIdentifier(g),
                    void 0,
                    [D],
                  ),
                ),
              ]),
            )),
            (n = e.ts.factory.updateSourceFile(n, x)),
            (n = v(e, n, {
              defaultImport: "KhulnasoftDevTools",
              importPath: "@khulnasoft.com/dev-tools/next",
            })),
            (o.content = _(e, n)),
            (o.hasContentUpdates = !0),
            o
          );
        }
        throw new Error(`Unexpected initializer on the variable statement in file
Found config content:
${r}

The config variable must be initialized with either:
1. An object literal: const nextConfig = { /* config */ }
2. A function call: const nextConfig = withSomePlugin({ /* config */ })

Current initializer type: ${D?.kind ? e.ts.SyntaxKind[D.kind] : "none"}
Expected types: ObjectLiteralExpression or CallExpression`);
      }
    }
    let p = s[0];
    if (!p.isDefaultExport)
      throw new Error(`Expected a default export from ${t}
Found config content:
${r}
Detected export type: ${p?.statement.kind ?? "none"}
Valid formats:
1. module.exports = { ... }
2. module.exports = (phase, config) => { return { ... } }
3. export default { ... }`);
    if (
      e.ts.isObjectLiteralExpression(p.node) ||
      e.ts.isCallExpression(p.node)
    ) {
      let f = p.statement;
      if (!e.ts.isExpressionStatement(f))
        throw new Error(
          "Expected an expression statement for the default export",
        );
      let c = f.expression;
      if (!e.ts.isBinaryExpression(c))
        throw new Error("Expected a binary expression for the default export");
      let d = Vn(e, n);
      n = d.sourceFile;
      let C = [...n.statements],
        l = C.indexOf(f);
      return (
        (C[l] = e.ts.factory.updateExpressionStatement(
          f,
          e.ts.factory.updateBinaryExpression(
            c,
            c.left,
            c.operatorToken,
            e.ts.factory.createCallExpression(
              e.ts.factory.createIdentifier(d.withFnVariableName),
              void 0,
              [c.right],
            ),
          ),
        )),
        (n = e.ts.factory.updateSourceFile(n, C)),
        (o.content = _(e, n)),
        (o.hasContentUpdates = !0),
        o
      );
    }
    let m = p.statement;
    if (e.ts.isVariableStatement(m)) {
      let f = [...m.declarationList.declarations];
      if (f.length !== 1)
        throw new Error("Expected a single variable declaration");
      let c = f[0];
      if (!c.initializer)
        throw new Error("Expected an initializer on the declaration");
      let d = c.initializer;
      if (e.ts.isObjectLiteralExpression(d) || e.ts.isCallExpression(d)) {
        let C = Vn(e, n);
        n = C.sourceFile;
        let l = [...n.statements],
          D = l.indexOf(m);
        return (
          (l[D] = e.ts.factory.updateVariableStatement(
            m,
            m.modifiers,
            e.ts.factory.updateVariableDeclarationList(m.declarationList, [
              e.ts.factory.updateVariableDeclaration(
                c,
                c.name,
                c.exclamationToken,
                c.type,
                e.ts.factory.createCallExpression(
                  e.ts.factory.createIdentifier(C.withFnVariableName),
                  void 0,
                  [d],
                ),
              ),
            ]),
          )),
          (n = e.ts.factory.updateSourceFile(n, l)),
          (o.content = _(e, n)),
          (o.hasContentUpdates = !0),
          o
        );
      }
      throw new Error(`Unexpected initializer on the variable statement in ${t}
Found config content:
${r}

The config variable must be initialized with either:
1. An object literal: const nextConfig = { /* config */ }
2. A function call: const nextConfig = withSomePlugin({ /* config */ })

Current initializer type: ${d.kind}
Expected types: ${e.ts.SyntaxKind.ObjectLiteralExpression} or ${e.ts.SyntaxKind.CallExpression}`);
    }
    if (e.ts.isArrowFunction(p.node)) {
      let f = p.node,
        c = p.statement;
      if (!e.ts.isExpressionStatement(c))
        throw new Error(
          "Expected an expression statement for the default export",
        );
      let d = c.expression;
      if (!e.ts.isBinaryExpression(d))
        throw new Error("Expected a binary expression for the default export");
      let l = p.node.body;
      if (!e.ts.isBlock(l))
        throw new Error("Expected a block body on the next config function");
      let D = [...l.statements],
        g = D.findIndex((S) => e.ts.isReturnStatement(S));
      if (g === -1)
        throw new Error(
          "Expected a return statement on the next config function",
        );
      let x = D[g],
        E = Vn(e, n);
      ((n = E.sourceFile),
        (D[g] = e.ts.factory.updateReturnStatement(
          x,
          e.ts.factory.createCallExpression(
            e.ts.factory.createIdentifier(E.withFnVariableName),
            void 0,
            [x.expression],
          ),
        )));
      let P = [...n.statements],
        A = P.indexOf(c);
      return (
        (P[A] = e.ts.factory.updateExpressionStatement(
          c,
          e.ts.factory.updateBinaryExpression(
            d,
            d.left,
            d.operatorToken,
            e.ts.factory.updateArrowFunction(
              f,
              f.modifiers,
              f.typeParameters,
              f.parameters,
              f.type,
              f.equalsGreaterThanToken,
              e.ts.factory.updateBlock(l, D),
            ),
          ),
        )),
        (n = e.ts.factory.updateSourceFile(n, P)),
        (o.content = _(e, n)),
        (o.hasContentUpdates = !0),
        o
      );
    }
    throw new Error("Unexpected export type");
  } catch (n) {
    throw (
      e.Sentry?.captureException(n, {
        extra: { configFilePath: t, configContent: r },
      }),
      n
    );
  }
}
function Qo(e, t) {
  for (let r of t.statements)
    if (e.ts.isVariableStatement(r))
      for (let n of r.declarationList.declarations) {
        if (!n.initializer || !e.ts.isCallExpression(n.initializer)) continue;
        let o = n.initializer.expression;
        if (
          !e.ts.isCallExpression(o) ||
          !e.ts.isIdentifier(o.expression) ||
          o.expression.text !== "require"
        )
          continue;
        let i = o.arguments[0];
        if (
          !(!i || !e.ts.isStringLiteral(i)) &&
          i.text === "@khulnasoft.com/dev-tools/next" &&
          e.ts.isIdentifier(n.name)
        )
          return n.name.text;
      }
  return null;
}
function Vn(e, t) {
  let r = Qo(e, t);
  return (
    r ||
      ((r = "withKhulnasoftDevTools"),
      (t = e.ts.factory.updateSourceFile(t, [
        e.ts.factory.createVariableStatement(
          void 0,
          e.ts.factory.createVariableDeclarationList(
            [
              e.ts.factory.createVariableDeclaration(
                r,
                void 0,
                void 0,
                e.ts.factory.createCallExpression(
                  e.ts.factory.createCallExpression(
                    e.ts.factory.createIdentifier("require"),
                    void 0,
                    [
                      e.ts.factory.createStringLiteral(
                        "@khulnasoft.com/dev-tools/next",
                      ),
                    ],
                  ),
                  void 0,
                  [],
                ),
              ),
            ],
            e.ts.NodeFlags.Const,
          ),
        ),
        ...t.statements,
      ]))),
    { withFnVariableName: r, sourceFile: t }
  );
}
async function Go(e, t, r) {
  try {
    let n = I(e, r),
      o = {
        content: r,
        filePath: t,
        fileName: e.basename(t),
        hasContentUpdates: !1,
      };
    if (Ho(e, n)) return o;
    let a = ue(e, n, "cjs"),
      s = ue(e, n);
    if (a.length !== 1 && s.length !== 1)
      throw new Error(`Expected an export from ${t}`);
    let u = a[0];
    if (s.length === 1) {
      let m = s[0];
      if (!m.isDefaultExport)
        throw new Error(`Expected a default export from ${t}`);
      let f = m.statement;
      if (!e.ts.isExportAssignment(f))
        throw new Error(`Expected an export assignment from ${t}`);
      if (e.ts.isObjectLiteralExpression(f.expression)) {
        let c = "khulnasoftDevTools()",
          d = wu(e, f.expression);
        if (!d) return o;
        let C = e.ts.factory.createCallExpression(
            e.ts.factory.createIdentifier(c),
            void 0,
            [d],
          ),
          l = [...n.statements],
          D = l.indexOf(f);
        return (
          (l[D] = e.ts.factory.updateExportAssignment(f, f.modifiers, C)),
          (n = e.ts.factory.updateSourceFile(n, l)),
          (n = v(e, n, {
            defaultImport: "khulnasoftDevTools",
            importPath: "@khulnasoft.com/dev-tools/remix",
          })),
          (o.content = _(e, n)),
          (o.hasContentUpdates = !0),
          o
        );
      }
    }
    if (!u.isDefaultExport)
      throw new Error(`Expected a default export from ${t}`);
    if (
      e.ts.isObjectLiteralExpression(u.node) ||
      e.ts.isCallExpression(u.node)
    ) {
      let m = u.statement;
      if (!e.ts.isExpressionStatement(m))
        throw new Error(
          "Expected an expression statement for the default export",
        );
      let f = m.expression;
      if (!e.ts.isBinaryExpression(f))
        throw new Error("Expected a binary expression for the default export");
      let c = Wo(e, n);
      n = c.sourceFile;
      let d = [...n.statements],
        C = d.indexOf(m);
      return (
        (d[C] = e.ts.factory.updateExpressionStatement(
          m,
          e.ts.factory.updateBinaryExpression(
            f,
            f.left,
            f.operatorToken,
            e.ts.factory.createCallExpression(
              e.ts.factory.createIdentifier(c.withFnVariableName),
              void 0,
              [f.right],
            ),
          ),
        )),
        (n = e.ts.factory.updateSourceFile(n, d)),
        (o.content = _(e, n)),
        (o.hasContentUpdates = !0),
        o
      );
    }
    let p = u.statement;
    if (e.ts.isVariableStatement(p)) {
      let m = [...p.declarationList.declarations];
      if (m.length !== 1)
        throw new Error("Expected a single variable declaration");
      let f = m[0];
      if (!f.initializer)
        throw new Error("Expected an initializer on the declaration");
      let c = f.initializer;
      if (e.ts.isObjectLiteralExpression(c) || e.ts.isCallExpression(c)) {
        let d = Wo(e, n);
        n = d.sourceFile;
        let C = [...n.statements],
          l = C.indexOf(p);
        return (
          (C[l] = e.ts.factory.updateVariableStatement(
            p,
            p.modifiers,
            e.ts.factory.updateVariableDeclarationList(p.declarationList, [
              e.ts.factory.updateVariableDeclaration(
                f,
                f.name,
                f.exclamationToken,
                f.type,
                e.ts.factory.createCallExpression(
                  e.ts.factory.createIdentifier(d.withFnVariableName),
                  void 0,
                  [c],
                ),
              ),
            ]),
          )),
          (n = e.ts.factory.updateSourceFile(n, C)),
          (o.content = _(e, n)),
          (o.hasContentUpdates = !0),
          o
        );
      }
      throw new Error("Unexpected initializer on the variable statement");
    }
    throw new Error("Unexpected export type");
  } catch (n) {
    throw (
      e.Sentry?.captureException(n, {
        extra: { configFilePath: t, configContent: r },
      }),
      n
    );
  }
}
function Ho(e, t) {
  for (let r of t.statements)
    if (e.ts.isVariableStatement(r))
      for (let n of r.declarationList.declarations) {
        if (!n.initializer || !e.ts.isCallExpression(n.initializer)) continue;
        let o = n.initializer.expression;
        if (
          !e.ts.isCallExpression(o) ||
          !e.ts.isIdentifier(o.expression) ||
          o.expression.text !== "require"
        )
          continue;
        let i = o.arguments[0];
        if (
          !(!i || !e.ts.isStringLiteral(i)) &&
          i.text === "@khulnasoft.com/dev-tools/remix" &&
          e.ts.isIdentifier(n.name)
        )
          return n.name.text;
      }
  return null;
}
function Wo(e, t) {
  let r = Ho(e, t);
  return (
    r ||
      ((r = "withKhulnasoftDevTools"),
      (t = e.ts.factory.updateSourceFile(t, [
        e.ts.factory.createVariableStatement(
          void 0,
          e.ts.factory.createVariableDeclarationList(
            [
              e.ts.factory.createVariableDeclaration(
                r,
                void 0,
                void 0,
                e.ts.factory.createCallExpression(
                  e.ts.factory.createCallExpression(
                    e.ts.factory.createIdentifier("require"),
                    void 0,
                    [
                      e.ts.factory.createStringLiteral(
                        "@khulnasoft.com/dev-tools/remix",
                      ),
                    ],
                  ),
                  void 0,
                  [],
                ),
              ),
            ],
            e.ts.NodeFlags.Const,
          ),
        ),
        ...t.statements,
      ]))),
    { withFnVariableName: r, sourceFile: t }
  );
}
function wu(e, t) {
  let r = [...t.properties],
    n = r.findIndex((i) => N(e, i) === "serverDependenciesToBundle");
  if (n > -1) {
    let i = r[n];
    if (
      e.ts.isPropertyAssignment(i) &&
      i.initializer &&
      e.ts.isArrayLiteralExpression(i.initializer)
    ) {
      let a = Yo(e, i.initializer);
      if (a)
        return (
          (r[n] = e.ts.factory.updatePropertyAssignment(i, i.name, a)),
          e.ts.factory.updateObjectLiteralExpression(t, r)
        );
    }
    return null;
  }
  let o = Yo(e, e.ts.factory.createArrayLiteralExpression([], !0));
  return o
    ? e.ts.factory.updateObjectLiteralExpression(t, [
        ...r,
        e.ts.factory.createPropertyAssignment("serverDependenciesToBundle", o),
      ])
    : null;
}
function Yo(e, t) {
  return t.elements.some((n) =>
    e.ts.isCallExpression(n) && e.ts.isIdentifier(n.expression)
      ? n.expression.text === "@khulnasoft.com/react"
      : !1,
  )
    ? null
    : e.ts.factory.updateArrayLiteralExpression(t, [
        ...t.elements,
        e.ts.factory.createIdentifier('"@khulnasoft.com/react"'),
      ]);
}
async function Zo(e, t, r) {
  try {
    let n = I(e, r),
      o = ue(e, n);
    if (o.length !== 1) throw new Error(`Expected an export from ${t}`);
    let i = o[0];
    if (!i.isDefaultExport)
      throw new Error(`Expected a default export from ${t}`);
    let a = i.statement;
    if (!e.ts.isExportAssignment(a))
      throw new Error(`Expected an export assignment from ${t}`);
    let s = {
      content: r,
      filePath: t,
      fileName: e.basename(t),
      hasContentUpdates: !1,
    };
    if (
      e.ts.isCallExpression(i.node) &&
      e.ts.isIdentifier(i.node.expression) &&
      i.node.expression.text === "defineConfig"
    ) {
      let u = [...i.node.arguments];
      if (u.length === 0)
        throw new Error("Expected an argument in defineConfig()");
      let p = u[0];
      if (e.ts.isArrowFunction(p)) {
        let m = Tu(e, p);
        if (!m) return s;
        u[0] = e.ts.factory.updateArrowFunction(
          p,
          p.modifiers,
          p.typeParameters,
          p.parameters,
          p.type,
          p.equalsGreaterThanToken,
          m,
        );
        let f = [...n.statements],
          c = f.indexOf(a);
        return (
          (f[c] = e.ts.factory.updateExportAssignment(
            a,
            void 0,
            e.ts.factory.updateCallExpression(
              i.node,
              i.node.expression,
              i.node.typeArguments,
              u,
            ),
          )),
          (n = e.ts.factory.updateSourceFile(n, f)),
          (n = v(e, n, {
            namedImports: ["khulnasoftDevTools"],
            importPath: "@khulnasoft.com/dev-tools/vite",
          })),
          (s.content = _(e, n)),
          (s.hasContentUpdates = !0),
          s
        );
      }
      if (e.ts.isObjectLiteralExpression(p)) {
        let m = $n(e, p);
        if (!m) return s;
        let f = [...n.statements],
          c = f.indexOf(a);
        return (
          (f[c] = e.ts.factory.updateExportAssignment(
            a,
            void 0,
            e.ts.factory.updateCallExpression(
              i.node,
              i.node.expression,
              i.node.typeArguments,
              [m],
            ),
          )),
          (n = e.ts.factory.updateSourceFile(n, f)),
          (n = v(e, n, {
            namedImports: ["khulnasoftDevTools"],
            importPath: "@khulnasoft.com/dev-tools/vite",
          })),
          (s.content = _(e, n)),
          (s.hasContentUpdates = !0),
          s
        );
      }
      throw new Error("Unsupported argument in defineConfig()");
    }
    if (e.ts.isObjectLiteralExpression(a.expression)) {
      let u = $n(e, a.expression);
      if (!u) return s;
      let p = [...n.statements],
        m = p.indexOf(a);
      return (
        (p[m] = e.ts.factory.updateExportAssignment(a, a.modifiers, u)),
        (n = e.ts.factory.updateSourceFile(n, p)),
        (n = v(e, n, {
          namedImports: ["khulnasoftDevTools"],
          importPath: "@khulnasoft.com/dev-tools/vite",
        })),
        (s.content = _(e, n)),
        (s.hasContentUpdates = !0),
        s
      );
    }
    throw new Error(`Unable to parse ${t}`);
  } catch (n) {
    throw (
      e.Sentry?.captureException(n, {
        extra: { configFilePath: t, configContent: r },
      }),
      n
    );
  }
}
function Tu(e, t) {
  let r = t.body;
  if (!e.ts.isBlock(r)) return null;
  let n = [...r.statements],
    o = n.findIndex((s) => e.ts.isReturnStatement(s));
  if (o === -1) {
    let s = e.ts.factory.createReturnStatement(
      e.ts.factory.createObjectLiteralExpression(),
    );
    (n.push(s), (o = n.length - 1));
  }
  let i = n[o];
  if (!i.expression || !e.ts.isObjectLiteralExpression(i.expression))
    return null;
  let a = $n(e, i.expression);
  return a
    ? ((n[o] = e.ts.factory.updateReturnStatement(i, a)),
      e.ts.factory.updateBlock(r, n))
    : null;
}
function $n(e, t) {
  if (Iu(e)) {
    let i = bu(e, t);
    i && (t = i);
  }
  let r = [...t.properties],
    n = r.findIndex((i) => N(e, i) === "plugins");
  if (n > -1) {
    let i = r[n];
    if (
      e.ts.isPropertyAssignment(i) &&
      i.initializer &&
      e.ts.isArrayLiteralExpression(i.initializer)
    ) {
      let a = Xo(e, i.initializer);
      if (a)
        return (
          (r[n] = e.ts.factory.updatePropertyAssignment(i, i.name, a)),
          e.ts.factory.updateObjectLiteralExpression(t, r)
        );
    }
    return null;
  }
  let o = Xo(e, e.ts.factory.createArrayLiteralExpression([], !0));
  return o
    ? e.ts.factory.updateObjectLiteralExpression(t, [
        ...r,
        e.ts.factory.createPropertyAssignment("plugins", o),
      ])
    : null;
}
function Xo(e, t) {
  return t.elements.some((n) =>
    e.ts.isCallExpression(n) && e.ts.isIdentifier(n.expression)
      ? n.expression.text === "khulnasoftDevTools"
      : !1,
  )
    ? null
    : e.ts.factory.updateArrayLiteralExpression(t, [
        ...t.elements,
        e.ts.factory.createCallExpression(
          e.ts.factory.createIdentifier("khulnasoftDevTools"),
          void 0,
          [],
        ),
      ]);
}
function bu(e, t) {
  let r = [...t.properties],
    n = r.findIndex((i) => N(e, i) === "ssr");
  if (n > -1) {
    let i = r[n];
    if (
      e.ts.isPropertyAssignment(i) &&
      i.initializer &&
      e.ts.isObjectLiteralExpression(i.initializer)
    ) {
      let a = vu(e, i.initializer);
      if (a)
        return (
          (r[n] = e.ts.factory.updatePropertyAssignment(i, i.name, a)),
          e.ts.factory.updateObjectLiteralExpression(t, r)
        );
    }
    return null;
  }
  let o = Kn(e, e.ts.factory.createArrayLiteralExpression([], !0));
  if (o) {
    let i = e.ts.factory.createObjectLiteralExpression([
      e.ts.factory.createPropertyAssignment("noExternal", o),
    ]);
    return e.ts.factory.updateObjectLiteralExpression(t, [
      ...r,
      e.ts.factory.createPropertyAssignment("ssr", i),
    ]);
  }
  return null;
}
function vu(e, t) {
  let r = [...t.properties],
    n = r.findIndex((i) => N(e, i) === "noExternal");
  if (n > -1) {
    let i = r[n];
    if (
      e.ts.isPropertyAssignment(i) &&
      i.initializer &&
      e.ts.isArrayLiteralExpression(i.initializer)
    ) {
      let a = Kn(e, i.initializer);
      if (a)
        return (
          (r[n] = e.ts.factory.updatePropertyAssignment(i, i.name, a)),
          e.ts.factory.updateObjectLiteralExpression(t, r)
        );
    }
    return null;
  }
  let o = Kn(e, e.ts.factory.createArrayLiteralExpression([], !0));
  if (o)
    return e.ts.factory.updateObjectLiteralExpression(t, [
      ...r,
      e.ts.factory.createPropertyAssignment("noExternal", o),
    ]);
}
function Kn(e, t) {
  return t.elements.some((n) =>
    e.ts.isStringLiteral(n) ? n.text === "@khulnasoft.com/react" : !1,
  )
    ? null
    : e.ts.factory.updateArrayLiteralExpression(t, [
        ...t.elements,
        e.ts.factory.createStringLiteral("@khulnasoft.com/react"),
      ]);
}
function Iu(e) {
  return e.getFrameworks().some((t) => t.name === "@remix-run/react");
}
async function ei(e, t, r) {
  return (
    e.debug("Webpack config updates are currently in progress..."),
    { content: r, fileName: e.basename(t), filePath: t, hasContentUpdates: !0 }
  );
}
async function ni(e, t, r) {
  e.debug("Angular config updates are currently in progress...");
  try {
    await Bu(e);
  } catch {
    console.error("Unable to update package.json.");
  }
  return (
    await Ru(e),
    { content: r, fileName: e.basename(t), filePath: t, hasContentUpdates: !0 }
  );
}
async function Ru(e) {
  let t = e.getAppRootDir(),
    r = e.join(t, "src");
  if (!(await e.exists(r)))
    throw new Error(
      `Could not find src directory. Searched for src in "${e.getAppRootDir()}".`,
    );
  let n = e.join(r, "main.ts"),
    o = await e.readFile(n);
  if (!o) throw new Error(`Unable to read main.ts at ${n}`);
  let i = await Nu(e, o);
  await e.writeFile(n, i);
}
async function Nu(e, t) {
  let r = t,
    n = I(e, t),
    o = !1;
  for (let a of n.statements)
    if (
      e.ts.isExpressionStatement(a) &&
      e.ts.isCallExpression(a.expression) &&
      e.ts.isPropertyAccessExpression(a.expression.expression) &&
      e.ts.isCallExpression(a.expression.expression.expression) &&
      e.ts.isIdentifier(a.expression.expression.expression.expression) &&
      a.expression.expression.expression.expression.text ===
        "khulnasoftDevTools"
    ) {
      o = !0;
      break;
    }
  n = v(e, n, {
    namedImports: ["khulnasoftDevTools"],
    importPath: "@khulnasoft.com/dev-tools/angular",
  });
  let i = `
khulnasoftDevTools().catch((err: Error) =>
    console.error("Error starting dev tools:", err)
  );`;
  return ((r = _(e, n)), o || (r += i), r);
}
async function Bu(e) {
  let t = e.getRepoRootDir(),
    r = e.join(t, "package.json"),
    n = await e.readFile(r);
  if (!n) throw new Error(`Unable to read package.json at ${r}`);
  let o = Ou(e, n);
  o && (await e.writeFile(r, o));
}
function Ou(e, t) {
  let r = JSON.parse(t);
  if (((r.scripts = r.scripts || {}), r.scripts[ti])) return;
  let n = r.scripts.start || r.scripts.dev || "ng serve";
  if (!n.includes("concurrently")) {
    let o = e.getRepoRootDir(),
      i = e.getAppRootDir(),
      a = o === i ? "" : ` --cwd ${e.relative(o, i)}`,
      s = `concurrently "${n}" "${ku}${a}"`;
    ((r.scripts.start = s), (r.scripts[ti] = s));
  }
  return (
    JSON.stringify(r, null, 2) +
    `
`
  );
}
var ti = "khulnasoft-dev",
  ku = "npx khulnasoft-dev-tools";
var oi = [
  {
    id: "next",
    configFileNames: ["next.config.ts", "next.config.js", "next.config.mjs"],
    ensureConfigPlugin: Jo,
  },
  {
    id: "vite",
    configFileNames: ["vite.config.ts", "vite.config.js"],
    ensureConfigPlugin: Zo,
  },
  {
    id: "remix",
    configFileNames: ["remix.config.ts", "remix.config.js"],
    ensureConfigPlugin: Go,
  },
  {
    id: "webpack",
    configFileNames: ["webpack.config.ts", "webpack.config.js"],
    ensureConfigPlugin: ei,
  },
  {
    id: "angular",
    configFileNames: ["angular.json", "project.json"],
    ensureConfigPlugin: ni,
  },
];
async function ii(e) {
  let t = e.resolve("/");
  for (let n of oi)
    for (let o of n.configFileNames) {
      let i = e.getAppRootDir();
      for (let a = 0; a < 10; a++)
        try {
          let s = e.join(i, o),
            u = e.readFileSync(s);
          if (typeof u == "string")
            return { id: n.id, filePath: s, content: u };
          if (i === t) break;
          i = e.dirname(i);
        } catch (s) {
          if ((s?.message ?? "").includes("Invalid path")) break;
          throw s;
        }
    }
  if ((await Je(e)).some((n) => n.name === "next")) {
    let n = e.join(e.getAppRootDir(), "next.config.js");
    return (await e.writeFile(n, ri), { id: "next", filePath: n, content: ri });
  }
  return null;
}
async function Lu(e) {
  let t = await ii(e);
  if (!t)
    throw new Error(
      "Unable to find config file, such as next.config.js or vite.config.js.",
    );
  let n = await oi
    .find((o) => o.id === t.id)
    .ensureConfigPlugin(e, t.filePath, t.content);
  return (
    n.hasContentUpdates &&
      ((n.content = pe(n.content)),
      (n.content = await e.formatCode(n.filePath, n.content)),
      await e.writeFile(t.filePath, n.content)),
    n
  );
}
var ri = `
/** @type {import('next').NextConfig} */
const nextConfig = {
}
 
module.exports = nextConfig
`.trimStart();
var ai = "/~khulnasoft-dev-tools.js";
function _u(e) {
  try {
    if (typeof e != "string" || e.trim().length === 0)
      return (console.error("Missing devtool server url"), "");
    let t = new URL(ai, e);
    t.searchParams.set("v", Ht);
    let r = JSON.stringify(Ht),
      n = `/* Khulnasoft Devtools v${Ht} */
`;
    return (
      (n += `(() => {
`),
      (n += `  if (typeof document !== "undefined") {
`),
      (n += `    let devToolsScript = document.head.querySelector("script[data-khulnasoft-dev-tools]");
`),
      (n += `    if (!devToolsScript) {
`),
      (n += `      devToolsScript = document.createElement("script");
`),
      (n += `      devToolsScript.setAttribute("src", ${JSON.stringify(t)});
`),
      (n += `      devToolsScript.setAttribute("data-khulnasoft-dev-tools", ${r});
`),
      (n += `      devToolsScript.setAttribute("async", "");
`),
      (n += `      document.head.appendChild(devToolsScript);
`),
      (n += `    }
`),
      (n += `  }
`),
      (n += `})();
`),
      n
    );
  } catch (t) {
    return (
      console.error(
        `Failed to create devtools client script: ${t.message || t}`,
      ),
      ""
    );
  }
}
var Ht = "1.5.12";
export {
  Pu as createDevTools,
  yu as createDevToolsSys,
  Je as detectFrameworks,
  Xn as detectFrameworksFromPackageJson,
  Lu as ensureConfigPlugin,
  ii as findBuildToolConfig,
  _u as getClientScript,
  er as parseDotEnvContent,
  Ht as version,
};
