var Ee = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Be() {
  if ($e) return ae;
  $e = 1;
  var w = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function j(P, T, b) {
    var L = null;
    if (b !== void 0 && (L = "" + b), T.key !== void 0 && (L = "" + T.key), "key" in T) {
      b = {};
      for (var N in T)
        N !== "key" && (b[N] = T[N]);
    } else b = T;
    return T = b.ref, {
      $$typeof: w,
      type: P,
      key: L,
      ref: T !== void 0 ? T : null,
      props: b
    };
  }
  return ae.Fragment = c, ae.jsx = j, ae.jsxs = j, ae;
}
var ie = {}, ve = { exports: {} }, p = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function Fe() {
  if (Me) return p;
  Me = 1;
  var w = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), L = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), W = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), z = Symbol.iterator;
  function H(t) {
    return t === null || typeof t != "object" ? null : (t = z && t[z] || t["@@iterator"], typeof t == "function" ? t : null);
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
  }, K = Object.assign, B = {};
  function D(t, n, s) {
    this.props = t, this.context = n, this.refs = B, this.updater = s || G;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(t, n) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, n, "setState");
  }, D.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function F() {
  }
  F.prototype = D.prototype;
  function Z(t, n, s) {
    this.props = t, this.context = n, this.refs = B, this.updater = s || G;
  }
  var S = Z.prototype = new F();
  S.constructor = Z, K(S, D.prototype), S.isPureReactComponent = !0;
  var ne = Array.isArray, h = { H: null, A: null, T: null, S: null, V: null }, J = Object.prototype.hasOwnProperty;
  function ee(t, n, s, a, f, y) {
    return s = y.ref, {
      $$typeof: w,
      type: t,
      key: n,
      ref: s !== void 0 ? s : null,
      props: y
    };
  }
  function $(t, n) {
    return ee(
      t.type,
      n,
      void 0,
      void 0,
      void 0,
      t.props
    );
  }
  function U(t) {
    return typeof t == "object" && t !== null && t.$$typeof === w;
  }
  function ue(t) {
    var n = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(s) {
      return n[s];
    });
  }
  var g = /\/+/g;
  function Q(t, n) {
    return typeof t == "object" && t !== null && t.key != null ? ue("" + t.key) : n.toString(36);
  }
  function q() {
  }
  function M(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(q, q) : (t.status = "pending", t.then(
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
  function O(t, n, s, a, f) {
    var y = typeof t;
    (y === "undefined" || y === "boolean") && (t = null);
    var l = !1;
    if (t === null) l = !0;
    else
      switch (y) {
        case "bigint":
        case "string":
        case "number":
          l = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case w:
            case c:
              l = !0;
              break;
            case I:
              return l = t._init, O(
                l(t._payload),
                n,
                s,
                a,
                f
              );
          }
      }
    if (l)
      return f = f(t), l = a === "" ? "." + Q(t, 0) : a, ne(f) ? (s = "", l != null && (s = l.replace(g, "$&/") + "/"), O(f, n, s, "", function(A) {
        return A;
      })) : f != null && (U(f) && (f = $(
        f,
        s + (f.key == null || t && t.key === f.key ? "" : ("" + f.key).replace(
          g,
          "$&/"
        ) + "/") + l
      )), n.push(f)), 1;
    l = 0;
    var k = a === "" ? "." : a + ":";
    if (ne(t))
      for (var d = 0; d < t.length; d++)
        a = t[d], y = k + Q(a, d), l += O(
          a,
          n,
          s,
          y,
          f
        );
    else if (d = H(t), typeof d == "function")
      for (t = d.call(t), d = 0; !(a = t.next()).done; )
        a = a.value, y = k + Q(a, d++), l += O(
          a,
          n,
          s,
          y,
          f
        );
    else if (y === "object") {
      if (typeof t.then == "function")
        return O(
          M(t),
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
    return O(t, a, "", "", function(y) {
      return n.call(s, y, f++);
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
  var x = typeof reportError == "function" ? reportError : function(t) {
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
  function te() {
  }
  return p.Children = {
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
  }, p.Component = D, p.Fragment = j, p.Profiler = T, p.PureComponent = Z, p.StrictMode = P, p.Suspense = re, p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, p.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return h.H.useMemoCache(t);
    }
  }, p.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, p.cloneElement = function(t, n, s) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + "."
      );
    var a = K({}, t.props), f = t.key, y = void 0;
    if (n != null)
      for (l in n.ref !== void 0 && (y = void 0), n.key !== void 0 && (f = "" + n.key), n)
        !J.call(n, l) || l === "key" || l === "__self" || l === "__source" || l === "ref" && n.ref === void 0 || (a[l] = n[l]);
    var l = arguments.length - 2;
    if (l === 1) a.children = s;
    else if (1 < l) {
      for (var k = Array(l), d = 0; d < l; d++)
        k[d] = arguments[d + 2];
      a.children = k;
    }
    return ee(t.type, f, void 0, void 0, y, a);
  }, p.createContext = function(t) {
    return t = {
      $$typeof: L,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: b,
      _context: t
    }, t;
  }, p.createElement = function(t, n, s) {
    var a, f = {}, y = null;
    if (n != null)
      for (a in n.key !== void 0 && (y = "" + n.key), n)
        J.call(n, a) && a !== "key" && a !== "__self" && a !== "__source" && (f[a] = n[a]);
    var l = arguments.length - 2;
    if (l === 1) f.children = s;
    else if (1 < l) {
      for (var k = Array(l), d = 0; d < l; d++)
        k[d] = arguments[d + 2];
      f.children = k;
    }
    if (t && t.defaultProps)
      for (a in l = t.defaultProps, l)
        f[a] === void 0 && (f[a] = l[a]);
    return ee(t, y, void 0, void 0, null, f);
  }, p.createRef = function() {
    return { current: null };
  }, p.forwardRef = function(t) {
    return { $$typeof: N, render: t };
  }, p.isValidElement = U, p.lazy = function(t) {
    return {
      $$typeof: I,
      _payload: { _status: -1, _result: t },
      _init: X
    };
  }, p.memo = function(t, n) {
    return {
      $$typeof: W,
      type: t,
      compare: n === void 0 ? null : n
    };
  }, p.startTransition = function(t) {
    var n = h.T, s = {};
    h.T = s;
    try {
      var a = t(), f = h.S;
      f !== null && f(s, a), typeof a == "object" && a !== null && typeof a.then == "function" && a.then(te, x);
    } catch (y) {
      x(y);
    } finally {
      h.T = n;
    }
  }, p.unstable_useCacheRefresh = function() {
    return h.H.useCacheRefresh();
  }, p.use = function(t) {
    return h.H.use(t);
  }, p.useActionState = function(t, n, s) {
    return h.H.useActionState(t, n, s);
  }, p.useCallback = function(t, n) {
    return h.H.useCallback(t, n);
  }, p.useContext = function(t) {
    return h.H.useContext(t);
  }, p.useDebugValue = function() {
  }, p.useDeferredValue = function(t, n) {
    return h.H.useDeferredValue(t, n);
  }, p.useEffect = function(t, n, s) {
    var a = h.H;
    if (typeof s == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return a.useEffect(t, n);
  }, p.useId = function() {
    return h.H.useId();
  }, p.useImperativeHandle = function(t, n, s) {
    return h.H.useImperativeHandle(t, n, s);
  }, p.useInsertionEffect = function(t, n) {
    return h.H.useInsertionEffect(t, n);
  }, p.useLayoutEffect = function(t, n) {
    return h.H.useLayoutEffect(t, n);
  }, p.useMemo = function(t, n) {
    return h.H.useMemo(t, n);
  }, p.useOptimistic = function(t, n) {
    return h.H.useOptimistic(t, n);
  }, p.useReducer = function(t, n, s) {
    return h.H.useReducer(t, n, s);
  }, p.useRef = function(t) {
    return h.H.useRef(t);
  }, p.useState = function(t) {
    return h.H.useState(t);
  }, p.useSyncExternalStore = function(t, n, s) {
    return h.H.useSyncExternalStore(
      t,
      n,
      s
    );
  }, p.useTransition = function() {
    return h.H.useTransition();
  }, p.version = "19.1.0", p;
}
var ce = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ce.exports;
var Ye;
function Qe() {
  return Ye || (Ye = 1, function(w, c) {
    process.env.NODE_ENV !== "production" && function() {
      function j(e, r) {
        Object.defineProperty(b.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              r[0],
              r[1]
            );
          }
        });
      }
      function P(e) {
        return e === null || typeof e != "object" ? null : (e = fe && e[fe] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function T(e, r) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var o = e + "." + r;
        Re[o] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          r,
          e
        ), Re[o] = !0);
      }
      function b(e, r, o) {
        this.props = e, this.context = r, this.refs = ye, this.updater = o || ge;
      }
      function L() {
      }
      function N(e, r, o) {
        this.props = e, this.context = r, this.refs = ye, this.updater = o || ge;
      }
      function re(e) {
        return "" + e;
      }
      function W(e) {
        try {
          re(e);
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
          ), re(e);
        }
      }
      function I(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === qe ? null : e.displayName || e.name || null;
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
          case k:
            return "SuspenseList";
          case se:
            return "Activity";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case te:
              return "Portal";
            case f:
              return (e.displayName || "Context") + ".Provider";
            case a:
              return (e._context.displayName || "Context") + ".Consumer";
            case y:
              var r = e.render;
              return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case d:
              return r = e.displayName || null, r !== null ? r : I(e.type) || "Memo";
            case A:
              r = e._payload, e = e._init;
              try {
                return I(e(r));
              } catch {
              }
          }
        return null;
      }
      function z(e) {
        if (e === t) return "<>";
        if (typeof e == "object" && e !== null && e.$$typeof === A)
          return "<...>";
        try {
          var r = I(e);
          return r ? "<" + r + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function H() {
        var e = E.A;
        return e === null ? null : e.getOwner();
      }
      function G() {
        return Error("react-stack-top-frame");
      }
      function K(e) {
        if (pe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function B(e, r) {
        function o() {
          Oe || (Oe = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            r
          ));
        }
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function D() {
        var e = I(this.type);
        return Ae[e] || (Ae[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function F(e, r, o, u, i, v, _, R) {
        return o = v.ref, e = {
          $$typeof: x,
          type: e,
          key: r,
          props: v,
          _owner: i
        }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: D
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
          value: _
        }), Object.defineProperty(e, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: R
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function Z(e, r) {
        return r = F(
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
      function S(e) {
        return typeof e == "object" && e !== null && e.$$typeof === x;
      }
      function ne(e) {
        var r = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(o) {
          return r[o];
        });
      }
      function h(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (W(e.key), ne("" + e.key)) : r.toString(36);
      }
      function J() {
      }
      function ee(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(J, J) : (e.status = "pending", e.then(
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
        var v = typeof e;
        (v === "undefined" || v === "boolean") && (e = null);
        var _ = !1;
        if (e === null) _ = !0;
        else
          switch (v) {
            case "bigint":
            case "string":
            case "number":
              _ = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case x:
                case te:
                  _ = !0;
                  break;
                case A:
                  return _ = e._init, $(
                    _(e._payload),
                    r,
                    o,
                    u,
                    i
                  );
              }
          }
        if (_) {
          _ = e, i = i(_);
          var R = u === "" ? "." + h(_, 0) : u;
          return we(i) ? (o = "", R != null && (o = R.replace(Ce, "$&/") + "/"), $(i, r, o, "", function(V) {
            return V;
          })) : i != null && (S(i) && (i.key != null && (_ && _.key === i.key || W(i.key)), o = Z(
            i,
            o + (i.key == null || _ && _.key === i.key ? "" : ("" + i.key).replace(
              Ce,
              "$&/"
            ) + "/") + R
          ), u !== "" && _ != null && S(_) && _.key == null && _._store && !_._store.validated && (o._store.validated = 2), i = o), r.push(i)), 1;
        }
        if (_ = 0, R = u === "" ? "." : u + ":", we(e))
          for (var m = 0; m < e.length; m++)
            u = e[m], v = R + h(u, m), _ += $(
              u,
              r,
              o,
              v,
              i
            );
        else if (m = P(e), typeof m == "function")
          for (m === e.entries && (Se || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Se = !0), e = m.call(e), m = 0; !(u = e.next()).done; )
            u = u.value, v = R + h(u, m++), _ += $(
              u,
              r,
              o,
              v,
              i
            );
        else if (v === "object") {
          if (typeof e.then == "function")
            return $(
              ee(e),
              r,
              o,
              u,
              i
            );
          throw r = String(e), Error(
            "Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return _;
      }
      function U(e, r, o) {
        if (e == null) return e;
        var u = [], i = 0;
        return $(e, u, "", "", function(v) {
          return r.call(o, v, i++);
        }), u;
      }
      function ue(e) {
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
      function g() {
        var e = E.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function Q() {
      }
      function q(e) {
        if (de === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7);
            de = (w && w[r]).call(
              w,
              "timers"
            ).setImmediate;
          } catch {
            de = function(u) {
              Pe === !1 && (Pe = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var i = new MessageChannel();
              i.port1.onmessage = u, i.port2.postMessage(void 0);
            };
          }
        return de(e);
      }
      function M(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function O(e, r) {
        r !== _e - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), _e = r;
      }
      function Y(e, r, o) {
        var u = E.actQueue;
        if (u !== null)
          if (u.length !== 0)
            try {
              X(u), q(function() {
                return Y(e, r, o);
              });
              return;
            } catch (i) {
              E.thrownErrors.push(i);
            }
          else E.actQueue = null;
        0 < E.thrownErrors.length ? (u = M(E.thrownErrors), E.thrownErrors.length = 0, o(u)) : r(e);
      }
      function X(e) {
        if (!he) {
          he = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var o = e[r];
              do {
                E.didUsePromise = !1;
                var u = o(!1);
                if (u !== null) {
                  if (E.didUsePromise) {
                    e[r] = o, e.splice(0, r);
                    return;
                  }
                  o = u;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (i) {
            e.splice(0, r + 1), E.thrownErrors.push(i);
          } finally {
            he = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var x = Symbol.for("react.transitional.element"), te = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), f = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), fe = Symbol.iterator, Re = {}, ge = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          T(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          T(e, "replaceState");
        },
        enqueueSetState: function(e) {
          T(e, "setState");
        }
      }, be = Object.assign, ye = {};
      Object.freeze(ye), b.prototype.isReactComponent = {}, b.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, r, "setState");
      }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var C = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, le;
      for (le in C)
        C.hasOwnProperty(le) && j(le, C[le]);
      L.prototype = b.prototype, C = N.prototype = new L(), C.constructor = N, be(C, b.prototype), C.isPureReactComponent = !0;
      var we = Array.isArray, qe = Symbol.for("react.client.reference"), E = {
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
      }, pe = Object.prototype.hasOwnProperty, Te = console.createTask ? console.createTask : function() {
        return null;
      };
      C = {
        "react-stack-bottom-frame": function(e) {
          return e();
        }
      };
      var Oe, ke, Ae = {}, xe = C["react-stack-bottom-frame"].bind(C, G)(), We = Te(z(G)), Se = !1, Ce = /\/+/g, je = typeof reportError == "function" ? reportError : function(e) {
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
      }, Pe = !1, de = null, _e = 0, me = !1, he = !1, Ne = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : q;
      C = Object.freeze({
        __proto__: null,
        c: function(e) {
          return g().useMemoCache(e);
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
          if (!S(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, c.Component = b, c.Fragment = t, c.Profiler = s, c.PureComponent = N, c.StrictMode = n, c.Suspense = l, c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E, c.__COMPILER_RUNTIME = C, c.act = function(e) {
        var r = E.actQueue, o = _e;
        _e++;
        var u = E.actQueue = r !== null ? r : [], i = !1;
        try {
          var v = e();
        } catch (m) {
          E.thrownErrors.push(m);
        }
        if (0 < E.thrownErrors.length)
          throw O(r, o), e = M(E.thrownErrors), E.thrownErrors.length = 0, e;
        if (v !== null && typeof v == "object" && typeof v.then == "function") {
          var _ = v;
          return Ne(function() {
            i || me || (me = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(m, V) {
              i = !0, _.then(
                function(oe) {
                  if (O(r, o), o === 0) {
                    try {
                      X(u), q(function() {
                        return Y(
                          oe,
                          m,
                          V
                        );
                      });
                    } catch (Ge) {
                      E.thrownErrors.push(Ge);
                    }
                    if (0 < E.thrownErrors.length) {
                      var ze = M(
                        E.thrownErrors
                      );
                      E.thrownErrors.length = 0, V(ze);
                    }
                  } else m(oe);
                },
                function(oe) {
                  O(r, o), 0 < E.thrownErrors.length && (oe = M(
                    E.thrownErrors
                  ), E.thrownErrors.length = 0), V(oe);
                }
              );
            }
          };
        }
        var R = v;
        if (O(r, o), o === 0 && (X(u), u.length !== 0 && Ne(function() {
          i || me || (me = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), E.actQueue = null), 0 < E.thrownErrors.length)
          throw e = M(E.thrownErrors), E.thrownErrors.length = 0, e;
        return {
          then: function(m, V) {
            i = !0, o === 0 ? (E.actQueue = u, q(function() {
              return Y(
                R,
                m,
                V
              );
            })) : m(R);
          }
        };
      }, c.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, c.captureOwnerStack = function() {
        var e = E.getCurrentStack;
        return e === null ? null : e();
      }, c.cloneElement = function(e, r, o) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var u = be({}, e.props), i = e.key, v = e._owner;
        if (r != null) {
          var _;
          e: {
            if (pe.call(r, "ref") && (_ = Object.getOwnPropertyDescriptor(
              r,
              "ref"
            ).get) && _.isReactWarning) {
              _ = !1;
              break e;
            }
            _ = r.ref !== void 0;
          }
          _ && (v = H()), K(r) && (W(r.key), i = "" + r.key);
          for (R in r)
            !pe.call(r, R) || R === "key" || R === "__self" || R === "__source" || R === "ref" && r.ref === void 0 || (u[R] = r[R]);
        }
        var R = arguments.length - 2;
        if (R === 1) u.children = o;
        else if (1 < R) {
          _ = Array(R);
          for (var m = 0; m < R; m++)
            _[m] = arguments[m + 2];
          u.children = _;
        }
        for (u = F(
          e.type,
          i,
          void 0,
          void 0,
          v,
          u,
          e._debugStack,
          e._debugTask
        ), i = 2; i < arguments.length; i++)
          v = arguments[i], S(v) && v._store && (v._store.validated = 1);
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
          S(i) && i._store && (i._store.validated = 1);
        }
        if (u = {}, i = null, r != null)
          for (m in ke || !("__self" in r) || "key" in r || (ke = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), K(r) && (W(r.key), i = "" + r.key), r)
            pe.call(r, m) && m !== "key" && m !== "__self" && m !== "__source" && (u[m] = r[m]);
        var v = arguments.length - 2;
        if (v === 1) u.children = o;
        else if (1 < v) {
          for (var _ = Array(v), R = 0; R < v; R++)
            _[R] = arguments[R + 2];
          Object.freeze && Object.freeze(_), u.children = _;
        }
        if (e && e.defaultProps)
          for (m in v = e.defaultProps, v)
            u[m] === void 0 && (u[m] = v[m]);
        i && B(
          u,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        );
        var m = 1e4 > E.recentlyCreatedOwnerStacks++;
        return F(
          e,
          i,
          void 0,
          void 0,
          H(),
          u,
          m ? Error("react-stack-top-frame") : xe,
          m ? Te(z(e)) : We
        );
      }, c.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, c.forwardRef = function(e) {
        e != null && e.$$typeof === d ? console.error(
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
        var r = { $$typeof: y, render: e }, o;
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
      }, c.isValidElement = S, c.lazy = function(e) {
        return {
          $$typeof: A,
          _payload: { _status: -1, _result: e },
          _init: ue
        };
      }, c.memo = function(e, r) {
        e == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), r = {
          $$typeof: d,
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
        var r = E.T, o = {};
        E.T = o, o._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var u = e(), i = E.S;
          i !== null && i(o, u), typeof u == "object" && u !== null && typeof u.then == "function" && u.then(Q, je);
        } catch (v) {
          je(v);
        } finally {
          r === null && o._updatedFibers && (e = o._updatedFibers.size, o._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), E.T = r;
        }
      }, c.unstable_useCacheRefresh = function() {
        return g().useCacheRefresh();
      }, c.use = function(e) {
        return g().use(e);
      }, c.useActionState = function(e, r, o) {
        return g().useActionState(
          e,
          r,
          o
        );
      }, c.useCallback = function(e, r) {
        return g().useCallback(e, r);
      }, c.useContext = function(e) {
        var r = g();
        return e.$$typeof === a && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), r.useContext(e);
      }, c.useDebugValue = function(e, r) {
        return g().useDebugValue(e, r);
      }, c.useDeferredValue = function(e, r) {
        return g().useDeferredValue(e, r);
      }, c.useEffect = function(e, r, o) {
        e == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var u = g();
        if (typeof o == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return u.useEffect(e, r);
      }, c.useId = function() {
        return g().useId();
      }, c.useImperativeHandle = function(e, r, o) {
        return g().useImperativeHandle(e, r, o);
      }, c.useInsertionEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), g().useInsertionEffect(e, r);
      }, c.useLayoutEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), g().useLayoutEffect(e, r);
      }, c.useMemo = function(e, r) {
        return g().useMemo(e, r);
      }, c.useOptimistic = function(e, r) {
        return g().useOptimistic(e, r);
      }, c.useReducer = function(e, r, o) {
        return g().useReducer(e, r, o);
      }, c.useRef = function(e) {
        return g().useRef(e);
      }, c.useState = function(e) {
        return g().useState(e);
      }, c.useSyncExternalStore = function(e, r, o) {
        return g().useSyncExternalStore(
          e,
          r,
          o
        );
      }, c.useTransition = function() {
        return g().useTransition();
      }, c.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(ce, ce.exports)), ce.exports;
}
var Le;
function Xe() {
  return Le || (Le = 1, process.env.NODE_ENV === "production" ? ve.exports = Fe() : ve.exports = Qe()), ve.exports;
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
var Ie;
function Ve() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    function w(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === ue ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case B:
          return "Fragment";
        case F:
          return "Profiler";
        case D:
          return "StrictMode";
        case h:
          return "Suspense";
        case J:
          return "SuspenseList";
        case U:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case K:
            return "Portal";
          case S:
            return (t.displayName || "Context") + ".Provider";
          case Z:
            return (t._context.displayName || "Context") + ".Consumer";
          case ne:
            var n = t.render;
            return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case ee:
            return n = t.displayName || null, n !== null ? n : w(t.type) || "Memo";
          case $:
            n = t._payload, t = t._init;
            try {
              return w(t(n));
            } catch {
            }
        }
      return null;
    }
    function c(t) {
      return "" + t;
    }
    function j(t) {
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
    function P(t) {
      if (t === B) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === $)
        return "<...>";
      try {
        var n = w(t);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function T() {
      var t = g.A;
      return t === null ? null : t.getOwner();
    }
    function b() {
      return Error("react-stack-top-frame");
    }
    function L(t) {
      if (Q.call(t, "key")) {
        var n = Object.getOwnPropertyDescriptor(t, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function N(t, n) {
      function s() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: s,
        configurable: !0
      });
    }
    function re() {
      var t = w(this.type);
      return Y[t] || (Y[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function W(t, n, s, a, f, y, l, k) {
      return s = y.ref, t = {
        $$typeof: G,
        type: t,
        key: n,
        props: y,
        _owner: f
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: re
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
        value: k
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function I(t, n, s, a, f, y, l, k) {
      var d = n.children;
      if (d !== void 0)
        if (a)
          if (q(d)) {
            for (a = 0; a < d.length; a++)
              z(d[a]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else z(d);
      if (Q.call(n, "key")) {
        d = w(t);
        var A = Object.keys(n).filter(function(fe) {
          return fe !== "key";
        });
        a = 0 < A.length ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}", te[d + a] || (A = 0 < A.length ? "{" + A.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          d,
          A,
          d
        ), te[d + a] = !0);
      }
      if (d = null, s !== void 0 && (j(s), d = "" + s), L(n) && (j(n.key), d = "" + n.key), "key" in n) {
        s = {};
        for (var se in n)
          se !== "key" && (s[se] = n[se]);
      } else s = n;
      return d && N(
        s,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), W(
        t,
        d,
        y,
        f,
        T(),
        s,
        l,
        k
      );
    }
    function z(t) {
      typeof t == "object" && t !== null && t.$$typeof === G && t._store && (t._store.validated = 1);
    }
    var H = Xe(), G = Symbol.for("react.transitional.element"), K = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), S = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), U = Symbol.for("react.activity"), ue = Symbol.for("react.client.reference"), g = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, q = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    H = {
      "react-stack-bottom-frame": function(t) {
        return t();
      }
    };
    var O, Y = {}, X = H["react-stack-bottom-frame"].bind(
      H,
      b
    )(), x = M(P(b)), te = {};
    ie.Fragment = B, ie.jsx = function(t, n, s, a, f) {
      var y = 1e4 > g.recentlyCreatedOwnerStacks++;
      return I(
        t,
        n,
        s,
        !1,
        a,
        f,
        y ? Error("react-stack-top-frame") : X,
        y ? M(P(t)) : x
      );
    }, ie.jsxs = function(t, n, s, a, f) {
      var y = 1e4 > g.recentlyCreatedOwnerStacks++;
      return I(
        t,
        n,
        s,
        !0,
        a,
        f,
        y ? Error("react-stack-top-frame") : X,
        y ? M(P(t)) : x
      );
    };
  }()), ie;
}
var De;
function Ke() {
  return De || (De = 1, process.env.NODE_ENV === "production" ? Ee.exports = Be() : Ee.exports = Ve()), Ee.exports;
}
var He = Ke();
const Ze = "_button_djmih_1", Je = "_primary_djmih_14", et = "_secondary_djmih_18", tt = "_success_djmih_22", rt = "_danger_djmih_26", Ue = {
  button: Ze,
  primary: Je,
  secondary: et,
  success: tt,
  danger: rt
}, nt = ({ variant: w = "primary", children: c }) => /* @__PURE__ */ He.jsx("button", { className: `${Ue.button} ${Ue[w]}`, children: c }), ot = ({
  primary: w = !1,
  size: c = "medium",
  backgroundColor: j,
  label: P,
  ...T
}) => {
  const b = w ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ He.jsx(
    "button",
    {
      type: "button",
      className: ["storybook-button", `storybook-button--${c}`, b].join(
        " "
      ),
      style: { backgroundColor: j },
      ...T,
      children: P
    }
  );
};
export {
  ot as MyButton,
  nt as UaButton
};
