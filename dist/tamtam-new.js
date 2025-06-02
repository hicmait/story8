var Ee = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function Ge() {
  if (Le) return ie;
  Le = 1;
  var b = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function S(C, O, w) {
    var I = null;
    if (w !== void 0 && (I = "" + w), O.key !== void 0 && (I = "" + O.key), "key" in O) {
      w = {};
      for (var M in O)
        M !== "key" && (w[M] = O[M]);
    } else w = O;
    return O = w.ref, {
      $$typeof: b,
      type: C,
      key: I,
      ref: O !== void 0 ? O : null,
      props: w
    };
  }
  return ie.Fragment = c, ie.jsx = S, ie.jsxs = S, ie;
}
var ce = {}, he = { exports: {} }, d = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Be() {
  if (Ye) return d;
  Ye = 1;
  var b = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), I = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), W = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), F = Symbol.iterator;
  function H(t) {
    return t === null || typeof t != "object" ? null : (t = F && t[F] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var G = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Z = Object.assign, B = {};
  function x(t, n, s) {
    this.props = t, this.context = n, this.refs = B, this.updater = s || G;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(t, n) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, n, "setState");
  }, x.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = x.prototype;
  function J(t, n, s) {
    this.props = t, this.context = n, this.refs = B, this.updater = s || G;
  }
  var P = J.prototype = new Q();
  P.constructor = J, Z(P, x.prototype), P.isPureReactComponent = !0;
  var oe = Array.isArray, y = { H: null, A: null, T: null, S: null, V: null }, ee = Object.prototype.hasOwnProperty;
  function te(t, n, s, a, f, h) {
    return s = h.ref, {
      $$typeof: b,
      type: t,
      key: n,
      ref: s !== void 0 ? s : null,
      props: h
    };
  }
  function $(t, n) {
    return te(
      t.type,
      n,
      void 0,
      void 0,
      void 0,
      t.props
    );
  }
  function U(t) {
    return typeof t == "object" && t !== null && t.$$typeof === b;
  }
  function se(t) {
    var n = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(s) {
      return n[s];
    });
  }
  var R = /\/+/g;
  function V(t, n) {
    return typeof t == "object" && t !== null && t.key != null ? se("" + t.key) : n.toString(36);
  }
  function z() {
  }
  function L(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(z, z) : (t.status = "pending", t.then(
          function(n) {
            t.status === "pending" && (t.status = "fulfilled", t.value = n);
          },
          function(n) {
            t.status === "pending" && (t.status = "rejected", t.reason = n);
          }
        )), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function k(t, n, s, a, f) {
    var h = typeof t;
    (h === "undefined" || h === "boolean") && (t = null);
    var l = !1;
    if (t === null) l = !0;
    else
      switch (h) {
        case "bigint":
        case "string":
        case "number":
          l = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case b:
            case c:
              l = !0;
              break;
            case D:
              return l = t._init, k(
                l(t._payload),
                n,
                s,
                a,
                f
              );
          }
      }
    if (l)
      return f = f(t), l = a === "" ? "." + V(t, 0) : a, oe(f) ? (s = "", l != null && (s = l.replace(R, "$&/") + "/"), k(f, n, s, "", function(j) {
        return j;
      })) : f != null && (U(f) && (f = $(
        f,
        s + (f.key == null || t && t.key === f.key ? "" : ("" + f.key).replace(
          R,
          "$&/"
        ) + "/") + l
      )), n.push(f)), 1;
    l = 0;
    var A = a === "" ? "." : a + ":";
    if (oe(t))
      for (var p = 0; p < t.length; p++)
        a = t[p], h = A + V(a, p), l += k(
          a,
          n,
          s,
          h,
          f
        );
    else if (p = H(t), typeof p == "function")
      for (t = p.call(t), p = 0; !(a = t.next()).done; )
        a = a.value, h = A + V(a, p++), l += k(
          a,
          n,
          s,
          h,
          f
        );
    else if (h === "object") {
      if (typeof t.then == "function")
        return k(
          L(t),
          n,
          s,
          a,
          f
        );
      throw n = String(t), Error(
        "Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return l;
  }
  function Y(t, n, s) {
    if (t == null) return t;
    var a = [], f = 0;
    return k(t, a, "", "", function(h) {
      return n.call(s, h, f++);
    }), a;
  }
  function X(t) {
    if (t._status === -1) {
      var n = t._result;
      n = n(), n.then(
        function(s) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = s);
        },
        function(s) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = s);
        }
      ), t._status === -1 && (t._status = 0, t._result = n);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var q = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function re() {
  }
  return d.Children = {
    map: Y,
    forEach: function(t, n, s) {
      Y(
        t,
        function() {
          n.apply(this, arguments);
        },
        s
      );
    },
    count: function(t) {
      var n = 0;
      return Y(t, function() {
        n++;
      }), n;
    },
    toArray: function(t) {
      return Y(t, function(n) {
        return n;
      }) || [];
    },
    only: function(t) {
      if (!U(t))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return t;
    }
  }, d.Component = x, d.Fragment = S, d.Profiler = O, d.PureComponent = J, d.StrictMode = C, d.Suspense = ne, d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y, d.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return y.H.useMemoCache(t);
    }
  }, d.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, d.cloneElement = function(t, n, s) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + "."
      );
    var a = Z({}, t.props), f = t.key, h = void 0;
    if (n != null)
      for (l in n.ref !== void 0 && (h = void 0), n.key !== void 0 && (f = "" + n.key), n)
        !ee.call(n, l) || l === "key" || l === "__self" || l === "__source" || l === "ref" && n.ref === void 0 || (a[l] = n[l]);
    var l = arguments.length - 2;
    if (l === 1) a.children = s;
    else if (1 < l) {
      for (var A = Array(l), p = 0; p < l; p++)
        A[p] = arguments[p + 2];
      a.children = A;
    }
    return te(t.type, f, void 0, void 0, h, a);
  }, d.createContext = function(t) {
    return t = {
      $$typeof: I,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: w,
      _context: t
    }, t;
  }, d.createElement = function(t, n, s) {
    var a, f = {}, h = null;
    if (n != null)
      for (a in n.key !== void 0 && (h = "" + n.key), n)
        ee.call(n, a) && a !== "key" && a !== "__self" && a !== "__source" && (f[a] = n[a]);
    var l = arguments.length - 2;
    if (l === 1) f.children = s;
    else if (1 < l) {
      for (var A = Array(l), p = 0; p < l; p++)
        A[p] = arguments[p + 2];
      f.children = A;
    }
    if (t && t.defaultProps)
      for (a in l = t.defaultProps, l)
        f[a] === void 0 && (f[a] = l[a]);
    return te(t, h, void 0, void 0, null, f);
  }, d.createRef = function() {
    return { current: null };
  }, d.forwardRef = function(t) {
    return { $$typeof: M, render: t };
  }, d.isValidElement = U, d.lazy = function(t) {
    return {
      $$typeof: D,
      _payload: { _status: -1, _result: t },
      _init: X
    };
  }, d.memo = function(t, n) {
    return {
      $$typeof: W,
      type: t,
      compare: n === void 0 ? null : n
    };
  }, d.startTransition = function(t) {
    var n = y.T, s = {};
    y.T = s;
    try {
      var a = t(), f = y.S;
      f !== null && f(s, a), typeof a == "object" && a !== null && typeof a.then == "function" && a.then(re, q);
    } catch (h) {
      q(h);
    } finally {
      y.T = n;
    }
  }, d.unstable_useCacheRefresh = function() {
    return y.H.useCacheRefresh();
  }, d.use = function(t) {
    return y.H.use(t);
  }, d.useActionState = function(t, n, s) {
    return y.H.useActionState(t, n, s);
  }, d.useCallback = function(t, n) {
    return y.H.useCallback(t, n);
  }, d.useContext = function(t) {
    return y.H.useContext(t);
  }, d.useDebugValue = function() {
  }, d.useDeferredValue = function(t, n) {
    return y.H.useDeferredValue(t, n);
  }, d.useEffect = function(t, n, s) {
    var a = y.H;
    if (typeof s == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return a.useEffect(t, n);
  }, d.useId = function() {
    return y.H.useId();
  }, d.useImperativeHandle = function(t, n, s) {
    return y.H.useImperativeHandle(t, n, s);
  }, d.useInsertionEffect = function(t, n) {
    return y.H.useInsertionEffect(t, n);
  }, d.useLayoutEffect = function(t, n) {
    return y.H.useLayoutEffect(t, n);
  }, d.useMemo = function(t, n) {
    return y.H.useMemo(t, n);
  }, d.useOptimistic = function(t, n) {
    return y.H.useOptimistic(t, n);
  }, d.useReducer = function(t, n, s) {
    return y.H.useReducer(t, n, s);
  }, d.useRef = function(t) {
    return y.H.useRef(t);
  }, d.useState = function(t) {
    return y.H.useState(t);
  }, d.useSyncExternalStore = function(t, n, s) {
    return y.H.useSyncExternalStore(
      t,
      n,
      s
    );
  }, d.useTransition = function() {
    return y.H.useTransition();
  }, d.version = "19.1.0", d;
}
var fe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
fe.exports;
var Ie;
function Qe() {
  return Ie || (Ie = 1, function(b, c) {
    process.env.NODE_ENV !== "production" && function() {
      function S(e, r) {
        Object.defineProperty(w.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              r[0],
              r[1]
            );
          }
        });
      }
      function C(e) {
        return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function O(e, r) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var o = e + "." + r;
        we[o] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          r,
          e
        ), we[o] = !0);
      }
      function w(e, r, o) {
        this.props = e, this.context = r, this.refs = ye, this.updater = o || be;
      }
      function I() {
      }
      function M(e, r, o) {
        this.props = e, this.context = r, this.refs = ye, this.updater = o || be;
      }
      function ne(e) {
        return "" + e;
      }
      function W(e) {
        try {
          ne(e);
          var r = !1;
        } catch {
          r = !0;
        }
        if (r) {
          r = console;
          var o = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return o.call(
            r,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            u
          ), ne(e);
        }
      }
      function D(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === He ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case t:
            return "Fragment";
          case s:
            return "Profiler";
          case n:
            return "StrictMode";
          case l:
            return "Suspense";
          case A:
            return "SuspenseList";
          case ae:
            return "Activity";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case re:
              return "Portal";
            case f:
              return (e.displayName || "Context") + ".Provider";
            case a:
              return (e._context.displayName || "Context") + ".Consumer";
            case h:
              var r = e.render;
              return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case p:
              return r = e.displayName || null, r !== null ? r : D(e.type) || "Memo";
            case j:
              r = e._payload, e = e._init;
              try {
                return D(e(r));
              } catch {
              }
          }
        return null;
      }
      function F(e) {
        if (e === t) return "<>";
        if (typeof e == "object" && e !== null && e.$$typeof === j)
          return "<...>";
        try {
          var r = D(e);
          return r ? "<" + r + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function H() {
        var e = v.A;
        return e === null ? null : e.getOwner();
      }
      function G() {
        return Error("react-stack-top-frame");
      }
      function Z(e) {
        if (pe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function B(e, r) {
        function o() {
          Ae || (Ae = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            r
          ));
        }
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function x() {
        var e = D(this.type);
        return Ce[e] || (Ce[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function Q(e, r, o, u, i, E, m, g) {
        return o = E.ref, e = {
          $$typeof: q,
          type: e,
          key: r,
          props: E,
          _owner: i
        }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: x
        }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(e, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(e, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: m
        }), Object.defineProperty(e, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: g
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function J(e, r) {
        return r = Q(
          e.type,
          r,
          void 0,
          void 0,
          e._owner,
          e.props,
          e._debugStack,
          e._debugTask
        ), e._store && (r._store.validated = e._store.validated), r;
      }
      function P(e) {
        return typeof e == "object" && e !== null && e.$$typeof === q;
      }
      function oe(e) {
        var r = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(o) {
          return r[o];
        });
      }
      function y(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (W(e.key), oe("" + e.key)) : r.toString(36);
      }
      function ee() {
      }
      function te(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(ee, ee) : (e.status = "pending", e.then(
              function(r) {
                e.status === "pending" && (e.status = "fulfilled", e.value = r);
              },
              function(r) {
                e.status === "pending" && (e.status = "rejected", e.reason = r);
              }
            )), e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
            }
        }
        throw e;
      }
      function $(e, r, o, u, i) {
        var E = typeof e;
        (E === "undefined" || E === "boolean") && (e = null);
        var m = !1;
        if (e === null) m = !0;
        else
          switch (E) {
            case "bigint":
            case "string":
            case "number":
              m = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case q:
                case re:
                  m = !0;
                  break;
                case j:
                  return m = e._init, $(
                    m(e._payload),
                    r,
                    o,
                    u,
                    i
                  );
              }
          }
        if (m) {
          m = e, i = i(m);
          var g = u === "" ? "." + y(m, 0) : u;
          return Oe(i) ? (o = "", g != null && (o = g.replace(Pe, "$&/") + "/"), $(i, r, o, "", function(K) {
            return K;
          })) : i != null && (P(i) && (i.key != null && (m && m.key === i.key || W(i.key)), o = J(
            i,
            o + (i.key == null || m && m.key === i.key ? "" : ("" + i.key).replace(
              Pe,
              "$&/"
            ) + "/") + g
          ), u !== "" && m != null && P(m) && m.key == null && m._store && !m._store.validated && (o._store.validated = 2), i = o), r.push(i)), 1;
        }
        if (m = 0, g = u === "" ? "." : u + ":", Oe(e))
          for (var _ = 0; _ < e.length; _++)
            u = e[_], E = g + y(u, _), m += $(
              u,
              r,
              o,
              E,
              i
            );
        else if (_ = C(e), typeof _ == "function")
          for (_ === e.entries && (je || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), je = !0), e = _.call(e), _ = 0; !(u = e.next()).done; )
            u = u.value, E = g + y(u, _++), m += $(
              u,
              r,
              o,
              E,
              i
            );
        else if (E === "object") {
          if (typeof e.then == "function")
            return $(
              te(e),
              r,
              o,
              u,
              i
            );
          throw r = String(e), Error(
            "Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return m;
      }
      function U(e, r, o) {
        if (e == null) return e;
        var u = [], i = 0;
        return $(e, u, "", "", function(E) {
          return r.call(o, E, i++);
        }), u;
      }
      function se(e) {
        if (e._status === -1) {
          var r = e._result;
          r = r(), r.then(
            function(o) {
              (e._status === 0 || e._status === -1) && (e._status = 1, e._result = o);
            },
            function(o) {
              (e._status === 0 || e._status === -1) && (e._status = 2, e._result = o);
            }
          ), e._status === -1 && (e._status = 0, e._result = r);
        }
        if (e._status === 1)
          return r = e._result, r === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            r
          ), "default" in r || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            r
          ), r.default;
        throw e._result;
      }
      function R() {
        var e = v.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function V() {
      }
      function z(e) {
        if (me === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7);
            me = (b && b[r]).call(
              b,
              "timers"
            ).setImmediate;
          } catch {
            me = function(u) {
              Me === !1 && (Me = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var i = new MessageChannel();
              i.port1.onmessage = u, i.port2.postMessage(void 0);
            };
          }
        return me(e);
      }
      function L(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function k(e, r) {
        r !== _e - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), _e = r;
      }
      function Y(e, r, o) {
        var u = v.actQueue;
        if (u !== null)
          if (u.length !== 0)
            try {
              X(u), z(function() {
                return Y(e, r, o);
              });
              return;
            } catch (i) {
              v.thrownErrors.push(i);
            }
          else v.actQueue = null;
        0 < v.thrownErrors.length ? (u = L(v.thrownErrors), v.thrownErrors.length = 0, o(u)) : r(e);
      }
      function X(e) {
        if (!ge) {
          ge = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var o = e[r];
              do {
                v.didUsePromise = !1;
                var u = o(!1);
                if (u !== null) {
                  if (v.didUsePromise) {
                    e[r] = o, e.splice(0, r);
                    return;
                  }
                  o = u;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (i) {
            e.splice(0, r + 1), v.thrownErrors.push(i);
          } finally {
            ge = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var q = Symbol.for("react.transitional.element"), re = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), le = Symbol.iterator, we = {}, be = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          O(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          O(e, "replaceState");
        },
        enqueueSetState: function(e) {
          O(e, "setState");
        }
      }, Te = Object.assign, ye = {};
      Object.freeze(ye), w.prototype.isReactComponent = {}, w.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, r, "setState");
      }, w.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var N = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, de;
      for (de in N)
        N.hasOwnProperty(de) && S(de, N[de]);
      I.prototype = w.prototype, N = M.prototype = new I(), N.constructor = M, Te(N, w.prototype), N.isPureReactComponent = !0;
      var Oe = Array.isArray, He = Symbol.for("react.client.reference"), v = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, pe = Object.prototype.hasOwnProperty, ke = console.createTask ? console.createTask : function() {
        return null;
      };
      N = {
        "react-stack-bottom-frame": function(e) {
          return e();
        }
      };
      var Ae, Se, Ce = {}, ze = N["react-stack-bottom-frame"].bind(N, G)(), qe = ke(F(G)), je = !1, Pe = /\/+/g, Ne = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var r = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(r)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, Me = !1, me = null, _e = 0, ve = !1, ge = !1, $e = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : z;
      N = Object.freeze({
        __proto__: null,
        c: function(e) {
          return R().useMemoCache(e);
        }
      }), c.Children = {
        map: U,
        forEach: function(e, r, o) {
          U(
            e,
            function() {
              r.apply(this, arguments);
            },
            o
          );
        },
        count: function(e) {
          var r = 0;
          return U(e, function() {
            r++;
          }), r;
        },
        toArray: function(e) {
          return U(e, function(r) {
            return r;
          }) || [];
        },
        only: function(e) {
          if (!P(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, c.Component = w, c.Fragment = t, c.Profiler = s, c.PureComponent = M, c.StrictMode = n, c.Suspense = l, c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v, c.__COMPILER_RUNTIME = N, c.act = function(e) {
        var r = v.actQueue, o = _e;
        _e++;
        var u = v.actQueue = r !== null ? r : [], i = !1;
        try {
          var E = e();
        } catch (_) {
          v.thrownErrors.push(_);
        }
        if (0 < v.thrownErrors.length)
          throw k(r, o), e = L(v.thrownErrors), v.thrownErrors.length = 0, e;
        if (E !== null && typeof E == "object" && typeof E.then == "function") {
          var m = E;
          return $e(function() {
            i || ve || (ve = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(_, K) {
              i = !0, m.then(
                function(ue) {
                  if (k(r, o), o === 0) {
                    try {
                      X(u), z(function() {
                        return Y(
                          ue,
                          _,
                          K
                        );
                      });
                    } catch (Fe) {
                      v.thrownErrors.push(Fe);
                    }
                    if (0 < v.thrownErrors.length) {
                      var We = L(
                        v.thrownErrors
                      );
                      v.thrownErrors.length = 0, K(We);
                    }
                  } else _(ue);
                },
                function(ue) {
                  k(r, o), 0 < v.thrownErrors.length && (ue = L(
                    v.thrownErrors
                  ), v.thrownErrors.length = 0), K(ue);
                }
              );
            }
          };
        }
        var g = E;
        if (k(r, o), o === 0 && (X(u), u.length !== 0 && $e(function() {
          i || ve || (ve = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), v.actQueue = null), 0 < v.thrownErrors.length)
          throw e = L(v.thrownErrors), v.thrownErrors.length = 0, e;
        return {
          then: function(_, K) {
            i = !0, o === 0 ? (v.actQueue = u, z(function() {
              return Y(
                g,
                _,
                K
              );
            })) : _(g);
          }
        };
      }, c.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, c.captureOwnerStack = function() {
        var e = v.getCurrentStack;
        return e === null ? null : e();
      }, c.cloneElement = function(e, r, o) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var u = Te({}, e.props), i = e.key, E = e._owner;
        if (r != null) {
          var m;
          e: {
            if (pe.call(r, "ref") && (m = Object.getOwnPropertyDescriptor(
              r,
              "ref"
            ).get) && m.isReactWarning) {
              m = !1;
              break e;
            }
            m = r.ref !== void 0;
          }
          m && (E = H()), Z(r) && (W(r.key), i = "" + r.key);
          for (g in r)
            !pe.call(r, g) || g === "key" || g === "__self" || g === "__source" || g === "ref" && r.ref === void 0 || (u[g] = r[g]);
        }
        var g = arguments.length - 2;
        if (g === 1) u.children = o;
        else if (1 < g) {
          m = Array(g);
          for (var _ = 0; _ < g; _++)
            m[_] = arguments[_ + 2];
          u.children = m;
        }
        for (u = Q(
          e.type,
          i,
          void 0,
          void 0,
          E,
          u,
          e._debugStack,
          e._debugTask
        ), i = 2; i < arguments.length; i++)
          E = arguments[i], P(E) && E._store && (E._store.validated = 1);
        return u;
      }, c.createContext = function(e) {
        return e = {
          $$typeof: f,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, e.Provider = e, e.Consumer = {
          $$typeof: a,
          _context: e
        }, e._currentRenderer = null, e._currentRenderer2 = null, e;
      }, c.createElement = function(e, r, o) {
        for (var u = 2; u < arguments.length; u++) {
          var i = arguments[u];
          P(i) && i._store && (i._store.validated = 1);
        }
        if (u = {}, i = null, r != null)
          for (_ in Se || !("__self" in r) || "key" in r || (Se = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), Z(r) && (W(r.key), i = "" + r.key), r)
            pe.call(r, _) && _ !== "key" && _ !== "__self" && _ !== "__source" && (u[_] = r[_]);
        var E = arguments.length - 2;
        if (E === 1) u.children = o;
        else if (1 < E) {
          for (var m = Array(E), g = 0; g < E; g++)
            m[g] = arguments[g + 2];
          Object.freeze && Object.freeze(m), u.children = m;
        }
        if (e && e.defaultProps)
          for (_ in E = e.defaultProps, E)
            u[_] === void 0 && (u[_] = E[_]);
        i && B(
          u,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        );
        var _ = 1e4 > v.recentlyCreatedOwnerStacks++;
        return Q(
          e,
          i,
          void 0,
          void 0,
          H(),
          u,
          _ ? Error("react-stack-top-frame") : ze,
          _ ? ke(F(e)) : qe
        );
      }, c.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, c.forwardRef = function(e) {
        e != null && e.$$typeof === p ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof e != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        ) : e.length !== 0 && e.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), e != null && e.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var r = { $$typeof: h, render: e }, o;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return o;
          },
          set: function(u) {
            o = u, e.name || e.displayName || (Object.defineProperty(e, "name", { value: u }), e.displayName = u);
          }
        }), r;
      }, c.isValidElement = P, c.lazy = function(e) {
        return {
          $$typeof: j,
          _payload: { _status: -1, _result: e },
          _init: se
        };
      }, c.memo = function(e, r) {
        e == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), r = {
          $$typeof: p,
          type: e,
          compare: r === void 0 ? null : r
        };
        var o;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return o;
          },
          set: function(u) {
            o = u, e.name || e.displayName || (Object.defineProperty(e, "name", { value: u }), e.displayName = u);
          }
        }), r;
      }, c.startTransition = function(e) {
        var r = v.T, o = {};
        v.T = o, o._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var u = e(), i = v.S;
          i !== null && i(o, u), typeof u == "object" && u !== null && typeof u.then == "function" && u.then(V, Ne);
        } catch (E) {
          Ne(E);
        } finally {
          r === null && o._updatedFibers && (e = o._updatedFibers.size, o._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), v.T = r;
        }
      }, c.unstable_useCacheRefresh = function() {
        return R().useCacheRefresh();
      }, c.use = function(e) {
        return R().use(e);
      }, c.useActionState = function(e, r, o) {
        return R().useActionState(
          e,
          r,
          o
        );
      }, c.useCallback = function(e, r) {
        return R().useCallback(e, r);
      }, c.useContext = function(e) {
        var r = R();
        return e.$$typeof === a && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), r.useContext(e);
      }, c.useDebugValue = function(e, r) {
        return R().useDebugValue(e, r);
      }, c.useDeferredValue = function(e, r) {
        return R().useDeferredValue(e, r);
      }, c.useEffect = function(e, r, o) {
        e == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var u = R();
        if (typeof o == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return u.useEffect(e, r);
      }, c.useId = function() {
        return R().useId();
      }, c.useImperativeHandle = function(e, r, o) {
        return R().useImperativeHandle(e, r, o);
      }, c.useInsertionEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), R().useInsertionEffect(e, r);
      }, c.useLayoutEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), R().useLayoutEffect(e, r);
      }, c.useMemo = function(e, r) {
        return R().useMemo(e, r);
      }, c.useOptimistic = function(e, r) {
        return R().useOptimistic(e, r);
      }, c.useReducer = function(e, r, o) {
        return R().useReducer(e, r, o);
      }, c.useRef = function(e) {
        return R().useRef(e);
      }, c.useState = function(e) {
        return R().useState(e);
      }, c.useSyncExternalStore = function(e, r, o) {
        return R().useSyncExternalStore(
          e,
          r,
          o
        );
      }, c.useTransition = function() {
        return R().useTransition();
      }, c.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(fe, fe.exports)), fe.exports;
}
var De;
function Ve() {
  return De || (De = 1, process.env.NODE_ENV === "production" ? he.exports = Be() : he.exports = Qe()), he.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function Xe() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    function b(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === se ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case B:
          return "Fragment";
        case Q:
          return "Profiler";
        case x:
          return "StrictMode";
        case y:
          return "Suspense";
        case ee:
          return "SuspenseList";
        case U:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case Z:
            return "Portal";
          case P:
            return (t.displayName || "Context") + ".Provider";
          case J:
            return (t._context.displayName || "Context") + ".Consumer";
          case oe:
            var n = t.render;
            return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case te:
            return n = t.displayName || null, n !== null ? n : b(t.type) || "Memo";
          case $:
            n = t._payload, t = t._init;
            try {
              return b(t(n));
            } catch {
            }
        }
      return null;
    }
    function c(t) {
      return "" + t;
    }
    function S(t) {
      try {
        c(t);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var s = n.error, a = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), c(t);
      }
    }
    function C(t) {
      if (t === B) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === $)
        return "<...>";
      try {
        var n = b(t);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function O() {
      var t = R.A;
      return t === null ? null : t.getOwner();
    }
    function w() {
      return Error("react-stack-top-frame");
    }
    function I(t) {
      if (V.call(t, "key")) {
        var n = Object.getOwnPropertyDescriptor(t, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function M(t, n) {
      function s() {
        k || (k = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: s,
        configurable: !0
      });
    }
    function ne() {
      var t = b(this.type);
      return Y[t] || (Y[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function W(t, n, s, a, f, h, l, A) {
      return s = h.ref, t = {
        $$typeof: G,
        type: t,
        key: n,
        props: h,
        _owner: f
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: ne
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: l
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function D(t, n, s, a, f, h, l, A) {
      var p = n.children;
      if (p !== void 0)
        if (a)
          if (z(p)) {
            for (a = 0; a < p.length; a++)
              F(p[a]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else F(p);
      if (V.call(n, "key")) {
        p = b(t);
        var j = Object.keys(n).filter(function(le) {
          return le !== "key";
        });
        a = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", re[p + a] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          p,
          j,
          p
        ), re[p + a] = !0);
      }
      if (p = null, s !== void 0 && (S(s), p = "" + s), I(n) && (S(n.key), p = "" + n.key), "key" in n) {
        s = {};
        for (var ae in n)
          ae !== "key" && (s[ae] = n[ae]);
      } else s = n;
      return p && M(
        s,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), W(
        t,
        p,
        h,
        f,
        O(),
        s,
        l,
        A
      );
    }
    function F(t) {
      typeof t == "object" && t !== null && t.$$typeof === G && t._store && (t._store.validated = 1);
    }
    var H = Ve(), G = Symbol.for("react.transitional.element"), Z = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), P = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), U = Symbol.for("react.activity"), se = Symbol.for("react.client.reference"), R = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, z = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    H = {
      "react-stack-bottom-frame": function(t) {
        return t();
      }
    };
    var k, Y = {}, X = H["react-stack-bottom-frame"].bind(
      H,
      w
    )(), q = L(C(w)), re = {};
    ce.Fragment = B, ce.jsx = function(t, n, s, a, f) {
      var h = 1e4 > R.recentlyCreatedOwnerStacks++;
      return D(
        t,
        n,
        s,
        !1,
        a,
        f,
        h ? Error("react-stack-top-frame") : X,
        h ? L(C(t)) : q
      );
    }, ce.jsxs = function(t, n, s, a, f) {
      var h = 1e4 > R.recentlyCreatedOwnerStacks++;
      return D(
        t,
        n,
        s,
        !0,
        a,
        f,
        h ? Error("react-stack-top-frame") : X,
        h ? L(C(t)) : q
      );
    };
  }()), ce;
}
var Ue;
function Ke() {
  return Ue || (Ue = 1, process.env.NODE_ENV === "production" ? Ee.exports = Ge() : Ee.exports = Xe()), Ee.exports;
}
var T = Ke();
const Re = ({
  primary: b = !1,
  size: c = "medium",
  backgroundColor: S,
  label: C,
  ...O
}) => {
  const w = b ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ T.jsx(
    "button",
    {
      type: "button",
      className: ["storybook-button", `storybook-button--${c}`, w].join(
        " "
      ),
      style: { backgroundColor: S },
      ...O,
      children: C
    }
  );
}, Ze = ({
  user: b,
  onLogin: c,
  onLogout: S,
  onCreateAccount: C
}) => /* @__PURE__ */ T.jsx("header", { children: /* @__PURE__ */ T.jsxs("div", { className: "storybook-header", children: [
  /* @__PURE__ */ T.jsxs("div", { children: [
    /* @__PURE__ */ T.jsx(
      "svg",
      {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ T.jsxs("g", { fill: "none", fillRule: "evenodd", children: [
          /* @__PURE__ */ T.jsx(
            "path",
            {
              d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
              fill: "#FFF"
            }
          ),
          /* @__PURE__ */ T.jsx(
            "path",
            {
              d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
              fill: "#555AB9"
            }
          ),
          /* @__PURE__ */ T.jsx(
            "path",
            {
              d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
              fill: "#91BAF8"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ T.jsx("h1", { children: "Acme" })
  ] }),
  /* @__PURE__ */ T.jsx("div", { children: b ? /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    /* @__PURE__ */ T.jsxs("span", { className: "welcome", children: [
      "Welcome, ",
      /* @__PURE__ */ T.jsx("b", { children: b.name }),
      "!"
    ] }),
    /* @__PURE__ */ T.jsx(Re, { size: "small", onClick: S, label: "Log out" })
  ] }) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    /* @__PURE__ */ T.jsx(Re, { size: "small", onClick: c, label: "Log in" }),
    /* @__PURE__ */ T.jsx(
      Re,
      {
        primary: !0,
        size: "small",
        onClick: C,
        label: "Sign up"
      }
    )
  ] }) })
] }) });
export {
  Re as Button,
  Ze as Header
};
