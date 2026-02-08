
import {Buffer} from "node:buffer";
globalThis.Buffer = Buffer;

import {AsyncLocalStorage} from "node:async_hooks";
globalThis.AsyncLocalStorage = AsyncLocalStorage;


const defaultDefineProperty = Object.defineProperty;
Object.defineProperty = function(o, p, a) {
  if(p=== '__import_unsupported' && Boolean(globalThis.__import_unsupported)) {
    return;
  }
  return defaultDefineProperty(o, p, a);
};

  
  
  globalThis.openNextDebug = false;globalThis.openNextVersion = "3.9.15";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@opennextjs/aws/dist/utils/error.js
function isOpenNextError(e) {
  try {
    return "__openNextInternal" in e;
  } catch {
    return false;
  }
}
var init_error = __esm({
  "node_modules/@opennextjs/aws/dist/utils/error.js"() {
  }
});

// node_modules/@opennextjs/aws/dist/adapters/logger.js
function debug(...args) {
  if (globalThis.openNextDebug) {
    console.log(...args);
  }
}
function warn(...args) {
  console.warn(...args);
}
function error(...args) {
  if (args.some((arg) => isDownplayedErrorLog(arg))) {
    return debug(...args);
  }
  if (args.some((arg) => isOpenNextError(arg))) {
    const error2 = args.find((arg) => isOpenNextError(arg));
    if (error2.logLevel < getOpenNextErrorLogLevel()) {
      return;
    }
    if (error2.logLevel === 0) {
      return console.log(...args.map((arg) => isOpenNextError(arg) ? `${arg.name}: ${arg.message}` : arg));
    }
    if (error2.logLevel === 1) {
      return warn(...args.map((arg) => isOpenNextError(arg) ? `${arg.name}: ${arg.message}` : arg));
    }
    return console.error(...args);
  }
  console.error(...args);
}
function getOpenNextErrorLogLevel() {
  const strLevel = process.env.OPEN_NEXT_ERROR_LOG_LEVEL ?? "1";
  switch (strLevel.toLowerCase()) {
    case "debug":
    case "0":
      return 0;
    case "error":
    case "2":
      return 2;
    default:
      return 1;
  }
}
var DOWNPLAYED_ERROR_LOGS, isDownplayedErrorLog;
var init_logger = __esm({
  "node_modules/@opennextjs/aws/dist/adapters/logger.js"() {
    init_error();
    DOWNPLAYED_ERROR_LOGS = [
      {
        clientName: "S3Client",
        commandName: "GetObjectCommand",
        errorName: "NoSuchKey"
      }
    ];
    isDownplayedErrorLog = (errorLog) => DOWNPLAYED_ERROR_LOGS.some((downplayedInput) => downplayedInput.clientName === errorLog?.clientName && downplayedInput.commandName === errorLog?.commandName && (downplayedInput.errorName === errorLog?.error?.name || downplayedInput.errorName === errorLog?.error?.Code));
  }
});

// node_modules/cookie/dist/index.js
var require_dist = __commonJS({
  "node_modules/cookie/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseCookie = parseCookie;
    exports.parse = parseCookie;
    exports.stringifyCookie = stringifyCookie;
    exports.stringifySetCookie = stringifySetCookie;
    exports.serialize = stringifySetCookie;
    exports.parseSetCookie = parseSetCookie;
    exports.stringifySetCookie = stringifySetCookie;
    exports.serialize = stringifySetCookie;
    var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
    var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    var maxAgeRegExp = /^-?\d+$/;
    var __toString = Object.prototype.toString;
    var NullObject = /* @__PURE__ */ (() => {
      const C = function() {
      };
      C.prototype = /* @__PURE__ */ Object.create(null);
      return C;
    })();
    function parseCookie(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2)
        return obj;
      const dec = options?.decode || decode;
      let index = 0;
      do {
        const eqIdx = eqIndex(str, index, len);
        if (eqIdx === -1)
          break;
        const endIdx = endIndex(str, index, len);
        if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        const key = valueSlice(str, index, eqIdx);
        if (obj[key] === void 0) {
          obj[key] = dec(valueSlice(str, eqIdx + 1, endIdx));
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    function stringifyCookie(cookie, options) {
      const enc = options?.encode || encodeURIComponent;
      const cookieStrings = [];
      for (const name of Object.keys(cookie)) {
        const val = cookie[name];
        if (val === void 0)
          continue;
        if (!cookieNameRegExp.test(name)) {
          throw new TypeError(`cookie name is invalid: ${name}`);
        }
        const value = enc(val);
        if (!cookieValueRegExp.test(value)) {
          throw new TypeError(`cookie val is invalid: ${val}`);
        }
        cookieStrings.push(`${name}=${value}`);
      }
      return cookieStrings.join("; ");
    }
    function stringifySetCookie(_name, _val, _opts) {
      const cookie = typeof _name === "object" ? _name : { ..._opts, name: _name, value: String(_val) };
      const options = typeof _val === "object" ? _val : _opts;
      const enc = options?.encode || encodeURIComponent;
      if (!cookieNameRegExp.test(cookie.name)) {
        throw new TypeError(`argument name is invalid: ${cookie.name}`);
      }
      const value = cookie.value ? enc(cookie.value) : "";
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${cookie.value}`);
      }
      let str = cookie.name + "=" + value;
      if (cookie.maxAge !== void 0) {
        if (!Number.isInteger(cookie.maxAge)) {
          throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
        }
        str += "; Max-Age=" + cookie.maxAge;
      }
      if (cookie.domain) {
        if (!domainValueRegExp.test(cookie.domain)) {
          throw new TypeError(`option domain is invalid: ${cookie.domain}`);
        }
        str += "; Domain=" + cookie.domain;
      }
      if (cookie.path) {
        if (!pathValueRegExp.test(cookie.path)) {
          throw new TypeError(`option path is invalid: ${cookie.path}`);
        }
        str += "; Path=" + cookie.path;
      }
      if (cookie.expires) {
        if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) {
          throw new TypeError(`option expires is invalid: ${cookie.expires}`);
        }
        str += "; Expires=" + cookie.expires.toUTCString();
      }
      if (cookie.httpOnly) {
        str += "; HttpOnly";
      }
      if (cookie.secure) {
        str += "; Secure";
      }
      if (cookie.partitioned) {
        str += "; Partitioned";
      }
      if (cookie.priority) {
        const priority = typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : void 0;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${cookie.priority}`);
        }
      }
      if (cookie.sameSite) {
        const sameSite = typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite;
        switch (sameSite) {
          case true:
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
        }
      }
      return str;
    }
    function parseSetCookie(str, options) {
      const dec = options?.decode || decode;
      const len = str.length;
      const endIdx = endIndex(str, 0, len);
      const eqIdx = eqIndex(str, 0, endIdx);
      const setCookie = eqIdx === -1 ? { name: "", value: dec(valueSlice(str, 0, endIdx)) } : {
        name: valueSlice(str, 0, eqIdx),
        value: dec(valueSlice(str, eqIdx + 1, endIdx))
      };
      let index = endIdx + 1;
      while (index < len) {
        const endIdx2 = endIndex(str, index, len);
        const eqIdx2 = eqIndex(str, index, endIdx2);
        const attr = eqIdx2 === -1 ? valueSlice(str, index, endIdx2) : valueSlice(str, index, eqIdx2);
        const val = eqIdx2 === -1 ? void 0 : valueSlice(str, eqIdx2 + 1, endIdx2);
        switch (attr.toLowerCase()) {
          case "httponly":
            setCookie.httpOnly = true;
            break;
          case "secure":
            setCookie.secure = true;
            break;
          case "partitioned":
            setCookie.partitioned = true;
            break;
          case "domain":
            setCookie.domain = val;
            break;
          case "path":
            setCookie.path = val;
            break;
          case "max-age":
            if (val && maxAgeRegExp.test(val))
              setCookie.maxAge = Number(val);
            break;
          case "expires":
            if (!val)
              break;
            const date = new Date(val);
            if (Number.isFinite(date.valueOf()))
              setCookie.expires = date;
            break;
          case "priority":
            if (!val)
              break;
            const priority = val.toLowerCase();
            if (priority === "low" || priority === "medium" || priority === "high") {
              setCookie.priority = priority;
            }
            break;
          case "samesite":
            if (!val)
              break;
            const sameSite = val.toLowerCase();
            if (sameSite === "lax" || sameSite === "strict" || sameSite === "none") {
              setCookie.sameSite = sameSite;
            }
            break;
        }
        index = endIdx2 + 1;
      }
      return setCookie;
    }
    function endIndex(str, min, len) {
      const index = str.indexOf(";", min);
      return index === -1 ? len : index;
    }
    function eqIndex(str, min, max) {
      const index = str.indexOf("=", min);
      return index < max ? index : -1;
    }
    function valueSlice(str, min, max) {
      let start = min;
      let end = max;
      do {
        const code = str.charCodeAt(start);
        if (code !== 32 && code !== 9)
          break;
      } while (++start < end);
      while (end > start) {
        const code = str.charCodeAt(end - 1);
        if (code !== 32 && code !== 9)
          break;
        end--;
      }
      return str.slice(start, end);
    }
    function decode(str) {
      if (str.indexOf("%") === -1)
        return str;
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
  }
});

// node_modules/@opennextjs/aws/dist/http/util.js
function parseSetCookieHeader(cookies) {
  if (!cookies) {
    return [];
  }
  if (typeof cookies === "string") {
    return cookies.split(/(?<!Expires=\w+),/i).map((c) => c.trim());
  }
  return cookies;
}
function getQueryFromIterator(it) {
  const query = {};
  for (const [key, value] of it) {
    if (key in query) {
      if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    } else {
      query[key] = value;
    }
  }
  return query;
}
var init_util = __esm({
  "node_modules/@opennextjs/aws/dist/http/util.js"() {
    init_logger();
  }
});

// node_modules/@opennextjs/aws/dist/overrides/converters/utils.js
function getQueryFromSearchParams(searchParams) {
  return getQueryFromIterator(searchParams.entries());
}
var init_utils = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/converters/utils.js"() {
    init_util();
  }
});

// node_modules/@opennextjs/aws/dist/overrides/converters/edge.js
var edge_exports = {};
__export(edge_exports, {
  default: () => edge_default
});
import { Buffer as Buffer2 } from "node:buffer";
var import_cookie, NULL_BODY_STATUSES, converter, edge_default;
var init_edge = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/converters/edge.js"() {
    import_cookie = __toESM(require_dist(), 1);
    init_util();
    init_utils();
    NULL_BODY_STATUSES = /* @__PURE__ */ new Set([101, 103, 204, 205, 304]);
    converter = {
      convertFrom: async (event) => {
        const url = new URL(event.url);
        const searchParams = url.searchParams;
        const query = getQueryFromSearchParams(searchParams);
        const headers = {};
        event.headers.forEach((value, key) => {
          headers[key] = value;
        });
        const rawPath = url.pathname;
        const method = event.method;
        const shouldHaveBody = method !== "GET" && method !== "HEAD";
        const body = shouldHaveBody ? Buffer2.from(await event.arrayBuffer()) : void 0;
        const cookieHeader = event.headers.get("cookie");
        const cookies = cookieHeader ? import_cookie.default.parse(cookieHeader) : {};
        return {
          type: "core",
          method,
          rawPath,
          url: event.url,
          body,
          headers,
          remoteAddress: event.headers.get("x-forwarded-for") ?? "::1",
          query,
          cookies
        };
      },
      convertTo: async (result) => {
        if ("internalEvent" in result) {
          const request = new Request(result.internalEvent.url, {
            body: result.internalEvent.body,
            method: result.internalEvent.method,
            headers: {
              ...result.internalEvent.headers,
              "x-forwarded-host": result.internalEvent.headers.host
            }
          });
          if (globalThis.__dangerous_ON_edge_converter_returns_request === true) {
            return request;
          }
          const cfCache = (result.isISR || result.internalEvent.rawPath.startsWith("/_next/image")) && process.env.DISABLE_CACHE !== "true" ? { cacheEverything: true } : {};
          return fetch(request, {
            // This is a hack to make sure that the response is cached by Cloudflare
            // See https://developers.cloudflare.com/workers/examples/cache-using-fetch/#caching-html-resources
            // @ts-expect-error - This is a Cloudflare specific option
            cf: cfCache
          });
        }
        const headers = new Headers();
        for (const [key, value] of Object.entries(result.headers)) {
          if (key === "set-cookie" && typeof value === "string") {
            const cookies = parseSetCookieHeader(value);
            for (const cookie of cookies) {
              headers.append(key, cookie);
            }
            continue;
          }
          if (Array.isArray(value)) {
            for (const v of value) {
              headers.append(key, v);
            }
          } else {
            headers.set(key, value);
          }
        }
        const body = NULL_BODY_STATUSES.has(result.statusCode) ? null : result.body;
        return new Response(body, {
          status: result.statusCode,
          headers
        });
      },
      name: "edge"
    };
    edge_default = converter;
  }
});

// node_modules/@opennextjs/aws/dist/overrides/wrappers/cloudflare-edge.js
var cloudflare_edge_exports = {};
__export(cloudflare_edge_exports, {
  default: () => cloudflare_edge_default
});
var cfPropNameMapping, handler, cloudflare_edge_default;
var init_cloudflare_edge = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/wrappers/cloudflare-edge.js"() {
    cfPropNameMapping = {
      // The city name is percent-encoded.
      // See https://github.com/vercel/vercel/blob/4cb6143/packages/functions/src/headers.ts#L94C19-L94C37
      city: [encodeURIComponent, "x-open-next-city"],
      country: "x-open-next-country",
      regionCode: "x-open-next-region",
      latitude: "x-open-next-latitude",
      longitude: "x-open-next-longitude"
    };
    handler = async (handler3, converter2) => async (request, env, ctx) => {
      globalThis.process = process;
      for (const [key, value] of Object.entries(env)) {
        if (typeof value === "string") {
          process.env[key] = value;
        }
      }
      const internalEvent = await converter2.convertFrom(request);
      const cfProperties = request.cf;
      for (const [propName, mapping] of Object.entries(cfPropNameMapping)) {
        const propValue = cfProperties?.[propName];
        if (propValue != null) {
          const [encode, headerName] = Array.isArray(mapping) ? mapping : [null, mapping];
          internalEvent.headers[headerName] = encode ? encode(propValue) : propValue;
        }
      }
      const response = await handler3(internalEvent, {
        waitUntil: ctx.waitUntil.bind(ctx)
      });
      const result = await converter2.convertTo(response);
      return result;
    };
    cloudflare_edge_default = {
      wrapper: handler,
      name: "cloudflare-edge",
      supportStreaming: true,
      edgeRuntime: true
    };
  }
});

// node_modules/@opennextjs/aws/dist/overrides/originResolver/pattern-env.js
var pattern_env_exports = {};
__export(pattern_env_exports, {
  default: () => pattern_env_default
});
function initializeOnce() {
  if (initialized)
    return;
  cachedOrigins = JSON.parse(process.env.OPEN_NEXT_ORIGIN ?? "{}");
  const functions = globalThis.openNextConfig.functions ?? {};
  for (const key in functions) {
    if (key !== "default") {
      const value = functions[key];
      const regexes = [];
      for (const pattern of value.patterns) {
        const regexPattern = `/${pattern.replace(/\*\*/g, "(.*)").replace(/\*/g, "([^/]*)").replace(/\//g, "\\/").replace(/\?/g, ".")}`;
        regexes.push(new RegExp(regexPattern));
      }
      cachedPatterns.push({
        key,
        patterns: value.patterns,
        regexes
      });
    }
  }
  initialized = true;
}
var cachedOrigins, cachedPatterns, initialized, envLoader, pattern_env_default;
var init_pattern_env = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/originResolver/pattern-env.js"() {
    init_logger();
    cachedPatterns = [];
    initialized = false;
    envLoader = {
      name: "env",
      resolve: async (_path) => {
        try {
          initializeOnce();
          for (const { key, patterns, regexes } of cachedPatterns) {
            for (const regex of regexes) {
              if (regex.test(_path)) {
                debug("Using origin", key, patterns);
                return cachedOrigins[key];
              }
            }
          }
          if (_path.startsWith("/_next/image") && cachedOrigins.imageOptimizer) {
            debug("Using origin", "imageOptimizer", _path);
            return cachedOrigins.imageOptimizer;
          }
          if (cachedOrigins.default) {
            debug("Using default origin", cachedOrigins.default, _path);
            return cachedOrigins.default;
          }
          return false;
        } catch (e) {
          error("Error while resolving origin", e);
          return false;
        }
      }
    };
    pattern_env_default = envLoader;
  }
});

// node_modules/@opennextjs/aws/dist/overrides/assetResolver/dummy.js
var dummy_exports = {};
__export(dummy_exports, {
  default: () => dummy_default
});
var resolver, dummy_default;
var init_dummy = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/assetResolver/dummy.js"() {
    resolver = {
      name: "dummy"
    };
    dummy_default = resolver;
  }
});

// node_modules/@opennextjs/aws/dist/utils/stream.js
import { ReadableStream } from "node:stream/web";
function toReadableStream(value, isBase64) {
  return new ReadableStream({
    pull(controller) {
      controller.enqueue(Buffer.from(value, isBase64 ? "base64" : "utf8"));
      controller.close();
    }
  }, { highWaterMark: 0 });
}
function emptyReadableStream() {
  if (process.env.OPEN_NEXT_FORCE_NON_EMPTY_RESPONSE === "true") {
    return new ReadableStream({
      pull(controller) {
        maybeSomethingBuffer ??= Buffer.from("SOMETHING");
        controller.enqueue(maybeSomethingBuffer);
        controller.close();
      }
    }, { highWaterMark: 0 });
  }
  return new ReadableStream({
    start(controller) {
      controller.close();
    }
  });
}
var maybeSomethingBuffer;
var init_stream = __esm({
  "node_modules/@opennextjs/aws/dist/utils/stream.js"() {
  }
});

// node_modules/@opennextjs/aws/dist/overrides/proxyExternalRequest/fetch.js
var fetch_exports = {};
__export(fetch_exports, {
  default: () => fetch_default
});
var fetchProxy, fetch_default;
var init_fetch = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/proxyExternalRequest/fetch.js"() {
    init_stream();
    fetchProxy = {
      name: "fetch-proxy",
      // @ts-ignore
      proxy: async (internalEvent) => {
        const { url, headers: eventHeaders, method, body } = internalEvent;
        const headers = Object.fromEntries(Object.entries(eventHeaders).filter(([key]) => key.toLowerCase() !== "cf-connecting-ip"));
        const response = await fetch(url, {
          method,
          headers,
          body
        });
        const responseHeaders = {};
        response.headers.forEach((value, key) => {
          responseHeaders[key] = value;
        });
        return {
          type: "core",
          headers: responseHeaders,
          statusCode: response.status,
          isBase64Encoded: true,
          body: response.body ?? emptyReadableStream()
        };
      }
    };
    fetch_default = fetchProxy;
  }
});

// node-built-in-modules:node:buffer
var node_buffer_exports = {};
import * as node_buffer_star from "node:buffer";
var init_node_buffer = __esm({
  "node-built-in-modules:node:buffer"() {
    __reExport(node_buffer_exports, node_buffer_star);
  }
});

// .next/server/edge/chunks/[root-of-the-server]__4ff9d1a3._.js
var require_root_of_the_server_4ff9d1a3 = __commonJS({
  ".next/server/edge/chunks/[root-of-the-server]__4ff9d1a3._.js"() {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__4ff9d1a3._.js", 51615, (e, r, t) => {
      r.exports = e.x("node:buffer", () => (init_node_buffer(), __toCommonJS(node_buffer_exports)));
    }, 38022, (e, r, t) => {
      self._ENTRIES ||= {};
      let h = Promise.resolve().then(() => e.i(42738));
      h.catch(() => {
      }), self._ENTRIES.middleware_middleware = new Proxy(h, { get(e2, r2) {
        if ("then" === r2) return (r3, t3) => e2.then(r3, t3);
        let t2 = (...t3) => e2.then((e3) => (0, e3[r2])(...t3));
        return t2.then = (t3, h2) => e2.then((e3) => e3[r2]).then(t3, h2), t2;
      } });
    }]);
  }
});

// node-built-in-modules:node:async_hooks
var node_async_hooks_exports = {};
import * as node_async_hooks_star from "node:async_hooks";
var init_node_async_hooks = __esm({
  "node-built-in-modules:node:async_hooks"() {
    __reExport(node_async_hooks_exports, node_async_hooks_star);
  }
});

// node-built-in-modules:node:util
var node_util_exports = {};
import * as node_util_star from "node:util";
var init_node_util = __esm({
  "node-built-in-modules:node:util"() {
    __reExport(node_util_exports, node_util_star);
  }
});

// .next/server/edge/chunks/[root-of-the-server]__bf515e1b._.js
var require_root_of_the_server_bf515e1b = __commonJS({
  ".next/server/edge/chunks/[root-of-the-server]__bf515e1b._.js"() {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__bf515e1b._.js", 28042, (e, t, r) => {
      "use strict";
      var n = Object.defineProperty, i = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyNames, a = Object.prototype.hasOwnProperty, s = {}, l = { RequestCookies: () => g, ResponseCookies: () => m, parseCookie: () => p, parseSetCookie: () => d, stringifyCookie: () => c };
      for (var u in l) n(s, u, { get: l[u], enumerable: true });
      function c(e2) {
        var t2;
        let r2 = ["path" in e2 && e2.path && `Path=${e2.path}`, "expires" in e2 && (e2.expires || 0 === e2.expires) && `Expires=${("number" == typeof e2.expires ? new Date(e2.expires) : e2.expires).toUTCString()}`, "maxAge" in e2 && "number" == typeof e2.maxAge && `Max-Age=${e2.maxAge}`, "domain" in e2 && e2.domain && `Domain=${e2.domain}`, "secure" in e2 && e2.secure && "Secure", "httpOnly" in e2 && e2.httpOnly && "HttpOnly", "sameSite" in e2 && e2.sameSite && `SameSite=${e2.sameSite}`, "partitioned" in e2 && e2.partitioned && "Partitioned", "priority" in e2 && e2.priority && `Priority=${e2.priority}`].filter(Boolean), n2 = `${e2.name}=${encodeURIComponent(null != (t2 = e2.value) ? t2 : "")}`;
        return 0 === r2.length ? n2 : `${n2}; ${r2.join("; ")}`;
      }
      function p(e2) {
        let t2 = /* @__PURE__ */ new Map();
        for (let r2 of e2.split(/; */)) {
          if (!r2) continue;
          let e3 = r2.indexOf("=");
          if (-1 === e3) {
            t2.set(r2, "true");
            continue;
          }
          let [n2, i2] = [r2.slice(0, e3), r2.slice(e3 + 1)];
          try {
            t2.set(n2, decodeURIComponent(null != i2 ? i2 : "true"));
          } catch {
          }
        }
        return t2;
      }
      function d(e2) {
        if (!e2) return;
        let [[t2, r2], ...n2] = p(e2), { domain: i2, expires: o2, httponly: a2, maxage: s2, path: l2, samesite: u2, secure: c2, partitioned: d2, priority: g2 } = Object.fromEntries(n2.map(([e3, t3]) => [e3.toLowerCase().replace(/-/g, ""), t3]));
        {
          var m2, v, b = { name: t2, value: decodeURIComponent(r2), domain: i2, ...o2 && { expires: new Date(o2) }, ...a2 && { httpOnly: true }, ..."string" == typeof s2 && { maxAge: Number(s2) }, path: l2, ...u2 && { sameSite: f.includes(m2 = (m2 = u2).toLowerCase()) ? m2 : void 0 }, ...c2 && { secure: true }, ...g2 && { priority: h.includes(v = (v = g2).toLowerCase()) ? v : void 0 }, ...d2 && { partitioned: true } };
          let e3 = {};
          for (let t3 in b) b[t3] && (e3[t3] = b[t3]);
          return e3;
        }
      }
      t.exports = ((e2, t2, r2, s2) => {
        if (t2 && "object" == typeof t2 || "function" == typeof t2) for (let l2 of o(t2)) a.call(e2, l2) || l2 === r2 || n(e2, l2, { get: () => t2[l2], enumerable: !(s2 = i(t2, l2)) || s2.enumerable });
        return e2;
      })(n({}, "__esModule", { value: true }), s);
      var f = ["strict", "lax", "none"], h = ["low", "medium", "high"], g = class {
        constructor(e2) {
          this._parsed = /* @__PURE__ */ new Map(), this._headers = e2;
          const t2 = e2.get("cookie");
          if (t2) for (const [e3, r2] of p(t2)) this._parsed.set(e3, { name: e3, value: r2 });
        }
        [Symbol.iterator]() {
          return this._parsed[Symbol.iterator]();
        }
        get size() {
          return this._parsed.size;
        }
        get(...e2) {
          let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
          return this._parsed.get(t2);
        }
        getAll(...e2) {
          var t2;
          let r2 = Array.from(this._parsed);
          if (!e2.length) return r2.map(([e3, t3]) => t3);
          let n2 = "string" == typeof e2[0] ? e2[0] : null == (t2 = e2[0]) ? void 0 : t2.name;
          return r2.filter(([e3]) => e3 === n2).map(([e3, t3]) => t3);
        }
        has(e2) {
          return this._parsed.has(e2);
        }
        set(...e2) {
          let [t2, r2] = 1 === e2.length ? [e2[0].name, e2[0].value] : e2, n2 = this._parsed;
          return n2.set(t2, { name: t2, value: r2 }), this._headers.set("cookie", Array.from(n2).map(([e3, t3]) => c(t3)).join("; ")), this;
        }
        delete(e2) {
          let t2 = this._parsed, r2 = Array.isArray(e2) ? e2.map((e3) => t2.delete(e3)) : t2.delete(e2);
          return this._headers.set("cookie", Array.from(t2).map(([e3, t3]) => c(t3)).join("; ")), r2;
        }
        clear() {
          return this.delete(Array.from(this._parsed.keys())), this;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
        toString() {
          return [...this._parsed.values()].map((e2) => `${e2.name}=${encodeURIComponent(e2.value)}`).join("; ");
        }
      }, m = class {
        constructor(e2) {
          var t2, r2, n2;
          this._parsed = /* @__PURE__ */ new Map(), this._headers = e2;
          const i2 = null != (n2 = null != (r2 = null == (t2 = e2.getSetCookie) ? void 0 : t2.call(e2)) ? r2 : e2.get("set-cookie")) ? n2 : [];
          for (const e3 of Array.isArray(i2) ? i2 : function(e4) {
            if (!e4) return [];
            var t3, r3, n3, i3, o2, a2 = [], s2 = 0;
            function l2() {
              for (; s2 < e4.length && /\s/.test(e4.charAt(s2)); ) s2 += 1;
              return s2 < e4.length;
            }
            for (; s2 < e4.length; ) {
              for (t3 = s2, o2 = false; l2(); ) if ("," === (r3 = e4.charAt(s2))) {
                for (n3 = s2, s2 += 1, l2(), i3 = s2; s2 < e4.length && "=" !== (r3 = e4.charAt(s2)) && ";" !== r3 && "," !== r3; ) s2 += 1;
                s2 < e4.length && "=" === e4.charAt(s2) ? (o2 = true, s2 = i3, a2.push(e4.substring(t3, n3)), t3 = s2) : s2 = n3 + 1;
              } else s2 += 1;
              (!o2 || s2 >= e4.length) && a2.push(e4.substring(t3, e4.length));
            }
            return a2;
          }(i2)) {
            const t3 = d(e3);
            t3 && this._parsed.set(t3.name, t3);
          }
        }
        get(...e2) {
          let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
          return this._parsed.get(t2);
        }
        getAll(...e2) {
          var t2;
          let r2 = Array.from(this._parsed.values());
          if (!e2.length) return r2;
          let n2 = "string" == typeof e2[0] ? e2[0] : null == (t2 = e2[0]) ? void 0 : t2.name;
          return r2.filter((e3) => e3.name === n2);
        }
        has(e2) {
          return this._parsed.has(e2);
        }
        set(...e2) {
          let [t2, r2, n2] = 1 === e2.length ? [e2[0].name, e2[0].value, e2[0]] : e2, i2 = this._parsed;
          return i2.set(t2, function(e3 = { name: "", value: "" }) {
            return "number" == typeof e3.expires && (e3.expires = new Date(e3.expires)), e3.maxAge && (e3.expires = new Date(Date.now() + 1e3 * e3.maxAge)), (null === e3.path || void 0 === e3.path) && (e3.path = "/"), e3;
          }({ name: t2, value: r2, ...n2 })), function(e3, t3) {
            for (let [, r3] of (t3.delete("set-cookie"), e3)) {
              let e4 = c(r3);
              t3.append("set-cookie", e4);
            }
          }(i2, this._headers), this;
        }
        delete(...e2) {
          let [t2, r2] = "string" == typeof e2[0] ? [e2[0]] : [e2[0].name, e2[0]];
          return this.set({ ...r2, name: t2, value: "", expires: /* @__PURE__ */ new Date(0) });
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
        toString() {
          return [...this._parsed.values()].map(c).join("; ");
        }
      };
    }, 59110, (e, t, r) => {
      (() => {
        "use strict";
        let r2, n, i, o, a;
        var s, l, u, c, p, d, f, h, g, m, v, b, y, w, E, _, S = { 491: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ContextAPI = void 0;
          let n2 = r3(223), i2 = r3(172), o2 = r3(930), a2 = "context", s2 = new n2.NoopContextManager();
          class l2 {
            static getInstance() {
              return this._instance || (this._instance = new l2()), this._instance;
            }
            setGlobalContextManager(e3) {
              return (0, i2.registerGlobal)(a2, e3, o2.DiagAPI.instance());
            }
            active() {
              return this._getContextManager().active();
            }
            with(e3, t3, r4, ...n3) {
              return this._getContextManager().with(e3, t3, r4, ...n3);
            }
            bind(e3, t3) {
              return this._getContextManager().bind(e3, t3);
            }
            _getContextManager() {
              return (0, i2.getGlobal)(a2) || s2;
            }
            disable() {
              this._getContextManager().disable(), (0, i2.unregisterGlobal)(a2, o2.DiagAPI.instance());
            }
          }
          t2.ContextAPI = l2;
        }, 930: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DiagAPI = void 0;
          let n2 = r3(56), i2 = r3(912), o2 = r3(957), a2 = r3(172);
          class s2 {
            constructor() {
              function e3(e4) {
                return function(...t4) {
                  let r4 = (0, a2.getGlobal)("diag");
                  if (r4) return r4[e4](...t4);
                };
              }
              const t3 = this;
              t3.setLogger = (e4, r4 = { logLevel: o2.DiagLogLevel.INFO }) => {
                var n3, s3, l2;
                if (e4 === t3) {
                  let e5 = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                  return t3.error(null != (n3 = e5.stack) ? n3 : e5.message), false;
                }
                "number" == typeof r4 && (r4 = { logLevel: r4 });
                let u2 = (0, a2.getGlobal)("diag"), c2 = (0, i2.createLogLevelDiagLogger)(null != (s3 = r4.logLevel) ? s3 : o2.DiagLogLevel.INFO, e4);
                if (u2 && !r4.suppressOverrideMessage) {
                  let e5 = null != (l2 = Error().stack) ? l2 : "<failed to generate stacktrace>";
                  u2.warn(`Current logger will be overwritten from ${e5}`), c2.warn(`Current logger will overwrite one already registered from ${e5}`);
                }
                return (0, a2.registerGlobal)("diag", c2, t3, true);
              }, t3.disable = () => {
                (0, a2.unregisterGlobal)("diag", t3);
              }, t3.createComponentLogger = (e4) => new n2.DiagComponentLogger(e4), t3.verbose = e3("verbose"), t3.debug = e3("debug"), t3.info = e3("info"), t3.warn = e3("warn"), t3.error = e3("error");
            }
            static instance() {
              return this._instance || (this._instance = new s2()), this._instance;
            }
          }
          t2.DiagAPI = s2;
        }, 653: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.MetricsAPI = void 0;
          let n2 = r3(660), i2 = r3(172), o2 = r3(930), a2 = "metrics";
          class s2 {
            static getInstance() {
              return this._instance || (this._instance = new s2()), this._instance;
            }
            setGlobalMeterProvider(e3) {
              return (0, i2.registerGlobal)(a2, e3, o2.DiagAPI.instance());
            }
            getMeterProvider() {
              return (0, i2.getGlobal)(a2) || n2.NOOP_METER_PROVIDER;
            }
            getMeter(e3, t3, r4) {
              return this.getMeterProvider().getMeter(e3, t3, r4);
            }
            disable() {
              (0, i2.unregisterGlobal)(a2, o2.DiagAPI.instance());
            }
          }
          t2.MetricsAPI = s2;
        }, 181: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.PropagationAPI = void 0;
          let n2 = r3(172), i2 = r3(874), o2 = r3(194), a2 = r3(277), s2 = r3(369), l2 = r3(930), u2 = "propagation", c2 = new i2.NoopTextMapPropagator();
          class p2 {
            constructor() {
              this.createBaggage = s2.createBaggage, this.getBaggage = a2.getBaggage, this.getActiveBaggage = a2.getActiveBaggage, this.setBaggage = a2.setBaggage, this.deleteBaggage = a2.deleteBaggage;
            }
            static getInstance() {
              return this._instance || (this._instance = new p2()), this._instance;
            }
            setGlobalPropagator(e3) {
              return (0, n2.registerGlobal)(u2, e3, l2.DiagAPI.instance());
            }
            inject(e3, t3, r4 = o2.defaultTextMapSetter) {
              return this._getGlobalPropagator().inject(e3, t3, r4);
            }
            extract(e3, t3, r4 = o2.defaultTextMapGetter) {
              return this._getGlobalPropagator().extract(e3, t3, r4);
            }
            fields() {
              return this._getGlobalPropagator().fields();
            }
            disable() {
              (0, n2.unregisterGlobal)(u2, l2.DiagAPI.instance());
            }
            _getGlobalPropagator() {
              return (0, n2.getGlobal)(u2) || c2;
            }
          }
          t2.PropagationAPI = p2;
        }, 997: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.TraceAPI = void 0;
          let n2 = r3(172), i2 = r3(846), o2 = r3(139), a2 = r3(607), s2 = r3(930), l2 = "trace";
          class u2 {
            constructor() {
              this._proxyTracerProvider = new i2.ProxyTracerProvider(), this.wrapSpanContext = o2.wrapSpanContext, this.isSpanContextValid = o2.isSpanContextValid, this.deleteSpan = a2.deleteSpan, this.getSpan = a2.getSpan, this.getActiveSpan = a2.getActiveSpan, this.getSpanContext = a2.getSpanContext, this.setSpan = a2.setSpan, this.setSpanContext = a2.setSpanContext;
            }
            static getInstance() {
              return this._instance || (this._instance = new u2()), this._instance;
            }
            setGlobalTracerProvider(e3) {
              let t3 = (0, n2.registerGlobal)(l2, this._proxyTracerProvider, s2.DiagAPI.instance());
              return t3 && this._proxyTracerProvider.setDelegate(e3), t3;
            }
            getTracerProvider() {
              return (0, n2.getGlobal)(l2) || this._proxyTracerProvider;
            }
            getTracer(e3, t3) {
              return this.getTracerProvider().getTracer(e3, t3);
            }
            disable() {
              (0, n2.unregisterGlobal)(l2, s2.DiagAPI.instance()), this._proxyTracerProvider = new i2.ProxyTracerProvider();
            }
          }
          t2.TraceAPI = u2;
        }, 277: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.deleteBaggage = t2.setBaggage = t2.getActiveBaggage = t2.getBaggage = void 0;
          let n2 = r3(491), i2 = (0, r3(780).createContextKey)("OpenTelemetry Baggage Key");
          function o2(e3) {
            return e3.getValue(i2) || void 0;
          }
          t2.getBaggage = o2, t2.getActiveBaggage = function() {
            return o2(n2.ContextAPI.getInstance().active());
          }, t2.setBaggage = function(e3, t3) {
            return e3.setValue(i2, t3);
          }, t2.deleteBaggage = function(e3) {
            return e3.deleteValue(i2);
          };
        }, 993: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.BaggageImpl = void 0;
          class r3 {
            constructor(e3) {
              this._entries = e3 ? new Map(e3) : /* @__PURE__ */ new Map();
            }
            getEntry(e3) {
              let t3 = this._entries.get(e3);
              if (t3) return Object.assign({}, t3);
            }
            getAllEntries() {
              return Array.from(this._entries.entries()).map(([e3, t3]) => [e3, t3]);
            }
            setEntry(e3, t3) {
              let n2 = new r3(this._entries);
              return n2._entries.set(e3, t3), n2;
            }
            removeEntry(e3) {
              let t3 = new r3(this._entries);
              return t3._entries.delete(e3), t3;
            }
            removeEntries(...e3) {
              let t3 = new r3(this._entries);
              for (let r4 of e3) t3._entries.delete(r4);
              return t3;
            }
            clear() {
              return new r3();
            }
          }
          t2.BaggageImpl = r3;
        }, 830: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.baggageEntryMetadataSymbol = void 0, t2.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        }, 369: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.baggageEntryMetadataFromString = t2.createBaggage = void 0;
          let n2 = r3(930), i2 = r3(993), o2 = r3(830), a2 = n2.DiagAPI.instance();
          t2.createBaggage = function(e3 = {}) {
            return new i2.BaggageImpl(new Map(Object.entries(e3)));
          }, t2.baggageEntryMetadataFromString = function(e3) {
            return "string" != typeof e3 && (a2.error(`Cannot create baggage metadata from unknown type: ${typeof e3}`), e3 = ""), { __TYPE__: o2.baggageEntryMetadataSymbol, toString: () => e3 };
          };
        }, 67: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.context = void 0, t2.context = r3(491).ContextAPI.getInstance();
        }, 223: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.NoopContextManager = void 0;
          let n2 = r3(780);
          t2.NoopContextManager = class {
            active() {
              return n2.ROOT_CONTEXT;
            }
            with(e3, t3, r4, ...n3) {
              return t3.call(r4, ...n3);
            }
            bind(e3, t3) {
              return t3;
            }
            enable() {
              return this;
            }
            disable() {
              return this;
            }
          };
        }, 780: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ROOT_CONTEXT = t2.createContextKey = void 0, t2.createContextKey = function(e3) {
            return Symbol.for(e3);
          };
          class r3 {
            constructor(e3) {
              const t3 = this;
              t3._currentContext = e3 ? new Map(e3) : /* @__PURE__ */ new Map(), t3.getValue = (e4) => t3._currentContext.get(e4), t3.setValue = (e4, n2) => {
                let i2 = new r3(t3._currentContext);
                return i2._currentContext.set(e4, n2), i2;
              }, t3.deleteValue = (e4) => {
                let n2 = new r3(t3._currentContext);
                return n2._currentContext.delete(e4), n2;
              };
            }
          }
          t2.ROOT_CONTEXT = new r3();
        }, 506: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.diag = void 0, t2.diag = r3(930).DiagAPI.instance();
        }, 56: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DiagComponentLogger = void 0;
          let n2 = r3(172);
          function i2(e3, t3, r4) {
            let i3 = (0, n2.getGlobal)("diag");
            if (i3) return r4.unshift(t3), i3[e3](...r4);
          }
          t2.DiagComponentLogger = class {
            constructor(e3) {
              this._namespace = e3.namespace || "DiagComponentLogger";
            }
            debug(...e3) {
              return i2("debug", this._namespace, e3);
            }
            error(...e3) {
              return i2("error", this._namespace, e3);
            }
            info(...e3) {
              return i2("info", this._namespace, e3);
            }
            warn(...e3) {
              return i2("warn", this._namespace, e3);
            }
            verbose(...e3) {
              return i2("verbose", this._namespace, e3);
            }
          };
        }, 972: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DiagConsoleLogger = void 0;
          let r3 = [{ n: "error", c: "error" }, { n: "warn", c: "warn" }, { n: "info", c: "info" }, { n: "debug", c: "debug" }, { n: "verbose", c: "trace" }];
          t2.DiagConsoleLogger = class {
            constructor() {
              for (let e3 = 0; e3 < r3.length; e3++) this[r3[e3].n] = /* @__PURE__ */ function(e4) {
                return function(...t3) {
                  if (console) {
                    let r4 = console[e4];
                    if ("function" != typeof r4 && (r4 = console.log), "function" == typeof r4) return r4.apply(console, t3);
                  }
                };
              }(r3[e3].c);
            }
          };
        }, 912: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createLogLevelDiagLogger = void 0;
          let n2 = r3(957);
          t2.createLogLevelDiagLogger = function(e3, t3) {
            function r4(r5, n3) {
              let i2 = t3[r5];
              return "function" == typeof i2 && e3 >= n3 ? i2.bind(t3) : function() {
              };
            }
            return e3 < n2.DiagLogLevel.NONE ? e3 = n2.DiagLogLevel.NONE : e3 > n2.DiagLogLevel.ALL && (e3 = n2.DiagLogLevel.ALL), t3 = t3 || {}, { error: r4("error", n2.DiagLogLevel.ERROR), warn: r4("warn", n2.DiagLogLevel.WARN), info: r4("info", n2.DiagLogLevel.INFO), debug: r4("debug", n2.DiagLogLevel.DEBUG), verbose: r4("verbose", n2.DiagLogLevel.VERBOSE) };
          };
        }, 957: (e2, t2) => {
          var r3;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DiagLogLevel = void 0, (r3 = t2.DiagLogLevel || (t2.DiagLogLevel = {}))[r3.NONE = 0] = "NONE", r3[r3.ERROR = 30] = "ERROR", r3[r3.WARN = 50] = "WARN", r3[r3.INFO = 60] = "INFO", r3[r3.DEBUG = 70] = "DEBUG", r3[r3.VERBOSE = 80] = "VERBOSE", r3[r3.ALL = 9999] = "ALL";
        }, 172: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.unregisterGlobal = t2.getGlobal = t2.registerGlobal = void 0;
          let n2 = r3(200), i2 = r3(521), o2 = r3(130), a2 = i2.VERSION.split(".")[0], s2 = Symbol.for(`opentelemetry.js.api.${a2}`), l2 = n2._globalThis;
          t2.registerGlobal = function(e3, t3, r4, n3 = false) {
            var o3;
            let a3 = l2[s2] = null != (o3 = l2[s2]) ? o3 : { version: i2.VERSION };
            if (!n3 && a3[e3]) {
              let t4 = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e3}`);
              return r4.error(t4.stack || t4.message), false;
            }
            if (a3.version !== i2.VERSION) {
              let t4 = Error(`@opentelemetry/api: Registration of version v${a3.version} for ${e3} does not match previously registered API v${i2.VERSION}`);
              return r4.error(t4.stack || t4.message), false;
            }
            return a3[e3] = t3, r4.debug(`@opentelemetry/api: Registered a global for ${e3} v${i2.VERSION}.`), true;
          }, t2.getGlobal = function(e3) {
            var t3, r4;
            let n3 = null == (t3 = l2[s2]) ? void 0 : t3.version;
            if (n3 && (0, o2.isCompatible)(n3)) return null == (r4 = l2[s2]) ? void 0 : r4[e3];
          }, t2.unregisterGlobal = function(e3, t3) {
            t3.debug(`@opentelemetry/api: Unregistering a global for ${e3} v${i2.VERSION}.`);
            let r4 = l2[s2];
            r4 && delete r4[e3];
          };
        }, 130: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.isCompatible = t2._makeCompatibilityCheck = void 0;
          let n2 = r3(521), i2 = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
          function o2(e3) {
            let t3 = /* @__PURE__ */ new Set([e3]), r4 = /* @__PURE__ */ new Set(), n3 = e3.match(i2);
            if (!n3) return () => false;
            let o3 = { major: +n3[1], minor: +n3[2], patch: +n3[3], prerelease: n3[4] };
            if (null != o3.prerelease) return function(t4) {
              return t4 === e3;
            };
            function a2(e4) {
              return r4.add(e4), false;
            }
            return function(e4) {
              if (t3.has(e4)) return true;
              if (r4.has(e4)) return false;
              let n4 = e4.match(i2);
              if (!n4) return a2(e4);
              let s2 = { major: +n4[1], minor: +n4[2], patch: +n4[3], prerelease: n4[4] };
              if (null != s2.prerelease || o3.major !== s2.major) return a2(e4);
              if (0 === o3.major) return o3.minor === s2.minor && o3.patch <= s2.patch ? (t3.add(e4), true) : a2(e4);
              return o3.minor <= s2.minor ? (t3.add(e4), true) : a2(e4);
            };
          }
          t2._makeCompatibilityCheck = o2, t2.isCompatible = o2(n2.VERSION);
        }, 886: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.metrics = void 0, t2.metrics = r3(653).MetricsAPI.getInstance();
        }, 901: (e2, t2) => {
          var r3;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ValueType = void 0, (r3 = t2.ValueType || (t2.ValueType = {}))[r3.INT = 0] = "INT", r3[r3.DOUBLE = 1] = "DOUBLE";
        }, 102: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createNoopMeter = t2.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t2.NOOP_OBSERVABLE_GAUGE_METRIC = t2.NOOP_OBSERVABLE_COUNTER_METRIC = t2.NOOP_UP_DOWN_COUNTER_METRIC = t2.NOOP_HISTOGRAM_METRIC = t2.NOOP_COUNTER_METRIC = t2.NOOP_METER = t2.NoopObservableUpDownCounterMetric = t2.NoopObservableGaugeMetric = t2.NoopObservableCounterMetric = t2.NoopObservableMetric = t2.NoopHistogramMetric = t2.NoopUpDownCounterMetric = t2.NoopCounterMetric = t2.NoopMetric = t2.NoopMeter = void 0;
          class r3 {
            createHistogram(e3, r4) {
              return t2.NOOP_HISTOGRAM_METRIC;
            }
            createCounter(e3, r4) {
              return t2.NOOP_COUNTER_METRIC;
            }
            createUpDownCounter(e3, r4) {
              return t2.NOOP_UP_DOWN_COUNTER_METRIC;
            }
            createObservableGauge(e3, r4) {
              return t2.NOOP_OBSERVABLE_GAUGE_METRIC;
            }
            createObservableCounter(e3, r4) {
              return t2.NOOP_OBSERVABLE_COUNTER_METRIC;
            }
            createObservableUpDownCounter(e3, r4) {
              return t2.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
            }
            addBatchObservableCallback(e3, t3) {
            }
            removeBatchObservableCallback(e3) {
            }
          }
          t2.NoopMeter = r3;
          class n2 {
          }
          t2.NoopMetric = n2;
          class i2 extends n2 {
            add(e3, t3) {
            }
          }
          t2.NoopCounterMetric = i2;
          class o2 extends n2 {
            add(e3, t3) {
            }
          }
          t2.NoopUpDownCounterMetric = o2;
          class a2 extends n2 {
            record(e3, t3) {
            }
          }
          t2.NoopHistogramMetric = a2;
          class s2 {
            addCallback(e3) {
            }
            removeCallback(e3) {
            }
          }
          t2.NoopObservableMetric = s2;
          class l2 extends s2 {
          }
          t2.NoopObservableCounterMetric = l2;
          class u2 extends s2 {
          }
          t2.NoopObservableGaugeMetric = u2;
          class c2 extends s2 {
          }
          t2.NoopObservableUpDownCounterMetric = c2, t2.NOOP_METER = new r3(), t2.NOOP_COUNTER_METRIC = new i2(), t2.NOOP_HISTOGRAM_METRIC = new a2(), t2.NOOP_UP_DOWN_COUNTER_METRIC = new o2(), t2.NOOP_OBSERVABLE_COUNTER_METRIC = new l2(), t2.NOOP_OBSERVABLE_GAUGE_METRIC = new u2(), t2.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new c2(), t2.createNoopMeter = function() {
            return t2.NOOP_METER;
          };
        }, 660: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.NOOP_METER_PROVIDER = t2.NoopMeterProvider = void 0;
          let n2 = r3(102);
          class i2 {
            getMeter(e3, t3, r4) {
              return n2.NOOP_METER;
            }
          }
          t2.NoopMeterProvider = i2, t2.NOOP_METER_PROVIDER = new i2();
        }, 200: function(e2, t2, r3) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, r4, n3) {
            void 0 === n3 && (n3 = r4), Object.defineProperty(e3, n3, { enumerable: true, get: function() {
              return t3[r4];
            } });
          } : function(e3, t3, r4, n3) {
            void 0 === n3 && (n3 = r4), e3[n3] = t3[r4];
          }), i2 = this && this.__exportStar || function(e3, t3) {
            for (var r4 in e3) "default" === r4 || Object.prototype.hasOwnProperty.call(t3, r4) || n2(t3, e3, r4);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), i2(r3(46), t2);
        }, 651: (t2, r3) => {
          Object.defineProperty(r3, "__esModule", { value: true }), r3._globalThis = void 0, r3._globalThis = "object" == typeof globalThis ? globalThis : e.g;
        }, 46: function(e2, t2, r3) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, r4, n3) {
            void 0 === n3 && (n3 = r4), Object.defineProperty(e3, n3, { enumerable: true, get: function() {
              return t3[r4];
            } });
          } : function(e3, t3, r4, n3) {
            void 0 === n3 && (n3 = r4), e3[n3] = t3[r4];
          }), i2 = this && this.__exportStar || function(e3, t3) {
            for (var r4 in e3) "default" === r4 || Object.prototype.hasOwnProperty.call(t3, r4) || n2(t3, e3, r4);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), i2(r3(651), t2);
        }, 939: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.propagation = void 0, t2.propagation = r3(181).PropagationAPI.getInstance();
        }, 874: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.NoopTextMapPropagator = void 0, t2.NoopTextMapPropagator = class {
            inject(e3, t3) {
            }
            extract(e3, t3) {
              return e3;
            }
            fields() {
              return [];
            }
          };
        }, 194: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.defaultTextMapSetter = t2.defaultTextMapGetter = void 0, t2.defaultTextMapGetter = { get(e3, t3) {
            if (null != e3) return e3[t3];
          }, keys: (e3) => null == e3 ? [] : Object.keys(e3) }, t2.defaultTextMapSetter = { set(e3, t3, r3) {
            null != e3 && (e3[t3] = r3);
          } };
        }, 845: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.trace = void 0, t2.trace = r3(997).TraceAPI.getInstance();
        }, 403: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.NonRecordingSpan = void 0;
          let n2 = r3(476);
          t2.NonRecordingSpan = class {
            constructor(e3 = n2.INVALID_SPAN_CONTEXT) {
              this._spanContext = e3;
            }
            spanContext() {
              return this._spanContext;
            }
            setAttribute(e3, t3) {
              return this;
            }
            setAttributes(e3) {
              return this;
            }
            addEvent(e3, t3) {
              return this;
            }
            setStatus(e3) {
              return this;
            }
            updateName(e3) {
              return this;
            }
            end(e3) {
            }
            isRecording() {
              return false;
            }
            recordException(e3, t3) {
            }
          };
        }, 614: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.NoopTracer = void 0;
          let n2 = r3(491), i2 = r3(607), o2 = r3(403), a2 = r3(139), s2 = n2.ContextAPI.getInstance();
          t2.NoopTracer = class {
            startSpan(e3, t3, r4 = s2.active()) {
              var n3;
              if (null == t3 ? void 0 : t3.root) return new o2.NonRecordingSpan();
              let l2 = r4 && (0, i2.getSpanContext)(r4);
              return "object" == typeof (n3 = l2) && "string" == typeof n3.spanId && "string" == typeof n3.traceId && "number" == typeof n3.traceFlags && (0, a2.isSpanContextValid)(l2) ? new o2.NonRecordingSpan(l2) : new o2.NonRecordingSpan();
            }
            startActiveSpan(e3, t3, r4, n3) {
              let o3, a3, l2;
              if (arguments.length < 2) return;
              2 == arguments.length ? l2 = t3 : 3 == arguments.length ? (o3 = t3, l2 = r4) : (o3 = t3, a3 = r4, l2 = n3);
              let u2 = null != a3 ? a3 : s2.active(), c2 = this.startSpan(e3, o3, u2), p2 = (0, i2.setSpan)(u2, c2);
              return s2.with(p2, l2, void 0, c2);
            }
          };
        }, 124: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.NoopTracerProvider = void 0;
          let n2 = r3(614);
          t2.NoopTracerProvider = class {
            getTracer(e3, t3, r4) {
              return new n2.NoopTracer();
            }
          };
        }, 125: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ProxyTracer = void 0;
          let n2 = new (r3(614)).NoopTracer();
          t2.ProxyTracer = class {
            constructor(e3, t3, r4, n3) {
              this._provider = e3, this.name = t3, this.version = r4, this.options = n3;
            }
            startSpan(e3, t3, r4) {
              return this._getTracer().startSpan(e3, t3, r4);
            }
            startActiveSpan(e3, t3, r4, n3) {
              let i2 = this._getTracer();
              return Reflect.apply(i2.startActiveSpan, i2, arguments);
            }
            _getTracer() {
              if (this._delegate) return this._delegate;
              let e3 = this._provider.getDelegateTracer(this.name, this.version, this.options);
              return e3 ? (this._delegate = e3, this._delegate) : n2;
            }
          };
        }, 846: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ProxyTracerProvider = void 0;
          let n2 = r3(125), i2 = new (r3(124)).NoopTracerProvider();
          t2.ProxyTracerProvider = class {
            getTracer(e3, t3, r4) {
              var i3;
              return null != (i3 = this.getDelegateTracer(e3, t3, r4)) ? i3 : new n2.ProxyTracer(this, e3, t3, r4);
            }
            getDelegate() {
              var e3;
              return null != (e3 = this._delegate) ? e3 : i2;
            }
            setDelegate(e3) {
              this._delegate = e3;
            }
            getDelegateTracer(e3, t3, r4) {
              var n3;
              return null == (n3 = this._delegate) ? void 0 : n3.getTracer(e3, t3, r4);
            }
          };
        }, 996: (e2, t2) => {
          var r3;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.SamplingDecision = void 0, (r3 = t2.SamplingDecision || (t2.SamplingDecision = {}))[r3.NOT_RECORD = 0] = "NOT_RECORD", r3[r3.RECORD = 1] = "RECORD", r3[r3.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
        }, 607: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.getSpanContext = t2.setSpanContext = t2.deleteSpan = t2.setSpan = t2.getActiveSpan = t2.getSpan = void 0;
          let n2 = r3(780), i2 = r3(403), o2 = r3(491), a2 = (0, n2.createContextKey)("OpenTelemetry Context Key SPAN");
          function s2(e3) {
            return e3.getValue(a2) || void 0;
          }
          function l2(e3, t3) {
            return e3.setValue(a2, t3);
          }
          t2.getSpan = s2, t2.getActiveSpan = function() {
            return s2(o2.ContextAPI.getInstance().active());
          }, t2.setSpan = l2, t2.deleteSpan = function(e3) {
            return e3.deleteValue(a2);
          }, t2.setSpanContext = function(e3, t3) {
            return l2(e3, new i2.NonRecordingSpan(t3));
          }, t2.getSpanContext = function(e3) {
            var t3;
            return null == (t3 = s2(e3)) ? void 0 : t3.spanContext();
          };
        }, 325: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.TraceStateImpl = void 0;
          let n2 = r3(564);
          class i2 {
            constructor(e3) {
              this._internalState = /* @__PURE__ */ new Map(), e3 && this._parse(e3);
            }
            set(e3, t3) {
              let r4 = this._clone();
              return r4._internalState.has(e3) && r4._internalState.delete(e3), r4._internalState.set(e3, t3), r4;
            }
            unset(e3) {
              let t3 = this._clone();
              return t3._internalState.delete(e3), t3;
            }
            get(e3) {
              return this._internalState.get(e3);
            }
            serialize() {
              return this._keys().reduce((e3, t3) => (e3.push(t3 + "=" + this.get(t3)), e3), []).join(",");
            }
            _parse(e3) {
              !(e3.length > 512) && (this._internalState = e3.split(",").reverse().reduce((e4, t3) => {
                let r4 = t3.trim(), i3 = r4.indexOf("=");
                if (-1 !== i3) {
                  let o2 = r4.slice(0, i3), a2 = r4.slice(i3 + 1, t3.length);
                  (0, n2.validateKey)(o2) && (0, n2.validateValue)(a2) && e4.set(o2, a2);
                }
                return e4;
              }, /* @__PURE__ */ new Map()), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))));
            }
            _keys() {
              return Array.from(this._internalState.keys()).reverse();
            }
            _clone() {
              let e3 = new i2();
              return e3._internalState = new Map(this._internalState), e3;
            }
          }
          t2.TraceStateImpl = i2;
        }, 564: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.validateValue = t2.validateKey = void 0;
          let r3 = "[_0-9a-z-*/]", n2 = `[a-z]${r3}{0,255}`, i2 = `[a-z0-9]${r3}{0,240}@[a-z]${r3}{0,13}`, o2 = RegExp(`^(?:${n2}|${i2})$`), a2 = /^[ -~]{0,255}[!-~]$/, s2 = /,|=/;
          t2.validateKey = function(e3) {
            return o2.test(e3);
          }, t2.validateValue = function(e3) {
            return a2.test(e3) && !s2.test(e3);
          };
        }, 98: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createTraceState = void 0;
          let n2 = r3(325);
          t2.createTraceState = function(e3) {
            return new n2.TraceStateImpl(e3);
          };
        }, 476: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.INVALID_SPAN_CONTEXT = t2.INVALID_TRACEID = t2.INVALID_SPANID = void 0;
          let n2 = r3(475);
          t2.INVALID_SPANID = "0000000000000000", t2.INVALID_TRACEID = "00000000000000000000000000000000", t2.INVALID_SPAN_CONTEXT = { traceId: t2.INVALID_TRACEID, spanId: t2.INVALID_SPANID, traceFlags: n2.TraceFlags.NONE };
        }, 357: (e2, t2) => {
          var r3;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.SpanKind = void 0, (r3 = t2.SpanKind || (t2.SpanKind = {}))[r3.INTERNAL = 0] = "INTERNAL", r3[r3.SERVER = 1] = "SERVER", r3[r3.CLIENT = 2] = "CLIENT", r3[r3.PRODUCER = 3] = "PRODUCER", r3[r3.CONSUMER = 4] = "CONSUMER";
        }, 139: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.wrapSpanContext = t2.isSpanContextValid = t2.isValidSpanId = t2.isValidTraceId = void 0;
          let n2 = r3(476), i2 = r3(403), o2 = /^([0-9a-f]{32})$/i, a2 = /^[0-9a-f]{16}$/i;
          function s2(e3) {
            return o2.test(e3) && e3 !== n2.INVALID_TRACEID;
          }
          function l2(e3) {
            return a2.test(e3) && e3 !== n2.INVALID_SPANID;
          }
          t2.isValidTraceId = s2, t2.isValidSpanId = l2, t2.isSpanContextValid = function(e3) {
            return s2(e3.traceId) && l2(e3.spanId);
          }, t2.wrapSpanContext = function(e3) {
            return new i2.NonRecordingSpan(e3);
          };
        }, 847: (e2, t2) => {
          var r3;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.SpanStatusCode = void 0, (r3 = t2.SpanStatusCode || (t2.SpanStatusCode = {}))[r3.UNSET = 0] = "UNSET", r3[r3.OK = 1] = "OK", r3[r3.ERROR = 2] = "ERROR";
        }, 475: (e2, t2) => {
          var r3;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.TraceFlags = void 0, (r3 = t2.TraceFlags || (t2.TraceFlags = {}))[r3.NONE = 0] = "NONE", r3[r3.SAMPLED = 1] = "SAMPLED";
        }, 521: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.VERSION = void 0, t2.VERSION = "1.6.0";
        } }, x = {};
        function R(e2) {
          var t2 = x[e2];
          if (void 0 !== t2) return t2.exports;
          var r3 = x[e2] = { exports: {} }, n2 = true;
          try {
            S[e2].call(r3.exports, r3, r3.exports, R), n2 = false;
          } finally {
            n2 && delete x[e2];
          }
          return r3.exports;
        }
        R.ab = "/ROOT/node_modules/next/dist/compiled/@opentelemetry/api/";
        var O = {};
        Object.defineProperty(O, "__esModule", { value: true }), O.trace = O.propagation = O.metrics = O.diag = O.context = O.INVALID_SPAN_CONTEXT = O.INVALID_TRACEID = O.INVALID_SPANID = O.isValidSpanId = O.isValidTraceId = O.isSpanContextValid = O.createTraceState = O.TraceFlags = O.SpanStatusCode = O.SpanKind = O.SamplingDecision = O.ProxyTracerProvider = O.ProxyTracer = O.defaultTextMapSetter = O.defaultTextMapGetter = O.ValueType = O.createNoopMeter = O.DiagLogLevel = O.DiagConsoleLogger = O.ROOT_CONTEXT = O.createContextKey = O.baggageEntryMetadataFromString = void 0, s = R(369), Object.defineProperty(O, "baggageEntryMetadataFromString", { enumerable: true, get: function() {
          return s.baggageEntryMetadataFromString;
        } }), l = R(780), Object.defineProperty(O, "createContextKey", { enumerable: true, get: function() {
          return l.createContextKey;
        } }), Object.defineProperty(O, "ROOT_CONTEXT", { enumerable: true, get: function() {
          return l.ROOT_CONTEXT;
        } }), u = R(972), Object.defineProperty(O, "DiagConsoleLogger", { enumerable: true, get: function() {
          return u.DiagConsoleLogger;
        } }), c = R(957), Object.defineProperty(O, "DiagLogLevel", { enumerable: true, get: function() {
          return c.DiagLogLevel;
        } }), p = R(102), Object.defineProperty(O, "createNoopMeter", { enumerable: true, get: function() {
          return p.createNoopMeter;
        } }), d = R(901), Object.defineProperty(O, "ValueType", { enumerable: true, get: function() {
          return d.ValueType;
        } }), f = R(194), Object.defineProperty(O, "defaultTextMapGetter", { enumerable: true, get: function() {
          return f.defaultTextMapGetter;
        } }), Object.defineProperty(O, "defaultTextMapSetter", { enumerable: true, get: function() {
          return f.defaultTextMapSetter;
        } }), h = R(125), Object.defineProperty(O, "ProxyTracer", { enumerable: true, get: function() {
          return h.ProxyTracer;
        } }), g = R(846), Object.defineProperty(O, "ProxyTracerProvider", { enumerable: true, get: function() {
          return g.ProxyTracerProvider;
        } }), m = R(996), Object.defineProperty(O, "SamplingDecision", { enumerable: true, get: function() {
          return m.SamplingDecision;
        } }), v = R(357), Object.defineProperty(O, "SpanKind", { enumerable: true, get: function() {
          return v.SpanKind;
        } }), b = R(847), Object.defineProperty(O, "SpanStatusCode", { enumerable: true, get: function() {
          return b.SpanStatusCode;
        } }), y = R(475), Object.defineProperty(O, "TraceFlags", { enumerable: true, get: function() {
          return y.TraceFlags;
        } }), w = R(98), Object.defineProperty(O, "createTraceState", { enumerable: true, get: function() {
          return w.createTraceState;
        } }), E = R(139), Object.defineProperty(O, "isSpanContextValid", { enumerable: true, get: function() {
          return E.isSpanContextValid;
        } }), Object.defineProperty(O, "isValidTraceId", { enumerable: true, get: function() {
          return E.isValidTraceId;
        } }), Object.defineProperty(O, "isValidSpanId", { enumerable: true, get: function() {
          return E.isValidSpanId;
        } }), _ = R(476), Object.defineProperty(O, "INVALID_SPANID", { enumerable: true, get: function() {
          return _.INVALID_SPANID;
        } }), Object.defineProperty(O, "INVALID_TRACEID", { enumerable: true, get: function() {
          return _.INVALID_TRACEID;
        } }), Object.defineProperty(O, "INVALID_SPAN_CONTEXT", { enumerable: true, get: function() {
          return _.INVALID_SPAN_CONTEXT;
        } }), r2 = R(67), Object.defineProperty(O, "context", { enumerable: true, get: function() {
          return r2.context;
        } }), n = R(506), Object.defineProperty(O, "diag", { enumerable: true, get: function() {
          return n.diag;
        } }), i = R(886), Object.defineProperty(O, "metrics", { enumerable: true, get: function() {
          return i.metrics;
        } }), o = R(939), Object.defineProperty(O, "propagation", { enumerable: true, get: function() {
          return o.propagation;
        } }), a = R(845), Object.defineProperty(O, "trace", { enumerable: true, get: function() {
          return a.trace;
        } }), O.default = { context: r2.context, diag: n.diag, metrics: i.metrics, propagation: o.propagation, trace: a.trace }, t.exports = O;
      })();
    }, 71498, (e, t, r) => {
      (() => {
        "use strict";
        "u" > typeof __nccwpck_require__ && (__nccwpck_require__.ab = "/ROOT/node_modules/next/dist/compiled/cookie/");
        var e2, r2, n, i, o = {};
        o.parse = function(t2, r3) {
          if ("string" != typeof t2) throw TypeError("argument str must be a string");
          for (var i2 = {}, o2 = t2.split(n), a = (r3 || {}).decode || e2, s = 0; s < o2.length; s++) {
            var l = o2[s], u = l.indexOf("=");
            if (!(u < 0)) {
              var c = l.substr(0, u).trim(), p = l.substr(++u, l.length).trim();
              '"' == p[0] && (p = p.slice(1, -1)), void 0 == i2[c] && (i2[c] = function(e3, t3) {
                try {
                  return t3(e3);
                } catch (t4) {
                  return e3;
                }
              }(p, a));
            }
          }
          return i2;
        }, o.serialize = function(e3, t2, n2) {
          var o2 = n2 || {}, a = o2.encode || r2;
          if ("function" != typeof a) throw TypeError("option encode is invalid");
          if (!i.test(e3)) throw TypeError("argument name is invalid");
          var s = a(t2);
          if (s && !i.test(s)) throw TypeError("argument val is invalid");
          var l = e3 + "=" + s;
          if (null != o2.maxAge) {
            var u = o2.maxAge - 0;
            if (isNaN(u) || !isFinite(u)) throw TypeError("option maxAge is invalid");
            l += "; Max-Age=" + Math.floor(u);
          }
          if (o2.domain) {
            if (!i.test(o2.domain)) throw TypeError("option domain is invalid");
            l += "; Domain=" + o2.domain;
          }
          if (o2.path) {
            if (!i.test(o2.path)) throw TypeError("option path is invalid");
            l += "; Path=" + o2.path;
          }
          if (o2.expires) {
            if ("function" != typeof o2.expires.toUTCString) throw TypeError("option expires is invalid");
            l += "; Expires=" + o2.expires.toUTCString();
          }
          if (o2.httpOnly && (l += "; HttpOnly"), o2.secure && (l += "; Secure"), o2.sameSite) switch ("string" == typeof o2.sameSite ? o2.sameSite.toLowerCase() : o2.sameSite) {
            case true:
            case "strict":
              l += "; SameSite=Strict";
              break;
            case "lax":
              l += "; SameSite=Lax";
              break;
            case "none":
              l += "; SameSite=None";
              break;
            default:
              throw TypeError("option sameSite is invalid");
          }
          return l;
        }, e2 = decodeURIComponent, r2 = encodeURIComponent, n = /; */, i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, t.exports = o;
      })();
    }, 99734, (e, t, r) => {
      (() => {
        "use strict";
        let e2, r2, n, i, o;
        var a = { 993: (e3) => {
          var t2 = Object.prototype.hasOwnProperty, r3 = "~";
          function n2() {
          }
          function i2(e4, t3, r4) {
            this.fn = e4, this.context = t3, this.once = r4 || false;
          }
          function o2(e4, t3, n3, o3, a3) {
            if ("function" != typeof n3) throw TypeError("The listener must be a function");
            var s3 = new i2(n3, o3 || e4, a3), l2 = r3 ? r3 + t3 : t3;
            return e4._events[l2] ? e4._events[l2].fn ? e4._events[l2] = [e4._events[l2], s3] : e4._events[l2].push(s3) : (e4._events[l2] = s3, e4._eventsCount++), e4;
          }
          function a2(e4, t3) {
            0 == --e4._eventsCount ? e4._events = new n2() : delete e4._events[t3];
          }
          function s2() {
            this._events = new n2(), this._eventsCount = 0;
          }
          Object.create && (n2.prototype = /* @__PURE__ */ Object.create(null), new n2().__proto__ || (r3 = false)), s2.prototype.eventNames = function() {
            var e4, n3, i3 = [];
            if (0 === this._eventsCount) return i3;
            for (n3 in e4 = this._events) t2.call(e4, n3) && i3.push(r3 ? n3.slice(1) : n3);
            return Object.getOwnPropertySymbols ? i3.concat(Object.getOwnPropertySymbols(e4)) : i3;
          }, s2.prototype.listeners = function(e4) {
            var t3 = r3 ? r3 + e4 : e4, n3 = this._events[t3];
            if (!n3) return [];
            if (n3.fn) return [n3.fn];
            for (var i3 = 0, o3 = n3.length, a3 = Array(o3); i3 < o3; i3++) a3[i3] = n3[i3].fn;
            return a3;
          }, s2.prototype.listenerCount = function(e4) {
            var t3 = r3 ? r3 + e4 : e4, n3 = this._events[t3];
            return n3 ? n3.fn ? 1 : n3.length : 0;
          }, s2.prototype.emit = function(e4, t3, n3, i3, o3, a3) {
            var s3 = r3 ? r3 + e4 : e4;
            if (!this._events[s3]) return false;
            var l2, u2, c = this._events[s3], p = arguments.length;
            if (c.fn) {
              switch (c.once && this.removeListener(e4, c.fn, void 0, true), p) {
                case 1:
                  return c.fn.call(c.context), true;
                case 2:
                  return c.fn.call(c.context, t3), true;
                case 3:
                  return c.fn.call(c.context, t3, n3), true;
                case 4:
                  return c.fn.call(c.context, t3, n3, i3), true;
                case 5:
                  return c.fn.call(c.context, t3, n3, i3, o3), true;
                case 6:
                  return c.fn.call(c.context, t3, n3, i3, o3, a3), true;
              }
              for (u2 = 1, l2 = Array(p - 1); u2 < p; u2++) l2[u2 - 1] = arguments[u2];
              c.fn.apply(c.context, l2);
            } else {
              var d, f = c.length;
              for (u2 = 0; u2 < f; u2++) switch (c[u2].once && this.removeListener(e4, c[u2].fn, void 0, true), p) {
                case 1:
                  c[u2].fn.call(c[u2].context);
                  break;
                case 2:
                  c[u2].fn.call(c[u2].context, t3);
                  break;
                case 3:
                  c[u2].fn.call(c[u2].context, t3, n3);
                  break;
                case 4:
                  c[u2].fn.call(c[u2].context, t3, n3, i3);
                  break;
                default:
                  if (!l2) for (d = 1, l2 = Array(p - 1); d < p; d++) l2[d - 1] = arguments[d];
                  c[u2].fn.apply(c[u2].context, l2);
              }
            }
            return true;
          }, s2.prototype.on = function(e4, t3, r4) {
            return o2(this, e4, t3, r4, false);
          }, s2.prototype.once = function(e4, t3, r4) {
            return o2(this, e4, t3, r4, true);
          }, s2.prototype.removeListener = function(e4, t3, n3, i3) {
            var o3 = r3 ? r3 + e4 : e4;
            if (!this._events[o3]) return this;
            if (!t3) return a2(this, o3), this;
            var s3 = this._events[o3];
            if (s3.fn) s3.fn !== t3 || i3 && !s3.once || n3 && s3.context !== n3 || a2(this, o3);
            else {
              for (var l2 = 0, u2 = [], c = s3.length; l2 < c; l2++) (s3[l2].fn !== t3 || i3 && !s3[l2].once || n3 && s3[l2].context !== n3) && u2.push(s3[l2]);
              u2.length ? this._events[o3] = 1 === u2.length ? u2[0] : u2 : a2(this, o3);
            }
            return this;
          }, s2.prototype.removeAllListeners = function(e4) {
            var t3;
            return e4 ? (t3 = r3 ? r3 + e4 : e4, this._events[t3] && a2(this, t3)) : (this._events = new n2(), this._eventsCount = 0), this;
          }, s2.prototype.off = s2.prototype.removeListener, s2.prototype.addListener = s2.prototype.on, s2.prefixed = r3, s2.EventEmitter = s2, e3.exports = s2;
        }, 213: (e3) => {
          e3.exports = (e4, t2) => (t2 = t2 || (() => {
          }), e4.then((e5) => new Promise((e6) => {
            e6(t2());
          }).then(() => e5), (e5) => new Promise((e6) => {
            e6(t2());
          }).then(() => {
            throw e5;
          })));
        }, 574: (e3, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.default = function(e4, t3, r3) {
            let n2 = 0, i2 = e4.length;
            for (; i2 > 0; ) {
              let o2 = i2 / 2 | 0, a2 = n2 + o2;
              0 >= r3(e4[a2], t3) ? (n2 = ++a2, i2 -= o2 + 1) : i2 = o2;
            }
            return n2;
          };
        }, 821: (e3, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true });
          let n2 = r3(574);
          t2.default = class {
            constructor() {
              this._queue = [];
            }
            enqueue(e4, t3) {
              let r4 = { priority: (t3 = Object.assign({ priority: 0 }, t3)).priority, run: e4 };
              if (this.size && this._queue[this.size - 1].priority >= t3.priority) return void this._queue.push(r4);
              let i2 = n2.default(this._queue, r4, (e5, t4) => t4.priority - e5.priority);
              this._queue.splice(i2, 0, r4);
            }
            dequeue() {
              let e4 = this._queue.shift();
              return null == e4 ? void 0 : e4.run;
            }
            filter(e4) {
              return this._queue.filter((t3) => t3.priority === e4.priority).map((e5) => e5.run);
            }
            get size() {
              return this._queue.length;
            }
          };
        }, 816: (e3, t2, r3) => {
          let n2 = r3(213);
          class i2 extends Error {
            constructor(e4) {
              super(e4), this.name = "TimeoutError";
            }
          }
          let o2 = (e4, t3, r4) => new Promise((o3, a2) => {
            if ("number" != typeof t3 || t3 < 0) throw TypeError("Expected `milliseconds` to be a positive number");
            if (t3 === 1 / 0) return void o3(e4);
            let s2 = setTimeout(() => {
              if ("function" == typeof r4) {
                try {
                  o3(r4());
                } catch (e5) {
                  a2(e5);
                }
                return;
              }
              let n3 = "string" == typeof r4 ? r4 : `Promise timed out after ${t3} milliseconds`, s3 = r4 instanceof Error ? r4 : new i2(n3);
              "function" == typeof e4.cancel && e4.cancel(), a2(s3);
            }, t3);
            n2(e4.then(o3, a2), () => {
              clearTimeout(s2);
            });
          });
          e3.exports = o2, e3.exports.default = o2, e3.exports.TimeoutError = i2;
        } }, s = {};
        function l(e3) {
          var t2 = s[e3];
          if (void 0 !== t2) return t2.exports;
          var r3 = s[e3] = { exports: {} }, n2 = true;
          try {
            a[e3](r3, r3.exports, l), n2 = false;
          } finally {
            n2 && delete s[e3];
          }
          return r3.exports;
        }
        l.ab = "/ROOT/node_modules/next/dist/compiled/p-queue/";
        var u = {};
        Object.defineProperty(u, "__esModule", { value: true }), e2 = l(993), r2 = l(816), n = l(821), i = () => {
        }, o = new r2.TimeoutError(), u.default = class extends e2 {
          constructor(e3) {
            var t2, r3, o2, a2;
            if (super(), this._intervalCount = 0, this._intervalEnd = 0, this._pendingCount = 0, this._resolveEmpty = i, this._resolveIdle = i, !("number" == typeof (e3 = Object.assign({ carryoverConcurrencyCount: false, intervalCap: 1 / 0, interval: 0, concurrency: 1 / 0, autoStart: true, queueClass: n.default }, e3)).intervalCap && e3.intervalCap >= 1)) throw TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${null != (r3 = null == (t2 = e3.intervalCap) ? void 0 : t2.toString()) ? r3 : ""}\` (${typeof e3.intervalCap})`);
            if (void 0 === e3.interval || !(Number.isFinite(e3.interval) && e3.interval >= 0)) throw TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${null != (a2 = null == (o2 = e3.interval) ? void 0 : o2.toString()) ? a2 : ""}\` (${typeof e3.interval})`);
            this._carryoverConcurrencyCount = e3.carryoverConcurrencyCount, this._isIntervalIgnored = e3.intervalCap === 1 / 0 || 0 === e3.interval, this._intervalCap = e3.intervalCap, this._interval = e3.interval, this._queue = new e3.queueClass(), this._queueClass = e3.queueClass, this.concurrency = e3.concurrency, this._timeout = e3.timeout, this._throwOnTimeout = true === e3.throwOnTimeout, this._isPaused = false === e3.autoStart;
          }
          get _doesIntervalAllowAnother() {
            return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
          }
          get _doesConcurrentAllowAnother() {
            return this._pendingCount < this._concurrency;
          }
          _next() {
            this._pendingCount--, this._tryToStartAnother(), this.emit("next");
          }
          _resolvePromises() {
            this._resolveEmpty(), this._resolveEmpty = i, 0 === this._pendingCount && (this._resolveIdle(), this._resolveIdle = i, this.emit("idle"));
          }
          _onResumeInterval() {
            this._onInterval(), this._initializeIntervalIfNeeded(), this._timeoutId = void 0;
          }
          _isIntervalPaused() {
            let e3 = Date.now();
            if (void 0 === this._intervalId) {
              let t2 = this._intervalEnd - e3;
              if (!(t2 < 0)) return void 0 === this._timeoutId && (this._timeoutId = setTimeout(() => {
                this._onResumeInterval();
              }, t2)), true;
              this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
            }
            return false;
          }
          _tryToStartAnother() {
            if (0 === this._queue.size) return this._intervalId && clearInterval(this._intervalId), this._intervalId = void 0, this._resolvePromises(), false;
            if (!this._isPaused) {
              let e3 = !this._isIntervalPaused();
              if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                let t2 = this._queue.dequeue();
                return !!t2 && (this.emit("active"), t2(), e3 && this._initializeIntervalIfNeeded(), true);
              }
            }
            return false;
          }
          _initializeIntervalIfNeeded() {
            this._isIntervalIgnored || void 0 !== this._intervalId || (this._intervalId = setInterval(() => {
              this._onInterval();
            }, this._interval), this._intervalEnd = Date.now() + this._interval);
          }
          _onInterval() {
            0 === this._intervalCount && 0 === this._pendingCount && this._intervalId && (clearInterval(this._intervalId), this._intervalId = void 0), this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0, this._processQueue();
          }
          _processQueue() {
            for (; this._tryToStartAnother(); ) ;
          }
          get concurrency() {
            return this._concurrency;
          }
          set concurrency(e3) {
            if (!("number" == typeof e3 && e3 >= 1)) throw TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e3}\` (${typeof e3})`);
            this._concurrency = e3, this._processQueue();
          }
          async add(e3, t2 = {}) {
            return new Promise((n2, i2) => {
              let a2 = async () => {
                this._pendingCount++, this._intervalCount++;
                try {
                  let a3 = void 0 === this._timeout && void 0 === t2.timeout ? e3() : r2.default(Promise.resolve(e3()), void 0 === t2.timeout ? this._timeout : t2.timeout, () => {
                    (void 0 === t2.throwOnTimeout ? this._throwOnTimeout : t2.throwOnTimeout) && i2(o);
                  });
                  n2(await a3);
                } catch (e4) {
                  i2(e4);
                }
                this._next();
              };
              this._queue.enqueue(a2, t2), this._tryToStartAnother(), this.emit("add");
            });
          }
          async addAll(e3, t2) {
            return Promise.all(e3.map(async (e4) => this.add(e4, t2)));
          }
          start() {
            return this._isPaused && (this._isPaused = false, this._processQueue()), this;
          }
          pause() {
            this._isPaused = true;
          }
          clear() {
            this._queue = new this._queueClass();
          }
          async onEmpty() {
            if (0 !== this._queue.size) return new Promise((e3) => {
              let t2 = this._resolveEmpty;
              this._resolveEmpty = () => {
                t2(), e3();
              };
            });
          }
          async onIdle() {
            if (0 !== this._pendingCount || 0 !== this._queue.size) return new Promise((e3) => {
              let t2 = this._resolveIdle;
              this._resolveIdle = () => {
                t2(), e3();
              };
            });
          }
          get size() {
            return this._queue.size;
          }
          sizeBy(e3) {
            return this._queue.filter(e3).length;
          }
          get pending() {
            return this._pendingCount;
          }
          get isPaused() {
            return this._isPaused;
          }
          get timeout() {
            return this._timeout;
          }
          set timeout(e3) {
            this._timeout = e3;
          }
        }, t.exports = u;
      })();
    }, 78500, (e, t, r) => {
      t.exports = e.x("node:async_hooks", () => (init_node_async_hooks(), __toCommonJS(node_async_hooks_exports)));
    }, 25085, (e, t, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });
      var n = { getTestReqInfo: function() {
        return l;
      }, withRequest: function() {
        return s;
      } };
      for (var i in n) Object.defineProperty(r, i, { enumerable: true, get: n[i] });
      let o = new (e.r(78500)).AsyncLocalStorage();
      function a(e2, t2) {
        let r2 = t2.header(e2, "next-test-proxy-port");
        if (!r2) return;
        let n2 = t2.url(e2);
        return { url: n2, proxyPort: Number(r2), testData: t2.header(e2, "next-test-data") || "" };
      }
      function s(e2, t2, r2) {
        let n2 = a(e2, t2);
        return n2 ? o.run(n2, r2) : r2();
      }
      function l(e2, t2) {
        let r2 = o.getStore();
        return r2 || (e2 && t2 ? a(e2, t2) : void 0);
      }
    }, 28325, (e, t, r) => {
      "use strict";
      var n = e.i(51615);
      Object.defineProperty(r, "__esModule", { value: true });
      var i = { handleFetch: function() {
        return u;
      }, interceptFetch: function() {
        return c;
      }, reader: function() {
        return s;
      } };
      for (var o in i) Object.defineProperty(r, o, { enumerable: true, get: i[o] });
      let a = e.r(25085), s = { url: (e2) => e2.url, header: (e2, t2) => e2.headers.get(t2) };
      async function l(e2, t2) {
        let { url: r2, method: i2, headers: o2, body: a2, cache: s2, credentials: l2, integrity: u2, mode: c2, redirect: p, referrer: d, referrerPolicy: f } = t2;
        return { testData: e2, api: "fetch", request: { url: r2, method: i2, headers: [...Array.from(o2), ["next-test-stack", function() {
          let e3 = (Error().stack ?? "").split("\n");
          for (let t3 = 1; t3 < e3.length; t3++) if (e3[t3].length > 0) {
            e3 = e3.slice(t3);
            break;
          }
          return (e3 = (e3 = (e3 = e3.filter((e4) => !e4.includes("/next/dist/"))).slice(0, 5)).map((e4) => e4.replace("webpack-internal:///(rsc)/", "").trim())).join("    ");
        }()]], body: a2 ? n.Buffer.from(await t2.arrayBuffer()).toString("base64") : null, cache: s2, credentials: l2, integrity: u2, mode: c2, redirect: p, referrer: d, referrerPolicy: f } };
      }
      async function u(e2, t2) {
        let r2 = (0, a.getTestReqInfo)(t2, s);
        if (!r2) return e2(t2);
        let { testData: i2, proxyPort: o2 } = r2, u2 = await l(i2, t2), c2 = await e2(`http://localhost:${o2}`, { method: "POST", body: JSON.stringify(u2), next: { internal: true } });
        if (!c2.ok) throw Object.defineProperty(Error(`Proxy request failed: ${c2.status}`), "__NEXT_ERROR_CODE", { value: "E146", enumerable: false, configurable: true });
        let p = await c2.json(), { api: d } = p;
        switch (d) {
          case "continue":
            return e2(t2);
          case "abort":
          case "unhandled":
            throw Object.defineProperty(Error(`Proxy request aborted [${t2.method} ${t2.url}]`), "__NEXT_ERROR_CODE", { value: "E145", enumerable: false, configurable: true });
          case "fetch":
            return function(e3) {
              let { status: t3, headers: r3, body: i3 } = e3.response;
              return new Response(i3 ? n.Buffer.from(i3, "base64") : null, { status: t3, headers: new Headers(r3) });
            }(p);
          default:
            return d;
        }
      }
      function c(t2) {
        return e.g.fetch = function(e2, r2) {
          var n2;
          return (null == r2 || null == (n2 = r2.next) ? void 0 : n2.internal) ? t2(e2, r2) : u(t2, new Request(e2, r2));
        }, () => {
          e.g.fetch = t2;
        };
      }
    }, 94165, (e, t, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });
      var n = { interceptTestApis: function() {
        return s;
      }, wrapRequestHandler: function() {
        return l;
      } };
      for (var i in n) Object.defineProperty(r, i, { enumerable: true, get: n[i] });
      let o = e.r(25085), a = e.r(28325);
      function s() {
        return (0, a.interceptFetch)(e.g.fetch);
      }
      function l(e2) {
        return (t2, r2) => (0, o.withRequest)(t2, a.reader, () => e2(t2, r2));
      }
    }, 64445, (e, t, r) => {
      var n = { 226: function(t2, r2) {
        !function(n2, i2) {
          "use strict";
          var o2 = "function", a = "undefined", s = "object", l = "string", u = "major", c = "model", p = "name", d = "type", f = "vendor", h = "version", g = "architecture", m = "console", v = "mobile", b = "tablet", y = "smarttv", w = "wearable", E = "embedded", _ = "Amazon", S = "Apple", x = "ASUS", R = "BlackBerry", O = "Browser", T = "Chrome", P = "Firefox", C = "Google", N = "Huawei", I = "Microsoft", A = "Motorola", L = "Opera", j = "Samsung", $ = "Sharp", k = "Sony", M = "Xiaomi", D = "Zebra", U = "Facebook", B = "Chromium OS", V = "Mac OS", q = function(e2, t3) {
            var r3 = {};
            for (var n3 in e2) t3[n3] && t3[n3].length % 2 == 0 ? r3[n3] = t3[n3].concat(e2[n3]) : r3[n3] = e2[n3];
            return r3;
          }, G = function(e2) {
            for (var t3 = {}, r3 = 0; r3 < e2.length; r3++) t3[e2[r3].toUpperCase()] = e2[r3];
            return t3;
          }, H = function(e2, t3) {
            return typeof e2 === l && -1 !== F(t3).indexOf(F(e2));
          }, F = function(e2) {
            return e2.toLowerCase();
          }, X = function(e2, t3) {
            if (typeof e2 === l) return e2 = e2.replace(/^\s\s*/, ""), typeof t3 === a ? e2 : e2.substring(0, 350);
          }, z = function(e2, t3) {
            for (var r3, n3, i3, a2, l2, u2, c2 = 0; c2 < t3.length && !l2; ) {
              var p2 = t3[c2], d2 = t3[c2 + 1];
              for (r3 = n3 = 0; r3 < p2.length && !l2 && p2[r3]; ) if (l2 = p2[r3++].exec(e2)) for (i3 = 0; i3 < d2.length; i3++) u2 = l2[++n3], typeof (a2 = d2[i3]) === s && a2.length > 0 ? 2 === a2.length ? typeof a2[1] == o2 ? this[a2[0]] = a2[1].call(this, u2) : this[a2[0]] = a2[1] : 3 === a2.length ? typeof a2[1] !== o2 || a2[1].exec && a2[1].test ? this[a2[0]] = u2 ? u2.replace(a2[1], a2[2]) : void 0 : this[a2[0]] = u2 ? a2[1].call(this, u2, a2[2]) : void 0 : 4 === a2.length && (this[a2[0]] = u2 ? a2[3].call(this, u2.replace(a2[1], a2[2])) : void 0) : this[a2] = u2 || void 0;
              c2 += 2;
            }
          }, W = function(e2, t3) {
            for (var r3 in t3) if (typeof t3[r3] === s && t3[r3].length > 0) {
              for (var n3 = 0; n3 < t3[r3].length; n3++) if (H(t3[r3][n3], e2)) return "?" === r3 ? void 0 : r3;
            } else if (H(t3[r3], e2)) return "?" === r3 ? void 0 : r3;
            return e2;
          }, K = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, J = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [h, [p, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [h, [p, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [p, h], [/opios[\/ ]+([\w\.]+)/i], [h, [p, L + " Mini"]], [/\bopr\/([\w\.]+)/i], [h, [p, L]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [p, h], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [h, [p, "UC" + O]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [h, [p, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [h, [p, "WeChat"]], [/konqueror\/([\w\.]+)/i], [h, [p, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [h, [p, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [h, [p, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[p, /(.+)/, "$1 Secure " + O], h], [/\bfocus\/([\w\.]+)/i], [h, [p, P + " Focus"]], [/\bopt\/([\w\.]+)/i], [h, [p, L + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [h, [p, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [h, [p, "Dolphin"]], [/coast\/([\w\.]+)/i], [h, [p, L + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [h, [p, "MIUI " + O]], [/fxios\/([-\w\.]+)/i], [h, [p, P]], [/\bqihu|(qi?ho?o?|360)browser/i], [[p, "360 " + O]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[p, /(.+)/, "$1 " + O], h], [/(comodo_dragon)\/([\w\.]+)/i], [[p, /_/g, " "], h], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [p, h], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [p], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[p, U], h], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [p, h], [/\bgsa\/([\w\.]+) .*safari\//i], [h, [p, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [h, [p, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [h, [p, T + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[p, T + " WebView"], h], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [h, [p, "Android " + O]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [p, h], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [h, [p, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [h, p], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [p, [h, W, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]], [/(webkit|khtml)\/([\w\.]+)/i], [p, h], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[p, "Netscape"], h], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [h, [p, P + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [p, h], [/(cobalt)\/([\w\.]+)/i], [p, [h, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[g, "amd64"]], [/(ia32(?=;))/i], [[g, F]], [/((?:i[346]|x)86)[;\)]/i], [[g, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[g, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[g, "armhf"]], [/windows (ce|mobile); ppc;/i], [[g, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[g, /ower/, "", F]], [/(sun4\w)[;\)]/i], [[g, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[g, F]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [f, j], [d, b]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [c, [f, j], [d, v]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [c, [f, S], [d, v]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [f, S], [d, b]], [/(macintosh);/i], [c, [f, S]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [f, $], [d, v]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [c, [f, N], [d, b]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [c, [f, N], [d, v]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[c, /_/g, " "], [f, M], [d, v]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[c, /_/g, " "], [f, M], [d, b]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [c, [f, "OPPO"], [d, v]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [f, "Vivo"], [d, v]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [c, [f, "Realme"], [d, v]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [f, A], [d, v]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [f, A], [d, b]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [f, "LG"], [d, b]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [f, "LG"], [d, v]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [c, [f, "Lenovo"], [d, b]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[c, /_/g, " "], [f, "Nokia"], [d, v]], [/(pixel c)\b/i], [c, [f, C], [d, b]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [f, C], [d, v]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [f, k], [d, v]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [f, k], [d, b]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [f, "OnePlus"], [d, v]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [f, _], [d, b]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [f, _], [d, v]], [/(playbook);[-\w\),; ]+(rim)/i], [c, f, [d, b]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [f, R], [d, v]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [f, x], [d, b]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [f, x], [d, v]], [/(nexus 9)/i], [c, [f, "HTC"], [d, b]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [f, [c, /_/g, " "], [d, v]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [f, "Acer"], [d, b]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [f, "Meizu"], [d, v]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [f, c, [d, v]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [f, c, [d, b]], [/(surface duo)/i], [c, [f, I], [d, b]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [f, "Fairphone"], [d, v]], [/(u304aa)/i], [c, [f, "AT&T"], [d, v]], [/\bsie-(\w*)/i], [c, [f, "Siemens"], [d, v]], [/\b(rct\w+) b/i], [c, [f, "RCA"], [d, b]], [/\b(venue[\d ]{2,7}) b/i], [c, [f, "Dell"], [d, b]], [/\b(q(?:mv|ta)\w+) b/i], [c, [f, "Verizon"], [d, b]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [f, "Barnes & Noble"], [d, b]], [/\b(tm\d{3}\w+) b/i], [c, [f, "NuVision"], [d, b]], [/\b(k88) b/i], [c, [f, "ZTE"], [d, b]], [/\b(nx\d{3}j) b/i], [c, [f, "ZTE"], [d, v]], [/\b(gen\d{3}) b.+49h/i], [c, [f, "Swiss"], [d, v]], [/\b(zur\d{3}) b/i], [c, [f, "Swiss"], [d, b]], [/\b((zeki)?tb.*\b) b/i], [c, [f, "Zeki"], [d, b]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[f, "Dragon Touch"], c, [d, b]], [/\b(ns-?\w{0,9}) b/i], [c, [f, "Insignia"], [d, b]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [f, "NextBook"], [d, b]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[f, "Voice"], c, [d, v]], [/\b(lvtel\-)?(v1[12]) b/i], [[f, "LvTel"], c, [d, v]], [/\b(ph-1) /i], [c, [f, "Essential"], [d, v]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [f, "Envizen"], [d, b]], [/\b(trio[-\w\. ]+) b/i], [c, [f, "MachSpeed"], [d, b]], [/\btu_(1491) b/i], [c, [f, "Rotor"], [d, b]], [/(shield[\w ]+) b/i], [c, [f, "Nvidia"], [d, b]], [/(sprint) (\w+)/i], [f, c, [d, v]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [f, I], [d, v]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [f, D], [d, b]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [f, D], [d, v]], [/smart-tv.+(samsung)/i], [f, [d, y]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [f, j], [d, y]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[f, "LG"], [d, y]], [/(apple) ?tv/i], [f, [c, S + " TV"], [d, y]], [/crkey/i], [[c, T + "cast"], [f, C], [d, y]], [/droid.+aft(\w)( bui|\))/i], [c, [f, _], [d, y]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [c, [f, $], [d, y]], [/(bravia[\w ]+)( bui|\))/i], [c, [f, k], [d, y]], [/(mitv-\w{5}) bui/i], [c, [f, M], [d, y]], [/Hbbtv.*(technisat) (.*);/i], [f, c, [d, y]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[f, X], [c, X], [d, y]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[d, y]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [f, c, [d, m]], [/droid.+; (shield) bui/i], [c, [f, "Nvidia"], [d, m]], [/(playstation [345portablevi]+)/i], [c, [f, k], [d, m]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [f, I], [d, m]], [/((pebble))app/i], [f, c, [d, w]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [c, [f, S], [d, w]], [/droid.+; (glass) \d/i], [c, [f, C], [d, w]], [/droid.+; (wt63?0{2,3})\)/i], [c, [f, D], [d, w]], [/(quest( 2| pro)?)/i], [c, [f, U], [d, w]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [f, [d, E]], [/(aeobc)\b/i], [c, [f, _], [d, E]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [c, [d, v]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [d, b]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[d, b]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[d, v]], [/(android[-\w\. ]{0,9});.+buil/i], [c, [f, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [h, [p, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [h, [p, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [p, h], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [h, p]], os: [[/microsoft (windows) (vista|xp)/i], [p, h], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [p, [h, W, K]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[p, "Windows"], [h, W, K]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[h, /_/g, "."], [p, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[p, V], [h, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [h, p], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [p, h], [/\(bb(10);/i], [h, [p, R]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [h, [p, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [h, [p, P + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [h, [p, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [h, [p, "watchOS"]], [/crkey\/([\d\.]+)/i], [h, [p, T + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[p, B], h], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [p, h], [/(sunos) ?([\w\.\d]*)/i], [[p, "Solaris"], h], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [p, h]] }, Y = function(e2, t3) {
            if (typeof e2 === s && (t3 = e2, e2 = void 0), !(this instanceof Y)) return new Y(e2, t3).getResult();
            var r3 = typeof n2 !== a && n2.navigator ? n2.navigator : void 0, i3 = e2 || (r3 && r3.userAgent ? r3.userAgent : ""), m2 = r3 && r3.userAgentData ? r3.userAgentData : void 0, y2 = t3 ? q(J, t3) : J, w2 = r3 && r3.userAgent == i3;
            return this.getBrowser = function() {
              var e3, t4 = {};
              return t4[p] = void 0, t4[h] = void 0, z.call(t4, i3, y2.browser), t4[u] = typeof (e3 = t4[h]) === l ? e3.replace(/[^\d\.]/g, "").split(".")[0] : void 0, w2 && r3 && r3.brave && typeof r3.brave.isBrave == o2 && (t4[p] = "Brave"), t4;
            }, this.getCPU = function() {
              var e3 = {};
              return e3[g] = void 0, z.call(e3, i3, y2.cpu), e3;
            }, this.getDevice = function() {
              var e3 = {};
              return e3[f] = void 0, e3[c] = void 0, e3[d] = void 0, z.call(e3, i3, y2.device), w2 && !e3[d] && m2 && m2.mobile && (e3[d] = v), w2 && "Macintosh" == e3[c] && r3 && typeof r3.standalone !== a && r3.maxTouchPoints && r3.maxTouchPoints > 2 && (e3[c] = "iPad", e3[d] = b), e3;
            }, this.getEngine = function() {
              var e3 = {};
              return e3[p] = void 0, e3[h] = void 0, z.call(e3, i3, y2.engine), e3;
            }, this.getOS = function() {
              var e3 = {};
              return e3[p] = void 0, e3[h] = void 0, z.call(e3, i3, y2.os), w2 && !e3[p] && m2 && "Unknown" != m2.platform && (e3[p] = m2.platform.replace(/chrome os/i, B).replace(/macos/i, V)), e3;
            }, this.getResult = function() {
              return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
            }, this.getUA = function() {
              return i3;
            }, this.setUA = function(e3) {
              return i3 = typeof e3 === l && e3.length > 350 ? X(e3, 350) : e3, this;
            }, this.setUA(i3), this;
          };
          if (Y.VERSION = "1.0.35", Y.BROWSER = G([p, h, u]), Y.CPU = G([g]), Y.DEVICE = G([c, f, d, m, v, y, b, w, E]), Y.ENGINE = Y.OS = G([p, h]), typeof r2 !== a) t2.exports && (r2 = t2.exports = Y), r2.UAParser = Y;
          else if (typeof define === o2 && define.amd) e.r, void 0 !== Y && e.v(Y);
          else typeof n2 !== a && (n2.UAParser = Y);
          var Z = typeof n2 !== a && (n2.jQuery || n2.Zepto);
          if (Z && !Z.ua) {
            var Q = new Y();
            Z.ua = Q.getResult(), Z.ua.get = function() {
              return Q.getUA();
            }, Z.ua.set = function(e2) {
              Q.setUA(e2);
              var t3 = Q.getResult();
              for (var r3 in t3) Z.ua[r3] = t3[r3];
            };
          }
        }(this);
      } }, i = {};
      function o(e2) {
        var t2 = i[e2];
        if (void 0 !== t2) return t2.exports;
        var r2 = i[e2] = { exports: {} }, a = true;
        try {
          n[e2].call(r2.exports, r2, r2.exports, o), a = false;
        } finally {
          a && delete i[e2];
        }
        return r2.exports;
      }
      o.ab = "/ROOT/node_modules/next/dist/compiled/ua-parser-js/", t.exports = o(226);
    }, 8946, (e, t, r) => {
      "use strict";
      var n = { H: null, A: null };
      function i(e2) {
        var t2 = "https://react.dev/errors/" + e2;
        if (1 < arguments.length) {
          t2 += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var r2 = 2; r2 < arguments.length; r2++) t2 += "&args[]=" + encodeURIComponent(arguments[r2]);
        }
        return "Minified React error #" + e2 + "; visit " + t2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var o = Array.isArray;
      function a() {
      }
      var s = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), m = Symbol.for("react.activity"), v = Symbol.for("react.view_transition"), b = Symbol.iterator, y = Object.prototype.hasOwnProperty, w = Object.assign;
      function E(e2, t2, r2) {
        var n2 = r2.ref;
        return { $$typeof: s, type: e2, key: t2, ref: void 0 !== n2 ? n2 : null, props: r2 };
      }
      function _(e2) {
        return "object" == typeof e2 && null !== e2 && e2.$$typeof === s;
      }
      var S = /\/+/g;
      function x(e2, t2) {
        var r2, n2;
        return "object" == typeof e2 && null !== e2 && null != e2.key ? (r2 = "" + e2.key, n2 = { "=": "=0", ":": "=2" }, "$" + r2.replace(/[=:]/g, function(e3) {
          return n2[e3];
        })) : t2.toString(36);
      }
      function R(e2, t2, r2) {
        if (null == e2) return e2;
        var n2 = [], u2 = 0;
        return !function e3(t3, r3, n3, u3, c2) {
          var p2, d2, f2, h2 = typeof t3;
          ("undefined" === h2 || "boolean" === h2) && (t3 = null);
          var m2 = false;
          if (null === t3) m2 = true;
          else switch (h2) {
            case "bigint":
            case "string":
            case "number":
              m2 = true;
              break;
            case "object":
              switch (t3.$$typeof) {
                case s:
                case l:
                  m2 = true;
                  break;
                case g:
                  return e3((m2 = t3._init)(t3._payload), r3, n3, u3, c2);
              }
          }
          if (m2) return c2 = c2(t3), m2 = "" === u3 ? "." + x(t3, 0) : u3, o(c2) ? (n3 = "", null != m2 && (n3 = m2.replace(S, "$&/") + "/"), e3(c2, r3, n3, "", function(e4) {
            return e4;
          })) : null != c2 && (_(c2) && (p2 = c2, d2 = n3 + (null == c2.key || t3 && t3.key === c2.key ? "" : ("" + c2.key).replace(S, "$&/") + "/") + m2, c2 = E(p2.type, d2, p2.props)), r3.push(c2)), 1;
          m2 = 0;
          var v2 = "" === u3 ? "." : u3 + ":";
          if (o(t3)) for (var y2 = 0; y2 < t3.length; y2++) h2 = v2 + x(u3 = t3[y2], y2), m2 += e3(u3, r3, n3, h2, c2);
          else if ("function" == typeof (y2 = null === (f2 = t3) || "object" != typeof f2 ? null : "function" == typeof (f2 = b && f2[b] || f2["@@iterator"]) ? f2 : null)) for (t3 = y2.call(t3), y2 = 0; !(u3 = t3.next()).done; ) h2 = v2 + x(u3 = u3.value, y2++), m2 += e3(u3, r3, n3, h2, c2);
          else if ("object" === h2) {
            if ("function" == typeof t3.then) return e3(function(e4) {
              switch (e4.status) {
                case "fulfilled":
                  return e4.value;
                case "rejected":
                  throw e4.reason;
                default:
                  switch ("string" == typeof e4.status ? e4.then(a, a) : (e4.status = "pending", e4.then(function(t4) {
                    "pending" === e4.status && (e4.status = "fulfilled", e4.value = t4);
                  }, function(t4) {
                    "pending" === e4.status && (e4.status = "rejected", e4.reason = t4);
                  })), e4.status) {
                    case "fulfilled":
                      return e4.value;
                    case "rejected":
                      throw e4.reason;
                  }
              }
              throw e4;
            }(t3), r3, n3, u3, c2);
            throw Error(i(31, "[object Object]" === (r3 = String(t3)) ? "object with keys {" + Object.keys(t3).join(", ") + "}" : r3));
          }
          return m2;
        }(e2, n2, "", "", function(e3) {
          return t2.call(r2, e3, u2++);
        }), n2;
      }
      function O(e2) {
        if (-1 === e2._status) {
          var t2 = e2._result;
          (t2 = t2()).then(function(t3) {
            (0 === e2._status || -1 === e2._status) && (e2._status = 1, e2._result = t3);
          }, function(t3) {
            (0 === e2._status || -1 === e2._status) && (e2._status = 2, e2._result = t3);
          }), -1 === e2._status && (e2._status = 0, e2._result = t2);
        }
        if (1 === e2._status) return e2._result.default;
        throw e2._result;
      }
      function T() {
        return /* @__PURE__ */ new WeakMap();
      }
      function P() {
        return { s: 0, v: void 0, o: null, p: null };
      }
      r.Activity = m, r.Children = { map: R, forEach: function(e2, t2, r2) {
        R(e2, function() {
          t2.apply(this, arguments);
        }, r2);
      }, count: function(e2) {
        var t2 = 0;
        return R(e2, function() {
          t2++;
        }), t2;
      }, toArray: function(e2) {
        return R(e2, function(e3) {
          return e3;
        }) || [];
      }, only: function(e2) {
        if (!_(e2)) throw Error(i(143));
        return e2;
      } }, r.Fragment = u, r.Profiler = p, r.StrictMode = c, r.Suspense = f, r.ViewTransition = v, r.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, r.cache = function(e2) {
        return function() {
          var t2 = n.A;
          if (!t2) return e2.apply(null, arguments);
          var r2 = t2.getCacheForType(T);
          void 0 === (t2 = r2.get(e2)) && (t2 = P(), r2.set(e2, t2)), r2 = 0;
          for (var i2 = arguments.length; r2 < i2; r2++) {
            var o2 = arguments[r2];
            if ("function" == typeof o2 || "object" == typeof o2 && null !== o2) {
              var a2 = t2.o;
              null === a2 && (t2.o = a2 = /* @__PURE__ */ new WeakMap()), void 0 === (t2 = a2.get(o2)) && (t2 = P(), a2.set(o2, t2));
            } else null === (a2 = t2.p) && (t2.p = a2 = /* @__PURE__ */ new Map()), void 0 === (t2 = a2.get(o2)) && (t2 = P(), a2.set(o2, t2));
          }
          if (1 === t2.s) return t2.v;
          if (2 === t2.s) throw t2.v;
          try {
            var s2 = e2.apply(null, arguments);
            return (r2 = t2).s = 1, r2.v = s2;
          } catch (e3) {
            throw (s2 = t2).s = 2, s2.v = e3, e3;
          }
        };
      }, r.cacheSignal = function() {
        var e2 = n.A;
        return e2 ? e2.cacheSignal() : null;
      }, r.captureOwnerStack = function() {
        return null;
      }, r.cloneElement = function(e2, t2, r2) {
        if (null == e2) throw Error(i(267, e2));
        var n2 = w({}, e2.props), o2 = e2.key;
        if (null != t2) for (a2 in void 0 !== t2.key && (o2 = "" + t2.key), t2) y.call(t2, a2) && "key" !== a2 && "__self" !== a2 && "__source" !== a2 && ("ref" !== a2 || void 0 !== t2.ref) && (n2[a2] = t2[a2]);
        var a2 = arguments.length - 2;
        if (1 === a2) n2.children = r2;
        else if (1 < a2) {
          for (var s2 = Array(a2), l2 = 0; l2 < a2; l2++) s2[l2] = arguments[l2 + 2];
          n2.children = s2;
        }
        return E(e2.type, o2, n2);
      }, r.createElement = function(e2, t2, r2) {
        var n2, i2 = {}, o2 = null;
        if (null != t2) for (n2 in void 0 !== t2.key && (o2 = "" + t2.key), t2) y.call(t2, n2) && "key" !== n2 && "__self" !== n2 && "__source" !== n2 && (i2[n2] = t2[n2]);
        var a2 = arguments.length - 2;
        if (1 === a2) i2.children = r2;
        else if (1 < a2) {
          for (var s2 = Array(a2), l2 = 0; l2 < a2; l2++) s2[l2] = arguments[l2 + 2];
          i2.children = s2;
        }
        if (e2 && e2.defaultProps) for (n2 in a2 = e2.defaultProps) void 0 === i2[n2] && (i2[n2] = a2[n2]);
        return E(e2, o2, i2);
      }, r.createRef = function() {
        return { current: null };
      }, r.forwardRef = function(e2) {
        return { $$typeof: d, render: e2 };
      }, r.isValidElement = _, r.lazy = function(e2) {
        return { $$typeof: g, _payload: { _status: -1, _result: e2 }, _init: O };
      }, r.memo = function(e2, t2) {
        return { $$typeof: h, type: e2, compare: void 0 === t2 ? null : t2 };
      }, r.use = function(e2) {
        return n.H.use(e2);
      }, r.useCallback = function(e2, t2) {
        return n.H.useCallback(e2, t2);
      }, r.useDebugValue = function() {
      }, r.useId = function() {
        return n.H.useId();
      }, r.useMemo = function(e2, t2) {
        return n.H.useMemo(e2, t2);
      }, r.version = "19.3.0-canary-f93b9fd4-20251217";
    }, 40049, (e, t, r) => {
      "use strict";
      t.exports = e.r(8946);
    }, 43383, (e, t, r) => {
      var n = e.r(51615), i = n.Buffer;
      function o(e2, t2) {
        for (var r2 in e2) t2[r2] = e2[r2];
      }
      function a(e2, t2, r2) {
        return i(e2, t2, r2);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, r), r.Buffer = a), a.prototype = Object.create(i.prototype), o(i, a), a.from = function(e2, t2, r2) {
        if ("number" == typeof e2) throw TypeError("Argument must not be a number");
        return i(e2, t2, r2);
      }, a.alloc = function(e2, t2, r2) {
        if ("number" != typeof e2) throw TypeError("Argument must be a number");
        var n2 = i(e2);
        return void 0 !== t2 ? "string" == typeof r2 ? n2.fill(t2, r2) : n2.fill(t2) : n2.fill(0), n2;
      }, a.allocUnsafe = function(e2) {
        if ("number" != typeof e2) throw TypeError("Argument must be a number");
        return i(e2);
      }, a.allocUnsafeSlow = function(e2) {
        if ("number" != typeof e2) throw TypeError("Argument must be a number");
        return n.SlowBuffer(e2);
      };
    }, 36731, (e) => {
      "use strict";
      e.n(__import_unsupported("stream"));
    }, 12057, (e, t, r) => {
      t.exports = e.x("node:util", () => (init_node_util(), __toCommonJS(node_util_exports)));
    }, 63360, (e, t, r) => {
      var n = e.r(43383).Buffer, i = e.r(36731);
      function o(e2) {
        if (this.buffer = null, this.writable = true, this.readable = true, !e2) return this.buffer = n.alloc(0), this;
        if ("function" == typeof e2.pipe) return this.buffer = n.alloc(0), e2.pipe(this), this;
        if (e2.length || "object" == typeof e2) return this.buffer = e2, this.writable = false, process.nextTick(function() {
          this.emit("end", e2), this.readable = false, this.emit("close");
        }.bind(this)), this;
        throw TypeError("Unexpected data type (" + typeof e2 + ")");
      }
      e.r(12057).inherits(o, i), o.prototype.write = function(e2) {
        this.buffer = n.concat([this.buffer, n.from(e2)]), this.emit("data", e2);
      }, o.prototype.end = function(e2) {
        e2 && this.write(e2), this.emit("end", e2), this.emit("close"), this.writable = false, this.readable = false;
      }, t.exports = o;
    }, 90894, (e) => {
      "use strict";
      e.n(__import_unsupported("crypto"));
    }, 28230, (e, t, r) => {
      "use strict";
      function n(e2) {
        return (e2 / 8 | 0) + +(e2 % 8 != 0);
      }
      var i = { ES256: n(256), ES384: n(384), ES512: n(521) };
      t.exports = function(e2) {
        var t2 = i[e2];
        if (t2) return t2;
        throw Error('Unknown algorithm "' + e2 + '"');
      };
    }, 4308, (e, t, r) => {
      "use strict";
      var n = e.r(43383).Buffer, i = e.r(28230);
      function o(e2) {
        if (n.isBuffer(e2)) return e2;
        if ("string" == typeof e2) return n.from(e2, "base64");
        throw TypeError("ECDSA signature must be a Base64 string or a Buffer");
      }
      function a(e2, t2, r2) {
        for (var n2 = 0; t2 + n2 < r2 && 0 === e2[t2 + n2]; ) ++n2;
        return e2[t2 + n2] >= 128 && --n2, n2;
      }
      t.exports = { derToJose: function(e2, t2) {
        e2 = o(e2);
        var r2 = i(t2), a2 = r2 + 1, s = e2.length, l = 0;
        if (48 !== e2[l++]) throw Error('Could not find expected "seq"');
        var u = e2[l++];
        if (129 === u && (u = e2[l++]), s - l < u) throw Error('"seq" specified length of "' + u + '", only "' + (s - l) + '" remaining');
        if (2 !== e2[l++]) throw Error('Could not find expected "int" for "r"');
        var c = e2[l++];
        if (s - l - 2 < c) throw Error('"r" specified length of "' + c + '", only "' + (s - l - 2) + '" available');
        if (a2 < c) throw Error('"r" specified length of "' + c + '", max of "' + a2 + '" is acceptable');
        var p = l;
        if (l += c, 2 !== e2[l++]) throw Error('Could not find expected "int" for "s"');
        var d = e2[l++];
        if (s - l !== d) throw Error('"s" specified length of "' + d + '", expected "' + (s - l) + '"');
        if (a2 < d) throw Error('"s" specified length of "' + d + '", max of "' + a2 + '" is acceptable');
        var f = l;
        if ((l += d) !== s) throw Error('Expected to consume entire buffer, but "' + (s - l) + '" bytes remain');
        var h = r2 - c, g = r2 - d, m = n.allocUnsafe(h + c + g + d);
        for (l = 0; l < h; ++l) m[l] = 0;
        e2.copy(m, l, p + Math.max(-h, 0), p + c), l = r2;
        for (var v = l; l < v + g; ++l) m[l] = 0;
        return e2.copy(m, l, f + Math.max(-g, 0), f + d), m = (m = m.toString("base64")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }, joseToDer: function(e2, t2) {
        e2 = o(e2);
        var r2 = i(t2), s = e2.length;
        if (s !== 2 * r2) throw TypeError('"' + t2 + '" signatures must be "' + 2 * r2 + '" bytes, saw "' + s + '"');
        var l = a(e2, 0, r2), u = a(e2, r2, e2.length), c = r2 - l, p = r2 - u, d = 2 + c + 1 + 1 + p, f = d < 128, h = n.allocUnsafe((f ? 2 : 3) + d), g = 0;
        return h[g++] = 48, f ? h[g++] = d : (h[g++] = 129, h[g++] = 255 & d), h[g++] = 2, h[g++] = c, l < 0 ? (h[g++] = 0, g += e2.copy(h, g, 0, r2)) : g += e2.copy(h, g, l, r2), h[g++] = 2, h[g++] = p, u < 0 ? (h[g++] = 0, e2.copy(h, g, r2)) : e2.copy(h, g, r2 + u), h;
      } };
    }, 2471, (e, t, r) => {
      "use strict";
      var n = e.r(51615).Buffer, i = e.r(51615).SlowBuffer;
      function o(e2, t2) {
        if (!n.isBuffer(e2) || !n.isBuffer(t2) || e2.length !== t2.length) return false;
        for (var r2 = 0, i2 = 0; i2 < e2.length; i2++) r2 |= e2[i2] ^ t2[i2];
        return 0 === r2;
      }
      t.exports = o, o.install = function() {
        n.prototype.equal = i.prototype.equal = function(e2) {
          return o(this, e2);
        };
      };
      var a = n.prototype.equal, s = i.prototype.equal;
      o.restore = function() {
        n.prototype.equal = a, i.prototype.equal = s;
      };
    }, 77259, (e, t, r) => {
      var n, i = e.r(43383).Buffer, o = e.r(90894), a = e.r(4308), s = e.r(12057), l = "secret must be a string or buffer", u = "key must be a string or a buffer", c = "function" == typeof o.createPublicKey;
      function p(e2) {
        if (!i.isBuffer(e2) && "string" != typeof e2 && (!c || "object" != typeof e2 || "string" != typeof e2.type || "string" != typeof e2.asymmetricKeyType || "function" != typeof e2.export)) throw g(u);
      }
      function d(e2) {
        if (!i.isBuffer(e2) && "string" != typeof e2 && "object" != typeof e2) throw g("key must be a string, a buffer or an object");
      }
      function f(e2) {
        return e2.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }
      function h(e2) {
        var t2 = 4 - (e2 = e2.toString()).length % 4;
        if (4 !== t2) for (var r2 = 0; r2 < t2; ++r2) e2 += "=";
        return e2.replace(/\-/g, "+").replace(/_/g, "/");
      }
      function g(e2) {
        var t2 = [].slice.call(arguments, 1);
        return TypeError(s.format.bind(s, e2).apply(null, t2));
      }
      function m(e2) {
        var t2;
        return t2 = e2, i.isBuffer(t2) || "string" == typeof t2 || (e2 = JSON.stringify(e2)), e2;
      }
      function v(e2) {
        return function(t2, r2) {
          !function(e3) {
            if (!i.isBuffer(e3)) {
              if ("string" != typeof e3) {
                if (!c || "object" != typeof e3 || "secret" !== e3.type || "function" != typeof e3.export) throw g(l);
              }
            }
          }(r2), t2 = m(t2);
          var n2 = o.createHmac("sha" + e2, r2);
          return f((n2.update(t2), n2.digest("base64")));
        };
      }
      c && (u += " or a KeyObject", l += "or a KeyObject");
      var b = "timingSafeEqual" in o ? function(e2, t2) {
        return e2.byteLength === t2.byteLength && o.timingSafeEqual(e2, t2);
      } : function(t2, r2) {
        return n || (n = e.r(2471)), n(t2, r2);
      };
      function y(e2) {
        return function(t2, r2, n2) {
          var o2 = v(e2)(t2, n2);
          return b(i.from(r2), i.from(o2));
        };
      }
      function w(e2) {
        return function(t2, r2) {
          d(r2), t2 = m(t2);
          var n2 = o.createSign("RSA-SHA" + e2);
          return f((n2.update(t2), n2.sign(r2, "base64")));
        };
      }
      function E(e2) {
        return function(t2, r2, n2) {
          p(n2), t2 = m(t2), r2 = h(r2);
          var i2 = o.createVerify("RSA-SHA" + e2);
          return i2.update(t2), i2.verify(n2, r2, "base64");
        };
      }
      function _(e2) {
        return function(t2, r2) {
          d(r2), t2 = m(t2);
          var n2 = o.createSign("RSA-SHA" + e2);
          return f((n2.update(t2), n2.sign({ key: r2, padding: o.constants.RSA_PKCS1_PSS_PADDING, saltLength: o.constants.RSA_PSS_SALTLEN_DIGEST }, "base64")));
        };
      }
      function S(e2) {
        return function(t2, r2, n2) {
          p(n2), t2 = m(t2), r2 = h(r2);
          var i2 = o.createVerify("RSA-SHA" + e2);
          return i2.update(t2), i2.verify({ key: n2, padding: o.constants.RSA_PKCS1_PSS_PADDING, saltLength: o.constants.RSA_PSS_SALTLEN_DIGEST }, r2, "base64");
        };
      }
      function x(e2) {
        var t2 = w(e2);
        return function() {
          var r2 = t2.apply(null, arguments);
          return a.derToJose(r2, "ES" + e2);
        };
      }
      function R(e2) {
        var t2 = E(e2);
        return function(r2, n2, i2) {
          return t2(r2, n2 = a.joseToDer(n2, "ES" + e2).toString("base64"), i2);
        };
      }
      function O() {
        return function() {
          return "";
        };
      }
      function T() {
        return function(e2, t2) {
          return "" === t2;
        };
      }
      t.exports = function(e2) {
        var t2 = e2.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
        if (!t2) throw g('"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".', e2);
        var r2 = (t2[1] || t2[3]).toLowerCase(), n2 = t2[2];
        return { sign: { hs: v, rs: w, ps: _, es: x, none: O }[r2](n2), verify: { hs: y, rs: E, ps: S, es: R, none: T }[r2](n2) };
      };
    }, 38810, (e, t, r) => {
      var n = e.r(51615).Buffer;
      t.exports = function(e2) {
        return "string" == typeof e2 ? e2 : "number" == typeof e2 || n.isBuffer(e2) ? e2.toString() : JSON.stringify(e2);
      };
    }, 72683, (e, t, r) => {
      var n = e.r(43383).Buffer, i = e.r(63360), o = e.r(77259), a = e.r(36731), s = e.r(38810), l = e.r(12057);
      function u(e2, t2) {
        return n.from(e2, t2).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }
      function c(e2) {
        var t2, r2, n2, i2 = e2.header, a2 = e2.payload, c2 = e2.secret || e2.privateKey, p2 = e2.encoding, d = o(i2.alg), f = (t2 = (t2 = p2) || "utf8", r2 = u(s(i2), "binary"), n2 = u(s(a2), t2), l.format("%s.%s", r2, n2)), h = d.sign(f, c2);
        return l.format("%s.%s", f, h);
      }
      function p(e2) {
        var t2 = e2.secret;
        if (t2 = null == (t2 = null == t2 ? e2.privateKey : t2) ? e2.key : t2, true === /^hs/i.test(e2.header.alg) && null == t2) throw TypeError("secret must be a string or buffer or a KeyObject");
        var r2 = new i(t2);
        this.readable = true, this.header = e2.header, this.encoding = e2.encoding, this.secret = this.privateKey = this.key = r2, this.payload = new i(e2.payload), this.secret.once("close", function() {
          !this.payload.writable && this.readable && this.sign();
        }.bind(this)), this.payload.once("close", function() {
          !this.secret.writable && this.readable && this.sign();
        }.bind(this));
      }
      l.inherits(p, a), p.prototype.sign = function() {
        try {
          var e2 = c({ header: this.header, payload: this.payload.buffer, secret: this.secret.buffer, encoding: this.encoding });
          return this.emit("done", e2), this.emit("data", e2), this.emit("end"), this.readable = false, e2;
        } catch (e3) {
          this.readable = false, this.emit("error", e3), this.emit("close");
        }
      }, p.sign = c, t.exports = p;
    }, 99159, (e, t, r) => {
      var n = e.r(43383).Buffer, i = e.r(63360), o = e.r(77259), a = e.r(36731), s = e.r(38810), l = e.r(12057), u = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
      function c(e2) {
        var t2 = e2.split(".", 1)[0], r2 = n.from(t2, "base64").toString("binary");
        if ("[object Object]" === Object.prototype.toString.call(r2)) return r2;
        try {
          return JSON.parse(r2);
        } catch (e3) {
          return;
        }
      }
      function p(e2) {
        return e2.split(".")[2];
      }
      function d(e2) {
        return u.test(e2) && !!c(e2);
      }
      function f(e2, t2, r2) {
        if (!t2) {
          var n2 = Error("Missing algorithm parameter for jws.verify");
          throw n2.code = "MISSING_ALGORITHM", n2;
        }
        var i2 = p(e2 = s(e2)), a2 = e2.split(".", 2).join(".");
        return o(t2).verify(a2, i2, r2);
      }
      function h(e2, t2) {
        if (t2 = t2 || {}, !d(e2 = s(e2))) return null;
        var r2, i2, o2 = c(e2);
        if (!o2) return null;
        var a2 = (r2 = r2 || "utf8", i2 = e2.split(".")[1], n.from(i2, "base64").toString(r2));
        return ("JWT" === o2.typ || t2.json) && (a2 = JSON.parse(a2, t2.encoding)), { header: o2, payload: a2, signature: p(e2) };
      }
      function g(e2) {
        var t2 = (e2 = e2 || {}).secret;
        if (t2 = null == (t2 = null == t2 ? e2.publicKey : t2) ? e2.key : t2, true === /^hs/i.test(e2.algorithm) && null == t2) throw TypeError("secret must be a string or buffer or a KeyObject");
        var r2 = new i(t2);
        this.readable = true, this.algorithm = e2.algorithm, this.encoding = e2.encoding, this.secret = this.publicKey = this.key = r2, this.signature = new i(e2.signature), this.secret.once("close", function() {
          !this.signature.writable && this.readable && this.verify();
        }.bind(this)), this.signature.once("close", function() {
          !this.secret.writable && this.readable && this.verify();
        }.bind(this));
      }
      l.inherits(g, a), g.prototype.verify = function() {
        try {
          var e2 = f(this.signature.buffer, this.algorithm, this.key.buffer), t2 = h(this.signature.buffer, this.encoding);
          return this.emit("done", e2, t2), this.emit("data", e2), this.emit("end"), this.readable = false, e2;
        } catch (e3) {
          this.readable = false, this.emit("error", e3), this.emit("close");
        }
      }, g.decode = h, g.isValid = d, g.verify = f, t.exports = g;
    }, 5966, (e, t, r) => {
      var n = e.r(72683), i = e.r(99159);
      r.ALGORITHMS = ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512"], r.sign = n.sign, r.verify = i.verify, r.decode = i.decode, r.isValid = i.isValid, r.createSign = function(e2) {
        return new n(e2);
      }, r.createVerify = function(e2) {
        return new i(e2);
      };
    }, 91120, (e, t, r) => {
      var n = e.r(5966);
      t.exports = function(e2, t2) {
        t2 = t2 || {};
        var r2 = n.decode(e2, t2);
        if (!r2) return null;
        var i = r2.payload;
        if ("string" == typeof i) try {
          var o = JSON.parse(i);
          null !== o && "object" == typeof o && (i = o);
        } catch (e3) {
        }
        return true === t2.complete ? { header: r2.header, payload: i, signature: r2.signature } : i;
      };
    }, 83669, (e, t, r) => {
      var n = function(e2, t2) {
        Error.call(this, e2), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "JsonWebTokenError", this.message = e2, t2 && (this.inner = t2);
      };
      n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, t.exports = n;
    }, 15196, (e, t, r) => {
      var n = e.r(83669), i = function(e2, t2) {
        n.call(this, e2), this.name = "NotBeforeError", this.date = t2;
      };
      i.prototype = Object.create(n.prototype), i.prototype.constructor = i, t.exports = i;
    }, 95296, (e, t, r) => {
      var n = e.r(83669), i = function(e2, t2) {
        n.call(this, e2), this.name = "TokenExpiredError", this.expiredAt = t2;
      };
      i.prototype = Object.create(n.prototype), i.prototype.constructor = i, t.exports = i;
    }, 79044, (e, t, r) => {
      function n(e2, t2, r2, n2) {
        return Math.round(e2 / r2) + " " + n2 + (t2 >= 1.5 * r2 ? "s" : "");
      }
      t.exports = function(e2, t2) {
        t2 = t2 || {};
        var r2, i, o, a, s = typeof e2;
        if ("string" === s && e2.length > 0) {
          var l = e2;
          if (!((l = String(l)).length > 100)) {
            var u = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(l);
            if (u) {
              var c = parseFloat(u[1]);
              switch ((u[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return 315576e5 * c;
                case "weeks":
                case "week":
                case "w":
                  return 6048e5 * c;
                case "days":
                case "day":
                case "d":
                  return 864e5 * c;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return 36e5 * c;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return 6e4 * c;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return 1e3 * c;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return c;
                default:
                  break;
              }
            }
          }
          return;
        }
        if ("number" === s && isFinite(e2)) {
          return t2.long ? (i = Math.abs(r2 = e2)) >= 864e5 ? n(r2, i, 864e5, "day") : i >= 36e5 ? n(r2, i, 36e5, "hour") : i >= 6e4 ? n(r2, i, 6e4, "minute") : i >= 1e3 ? n(r2, i, 1e3, "second") : r2 + " ms" : (a = Math.abs(o = e2)) >= 864e5 ? Math.round(o / 864e5) + "d" : a >= 36e5 ? Math.round(o / 36e5) + "h" : a >= 6e4 ? Math.round(o / 6e4) + "m" : a >= 1e3 ? Math.round(o / 1e3) + "s" : o + "ms";
        }
        throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e2));
      };
    }, 76069, (e, t, r) => {
      var n = e.r(79044);
      t.exports = function(e2, t2) {
        var r2 = t2 || Math.floor(Date.now() / 1e3);
        if ("string" == typeof e2) {
          var i = n(e2);
          if (void 0 === i) return;
          return Math.floor(r2 + i / 1e3);
        }
        if ("number" == typeof e2) return r2 + e2;
      };
    }, 42310, (e, t, r) => {
      "use strict";
      t.exports = { MAX_LENGTH: 256, MAX_SAFE_COMPONENT_LENGTH: 16, MAX_SAFE_BUILD_LENGTH: 250, MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991, RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"], SEMVER_SPEC_VERSION: "2.0.0", FLAG_INCLUDE_PRERELEASE: 1, FLAG_LOOSE: 2 };
    }, 52998, (e, t, r) => {
      "use strict";
      t.exports = "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e2) => console.error("SEMVER", ...e2) : () => {
      };
    }, 70583, (e, t, r) => {
      "use strict";
      let { MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: i, MAX_LENGTH: o } = e.r(42310), a = e.r(52998), s = (r = t.exports = {}).re = [], l = r.safeRe = [], u = r.src = [], c = r.safeSrc = [], p = r.t = {}, d = 0, f = "[a-zA-Z0-9-]", h = [["\\s", 1], ["\\d", o], [f, i]], g = (e2, t2, r2) => {
        let n2 = ((e3) => {
          for (let [t3, r3] of h) e3 = e3.split(`${t3}*`).join(`${t3}{0,${r3}}`).split(`${t3}+`).join(`${t3}{1,${r3}}`);
          return e3;
        })(t2), i2 = d++;
        a(e2, i2, t2), p[e2] = i2, u[i2] = t2, c[i2] = n2, s[i2] = new RegExp(t2, r2 ? "g" : void 0), l[i2] = new RegExp(n2, r2 ? "g" : void 0);
      };
      g("NUMERICIDENTIFIER", "0|[1-9]\\d*"), g("NUMERICIDENTIFIERLOOSE", "\\d+"), g("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${f}*`), g("MAINVERSION", `(${u[p.NUMERICIDENTIFIER]})\\.(${u[p.NUMERICIDENTIFIER]})\\.(${u[p.NUMERICIDENTIFIER]})`), g("MAINVERSIONLOOSE", `(${u[p.NUMERICIDENTIFIERLOOSE]})\\.(${u[p.NUMERICIDENTIFIERLOOSE]})\\.(${u[p.NUMERICIDENTIFIERLOOSE]})`), g("PRERELEASEIDENTIFIER", `(?:${u[p.NONNUMERICIDENTIFIER]}|${u[p.NUMERICIDENTIFIER]})`), g("PRERELEASEIDENTIFIERLOOSE", `(?:${u[p.NONNUMERICIDENTIFIER]}|${u[p.NUMERICIDENTIFIERLOOSE]})`), g("PRERELEASE", `(?:-(${u[p.PRERELEASEIDENTIFIER]}(?:\\.${u[p.PRERELEASEIDENTIFIER]})*))`), g("PRERELEASELOOSE", `(?:-?(${u[p.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[p.PRERELEASEIDENTIFIERLOOSE]})*))`), g("BUILDIDENTIFIER", `${f}+`), g("BUILD", `(?:\\+(${u[p.BUILDIDENTIFIER]}(?:\\.${u[p.BUILDIDENTIFIER]})*))`), g("FULLPLAIN", `v?${u[p.MAINVERSION]}${u[p.PRERELEASE]}?${u[p.BUILD]}?`), g("FULL", `^${u[p.FULLPLAIN]}$`), g("LOOSEPLAIN", `[v=\\s]*${u[p.MAINVERSIONLOOSE]}${u[p.PRERELEASELOOSE]}?${u[p.BUILD]}?`), g("LOOSE", `^${u[p.LOOSEPLAIN]}$`), g("GTLT", "((?:<|>)?=?)"), g("XRANGEIDENTIFIERLOOSE", `${u[p.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), g("XRANGEIDENTIFIER", `${u[p.NUMERICIDENTIFIER]}|x|X|\\*`), g("XRANGEPLAIN", `[v=\\s]*(${u[p.XRANGEIDENTIFIER]})(?:\\.(${u[p.XRANGEIDENTIFIER]})(?:\\.(${u[p.XRANGEIDENTIFIER]})(?:${u[p.PRERELEASE]})?${u[p.BUILD]}?)?)?`), g("XRANGEPLAINLOOSE", `[v=\\s]*(${u[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[p.XRANGEIDENTIFIERLOOSE]})(?:${u[p.PRERELEASELOOSE]})?${u[p.BUILD]}?)?)?`), g("XRANGE", `^${u[p.GTLT]}\\s*${u[p.XRANGEPLAIN]}$`), g("XRANGELOOSE", `^${u[p.GTLT]}\\s*${u[p.XRANGEPLAINLOOSE]}$`), g("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), g("COERCE", `${u[p.COERCEPLAIN]}(?:$|[^\\d])`), g("COERCEFULL", u[p.COERCEPLAIN] + `(?:${u[p.PRERELEASE]})?(?:${u[p.BUILD]})?(?:$|[^\\d])`), g("COERCERTL", u[p.COERCE], true), g("COERCERTLFULL", u[p.COERCEFULL], true), g("LONETILDE", "(?:~>?)"), g("TILDETRIM", `(\\s*)${u[p.LONETILDE]}\\s+`, true), r.tildeTrimReplace = "$1~", g("TILDE", `^${u[p.LONETILDE]}${u[p.XRANGEPLAIN]}$`), g("TILDELOOSE", `^${u[p.LONETILDE]}${u[p.XRANGEPLAINLOOSE]}$`), g("LONECARET", "(?:\\^)"), g("CARETTRIM", `(\\s*)${u[p.LONECARET]}\\s+`, true), r.caretTrimReplace = "$1^", g("CARET", `^${u[p.LONECARET]}${u[p.XRANGEPLAIN]}$`), g("CARETLOOSE", `^${u[p.LONECARET]}${u[p.XRANGEPLAINLOOSE]}$`), g("COMPARATORLOOSE", `^${u[p.GTLT]}\\s*(${u[p.LOOSEPLAIN]})$|^$`), g("COMPARATOR", `^${u[p.GTLT]}\\s*(${u[p.FULLPLAIN]})$|^$`), g("COMPARATORTRIM", `(\\s*)${u[p.GTLT]}\\s*(${u[p.LOOSEPLAIN]}|${u[p.XRANGEPLAIN]})`, true), r.comparatorTrimReplace = "$1$2$3", g("HYPHENRANGE", `^\\s*(${u[p.XRANGEPLAIN]})\\s+-\\s+(${u[p.XRANGEPLAIN]})\\s*$`), g("HYPHENRANGELOOSE", `^\\s*(${u[p.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[p.XRANGEPLAINLOOSE]})\\s*$`), g("STAR", "(<|>)?=?\\s*\\*"), g("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), g("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
    }, 53114, (e, t, r) => {
      "use strict";
      let n = Object.freeze({ loose: true }), i = Object.freeze({});
      t.exports = (e2) => e2 ? "object" != typeof e2 ? n : e2 : i;
    }, 99294, (e, t, r) => {
      "use strict";
      let n = /^[0-9]+$/, i = (e2, t2) => {
        if ("number" == typeof e2 && "number" == typeof t2) return e2 === t2 ? 0 : e2 < t2 ? -1 : 1;
        let r2 = n.test(e2), i2 = n.test(t2);
        return r2 && i2 && (e2 *= 1, t2 *= 1), e2 === t2 ? 0 : r2 && !i2 ? -1 : i2 && !r2 ? 1 : e2 < t2 ? -1 : 1;
      };
      t.exports = { compareIdentifiers: i, rcompareIdentifiers: (e2, t2) => i(t2, e2) };
    }, 11937, (e, t, r) => {
      "use strict";
      let n = e.r(52998), { MAX_LENGTH: i, MAX_SAFE_INTEGER: o } = e.r(42310), { safeRe: a, t: s } = e.r(70583), l = e.r(53114), { compareIdentifiers: u } = e.r(99294);
      class c {
        constructor(e2, t2) {
          if (t2 = l(t2), e2 instanceof c) if (!!t2.loose === e2.loose && !!t2.includePrerelease === e2.includePrerelease) return e2;
          else e2 = e2.version;
          else if ("string" != typeof e2) throw TypeError(`Invalid version. Must be a string. Got type "${typeof e2}".`);
          if (e2.length > i) throw TypeError(`version is longer than ${i} characters`);
          n("SemVer", e2, t2), this.options = t2, this.loose = !!t2.loose, this.includePrerelease = !!t2.includePrerelease;
          const r2 = e2.trim().match(t2.loose ? a[s.LOOSE] : a[s.FULL]);
          if (!r2) throw TypeError(`Invalid Version: ${e2}`);
          if (this.raw = e2, this.major = +r2[1], this.minor = +r2[2], this.patch = +r2[3], this.major > o || this.major < 0) throw TypeError("Invalid major version");
          if (this.minor > o || this.minor < 0) throw TypeError("Invalid minor version");
          if (this.patch > o || this.patch < 0) throw TypeError("Invalid patch version");
          r2[4] ? this.prerelease = r2[4].split(".").map((e3) => {
            if (/^[0-9]+$/.test(e3)) {
              let t3 = +e3;
              if (t3 >= 0 && t3 < o) return t3;
            }
            return e3;
          }) : this.prerelease = [], this.build = r2[5] ? r2[5].split(".") : [], this.format();
        }
        format() {
          return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
        }
        toString() {
          return this.version;
        }
        compare(e2) {
          if (n("SemVer.compare", this.version, this.options, e2), !(e2 instanceof c)) {
            if ("string" == typeof e2 && e2 === this.version) return 0;
            e2 = new c(e2, this.options);
          }
          return e2.version === this.version ? 0 : this.compareMain(e2) || this.comparePre(e2);
        }
        compareMain(e2) {
          return (e2 instanceof c || (e2 = new c(e2, this.options)), this.major < e2.major) ? -1 : this.major > e2.major ? 1 : this.minor < e2.minor ? -1 : this.minor > e2.minor ? 1 : this.patch < e2.patch ? -1 : +(this.patch > e2.patch);
        }
        comparePre(e2) {
          if (e2 instanceof c || (e2 = new c(e2, this.options)), this.prerelease.length && !e2.prerelease.length) return -1;
          if (!this.prerelease.length && e2.prerelease.length) return 1;
          if (!this.prerelease.length && !e2.prerelease.length) return 0;
          let t2 = 0;
          do {
            let r2 = this.prerelease[t2], i2 = e2.prerelease[t2];
            if (n("prerelease compare", t2, r2, i2), void 0 === r2 && void 0 === i2) return 0;
            if (void 0 === i2) return 1;
            if (void 0 === r2) return -1;
            else if (r2 === i2) continue;
            else return u(r2, i2);
          } while (++t2);
        }
        compareBuild(e2) {
          e2 instanceof c || (e2 = new c(e2, this.options));
          let t2 = 0;
          do {
            let r2 = this.build[t2], i2 = e2.build[t2];
            if (n("build compare", t2, r2, i2), void 0 === r2 && void 0 === i2) return 0;
            if (void 0 === i2) return 1;
            if (void 0 === r2) return -1;
            else if (r2 === i2) continue;
            else return u(r2, i2);
          } while (++t2);
        }
        inc(e2, t2, r2) {
          if (e2.startsWith("pre")) {
            if (!t2 && false === r2) throw Error("invalid increment argument: identifier is empty");
            if (t2) {
              let e3 = `-${t2}`.match(this.options.loose ? a[s.PRERELEASELOOSE] : a[s.PRERELEASE]);
              if (!e3 || e3[1] !== t2) throw Error(`invalid identifier: ${t2}`);
            }
          }
          switch (e2) {
            case "premajor":
              this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t2, r2);
              break;
            case "preminor":
              this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t2, r2);
              break;
            case "prepatch":
              this.prerelease.length = 0, this.inc("patch", t2, r2), this.inc("pre", t2, r2);
              break;
            case "prerelease":
              0 === this.prerelease.length && this.inc("patch", t2, r2), this.inc("pre", t2, r2);
              break;
            case "release":
              if (0 === this.prerelease.length) throw Error(`version ${this.raw} is not a prerelease`);
              this.prerelease.length = 0;
              break;
            case "major":
              (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
              break;
            case "minor":
              (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, this.patch = 0, this.prerelease = [];
              break;
            case "patch":
              0 === this.prerelease.length && this.patch++, this.prerelease = [];
              break;
            case "pre": {
              let e3 = +!!Number(r2);
              if (0 === this.prerelease.length) this.prerelease = [e3];
              else {
                let n2 = this.prerelease.length;
                for (; --n2 >= 0; ) "number" == typeof this.prerelease[n2] && (this.prerelease[n2]++, n2 = -2);
                if (-1 === n2) {
                  if (t2 === this.prerelease.join(".") && false === r2) throw Error("invalid increment argument: identifier already exists");
                  this.prerelease.push(e3);
                }
              }
              if (t2) {
                let n2 = [t2, e3];
                false === r2 && (n2 = [t2]), 0 === u(this.prerelease[0], t2) ? isNaN(this.prerelease[1]) && (this.prerelease = n2) : this.prerelease = n2;
              }
              break;
            }
            default:
              throw Error(`invalid increment argument: ${e2}`);
          }
          return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
        }
      }
      t.exports = c;
    }, 42986, (e, t, r) => {
      "use strict";
      let n = e.r(11937);
      t.exports = (e2, t2, r2 = false) => {
        if (e2 instanceof n) return e2;
        try {
          return new n(e2, t2);
        } catch (e3) {
          if (!r2) return null;
          throw e3;
        }
      };
    }, 81536, (e, t, r) => {
      "use strict";
      let n = e.r(42986);
      t.exports = (e2, t2) => {
        let r2 = n(e2, t2);
        return r2 ? r2.version : null;
      };
    }, 63874, (e, t, r) => {
      "use strict";
      let n = e.r(42986);
      t.exports = (e2, t2) => {
        let r2 = n(e2.trim().replace(/^[=v]+/, ""), t2);
        return r2 ? r2.version : null;
      };
    }, 99918, (e, t, r) => {
      "use strict";
      let n = e.r(11937);
      t.exports = (e2, t2, r2, i, o) => {
        "string" == typeof r2 && (o = i, i = r2, r2 = void 0);
        try {
          return new n(e2 instanceof n ? e2.version : e2, r2).inc(t2, i, o).version;
        } catch (e3) {
          return null;
        }
      };
    }, 82480, (e, t, r) => {
      "use strict";
      let n = e.r(42986);
      t.exports = (e2, t2) => {
        let r2 = n(e2, null, true), i = n(t2, null, true), o = r2.compare(i);
        if (0 === o) return null;
        let a = o > 0, s = a ? r2 : i, l = a ? i : r2, u = !!s.prerelease.length;
        if (l.prerelease.length && !u) {
          if (!l.patch && !l.minor) return "major";
          if (0 === l.compareMain(s)) return l.minor && !l.patch ? "minor" : "patch";
        }
        let c = u ? "pre" : "";
        return r2.major !== i.major ? c + "major" : r2.minor !== i.minor ? c + "minor" : r2.patch !== i.patch ? c + "patch" : "prerelease";
      };
    }, 79939, (e, t, r) => {
      "use strict";
      let n = e.r(11937);
      t.exports = (e2, t2) => new n(e2, t2).major;
    }, 8071, (e, t, r) => {
      "use strict";
      let n = e.r(11937);
      t.exports = (e2, t2) => new n(e2, t2).minor;
    }, 27901, (e, t, r) => {
      "use strict";
      let n = e.r(11937);
      t.exports = (e2, t2) => new n(e2, t2).patch;
    }, 92995, (e, t, r) => {
      "use strict";
      let n = e.r(42986);
      t.exports = (e2, t2) => {
        let r2 = n(e2, t2);
        return r2 && r2.prerelease.length ? r2.prerelease : null;
      };
    }, 29265, (e, t, r) => {
      "use strict";
      let n = e.r(11937);
      t.exports = (e2, t2, r2) => new n(e2, r2).compare(new n(t2, r2));
    }, 61553, (e, t, r) => {
      "use strict";
      let n = e.r(29265);
      t.exports = (e2, t2, r2) => n(t2, e2, r2);
    }, 55347, (e, t, r) => {
      "use strict";
      let n = e.r(29265);
      t.exports = (e2, t2) => n(e2, t2, true);
    }, 2180, (e, t, r) => {
      "use strict";
      let n = e.r(11937);
      t.exports = (e2, t2, r2) => {
        let i = new n(e2, r2), o = new n(t2, r2);
        return i.compare(o) || i.compareBuild(o);
      };
    }, 64087, (e, t, r) => {
      "use strict";
      let n = e.r(2180);
      t.exports = (e2, t2) => e2.sort((e3, r2) => n(e3, r2, t2));
    }, 20192, (e, t, r) => {
      "use strict";
      let n = e.r(2180);
      t.exports = (e2, t2) => e2.sort((e3, r2) => n(r2, e3, t2));
    }, 92949, (e, t, r) => {
      "use strict";
      let n = e.r(29265);
      t.exports = (e2, t2, r2) => n(e2, t2, r2) > 0;
    }, 7181, (e, t, r) => {
      "use strict";
      let n = e.r(29265);
      t.exports = (e2, t2, r2) => 0 > n(e2, t2, r2);
    }, 32390, (e, t, r) => {
      "use strict";
      let n = e.r(29265);
      t.exports = (e2, t2, r2) => 0 === n(e2, t2, r2);
    }, 60838, (e, t, r) => {
      "use strict";
      let n = e.r(29265);
      t.exports = (e2, t2, r2) => 0 !== n(e2, t2, r2);
    }, 5275, (e, t, r) => {
      "use strict";
      let n = e.r(29265);
      t.exports = (e2, t2, r2) => n(e2, t2, r2) >= 0;
    }, 13176, (e, t, r) => {
      "use strict";
      let n = e.r(29265);
      t.exports = (e2, t2, r2) => 0 >= n(e2, t2, r2);
    }, 80103, (e, t, r) => {
      "use strict";
      let n = e.r(32390), i = e.r(60838), o = e.r(92949), a = e.r(5275), s = e.r(7181), l = e.r(13176);
      t.exports = (e2, t2, r2, u) => {
        switch (t2) {
          case "===":
            return "object" == typeof e2 && (e2 = e2.version), "object" == typeof r2 && (r2 = r2.version), e2 === r2;
          case "!==":
            return "object" == typeof e2 && (e2 = e2.version), "object" == typeof r2 && (r2 = r2.version), e2 !== r2;
          case "":
          case "=":
          case "==":
            return n(e2, r2, u);
          case "!=":
            return i(e2, r2, u);
          case ">":
            return o(e2, r2, u);
          case ">=":
            return a(e2, r2, u);
          case "<":
            return s(e2, r2, u);
          case "<=":
            return l(e2, r2, u);
          default:
            throw TypeError(`Invalid operator: ${t2}`);
        }
      };
    }, 15393, (e, t, r) => {
      "use strict";
      let n = e.r(11937), i = e.r(42986), { safeRe: o, t: a } = e.r(70583);
      t.exports = (e2, t2) => {
        if (e2 instanceof n) return e2;
        if ("number" == typeof e2 && (e2 = String(e2)), "string" != typeof e2) return null;
        let r2 = null;
        if ((t2 = t2 || {}).rtl) {
          let n2, i2 = t2.includePrerelease ? o[a.COERCERTLFULL] : o[a.COERCERTL];
          for (; (n2 = i2.exec(e2)) && (!r2 || r2.index + r2[0].length !== e2.length); ) r2 && n2.index + n2[0].length === r2.index + r2[0].length || (r2 = n2), i2.lastIndex = n2.index + n2[1].length + n2[2].length;
          i2.lastIndex = -1;
        } else r2 = e2.match(t2.includePrerelease ? o[a.COERCEFULL] : o[a.COERCE]);
        if (null === r2) return null;
        let s = r2[2], l = r2[3] || "0", u = r2[4] || "0", c = t2.includePrerelease && r2[5] ? `-${r2[5]}` : "", p = t2.includePrerelease && r2[6] ? `+${r2[6]}` : "";
        return i(`${s}.${l}.${u}${c}${p}`, t2);
      };
    }, 99735, (e, t, r) => {
      "use strict";
      t.exports = class {
        constructor() {
          this.max = 1e3, this.map = /* @__PURE__ */ new Map();
        }
        get(e2) {
          let t2 = this.map.get(e2);
          if (void 0 !== t2) return this.map.delete(e2), this.map.set(e2, t2), t2;
        }
        delete(e2) {
          return this.map.delete(e2);
        }
        set(e2, t2) {
          if (!this.delete(e2) && void 0 !== t2) {
            if (this.map.size >= this.max) {
              let e3 = this.map.keys().next().value;
              this.delete(e3);
            }
            this.map.set(e2, t2);
          }
          return this;
        }
      };
    }, 26199, (e, t, r) => {
      "use strict";
      let n = /\s+/g;
      class i {
        constructor(e2, t2) {
          if (t2 = a(t2), e2 instanceof i) if (!!t2.loose === e2.loose && !!t2.includePrerelease === e2.includePrerelease) return e2;
          else return new i(e2.raw, t2);
          if (e2 instanceof s) return this.raw = e2.value, this.set = [[e2]], this.formatted = void 0, this;
          if (this.options = t2, this.loose = !!t2.loose, this.includePrerelease = !!t2.includePrerelease, this.raw = e2.trim().replace(n, " "), this.set = this.raw.split("||").map((e3) => this.parseRange(e3.trim())).filter((e3) => e3.length), !this.set.length) throw TypeError(`Invalid SemVer Range: ${this.raw}`);
          if (this.set.length > 1) {
            const e3 = this.set[0];
            if (this.set = this.set.filter((e4) => !v(e4[0])), 0 === this.set.length) this.set = [e3];
            else if (this.set.length > 1) {
              for (const e4 of this.set) if (1 === e4.length && b(e4[0])) {
                this.set = [e4];
                break;
              }
            }
          }
          this.formatted = void 0;
        }
        get range() {
          if (void 0 === this.formatted) {
            this.formatted = "";
            for (let e2 = 0; e2 < this.set.length; e2++) {
              e2 > 0 && (this.formatted += "||");
              let t2 = this.set[e2];
              for (let e3 = 0; e3 < t2.length; e3++) e3 > 0 && (this.formatted += " "), this.formatted += t2[e3].toString().trim();
            }
          }
          return this.formatted;
        }
        format() {
          return this.range;
        }
        toString() {
          return this.range;
        }
        parseRange(e2) {
          let t2 = ((this.options.includePrerelease && g) | (this.options.loose && m)) + ":" + e2, r2 = o.get(t2);
          if (r2) return r2;
          let n2 = this.options.loose, i2 = n2 ? c[p.HYPHENRANGELOOSE] : c[p.HYPHENRANGE];
          l("hyphen replace", e2 = e2.replace(i2, N(this.options.includePrerelease))), l("comparator trim", e2 = e2.replace(c[p.COMPARATORTRIM], d)), l("tilde trim", e2 = e2.replace(c[p.TILDETRIM], f)), l("caret trim", e2 = e2.replace(c[p.CARETTRIM], h));
          let a2 = e2.split(" ").map((e3) => w(e3, this.options)).join(" ").split(/\s+/).map((e3) => C(e3, this.options));
          n2 && (a2 = a2.filter((e3) => (l("loose invalid filter", e3, this.options), !!e3.match(c[p.COMPARATORLOOSE])))), l("range list", a2);
          let u2 = /* @__PURE__ */ new Map();
          for (let e3 of a2.map((e4) => new s(e4, this.options))) {
            if (v(e3)) return [e3];
            u2.set(e3.value, e3);
          }
          u2.size > 1 && u2.has("") && u2.delete("");
          let b2 = [...u2.values()];
          return o.set(t2, b2), b2;
        }
        intersects(e2, t2) {
          if (!(e2 instanceof i)) throw TypeError("a Range is required");
          return this.set.some((r2) => y(r2, t2) && e2.set.some((e3) => y(e3, t2) && r2.every((r3) => e3.every((e4) => r3.intersects(e4, t2)))));
        }
        test(e2) {
          if (!e2) return false;
          if ("string" == typeof e2) try {
            e2 = new u(e2, this.options);
          } catch (e3) {
            return false;
          }
          for (let t2 = 0; t2 < this.set.length; t2++) if (I(this.set[t2], e2, this.options)) return true;
          return false;
        }
      }
      t.exports = i;
      let o = new (e.r(99735))(), a = e.r(53114), s = e.r(74219), l = e.r(52998), u = e.r(11937), { safeRe: c, t: p, comparatorTrimReplace: d, tildeTrimReplace: f, caretTrimReplace: h } = e.r(70583), { FLAG_INCLUDE_PRERELEASE: g, FLAG_LOOSE: m } = e.r(42310), v = (e2) => "<0.0.0-0" === e2.value, b = (e2) => "" === e2.value, y = (e2, t2) => {
        let r2 = true, n2 = e2.slice(), i2 = n2.pop();
        for (; r2 && n2.length; ) r2 = n2.every((e3) => i2.intersects(e3, t2)), i2 = n2.pop();
        return r2;
      }, w = (e2, t2) => (l("comp", e2 = e2.replace(c[p.BUILD], ""), t2), l("caret", e2 = x(e2, t2)), l("tildes", e2 = _(e2, t2)), l("xrange", e2 = O(e2, t2)), l("stars", e2 = P(e2, t2)), e2), E = (e2) => !e2 || "x" === e2.toLowerCase() || "*" === e2, _ = (e2, t2) => e2.trim().split(/\s+/).map((e3) => S(e3, t2)).join(" "), S = (e2, t2) => {
        let r2 = t2.loose ? c[p.TILDELOOSE] : c[p.TILDE];
        return e2.replace(r2, (t3, r3, n2, i2, o2) => {
          let a2;
          return l("tilde", e2, t3, r3, n2, i2, o2), E(r3) ? a2 = "" : E(n2) ? a2 = `>=${r3}.0.0 <${+r3 + 1}.0.0-0` : E(i2) ? a2 = `>=${r3}.${n2}.0 <${r3}.${+n2 + 1}.0-0` : o2 ? (l("replaceTilde pr", o2), a2 = `>=${r3}.${n2}.${i2}-${o2} <${r3}.${+n2 + 1}.0-0`) : a2 = `>=${r3}.${n2}.${i2} <${r3}.${+n2 + 1}.0-0`, l("tilde return", a2), a2;
        });
      }, x = (e2, t2) => e2.trim().split(/\s+/).map((e3) => R(e3, t2)).join(" "), R = (e2, t2) => {
        l("caret", e2, t2);
        let r2 = t2.loose ? c[p.CARETLOOSE] : c[p.CARET], n2 = t2.includePrerelease ? "-0" : "";
        return e2.replace(r2, (t3, r3, i2, o2, a2) => {
          let s2;
          return l("caret", e2, t3, r3, i2, o2, a2), E(r3) ? s2 = "" : E(i2) ? s2 = `>=${r3}.0.0${n2} <${+r3 + 1}.0.0-0` : E(o2) ? s2 = "0" === r3 ? `>=${r3}.${i2}.0${n2} <${r3}.${+i2 + 1}.0-0` : `>=${r3}.${i2}.0${n2} <${+r3 + 1}.0.0-0` : a2 ? (l("replaceCaret pr", a2), s2 = "0" === r3 ? "0" === i2 ? `>=${r3}.${i2}.${o2}-${a2} <${r3}.${i2}.${+o2 + 1}-0` : `>=${r3}.${i2}.${o2}-${a2} <${r3}.${+i2 + 1}.0-0` : `>=${r3}.${i2}.${o2}-${a2} <${+r3 + 1}.0.0-0`) : (l("no pr"), s2 = "0" === r3 ? "0" === i2 ? `>=${r3}.${i2}.${o2}${n2} <${r3}.${i2}.${+o2 + 1}-0` : `>=${r3}.${i2}.${o2}${n2} <${r3}.${+i2 + 1}.0-0` : `>=${r3}.${i2}.${o2} <${+r3 + 1}.0.0-0`), l("caret return", s2), s2;
        });
      }, O = (e2, t2) => (l("replaceXRanges", e2, t2), e2.split(/\s+/).map((e3) => T(e3, t2)).join(" ")), T = (e2, t2) => {
        e2 = e2.trim();
        let r2 = t2.loose ? c[p.XRANGELOOSE] : c[p.XRANGE];
        return e2.replace(r2, (r3, n2, i2, o2, a2, s2) => {
          l("xRange", e2, r3, n2, i2, o2, a2, s2);
          let u2 = E(i2), c2 = u2 || E(o2), p2 = c2 || E(a2);
          return "=" === n2 && p2 && (n2 = ""), s2 = t2.includePrerelease ? "-0" : "", u2 ? r3 = ">" === n2 || "<" === n2 ? "<0.0.0-0" : "*" : n2 && p2 ? (c2 && (o2 = 0), a2 = 0, ">" === n2 ? (n2 = ">=", c2 ? (i2 = +i2 + 1, o2 = 0) : o2 = +o2 + 1, a2 = 0) : "<=" === n2 && (n2 = "<", c2 ? i2 = +i2 + 1 : o2 = +o2 + 1), "<" === n2 && (s2 = "-0"), r3 = `${n2 + i2}.${o2}.${a2}${s2}`) : c2 ? r3 = `>=${i2}.0.0${s2} <${+i2 + 1}.0.0-0` : p2 && (r3 = `>=${i2}.${o2}.0${s2} <${i2}.${+o2 + 1}.0-0`), l("xRange return", r3), r3;
        });
      }, P = (e2, t2) => (l("replaceStars", e2, t2), e2.trim().replace(c[p.STAR], "")), C = (e2, t2) => (l("replaceGTE0", e2, t2), e2.trim().replace(c[t2.includePrerelease ? p.GTE0PRE : p.GTE0], "")), N = (e2) => (t2, r2, n2, i2, o2, a2, s2, l2, u2, c2, p2, d2) => (r2 = E(n2) ? "" : E(i2) ? `>=${n2}.0.0${e2 ? "-0" : ""}` : E(o2) ? `>=${n2}.${i2}.0${e2 ? "-0" : ""}` : a2 ? `>=${r2}` : `>=${r2}${e2 ? "-0" : ""}`, l2 = E(u2) ? "" : E(c2) ? `<${+u2 + 1}.0.0-0` : E(p2) ? `<${u2}.${+c2 + 1}.0-0` : d2 ? `<=${u2}.${c2}.${p2}-${d2}` : e2 ? `<${u2}.${c2}.${+p2 + 1}-0` : `<=${l2}`, `${r2} ${l2}`.trim()), I = (e2, t2, r2) => {
        for (let r3 = 0; r3 < e2.length; r3++) if (!e2[r3].test(t2)) return false;
        if (t2.prerelease.length && !r2.includePrerelease) {
          for (let r3 = 0; r3 < e2.length; r3++) if (l(e2[r3].semver), e2[r3].semver !== s.ANY && e2[r3].semver.prerelease.length > 0) {
            let n2 = e2[r3].semver;
            if (n2.major === t2.major && n2.minor === t2.minor && n2.patch === t2.patch) return true;
          }
          return false;
        }
        return true;
      };
    }, 74219, (e, t, r) => {
      "use strict";
      let n = Symbol("SemVer ANY");
      class i {
        static get ANY() {
          return n;
        }
        constructor(e2, t2) {
          if (t2 = o(t2), e2 instanceof i) if (!!t2.loose === e2.loose) return e2;
          else e2 = e2.value;
          u("comparator", e2 = e2.trim().split(/\s+/).join(" "), t2), this.options = t2, this.loose = !!t2.loose, this.parse(e2), this.semver === n ? this.value = "" : this.value = this.operator + this.semver.version, u("comp", this);
        }
        parse(e2) {
          let t2 = this.options.loose ? a[s.COMPARATORLOOSE] : a[s.COMPARATOR], r2 = e2.match(t2);
          if (!r2) throw TypeError(`Invalid comparator: ${e2}`);
          this.operator = void 0 !== r2[1] ? r2[1] : "", "=" === this.operator && (this.operator = ""), r2[2] ? this.semver = new c(r2[2], this.options.loose) : this.semver = n;
        }
        toString() {
          return this.value;
        }
        test(e2) {
          if (u("Comparator.test", e2, this.options.loose), this.semver === n || e2 === n) return true;
          if ("string" == typeof e2) try {
            e2 = new c(e2, this.options);
          } catch (e3) {
            return false;
          }
          return l(e2, this.operator, this.semver, this.options);
        }
        intersects(e2, t2) {
          if (!(e2 instanceof i)) throw TypeError("a Comparator is required");
          return "" === this.operator ? "" === this.value || new p(e2.value, t2).test(this.value) : "" === e2.operator ? "" === e2.value || new p(this.value, t2).test(e2.semver) : !((t2 = o(t2)).includePrerelease && ("<0.0.0-0" === this.value || "<0.0.0-0" === e2.value) || !t2.includePrerelease && (this.value.startsWith("<0.0.0") || e2.value.startsWith("<0.0.0"))) && !!(this.operator.startsWith(">") && e2.operator.startsWith(">") || this.operator.startsWith("<") && e2.operator.startsWith("<") || this.semver.version === e2.semver.version && this.operator.includes("=") && e2.operator.includes("=") || l(this.semver, "<", e2.semver, t2) && this.operator.startsWith(">") && e2.operator.startsWith("<") || l(this.semver, ">", e2.semver, t2) && this.operator.startsWith("<") && e2.operator.startsWith(">"));
        }
      }
      t.exports = i;
      let o = e.r(53114), { safeRe: a, t: s } = e.r(70583), l = e.r(80103), u = e.r(52998), c = e.r(11937), p = e.r(26199);
    }, 5235, (e, t, r) => {
      "use strict";
      let n = e.r(26199);
      t.exports = (e2, t2, r2) => {
        try {
          t2 = new n(t2, r2);
        } catch (e3) {
          return false;
        }
        return t2.test(e2);
      };
    }, 80639, (e, t, r) => {
      "use strict";
      let n = e.r(26199);
      t.exports = (e2, t2) => new n(e2, t2).set.map((e3) => e3.map((e4) => e4.value).join(" ").trim().split(" "));
    }, 60318, (e, t, r) => {
      "use strict";
      let n = e.r(11937), i = e.r(26199);
      t.exports = (e2, t2, r2) => {
        let o = null, a = null, s = null;
        try {
          s = new i(t2, r2);
        } catch (e3) {
          return null;
        }
        return e2.forEach((e3) => {
          s.test(e3) && (!o || -1 === a.compare(e3)) && (a = new n(o = e3, r2));
        }), o;
      };
    }, 23099, (e, t, r) => {
      "use strict";
      let n = e.r(11937), i = e.r(26199);
      t.exports = (e2, t2, r2) => {
        let o = null, a = null, s = null;
        try {
          s = new i(t2, r2);
        } catch (e3) {
          return null;
        }
        return e2.forEach((e3) => {
          s.test(e3) && (!o || 1 === a.compare(e3)) && (a = new n(o = e3, r2));
        }), o;
      };
    }, 37232, (e, t, r) => {
      "use strict";
      let n = e.r(11937), i = e.r(26199), o = e.r(92949);
      t.exports = (e2, t2) => {
        e2 = new i(e2, t2);
        let r2 = new n("0.0.0");
        if (e2.test(r2) || (r2 = new n("0.0.0-0"), e2.test(r2))) return r2;
        r2 = null;
        for (let t3 = 0; t3 < e2.set.length; ++t3) {
          let i2 = e2.set[t3], a = null;
          i2.forEach((e3) => {
            let t4 = new n(e3.semver.version);
            switch (e3.operator) {
              case ">":
                0 === t4.prerelease.length ? t4.patch++ : t4.prerelease.push(0), t4.raw = t4.format();
              case "":
              case ">=":
                (!a || o(t4, a)) && (a = t4);
                break;
              case "<":
              case "<=":
                break;
              default:
                throw Error(`Unexpected operation: ${e3.operator}`);
            }
          }), a && (!r2 || o(r2, a)) && (r2 = a);
        }
        return r2 && e2.test(r2) ? r2 : null;
      };
    }, 89845, (e, t, r) => {
      "use strict";
      let n = e.r(26199);
      t.exports = (e2, t2) => {
        try {
          return new n(e2, t2).range || "*";
        } catch (e3) {
          return null;
        }
      };
    }, 33569, (e, t, r) => {
      "use strict";
      let n = e.r(11937), i = e.r(74219), { ANY: o } = i, a = e.r(26199), s = e.r(5235), l = e.r(92949), u = e.r(7181), c = e.r(13176), p = e.r(5275);
      t.exports = (e2, t2, r2, d) => {
        let f, h, g, m, v;
        switch (e2 = new n(e2, d), t2 = new a(t2, d), r2) {
          case ">":
            f = l, h = c, g = u, m = ">", v = ">=";
            break;
          case "<":
            f = u, h = p, g = l, m = "<", v = "<=";
            break;
          default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (s(e2, t2, d)) return false;
        for (let r3 = 0; r3 < t2.set.length; ++r3) {
          let n2 = t2.set[r3], a2 = null, s2 = null;
          if (n2.forEach((e3) => {
            e3.semver === o && (e3 = new i(">=0.0.0")), a2 = a2 || e3, s2 = s2 || e3, f(e3.semver, a2.semver, d) ? a2 = e3 : g(e3.semver, s2.semver, d) && (s2 = e3);
          }), a2.operator === m || a2.operator === v || (!s2.operator || s2.operator === m) && h(e2, s2.semver) || s2.operator === v && g(e2, s2.semver)) return false;
        }
        return true;
      };
    }, 75120, (e, t, r) => {
      "use strict";
      let n = e.r(33569);
      t.exports = (e2, t2, r2) => n(e2, t2, ">", r2);
    }, 32635, (e, t, r) => {
      "use strict";
      let n = e.r(33569);
      t.exports = (e2, t2, r2) => n(e2, t2, "<", r2);
    }, 66048, (e, t, r) => {
      "use strict";
      let n = e.r(26199);
      t.exports = (e2, t2, r2) => (e2 = new n(e2, r2), t2 = new n(t2, r2), e2.intersects(t2, r2));
    }, 3349, (e, t, r) => {
      "use strict";
      let n = e.r(5235), i = e.r(29265);
      t.exports = (e2, t2, r2) => {
        let o = [], a = null, s = null, l = e2.sort((e3, t3) => i(e3, t3, r2));
        for (let e3 of l) n(e3, t2, r2) ? (s = e3, a || (a = e3)) : (s && o.push([a, s]), s = null, a = null);
        a && o.push([a, null]);
        let u = [];
        for (let [e3, t3] of o) e3 === t3 ? u.push(e3) : t3 || e3 !== l[0] ? t3 ? e3 === l[0] ? u.push(`<=${t3}`) : u.push(`${e3} - ${t3}`) : u.push(`>=${e3}`) : u.push("*");
        let c = u.join(" || "), p = "string" == typeof t2.raw ? t2.raw : String(t2);
        return c.length < p.length ? c : t2;
      };
    }, 66601, (e, t, r) => {
      "use strict";
      let n = e.r(26199), i = e.r(74219), { ANY: o } = i, a = e.r(5235), s = e.r(29265), l = [new i(">=0.0.0-0")], u = [new i(">=0.0.0")], c = (e2, t2, r2) => {
        let n2, i2, c2, f, h, g, m;
        if (e2 === t2) return true;
        if (1 === e2.length && e2[0].semver === o) if (1 === t2.length && t2[0].semver === o) return true;
        else e2 = r2.includePrerelease ? l : u;
        if (1 === t2.length && t2[0].semver === o) if (r2.includePrerelease) return true;
        else t2 = u;
        let v = /* @__PURE__ */ new Set();
        for (let t3 of e2) ">" === t3.operator || ">=" === t3.operator ? n2 = p(n2, t3, r2) : "<" === t3.operator || "<=" === t3.operator ? i2 = d(i2, t3, r2) : v.add(t3.semver);
        if (v.size > 1) return null;
        if (n2 && i2 && ((c2 = s(n2.semver, i2.semver, r2)) > 0 || 0 === c2 && (">=" !== n2.operator || "<=" !== i2.operator))) return null;
        for (let e3 of v) {
          if (n2 && !a(e3, String(n2), r2) || i2 && !a(e3, String(i2), r2)) return null;
          for (let n3 of t2) if (!a(e3, String(n3), r2)) return false;
          return true;
        }
        let b = !!i2 && !r2.includePrerelease && !!i2.semver.prerelease.length && i2.semver, y = !!n2 && !r2.includePrerelease && !!n2.semver.prerelease.length && n2.semver;
        for (let e3 of (b && 1 === b.prerelease.length && "<" === i2.operator && 0 === b.prerelease[0] && (b = false), t2)) {
          if (m = m || ">" === e3.operator || ">=" === e3.operator, g = g || "<" === e3.operator || "<=" === e3.operator, n2) {
            if (y && e3.semver.prerelease && e3.semver.prerelease.length && e3.semver.major === y.major && e3.semver.minor === y.minor && e3.semver.patch === y.patch && (y = false), ">" === e3.operator || ">=" === e3.operator) {
              if ((f = p(n2, e3, r2)) === e3 && f !== n2) return false;
            } else if (">=" === n2.operator && !a(n2.semver, String(e3), r2)) return false;
          }
          if (i2) {
            if (b && e3.semver.prerelease && e3.semver.prerelease.length && e3.semver.major === b.major && e3.semver.minor === b.minor && e3.semver.patch === b.patch && (b = false), "<" === e3.operator || "<=" === e3.operator) {
              if ((h = d(i2, e3, r2)) === e3 && h !== i2) return false;
            } else if ("<=" === i2.operator && !a(i2.semver, String(e3), r2)) return false;
          }
          if (!e3.operator && (i2 || n2) && 0 !== c2) return false;
        }
        return (!n2 || !g || !!i2 || 0 === c2) && (!i2 || !m || !!n2 || 0 === c2) && !y && !b && true;
      }, p = (e2, t2, r2) => {
        if (!e2) return t2;
        let n2 = s(e2.semver, t2.semver, r2);
        return n2 > 0 ? e2 : n2 < 0 || ">" === t2.operator && ">=" === e2.operator ? t2 : e2;
      }, d = (e2, t2, r2) => {
        if (!e2) return t2;
        let n2 = s(e2.semver, t2.semver, r2);
        return n2 < 0 ? e2 : n2 > 0 || "<" === t2.operator && "<=" === e2.operator ? t2 : e2;
      };
      t.exports = (e2, t2, r2 = {}) => {
        if (e2 === t2) return true;
        e2 = new n(e2, r2), t2 = new n(t2, r2);
        let i2 = false;
        e: for (let n2 of e2.set) {
          for (let e3 of t2.set) {
            let t3 = c(n2, e3, r2);
            if (i2 = i2 || null !== t3, t3) continue e;
          }
          if (i2) return false;
        }
        return true;
      };
    }, 36788, (e, t, r) => {
      "use strict";
      let n = e.r(70583), i = e.r(42310), o = e.r(11937), a = e.r(99294), s = e.r(42986), l = e.r(81536), u = e.r(63874), c = e.r(99918), p = e.r(82480), d = e.r(79939), f = e.r(8071), h = e.r(27901), g = e.r(92995), m = e.r(29265), v = e.r(61553), b = e.r(55347), y = e.r(2180), w = e.r(64087), E = e.r(20192), _ = e.r(92949), S = e.r(7181), x = e.r(32390), R = e.r(60838), O = e.r(5275), T = e.r(13176), P = e.r(80103), C = e.r(15393), N = e.r(74219), I = e.r(26199), A = e.r(5235), L = e.r(80639), j = e.r(60318), $ = e.r(23099), k = e.r(37232), M = e.r(89845), D = e.r(33569), U = e.r(75120), B = e.r(32635), V = e.r(66048);
      t.exports = { parse: s, valid: l, clean: u, inc: c, diff: p, major: d, minor: f, patch: h, prerelease: g, compare: m, rcompare: v, compareLoose: b, compareBuild: y, sort: w, rsort: E, gt: _, lt: S, eq: x, neq: R, gte: O, lte: T, cmp: P, coerce: C, Comparator: N, Range: I, satisfies: A, toComparators: L, maxSatisfying: j, minSatisfying: $, minVersion: k, validRange: M, outside: D, gtr: U, ltr: B, intersects: V, simplifyRange: e.r(3349), subset: e.r(66601), SemVer: o, re: n.re, src: n.src, tokens: n.t, SEMVER_SPEC_VERSION: i.SEMVER_SPEC_VERSION, RELEASE_TYPES: i.RELEASE_TYPES, compareIdentifiers: a.compareIdentifiers, rcompareIdentifiers: a.rcompareIdentifiers };
    }, 17348, (e, t, r) => {
      t.exports = e.r(36788).satisfies(process.version, ">=15.7.0");
    }, 12116, (e, t, r) => {
      t.exports = e.r(36788).satisfies(process.version, ">=16.9.0");
    }, 41674, (e, t, r) => {
      let n = e.r(17348), i = e.r(12116), o = { ec: ["ES256", "ES384", "ES512"], rsa: ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"], "rsa-pss": ["PS256", "PS384", "PS512"] }, a = { ES256: "prime256v1", ES384: "secp384r1", ES512: "secp521r1" };
      t.exports = function(e2, t2) {
        if (!e2 || !t2) return;
        let r2 = t2.asymmetricKeyType;
        if (!r2) return;
        let s = o[r2];
        if (!s) throw Error(`Unknown key type "${r2}".`);
        if (!s.includes(e2)) throw Error(`"alg" parameter for "${r2}" key type must be one of: ${s.join(", ")}.`);
        if (n) switch (r2) {
          case "ec":
            let l = t2.asymmetricKeyDetails.namedCurve, u = a[e2];
            if (l !== u) throw Error(`"alg" parameter "${e2}" requires curve "${u}".`);
            break;
          case "rsa-pss":
            if (i) {
              let r3 = parseInt(e2.slice(-3), 10), { hashAlgorithm: n2, mgf1HashAlgorithm: i2, saltLength: o2 } = t2.asymmetricKeyDetails;
              if (n2 !== `sha${r3}` || i2 !== n2) throw Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${e2}.`);
              if (void 0 !== o2 && o2 > r3 >> 3) throw Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${e2}.`);
            }
        }
      };
    }, 32232, (e, t, r) => {
      t.exports = e.r(36788).satisfies(process.version, "^6.12.0 || >=8.0.0");
    }, 71913, (e, t, r) => {
      var n = e.i(51615);
      let i = e.r(83669), o = e.r(15196), a = e.r(95296), s = e.r(91120), l = e.r(76069), u = e.r(41674), c = e.r(32232), p = e.r(5966), { KeyObject: d, createSecretKey: f, createPublicKey: h } = e.r(90894), g = ["RS256", "RS384", "RS512"], m = ["ES256", "ES384", "ES512"], v = ["RS256", "RS384", "RS512"], b = ["HS256", "HS384", "HS512"];
      c && (g.splice(g.length, 0, "PS256", "PS384", "PS512"), v.splice(v.length, 0, "PS256", "PS384", "PS512")), t.exports = function(e2, t2, r2, c2) {
        let y, w, E;
        if ("function" != typeof r2 || c2 || (c2 = r2, r2 = {}), r2 || (r2 = {}), r2 = Object.assign({}, r2), y = c2 || function(e3, t3) {
          if (e3) throw e3;
          return t3;
        }, r2.clockTimestamp && "number" != typeof r2.clockTimestamp) return y(new i("clockTimestamp must be a number"));
        if (void 0 !== r2.nonce && ("string" != typeof r2.nonce || "" === r2.nonce.trim())) return y(new i("nonce must be a non-empty string"));
        if (void 0 !== r2.allowInvalidAsymmetricKeyTypes && "boolean" != typeof r2.allowInvalidAsymmetricKeyTypes) return y(new i("allowInvalidAsymmetricKeyTypes must be a boolean"));
        let _ = r2.clockTimestamp || Math.floor(Date.now() / 1e3);
        if (!e2) return y(new i("jwt must be provided"));
        if ("string" != typeof e2) return y(new i("jwt must be a string"));
        let S = e2.split(".");
        if (3 !== S.length) return y(new i("jwt malformed"));
        try {
          w = s(e2, { complete: true });
        } catch (e3) {
          return y(e3);
        }
        if (!w) return y(new i("invalid token"));
        let x = w.header;
        if ("function" == typeof t2) {
          if (!c2) return y(new i("verify must be called asynchronous if secret or public key is provided as a callback"));
          E = t2;
        } else E = function(e3, r3) {
          return r3(null, t2);
        };
        return E(x, function(t3, s2) {
          let c3;
          if (t3) return y(new i("error in secret or public key callback: " + t3.message));
          let E2 = "" !== S[2].trim();
          if (!E2 && s2) return y(new i("jwt signature is required"));
          if (E2 && !s2) return y(new i("secret or public key must be provided"));
          if (!E2 && !r2.algorithms) return y(new i('please specify "none" in "algorithms" to verify unsigned tokens'));
          if (null != s2 && !(s2 instanceof d)) try {
            s2 = h(s2);
          } catch (e3) {
            try {
              s2 = f("string" == typeof s2 ? n.Buffer.from(s2) : s2);
            } catch (e4) {
              return y(new i("secretOrPublicKey is not valid key material"));
            }
          }
          if (r2.algorithms || ("secret" === s2.type ? r2.algorithms = b : ["rsa", "rsa-pss"].includes(s2.asymmetricKeyType) ? r2.algorithms = v : "ec" === s2.asymmetricKeyType ? r2.algorithms = m : r2.algorithms = g), -1 === r2.algorithms.indexOf(w.header.alg)) return y(new i("invalid algorithm"));
          if (x.alg.startsWith("HS") && "secret" !== s2.type) return y(new i(`secretOrPublicKey must be a symmetric key when using ${x.alg}`));
          if (/^(?:RS|PS|ES)/.test(x.alg) && "public" !== s2.type) return y(new i(`secretOrPublicKey must be an asymmetric key when using ${x.alg}`));
          if (!r2.allowInvalidAsymmetricKeyTypes) try {
            u(x.alg, s2);
          } catch (e3) {
            return y(e3);
          }
          try {
            c3 = p.verify(e2, w.header.alg, s2);
          } catch (e3) {
            return y(e3);
          }
          if (!c3) return y(new i("invalid signature"));
          let R = w.payload;
          if (void 0 !== R.nbf && !r2.ignoreNotBefore) {
            if ("number" != typeof R.nbf) return y(new i("invalid nbf value"));
            if (R.nbf > _ + (r2.clockTolerance || 0)) return y(new o("jwt not active", new Date(1e3 * R.nbf)));
          }
          if (void 0 !== R.exp && !r2.ignoreExpiration) {
            if ("number" != typeof R.exp) return y(new i("invalid exp value"));
            if (_ >= R.exp + (r2.clockTolerance || 0)) return y(new a("jwt expired", new Date(1e3 * R.exp)));
          }
          if (r2.audience) {
            let e3 = Array.isArray(r2.audience) ? r2.audience : [r2.audience];
            if (!(Array.isArray(R.aud) ? R.aud : [R.aud]).some(function(t4) {
              return e3.some(function(e4) {
                return e4 instanceof RegExp ? e4.test(t4) : e4 === t4;
              });
            })) return y(new i("jwt audience invalid. expected: " + e3.join(" or ")));
          }
          if (r2.issuer && ("string" == typeof r2.issuer && R.iss !== r2.issuer || Array.isArray(r2.issuer) && -1 === r2.issuer.indexOf(R.iss))) return y(new i("jwt issuer invalid. expected: " + r2.issuer));
          if (r2.subject && R.sub !== r2.subject) return y(new i("jwt subject invalid. expected: " + r2.subject));
          if (r2.jwtid && R.jti !== r2.jwtid) return y(new i("jwt jwtid invalid. expected: " + r2.jwtid));
          if (r2.nonce && R.nonce !== r2.nonce) return y(new i("jwt nonce invalid. expected: " + r2.nonce));
          if (r2.maxAge) {
            if ("number" != typeof R.iat) return y(new i("iat required when maxAge is specified"));
            let e3 = l(r2.maxAge, R.iat);
            if (void 0 === e3) return y(new i('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
            if (_ >= e3 + (r2.clockTolerance || 0)) return y(new a("maxAge exceeded", new Date(1e3 * e3)));
          }
          return true === r2.complete ? y(null, { header: x, payload: R, signature: w.signature }) : y(null, R);
        });
      };
    }, 30260, (e, t, r) => {
      var n, i, o = 1 / 0, a = 0 / 0, s = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, u = /^0b[01]+$/i, c = /^0o[0-7]+$/i, p = /^(?:0|[1-9]\d*)$/, d = parseInt;
      function f(e2) {
        return e2 != e2;
      }
      var h = Object.prototype, g = h.hasOwnProperty, m = h.toString, v = h.propertyIsEnumerable, b = (n = Object.keys, i = Object, function(e2) {
        return n(i(e2));
      }), y = Math.max, w = Array.isArray;
      function E(e2) {
        var t2, r2, n2;
        return null != e2 && "number" == typeof (t2 = e2.length) && t2 > -1 && t2 % 1 == 0 && t2 <= 9007199254740991 && "[object Function]" != (n2 = _(r2 = e2) ? m.call(r2) : "") && "[object GeneratorFunction]" != n2;
      }
      function _(e2) {
        var t2 = typeof e2;
        return !!e2 && ("object" == t2 || "function" == t2);
      }
      function S(e2) {
        return !!e2 && "object" == typeof e2;
      }
      t.exports = function(e2, t2, r2, n2) {
        e2 = E(e2) ? e2 : function(e3) {
          return e3 ? function(e4, t3) {
            for (var r3 = -1, n3 = e4 ? e4.length : 0, i3 = Array(n3); ++r3 < n3; ) i3[r3] = t3(e4[r3], r3, e4);
            return i3;
          }(E(e3) ? function(e4, t3) {
            var r3, n3, i3, o2, a2 = w(e4) || S(n3 = r3 = e4) && E(n3) && g.call(r3, "callee") && (!v.call(r3, "callee") || "[object Arguments]" == m.call(r3)) ? function(e5, t4) {
              for (var r4 = -1, n4 = Array(e5); ++r4 < e5; ) n4[r4] = t4(r4);
              return n4;
            }(e4.length, String) : [], s2 = a2.length, l2 = !!s2;
            for (var u2 in e4) {
              g.call(e4, u2) && !(l2 && ("length" == u2 || (i3 = u2, (o2 = null == (o2 = s2) ? 9007199254740991 : o2) && ("number" == typeof i3 || p.test(i3)) && i3 > -1 && i3 % 1 == 0 && i3 < o2))) && a2.push(u2);
            }
            return a2;
          }(e3) : function(e4) {
            if (r3 = (t3 = e4) && t3.constructor, t3 !== ("function" == typeof r3 && r3.prototype || h)) return b(e4);
            var t3, r3, n3 = [];
            for (var i3 in Object(e4)) g.call(e4, i3) && "constructor" != i3 && n3.push(i3);
            return n3;
          }(e3), function(t3) {
            return e3[t3];
          }) : [];
        }(e2), r2 = r2 && !n2 ? (R = (x = (i2 = r2) ? (i2 = function(e3) {
          if ("number" == typeof e3) return e3;
          if ("symbol" == typeof (t3 = e3) || S(t3) && "[object Symbol]" == m.call(t3)) return a;
          if (_(e3)) {
            var t3, r3 = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
            e3 = _(r3) ? r3 + "" : r3;
          }
          if ("string" != typeof e3) return 0 === e3 ? e3 : +e3;
          e3 = e3.replace(s, "");
          var n3 = u.test(e3);
          return n3 || c.test(e3) ? d(e3.slice(2), n3 ? 2 : 8) : l.test(e3) ? a : +e3;
        }(i2)) === o || i2 === -o ? (i2 < 0 ? -1 : 1) * 17976931348623157e292 : i2 == i2 ? i2 : 0 : 0 === i2 ? i2 : 0) % 1, x == x ? R ? x - R : x : 0) : 0;
        var i2, x, R, O, T = e2.length;
        return r2 < 0 && (r2 = y(T + r2, 0)), "string" == typeof (O = e2) || !w(O) && S(O) && "[object String]" == m.call(O) ? r2 <= T && e2.indexOf(t2, r2) > -1 : !!T && function(e3, t3, r3) {
          if (t3 != t3) {
            for (var n3 = e3.length, i3 = r3 + -1; ++i3 < n3; ) if (f(e3[i3], i3, e3)) return i3;
            return -1;
          }
          for (var o2 = r3 - 1, a2 = e3.length; ++o2 < a2; ) if (e3[o2] === t3) return o2;
          return -1;
        }(e2, t2, r2) > -1;
      };
    }, 84853, (e, t, r) => {
      var n = Object.prototype.toString;
      t.exports = function(e2) {
        var t2;
        return true === e2 || false === e2 || !!(t2 = e2) && "object" == typeof t2 && "[object Boolean]" == n.call(e2);
      };
    }, 85411, (e, t, r) => {
      var n = 1 / 0, i = 0 / 0, o = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt, c = Object.prototype.toString;
      function p(e2) {
        var t2 = typeof e2;
        return !!e2 && ("object" == t2 || "function" == t2);
      }
      t.exports = function(e2) {
        var t2, r2, d;
        return "number" == typeof e2 && e2 == (d = (r2 = (t2 = e2) ? (t2 = function(e3) {
          if ("number" == typeof e3) return e3;
          if ("symbol" == typeof (t3 = e3) || t3 && "object" == typeof t3 && "[object Symbol]" == c.call(t3)) return i;
          if (p(e3)) {
            var t3, r3 = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
            e3 = p(r3) ? r3 + "" : r3;
          }
          if ("string" != typeof e3) return 0 === e3 ? e3 : +e3;
          e3 = e3.replace(o, "");
          var n2 = s.test(e3);
          return n2 || l.test(e3) ? u(e3.slice(2), n2 ? 2 : 8) : a.test(e3) ? i : +e3;
        }(t2)) === n || t2 === -n ? (t2 < 0 ? -1 : 1) * 17976931348623157e292 : t2 == t2 ? t2 : 0 : 0 === t2 ? t2 : 0) % 1, r2 == r2 ? d ? r2 - d : r2 : 0);
      };
    }, 22856, (e, t, r) => {
      var n = Object.prototype.toString;
      t.exports = function(e2) {
        return "number" == typeof e2 || !!e2 && "object" == typeof e2 && "[object Number]" == n.call(e2);
      };
    }, 29639, (e, t, r) => {
      var n, i, o = Object.prototype, a = Function.prototype.toString, s = o.hasOwnProperty, l = a.call(Object), u = o.toString, c = (n = Object.getPrototypeOf, i = Object, function(e2) {
        return n(i(e2));
      });
      t.exports = function(e2) {
        if (!(e2 && "object" == typeof e2) || "[object Object]" != u.call(e2) || function(e3) {
          var t3 = false;
          if (null != e3 && "function" != typeof e3.toString) try {
            t3 = !!(e3 + "");
          } catch (e4) {
          }
          return t3;
        }(e2)) return false;
        var t2 = c(e2);
        if (null === t2) return true;
        var r2 = s.call(t2, "constructor") && t2.constructor;
        return "function" == typeof r2 && r2 instanceof r2 && a.call(r2) == l;
      };
    }, 42313, (e, t, r) => {
      var n = Object.prototype.toString, i = Array.isArray;
      t.exports = function(e2) {
        var t2;
        return "string" == typeof e2 || !i(e2) && !!(t2 = e2) && "object" == typeof t2 && "[object String]" == n.call(e2);
      };
    }, 97067, (e, t, r) => {
      var n = 1 / 0, i = 0 / 0, o = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt, c = Object.prototype.toString;
      function p(e2) {
        var t2 = typeof e2;
        return !!e2 && ("object" == t2 || "function" == t2);
      }
      t.exports = function(e2) {
        var t2, r2, d, f, h = 2, g = e2;
        if ("function" != typeof g) throw TypeError("Expected a function");
        return d = (r2 = (t2 = h) ? (t2 = function(e3) {
          if ("number" == typeof e3) return e3;
          if ("symbol" == typeof (t3 = e3) || t3 && "object" == typeof t3 && "[object Symbol]" == c.call(t3)) return i;
          if (p(e3)) {
            var t3, r3 = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
            e3 = p(r3) ? r3 + "" : r3;
          }
          if ("string" != typeof e3) return 0 === e3 ? e3 : +e3;
          e3 = e3.replace(o, "");
          var n2 = s.test(e3);
          return n2 || l.test(e3) ? u(e3.slice(2), n2 ? 2 : 8) : a.test(e3) ? i : +e3;
        }(t2)) === n || t2 === -n ? (t2 < 0 ? -1 : 1) * 17976931348623157e292 : t2 == t2 ? t2 : 0 : 0 === t2 ? t2 : 0) % 1, h = r2 == r2 ? d ? r2 - d : r2 : 0, function() {
          return --h > 0 && (f = g.apply(this, arguments)), h <= 1 && (g = void 0), f;
        };
      };
    }, 84787, (e, t, r) => {
      var n = e.i(51615);
      let i = e.r(76069), o = e.r(32232), a = e.r(41674), s = e.r(5966), l = e.r(30260), u = e.r(84853), c = e.r(85411), p = e.r(22856), d = e.r(29639), f = e.r(42313), h = e.r(97067), { KeyObject: g, createSecretKey: m, createPrivateKey: v } = e.r(90894), b = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
      o && b.splice(3, 0, "PS256", "PS384", "PS512");
      let y = { expiresIn: { isValid: function(e2) {
        return c(e2) || f(e2) && e2;
      }, message: '"expiresIn" should be a number of seconds or string representing a timespan' }, notBefore: { isValid: function(e2) {
        return c(e2) || f(e2) && e2;
      }, message: '"notBefore" should be a number of seconds or string representing a timespan' }, audience: { isValid: function(e2) {
        return f(e2) || Array.isArray(e2);
      }, message: '"audience" must be a string or array' }, algorithm: { isValid: l.bind(null, b), message: '"algorithm" must be a valid string enum value' }, header: { isValid: d, message: '"header" must be an object' }, encoding: { isValid: f, message: '"encoding" must be a string' }, issuer: { isValid: f, message: '"issuer" must be a string' }, subject: { isValid: f, message: '"subject" must be a string' }, jwtid: { isValid: f, message: '"jwtid" must be a string' }, noTimestamp: { isValid: u, message: '"noTimestamp" must be a boolean' }, keyid: { isValid: f, message: '"keyid" must be a string' }, mutatePayload: { isValid: u, message: '"mutatePayload" must be a boolean' }, allowInsecureKeySizes: { isValid: u, message: '"allowInsecureKeySizes" must be a boolean' }, allowInvalidAsymmetricKeyTypes: { isValid: u, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean' } }, w = { iat: { isValid: p, message: '"iat" should be a number of seconds' }, exp: { isValid: p, message: '"exp" should be a number of seconds' }, nbf: { isValid: p, message: '"nbf" should be a number of seconds' } };
      function E(e2, t2, r2, n2) {
        if (!d(r2)) throw Error('Expected "' + n2 + '" to be a plain object.');
        Object.keys(r2).forEach(function(i2) {
          let o2 = e2[i2];
          if (!o2) {
            if (!t2) throw Error('"' + i2 + '" is not allowed in "' + n2 + '"');
            return;
          }
          if (!o2.isValid(r2[i2])) throw Error(o2.message);
        });
      }
      let _ = { audience: "aud", issuer: "iss", subject: "sub", jwtid: "jti" }, S = ["expiresIn", "notBefore", "noTimestamp", "audience", "issuer", "subject", "jwtid"];
      t.exports = function(e2, t2, r2, o2) {
        var l2, u2;
        "function" == typeof r2 ? (o2 = r2, r2 = {}) : r2 = r2 || {};
        let c2 = "object" == typeof e2 && !n.Buffer.isBuffer(e2), p2 = Object.assign({ alg: r2.algorithm || "HS256", typ: c2 ? "JWT" : void 0, kid: r2.keyid }, r2.header);
        function d2(e3) {
          if (o2) return o2(e3);
          throw e3;
        }
        if (!t2 && "none" !== r2.algorithm) return d2(Error("secretOrPrivateKey must have a value"));
        if (null != t2 && !(t2 instanceof g)) try {
          t2 = v(t2);
        } catch (e3) {
          try {
            t2 = m("string" == typeof t2 ? n.Buffer.from(t2) : t2);
          } catch (e4) {
            return d2(Error("secretOrPrivateKey is not valid key material"));
          }
        }
        if (p2.alg.startsWith("HS") && "secret" !== t2.type) return d2(Error(`secretOrPrivateKey must be a symmetric key when using ${p2.alg}`));
        if (/^(?:RS|PS|ES)/.test(p2.alg)) {
          if ("private" !== t2.type) return d2(Error(`secretOrPrivateKey must be an asymmetric key when using ${p2.alg}`));
          if (!r2.allowInsecureKeySizes && !p2.alg.startsWith("ES") && void 0 !== t2.asymmetricKeyDetails && t2.asymmetricKeyDetails.modulusLength < 2048) return d2(Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${p2.alg}`));
        }
        if (void 0 === e2) return d2(Error("payload is required"));
        if (c2) {
          try {
            l2 = e2, E(w, true, l2, "payload");
          } catch (e3) {
            return d2(e3);
          }
          r2.mutatePayload || (e2 = Object.assign({}, e2));
        } else {
          let t3 = S.filter(function(e3) {
            return void 0 !== r2[e3];
          });
          if (t3.length > 0) return d2(Error("invalid " + t3.join(",") + " option for " + typeof e2 + " payload"));
        }
        if (void 0 !== e2.exp && void 0 !== r2.expiresIn) return d2(Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
        if (void 0 !== e2.nbf && void 0 !== r2.notBefore) return d2(Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
        try {
          u2 = r2, E(y, false, u2, "options");
        } catch (e3) {
          return d2(e3);
        }
        if (!r2.allowInvalidAsymmetricKeyTypes) try {
          a(p2.alg, t2);
        } catch (e3) {
          return d2(e3);
        }
        let f2 = e2.iat || Math.floor(Date.now() / 1e3);
        if (r2.noTimestamp ? delete e2.iat : c2 && (e2.iat = f2), void 0 !== r2.notBefore) {
          try {
            e2.nbf = i(r2.notBefore, f2);
          } catch (e3) {
            return d2(e3);
          }
          if (void 0 === e2.nbf) return d2(Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
        if (void 0 !== r2.expiresIn && "object" == typeof e2) {
          try {
            e2.exp = i(r2.expiresIn, f2);
          } catch (e3) {
            return d2(e3);
          }
          if (void 0 === e2.exp) return d2(Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
        Object.keys(_).forEach(function(t3) {
          let n2 = _[t3];
          if (void 0 !== r2[t3]) {
            if (void 0 !== e2[n2]) return d2(Error('Bad "options.' + t3 + '" option. The payload already has an "' + n2 + '" property.'));
            e2[n2] = r2[t3];
          }
        });
        let b2 = r2.encoding || "utf8";
        if ("function" == typeof o2) o2 = o2 && h(o2), s.createSign({ header: p2, privateKey: t2, payload: e2, encoding: b2 }).once("error", o2).once("done", function(e3) {
          if (!r2.allowInsecureKeySizes && /^(?:RS|PS)/.test(p2.alg) && e3.length < 256) return o2(Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${p2.alg}`));
          o2(null, e3);
        });
        else {
          let n2 = s.sign({ header: p2, payload: e2, secret: t2, encoding: b2 });
          if (!r2.allowInsecureKeySizes && /^(?:RS|PS)/.test(p2.alg) && n2.length < 256) throw Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${p2.alg}`);
          return n2;
        }
      };
    }, 84014, (e, t, r) => {
      t.exports = { decode: e.r(91120), verify: e.r(71913), sign: e.r(84787), JsonWebTokenError: e.r(83669), NotBeforeError: e.r(15196), TokenExpiredError: e.r(95296) };
    }, 99929, (e, t, r) => {
      "use strict";
      let n;
      Object.defineProperty(r, "__esModule", { value: true }), r.parseCookie = p, r.parse = p, r.stringifyCookie = function(e2, t2) {
        let r2 = t2?.encode || encodeURIComponent, n2 = [];
        for (let t3 of Object.keys(e2)) {
          let a2 = e2[t3];
          if (void 0 === a2) continue;
          if (!i.test(t3)) throw TypeError(`cookie name is invalid: ${t3}`);
          let s2 = r2(a2);
          if (!o.test(s2)) throw TypeError(`cookie val is invalid: ${a2}`);
          n2.push(`${t3}=${s2}`);
        }
        return n2.join("; ");
      }, r.stringifySetCookie = d, r.serialize = d, r.parseSetCookie = function(e2, t2) {
        let r2 = t2?.decode || m, n2 = e2.length, i2 = f(e2, 0, n2), o2 = h(e2, 0, i2), a2 = -1 === o2 ? { name: "", value: r2(g(e2, 0, i2)) } : { name: g(e2, 0, o2), value: r2(g(e2, o2 + 1, i2)) }, s2 = i2 + 1;
        for (; s2 < n2; ) {
          let t3 = f(e2, s2, n2), r3 = h(e2, s2, t3), i3 = -1 === r3 ? g(e2, s2, t3) : g(e2, s2, r3), o3 = -1 === r3 ? void 0 : g(e2, r3 + 1, t3);
          switch (i3.toLowerCase()) {
            case "httponly":
              a2.httpOnly = true;
              break;
            case "secure":
              a2.secure = true;
              break;
            case "partitioned":
              a2.partitioned = true;
              break;
            case "domain":
              a2.domain = o3;
              break;
            case "path":
              a2.path = o3;
              break;
            case "max-age":
              o3 && l.test(o3) && (a2.maxAge = Number(o3));
              break;
            case "expires":
              if (!o3) break;
              let u2 = new Date(o3);
              Number.isFinite(u2.valueOf()) && (a2.expires = u2);
              break;
            case "priority":
              if (!o3) break;
              let c2 = o3.toLowerCase();
              ("low" === c2 || "medium" === c2 || "high" === c2) && (a2.priority = c2);
              break;
            case "samesite":
              if (!o3) break;
              let p2 = o3.toLowerCase();
              ("lax" === p2 || "strict" === p2 || "none" === p2) && (a2.sameSite = p2);
          }
          s2 = t3 + 1;
        }
        return a2;
      }, r.stringifySetCookie = d, r.serialize = d;
      let i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, o = /^[\u0021-\u003A\u003C-\u007E]*$/, a = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, s = /^[\u0020-\u003A\u003D-\u007E]*$/, l = /^-?\d+$/, u = Object.prototype.toString, c = ((n = function() {
      }).prototype = /* @__PURE__ */ Object.create(null), n);
      function p(e2, t2) {
        let r2 = new c(), n2 = e2.length;
        if (n2 < 2) return r2;
        let i2 = t2?.decode || m, o2 = 0;
        do {
          let t3 = h(e2, o2, n2);
          if (-1 === t3) break;
          let a2 = f(e2, o2, n2);
          if (t3 > a2) {
            o2 = e2.lastIndexOf(";", t3 - 1) + 1;
            continue;
          }
          let s2 = g(e2, o2, t3);
          void 0 === r2[s2] && (r2[s2] = i2(g(e2, t3 + 1, a2))), o2 = a2 + 1;
        } while (o2 < n2);
        return r2;
      }
      function d(e2, t2, r2) {
        let n2 = "object" == typeof e2 ? e2 : { ...r2, name: e2, value: String(t2) }, l2 = ("object" == typeof t2 ? t2 : r2)?.encode || encodeURIComponent;
        if (!i.test(n2.name)) throw TypeError(`argument name is invalid: ${n2.name}`);
        let c2 = n2.value ? l2(n2.value) : "";
        if (!o.test(c2)) throw TypeError(`argument val is invalid: ${n2.value}`);
        let p2 = n2.name + "=" + c2;
        if (void 0 !== n2.maxAge) {
          if (!Number.isInteger(n2.maxAge)) throw TypeError(`option maxAge is invalid: ${n2.maxAge}`);
          p2 += "; Max-Age=" + n2.maxAge;
        }
        if (n2.domain) {
          if (!a.test(n2.domain)) throw TypeError(`option domain is invalid: ${n2.domain}`);
          p2 += "; Domain=" + n2.domain;
        }
        if (n2.path) {
          if (!s.test(n2.path)) throw TypeError(`option path is invalid: ${n2.path}`);
          p2 += "; Path=" + n2.path;
        }
        if (n2.expires) {
          var d2;
          if (d2 = n2.expires, "[object Date]" !== u.call(d2) || !Number.isFinite(n2.expires.valueOf())) throw TypeError(`option expires is invalid: ${n2.expires}`);
          p2 += "; Expires=" + n2.expires.toUTCString();
        }
        if (n2.httpOnly && (p2 += "; HttpOnly"), n2.secure && (p2 += "; Secure"), n2.partitioned && (p2 += "; Partitioned"), n2.priority) switch ("string" == typeof n2.priority ? n2.priority.toLowerCase() : void 0) {
          case "low":
            p2 += "; Priority=Low";
            break;
          case "medium":
            p2 += "; Priority=Medium";
            break;
          case "high":
            p2 += "; Priority=High";
            break;
          default:
            throw TypeError(`option priority is invalid: ${n2.priority}`);
        }
        if (n2.sameSite) switch ("string" == typeof n2.sameSite ? n2.sameSite.toLowerCase() : n2.sameSite) {
          case true:
          case "strict":
            p2 += "; SameSite=Strict";
            break;
          case "lax":
            p2 += "; SameSite=Lax";
            break;
          case "none":
            p2 += "; SameSite=None";
            break;
          default:
            throw TypeError(`option sameSite is invalid: ${n2.sameSite}`);
        }
        return p2;
      }
      function f(e2, t2, r2) {
        let n2 = e2.indexOf(";", t2);
        return -1 === n2 ? r2 : n2;
      }
      function h(e2, t2, r2) {
        let n2 = e2.indexOf("=", t2);
        return n2 < r2 ? n2 : -1;
      }
      function g(e2, t2, r2) {
        let n2 = t2, i2 = r2;
        do {
          let t3 = e2.charCodeAt(n2);
          if (32 !== t3 && 9 !== t3) break;
        } while (++n2 < i2);
        for (; i2 > n2; ) {
          let t3 = e2.charCodeAt(i2 - 1);
          if (32 !== t3 && 9 !== t3) break;
          i2--;
        }
        return e2.slice(n2, i2);
      }
      function m(e2) {
        if (-1 === e2.indexOf("%")) return e2;
        try {
          return decodeURIComponent(e2);
        } catch (t2) {
          return e2;
        }
      }
    }, 42738, (e) => {
      "use strict";
      let t, r;
      async function n() {
        return "_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && await _ENTRIES.middleware_instrumentation;
      }
      let i = null;
      async function o() {
        if ("phase-production-build" === process.env.NEXT_PHASE) return;
        i || (i = n());
        let e10 = await i;
        if (null == e10 ? void 0 : e10.register) try {
          await e10.register();
        } catch (e11) {
          throw e11.message = `An error occurred while loading instrumentation hook: ${e11.message}`, e11;
        }
      }
      async function a(...e10) {
        let t2 = await n();
        try {
          var r2;
          await (null == t2 || null == (r2 = t2.onRequestError) ? void 0 : r2.call(t2, ...e10));
        } catch (e11) {
          console.error("Error in instrumentation.onRequestError:", e11);
        }
      }
      let s = null;
      function l() {
        return s || (s = o()), s;
      }
      function u(e10) {
        return `The edge runtime does not support Node.js '${e10}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
      }
      process !== e.g.process && (process.env = e.g.process.env, e.g.process = process);
      try {
        Object.defineProperty(globalThis, "__import_unsupported", { value: function(e10) {
          let t2 = new Proxy(function() {
          }, { get(t3, r2) {
            if ("then" === r2) return {};
            throw Object.defineProperty(Error(u(e10)), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
          }, construct() {
            throw Object.defineProperty(Error(u(e10)), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
          }, apply(r2, n2, i2) {
            if ("function" == typeof i2[0]) return i2[0](t2);
            throw Object.defineProperty(Error(u(e10)), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
          } });
          return new Proxy({}, { get: () => t2 });
        }, enumerable: false, configurable: false });
      } catch {
      }
      l();
      class c extends Error {
        constructor({ page: e10 }) {
          super(`The middleware "${e10}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
        }
      }
      class p extends Error {
        constructor() {
          super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
        }
      }
      class d extends Error {
        constructor() {
          super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
        }
      }
      let f = "_N_T_", h = { shared: "shared", reactServerComponents: "rsc", serverSideRendering: "ssr", actionBrowser: "action-browser", apiNode: "api-node", apiEdge: "api-edge", middleware: "middleware", instrument: "instrument", edgeAsset: "edge-asset", appPagesBrowser: "app-pages-browser", pagesDirBrowser: "pages-dir-browser", pagesDirEdge: "pages-dir-edge", pagesDirNode: "pages-dir-node" };
      function g(e10) {
        var t2, r2, n2, i2, o2, a2 = [], s2 = 0;
        function l2() {
          for (; s2 < e10.length && /\s/.test(e10.charAt(s2)); ) s2 += 1;
          return s2 < e10.length;
        }
        for (; s2 < e10.length; ) {
          for (t2 = s2, o2 = false; l2(); ) if ("," === (r2 = e10.charAt(s2))) {
            for (n2 = s2, s2 += 1, l2(), i2 = s2; s2 < e10.length && "=" !== (r2 = e10.charAt(s2)) && ";" !== r2 && "," !== r2; ) s2 += 1;
            s2 < e10.length && "=" === e10.charAt(s2) ? (o2 = true, s2 = i2, a2.push(e10.substring(t2, n2)), t2 = s2) : s2 = n2 + 1;
          } else s2 += 1;
          (!o2 || s2 >= e10.length) && a2.push(e10.substring(t2, e10.length));
        }
        return a2;
      }
      function m(e10) {
        let t2 = {}, r2 = [];
        if (e10) for (let [n2, i2] of e10.entries()) "set-cookie" === n2.toLowerCase() ? (r2.push(...g(i2)), t2[n2] = 1 === r2.length ? r2[0] : r2) : t2[n2] = i2;
        return t2;
      }
      function v(e10) {
        try {
          return String(new URL(String(e10)));
        } catch (t2) {
          throw Object.defineProperty(Error(`URL is malformed "${String(e10)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, { cause: t2 }), "__NEXT_ERROR_CODE", { value: "E61", enumerable: false, configurable: true });
        }
      }
      ({ ...h, GROUP: { builtinReact: [h.reactServerComponents, h.actionBrowser], serverOnly: [h.reactServerComponents, h.actionBrowser, h.instrument, h.middleware], neutralTarget: [h.apiNode, h.apiEdge], clientOnly: [h.serverSideRendering, h.appPagesBrowser], bundled: [h.reactServerComponents, h.actionBrowser, h.serverSideRendering, h.appPagesBrowser, h.shared, h.instrument, h.middleware], appPages: [h.reactServerComponents, h.serverSideRendering, h.appPagesBrowser, h.actionBrowser] } });
      let b = Symbol("response"), y = Symbol("passThrough"), w = Symbol("waitUntil");
      class E {
        constructor(e10, t2) {
          this[y] = false, this[w] = t2 ? { kind: "external", function: t2 } : { kind: "internal", promises: [] };
        }
        respondWith(e10) {
          this[b] || (this[b] = Promise.resolve(e10));
        }
        passThroughOnException() {
          this[y] = true;
        }
        waitUntil(e10) {
          if ("external" === this[w].kind) return (0, this[w].function)(e10);
          this[w].promises.push(e10);
        }
      }
      class _ extends E {
        constructor(e10) {
          var t2;
          super(e10.request, null == (t2 = e10.context) ? void 0 : t2.waitUntil), this.sourcePage = e10.page;
        }
        get request() {
          throw Object.defineProperty(new c({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
        respondWith() {
          throw Object.defineProperty(new c({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
      }
      function S(e10) {
        return e10.replace(/\/$/, "") || "/";
      }
      function x(e10) {
        let t2 = e10.indexOf("#"), r2 = e10.indexOf("?"), n2 = r2 > -1 && (t2 < 0 || r2 < t2);
        return n2 || t2 > -1 ? { pathname: e10.substring(0, n2 ? r2 : t2), query: n2 ? e10.substring(r2, t2 > -1 ? t2 : void 0) : "", hash: t2 > -1 ? e10.slice(t2) : "" } : { pathname: e10, query: "", hash: "" };
      }
      function R(e10, t2) {
        if (!e10.startsWith("/") || !t2) return e10;
        let { pathname: r2, query: n2, hash: i2 } = x(e10);
        return `${t2}${r2}${n2}${i2}`;
      }
      function O(e10, t2) {
        if (!e10.startsWith("/") || !t2) return e10;
        let { pathname: r2, query: n2, hash: i2 } = x(e10);
        return `${r2}${t2}${n2}${i2}`;
      }
      function T(e10, t2) {
        if ("string" != typeof e10) return false;
        let { pathname: r2 } = x(e10);
        return r2 === t2 || r2.startsWith(t2 + "/");
      }
      let P = /* @__PURE__ */ new WeakMap();
      function C(e10, t2) {
        let r2;
        if (!t2) return { pathname: e10 };
        let n2 = P.get(t2);
        n2 || (n2 = t2.map((e11) => e11.toLowerCase()), P.set(t2, n2));
        let i2 = e10.split("/", 2);
        if (!i2[1]) return { pathname: e10 };
        let o2 = i2[1].toLowerCase(), a2 = n2.indexOf(o2);
        return a2 < 0 ? { pathname: e10 } : (r2 = t2[a2], { pathname: e10 = e10.slice(r2.length + 1) || "/", detectedLocale: r2 });
      }
      let N = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
      function I(e10, t2) {
        return new URL(String(e10).replace(N, "localhost"), t2 && String(t2).replace(N, "localhost"));
      }
      let A = Symbol("NextURLInternal");
      class L {
        constructor(e10, t2, r2) {
          let n2, i2;
          "object" == typeof t2 && "pathname" in t2 || "string" == typeof t2 ? (n2 = t2, i2 = r2 || {}) : i2 = r2 || t2 || {}, this[A] = { url: I(e10, n2 ?? i2.base), options: i2, basePath: "" }, this.analyze();
        }
        analyze() {
          var e10, t2, r2, n2, i2;
          let o2 = function(e11, t3) {
            let { basePath: r3, i18n: n3, trailingSlash: i3 } = t3.nextConfig ?? {}, o3 = { pathname: e11, trailingSlash: "/" !== e11 ? e11.endsWith("/") : i3 };
            r3 && T(o3.pathname, r3) && (o3.pathname = function(e12, t4) {
              if (!T(e12, t4)) return e12;
              let r4 = e12.slice(t4.length);
              return r4.startsWith("/") ? r4 : `/${r4}`;
            }(o3.pathname, r3), o3.basePath = r3);
            let a3 = o3.pathname;
            if (o3.pathname.startsWith("/_next/data/") && o3.pathname.endsWith(".json")) {
              let e12 = o3.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
              o3.buildId = e12[0], a3 = "index" !== e12[1] ? `/${e12.slice(1).join("/")}` : "/", true === t3.parseData && (o3.pathname = a3);
            }
            if (n3) {
              let e12 = t3.i18nProvider ? t3.i18nProvider.analyze(o3.pathname) : C(o3.pathname, n3.locales);
              o3.locale = e12.detectedLocale, o3.pathname = e12.pathname ?? o3.pathname, !e12.detectedLocale && o3.buildId && (e12 = t3.i18nProvider ? t3.i18nProvider.analyze(a3) : C(a3, n3.locales)).detectedLocale && (o3.locale = e12.detectedLocale);
            }
            return o3;
          }(this[A].url.pathname, { nextConfig: this[A].options.nextConfig, parseData: true, i18nProvider: this[A].options.i18nProvider }), a2 = function(e11, t3) {
            let r3;
            if (t3?.host && !Array.isArray(t3.host)) r3 = t3.host.toString().split(":", 1)[0];
            else {
              if (!e11.hostname) return;
              r3 = e11.hostname;
            }
            return r3.toLowerCase();
          }(this[A].url, this[A].options.headers);
          this[A].domainLocale = this[A].options.i18nProvider ? this[A].options.i18nProvider.detectDomainLocale(a2) : function(e11, t3, r3) {
            if (e11) {
              for (let n3 of (r3 && (r3 = r3.toLowerCase()), e11)) if (t3 === n3.domain?.split(":", 1)[0].toLowerCase() || r3 === n3.defaultLocale.toLowerCase() || n3.locales?.some((e12) => e12.toLowerCase() === r3)) return n3;
            }
          }(null == (t2 = this[A].options.nextConfig) || null == (e10 = t2.i18n) ? void 0 : e10.domains, a2);
          let s2 = (null == (r2 = this[A].domainLocale) ? void 0 : r2.defaultLocale) || (null == (i2 = this[A].options.nextConfig) || null == (n2 = i2.i18n) ? void 0 : n2.defaultLocale);
          this[A].url.pathname = o2.pathname, this[A].defaultLocale = s2, this[A].basePath = o2.basePath ?? "", this[A].buildId = o2.buildId, this[A].locale = o2.locale ?? s2, this[A].trailingSlash = o2.trailingSlash;
        }
        formatPathname() {
          var e10;
          let t2;
          return t2 = function(e11, t3, r2, n2) {
            if (!t3 || t3 === r2) return e11;
            let i2 = e11.toLowerCase();
            return !n2 && (T(i2, "/api") || T(i2, `/${t3.toLowerCase()}`)) ? e11 : R(e11, `/${t3}`);
          }((e10 = { basePath: this[A].basePath, buildId: this[A].buildId, defaultLocale: this[A].options.forceLocale ? void 0 : this[A].defaultLocale, locale: this[A].locale, pathname: this[A].url.pathname, trailingSlash: this[A].trailingSlash }).pathname, e10.locale, e10.buildId ? void 0 : e10.defaultLocale, e10.ignorePrefix), (e10.buildId || !e10.trailingSlash) && (t2 = S(t2)), e10.buildId && (t2 = O(R(t2, `/_next/data/${e10.buildId}`), "/" === e10.pathname ? "index.json" : ".json")), t2 = R(t2, e10.basePath), !e10.buildId && e10.trailingSlash ? t2.endsWith("/") ? t2 : O(t2, "/") : S(t2);
        }
        formatSearch() {
          return this[A].url.search;
        }
        get buildId() {
          return this[A].buildId;
        }
        set buildId(e10) {
          this[A].buildId = e10;
        }
        get locale() {
          return this[A].locale ?? "";
        }
        set locale(e10) {
          var t2, r2;
          if (!this[A].locale || !(null == (r2 = this[A].options.nextConfig) || null == (t2 = r2.i18n) ? void 0 : t2.locales.includes(e10))) throw Object.defineProperty(TypeError(`The NextURL configuration includes no locale "${e10}"`), "__NEXT_ERROR_CODE", { value: "E597", enumerable: false, configurable: true });
          this[A].locale = e10;
        }
        get defaultLocale() {
          return this[A].defaultLocale;
        }
        get domainLocale() {
          return this[A].domainLocale;
        }
        get searchParams() {
          return this[A].url.searchParams;
        }
        get host() {
          return this[A].url.host;
        }
        set host(e10) {
          this[A].url.host = e10;
        }
        get hostname() {
          return this[A].url.hostname;
        }
        set hostname(e10) {
          this[A].url.hostname = e10;
        }
        get port() {
          return this[A].url.port;
        }
        set port(e10) {
          this[A].url.port = e10;
        }
        get protocol() {
          return this[A].url.protocol;
        }
        set protocol(e10) {
          this[A].url.protocol = e10;
        }
        get href() {
          let e10 = this.formatPathname(), t2 = this.formatSearch();
          return `${this.protocol}//${this.host}${e10}${t2}${this.hash}`;
        }
        set href(e10) {
          this[A].url = I(e10), this.analyze();
        }
        get origin() {
          return this[A].url.origin;
        }
        get pathname() {
          return this[A].url.pathname;
        }
        set pathname(e10) {
          this[A].url.pathname = e10;
        }
        get hash() {
          return this[A].url.hash;
        }
        set hash(e10) {
          this[A].url.hash = e10;
        }
        get search() {
          return this[A].url.search;
        }
        set search(e10) {
          this[A].url.search = e10;
        }
        get password() {
          return this[A].url.password;
        }
        set password(e10) {
          this[A].url.password = e10;
        }
        get username() {
          return this[A].url.username;
        }
        set username(e10) {
          this[A].url.username = e10;
        }
        get basePath() {
          return this[A].basePath;
        }
        set basePath(e10) {
          this[A].basePath = e10.startsWith("/") ? e10 : `/${e10}`;
        }
        toString() {
          return this.href;
        }
        toJSON() {
          return this.href;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { href: this.href, origin: this.origin, protocol: this.protocol, username: this.username, password: this.password, host: this.host, hostname: this.hostname, port: this.port, pathname: this.pathname, search: this.search, searchParams: this.searchParams, hash: this.hash };
        }
        clone() {
          return new L(String(this), this[A].options);
        }
      }
      var j, $, k, M, D, U, B, V, q, G, H, F, X = e.i(28042);
      let z = Symbol("internal request");
      class W extends Request {
        constructor(e10, t2 = {}) {
          const r2 = "string" != typeof e10 && "url" in e10 ? e10.url : String(e10);
          v(r2), e10 instanceof Request ? super(e10, t2) : super(r2, t2);
          const n2 = new L(r2, { headers: m(this.headers), nextConfig: t2.nextConfig });
          this[z] = { cookies: new X.RequestCookies(this.headers), nextUrl: n2, url: n2.toString() };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, nextUrl: this.nextUrl, url: this.url, bodyUsed: this.bodyUsed, cache: this.cache, credentials: this.credentials, destination: this.destination, headers: Object.fromEntries(this.headers), integrity: this.integrity, keepalive: this.keepalive, method: this.method, mode: this.mode, redirect: this.redirect, referrer: this.referrer, referrerPolicy: this.referrerPolicy, signal: this.signal };
        }
        get cookies() {
          return this[z].cookies;
        }
        get nextUrl() {
          return this[z].nextUrl;
        }
        get page() {
          throw new p();
        }
        get ua() {
          throw new d();
        }
        get url() {
          return this[z].url;
        }
      }
      class K {
        static get(e10, t2, r2) {
          let n2 = Reflect.get(e10, t2, r2);
          return "function" == typeof n2 ? n2.bind(e10) : n2;
        }
        static set(e10, t2, r2, n2) {
          return Reflect.set(e10, t2, r2, n2);
        }
        static has(e10, t2) {
          return Reflect.has(e10, t2);
        }
        static deleteProperty(e10, t2) {
          return Reflect.deleteProperty(e10, t2);
        }
      }
      let J = Symbol("internal response"), Y = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
      function Z(e10, t2) {
        var r2;
        if (null == e10 || null == (r2 = e10.request) ? void 0 : r2.headers) {
          if (!(e10.request.headers instanceof Headers)) throw Object.defineProperty(Error("request.headers must be an instance of Headers"), "__NEXT_ERROR_CODE", { value: "E119", enumerable: false, configurable: true });
          let r3 = [];
          for (let [n2, i2] of e10.request.headers) t2.set("x-middleware-request-" + n2, i2), r3.push(n2);
          t2.set("x-middleware-override-headers", r3.join(","));
        }
      }
      class Q extends Response {
        constructor(e10, t2 = {}) {
          super(e10, t2);
          const r2 = this.headers, n2 = new Proxy(new X.ResponseCookies(r2), { get(e11, n3, i2) {
            switch (n3) {
              case "delete":
              case "set":
                return (...i3) => {
                  let o2 = Reflect.apply(e11[n3], e11, i3), a2 = new Headers(r2);
                  return o2 instanceof X.ResponseCookies && r2.set("x-middleware-set-cookie", o2.getAll().map((e12) => (0, X.stringifyCookie)(e12)).join(",")), Z(t2, a2), o2;
                };
              default:
                return K.get(e11, n3, i2);
            }
          } });
          this[J] = { cookies: n2, url: t2.url ? new L(t2.url, { headers: m(r2), nextConfig: t2.nextConfig }) : void 0 };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, url: this.url, body: this.body, bodyUsed: this.bodyUsed, headers: Object.fromEntries(this.headers), ok: this.ok, redirected: this.redirected, status: this.status, statusText: this.statusText, type: this.type };
        }
        get cookies() {
          return this[J].cookies;
        }
        static json(e10, t2) {
          let r2 = Response.json(e10, t2);
          return new Q(r2.body, r2);
        }
        static redirect(e10, t2) {
          let r2 = "number" == typeof t2 ? t2 : (null == t2 ? void 0 : t2.status) ?? 307;
          if (!Y.has(r2)) throw Object.defineProperty(RangeError('Failed to execute "redirect" on "response": Invalid status code'), "__NEXT_ERROR_CODE", { value: "E529", enumerable: false, configurable: true });
          let n2 = "object" == typeof t2 ? t2 : {}, i2 = new Headers(null == n2 ? void 0 : n2.headers);
          return i2.set("Location", v(e10)), new Q(null, { ...n2, headers: i2, status: r2 });
        }
        static rewrite(e10, t2) {
          let r2 = new Headers(null == t2 ? void 0 : t2.headers);
          return r2.set("x-middleware-rewrite", v(e10)), Z(t2, r2), new Q(null, { ...t2, headers: r2 });
        }
        static next(e10) {
          let t2 = new Headers(null == e10 ? void 0 : e10.headers);
          return t2.set("x-middleware-next", "1"), Z(e10, t2), new Q(null, { ...e10, headers: t2 });
        }
      }
      function ee(e10, t2) {
        let r2 = "string" == typeof t2 ? new URL(t2) : t2, n2 = new URL(e10, t2), i2 = n2.origin === r2.origin;
        return { url: i2 ? n2.toString().slice(r2.origin.length) : n2.toString(), isRelative: i2 };
      }
      let et = "next-router-prefetch", er = ["rsc", "next-router-state-tree", et, "next-hmr-refresh", "next-router-segment-prefetch"], en = "_rsc";
      class ei extends Error {
        constructor() {
          super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
        }
        static callable() {
          throw new ei();
        }
      }
      class eo extends Headers {
        constructor(e10) {
          super(), this.headers = new Proxy(e10, { get(t2, r2, n2) {
            if ("symbol" == typeof r2) return K.get(t2, r2, n2);
            let i2 = r2.toLowerCase(), o2 = Object.keys(e10).find((e11) => e11.toLowerCase() === i2);
            if (void 0 !== o2) return K.get(t2, o2, n2);
          }, set(t2, r2, n2, i2) {
            if ("symbol" == typeof r2) return K.set(t2, r2, n2, i2);
            let o2 = r2.toLowerCase(), a2 = Object.keys(e10).find((e11) => e11.toLowerCase() === o2);
            return K.set(t2, a2 ?? r2, n2, i2);
          }, has(t2, r2) {
            if ("symbol" == typeof r2) return K.has(t2, r2);
            let n2 = r2.toLowerCase(), i2 = Object.keys(e10).find((e11) => e11.toLowerCase() === n2);
            return void 0 !== i2 && K.has(t2, i2);
          }, deleteProperty(t2, r2) {
            if ("symbol" == typeof r2) return K.deleteProperty(t2, r2);
            let n2 = r2.toLowerCase(), i2 = Object.keys(e10).find((e11) => e11.toLowerCase() === n2);
            return void 0 === i2 || K.deleteProperty(t2, i2);
          } });
        }
        static seal(e10) {
          return new Proxy(e10, { get(e11, t2, r2) {
            switch (t2) {
              case "append":
              case "delete":
              case "set":
                return ei.callable;
              default:
                return K.get(e11, t2, r2);
            }
          } });
        }
        merge(e10) {
          return Array.isArray(e10) ? e10.join(", ") : e10;
        }
        static from(e10) {
          return e10 instanceof Headers ? e10 : new eo(e10);
        }
        append(e10, t2) {
          let r2 = this.headers[e10];
          "string" == typeof r2 ? this.headers[e10] = [r2, t2] : Array.isArray(r2) ? r2.push(t2) : this.headers[e10] = t2;
        }
        delete(e10) {
          delete this.headers[e10];
        }
        get(e10) {
          let t2 = this.headers[e10];
          return void 0 !== t2 ? this.merge(t2) : null;
        }
        has(e10) {
          return void 0 !== this.headers[e10];
        }
        set(e10, t2) {
          this.headers[e10] = t2;
        }
        forEach(e10, t2) {
          for (let [r2, n2] of this.entries()) e10.call(t2, n2, r2, this);
        }
        *entries() {
          for (let e10 of Object.keys(this.headers)) {
            let t2 = e10.toLowerCase(), r2 = this.get(t2);
            yield [t2, r2];
          }
        }
        *keys() {
          for (let e10 of Object.keys(this.headers)) {
            let t2 = e10.toLowerCase();
            yield t2;
          }
        }
        *values() {
          for (let e10 of Object.keys(this.headers)) {
            let t2 = this.get(e10);
            yield t2;
          }
        }
        [Symbol.iterator]() {
          return this.entries();
        }
      }
      let ea = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", { value: "E504", enumerable: false, configurable: true });
      class es {
        disable() {
          throw ea;
        }
        getStore() {
        }
        run() {
          throw ea;
        }
        exit() {
          throw ea;
        }
        enterWith() {
          throw ea;
        }
        static bind(e10) {
          return e10;
        }
      }
      let el = "u" > typeof globalThis && globalThis.AsyncLocalStorage;
      function eu() {
        return el ? new el() : new es();
      }
      let ec = eu();
      class ep extends Error {
        constructor() {
          super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
        }
        static callable() {
          throw new ep();
        }
      }
      class ed {
        static seal(e10) {
          return new Proxy(e10, { get(e11, t2, r2) {
            switch (t2) {
              case "clear":
              case "delete":
              case "set":
                return ep.callable;
              default:
                return K.get(e11, t2, r2);
            }
          } });
        }
      }
      let ef = Symbol.for("next.mutated.cookies");
      class eh {
        static wrap(e10, t2) {
          let r2 = new X.ResponseCookies(new Headers());
          for (let t3 of e10.getAll()) r2.set(t3);
          let n2 = [], i2 = /* @__PURE__ */ new Set(), o2 = () => {
            let e11 = ec.getStore();
            if (e11 && (e11.pathWasRevalidated = 1), n2 = r2.getAll().filter((e12) => i2.has(e12.name)), t2) {
              let e12 = [];
              for (let t3 of n2) {
                let r3 = new X.ResponseCookies(new Headers());
                r3.set(t3), e12.push(r3.toString());
              }
              t2(e12);
            }
          }, a2 = new Proxy(r2, { get(e11, t3, r3) {
            switch (t3) {
              case ef:
                return n2;
              case "delete":
                return function(...t4) {
                  i2.add("string" == typeof t4[0] ? t4[0] : t4[0].name);
                  try {
                    return e11.delete(...t4), a2;
                  } finally {
                    o2();
                  }
                };
              case "set":
                return function(...t4) {
                  i2.add("string" == typeof t4[0] ? t4[0] : t4[0].name);
                  try {
                    return e11.set(...t4), a2;
                  } finally {
                    o2();
                  }
                };
              default:
                return K.get(e11, t3, r3);
            }
          } });
          return a2;
        }
      }
      function eg(e10, t2) {
        if ("action" !== e10.phase) throw new ep();
      }
      var em = ((j = em || {}).handleRequest = "BaseServer.handleRequest", j.run = "BaseServer.run", j.pipe = "BaseServer.pipe", j.getStaticHTML = "BaseServer.getStaticHTML", j.render = "BaseServer.render", j.renderToResponseWithComponents = "BaseServer.renderToResponseWithComponents", j.renderToResponse = "BaseServer.renderToResponse", j.renderToHTML = "BaseServer.renderToHTML", j.renderError = "BaseServer.renderError", j.renderErrorToResponse = "BaseServer.renderErrorToResponse", j.renderErrorToHTML = "BaseServer.renderErrorToHTML", j.render404 = "BaseServer.render404", j), ev = (($ = ev || {}).loadDefaultErrorComponents = "LoadComponents.loadDefaultErrorComponents", $.loadComponents = "LoadComponents.loadComponents", $), eb = ((k = eb || {}).getRequestHandler = "NextServer.getRequestHandler", k.getRequestHandlerWithMetadata = "NextServer.getRequestHandlerWithMetadata", k.getServer = "NextServer.getServer", k.getServerRequestHandler = "NextServer.getServerRequestHandler", k.createServer = "createServer.createServer", k), ey = ((M = ey || {}).compression = "NextNodeServer.compression", M.getBuildId = "NextNodeServer.getBuildId", M.createComponentTree = "NextNodeServer.createComponentTree", M.clientComponentLoading = "NextNodeServer.clientComponentLoading", M.getLayoutOrPageModule = "NextNodeServer.getLayoutOrPageModule", M.generateStaticRoutes = "NextNodeServer.generateStaticRoutes", M.generateFsStaticRoutes = "NextNodeServer.generateFsStaticRoutes", M.generatePublicRoutes = "NextNodeServer.generatePublicRoutes", M.generateImageRoutes = "NextNodeServer.generateImageRoutes.route", M.sendRenderResult = "NextNodeServer.sendRenderResult", M.proxyRequest = "NextNodeServer.proxyRequest", M.runApi = "NextNodeServer.runApi", M.render = "NextNodeServer.render", M.renderHTML = "NextNodeServer.renderHTML", M.imageOptimizer = "NextNodeServer.imageOptimizer", M.getPagePath = "NextNodeServer.getPagePath", M.getRoutesManifest = "NextNodeServer.getRoutesManifest", M.findPageComponents = "NextNodeServer.findPageComponents", M.getFontManifest = "NextNodeServer.getFontManifest", M.getServerComponentManifest = "NextNodeServer.getServerComponentManifest", M.getRequestHandler = "NextNodeServer.getRequestHandler", M.renderToHTML = "NextNodeServer.renderToHTML", M.renderError = "NextNodeServer.renderError", M.renderErrorToHTML = "NextNodeServer.renderErrorToHTML", M.render404 = "NextNodeServer.render404", M.startResponse = "NextNodeServer.startResponse", M.route = "route", M.onProxyReq = "onProxyReq", M.apiResolver = "apiResolver", M.internalFetch = "internalFetch", M), ew = ((D = ew || {}).startServer = "startServer.startServer", D), eE = ((U = eE || {}).getServerSideProps = "Render.getServerSideProps", U.getStaticProps = "Render.getStaticProps", U.renderToString = "Render.renderToString", U.renderDocument = "Render.renderDocument", U.createBodyResult = "Render.createBodyResult", U), e_ = ((B = e_ || {}).renderToString = "AppRender.renderToString", B.renderToReadableStream = "AppRender.renderToReadableStream", B.getBodyResult = "AppRender.getBodyResult", B.fetch = "AppRender.fetch", B), eS = ((V = eS || {}).executeRoute = "Router.executeRoute", V), ex = ((q = ex || {}).runHandler = "Node.runHandler", q), eR = ((G = eR || {}).runHandler = "AppRouteRouteHandlers.runHandler", G), eO = ((H = eO || {}).generateMetadata = "ResolveMetadata.generateMetadata", H.generateViewport = "ResolveMetadata.generateViewport", H), eT = ((F = eT || {}).execute = "Middleware.execute", F);
      let eP = /* @__PURE__ */ new Set(["Middleware.execute", "BaseServer.handleRequest", "Render.getServerSideProps", "Render.getStaticProps", "AppRender.fetch", "AppRender.getBodyResult", "Render.renderDocument", "Node.runHandler", "AppRouteRouteHandlers.runHandler", "ResolveMetadata.generateMetadata", "ResolveMetadata.generateViewport", "NextNodeServer.createComponentTree", "NextNodeServer.findPageComponents", "NextNodeServer.getLayoutOrPageModule", "NextNodeServer.startResponse", "NextNodeServer.clientComponentLoading"]), eC = /* @__PURE__ */ new Set(["NextNodeServer.findPageComponents", "NextNodeServer.createComponentTree", "NextNodeServer.clientComponentLoading"]);
      function eN(e10) {
        return null !== e10 && "object" == typeof e10 && "then" in e10 && "function" == typeof e10.then;
      }
      let eI = process.env.NEXT_OTEL_PERFORMANCE_PREFIX, { context: eA, propagation: eL, trace: ej, SpanStatusCode: e$, SpanKind: ek, ROOT_CONTEXT: eM } = t = e.r(59110);
      class eD extends Error {
        constructor(e10, t2) {
          super(), this.bubble = e10, this.result = t2;
        }
      }
      let eU = (e10, t2) => {
        "object" == typeof t2 && null !== t2 && t2 instanceof eD && t2.bubble ? e10.setAttribute("next.bubble", true) : (t2 && (e10.recordException(t2), e10.setAttribute("error.type", t2.name)), e10.setStatus({ code: e$.ERROR, message: null == t2 ? void 0 : t2.message })), e10.end();
      }, eB = /* @__PURE__ */ new Map(), eV = t.createContextKey("next.rootSpanId"), eq = 0, eG = { set(e10, t2, r2) {
        e10.push({ key: t2, value: r2 });
      } }, eH = (r = new class e {
        getTracerInstance() {
          return ej.getTracer("next.js", "0.0.1");
        }
        getContext() {
          return eA;
        }
        getTracePropagationData() {
          let e10 = eA.active(), t2 = [];
          return eL.inject(e10, t2, eG), t2;
        }
        getActiveScopeSpan() {
          return ej.getSpan(null == eA ? void 0 : eA.active());
        }
        withPropagatedContext(e10, t2, r2) {
          let n2 = eA.active();
          if (ej.getSpanContext(n2)) return t2();
          let i2 = eL.extract(n2, e10, r2);
          return eA.with(i2, t2);
        }
        trace(...e10) {
          let [t2, r2, n2] = e10, { fn: i2, options: o2 } = "function" == typeof r2 ? { fn: r2, options: {} } : { fn: n2, options: { ...r2 } }, a2 = o2.spanName ?? t2;
          if (!eP.has(t2) && "1" !== process.env.NEXT_OTEL_VERBOSE || o2.hideSpan) return i2();
          let s2 = this.getSpanContext((null == o2 ? void 0 : o2.parentSpan) ?? this.getActiveScopeSpan());
          s2 || (s2 = (null == eA ? void 0 : eA.active()) ?? eM);
          let l2 = s2.getValue(eV), u2 = "number" != typeof l2 || !eB.has(l2), c2 = eq++;
          return o2.attributes = { "next.span_name": a2, "next.span_type": t2, ...o2.attributes }, eA.with(s2.setValue(eV, c2), () => this.getTracerInstance().startActiveSpan(a2, o2, (e11) => {
            let r3;
            eI && t2 && eC.has(t2) && (r3 = "performance" in globalThis && "measure" in performance ? globalThis.performance.now() : void 0);
            let n3 = false, a3 = () => {
              !n3 && (n3 = true, eB.delete(c2), r3 && performance.measure(`${eI}:next-${(t2.split(".").pop() || "").replace(/[A-Z]/g, (e12) => "-" + e12.toLowerCase())}`, { start: r3, end: performance.now() }));
            };
            if (u2 && eB.set(c2, new Map(Object.entries(o2.attributes ?? {}))), i2.length > 1) try {
              return i2(e11, (t3) => eU(e11, t3));
            } catch (t3) {
              throw eU(e11, t3), t3;
            } finally {
              a3();
            }
            try {
              let t3 = i2(e11);
              if (eN(t3)) return t3.then((t4) => (e11.end(), t4)).catch((t4) => {
                throw eU(e11, t4), t4;
              }).finally(a3);
              return e11.end(), a3(), t3;
            } catch (t3) {
              throw eU(e11, t3), a3(), t3;
            }
          }));
        }
        wrap(...e10) {
          let t2 = this, [r2, n2, i2] = 3 === e10.length ? e10 : [e10[0], {}, e10[1]];
          return eP.has(r2) || "1" === process.env.NEXT_OTEL_VERBOSE ? function() {
            let e11 = n2;
            "function" == typeof e11 && "function" == typeof i2 && (e11 = e11.apply(this, arguments));
            let o2 = arguments.length - 1, a2 = arguments[o2];
            if ("function" != typeof a2) return t2.trace(r2, e11, () => i2.apply(this, arguments));
            {
              let n3 = t2.getContext().bind(eA.active(), a2);
              return t2.trace(r2, e11, (e12, t3) => (arguments[o2] = function(e13) {
                return null == t3 || t3(e13), n3.apply(this, arguments);
              }, i2.apply(this, arguments)));
            }
          } : i2;
        }
        startSpan(...e10) {
          let [t2, r2] = e10, n2 = this.getSpanContext((null == r2 ? void 0 : r2.parentSpan) ?? this.getActiveScopeSpan());
          return this.getTracerInstance().startSpan(t2, r2, n2);
        }
        getSpanContext(e10) {
          return e10 ? ej.setSpan(eA.active(), e10) : void 0;
        }
        getRootSpanAttributes() {
          let e10 = eA.active().getValue(eV);
          return eB.get(e10);
        }
        setRootSpanAttribute(e10, t2) {
          let r2 = eA.active().getValue(eV), n2 = eB.get(r2);
          n2 && !n2.has(e10) && n2.set(e10, t2);
        }
        withSpan(e10, t2) {
          let r2 = ej.setSpan(eA.active(), e10);
          return eA.with(r2, t2);
        }
      }(), () => r), eF = "__prerender_bypass";
      Symbol("__next_preview_data"), Symbol(eF);
      class eX {
        constructor(e10, t2, r2, n2) {
          var i2;
          const o2 = e10 && function(e11, t3) {
            let r3 = eo.from(e11.headers);
            return { isOnDemandRevalidate: r3.get("x-prerender-revalidate") === t3.previewModeId, revalidateOnlyGenerated: r3.has("x-prerender-revalidate-if-generated") };
          }(t2, e10).isOnDemandRevalidate, a2 = null == (i2 = r2.get(eF)) ? void 0 : i2.value;
          this._isEnabled = !!(!o2 && a2 && e10 && a2 === e10.previewModeId), this._previewModeId = null == e10 ? void 0 : e10.previewModeId, this._mutableCookies = n2;
        }
        get isEnabled() {
          return this._isEnabled;
        }
        enable() {
          if (!this._previewModeId) throw Object.defineProperty(Error("Invariant: previewProps missing previewModeId this should never happen"), "__NEXT_ERROR_CODE", { value: "E93", enumerable: false, configurable: true });
          this._mutableCookies.set({ name: eF, value: this._previewModeId, httpOnly: true, sameSite: "none", secure: true, path: "/" }), this._isEnabled = true;
        }
        disable() {
          this._mutableCookies.set({ name: eF, value: "", httpOnly: true, sameSite: "none", secure: true, path: "/", expires: /* @__PURE__ */ new Date(0) }), this._isEnabled = false;
        }
      }
      function ez(e10, t2) {
        if ("x-middleware-set-cookie" in e10.headers && "string" == typeof e10.headers["x-middleware-set-cookie"]) {
          let r2 = e10.headers["x-middleware-set-cookie"], n2 = new Headers();
          for (let e11 of g(r2)) n2.append("set-cookie", e11);
          for (let e11 of new X.ResponseCookies(n2).getAll()) t2.set(e11);
        }
      }
      let eW = eu();
      class eK extends Error {
        constructor(e10, t2) {
          super(`Invariant: ${e10.endsWith(".") ? e10 : e10 + "."} This is a bug in Next.js.`, t2), this.name = "InvariantError";
        }
      }
      var eJ = e.i(99734);
      e.i(51615);
      process.env.NEXT_PRIVATE_DEBUG_CACHE, Symbol.for("@next/cache-handlers");
      let eY = Symbol.for("@next/cache-handlers-map"), eZ = Symbol.for("@next/cache-handlers-set"), eQ = globalThis;
      function e0() {
        if (eQ[eY]) return eQ[eY].entries();
      }
      async function e1(e10, t2) {
        if (!e10) return t2();
        let r2 = e2(e10);
        try {
          return await t2();
        } finally {
          var n2, i2;
          let t3, o2, a2 = (n2 = r2, i2 = e2(e10), t3 = new Set(n2.pendingRevalidatedTags.map((e11) => {
            let t4 = "object" == typeof e11.profile ? JSON.stringify(e11.profile) : e11.profile || "";
            return `${e11.tag}:${t4}`;
          })), o2 = new Set(n2.pendingRevalidateWrites), { pendingRevalidatedTags: i2.pendingRevalidatedTags.filter((e11) => {
            let r3 = "object" == typeof e11.profile ? JSON.stringify(e11.profile) : e11.profile || "";
            return !t3.has(`${e11.tag}:${r3}`);
          }), pendingRevalidates: Object.fromEntries(Object.entries(i2.pendingRevalidates).filter(([e11]) => !(e11 in n2.pendingRevalidates))), pendingRevalidateWrites: i2.pendingRevalidateWrites.filter((e11) => !o2.has(e11)) });
          await e9(e10, a2);
        }
      }
      function e2(e10) {
        return { pendingRevalidatedTags: e10.pendingRevalidatedTags ? [...e10.pendingRevalidatedTags] : [], pendingRevalidates: { ...e10.pendingRevalidates }, pendingRevalidateWrites: e10.pendingRevalidateWrites ? [...e10.pendingRevalidateWrites] : [] };
      }
      async function e3(e10, t2, r2) {
        if (0 === e10.length) return;
        let n2 = function() {
          if (eQ[eZ]) return eQ[eZ].values();
        }(), i2 = [], o2 = /* @__PURE__ */ new Map();
        for (let t3 of e10) {
          let e11, r3 = t3.profile;
          for (let [t4] of o2) if ("string" == typeof t4 && "string" == typeof r3 && t4 === r3 || "object" == typeof t4 && "object" == typeof r3 && JSON.stringify(t4) === JSON.stringify(r3) || t4 === r3) {
            e11 = t4;
            break;
          }
          let n3 = e11 || r3;
          o2.has(n3) || o2.set(n3, []), o2.get(n3).push(t3.tag);
        }
        for (let [e11, s2] of o2) {
          let o3;
          if (e11) {
            let t3;
            if ("object" == typeof e11) t3 = e11;
            else if ("string" == typeof e11) {
              var a2;
              if (!(t3 = null == r2 || null == (a2 = r2.cacheLifeProfiles) ? void 0 : a2[e11])) throw Object.defineProperty(Error(`Invalid profile provided "${e11}" must be configured under cacheLife in next.config or be "max"`), "__NEXT_ERROR_CODE", { value: "E873", enumerable: false, configurable: true });
            }
            t3 && (o3 = { expire: t3.expire });
          }
          for (let t3 of n2 || []) e11 ? i2.push(null == t3.updateTags ? void 0 : t3.updateTags.call(t3, s2, o3)) : i2.push(null == t3.updateTags ? void 0 : t3.updateTags.call(t3, s2));
          t2 && i2.push(t2.revalidateTag(s2, o3));
        }
        await Promise.all(i2);
      }
      async function e9(e10, t2) {
        let r2 = (null == t2 ? void 0 : t2.pendingRevalidatedTags) ?? e10.pendingRevalidatedTags ?? [], n2 = (null == t2 ? void 0 : t2.pendingRevalidates) ?? e10.pendingRevalidates ?? {}, i2 = (null == t2 ? void 0 : t2.pendingRevalidateWrites) ?? e10.pendingRevalidateWrites ?? [];
        return Promise.all([e3(r2, e10.incrementalCache, e10), ...Object.values(n2), ...i2]);
      }
      let e6 = eu();
      class e5 {
        constructor({ waitUntil: e10, onClose: t2, onTaskError: r2 }) {
          this.workUnitStores = /* @__PURE__ */ new Set(), this.waitUntil = e10, this.onClose = t2, this.onTaskError = r2, this.callbackQueue = new eJ.default(), this.callbackQueue.pause();
        }
        after(e10) {
          if (eN(e10)) this.waitUntil || e4(), this.waitUntil(e10.catch((e11) => this.reportTaskError("promise", e11)));
          else if ("function" == typeof e10) this.addCallback(e10);
          else throw Object.defineProperty(Error("`after()`: Argument must be a promise or a function"), "__NEXT_ERROR_CODE", { value: "E50", enumerable: false, configurable: true });
        }
        addCallback(e10) {
          var t2;
          this.waitUntil || e4();
          let r2 = eW.getStore();
          r2 && this.workUnitStores.add(r2);
          let n2 = e6.getStore(), i2 = n2 ? n2.rootTaskSpawnPhase : null == r2 ? void 0 : r2.phase;
          this.runCallbacksOnClosePromise || (this.runCallbacksOnClosePromise = this.runCallbacksOnClose(), this.waitUntil(this.runCallbacksOnClosePromise));
          let o2 = (t2 = async () => {
            try {
              await e6.run({ rootTaskSpawnPhase: i2 }, () => e10());
            } catch (e11) {
              this.reportTaskError("function", e11);
            }
          }, el ? el.bind(t2) : es.bind(t2));
          this.callbackQueue.add(o2);
        }
        async runCallbacksOnClose() {
          return await new Promise((e10) => this.onClose(e10)), this.runCallbacks();
        }
        async runCallbacks() {
          if (0 === this.callbackQueue.size) return;
          for (let e11 of this.workUnitStores) e11.phase = "after";
          let e10 = ec.getStore();
          if (!e10) throw Object.defineProperty(new eK("Missing workStore in AfterContext.runCallbacks"), "__NEXT_ERROR_CODE", { value: "E547", enumerable: false, configurable: true });
          return e1(e10, () => (this.callbackQueue.start(), this.callbackQueue.onIdle()));
        }
        reportTaskError(e10, t2) {
          if (console.error("promise" === e10 ? "A promise passed to `after()` rejected:" : "An error occurred in a function passed to `after()`:", t2), this.onTaskError) try {
            null == this.onTaskError || this.onTaskError.call(this, t2);
          } catch (e11) {
            console.error(Object.defineProperty(new eK("`onTaskError` threw while handling an error thrown from an `after` task", { cause: e11 }), "__NEXT_ERROR_CODE", { value: "E569", enumerable: false, configurable: true }));
          }
        }
      }
      function e4() {
        throw Object.defineProperty(Error("`after()` will not work correctly, because `waitUntil` is not available in the current environment."), "__NEXT_ERROR_CODE", { value: "E91", enumerable: false, configurable: true });
      }
      function e8(e10) {
        let t2, r2 = { then: (n2, i2) => (t2 || (t2 = Promise.resolve(e10())), t2.then((e11) => {
          r2.value = e11;
        }).catch(() => {
        }), t2.then(n2, i2)) };
        return r2;
      }
      class e7 {
        onClose(e10) {
          if (this.isClosed) throw Object.defineProperty(Error("Cannot subscribe to a closed CloseController"), "__NEXT_ERROR_CODE", { value: "E365", enumerable: false, configurable: true });
          this.target.addEventListener("close", e10), this.listeners++;
        }
        dispatchClose() {
          if (this.isClosed) throw Object.defineProperty(Error("Cannot close a CloseController multiple times"), "__NEXT_ERROR_CODE", { value: "E229", enumerable: false, configurable: true });
          this.listeners > 0 && this.target.dispatchEvent(new Event("close")), this.isClosed = true;
        }
        constructor() {
          this.target = new EventTarget(), this.listeners = 0, this.isClosed = false;
        }
      }
      function te() {
        return { previewModeId: process.env.__NEXT_PREVIEW_MODE_ID || "", previewModeSigningKey: process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY || "", previewModeEncryptionKey: process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY || "" };
      }
      let tt = Symbol.for("@next/request-context");
      async function tr(e10, t2, r2) {
        let n2 = /* @__PURE__ */ new Set();
        for (let t3 of ((e11) => {
          let t4 = ["/layout"];
          if (e11.startsWith("/")) {
            let r3 = e11.split("/");
            for (let e12 = 1; e12 < r3.length + 1; e12++) {
              let n3 = r3.slice(0, e12).join("/");
              n3 && (n3.endsWith("/page") || n3.endsWith("/route") || (n3 = `${n3}${!n3.endsWith("/") ? "/" : ""}layout`), t4.push(n3));
            }
          }
          return t4;
        })(e10)) t3 = `${f}${t3}`, n2.add(t3);
        if (t2.pathname && (!r2 || 0 === r2.size)) {
          let e11 = `${f}${t2.pathname}`;
          n2.add(e11);
        }
        n2.has(`${f}/`) && n2.add(`${f}/index`), n2.has(`${f}/index`) && n2.add(`${f}/`);
        let i2 = Array.from(n2);
        return { tags: i2, expirationsByCacheKind: function(e11) {
          let t3 = /* @__PURE__ */ new Map(), r3 = e0();
          if (r3) for (let [n3, i3] of r3) "getExpiration" in i3 && t3.set(n3, e8(async () => i3.getExpiration(e11)));
          return t3;
        }(i2) };
      }
      class tn extends W {
        constructor(e10) {
          super(e10.input, e10.init), this.sourcePage = e10.page;
        }
        get request() {
          throw Object.defineProperty(new c({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
        respondWith() {
          throw Object.defineProperty(new c({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
        waitUntil() {
          throw Object.defineProperty(new c({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
      }
      let ti = { keys: (e10) => Array.from(e10.keys()), get: (e10, t2) => e10.get(t2) ?? void 0 }, to = (e10, t2) => eH().withPropagatedContext(e10.headers, t2, ti), ta = false;
      async function ts(t2) {
        var r2, n2, i2, o2;
        let a2, s2, u2, c2, p2;
        !function() {
          if (!ta && (ta = true, "true" === process.env.NEXT_PRIVATE_TEST_PROXY)) {
            let { interceptTestApis: t3, wrapRequestHandler: r3 } = e.r(94165);
            t3(), to = r3(to);
          }
        }(), await l();
        let d2 = void 0 !== globalThis.__BUILD_MANIFEST;
        t2.request.url = t2.request.url.replace(/\.rsc($|\?)/, "$1");
        let f2 = t2.bypassNextUrl ? new URL(t2.request.url) : new L(t2.request.url, { headers: t2.request.headers, nextConfig: t2.request.nextConfig });
        for (let e10 of [...f2.searchParams.keys()]) {
          let t3 = f2.searchParams.getAll(e10), r3 = function(e11) {
            for (let t4 of ["nxtP", "nxtI"]) if (e11 !== t4 && e11.startsWith(t4)) return e11.substring(t4.length);
            return null;
          }(e10);
          if (r3) {
            for (let e11 of (f2.searchParams.delete(r3), t3)) f2.searchParams.append(r3, e11);
            f2.searchParams.delete(e10);
          }
        }
        let h2 = process.env.__NEXT_BUILD_ID || "";
        "buildId" in f2 && (h2 = f2.buildId || "", f2.buildId = "");
        let g2 = function(e10) {
          let t3 = new Headers();
          for (let [r3, n3] of Object.entries(e10)) for (let e11 of Array.isArray(n3) ? n3 : [n3]) void 0 !== e11 && ("number" == typeof e11 && (e11 = e11.toString()), t3.append(r3, e11));
          return t3;
        }(t2.request.headers), m2 = g2.has("x-nextjs-data"), v2 = "1" === g2.get("rsc");
        m2 && "/index" === f2.pathname && (f2.pathname = "/");
        let b2 = /* @__PURE__ */ new Map();
        if (!d2) for (let e10 of er) {
          let t3 = g2.get(e10);
          null !== t3 && (b2.set(e10, t3), g2.delete(e10));
        }
        let y2 = f2.searchParams.get(en), E2 = new tn({ page: t2.page, input: ((c2 = (u2 = "string" == typeof f2) ? new URL(f2) : f2).searchParams.delete(en), u2 ? c2.toString() : c2).toString(), init: { body: t2.request.body, headers: g2, method: t2.request.method, nextConfig: t2.request.nextConfig, signal: t2.request.signal } });
        m2 && Object.defineProperty(E2, "__isData", { enumerable: false, value: true }), !globalThis.__incrementalCacheShared && t2.IncrementalCache && (globalThis.__incrementalCache = new t2.IncrementalCache({ CurCacheHandler: t2.incrementalCacheHandler, minimalMode: true, fetchCacheKeyPrefix: "", dev: false, requestHeaders: t2.request.headers, getPrerenderManifest: () => ({ version: -1, routes: {}, dynamicRoutes: {}, notFoundRoutes: [], preview: te() }) }));
        let S2 = t2.request.waitUntil ?? (null == (r2 = null == (p2 = globalThis[tt]) ? void 0 : p2.get()) ? void 0 : r2.waitUntil), x2 = new _({ request: E2, page: t2.page, context: S2 ? { waitUntil: S2 } : void 0 });
        if ((a2 = await to(E2, () => {
          if ("/middleware" === t2.page || "/src/middleware" === t2.page || "/proxy" === t2.page || "/src/proxy" === t2.page) {
            let e10 = x2.waitUntil.bind(x2), r3 = new e7();
            return eH().trace(eT.execute, { spanName: `middleware ${E2.method}`, attributes: { "http.target": E2.nextUrl.pathname, "http.method": E2.method } }, async () => {
              try {
                var n3, i3, o3, a3, l2, u3;
                let c3 = te(), p3 = await tr("/", E2.nextUrl, null), d3 = (l2 = E2.nextUrl, u3 = (e11) => {
                  s2 = e11;
                }, function(e11, t3, r4, n4, i4, o4, a4, s3, l3, u4, c4, p4) {
                  function d4(e12) {
                    r4 && r4.setHeader("Set-Cookie", e12);
                  }
                  let f4 = {};
                  return { type: "request", phase: e11, implicitTags: o4, url: { pathname: n4.pathname, search: n4.search ?? "" }, rootParams: i4, get headers() {
                    return f4.headers || (f4.headers = function(e12) {
                      let t4 = eo.from(e12);
                      for (let e13 of er) t4.delete(e13);
                      return eo.seal(t4);
                    }(t3.headers)), f4.headers;
                  }, get cookies() {
                    if (!f4.cookies) {
                      let e12 = new X.RequestCookies(eo.from(t3.headers));
                      ez(t3, e12), f4.cookies = ed.seal(e12);
                    }
                    return f4.cookies;
                  }, set cookies(value) {
                    f4.cookies = value;
                  }, get mutableCookies() {
                    if (!f4.mutableCookies) {
                      var h3, g3;
                      let e12, n5 = (h3 = t3.headers, g3 = a4 || (r4 ? d4 : void 0), e12 = new X.RequestCookies(eo.from(h3)), eh.wrap(e12, g3));
                      ez(t3, n5), f4.mutableCookies = n5;
                    }
                    return f4.mutableCookies;
                  }, get userspaceMutableCookies() {
                    if (!f4.userspaceMutableCookies) {
                      var m3;
                      let e12;
                      m3 = this, f4.userspaceMutableCookies = e12 = new Proxy(m3.mutableCookies, { get(t4, r5, n5) {
                        switch (r5) {
                          case "delete":
                            return function(...r6) {
                              return eg(m3, "cookies().delete"), t4.delete(...r6), e12;
                            };
                          case "set":
                            return function(...r6) {
                              return eg(m3, "cookies().set"), t4.set(...r6), e12;
                            };
                          default:
                            return K.get(t4, r5, n5);
                        }
                      } });
                    }
                    return f4.userspaceMutableCookies;
                  }, get draftMode() {
                    return f4.draftMode || (f4.draftMode = new eX(l3, t3, this.cookies, this.mutableCookies)), f4.draftMode;
                  }, renderResumeDataCache: null, isHmrRefresh: u4, serverComponentsHmrCache: c4 || globalThis.__serverComponentsHmrCache, devFallbackParams: null };
                }("action", E2, void 0, l2, {}, p3, u3, null, c3, false, void 0, null)), f3 = function({ page: e11, renderOpts: t3, isPrefetchRequest: r4, buildId: n4, previouslyRevalidatedTags: i4, nonce: o4 }) {
                  var a4;
                  let s3 = !t3.shouldWaitOnAllReady && !t3.supportsDynamicResponse && !t3.isDraftMode && !t3.isPossibleServerAction, l3 = t3.dev ?? false, u4 = l3 || s3 && (!!process.env.NEXT_DEBUG_BUILD || "1" === process.env.NEXT_SSG_FETCH_METRICS), c4 = { isStaticGeneration: s3, page: e11, route: (a4 = e11.split("/").reduce((e12, t4, r5, n5) => t4 ? "(" === t4[0] && t4.endsWith(")") || "@" === t4[0] || ("page" === t4 || "route" === t4) && r5 === n5.length - 1 ? e12 : `${e12}/${t4}` : e12, "")).startsWith("/") ? a4 : `/${a4}`, incrementalCache: t3.incrementalCache || globalThis.__incrementalCache, cacheLifeProfiles: t3.cacheLifeProfiles, isBuildTimePrerendering: t3.nextExport, hasReadableErrorStacks: t3.hasReadableErrorStacks, fetchCache: t3.fetchCache, isOnDemandRevalidate: t3.isOnDemandRevalidate, isDraftMode: t3.isDraftMode, isPrefetchRequest: r4, buildId: n4, reactLoadableManifest: (null == t3 ? void 0 : t3.reactLoadableManifest) || {}, assetPrefix: (null == t3 ? void 0 : t3.assetPrefix) || "", nonce: o4, afterContext: function(e12) {
                    let { waitUntil: t4, onClose: r5, onAfterTaskError: n5 } = e12;
                    return new e5({ waitUntil: t4, onClose: r5, onTaskError: n5 });
                  }(t3), cacheComponentsEnabled: t3.cacheComponents, dev: l3, previouslyRevalidatedTags: i4, refreshTagsByCacheKind: function() {
                    let e12 = /* @__PURE__ */ new Map(), t4 = e0();
                    if (t4) for (let [r5, n5] of t4) "refreshTags" in n5 && e12.set(r5, e8(async () => n5.refreshTags()));
                    return e12;
                  }(), runInCleanSnapshot: el ? el.snapshot() : function(e12, ...t4) {
                    return e12(...t4);
                  }, shouldTrackFetchMetrics: u4, reactServerErrorsByDigest: /* @__PURE__ */ new Map() };
                  return t3.store = c4, c4;
                }({ page: "/", renderOpts: { cacheLifeProfiles: null == (i3 = t2.request.nextConfig) || null == (n3 = i3.experimental) ? void 0 : n3.cacheLife, cacheComponents: false, experimental: { isRoutePPREnabled: false, authInterrupts: !!(null == (a3 = t2.request.nextConfig) || null == (o3 = a3.experimental) ? void 0 : o3.authInterrupts) }, supportsDynamicResponse: true, waitUntil: e10, onClose: r3.onClose.bind(r3), onAfterTaskError: void 0 }, isPrefetchRequest: "1" === E2.headers.get(et), buildId: h2 ?? "", previouslyRevalidatedTags: [] });
                return await ec.run(f3, () => eW.run(d3, t2.handler, E2, x2));
              } finally {
                setTimeout(() => {
                  r3.dispatchClose();
                }, 0);
              }
            });
          }
          return t2.handler(E2, x2);
        })) && !(a2 instanceof Response)) throw Object.defineProperty(TypeError("Expected an instance of Response to be returned"), "__NEXT_ERROR_CODE", { value: "E567", enumerable: false, configurable: true });
        a2 && s2 && a2.headers.set("set-cookie", s2);
        let R2 = null == a2 ? void 0 : a2.headers.get("x-middleware-rewrite");
        if (a2 && R2 && (v2 || !d2)) {
          let e10 = new L(R2, { forceLocale: true, headers: t2.request.headers, nextConfig: t2.request.nextConfig });
          d2 || e10.host !== E2.nextUrl.host || (e10.buildId = h2 || e10.buildId, a2.headers.set("x-middleware-rewrite", String(e10)));
          let { url: r3, isRelative: s3 } = ee(e10.toString(), f2.toString());
          !d2 && m2 && a2.headers.set("x-nextjs-rewrite", r3);
          let l2 = !s3 && (null == (o2 = t2.request.nextConfig) || null == (i2 = o2.experimental) || null == (n2 = i2.clientParamParsingOrigins) ? void 0 : n2.some((t3) => new RegExp(t3).test(e10.origin)));
          v2 && (s3 || l2) && (f2.pathname !== e10.pathname && a2.headers.set("x-nextjs-rewritten-path", e10.pathname), f2.search !== e10.search && a2.headers.set("x-nextjs-rewritten-query", e10.search.slice(1)));
        }
        if (a2 && R2 && v2 && y2) {
          let e10 = new URL(R2);
          e10.searchParams.has(en) || (e10.searchParams.set(en, y2), a2.headers.set("x-middleware-rewrite", e10.toString()));
        }
        let O2 = null == a2 ? void 0 : a2.headers.get("Location");
        if (a2 && O2 && !d2) {
          let e10 = new L(O2, { forceLocale: false, headers: t2.request.headers, nextConfig: t2.request.nextConfig });
          a2 = new Response(a2.body, a2), e10.host === f2.host && (e10.buildId = h2 || e10.buildId, a2.headers.set("Location", ee(e10, f2).url)), m2 && (a2.headers.delete("Location"), a2.headers.set("x-nextjs-redirect", ee(e10.toString(), f2.toString()).url));
        }
        let T2 = a2 || Q.next(), P2 = T2.headers.get("x-middleware-override-headers"), C2 = [];
        if (P2) {
          for (let [e10, t3] of b2) T2.headers.set(`x-middleware-request-${e10}`, t3), C2.push(e10);
          C2.length > 0 && T2.headers.set("x-middleware-override-headers", P2 + "," + C2.join(","));
        }
        return { response: T2, waitUntil: ("internal" === x2[w].kind ? Promise.all(x2[w].promises).then(() => {
        }) : void 0) ?? Promise.resolve(), fetchMetrics: E2.fetchMetrics };
      }
      e.i(64445), "u" < typeof URLPattern || URLPattern;
      var tl = e.i(40049);
      if (/* @__PURE__ */ new WeakMap(), tl.default.unstable_postpone, false === ("Route %%% needs to bail out of prerendering at this point because it used ^^^. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error".includes("needs to bail out of prerendering at this point because it used") && "Route %%% needs to bail out of prerendering at this point because it used ^^^. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error".includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error"))) throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", { value: "E296", enumerable: false, configurable: true });
      RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at __next_root_layout_boundary__ \\([^\\n]*\\)`), RegExp(`\\n\\s+at __next_metadata_boundary__[\\n\\s]`), RegExp(`\\n\\s+at __next_viewport_boundary__[\\n\\s]`), RegExp(`\\n\\s+at __next_outlet_boundary__[\\n\\s]`), e.s([], 85835), e.i(85835);
      var tu = e.i(84014), tc = e.i(99929);
      function tp(e10) {
        try {
          return tu.default.verify(e10, process.env.JWT_SECRET);
        } catch (e11) {
          return console.error("JWT verification failed:", e11), null;
        }
      }
      async function td(e10) {
        var t2;
        let r2 = (t2 = e10.headers.get("cookies")) && tc.default.parse(t2).authToken || null, n2 = e10.nextUrl.pathname.startsWith("/dashboard"), i2 = e10.nextUrl.pathname.startsWith("/login");
        if (n2) {
          if (!r2) return Q.redirect(new URL("/login", e10.url));
          if (!tp(r2)) {
            let t3 = Q.redirect(new URL("/login", e10.url));
            return t3.cookies.delete("authToken"), t3;
          }
        } else if (i2 && r2 && tp(r2)) return Q.redirect(new URL("/dashboard", e10.url));
        return Q.next();
      }
      e.s(["middleware", () => td, "runtime", 0, "experimental-edge"], 99446);
      var tf = e.i(99446);
      Object.values({ NOT_FOUND: 404, FORBIDDEN: 403, UNAUTHORIZED: 401 });
      let th = { ...tf }, tg = "/middleware", tm = th.middleware || th.default;
      if ("function" != typeof tm) throw new class extends Error {
        constructor(e10) {
          super(e10), this.stack = "";
        }
      }(`The Middleware file "${tg}" must export a function named \`middleware\` or a default function.`);
      e.s(["default", 0, (e10) => ts({ ...e10, page: tg, handler: async (...e11) => {
        try {
          return await tm(...e11);
        } catch (i2) {
          let t2 = e11[0], r2 = new URL(t2.url), n2 = r2.pathname + r2.search;
          throw await a(i2, { path: n2, method: t2.method, headers: Object.fromEntries(t2.headers.entries()) }, { routerKind: "Pages Router", routePath: "/proxy", routeType: "proxy", revalidateReason: void 0 }), i2;
        }
      } })], 42738);
    }]);
  }
});

// .next/server/edge/chunks/turbopack-node_modules_next_dist_esm_build_templates_edge-wrapper_d78add20.js
var require_turbopack_node_modules_next_dist_esm_build_templates_edge_wrapper_d78add20 = __commonJS({
  ".next/server/edge/chunks/turbopack-node_modules_next_dist_esm_build_templates_edge-wrapper_d78add20.js"() {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/turbopack-node_modules_next_dist_esm_build_templates_edge-wrapper_d78add20.js", { otherChunks: ["chunks/[root-of-the-server]__4ff9d1a3._.js", "chunks/[root-of-the-server]__bf515e1b._.js"], runtimeModuleIds: [38022] }]), (() => {
      let e;
      if (!Array.isArray(globalThis.TURBOPACK)) return;
      let t = /* @__PURE__ */ new WeakMap();
      function r(e2, t2) {
        this.m = e2, this.e = t2;
      }
      let n = r.prototype, o = Object.prototype.hasOwnProperty, u = "u" > typeof Symbol && Symbol.toStringTag;
      function l(e2, t2, r2) {
        o.call(e2, t2) || Object.defineProperty(e2, t2, r2);
      }
      function i(e2, t2) {
        let r2 = e2[t2];
        return r2 || (r2 = s(t2), e2[t2] = r2), r2;
      }
      function s(e2) {
        return { exports: {}, error: void 0, id: e2, namespaceObject: void 0 };
      }
      function a(e2, t2) {
        l(e2, "__esModule", { value: true }), u && l(e2, u, { value: "Module" });
        let r2 = 0;
        for (; r2 < t2.length; ) {
          let n2 = t2[r2++], o2 = t2[r2++];
          if ("number" == typeof o2) if (0 === o2) l(e2, n2, { value: t2[r2++], enumerable: true, writable: false });
          else throw Error(`unexpected tag: ${o2}`);
          else "function" == typeof t2[r2] ? l(e2, n2, { get: o2, set: t2[r2++], enumerable: true }) : l(e2, n2, { get: o2, enumerable: true });
        }
        Object.seal(e2);
      }
      n.s = function(e2, t2) {
        let r2, n2;
        null != t2 ? n2 = (r2 = i(this.c, t2)).exports : (r2 = this.m, n2 = this.e), r2.namespaceObject = n2, a(n2, e2);
      }, n.j = function(e2, r2) {
        var n2, u2;
        let l2, s2, a2;
        null != r2 ? s2 = (l2 = i(this.c, r2)).exports : (l2 = this.m, s2 = this.e);
        let c2 = (n2 = l2, u2 = s2, (a2 = t.get(n2)) || (t.set(n2, a2 = []), n2.exports = n2.namespaceObject = new Proxy(u2, { get(e3, t2) {
          if (o.call(e3, t2) || "default" === t2 || "__esModule" === t2) return Reflect.get(e3, t2);
          for (let e4 of a2) {
            let r3 = Reflect.get(e4, t2);
            if (void 0 !== r3) return r3;
          }
        }, ownKeys(e3) {
          let t2 = Reflect.ownKeys(e3);
          for (let e4 of a2) for (let r3 of Reflect.ownKeys(e4)) "default" === r3 || t2.includes(r3) || t2.push(r3);
          return t2;
        } })), a2);
        "object" == typeof e2 && null !== e2 && c2.push(e2);
      }, n.v = function(e2, t2) {
        (null != t2 ? i(this.c, t2) : this.m).exports = e2;
      }, n.n = function(e2, t2) {
        let r2;
        (r2 = null != t2 ? i(this.c, t2) : this.m).exports = r2.namespaceObject = e2;
      };
      let c = Object.getPrototypeOf ? (e2) => Object.getPrototypeOf(e2) : (e2) => e2.__proto__, f = [null, c({}), c([]), c(c)];
      function d(e2, t2, r2) {
        let n2 = [], o2 = -1;
        for (let t3 = e2; ("object" == typeof t3 || "function" == typeof t3) && !f.includes(t3); t3 = c(t3)) for (let r3 of Object.getOwnPropertyNames(t3)) n2.push(r3, /* @__PURE__ */ function(e3, t4) {
          return () => e3[t4];
        }(e2, r3)), -1 === o2 && "default" === r3 && (o2 = n2.length - 1);
        return r2 && o2 >= 0 || (o2 >= 0 ? n2.splice(o2, 1, 0, e2) : n2.push("default", 0, e2)), a(t2, n2), t2;
      }
      function h(e2) {
        return "function" == typeof e2 ? function(...t2) {
          return e2.apply(this, t2);
        } : /* @__PURE__ */ Object.create(null);
      }
      function p(e2) {
        let t2 = N(e2, this.m);
        if (t2.namespaceObject) return t2.namespaceObject;
        let r2 = t2.exports;
        return t2.namespaceObject = d(r2, h(r2), r2 && r2.__esModule);
      }
      function m(e2) {
        let t2 = e2.indexOf("#");
        -1 !== t2 && (e2 = e2.substring(0, t2));
        let r2 = e2.indexOf("?");
        return -1 !== r2 && (e2 = e2.substring(0, r2)), e2;
      }
      function b(e2) {
        return "string" == typeof e2 ? e2 : e2.path;
      }
      function y() {
        let e2, t2;
        return { promise: new Promise((r2, n2) => {
          t2 = n2, e2 = r2;
        }), resolve: e2, reject: t2 };
      }
      n.i = p, n.A = function(e2) {
        return this.r(e2)(p.bind(this));
      }, n.t = "function" == typeof __require ? __require : function() {
        throw Error("Unexpected use of runtime require");
      }, n.r = function(e2) {
        return N(e2, this.m).exports;
      }, n.f = function(e2) {
        function t2(t3) {
          if (t3 = m(t3), o.call(e2, t3)) return e2[t3].module();
          let r2 = Error(`Cannot find module '${t3}'`);
          throw r2.code = "MODULE_NOT_FOUND", r2;
        }
        return t2.keys = () => Object.keys(e2), t2.resolve = (t3) => {
          if (t3 = m(t3), o.call(e2, t3)) return e2[t3].id();
          let r2 = Error(`Cannot find module '${t3}'`);
          throw r2.code = "MODULE_NOT_FOUND", r2;
        }, t2.import = async (e3) => await t2(e3), t2;
      };
      let O = Symbol("turbopack queues"), g = Symbol("turbopack exports"), w = Symbol("turbopack error");
      function _(e2) {
        e2 && 1 !== e2.status && (e2.status = 1, e2.forEach((e3) => e3.queueCount--), e2.forEach((e3) => e3.queueCount-- ? e3.queueCount++ : e3()));
      }
      n.a = function(e2, t2) {
        let r2 = this.m, n2 = t2 ? Object.assign([], { status: -1 }) : void 0, o2 = /* @__PURE__ */ new Set(), { resolve: u2, reject: l2, promise: i2 } = y(), s2 = Object.assign(i2, { [g]: r2.exports, [O]: (e3) => {
          n2 && e3(n2), o2.forEach(e3), s2.catch(() => {
          });
        } }), a2 = { get: () => s2, set(e3) {
          e3 !== s2 && (s2[g] = e3);
        } };
        Object.defineProperty(r2, "exports", a2), Object.defineProperty(r2, "namespaceObject", a2), e2(function(e3) {
          let t3 = e3.map((e4) => {
            if (null !== e4 && "object" == typeof e4) {
              if (O in e4) return e4;
              if (null != e4 && "object" == typeof e4 && "then" in e4 && "function" == typeof e4.then) {
                let t4 = Object.assign([], { status: 0 }), r4 = { [g]: {}, [O]: (e5) => e5(t4) };
                return e4.then((e5) => {
                  r4[g] = e5, _(t4);
                }, (e5) => {
                  r4[w] = e5, _(t4);
                }), r4;
              }
            }
            return { [g]: e4, [O]: () => {
            } };
          }), r3 = () => t3.map((e4) => {
            if (e4[w]) throw e4[w];
            return e4[g];
          }), { promise: u3, resolve: l3 } = y(), i3 = Object.assign(() => l3(r3), { queueCount: 0 });
          function s3(e4) {
            e4 !== n2 && !o2.has(e4) && (o2.add(e4), e4 && 0 === e4.status && (i3.queueCount++, e4.push(i3)));
          }
          return t3.map((e4) => e4[O](s3)), i3.queueCount ? u3 : r3();
        }, function(e3) {
          e3 ? l2(s2[w] = e3) : u2(s2[g]), _(n2);
        }), n2 && -1 === n2.status && (n2.status = 0);
      };
      let C = function(e2) {
        let t2 = new URL(e2, "x:/"), r2 = {};
        for (let e3 in t2) r2[e3] = t2[e3];
        for (let t3 in r2.href = e2, r2.pathname = e2.replace(/[?#].*/, ""), r2.origin = r2.protocol = "", r2.toString = r2.toJSON = (...t4) => e2, r2) Object.defineProperty(this, t3, { enumerable: true, configurable: true, value: r2[t3] });
      };
      function j(e2, t2) {
        throw Error(`Invariant: ${t2(e2)}`);
      }
      C.prototype = URL.prototype, n.U = C, n.z = function(e2) {
        throw Error("dynamic usage of require is not supported");
      }, n.g = globalThis;
      let k = r.prototype;
      var U, R = ((U = R || {})[U.Runtime = 0] = "Runtime", U[U.Parent = 1] = "Parent", U[U.Update = 2] = "Update", U);
      let v = /* @__PURE__ */ new Map();
      n.M = v;
      let P = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
      async function $(e2, t2, r2) {
        let n2;
        if ("string" == typeof r2) return M(e2, t2, A(r2));
        let o2 = r2.included || [], u2 = o2.map((e3) => !!v.has(e3) || P.get(e3));
        if (u2.length > 0 && u2.every((e3) => e3)) return void await Promise.all(u2);
        let l2 = r2.moduleChunks || [], i2 = l2.map((e3) => T.get(e3)).filter((e3) => e3);
        if (i2.length > 0) {
          if (i2.length === l2.length) return void await Promise.all(i2);
          let r3 = /* @__PURE__ */ new Set();
          for (let e3 of l2) T.has(e3) || r3.add(e3);
          for (let n3 of r3) {
            let r4 = M(e2, t2, A(n3));
            T.set(n3, r4), i2.push(r4);
          }
          n2 = Promise.all(i2);
        } else {
          for (let o3 of (n2 = M(e2, t2, A(r2.path)), l2)) T.has(o3) || T.set(o3, n2);
        }
        for (let e3 of o2) P.has(e3) || P.set(e3, n2);
        await n2;
      }
      k.l = function(e2) {
        return $(1, this.m.id, e2);
      };
      let x = Promise.resolve(void 0), E = /* @__PURE__ */ new WeakMap();
      function M(t2, r2, n2) {
        let o2 = e.loadChunkCached(t2, n2), u2 = E.get(o2);
        if (void 0 === u2) {
          let e2 = E.set.bind(E, o2, x);
          u2 = o2.then(e2).catch((e3) => {
            let o3;
            switch (t2) {
              case 0:
                o3 = `as a runtime dependency of chunk ${r2}`;
                break;
              case 1:
                o3 = `from module ${r2}`;
                break;
              case 2:
                o3 = "from an HMR update";
                break;
              default:
                j(t2, (e4) => `Unknown source type: ${e4}`);
            }
            let u3 = Error(`Failed to load chunk ${n2} ${o3}${e3 ? `: ${e3}` : ""}`, e3 ? { cause: e3 } : void 0);
            throw u3.name = "ChunkLoadError", u3;
          }), E.set(o2, u2);
        }
        return u2;
      }
      function A(e2) {
        return `${e2.split("/").map((e3) => encodeURIComponent(e3)).join("/")}`;
      }
      k.L = function(e2) {
        return M(1, this.m.id, e2);
      }, k.R = function(e2) {
        let t2 = this.r(e2);
        return t2?.default ?? t2;
      }, k.P = function(e2) {
        return `/ROOT/${e2 ?? ""}`;
      }, k.b = function(e2) {
        let t2 = new Blob([`self.TURBOPACK_WORKER_LOCATION = ${JSON.stringify(location.origin)};
self.TURBOPACK_CHUNK_SUFFIX = ${JSON.stringify("")};
self.TURBOPACK_NEXT_CHUNK_URLS = ${JSON.stringify(e2.reverse().map(A), null, 2)};
importScripts(...self.TURBOPACK_NEXT_CHUNK_URLS.map(c => self.TURBOPACK_WORKER_LOCATION + c).reverse());`], { type: "text/javascript" });
        return URL.createObjectURL(t2);
      };
      let K = /\.js(?:\?[^#]*)?(?:#.*)?$/;
      n.w = function(t2, r2, n2) {
        return e.loadWebAssembly(1, this.m.id, t2, r2, n2);
      }, n.u = function(t2, r2) {
        return e.loadWebAssemblyModule(1, this.m.id, t2, r2);
      };
      let S = {};
      n.c = S;
      let N = (e2, t2) => {
        let r2 = S[e2];
        if (r2) {
          if (r2.error) throw r2.error;
          return r2;
        }
        return q(e2, R.Parent, t2.id);
      };
      function q(e2, t2, n2) {
        let o2 = v.get(e2);
        if ("function" != typeof o2) throw Error(function(e3, t3, r2) {
          let n3;
          switch (t3) {
            case 0:
              n3 = `as a runtime entry of chunk ${r2}`;
              break;
            case 1:
              n3 = `because it was required from module ${r2}`;
              break;
            case 2:
              n3 = "because of an HMR update";
              break;
            default:
              j(t3, (e4) => `Unknown source type: ${e4}`);
          }
          return `Module ${e3} was instantiated ${n3}, but the module factory is not available.`;
        }(e2, t2, n2));
        let u2 = s(e2), l2 = u2.exports;
        S[e2] = u2;
        let i2 = new r(u2, l2);
        try {
          o2(i2, u2, l2);
        } catch (e3) {
          throw u2.error = e3, e3;
        }
        return u2.namespaceObject && u2.exports !== u2.namespaceObject && d(u2.exports, u2.namespaceObject), u2;
      }
      function L(t2) {
        let r2, n2 = function(e2) {
          if ("string" == typeof e2) return e2;
          let t3 = decodeURIComponent(("u" > typeof TURBOPACK_NEXT_CHUNK_URLS ? TURBOPACK_NEXT_CHUNK_URLS.pop() : e2.getAttribute("src")).replace(/[?#].*$/, ""));
          return t3.startsWith("") ? t3.slice(0) : t3;
        }(t2[0]);
        return 2 === t2.length ? r2 = t2[1] : (r2 = void 0, !function(e2, t3, r3, n3) {
          let o2 = 1;
          for (; o2 < e2.length; ) {
            let t4 = e2[o2], n4 = o2 + 1;
            for (; n4 < e2.length && "function" != typeof e2[n4]; ) n4++;
            if (n4 === e2.length) throw Error("malformed chunk format, expected a factory function");
            if (!r3.has(t4)) {
              let u2 = e2[n4];
              for (Object.defineProperty(u2, "name", { value: "module evaluation" }); o2 < n4; o2++) t4 = e2[o2], r3.set(t4, u2);
            }
            o2 = n4 + 1;
          }
        }(t2, 0, v)), e.registerChunk(n2, r2);
      }
      function B(e2, t2, r2 = false) {
        let n2;
        try {
          n2 = t2();
        } catch (t3) {
          throw Error(`Failed to load external module ${e2}: ${t3}`);
        }
        return !r2 || n2.__esModule ? n2 : d(n2, h(n2), true);
      }
      n.y = async function(e2) {
        let t2;
        try {
          t2 = await import(e2);
        } catch (t3) {
          throw Error(`Failed to load external module ${e2}: ${t3}`);
        }
        return t2 && t2.__esModule && t2.default && "default" in t2.default ? d(t2.default, h(t2), true) : t2;
      }, B.resolve = (e2, t2) => __require.resolve(e2, t2), n.x = B, e = { registerChunk(e2, t2) {
        I.add(e2), function(e3) {
          let t3 = W.get(e3);
          if (null != t3) {
            for (let r2 of t3) r2.requiredChunks.delete(e3), 0 === r2.requiredChunks.size && F(r2.runtimeModuleIds, r2.chunkPath);
            W.delete(e3);
          }
        }(e2), null != t2 && (0 === t2.otherChunks.length ? F(t2.runtimeModuleIds, e2) : function(e3, t3, r2) {
          let n2 = /* @__PURE__ */ new Set(), o2 = { runtimeModuleIds: r2, chunkPath: e3, requiredChunks: n2 };
          for (let e4 of t3) {
            let t4 = b(e4);
            if (I.has(t4)) continue;
            n2.add(t4);
            let r3 = W.get(t4);
            null == r3 && (r3 = /* @__PURE__ */ new Set(), W.set(t4, r3)), r3.add(o2);
          }
          0 === o2.requiredChunks.size && F(o2.runtimeModuleIds, o2.chunkPath);
        }(e2, t2.otherChunks.filter((e3) => {
          var t3;
          return t3 = b(e3), K.test(t3);
        }), t2.runtimeModuleIds));
      }, loadChunkCached(e2, t2) {
        throw Error("chunk loading is not supported");
      }, async loadWebAssembly(e2, t2, r2, n2, o2) {
        let u2 = await H(r2, n2);
        return await WebAssembly.instantiate(u2, o2);
      }, loadWebAssemblyModule: async (e2, t2, r2, n2) => H(r2, n2) };
      let I = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Map();
      function F(e2, t2) {
        for (let r2 of e2) !function(e3, t3) {
          let r3 = S[t3];
          if (r3) {
            if (r3.error) throw r3.error;
            return;
          }
          q(t3, R.Runtime, e3);
        }(t2, r2);
      }
      async function H(e2, t2) {
        let r2;
        try {
          r2 = t2();
        } catch (e3) {
        }
        if (!r2) throw Error(`dynamically loading WebAssembly is not supported in this runtime as global was not injected for chunk '${e2}'`);
        return r2;
      }
      let X = globalThis.TURBOPACK;
      globalThis.TURBOPACK = { push: L }, X.forEach(L);
    })();
  }
});

// node_modules/@opennextjs/aws/dist/core/edgeFunctionHandler.js
var edgeFunctionHandler_exports = {};
__export(edgeFunctionHandler_exports, {
  default: () => edgeFunctionHandler
});
async function edgeFunctionHandler(request) {
  const path3 = new URL(request.url).pathname;
  const routes = globalThis._ROUTES;
  const correspondingRoute = routes.find((route) => route.regex.some((r) => new RegExp(r).test(path3)));
  if (!correspondingRoute) {
    throw new Error(`No route found for ${request.url}`);
  }
  const entry = await self._ENTRIES[`middleware_${correspondingRoute.name}`];
  const result = await entry.default({
    page: correspondingRoute.page,
    request: {
      ...request,
      page: {
        name: correspondingRoute.name
      }
    }
  });
  globalThis.__openNextAls.getStore()?.pendingPromiseRunner.add(result.waitUntil);
  const response = result.response;
  return response;
}
var init_edgeFunctionHandler = __esm({
  "node_modules/@opennextjs/aws/dist/core/edgeFunctionHandler.js"() {
    globalThis._ENTRIES = {};
    globalThis.self = globalThis;
    globalThis._ROUTES = [{ "name": "middleware", "page": "/", "regex": ["^/.*$"] }];
    require_root_of_the_server_4ff9d1a3();
    require_root_of_the_server_bf515e1b();
    require_turbopack_node_modules_next_dist_esm_build_templates_edge_wrapper_d78add20();
  }
});

// node_modules/@opennextjs/aws/dist/utils/promise.js
init_logger();
var DetachedPromise = class {
  resolve;
  reject;
  promise;
  constructor() {
    let resolve;
    let reject;
    this.promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    this.resolve = resolve;
    this.reject = reject;
  }
};
var DetachedPromiseRunner = class {
  promises = [];
  withResolvers() {
    const detachedPromise = new DetachedPromise();
    this.promises.push(detachedPromise);
    return detachedPromise;
  }
  add(promise) {
    const detachedPromise = new DetachedPromise();
    this.promises.push(detachedPromise);
    promise.then(detachedPromise.resolve, detachedPromise.reject);
  }
  async await() {
    debug(`Awaiting ${this.promises.length} detached promises`);
    const results = await Promise.allSettled(this.promises.map((p) => p.promise));
    const rejectedPromises = results.filter((r) => r.status === "rejected");
    rejectedPromises.forEach((r) => {
      error(r.reason);
    });
  }
};
async function awaitAllDetachedPromise() {
  const store = globalThis.__openNextAls.getStore();
  const promisesToAwait = store?.pendingPromiseRunner.await() ?? Promise.resolve();
  if (store?.waitUntil) {
    store.waitUntil(promisesToAwait);
    return;
  }
  await promisesToAwait;
}
function provideNextAfterProvider() {
  const NEXT_REQUEST_CONTEXT_SYMBOL = Symbol.for("@next/request-context");
  const VERCEL_REQUEST_CONTEXT_SYMBOL = Symbol.for("@vercel/request-context");
  const store = globalThis.__openNextAls.getStore();
  const waitUntil = store?.waitUntil ?? ((promise) => store?.pendingPromiseRunner.add(promise));
  const nextAfterContext = {
    get: () => ({
      waitUntil
    })
  };
  globalThis[NEXT_REQUEST_CONTEXT_SYMBOL] = nextAfterContext;
  if (process.env.EMULATE_VERCEL_REQUEST_CONTEXT) {
    globalThis[VERCEL_REQUEST_CONTEXT_SYMBOL] = nextAfterContext;
  }
}
function runWithOpenNextRequestContext({ isISRRevalidation, waitUntil, requestId = Math.random().toString(36) }, fn) {
  return globalThis.__openNextAls.run({
    requestId,
    pendingPromiseRunner: new DetachedPromiseRunner(),
    isISRRevalidation,
    waitUntil,
    writtenTags: /* @__PURE__ */ new Set()
  }, async () => {
    provideNextAfterProvider();
    let result;
    try {
      result = await fn();
    } finally {
      await awaitAllDetachedPromise();
    }
    return result;
  });
}

// node_modules/@opennextjs/aws/dist/adapters/middleware.js
init_logger();

// node_modules/@opennextjs/aws/dist/core/createGenericHandler.js
init_logger();

// node_modules/@opennextjs/aws/dist/core/resolve.js
async function resolveConverter(converter2) {
  if (typeof converter2 === "function") {
    return converter2();
  }
  const m_1 = await Promise.resolve().then(() => (init_edge(), edge_exports));
  return m_1.default;
}
async function resolveWrapper(wrapper) {
  if (typeof wrapper === "function") {
    return wrapper();
  }
  const m_1 = await Promise.resolve().then(() => (init_cloudflare_edge(), cloudflare_edge_exports));
  return m_1.default;
}
async function resolveOriginResolver(originResolver) {
  if (typeof originResolver === "function") {
    return originResolver();
  }
  const m_1 = await Promise.resolve().then(() => (init_pattern_env(), pattern_env_exports));
  return m_1.default;
}
async function resolveAssetResolver(assetResolver) {
  if (typeof assetResolver === "function") {
    return assetResolver();
  }
  const m_1 = await Promise.resolve().then(() => (init_dummy(), dummy_exports));
  return m_1.default;
}
async function resolveProxyRequest(proxyRequest) {
  if (typeof proxyRequest === "function") {
    return proxyRequest();
  }
  const m_1 = await Promise.resolve().then(() => (init_fetch(), fetch_exports));
  return m_1.default;
}

// node_modules/@opennextjs/aws/dist/core/createGenericHandler.js
async function createGenericHandler(handler3) {
  const config = await import("./open-next.config.mjs").then((m) => m.default);
  globalThis.openNextConfig = config;
  const handlerConfig = config[handler3.type];
  const override = handlerConfig && "override" in handlerConfig ? handlerConfig.override : void 0;
  const converter2 = await resolveConverter(override?.converter);
  const { name, wrapper } = await resolveWrapper(override?.wrapper);
  debug("Using wrapper", name);
  return wrapper(handler3.handler, converter2);
}

// node_modules/@opennextjs/aws/dist/core/routing/util.js
import crypto from "node:crypto";
import { parse as parseQs, stringify as stringifyQs } from "node:querystring";

// node_modules/@opennextjs/aws/dist/adapters/config/index.js
init_logger();
import path from "node:path";
globalThis.__dirname ??= "";
var NEXT_DIR = path.join(__dirname, ".next");
var OPEN_NEXT_DIR = path.join(__dirname, ".open-next");
debug({ NEXT_DIR, OPEN_NEXT_DIR });
var NextConfig = { "env": {}, "webpack": null, "typescript": { "ignoreBuildErrors": false }, "typedRoutes": false, "distDir": ".next", "cleanDistDir": true, "assetPrefix": "", "cacheMaxMemorySize": 52428800, "configOrigin": "next.config.ts", "useFileSystemPublicRoutes": true, "generateEtags": true, "pageExtensions": ["tsx", "ts", "jsx", "js"], "poweredByHeader": true, "compress": true, "images": { "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840], "imageSizes": [32, 48, 64, 96, 128, 256, 384], "path": "/_next/image", "loader": "default", "loaderFile": "", "domains": [], "disableStaticImages": false, "minimumCacheTTL": 14400, "formats": ["image/webp"], "maximumRedirects": 3, "maximumResponseBody": 5e7, "dangerouslyAllowLocalIP": false, "dangerouslyAllowSVG": false, "contentSecurityPolicy": "script-src 'none'; frame-src 'none'; sandbox;", "contentDispositionType": "attachment", "localPatterns": [{ "pathname": "**", "search": "" }], "remotePatterns": [], "qualities": [75], "unoptimized": false }, "devIndicators": { "position": "bottom-left" }, "onDemandEntries": { "maxInactiveAge": 6e4, "pagesBufferLength": 5 }, "basePath": "", "sassOptions": {}, "trailingSlash": false, "i18n": null, "productionBrowserSourceMaps": false, "excludeDefaultMomentLocales": true, "reactProductionProfiling": false, "reactStrictMode": null, "reactMaxHeadersLength": 6e3, "httpAgentOptions": { "keepAlive": true }, "logging": {}, "compiler": {}, "expireTime": 31536e3, "staticPageGenerationTimeout": 60, "output": "standalone", "modularizeImports": { "@mui/icons-material": { "transform": "@mui/icons-material/{{member}}" }, "lodash": { "transform": "lodash/{{member}}" } }, "outputFileTracingRoot": "/home/hissam/Development/Projects/portfolio-app", "cacheComponents": false, "cacheLife": { "default": { "stale": 300, "revalidate": 900, "expire": 4294967294 }, "seconds": { "stale": 30, "revalidate": 1, "expire": 60 }, "minutes": { "stale": 300, "revalidate": 60, "expire": 3600 }, "hours": { "stale": 300, "revalidate": 3600, "expire": 86400 }, "days": { "stale": 300, "revalidate": 86400, "expire": 604800 }, "weeks": { "stale": 300, "revalidate": 604800, "expire": 2592e3 }, "max": { "stale": 300, "revalidate": 2592e3, "expire": 31536e3 } }, "cacheHandlers": {}, "experimental": { "useSkewCookie": false, "cssChunking": true, "multiZoneDraftMode": false, "appNavFailHandling": false, "prerenderEarlyExit": true, "serverMinification": true, "linkNoTouchStart": false, "caseSensitiveRoutes": false, "dynamicOnHover": false, "preloadEntriesOnStart": true, "clientRouterFilter": true, "clientRouterFilterRedirects": false, "fetchCacheKeyPrefix": "", "proxyPrefetch": "flexible", "optimisticClientCache": true, "manualClientBasePath": false, "cpus": 11, "memoryBasedWorkersCount": false, "imgOptConcurrency": null, "imgOptTimeoutInSeconds": 7, "imgOptMaxInputPixels": 268402689, "imgOptSequentialRead": null, "imgOptSkipMetadata": null, "isrFlushToDisk": true, "workerThreads": false, "optimizeCss": false, "nextScriptWorkers": false, "scrollRestoration": false, "externalDir": false, "disableOptimizedLoading": false, "gzipSize": true, "craCompat": false, "esmExternals": true, "fullySpecified": false, "swcTraceProfiling": false, "forceSwcTransforms": false, "largePageDataBytes": 128e3, "typedEnv": false, "parallelServerCompiles": false, "parallelServerBuildTraces": false, "ppr": false, "authInterrupts": false, "webpackMemoryOptimizations": false, "optimizeServerReact": true, "viewTransition": false, "removeUncaughtErrorAndRejectionListeners": false, "validateRSCRequestHeaders": false, "staleTimes": { "dynamic": 0, "static": 300 }, "reactDebugChannel": false, "serverComponentsHmrCache": true, "staticGenerationMaxConcurrency": 8, "staticGenerationMinPagesPerWorker": 25, "transitionIndicator": false, "inlineCss": false, "useCache": false, "globalNotFound": false, "browserDebugInfoInTerminal": false, "lockDistDir": true, "isolatedDevBuild": true, "proxyClientMaxBodySize": 10485760, "hideLogsAfterAbort": false, "mcpServer": true, "turbopackFileSystemCacheForDev": true, "turbopackFileSystemCacheForBuild": false, "turbopackInferModuleSideEffects": false, "optimizePackageImports": ["lucide-react", "date-fns", "lodash-es", "ramda", "antd", "react-bootstrap", "ahooks", "@ant-design/icons", "@headlessui/react", "@headlessui-float/react", "@heroicons/react/20/solid", "@heroicons/react/24/solid", "@heroicons/react/24/outline", "@visx/visx", "@tremor/react", "rxjs", "@mui/material", "@mui/icons-material", "recharts", "react-use", "effect", "@effect/schema", "@effect/platform", "@effect/platform-node", "@effect/platform-browser", "@effect/platform-bun", "@effect/sql", "@effect/sql-mssql", "@effect/sql-mysql2", "@effect/sql-pg", "@effect/sql-sqlite-node", "@effect/sql-sqlite-bun", "@effect/sql-sqlite-wasm", "@effect/sql-sqlite-react-native", "@effect/rpc", "@effect/rpc-http", "@effect/typeclass", "@effect/experimental", "@effect/opentelemetry", "@material-ui/core", "@material-ui/icons", "@tabler/icons-react", "mui-core", "react-icons/ai", "react-icons/bi", "react-icons/bs", "react-icons/cg", "react-icons/ci", "react-icons/di", "react-icons/fa", "react-icons/fa6", "react-icons/fc", "react-icons/fi", "react-icons/gi", "react-icons/go", "react-icons/gr", "react-icons/hi", "react-icons/hi2", "react-icons/im", "react-icons/io", "react-icons/io5", "react-icons/lia", "react-icons/lib", "react-icons/lu", "react-icons/md", "react-icons/pi", "react-icons/ri", "react-icons/rx", "react-icons/si", "react-icons/sl", "react-icons/tb", "react-icons/tfi", "react-icons/ti", "react-icons/vsc", "react-icons/wi"], "trustHostHeader": false, "isExperimentalCompile": false }, "htmlLimitedBots": "[\\w-]+-Google|Google-[\\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight", "bundlePagesRouterDependencies": false, "configFileName": "next.config.ts", "turbopack": { "root": "/home/hissam/Development/Projects/portfolio-app" }, "distDirRoot": ".next" };
var BuildId = "u-rj6ASDKNezizBSTzZ55";
var RoutesManifest = { "basePath": "", "rewrites": { "beforeFiles": [], "afterFiles": [], "fallback": [] }, "redirects": [{ "source": "/:path+/", "destination": "/:path+", "internal": true, "priority": true, "statusCode": 308, "regex": "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$" }], "routes": { "static": [{ "page": "/", "regex": "^/(?:/)?$", "routeKeys": {}, "namedRegex": "^/(?:/)?$" }, { "page": "/_global-error", "regex": "^/_global\\-error(?:/)?$", "routeKeys": {}, "namedRegex": "^/_global\\-error(?:/)?$" }, { "page": "/_not-found", "regex": "^/_not\\-found(?:/)?$", "routeKeys": {}, "namedRegex": "^/_not\\-found(?:/)?$" }, { "page": "/api/auth/confirm", "regex": "^/api/auth/confirm(?:/)?$", "routeKeys": {}, "namedRegex": "^/api/auth/confirm(?:/)?$" }, { "page": "/api/auth/request", "regex": "^/api/auth/request(?:/)?$", "routeKeys": {}, "namedRegex": "^/api/auth/request(?:/)?$" }, { "page": "/cordra-studios", "regex": "^/cordra\\-studios(?:/)?$", "routeKeys": {}, "namedRegex": "^/cordra\\-studios(?:/)?$" }, { "page": "/cordra-studios/about", "regex": "^/cordra\\-studios/about(?:/)?$", "routeKeys": {}, "namedRegex": "^/cordra\\-studios/about(?:/)?$" }, { "page": "/cordra-studios/what-we-do", "regex": "^/cordra\\-studios/what\\-we\\-do(?:/)?$", "routeKeys": {}, "namedRegex": "^/cordra\\-studios/what\\-we\\-do(?:/)?$" }, { "page": "/dashboard", "regex": "^/dashboard(?:/)?$", "routeKeys": {}, "namedRegex": "^/dashboard(?:/)?$" }, { "page": "/icon.png", "regex": "^/icon\\.png(?:/)?$", "routeKeys": {}, "namedRegex": "^/icon\\.png(?:/)?$" }, { "page": "/login", "regex": "^/login(?:/)?$", "routeKeys": {}, "namedRegex": "^/login(?:/)?$" }, { "page": "/projects", "regex": "^/projects(?:/)?$", "routeKeys": {}, "namedRegex": "^/projects(?:/)?$" }, { "page": "/projects/small-projects", "regex": "^/projects/small\\-projects(?:/)?$", "routeKeys": {}, "namedRegex": "^/projects/small\\-projects(?:/)?$" }, { "page": "/projects/small-projects/resume", "regex": "^/projects/small\\-projects/resume(?:/)?$", "routeKeys": {}, "namedRegex": "^/projects/small\\-projects/resume(?:/)?$" }], "dynamic": [], "data": { "static": [], "dynamic": [] } }, "locales": [] };
var ConfigHeaders = [];
var PrerenderManifest = { "version": 4, "routes": { "/_global-error": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/_global-error", "dataRoute": "/_global-error.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/_not-found": { "initialStatus": 404, "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/_not-found", "dataRoute": "/_not-found.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/cordra-studios/about": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/cordra-studios/about", "dataRoute": "/cordra-studios/about.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/cordra-studios": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/cordra-studios", "dataRoute": "/cordra-studios.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/cordra-studios/what-we-do": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/cordra-studios/what-we-do", "dataRoute": "/cordra-studios/what-we-do.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/dashboard": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/dashboard", "dataRoute": "/dashboard.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/login": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/login", "dataRoute": "/login.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/", "dataRoute": "/index.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/projects": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/projects", "dataRoute": "/projects.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/projects/small-projects": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/projects/small-projects", "dataRoute": "/projects/small-projects.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/projects/small-projects/resume": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/projects/small-projects/resume", "dataRoute": "/projects/small-projects/resume.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/icon.png": { "initialHeaders": { "cache-control": "public, max-age=0, must-revalidate", "content-type": "image/png", "x-next-cache-tags": "_N_T_/layout,_N_T_/icon.png/layout,_N_T_/icon.png/route,_N_T_/icon.png" }, "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/icon.png", "dataRoute": null, "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] } }, "dynamicRoutes": {}, "notFoundRoutes": [], "preview": { "previewModeId": "dde91021f27b2078e0971d09b1d12402", "previewModeSigningKey": "a06c63f5d3ccb902e4227ff994865cac355255c9c0494f6c91a40521a19f028c", "previewModeEncryptionKey": "eff258c2f6504d835c1f4aaafa48ae1ba8587b69a0210d8c98c31124ddd21009" } };
var MiddlewareManifest = { "version": 3, "middleware": { "/": { "files": ["server/edge/chunks/[root-of-the-server]__4ff9d1a3._.js", "server/edge/chunks/[root-of-the-server]__bf515e1b._.js", "server/edge/chunks/turbopack-node_modules_next_dist_esm_build_templates_edge-wrapper_d78add20.js"], "name": "middleware", "page": "/", "matchers": [{ "regexp": "^/.*$", "originalSource": "/:path*" }], "wasm": [], "assets": [], "env": { "__NEXT_BUILD_ID": "u-rj6ASDKNezizBSTzZ55", "NEXT_SERVER_ACTIONS_ENCRYPTION_KEY": "ihRVZ0l/d5dtrhh86sJVRwtjh3LrnWLthRZratHlX94=", "__NEXT_PREVIEW_MODE_ID": "dde91021f27b2078e0971d09b1d12402", "__NEXT_PREVIEW_MODE_ENCRYPTION_KEY": "eff258c2f6504d835c1f4aaafa48ae1ba8587b69a0210d8c98c31124ddd21009", "__NEXT_PREVIEW_MODE_SIGNING_KEY": "a06c63f5d3ccb902e4227ff994865cac355255c9c0494f6c91a40521a19f028c" } } }, "sortedMiddleware": ["/"], "functions": {} };
var AppPathRoutesManifest = { "/(cordra)/cordra-studios/about/page": "/cordra-studios/about", "/(cordra)/cordra-studios/page": "/cordra-studios", "/(cordra)/cordra-studios/what-we-do/page": "/cordra-studios/what-we-do", "/(root)/dashboard/page": "/dashboard", "/(root)/login/page": "/login", "/(root)/page": "/", "/(root)/projects/page": "/projects", "/(root)/projects/small-projects/page": "/projects/small-projects", "/(root)/projects/small-projects/resume/page": "/projects/small-projects/resume", "/_global-error/page": "/_global-error", "/_not-found/page": "/_not-found", "/api/auth/confirm/route": "/api/auth/confirm", "/api/auth/request/route": "/api/auth/request", "/icon.png/route": "/icon.png" };
var FunctionsConfigManifest = { "version": 1, "functions": {} };
var PagesManifest = { "/404": "pages/404.html", "/500": "pages/500.html" };
process.env.NEXT_BUILD_ID = BuildId;
process.env.NEXT_PREVIEW_MODE_ID = PrerenderManifest?.preview?.previewModeId;

// node_modules/@opennextjs/aws/dist/http/openNextResponse.js
init_logger();
init_util();
import { Transform } from "node:stream";

// node_modules/@opennextjs/aws/dist/core/routing/util.js
init_util();
init_logger();
import { ReadableStream as ReadableStream2 } from "node:stream/web";

// node_modules/@opennextjs/aws/dist/utils/binary.js
var commonBinaryMimeTypes = /* @__PURE__ */ new Set([
  "application/octet-stream",
  // Docs
  "application/epub+zip",
  "application/msword",
  "application/pdf",
  "application/rtf",
  "application/vnd.amazon.ebook",
  "application/vnd.ms-excel",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  // Fonts
  "font/otf",
  "font/woff",
  "font/woff2",
  // Images
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/tiff",
  "image/vnd.microsoft.icon",
  "image/webp",
  // Audio
  "audio/3gpp",
  "audio/aac",
  "audio/basic",
  "audio/flac",
  "audio/mpeg",
  "audio/ogg",
  "audio/wavaudio/webm",
  "audio/x-aiff",
  "audio/x-midi",
  "audio/x-wav",
  // Video
  "video/3gpp",
  "video/mp2t",
  "video/mpeg",
  "video/ogg",
  "video/quicktime",
  "video/webm",
  "video/x-msvideo",
  // Archives
  "application/java-archive",
  "application/vnd.apple.installer+xml",
  "application/x-7z-compressed",
  "application/x-apple-diskimage",
  "application/x-bzip",
  "application/x-bzip2",
  "application/x-gzip",
  "application/x-java-archive",
  "application/x-rar-compressed",
  "application/x-tar",
  "application/x-zip",
  "application/zip",
  // Serialized data
  "application/x-protobuf"
]);
function isBinaryContentType(contentType) {
  if (!contentType)
    return false;
  const value = contentType.split(";")[0];
  return commonBinaryMimeTypes.has(value);
}

// node_modules/@opennextjs/aws/dist/core/routing/i18n/index.js
init_stream();
init_logger();

// node_modules/@opennextjs/aws/dist/core/routing/i18n/accept-header.js
function parse(raw, preferences, options) {
  const lowers = /* @__PURE__ */ new Map();
  const header = raw.replace(/[ \t]/g, "");
  if (preferences) {
    let pos = 0;
    for (const preference of preferences) {
      const lower = preference.toLowerCase();
      lowers.set(lower, { orig: preference, pos: pos++ });
      if (options.prefixMatch) {
        const parts2 = lower.split("-");
        while (parts2.pop(), parts2.length > 0) {
          const joined = parts2.join("-");
          if (!lowers.has(joined)) {
            lowers.set(joined, { orig: preference, pos: pos++ });
          }
        }
      }
    }
  }
  const parts = header.split(",");
  const selections = [];
  const map = /* @__PURE__ */ new Set();
  for (let i = 0; i < parts.length; ++i) {
    const part = parts[i];
    if (!part) {
      continue;
    }
    const params = part.split(";");
    if (params.length > 2) {
      throw new Error(`Invalid ${options.type} header`);
    }
    const token = params[0].toLowerCase();
    if (!token) {
      throw new Error(`Invalid ${options.type} header`);
    }
    const selection = { token, pos: i, q: 1 };
    if (preferences && lowers.has(token)) {
      selection.pref = lowers.get(token).pos;
    }
    map.add(selection.token);
    if (params.length === 2) {
      const q = params[1];
      const [key, value] = q.split("=");
      if (!value || key !== "q" && key !== "Q") {
        throw new Error(`Invalid ${options.type} header`);
      }
      const score = Number.parseFloat(value);
      if (score === 0) {
        continue;
      }
      if (Number.isFinite(score) && score <= 1 && score >= 1e-3) {
        selection.q = score;
      }
    }
    selections.push(selection);
  }
  selections.sort((a, b) => {
    if (b.q !== a.q) {
      return b.q - a.q;
    }
    if (b.pref !== a.pref) {
      if (a.pref === void 0) {
        return 1;
      }
      if (b.pref === void 0) {
        return -1;
      }
      return a.pref - b.pref;
    }
    return a.pos - b.pos;
  });
  const values = selections.map((selection) => selection.token);
  if (!preferences || !preferences.length) {
    return values;
  }
  const preferred = [];
  for (const selection of values) {
    if (selection === "*") {
      for (const [preference, value] of lowers) {
        if (!map.has(preference)) {
          preferred.push(value.orig);
        }
      }
    } else {
      const lower = selection.toLowerCase();
      if (lowers.has(lower)) {
        preferred.push(lowers.get(lower).orig);
      }
    }
  }
  return preferred;
}
function acceptLanguage(header = "", preferences) {
  return parse(header, preferences, {
    type: "accept-language",
    prefixMatch: true
  })[0] || void 0;
}

// node_modules/@opennextjs/aws/dist/core/routing/i18n/index.js
function isLocalizedPath(path3) {
  return NextConfig.i18n?.locales.includes(path3.split("/")[1].toLowerCase()) ?? false;
}
function getLocaleFromCookie(cookies) {
  const i18n = NextConfig.i18n;
  const nextLocale = cookies.NEXT_LOCALE?.toLowerCase();
  return nextLocale ? i18n?.locales.find((locale) => nextLocale === locale.toLowerCase()) : void 0;
}
function detectDomainLocale({ hostname, detectedLocale }) {
  const i18n = NextConfig.i18n;
  const domains = i18n?.domains;
  if (!domains) {
    return;
  }
  const lowercasedLocale = detectedLocale?.toLowerCase();
  for (const domain of domains) {
    const domainHostname = domain.domain.split(":", 1)[0].toLowerCase();
    if (hostname === domainHostname || lowercasedLocale === domain.defaultLocale.toLowerCase() || domain.locales?.some((locale) => lowercasedLocale === locale.toLowerCase())) {
      return domain;
    }
  }
}
function detectLocale(internalEvent, i18n) {
  const domainLocale = detectDomainLocale({
    hostname: internalEvent.headers.host
  });
  if (i18n.localeDetection === false) {
    return domainLocale?.defaultLocale ?? i18n.defaultLocale;
  }
  const cookiesLocale = getLocaleFromCookie(internalEvent.cookies);
  const preferredLocale = acceptLanguage(internalEvent.headers["accept-language"], i18n?.locales);
  debug({
    cookiesLocale,
    preferredLocale,
    defaultLocale: i18n.defaultLocale,
    domainLocale
  });
  return domainLocale?.defaultLocale ?? cookiesLocale ?? preferredLocale ?? i18n.defaultLocale;
}
function localizePath(internalEvent) {
  const i18n = NextConfig.i18n;
  if (!i18n) {
    return internalEvent.rawPath;
  }
  if (isLocalizedPath(internalEvent.rawPath)) {
    return internalEvent.rawPath;
  }
  const detectedLocale = detectLocale(internalEvent, i18n);
  return `/${detectedLocale}${internalEvent.rawPath}`;
}
function handleLocaleRedirect(internalEvent) {
  const i18n = NextConfig.i18n;
  if (!i18n || i18n.localeDetection === false || internalEvent.rawPath !== "/") {
    return false;
  }
  const preferredLocale = acceptLanguage(internalEvent.headers["accept-language"], i18n?.locales);
  const detectedLocale = detectLocale(internalEvent, i18n);
  const domainLocale = detectDomainLocale({
    hostname: internalEvent.headers.host
  });
  const preferredDomain = detectDomainLocale({
    detectedLocale: preferredLocale
  });
  if (domainLocale && preferredDomain) {
    const isPDomain = preferredDomain.domain === domainLocale.domain;
    const isPLocale = preferredDomain.defaultLocale === preferredLocale;
    if (!isPDomain || !isPLocale) {
      const scheme = `http${preferredDomain.http ? "" : "s"}`;
      const rlocale = isPLocale ? "" : preferredLocale;
      return {
        type: "core",
        statusCode: 307,
        headers: {
          Location: `${scheme}://${preferredDomain.domain}/${rlocale}`
        },
        body: emptyReadableStream(),
        isBase64Encoded: false
      };
    }
  }
  const defaultLocale = domainLocale?.defaultLocale ?? i18n.defaultLocale;
  if (detectedLocale.toLowerCase() !== defaultLocale.toLowerCase()) {
    return {
      type: "core",
      statusCode: 307,
      headers: {
        Location: constructNextUrl(internalEvent.url, `/${detectedLocale}`)
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
  return false;
}

// node_modules/@opennextjs/aws/dist/core/routing/queue.js
function generateShardId(rawPath, maxConcurrency, prefix) {
  let a = cyrb128(rawPath);
  let t = a += 1831565813;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  const randomFloat = ((t ^ t >>> 14) >>> 0) / 4294967296;
  const randomInt = Math.floor(randomFloat * maxConcurrency);
  return `${prefix}-${randomInt}`;
}
function generateMessageGroupId(rawPath) {
  const maxConcurrency = Number.parseInt(process.env.MAX_REVALIDATE_CONCURRENCY ?? "10");
  return generateShardId(rawPath, maxConcurrency, "revalidate");
}
function cyrb128(str) {
  let h1 = 1779033703;
  let h2 = 3144134277;
  let h3 = 1013904242;
  let h4 = 2773480762;
  for (let i = 0, k; i < str.length; i++) {
    k = str.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ h1 >>> 18, 597399067);
  h2 = Math.imul(h4 ^ h2 >>> 22, 2869860233);
  h3 = Math.imul(h1 ^ h3 >>> 17, 951274213);
  h4 = Math.imul(h2 ^ h4 >>> 19, 2716044179);
  h1 ^= h2 ^ h3 ^ h4, h2 ^= h1, h3 ^= h1, h4 ^= h1;
  return h1 >>> 0;
}

// node_modules/@opennextjs/aws/dist/core/routing/util.js
function isExternal(url, host) {
  if (!url)
    return false;
  const pattern = /^https?:\/\//;
  if (!pattern.test(url))
    return false;
  if (host) {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.host !== host;
    } catch {
      return !url.includes(host);
    }
  }
  return true;
}
function convertFromQueryString(query) {
  if (query === "")
    return {};
  const queryParts = query.split("&");
  return getQueryFromIterator(queryParts.map((p) => {
    const [key, value] = p.split("=");
    return [key, value];
  }));
}
function getUrlParts(url, isExternal2) {
  if (!isExternal2) {
    const regex2 = /\/([^?]*)\??(.*)/;
    const match3 = url.match(regex2);
    return {
      hostname: "",
      pathname: match3?.[1] ? `/${match3[1]}` : url,
      protocol: "",
      queryString: match3?.[2] ?? ""
    };
  }
  const regex = /^(https?:)\/\/?([^\/\s]+)(\/[^?]*)?(\?.*)?/;
  const match2 = url.match(regex);
  if (!match2) {
    throw new Error(`Invalid external URL: ${url}`);
  }
  return {
    protocol: match2[1] ?? "https:",
    hostname: match2[2],
    pathname: match2[3] ?? "",
    queryString: match2[4]?.slice(1) ?? ""
  };
}
function constructNextUrl(baseUrl, path3) {
  const nextBasePath = NextConfig.basePath ?? "";
  const url = new URL(`${nextBasePath}${path3}`, baseUrl);
  return url.href;
}
function convertToQueryString(query) {
  const queryStrings = [];
  Object.entries(query).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((entry) => queryStrings.push(`${key}=${entry}`));
    } else {
      queryStrings.push(`${key}=${value}`);
    }
  });
  return queryStrings.length > 0 ? `?${queryStrings.join("&")}` : "";
}
function getMiddlewareMatch(middlewareManifest2, functionsManifest) {
  if (functionsManifest?.functions?.["/_middleware"]) {
    return functionsManifest.functions["/_middleware"].matchers?.map(({ regexp }) => new RegExp(regexp)) ?? [/.*/];
  }
  const rootMiddleware = middlewareManifest2.middleware["/"];
  if (!rootMiddleware?.matchers)
    return [];
  return rootMiddleware.matchers.map(({ regexp }) => new RegExp(regexp));
}
function escapeRegex(str, { isPath } = {}) {
  const result = str.replaceAll("(.)", "_\xB51_").replaceAll("(..)", "_\xB52_").replaceAll("(...)", "_\xB53_");
  return isPath ? result : result.replaceAll("+", "_\xB54_");
}
function unescapeRegex(str) {
  return str.replaceAll("_\xB51_", "(.)").replaceAll("_\xB52_", "(..)").replaceAll("_\xB53_", "(...)").replaceAll("_\xB54_", "+");
}
function convertBodyToReadableStream(method, body) {
  if (method === "GET" || method === "HEAD")
    return void 0;
  if (!body)
    return void 0;
  return new ReadableStream2({
    start(controller) {
      controller.enqueue(body);
      controller.close();
    }
  });
}
var CommonHeaders;
(function(CommonHeaders2) {
  CommonHeaders2["CACHE_CONTROL"] = "cache-control";
  CommonHeaders2["NEXT_CACHE"] = "x-nextjs-cache";
})(CommonHeaders || (CommonHeaders = {}));
function normalizeLocationHeader(location2, baseUrl, encodeQuery = false) {
  if (!URL.canParse(location2)) {
    return location2;
  }
  const locationURL = new URL(location2);
  const origin = new URL(baseUrl).origin;
  let search = locationURL.search;
  if (encodeQuery && search) {
    search = `?${stringifyQs(parseQs(search.slice(1)))}`;
  }
  const href = `${locationURL.origin}${locationURL.pathname}${search}${locationURL.hash}`;
  if (locationURL.origin === origin) {
    return href.slice(origin.length);
  }
  return href;
}

// node_modules/@opennextjs/aws/dist/core/routingHandler.js
init_logger();

// node_modules/@opennextjs/aws/dist/core/routing/cacheInterceptor.js
import { createHash } from "node:crypto";
init_stream();

// node_modules/@opennextjs/aws/dist/utils/cache.js
init_logger();
async function hasBeenRevalidated(key, tags, cacheEntry) {
  if (globalThis.openNextConfig.dangerous?.disableTagCache) {
    return false;
  }
  const value = cacheEntry.value;
  if (!value) {
    return true;
  }
  if ("type" in cacheEntry && cacheEntry.type === "page") {
    return false;
  }
  const lastModified = cacheEntry.lastModified ?? Date.now();
  if (globalThis.tagCache.mode === "nextMode") {
    return tags.length === 0 ? false : await globalThis.tagCache.hasBeenRevalidated(tags, lastModified);
  }
  const _lastModified = await globalThis.tagCache.getLastModified(key, lastModified);
  return _lastModified === -1;
}
function getTagsFromValue(value) {
  if (!value) {
    return [];
  }
  try {
    const cacheTags = value.meta?.headers?.["x-next-cache-tags"]?.split(",") ?? [];
    delete value.meta?.headers?.["x-next-cache-tags"];
    return cacheTags;
  } catch (e) {
    return [];
  }
}

// node_modules/@opennextjs/aws/dist/core/routing/cacheInterceptor.js
init_logger();
var CACHE_ONE_YEAR = 60 * 60 * 24 * 365;
var CACHE_ONE_MONTH = 60 * 60 * 24 * 30;
var VARY_HEADER = "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch, Next-Url";
var NEXT_SEGMENT_PREFETCH_HEADER = "next-router-segment-prefetch";
var NEXT_PRERENDER_HEADER = "x-nextjs-prerender";
var NEXT_POSTPONED_HEADER = "x-nextjs-postponed";
async function computeCacheControl(path3, body, host, revalidate, lastModified) {
  let finalRevalidate = CACHE_ONE_YEAR;
  const existingRoute = Object.entries(PrerenderManifest?.routes ?? {}).find((p) => p[0] === path3)?.[1];
  if (revalidate === void 0 && existingRoute) {
    finalRevalidate = existingRoute.initialRevalidateSeconds === false ? CACHE_ONE_YEAR : existingRoute.initialRevalidateSeconds;
  } else if (revalidate !== void 0) {
    finalRevalidate = revalidate === false ? CACHE_ONE_YEAR : revalidate;
  }
  const age = Math.round((Date.now() - (lastModified ?? 0)) / 1e3);
  const hash = (str) => createHash("md5").update(str).digest("hex");
  const etag = hash(body);
  if (revalidate === 0) {
    return {
      "cache-control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "x-opennext-cache": "ERROR",
      etag
    };
  }
  if (finalRevalidate !== CACHE_ONE_YEAR) {
    const sMaxAge = Math.max(finalRevalidate - age, 1);
    debug("sMaxAge", {
      finalRevalidate,
      age,
      lastModified,
      revalidate
    });
    const isStale = sMaxAge === 1;
    if (isStale) {
      let url = NextConfig.trailingSlash ? `${path3}/` : path3;
      if (NextConfig.basePath) {
        url = `${NextConfig.basePath}${url}`;
      }
      await globalThis.queue.send({
        MessageBody: {
          host,
          url,
          eTag: etag,
          lastModified: lastModified ?? Date.now()
        },
        MessageDeduplicationId: hash(`${path3}-${lastModified}-${etag}`),
        MessageGroupId: generateMessageGroupId(path3)
      });
    }
    return {
      "cache-control": `s-maxage=${sMaxAge}, stale-while-revalidate=${CACHE_ONE_MONTH}`,
      "x-opennext-cache": isStale ? "STALE" : "HIT",
      etag
    };
  }
  return {
    "cache-control": `s-maxage=${CACHE_ONE_YEAR}, stale-while-revalidate=${CACHE_ONE_MONTH}`,
    "x-opennext-cache": "HIT",
    etag
  };
}
function getBodyForAppRouter(event, cachedValue) {
  if (cachedValue.type !== "app") {
    throw new Error("getBodyForAppRouter called with non-app cache value");
  }
  try {
    const segmentHeader = `${event.headers[NEXT_SEGMENT_PREFETCH_HEADER]}`;
    const isSegmentResponse = Boolean(segmentHeader) && segmentHeader in (cachedValue.segmentData || {});
    const body = isSegmentResponse ? cachedValue.segmentData[segmentHeader] : cachedValue.rsc;
    return {
      body,
      additionalHeaders: isSegmentResponse ? { [NEXT_PRERENDER_HEADER]: "1", [NEXT_POSTPONED_HEADER]: "2" } : {}
    };
  } catch (e) {
    error("Error while getting body for app router from cache:", e);
    return { body: cachedValue.rsc, additionalHeaders: {} };
  }
}
async function generateResult(event, localizedPath, cachedValue, lastModified) {
  debug("Returning result from experimental cache");
  let body = "";
  let type = "application/octet-stream";
  let isDataRequest = false;
  let additionalHeaders = {};
  if (cachedValue.type === "app") {
    isDataRequest = Boolean(event.headers.rsc);
    if (isDataRequest) {
      const { body: appRouterBody, additionalHeaders: appHeaders } = getBodyForAppRouter(event, cachedValue);
      body = appRouterBody;
      additionalHeaders = appHeaders;
    } else {
      body = cachedValue.html;
    }
    type = isDataRequest ? "text/x-component" : "text/html; charset=utf-8";
  } else if (cachedValue.type === "page") {
    isDataRequest = Boolean(event.query.__nextDataReq);
    body = isDataRequest ? JSON.stringify(cachedValue.json) : cachedValue.html;
    type = isDataRequest ? "application/json" : "text/html; charset=utf-8";
  } else {
    throw new Error("generateResult called with unsupported cache value type, only 'app' and 'page' are supported");
  }
  const cacheControl = await computeCacheControl(localizedPath, body, event.headers.host, cachedValue.revalidate, lastModified);
  return {
    type: "core",
    // Sometimes other status codes can be cached, like 404. For these cases, we should return the correct status code
    // Also set the status code to the rewriteStatusCode if defined
    // This can happen in handleMiddleware in routingHandler.
    // `NextResponse.rewrite(url, { status: xxx})
    // The rewrite status code should take precedence over the cached one
    statusCode: event.rewriteStatusCode ?? cachedValue.meta?.status ?? 200,
    body: toReadableStream(body, false),
    isBase64Encoded: false,
    headers: {
      ...cacheControl,
      "content-type": type,
      ...cachedValue.meta?.headers,
      vary: VARY_HEADER,
      ...additionalHeaders
    }
  };
}
function escapePathDelimiters(segment, escapeEncoded) {
  return segment.replace(new RegExp(`([/#?]${escapeEncoded ? "|%(2f|23|3f|5c)" : ""})`, "gi"), (char) => encodeURIComponent(char));
}
function decodePathParams(pathname) {
  return pathname.split("/").map((segment) => {
    try {
      return escapePathDelimiters(decodeURIComponent(segment), true);
    } catch (e) {
      return segment;
    }
  }).join("/");
}
async function cacheInterceptor(event) {
  if (Boolean(event.headers["next-action"]) || Boolean(event.headers["x-prerender-revalidate"]))
    return event;
  const cookies = event.headers.cookie || "";
  const hasPreviewData = cookies.includes("__prerender_bypass") || cookies.includes("__next_preview_data");
  if (hasPreviewData) {
    debug("Preview mode detected, passing through to handler");
    return event;
  }
  let localizedPath = localizePath(event);
  if (NextConfig.basePath) {
    localizedPath = localizedPath.replace(NextConfig.basePath, "");
  }
  localizedPath = localizedPath.replace(/\/$/, "");
  localizedPath = decodePathParams(localizedPath);
  debug("Checking cache for", localizedPath, PrerenderManifest);
  const isISR = Object.keys(PrerenderManifest?.routes ?? {}).includes(localizedPath ?? "/") || Object.values(PrerenderManifest?.dynamicRoutes ?? {}).some((dr) => new RegExp(dr.routeRegex).test(localizedPath));
  debug("isISR", isISR);
  if (isISR) {
    try {
      const cachedData = await globalThis.incrementalCache.get(localizedPath ?? "/index");
      debug("cached data in interceptor", cachedData);
      if (!cachedData?.value) {
        return event;
      }
      if (cachedData.value?.type === "app" || cachedData.value?.type === "route") {
        const tags = getTagsFromValue(cachedData.value);
        const _hasBeenRevalidated = cachedData.shouldBypassTagCache ? false : await hasBeenRevalidated(localizedPath, tags, cachedData);
        if (_hasBeenRevalidated) {
          return event;
        }
      }
      const host = event.headers.host;
      switch (cachedData?.value?.type) {
        case "app":
        case "page":
          return generateResult(event, localizedPath, cachedData.value, cachedData.lastModified);
        case "redirect": {
          const cacheControl = await computeCacheControl(localizedPath, "", host, cachedData.value.revalidate, cachedData.lastModified);
          return {
            type: "core",
            statusCode: cachedData.value.meta?.status ?? 307,
            body: emptyReadableStream(),
            headers: {
              ...cachedData.value.meta?.headers ?? {},
              ...cacheControl
            },
            isBase64Encoded: false
          };
        }
        case "route": {
          const cacheControl = await computeCacheControl(localizedPath, cachedData.value.body, host, cachedData.value.revalidate, cachedData.lastModified);
          const isBinary = isBinaryContentType(String(cachedData.value.meta?.headers?.["content-type"]));
          return {
            type: "core",
            statusCode: event.rewriteStatusCode ?? cachedData.value.meta?.status ?? 200,
            body: toReadableStream(cachedData.value.body, isBinary),
            headers: {
              ...cacheControl,
              ...cachedData.value.meta?.headers,
              vary: VARY_HEADER
            },
            isBase64Encoded: isBinary
          };
        }
        default:
          return event;
      }
    } catch (e) {
      debug("Error while fetching cache", e);
      return event;
    }
  }
  return event;
}

// node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse2(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path3 = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  var isSafe = function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  };
  var safePattern = function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path3 += prefix;
        prefix = "";
      }
      if (path3) {
        result.push(path3);
        path3 = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path3 += value;
      continue;
    }
    if (path3) {
      result.push(path3);
      path3 = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse2(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a = options.encode, encode = _a === void 0 ? function(x) {
    return x;
  } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path3 = "";
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        path3 += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);
          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path3 += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);
        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path3 += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path3;
  };
}
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path3 = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    };
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path: path3, index, params };
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path3, keys) {
  if (!keys)
    return path3;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path3.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path3.source);
  }
  return path3;
}
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path3) {
    return pathToRegexp(path3, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
function stringToRegexp(path3, keys, options) {
  return tokensToRegexp(parse2(path3, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp(path3, keys, options) {
  if (path3 instanceof RegExp)
    return regexpToRegexp(path3, keys);
  if (Array.isArray(path3))
    return arrayToRegexp(path3, keys, options);
  return stringToRegexp(path3, keys, options);
}

// node_modules/@opennextjs/aws/dist/utils/normalize-path.js
import path2 from "node:path";
function normalizeRepeatedSlashes(url) {
  const urlNoQuery = url.host + url.pathname;
  return `${url.protocol}//${urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/")}${url.search}`;
}

// node_modules/@opennextjs/aws/dist/core/routing/matcher.js
init_stream();
init_logger();

// node_modules/@opennextjs/aws/dist/core/routing/routeMatcher.js
var optionalLocalePrefixRegex = `^/(?:${RoutesManifest.locales.map((locale) => `${locale}/?`).join("|")})?`;
var optionalBasepathPrefixRegex = RoutesManifest.basePath ? `^${RoutesManifest.basePath}/?` : "^/";
var optionalPrefix = optionalLocalePrefixRegex.replace("^/", optionalBasepathPrefixRegex);
function routeMatcher(routeDefinitions) {
  const regexp = routeDefinitions.map((route) => ({
    page: route.page,
    regexp: new RegExp(route.regex.replace("^/", optionalPrefix))
  }));
  const appPathsSet = /* @__PURE__ */ new Set();
  const routePathsSet = /* @__PURE__ */ new Set();
  for (const [k, v] of Object.entries(AppPathRoutesManifest)) {
    if (k.endsWith("page")) {
      appPathsSet.add(v);
    } else if (k.endsWith("route")) {
      routePathsSet.add(v);
    }
  }
  return function matchRoute(path3) {
    const foundRoutes = regexp.filter((route) => route.regexp.test(path3));
    return foundRoutes.map((foundRoute) => {
      let routeType = "page";
      if (appPathsSet.has(foundRoute.page)) {
        routeType = "app";
      } else if (routePathsSet.has(foundRoute.page)) {
        routeType = "route";
      }
      return {
        route: foundRoute.page,
        type: routeType
      };
    });
  };
}
var staticRouteMatcher = routeMatcher([
  ...RoutesManifest.routes.static,
  ...getStaticAPIRoutes()
]);
var dynamicRouteMatcher = routeMatcher(RoutesManifest.routes.dynamic);
function getStaticAPIRoutes() {
  const createRouteDefinition = (route) => ({
    page: route,
    regex: `^${route}(?:/)?$`
  });
  const dynamicRoutePages = new Set(RoutesManifest.routes.dynamic.map(({ page }) => page));
  const pagesStaticAPIRoutes = Object.keys(PagesManifest).filter((route) => route.startsWith("/api/") && !dynamicRoutePages.has(route)).map(createRouteDefinition);
  const appPathsStaticAPIRoutes = Object.values(AppPathRoutesManifest).filter((route) => (route.startsWith("/api/") || route === "/api") && !dynamicRoutePages.has(route)).map(createRouteDefinition);
  return [...pagesStaticAPIRoutes, ...appPathsStaticAPIRoutes];
}

// node_modules/@opennextjs/aws/dist/core/routing/matcher.js
var routeHasMatcher = (headers, cookies, query) => (redirect) => {
  switch (redirect.type) {
    case "header":
      return !!headers?.[redirect.key.toLowerCase()] && new RegExp(redirect.value ?? "").test(headers[redirect.key.toLowerCase()] ?? "");
    case "cookie":
      return !!cookies?.[redirect.key] && new RegExp(redirect.value ?? "").test(cookies[redirect.key] ?? "");
    case "query":
      return query[redirect.key] && Array.isArray(redirect.value) ? redirect.value.reduce((prev, current) => prev || new RegExp(current).test(query[redirect.key]), false) : new RegExp(redirect.value ?? "").test(query[redirect.key] ?? "");
    case "host":
      return headers?.host !== "" && new RegExp(redirect.value ?? "").test(headers.host);
    default:
      return false;
  }
};
function checkHas(matcher, has, inverted = false) {
  return has ? has.reduce((acc, cur) => {
    if (acc === false)
      return false;
    return inverted ? !matcher(cur) : matcher(cur);
  }, true) : true;
}
var getParamsFromSource = (source) => (value) => {
  debug("value", value);
  const _match = source(value);
  return _match ? _match.params : {};
};
var computeParamHas = (headers, cookies, query) => (has) => {
  if (!has.value)
    return {};
  const matcher = new RegExp(`^${has.value}$`);
  const fromSource = (value) => {
    const matches = value.match(matcher);
    return matches?.groups ?? {};
  };
  switch (has.type) {
    case "header":
      return fromSource(headers[has.key.toLowerCase()] ?? "");
    case "cookie":
      return fromSource(cookies[has.key] ?? "");
    case "query":
      return Array.isArray(query[has.key]) ? fromSource(query[has.key].join(",")) : fromSource(query[has.key] ?? "");
    case "host":
      return fromSource(headers.host ?? "");
  }
};
function convertMatch(match2, toDestination, destination) {
  if (!match2) {
    return destination;
  }
  const { params } = match2;
  const isUsingParams = Object.keys(params).length > 0;
  return isUsingParams ? toDestination(params) : destination;
}
function getNextConfigHeaders(event, configHeaders) {
  if (!configHeaders) {
    return {};
  }
  const matcher = routeHasMatcher(event.headers, event.cookies, event.query);
  const requestHeaders = {};
  const localizedRawPath = localizePath(event);
  for (const { headers, has, missing, regex, source, locale } of configHeaders) {
    const path3 = locale === false ? event.rawPath : localizedRawPath;
    if (new RegExp(regex).test(path3) && checkHas(matcher, has) && checkHas(matcher, missing, true)) {
      const fromSource = match(source);
      const _match = fromSource(path3);
      headers.forEach((h) => {
        try {
          const key = convertMatch(_match, compile(h.key), h.key);
          const value = convertMatch(_match, compile(h.value), h.value);
          requestHeaders[key] = value;
        } catch {
          debug(`Error matching header ${h.key} with value ${h.value}`);
          requestHeaders[h.key] = h.value;
        }
      });
    }
  }
  return requestHeaders;
}
function handleRewrites(event, rewrites) {
  const { rawPath, headers, query, cookies, url } = event;
  const localizedRawPath = localizePath(event);
  const matcher = routeHasMatcher(headers, cookies, query);
  const computeHas = computeParamHas(headers, cookies, query);
  const rewrite = rewrites.find((route) => {
    const path3 = route.locale === false ? rawPath : localizedRawPath;
    return new RegExp(route.regex).test(path3) && checkHas(matcher, route.has) && checkHas(matcher, route.missing, true);
  });
  let finalQuery = query;
  let rewrittenUrl = url;
  const isExternalRewrite = isExternal(rewrite?.destination);
  debug("isExternalRewrite", isExternalRewrite);
  if (rewrite) {
    const { pathname, protocol, hostname, queryString } = getUrlParts(rewrite.destination, isExternalRewrite);
    const pathToUse = rewrite.locale === false ? rawPath : localizedRawPath;
    debug("urlParts", { pathname, protocol, hostname, queryString });
    const toDestinationPath = compile(escapeRegex(pathname, { isPath: true }));
    const toDestinationHost = compile(escapeRegex(hostname));
    const toDestinationQuery = compile(escapeRegex(queryString));
    const params = {
      // params for the source
      ...getParamsFromSource(match(escapeRegex(rewrite.source, { isPath: true })))(pathToUse),
      // params for the has
      ...rewrite.has?.reduce((acc, cur) => {
        return Object.assign(acc, computeHas(cur));
      }, {}),
      // params for the missing
      ...rewrite.missing?.reduce((acc, cur) => {
        return Object.assign(acc, computeHas(cur));
      }, {})
    };
    const isUsingParams = Object.keys(params).length > 0;
    let rewrittenQuery = queryString;
    let rewrittenHost = hostname;
    let rewrittenPath = pathname;
    if (isUsingParams) {
      rewrittenPath = unescapeRegex(toDestinationPath(params));
      rewrittenHost = unescapeRegex(toDestinationHost(params));
      rewrittenQuery = unescapeRegex(toDestinationQuery(params));
    }
    if (NextConfig.i18n && !isExternalRewrite) {
      const strippedPathLocale = rewrittenPath.replace(new RegExp(`^/(${NextConfig.i18n.locales.join("|")})`), "");
      if (strippedPathLocale.startsWith("/api/")) {
        rewrittenPath = strippedPathLocale;
      }
    }
    rewrittenUrl = isExternalRewrite ? `${protocol}//${rewrittenHost}${rewrittenPath}` : new URL(rewrittenPath, event.url).href;
    finalQuery = {
      ...query,
      ...convertFromQueryString(rewrittenQuery)
    };
    rewrittenUrl += convertToQueryString(finalQuery);
    debug("rewrittenUrl", { rewrittenUrl, finalQuery, isUsingParams });
  }
  return {
    internalEvent: {
      ...event,
      query: finalQuery,
      rawPath: new URL(rewrittenUrl).pathname,
      url: rewrittenUrl
    },
    __rewrite: rewrite,
    isExternalRewrite
  };
}
function handleRepeatedSlashRedirect(event) {
  if (event.rawPath.match(/(\\|\/\/)/)) {
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: normalizeRepeatedSlashes(new URL(event.url))
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
  return false;
}
function handleTrailingSlashRedirect(event) {
  const url = new URL(event.rawPath, "http://localhost");
  if (
    // Someone is trying to redirect to a different origin, let's not do that
    url.host !== "localhost" || NextConfig.skipTrailingSlashRedirect || // We should not apply trailing slash redirect to API routes
    event.rawPath.startsWith("/api/")
  ) {
    return false;
  }
  const emptyBody = emptyReadableStream();
  if (NextConfig.trailingSlash && !event.headers["x-nextjs-data"] && !event.rawPath.endsWith("/") && !event.rawPath.match(/[\w-]+\.[\w]+$/g)) {
    const headersLocation = event.url.split("?");
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: `${headersLocation[0]}/${headersLocation[1] ? `?${headersLocation[1]}` : ""}`
      },
      body: emptyBody,
      isBase64Encoded: false
    };
  }
  if (!NextConfig.trailingSlash && event.rawPath.endsWith("/") && event.rawPath !== "/") {
    const headersLocation = event.url.split("?");
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: `${headersLocation[0].replace(/\/$/, "")}${headersLocation[1] ? `?${headersLocation[1]}` : ""}`
      },
      body: emptyBody,
      isBase64Encoded: false
    };
  }
  return false;
}
function handleRedirects(event, redirects) {
  const repeatedSlashRedirect = handleRepeatedSlashRedirect(event);
  if (repeatedSlashRedirect)
    return repeatedSlashRedirect;
  const trailingSlashRedirect = handleTrailingSlashRedirect(event);
  if (trailingSlashRedirect)
    return trailingSlashRedirect;
  const localeRedirect = handleLocaleRedirect(event);
  if (localeRedirect)
    return localeRedirect;
  const { internalEvent, __rewrite } = handleRewrites(event, redirects.filter((r) => !r.internal));
  if (__rewrite && !__rewrite.internal) {
    return {
      type: event.type,
      statusCode: __rewrite.statusCode ?? 308,
      headers: {
        Location: internalEvent.url
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
}
function fixDataPage(internalEvent, buildId) {
  const { rawPath, query } = internalEvent;
  const basePath = NextConfig.basePath ?? "";
  const dataPattern = `${basePath}/_next/data/${buildId}`;
  if (rawPath.startsWith("/_next/data") && !rawPath.startsWith(dataPattern)) {
    return {
      type: internalEvent.type,
      statusCode: 404,
      body: toReadableStream("{}"),
      headers: {
        "Content-Type": "application/json"
      },
      isBase64Encoded: false
    };
  }
  if (rawPath.startsWith(dataPattern) && rawPath.endsWith(".json")) {
    const newPath = `${basePath}${rawPath.slice(dataPattern.length, -".json".length).replace(/^\/index$/, "/")}`;
    query.__nextDataReq = "1";
    return {
      ...internalEvent,
      rawPath: newPath,
      query,
      url: new URL(`${newPath}${convertToQueryString(query)}`, internalEvent.url).href
    };
  }
  return internalEvent;
}
function handleFallbackFalse(internalEvent, prerenderManifest) {
  const { rawPath } = internalEvent;
  const { dynamicRoutes = {}, routes = {} } = prerenderManifest ?? {};
  const prerenderedFallbackRoutes = Object.entries(dynamicRoutes).filter(([, { fallback }]) => fallback === false);
  const routeFallback = prerenderedFallbackRoutes.some(([, { routeRegex }]) => {
    const routeRegexExp = new RegExp(routeRegex);
    return routeRegexExp.test(rawPath);
  });
  const locales = NextConfig.i18n?.locales;
  const routesAlreadyHaveLocale = locales?.includes(rawPath.split("/")[1]) || // If we don't use locales, we don't need to add the default locale
  locales === void 0;
  let localizedPath = routesAlreadyHaveLocale ? rawPath : `/${NextConfig.i18n?.defaultLocale}${rawPath}`;
  if (
    // Not if localizedPath is "/" tho, because that would not make it find `isPregenerated` below since it would be try to match an empty string.
    localizedPath !== "/" && NextConfig.trailingSlash && localizedPath.endsWith("/")
  ) {
    localizedPath = localizedPath.slice(0, -1);
  }
  const matchedStaticRoute = staticRouteMatcher(localizedPath);
  const prerenderedFallbackRoutesName = prerenderedFallbackRoutes.map(([name]) => name);
  const matchedDynamicRoute = dynamicRouteMatcher(localizedPath).filter(({ route }) => !prerenderedFallbackRoutesName.includes(route));
  const isPregenerated = Object.keys(routes).includes(localizedPath);
  if (routeFallback && !isPregenerated && matchedStaticRoute.length === 0 && matchedDynamicRoute.length === 0) {
    return {
      event: {
        ...internalEvent,
        rawPath: "/404",
        url: constructNextUrl(internalEvent.url, "/404"),
        headers: {
          ...internalEvent.headers,
          "x-invoke-status": "404"
        }
      },
      isISR: false
    };
  }
  return {
    event: internalEvent,
    isISR: routeFallback || isPregenerated
  };
}

// node_modules/@opennextjs/aws/dist/core/routing/middleware.js
init_stream();
init_utils();
var middlewareManifest = MiddlewareManifest;
var functionsConfigManifest = FunctionsConfigManifest;
var middleMatch = getMiddlewareMatch(middlewareManifest, functionsConfigManifest);
var REDIRECTS = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function defaultMiddlewareLoader() {
  return Promise.resolve().then(() => (init_edgeFunctionHandler(), edgeFunctionHandler_exports));
}
async function handleMiddleware(internalEvent, initialSearch, middlewareLoader = defaultMiddlewareLoader) {
  const headers = internalEvent.headers;
  if (headers["x-isr"] && headers["x-prerender-revalidate"] === PrerenderManifest?.preview?.previewModeId)
    return internalEvent;
  const normalizedPath = localizePath(internalEvent);
  const hasMatch = middleMatch.some((r) => r.test(normalizedPath));
  if (!hasMatch)
    return internalEvent;
  const initialUrl = new URL(normalizedPath, internalEvent.url);
  initialUrl.search = initialSearch;
  const url = initialUrl.href;
  const middleware = await middlewareLoader();
  const result = await middleware.default({
    // `geo` is pre Next 15.
    geo: {
      // The city name is percent-encoded.
      // See https://github.com/vercel/vercel/blob/4cb6143/packages/functions/src/headers.ts#L94C19-L94C37
      city: decodeURIComponent(headers["x-open-next-city"]),
      country: headers["x-open-next-country"],
      region: headers["x-open-next-region"],
      latitude: headers["x-open-next-latitude"],
      longitude: headers["x-open-next-longitude"]
    },
    headers,
    method: internalEvent.method || "GET",
    nextConfig: {
      basePath: NextConfig.basePath,
      i18n: NextConfig.i18n,
      trailingSlash: NextConfig.trailingSlash
    },
    url,
    body: convertBodyToReadableStream(internalEvent.method, internalEvent.body)
  });
  const statusCode = result.status;
  const responseHeaders = result.headers;
  const reqHeaders = {};
  const resHeaders = {};
  const filteredHeaders = [
    "x-middleware-override-headers",
    "x-middleware-next",
    "x-middleware-rewrite",
    // We need to drop `content-encoding` because it will be decoded
    "content-encoding"
  ];
  const xMiddlewareKey = "x-middleware-request-";
  responseHeaders.forEach((value, key) => {
    if (key.startsWith(xMiddlewareKey)) {
      const k = key.substring(xMiddlewareKey.length);
      reqHeaders[k] = value;
    } else {
      if (filteredHeaders.includes(key.toLowerCase()))
        return;
      if (key.toLowerCase() === "set-cookie") {
        resHeaders[key] = resHeaders[key] ? [...resHeaders[key], value] : [value];
      } else if (REDIRECTS.has(statusCode) && key.toLowerCase() === "location") {
        resHeaders[key] = normalizeLocationHeader(value, internalEvent.url);
      } else {
        resHeaders[key] = value;
      }
    }
  });
  const rewriteUrl = responseHeaders.get("x-middleware-rewrite");
  let isExternalRewrite = false;
  let middlewareQuery = internalEvent.query;
  let newUrl = internalEvent.url;
  if (rewriteUrl) {
    newUrl = rewriteUrl;
    if (isExternal(newUrl, internalEvent.headers.host)) {
      isExternalRewrite = true;
    } else {
      const rewriteUrlObject = new URL(rewriteUrl);
      middlewareQuery = getQueryFromSearchParams(rewriteUrlObject.searchParams);
      if ("__nextDataReq" in internalEvent.query) {
        middlewareQuery.__nextDataReq = internalEvent.query.__nextDataReq;
      }
    }
  }
  if (!rewriteUrl && !responseHeaders.get("x-middleware-next")) {
    const body = result.body ?? emptyReadableStream();
    return {
      type: internalEvent.type,
      statusCode,
      headers: resHeaders,
      body,
      isBase64Encoded: false
    };
  }
  return {
    responseHeaders: resHeaders,
    url: newUrl,
    rawPath: new URL(newUrl).pathname,
    type: internalEvent.type,
    headers: { ...internalEvent.headers, ...reqHeaders },
    body: internalEvent.body,
    method: internalEvent.method,
    query: middlewareQuery,
    cookies: internalEvent.cookies,
    remoteAddress: internalEvent.remoteAddress,
    isExternalRewrite,
    rewriteStatusCode: rewriteUrl && !isExternalRewrite ? statusCode : void 0
  };
}

// node_modules/@opennextjs/aws/dist/core/routingHandler.js
var MIDDLEWARE_HEADER_PREFIX = "x-middleware-response-";
var MIDDLEWARE_HEADER_PREFIX_LEN = MIDDLEWARE_HEADER_PREFIX.length;
var INTERNAL_HEADER_PREFIX = "x-opennext-";
var INTERNAL_HEADER_INITIAL_URL = `${INTERNAL_HEADER_PREFIX}initial-url`;
var INTERNAL_HEADER_LOCALE = `${INTERNAL_HEADER_PREFIX}locale`;
var INTERNAL_HEADER_RESOLVED_ROUTES = `${INTERNAL_HEADER_PREFIX}resolved-routes`;
var INTERNAL_HEADER_REWRITE_STATUS_CODE = `${INTERNAL_HEADER_PREFIX}rewrite-status-code`;
var INTERNAL_EVENT_REQUEST_ID = `${INTERNAL_HEADER_PREFIX}request-id`;
var geoHeaderToNextHeader = {
  "x-open-next-city": "x-vercel-ip-city",
  "x-open-next-country": "x-vercel-ip-country",
  "x-open-next-region": "x-vercel-ip-country-region",
  "x-open-next-latitude": "x-vercel-ip-latitude",
  "x-open-next-longitude": "x-vercel-ip-longitude"
};
function applyMiddlewareHeaders(eventOrResult, middlewareHeaders) {
  const isResult = isInternalResult(eventOrResult);
  const headers = eventOrResult.headers;
  const keyPrefix = isResult ? "" : MIDDLEWARE_HEADER_PREFIX;
  Object.entries(middlewareHeaders).forEach(([key, value]) => {
    if (value) {
      headers[keyPrefix + key] = Array.isArray(value) ? value.join(",") : value;
    }
  });
}
async function routingHandler(event, { assetResolver }) {
  try {
    for (const [openNextGeoName, nextGeoName] of Object.entries(geoHeaderToNextHeader)) {
      const value = event.headers[openNextGeoName];
      if (value) {
        event.headers[nextGeoName] = value;
      }
    }
    for (const key of Object.keys(event.headers)) {
      if (key.startsWith(INTERNAL_HEADER_PREFIX) || key.startsWith(MIDDLEWARE_HEADER_PREFIX)) {
        delete event.headers[key];
      }
    }
    let headers = getNextConfigHeaders(event, ConfigHeaders);
    let eventOrResult = fixDataPage(event, BuildId);
    if (isInternalResult(eventOrResult)) {
      return eventOrResult;
    }
    const redirect = handleRedirects(eventOrResult, RoutesManifest.redirects);
    if (redirect) {
      redirect.headers.Location = normalizeLocationHeader(redirect.headers.Location, event.url, true);
      debug("redirect", redirect);
      return redirect;
    }
    const middlewareEventOrResult = await handleMiddleware(
      eventOrResult,
      // We need to pass the initial search without any decoding
      // TODO: we'd need to refactor InternalEvent to include the initial querystring directly
      // Should be done in another PR because it is a breaking change
      new URL(event.url).search
    );
    if (isInternalResult(middlewareEventOrResult)) {
      return middlewareEventOrResult;
    }
    const middlewareHeadersPrioritized = globalThis.openNextConfig.dangerous?.middlewareHeadersOverrideNextConfigHeaders ?? false;
    if (middlewareHeadersPrioritized) {
      headers = {
        ...headers,
        ...middlewareEventOrResult.responseHeaders
      };
    } else {
      headers = {
        ...middlewareEventOrResult.responseHeaders,
        ...headers
      };
    }
    let isExternalRewrite = middlewareEventOrResult.isExternalRewrite ?? false;
    eventOrResult = middlewareEventOrResult;
    if (!isExternalRewrite) {
      const beforeRewrite = handleRewrites(eventOrResult, RoutesManifest.rewrites.beforeFiles);
      eventOrResult = beforeRewrite.internalEvent;
      isExternalRewrite = beforeRewrite.isExternalRewrite;
      if (!isExternalRewrite) {
        const assetResult = await assetResolver?.maybeGetAssetResult?.(eventOrResult);
        if (assetResult) {
          applyMiddlewareHeaders(assetResult, headers);
          return assetResult;
        }
      }
    }
    const foundStaticRoute = staticRouteMatcher(eventOrResult.rawPath);
    const isStaticRoute = !isExternalRewrite && foundStaticRoute.length > 0;
    if (!(isStaticRoute || isExternalRewrite)) {
      const afterRewrite = handleRewrites(eventOrResult, RoutesManifest.rewrites.afterFiles);
      eventOrResult = afterRewrite.internalEvent;
      isExternalRewrite = afterRewrite.isExternalRewrite;
    }
    let isISR = false;
    if (!isExternalRewrite) {
      const fallbackResult = handleFallbackFalse(eventOrResult, PrerenderManifest);
      eventOrResult = fallbackResult.event;
      isISR = fallbackResult.isISR;
    }
    const foundDynamicRoute = dynamicRouteMatcher(eventOrResult.rawPath);
    const isDynamicRoute = !isExternalRewrite && foundDynamicRoute.length > 0;
    if (!(isDynamicRoute || isStaticRoute || isExternalRewrite)) {
      const fallbackRewrites = handleRewrites(eventOrResult, RoutesManifest.rewrites.fallback);
      eventOrResult = fallbackRewrites.internalEvent;
      isExternalRewrite = fallbackRewrites.isExternalRewrite;
    }
    const isNextImageRoute = eventOrResult.rawPath.startsWith("/_next/image");
    const isRouteFoundBeforeAllRewrites = isStaticRoute || isDynamicRoute || isExternalRewrite;
    if (!(isRouteFoundBeforeAllRewrites || isNextImageRoute || // We need to check again once all rewrites have been applied
    staticRouteMatcher(eventOrResult.rawPath).length > 0 || dynamicRouteMatcher(eventOrResult.rawPath).length > 0)) {
      eventOrResult = {
        ...eventOrResult,
        rawPath: "/404",
        url: constructNextUrl(eventOrResult.url, "/404"),
        headers: {
          ...eventOrResult.headers,
          "x-middleware-response-cache-control": "private, no-cache, no-store, max-age=0, must-revalidate"
        }
      };
    }
    if (globalThis.openNextConfig.dangerous?.enableCacheInterception && !isInternalResult(eventOrResult)) {
      debug("Cache interception enabled");
      eventOrResult = await cacheInterceptor(eventOrResult);
      if (isInternalResult(eventOrResult)) {
        applyMiddlewareHeaders(eventOrResult, headers);
        return eventOrResult;
      }
    }
    applyMiddlewareHeaders(eventOrResult, headers);
    const resolvedRoutes = [
      ...foundStaticRoute,
      ...foundDynamicRoute
    ];
    debug("resolvedRoutes", resolvedRoutes);
    return {
      internalEvent: eventOrResult,
      isExternalRewrite,
      origin: false,
      isISR,
      resolvedRoutes,
      initialURL: event.url,
      locale: NextConfig.i18n ? detectLocale(eventOrResult, NextConfig.i18n) : void 0,
      rewriteStatusCode: middlewareEventOrResult.rewriteStatusCode
    };
  } catch (e) {
    error("Error in routingHandler", e);
    return {
      internalEvent: {
        type: "core",
        method: "GET",
        rawPath: "/500",
        url: constructNextUrl(event.url, "/500"),
        headers: {
          ...event.headers
        },
        query: event.query,
        cookies: event.cookies,
        remoteAddress: event.remoteAddress
      },
      isExternalRewrite: false,
      origin: false,
      isISR: false,
      resolvedRoutes: [],
      initialURL: event.url,
      locale: NextConfig.i18n ? detectLocale(event, NextConfig.i18n) : void 0
    };
  }
}
function isInternalResult(eventOrResult) {
  return eventOrResult != null && "statusCode" in eventOrResult;
}

// node_modules/@opennextjs/aws/dist/adapters/middleware.js
globalThis.internalFetch = fetch;
globalThis.__openNextAls = new AsyncLocalStorage();
var defaultHandler = async (internalEvent, options) => {
  const middlewareConfig = globalThis.openNextConfig.middleware;
  const originResolver = await resolveOriginResolver(middlewareConfig?.originResolver);
  const externalRequestProxy = await resolveProxyRequest(middlewareConfig?.override?.proxyExternalRequest);
  const assetResolver = await resolveAssetResolver(middlewareConfig?.assetResolver);
  const requestId = Math.random().toString(36);
  return runWithOpenNextRequestContext({
    isISRRevalidation: internalEvent.headers["x-isr"] === "1",
    waitUntil: options?.waitUntil,
    requestId
  }, async () => {
    const result = await routingHandler(internalEvent, { assetResolver });
    if ("internalEvent" in result) {
      debug("Middleware intercepted event", internalEvent);
      if (!result.isExternalRewrite) {
        const origin = await originResolver.resolve(result.internalEvent.rawPath);
        return {
          type: "middleware",
          internalEvent: {
            ...result.internalEvent,
            headers: {
              ...result.internalEvent.headers,
              [INTERNAL_HEADER_INITIAL_URL]: internalEvent.url,
              [INTERNAL_HEADER_RESOLVED_ROUTES]: JSON.stringify(result.resolvedRoutes),
              [INTERNAL_EVENT_REQUEST_ID]: requestId,
              [INTERNAL_HEADER_REWRITE_STATUS_CODE]: String(result.rewriteStatusCode)
            }
          },
          isExternalRewrite: result.isExternalRewrite,
          origin,
          isISR: result.isISR,
          initialURL: result.initialURL,
          resolvedRoutes: result.resolvedRoutes
        };
      }
      try {
        return externalRequestProxy.proxy(result.internalEvent);
      } catch (e) {
        error("External request failed.", e);
        return {
          type: "middleware",
          internalEvent: {
            ...result.internalEvent,
            headers: {
              ...result.internalEvent.headers,
              [INTERNAL_EVENT_REQUEST_ID]: requestId
            },
            rawPath: "/500",
            url: constructNextUrl(result.internalEvent.url, "/500"),
            method: "GET"
          },
          // On error we need to rewrite to the 500 page which is an internal rewrite
          isExternalRewrite: false,
          origin: false,
          isISR: result.isISR,
          initialURL: result.internalEvent.url,
          resolvedRoutes: [{ route: "/500", type: "page" }]
        };
      }
    }
    if (process.env.OPEN_NEXT_REQUEST_ID_HEADER || globalThis.openNextDebug) {
      result.headers[INTERNAL_EVENT_REQUEST_ID] = requestId;
    }
    debug("Middleware response", result);
    return result;
  });
};
var handler2 = await createGenericHandler({
  handler: defaultHandler,
  type: "middleware"
});
var middleware_default = {
  fetch: handler2
};
export {
  middleware_default as default,
  handler2 as handler
};
