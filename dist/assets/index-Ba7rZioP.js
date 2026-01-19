function VS(t, n) {
  for (var r = 0; r < n.length; r++) {
    const s = n[r];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const o in s)
        if (o !== "default" && !(o in t)) {
          const u = Object.getOwnPropertyDescriptor(s, o);
          u &&
            Object.defineProperty(
              t,
              o,
              u.get ? u : { enumerable: !0, get: () => s[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === "childList")
        for (const d of u.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const u = {};
    return (
      o.integrity && (u.integrity = o.integrity),
      o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const u = r(o);
    fetch(o.href, u);
  }
})();
function FS(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Uf = { exports: {} },
  bl = {};
var Jy;
function GS() {
  if (Jy) return bl;
  Jy = 1;
  var t = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function r(s, o, u) {
    var d = null;
    if (
      (u !== void 0 && (d = "" + u),
      o.key !== void 0 && (d = "" + o.key),
      "key" in o)
    ) {
      u = {};
      for (var h in o) h !== "key" && (u[h] = o[h]);
    } else u = o;
    return (
      (o = u.ref),
      { $$typeof: t, type: s, key: d, ref: o !== void 0 ? o : null, props: u }
    );
  }
  return (bl.Fragment = n), (bl.jsx = r), (bl.jsxs = r), bl;
}
var Wy;
function YS() {
  return Wy || ((Wy = 1), (Uf.exports = GS())), Uf.exports;
}
var m = YS(),
  Lf = { exports: {} },
  ke = {};
var e0;
function QS() {
  if (e0) return ke;
  e0 = 1;
  var t = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    x = Symbol.iterator;
  function R(O) {
    return O === null || typeof O != "object"
      ? null
      : ((O = (x && O[x]) || O["@@iterator"]),
        typeof O == "function" ? O : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    _ = {};
  function U(O, G, ae) {
    (this.props = O),
      (this.context = G),
      (this.refs = _),
      (this.updater = ae || E);
  }
  (U.prototype.isReactComponent = {}),
    (U.prototype.setState = function (O, G) {
      if (typeof O != "object" && typeof O != "function" && O != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, O, G, "setState");
    }),
    (U.prototype.forceUpdate = function (O) {
      this.updater.enqueueForceUpdate(this, O, "forceUpdate");
    });
  function z() {}
  z.prototype = U.prototype;
  function Y(O, G, ae) {
    (this.props = O),
      (this.context = G),
      (this.refs = _),
      (this.updater = ae || E);
  }
  var Z = (Y.prototype = new z());
  (Z.constructor = Y), T(Z, U.prototype), (Z.isPureReactComponent = !0);
  var ee = Array.isArray;
  function pe() {}
  var N = { H: null, A: null, T: null, S: null },
    me = Object.prototype.hasOwnProperty;
  function fe(O, G, ae) {
    var le = ae.ref;
    return {
      $$typeof: t,
      type: O,
      key: G,
      ref: le !== void 0 ? le : null,
      props: ae,
    };
  }
  function Re(O, G) {
    return fe(O.type, G, O.props);
  }
  function ge(O) {
    return typeof O == "object" && O !== null && O.$$typeof === t;
  }
  function ce(O) {
    var G = { "=": "=0", ":": "=2" };
    return (
      "$" +
      O.replace(/[=:]/g, function (ae) {
        return G[ae];
      })
    );
  }
  var he = /\/+/g;
  function ye(O, G) {
    return typeof O == "object" && O !== null && O.key != null
      ? ce("" + O.key)
      : G.toString(36);
  }
  function Ne(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (
          (typeof O.status == "string"
            ? O.then(pe, pe)
            : ((O.status = "pending"),
              O.then(
                function (G) {
                  O.status === "pending" &&
                    ((O.status = "fulfilled"), (O.value = G));
                },
                function (G) {
                  O.status === "pending" &&
                    ((O.status = "rejected"), (O.reason = G));
                }
              )),
          O.status)
        ) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function k(O, G, ae, le, we) {
    var Le = typeof O;
    (Le === "undefined" || Le === "boolean") && (O = null);
    var qe = !1;
    if (O === null) qe = !0;
    else
      switch (Le) {
        case "bigint":
        case "string":
        case "number":
          qe = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case t:
            case n:
              qe = !0;
              break;
            case v:
              return (qe = O._init), k(qe(O._payload), G, ae, le, we);
          }
      }
    if (qe)
      return (
        (we = we(O)),
        (qe = le === "" ? "." + ye(O, 0) : le),
        ee(we)
          ? ((ae = ""),
            qe != null && (ae = qe.replace(he, "$&/") + "/"),
            k(we, G, ae, "", function (Zn) {
              return Zn;
            }))
          : we != null &&
            (ge(we) &&
              (we = Re(
                we,
                ae +
                  (we.key == null || (O && O.key === we.key)
                    ? ""
                    : ("" + we.key).replace(he, "$&/") + "/") +
                  qe
              )),
            G.push(we)),
        1
      );
    qe = 0;
    var bt = le === "" ? "." : le + ":";
    if (ee(O))
      for (var ct = 0; ct < O.length; ct++)
        (le = O[ct]), (Le = bt + ye(le, ct)), (qe += k(le, G, ae, Le, we));
    else if (((ct = R(O)), typeof ct == "function"))
      for (O = ct.call(O), ct = 0; !(le = O.next()).done; )
        (le = le.value), (Le = bt + ye(le, ct++)), (qe += k(le, G, ae, Le, we));
    else if (Le === "object") {
      if (typeof O.then == "function") return k(Ne(O), G, ae, le, we);
      throw (
        ((G = String(O)),
        Error(
          "Objects are not valid as a React child (found: " +
            (G === "[object Object]"
              ? "object with keys {" + Object.keys(O).join(", ") + "}"
              : G) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return qe;
  }
  function J(O, G, ae) {
    if (O == null) return O;
    var le = [],
      we = 0;
    return (
      k(O, le, "", "", function (Le) {
        return G.call(ae, Le, we++);
      }),
      le
    );
  }
  function re(O) {
    if (O._status === -1) {
      var G = O._result;
      (G = G()),
        G.then(
          function (ae) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 1), (O._result = ae));
          },
          function (ae) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 2), (O._result = ae));
          }
        ),
        O._status === -1 && ((O._status = 0), (O._result = G));
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var Oe =
      typeof reportError == "function"
        ? reportError
        : function (O) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var G = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof O == "object" &&
                  O !== null &&
                  typeof O.message == "string"
                    ? String(O.message)
                    : String(O),
                error: O,
              });
              if (!window.dispatchEvent(G)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", O);
              return;
            }
            console.error(O);
          },
    ze = {
      map: J,
      forEach: function (O, G, ae) {
        J(
          O,
          function () {
            G.apply(this, arguments);
          },
          ae
        );
      },
      count: function (O) {
        var G = 0;
        return (
          J(O, function () {
            G++;
          }),
          G
        );
      },
      toArray: function (O) {
        return (
          J(O, function (G) {
            return G;
          }) || []
        );
      },
      only: function (O) {
        if (!ge(O))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return O;
      },
    };
  return (
    (ke.Activity = b),
    (ke.Children = ze),
    (ke.Component = U),
    (ke.Fragment = r),
    (ke.Profiler = o),
    (ke.PureComponent = Y),
    (ke.StrictMode = s),
    (ke.Suspense = p),
    (ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N),
    (ke.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (O) {
        return N.H.useMemoCache(O);
      },
    }),
    (ke.cache = function (O) {
      return function () {
        return O.apply(null, arguments);
      };
    }),
    (ke.cacheSignal = function () {
      return null;
    }),
    (ke.cloneElement = function (O, G, ae) {
      if (O == null)
        throw Error(
          "The argument must be a React element, but you passed " + O + "."
        );
      var le = T({}, O.props),
        we = O.key;
      if (G != null)
        for (Le in (G.key !== void 0 && (we = "" + G.key), G))
          !me.call(G, Le) ||
            Le === "key" ||
            Le === "__self" ||
            Le === "__source" ||
            (Le === "ref" && G.ref === void 0) ||
            (le[Le] = G[Le]);
      var Le = arguments.length - 2;
      if (Le === 1) le.children = ae;
      else if (1 < Le) {
        for (var qe = Array(Le), bt = 0; bt < Le; bt++)
          qe[bt] = arguments[bt + 2];
        le.children = qe;
      }
      return fe(O.type, we, le);
    }),
    (ke.createContext = function (O) {
      return (
        (O = {
          $$typeof: d,
          _currentValue: O,
          _currentValue2: O,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (O.Provider = O),
        (O.Consumer = { $$typeof: u, _context: O }),
        O
      );
    }),
    (ke.createElement = function (O, G, ae) {
      var le,
        we = {},
        Le = null;
      if (G != null)
        for (le in (G.key !== void 0 && (Le = "" + G.key), G))
          me.call(G, le) &&
            le !== "key" &&
            le !== "__self" &&
            le !== "__source" &&
            (we[le] = G[le]);
      var qe = arguments.length - 2;
      if (qe === 1) we.children = ae;
      else if (1 < qe) {
        for (var bt = Array(qe), ct = 0; ct < qe; ct++)
          bt[ct] = arguments[ct + 2];
        we.children = bt;
      }
      if (O && O.defaultProps)
        for (le in ((qe = O.defaultProps), qe))
          we[le] === void 0 && (we[le] = qe[le]);
      return fe(O, Le, we);
    }),
    (ke.createRef = function () {
      return { current: null };
    }),
    (ke.forwardRef = function (O) {
      return { $$typeof: h, render: O };
    }),
    (ke.isValidElement = ge),
    (ke.lazy = function (O) {
      return { $$typeof: v, _payload: { _status: -1, _result: O }, _init: re };
    }),
    (ke.memo = function (O, G) {
      return { $$typeof: g, type: O, compare: G === void 0 ? null : G };
    }),
    (ke.startTransition = function (O) {
      var G = N.T,
        ae = {};
      N.T = ae;
      try {
        var le = O(),
          we = N.S;
        we !== null && we(ae, le),
          typeof le == "object" &&
            le !== null &&
            typeof le.then == "function" &&
            le.then(pe, Oe);
      } catch (Le) {
        Oe(Le);
      } finally {
        G !== null && ae.types !== null && (G.types = ae.types), (N.T = G);
      }
    }),
    (ke.unstable_useCacheRefresh = function () {
      return N.H.useCacheRefresh();
    }),
    (ke.use = function (O) {
      return N.H.use(O);
    }),
    (ke.useActionState = function (O, G, ae) {
      return N.H.useActionState(O, G, ae);
    }),
    (ke.useCallback = function (O, G) {
      return N.H.useCallback(O, G);
    }),
    (ke.useContext = function (O) {
      return N.H.useContext(O);
    }),
    (ke.useDebugValue = function () {}),
    (ke.useDeferredValue = function (O, G) {
      return N.H.useDeferredValue(O, G);
    }),
    (ke.useEffect = function (O, G) {
      return N.H.useEffect(O, G);
    }),
    (ke.useEffectEvent = function (O) {
      return N.H.useEffectEvent(O);
    }),
    (ke.useId = function () {
      return N.H.useId();
    }),
    (ke.useImperativeHandle = function (O, G, ae) {
      return N.H.useImperativeHandle(O, G, ae);
    }),
    (ke.useInsertionEffect = function (O, G) {
      return N.H.useInsertionEffect(O, G);
    }),
    (ke.useLayoutEffect = function (O, G) {
      return N.H.useLayoutEffect(O, G);
    }),
    (ke.useMemo = function (O, G) {
      return N.H.useMemo(O, G);
    }),
    (ke.useOptimistic = function (O, G) {
      return N.H.useOptimistic(O, G);
    }),
    (ke.useReducer = function (O, G, ae) {
      return N.H.useReducer(O, G, ae);
    }),
    (ke.useRef = function (O) {
      return N.H.useRef(O);
    }),
    (ke.useState = function (O) {
      return N.H.useState(O);
    }),
    (ke.useSyncExternalStore = function (O, G, ae) {
      return N.H.useSyncExternalStore(O, G, ae);
    }),
    (ke.useTransition = function () {
      return N.H.useTransition();
    }),
    (ke.version = "19.2.0"),
    ke
  );
}
var t0;
function Dh() {
  return t0 || ((t0 = 1), (Lf.exports = QS())), Lf.exports;
}
var w = Dh();
const Me = FS(w),
  KS = VS({ __proto__: null, default: Me }, [w]);
var zf = { exports: {} },
  xl = {},
  kf = { exports: {} },
  If = {};
var n0;
function $S() {
  return (
    n0 ||
      ((n0 = 1),
      (function (t) {
        function n(k, J) {
          var re = k.length;
          k.push(J);
          e: for (; 0 < re; ) {
            var Oe = (re - 1) >>> 1,
              ze = k[Oe];
            if (0 < o(ze, J)) (k[Oe] = J), (k[re] = ze), (re = Oe);
            else break e;
          }
        }
        function r(k) {
          return k.length === 0 ? null : k[0];
        }
        function s(k) {
          if (k.length === 0) return null;
          var J = k[0],
            re = k.pop();
          if (re !== J) {
            k[0] = re;
            e: for (var Oe = 0, ze = k.length, O = ze >>> 1; Oe < O; ) {
              var G = 2 * (Oe + 1) - 1,
                ae = k[G],
                le = G + 1,
                we = k[le];
              if (0 > o(ae, re))
                le < ze && 0 > o(we, ae)
                  ? ((k[Oe] = we), (k[le] = re), (Oe = le))
                  : ((k[Oe] = ae), (k[G] = re), (Oe = G));
              else if (le < ze && 0 > o(we, re))
                (k[Oe] = we), (k[le] = re), (Oe = le);
              else break e;
            }
          }
          return J;
        }
        function o(k, J) {
          var re = k.sortIndex - J.sortIndex;
          return re !== 0 ? re : k.id - J.id;
        }
        if (
          ((t.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          t.unstable_now = function () {
            return u.now();
          };
        } else {
          var d = Date,
            h = d.now();
          t.unstable_now = function () {
            return d.now() - h;
          };
        }
        var p = [],
          g = [],
          v = 1,
          b = null,
          x = 3,
          R = !1,
          E = !1,
          T = !1,
          _ = !1,
          U = typeof setTimeout == "function" ? setTimeout : null,
          z = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        function Z(k) {
          for (var J = r(g); J !== null; ) {
            if (J.callback === null) s(g);
            else if (J.startTime <= k)
              s(g), (J.sortIndex = J.expirationTime), n(p, J);
            else break;
            J = r(g);
          }
        }
        function ee(k) {
          if (((T = !1), Z(k), !E))
            if (r(p) !== null) (E = !0), pe || ((pe = !0), ce());
            else {
              var J = r(g);
              J !== null && Ne(ee, J.startTime - k);
            }
        }
        var pe = !1,
          N = -1,
          me = 5,
          fe = -1;
        function Re() {
          return _ ? !0 : !(t.unstable_now() - fe < me);
        }
        function ge() {
          if (((_ = !1), pe)) {
            var k = t.unstable_now();
            fe = k;
            var J = !0;
            try {
              e: {
                (E = !1), T && ((T = !1), z(N), (N = -1)), (R = !0);
                var re = x;
                try {
                  t: {
                    for (
                      Z(k), b = r(p);
                      b !== null && !(b.expirationTime > k && Re());

                    ) {
                      var Oe = b.callback;
                      if (typeof Oe == "function") {
                        (b.callback = null), (x = b.priorityLevel);
                        var ze = Oe(b.expirationTime <= k);
                        if (((k = t.unstable_now()), typeof ze == "function")) {
                          (b.callback = ze), Z(k), (J = !0);
                          break t;
                        }
                        b === r(p) && s(p), Z(k);
                      } else s(p);
                      b = r(p);
                    }
                    if (b !== null) J = !0;
                    else {
                      var O = r(g);
                      O !== null && Ne(ee, O.startTime - k), (J = !1);
                    }
                  }
                  break e;
                } finally {
                  (b = null), (x = re), (R = !1);
                }
                J = void 0;
              }
            } finally {
              J ? ce() : (pe = !1);
            }
          }
        }
        var ce;
        if (typeof Y == "function")
          ce = function () {
            Y(ge);
          };
        else if (typeof MessageChannel < "u") {
          var he = new MessageChannel(),
            ye = he.port2;
          (he.port1.onmessage = ge),
            (ce = function () {
              ye.postMessage(null);
            });
        } else
          ce = function () {
            U(ge, 0);
          };
        function Ne(k, J) {
          N = U(function () {
            k(t.unstable_now());
          }, J);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (t.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (me = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (t.unstable_next = function (k) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = x;
            }
            var re = x;
            x = J;
            try {
              return k();
            } finally {
              x = re;
            }
          }),
          (t.unstable_requestPaint = function () {
            _ = !0;
          }),
          (t.unstable_runWithPriority = function (k, J) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var re = x;
            x = k;
            try {
              return J();
            } finally {
              x = re;
            }
          }),
          (t.unstable_scheduleCallback = function (k, J, re) {
            var Oe = t.unstable_now();
            switch (
              (typeof re == "object" && re !== null
                ? ((re = re.delay),
                  (re = typeof re == "number" && 0 < re ? Oe + re : Oe))
                : (re = Oe),
              k)
            ) {
              case 1:
                var ze = -1;
                break;
              case 2:
                ze = 250;
                break;
              case 5:
                ze = 1073741823;
                break;
              case 4:
                ze = 1e4;
                break;
              default:
                ze = 5e3;
            }
            return (
              (ze = re + ze),
              (k = {
                id: v++,
                callback: J,
                priorityLevel: k,
                startTime: re,
                expirationTime: ze,
                sortIndex: -1,
              }),
              re > Oe
                ? ((k.sortIndex = re),
                  n(g, k),
                  r(p) === null &&
                    k === r(g) &&
                    (T ? (z(N), (N = -1)) : (T = !0), Ne(ee, re - Oe)))
                : ((k.sortIndex = ze),
                  n(p, k),
                  E || R || ((E = !0), pe || ((pe = !0), ce()))),
              k
            );
          }),
          (t.unstable_shouldYield = Re),
          (t.unstable_wrapCallback = function (k) {
            var J = x;
            return function () {
              var re = x;
              x = J;
              try {
                return k.apply(this, arguments);
              } finally {
                x = re;
              }
            };
          });
      })(If)),
    If
  );
}
var a0;
function XS() {
  return a0 || ((a0 = 1), (kf.exports = $S())), kf.exports;
}
var Bf = { exports: {} },
  Jt = {};
var r0;
function ZS() {
  if (r0) return Jt;
  r0 = 1;
  var t = Dh();
  function n(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var s = {
      d: {
        f: r,
        r: function () {
          throw Error(n(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function u(p, g, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: p,
      containerInfo: g,
      implementation: v,
    };
  }
  var d = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, g) {
    if (p === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Jt.createPortal = function (p, g) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(n(299));
      return u(p, g, null, v);
    }),
    (Jt.flushSync = function (p) {
      var g = d.T,
        v = s.p;
      try {
        if (((d.T = null), (s.p = 2), p)) return p();
      } finally {
        (d.T = g), (s.p = v), s.d.f();
      }
    }),
    (Jt.preconnect = function (p, g) {
      typeof p == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        s.d.C(p, g));
    }),
    (Jt.prefetchDNS = function (p) {
      typeof p == "string" && s.d.D(p);
    }),
    (Jt.preinit = function (p, g) {
      if (typeof p == "string" && g && typeof g.as == "string") {
        var v = g.as,
          b = h(v, g.crossOrigin),
          x = typeof g.integrity == "string" ? g.integrity : void 0,
          R = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        v === "style"
          ? s.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: R,
            })
          : v === "script" &&
            s.d.X(p, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: R,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Jt.preinitModule = function (p, g) {
      if (typeof p == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var v = h(g.as, g.crossOrigin);
            s.d.M(p, {
              crossOrigin: v,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && s.d.M(p);
    }),
    (Jt.preload = function (p, g) {
      if (
        typeof p == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var v = g.as,
          b = h(v, g.crossOrigin);
        s.d.L(p, v, {
          crossOrigin: b,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Jt.preloadModule = function (p, g) {
      if (typeof p == "string")
        if (g) {
          var v = h(g.as, g.crossOrigin);
          s.d.m(p, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else s.d.m(p);
    }),
    (Jt.requestFormReset = function (p) {
      s.d.r(p);
    }),
    (Jt.unstable_batchedUpdates = function (p, g) {
      return p(g);
    }),
    (Jt.useFormState = function (p, g, v) {
      return d.H.useFormState(p, g, v);
    }),
    (Jt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (Jt.version = "19.2.0"),
    Jt
  );
}
var i0;
function JS() {
  if (i0) return Bf.exports;
  i0 = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  return t(), (Bf.exports = ZS()), Bf.exports;
}
var s0;
function WS() {
  if (s0) return xl;
  s0 = 1;
  var t = XS(),
    n = Dh(),
    r = JS();
  function s(e) {
    var a = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        a += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      a +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function u(e) {
    var a = e,
      i = e;
    if (e.alternate) for (; a.return; ) a = a.return;
    else {
      e = a;
      do (a = e), (a.flags & 4098) !== 0 && (i = a.return), (e = a.return);
      while (e);
    }
    return a.tag === 3 ? i : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var a = e.memoizedState;
      if (
        (a === null && ((e = e.alternate), e !== null && (a = e.memoizedState)),
        a !== null)
      )
        return a.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (e.tag === 31) {
      var a = e.memoizedState;
      if (
        (a === null && ((e = e.alternate), e !== null && (a = e.memoizedState)),
        a !== null)
      )
        return a.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (u(e) !== e) throw Error(s(188));
  }
  function g(e) {
    var a = e.alternate;
    if (!a) {
      if (((a = u(e)), a === null)) throw Error(s(188));
      return a !== e ? null : e;
    }
    for (var i = e, l = a; ; ) {
      var c = i.return;
      if (c === null) break;
      var f = c.alternate;
      if (f === null) {
        if (((l = c.return), l !== null)) {
          i = l;
          continue;
        }
        break;
      }
      if (c.child === f.child) {
        for (f = c.child; f; ) {
          if (f === i) return p(c), e;
          if (f === l) return p(c), a;
          f = f.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== l.return) (i = c), (l = f);
      else {
        for (var y = !1, S = c.child; S; ) {
          if (S === i) {
            (y = !0), (i = c), (l = f);
            break;
          }
          if (S === l) {
            (y = !0), (l = c), (i = f);
            break;
          }
          S = S.sibling;
        }
        if (!y) {
          for (S = f.child; S; ) {
            if (S === i) {
              (y = !0), (i = f), (l = c);
              break;
            }
            if (S === l) {
              (y = !0), (l = f), (i = c);
              break;
            }
            S = S.sibling;
          }
          if (!y) throw Error(s(189));
        }
      }
      if (i.alternate !== l) throw Error(s(190));
    }
    if (i.tag !== 3) throw Error(s(188));
    return i.stateNode.current === i ? e : a;
  }
  function v(e) {
    var a = e.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((a = v(e)), a !== null)) return a;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    x = Symbol.for("react.element"),
    R = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.portal"),
    T = Symbol.for("react.fragment"),
    _ = Symbol.for("react.strict_mode"),
    U = Symbol.for("react.profiler"),
    z = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    ee = Symbol.for("react.suspense"),
    pe = Symbol.for("react.suspense_list"),
    N = Symbol.for("react.memo"),
    me = Symbol.for("react.lazy"),
    fe = Symbol.for("react.activity"),
    Re = Symbol.for("react.memo_cache_sentinel"),
    ge = Symbol.iterator;
  function ce(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (ge && e[ge]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var he = Symbol.for("react.client.reference");
  function ye(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === he ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case T:
        return "Fragment";
      case U:
        return "Profiler";
      case _:
        return "StrictMode";
      case ee:
        return "Suspense";
      case pe:
        return "SuspenseList";
      case fe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case E:
          return "Portal";
        case Y:
          return e.displayName || "Context";
        case z:
          return (e._context.displayName || "Context") + ".Consumer";
        case Z:
          var a = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = a.displayName || a.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case N:
          return (
            (a = e.displayName || null), a !== null ? a : ye(e.type) || "Memo"
          );
        case me:
          (a = e._payload), (e = e._init);
          try {
            return ye(e(a));
          } catch {}
      }
    return null;
  }
  var Ne = Array.isArray,
    k = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    re = { pending: !1, data: null, method: null, action: null },
    Oe = [],
    ze = -1;
  function O(e) {
    return { current: e };
  }
  function G(e) {
    0 > ze || ((e.current = Oe[ze]), (Oe[ze] = null), ze--);
  }
  function ae(e, a) {
    ze++, (Oe[ze] = e.current), (e.current = a);
  }
  var le = O(null),
    we = O(null),
    Le = O(null),
    qe = O(null);
  function bt(e, a) {
    switch ((ae(Le, a), ae(we, e), ae(le, null), a.nodeType)) {
      case 9:
      case 11:
        e = (e = a.documentElement) && (e = e.namespaceURI) ? Sy(e) : 0;
        break;
      default:
        if (((e = a.tagName), (a = a.namespaceURI)))
          (a = Sy(a)), (e = Ey(a, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    G(le), ae(le, e);
  }
  function ct() {
    G(le), G(we), G(Le);
  }
  function Zn(e) {
    e.memoizedState !== null && ae(qe, e);
    var a = le.current,
      i = Ey(a, e.type);
    a !== i && (ae(we, e), ae(le, i));
  }
  function tr(e) {
    we.current === e && (G(le), G(we)),
      qe.current === e && (G(qe), (pl._currentValue = re));
  }
  var _t, Jn;
  function gn(e) {
    if (_t === void 0)
      try {
        throw Error();
      } catch (i) {
        var a = i.stack.trim().match(/\n( *(at )?)/);
        (_t = (a && a[1]) || ""),
          (Jn =
            -1 <
            i.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < i.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      _t +
      e +
      Jn
    );
  }
  var nr = !1;
  function yn(e, a) {
    if (!e || nr) return "";
    nr = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (a) {
              var X = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(X.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(X, []);
                } catch (F) {
                  var P = F;
                }
                Reflect.construct(e, [], X);
              } else {
                try {
                  X.call();
                } catch (F) {
                  P = F;
                }
                e.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                P = F;
              }
              (X = e()) &&
                typeof X.catch == "function" &&
                X.catch(function () {});
            }
          } catch (F) {
            if (F && P && typeof F.stack == "string") return [F.stack, P.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      c &&
        c.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var f = l.DetermineComponentFrameRoot(),
        y = f[0],
        S = f[1];
      if (y && S) {
        var A = y.split(`
`),
          B = S.split(`
`);
        for (
          c = l = 0;
          l < A.length && !A[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; c < B.length && !B[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (l === A.length || c === B.length)
          for (
            l = A.length - 1, c = B.length - 1;
            1 <= l && 0 <= c && A[l] !== B[c];

          )
            c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (A[l] !== B[c]) {
            if (l !== 1 || c !== 1)
              do
                if ((l--, c--, 0 > c || A[l] !== B[c])) {
                  var K =
                    `
` + A[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      K.includes("<anonymous>") &&
                      (K = K.replace("<anonymous>", e.displayName)),
                    K
                  );
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      (nr = !1), (Error.prepareStackTrace = i);
    }
    return (i = e ? e.displayName || e.name : "") ? gn(i) : "";
  }
  function Ns(e, a) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return gn(e.type);
      case 16:
        return gn("Lazy");
      case 13:
        return e.child !== a && a !== null
          ? gn("Suspense Fallback")
          : gn("Suspense");
      case 19:
        return gn("SuspenseList");
      case 0:
      case 15:
        return yn(e.type, !1);
      case 11:
        return yn(e.type.render, !1);
      case 1:
        return yn(e.type, !0);
      case 31:
        return gn("Activity");
      default:
        return "";
    }
  }
  function Os(e) {
    try {
      var a = "",
        i = null;
      do (a += Ns(e, i)), (i = e), (e = e.return);
      while (e);
      return a;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var wa = Object.prototype.hasOwnProperty,
    j = t.unstable_scheduleCallback,
    H = t.unstable_cancelCallback,
    Q = t.unstable_shouldYield,
    oe = t.unstable_requestPaint,
    W = t.unstable_now,
    ne = t.unstable_getCurrentPriorityLevel,
    Se = t.unstable_ImmediatePriority,
    Ye = t.unstable_UserBlockingPriority,
    He = t.unstable_NormalPriority,
    xt = t.unstable_LowPriority,
    da = t.unstable_IdlePriority,
    Un = t.log,
    Yr = t.unstable_setDisableYieldValue,
    Wn = null,
    dt = null;
  function vn(e) {
    if (
      (typeof Un == "function" && Yr(e),
      dt && typeof dt.setStrictMode == "function")
    )
      try {
        dt.setStrictMode(Wn, e);
      } catch {}
  }
  var Bt = Math.clz32 ? Math.clz32 : so,
    Ai = Math.log,
    Ci = Math.LN2;
  function so(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ai(e) / Ci) | 0)) | 0;
  }
  var _a = 256,
    Qr = 262144,
    ar = 4194304;
  function Ta(e) {
    var a = e & 42;
    if (a !== 0) return a;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Kr(e, a, i) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0,
      f = e.suspendedLanes,
      y = e.pingedLanes;
    e = e.warmLanes;
    var S = l & 134217727;
    return (
      S !== 0
        ? ((l = S & ~f),
          l !== 0
            ? (c = Ta(l))
            : ((y &= S),
              y !== 0
                ? (c = Ta(y))
                : i || ((i = S & ~e), i !== 0 && (c = Ta(i)))))
        : ((S = l & ~f),
          S !== 0
            ? (c = Ta(S))
            : y !== 0
            ? (c = Ta(y))
            : i || ((i = l & ~e), i !== 0 && (c = Ta(i)))),
      c === 0
        ? 0
        : a !== 0 &&
          a !== c &&
          (a & f) === 0 &&
          ((f = c & -c),
          (i = a & -a),
          f >= i || (f === 32 && (i & 4194048) !== 0))
        ? a
        : c
    );
  }
  function $r(e, a) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & a) === 0;
  }
  function lo(e, a) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xr() {
    var e = ar;
    return (ar <<= 1), (ar & 62914560) === 0 && (ar = 4194304), e;
  }
  function rr(e) {
    for (var a = [], i = 0; 31 > i; i++) a.push(e);
    return a;
  }
  function ir(e, a) {
    (e.pendingLanes |= a),
      a !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function _c(e, a, i, l, c, f) {
    var y = e.pendingLanes;
    (e.pendingLanes = i),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= i),
      (e.entangledLanes &= i),
      (e.errorRecoveryDisabledLanes &= i),
      (e.shellSuspendCounter = 0);
    var S = e.entanglements,
      A = e.expirationTimes,
      B = e.hiddenUpdates;
    for (i = y & ~i; 0 < i; ) {
      var K = 31 - Bt(i),
        X = 1 << K;
      (S[K] = 0), (A[K] = -1);
      var P = B[K];
      if (P !== null)
        for (B[K] = null, K = 0; K < P.length; K++) {
          var F = P[K];
          F !== null && (F.lane &= -536870913);
        }
      i &= ~X;
    }
    l !== 0 && oo(e, l, 0),
      f !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(y & ~a));
  }
  function oo(e, a, i) {
    (e.pendingLanes |= a), (e.suspendedLanes &= ~a);
    var l = 31 - Bt(a);
    (e.entangledLanes |= a),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (i & 261930));
  }
  function C(e, a) {
    var i = (e.entangledLanes |= a);
    for (e = e.entanglements; i; ) {
      var l = 31 - Bt(i),
        c = 1 << l;
      (c & a) | (e[l] & a) && (e[l] |= a), (i &= ~c);
    }
  }
  function L(e, a) {
    var i = a & -a;
    return (
      (i = (i & 42) !== 0 ? 1 : q(i)),
      (i & (e.suspendedLanes | a)) !== 0 ? 0 : i
    );
  }
  function q(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function te(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ie() {
    var e = J.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Gy(e.type));
  }
  function _e(e, a) {
    var i = J.p;
    try {
      return (J.p = e), a();
    } finally {
      J.p = i;
    }
  }
  var ve = Math.random().toString(36).slice(2),
    se = "__reactFiber$" + ve,
    de = "__reactProps$" + ve,
    Ee = "__reactContainer$" + ve,
    Te = "__reactEvents$" + ve,
    Ae = "__reactListeners$" + ve,
    Xe = "__reactHandles$" + ve,
    rt = "__reactResources$" + ve,
    gt = "__reactMarker$" + ve;
  function Rt(e) {
    delete e[se], delete e[de], delete e[Te], delete e[Ae], delete e[Xe];
  }
  function Je(e) {
    var a = e[se];
    if (a) return a;
    for (var i = e.parentNode; i; ) {
      if ((a = i[Ee] || i[se])) {
        if (
          ((i = a.alternate),
          a.child !== null || (i !== null && i.child !== null))
        )
          for (e = Ny(e); e !== null; ) {
            if ((i = e[se])) return i;
            e = Ny(e);
          }
        return a;
      }
      (e = i), (i = e.parentNode);
    }
    return null;
  }
  function We(e) {
    if ((e = e[se] || e[Ee])) {
      var a = e.tag;
      if (
        a === 5 ||
        a === 6 ||
        a === 13 ||
        a === 31 ||
        a === 26 ||
        a === 27 ||
        a === 3
      )
        return e;
    }
    return null;
  }
  function bn(e) {
    var a = e.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Ln(e) {
    var a = e[rt];
    return (
      a ||
        (a = e[rt] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      a
    );
  }
  function ft(e) {
    e[gt] = !0;
  }
  var xn = new Set(),
    Ni = {};
  function Sn(e, a) {
    sn(e, a), sn(e + "Capture", a);
  }
  function sn(e, a) {
    for (Ni[e] = a, e = 0; e < a.length; e++) xn.add(a[e]);
  }
  var Oi = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Zr = {},
    Qe = {};
  function Vt(e) {
    return wa.call(Qe, e)
      ? !0
      : wa.call(Zr, e)
      ? !1
      : Oi.test(e)
      ? (Qe[e] = !0)
      : ((Zr[e] = !0), !1);
  }
  function ea(e, a, i) {
    if (Vt(a))
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(a);
            return;
          case "boolean":
            var l = a.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(a);
              return;
            }
        }
        e.setAttribute(a, "" + i);
      }
  }
  function zn(e, a, i) {
    if (i === null) e.removeAttribute(a);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttribute(a, "" + i);
    }
  }
  function et(e, a, i, l) {
    if (l === null) e.removeAttribute(i);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(a, i, "" + l);
    }
  }
  function Yt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function js(e) {
    var a = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (a === "checkbox" || a === "radio")
    );
  }
  function Tc(e, a, i) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, a);
    if (
      !e.hasOwnProperty(a) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var c = l.get,
        f = l.set;
      return (
        Object.defineProperty(e, a, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (y) {
            (i = "" + y), f.call(this, y);
          },
        }),
        Object.defineProperty(e, a, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (y) {
            i = "" + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[a];
          },
        }
      );
    }
  }
  function Rc(e) {
    if (!e._valueTracker) {
      var a = js(e) ? "checked" : "value";
      e._valueTracker = Tc(e, a, "" + e[a]);
    }
  }
  function mm(e) {
    if (!e) return !1;
    var a = e._valueTracker;
    if (!a) return !0;
    var i = a.getValue(),
      l = "";
    return (
      e && (l = js(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== i ? (a.setValue(e), !0) : !1
    );
  }
  function uo(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var kx = /[\n"\\]/g;
  function kn(e) {
    return e.replace(kx, function (a) {
      return "\\" + a.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ac(e, a, i, l, c, f, y, S) {
    (e.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (e.type = y)
        : e.removeAttribute("type"),
      a != null
        ? y === "number"
          ? ((a === 0 && e.value === "") || e.value != a) &&
            (e.value = "" + Yt(a))
          : e.value !== "" + Yt(a) && (e.value = "" + Yt(a))
        : (y !== "submit" && y !== "reset") || e.removeAttribute("value"),
      a != null
        ? Cc(e, y, Yt(a))
        : i != null
        ? Cc(e, y, Yt(i))
        : l != null && e.removeAttribute("value"),
      c == null && f != null && (e.defaultChecked = !!f),
      c != null &&
        (e.checked = c && typeof c != "function" && typeof c != "symbol"),
      S != null &&
      typeof S != "function" &&
      typeof S != "symbol" &&
      typeof S != "boolean"
        ? (e.name = "" + Yt(S))
        : e.removeAttribute("name");
  }
  function pm(e, a, i, l, c, f, y, S) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.type = f),
      a != null || i != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || a != null)) {
        Rc(e);
        return;
      }
      (i = i != null ? "" + Yt(i) : ""),
        (a = a != null ? "" + Yt(a) : i),
        S || a === e.value || (e.value = a),
        (e.defaultValue = a);
    }
    (l = l ?? c),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = S ? e.checked : !!l),
      (e.defaultChecked = !!l),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (e.name = y),
      Rc(e);
  }
  function Cc(e, a, i) {
    (a === "number" && uo(e.ownerDocument) === e) ||
      e.defaultValue === "" + i ||
      (e.defaultValue = "" + i);
  }
  function ji(e, a, i, l) {
    if (((e = e.options), a)) {
      a = {};
      for (var c = 0; c < i.length; c++) a["$" + i[c]] = !0;
      for (i = 0; i < e.length; i++)
        (c = a.hasOwnProperty("$" + e[i].value)),
          e[i].selected !== c && (e[i].selected = c),
          c && l && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + Yt(i), a = null, c = 0; c < e.length; c++) {
        if (e[c].value === i) {
          (e[c].selected = !0), l && (e[c].defaultSelected = !0);
          return;
        }
        a !== null || e[c].disabled || (a = e[c]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function gm(e, a, i) {
    if (
      a != null &&
      ((a = "" + Yt(a)), a !== e.value && (e.value = a), i == null)
    ) {
      e.defaultValue !== a && (e.defaultValue = a);
      return;
    }
    e.defaultValue = i != null ? "" + Yt(i) : "";
  }
  function ym(e, a, i, l) {
    if (a == null) {
      if (l != null) {
        if (i != null) throw Error(s(92));
        if (Ne(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        i = l;
      }
      i == null && (i = ""), (a = i);
    }
    (i = Yt(a)),
      (e.defaultValue = i),
      (l = e.textContent),
      l === i && l !== "" && l !== null && (e.value = l),
      Rc(e);
  }
  function Di(e, a) {
    if (a) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = a;
        return;
      }
    }
    e.textContent = a;
  }
  var Ix = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function vm(e, a, i) {
    var l = a.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === ""
      ? l
        ? e.setProperty(a, "")
        : a === "float"
        ? (e.cssFloat = "")
        : (e[a] = "")
      : l
      ? e.setProperty(a, i)
      : typeof i != "number" || i === 0 || Ix.has(a)
      ? a === "float"
        ? (e.cssFloat = i)
        : (e[a] = ("" + i).trim())
      : (e[a] = i + "px");
  }
  function bm(e, a, i) {
    if (a != null && typeof a != "object") throw Error(s(62));
    if (((e = e.style), i != null)) {
      for (var l in i)
        !i.hasOwnProperty(l) ||
          (a != null && a.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
            ? (e.cssFloat = "")
            : (e[l] = ""));
      for (var c in a)
        (l = a[c]), a.hasOwnProperty(c) && i[c] !== l && vm(e, c, l);
    } else for (var f in a) a.hasOwnProperty(f) && vm(e, f, a[f]);
  }
  function Nc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Bx = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Hx =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function co(e) {
    return Hx.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Ra() {}
  var Oc = null;
  function jc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Mi = null,
    Ui = null;
  function xm(e) {
    var a = We(e);
    if (a && (e = a.stateNode)) {
      var i = e[de] || null;
      e: switch (((e = a.stateNode), a.type)) {
        case "input":
          if (
            (Ac(
              e,
              i.value,
              i.defaultValue,
              i.defaultValue,
              i.checked,
              i.defaultChecked,
              i.type,
              i.name
            ),
            (a = i.name),
            i.type === "radio" && a != null)
          ) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                'input[name="' + kn("" + a) + '"][type="radio"]'
              ),
                a = 0;
              a < i.length;
              a++
            ) {
              var l = i[a];
              if (l !== e && l.form === e.form) {
                var c = l[de] || null;
                if (!c) throw Error(s(90));
                Ac(
                  l,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (a = 0; a < i.length; a++)
              (l = i[a]), l.form === e.form && mm(l);
          }
          break e;
        case "textarea":
          gm(e, i.value, i.defaultValue);
          break e;
        case "select":
          (a = i.value), a != null && ji(e, !!i.multiple, a, !1);
      }
    }
  }
  var Dc = !1;
  function Sm(e, a, i) {
    if (Dc) return e(a, i);
    Dc = !0;
    try {
      var l = e(a);
      return l;
    } finally {
      if (
        ((Dc = !1),
        (Mi !== null || Ui !== null) &&
          (Jo(), Mi && ((a = Mi), (e = Ui), (Ui = Mi = null), xm(a), e)))
      )
        for (a = 0; a < e.length; a++) xm(e[a]);
    }
  }
  function Ds(e, a) {
    var i = e.stateNode;
    if (i === null) return null;
    var l = i[de] || null;
    if (l === null) return null;
    i = l[a];
    e: switch (a) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(s(231, a, typeof i));
    return i;
  }
  var Aa = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Mc = !1;
  if (Aa)
    try {
      var Ms = {};
      Object.defineProperty(Ms, "passive", {
        get: function () {
          Mc = !0;
        },
      }),
        window.addEventListener("test", Ms, Ms),
        window.removeEventListener("test", Ms, Ms);
    } catch {
      Mc = !1;
    }
  var sr = null,
    Uc = null,
    fo = null;
  function Em() {
    if (fo) return fo;
    var e,
      a = Uc,
      i = a.length,
      l,
      c = "value" in sr ? sr.value : sr.textContent,
      f = c.length;
    for (e = 0; e < i && a[e] === c[e]; e++);
    var y = i - e;
    for (l = 1; l <= y && a[i - l] === c[f - l]; l++);
    return (fo = c.slice(e, 1 < l ? 1 - l : void 0));
  }
  function ho(e) {
    var a = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && a === 13 && (e = 13))
        : (e = a),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function mo() {
    return !0;
  }
  function wm() {
    return !1;
  }
  function ln(e) {
    function a(i, l, c, f, y) {
      (this._reactName = i),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = f),
        (this.target = y),
        (this.currentTarget = null);
      for (var S in e)
        e.hasOwnProperty(S) && ((i = e[S]), (this[S] = i ? i(f) : f[S]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? mo
          : wm),
        (this.isPropagationStopped = wm),
        this
      );
    }
    return (
      b(a.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = mo));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = mo));
        },
        persist: function () {},
        isPersistent: mo,
      }),
      a
    );
  }
  var Jr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    po = ln(Jr),
    Us = b({}, Jr, { view: 0, detail: 0 }),
    Px = ln(Us),
    Lc,
    zc,
    Ls,
    go = b({}, Us, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ic,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Ls &&
              (Ls && e.type === "mousemove"
                ? ((Lc = e.screenX - Ls.screenX), (zc = e.screenY - Ls.screenY))
                : (zc = Lc = 0),
              (Ls = e)),
            Lc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : zc;
      },
    }),
    _m = ln(go),
    qx = b({}, go, { dataTransfer: 0 }),
    Vx = ln(qx),
    Fx = b({}, Us, { relatedTarget: 0 }),
    kc = ln(Fx),
    Gx = b({}, Jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Yx = ln(Gx),
    Qx = b({}, Jr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Kx = ln(Qx),
    $x = b({}, Jr, { data: 0 }),
    Tm = ln($x),
    Xx = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Zx = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Jx = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Wx(e) {
    var a = this.nativeEvent;
    return a.getModifierState
      ? a.getModifierState(e)
      : (e = Jx[e])
      ? !!a[e]
      : !1;
  }
  function Ic() {
    return Wx;
  }
  var e2 = b({}, Us, {
      key: function (e) {
        if (e.key) {
          var a = Xx[e.key] || e.key;
          if (a !== "Unidentified") return a;
        }
        return e.type === "keypress"
          ? ((e = ho(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Zx[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ic,
      charCode: function (e) {
        return e.type === "keypress" ? ho(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ho(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    t2 = ln(e2),
    n2 = b({}, go, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Rm = ln(n2),
    a2 = b({}, Us, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ic,
    }),
    r2 = ln(a2),
    i2 = b({}, Jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    s2 = ln(i2),
    l2 = b({}, go, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    o2 = ln(l2),
    u2 = b({}, Jr, { newState: 0, oldState: 0 }),
    c2 = ln(u2),
    d2 = [9, 13, 27, 32],
    Bc = Aa && "CompositionEvent" in window,
    zs = null;
  Aa && "documentMode" in document && (zs = document.documentMode);
  var f2 = Aa && "TextEvent" in window && !zs,
    Am = Aa && (!Bc || (zs && 8 < zs && 11 >= zs)),
    Cm = " ",
    Nm = !1;
  function Om(e, a) {
    switch (e) {
      case "keyup":
        return d2.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function jm(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Li = !1;
  function h2(e, a) {
    switch (e) {
      case "compositionend":
        return jm(a);
      case "keypress":
        return a.which !== 32 ? null : ((Nm = !0), Cm);
      case "textInput":
        return (e = a.data), e === Cm && Nm ? null : e;
      default:
        return null;
    }
  }
  function m2(e, a) {
    if (Li)
      return e === "compositionend" || (!Bc && Om(e, a))
        ? ((e = Em()), (fo = Uc = sr = null), (Li = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || (a.ctrlKey && a.altKey)) {
          if (a.char && 1 < a.char.length) return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return Am && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var p2 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Dm(e) {
    var a = e && e.nodeName && e.nodeName.toLowerCase();
    return a === "input" ? !!p2[e.type] : a === "textarea";
  }
  function Mm(e, a, i, l) {
    Mi ? (Ui ? Ui.push(l) : (Ui = [l])) : (Mi = l),
      (a = iu(a, "onChange")),
      0 < a.length &&
        ((i = new po("onChange", "change", null, i, l)),
        e.push({ event: i, listeners: a }));
  }
  var ks = null,
    Is = null;
  function g2(e) {
    py(e, 0);
  }
  function yo(e) {
    var a = bn(e);
    if (mm(a)) return e;
  }
  function Um(e, a) {
    if (e === "change") return a;
  }
  var Lm = !1;
  if (Aa) {
    var Hc;
    if (Aa) {
      var Pc = "oninput" in document;
      if (!Pc) {
        var zm = document.createElement("div");
        zm.setAttribute("oninput", "return;"),
          (Pc = typeof zm.oninput == "function");
      }
      Hc = Pc;
    } else Hc = !1;
    Lm = Hc && (!document.documentMode || 9 < document.documentMode);
  }
  function km() {
    ks && (ks.detachEvent("onpropertychange", Im), (Is = ks = null));
  }
  function Im(e) {
    if (e.propertyName === "value" && yo(Is)) {
      var a = [];
      Mm(a, Is, e, jc(e)), Sm(g2, a);
    }
  }
  function y2(e, a, i) {
    e === "focusin"
      ? (km(), (ks = a), (Is = i), ks.attachEvent("onpropertychange", Im))
      : e === "focusout" && km();
  }
  function v2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return yo(Is);
  }
  function b2(e, a) {
    if (e === "click") return yo(a);
  }
  function x2(e, a) {
    if (e === "input" || e === "change") return yo(a);
  }
  function S2(e, a) {
    return (e === a && (e !== 0 || 1 / e === 1 / a)) || (e !== e && a !== a);
  }
  var En = typeof Object.is == "function" ? Object.is : S2;
  function Bs(e, a) {
    if (En(e, a)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof a != "object" ||
      a === null
    )
      return !1;
    var i = Object.keys(e),
      l = Object.keys(a);
    if (i.length !== l.length) return !1;
    for (l = 0; l < i.length; l++) {
      var c = i[l];
      if (!wa.call(a, c) || !En(e[c], a[c])) return !1;
    }
    return !0;
  }
  function Bm(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Hm(e, a) {
    var i = Bm(e);
    e = 0;
    for (var l; i; ) {
      if (i.nodeType === 3) {
        if (((l = e + i.textContent.length), e <= a && l >= a))
          return { node: i, offset: a - e };
        e = l;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Bm(i);
    }
  }
  function Pm(e, a) {
    return e && a
      ? e === a
        ? !0
        : e && e.nodeType === 3
        ? !1
        : a && a.nodeType === 3
        ? Pm(e, a.parentNode)
        : "contains" in e
        ? e.contains(a)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(a) & 16)
        : !1
      : !1;
  }
  function qm(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var a = uo(e.document); a instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof a.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = a.contentWindow;
      else break;
      a = uo(e.document);
    }
    return a;
  }
  function qc(e) {
    var a = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      a &&
      ((a === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        a === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var E2 = Aa && "documentMode" in document && 11 >= document.documentMode,
    zi = null,
    Vc = null,
    Hs = null,
    Fc = !1;
  function Vm(e, a, i) {
    var l =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Fc ||
      zi == null ||
      zi !== uo(l) ||
      ((l = zi),
      "selectionStart" in l && qc(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Hs && Bs(Hs, l)) ||
        ((Hs = l),
        (l = iu(Vc, "onSelect")),
        0 < l.length &&
          ((a = new po("onSelect", "select", null, a, i)),
          e.push({ event: a, listeners: l }),
          (a.target = zi))));
  }
  function Wr(e, a) {
    var i = {};
    return (
      (i[e.toLowerCase()] = a.toLowerCase()),
      (i["Webkit" + e] = "webkit" + a),
      (i["Moz" + e] = "moz" + a),
      i
    );
  }
  var ki = {
      animationend: Wr("Animation", "AnimationEnd"),
      animationiteration: Wr("Animation", "AnimationIteration"),
      animationstart: Wr("Animation", "AnimationStart"),
      transitionrun: Wr("Transition", "TransitionRun"),
      transitionstart: Wr("Transition", "TransitionStart"),
      transitioncancel: Wr("Transition", "TransitionCancel"),
      transitionend: Wr("Transition", "TransitionEnd"),
    },
    Gc = {},
    Fm = {};
  Aa &&
    ((Fm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ki.animationend.animation,
      delete ki.animationiteration.animation,
      delete ki.animationstart.animation),
    "TransitionEvent" in window || delete ki.transitionend.transition);
  function ei(e) {
    if (Gc[e]) return Gc[e];
    if (!ki[e]) return e;
    var a = ki[e],
      i;
    for (i in a) if (a.hasOwnProperty(i) && i in Fm) return (Gc[e] = a[i]);
    return e;
  }
  var Gm = ei("animationend"),
    Ym = ei("animationiteration"),
    Qm = ei("animationstart"),
    w2 = ei("transitionrun"),
    _2 = ei("transitionstart"),
    T2 = ei("transitioncancel"),
    Km = ei("transitionend"),
    $m = new Map(),
    Yc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Yc.push("scrollEnd");
  function ta(e, a) {
    $m.set(e, a), Sn(a, [e]);
  }
  var vo =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var a = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(a)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    In = [],
    Ii = 0,
    Qc = 0;
  function bo() {
    for (var e = Ii, a = (Qc = Ii = 0); a < e; ) {
      var i = In[a];
      In[a++] = null;
      var l = In[a];
      In[a++] = null;
      var c = In[a];
      In[a++] = null;
      var f = In[a];
      if (((In[a++] = null), l !== null && c !== null)) {
        var y = l.pending;
        y === null ? (c.next = c) : ((c.next = y.next), (y.next = c)),
          (l.pending = c);
      }
      f !== 0 && Xm(i, c, f);
    }
  }
  function xo(e, a, i, l) {
    (In[Ii++] = e),
      (In[Ii++] = a),
      (In[Ii++] = i),
      (In[Ii++] = l),
      (Qc |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function Kc(e, a, i, l) {
    return xo(e, a, i, l), So(e);
  }
  function ti(e, a) {
    return xo(e, null, null, a), So(e);
  }
  function Xm(e, a, i) {
    e.lanes |= i;
    var l = e.alternate;
    l !== null && (l.lanes |= i);
    for (var c = !1, f = e.return; f !== null; )
      (f.childLanes |= i),
        (l = f.alternate),
        l !== null && (l.childLanes |= i),
        f.tag === 22 &&
          ((e = f.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = f),
        (f = f.return);
    return e.tag === 3
      ? ((f = e.stateNode),
        c &&
          a !== null &&
          ((c = 31 - Bt(i)),
          (e = f.hiddenUpdates),
          (l = e[c]),
          l === null ? (e[c] = [a]) : l.push(a),
          (a.lane = i | 536870912)),
        f)
      : null;
  }
  function So(e) {
    if (50 < ol) throw ((ol = 0), (af = null), Error(s(185)));
    for (var a = e.return; a !== null; ) (e = a), (a = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Bi = {};
  function R2(e, a, i, l) {
    (this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = a),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function wn(e, a, i, l) {
    return new R2(e, a, i, l);
  }
  function $c(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ca(e, a) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = wn(e.tag, a, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = a),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 65011712),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (a = e.dependencies),
      (i.dependencies =
        a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      (i.refCleanup = e.refCleanup),
      i
    );
  }
  function Zm(e, a) {
    e.flags &= 65011714;
    var i = e.alternate;
    return (
      i === null
        ? ((e.childLanes = 0),
          (e.lanes = a),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = i.childLanes),
          (e.lanes = i.lanes),
          (e.child = i.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = i.memoizedProps),
          (e.memoizedState = i.memoizedState),
          (e.updateQueue = i.updateQueue),
          (e.type = i.type),
          (a = i.dependencies),
          (e.dependencies =
            a === null
              ? null
              : { lanes: a.lanes, firstContext: a.firstContext })),
      e
    );
  }
  function Eo(e, a, i, l, c, f) {
    var y = 0;
    if (((l = e), typeof e == "function")) $c(e) && (y = 1);
    else if (typeof e == "string")
      y = jS(e, i, le.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case fe:
          return (e = wn(31, i, a, c)), (e.elementType = fe), (e.lanes = f), e;
        case T:
          return ni(i.children, c, f, a);
        case _:
          (y = 8), (c |= 24);
          break;
        case U:
          return (
            (e = wn(12, i, a, c | 2)), (e.elementType = U), (e.lanes = f), e
          );
        case ee:
          return (e = wn(13, i, a, c)), (e.elementType = ee), (e.lanes = f), e;
        case pe:
          return (e = wn(19, i, a, c)), (e.elementType = pe), (e.lanes = f), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Y:
                y = 10;
                break e;
              case z:
                y = 9;
                break e;
              case Z:
                y = 11;
                break e;
              case N:
                y = 14;
                break e;
              case me:
                (y = 16), (l = null);
                break e;
            }
          (y = 29),
            (i = Error(s(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (a = wn(y, i, a, c)), (a.elementType = e), (a.type = l), (a.lanes = f), a
    );
  }
  function ni(e, a, i, l) {
    return (e = wn(7, e, l, a)), (e.lanes = i), e;
  }
  function Xc(e, a, i) {
    return (e = wn(6, e, null, a)), (e.lanes = i), e;
  }
  function Jm(e) {
    var a = wn(18, null, null, 0);
    return (a.stateNode = e), a;
  }
  function Zc(e, a, i) {
    return (
      (a = wn(4, e.children !== null ? e.children : [], e.key, a)),
      (a.lanes = i),
      (a.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      a
    );
  }
  var Wm = new WeakMap();
  function Bn(e, a) {
    if (typeof e == "object" && e !== null) {
      var i = Wm.get(e);
      return i !== void 0
        ? i
        : ((a = { value: e, source: a, stack: Os(a) }), Wm.set(e, a), a);
    }
    return { value: e, source: a, stack: Os(a) };
  }
  var Hi = [],
    Pi = 0,
    wo = null,
    Ps = 0,
    Hn = [],
    Pn = 0,
    lr = null,
    fa = 1,
    ha = "";
  function Na(e, a) {
    (Hi[Pi++] = Ps), (Hi[Pi++] = wo), (wo = e), (Ps = a);
  }
  function ep(e, a, i) {
    (Hn[Pn++] = fa), (Hn[Pn++] = ha), (Hn[Pn++] = lr), (lr = e);
    var l = fa;
    e = ha;
    var c = 32 - Bt(l) - 1;
    (l &= ~(1 << c)), (i += 1);
    var f = 32 - Bt(a) + c;
    if (30 < f) {
      var y = c - (c % 5);
      (f = (l & ((1 << y) - 1)).toString(32)),
        (l >>= y),
        (c -= y),
        (fa = (1 << (32 - Bt(a) + c)) | (i << c) | l),
        (ha = f + e);
    } else (fa = (1 << f) | (i << c) | l), (ha = e);
  }
  function Jc(e) {
    e.return !== null && (Na(e, 1), ep(e, 1, 0));
  }
  function Wc(e) {
    for (; e === wo; )
      (wo = Hi[--Pi]), (Hi[Pi] = null), (Ps = Hi[--Pi]), (Hi[Pi] = null);
    for (; e === lr; )
      (lr = Hn[--Pn]),
        (Hn[Pn] = null),
        (ha = Hn[--Pn]),
        (Hn[Pn] = null),
        (fa = Hn[--Pn]),
        (Hn[Pn] = null);
  }
  function tp(e, a) {
    (Hn[Pn++] = fa),
      (Hn[Pn++] = ha),
      (Hn[Pn++] = lr),
      (fa = a.id),
      (ha = a.overflow),
      (lr = e);
  }
  var Qt = null,
    yt = null,
    Ze = !1,
    or = null,
    qn = !1,
    ed = Error(s(519));
  function ur(e) {
    var a = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (qs(Bn(a, e)), ed);
  }
  function np(e) {
    var a = e.stateNode,
      i = e.type,
      l = e.memoizedProps;
    switch (((a[se] = e), (a[de] = l), i)) {
      case "dialog":
        Ge("cancel", a), Ge("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ge("load", a);
        break;
      case "video":
      case "audio":
        for (i = 0; i < cl.length; i++) Ge(cl[i], a);
        break;
      case "source":
        Ge("error", a);
        break;
      case "img":
      case "image":
      case "link":
        Ge("error", a), Ge("load", a);
        break;
      case "details":
        Ge("toggle", a);
        break;
      case "input":
        Ge("invalid", a),
          pm(
            a,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          );
        break;
      case "select":
        Ge("invalid", a);
        break;
      case "textarea":
        Ge("invalid", a), ym(a, l.value, l.defaultValue, l.children);
    }
    (i = l.children),
      (typeof i != "string" && typeof i != "number" && typeof i != "bigint") ||
      a.textContent === "" + i ||
      l.suppressHydrationWarning === !0 ||
      by(a.textContent, i)
        ? (l.popover != null && (Ge("beforetoggle", a), Ge("toggle", a)),
          l.onScroll != null && Ge("scroll", a),
          l.onScrollEnd != null && Ge("scrollend", a),
          l.onClick != null && (a.onclick = Ra),
          (a = !0))
        : (a = !1),
      a || ur(e, !0);
  }
  function ap(e) {
    for (Qt = e.return; Qt; )
      switch (Qt.tag) {
        case 5:
        case 31:
        case 13:
          qn = !1;
          return;
        case 27:
        case 3:
          qn = !0;
          return;
        default:
          Qt = Qt.return;
      }
  }
  function qi(e) {
    if (e !== Qt) return !1;
    if (!Ze) return ap(e), (Ze = !0), !1;
    var a = e.tag,
      i;
    if (
      ((i = a !== 3 && a !== 27) &&
        ((i = a === 5) &&
          ((i = e.type),
          (i =
            !(i !== "form" && i !== "button") || bf(e.type, e.memoizedProps))),
        (i = !i)),
      i && yt && ur(e),
      ap(e),
      a === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      yt = Cy(e);
    } else if (a === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      yt = Cy(e);
    } else
      a === 27
        ? ((a = yt), wr(e.type) ? ((e = _f), (_f = null), (yt = e)) : (yt = a))
        : (yt = Qt ? Fn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function ai() {
    (yt = Qt = null), (Ze = !1);
  }
  function td() {
    var e = or;
    return (
      e !== null &&
        (dn === null ? (dn = e) : dn.push.apply(dn, e), (or = null)),
      e
    );
  }
  function qs(e) {
    or === null ? (or = [e]) : or.push(e);
  }
  var nd = O(null),
    ri = null,
    Oa = null;
  function cr(e, a, i) {
    ae(nd, a._currentValue), (a._currentValue = i);
  }
  function ja(e) {
    (e._currentValue = nd.current), G(nd);
  }
  function ad(e, a, i) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & a) !== a
          ? ((e.childLanes |= a), l !== null && (l.childLanes |= a))
          : l !== null && (l.childLanes & a) !== a && (l.childLanes |= a),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function rd(e, a, i, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var f = c.dependencies;
      if (f !== null) {
        var y = c.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var S = f;
          f = c;
          for (var A = 0; A < a.length; A++)
            if (S.context === a[A]) {
              (f.lanes |= i),
                (S = f.alternate),
                S !== null && (S.lanes |= i),
                ad(f.return, i, e),
                l || (y = null);
              break e;
            }
          f = S.next;
        }
      } else if (c.tag === 18) {
        if (((y = c.return), y === null)) throw Error(s(341));
        (y.lanes |= i),
          (f = y.alternate),
          f !== null && (f.lanes |= i),
          ad(y, i, e),
          (y = null);
      } else y = c.child;
      if (y !== null) y.return = c;
      else
        for (y = c; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (((c = y.sibling), c !== null)) {
            (c.return = y.return), (y = c);
            break;
          }
          y = y.return;
        }
      c = y;
    }
  }
  function Vi(e, a, i, l) {
    e = null;
    for (var c = a, f = !1; c !== null; ) {
      if (!f) {
        if ((c.flags & 524288) !== 0) f = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var y = c.alternate;
        if (y === null) throw Error(s(387));
        if (((y = y.memoizedProps), y !== null)) {
          var S = c.type;
          En(c.pendingProps.value, y.value) ||
            (e !== null ? e.push(S) : (e = [S]));
        }
      } else if (c === qe.current) {
        if (((y = c.alternate), y === null)) throw Error(s(387));
        y.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(pl) : (e = [pl]));
      }
      c = c.return;
    }
    e !== null && rd(a, e, i, l), (a.flags |= 262144);
  }
  function _o(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!En(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ii(e) {
    (ri = e),
      (Oa = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Kt(e) {
    return rp(ri, e);
  }
  function To(e, a) {
    return ri === null && ii(e), rp(e, a);
  }
  function rp(e, a) {
    var i = a._currentValue;
    if (((a = { context: a, memoizedValue: i, next: null }), Oa === null)) {
      if (e === null) throw Error(s(308));
      (Oa = a),
        (e.dependencies = { lanes: 0, firstContext: a }),
        (e.flags |= 524288);
    } else Oa = Oa.next = a;
    return i;
  }
  var A2 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              a = (this.signal = {
                aborted: !1,
                addEventListener: function (i, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (a.aborted = !0),
                e.forEach(function (i) {
                  return i();
                });
            };
          },
    C2 = t.unstable_scheduleCallback,
    N2 = t.unstable_NormalPriority,
    Mt = {
      $$typeof: Y,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function id() {
    return { controller: new A2(), data: new Map(), refCount: 0 };
  }
  function Vs(e) {
    e.refCount--,
      e.refCount === 0 &&
        C2(N2, function () {
          e.controller.abort();
        });
  }
  var Fs = null,
    sd = 0,
    Fi = 0,
    Gi = null;
  function O2(e, a) {
    if (Fs === null) {
      var i = (Fs = []);
      (sd = 0),
        (Fi = cf()),
        (Gi = {
          status: "pending",
          value: void 0,
          then: function (l) {
            i.push(l);
          },
        });
    }
    return sd++, a.then(ip, ip), a;
  }
  function ip() {
    if (--sd === 0 && Fs !== null) {
      Gi !== null && (Gi.status = "fulfilled");
      var e = Fs;
      (Fs = null), (Fi = 0), (Gi = null);
      for (var a = 0; a < e.length; a++) (0, e[a])();
    }
  }
  function j2(e, a) {
    var i = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          i.push(c);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = a);
          for (var c = 0; c < i.length; c++) (0, i[c])(a);
        },
        function (c) {
          for (l.status = "rejected", l.reason = c, c = 0; c < i.length; c++)
            (0, i[c])(void 0);
        }
      ),
      l
    );
  }
  var sp = k.S;
  k.S = function (e, a) {
    (Vg = W()),
      typeof a == "object" &&
        a !== null &&
        typeof a.then == "function" &&
        O2(e, a),
      sp !== null && sp(e, a);
  };
  var si = O(null);
  function ld() {
    var e = si.current;
    return e !== null ? e : ht.pooledCache;
  }
  function Ro(e, a) {
    a === null ? ae(si, si.current) : ae(si, a.pool);
  }
  function lp() {
    var e = ld();
    return e === null ? null : { parent: Mt._currentValue, pool: e };
  }
  var Yi = Error(s(460)),
    od = Error(s(474)),
    Ao = Error(s(542)),
    Co = { then: function () {} };
  function op(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function up(e, a, i) {
    switch (
      ((i = e[i]),
      i === void 0 ? e.push(a) : i !== a && (a.then(Ra, Ra), (a = i)),
      a.status)
    ) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw ((e = a.reason), dp(e), e);
      default:
        if (typeof a.status == "string") a.then(Ra, Ra);
        else {
          if (((e = ht), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          (e = a),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (a.status === "pending") {
                  var c = a;
                  (c.status = "fulfilled"), (c.value = l);
                }
              },
              function (l) {
                if (a.status === "pending") {
                  var c = a;
                  (c.status = "rejected"), (c.reason = l);
                }
              }
            );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw ((e = a.reason), dp(e), e);
        }
        throw ((oi = a), Yi);
    }
  }
  function li(e) {
    try {
      var a = e._init;
      return a(e._payload);
    } catch (i) {
      throw i !== null && typeof i == "object" && typeof i.then == "function"
        ? ((oi = i), Yi)
        : i;
    }
  }
  var oi = null;
  function cp() {
    if (oi === null) throw Error(s(459));
    var e = oi;
    return (oi = null), e;
  }
  function dp(e) {
    if (e === Yi || e === Ao) throw Error(s(483));
  }
  var Qi = null,
    Gs = 0;
  function No(e) {
    var a = Gs;
    return (Gs += 1), Qi === null && (Qi = []), up(Qi, e, a);
  }
  function Ys(e, a) {
    (a = a.props.ref), (e.ref = a !== void 0 ? a : null);
  }
  function Oo(e, a) {
    throw a.$$typeof === x
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(a)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(a).join(", ") + "}"
              : e
          )
        ));
  }
  function fp(e) {
    function a(M, D) {
      if (e) {
        var I = M.deletions;
        I === null ? ((M.deletions = [D]), (M.flags |= 16)) : I.push(D);
      }
    }
    function i(M, D) {
      if (!e) return null;
      for (; D !== null; ) a(M, D), (D = D.sibling);
      return null;
    }
    function l(M) {
      for (var D = new Map(); M !== null; )
        M.key !== null ? D.set(M.key, M) : D.set(M.index, M), (M = M.sibling);
      return D;
    }
    function c(M, D) {
      return (M = Ca(M, D)), (M.index = 0), (M.sibling = null), M;
    }
    function f(M, D, I) {
      return (
        (M.index = I),
        e
          ? ((I = M.alternate),
            I !== null
              ? ((I = I.index), I < D ? ((M.flags |= 67108866), D) : I)
              : ((M.flags |= 67108866), D))
          : ((M.flags |= 1048576), D)
      );
    }
    function y(M) {
      return e && M.alternate === null && (M.flags |= 67108866), M;
    }
    function S(M, D, I, $) {
      return D === null || D.tag !== 6
        ? ((D = Xc(I, M.mode, $)), (D.return = M), D)
        : ((D = c(D, I)), (D.return = M), D);
    }
    function A(M, D, I, $) {
      var Ce = I.type;
      return Ce === T
        ? K(M, D, I.props.children, $, I.key)
        : D !== null &&
          (D.elementType === Ce ||
            (typeof Ce == "object" &&
              Ce !== null &&
              Ce.$$typeof === me &&
              li(Ce) === D.type))
        ? ((D = c(D, I.props)), Ys(D, I), (D.return = M), D)
        : ((D = Eo(I.type, I.key, I.props, null, M.mode, $)),
          Ys(D, I),
          (D.return = M),
          D);
    }
    function B(M, D, I, $) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== I.containerInfo ||
        D.stateNode.implementation !== I.implementation
        ? ((D = Zc(I, M.mode, $)), (D.return = M), D)
        : ((D = c(D, I.children || [])), (D.return = M), D);
    }
    function K(M, D, I, $, Ce) {
      return D === null || D.tag !== 7
        ? ((D = ni(I, M.mode, $, Ce)), (D.return = M), D)
        : ((D = c(D, I)), (D.return = M), D);
    }
    function X(M, D, I) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return (D = Xc("" + D, M.mode, I)), (D.return = M), D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case R:
            return (
              (I = Eo(D.type, D.key, D.props, null, M.mode, I)),
              Ys(I, D),
              (I.return = M),
              I
            );
          case E:
            return (D = Zc(D, M.mode, I)), (D.return = M), D;
          case me:
            return (D = li(D)), X(M, D, I);
        }
        if (Ne(D) || ce(D))
          return (D = ni(D, M.mode, I, null)), (D.return = M), D;
        if (typeof D.then == "function") return X(M, No(D), I);
        if (D.$$typeof === Y) return X(M, To(M, D), I);
        Oo(M, D);
      }
      return null;
    }
    function P(M, D, I, $) {
      var Ce = D !== null ? D.key : null;
      if (
        (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
      )
        return Ce !== null ? null : S(M, D, "" + I, $);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case R:
            return I.key === Ce ? A(M, D, I, $) : null;
          case E:
            return I.key === Ce ? B(M, D, I, $) : null;
          case me:
            return (I = li(I)), P(M, D, I, $);
        }
        if (Ne(I) || ce(I)) return Ce !== null ? null : K(M, D, I, $, null);
        if (typeof I.then == "function") return P(M, D, No(I), $);
        if (I.$$typeof === Y) return P(M, D, To(M, I), $);
        Oo(M, I);
      }
      return null;
    }
    function F(M, D, I, $, Ce) {
      if (
        (typeof $ == "string" && $ !== "") ||
        typeof $ == "number" ||
        typeof $ == "bigint"
      )
        return (M = M.get(I) || null), S(D, M, "" + $, Ce);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case R:
            return (
              (M = M.get($.key === null ? I : $.key) || null), A(D, M, $, Ce)
            );
          case E:
            return (
              (M = M.get($.key === null ? I : $.key) || null), B(D, M, $, Ce)
            );
          case me:
            return ($ = li($)), F(M, D, I, $, Ce);
        }
        if (Ne($) || ce($)) return (M = M.get(I) || null), K(D, M, $, Ce, null);
        if (typeof $.then == "function") return F(M, D, I, No($), Ce);
        if ($.$$typeof === Y) return F(M, D, I, To(D, $), Ce);
        Oo(D, $);
      }
      return null;
    }
    function be(M, D, I, $) {
      for (
        var Ce = null, tt = null, xe = D, Pe = (D = 0), $e = null;
        xe !== null && Pe < I.length;
        Pe++
      ) {
        xe.index > Pe ? (($e = xe), (xe = null)) : ($e = xe.sibling);
        var nt = P(M, xe, I[Pe], $);
        if (nt === null) {
          xe === null && (xe = $e);
          break;
        }
        e && xe && nt.alternate === null && a(M, xe),
          (D = f(nt, D, Pe)),
          tt === null ? (Ce = nt) : (tt.sibling = nt),
          (tt = nt),
          (xe = $e);
      }
      if (Pe === I.length) return i(M, xe), Ze && Na(M, Pe), Ce;
      if (xe === null) {
        for (; Pe < I.length; Pe++)
          (xe = X(M, I[Pe], $)),
            xe !== null &&
              ((D = f(xe, D, Pe)),
              tt === null ? (Ce = xe) : (tt.sibling = xe),
              (tt = xe));
        return Ze && Na(M, Pe), Ce;
      }
      for (xe = l(xe); Pe < I.length; Pe++)
        ($e = F(xe, M, Pe, I[Pe], $)),
          $e !== null &&
            (e &&
              $e.alternate !== null &&
              xe.delete($e.key === null ? Pe : $e.key),
            (D = f($e, D, Pe)),
            tt === null ? (Ce = $e) : (tt.sibling = $e),
            (tt = $e));
      return (
        e &&
          xe.forEach(function (Cr) {
            return a(M, Cr);
          }),
        Ze && Na(M, Pe),
        Ce
      );
    }
    function je(M, D, I, $) {
      if (I == null) throw Error(s(151));
      for (
        var Ce = null,
          tt = null,
          xe = D,
          Pe = (D = 0),
          $e = null,
          nt = I.next();
        xe !== null && !nt.done;
        Pe++, nt = I.next()
      ) {
        xe.index > Pe ? (($e = xe), (xe = null)) : ($e = xe.sibling);
        var Cr = P(M, xe, nt.value, $);
        if (Cr === null) {
          xe === null && (xe = $e);
          break;
        }
        e && xe && Cr.alternate === null && a(M, xe),
          (D = f(Cr, D, Pe)),
          tt === null ? (Ce = Cr) : (tt.sibling = Cr),
          (tt = Cr),
          (xe = $e);
      }
      if (nt.done) return i(M, xe), Ze && Na(M, Pe), Ce;
      if (xe === null) {
        for (; !nt.done; Pe++, nt = I.next())
          (nt = X(M, nt.value, $)),
            nt !== null &&
              ((D = f(nt, D, Pe)),
              tt === null ? (Ce = nt) : (tt.sibling = nt),
              (tt = nt));
        return Ze && Na(M, Pe), Ce;
      }
      for (xe = l(xe); !nt.done; Pe++, nt = I.next())
        (nt = F(xe, M, Pe, nt.value, $)),
          nt !== null &&
            (e &&
              nt.alternate !== null &&
              xe.delete(nt.key === null ? Pe : nt.key),
            (D = f(nt, D, Pe)),
            tt === null ? (Ce = nt) : (tt.sibling = nt),
            (tt = nt));
      return (
        e &&
          xe.forEach(function (qS) {
            return a(M, qS);
          }),
        Ze && Na(M, Pe),
        Ce
      );
    }
    function ut(M, D, I, $) {
      if (
        (typeof I == "object" &&
          I !== null &&
          I.type === T &&
          I.key === null &&
          (I = I.props.children),
        typeof I == "object" && I !== null)
      ) {
        switch (I.$$typeof) {
          case R:
            e: {
              for (var Ce = I.key; D !== null; ) {
                if (D.key === Ce) {
                  if (((Ce = I.type), Ce === T)) {
                    if (D.tag === 7) {
                      i(M, D.sibling),
                        ($ = c(D, I.props.children)),
                        ($.return = M),
                        (M = $);
                      break e;
                    }
                  } else if (
                    D.elementType === Ce ||
                    (typeof Ce == "object" &&
                      Ce !== null &&
                      Ce.$$typeof === me &&
                      li(Ce) === D.type)
                  ) {
                    i(M, D.sibling),
                      ($ = c(D, I.props)),
                      Ys($, I),
                      ($.return = M),
                      (M = $);
                    break e;
                  }
                  i(M, D);
                  break;
                } else a(M, D);
                D = D.sibling;
              }
              I.type === T
                ? (($ = ni(I.props.children, M.mode, $, I.key)),
                  ($.return = M),
                  (M = $))
                : (($ = Eo(I.type, I.key, I.props, null, M.mode, $)),
                  Ys($, I),
                  ($.return = M),
                  (M = $));
            }
            return y(M);
          case E:
            e: {
              for (Ce = I.key; D !== null; ) {
                if (D.key === Ce)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === I.containerInfo &&
                    D.stateNode.implementation === I.implementation
                  ) {
                    i(M, D.sibling),
                      ($ = c(D, I.children || [])),
                      ($.return = M),
                      (M = $);
                    break e;
                  } else {
                    i(M, D);
                    break;
                  }
                else a(M, D);
                D = D.sibling;
              }
              ($ = Zc(I, M.mode, $)), ($.return = M), (M = $);
            }
            return y(M);
          case me:
            return (I = li(I)), ut(M, D, I, $);
        }
        if (Ne(I)) return be(M, D, I, $);
        if (ce(I)) {
          if (((Ce = ce(I)), typeof Ce != "function")) throw Error(s(150));
          return (I = Ce.call(I)), je(M, D, I, $);
        }
        if (typeof I.then == "function") return ut(M, D, No(I), $);
        if (I.$$typeof === Y) return ut(M, D, To(M, I), $);
        Oo(M, I);
      }
      return (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
        ? ((I = "" + I),
          D !== null && D.tag === 6
            ? (i(M, D.sibling), ($ = c(D, I)), ($.return = M), (M = $))
            : (i(M, D), ($ = Xc(I, M.mode, $)), ($.return = M), (M = $)),
          y(M))
        : i(M, D);
    }
    return function (M, D, I, $) {
      try {
        Gs = 0;
        var Ce = ut(M, D, I, $);
        return (Qi = null), Ce;
      } catch (xe) {
        if (xe === Yi || xe === Ao) throw xe;
        var tt = wn(29, xe, null, M.mode);
        return (tt.lanes = $), (tt.return = M), tt;
      } finally {
      }
    };
  }
  var ui = fp(!0),
    hp = fp(!1),
    dr = !1;
  function ud(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function cd(e, a) {
    (e = e.updateQueue),
      a.updateQueue === e &&
        (a.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function fr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function hr(e, a, i) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (at & 2) !== 0)) {
      var c = l.pending;
      return (
        c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)),
        (l.pending = a),
        (a = So(e)),
        Xm(e, null, i),
        a
      );
    }
    return xo(e, l, a, i), So(e);
  }
  function Qs(e, a, i) {
    if (
      ((a = a.updateQueue), a !== null && ((a = a.shared), (i & 4194048) !== 0))
    ) {
      var l = a.lanes;
      (l &= e.pendingLanes), (i |= l), (a.lanes = i), C(e, i);
    }
  }
  function dd(e, a) {
    var i = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), i === l)) {
      var c = null,
        f = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var y = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null,
          };
          f === null ? (c = f = y) : (f = f.next = y), (i = i.next);
        } while (i !== null);
        f === null ? (c = f = a) : (f = f.next = a);
      } else c = f = a;
      (i = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: f,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = i);
      return;
    }
    (e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = a) : (e.next = a),
      (i.lastBaseUpdate = a);
  }
  var fd = !1;
  function Ks() {
    if (fd) {
      var e = Gi;
      if (e !== null) throw e;
    }
  }
  function $s(e, a, i, l) {
    fd = !1;
    var c = e.updateQueue;
    dr = !1;
    var f = c.firstBaseUpdate,
      y = c.lastBaseUpdate,
      S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var A = S,
        B = A.next;
      (A.next = null), y === null ? (f = B) : (y.next = B), (y = A);
      var K = e.alternate;
      K !== null &&
        ((K = K.updateQueue),
        (S = K.lastBaseUpdate),
        S !== y &&
          (S === null ? (K.firstBaseUpdate = B) : (S.next = B),
          (K.lastBaseUpdate = A)));
    }
    if (f !== null) {
      var X = c.baseState;
      (y = 0), (K = B = A = null), (S = f);
      do {
        var P = S.lane & -536870913,
          F = P !== S.lane;
        if (F ? (Ke & P) === P : (l & P) === P) {
          P !== 0 && P === Fi && (fd = !0),
            K !== null &&
              (K = K.next =
                {
                  lane: 0,
                  tag: S.tag,
                  payload: S.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var be = e,
              je = S;
            P = a;
            var ut = i;
            switch (je.tag) {
              case 1:
                if (((be = je.payload), typeof be == "function")) {
                  X = be.call(ut, X, P);
                  break e;
                }
                X = be;
                break e;
              case 3:
                be.flags = (be.flags & -65537) | 128;
              case 0:
                if (
                  ((be = je.payload),
                  (P = typeof be == "function" ? be.call(ut, X, P) : be),
                  P == null)
                )
                  break e;
                X = b({}, X, P);
                break e;
              case 2:
                dr = !0;
            }
          }
          (P = S.callback),
            P !== null &&
              ((e.flags |= 64),
              F && (e.flags |= 8192),
              (F = c.callbacks),
              F === null ? (c.callbacks = [P]) : F.push(P));
        } else
          (F = {
            lane: P,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null,
          }),
            K === null ? ((B = K = F), (A = X)) : (K = K.next = F),
            (y |= P);
        if (((S = S.next), S === null)) {
          if (((S = c.shared.pending), S === null)) break;
          (F = S),
            (S = F.next),
            (F.next = null),
            (c.lastBaseUpdate = F),
            (c.shared.pending = null);
        }
      } while (!0);
      K === null && (A = X),
        (c.baseState = A),
        (c.firstBaseUpdate = B),
        (c.lastBaseUpdate = K),
        f === null && (c.shared.lanes = 0),
        (vr |= y),
        (e.lanes = y),
        (e.memoizedState = X);
    }
  }
  function mp(e, a) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(a);
  }
  function pp(e, a) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++) mp(i[e], a);
  }
  var Ki = O(null),
    jo = O(0);
  function gp(e, a) {
    (e = Ha), ae(jo, e), ae(Ki, a), (Ha = e | a.baseLanes);
  }
  function hd() {
    ae(jo, Ha), ae(Ki, Ki.current);
  }
  function md() {
    (Ha = jo.current), G(Ki), G(jo);
  }
  var _n = O(null),
    Vn = null;
  function mr(e) {
    var a = e.alternate;
    ae(Ot, Ot.current & 1),
      ae(_n, e),
      Vn === null &&
        (a === null || Ki.current !== null || a.memoizedState !== null) &&
        (Vn = e);
  }
  function pd(e) {
    ae(Ot, Ot.current), ae(_n, e), Vn === null && (Vn = e);
  }
  function yp(e) {
    e.tag === 22
      ? (ae(Ot, Ot.current), ae(_n, e), Vn === null && (Vn = e))
      : pr();
  }
  function pr() {
    ae(Ot, Ot.current), ae(_n, _n.current);
  }
  function Tn(e) {
    G(_n), Vn === e && (Vn = null), G(Ot);
  }
  var Ot = O(0);
  function Do(e) {
    for (var a = e; a !== null; ) {
      if (a.tag === 13) {
        var i = a.memoizedState;
        if (i !== null && ((i = i.dehydrated), i === null || Ef(i) || wf(i)))
          return a;
      } else if (
        a.tag === 19 &&
        (a.memoizedProps.revealOrder === "forwards" ||
          a.memoizedProps.revealOrder === "backwards" ||
          a.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          a.memoizedProps.revealOrder === "together")
      ) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        (a.child.return = a), (a = a.child);
        continue;
      }
      if (a === e) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e) return null;
        a = a.return;
      }
      (a.sibling.return = a.return), (a = a.sibling);
    }
    return null;
  }
  var Da = 0,
    Ie = null,
    lt = null,
    Ut = null,
    Mo = !1,
    $i = !1,
    ci = !1,
    Uo = 0,
    Xs = 0,
    Xi = null,
    D2 = 0;
  function At() {
    throw Error(s(321));
  }
  function gd(e, a) {
    if (a === null) return !1;
    for (var i = 0; i < a.length && i < e.length; i++)
      if (!En(e[i], a[i])) return !1;
    return !0;
  }
  function yd(e, a, i, l, c, f) {
    return (
      (Da = f),
      (Ie = a),
      (a.memoizedState = null),
      (a.updateQueue = null),
      (a.lanes = 0),
      (k.H = e === null || e.memoizedState === null ? eg : Dd),
      (ci = !1),
      (f = i(l, c)),
      (ci = !1),
      $i && (f = bp(a, i, l, c)),
      vp(e),
      f
    );
  }
  function vp(e) {
    k.H = Ws;
    var a = lt !== null && lt.next !== null;
    if (((Da = 0), (Ut = lt = Ie = null), (Mo = !1), (Xs = 0), (Xi = null), a))
      throw Error(s(300));
    e === null ||
      Lt ||
      ((e = e.dependencies), e !== null && _o(e) && (Lt = !0));
  }
  function bp(e, a, i, l) {
    Ie = e;
    var c = 0;
    do {
      if (($i && (Xi = null), (Xs = 0), ($i = !1), 25 <= c))
        throw Error(s(301));
      if (((c += 1), (Ut = lt = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        (f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0);
      }
      (k.H = tg), (f = a(i, l));
    } while ($i);
    return f;
  }
  function M2() {
    var e = k.H,
      a = e.useState()[0];
    return (
      (a = typeof a.then == "function" ? Zs(a) : a),
      (e = e.useState()[0]),
      (lt !== null ? lt.memoizedState : null) !== e && (Ie.flags |= 1024),
      a
    );
  }
  function vd() {
    var e = Uo !== 0;
    return (Uo = 0), e;
  }
  function bd(e, a, i) {
    (a.updateQueue = e.updateQueue), (a.flags &= -2053), (e.lanes &= ~i);
  }
  function xd(e) {
    if (Mo) {
      for (e = e.memoizedState; e !== null; ) {
        var a = e.queue;
        a !== null && (a.pending = null), (e = e.next);
      }
      Mo = !1;
    }
    (Da = 0), (Ut = lt = Ie = null), ($i = !1), (Xs = Uo = 0), (Xi = null);
  }
  function en() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ut === null ? (Ie.memoizedState = Ut = e) : (Ut = Ut.next = e), Ut;
  }
  function jt() {
    if (lt === null) {
      var e = Ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = lt.next;
    var a = Ut === null ? Ie.memoizedState : Ut.next;
    if (a !== null) (Ut = a), (lt = e);
    else {
      if (e === null)
        throw Ie.alternate === null ? Error(s(467)) : Error(s(310));
      (lt = e),
        (e = {
          memoizedState: lt.memoizedState,
          baseState: lt.baseState,
          baseQueue: lt.baseQueue,
          queue: lt.queue,
          next: null,
        }),
        Ut === null ? (Ie.memoizedState = Ut = e) : (Ut = Ut.next = e);
    }
    return Ut;
  }
  function Lo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Zs(e) {
    var a = Xs;
    return (
      (Xs += 1),
      Xi === null && (Xi = []),
      (e = up(Xi, e, a)),
      (a = Ie),
      (Ut === null ? a.memoizedState : Ut.next) === null &&
        ((a = a.alternate),
        (k.H = a === null || a.memoizedState === null ? eg : Dd)),
      e
    );
  }
  function zo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Zs(e);
      if (e.$$typeof === Y) return Kt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Sd(e) {
    var a = null,
      i = Ie.updateQueue;
    if ((i !== null && (a = i.memoCache), a == null)) {
      var l = Ie.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (a = {
              data: l.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (a == null && (a = { data: [], index: 0 }),
      i === null && ((i = Lo()), (Ie.updateQueue = i)),
      (i.memoCache = a),
      (i = a.data[a.index]),
      i === void 0)
    )
      for (i = a.data[a.index] = Array(e), l = 0; l < e; l++) i[l] = Re;
    return a.index++, i;
  }
  function Ma(e, a) {
    return typeof a == "function" ? a(e) : a;
  }
  function ko(e) {
    var a = jt();
    return Ed(a, lt, e);
  }
  function Ed(e, a, i) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = i;
    var c = e.baseQueue,
      f = l.pending;
    if (f !== null) {
      if (c !== null) {
        var y = c.next;
        (c.next = f.next), (f.next = y);
      }
      (a.baseQueue = c = f), (l.pending = null);
    }
    if (((f = e.baseState), c === null)) e.memoizedState = f;
    else {
      a = c.next;
      var S = (y = null),
        A = null,
        B = a,
        K = !1;
      do {
        var X = B.lane & -536870913;
        if (X !== B.lane ? (Ke & X) === X : (Da & X) === X) {
          var P = B.revertLane;
          if (P === 0)
            A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: B.action,
                  hasEagerState: B.hasEagerState,
                  eagerState: B.eagerState,
                  next: null,
                }),
              X === Fi && (K = !0);
          else if ((Da & P) === P) {
            (B = B.next), P === Fi && (K = !0);
            continue;
          } else
            (X = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null,
            }),
              A === null ? ((S = A = X), (y = f)) : (A = A.next = X),
              (Ie.lanes |= P),
              (vr |= P);
          (X = B.action),
            ci && i(f, X),
            (f = B.hasEagerState ? B.eagerState : i(f, X));
        } else
          (P = {
            lane: X,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null,
          }),
            A === null ? ((S = A = P), (y = f)) : (A = A.next = P),
            (Ie.lanes |= X),
            (vr |= X);
        B = B.next;
      } while (B !== null && B !== a);
      if (
        (A === null ? (y = f) : (A.next = S),
        !En(f, e.memoizedState) && ((Lt = !0), K && ((i = Gi), i !== null)))
      )
        throw i;
      (e.memoizedState = f),
        (e.baseState = y),
        (e.baseQueue = A),
        (l.lastRenderedState = f);
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function wd(e) {
    var a = jt(),
      i = a.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var l = i.dispatch,
      c = i.pending,
      f = a.memoizedState;
    if (c !== null) {
      i.pending = null;
      var y = (c = c.next);
      do (f = e(f, y.action)), (y = y.next);
      while (y !== c);
      En(f, a.memoizedState) || (Lt = !0),
        (a.memoizedState = f),
        a.baseQueue === null && (a.baseState = f),
        (i.lastRenderedState = f);
    }
    return [f, l];
  }
  function xp(e, a, i) {
    var l = Ie,
      c = jt(),
      f = Ze;
    if (f) {
      if (i === void 0) throw Error(s(407));
      i = i();
    } else i = a();
    var y = !En((lt || c).memoizedState, i);
    if (
      (y && ((c.memoizedState = i), (Lt = !0)),
      (c = c.queue),
      Rd(wp.bind(null, l, c, e), [e]),
      c.getSnapshot !== a || y || (Ut !== null && Ut.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Zi(9, { destroy: void 0 }, Ep.bind(null, l, c, i, a), null),
        ht === null)
      )
        throw Error(s(349));
      f || (Da & 127) !== 0 || Sp(l, a, i);
    }
    return i;
  }
  function Sp(e, a, i) {
    (e.flags |= 16384),
      (e = { getSnapshot: a, value: i }),
      (a = Ie.updateQueue),
      a === null
        ? ((a = Lo()), (Ie.updateQueue = a), (a.stores = [e]))
        : ((i = a.stores), i === null ? (a.stores = [e]) : i.push(e));
  }
  function Ep(e, a, i, l) {
    (a.value = i), (a.getSnapshot = l), _p(a) && Tp(e);
  }
  function wp(e, a, i) {
    return i(function () {
      _p(a) && Tp(e);
    });
  }
  function _p(e) {
    var a = e.getSnapshot;
    e = e.value;
    try {
      var i = a();
      return !En(e, i);
    } catch {
      return !0;
    }
  }
  function Tp(e) {
    var a = ti(e, 2);
    a !== null && fn(a, e, 2);
  }
  function _d(e) {
    var a = en();
    if (typeof e == "function") {
      var i = e;
      if (((e = i()), ci)) {
        vn(!0);
        try {
          i();
        } finally {
          vn(!1);
        }
      }
    }
    return (
      (a.memoizedState = a.baseState = e),
      (a.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ma,
        lastRenderedState: e,
      }),
      a
    );
  }
  function Rp(e, a, i, l) {
    return (e.baseState = i), Ed(e, lt, typeof l == "function" ? l : Ma);
  }
  function U2(e, a, i, l, c) {
    if (Ho(e)) throw Error(s(485));
    if (((e = a.action), e !== null)) {
      var f = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          f.listeners.push(y);
        },
      };
      k.T !== null ? i(!0) : (f.isTransition = !1),
        l(f),
        (i = a.pending),
        i === null
          ? ((f.next = a.pending = f), Ap(a, f))
          : ((f.next = i.next), (a.pending = i.next = f));
    }
  }
  function Ap(e, a) {
    var i = a.action,
      l = a.payload,
      c = e.state;
    if (a.isTransition) {
      var f = k.T,
        y = {};
      k.T = y;
      try {
        var S = i(c, l),
          A = k.S;
        A !== null && A(y, S), Cp(e, a, S);
      } catch (B) {
        Td(e, a, B);
      } finally {
        f !== null && y.types !== null && (f.types = y.types), (k.T = f);
      }
    } else
      try {
        (f = i(c, l)), Cp(e, a, f);
      } catch (B) {
        Td(e, a, B);
      }
  }
  function Cp(e, a, i) {
    i !== null && typeof i == "object" && typeof i.then == "function"
      ? i.then(
          function (l) {
            Np(e, a, l);
          },
          function (l) {
            return Td(e, a, l);
          }
        )
      : Np(e, a, i);
  }
  function Np(e, a, i) {
    (a.status = "fulfilled"),
      (a.value = i),
      Op(a),
      (e.state = i),
      (a = e.pending),
      a !== null &&
        ((i = a.next),
        i === a ? (e.pending = null) : ((i = i.next), (a.next = i), Ap(e, i)));
  }
  function Td(e, a, i) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (a.status = "rejected"), (a.reason = i), Op(a), (a = a.next);
      while (a !== l);
    }
    e.action = null;
  }
  function Op(e) {
    e = e.listeners;
    for (var a = 0; a < e.length; a++) (0, e[a])();
  }
  function jp(e, a) {
    return a;
  }
  function Dp(e, a) {
    if (Ze) {
      var i = ht.formState;
      if (i !== null) {
        e: {
          var l = Ie;
          if (Ze) {
            if (yt) {
              t: {
                for (var c = yt, f = qn; c.nodeType !== 8; ) {
                  if (!f) {
                    c = null;
                    break t;
                  }
                  if (((c = Fn(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (f = c.data), (c = f === "F!" || f === "F" ? c : null);
              }
              if (c) {
                (yt = Fn(c.nextSibling)), (l = c.data === "F!");
                break e;
              }
            }
            ur(l);
          }
          l = !1;
        }
        l && (a = i[0]);
      }
    }
    return (
      (i = en()),
      (i.memoizedState = i.baseState = a),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jp,
        lastRenderedState: a,
      }),
      (i.queue = l),
      (i = Zp.bind(null, Ie, l)),
      (l.dispatch = i),
      (l = _d(!1)),
      (f = jd.bind(null, Ie, !1, l.queue)),
      (l = en()),
      (c = { state: a, dispatch: null, action: e, pending: null }),
      (l.queue = c),
      (i = U2.bind(null, Ie, c, f, i)),
      (c.dispatch = i),
      (l.memoizedState = e),
      [a, i, !1]
    );
  }
  function Mp(e) {
    var a = jt();
    return Up(a, lt, e);
  }
  function Up(e, a, i) {
    if (
      ((a = Ed(e, a, jp)[0]),
      (e = ko(Ma)[0]),
      typeof a == "object" && a !== null && typeof a.then == "function")
    )
      try {
        var l = Zs(a);
      } catch (y) {
        throw y === Yi ? Ao : y;
      }
    else l = a;
    a = jt();
    var c = a.queue,
      f = c.dispatch;
    return (
      i !== a.memoizedState &&
        ((Ie.flags |= 2048),
        Zi(9, { destroy: void 0 }, L2.bind(null, c, i), null)),
      [l, f, e]
    );
  }
  function L2(e, a) {
    e.action = a;
  }
  function Lp(e) {
    var a = jt(),
      i = lt;
    if (i !== null) return Up(a, i, e);
    jt(), (a = a.memoizedState), (i = jt());
    var l = i.queue.dispatch;
    return (i.memoizedState = e), [a, l, !1];
  }
  function Zi(e, a, i, l) {
    return (
      (e = { tag: e, create: i, deps: l, inst: a, next: null }),
      (a = Ie.updateQueue),
      a === null && ((a = Lo()), (Ie.updateQueue = a)),
      (i = a.lastEffect),
      i === null
        ? (a.lastEffect = e.next = e)
        : ((l = i.next), (i.next = e), (e.next = l), (a.lastEffect = e)),
      e
    );
  }
  function zp() {
    return jt().memoizedState;
  }
  function Io(e, a, i, l) {
    var c = en();
    (Ie.flags |= e),
      (c.memoizedState = Zi(
        1 | a,
        { destroy: void 0 },
        i,
        l === void 0 ? null : l
      ));
  }
  function Bo(e, a, i, l) {
    var c = jt();
    l = l === void 0 ? null : l;
    var f = c.memoizedState.inst;
    lt !== null && l !== null && gd(l, lt.memoizedState.deps)
      ? (c.memoizedState = Zi(a, f, i, l))
      : ((Ie.flags |= e), (c.memoizedState = Zi(1 | a, f, i, l)));
  }
  function kp(e, a) {
    Io(8390656, 8, e, a);
  }
  function Rd(e, a) {
    Bo(2048, 8, e, a);
  }
  function z2(e) {
    Ie.flags |= 4;
    var a = Ie.updateQueue;
    if (a === null) (a = Lo()), (Ie.updateQueue = a), (a.events = [e]);
    else {
      var i = a.events;
      i === null ? (a.events = [e]) : i.push(e);
    }
  }
  function Ip(e) {
    var a = jt().memoizedState;
    return (
      z2({ ref: a, nextImpl: e }),
      function () {
        if ((at & 2) !== 0) throw Error(s(440));
        return a.impl.apply(void 0, arguments);
      }
    );
  }
  function Bp(e, a) {
    return Bo(4, 2, e, a);
  }
  function Hp(e, a) {
    return Bo(4, 4, e, a);
  }
  function Pp(e, a) {
    if (typeof a == "function") {
      e = e();
      var i = a(e);
      return function () {
        typeof i == "function" ? i() : a(null);
      };
    }
    if (a != null)
      return (
        (e = e()),
        (a.current = e),
        function () {
          a.current = null;
        }
      );
  }
  function qp(e, a, i) {
    (i = i != null ? i.concat([e]) : null), Bo(4, 4, Pp.bind(null, a, e), i);
  }
  function Ad() {}
  function Vp(e, a) {
    var i = jt();
    a = a === void 0 ? null : a;
    var l = i.memoizedState;
    return a !== null && gd(a, l[1]) ? l[0] : ((i.memoizedState = [e, a]), e);
  }
  function Fp(e, a) {
    var i = jt();
    a = a === void 0 ? null : a;
    var l = i.memoizedState;
    if (a !== null && gd(a, l[1])) return l[0];
    if (((l = e()), ci)) {
      vn(!0);
      try {
        e();
      } finally {
        vn(!1);
      }
    }
    return (i.memoizedState = [l, a]), l;
  }
  function Cd(e, a, i) {
    return i === void 0 || ((Da & 1073741824) !== 0 && (Ke & 261930) === 0)
      ? (e.memoizedState = a)
      : ((e.memoizedState = i), (e = Gg()), (Ie.lanes |= e), (vr |= e), i);
  }
  function Gp(e, a, i, l) {
    return En(i, a)
      ? i
      : Ki.current !== null
      ? ((e = Cd(e, i, l)), En(e, a) || (Lt = !0), e)
      : (Da & 42) === 0 || ((Da & 1073741824) !== 0 && (Ke & 261930) === 0)
      ? ((Lt = !0), (e.memoizedState = i))
      : ((e = Gg()), (Ie.lanes |= e), (vr |= e), a);
  }
  function Yp(e, a, i, l, c) {
    var f = J.p;
    J.p = f !== 0 && 8 > f ? f : 8;
    var y = k.T,
      S = {};
    (k.T = S), jd(e, !1, a, i);
    try {
      var A = c(),
        B = k.S;
      if (
        (B !== null && B(S, A),
        A !== null && typeof A == "object" && typeof A.then == "function")
      ) {
        var K = j2(A, l);
        Js(e, a, K, Cn(e));
      } else Js(e, a, l, Cn(e));
    } catch (X) {
      Js(e, a, { then: function () {}, status: "rejected", reason: X }, Cn());
    } finally {
      (J.p = f),
        y !== null && S.types !== null && (y.types = S.types),
        (k.T = y);
    }
  }
  function k2() {}
  function Nd(e, a, i, l) {
    if (e.tag !== 5) throw Error(s(476));
    var c = Qp(e).queue;
    Yp(
      e,
      c,
      a,
      re,
      i === null
        ? k2
        : function () {
            return Kp(e), i(l);
          }
    );
  }
  function Qp(e) {
    var a = e.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: re,
      baseState: re,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ma,
        lastRenderedState: re,
      },
      next: null,
    };
    var i = {};
    return (
      (a.next = {
        memoizedState: i,
        baseState: i,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ma,
          lastRenderedState: i,
        },
        next: null,
      }),
      (e.memoizedState = a),
      (e = e.alternate),
      e !== null && (e.memoizedState = a),
      a
    );
  }
  function Kp(e) {
    var a = Qp(e);
    a.next === null && (a = e.alternate.memoizedState),
      Js(e, a.next.queue, {}, Cn());
  }
  function Od() {
    return Kt(pl);
  }
  function $p() {
    return jt().memoizedState;
  }
  function Xp() {
    return jt().memoizedState;
  }
  function I2(e) {
    for (var a = e.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var i = Cn();
          e = fr(i);
          var l = hr(a, e, i);
          l !== null && (fn(l, a, i), Qs(l, a, i)),
            (a = { cache: id() }),
            (e.payload = a);
          return;
      }
      a = a.return;
    }
  }
  function B2(e, a, i) {
    var l = Cn();
    (i = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ho(e)
        ? Jp(a, i)
        : ((i = Kc(e, a, i, l)), i !== null && (fn(i, e, l), Wp(i, a, l)));
  }
  function Zp(e, a, i) {
    var l = Cn();
    Js(e, a, i, l);
  }
  function Js(e, a, i, l) {
    var c = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ho(e)) Jp(a, c);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = a.lastRenderedReducer), f !== null)
      )
        try {
          var y = a.lastRenderedState,
            S = f(y, i);
          if (((c.hasEagerState = !0), (c.eagerState = S), En(S, y)))
            return xo(e, a, c, 0), ht === null && bo(), !1;
        } catch {
        } finally {
        }
      if (((i = Kc(e, a, c, l)), i !== null))
        return fn(i, e, l), Wp(i, a, l), !0;
    }
    return !1;
  }
  function jd(e, a, i, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: cf(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ho(e))
    ) {
      if (a) throw Error(s(479));
    } else (a = Kc(e, i, l, 2)), a !== null && fn(a, e, 2);
  }
  function Ho(e) {
    var a = e.alternate;
    return e === Ie || (a !== null && a === Ie);
  }
  function Jp(e, a) {
    $i = Mo = !0;
    var i = e.pending;
    i === null ? (a.next = a) : ((a.next = i.next), (i.next = a)),
      (e.pending = a);
  }
  function Wp(e, a, i) {
    if ((i & 4194048) !== 0) {
      var l = a.lanes;
      (l &= e.pendingLanes), (i |= l), (a.lanes = i), C(e, i);
    }
  }
  var Ws = {
    readContext: Kt,
    use: zo,
    useCallback: At,
    useContext: At,
    useEffect: At,
    useImperativeHandle: At,
    useLayoutEffect: At,
    useInsertionEffect: At,
    useMemo: At,
    useReducer: At,
    useRef: At,
    useState: At,
    useDebugValue: At,
    useDeferredValue: At,
    useTransition: At,
    useSyncExternalStore: At,
    useId: At,
    useHostTransitionStatus: At,
    useFormState: At,
    useActionState: At,
    useOptimistic: At,
    useMemoCache: At,
    useCacheRefresh: At,
  };
  Ws.useEffectEvent = At;
  var eg = {
      readContext: Kt,
      use: zo,
      useCallback: function (e, a) {
        return (en().memoizedState = [e, a === void 0 ? null : a]), e;
      },
      useContext: Kt,
      useEffect: kp,
      useImperativeHandle: function (e, a, i) {
        (i = i != null ? i.concat([e]) : null),
          Io(4194308, 4, Pp.bind(null, a, e), i);
      },
      useLayoutEffect: function (e, a) {
        return Io(4194308, 4, e, a);
      },
      useInsertionEffect: function (e, a) {
        Io(4, 2, e, a);
      },
      useMemo: function (e, a) {
        var i = en();
        a = a === void 0 ? null : a;
        var l = e();
        if (ci) {
          vn(!0);
          try {
            e();
          } finally {
            vn(!1);
          }
        }
        return (i.memoizedState = [l, a]), l;
      },
      useReducer: function (e, a, i) {
        var l = en();
        if (i !== void 0) {
          var c = i(a);
          if (ci) {
            vn(!0);
            try {
              i(a);
            } finally {
              vn(!1);
            }
          }
        } else c = a;
        return (
          (l.memoizedState = l.baseState = c),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: c,
          }),
          (l.queue = e),
          (e = e.dispatch = B2.bind(null, Ie, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var a = en();
        return (e = { current: e }), (a.memoizedState = e);
      },
      useState: function (e) {
        e = _d(e);
        var a = e.queue,
          i = Zp.bind(null, Ie, a);
        return (a.dispatch = i), [e.memoizedState, i];
      },
      useDebugValue: Ad,
      useDeferredValue: function (e, a) {
        var i = en();
        return Cd(i, e, a);
      },
      useTransition: function () {
        var e = _d(!1);
        return (
          (e = Yp.bind(null, Ie, e.queue, !0, !1)),
          (en().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, a, i) {
        var l = Ie,
          c = en();
        if (Ze) {
          if (i === void 0) throw Error(s(407));
          i = i();
        } else {
          if (((i = a()), ht === null)) throw Error(s(349));
          (Ke & 127) !== 0 || Sp(l, a, i);
        }
        c.memoizedState = i;
        var f = { value: i, getSnapshot: a };
        return (
          (c.queue = f),
          kp(wp.bind(null, l, f, e), [e]),
          (l.flags |= 2048),
          Zi(9, { destroy: void 0 }, Ep.bind(null, l, f, i, a), null),
          i
        );
      },
      useId: function () {
        var e = en(),
          a = ht.identifierPrefix;
        if (Ze) {
          var i = ha,
            l = fa;
          (i = (l & ~(1 << (32 - Bt(l) - 1))).toString(32) + i),
            (a = "_" + a + "R_" + i),
            (i = Uo++),
            0 < i && (a += "H" + i.toString(32)),
            (a += "_");
        } else (i = D2++), (a = "_" + a + "r_" + i.toString(32) + "_");
        return (e.memoizedState = a);
      },
      useHostTransitionStatus: Od,
      useFormState: Dp,
      useActionState: Dp,
      useOptimistic: function (e) {
        var a = en();
        a.memoizedState = a.baseState = e;
        var i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (a.queue = i),
          (a = jd.bind(null, Ie, !0, i)),
          (i.dispatch = a),
          [e, a]
        );
      },
      useMemoCache: Sd,
      useCacheRefresh: function () {
        return (en().memoizedState = I2.bind(null, Ie));
      },
      useEffectEvent: function (e) {
        var a = en(),
          i = { impl: e };
        return (
          (a.memoizedState = i),
          function () {
            if ((at & 2) !== 0) throw Error(s(440));
            return i.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Dd = {
      readContext: Kt,
      use: zo,
      useCallback: Vp,
      useContext: Kt,
      useEffect: Rd,
      useImperativeHandle: qp,
      useInsertionEffect: Bp,
      useLayoutEffect: Hp,
      useMemo: Fp,
      useReducer: ko,
      useRef: zp,
      useState: function () {
        return ko(Ma);
      },
      useDebugValue: Ad,
      useDeferredValue: function (e, a) {
        var i = jt();
        return Gp(i, lt.memoizedState, e, a);
      },
      useTransition: function () {
        var e = ko(Ma)[0],
          a = jt().memoizedState;
        return [typeof e == "boolean" ? e : Zs(e), a];
      },
      useSyncExternalStore: xp,
      useId: $p,
      useHostTransitionStatus: Od,
      useFormState: Mp,
      useActionState: Mp,
      useOptimistic: function (e, a) {
        var i = jt();
        return Rp(i, lt, e, a);
      },
      useMemoCache: Sd,
      useCacheRefresh: Xp,
    };
  Dd.useEffectEvent = Ip;
  var tg = {
    readContext: Kt,
    use: zo,
    useCallback: Vp,
    useContext: Kt,
    useEffect: Rd,
    useImperativeHandle: qp,
    useInsertionEffect: Bp,
    useLayoutEffect: Hp,
    useMemo: Fp,
    useReducer: wd,
    useRef: zp,
    useState: function () {
      return wd(Ma);
    },
    useDebugValue: Ad,
    useDeferredValue: function (e, a) {
      var i = jt();
      return lt === null ? Cd(i, e, a) : Gp(i, lt.memoizedState, e, a);
    },
    useTransition: function () {
      var e = wd(Ma)[0],
        a = jt().memoizedState;
      return [typeof e == "boolean" ? e : Zs(e), a];
    },
    useSyncExternalStore: xp,
    useId: $p,
    useHostTransitionStatus: Od,
    useFormState: Lp,
    useActionState: Lp,
    useOptimistic: function (e, a) {
      var i = jt();
      return lt !== null
        ? Rp(i, lt, e, a)
        : ((i.baseState = e), [e, i.queue.dispatch]);
    },
    useMemoCache: Sd,
    useCacheRefresh: Xp,
  };
  tg.useEffectEvent = Ip;
  function Md(e, a, i, l) {
    (a = e.memoizedState),
      (i = i(l, a)),
      (i = i == null ? a : b({}, a, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Ud = {
    enqueueSetState: function (e, a, i) {
      e = e._reactInternals;
      var l = Cn(),
        c = fr(l);
      (c.payload = a),
        i != null && (c.callback = i),
        (a = hr(e, c, l)),
        a !== null && (fn(a, e, l), Qs(a, e, l));
    },
    enqueueReplaceState: function (e, a, i) {
      e = e._reactInternals;
      var l = Cn(),
        c = fr(l);
      (c.tag = 1),
        (c.payload = a),
        i != null && (c.callback = i),
        (a = hr(e, c, l)),
        a !== null && (fn(a, e, l), Qs(a, e, l));
    },
    enqueueForceUpdate: function (e, a) {
      e = e._reactInternals;
      var i = Cn(),
        l = fr(i);
      (l.tag = 2),
        a != null && (l.callback = a),
        (a = hr(e, l, i)),
        a !== null && (fn(a, e, i), Qs(a, e, i));
    },
  };
  function ng(e, a, i, l, c, f, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, f, y)
        : a.prototype && a.prototype.isPureReactComponent
        ? !Bs(i, l) || !Bs(c, f)
        : !0
    );
  }
  function ag(e, a, i, l) {
    (e = a.state),
      typeof a.componentWillReceiveProps == "function" &&
        a.componentWillReceiveProps(i, l),
      typeof a.UNSAFE_componentWillReceiveProps == "function" &&
        a.UNSAFE_componentWillReceiveProps(i, l),
      a.state !== e && Ud.enqueueReplaceState(a, a.state, null);
  }
  function di(e, a) {
    var i = a;
    if ("ref" in a) {
      i = {};
      for (var l in a) l !== "ref" && (i[l] = a[l]);
    }
    if ((e = e.defaultProps)) {
      i === a && (i = b({}, i));
      for (var c in e) i[c] === void 0 && (i[c] = e[c]);
    }
    return i;
  }
  function rg(e) {
    vo(e);
  }
  function ig(e) {
    console.error(e);
  }
  function sg(e) {
    vo(e);
  }
  function Po(e, a) {
    try {
      var i = e.onUncaughtError;
      i(a.value, { componentStack: a.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function lg(e, a, i) {
    try {
      var l = e.onCaughtError;
      l(i.value, {
        componentStack: i.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function Ld(e, a, i) {
    return (
      (i = fr(i)),
      (i.tag = 3),
      (i.payload = { element: null }),
      (i.callback = function () {
        Po(e, a);
      }),
      i
    );
  }
  function og(e) {
    return (e = fr(e)), (e.tag = 3), e;
  }
  function ug(e, a, i, l) {
    var c = i.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var f = l.value;
      (e.payload = function () {
        return c(f);
      }),
        (e.callback = function () {
          lg(a, i, l);
        });
    }
    var y = i.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (e.callback = function () {
        lg(a, i, l),
          typeof c != "function" &&
            (br === null ? (br = new Set([this])) : br.add(this));
        var S = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: S !== null ? S : "",
        });
      });
  }
  function H2(e, a, i, l, c) {
    if (
      ((i.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((a = i.alternate),
        a !== null && Vi(a, i, c, !0),
        (i = _n.current),
        i !== null)
      ) {
        switch (i.tag) {
          case 31:
          case 13:
            return (
              Vn === null ? Wo() : i.alternate === null && Ct === 0 && (Ct = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = c),
              l === Co
                ? (i.flags |= 16384)
                : ((a = i.updateQueue),
                  a === null ? (i.updateQueue = new Set([l])) : a.add(l),
                  lf(e, l, c)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              l === Co
                ? (i.flags |= 16384)
                : ((a = i.updateQueue),
                  a === null
                    ? ((a = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (i.updateQueue = a))
                    : ((i = a.retryQueue),
                      i === null ? (a.retryQueue = new Set([l])) : i.add(l)),
                  lf(e, l, c)),
              !1
            );
        }
        throw Error(s(435, i.tag));
      }
      return lf(e, l, c), Wo(), !1;
    }
    if (Ze)
      return (
        (a = _n.current),
        a !== null
          ? ((a.flags & 65536) === 0 && (a.flags |= 256),
            (a.flags |= 65536),
            (a.lanes = c),
            l !== ed && ((e = Error(s(422), { cause: l })), qs(Bn(e, i))))
          : (l !== ed && ((a = Error(s(423), { cause: l })), qs(Bn(a, i))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (l = Bn(l, i)),
            (c = Ld(e.stateNode, l, c)),
            dd(e, c),
            Ct !== 4 && (Ct = 2)),
        !1
      );
    var f = Error(s(520), { cause: l });
    if (
      ((f = Bn(f, i)),
      ll === null ? (ll = [f]) : ll.push(f),
      Ct !== 4 && (Ct = 2),
      a === null)
    )
      return !0;
    (l = Bn(l, i)), (i = a);
    do {
      switch (i.tag) {
        case 3:
          return (
            (i.flags |= 65536),
            (e = c & -c),
            (i.lanes |= e),
            (e = Ld(i.stateNode, l, e)),
            dd(i, e),
            !1
          );
        case 1:
          if (
            ((a = i.type),
            (f = i.stateNode),
            (i.flags & 128) === 0 &&
              (typeof a.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  (br === null || !br.has(f)))))
          )
            return (
              (i.flags |= 65536),
              (c &= -c),
              (i.lanes |= c),
              (c = og(c)),
              ug(c, e, i, l),
              dd(i, c),
              !1
            );
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var zd = Error(s(461)),
    Lt = !1;
  function $t(e, a, i, l) {
    a.child = e === null ? hp(a, null, i, l) : ui(a, e.child, i, l);
  }
  function cg(e, a, i, l, c) {
    i = i.render;
    var f = a.ref;
    if ("ref" in l) {
      var y = {};
      for (var S in l) S !== "ref" && (y[S] = l[S]);
    } else y = l;
    return (
      ii(a),
      (l = yd(e, a, i, y, f, c)),
      (S = vd()),
      e !== null && !Lt
        ? (bd(e, a, c), Ua(e, a, c))
        : (Ze && S && Jc(a), (a.flags |= 1), $t(e, a, l, c), a.child)
    );
  }
  function dg(e, a, i, l, c) {
    if (e === null) {
      var f = i.type;
      return typeof f == "function" &&
        !$c(f) &&
        f.defaultProps === void 0 &&
        i.compare === null
        ? ((a.tag = 15), (a.type = f), fg(e, a, f, l, c))
        : ((e = Eo(i.type, null, l, a, a.mode, c)),
          (e.ref = a.ref),
          (e.return = a),
          (a.child = e));
    }
    if (((f = e.child), !Fd(e, c))) {
      var y = f.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : Bs), i(y, l) && e.ref === a.ref)
      )
        return Ua(e, a, c);
    }
    return (
      (a.flags |= 1),
      (e = Ca(f, l)),
      (e.ref = a.ref),
      (e.return = a),
      (a.child = e)
    );
  }
  function fg(e, a, i, l, c) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Bs(f, l) && e.ref === a.ref)
        if (((Lt = !1), (a.pendingProps = l = f), Fd(e, c)))
          (e.flags & 131072) !== 0 && (Lt = !0);
        else return (a.lanes = e.lanes), Ua(e, a, c);
    }
    return kd(e, a, i, l, c);
  }
  function hg(e, a, i, l) {
    var c = l.children,
      f = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        a.stateNode === null &&
        (a.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((a.flags & 128) !== 0) {
        if (((f = f !== null ? f.baseLanes | i : i), e !== null)) {
          for (l = a.child = e.child, c = 0; l !== null; )
            (c = c | l.lanes | l.childLanes), (l = l.sibling);
          l = c & ~f;
        } else (l = 0), (a.child = null);
        return mg(e, a, f, i, l);
      }
      if ((i & 536870912) !== 0)
        (a.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ro(a, f !== null ? f.cachePool : null),
          f !== null ? gp(a, f) : hd(),
          yp(a);
      else
        return (
          (l = a.lanes = 536870912),
          mg(e, a, f !== null ? f.baseLanes | i : i, i, l)
        );
    } else
      f !== null
        ? (Ro(a, f.cachePool), gp(a, f), pr(), (a.memoizedState = null))
        : (e !== null && Ro(a, null), hd(), pr());
    return $t(e, a, c, i), a.child;
  }
  function el(e, a) {
    return (
      (e !== null && e.tag === 22) ||
        a.stateNode !== null ||
        (a.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.sibling
    );
  }
  function mg(e, a, i, l, c) {
    var f = ld();
    return (
      (f = f === null ? null : { parent: Mt._currentValue, pool: f }),
      (a.memoizedState = { baseLanes: i, cachePool: f }),
      e !== null && Ro(a, null),
      hd(),
      yp(a),
      e !== null && Vi(e, a, l, !0),
      (a.childLanes = c),
      null
    );
  }
  function qo(e, a) {
    return (
      (a = Fo({ mode: a.mode, children: a.children }, e.mode)),
      (a.ref = e.ref),
      (e.child = a),
      (a.return = e),
      a
    );
  }
  function pg(e, a, i) {
    return (
      ui(a, e.child, null, i),
      (e = qo(a, a.pendingProps)),
      (e.flags |= 2),
      Tn(a),
      (a.memoizedState = null),
      e
    );
  }
  function P2(e, a, i) {
    var l = a.pendingProps,
      c = (a.flags & 128) !== 0;
    if (((a.flags &= -129), e === null)) {
      if (Ze) {
        if (l.mode === "hidden")
          return (e = qo(a, l)), (a.lanes = 536870912), el(null, e);
        if (
          (pd(a),
          (e = yt)
            ? ((e = Ay(e, qn)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((a.memoizedState = {
                  dehydrated: e,
                  treeContext: lr !== null ? { id: fa, overflow: ha } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = Jm(e)),
                (i.return = a),
                (a.child = i),
                (Qt = a),
                (yt = null)))
            : (e = null),
          e === null)
        )
          throw ur(a);
        return (a.lanes = 536870912), null;
      }
      return qo(a, l);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var y = f.dehydrated;
      if ((pd(a), c))
        if (a.flags & 256) (a.flags &= -257), (a = pg(e, a, i));
        else if (a.memoizedState !== null)
          (a.child = e.child), (a.flags |= 128), (a = null);
        else throw Error(s(558));
      else if (
        (Lt || Vi(e, a, i, !1), (c = (i & e.childLanes) !== 0), Lt || c)
      ) {
        if (
          ((l = ht),
          l !== null && ((y = L(l, i)), y !== 0 && y !== f.retryLane))
        )
          throw ((f.retryLane = y), ti(e, y), fn(l, e, y), zd);
        Wo(), (a = pg(e, a, i));
      } else
        (e = f.treeContext),
          (yt = Fn(y.nextSibling)),
          (Qt = a),
          (Ze = !0),
          (or = null),
          (qn = !1),
          e !== null && tp(a, e),
          (a = qo(a, l)),
          (a.flags |= 4096);
      return a;
    }
    return (
      (e = Ca(e.child, { mode: l.mode, children: l.children })),
      (e.ref = a.ref),
      (a.child = e),
      (e.return = a),
      e
    );
  }
  function Vo(e, a) {
    var i = a.ref;
    if (i === null) e !== null && e.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object") throw Error(s(284));
      (e === null || e.ref !== i) && (a.flags |= 4194816);
    }
  }
  function kd(e, a, i, l, c) {
    return (
      ii(a),
      (i = yd(e, a, i, l, void 0, c)),
      (l = vd()),
      e !== null && !Lt
        ? (bd(e, a, c), Ua(e, a, c))
        : (Ze && l && Jc(a), (a.flags |= 1), $t(e, a, i, c), a.child)
    );
  }
  function gg(e, a, i, l, c, f) {
    return (
      ii(a),
      (a.updateQueue = null),
      (i = bp(a, l, i, c)),
      vp(e),
      (l = vd()),
      e !== null && !Lt
        ? (bd(e, a, f), Ua(e, a, f))
        : (Ze && l && Jc(a), (a.flags |= 1), $t(e, a, i, f), a.child)
    );
  }
  function yg(e, a, i, l, c) {
    if ((ii(a), a.stateNode === null)) {
      var f = Bi,
        y = i.contextType;
      typeof y == "object" && y !== null && (f = Kt(y)),
        (f = new i(l, f)),
        (a.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = Ud),
        (a.stateNode = f),
        (f._reactInternals = a),
        (f = a.stateNode),
        (f.props = l),
        (f.state = a.memoizedState),
        (f.refs = {}),
        ud(a),
        (y = i.contextType),
        (f.context = typeof y == "object" && y !== null ? Kt(y) : Bi),
        (f.state = a.memoizedState),
        (y = i.getDerivedStateFromProps),
        typeof y == "function" && (Md(a, i, y, l), (f.state = a.memoizedState)),
        typeof i.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((y = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" &&
            f.UNSAFE_componentWillMount(),
          y !== f.state && Ud.enqueueReplaceState(f, f.state, null),
          $s(a, l, f, c),
          Ks(),
          (f.state = a.memoizedState)),
        typeof f.componentDidMount == "function" && (a.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      f = a.stateNode;
      var S = a.memoizedProps,
        A = di(i, S);
      f.props = A;
      var B = f.context,
        K = i.contextType;
      (y = Bi), typeof K == "object" && K !== null && (y = Kt(K));
      var X = i.getDerivedStateFromProps;
      (K =
        typeof X == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function"),
        (S = a.pendingProps !== S),
        K ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((S || B !== y) && ag(a, f, l, y)),
        (dr = !1);
      var P = a.memoizedState;
      (f.state = P),
        $s(a, l, f, c),
        Ks(),
        (B = a.memoizedState),
        S || P !== B || dr
          ? (typeof X == "function" && (Md(a, i, X, l), (B = a.memoizedState)),
            (A = dr || ng(a, i, A, l, P, B, y))
              ? (K ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (a.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (a.flags |= 4194308),
                (a.memoizedProps = l),
                (a.memoizedState = B)),
            (f.props = l),
            (f.state = B),
            (f.context = y),
            (l = A))
          : (typeof f.componentDidMount == "function" && (a.flags |= 4194308),
            (l = !1));
    } else {
      (f = a.stateNode),
        cd(e, a),
        (y = a.memoizedProps),
        (K = di(i, y)),
        (f.props = K),
        (X = a.pendingProps),
        (P = f.context),
        (B = i.contextType),
        (A = Bi),
        typeof B == "object" && B !== null && (A = Kt(B)),
        (S = i.getDerivedStateFromProps),
        (B =
          typeof S == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((y !== X || P !== A) && ag(a, f, l, A)),
        (dr = !1),
        (P = a.memoizedState),
        (f.state = P),
        $s(a, l, f, c),
        Ks();
      var F = a.memoizedState;
      y !== X ||
      P !== F ||
      dr ||
      (e !== null && e.dependencies !== null && _o(e.dependencies))
        ? (typeof S == "function" && (Md(a, i, S, l), (F = a.memoizedState)),
          (K =
            dr ||
            ng(a, i, K, l, P, F, A) ||
            (e !== null && e.dependencies !== null && _o(e.dependencies)))
            ? (B ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(l, F, A),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(l, F, A)),
              typeof f.componentDidUpdate == "function" && (a.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (a.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (y === e.memoizedProps && P === e.memoizedState) ||
                (a.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (y === e.memoizedProps && P === e.memoizedState) ||
                (a.flags |= 1024),
              (a.memoizedProps = l),
              (a.memoizedState = F)),
          (f.props = l),
          (f.state = F),
          (f.context = A),
          (l = K))
        : (typeof f.componentDidUpdate != "function" ||
            (y === e.memoizedProps && P === e.memoizedState) ||
            (a.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (y === e.memoizedProps && P === e.memoizedState) ||
            (a.flags |= 1024),
          (l = !1));
    }
    return (
      (f = l),
      Vo(e, a),
      (l = (a.flags & 128) !== 0),
      f || l
        ? ((f = a.stateNode),
          (i =
            l && typeof i.getDerivedStateFromError != "function"
              ? null
              : f.render()),
          (a.flags |= 1),
          e !== null && l
            ? ((a.child = ui(a, e.child, null, c)),
              (a.child = ui(a, null, i, c)))
            : $t(e, a, i, c),
          (a.memoizedState = f.state),
          (e = a.child))
        : (e = Ua(e, a, c)),
      e
    );
  }
  function vg(e, a, i, l) {
    return ai(), (a.flags |= 256), $t(e, a, i, l), a.child;
  }
  var Id = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Bd(e) {
    return { baseLanes: e, cachePool: lp() };
  }
  function Hd(e, a, i) {
    return (e = e !== null ? e.childLanes & ~i : 0), a && (e |= An), e;
  }
  function bg(e, a, i) {
    var l = a.pendingProps,
      c = !1,
      f = (a.flags & 128) !== 0,
      y;
    if (
      ((y = f) ||
        (y =
          e !== null && e.memoizedState === null ? !1 : (Ot.current & 2) !== 0),
      y && ((c = !0), (a.flags &= -129)),
      (y = (a.flags & 32) !== 0),
      (a.flags &= -33),
      e === null)
    ) {
      if (Ze) {
        if (
          (c ? mr(a) : pr(),
          (e = yt)
            ? ((e = Ay(e, qn)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((a.memoizedState = {
                  dehydrated: e,
                  treeContext: lr !== null ? { id: fa, overflow: ha } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = Jm(e)),
                (i.return = a),
                (a.child = i),
                (Qt = a),
                (yt = null)))
            : (e = null),
          e === null)
        )
          throw ur(a);
        return wf(e) ? (a.lanes = 32) : (a.lanes = 536870912), null;
      }
      var S = l.children;
      return (
        (l = l.fallback),
        c
          ? (pr(),
            (c = a.mode),
            (S = Fo({ mode: "hidden", children: S }, c)),
            (l = ni(l, c, i, null)),
            (S.return = a),
            (l.return = a),
            (S.sibling = l),
            (a.child = S),
            (l = a.child),
            (l.memoizedState = Bd(i)),
            (l.childLanes = Hd(e, y, i)),
            (a.memoizedState = Id),
            el(null, l))
          : (mr(a), Pd(a, S))
      );
    }
    var A = e.memoizedState;
    if (A !== null && ((S = A.dehydrated), S !== null)) {
      if (f)
        a.flags & 256
          ? (mr(a), (a.flags &= -257), (a = qd(e, a, i)))
          : a.memoizedState !== null
          ? (pr(), (a.child = e.child), (a.flags |= 128), (a = null))
          : (pr(),
            (S = l.fallback),
            (c = a.mode),
            (l = Fo({ mode: "visible", children: l.children }, c)),
            (S = ni(S, c, i, null)),
            (S.flags |= 2),
            (l.return = a),
            (S.return = a),
            (l.sibling = S),
            (a.child = l),
            ui(a, e.child, null, i),
            (l = a.child),
            (l.memoizedState = Bd(i)),
            (l.childLanes = Hd(e, y, i)),
            (a.memoizedState = Id),
            (a = el(null, l)));
      else if ((mr(a), wf(S))) {
        if (((y = S.nextSibling && S.nextSibling.dataset), y)) var B = y.dgst;
        (y = B),
          (l = Error(s(419))),
          (l.stack = ""),
          (l.digest = y),
          qs({ value: l, source: null, stack: null }),
          (a = qd(e, a, i));
      } else if (
        (Lt || Vi(e, a, i, !1), (y = (i & e.childLanes) !== 0), Lt || y)
      ) {
        if (
          ((y = ht),
          y !== null && ((l = L(y, i)), l !== 0 && l !== A.retryLane))
        )
          throw ((A.retryLane = l), ti(e, l), fn(y, e, l), zd);
        Ef(S) || Wo(), (a = qd(e, a, i));
      } else
        Ef(S)
          ? ((a.flags |= 192), (a.child = e.child), (a = null))
          : ((e = A.treeContext),
            (yt = Fn(S.nextSibling)),
            (Qt = a),
            (Ze = !0),
            (or = null),
            (qn = !1),
            e !== null && tp(a, e),
            (a = Pd(a, l.children)),
            (a.flags |= 4096));
      return a;
    }
    return c
      ? (pr(),
        (S = l.fallback),
        (c = a.mode),
        (A = e.child),
        (B = A.sibling),
        (l = Ca(A, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = A.subtreeFlags & 65011712),
        B !== null ? (S = Ca(B, S)) : ((S = ni(S, c, i, null)), (S.flags |= 2)),
        (S.return = a),
        (l.return = a),
        (l.sibling = S),
        (a.child = l),
        el(null, l),
        (l = a.child),
        (S = e.child.memoizedState),
        S === null
          ? (S = Bd(i))
          : ((c = S.cachePool),
            c !== null
              ? ((A = Mt._currentValue),
                (c = c.parent !== A ? { parent: A, pool: A } : c))
              : (c = lp()),
            (S = { baseLanes: S.baseLanes | i, cachePool: c })),
        (l.memoizedState = S),
        (l.childLanes = Hd(e, y, i)),
        (a.memoizedState = Id),
        el(e.child, l))
      : (mr(a),
        (i = e.child),
        (e = i.sibling),
        (i = Ca(i, { mode: "visible", children: l.children })),
        (i.return = a),
        (i.sibling = null),
        e !== null &&
          ((y = a.deletions),
          y === null ? ((a.deletions = [e]), (a.flags |= 16)) : y.push(e)),
        (a.child = i),
        (a.memoizedState = null),
        i);
  }
  function Pd(e, a) {
    return (
      (a = Fo({ mode: "visible", children: a }, e.mode)),
      (a.return = e),
      (e.child = a)
    );
  }
  function Fo(e, a) {
    return (e = wn(22, e, null, a)), (e.lanes = 0), e;
  }
  function qd(e, a, i) {
    return (
      ui(a, e.child, null, i),
      (e = Pd(a, a.pendingProps.children)),
      (e.flags |= 2),
      (a.memoizedState = null),
      e
    );
  }
  function xg(e, a, i) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a), ad(e.return, a, i);
  }
  function Vd(e, a, i, l, c, f) {
    var y = e.memoizedState;
    y === null
      ? (e.memoizedState = {
          isBackwards: a,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: i,
          tailMode: c,
          treeForkCount: f,
        })
      : ((y.isBackwards = a),
        (y.rendering = null),
        (y.renderingStartTime = 0),
        (y.last = l),
        (y.tail = i),
        (y.tailMode = c),
        (y.treeForkCount = f));
  }
  function Sg(e, a, i) {
    var l = a.pendingProps,
      c = l.revealOrder,
      f = l.tail;
    l = l.children;
    var y = Ot.current,
      S = (y & 2) !== 0;
    if (
      (S ? ((y = (y & 1) | 2), (a.flags |= 128)) : (y &= 1),
      ae(Ot, y),
      $t(e, a, l, i),
      (l = Ze ? Ps : 0),
      !S && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = a.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xg(e, i, a);
        else if (e.tag === 19) xg(e, i, a);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === a) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === a) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    switch (c) {
      case "forwards":
        for (i = a.child, c = null; i !== null; )
          (e = i.alternate),
            e !== null && Do(e) === null && (c = i),
            (i = i.sibling);
        (i = c),
          i === null
            ? ((c = a.child), (a.child = null))
            : ((c = i.sibling), (i.sibling = null)),
          Vd(a, !1, c, i, f, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (i = null, c = a.child, a.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && Do(e) === null)) {
            a.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = i), (i = c), (c = e);
        }
        Vd(a, !0, i, null, f, l);
        break;
      case "together":
        Vd(a, !1, null, null, void 0, l);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function Ua(e, a, i) {
    if (
      (e !== null && (a.dependencies = e.dependencies),
      (vr |= a.lanes),
      (i & a.childLanes) === 0)
    )
      if (e !== null) {
        if ((Vi(e, a, i, !1), (i & a.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && a.child !== e.child) throw Error(s(153));
    if (a.child !== null) {
      for (
        e = a.child, i = Ca(e, e.pendingProps), a.child = i, i.return = a;
        e.sibling !== null;

      )
        (e = e.sibling),
          (i = i.sibling = Ca(e, e.pendingProps)),
          (i.return = a);
      i.sibling = null;
    }
    return a.child;
  }
  function Fd(e, a) {
    return (e.lanes & a) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && _o(e)));
  }
  function q2(e, a, i) {
    switch (a.tag) {
      case 3:
        bt(a, a.stateNode.containerInfo),
          cr(a, Mt, e.memoizedState.cache),
          ai();
        break;
      case 27:
      case 5:
        Zn(a);
        break;
      case 4:
        bt(a, a.stateNode.containerInfo);
        break;
      case 10:
        cr(a, a.type, a.memoizedProps.value);
        break;
      case 31:
        if (a.memoizedState !== null) return (a.flags |= 128), pd(a), null;
        break;
      case 13:
        var l = a.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (mr(a), (a.flags |= 128), null)
            : (i & a.child.childLanes) !== 0
            ? bg(e, a, i)
            : (mr(a), (e = Ua(e, a, i)), e !== null ? e.sibling : null);
        mr(a);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((l = (i & a.childLanes) !== 0),
          l || (Vi(e, a, i, !1), (l = (i & a.childLanes) !== 0)),
          c)
        ) {
          if (l) return Sg(e, a, i);
          a.flags |= 128;
        }
        if (
          ((c = a.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          ae(Ot, Ot.current),
          l)
        )
          break;
        return null;
      case 22:
        return (a.lanes = 0), hg(e, a, i, a.pendingProps);
      case 24:
        cr(a, Mt, e.memoizedState.cache);
    }
    return Ua(e, a, i);
  }
  function Eg(e, a, i) {
    if (e !== null)
      if (e.memoizedProps !== a.pendingProps) Lt = !0;
      else {
        if (!Fd(e, i) && (a.flags & 128) === 0) return (Lt = !1), q2(e, a, i);
        Lt = (e.flags & 131072) !== 0;
      }
    else (Lt = !1), Ze && (a.flags & 1048576) !== 0 && ep(a, Ps, a.index);
    switch (((a.lanes = 0), a.tag)) {
      case 16:
        e: {
          var l = a.pendingProps;
          if (((e = li(a.elementType)), (a.type = e), typeof e == "function"))
            $c(e)
              ? ((l = di(e, l)), (a.tag = 1), (a = yg(null, a, e, l, i)))
              : ((a.tag = 0), (a = kd(null, a, e, l, i)));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === Z) {
                (a.tag = 11), (a = cg(null, a, e, l, i));
                break e;
              } else if (c === N) {
                (a.tag = 14), (a = dg(null, a, e, l, i));
                break e;
              }
            }
            throw ((a = ye(e) || e), Error(s(306, a, "")));
          }
        }
        return a;
      case 0:
        return kd(e, a, a.type, a.pendingProps, i);
      case 1:
        return (l = a.type), (c = di(l, a.pendingProps)), yg(e, a, l, c, i);
      case 3:
        e: {
          if ((bt(a, a.stateNode.containerInfo), e === null))
            throw Error(s(387));
          l = a.pendingProps;
          var f = a.memoizedState;
          (c = f.element), cd(e, a), $s(a, l, null, i);
          var y = a.memoizedState;
          if (
            ((l = y.cache),
            cr(a, Mt, l),
            l !== f.cache && rd(a, [Mt], i, !0),
            Ks(),
            (l = y.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: l, isDehydrated: !1, cache: y.cache }),
              (a.updateQueue.baseState = f),
              (a.memoizedState = f),
              a.flags & 256)
            ) {
              a = vg(e, a, l, i);
              break e;
            } else if (l !== c) {
              (c = Bn(Error(s(424)), a)), qs(c), (a = vg(e, a, l, i));
              break e;
            } else {
              switch (((e = a.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                yt = Fn(e.firstChild),
                  Qt = a,
                  Ze = !0,
                  or = null,
                  qn = !0,
                  i = hp(a, null, l, i),
                  a.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
            }
          else {
            if ((ai(), l === c)) {
              a = Ua(e, a, i);
              break e;
            }
            $t(e, a, l, i);
          }
          a = a.child;
        }
        return a;
      case 26:
        return (
          Vo(e, a),
          e === null
            ? (i = My(a.type, null, a.pendingProps, null))
              ? (a.memoizedState = i)
              : Ze ||
                ((i = a.type),
                (e = a.pendingProps),
                (l = su(Le.current).createElement(i)),
                (l[se] = a),
                (l[de] = e),
                Xt(l, i, e),
                ft(l),
                (a.stateNode = l))
            : (a.memoizedState = My(
                a.type,
                e.memoizedProps,
                a.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Zn(a),
          e === null &&
            Ze &&
            ((l = a.stateNode = Oy(a.type, a.pendingProps, Le.current)),
            (Qt = a),
            (qn = !0),
            (c = yt),
            wr(a.type) ? ((_f = c), (yt = Fn(l.firstChild))) : (yt = c)),
          $t(e, a, a.pendingProps.children, i),
          Vo(e, a),
          e === null && (a.flags |= 4194304),
          a.child
        );
      case 5:
        return (
          e === null &&
            Ze &&
            ((c = l = yt) &&
              ((l = vS(l, a.type, a.pendingProps, qn)),
              l !== null
                ? ((a.stateNode = l),
                  (Qt = a),
                  (yt = Fn(l.firstChild)),
                  (qn = !1),
                  (c = !0))
                : (c = !1)),
            c || ur(a)),
          Zn(a),
          (c = a.type),
          (f = a.pendingProps),
          (y = e !== null ? e.memoizedProps : null),
          (l = f.children),
          bf(c, f) ? (l = null) : y !== null && bf(c, y) && (a.flags |= 32),
          a.memoizedState !== null &&
            ((c = yd(e, a, M2, null, null, i)), (pl._currentValue = c)),
          Vo(e, a),
          $t(e, a, l, i),
          a.child
        );
      case 6:
        return (
          e === null &&
            Ze &&
            ((e = i = yt) &&
              ((i = bS(i, a.pendingProps, qn)),
              i !== null
                ? ((a.stateNode = i), (Qt = a), (yt = null), (e = !0))
                : (e = !1)),
            e || ur(a)),
          null
        );
      case 13:
        return bg(e, a, i);
      case 4:
        return (
          bt(a, a.stateNode.containerInfo),
          (l = a.pendingProps),
          e === null ? (a.child = ui(a, null, l, i)) : $t(e, a, l, i),
          a.child
        );
      case 11:
        return cg(e, a, a.type, a.pendingProps, i);
      case 7:
        return $t(e, a, a.pendingProps, i), a.child;
      case 8:
        return $t(e, a, a.pendingProps.children, i), a.child;
      case 12:
        return $t(e, a, a.pendingProps.children, i), a.child;
      case 10:
        return (
          (l = a.pendingProps),
          cr(a, a.type, l.value),
          $t(e, a, l.children, i),
          a.child
        );
      case 9:
        return (
          (c = a.type._context),
          (l = a.pendingProps.children),
          ii(a),
          (c = Kt(c)),
          (l = l(c)),
          (a.flags |= 1),
          $t(e, a, l, i),
          a.child
        );
      case 14:
        return dg(e, a, a.type, a.pendingProps, i);
      case 15:
        return fg(e, a, a.type, a.pendingProps, i);
      case 19:
        return Sg(e, a, i);
      case 31:
        return P2(e, a, i);
      case 22:
        return hg(e, a, i, a.pendingProps);
      case 24:
        return (
          ii(a),
          (l = Kt(Mt)),
          e === null
            ? ((c = ld()),
              c === null &&
                ((c = ht),
                (f = id()),
                (c.pooledCache = f),
                f.refCount++,
                f !== null && (c.pooledCacheLanes |= i),
                (c = f)),
              (a.memoizedState = { parent: l, cache: c }),
              ud(a),
              cr(a, Mt, c))
            : ((e.lanes & i) !== 0 && (cd(e, a), $s(a, null, null, i), Ks()),
              (c = e.memoizedState),
              (f = a.memoizedState),
              c.parent !== l
                ? ((c = { parent: l, cache: l }),
                  (a.memoizedState = c),
                  a.lanes === 0 &&
                    (a.memoizedState = a.updateQueue.baseState = c),
                  cr(a, Mt, l))
                : ((l = f.cache),
                  cr(a, Mt, l),
                  l !== c.cache && rd(a, [Mt], i, !0))),
          $t(e, a, a.pendingProps.children, i),
          a.child
        );
      case 29:
        throw a.pendingProps;
    }
    throw Error(s(156, a.tag));
  }
  function La(e) {
    e.flags |= 4;
  }
  function Gd(e, a, i, l, c) {
    if (((a = (e.mode & 32) !== 0) && (a = !1), a)) {
      if (((e.flags |= 16777216), (c & 335544128) === c))
        if (e.stateNode.complete) e.flags |= 8192;
        else if ($g()) e.flags |= 8192;
        else throw ((oi = Co), od);
    } else e.flags &= -16777217;
  }
  function wg(e, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Iy(a)))
      if ($g()) e.flags |= 8192;
      else throw ((oi = Co), od);
  }
  function Go(e, a) {
    a !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((a = e.tag !== 22 ? Xr() : 536870912), (e.lanes |= a), (ts |= a));
  }
  function tl(e, a) {
    if (!Ze)
      switch (e.tailMode) {
        case "hidden":
          a = e.tail;
          for (var i = null; a !== null; )
            a.alternate !== null && (i = a), (a = a.sibling);
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = e.tail;
          for (var l = null; i !== null; )
            i.alternate !== null && (l = i), (i = i.sibling);
          l === null
            ? a || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function vt(e) {
    var a = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      l = 0;
    if (a)
      for (var c = e.child; c !== null; )
        (i |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags & 65011712),
          (l |= c.flags & 65011712),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (i |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags),
          (l |= c.flags),
          (c.return = e),
          (c = c.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = i), a;
  }
  function V2(e, a, i) {
    var l = a.pendingProps;
    switch ((Wc(a), a.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return vt(a), null;
      case 1:
        return vt(a), null;
      case 3:
        return (
          (i = a.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          a.memoizedState.cache !== l && (a.flags |= 2048),
          ja(Mt),
          ct(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (qi(a)
              ? La(a)
              : e === null ||
                (e.memoizedState.isDehydrated && (a.flags & 256) === 0) ||
                ((a.flags |= 1024), td())),
          vt(a),
          null
        );
      case 26:
        var c = a.type,
          f = a.memoizedState;
        return (
          e === null
            ? (La(a),
              f !== null ? (vt(a), wg(a, f)) : (vt(a), Gd(a, c, null, l, i)))
            : f
            ? f !== e.memoizedState
              ? (La(a), vt(a), wg(a, f))
              : (vt(a), (a.flags &= -16777217))
            : ((e = e.memoizedProps),
              e !== l && La(a),
              vt(a),
              Gd(a, c, e, l, i)),
          null
        );
      case 27:
        if (
          (tr(a),
          (i = Le.current),
          (c = a.type),
          e !== null && a.stateNode != null)
        )
          e.memoizedProps !== l && La(a);
        else {
          if (!l) {
            if (a.stateNode === null) throw Error(s(166));
            return vt(a), null;
          }
          (e = le.current),
            qi(a) ? np(a) : ((e = Oy(c, l, i)), (a.stateNode = e), La(a));
        }
        return vt(a), null;
      case 5:
        if ((tr(a), (c = a.type), e !== null && a.stateNode != null))
          e.memoizedProps !== l && La(a);
        else {
          if (!l) {
            if (a.stateNode === null) throw Error(s(166));
            return vt(a), null;
          }
          if (((f = le.current), qi(a))) np(a);
          else {
            var y = su(Le.current);
            switch (f) {
              case 1:
                f = y.createElementNS("http://www.w3.org/2000/svg", c);
                break;
              case 2:
                f = y.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                break;
              default:
                switch (c) {
                  case "svg":
                    f = y.createElementNS("http://www.w3.org/2000/svg", c);
                    break;
                  case "math":
                    f = y.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      c
                    );
                    break;
                  case "script":
                    (f = y.createElement("div")),
                      (f.innerHTML = "<script></script>"),
                      (f = f.removeChild(f.firstChild));
                    break;
                  case "select":
                    (f =
                      typeof l.is == "string"
                        ? y.createElement("select", { is: l.is })
                        : y.createElement("select")),
                      l.multiple
                        ? (f.multiple = !0)
                        : l.size && (f.size = l.size);
                    break;
                  default:
                    f =
                      typeof l.is == "string"
                        ? y.createElement(c, { is: l.is })
                        : y.createElement(c);
                }
            }
            (f[se] = a), (f[de] = l);
            e: for (y = a.child; y !== null; ) {
              if (y.tag === 5 || y.tag === 6) f.appendChild(y.stateNode);
              else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                (y.child.return = y), (y = y.child);
                continue;
              }
              if (y === a) break e;
              for (; y.sibling === null; ) {
                if (y.return === null || y.return === a) break e;
                y = y.return;
              }
              (y.sibling.return = y.return), (y = y.sibling);
            }
            a.stateNode = f;
            e: switch ((Xt(f, c, l), c)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && La(a);
          }
        }
        return (
          vt(a),
          Gd(a, a.type, e === null ? null : e.memoizedProps, a.pendingProps, i),
          null
        );
      case 6:
        if (e && a.stateNode != null) e.memoizedProps !== l && La(a);
        else {
          if (typeof l != "string" && a.stateNode === null) throw Error(s(166));
          if (((e = Le.current), qi(a))) {
            if (
              ((e = a.stateNode),
              (i = a.memoizedProps),
              (l = null),
              (c = Qt),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            (e[se] = a),
              (e = !!(
                e.nodeValue === i ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                by(e.nodeValue, i)
              )),
              e || ur(a, !0);
          } else (e = su(e).createTextNode(l)), (e[se] = a), (a.stateNode = e);
        }
        return vt(a), null;
      case 31:
        if (((i = a.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = qi(a)), i !== null)) {
            if (e === null) {
              if (!l) throw Error(s(318));
              if (
                ((e = a.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(s(557));
              e[se] = a;
            } else
              ai(),
                (a.flags & 128) === 0 && (a.memoizedState = null),
                (a.flags |= 4);
            vt(a), (e = !1);
          } else
            (i = td()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (e = !0);
          if (!e) return a.flags & 256 ? (Tn(a), a) : (Tn(a), null);
          if ((a.flags & 128) !== 0) throw Error(s(558));
        }
        return vt(a), null;
      case 13:
        if (
          ((l = a.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = qi(a)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (
                ((c = a.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(s(317));
              c[se] = a;
            } else
              ai(),
                (a.flags & 128) === 0 && (a.memoizedState = null),
                (a.flags |= 4);
            vt(a), (c = !1);
          } else
            (c = td()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return a.flags & 256 ? (Tn(a), a) : (Tn(a), null);
        }
        return (
          Tn(a),
          (a.flags & 128) !== 0
            ? ((a.lanes = i), a)
            : ((i = l !== null),
              (e = e !== null && e.memoizedState !== null),
              i &&
                ((l = a.child),
                (c = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (c = l.alternate.memoizedState.cachePool.pool),
                (f = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (f = l.memoizedState.cachePool.pool),
                f !== c && (l.flags |= 2048)),
              i !== e && i && (a.child.flags |= 8192),
              Go(a, a.updateQueue),
              vt(a),
              null)
        );
      case 4:
        return ct(), e === null && mf(a.stateNode.containerInfo), vt(a), null;
      case 10:
        return ja(a.type), vt(a), null;
      case 19:
        if ((G(Ot), (l = a.memoizedState), l === null)) return vt(a), null;
        if (((c = (a.flags & 128) !== 0), (f = l.rendering), f === null))
          if (c) tl(l, !1);
          else {
            if (Ct !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = a.child; e !== null; ) {
                if (((f = Do(e)), f !== null)) {
                  for (
                    a.flags |= 128,
                      tl(l, !1),
                      e = f.updateQueue,
                      a.updateQueue = e,
                      Go(a, e),
                      a.subtreeFlags = 0,
                      e = i,
                      i = a.child;
                    i !== null;

                  )
                    Zm(i, e), (i = i.sibling);
                  return (
                    ae(Ot, (Ot.current & 1) | 2),
                    Ze && Na(a, l.treeForkCount),
                    a.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              W() > Xo &&
              ((a.flags |= 128), (c = !0), tl(l, !1), (a.lanes = 4194304));
          }
        else {
          if (!c)
            if (((e = Do(f)), e !== null)) {
              if (
                ((a.flags |= 128),
                (c = !0),
                (e = e.updateQueue),
                (a.updateQueue = e),
                Go(a, e),
                tl(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !f.alternate &&
                  !Ze)
              )
                return vt(a), null;
            } else
              2 * W() - l.renderingStartTime > Xo &&
                i !== 536870912 &&
                ((a.flags |= 128), (c = !0), tl(l, !1), (a.lanes = 4194304));
          l.isBackwards
            ? ((f.sibling = a.child), (a.child = f))
            : ((e = l.last),
              e !== null ? (e.sibling = f) : (a.child = f),
              (l.last = f));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = W()),
            (e.sibling = null),
            (i = Ot.current),
            ae(Ot, c ? (i & 1) | 2 : i & 1),
            Ze && Na(a, l.treeForkCount),
            e)
          : (vt(a), null);
      case 22:
      case 23:
        return (
          Tn(a),
          md(),
          (l = a.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (a.flags |= 8192)
            : l && (a.flags |= 8192),
          l
            ? (i & 536870912) !== 0 &&
              (a.flags & 128) === 0 &&
              (vt(a), a.subtreeFlags & 6 && (a.flags |= 8192))
            : vt(a),
          (i = a.updateQueue),
          i !== null && Go(a, i.retryQueue),
          (i = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          (l = null),
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (l = a.memoizedState.cachePool.pool),
          l !== i && (a.flags |= 2048),
          e !== null && G(si),
          null
        );
      case 24:
        return (
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          a.memoizedState.cache !== i && (a.flags |= 2048),
          ja(Mt),
          vt(a),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, a.tag));
  }
  function F2(e, a) {
    switch ((Wc(a), a.tag)) {
      case 1:
        return (
          (e = a.flags), e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 3:
        return (
          ja(Mt),
          ct(),
          (e = a.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((a.flags = (e & -65537) | 128), a)
            : null
        );
      case 26:
      case 27:
      case 5:
        return tr(a), null;
      case 31:
        if (a.memoizedState !== null) {
          if ((Tn(a), a.alternate === null)) throw Error(s(340));
          ai();
        }
        return (
          (e = a.flags), e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 13:
        if (
          (Tn(a), (e = a.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (a.alternate === null) throw Error(s(340));
          ai();
        }
        return (
          (e = a.flags), e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 19:
        return G(Ot), null;
      case 4:
        return ct(), null;
      case 10:
        return ja(a.type), null;
      case 22:
      case 23:
        return (
          Tn(a),
          md(),
          e !== null && G(si),
          (e = a.flags),
          e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 24:
        return ja(Mt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _g(e, a) {
    switch ((Wc(a), a.tag)) {
      case 3:
        ja(Mt), ct();
        break;
      case 26:
      case 27:
      case 5:
        tr(a);
        break;
      case 4:
        ct();
        break;
      case 31:
        a.memoizedState !== null && Tn(a);
        break;
      case 13:
        Tn(a);
        break;
      case 19:
        G(Ot);
        break;
      case 10:
        ja(a.type);
        break;
      case 22:
      case 23:
        Tn(a), md(), e !== null && G(si);
        break;
      case 24:
        ja(Mt);
    }
  }
  function nl(e, a) {
    try {
      var i = a.updateQueue,
        l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        i = c;
        do {
          if ((i.tag & e) === e) {
            l = void 0;
            var f = i.create,
              y = i.inst;
            (l = f()), (y.destroy = l);
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (S) {
      st(a, a.return, S);
    }
  }
  function gr(e, a, i) {
    try {
      var l = a.updateQueue,
        c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var f = c.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            var y = l.inst,
              S = y.destroy;
            if (S !== void 0) {
              (y.destroy = void 0), (c = a);
              var A = i,
                B = S;
              try {
                B();
              } catch (K) {
                st(c, A, K);
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (K) {
      st(a, a.return, K);
    }
  }
  function Tg(e) {
    var a = e.updateQueue;
    if (a !== null) {
      var i = e.stateNode;
      try {
        pp(a, i);
      } catch (l) {
        st(e, e.return, l);
      }
    }
  }
  function Rg(e, a, i) {
    (i.props = di(e.type, e.memoizedProps)), (i.state = e.memoizedState);
    try {
      i.componentWillUnmount();
    } catch (l) {
      st(e, a, l);
    }
  }
  function al(e, a) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof i == "function" ? (e.refCleanup = i(l)) : (i.current = l);
      }
    } catch (c) {
      st(e, a, c);
    }
  }
  function ma(e, a) {
    var i = e.ref,
      l = e.refCleanup;
    if (i !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          st(e, a, c);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (c) {
          st(e, a, c);
        }
      else i.current = null;
  }
  function Ag(e) {
    var a = e.type,
      i = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && l.focus();
          break e;
        case "img":
          i.src ? (l.src = i.src) : i.srcSet && (l.srcset = i.srcSet);
      }
    } catch (c) {
      st(e, e.return, c);
    }
  }
  function Yd(e, a, i) {
    try {
      var l = e.stateNode;
      fS(l, e.type, i, a), (l[de] = a);
    } catch (c) {
      st(e, e.return, c);
    }
  }
  function Cg(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && wr(e.type)) ||
      e.tag === 4
    );
  }
  function Qd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Cg(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && wr(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Kd(e, a, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        a
          ? (i.nodeType === 9
              ? i.body
              : i.nodeName === "HTML"
              ? i.ownerDocument.body
              : i
            ).insertBefore(e, a)
          : ((a =
              i.nodeType === 9
                ? i.body
                : i.nodeName === "HTML"
                ? i.ownerDocument.body
                : i),
            a.appendChild(e),
            (i = i._reactRootContainer),
            i != null || a.onclick !== null || (a.onclick = Ra));
    else if (
      l !== 4 &&
      (l === 27 && wr(e.type) && ((i = e.stateNode), (a = null)),
      (e = e.child),
      e !== null)
    )
      for (Kd(e, a, i), e = e.sibling; e !== null; )
        Kd(e, a, i), (e = e.sibling);
  }
  function Yo(e, a, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), a ? i.insertBefore(e, a) : i.appendChild(e);
    else if (
      l !== 4 &&
      (l === 27 && wr(e.type) && (i = e.stateNode), (e = e.child), e !== null)
    )
      for (Yo(e, a, i), e = e.sibling; e !== null; )
        Yo(e, a, i), (e = e.sibling);
  }
  function Ng(e) {
    var a = e.stateNode,
      i = e.memoizedProps;
    try {
      for (var l = e.type, c = a.attributes; c.length; )
        a.removeAttributeNode(c[0]);
      Xt(a, l, i), (a[se] = e), (a[de] = i);
    } catch (f) {
      st(e, e.return, f);
    }
  }
  var za = !1,
    zt = !1,
    $d = !1,
    Og = typeof WeakSet == "function" ? WeakSet : Set,
    Ft = null;
  function G2(e, a) {
    if (((e = e.containerInfo), (yf = hu), (e = qm(e)), qc(e))) {
      if ("selectionStart" in e)
        var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var l = i.getSelection && i.getSelection();
          if (l && l.rangeCount !== 0) {
            i = l.anchorNode;
            var c = l.anchorOffset,
              f = l.focusNode;
            l = l.focusOffset;
            try {
              i.nodeType, f.nodeType;
            } catch {
              i = null;
              break e;
            }
            var y = 0,
              S = -1,
              A = -1,
              B = 0,
              K = 0,
              X = e,
              P = null;
            t: for (;;) {
              for (
                var F;
                X !== i || (c !== 0 && X.nodeType !== 3) || (S = y + c),
                  X !== f || (l !== 0 && X.nodeType !== 3) || (A = y + l),
                  X.nodeType === 3 && (y += X.nodeValue.length),
                  (F = X.firstChild) !== null;

              )
                (P = X), (X = F);
              for (;;) {
                if (X === e) break t;
                if (
                  (P === i && ++B === c && (S = y),
                  P === f && ++K === l && (A = y),
                  (F = X.nextSibling) !== null)
                )
                  break;
                (X = P), (P = X.parentNode);
              }
              X = F;
            }
            i = S === -1 || A === -1 ? null : { start: S, end: A };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      vf = { focusedElem: e, selectionRange: i }, hu = !1, Ft = a;
      Ft !== null;

    )
      if (
        ((a = Ft), (e = a.child), (a.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = a), (Ft = e);
      else
        for (; Ft !== null; ) {
          switch (((a = Ft), (f = a.alternate), (e = a.flags), a.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = a.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (i = 0; i < e.length; i++)
                  (c = e[i]), (c.ref.impl = c.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                (e = void 0),
                  (i = a),
                  (c = f.memoizedProps),
                  (f = f.memoizedState),
                  (l = i.stateNode);
                try {
                  var be = di(i.type, c);
                  (e = l.getSnapshotBeforeUpdate(be, f)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (je) {
                  st(i, i.return, je);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = a.stateNode.containerInfo), (i = e.nodeType), i === 9)
                )
                  Sf(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Sf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = a.sibling), e !== null)) {
            (e.return = a.return), (Ft = e);
            break;
          }
          Ft = a.return;
        }
  }
  function jg(e, a, i) {
    var l = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Ia(e, i), l & 4 && nl(5, i);
        break;
      case 1:
        if ((Ia(e, i), l & 4))
          if (((e = i.stateNode), a === null))
            try {
              e.componentDidMount();
            } catch (y) {
              st(i, i.return, y);
            }
          else {
            var c = di(i.type, a.memoizedProps);
            a = a.memoizedState;
            try {
              e.componentDidUpdate(c, a, e.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              st(i, i.return, y);
            }
          }
        l & 64 && Tg(i), l & 512 && al(i, i.return);
        break;
      case 3:
        if ((Ia(e, i), l & 64 && ((e = i.updateQueue), e !== null))) {
          if (((a = null), i.child !== null))
            switch (i.child.tag) {
              case 27:
              case 5:
                a = i.child.stateNode;
                break;
              case 1:
                a = i.child.stateNode;
            }
          try {
            pp(e, a);
          } catch (y) {
            st(i, i.return, y);
          }
        }
        break;
      case 27:
        a === null && l & 4 && Ng(i);
      case 26:
      case 5:
        Ia(e, i), a === null && l & 4 && Ag(i), l & 512 && al(i, i.return);
        break;
      case 12:
        Ia(e, i);
        break;
      case 31:
        Ia(e, i), l & 4 && Ug(e, i);
        break;
      case 13:
        Ia(e, i),
          l & 4 && Lg(e, i),
          l & 64 &&
            ((e = i.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((i = eS.bind(null, i)), xS(e, i))));
        break;
      case 22:
        if (((l = i.memoizedState !== null || za), !l)) {
          (a = (a !== null && a.memoizedState !== null) || zt), (c = za);
          var f = zt;
          (za = l),
            (zt = a) && !f ? Ba(e, i, (i.subtreeFlags & 8772) !== 0) : Ia(e, i),
            (za = c),
            (zt = f);
        }
        break;
      case 30:
        break;
      default:
        Ia(e, i);
    }
  }
  function Dg(e) {
    var a = e.alternate;
    a !== null && ((e.alternate = null), Dg(a)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((a = e.stateNode), a !== null && Rt(a)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var St = null,
    on = !1;
  function ka(e, a, i) {
    for (i = i.child; i !== null; ) Mg(e, a, i), (i = i.sibling);
  }
  function Mg(e, a, i) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Wn, i);
      } catch {}
    switch (i.tag) {
      case 26:
        zt || ma(i, a),
          ka(e, a, i),
          i.memoizedState
            ? i.memoizedState.count--
            : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i));
        break;
      case 27:
        zt || ma(i, a);
        var l = St,
          c = on;
        wr(i.type) && ((St = i.stateNode), (on = !1)),
          ka(e, a, i),
          fl(i.stateNode),
          (St = l),
          (on = c);
        break;
      case 5:
        zt || ma(i, a);
      case 6:
        if (
          ((l = St),
          (c = on),
          (St = null),
          ka(e, a, i),
          (St = l),
          (on = c),
          St !== null)
        )
          if (on)
            try {
              (St.nodeType === 9
                ? St.body
                : St.nodeName === "HTML"
                ? St.ownerDocument.body
                : St
              ).removeChild(i.stateNode);
            } catch (f) {
              st(i, a, f);
            }
          else
            try {
              St.removeChild(i.stateNode);
            } catch (f) {
              st(i, a, f);
            }
        break;
      case 18:
        St !== null &&
          (on
            ? ((e = St),
              Ty(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                i.stateNode
              ),
              us(e))
            : Ty(St, i.stateNode));
        break;
      case 4:
        (l = St),
          (c = on),
          (St = i.stateNode.containerInfo),
          (on = !0),
          ka(e, a, i),
          (St = l),
          (on = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        gr(2, i, a), zt || gr(4, i, a), ka(e, a, i);
        break;
      case 1:
        zt ||
          (ma(i, a),
          (l = i.stateNode),
          typeof l.componentWillUnmount == "function" && Rg(i, a, l)),
          ka(e, a, i);
        break;
      case 21:
        ka(e, a, i);
        break;
      case 22:
        (zt = (l = zt) || i.memoizedState !== null), ka(e, a, i), (zt = l);
        break;
      default:
        ka(e, a, i);
    }
  }
  function Ug(e, a) {
    if (
      a.memoizedState === null &&
      ((e = a.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        us(e);
      } catch (i) {
        st(a, a.return, i);
      }
    }
  }
  function Lg(e, a) {
    if (
      a.memoizedState === null &&
      ((e = a.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        us(e);
      } catch (i) {
        st(a, a.return, i);
      }
  }
  function Y2(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var a = e.stateNode;
        return a === null && (a = e.stateNode = new Og()), a;
      case 22:
        return (
          (e = e.stateNode),
          (a = e._retryCache),
          a === null && (a = e._retryCache = new Og()),
          a
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Qo(e, a) {
    var i = Y2(e);
    a.forEach(function (l) {
      if (!i.has(l)) {
        i.add(l);
        var c = tS.bind(null, e, l);
        l.then(c, c);
      }
    });
  }
  function un(e, a) {
    var i = a.deletions;
    if (i !== null)
      for (var l = 0; l < i.length; l++) {
        var c = i[l],
          f = e,
          y = a,
          S = y;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (wr(S.type)) {
                (St = S.stateNode), (on = !1);
                break e;
              }
              break;
            case 5:
              (St = S.stateNode), (on = !1);
              break e;
            case 3:
            case 4:
              (St = S.stateNode.containerInfo), (on = !0);
              break e;
          }
          S = S.return;
        }
        if (St === null) throw Error(s(160));
        Mg(f, y, c),
          (St = null),
          (on = !1),
          (f = c.alternate),
          f !== null && (f.return = null),
          (c.return = null);
      }
    if (a.subtreeFlags & 13886)
      for (a = a.child; a !== null; ) zg(a, e), (a = a.sibling);
  }
  var na = null;
  function zg(e, a) {
    var i = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        un(a, e),
          cn(e),
          l & 4 && (gr(3, e, e.return), nl(3, e), gr(5, e, e.return));
        break;
      case 1:
        un(a, e),
          cn(e),
          l & 512 && (zt || i === null || ma(i, i.return)),
          l & 64 &&
            za &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((i = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = i === null ? l : i.concat(l)))));
        break;
      case 26:
        var c = na;
        if (
          (un(a, e),
          cn(e),
          l & 512 && (zt || i === null || ma(i, i.return)),
          l & 4)
        ) {
          var f = i !== null ? i.memoizedState : null;
          if (((l = e.memoizedState), i === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (i = e.memoizedProps),
                    (c = c.ownerDocument || c);
                  t: switch (l) {
                    case "title":
                      (f = c.getElementsByTagName("title")[0]),
                        (!f ||
                          f[gt] ||
                          f[se] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = c.createElement(l)),
                          c.head.insertBefore(
                            f,
                            c.querySelector("head > title")
                          )),
                        Xt(f, l, i),
                        (f[se] = e),
                        ft(f),
                        (l = f);
                      break e;
                    case "link":
                      var y = zy("link", "href", c).get(l + (i.href || ""));
                      if (y) {
                        for (var S = 0; S < y.length; S++)
                          if (
                            ((f = y[S]),
                            f.getAttribute("href") ===
                              (i.href == null || i.href === ""
                                ? null
                                : i.href) &&
                              f.getAttribute("rel") ===
                                (i.rel == null ? null : i.rel) &&
                              f.getAttribute("title") ===
                                (i.title == null ? null : i.title) &&
                              f.getAttribute("crossorigin") ===
                                (i.crossOrigin == null ? null : i.crossOrigin))
                          ) {
                            y.splice(S, 1);
                            break t;
                          }
                      }
                      (f = c.createElement(l)),
                        Xt(f, l, i),
                        c.head.appendChild(f);
                      break;
                    case "meta":
                      if (
                        (y = zy("meta", "content", c).get(
                          l + (i.content || "")
                        ))
                      ) {
                        for (S = 0; S < y.length; S++)
                          if (
                            ((f = y[S]),
                            f.getAttribute("content") ===
                              (i.content == null ? null : "" + i.content) &&
                              f.getAttribute("name") ===
                                (i.name == null ? null : i.name) &&
                              f.getAttribute("property") ===
                                (i.property == null ? null : i.property) &&
                              f.getAttribute("http-equiv") ===
                                (i.httpEquiv == null ? null : i.httpEquiv) &&
                              f.getAttribute("charset") ===
                                (i.charSet == null ? null : i.charSet))
                          ) {
                            y.splice(S, 1);
                            break t;
                          }
                      }
                      (f = c.createElement(l)),
                        Xt(f, l, i),
                        c.head.appendChild(f);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  (f[se] = e), ft(f), (l = f);
                }
                e.stateNode = l;
              } else ky(c, e.type, e.stateNode);
            else e.stateNode = Ly(c, l, e.memoizedProps);
          else
            f !== l
              ? (f === null
                  ? i.stateNode !== null &&
                    ((i = i.stateNode), i.parentNode.removeChild(i))
                  : f.count--,
                l === null
                  ? ky(c, e.type, e.stateNode)
                  : Ly(c, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                Yd(e, e.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        un(a, e),
          cn(e),
          l & 512 && (zt || i === null || ma(i, i.return)),
          i !== null && l & 4 && Yd(e, e.memoizedProps, i.memoizedProps);
        break;
      case 5:
        if (
          (un(a, e),
          cn(e),
          l & 512 && (zt || i === null || ma(i, i.return)),
          e.flags & 32)
        ) {
          c = e.stateNode;
          try {
            Di(c, "");
          } catch (be) {
            st(e, e.return, be);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), Yd(e, c, i !== null ? i.memoizedProps : c)),
          l & 1024 && ($d = !0);
        break;
      case 6:
        if ((un(a, e), cn(e), l & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (l = e.memoizedProps), (i = e.stateNode);
          try {
            i.nodeValue = l;
          } catch (be) {
            st(e, e.return, be);
          }
        }
        break;
      case 3:
        if (
          ((uu = null),
          (c = na),
          (na = lu(a.containerInfo)),
          un(a, e),
          (na = c),
          cn(e),
          l & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            us(a.containerInfo);
          } catch (be) {
            st(e, e.return, be);
          }
        $d && (($d = !1), kg(e));
        break;
      case 4:
        (l = na),
          (na = lu(e.stateNode.containerInfo)),
          un(a, e),
          cn(e),
          (na = l);
        break;
      case 12:
        un(a, e), cn(e);
        break;
      case 31:
        un(a, e),
          cn(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Qo(e, l)));
        break;
      case 13:
        un(a, e),
          cn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (i !== null && i.memoizedState !== null) &&
            ($o = W()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Qo(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var A = i !== null && i.memoizedState !== null,
          B = za,
          K = zt;
        if (
          ((za = B || c),
          (zt = K || A),
          un(a, e),
          (zt = K),
          (za = B),
          cn(e),
          l & 8192)
        )
          e: for (
            a = e.stateNode,
              a._visibility = c ? a._visibility & -2 : a._visibility | 1,
              c && (i === null || A || za || zt || fi(e)),
              i = null,
              a = e;
            ;

          ) {
            if (a.tag === 5 || a.tag === 26) {
              if (i === null) {
                A = i = a;
                try {
                  if (((f = A.stateNode), c))
                    (y = f.style),
                      typeof y.setProperty == "function"
                        ? y.setProperty("display", "none", "important")
                        : (y.display = "none");
                  else {
                    S = A.stateNode;
                    var X = A.memoizedProps.style,
                      P =
                        X != null && X.hasOwnProperty("display")
                          ? X.display
                          : null;
                    S.style.display =
                      P == null || typeof P == "boolean" ? "" : ("" + P).trim();
                  }
                } catch (be) {
                  st(A, A.return, be);
                }
              }
            } else if (a.tag === 6) {
              if (i === null) {
                A = a;
                try {
                  A.stateNode.nodeValue = c ? "" : A.memoizedProps;
                } catch (be) {
                  st(A, A.return, be);
                }
              }
            } else if (a.tag === 18) {
              if (i === null) {
                A = a;
                try {
                  var F = A.stateNode;
                  c ? Ry(F, !0) : Ry(A.stateNode, !1);
                } catch (be) {
                  st(A, A.return, be);
                }
              }
            } else if (
              ((a.tag !== 22 && a.tag !== 23) ||
                a.memoizedState === null ||
                a === e) &&
              a.child !== null
            ) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === e) break e;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === e) break e;
              i === a && (i = null), (a = a.return);
            }
            i === a && (i = null),
              (a.sibling.return = a.return),
              (a = a.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((i = l.retryQueue),
            i !== null && ((l.retryQueue = null), Qo(e, i))));
        break;
      case 19:
        un(a, e),
          cn(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Qo(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        un(a, e), cn(e);
    }
  }
  function cn(e) {
    var a = e.flags;
    if (a & 2) {
      try {
        for (var i, l = e.return; l !== null; ) {
          if (Cg(l)) {
            i = l;
            break;
          }
          l = l.return;
        }
        if (i == null) throw Error(s(160));
        switch (i.tag) {
          case 27:
            var c = i.stateNode,
              f = Qd(e);
            Yo(e, f, c);
            break;
          case 5:
            var y = i.stateNode;
            i.flags & 32 && (Di(y, ""), (i.flags &= -33));
            var S = Qd(e);
            Yo(e, S, y);
            break;
          case 3:
          case 4:
            var A = i.stateNode.containerInfo,
              B = Qd(e);
            Kd(e, B, A);
            break;
          default:
            throw Error(s(161));
        }
      } catch (K) {
        st(e, e.return, K);
      }
      e.flags &= -3;
    }
    a & 4096 && (e.flags &= -4097);
  }
  function kg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var a = e;
        kg(a),
          a.tag === 5 && a.flags & 1024 && a.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Ia(e, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; ) jg(e, a.alternate, a), (a = a.sibling);
  }
  function fi(e) {
    for (e = e.child; e !== null; ) {
      var a = e;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          gr(4, a, a.return), fi(a);
          break;
        case 1:
          ma(a, a.return);
          var i = a.stateNode;
          typeof i.componentWillUnmount == "function" && Rg(a, a.return, i),
            fi(a);
          break;
        case 27:
          fl(a.stateNode);
        case 26:
        case 5:
          ma(a, a.return), fi(a);
          break;
        case 22:
          a.memoizedState === null && fi(a);
          break;
        case 30:
          fi(a);
          break;
        default:
          fi(a);
      }
      e = e.sibling;
    }
  }
  function Ba(e, a, i) {
    for (i = i && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var l = a.alternate,
        c = e,
        f = a,
        y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ba(c, f, i), nl(4, f);
          break;
        case 1:
          if (
            (Ba(c, f, i),
            (l = f),
            (c = l.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (B) {
              st(l, l.return, B);
            }
          if (((l = f), (c = l.updateQueue), c !== null)) {
            var S = l.stateNode;
            try {
              var A = c.shared.hiddenCallbacks;
              if (A !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < A.length; c++)
                  mp(A[c], S);
            } catch (B) {
              st(l, l.return, B);
            }
          }
          i && y & 64 && Tg(f), al(f, f.return);
          break;
        case 27:
          Ng(f);
        case 26:
        case 5:
          Ba(c, f, i), i && l === null && y & 4 && Ag(f), al(f, f.return);
          break;
        case 12:
          Ba(c, f, i);
          break;
        case 31:
          Ba(c, f, i), i && y & 4 && Ug(c, f);
          break;
        case 13:
          Ba(c, f, i), i && y & 4 && Lg(c, f);
          break;
        case 22:
          f.memoizedState === null && Ba(c, f, i), al(f, f.return);
          break;
        case 30:
          break;
        default:
          Ba(c, f, i);
      }
      a = a.sibling;
    }
  }
  function Xd(e, a) {
    var i = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (i = e.memoizedState.cachePool.pool),
      (e = null),
      a.memoizedState !== null &&
        a.memoizedState.cachePool !== null &&
        (e = a.memoizedState.cachePool.pool),
      e !== i && (e != null && e.refCount++, i != null && Vs(i));
  }
  function Zd(e, a) {
    (e = null),
      a.alternate !== null && (e = a.alternate.memoizedState.cache),
      (a = a.memoizedState.cache),
      a !== e && (a.refCount++, e != null && Vs(e));
  }
  function aa(e, a, i, l) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) Ig(e, a, i, l), (a = a.sibling);
  }
  function Ig(e, a, i, l) {
    var c = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        aa(e, a, i, l), c & 2048 && nl(9, a);
        break;
      case 1:
        aa(e, a, i, l);
        break;
      case 3:
        aa(e, a, i, l),
          c & 2048 &&
            ((e = null),
            a.alternate !== null && (e = a.alternate.memoizedState.cache),
            (a = a.memoizedState.cache),
            a !== e && (a.refCount++, e != null && Vs(e)));
        break;
      case 12:
        if (c & 2048) {
          aa(e, a, i, l), (e = a.stateNode);
          try {
            var f = a.memoizedProps,
              y = f.id,
              S = f.onPostCommit;
            typeof S == "function" &&
              S(
                y,
                a.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (A) {
            st(a, a.return, A);
          }
        } else aa(e, a, i, l);
        break;
      case 31:
        aa(e, a, i, l);
        break;
      case 13:
        aa(e, a, i, l);
        break;
      case 23:
        break;
      case 22:
        (f = a.stateNode),
          (y = a.alternate),
          a.memoizedState !== null
            ? f._visibility & 2
              ? aa(e, a, i, l)
              : rl(e, a)
            : f._visibility & 2
            ? aa(e, a, i, l)
            : ((f._visibility |= 2),
              Ji(e, a, i, l, (a.subtreeFlags & 10256) !== 0 || !1)),
          c & 2048 && Xd(y, a);
        break;
      case 24:
        aa(e, a, i, l), c & 2048 && Zd(a.alternate, a);
        break;
      default:
        aa(e, a, i, l);
    }
  }
  function Ji(e, a, i, l, c) {
    for (
      c = c && ((a.subtreeFlags & 10256) !== 0 || !1), a = a.child;
      a !== null;

    ) {
      var f = e,
        y = a,
        S = i,
        A = l,
        B = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Ji(f, y, S, A, c), nl(8, y);
          break;
        case 23:
          break;
        case 22:
          var K = y.stateNode;
          y.memoizedState !== null
            ? K._visibility & 2
              ? Ji(f, y, S, A, c)
              : rl(f, y)
            : ((K._visibility |= 2), Ji(f, y, S, A, c)),
            c && B & 2048 && Xd(y.alternate, y);
          break;
        case 24:
          Ji(f, y, S, A, c), c && B & 2048 && Zd(y.alternate, y);
          break;
        default:
          Ji(f, y, S, A, c);
      }
      a = a.sibling;
    }
  }
  function rl(e, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var i = e,
          l = a,
          c = l.flags;
        switch (l.tag) {
          case 22:
            rl(i, l), c & 2048 && Xd(l.alternate, l);
            break;
          case 24:
            rl(i, l), c & 2048 && Zd(l.alternate, l);
            break;
          default:
            rl(i, l);
        }
        a = a.sibling;
      }
  }
  var il = 8192;
  function Wi(e, a, i) {
    if (e.subtreeFlags & il)
      for (e = e.child; e !== null; ) Bg(e, a, i), (e = e.sibling);
  }
  function Bg(e, a, i) {
    switch (e.tag) {
      case 26:
        Wi(e, a, i),
          e.flags & il &&
            e.memoizedState !== null &&
            DS(i, na, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Wi(e, a, i);
        break;
      case 3:
      case 4:
        var l = na;
        (na = lu(e.stateNode.containerInfo)), Wi(e, a, i), (na = l);
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = il), (il = 16777216), Wi(e, a, i), (il = l))
            : Wi(e, a, i));
        break;
      default:
        Wi(e, a, i);
    }
  }
  function Hg(e) {
    var a = e.alternate;
    if (a !== null && ((e = a.child), e !== null)) {
      a.child = null;
      do (a = e.sibling), (e.sibling = null), (e = a);
      while (e !== null);
    }
  }
  function sl(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var l = a[i];
          (Ft = l), qg(l, e);
        }
      Hg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Pg(e), (e = e.sibling);
  }
  function Pg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        sl(e), e.flags & 2048 && gr(9, e, e.return);
        break;
      case 3:
        sl(e);
        break;
      case 12:
        sl(e);
        break;
      case 22:
        var a = e.stateNode;
        e.memoizedState !== null &&
        a._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((a._visibility &= -3), Ko(e))
          : sl(e);
        break;
      default:
        sl(e);
    }
  }
  function Ko(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var l = a[i];
          (Ft = l), qg(l, e);
        }
      Hg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((a = e), a.tag)) {
        case 0:
        case 11:
        case 15:
          gr(8, a, a.return), Ko(a);
          break;
        case 22:
          (i = a.stateNode),
            i._visibility & 2 && ((i._visibility &= -3), Ko(a));
          break;
        default:
          Ko(a);
      }
      e = e.sibling;
    }
  }
  function qg(e, a) {
    for (; Ft !== null; ) {
      var i = Ft;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          gr(8, i, a);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var l = i.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Vs(i.memoizedState.cache);
      }
      if (((l = i.child), l !== null)) (l.return = i), (Ft = l);
      else
        e: for (i = e; Ft !== null; ) {
          l = Ft;
          var c = l.sibling,
            f = l.return;
          if ((Dg(l), l === i)) {
            Ft = null;
            break e;
          }
          if (c !== null) {
            (c.return = f), (Ft = c);
            break e;
          }
          Ft = f;
        }
    }
  }
  var Q2 = {
      getCacheForType: function (e) {
        var a = Kt(Mt),
          i = a.data.get(e);
        return i === void 0 && ((i = e()), a.data.set(e, i)), i;
      },
      cacheSignal: function () {
        return Kt(Mt).controller.signal;
      },
    },
    K2 = typeof WeakMap == "function" ? WeakMap : Map,
    at = 0,
    ht = null,
    Fe = null,
    Ke = 0,
    it = 0,
    Rn = null,
    yr = !1,
    es = !1,
    Jd = !1,
    Ha = 0,
    Ct = 0,
    vr = 0,
    hi = 0,
    Wd = 0,
    An = 0,
    ts = 0,
    ll = null,
    dn = null,
    ef = !1,
    $o = 0,
    Vg = 0,
    Xo = 1 / 0,
    Zo = null,
    br = null,
    Ht = 0,
    xr = null,
    ns = null,
    Pa = 0,
    tf = 0,
    nf = null,
    Fg = null,
    ol = 0,
    af = null;
  function Cn() {
    return (at & 2) !== 0 && Ke !== 0 ? Ke & -Ke : k.T !== null ? cf() : ie();
  }
  function Gg() {
    if (An === 0)
      if ((Ke & 536870912) === 0 || Ze) {
        var e = Qr;
        (Qr <<= 1), (Qr & 3932160) === 0 && (Qr = 262144), (An = e);
      } else An = 536870912;
    return (e = _n.current), e !== null && (e.flags |= 32), An;
  }
  function fn(e, a, i) {
    ((e === ht && (it === 2 || it === 9)) || e.cancelPendingCommit !== null) &&
      (as(e, 0), Sr(e, Ke, An, !1)),
      ir(e, i),
      ((at & 2) === 0 || e !== ht) &&
        (e === ht &&
          ((at & 2) === 0 && (hi |= i), Ct === 4 && Sr(e, Ke, An, !1)),
        pa(e));
  }
  function Yg(e, a, i) {
    if ((at & 6) !== 0) throw Error(s(327));
    var l = (!i && (a & 127) === 0 && (a & e.expiredLanes) === 0) || $r(e, a),
      c = l ? Z2(e, a) : sf(e, a, !0),
      f = l;
    do {
      if (c === 0) {
        es && !l && Sr(e, a, 0, !1);
        break;
      } else {
        if (((i = e.current.alternate), f && !$2(i))) {
          (c = sf(e, a, !1)), (f = !1);
          continue;
        }
        if (c === 2) {
          if (((f = a), e.errorRecoveryDisabledLanes & f)) var y = 0;
          else
            (y = e.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
          if (y !== 0) {
            a = y;
            e: {
              var S = e;
              c = ll;
              var A = S.current.memoizedState.isDehydrated;
              if ((A && (as(S, y).flags |= 256), (y = sf(S, y, !1)), y !== 2)) {
                if (Jd && !A) {
                  (S.errorRecoveryDisabledLanes |= f), (hi |= f), (c = 4);
                  break e;
                }
                (f = dn),
                  (dn = c),
                  f !== null && (dn === null ? (dn = f) : dn.push.apply(dn, f));
              }
              c = y;
            }
            if (((f = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          as(e, 0), Sr(e, a, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (f = c), f)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              Sr(l, a, An, !yr);
              break e;
            case 2:
              dn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((a & 62914560) === a && ((c = $o + 300 - W()), 10 < c)) {
            if ((Sr(l, a, An, !yr), Kr(l, 0, !0) !== 0)) break e;
            (Pa = a),
              (l.timeoutHandle = wy(
                Qg.bind(
                  null,
                  l,
                  i,
                  dn,
                  Zo,
                  ef,
                  a,
                  An,
                  hi,
                  ts,
                  yr,
                  f,
                  "Throttled",
                  -0,
                  0
                ),
                c
              ));
            break e;
          }
          Qg(l, i, dn, Zo, ef, a, An, hi, ts, yr, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    pa(e);
  }
  function Qg(e, a, i, l, c, f, y, S, A, B, K, X, P, F) {
    if (
      ((e.timeoutHandle = -1),
      (X = a.subtreeFlags),
      X & 8192 || (X & 16785408) === 16785408)
    ) {
      (X = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ra,
      }),
        Bg(a, f, X);
      var be =
        (f & 62914560) === f ? $o - W() : (f & 4194048) === f ? Vg - W() : 0;
      if (((be = MS(X, be)), be !== null)) {
        (Pa = f),
          (e.cancelPendingCommit = be(
            ty.bind(null, e, a, f, i, l, c, y, S, A, K, X, null, P, F)
          )),
          Sr(e, f, y, !B);
        return;
      }
    }
    ty(e, a, f, i, l, c, y, S, A);
  }
  function $2(e) {
    for (var a = e; ; ) {
      var i = a.tag;
      if (
        (i === 0 || i === 11 || i === 15) &&
        a.flags & 16384 &&
        ((i = a.updateQueue), i !== null && ((i = i.stores), i !== null))
      )
        for (var l = 0; l < i.length; l++) {
          var c = i[l],
            f = c.getSnapshot;
          c = c.value;
          try {
            if (!En(f(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((i = a.child), a.subtreeFlags & 16384 && i !== null))
        (i.return = a), (a = i);
      else {
        if (a === e) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e) return !0;
          a = a.return;
        }
        (a.sibling.return = a.return), (a = a.sibling);
      }
    }
    return !0;
  }
  function Sr(e, a, i, l) {
    (a &= ~Wd),
      (a &= ~hi),
      (e.suspendedLanes |= a),
      (e.pingedLanes &= ~a),
      l && (e.warmLanes |= a),
      (l = e.expirationTimes);
    for (var c = a; 0 < c; ) {
      var f = 31 - Bt(c),
        y = 1 << f;
      (l[f] = -1), (c &= ~y);
    }
    i !== 0 && oo(e, i, a);
  }
  function Jo() {
    return (at & 6) === 0 ? (ul(0), !1) : !0;
  }
  function rf() {
    if (Fe !== null) {
      if (it === 0) var e = Fe.return;
      else (e = Fe), (Oa = ri = null), xd(e), (Qi = null), (Gs = 0), (e = Fe);
      for (; e !== null; ) _g(e.alternate, e), (e = e.return);
      Fe = null;
    }
  }
  function as(e, a) {
    var i = e.timeoutHandle;
    i !== -1 && ((e.timeoutHandle = -1), pS(i)),
      (i = e.cancelPendingCommit),
      i !== null && ((e.cancelPendingCommit = null), i()),
      (Pa = 0),
      rf(),
      (ht = e),
      (Fe = i = Ca(e.current, null)),
      (Ke = a),
      (it = 0),
      (Rn = null),
      (yr = !1),
      (es = $r(e, a)),
      (Jd = !1),
      (ts = An = Wd = hi = vr = Ct = 0),
      (dn = ll = null),
      (ef = !1),
      (a & 8) !== 0 && (a |= a & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= a; 0 < l; ) {
        var c = 31 - Bt(l),
          f = 1 << c;
        (a |= e[c]), (l &= ~f);
      }
    return (Ha = a), bo(), i;
  }
  function Kg(e, a) {
    (Ie = null),
      (k.H = Ws),
      a === Yi || a === Ao
        ? ((a = cp()), (it = 3))
        : a === od
        ? ((a = cp()), (it = 4))
        : (it =
            a === zd
              ? 8
              : a !== null &&
                typeof a == "object" &&
                typeof a.then == "function"
              ? 6
              : 1),
      (Rn = a),
      Fe === null && ((Ct = 1), Po(e, Bn(a, e.current)));
  }
  function $g() {
    var e = _n.current;
    return e === null
      ? !0
      : (Ke & 4194048) === Ke
      ? Vn === null
      : (Ke & 62914560) === Ke || (Ke & 536870912) !== 0
      ? e === Vn
      : !1;
  }
  function Xg() {
    var e = k.H;
    return (k.H = Ws), e === null ? Ws : e;
  }
  function Zg() {
    var e = k.A;
    return (k.A = Q2), e;
  }
  function Wo() {
    (Ct = 4),
      yr || ((Ke & 4194048) !== Ke && _n.current !== null) || (es = !0),
      ((vr & 134217727) === 0 && (hi & 134217727) === 0) ||
        ht === null ||
        Sr(ht, Ke, An, !1);
  }
  function sf(e, a, i) {
    var l = at;
    at |= 2;
    var c = Xg(),
      f = Zg();
    (ht !== e || Ke !== a) && ((Zo = null), as(e, a)), (a = !1);
    var y = Ct;
    e: do
      try {
        if (it !== 0 && Fe !== null) {
          var S = Fe,
            A = Rn;
          switch (it) {
            case 8:
              rf(), (y = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              _n.current === null && (a = !0);
              var B = it;
              if (((it = 0), (Rn = null), rs(e, S, A, B), i && es)) {
                y = 0;
                break e;
              }
              break;
            default:
              (B = it), (it = 0), (Rn = null), rs(e, S, A, B);
          }
        }
        X2(), (y = Ct);
        break;
      } catch (K) {
        Kg(e, K);
      }
    while (!0);
    return (
      a && e.shellSuspendCounter++,
      (Oa = ri = null),
      (at = l),
      (k.H = c),
      (k.A = f),
      Fe === null && ((ht = null), (Ke = 0), bo()),
      y
    );
  }
  function X2() {
    for (; Fe !== null; ) Jg(Fe);
  }
  function Z2(e, a) {
    var i = at;
    at |= 2;
    var l = Xg(),
      c = Zg();
    ht !== e || Ke !== a
      ? ((Zo = null), (Xo = W() + 500), as(e, a))
      : (es = $r(e, a));
    e: do
      try {
        if (it !== 0 && Fe !== null) {
          a = Fe;
          var f = Rn;
          t: switch (it) {
            case 1:
              (it = 0), (Rn = null), rs(e, a, f, 1);
              break;
            case 2:
            case 9:
              if (op(f)) {
                (it = 0), (Rn = null), Wg(a);
                break;
              }
              (a = function () {
                (it !== 2 && it !== 9) || ht !== e || (it = 7), pa(e);
              }),
                f.then(a, a);
              break e;
            case 3:
              it = 7;
              break e;
            case 4:
              it = 5;
              break e;
            case 7:
              op(f)
                ? ((it = 0), (Rn = null), Wg(a))
                : ((it = 0), (Rn = null), rs(e, a, f, 7));
              break;
            case 5:
              var y = null;
              switch (Fe.tag) {
                case 26:
                  y = Fe.memoizedState;
                case 5:
                case 27:
                  var S = Fe;
                  if (y ? Iy(y) : S.stateNode.complete) {
                    (it = 0), (Rn = null);
                    var A = S.sibling;
                    if (A !== null) Fe = A;
                    else {
                      var B = S.return;
                      B !== null ? ((Fe = B), eu(B)) : (Fe = null);
                    }
                    break t;
                  }
              }
              (it = 0), (Rn = null), rs(e, a, f, 5);
              break;
            case 6:
              (it = 0), (Rn = null), rs(e, a, f, 6);
              break;
            case 8:
              rf(), (Ct = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        J2();
        break;
      } catch (K) {
        Kg(e, K);
      }
    while (!0);
    return (
      (Oa = ri = null),
      (k.H = l),
      (k.A = c),
      (at = i),
      Fe !== null ? 0 : ((ht = null), (Ke = 0), bo(), Ct)
    );
  }
  function J2() {
    for (; Fe !== null && !Q(); ) Jg(Fe);
  }
  function Jg(e) {
    var a = Eg(e.alternate, e, Ha);
    (e.memoizedProps = e.pendingProps), a === null ? eu(e) : (Fe = a);
  }
  function Wg(e) {
    var a = e,
      i = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = gg(i, a, a.pendingProps, a.type, void 0, Ke);
        break;
      case 11:
        a = gg(i, a, a.pendingProps, a.type.render, a.ref, Ke);
        break;
      case 5:
        xd(a);
      default:
        _g(i, a), (a = Fe = Zm(a, Ha)), (a = Eg(i, a, Ha));
    }
    (e.memoizedProps = e.pendingProps), a === null ? eu(e) : (Fe = a);
  }
  function rs(e, a, i, l) {
    (Oa = ri = null), xd(a), (Qi = null), (Gs = 0);
    var c = a.return;
    try {
      if (H2(e, c, a, i, Ke)) {
        (Ct = 1), Po(e, Bn(i, e.current)), (Fe = null);
        return;
      }
    } catch (f) {
      if (c !== null) throw ((Fe = c), f);
      (Ct = 1), Po(e, Bn(i, e.current)), (Fe = null);
      return;
    }
    a.flags & 32768
      ? (Ze || l === 1
          ? (e = !0)
          : es || (Ke & 536870912) !== 0
          ? (e = !1)
          : ((yr = e = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = _n.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        ey(a, e))
      : eu(a);
  }
  function eu(e) {
    var a = e;
    do {
      if ((a.flags & 32768) !== 0) {
        ey(a, yr);
        return;
      }
      e = a.return;
      var i = V2(a.alternate, a, Ha);
      if (i !== null) {
        Fe = i;
        return;
      }
      if (((a = a.sibling), a !== null)) {
        Fe = a;
        return;
      }
      Fe = a = e;
    } while (a !== null);
    Ct === 0 && (Ct = 5);
  }
  function ey(e, a) {
    do {
      var i = F2(e.alternate, e);
      if (i !== null) {
        (i.flags &= 32767), (Fe = i);
        return;
      }
      if (
        ((i = e.return),
        i !== null &&
          ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
        !a && ((e = e.sibling), e !== null))
      ) {
        Fe = e;
        return;
      }
      Fe = e = i;
    } while (e !== null);
    (Ct = 6), (Fe = null);
  }
  function ty(e, a, i, l, c, f, y, S, A) {
    e.cancelPendingCommit = null;
    do tu();
    while (Ht !== 0);
    if ((at & 6) !== 0) throw Error(s(327));
    if (a !== null) {
      if (a === e.current) throw Error(s(177));
      if (
        ((f = a.lanes | a.childLanes),
        (f |= Qc),
        _c(e, i, f, y, S, A),
        e === ht && ((Fe = ht = null), (Ke = 0)),
        (ns = a),
        (xr = e),
        (Pa = i),
        (tf = f),
        (nf = c),
        (Fg = l),
        (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            nS(He, function () {
              return sy(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (a.flags & 13878) !== 0),
        (a.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = k.T), (k.T = null), (c = J.p), (J.p = 2), (y = at), (at |= 4);
        try {
          G2(e, a, i);
        } finally {
          (at = y), (J.p = c), (k.T = l);
        }
      }
      (Ht = 1), ny(), ay(), ry();
    }
  }
  function ny() {
    if (Ht === 1) {
      Ht = 0;
      var e = xr,
        a = ns,
        i = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || i) {
        (i = k.T), (k.T = null);
        var l = J.p;
        J.p = 2;
        var c = at;
        at |= 4;
        try {
          zg(a, e);
          var f = vf,
            y = qm(e.containerInfo),
            S = f.focusedElem,
            A = f.selectionRange;
          if (
            y !== S &&
            S &&
            S.ownerDocument &&
            Pm(S.ownerDocument.documentElement, S)
          ) {
            if (A !== null && qc(S)) {
              var B = A.start,
                K = A.end;
              if ((K === void 0 && (K = B), "selectionStart" in S))
                (S.selectionStart = B),
                  (S.selectionEnd = Math.min(K, S.value.length));
              else {
                var X = S.ownerDocument || document,
                  P = (X && X.defaultView) || window;
                if (P.getSelection) {
                  var F = P.getSelection(),
                    be = S.textContent.length,
                    je = Math.min(A.start, be),
                    ut = A.end === void 0 ? je : Math.min(A.end, be);
                  !F.extend && je > ut && ((y = ut), (ut = je), (je = y));
                  var M = Hm(S, je),
                    D = Hm(S, ut);
                  if (
                    M &&
                    D &&
                    (F.rangeCount !== 1 ||
                      F.anchorNode !== M.node ||
                      F.anchorOffset !== M.offset ||
                      F.focusNode !== D.node ||
                      F.focusOffset !== D.offset)
                  ) {
                    var I = X.createRange();
                    I.setStart(M.node, M.offset),
                      F.removeAllRanges(),
                      je > ut
                        ? (F.addRange(I), F.extend(D.node, D.offset))
                        : (I.setEnd(D.node, D.offset), F.addRange(I));
                  }
                }
              }
            }
            for (X = [], F = S; (F = F.parentNode); )
              F.nodeType === 1 &&
                X.push({ element: F, left: F.scrollLeft, top: F.scrollTop });
            for (
              typeof S.focus == "function" && S.focus(), S = 0;
              S < X.length;
              S++
            ) {
              var $ = X[S];
              ($.element.scrollLeft = $.left), ($.element.scrollTop = $.top);
            }
          }
          (hu = !!yf), (vf = yf = null);
        } finally {
          (at = c), (J.p = l), (k.T = i);
        }
      }
      (e.current = a), (Ht = 2);
    }
  }
  function ay() {
    if (Ht === 2) {
      Ht = 0;
      var e = xr,
        a = ns,
        i = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || i) {
        (i = k.T), (k.T = null);
        var l = J.p;
        J.p = 2;
        var c = at;
        at |= 4;
        try {
          jg(e, a.alternate, a);
        } finally {
          (at = c), (J.p = l), (k.T = i);
        }
      }
      Ht = 3;
    }
  }
  function ry() {
    if (Ht === 4 || Ht === 3) {
      (Ht = 0), oe();
      var e = xr,
        a = ns,
        i = Pa,
        l = Fg;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
        ? (Ht = 5)
        : ((Ht = 0), (ns = xr = null), iy(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (br = null),
        te(i),
        (a = a.stateNode),
        dt && typeof dt.onCommitFiberRoot == "function")
      )
        try {
          dt.onCommitFiberRoot(Wn, a, void 0, (a.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (a = k.T), (c = J.p), (J.p = 2), (k.T = null);
        try {
          for (var f = e.onRecoverableError, y = 0; y < l.length; y++) {
            var S = l[y];
            f(S.value, { componentStack: S.stack });
          }
        } finally {
          (k.T = a), (J.p = c);
        }
      }
      (Pa & 3) !== 0 && tu(),
        pa(e),
        (c = e.pendingLanes),
        (i & 261930) !== 0 && (c & 42) !== 0
          ? e === af
            ? ol++
            : ((ol = 0), (af = e))
          : (ol = 0),
        ul(0);
    }
  }
  function iy(e, a) {
    (e.pooledCacheLanes &= a) === 0 &&
      ((a = e.pooledCache), a != null && ((e.pooledCache = null), Vs(a)));
  }
  function tu() {
    return ny(), ay(), ry(), sy();
  }
  function sy() {
    if (Ht !== 5) return !1;
    var e = xr,
      a = tf;
    tf = 0;
    var i = te(Pa),
      l = k.T,
      c = J.p;
    try {
      (J.p = 32 > i ? 32 : i), (k.T = null), (i = nf), (nf = null);
      var f = xr,
        y = Pa;
      if (((Ht = 0), (ns = xr = null), (Pa = 0), (at & 6) !== 0))
        throw Error(s(331));
      var S = at;
      if (
        ((at |= 4),
        Pg(f.current),
        Ig(f, f.current, y, i),
        (at = S),
        ul(0, !1),
        dt && typeof dt.onPostCommitFiberRoot == "function")
      )
        try {
          dt.onPostCommitFiberRoot(Wn, f);
        } catch {}
      return !0;
    } finally {
      (J.p = c), (k.T = l), iy(e, a);
    }
  }
  function ly(e, a, i) {
    (a = Bn(i, a)),
      (a = Ld(e.stateNode, a, 2)),
      (e = hr(e, a, 2)),
      e !== null && (ir(e, 2), pa(e));
  }
  function st(e, a, i) {
    if (e.tag === 3) ly(e, e, i);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          ly(a, e, i);
          break;
        } else if (a.tag === 1) {
          var l = a.stateNode;
          if (
            typeof a.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (br === null || !br.has(l)))
          ) {
            (e = Bn(i, e)),
              (i = og(2)),
              (l = hr(a, i, 2)),
              l !== null && (ug(i, l, a, e), ir(l, 2), pa(l));
            break;
          }
        }
        a = a.return;
      }
  }
  function lf(e, a, i) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new K2();
      var c = new Set();
      l.set(a, c);
    } else (c = l.get(a)), c === void 0 && ((c = new Set()), l.set(a, c));
    c.has(i) ||
      ((Jd = !0), c.add(i), (e = W2.bind(null, e, a, i)), a.then(e, e));
  }
  function W2(e, a, i) {
    var l = e.pingCache;
    l !== null && l.delete(a),
      (e.pingedLanes |= e.suspendedLanes & i),
      (e.warmLanes &= ~i),
      ht === e &&
        (Ke & i) === i &&
        (Ct === 4 || (Ct === 3 && (Ke & 62914560) === Ke && 300 > W() - $o)
          ? (at & 2) === 0 && as(e, 0)
          : (Wd |= i),
        ts === Ke && (ts = 0)),
      pa(e);
  }
  function oy(e, a) {
    a === 0 && (a = Xr()), (e = ti(e, a)), e !== null && (ir(e, a), pa(e));
  }
  function eS(e) {
    var a = e.memoizedState,
      i = 0;
    a !== null && (i = a.retryLane), oy(e, i);
  }
  function tS(e, a) {
    var i = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          c = e.memoizedState;
        c !== null && (i = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(a), oy(e, i);
  }
  function nS(e, a) {
    return j(e, a);
  }
  var nu = null,
    is = null,
    of = !1,
    au = !1,
    uf = !1,
    Er = 0;
  function pa(e) {
    e !== is &&
      e.next === null &&
      (is === null ? (nu = is = e) : (is = is.next = e)),
      (au = !0),
      of || ((of = !0), rS());
  }
  function ul(e, a) {
    if (!uf && au) {
      uf = !0;
      do
        for (var i = !1, l = nu; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var f = 0;
            else {
              var y = l.suspendedLanes,
                S = l.pingedLanes;
              (f = (1 << (31 - Bt(42 | e) + 1)) - 1),
                (f &= c & ~(y & ~S)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0);
            }
            f !== 0 && ((i = !0), fy(l, f));
          } else
            (f = Ke),
              (f = Kr(
                l,
                l === ht ? f : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (f & 3) === 0 || $r(l, f) || ((i = !0), fy(l, f));
          l = l.next;
        }
      while (i);
      uf = !1;
    }
  }
  function aS() {
    uy();
  }
  function uy() {
    au = of = !1;
    var e = 0;
    Er !== 0 && mS() && (e = Er);
    for (var a = W(), i = null, l = nu; l !== null; ) {
      var c = l.next,
        f = cy(l, a);
      f === 0
        ? ((l.next = null),
          i === null ? (nu = c) : (i.next = c),
          c === null && (is = i))
        : ((i = l), (e !== 0 || (f & 3) !== 0) && (au = !0)),
        (l = c);
    }
    (Ht !== 0 && Ht !== 5) || ul(e), Er !== 0 && (Er = 0);
  }
  function cy(e, a) {
    for (
      var i = e.suspendedLanes,
        l = e.pingedLanes,
        c = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;

    ) {
      var y = 31 - Bt(f),
        S = 1 << y,
        A = c[y];
      A === -1
        ? ((S & i) === 0 || (S & l) !== 0) && (c[y] = lo(S, a))
        : A <= a && (e.expiredLanes |= S),
        (f &= ~S);
    }
    if (
      ((a = ht),
      (i = Ke),
      (i = Kr(
        e,
        e === a ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (l = e.callbackNode),
      i === 0 ||
        (e === a && (it === 2 || it === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && H(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((i & 3) === 0 || $r(e, i)) {
      if (((a = i & -i), a === e.callbackPriority)) return a;
      switch ((l !== null && H(l), te(i))) {
        case 2:
        case 8:
          i = Ye;
          break;
        case 32:
          i = He;
          break;
        case 268435456:
          i = da;
          break;
        default:
          i = He;
      }
      return (
        (l = dy.bind(null, e)),
        (i = j(i, l)),
        (e.callbackPriority = a),
        (e.callbackNode = i),
        a
      );
    }
    return (
      l !== null && l !== null && H(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function dy(e, a) {
    if (Ht !== 0 && Ht !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var i = e.callbackNode;
    if (tu() && e.callbackNode !== i) return null;
    var l = Ke;
    return (
      (l = Kr(
        e,
        e === ht ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (Yg(e, l, a),
          cy(e, W()),
          e.callbackNode != null && e.callbackNode === i
            ? dy.bind(null, e)
            : null)
    );
  }
  function fy(e, a) {
    if (tu()) return null;
    Yg(e, a, !0);
  }
  function rS() {
    gS(function () {
      (at & 6) !== 0 ? j(Se, aS) : uy();
    });
  }
  function cf() {
    if (Er === 0) {
      var e = Fi;
      e === 0 && ((e = _a), (_a <<= 1), (_a & 261888) === 0 && (_a = 256)),
        (Er = e);
    }
    return Er;
  }
  function hy(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : co("" + e);
  }
  function my(e, a) {
    var i = a.ownerDocument.createElement("input");
    return (
      (i.name = a.name),
      (i.value = a.value),
      e.id && i.setAttribute("form", e.id),
      a.parentNode.insertBefore(i, a),
      (e = new FormData(e)),
      i.parentNode.removeChild(i),
      e
    );
  }
  function iS(e, a, i, l, c) {
    if (a === "submit" && i && i.stateNode === c) {
      var f = hy((c[de] || null).action),
        y = l.submitter;
      y &&
        ((a = (a = y[de] || null)
          ? hy(a.formAction)
          : y.getAttribute("formAction")),
        a !== null && ((f = a), (y = null)));
      var S = new po("action", "action", null, l, c);
      e.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Er !== 0) {
                  var A = y ? my(c, y) : new FormData(c);
                  Nd(
                    i,
                    { pending: !0, data: A, method: c.method, action: f },
                    null,
                    A
                  );
                }
              } else
                typeof f == "function" &&
                  (S.preventDefault(),
                  (A = y ? my(c, y) : new FormData(c)),
                  Nd(
                    i,
                    { pending: !0, data: A, method: c.method, action: f },
                    f,
                    A
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var df = 0; df < Yc.length; df++) {
    var ff = Yc[df],
      sS = ff.toLowerCase(),
      lS = ff[0].toUpperCase() + ff.slice(1);
    ta(sS, "on" + lS);
  }
  ta(Gm, "onAnimationEnd"),
    ta(Ym, "onAnimationIteration"),
    ta(Qm, "onAnimationStart"),
    ta("dblclick", "onDoubleClick"),
    ta("focusin", "onFocus"),
    ta("focusout", "onBlur"),
    ta(w2, "onTransitionRun"),
    ta(_2, "onTransitionStart"),
    ta(T2, "onTransitionCancel"),
    ta(Km, "onTransitionEnd"),
    sn("onMouseEnter", ["mouseout", "mouseover"]),
    sn("onMouseLeave", ["mouseout", "mouseover"]),
    sn("onPointerEnter", ["pointerout", "pointerover"]),
    sn("onPointerLeave", ["pointerout", "pointerover"]),
    Sn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Sn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Sn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Sn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Sn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var cl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    oS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(cl)
    );
  function py(e, a) {
    a = (a & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var l = e[i],
        c = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (a)
          for (var y = l.length - 1; 0 <= y; y--) {
            var S = l[y],
              A = S.instance,
              B = S.currentTarget;
            if (((S = S.listener), A !== f && c.isPropagationStopped()))
              break e;
            (f = S), (c.currentTarget = B);
            try {
              f(c);
            } catch (K) {
              vo(K);
            }
            (c.currentTarget = null), (f = A);
          }
        else
          for (y = 0; y < l.length; y++) {
            if (
              ((S = l[y]),
              (A = S.instance),
              (B = S.currentTarget),
              (S = S.listener),
              A !== f && c.isPropagationStopped())
            )
              break e;
            (f = S), (c.currentTarget = B);
            try {
              f(c);
            } catch (K) {
              vo(K);
            }
            (c.currentTarget = null), (f = A);
          }
      }
    }
  }
  function Ge(e, a) {
    var i = a[Te];
    i === void 0 && (i = a[Te] = new Set());
    var l = e + "__bubble";
    i.has(l) || (gy(a, e, 2, !1), i.add(l));
  }
  function hf(e, a, i) {
    var l = 0;
    a && (l |= 4), gy(i, e, l, a);
  }
  var ru = "_reactListening" + Math.random().toString(36).slice(2);
  function mf(e) {
    if (!e[ru]) {
      (e[ru] = !0),
        xn.forEach(function (i) {
          i !== "selectionchange" && (oS.has(i) || hf(i, !1, e), hf(i, !0, e));
        });
      var a = e.nodeType === 9 ? e : e.ownerDocument;
      a === null || a[ru] || ((a[ru] = !0), hf("selectionchange", !1, a));
    }
  }
  function gy(e, a, i, l) {
    switch (Gy(a)) {
      case 2:
        var c = zS;
        break;
      case 8:
        c = kS;
        break;
      default:
        c = Nf;
    }
    (i = c.bind(null, a, i, e)),
      (c = void 0),
      !Mc ||
        (a !== "touchstart" && a !== "touchmove" && a !== "wheel") ||
        (c = !0),
      l
        ? c !== void 0
          ? e.addEventListener(a, i, { capture: !0, passive: c })
          : e.addEventListener(a, i, !0)
        : c !== void 0
        ? e.addEventListener(a, i, { passive: c })
        : e.addEventListener(a, i, !1);
  }
  function pf(e, a, i, l, c) {
    var f = l;
    if ((a & 1) === 0 && (a & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var S = l.stateNode.containerInfo;
          if (S === c) break;
          if (y === 4)
            for (y = l.return; y !== null; ) {
              var A = y.tag;
              if ((A === 3 || A === 4) && y.stateNode.containerInfo === c)
                return;
              y = y.return;
            }
          for (; S !== null; ) {
            if (((y = Je(S)), y === null)) return;
            if (((A = y.tag), A === 5 || A === 6 || A === 26 || A === 27)) {
              l = f = y;
              continue e;
            }
            S = S.parentNode;
          }
        }
        l = l.return;
      }
    Sm(function () {
      var B = f,
        K = jc(i),
        X = [];
      e: {
        var P = $m.get(e);
        if (P !== void 0) {
          var F = po,
            be = e;
          switch (e) {
            case "keypress":
              if (ho(i) === 0) break e;
            case "keydown":
            case "keyup":
              F = t2;
              break;
            case "focusin":
              (be = "focus"), (F = kc);
              break;
            case "focusout":
              (be = "blur"), (F = kc);
              break;
            case "beforeblur":
            case "afterblur":
              F = kc;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              F = _m;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = Vx;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = r2;
              break;
            case Gm:
            case Ym:
            case Qm:
              F = Yx;
              break;
            case Km:
              F = s2;
              break;
            case "scroll":
            case "scrollend":
              F = Px;
              break;
            case "wheel":
              F = o2;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = Kx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = Rm;
              break;
            case "toggle":
            case "beforetoggle":
              F = c2;
          }
          var je = (a & 4) !== 0,
            ut = !je && (e === "scroll" || e === "scrollend"),
            M = je ? (P !== null ? P + "Capture" : null) : P;
          je = [];
          for (var D = B, I; D !== null; ) {
            var $ = D;
            if (
              ((I = $.stateNode),
              ($ = $.tag),
              ($ !== 5 && $ !== 26 && $ !== 27) ||
                I === null ||
                M === null ||
                (($ = Ds(D, M)), $ != null && je.push(dl(D, $, I))),
              ut)
            )
              break;
            D = D.return;
          }
          0 < je.length &&
            ((P = new F(P, be, null, i, K)),
            X.push({ event: P, listeners: je }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (
            ((P = e === "mouseover" || e === "pointerover"),
            (F = e === "mouseout" || e === "pointerout"),
            P &&
              i !== Oc &&
              (be = i.relatedTarget || i.fromElement) &&
              (Je(be) || be[Ee]))
          )
            break e;
          if (
            (F || P) &&
            ((P =
              K.window === K
                ? K
                : (P = K.ownerDocument)
                ? P.defaultView || P.parentWindow
                : window),
            F
              ? ((be = i.relatedTarget || i.toElement),
                (F = B),
                (be = be ? Je(be) : null),
                be !== null &&
                  ((ut = u(be)),
                  (je = be.tag),
                  be !== ut || (je !== 5 && je !== 27 && je !== 6)) &&
                  (be = null))
              : ((F = null), (be = B)),
            F !== be)
          ) {
            if (
              ((je = _m),
              ($ = "onMouseLeave"),
              (M = "onMouseEnter"),
              (D = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((je = Rm),
                ($ = "onPointerLeave"),
                (M = "onPointerEnter"),
                (D = "pointer")),
              (ut = F == null ? P : bn(F)),
              (I = be == null ? P : bn(be)),
              (P = new je($, D + "leave", F, i, K)),
              (P.target = ut),
              (P.relatedTarget = I),
              ($ = null),
              Je(K) === B &&
                ((je = new je(M, D + "enter", be, i, K)),
                (je.target = I),
                (je.relatedTarget = ut),
                ($ = je)),
              (ut = $),
              F && be)
            )
              t: {
                for (je = uS, M = F, D = be, I = 0, $ = M; $; $ = je($)) I++;
                $ = 0;
                for (var Ce = D; Ce; Ce = je(Ce)) $++;
                for (; 0 < I - $; ) (M = je(M)), I--;
                for (; 0 < $ - I; ) (D = je(D)), $--;
                for (; I--; ) {
                  if (M === D || (D !== null && M === D.alternate)) {
                    je = M;
                    break t;
                  }
                  (M = je(M)), (D = je(D));
                }
                je = null;
              }
            else je = null;
            F !== null && yy(X, P, F, je, !1),
              be !== null && ut !== null && yy(X, ut, be, je, !0);
          }
        }
        e: {
          if (
            ((P = B ? bn(B) : window),
            (F = P.nodeName && P.nodeName.toLowerCase()),
            F === "select" || (F === "input" && P.type === "file"))
          )
            var tt = Um;
          else if (Dm(P))
            if (Lm) tt = x2;
            else {
              tt = v2;
              var xe = y2;
            }
          else
            (F = P.nodeName),
              !F ||
              F.toLowerCase() !== "input" ||
              (P.type !== "checkbox" && P.type !== "radio")
                ? B && Nc(B.elementType) && (tt = Um)
                : (tt = b2);
          if (tt && (tt = tt(e, B))) {
            Mm(X, tt, i, K);
            break e;
          }
          xe && xe(e, P, B),
            e === "focusout" &&
              B &&
              P.type === "number" &&
              B.memoizedProps.value != null &&
              Cc(P, "number", P.value);
        }
        switch (((xe = B ? bn(B) : window), e)) {
          case "focusin":
            (Dm(xe) || xe.contentEditable === "true") &&
              ((zi = xe), (Vc = B), (Hs = null));
            break;
          case "focusout":
            Hs = Vc = zi = null;
            break;
          case "mousedown":
            Fc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Fc = !1), Vm(X, i, K);
            break;
          case "selectionchange":
            if (E2) break;
          case "keydown":
          case "keyup":
            Vm(X, i, K);
        }
        var Pe;
        if (Bc)
          e: {
            switch (e) {
              case "compositionstart":
                var $e = "onCompositionStart";
                break e;
              case "compositionend":
                $e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                $e = "onCompositionUpdate";
                break e;
            }
            $e = void 0;
          }
        else
          Li
            ? Om(e, i) && ($e = "onCompositionEnd")
            : e === "keydown" &&
              i.keyCode === 229 &&
              ($e = "onCompositionStart");
        $e &&
          (Am &&
            i.locale !== "ko" &&
            (Li || $e !== "onCompositionStart"
              ? $e === "onCompositionEnd" && Li && (Pe = Em())
              : ((sr = K),
                (Uc = "value" in sr ? sr.value : sr.textContent),
                (Li = !0))),
          (xe = iu(B, $e)),
          0 < xe.length &&
            (($e = new Tm($e, e, null, i, K)),
            X.push({ event: $e, listeners: xe }),
            Pe
              ? ($e.data = Pe)
              : ((Pe = jm(i)), Pe !== null && ($e.data = Pe)))),
          (Pe = f2 ? h2(e, i) : m2(e, i)) &&
            (($e = iu(B, "onBeforeInput")),
            0 < $e.length &&
              ((xe = new Tm("onBeforeInput", "beforeinput", null, i, K)),
              X.push({ event: xe, listeners: $e }),
              (xe.data = Pe))),
          iS(X, e, B, i, K);
      }
      py(X, a);
    });
  }
  function dl(e, a, i) {
    return { instance: e, listener: a, currentTarget: i };
  }
  function iu(e, a) {
    for (var i = a + "Capture", l = []; e !== null; ) {
      var c = e,
        f = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          f === null ||
          ((c = Ds(e, i)),
          c != null && l.unshift(dl(e, c, f)),
          (c = Ds(e, a)),
          c != null && l.push(dl(e, c, f))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function uS(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function yy(e, a, i, l, c) {
    for (var f = a._reactName, y = []; i !== null && i !== l; ) {
      var S = i,
        A = S.alternate,
        B = S.stateNode;
      if (((S = S.tag), A !== null && A === l)) break;
      (S !== 5 && S !== 26 && S !== 27) ||
        B === null ||
        ((A = B),
        c
          ? ((B = Ds(i, f)), B != null && y.unshift(dl(i, B, A)))
          : c || ((B = Ds(i, f)), B != null && y.push(dl(i, B, A)))),
        (i = i.return);
    }
    y.length !== 0 && e.push({ event: a, listeners: y });
  }
  var cS = /\r\n?/g,
    dS = /\u0000|\uFFFD/g;
  function vy(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        cS,
        `
`
      )
      .replace(dS, "");
  }
  function by(e, a) {
    return (a = vy(a)), vy(e) === a;
  }
  function ot(e, a, i, l, c, f) {
    switch (i) {
      case "children":
        typeof l == "string"
          ? a === "body" || (a === "textarea" && l === "") || Di(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            a !== "body" &&
            Di(e, "" + l);
        break;
      case "className":
        zn(e, "class", l);
        break;
      case "tabIndex":
        zn(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        zn(e, i, l);
        break;
      case "style":
        bm(e, l, f);
        break;
      case "data":
        if (a !== "object") {
          zn(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (a !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(i);
          break;
        }
        (l = co("" + l)), e.setAttribute(i, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" &&
            (i === "formAction"
              ? (a !== "input" && ot(e, a, "name", c.name, c, null),
                ot(e, a, "formEncType", c.formEncType, c, null),
                ot(e, a, "formMethod", c.formMethod, c, null),
                ot(e, a, "formTarget", c.formTarget, c, null))
              : (ot(e, a, "encType", c.encType, c, null),
                ot(e, a, "method", c.method, c, null),
                ot(e, a, "target", c.target, c, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(i);
          break;
        }
        (l = co("" + l)), e.setAttribute(i, l);
        break;
      case "onClick":
        l != null && (e.onclick = Ra);
        break;
      case "onScroll":
        l != null && Ge("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ge("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((i = l.__html), i != null)) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = i;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (i = co("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(i, "" + l)
          : e.removeAttribute(i);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(i, "")
          : e.removeAttribute(i);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(i, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? e.setAttribute(i, l)
          : e.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(i, l)
          : e.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(i)
          : e.setAttribute(i, l);
        break;
      case "popover":
        Ge("beforetoggle", e), Ge("toggle", e), ea(e, "popover", l);
        break;
      case "xlinkActuate":
        et(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        et(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        et(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        et(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        et(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        et(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        et(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        et(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        et(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        ea(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) ||
          (i[0] !== "o" && i[0] !== "O") ||
          (i[1] !== "n" && i[1] !== "N")) &&
          ((i = Bx.get(i) || i), ea(e, i, l));
    }
  }
  function gf(e, a, i, l, c, f) {
    switch (i) {
      case "style":
        bm(e, l, f);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((i = l.__html), i != null)) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Di(e, l)
          : (typeof l == "number" || typeof l == "bigint") && Di(e, "" + l);
        break;
      case "onScroll":
        l != null && Ge("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ge("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Ra);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ni.hasOwnProperty(i))
          e: {
            if (
              i[0] === "o" &&
              i[1] === "n" &&
              ((c = i.endsWith("Capture")),
              (a = i.slice(2, c ? i.length - 7 : void 0)),
              (f = e[de] || null),
              (f = f != null ? f[i] : null),
              typeof f == "function" && e.removeEventListener(a, f, c),
              typeof l == "function")
            ) {
              typeof f != "function" &&
                f !== null &&
                (i in e
                  ? (e[i] = null)
                  : e.hasAttribute(i) && e.removeAttribute(i)),
                e.addEventListener(a, l, c);
              break e;
            }
            i in e
              ? (e[i] = l)
              : l === !0
              ? e.setAttribute(i, "")
              : ea(e, i, l);
          }
    }
  }
  function Xt(e, a, i) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ge("error", e), Ge("load", e);
        var l = !1,
          c = !1,
          f;
        for (f in i)
          if (i.hasOwnProperty(f)) {
            var y = i[f];
            if (y != null)
              switch (f) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, a));
                default:
                  ot(e, a, f, y, i, null);
              }
          }
        c && ot(e, a, "srcSet", i.srcSet, i, null),
          l && ot(e, a, "src", i.src, i, null);
        return;
      case "input":
        Ge("invalid", e);
        var S = (f = y = c = null),
          A = null,
          B = null;
        for (l in i)
          if (i.hasOwnProperty(l)) {
            var K = i[l];
            if (K != null)
              switch (l) {
                case "name":
                  c = K;
                  break;
                case "type":
                  y = K;
                  break;
                case "checked":
                  A = K;
                  break;
                case "defaultChecked":
                  B = K;
                  break;
                case "value":
                  f = K;
                  break;
                case "defaultValue":
                  S = K;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (K != null) throw Error(s(137, a));
                  break;
                default:
                  ot(e, a, l, K, i, null);
              }
          }
        pm(e, f, S, A, B, y, c, !1);
        return;
      case "select":
        Ge("invalid", e), (l = y = f = null);
        for (c in i)
          if (i.hasOwnProperty(c) && ((S = i[c]), S != null))
            switch (c) {
              case "value":
                f = S;
                break;
              case "defaultValue":
                y = S;
                break;
              case "multiple":
                l = S;
              default:
                ot(e, a, c, S, i, null);
            }
        (a = f),
          (i = y),
          (e.multiple = !!l),
          a != null ? ji(e, !!l, a, !1) : i != null && ji(e, !!l, i, !0);
        return;
      case "textarea":
        Ge("invalid", e), (f = c = l = null);
        for (y in i)
          if (i.hasOwnProperty(y) && ((S = i[y]), S != null))
            switch (y) {
              case "value":
                l = S;
                break;
              case "defaultValue":
                c = S;
                break;
              case "children":
                f = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(s(91));
                break;
              default:
                ot(e, a, y, S, i, null);
            }
        ym(e, l, c, f);
        return;
      case "option":
        for (A in i)
          if (i.hasOwnProperty(A) && ((l = i[A]), l != null))
            switch (A) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                ot(e, a, A, l, i, null);
            }
        return;
      case "dialog":
        Ge("beforetoggle", e), Ge("toggle", e), Ge("cancel", e), Ge("close", e);
        break;
      case "iframe":
      case "object":
        Ge("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < cl.length; l++) Ge(cl[l], e);
        break;
      case "image":
        Ge("error", e), Ge("load", e);
        break;
      case "details":
        Ge("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ge("error", e), Ge("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (B in i)
          if (i.hasOwnProperty(B) && ((l = i[B]), l != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, a));
              default:
                ot(e, a, B, l, i, null);
            }
        return;
      default:
        if (Nc(a)) {
          for (K in i)
            i.hasOwnProperty(K) &&
              ((l = i[K]), l !== void 0 && gf(e, a, K, l, i, void 0));
          return;
        }
    }
    for (S in i)
      i.hasOwnProperty(S) && ((l = i[S]), l != null && ot(e, a, S, l, i, null));
  }
  function fS(e, a, i, l) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          f = null,
          y = null,
          S = null,
          A = null,
          B = null,
          K = null;
        for (F in i) {
          var X = i[F];
          if (i.hasOwnProperty(F) && X != null)
            switch (F) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = X;
              default:
                l.hasOwnProperty(F) || ot(e, a, F, null, l, X);
            }
        }
        for (var P in l) {
          var F = l[P];
          if (((X = i[P]), l.hasOwnProperty(P) && (F != null || X != null)))
            switch (P) {
              case "type":
                f = F;
                break;
              case "name":
                c = F;
                break;
              case "checked":
                B = F;
                break;
              case "defaultChecked":
                K = F;
                break;
              case "value":
                y = F;
                break;
              case "defaultValue":
                S = F;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null) throw Error(s(137, a));
                break;
              default:
                F !== X && ot(e, a, P, F, l, X);
            }
        }
        Ac(e, y, S, A, B, K, f, c);
        return;
      case "select":
        F = y = S = P = null;
        for (f in i)
          if (((A = i[f]), i.hasOwnProperty(f) && A != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                F = A;
              default:
                l.hasOwnProperty(f) || ot(e, a, f, null, l, A);
            }
        for (c in l)
          if (
            ((f = l[c]),
            (A = i[c]),
            l.hasOwnProperty(c) && (f != null || A != null))
          )
            switch (c) {
              case "value":
                P = f;
                break;
              case "defaultValue":
                S = f;
                break;
              case "multiple":
                y = f;
              default:
                f !== A && ot(e, a, c, f, l, A);
            }
        (a = S),
          (i = y),
          (l = F),
          P != null
            ? ji(e, !!i, P, !1)
            : !!l != !!i &&
              (a != null ? ji(e, !!i, a, !0) : ji(e, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        F = P = null;
        for (S in i)
          if (
            ((c = i[S]),
            i.hasOwnProperty(S) && c != null && !l.hasOwnProperty(S))
          )
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                ot(e, a, S, null, l, c);
            }
        for (y in l)
          if (
            ((c = l[y]),
            (f = i[y]),
            l.hasOwnProperty(y) && (c != null || f != null))
          )
            switch (y) {
              case "value":
                P = c;
                break;
              case "defaultValue":
                F = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                c !== f && ot(e, a, y, c, l, f);
            }
        gm(e, P, F);
        return;
      case "option":
        for (var be in i)
          if (
            ((P = i[be]),
            i.hasOwnProperty(be) && P != null && !l.hasOwnProperty(be))
          )
            switch (be) {
              case "selected":
                e.selected = !1;
                break;
              default:
                ot(e, a, be, null, l, P);
            }
        for (A in l)
          if (
            ((P = l[A]),
            (F = i[A]),
            l.hasOwnProperty(A) && P !== F && (P != null || F != null))
          )
            switch (A) {
              case "selected":
                e.selected =
                  P && typeof P != "function" && typeof P != "symbol";
                break;
              default:
                ot(e, a, A, P, l, F);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var je in i)
          (P = i[je]),
            i.hasOwnProperty(je) &&
              P != null &&
              !l.hasOwnProperty(je) &&
              ot(e, a, je, null, l, P);
        for (B in l)
          if (
            ((P = l[B]),
            (F = i[B]),
            l.hasOwnProperty(B) && P !== F && (P != null || F != null))
          )
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (P != null) throw Error(s(137, a));
                break;
              default:
                ot(e, a, B, P, l, F);
            }
        return;
      default:
        if (Nc(a)) {
          for (var ut in i)
            (P = i[ut]),
              i.hasOwnProperty(ut) &&
                P !== void 0 &&
                !l.hasOwnProperty(ut) &&
                gf(e, a, ut, void 0, l, P);
          for (K in l)
            (P = l[K]),
              (F = i[K]),
              !l.hasOwnProperty(K) ||
                P === F ||
                (P === void 0 && F === void 0) ||
                gf(e, a, K, P, l, F);
          return;
        }
    }
    for (var M in i)
      (P = i[M]),
        i.hasOwnProperty(M) &&
          P != null &&
          !l.hasOwnProperty(M) &&
          ot(e, a, M, null, l, P);
    for (X in l)
      (P = l[X]),
        (F = i[X]),
        !l.hasOwnProperty(X) ||
          P === F ||
          (P == null && F == null) ||
          ot(e, a, X, P, l, F);
  }
  function xy(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function hS() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, a = 0, i = performance.getEntriesByType("resource"), l = 0;
        l < i.length;
        l++
      ) {
        var c = i[l],
          f = c.transferSize,
          y = c.initiatorType,
          S = c.duration;
        if (f && S && xy(y)) {
          for (y = 0, S = c.responseEnd, l += 1; l < i.length; l++) {
            var A = i[l],
              B = A.startTime;
            if (B > S) break;
            var K = A.transferSize,
              X = A.initiatorType;
            K &&
              xy(X) &&
              ((A = A.responseEnd), (y += K * (A < S ? 1 : (S - B) / (A - B))));
          }
          if ((--l, (a += (8 * (f + y)) / (c.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return a / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var yf = null,
    vf = null;
  function su(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Sy(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ey(e, a) {
    if (e === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && a === "foreignObject" ? 0 : e;
  }
  function bf(e, a) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof a.children == "string" ||
      typeof a.children == "number" ||
      typeof a.children == "bigint" ||
      (typeof a.dangerouslySetInnerHTML == "object" &&
        a.dangerouslySetInnerHTML !== null &&
        a.dangerouslySetInnerHTML.__html != null)
    );
  }
  var xf = null;
  function mS() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === xf
        ? !1
        : ((xf = e), !0)
      : ((xf = null), !1);
  }
  var wy = typeof setTimeout == "function" ? setTimeout : void 0,
    pS = typeof clearTimeout == "function" ? clearTimeout : void 0,
    _y = typeof Promise == "function" ? Promise : void 0,
    gS =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof _y < "u"
        ? function (e) {
            return _y.resolve(null).then(e).catch(yS);
          }
        : wy;
  function yS(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wr(e) {
    return e === "head";
  }
  function Ty(e, a) {
    var i = a,
      l = 0;
    do {
      var c = i.nextSibling;
      if ((e.removeChild(i), c && c.nodeType === 8))
        if (((i = c.data), i === "/$" || i === "/&")) {
          if (l === 0) {
            e.removeChild(c), us(a);
            return;
          }
          l--;
        } else if (
          i === "$" ||
          i === "$?" ||
          i === "$~" ||
          i === "$!" ||
          i === "&"
        )
          l++;
        else if (i === "html") fl(e.ownerDocument.documentElement);
        else if (i === "head") {
          (i = e.ownerDocument.head), fl(i);
          for (var f = i.firstChild; f; ) {
            var y = f.nextSibling,
              S = f.nodeName;
            f[gt] ||
              S === "SCRIPT" ||
              S === "STYLE" ||
              (S === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
              i.removeChild(f),
              (f = y);
          }
        } else i === "body" && fl(e.ownerDocument.body);
      i = c;
    } while (i);
    us(a);
  }
  function Ry(e, a) {
    var i = e;
    e = 0;
    do {
      var l = i.nextSibling;
      if (
        (i.nodeType === 1
          ? a
            ? ((i._stashedDisplay = i.style.display),
              (i.style.display = "none"))
            : ((i.style.display = i._stashedDisplay || ""),
              i.getAttribute("style") === "" && i.removeAttribute("style"))
          : i.nodeType === 3 &&
            (a
              ? ((i._stashedText = i.nodeValue), (i.nodeValue = ""))
              : (i.nodeValue = i._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((i = l.data), i === "/$")) {
          if (e === 0) break;
          e--;
        } else (i !== "$" && i !== "$?" && i !== "$~" && i !== "$!") || e++;
      i = l;
    } while (i);
  }
  function Sf(e) {
    var a = e.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var i = a;
      switch (((a = a.nextSibling), i.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Sf(i), Rt(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(i);
    }
  }
  function vS(e, a, i, l) {
    for (; e.nodeType === 1; ) {
      var c = i;
      if (e.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[gt])
          switch (a) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((f = e.getAttribute("rel")),
                f === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                f !== c.rel ||
                e.getAttribute("href") !==
                  (c.href == null || c.href === "" ? null : c.href) ||
                e.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((f = e.getAttribute("src")),
                (f !== (c.src == null ? null : c.src) ||
                  e.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  e.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  f &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (a === "input" && e.type === "hidden") {
        var f = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === f) return e;
      } else return e;
      if (((e = Fn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function bS(e, a, i) {
    if (a === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !i) ||
        ((e = Fn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ay(e, a) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Fn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ef(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function wf(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function xS(e, a) {
    var i = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = a;
    else if (e.data !== "$?" || i.readyState !== "loading") a();
    else {
      var l = function () {
        a(), i.removeEventListener("DOMContentLoaded", l);
      };
      i.addEventListener("DOMContentLoaded", l), (e._reactRetry = l);
    }
  }
  function Fn(e) {
    for (; e != null; e = e.nextSibling) {
      var a = e.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (
          ((a = e.data),
          a === "$" ||
            a === "$!" ||
            a === "$?" ||
            a === "$~" ||
            a === "&" ||
            a === "F!" ||
            a === "F")
        )
          break;
        if (a === "/$" || a === "/&") return null;
      }
    }
    return e;
  }
  var _f = null;
  function Cy(e) {
    e = e.nextSibling;
    for (var a = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "/$" || i === "/&") {
          if (a === 0) return Fn(e.nextSibling);
          a--;
        } else
          (i !== "$" && i !== "$!" && i !== "$?" && i !== "$~" && i !== "&") ||
            a++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ny(e) {
    e = e.previousSibling;
    for (var a = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&") {
          if (a === 0) return e;
          a--;
        } else (i !== "/$" && i !== "/&") || a++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Oy(e, a, i) {
    switch (((a = su(i)), e)) {
      case "html":
        if (((e = a.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = a.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = a.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function fl(e) {
    for (var a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
    Rt(e);
  }
  var Gn = new Map(),
    jy = new Set();
  function lu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var qa = J.d;
  J.d = { f: SS, r: ES, D: wS, C: _S, L: TS, m: RS, X: CS, S: AS, M: NS };
  function SS() {
    var e = qa.f(),
      a = Jo();
    return e || a;
  }
  function ES(e) {
    var a = We(e);
    a !== null && a.tag === 5 && a.type === "form" ? Kp(a) : qa.r(e);
  }
  var ss = typeof document > "u" ? null : document;
  function Dy(e, a, i) {
    var l = ss;
    if (l && typeof a == "string" && a) {
      var c = kn(a);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof i == "string" && (c += '[crossorigin="' + i + '"]'),
        jy.has(c) ||
          (jy.add(c),
          (e = { rel: e, crossOrigin: i, href: a }),
          l.querySelector(c) === null &&
            ((a = l.createElement("link")),
            Xt(a, "link", e),
            ft(a),
            l.head.appendChild(a)));
    }
  }
  function wS(e) {
    qa.D(e), Dy("dns-prefetch", e, null);
  }
  function _S(e, a) {
    qa.C(e, a), Dy("preconnect", e, a);
  }
  function TS(e, a, i) {
    qa.L(e, a, i);
    var l = ss;
    if (l && e && a) {
      var c = 'link[rel="preload"][as="' + kn(a) + '"]';
      a === "image" && i && i.imageSrcSet
        ? ((c += '[imagesrcset="' + kn(i.imageSrcSet) + '"]'),
          typeof i.imageSizes == "string" &&
            (c += '[imagesizes="' + kn(i.imageSizes) + '"]'))
        : (c += '[href="' + kn(e) + '"]');
      var f = c;
      switch (a) {
        case "style":
          f = ls(e);
          break;
        case "script":
          f = os(e);
      }
      Gn.has(f) ||
        ((e = b(
          {
            rel: "preload",
            href: a === "image" && i && i.imageSrcSet ? void 0 : e,
            as: a,
          },
          i
        )),
        Gn.set(f, e),
        l.querySelector(c) !== null ||
          (a === "style" && l.querySelector(hl(f))) ||
          (a === "script" && l.querySelector(ml(f))) ||
          ((a = l.createElement("link")),
          Xt(a, "link", e),
          ft(a),
          l.head.appendChild(a)));
    }
  }
  function RS(e, a) {
    qa.m(e, a);
    var i = ss;
    if (i && e) {
      var l = a && typeof a.as == "string" ? a.as : "script",
        c =
          'link[rel="modulepreload"][as="' + kn(l) + '"][href="' + kn(e) + '"]',
        f = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = os(e);
      }
      if (
        !Gn.has(f) &&
        ((e = b({ rel: "modulepreload", href: e }, a)),
        Gn.set(f, e),
        i.querySelector(c) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(ml(f))) return;
        }
        (l = i.createElement("link")),
          Xt(l, "link", e),
          ft(l),
          i.head.appendChild(l);
      }
    }
  }
  function AS(e, a, i) {
    qa.S(e, a, i);
    var l = ss;
    if (l && e) {
      var c = Ln(l).hoistableStyles,
        f = ls(e);
      a = a || "default";
      var y = c.get(f);
      if (!y) {
        var S = { loading: 0, preload: null };
        if ((y = l.querySelector(hl(f)))) S.loading = 5;
        else {
          (e = b({ rel: "stylesheet", href: e, "data-precedence": a }, i)),
            (i = Gn.get(f)) && Tf(e, i);
          var A = (y = l.createElement("link"));
          ft(A),
            Xt(A, "link", e),
            (A._p = new Promise(function (B, K) {
              (A.onload = B), (A.onerror = K);
            })),
            A.addEventListener("load", function () {
              S.loading |= 1;
            }),
            A.addEventListener("error", function () {
              S.loading |= 2;
            }),
            (S.loading |= 4),
            ou(y, a, l);
        }
        (y = { type: "stylesheet", instance: y, count: 1, state: S }),
          c.set(f, y);
      }
    }
  }
  function CS(e, a) {
    qa.X(e, a);
    var i = ss;
    if (i && e) {
      var l = Ln(i).hoistableScripts,
        c = os(e),
        f = l.get(c);
      f ||
        ((f = i.querySelector(ml(c))),
        f ||
          ((e = b({ src: e, async: !0 }, a)),
          (a = Gn.get(c)) && Rf(e, a),
          (f = i.createElement("script")),
          ft(f),
          Xt(f, "link", e),
          i.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        l.set(c, f));
    }
  }
  function NS(e, a) {
    qa.M(e, a);
    var i = ss;
    if (i && e) {
      var l = Ln(i).hoistableScripts,
        c = os(e),
        f = l.get(c);
      f ||
        ((f = i.querySelector(ml(c))),
        f ||
          ((e = b({ src: e, async: !0, type: "module" }, a)),
          (a = Gn.get(c)) && Rf(e, a),
          (f = i.createElement("script")),
          ft(f),
          Xt(f, "link", e),
          i.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        l.set(c, f));
    }
  }
  function My(e, a, i, l) {
    var c = (c = Le.current) ? lu(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string"
          ? ((a = ls(i.href)),
            (i = Ln(c).hoistableStyles),
            (l = i.get(a)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              i.set(a, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          i.rel === "stylesheet" &&
          typeof i.href == "string" &&
          typeof i.precedence == "string"
        ) {
          e = ls(i.href);
          var f = Ln(c).hoistableStyles,
            y = f.get(e);
          if (
            (y ||
              ((c = c.ownerDocument || c),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(e, y),
              (f = c.querySelector(hl(e))) &&
                !f._p &&
                ((y.instance = f), (y.state.loading = 5)),
              Gn.has(e) ||
                ((i = {
                  rel: "preload",
                  as: "style",
                  href: i.href,
                  crossOrigin: i.crossOrigin,
                  integrity: i.integrity,
                  media: i.media,
                  hrefLang: i.hrefLang,
                  referrerPolicy: i.referrerPolicy,
                }),
                Gn.set(e, i),
                f || OS(c, e, i, y.state))),
            a && l === null)
          )
            throw Error(s(528, ""));
          return y;
        }
        if (a && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (a = i.async),
          (i = i.src),
          typeof i == "string" &&
          a &&
          typeof a != "function" &&
          typeof a != "symbol"
            ? ((a = os(i)),
              (i = Ln(c).hoistableScripts),
              (l = i.get(a)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                i.set(a, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function ls(e) {
    return 'href="' + kn(e) + '"';
  }
  function hl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Uy(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function OS(e, a, i, l) {
    e.querySelector('link[rel="preload"][as="style"][' + a + "]")
      ? (l.loading = 1)
      : ((a = e.createElement("link")),
        (l.preload = a),
        a.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        a.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Xt(a, "link", i),
        ft(a),
        e.head.appendChild(a));
  }
  function os(e) {
    return '[src="' + kn(e) + '"]';
  }
  function ml(e) {
    return "script[async]" + e;
  }
  function Ly(e, a, i) {
    if ((a.count++, a.instance === null))
      switch (a.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + kn(i.href) + '"]');
          if (l) return (a.instance = l), ft(l), l;
          var c = b({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            ft(l),
            Xt(l, "style", c),
            ou(l, i.precedence, e),
            (a.instance = l)
          );
        case "stylesheet":
          c = ls(i.href);
          var f = e.querySelector(hl(c));
          if (f) return (a.state.loading |= 4), (a.instance = f), ft(f), f;
          (l = Uy(i)),
            (c = Gn.get(c)) && Tf(l, c),
            (f = (e.ownerDocument || e).createElement("link")),
            ft(f);
          var y = f;
          return (
            (y._p = new Promise(function (S, A) {
              (y.onload = S), (y.onerror = A);
            })),
            Xt(f, "link", l),
            (a.state.loading |= 4),
            ou(f, i.precedence, e),
            (a.instance = f)
          );
        case "script":
          return (
            (f = os(i.src)),
            (c = e.querySelector(ml(f)))
              ? ((a.instance = c), ft(c), c)
              : ((l = i),
                (c = Gn.get(f)) && ((l = b({}, i)), Rf(l, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement("script")),
                ft(c),
                Xt(c, "link", l),
                e.head.appendChild(c),
                (a.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, a.type));
      }
    else
      a.type === "stylesheet" &&
        (a.state.loading & 4) === 0 &&
        ((l = a.instance), (a.state.loading |= 4), ou(l, i.precedence, e));
    return a.instance;
  }
  function ou(e, a, i) {
    for (
      var l = i.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        c = l.length ? l[l.length - 1] : null,
        f = c,
        y = 0;
      y < l.length;
      y++
    ) {
      var S = l[y];
      if (S.dataset.precedence === a) f = S;
      else if (f !== c) break;
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((a = i.nodeType === 9 ? i.head : i), a.insertBefore(e, a.firstChild));
  }
  function Tf(e, a) {
    e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
      e.title == null && (e.title = a.title);
  }
  function Rf(e, a) {
    e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
      e.integrity == null && (e.integrity = a.integrity);
  }
  var uu = null;
  function zy(e, a, i) {
    if (uu === null) {
      var l = new Map(),
        c = (uu = new Map());
      c.set(i, l);
    } else (c = uu), (l = c.get(i)), l || ((l = new Map()), c.set(i, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), i = i.getElementsByTagName(e), c = 0;
      c < i.length;
      c++
    ) {
      var f = i[c];
      if (
        !(
          f[gt] ||
          f[se] ||
          (e === "link" && f.getAttribute("rel") === "stylesheet")
        ) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = f.getAttribute(a) || "";
        y = e + y;
        var S = l.get(y);
        S ? S.push(f) : l.set(y, [f]);
      }
    }
    return l;
  }
  function ky(e, a, i) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        i,
        a === "title" ? e.querySelector("head > title") : null
      );
  }
  function jS(e, a, i) {
    if (i === 1 || a.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof a.precedence != "string" ||
          typeof a.href != "string" ||
          a.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof a.rel != "string" ||
          typeof a.href != "string" ||
          a.href === "" ||
          a.onLoad ||
          a.onError
        )
          break;
        switch (a.rel) {
          case "stylesheet":
            return (
              (e = a.disabled), typeof a.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          a.async &&
          typeof a.async != "function" &&
          typeof a.async != "symbol" &&
          !a.onLoad &&
          !a.onError &&
          a.src &&
          typeof a.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Iy(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function DS(e, a, i, l) {
    if (
      i.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (i.state.loading & 4) === 0
    ) {
      if (i.instance === null) {
        var c = ls(l.href),
          f = a.querySelector(hl(c));
        if (f) {
          (a = f._p),
            a !== null &&
              typeof a == "object" &&
              typeof a.then == "function" &&
              (e.count++, (e = cu.bind(e)), a.then(e, e)),
            (i.state.loading |= 4),
            (i.instance = f),
            ft(f);
          return;
        }
        (f = a.ownerDocument || a),
          (l = Uy(l)),
          (c = Gn.get(c)) && Tf(l, c),
          (f = f.createElement("link")),
          ft(f);
        var y = f;
        (y._p = new Promise(function (S, A) {
          (y.onload = S), (y.onerror = A);
        })),
          Xt(f, "link", l),
          (i.instance = f);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(i, a),
        (a = i.state.preload) &&
          (i.state.loading & 3) === 0 &&
          (e.count++,
          (i = cu.bind(e)),
          a.addEventListener("load", i),
          a.addEventListener("error", i));
    }
  }
  var Af = 0;
  function MS(e, a) {
    return (
      e.stylesheets && e.count === 0 && fu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (i) {
            var l = setTimeout(function () {
              if ((e.stylesheets && fu(e, e.stylesheets), e.unsuspend)) {
                var f = e.unsuspend;
                (e.unsuspend = null), f();
              }
            }, 6e4 + a);
            0 < e.imgBytes && Af === 0 && (Af = 62500 * hS());
            var c = setTimeout(function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 &&
                  (e.stylesheets && fu(e, e.stylesheets), e.unsuspend))
              ) {
                var f = e.unsuspend;
                (e.unsuspend = null), f();
              }
            }, (e.imgBytes > Af ? 50 : 800) + a);
            return (
              (e.unsuspend = i),
              function () {
                (e.unsuspend = null), clearTimeout(l), clearTimeout(c);
              }
            );
          }
        : null
    );
  }
  function cu() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) fu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var du = null;
  function fu(e, a) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (du = new Map()),
        a.forEach(US, e),
        (du = null),
        cu.call(e));
  }
  function US(e, a) {
    if (!(a.state.loading & 4)) {
      var i = du.get(e);
      if (i) var l = i.get(null);
      else {
        (i = new Map()), du.set(e, i);
        for (
          var c = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            f = 0;
          f < c.length;
          f++
        ) {
          var y = c[f];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (i.set(y.dataset.precedence, y), (l = y));
        }
        l && i.set(null, l);
      }
      (c = a.instance),
        (y = c.getAttribute("data-precedence")),
        (f = i.get(y) || l),
        f === l && i.set(null, c),
        i.set(y, c),
        this.count++,
        (l = cu.bind(this)),
        c.addEventListener("load", l),
        c.addEventListener("error", l),
        f
          ? f.parentNode.insertBefore(c, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(c, e.firstChild)),
        (a.state.loading |= 4);
    }
  }
  var pl = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0,
  };
  function LS(e, a, i, l, c, f, y, S, A) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = rr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = rr(0)),
      (this.hiddenUpdates = rr(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = c),
      (this.onCaughtError = f),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = A),
      (this.incompleteTransitions = new Map());
  }
  function By(e, a, i, l, c, f, y, S, A, B, K, X) {
    return (
      (e = new LS(e, a, i, y, A, B, K, X, S)),
      (a = 1),
      f === !0 && (a |= 24),
      (f = wn(3, null, null, a)),
      (e.current = f),
      (f.stateNode = e),
      (a = id()),
      a.refCount++,
      (e.pooledCache = a),
      a.refCount++,
      (f.memoizedState = { element: l, isDehydrated: i, cache: a }),
      ud(f),
      e
    );
  }
  function Hy(e) {
    return e ? ((e = Bi), e) : Bi;
  }
  function Py(e, a, i, l, c, f) {
    (c = Hy(c)),
      l.context === null ? (l.context = c) : (l.pendingContext = c),
      (l = fr(a)),
      (l.payload = { element: i }),
      (f = f === void 0 ? null : f),
      f !== null && (l.callback = f),
      (i = hr(e, l, a)),
      i !== null && (fn(i, e, a), Qs(i, e, a));
  }
  function qy(e, a) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < a ? i : a;
    }
  }
  function Cf(e, a) {
    qy(e, a), (e = e.alternate) && qy(e, a);
  }
  function Vy(e) {
    if (e.tag === 13 || e.tag === 31) {
      var a = ti(e, 67108864);
      a !== null && fn(a, e, 67108864), Cf(e, 67108864);
    }
  }
  function Fy(e) {
    if (e.tag === 13 || e.tag === 31) {
      var a = Cn();
      a = q(a);
      var i = ti(e, a);
      i !== null && fn(i, e, a), Cf(e, a);
    }
  }
  var hu = !0;
  function zS(e, a, i, l) {
    var c = k.T;
    k.T = null;
    var f = J.p;
    try {
      (J.p = 2), Nf(e, a, i, l);
    } finally {
      (J.p = f), (k.T = c);
    }
  }
  function kS(e, a, i, l) {
    var c = k.T;
    k.T = null;
    var f = J.p;
    try {
      (J.p = 8), Nf(e, a, i, l);
    } finally {
      (J.p = f), (k.T = c);
    }
  }
  function Nf(e, a, i, l) {
    if (hu) {
      var c = Of(l);
      if (c === null) pf(e, a, l, mu, i), Yy(e, l);
      else if (BS(c, e, a, i, l)) l.stopPropagation();
      else if ((Yy(e, l), a & 4 && -1 < IS.indexOf(e))) {
        for (; c !== null; ) {
          var f = We(c);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var y = Ta(f.pendingLanes);
                  if (y !== 0) {
                    var S = f;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; y; ) {
                      var A = 1 << (31 - Bt(y));
                      (S.entanglements[1] |= A), (y &= ~A);
                    }
                    pa(f), (at & 6) === 0 && ((Xo = W() + 500), ul(0));
                  }
                }
                break;
              case 31:
              case 13:
                (S = ti(f, 2)), S !== null && fn(S, f, 2), Jo(), Cf(f, 2);
            }
          if (((f = Of(l)), f === null && pf(e, a, l, mu, i), f === c)) break;
          c = f;
        }
        c !== null && l.stopPropagation();
      } else pf(e, a, l, null, i);
    }
  }
  function Of(e) {
    return (e = jc(e)), jf(e);
  }
  var mu = null;
  function jf(e) {
    if (((mu = null), (e = Je(e)), e !== null)) {
      var a = u(e);
      if (a === null) e = null;
      else {
        var i = a.tag;
        if (i === 13) {
          if (((e = d(a)), e !== null)) return e;
          e = null;
        } else if (i === 31) {
          if (((e = h(a)), e !== null)) return e;
          e = null;
        } else if (i === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          e = null;
        } else a !== e && (e = null);
      }
    }
    return (mu = e), null;
  }
  function Gy(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ne()) {
          case Se:
            return 2;
          case Ye:
            return 8;
          case He:
          case xt:
            return 32;
          case da:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Df = !1,
    _r = null,
    Tr = null,
    Rr = null,
    gl = new Map(),
    yl = new Map(),
    Ar = [],
    IS =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Yy(e, a) {
    switch (e) {
      case "focusin":
      case "focusout":
        _r = null;
        break;
      case "dragenter":
      case "dragleave":
        Tr = null;
        break;
      case "mouseover":
      case "mouseout":
        Rr = null;
        break;
      case "pointerover":
      case "pointerout":
        gl.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yl.delete(a.pointerId);
    }
  }
  function vl(e, a, i, l, c, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: a,
          domEventName: i,
          eventSystemFlags: l,
          nativeEvent: f,
          targetContainers: [c],
        }),
        a !== null && ((a = We(a)), a !== null && Vy(a)),
        e)
      : ((e.eventSystemFlags |= l),
        (a = e.targetContainers),
        c !== null && a.indexOf(c) === -1 && a.push(c),
        e);
  }
  function BS(e, a, i, l, c) {
    switch (a) {
      case "focusin":
        return (_r = vl(_r, e, a, i, l, c)), !0;
      case "dragenter":
        return (Tr = vl(Tr, e, a, i, l, c)), !0;
      case "mouseover":
        return (Rr = vl(Rr, e, a, i, l, c)), !0;
      case "pointerover":
        var f = c.pointerId;
        return gl.set(f, vl(gl.get(f) || null, e, a, i, l, c)), !0;
      case "gotpointercapture":
        return (
          (f = c.pointerId), yl.set(f, vl(yl.get(f) || null, e, a, i, l, c)), !0
        );
    }
    return !1;
  }
  function Qy(e) {
    var a = Je(e.target);
    if (a !== null) {
      var i = u(a);
      if (i !== null) {
        if (((a = i.tag), a === 13)) {
          if (((a = d(i)), a !== null)) {
            (e.blockedOn = a),
              _e(e.priority, function () {
                Fy(i);
              });
            return;
          }
        } else if (a === 31) {
          if (((a = h(i)), a !== null)) {
            (e.blockedOn = a),
              _e(e.priority, function () {
                Fy(i);
              });
            return;
          }
        } else if (a === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function pu(e) {
    if (e.blockedOn !== null) return !1;
    for (var a = e.targetContainers; 0 < a.length; ) {
      var i = Of(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var l = new i.constructor(i.type, i);
        (Oc = l), i.target.dispatchEvent(l), (Oc = null);
      } else return (a = We(i)), a !== null && Vy(a), (e.blockedOn = i), !1;
      a.shift();
    }
    return !0;
  }
  function Ky(e, a, i) {
    pu(e) && i.delete(a);
  }
  function HS() {
    (Df = !1),
      _r !== null && pu(_r) && (_r = null),
      Tr !== null && pu(Tr) && (Tr = null),
      Rr !== null && pu(Rr) && (Rr = null),
      gl.forEach(Ky),
      yl.forEach(Ky);
  }
  function gu(e, a) {
    e.blockedOn === a &&
      ((e.blockedOn = null),
      Df ||
        ((Df = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, HS)));
  }
  var yu = null;
  function $y(e) {
    yu !== e &&
      ((yu = e),
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        yu === e && (yu = null);
        for (var a = 0; a < e.length; a += 3) {
          var i = e[a],
            l = e[a + 1],
            c = e[a + 2];
          if (typeof l != "function") {
            if (jf(l || i) === null) continue;
            break;
          }
          var f = We(i);
          f !== null &&
            (e.splice(a, 3),
            (a -= 3),
            Nd(f, { pending: !0, data: c, method: i.method, action: l }, l, c));
        }
      }));
  }
  function us(e) {
    function a(A) {
      return gu(A, e);
    }
    _r !== null && gu(_r, e),
      Tr !== null && gu(Tr, e),
      Rr !== null && gu(Rr, e),
      gl.forEach(a),
      yl.forEach(a);
    for (var i = 0; i < Ar.length; i++) {
      var l = Ar[i];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Ar.length && ((i = Ar[0]), i.blockedOn === null); )
      Qy(i), i.blockedOn === null && Ar.shift();
    if (((i = (e.ownerDocument || e).$$reactFormReplay), i != null))
      for (l = 0; l < i.length; l += 3) {
        var c = i[l],
          f = i[l + 1],
          y = c[de] || null;
        if (typeof f == "function") y || $y(i);
        else if (y) {
          var S = null;
          if (f && f.hasAttribute("formAction")) {
            if (((c = f), (y = f[de] || null))) S = y.formAction;
            else if (jf(c) !== null) continue;
          } else S = y.action;
          typeof S == "function" ? (i[l + 1] = S) : (i.splice(l, 3), (l -= 3)),
            $y(i);
        }
      }
  }
  function Xy() {
    function e(f) {
      f.canIntercept &&
        f.info === "react-transition" &&
        f.intercept({
          handler: function () {
            return new Promise(function (y) {
              return (c = y);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function a() {
      c !== null && (c(), (c = null)), l || setTimeout(i, 20);
    }
    function i() {
      if (!l && !navigation.transition) {
        var f = navigation.currentEntry;
        f &&
          f.url != null &&
          navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        c = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", a),
        navigation.addEventListener("navigateerror", a),
        setTimeout(i, 100),
        function () {
          (l = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", a),
            navigation.removeEventListener("navigateerror", a),
            c !== null && (c(), (c = null));
        }
      );
    }
  }
  function Mf(e) {
    this._internalRoot = e;
  }
  (vu.prototype.render = Mf.prototype.render =
    function (e) {
      var a = this._internalRoot;
      if (a === null) throw Error(s(409));
      var i = a.current,
        l = Cn();
      Py(i, l, e, a, null, null);
    }),
    (vu.prototype.unmount = Mf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var a = e.containerInfo;
          Py(e.current, 2, null, e, null, null), Jo(), (a[Ee] = null);
        }
      });
  function vu(e) {
    this._internalRoot = e;
  }
  vu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var a = ie();
      e = { blockedOn: null, target: e, priority: a };
      for (var i = 0; i < Ar.length && a !== 0 && a < Ar[i].priority; i++);
      Ar.splice(i, 0, e), i === 0 && Qy(e);
    }
  };
  var Zy = n.version;
  if (Zy !== "19.2.0") throw Error(s(527, Zy, "19.2.0"));
  J.findDOMNode = function (e) {
    var a = e._reactInternals;
    if (a === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = g(a)),
      (e = e !== null ? v(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var PS = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bu.isDisabled && bu.supportsFiber)
      try {
        (Wn = bu.inject(PS)), (dt = bu);
      } catch {}
  }
  return (
    (xl.createRoot = function (e, a) {
      if (!o(e)) throw Error(s(299));
      var i = !1,
        l = "",
        c = rg,
        f = ig,
        y = sg;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (i = !0),
          a.identifierPrefix !== void 0 && (l = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (c = a.onUncaughtError),
          a.onCaughtError !== void 0 && (f = a.onCaughtError),
          a.onRecoverableError !== void 0 && (y = a.onRecoverableError)),
        (a = By(e, 1, !1, null, null, i, l, null, c, f, y, Xy)),
        (e[Ee] = a.current),
        mf(e),
        new Mf(a)
      );
    }),
    (xl.hydrateRoot = function (e, a, i) {
      if (!o(e)) throw Error(s(299));
      var l = !1,
        c = "",
        f = rg,
        y = ig,
        S = sg,
        A = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (l = !0),
          i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (f = i.onUncaughtError),
          i.onCaughtError !== void 0 && (y = i.onCaughtError),
          i.onRecoverableError !== void 0 && (S = i.onRecoverableError),
          i.formState !== void 0 && (A = i.formState)),
        (a = By(e, 1, !0, a, i ?? null, l, c, A, f, y, S, Xy)),
        (a.context = Hy(null)),
        (i = a.current),
        (l = Cn()),
        (l = q(l)),
        (c = fr(l)),
        (c.callback = null),
        hr(i, c, l),
        (i = l),
        (a.current.lanes = i),
        ir(a, i),
        pa(a),
        (e[Ee] = a.current),
        mf(e),
        new vu(a)
      );
    }),
    (xl.version = "19.2.0"),
    xl
  );
}
var l0;
function eE() {
  if (l0) return zf.exports;
  l0 = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  return t(), (zf.exports = WS()), zf.exports;
}
var tE = eE();
var rb = (t) => {
    throw TypeError(t);
  },
  nE = (t, n, r) => n.has(t) || rb("Cannot " + r),
  Hf = (t, n, r) => (
    nE(t, n, "read from private field"), r ? r.call(t) : n.get(t)
  ),
  aE = (t, n, r) =>
    n.has(t)
      ? rb("Cannot add the same private member more than once")
      : n instanceof WeakSet
      ? n.add(t)
      : n.set(t, r),
  o0 = "popstate";
function rE(t = {}) {
  function n(s, o) {
    let { pathname: u, search: d, hash: h } = s.location;
    return zl(
      "",
      { pathname: u, search: d, hash: h },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function r(s, o) {
    return typeof o == "string" ? o : Sa(o);
  }
  return sE(n, r, null, t);
}
function Ve(t, n) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(n);
}
function Tt(t, n) {
  if (!t) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function iE() {
  return Math.random().toString(36).substring(2, 10);
}
function u0(t, n) {
  return { usr: t.state, key: t.key, idx: n };
}
function zl(t, n, r = null, s) {
  return {
    pathname: typeof t == "string" ? t : t.pathname,
    search: "",
    hash: "",
    ...(typeof n == "string" ? qr(n) : n),
    state: r,
    key: (n && n.key) || s || iE(),
  };
}
function Sa({ pathname: t = "/", search: n = "", hash: r = "" }) {
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function qr(t) {
  let n = {};
  if (t) {
    let r = t.indexOf("#");
    r >= 0 && ((n.hash = t.substring(r)), (t = t.substring(0, r)));
    let s = t.indexOf("?");
    s >= 0 && ((n.search = t.substring(s)), (t = t.substring(0, s))),
      t && (n.pathname = t);
  }
  return n;
}
function sE(t, n, r, s = {}) {
  let { window: o = document.defaultView, v5Compat: u = !1 } = s,
    d = o.history,
    h = "POP",
    p = null,
    g = v();
  g == null && ((g = 0), d.replaceState({ ...d.state, idx: g }, ""));
  function v() {
    return (d.state || { idx: null }).idx;
  }
  function b() {
    h = "POP";
    let _ = v(),
      U = _ == null ? null : _ - g;
    (g = _), p && p({ action: h, location: T.location, delta: U });
  }
  function x(_, U) {
    h = "PUSH";
    let z = zl(T.location, _, U);
    g = v() + 1;
    let Y = u0(z, g),
      Z = T.createHref(z);
    try {
      d.pushState(Y, "", Z);
    } catch (ee) {
      if (ee instanceof DOMException && ee.name === "DataCloneError") throw ee;
      o.location.assign(Z);
    }
    u && p && p({ action: h, location: T.location, delta: 1 });
  }
  function R(_, U) {
    h = "REPLACE";
    let z = zl(T.location, _, U);
    g = v();
    let Y = u0(z, g),
      Z = T.createHref(z);
    d.replaceState(Y, "", Z),
      u && p && p({ action: h, location: T.location, delta: 0 });
  }
  function E(_) {
    return ib(_);
  }
  let T = {
    get action() {
      return h;
    },
    get location() {
      return t(o, d);
    },
    listen(_) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(o0, b),
        (p = _),
        () => {
          o.removeEventListener(o0, b), (p = null);
        }
      );
    },
    createHref(_) {
      return n(o, _);
    },
    createURL: E,
    encodeLocation(_) {
      let U = E(_);
      return { pathname: U.pathname, search: U.search, hash: U.hash };
    },
    push: x,
    replace: R,
    go(_) {
      return d.go(_);
    },
  };
  return T;
}
function ib(t, n = !1) {
  let r = "http://localhost";
  typeof window < "u" &&
    (r =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ve(r, "No window.location.(origin|href) available to create URL");
  let s = typeof t == "string" ? t : Sa(t);
  return (
    (s = s.replace(/ $/, "%20")),
    !n && s.startsWith("//") && (s = r + s),
    new URL(s, r)
  );
}
var Cl,
  c0 = class {
    constructor(t) {
      if ((aE(this, Cl, new Map()), t)) for (let [n, r] of t) this.set(n, r);
    }
    get(t) {
      if (Hf(this, Cl).has(t)) return Hf(this, Cl).get(t);
      if (t.defaultValue !== void 0) return t.defaultValue;
      throw new Error("No value found for context");
    }
    set(t, n) {
      Hf(this, Cl).set(t, n);
    }
  };
Cl = new WeakMap();
var lE = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function oE(t) {
  return lE.has(t);
}
var uE = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children",
]);
function cE(t) {
  return uE.has(t);
}
function dE(t) {
  return t.index === !0;
}
function kl(t, n, r = [], s = {}, o = !1) {
  return t.map((u, d) => {
    let h = [...r, String(d)],
      p = typeof u.id == "string" ? u.id : h.join("-");
    if (
      (Ve(
        u.index !== !0 || !u.children,
        "Cannot specify children on an index route"
      ),
      Ve(
        o || !s[p],
        `Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`
      ),
      dE(u))
    ) {
      let g = { ...u, id: p };
      return (s[p] = d0(g, n(g))), g;
    } else {
      let g = { ...u, id: p, children: void 0 };
      return (
        (s[p] = d0(g, n(g))),
        u.children && (g.children = kl(u.children, n, h, s, o)),
        g
      );
    }
  });
}
function d0(t, n) {
  return Object.assign(t, {
    ...n,
    ...(typeof n.lazy == "object" && n.lazy != null
      ? { lazy: { ...t.lazy, ...n.lazy } }
      : {}),
  });
}
function Or(t, n, r = "/") {
  return Nl(t, n, r, !1);
}
function Nl(t, n, r, s) {
  let o = typeof n == "string" ? qr(n) : n,
    u = Kn(o.pathname || "/", r);
  if (u == null) return null;
  let d = sb(t);
  hE(d);
  let h = null;
  for (let p = 0; h == null && p < d.length; ++p) {
    let g = _E(u);
    h = EE(d[p], g, s);
  }
  return h;
}
function fE(t, n) {
  let { route: r, pathname: s, params: o } = t;
  return {
    id: r.id,
    pathname: s,
    params: o,
    data: n[r.id],
    loaderData: n[r.id],
    handle: r.handle,
  };
}
function sb(t, n = [], r = [], s = "", o = !1) {
  let u = (d, h, p = o, g) => {
    let v = {
      relativePath: g === void 0 ? d.path || "" : g,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d,
    };
    if (v.relativePath.startsWith("/")) {
      if (!v.relativePath.startsWith(s) && p) return;
      Ve(
        v.relativePath.startsWith(s),
        `Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (v.relativePath = v.relativePath.slice(s.length));
    }
    let b = va([s, v.relativePath]),
      x = r.concat(v);
    d.children &&
      d.children.length > 0 &&
      (Ve(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${b}".`
      ),
      sb(d.children, n, x, b, p)),
      !(d.path == null && !d.index) &&
        n.push({ path: b, score: xE(b, d.index), routesMeta: x });
  };
  return (
    t.forEach((d, h) => {
      if (d.path === "" || !d.path?.includes("?")) u(d, h);
      else for (let p of lb(d.path)) u(d, h, !0, p);
    }),
    n
  );
}
function lb(t) {
  let n = t.split("/");
  if (n.length === 0) return [];
  let [r, ...s] = n,
    o = r.endsWith("?"),
    u = r.replace(/\?$/, "");
  if (s.length === 0) return o ? [u, ""] : [u];
  let d = lb(s.join("/")),
    h = [];
  return (
    h.push(...d.map((p) => (p === "" ? u : [u, p].join("/")))),
    o && h.push(...d),
    h.map((p) => (t.startsWith("/") && p === "" ? "/" : p))
  );
}
function hE(t) {
  t.sort((n, r) =>
    n.score !== r.score
      ? r.score - n.score
      : SE(
          n.routesMeta.map((s) => s.childrenIndex),
          r.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
var mE = /^:[\w-]+$/,
  pE = 3,
  gE = 2,
  yE = 1,
  vE = 10,
  bE = -2,
  f0 = (t) => t === "*";
function xE(t, n) {
  let r = t.split("/"),
    s = r.length;
  return (
    r.some(f0) && (s += bE),
    n && (s += gE),
    r
      .filter((o) => !f0(o))
      .reduce((o, u) => o + (mE.test(u) ? pE : u === "" ? yE : vE), s)
  );
}
function SE(t, n) {
  return t.length === n.length && t.slice(0, -1).every((s, o) => s === n[o])
    ? t[t.length - 1] - n[n.length - 1]
    : 0;
}
function EE(t, n, r = !1) {
  let { routesMeta: s } = t,
    o = {},
    u = "/",
    d = [];
  for (let h = 0; h < s.length; ++h) {
    let p = s[h],
      g = h === s.length - 1,
      v = u === "/" ? n : n.slice(u.length) || "/",
      b = Bu(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: g },
        v
      ),
      x = p.route;
    if (
      (!b &&
        g &&
        r &&
        !s[s.length - 1].route.index &&
        (b = Bu(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          v
        )),
      !b)
    )
      return null;
    Object.assign(o, b.params),
      d.push({
        params: o,
        pathname: va([u, b.pathname]),
        pathnameBase: CE(va([u, b.pathnameBase])),
        route: x,
      }),
      b.pathnameBase !== "/" && (u = va([u, b.pathnameBase]));
  }
  return d;
}
function Bu(t, n) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [r, s] = wE(t.path, t.caseSensitive, t.end),
    o = n.match(r);
  if (!o) return null;
  let u = o[0],
    d = u.replace(/(.)\/+$/, "$1"),
    h = o.slice(1);
  return {
    params: s.reduce((g, { paramName: v, isOptional: b }, x) => {
      if (v === "*") {
        let E = h[x] || "";
        d = u.slice(0, u.length - E.length).replace(/(.)\/+$/, "$1");
      }
      const R = h[x];
      return (
        b && !R ? (g[v] = void 0) : (g[v] = (R || "").replace(/%2F/g, "/")), g
      );
    }, {}),
    pathname: u,
    pathnameBase: d,
    pattern: t,
  };
}
function wE(t, n = !1, r = !0) {
  Tt(
    t === "*" || !t.endsWith("*") || t.endsWith("/*"),
    `Route path "${t}" will be treated as if it were "${t.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let s = [],
    o =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, h, p) => (
            s.push({ paramName: h, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    t.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (o += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (o += "\\/*$")
      : t !== "" && t !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, n ? void 0 : "i"), s]
  );
}
function _E(t) {
  try {
    return t
      .split("/")
      .map((n) => decodeURIComponent(n).replace(/\//g, "%2F"))
      .join("/");
  } catch (n) {
    return (
      Tt(
        !1,
        `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`
      ),
      t
    );
  }
}
function Kn(t, n) {
  if (n === "/") return t;
  if (!t.toLowerCase().startsWith(n.toLowerCase())) return null;
  let r = n.endsWith("/") ? n.length - 1 : n.length,
    s = t.charAt(r);
  return s && s !== "/" ? null : t.slice(r) || "/";
}
function TE({ basename: t, pathname: n }) {
  return n === "/" ? t : va([t, n]);
}
var RE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  rc = (t) => RE.test(t);
function AE(t, n = "/") {
  let {
      pathname: r,
      search: s = "",
      hash: o = "",
    } = typeof t == "string" ? qr(t) : t,
    u;
  if (r)
    if (rc(r)) u = r;
    else {
      if (r.includes("//")) {
        let d = r;
        (r = r.replace(/\/\/+/g, "/")),
          Tt(
            !1,
            `Pathnames cannot have embedded double slashes - normalizing ${d} -> ${r}`
          );
      }
      r.startsWith("/") ? (u = h0(r.substring(1), "/")) : (u = h0(r, n));
    }
  else u = n;
  return { pathname: u, search: NE(s), hash: OE(o) };
}
function h0(t, n) {
  let r = n.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((o) => {
      o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Pf(t, n, r, s) {
  return `Cannot include a '${t}' character in a manually specified \`to.${n}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ob(t) {
  return t.filter(
    (n, r) => r === 0 || (n.route.path && n.route.path.length > 0)
  );
}
function ic(t) {
  let n = ob(t);
  return n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase));
}
function sc(t, n, r, s = !1) {
  let o;
  typeof t == "string"
    ? (o = qr(t))
    : ((o = { ...t }),
      Ve(
        !o.pathname || !o.pathname.includes("?"),
        Pf("?", "pathname", "search", o)
      ),
      Ve(
        !o.pathname || !o.pathname.includes("#"),
        Pf("#", "pathname", "hash", o)
      ),
      Ve(!o.search || !o.search.includes("#"), Pf("#", "search", "hash", o)));
  let u = t === "" || o.pathname === "",
    d = u ? "/" : o.pathname,
    h;
  if (d == null) h = r;
  else {
    let b = n.length - 1;
    if (!s && d.startsWith("..")) {
      let x = d.split("/");
      for (; x[0] === ".."; ) x.shift(), (b -= 1);
      o.pathname = x.join("/");
    }
    h = b >= 0 ? n[b] : "/";
  }
  let p = AE(o, h),
    g = d && d !== "/" && d.endsWith("/"),
    v = (u || d === ".") && r.endsWith("/");
  return !p.pathname.endsWith("/") && (g || v) && (p.pathname += "/"), p;
}
var va = (t) => t.join("/").replace(/\/\/+/g, "/"),
  CE = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  NE = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  OE = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t),
  lc = class {
    constructor(t, n, r, s = !1) {
      (this.status = t),
        (this.statusText = n || ""),
        (this.internal = s),
        r instanceof Error
          ? ((this.data = r.toString()), (this.error = r))
          : (this.data = r);
    }
  };
function Il(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
function Vl(t) {
  return (
    t
      .map((n) => n.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var kr = Symbol("Uninstrumented");
function jE(t, n) {
  let r = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: [],
  };
  t.forEach((o) =>
    o({
      id: n.id,
      index: n.index,
      path: n.path,
      instrument(u) {
        let d = Object.keys(r);
        for (let h of d) u[h] && r[h].push(u[h]);
      },
    })
  );
  let s = {};
  if (typeof n.lazy == "function" && r.lazy.length > 0) {
    let o = hs(r.lazy, n.lazy, () => {});
    o && (s.lazy = o);
  }
  if (typeof n.lazy == "object") {
    let o = n.lazy;
    ["middleware", "loader", "action"].forEach((u) => {
      let d = o[u],
        h = r[`lazy.${u}`];
      if (typeof d == "function" && h.length > 0) {
        let p = hs(h, d, () => {});
        p && (s.lazy = Object.assign(s.lazy || {}, { [u]: p }));
      }
    });
  }
  return (
    ["loader", "action"].forEach((o) => {
      let u = n[o];
      if (typeof u == "function" && r[o].length > 0) {
        let d = u[kr] ?? u,
          h = hs(r[o], d, (...p) => m0(p[0]));
        h && ((h[kr] = d), (s[o] = h));
      }
    }),
    n.middleware &&
      n.middleware.length > 0 &&
      r.middleware.length > 0 &&
      (s.middleware = n.middleware.map((o) => {
        let u = o[kr] ?? o,
          d = hs(r.middleware, u, (...h) => m0(h[0]));
        return d ? ((d[kr] = u), d) : o;
      })),
    s
  );
}
function DE(t, n) {
  let r = { navigate: [], fetch: [] };
  if (
    (n.forEach((s) =>
      s({
        instrument(o) {
          let u = Object.keys(o);
          for (let d of u) o[d] && r[d].push(o[d]);
        },
      })
    ),
    r.navigate.length > 0)
  ) {
    let s = t.navigate[kr] ?? t.navigate,
      o = hs(r.navigate, s, (...u) => {
        let [d, h] = u;
        return {
          to:
            typeof d == "number" || typeof d == "string" ? d : d ? Sa(d) : ".",
          ...p0(t, h ?? {}),
        };
      });
    o && ((o[kr] = s), (t.navigate = o));
  }
  if (r.fetch.length > 0) {
    let s = t.fetch[kr] ?? t.fetch,
      o = hs(r.fetch, s, (...u) => {
        let [d, , h, p] = u;
        return { href: h ?? ".", fetcherKey: d, ...p0(t, p ?? {}) };
      });
    o && ((o[kr] = s), (t.fetch = o));
  }
  return t;
}
function hs(t, n, r) {
  return t.length === 0
    ? null
    : async (...s) => {
        let o = await ub(t, r(...s), () => n(...s), t.length - 1);
        if (o.type === "error") throw o.value;
        return o.value;
      };
}
async function ub(t, n, r, s) {
  let o = t[s],
    u;
  if (o) {
    let d,
      h = async () => (
        d
          ? console.error(
              "You cannot call instrumented handlers more than once"
            )
          : (d = ub(t, n, r, s - 1)),
        (u = await d),
        Ve(u, "Expected a result"),
        u.type === "error" && u.value instanceof Error
          ? { status: "error", error: u.value }
          : { status: "success", error: void 0 }
      );
    try {
      await o(h, n);
    } catch (p) {
      console.error("An instrumentation function threw an error:", p);
    }
    d || (await h()), await d;
  } else
    try {
      u = { type: "success", value: await r() };
    } catch (d) {
      u = { type: "error", value: d };
    }
  return (
    u || {
      type: "error",
      value: new Error("No result assigned in instrumentation chain."),
    }
  );
}
function m0(t) {
  let { request: n, context: r, params: s, unstable_pattern: o } = t;
  return {
    request: ME(n),
    params: { ...s },
    unstable_pattern: o,
    context: UE(r),
  };
}
function p0(t, n) {
  return {
    currentUrl: Sa(t.state.location),
    ...("formMethod" in n ? { formMethod: n.formMethod } : {}),
    ...("formEncType" in n ? { formEncType: n.formEncType } : {}),
    ...("formData" in n ? { formData: n.formData } : {}),
    ...("body" in n ? { body: n.body } : {}),
  };
}
function ME(t) {
  return {
    method: t.method,
    url: t.url,
    headers: { get: (...n) => t.headers.get(...n) },
  };
}
function UE(t) {
  if (zE(t)) {
    let n = { ...t };
    return Object.freeze(n), n;
  } else return { get: (n) => t.get(n) };
}
var LE = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function zE(t) {
  if (t === null || typeof t != "object") return !1;
  const n = Object.getPrototypeOf(t);
  return (
    n === Object.prototype ||
    n === null ||
    Object.getOwnPropertyNames(n).sort().join("\0") === LE
  );
}
var cb = ["POST", "PUT", "PATCH", "DELETE"],
  kE = new Set(cb),
  IE = ["GET", ...cb],
  BE = new Set(IE),
  HE = new Set([301, 302, 303, 307, 308]),
  PE = new Set([307, 308]),
  qf = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  qE = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Sl = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  VE = (t) => ({ hasErrorBoundary: !!t.hasErrorBoundary }),
  db = "remix-router-transitions",
  fb = Symbol("ResetLoaderData");
function FE(t) {
  const n = t.window ? t.window : typeof window < "u" ? window : void 0,
    r =
      typeof n < "u" &&
      typeof n.document < "u" &&
      typeof n.document.createElement < "u";
  Ve(
    t.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let s = t.hydrationRouteProperties || [],
    o = t.mapRouteProperties || VE,
    u = o;
  if (t.unstable_instrumentations) {
    let C = t.unstable_instrumentations;
    u = (L) => ({ ...o(L), ...jE(C.map((q) => q.route).filter(Boolean), L) });
  }
  let d = {},
    h = kl(t.routes, u, void 0, d),
    p,
    g = t.basename || "/";
  g.startsWith("/") || (g = `/${g}`);
  let v = t.dataStrategy || $E,
    b = { ...t.future },
    x = null,
    R = new Set(),
    E = null,
    T = null,
    _ = null,
    U = t.hydrationData != null,
    z = Or(h, t.history.location, g),
    Y = !1,
    Z = null,
    ee;
  if (z == null && !t.patchRoutesOnNavigation) {
    let C = Yn(404, { pathname: t.history.location.pathname }),
      { matches: L, route: q } = xu(h);
    (ee = !0), (z = L), (Z = { [q.id]: C });
  } else if (
    (z &&
      !t.hydrationData &&
      Xr(z, h, t.history.location.pathname).active &&
      (z = null),
    z)
  )
    if (z.some((C) => C.route.lazy)) ee = !1;
    else if (!z.some((C) => Mh(C.route))) ee = !0;
    else {
      let C = t.hydrationData ? t.hydrationData.loaderData : null,
        L = t.hydrationData ? t.hydrationData.errors : null;
      if (L) {
        let q = z.findIndex((te) => L[te.route.id] !== void 0);
        ee = z.slice(0, q + 1).every((te) => !ah(te.route, C, L));
      } else ee = z.every((q) => !ah(q.route, C, L));
    }
  else {
    (ee = !1), (z = []);
    let C = Xr(null, h, t.history.location.pathname);
    C.active && C.matches && ((Y = !0), (z = C.matches));
  }
  let pe,
    N = {
      historyAction: t.history.action,
      location: t.history.location,
      matches: z,
      initialized: ee,
      navigation: qf,
      restoreScrollPosition: t.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (t.hydrationData && t.hydrationData.loaderData) || {},
      actionData: (t.hydrationData && t.hydrationData.actionData) || null,
      errors: (t.hydrationData && t.hydrationData.errors) || Z,
      fetchers: new Map(),
      blockers: new Map(),
    },
    me = "POP",
    fe = null,
    Re = !1,
    ge,
    ce = !1,
    he = new Map(),
    ye = null,
    Ne = !1,
    k = !1,
    J = new Set(),
    re = new Map(),
    Oe = 0,
    ze = -1,
    O = new Map(),
    G = new Set(),
    ae = new Map(),
    le = new Map(),
    we = new Set(),
    Le = new Map(),
    qe,
    bt = null;
  function ct() {
    if (
      ((x = t.history.listen(({ action: C, location: L, delta: q }) => {
        if (qe) {
          qe(), (qe = void 0);
          return;
        }
        Tt(
          Le.size === 0 || q != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let te = Qr({
          currentLocation: N.location,
          nextLocation: L,
          historyAction: C,
        });
        if (te && q != null) {
          let ie = new Promise((_e) => {
            qe = _e;
          });
          t.history.go(q * -1),
            _a(te, {
              state: "blocked",
              location: L,
              proceed() {
                _a(te, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: L,
                }),
                  ie.then(() => t.history.go(q));
              },
              reset() {
                let _e = new Map(N.blockers);
                _e.set(te, Sl), _t({ blockers: _e });
              },
            }),
            fe?.resolve(),
            (fe = null);
          return;
        }
        return yn(C, L);
      })),
      r)
    ) {
      dw(n, he);
      let C = () => fw(n, he);
      n.addEventListener("pagehide", C),
        (ye = () => n.removeEventListener("pagehide", C));
    }
    return N.initialized || yn("POP", N.location, { initialHydration: !0 }), pe;
  }
  function Zn() {
    x && x(),
      ye && ye(),
      R.clear(),
      ge && ge.abort(),
      N.fetchers.forEach((C, L) => Yr(L)),
      N.blockers.forEach((C, L) => so(L));
  }
  function tr(C) {
    return R.add(C), () => R.delete(C);
  }
  function _t(C, L = {}) {
    C.matches &&
      (C.matches = C.matches.map((ie) => {
        let _e = d[ie.route.id],
          ve = ie.route;
        return ve.element !== _e.element ||
          ve.errorElement !== _e.errorElement ||
          ve.hydrateFallbackElement !== _e.hydrateFallbackElement
          ? { ...ie, route: _e }
          : ie;
      })),
      (N = { ...N, ...C });
    let q = [],
      te = [];
    N.fetchers.forEach((ie, _e) => {
      ie.state === "idle" && (we.has(_e) ? q.push(_e) : te.push(_e));
    }),
      we.forEach((ie) => {
        !N.fetchers.has(ie) && !re.has(ie) && q.push(ie);
      }),
      [...R].forEach((ie) =>
        ie(N, {
          deletedFetchers: q,
          newErrors: C.errors ?? null,
          viewTransitionOpts: L.viewTransitionOpts,
          flushSync: L.flushSync === !0,
        })
      ),
      q.forEach((ie) => Yr(ie)),
      te.forEach((ie) => N.fetchers.delete(ie));
  }
  function Jn(C, L, { flushSync: q } = {}) {
    let te =
        N.actionData != null &&
        N.navigation.formMethod != null &&
        an(N.navigation.formMethod) &&
        N.navigation.state === "loading" &&
        C.state?._isRedirect !== !0,
      ie;
    L.actionData
      ? Object.keys(L.actionData).length > 0
        ? (ie = L.actionData)
        : (ie = null)
      : te
      ? (ie = N.actionData)
      : (ie = null);
    let _e = L.loaderData
        ? T0(N.loaderData, L.loaderData, L.matches || [], L.errors)
        : N.loaderData,
      ve = N.blockers;
    ve.size > 0 && ((ve = new Map(ve)), ve.forEach((Te, Ae) => ve.set(Ae, Sl)));
    let se = Ne ? !1 : lo(C, L.matches || N.matches),
      de =
        Re === !0 ||
        (N.navigation.formMethod != null &&
          an(N.navigation.formMethod) &&
          C.state?._isRedirect !== !0);
    p && ((h = p), (p = void 0)),
      Ne ||
        me === "POP" ||
        (me === "PUSH"
          ? t.history.push(C, C.state)
          : me === "REPLACE" && t.history.replace(C, C.state));
    let Ee;
    if (me === "POP") {
      let Te = he.get(N.location.pathname);
      Te && Te.has(C.pathname)
        ? (Ee = { currentLocation: N.location, nextLocation: C })
        : he.has(C.pathname) &&
          (Ee = { currentLocation: C, nextLocation: N.location });
    } else if (ce) {
      let Te = he.get(N.location.pathname);
      Te
        ? Te.add(C.pathname)
        : ((Te = new Set([C.pathname])), he.set(N.location.pathname, Te)),
        (Ee = { currentLocation: N.location, nextLocation: C });
    }
    _t(
      {
        ...L,
        actionData: ie,
        loaderData: _e,
        historyAction: me,
        location: C,
        initialized: !0,
        navigation: qf,
        revalidation: "idle",
        restoreScrollPosition: se,
        preventScrollReset: de,
        blockers: ve,
      },
      { viewTransitionOpts: Ee, flushSync: q === !0 }
    ),
      (me = "POP"),
      (Re = !1),
      (ce = !1),
      (Ne = !1),
      (k = !1),
      fe?.resolve(),
      (fe = null),
      bt?.resolve(),
      (bt = null);
  }
  async function gn(C, L) {
    if ((fe?.resolve(), (fe = null), typeof C == "number")) {
      fe || (fe = N0());
      let rt = fe.promise;
      return t.history.go(C), rt;
    }
    let q = nh(N.location, N.matches, g, C, L?.fromRouteId, L?.relative),
      { path: te, submission: ie, error: _e } = g0(!1, q, L),
      ve = N.location,
      se = zl(N.location, te, L && L.state);
    se = { ...se, ...t.history.encodeLocation(se) };
    let de = L && L.replace != null ? L.replace : void 0,
      Ee = "PUSH";
    de === !0
      ? (Ee = "REPLACE")
      : de === !1 ||
        (ie != null &&
          an(ie.formMethod) &&
          ie.formAction === N.location.pathname + N.location.search &&
          (Ee = "REPLACE"));
    let Te =
        L && "preventScrollReset" in L ? L.preventScrollReset === !0 : void 0,
      Ae = (L && L.flushSync) === !0,
      Xe = Qr({ currentLocation: ve, nextLocation: se, historyAction: Ee });
    if (Xe) {
      _a(Xe, {
        state: "blocked",
        location: se,
        proceed() {
          _a(Xe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: se,
          }),
            gn(C, L);
        },
        reset() {
          let rt = new Map(N.blockers);
          rt.set(Xe, Sl), _t({ blockers: rt });
        },
      });
      return;
    }
    await yn(Ee, se, {
      submission: ie,
      pendingError: _e,
      preventScrollReset: Te,
      replace: L && L.replace,
      enableViewTransition: L && L.viewTransition,
      flushSync: Ae,
    });
  }
  function nr() {
    bt || (bt = N0()), Ye(), _t({ revalidation: "loading" });
    let C = bt.promise;
    return N.navigation.state === "submitting"
      ? C
      : N.navigation.state === "idle"
      ? (yn(N.historyAction, N.location, {
          startUninterruptedRevalidation: !0,
        }),
        C)
      : (yn(me || N.historyAction, N.navigation.location, {
          overrideNavigation: N.navigation,
          enableViewTransition: ce === !0,
        }),
        C);
  }
  async function yn(C, L, q) {
    ge && ge.abort(),
      (ge = null),
      (me = C),
      (Ne = (q && q.startUninterruptedRevalidation) === !0),
      $r(N.location, N.matches),
      (Re = (q && q.preventScrollReset) === !0),
      (ce = (q && q.enableViewTransition) === !0);
    let te = p || h,
      ie = q && q.overrideNavigation,
      _e =
        q?.initialHydration && N.matches && N.matches.length > 0 && !Y
          ? N.matches
          : Or(te, L, g),
      ve = (q && q.flushSync) === !0;
    if (
      _e &&
      N.initialized &&
      !k &&
      aw(N.location, L) &&
      !(q && q.submission && an(q.submission.formMethod))
    ) {
      Jn(L, { matches: _e }, { flushSync: ve });
      return;
    }
    let se = Xr(_e, te, L.pathname);
    if ((se.active && se.matches && (_e = se.matches), !_e)) {
      let { error: Rt, notFoundMatches: Je, route: We } = ar(L.pathname);
      Jn(
        L,
        { matches: Je, loaderData: {}, errors: { [We.id]: Rt } },
        { flushSync: ve }
      );
      return;
    }
    ge = new AbortController();
    let de = ds(t.history, L, ge.signal, q && q.submission),
      Ee = t.getContext ? await t.getContext() : new c0(),
      Te;
    if (q && q.pendingError)
      Te = [jr(_e).route.id, { type: "error", error: q.pendingError }];
    else if (q && q.submission && an(q.submission.formMethod)) {
      let Rt = await Ns(
        de,
        L,
        q.submission,
        _e,
        Ee,
        se.active,
        q && q.initialHydration === !0,
        { replace: q.replace, flushSync: ve }
      );
      if (Rt.shortCircuited) return;
      if (Rt.pendingActionResult) {
        let [Je, We] = Rt.pendingActionResult;
        if (Nn(We) && Il(We.error) && We.error.status === 404) {
          (ge = null),
            Jn(L, {
              matches: Rt.matches,
              loaderData: {},
              errors: { [Je]: We.error },
            });
          return;
        }
      }
      (_e = Rt.matches || _e),
        (Te = Rt.pendingActionResult),
        (ie = Vf(L, q.submission)),
        (ve = !1),
        (se.active = !1),
        (de = ds(t.history, de.url, de.signal));
    }
    let {
      shortCircuited: Ae,
      matches: Xe,
      loaderData: rt,
      errors: gt,
    } = await Os(
      de,
      L,
      _e,
      Ee,
      se.active,
      ie,
      q && q.submission,
      q && q.fetcherSubmission,
      q && q.replace,
      q && q.initialHydration === !0,
      ve,
      Te
    );
    Ae ||
      ((ge = null),
      Jn(L, { matches: Xe || _e, ...R0(Te), loaderData: rt, errors: gt }));
  }
  async function Ns(C, L, q, te, ie, _e, ve, se = {}) {
    Ye();
    let de = uw(L, q);
    if ((_t({ navigation: de }, { flushSync: se.flushSync === !0 }), _e)) {
      let Ae = await rr(te, L.pathname, C.signal);
      if (Ae.type === "aborted") return { shortCircuited: !0 };
      if (Ae.type === "error") {
        if (Ae.partialMatches.length === 0) {
          let { matches: rt, route: gt } = xu(h);
          return {
            matches: rt,
            pendingActionResult: [gt.id, { type: "error", error: Ae.error }],
          };
        }
        let Xe = jr(Ae.partialMatches).route.id;
        return {
          matches: Ae.partialMatches,
          pendingActionResult: [Xe, { type: "error", error: Ae.error }],
        };
      } else if (Ae.matches) te = Ae.matches;
      else {
        let { notFoundMatches: Xe, error: rt, route: gt } = ar(L.pathname);
        return {
          matches: Xe,
          pendingActionResult: [gt.id, { type: "error", error: rt }],
        };
      }
    }
    let Ee,
      Te = Cu(te, L);
    if (!Te.route.action && !Te.route.lazy)
      Ee = {
        type: "error",
        error: Yn(405, {
          method: C.method,
          pathname: L.pathname,
          routeId: Te.route.id,
        }),
      };
    else {
      let Ae = ps(u, d, C, te, Te, ve ? [] : s, ie),
        Xe = await ne(C, Ae, ie, null);
      if (((Ee = Xe[Te.route.id]), !Ee)) {
        for (let rt of te)
          if (Xe[rt.route.id]) {
            Ee = Xe[rt.route.id];
            break;
          }
      }
      if (C.signal.aborted) return { shortCircuited: !0 };
    }
    if (pi(Ee)) {
      let Ae;
      return (
        se && se.replace != null
          ? (Ae = se.replace)
          : (Ae =
              E0(Ee.response.headers.get("Location"), new URL(C.url), g) ===
              N.location.pathname + N.location.search),
        await W(C, Ee, !0, { submission: q, replace: Ae }),
        { shortCircuited: !0 }
      );
    }
    if (Nn(Ee)) {
      let Ae = jr(te, Te.route.id);
      return (
        (se && se.replace) !== !0 && (me = "PUSH"),
        { matches: te, pendingActionResult: [Ae.route.id, Ee, Te.route.id] }
      );
    }
    return { matches: te, pendingActionResult: [Te.route.id, Ee] };
  }
  async function Os(C, L, q, te, ie, _e, ve, se, de, Ee, Te, Ae) {
    let Xe = _e || Vf(L, ve),
      rt = ve || se || C0(Xe),
      gt = !Ne && !Ee;
    if (ie) {
      if (gt) {
        let Vt = wa(Ae);
        _t(
          { navigation: Xe, ...(Vt !== void 0 ? { actionData: Vt } : {}) },
          { flushSync: Te }
        );
      }
      let Qe = await rr(q, L.pathname, C.signal);
      if (Qe.type === "aborted") return { shortCircuited: !0 };
      if (Qe.type === "error") {
        if (Qe.partialMatches.length === 0) {
          let { matches: ea, route: zn } = xu(h);
          return { matches: ea, loaderData: {}, errors: { [zn.id]: Qe.error } };
        }
        let Vt = jr(Qe.partialMatches).route.id;
        return {
          matches: Qe.partialMatches,
          loaderData: {},
          errors: { [Vt]: Qe.error },
        };
      } else if (Qe.matches) q = Qe.matches;
      else {
        let { error: Vt, notFoundMatches: ea, route: zn } = ar(L.pathname);
        return { matches: ea, loaderData: {}, errors: { [zn.id]: Vt } };
      }
    }
    let Rt = p || h,
      { dsMatches: Je, revalidatingFetchers: We } = y0(
        C,
        te,
        u,
        d,
        t.history,
        N,
        q,
        rt,
        L,
        Ee ? [] : s,
        Ee === !0,
        k,
        J,
        we,
        ae,
        G,
        Rt,
        g,
        t.patchRoutesOnNavigation != null,
        Ae
      );
    if (
      ((ze = ++Oe),
      !t.dataStrategy &&
        !Je.some((Qe) => Qe.shouldLoad) &&
        !Je.some(
          (Qe) => Qe.route.middleware && Qe.route.middleware.length > 0
        ) &&
        We.length === 0)
    ) {
      let Qe = Bt();
      return (
        Jn(
          L,
          {
            matches: q,
            loaderData: {},
            errors: Ae && Nn(Ae[1]) ? { [Ae[0]]: Ae[1].error } : null,
            ...R0(Ae),
            ...(Qe ? { fetchers: new Map(N.fetchers) } : {}),
          },
          { flushSync: Te }
        ),
        { shortCircuited: !0 }
      );
    }
    if (gt) {
      let Qe = {};
      if (!ie) {
        Qe.navigation = Xe;
        let Vt = wa(Ae);
        Vt !== void 0 && (Qe.actionData = Vt);
      }
      We.length > 0 && (Qe.fetchers = j(We)), _t(Qe, { flushSync: Te });
    }
    We.forEach((Qe) => {
      dt(Qe.key), Qe.controller && re.set(Qe.key, Qe.controller);
    });
    let bn = () => We.forEach((Qe) => dt(Qe.key));
    ge && ge.signal.addEventListener("abort", bn);
    let { loaderResults: Ln, fetcherResults: ft } = await Se(Je, We, C, te);
    if (C.signal.aborted) return { shortCircuited: !0 };
    ge && ge.signal.removeEventListener("abort", bn),
      We.forEach((Qe) => re.delete(Qe.key));
    let xn = Su(Ln);
    if (xn)
      return await W(C, xn.result, !0, { replace: de }), { shortCircuited: !0 };
    if (((xn = Su(ft)), xn))
      return (
        G.add(xn.key),
        await W(C, xn.result, !0, { replace: de }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ni, errors: Sn } = _0(N, q, Ln, Ae, We, ft);
    Ee && N.errors && (Sn = { ...N.errors, ...Sn });
    let sn = Bt(),
      Oi = Ai(ze),
      Zr = sn || Oi || We.length > 0;
    return {
      matches: q,
      loaderData: Ni,
      errors: Sn,
      ...(Zr ? { fetchers: new Map(N.fetchers) } : {}),
    };
  }
  function wa(C) {
    if (C && !Nn(C[1])) return { [C[0]]: C[1].data };
    if (N.actionData)
      return Object.keys(N.actionData).length === 0 ? null : N.actionData;
  }
  function j(C) {
    return (
      C.forEach((L) => {
        let q = N.fetchers.get(L.key),
          te = El(void 0, q ? q.data : void 0);
        N.fetchers.set(L.key, te);
      }),
      new Map(N.fetchers)
    );
  }
  async function H(C, L, q, te) {
    dt(C);
    let ie = (te && te.flushSync) === !0,
      _e = p || h,
      ve = nh(N.location, N.matches, g, q, L, te?.relative),
      se = Or(_e, ve, g),
      de = Xr(se, _e, ve);
    if ((de.active && de.matches && (se = de.matches), !se)) {
      xt(C, L, Yn(404, { pathname: ve }), { flushSync: ie });
      return;
    }
    let { path: Ee, submission: Te, error: Ae } = g0(!0, ve, te);
    if (Ae) {
      xt(C, L, Ae, { flushSync: ie });
      return;
    }
    let Xe = t.getContext ? await t.getContext() : new c0(),
      rt = (te && te.preventScrollReset) === !0;
    if (Te && an(Te.formMethod)) {
      await Q(C, L, Ee, se, Xe, de.active, ie, rt, Te);
      return;
    }
    ae.set(C, { routeId: L, path: Ee }),
      await oe(C, L, Ee, se, Xe, de.active, ie, rt, Te);
  }
  async function Q(C, L, q, te, ie, _e, ve, se, de) {
    Ye(), ae.delete(C);
    let Ee = N.fetchers.get(C);
    He(C, cw(de, Ee), { flushSync: ve });
    let Te = new AbortController(),
      Ae = ds(t.history, q, Te.signal, de);
    if (_e) {
      let et = await rr(te, new URL(Ae.url).pathname, Ae.signal, C);
      if (et.type === "aborted") return;
      if (et.type === "error") {
        xt(C, L, et.error, { flushSync: ve });
        return;
      } else if (et.matches) te = et.matches;
      else {
        xt(C, L, Yn(404, { pathname: q }), { flushSync: ve });
        return;
      }
    }
    let Xe = Cu(te, q);
    if (!Xe.route.action && !Xe.route.lazy) {
      let et = Yn(405, { method: de.formMethod, pathname: q, routeId: L });
      xt(C, L, et, { flushSync: ve });
      return;
    }
    re.set(C, Te);
    let rt = Oe,
      gt = ps(u, d, Ae, te, Xe, s, ie),
      Rt = await ne(Ae, gt, ie, C),
      Je = Rt[Xe.route.id];
    if (!Je) {
      for (let et of gt)
        if (Rt[et.route.id]) {
          Je = Rt[et.route.id];
          break;
        }
    }
    if (Ae.signal.aborted) {
      re.get(C) === Te && re.delete(C);
      return;
    }
    if (we.has(C)) {
      if (pi(Je) || Nn(Je)) {
        He(C, Qa(void 0));
        return;
      }
    } else {
      if (pi(Je))
        if ((re.delete(C), ze > rt)) {
          He(C, Qa(void 0));
          return;
        } else
          return (
            G.add(C),
            He(C, El(de)),
            W(Ae, Je, !1, { fetcherSubmission: de, preventScrollReset: se })
          );
      if (Nn(Je)) {
        xt(C, L, Je.error);
        return;
      }
    }
    let We = N.navigation.location || N.location,
      bn = ds(t.history, We, Te.signal),
      Ln = p || h,
      ft =
        N.navigation.state !== "idle"
          ? Or(Ln, N.navigation.location, g)
          : N.matches;
    Ve(ft, "Didn't find any matches after fetcher action");
    let xn = ++Oe;
    O.set(C, xn);
    let Ni = El(de, Je.data);
    N.fetchers.set(C, Ni);
    let { dsMatches: Sn, revalidatingFetchers: sn } = y0(
      bn,
      ie,
      u,
      d,
      t.history,
      N,
      ft,
      de,
      We,
      s,
      !1,
      k,
      J,
      we,
      ae,
      G,
      Ln,
      g,
      t.patchRoutesOnNavigation != null,
      [Xe.route.id, Je]
    );
    sn
      .filter((et) => et.key !== C)
      .forEach((et) => {
        let Yt = et.key,
          js = N.fetchers.get(Yt),
          Tc = El(void 0, js ? js.data : void 0);
        N.fetchers.set(Yt, Tc),
          dt(Yt),
          et.controller && re.set(Yt, et.controller);
      }),
      _t({ fetchers: new Map(N.fetchers) });
    let Oi = () => sn.forEach((et) => dt(et.key));
    Te.signal.addEventListener("abort", Oi);
    let { loaderResults: Zr, fetcherResults: Qe } = await Se(Sn, sn, bn, ie);
    if (Te.signal.aborted) return;
    if (
      (Te.signal.removeEventListener("abort", Oi),
      O.delete(C),
      re.delete(C),
      sn.forEach((et) => re.delete(et.key)),
      N.fetchers.has(C))
    ) {
      let et = Qa(Je.data);
      N.fetchers.set(C, et);
    }
    let Vt = Su(Zr);
    if (Vt) return W(bn, Vt.result, !1, { preventScrollReset: se });
    if (((Vt = Su(Qe)), Vt))
      return G.add(Vt.key), W(bn, Vt.result, !1, { preventScrollReset: se });
    let { loaderData: ea, errors: zn } = _0(N, ft, Zr, void 0, sn, Qe);
    Ai(xn),
      N.navigation.state === "loading" && xn > ze
        ? (Ve(me, "Expected pending action"),
          ge && ge.abort(),
          Jn(N.navigation.location, {
            matches: ft,
            loaderData: ea,
            errors: zn,
            fetchers: new Map(N.fetchers),
          }))
        : (_t({
            errors: zn,
            loaderData: T0(N.loaderData, ea, ft, zn),
            fetchers: new Map(N.fetchers),
          }),
          (k = !1));
  }
  async function oe(C, L, q, te, ie, _e, ve, se, de) {
    let Ee = N.fetchers.get(C);
    He(C, El(de, Ee ? Ee.data : void 0), { flushSync: ve });
    let Te = new AbortController(),
      Ae = ds(t.history, q, Te.signal);
    if (_e) {
      let We = await rr(te, new URL(Ae.url).pathname, Ae.signal, C);
      if (We.type === "aborted") return;
      if (We.type === "error") {
        xt(C, L, We.error, { flushSync: ve });
        return;
      } else if (We.matches) te = We.matches;
      else {
        xt(C, L, Yn(404, { pathname: q }), { flushSync: ve });
        return;
      }
    }
    let Xe = Cu(te, q);
    re.set(C, Te);
    let rt = Oe,
      gt = ps(u, d, Ae, te, Xe, s, ie),
      Je = (await ne(Ae, gt, ie, C))[Xe.route.id];
    if ((re.get(C) === Te && re.delete(C), !Ae.signal.aborted)) {
      if (we.has(C)) {
        He(C, Qa(void 0));
        return;
      }
      if (pi(Je))
        if (ze > rt) {
          He(C, Qa(void 0));
          return;
        } else {
          G.add(C), await W(Ae, Je, !1, { preventScrollReset: se });
          return;
        }
      if (Nn(Je)) {
        xt(C, L, Je.error);
        return;
      }
      He(C, Qa(Je.data));
    }
  }
  async function W(
    C,
    L,
    q,
    {
      submission: te,
      fetcherSubmission: ie,
      preventScrollReset: _e,
      replace: ve,
    } = {}
  ) {
    q || (fe?.resolve(), (fe = null)),
      L.response.headers.has("X-Remix-Revalidate") && (k = !0);
    let se = L.response.headers.get("Location");
    Ve(se, "Expected a Location header on the redirect Response"),
      (se = E0(se, new URL(C.url), g));
    let de = zl(N.location, se, { _isRedirect: !0 });
    if (r) {
      let gt = !1;
      if (L.response.headers.has("X-Remix-Reload-Document")) gt = !0;
      else if (rc(se)) {
        const Rt = ib(se, !0);
        gt = Rt.origin !== n.location.origin || Kn(Rt.pathname, g) == null;
      }
      if (gt) {
        ve ? n.location.replace(se) : n.location.assign(se);
        return;
      }
    }
    ge = null;
    let Ee =
        ve === !0 || L.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: Te, formAction: Ae, formEncType: Xe } = N.navigation;
    !te && !ie && Te && Ae && Xe && (te = C0(N.navigation));
    let rt = te || ie;
    if (PE.has(L.response.status) && rt && an(rt.formMethod))
      await yn(Ee, de, {
        submission: { ...rt, formAction: se },
        preventScrollReset: _e || Re,
        enableViewTransition: q ? ce : void 0,
      });
    else {
      let gt = Vf(de, te);
      await yn(Ee, de, {
        overrideNavigation: gt,
        fetcherSubmission: ie,
        preventScrollReset: _e || Re,
        enableViewTransition: q ? ce : void 0,
      });
    }
  }
  async function ne(C, L, q, te) {
    let ie,
      _e = {};
    try {
      ie = await ZE(v, C, L, te, q, !1);
    } catch (ve) {
      return (
        L.filter((se) => se.shouldLoad).forEach((se) => {
          _e[se.route.id] = { type: "error", error: ve };
        }),
        _e
      );
    }
    if (C.signal.aborted) return _e;
    for (let [ve, se] of Object.entries(ie))
      if (lw(se)) {
        let de = se.result;
        _e[ve] = { type: "redirect", response: tw(de, C, ve, L, g) };
      } else _e[ve] = await ew(se);
    return _e;
  }
  async function Se(C, L, q, te) {
    let ie = ne(q, C, te, null),
      _e = Promise.all(
        L.map(async (de) => {
          if (de.matches && de.match && de.request && de.controller) {
            let Te = (await ne(de.request, de.matches, te, de.key))[
              de.match.route.id
            ];
            return { [de.key]: Te };
          } else
            return Promise.resolve({
              [de.key]: {
                type: "error",
                error: Yn(404, { pathname: de.path }),
              },
            });
        })
      ),
      ve = await ie,
      se = (await _e).reduce((de, Ee) => Object.assign(de, Ee), {});
    return { loaderResults: ve, fetcherResults: se };
  }
  function Ye() {
    (k = !0),
      ae.forEach((C, L) => {
        re.has(L) && J.add(L), dt(L);
      });
  }
  function He(C, L, q = {}) {
    N.fetchers.set(C, L),
      _t(
        { fetchers: new Map(N.fetchers) },
        { flushSync: (q && q.flushSync) === !0 }
      );
  }
  function xt(C, L, q, te = {}) {
    let ie = jr(N.matches, L);
    Yr(C),
      _t(
        { errors: { [ie.route.id]: q }, fetchers: new Map(N.fetchers) },
        { flushSync: (te && te.flushSync) === !0 }
      );
  }
  function da(C) {
    return (
      le.set(C, (le.get(C) || 0) + 1),
      we.has(C) && we.delete(C),
      N.fetchers.get(C) || qE
    );
  }
  function Un(C, L) {
    dt(C, L?.reason), He(C, Qa(null));
  }
  function Yr(C) {
    let L = N.fetchers.get(C);
    re.has(C) && !(L && L.state === "loading" && O.has(C)) && dt(C),
      ae.delete(C),
      O.delete(C),
      G.delete(C),
      we.delete(C),
      J.delete(C),
      N.fetchers.delete(C);
  }
  function Wn(C) {
    let L = (le.get(C) || 0) - 1;
    L <= 0 ? (le.delete(C), we.add(C)) : le.set(C, L),
      _t({ fetchers: new Map(N.fetchers) });
  }
  function dt(C, L) {
    let q = re.get(C);
    q && (q.abort(L), re.delete(C));
  }
  function vn(C) {
    for (let L of C) {
      let q = da(L),
        te = Qa(q.data);
      N.fetchers.set(L, te);
    }
  }
  function Bt() {
    let C = [],
      L = !1;
    for (let q of G) {
      let te = N.fetchers.get(q);
      Ve(te, `Expected fetcher: ${q}`),
        te.state === "loading" && (G.delete(q), C.push(q), (L = !0));
    }
    return vn(C), L;
  }
  function Ai(C) {
    let L = [];
    for (let [q, te] of O)
      if (te < C) {
        let ie = N.fetchers.get(q);
        Ve(ie, `Expected fetcher: ${q}`),
          ie.state === "loading" && (dt(q), O.delete(q), L.push(q));
      }
    return vn(L), L.length > 0;
  }
  function Ci(C, L) {
    let q = N.blockers.get(C) || Sl;
    return Le.get(C) !== L && Le.set(C, L), q;
  }
  function so(C) {
    N.blockers.delete(C), Le.delete(C);
  }
  function _a(C, L) {
    let q = N.blockers.get(C) || Sl;
    Ve(
      (q.state === "unblocked" && L.state === "blocked") ||
        (q.state === "blocked" && L.state === "blocked") ||
        (q.state === "blocked" && L.state === "proceeding") ||
        (q.state === "blocked" && L.state === "unblocked") ||
        (q.state === "proceeding" && L.state === "unblocked"),
      `Invalid blocker state transition: ${q.state} -> ${L.state}`
    );
    let te = new Map(N.blockers);
    te.set(C, L), _t({ blockers: te });
  }
  function Qr({ currentLocation: C, nextLocation: L, historyAction: q }) {
    if (Le.size === 0) return;
    Le.size > 1 && Tt(!1, "A router only supports one blocker at a time");
    let te = Array.from(Le.entries()),
      [ie, _e] = te[te.length - 1],
      ve = N.blockers.get(ie);
    if (
      !(ve && ve.state === "proceeding") &&
      _e({ currentLocation: C, nextLocation: L, historyAction: q })
    )
      return ie;
  }
  function ar(C) {
    let L = Yn(404, { pathname: C }),
      q = p || h,
      { matches: te, route: ie } = xu(q);
    return { notFoundMatches: te, route: ie, error: L };
  }
  function Ta(C, L, q) {
    if (((E = C), (_ = L), (T = q || null), !U && N.navigation === qf)) {
      U = !0;
      let te = lo(N.location, N.matches);
      te != null && _t({ restoreScrollPosition: te });
    }
    return () => {
      (E = null), (_ = null), (T = null);
    };
  }
  function Kr(C, L) {
    return (
      (T &&
        T(
          C,
          L.map((te) => fE(te, N.loaderData))
        )) ||
      C.key
    );
  }
  function $r(C, L) {
    if (E && _) {
      let q = Kr(C, L);
      E[q] = _();
    }
  }
  function lo(C, L) {
    if (E) {
      let q = Kr(C, L),
        te = E[q];
      if (typeof te == "number") return te;
    }
    return null;
  }
  function Xr(C, L, q) {
    if (t.patchRoutesOnNavigation)
      if (C) {
        if (Object.keys(C[0].params).length > 0)
          return { active: !0, matches: Nl(L, q, g, !0) };
      } else return { active: !0, matches: Nl(L, q, g, !0) || [] };
    return { active: !1, matches: null };
  }
  async function rr(C, L, q, te) {
    if (!t.patchRoutesOnNavigation) return { type: "success", matches: C };
    let ie = C;
    for (;;) {
      let _e = p == null,
        ve = p || h,
        se = d;
      try {
        await t.patchRoutesOnNavigation({
          signal: q,
          path: L,
          matches: ie,
          fetcherKey: te,
          patch: (Te, Ae) => {
            q.aborted || v0(Te, Ae, ve, se, u, !1);
          },
        });
      } catch (Te) {
        return { type: "error", error: Te, partialMatches: ie };
      } finally {
        _e && !q.aborted && (h = [...h]);
      }
      if (q.aborted) return { type: "aborted" };
      let de = Or(ve, L, g),
        Ee = null;
      if (de) {
        if (Object.keys(de[0].params).length === 0)
          return { type: "success", matches: de };
        if (
          ((Ee = Nl(ve, L, g, !0)),
          !(Ee && ie.length < Ee.length && ir(ie, Ee.slice(0, ie.length))))
        )
          return { type: "success", matches: de };
      }
      if ((Ee || (Ee = Nl(ve, L, g, !0)), !Ee || ir(ie, Ee)))
        return { type: "success", matches: null };
      ie = Ee;
    }
  }
  function ir(C, L) {
    return (
      C.length === L.length && C.every((q, te) => q.route.id === L[te].route.id)
    );
  }
  function _c(C) {
    (d = {}), (p = kl(C, u, void 0, d));
  }
  function oo(C, L, q = !1) {
    let te = p == null;
    v0(C, L, p || h, d, u, q), te && ((h = [...h]), _t({}));
  }
  return (
    (pe = {
      get basename() {
        return g;
      },
      get future() {
        return b;
      },
      get state() {
        return N;
      },
      get routes() {
        return h;
      },
      get window() {
        return n;
      },
      initialize: ct,
      subscribe: tr,
      enableScrollRestoration: Ta,
      navigate: gn,
      fetch: H,
      revalidate: nr,
      createHref: (C) => t.history.createHref(C),
      encodeLocation: (C) => t.history.encodeLocation(C),
      getFetcher: da,
      resetFetcher: Un,
      deleteFetcher: Wn,
      dispose: Zn,
      getBlocker: Ci,
      deleteBlocker: so,
      patchRoutes: oo,
      _internalFetchControllers: re,
      _internalSetRoutes: _c,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(C) {
        _t(C);
      },
    }),
    t.unstable_instrumentations &&
      (pe = DE(
        pe,
        t.unstable_instrumentations.map((C) => C.router).filter(Boolean)
      )),
    pe
  );
}
function GE(t) {
  return (
    t != null &&
    (("formData" in t && t.formData != null) ||
      ("body" in t && t.body !== void 0))
  );
}
function nh(t, n, r, s, o, u) {
  let d, h;
  if (o) {
    d = [];
    for (let g of n)
      if ((d.push(g), g.route.id === o)) {
        h = g;
        break;
      }
  } else (d = n), (h = n[n.length - 1]);
  let p = sc(s || ".", ic(d), Kn(t.pathname, r) || t.pathname, u === "path");
  if (
    (s == null && ((p.search = t.search), (p.hash = t.hash)),
    (s == null || s === "" || s === ".") && h)
  ) {
    let g = Uh(p.search);
    if (h.route.index && !g)
      p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index";
    else if (!h.route.index && g) {
      let v = new URLSearchParams(p.search),
        b = v.getAll("index");
      v.delete("index"),
        b.filter((R) => R).forEach((R) => v.append("index", R));
      let x = v.toString();
      p.search = x ? `?${x}` : "";
    }
  }
  return (
    r !== "/" && (p.pathname = TE({ basename: r, pathname: p.pathname })), Sa(p)
  );
}
function g0(t, n, r) {
  if (!r || !GE(r)) return { path: n };
  if (r.formMethod && !ow(r.formMethod))
    return { path: n, error: Yn(405, { method: r.formMethod }) };
  let s = () => ({ path: n, error: Yn(400, { type: "invalid-body" }) }),
    u = (r.formMethod || "get").toUpperCase(),
    d = vb(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!an(u)) return s();
      let b =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce(
              (x, [R, E]) => `${x}${R}=${E}
`,
              ""
            )
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: u,
          formAction: d,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: b,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!an(u)) return s();
      try {
        let b = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: u,
            formAction: d,
            formEncType: r.formEncType,
            formData: void 0,
            json: b,
            text: void 0,
          },
        };
      } catch {
        return s();
      }
    }
  }
  Ve(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let h, p;
  if (r.formData) (h = ih(r.formData)), (p = r.formData);
  else if (r.body instanceof FormData) (h = ih(r.body)), (p = r.body);
  else if (r.body instanceof URLSearchParams) (h = r.body), (p = w0(h));
  else if (r.body == null) (h = new URLSearchParams()), (p = new FormData());
  else
    try {
      (h = new URLSearchParams(r.body)), (p = w0(h));
    } catch {
      return s();
    }
  let g = {
    formMethod: u,
    formAction: d,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: p,
    json: void 0,
    text: void 0,
  };
  if (an(g.formMethod)) return { path: n, submission: g };
  let v = qr(n);
  return (
    t && v.search && Uh(v.search) && h.append("index", ""),
    (v.search = `?${h}`),
    { path: Sa(v), submission: g }
  );
}
function y0(t, n, r, s, o, u, d, h, p, g, v, b, x, R, E, T, _, U, z, Y) {
  let Z = Y ? (Nn(Y[1]) ? Y[1].error : Y[1].data) : void 0,
    ee = o.createURL(u.location),
    pe = o.createURL(p),
    N;
  if (v && u.errors) {
    let ye = Object.keys(u.errors)[0];
    N = d.findIndex((Ne) => Ne.route.id === ye);
  } else if (Y && Nn(Y[1])) {
    let ye = Y[0];
    N = d.findIndex((Ne) => Ne.route.id === ye) - 1;
  }
  let me = Y ? Y[1].statusCode : void 0,
    fe = me && me >= 400,
    Re = {
      currentUrl: ee,
      currentParams: u.matches[0]?.params || {},
      nextUrl: pe,
      nextParams: d[0].params,
      ...h,
      actionResult: Z,
      actionStatus: me,
    },
    ge = Vl(d),
    ce = d.map((ye, Ne) => {
      let { route: k } = ye,
        J = null;
      if (
        (N != null && Ne > N
          ? (J = !1)
          : k.lazy
          ? (J = !0)
          : Mh(k)
          ? v
            ? (J = ah(k, u.loaderData, u.errors))
            : YE(u.loaderData, u.matches[Ne], ye) && (J = !0)
          : (J = !1),
        J !== null)
      )
        return rh(r, s, t, ge, ye, g, n, J);
      let re = fe
          ? !1
          : b ||
            ee.pathname + ee.search === pe.pathname + pe.search ||
            ee.search !== pe.search ||
            QE(u.matches[Ne], ye),
        Oe = { ...Re, defaultShouldRevalidate: re },
        ze = Hu(ye, Oe);
      return rh(r, s, t, ge, ye, g, n, ze, Oe);
    }),
    he = [];
  return (
    E.forEach((ye, Ne) => {
      if (v || !d.some((ae) => ae.route.id === ye.routeId) || R.has(Ne)) return;
      let k = u.fetchers.get(Ne),
        J = k && k.state !== "idle" && k.data === void 0,
        re = Or(_, ye.path, U);
      if (!re) {
        if (z && J) return;
        he.push({
          key: Ne,
          routeId: ye.routeId,
          path: ye.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (T.has(Ne)) return;
      let Oe = Cu(re, ye.path),
        ze = new AbortController(),
        O = ds(o, ye.path, ze.signal),
        G = null;
      if (x.has(Ne)) x.delete(Ne), (G = ps(r, s, O, re, Oe, g, n));
      else if (J) b && (G = ps(r, s, O, re, Oe, g, n));
      else {
        let ae = { ...Re, defaultShouldRevalidate: fe ? !1 : b };
        Hu(Oe, ae) && (G = ps(r, s, O, re, Oe, g, n, ae));
      }
      G &&
        he.push({
          key: Ne,
          routeId: ye.routeId,
          path: ye.path,
          matches: G,
          match: Oe,
          request: O,
          controller: ze,
        });
    }),
    { dsMatches: ce, revalidatingFetchers: he }
  );
}
function Mh(t) {
  return t.loader != null || (t.middleware != null && t.middleware.length > 0);
}
function ah(t, n, r) {
  if (t.lazy) return !0;
  if (!Mh(t)) return !1;
  let s = n != null && t.id in n,
    o = r != null && r[t.id] !== void 0;
  return !s && o
    ? !1
    : typeof t.loader == "function" && t.loader.hydrate === !0
    ? !0
    : !s && !o;
}
function YE(t, n, r) {
  let s = !n || r.route.id !== n.route.id,
    o = !t.hasOwnProperty(r.route.id);
  return s || o;
}
function QE(t, n) {
  let r = t.route.path;
  return (
    t.pathname !== n.pathname ||
    (r != null && r.endsWith("*") && t.params["*"] !== n.params["*"])
  );
}
function Hu(t, n) {
  if (t.route.shouldRevalidate) {
    let r = t.route.shouldRevalidate(n);
    if (typeof r == "boolean") return r;
  }
  return n.defaultShouldRevalidate;
}
function v0(t, n, r, s, o, u) {
  let d;
  if (t) {
    let g = s[t];
    Ve(g, `No route found to patch children into: routeId = ${t}`),
      g.children || (g.children = []),
      (d = g.children);
  } else d = r;
  let h = [],
    p = [];
  if (
    (n.forEach((g) => {
      let v = d.find((b) => hb(g, b));
      v ? p.push({ existingRoute: v, newRoute: g }) : h.push(g);
    }),
    h.length > 0)
  ) {
    let g = kl(h, o, [t || "_", "patch", String(d?.length || "0")], s);
    d.push(...g);
  }
  if (u && p.length > 0)
    for (let g = 0; g < p.length; g++) {
      let { existingRoute: v, newRoute: b } = p[g],
        x = v,
        [R] = kl([b], o, [], {}, !0);
      Object.assign(x, {
        element: R.element ? R.element : x.element,
        errorElement: R.errorElement ? R.errorElement : x.errorElement,
        hydrateFallbackElement: R.hydrateFallbackElement
          ? R.hydrateFallbackElement
          : x.hydrateFallbackElement,
      });
    }
}
function hb(t, n) {
  return "id" in t && "id" in n && t.id === n.id
    ? !0
    : t.index === n.index &&
      t.path === n.path &&
      t.caseSensitive === n.caseSensitive
    ? (!t.children || t.children.length === 0) &&
      (!n.children || n.children.length === 0)
      ? !0
      : t.children.every((r, s) => n.children?.some((o) => hb(r, o)))
    : !1;
}
var b0 = new WeakMap(),
  mb = ({ key: t, route: n, manifest: r, mapRouteProperties: s }) => {
    let o = r[n.id];
    if (
      (Ve(o, "No route found in manifest"),
      !o.lazy || typeof o.lazy != "object")
    )
      return;
    let u = o.lazy[t];
    if (!u) return;
    let d = b0.get(o);
    d || ((d = {}), b0.set(o, d));
    let h = d[t];
    if (h) return h;
    let p = (async () => {
      let g = oE(t),
        b = o[t] !== void 0 && t !== "hasErrorBoundary";
      if (g)
        Tt(
          !g,
          "Route property " +
            t +
            " is not a supported lazy route property. This property will be ignored."
        ),
          (d[t] = Promise.resolve());
      else if (b)
        Tt(
          !1,
          `Route "${o.id}" has a static property "${t}" defined. The lazy property will be ignored.`
        );
      else {
        let x = await u();
        x != null && (Object.assign(o, { [t]: x }), Object.assign(o, s(o)));
      }
      typeof o.lazy == "object" &&
        ((o.lazy[t] = void 0),
        Object.values(o.lazy).every((x) => x === void 0) && (o.lazy = void 0));
    })();
    return (d[t] = p), p;
  },
  x0 = new WeakMap();
function KE(t, n, r, s, o) {
  let u = r[t.id];
  if ((Ve(u, "No route found in manifest"), !t.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof t.lazy == "function") {
    let v = x0.get(u);
    if (v) return { lazyRoutePromise: v, lazyHandlerPromise: v };
    let b = (async () => {
      Ve(typeof t.lazy == "function", "No lazy route function found");
      let x = await t.lazy(),
        R = {};
      for (let E in x) {
        let T = x[E];
        if (T === void 0) continue;
        let _ = cE(E),
          z = u[E] !== void 0 && E !== "hasErrorBoundary";
        _
          ? Tt(
              !_,
              "Route property " +
                E +
                " is not a supported property to be returned from a lazy route function. This property will be ignored."
            )
          : z
          ? Tt(
              !z,
              `Route "${u.id}" has a static property "${E}" defined but its lazy function is also returning a value for this property. The lazy route property "${E}" will be ignored.`
            )
          : (R[E] = T);
      }
      Object.assign(u, R), Object.assign(u, { ...s(u), lazy: void 0 });
    })();
    return (
      x0.set(u, b),
      b.catch(() => {}),
      { lazyRoutePromise: b, lazyHandlerPromise: b }
    );
  }
  let d = Object.keys(t.lazy),
    h = [],
    p;
  for (let v of d) {
    if (o && o.includes(v)) continue;
    let b = mb({ key: v, route: t, manifest: r, mapRouteProperties: s });
    b && (h.push(b), v === n && (p = b));
  }
  let g = h.length > 0 ? Promise.all(h).then(() => {}) : void 0;
  return (
    g?.catch(() => {}),
    p?.catch(() => {}),
    { lazyRoutePromise: g, lazyHandlerPromise: p }
  );
}
async function S0(t) {
  let n = t.matches.filter((o) => o.shouldLoad),
    r = {};
  return (
    (await Promise.all(n.map((o) => o.resolve()))).forEach((o, u) => {
      r[n[u].route.id] = o;
    }),
    r
  );
}
async function $E(t) {
  return t.matches.some((n) => n.route.middleware) ? pb(t, () => S0(t)) : S0(t);
}
function pb(t, n) {
  return XE(t, n, (s) => s, iw, r);
  function r(s, o, u) {
    if (u)
      return Promise.resolve(
        Object.assign(u.value, { [o]: { type: "error", result: s } })
      );
    {
      let { matches: d } = t,
        h = Math.min(
          Math.max(
            d.findIndex((g) => g.route.id === o),
            0
          ),
          Math.max(
            d.findIndex((g) => g.shouldCallHandler()),
            0
          )
        ),
        p = jr(d, d[h].route.id).route.id;
      return Promise.resolve({ [p]: { type: "error", result: s } });
    }
  }
}
async function XE(t, n, r, s, o) {
  let {
      matches: u,
      request: d,
      params: h,
      context: p,
      unstable_pattern: g,
    } = t,
    v = u.flatMap((x) =>
      x.route.middleware ? x.route.middleware.map((R) => [x.route.id, R]) : []
    );
  return await gb(
    { request: d, params: h, context: p, unstable_pattern: g },
    v,
    n,
    r,
    s,
    o
  );
}
async function gb(t, n, r, s, o, u, d = 0) {
  let { request: h } = t;
  if (h.signal.aborted)
    throw h.signal.reason ?? new Error(`Request aborted: ${h.method} ${h.url}`);
  let p = n[d];
  if (!p) return await r();
  let [g, v] = p,
    b,
    x = async () => {
      if (b) throw new Error("You may only call `next()` once per middleware");
      try {
        return (b = { value: await gb(t, n, r, s, o, u, d + 1) }), b.value;
      } catch (R) {
        return (b = { value: await u(R, g, b) }), b.value;
      }
    };
  try {
    let R = await v(t, x),
      E = R != null ? s(R) : void 0;
    return o(E) ? E : b ? E ?? b.value : ((b = { value: await x() }), b.value);
  } catch (R) {
    return await u(R, g, b);
  }
}
function yb(t, n, r, s, o) {
  let u = mb({
      key: "middleware",
      route: s.route,
      manifest: n,
      mapRouteProperties: t,
    }),
    d = KE(s.route, an(r.method) ? "action" : "loader", n, t, o);
  return {
    middleware: u,
    route: d.lazyRoutePromise,
    handler: d.lazyHandlerPromise,
  };
}
function rh(t, n, r, s, o, u, d, h, p = null) {
  let g = !1,
    v = yb(t, n, r, o, u);
  return {
    ...o,
    _lazyPromises: v,
    shouldLoad: h,
    shouldRevalidateArgs: p,
    shouldCallHandler(b) {
      return (
        (g = !0),
        p
          ? typeof b == "boolean"
            ? Hu(o, { ...p, defaultShouldRevalidate: b })
            : Hu(o, p)
          : h
      );
    },
    resolve(b) {
      let { lazy: x, loader: R, middleware: E } = o.route,
        T = g || h || (b && !an(r.method) && (x || R)),
        _ = E && E.length > 0 && !R && !x;
      return T && (an(r.method) || !_)
        ? JE({
            request: r,
            unstable_pattern: s,
            match: o,
            lazyHandlerPromise: v?.handler,
            lazyRoutePromise: v?.route,
            handlerOverride: b,
            scopedContext: d,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function ps(t, n, r, s, o, u, d, h = null) {
  return s.map((p) =>
    p.route.id !== o.route.id
      ? {
          ...p,
          shouldLoad: !1,
          shouldRevalidateArgs: h,
          shouldCallHandler: () => !1,
          _lazyPromises: yb(t, n, r, p, u),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : rh(t, n, r, Vl(s), p, u, d, !0, h)
  );
}
async function ZE(t, n, r, s, o, u) {
  r.some((g) => g._lazyPromises?.middleware) &&
    (await Promise.all(r.map((g) => g._lazyPromises?.middleware)));
  let d = {
      request: n,
      unstable_pattern: Vl(r),
      params: r[0].params,
      context: o,
      matches: r,
    },
    p = await t({
      ...d,
      fetcherKey: s,
      runClientMiddleware: (g) => {
        let v = d;
        return pb(v, () =>
          g({
            ...v,
            fetcherKey: s,
            runClientMiddleware: () => {
              throw new Error(
                "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
              );
            },
          })
        );
      },
    });
  try {
    await Promise.all(
      r.flatMap((g) => [g._lazyPromises?.handler, g._lazyPromises?.route])
    );
  } catch {}
  return p;
}
async function JE({
  request: t,
  unstable_pattern: n,
  match: r,
  lazyHandlerPromise: s,
  lazyRoutePromise: o,
  handlerOverride: u,
  scopedContext: d,
}) {
  let h,
    p,
    g = an(t.method),
    v = g ? "action" : "loader",
    b = (x) => {
      let R,
        E = new Promise((U, z) => (R = z));
      (p = () => R()), t.signal.addEventListener("abort", p);
      let T = (U) =>
          typeof x != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${v}" [routeId: ${r.route.id}]`
                )
              )
            : x(
                {
                  request: t,
                  unstable_pattern: n,
                  params: r.params,
                  context: d,
                },
                ...(U !== void 0 ? [U] : [])
              ),
        _ = (async () => {
          try {
            return { type: "data", result: await (u ? u((z) => T(z)) : T()) };
          } catch (U) {
            return { type: "error", result: U };
          }
        })();
      return Promise.race([_, E]);
    };
  try {
    let x = g ? r.route.action : r.route.loader;
    if (s || o)
      if (x) {
        let R,
          [E] = await Promise.all([
            b(x).catch((T) => {
              R = T;
            }),
            s,
            o,
          ]);
        if (R !== void 0) throw R;
        h = E;
      } else {
        await s;
        let R = g ? r.route.action : r.route.loader;
        if (R) [h] = await Promise.all([b(R), o]);
        else if (v === "action") {
          let E = new URL(t.url),
            T = E.pathname + E.search;
          throw Yn(405, { method: t.method, pathname: T, routeId: r.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (x) h = await b(x);
    else {
      let R = new URL(t.url),
        E = R.pathname + R.search;
      throw Yn(404, { pathname: E });
    }
  } catch (x) {
    return { type: "error", result: x };
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  return h;
}
async function WE(t) {
  let n = t.headers.get("Content-Type");
  return n && /\bapplication\/json\b/.test(n)
    ? t.body == null
      ? null
      : t.json()
    : t.text();
}
async function ew(t) {
  let { result: n, type: r } = t;
  if (bb(n)) {
    let s;
    try {
      s = await WE(n);
    } catch (o) {
      return { type: "error", error: o };
    }
    return r === "error"
      ? {
          type: "error",
          error: new lc(n.status, n.statusText, s),
          statusCode: n.status,
          headers: n.headers,
        }
      : { type: "data", data: s, statusCode: n.status, headers: n.headers };
  }
  return r === "error"
    ? A0(n)
      ? n.data instanceof Error
        ? {
            type: "error",
            error: n.data,
            statusCode: n.init?.status,
            headers: n.init?.headers ? new Headers(n.init.headers) : void 0,
          }
        : {
            type: "error",
            error: rw(n),
            statusCode: Il(n) ? n.status : void 0,
            headers: n.init?.headers ? new Headers(n.init.headers) : void 0,
          }
      : { type: "error", error: n, statusCode: Il(n) ? n.status : void 0 }
    : A0(n)
    ? {
        type: "data",
        data: n.data,
        statusCode: n.init?.status,
        headers: n.init?.headers ? new Headers(n.init.headers) : void 0,
      }
    : { type: "data", data: n };
}
function tw(t, n, r, s, o) {
  let u = t.headers.get("Location");
  if (
    (Ve(
      u,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !rc(u))
  ) {
    let d = s.slice(0, s.findIndex((h) => h.route.id === r) + 1);
    (u = nh(new URL(n.url), d, o, u)), t.headers.set("Location", u);
  }
  return t;
}
function E0(t, n, r) {
  if (rc(t)) {
    let s = t,
      o = s.startsWith("//") ? new URL(n.protocol + s) : new URL(s),
      u = Kn(o.pathname, r) != null;
    if (o.origin === n.origin && u) return o.pathname + o.search + o.hash;
  }
  return t;
}
function ds(t, n, r, s) {
  let o = t.createURL(vb(n)).toString(),
    u = { signal: r };
  if (s && an(s.formMethod)) {
    let { formMethod: d, formEncType: h } = s;
    (u.method = d.toUpperCase()),
      h === "application/json"
        ? ((u.headers = new Headers({ "Content-Type": h })),
          (u.body = JSON.stringify(s.json)))
        : h === "text/plain"
        ? (u.body = s.text)
        : h === "application/x-www-form-urlencoded" && s.formData
        ? (u.body = ih(s.formData))
        : (u.body = s.formData);
  }
  return new Request(o, u);
}
function ih(t) {
  let n = new URLSearchParams();
  for (let [r, s] of t.entries())
    n.append(r, typeof s == "string" ? s : s.name);
  return n;
}
function w0(t) {
  let n = new FormData();
  for (let [r, s] of t.entries()) n.append(r, s);
  return n;
}
function nw(t, n, r, s = !1, o = !1) {
  let u = {},
    d = null,
    h,
    p = !1,
    g = {},
    v = r && Nn(r[1]) ? r[1].error : void 0;
  return (
    t.forEach((b) => {
      if (!(b.route.id in n)) return;
      let x = b.route.id,
        R = n[x];
      if (
        (Ve(!pi(R), "Cannot handle redirect results in processLoaderData"),
        Nn(R))
      ) {
        let E = R.error;
        if ((v !== void 0 && ((E = v), (v = void 0)), (d = d || {}), o))
          d[x] = E;
        else {
          let T = jr(t, x);
          d[T.route.id] == null && (d[T.route.id] = E);
        }
        s || (u[x] = fb),
          p || ((p = !0), (h = Il(R.error) ? R.error.status : 500)),
          R.headers && (g[x] = R.headers);
      } else
        (u[x] = R.data),
          R.statusCode && R.statusCode !== 200 && !p && (h = R.statusCode),
          R.headers && (g[x] = R.headers);
    }),
    v !== void 0 && r && ((d = { [r[0]]: v }), r[2] && (u[r[2]] = void 0)),
    { loaderData: u, errors: d, statusCode: h || 200, loaderHeaders: g }
  );
}
function _0(t, n, r, s, o, u) {
  let { loaderData: d, errors: h } = nw(n, r, s);
  return (
    o
      .filter((p) => !p.matches || p.matches.some((g) => g.shouldLoad))
      .forEach((p) => {
        let { key: g, match: v, controller: b } = p;
        if (b && b.signal.aborted) return;
        let x = u[g];
        if ((Ve(x, "Did not find corresponding fetcher result"), Nn(x))) {
          let R = jr(t.matches, v?.route.id);
          (h && h[R.route.id]) || (h = { ...h, [R.route.id]: x.error }),
            t.fetchers.delete(g);
        } else if (pi(x)) Ve(!1, "Unhandled fetcher revalidation redirect");
        else {
          let R = Qa(x.data);
          t.fetchers.set(g, R);
        }
      }),
    { loaderData: d, errors: h }
  );
}
function T0(t, n, r, s) {
  let o = Object.entries(n)
    .filter(([, u]) => u !== fb)
    .reduce((u, [d, h]) => ((u[d] = h), u), {});
  for (let u of r) {
    let d = u.route.id;
    if (
      (!n.hasOwnProperty(d) &&
        t.hasOwnProperty(d) &&
        u.route.loader &&
        (o[d] = t[d]),
      s && s.hasOwnProperty(d))
    )
      break;
  }
  return o;
}
function R0(t) {
  return t
    ? Nn(t[1])
      ? { actionData: {} }
      : { actionData: { [t[0]]: t[1].data } }
    : {};
}
function jr(t, n) {
  return (
    (n ? t.slice(0, t.findIndex((s) => s.route.id === n) + 1) : [...t])
      .reverse()
      .find((s) => s.route.hasErrorBoundary === !0) || t[0]
  );
}
function xu(t) {
  let n =
    t.length === 1
      ? t[0]
      : t.find((r) => r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: n }],
    route: n,
  };
}
function Yn(
  t,
  { pathname: n, routeId: r, method: s, type: o, message: u } = {}
) {
  let d = "Unknown Server Error",
    h = "Unknown @remix-run/router error";
  return (
    t === 400
      ? ((d = "Bad Request"),
        s && n && r
          ? (h = `You made a ${s} request to "${n}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
          : o === "invalid-body" && (h = "Unable to encode submission body"))
      : t === 403
      ? ((d = "Forbidden"), (h = `Route "${r}" does not match URL "${n}"`))
      : t === 404
      ? ((d = "Not Found"), (h = `No route matches URL "${n}"`))
      : t === 405 &&
        ((d = "Method Not Allowed"),
        s && n && r
          ? (h = `You made a ${s.toUpperCase()} request to "${n}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`)
          : s && (h = `Invalid request method "${s.toUpperCase()}"`)),
    new lc(t || 500, d, new Error(h), !0)
  );
}
function Su(t) {
  let n = Object.entries(t);
  for (let r = n.length - 1; r >= 0; r--) {
    let [s, o] = n[r];
    if (pi(o)) return { key: s, result: o };
  }
}
function vb(t) {
  let n = typeof t == "string" ? qr(t) : t;
  return Sa({ ...n, hash: "" });
}
function aw(t, n) {
  return t.pathname !== n.pathname || t.search !== n.search
    ? !1
    : t.hash === ""
    ? n.hash !== ""
    : t.hash === n.hash
    ? !0
    : n.hash !== "";
}
function rw(t) {
  return new lc(
    t.init?.status ?? 500,
    t.init?.statusText ?? "Internal Server Error",
    t.data
  );
}
function iw(t) {
  return (
    t != null &&
    typeof t == "object" &&
    Object.entries(t).every(([n, r]) => typeof n == "string" && sw(r))
  );
}
function sw(t) {
  return (
    t != null &&
    typeof t == "object" &&
    "type" in t &&
    "result" in t &&
    (t.type === "data" || t.type === "error")
  );
}
function lw(t) {
  return bb(t.result) && HE.has(t.result.status);
}
function Nn(t) {
  return t.type === "error";
}
function pi(t) {
  return (t && t.type) === "redirect";
}
function A0(t) {
  return (
    typeof t == "object" &&
    t != null &&
    "type" in t &&
    "data" in t &&
    "init" in t &&
    t.type === "DataWithResponseInit"
  );
}
function bb(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.headers == "object" &&
    typeof t.body < "u"
  );
}
function ow(t) {
  return BE.has(t.toUpperCase());
}
function an(t) {
  return kE.has(t.toUpperCase());
}
function Uh(t) {
  return new URLSearchParams(t).getAll("index").some((n) => n === "");
}
function Cu(t, n) {
  let r = typeof n == "string" ? qr(n).search : n.search;
  if (t[t.length - 1].route.index && Uh(r || "")) return t[t.length - 1];
  let s = ob(t);
  return s[s.length - 1];
}
function C0(t) {
  let {
    formMethod: n,
    formAction: r,
    formEncType: s,
    text: o,
    formData: u,
    json: d,
  } = t;
  if (!(!n || !r || !s)) {
    if (o != null)
      return {
        formMethod: n,
        formAction: r,
        formEncType: s,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (u != null)
      return {
        formMethod: n,
        formAction: r,
        formEncType: s,
        formData: u,
        json: void 0,
        text: void 0,
      };
    if (d !== void 0)
      return {
        formMethod: n,
        formAction: r,
        formEncType: s,
        formData: void 0,
        json: d,
        text: void 0,
      };
  }
}
function Vf(t, n) {
  return n
    ? {
        state: "loading",
        location: t,
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
      }
    : {
        state: "loading",
        location: t,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function uw(t, n) {
  return {
    state: "submitting",
    location: t,
    formMethod: n.formMethod,
    formAction: n.formAction,
    formEncType: n.formEncType,
    formData: n.formData,
    json: n.json,
    text: n.text,
  };
}
function El(t, n) {
  return t
    ? {
        state: "loading",
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
        data: n,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: n,
      };
}
function cw(t, n) {
  return {
    state: "submitting",
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
    data: n ? n.data : void 0,
  };
}
function Qa(t) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t,
  };
}
function dw(t, n) {
  try {
    let r = t.sessionStorage.getItem(db);
    if (r) {
      let s = JSON.parse(r);
      for (let [o, u] of Object.entries(s || {}))
        u && Array.isArray(u) && n.set(o, new Set(u || []));
    }
  } catch {}
}
function fw(t, n) {
  if (n.size > 0) {
    let r = {};
    for (let [s, o] of n) r[s] = [...o];
    try {
      t.sessionStorage.setItem(db, JSON.stringify(r));
    } catch (s) {
      Tt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${s}).`
      );
    }
  }
}
function N0() {
  let t,
    n,
    r = new Promise((s, o) => {
      (t = async (u) => {
        s(u);
        try {
          await r;
        } catch {}
      }),
        (n = async (u) => {
          o(u);
          try {
            await r;
          } catch {}
        });
    });
  return { promise: r, resolve: t, reject: n };
}
var Ti = w.createContext(null);
Ti.displayName = "DataRouter";
var Fl = w.createContext(null);
Fl.displayName = "DataRouterState";
w.createContext(!1);
var Lh = w.createContext({ isTransitioning: !1 });
Lh.displayName = "ViewTransition";
var xb = w.createContext(new Map());
xb.displayName = "Fetchers";
var hw = w.createContext(null);
hw.displayName = "Await";
var $n = w.createContext(null);
$n.displayName = "Navigation";
var oc = w.createContext(null);
oc.displayName = "Location";
var Xn = w.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Xn.displayName = "Route";
var zh = w.createContext(null);
zh.displayName = "RouteError";
function mw(t, { relative: n } = {}) {
  Ve(
    _s(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: s } = w.useContext($n),
    { hash: o, pathname: u, search: d } = Gl(t, { relative: n }),
    h = u;
  return (
    r !== "/" && (h = u === "/" ? r : va([r, u])),
    s.createHref({ pathname: h, search: d, hash: o })
  );
}
function _s() {
  return w.useContext(oc) != null;
}
function Dn() {
  return (
    Ve(
      _s(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    w.useContext(oc).location
  );
}
var Sb =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Eb(t) {
  w.useContext($n).static || w.useLayoutEffect(t);
}
function Mn() {
  let { isDataRoute: t } = w.useContext(Xn);
  return t ? Cw() : pw();
}
function pw() {
  Ve(
    _s(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let t = w.useContext(Ti),
    { basename: n, navigator: r } = w.useContext($n),
    { matches: s } = w.useContext(Xn),
    { pathname: o } = Dn(),
    u = JSON.stringify(ic(s)),
    d = w.useRef(!1);
  return (
    Eb(() => {
      d.current = !0;
    }),
    w.useCallback(
      (p, g = {}) => {
        if ((Tt(d.current, Sb), !d.current)) return;
        if (typeof p == "number") {
          r.go(p);
          return;
        }
        let v = sc(p, JSON.parse(u), o, g.relative === "path");
        t == null &&
          n !== "/" &&
          (v.pathname = v.pathname === "/" ? n : va([n, v.pathname])),
          (g.replace ? r.replace : r.push)(v, g.state, g);
      },
      [n, r, u, o, t]
    )
  );
}
var gw = w.createContext(null);
function yw(t) {
  let n = w.useContext(Xn).outlet;
  return w.useMemo(
    () => n && w.createElement(gw.Provider, { value: t }, n),
    [n, t]
  );
}
function wb() {
  let { matches: t } = w.useContext(Xn),
    n = t[t.length - 1];
  return n ? n.params : {};
}
function Gl(t, { relative: n } = {}) {
  let { matches: r } = w.useContext(Xn),
    { pathname: s } = Dn(),
    o = JSON.stringify(ic(r));
  return w.useMemo(() => sc(t, JSON.parse(o), s, n === "path"), [t, o, s, n]);
}
function vw(t, n, r, s, o) {
  Ve(
    _s(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: u } = w.useContext($n),
    { matches: d } = w.useContext(Xn),
    h = d[d.length - 1],
    p = h ? h.params : {},
    g = h ? h.pathname : "/",
    v = h ? h.pathnameBase : "/",
    b = h && h.route;
  {
    let z = (b && b.path) || "";
    Rb(
      g,
      !b || z.endsWith("*") || z.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${
        z === "/" ? "*" : `${z}/*`
      }">.`
    );
  }
  let x = Dn(),
    R;
  R = x;
  let E = R.pathname || "/",
    T = E;
  if (v !== "/") {
    let z = v.replace(/^\//, "").split("/");
    T = "/" + E.replace(/^\//, "").split("/").slice(z.length).join("/");
  }
  let _ = Or(t, { pathname: T });
  return (
    Tt(
      b || _ != null,
      `No routes matched location "${R.pathname}${R.search}${R.hash}" `
    ),
    Tt(
      _ == null ||
        _[_.length - 1].route.element !== void 0 ||
        _[_.length - 1].route.Component !== void 0 ||
        _[_.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    ww(
      _ &&
        _.map((z) =>
          Object.assign({}, z, {
            params: Object.assign({}, p, z.params),
            pathname: va([
              v,
              u.encodeLocation
                ? u.encodeLocation(
                    z.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
                  ).pathname
                : z.pathname,
            ]),
            pathnameBase:
              z.pathnameBase === "/"
                ? v
                : va([
                    v,
                    u.encodeLocation
                      ? u.encodeLocation(
                          z.pathnameBase
                            .replace(/\?/g, "%3F")
                            .replace(/#/g, "%23")
                        ).pathname
                      : z.pathnameBase,
                  ]),
          })
        ),
      d,
      r,
      s,
      o
    )
  );
}
function bw() {
  let t = Aw(),
    n = Il(t)
      ? `${t.status} ${t.statusText}`
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    r = t instanceof Error ? t.stack : null,
    s = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: s },
    u = { padding: "2px 4px", backgroundColor: s },
    d = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", t),
    (d = w.createElement(
      w.Fragment,
      null,
      w.createElement("p", null, "💿 Hey developer 👋"),
      w.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        w.createElement("code", { style: u }, "ErrorBoundary"),
        " or",
        " ",
        w.createElement("code", { style: u }, "errorElement"),
        " prop on your route."
      )
    )),
    w.createElement(
      w.Fragment,
      null,
      w.createElement("h2", null, "Unexpected Application Error!"),
      w.createElement("h3", { style: { fontStyle: "italic" } }, n),
      r ? w.createElement("pre", { style: o }, r) : null,
      d
    )
  );
}
var xw = w.createElement(bw, null),
  Sw = class extends w.Component {
    constructor(t) {
      super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        });
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
      return n.location !== t.location ||
        (n.revalidation !== "idle" && t.revalidation === "idle")
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation,
          };
    }
    componentDidCatch(t, n) {
      this.props.onError
        ? this.props.onError(t, n)
        : console.error(
            "React Router caught the following error during render",
            t
          );
    }
    render() {
      return this.state.error !== void 0
        ? w.createElement(
            Xn.Provider,
            { value: this.props.routeContext },
            w.createElement(zh.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Ew({ routeContext: t, match: n, children: r }) {
  let s = w.useContext(Ti);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Xn.Provider, { value: t }, r)
  );
}
function ww(t, n = [], r = null, s = null, o = null) {
  if (t == null) {
    if (!r) return null;
    if (r.errors) t = r.matches;
    else if (n.length === 0 && !r.initialized && r.matches.length > 0)
      t = r.matches;
    else return null;
  }
  let u = t,
    d = r?.errors;
  if (d != null) {
    let v = u.findIndex((b) => b.route.id && d?.[b.route.id] !== void 0);
    Ve(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        d
      ).join(",")}`
    ),
      (u = u.slice(0, Math.min(u.length, v + 1)));
  }
  let h = !1,
    p = -1;
  if (r)
    for (let v = 0; v < u.length; v++) {
      let b = u[v];
      if (
        ((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (p = v),
        b.route.id)
      ) {
        let { loaderData: x, errors: R } = r,
          E =
            b.route.loader &&
            !x.hasOwnProperty(b.route.id) &&
            (!R || R[b.route.id] === void 0);
        if (b.route.lazy || E) {
          (h = !0), p >= 0 ? (u = u.slice(0, p + 1)) : (u = [u[0]]);
          break;
        }
      }
    }
  let g =
    r && s
      ? (v, b) => {
          s(v, {
            location: r.location,
            params: r.matches?.[0]?.params ?? {},
            unstable_pattern: Vl(r.matches),
            errorInfo: b,
          });
        }
      : void 0;
  return u.reduceRight((v, b, x) => {
    let R,
      E = !1,
      T = null,
      _ = null;
    r &&
      ((R = d && b.route.id ? d[b.route.id] : void 0),
      (T = b.route.errorElement || xw),
      h &&
        (p < 0 && x === 0
          ? (Rb(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (E = !0),
            (_ = null))
          : p === x &&
            ((E = !0), (_ = b.route.hydrateFallbackElement || null))));
    let U = n.concat(u.slice(0, x + 1)),
      z = () => {
        let Y;
        return (
          R
            ? (Y = T)
            : E
            ? (Y = _)
            : b.route.Component
            ? (Y = w.createElement(b.route.Component, null))
            : b.route.element
            ? (Y = b.route.element)
            : (Y = v),
          w.createElement(Ew, {
            match: b,
            routeContext: { outlet: v, matches: U, isDataRoute: r != null },
            children: Y,
          })
        );
      };
    return r && (b.route.ErrorBoundary || b.route.errorElement || x === 0)
      ? w.createElement(Sw, {
          location: r.location,
          revalidation: r.revalidation,
          component: T,
          error: R,
          children: z(),
          routeContext: { outlet: null, matches: U, isDataRoute: !0 },
          onError: g,
        })
      : z();
  }, null);
}
function kh(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function _w(t) {
  let n = w.useContext(Ti);
  return Ve(n, kh(t)), n;
}
function _b(t) {
  let n = w.useContext(Fl);
  return Ve(n, kh(t)), n;
}
function Tw(t) {
  let n = w.useContext(Xn);
  return Ve(n, kh(t)), n;
}
function uc(t) {
  let n = Tw(t),
    r = n.matches[n.matches.length - 1];
  return (
    Ve(
      r.route.id,
      `${t} can only be used on routes that contain a unique "id"`
    ),
    r.route.id
  );
}
function Rw() {
  return uc("useRouteId");
}
function Tb() {
  let t = _b("useLoaderData"),
    n = uc("useLoaderData");
  return t.loaderData[n];
}
function Aw() {
  let t = w.useContext(zh),
    n = _b("useRouteError"),
    r = uc("useRouteError");
  return t !== void 0 ? t : n.errors?.[r];
}
function Cw() {
  let { router: t } = _w("useNavigate"),
    n = uc("useNavigate"),
    r = w.useRef(!1);
  return (
    Eb(() => {
      r.current = !0;
    }),
    w.useCallback(
      async (o, u = {}) => {
        Tt(r.current, Sb),
          r.current &&
            (typeof o == "number"
              ? await t.navigate(o)
              : await t.navigate(o, { fromRouteId: n, ...u }));
      },
      [t, n]
    )
  );
}
var O0 = {};
function Rb(t, n, r) {
  !n && !O0[t] && ((O0[t] = !0), Tt(!1, r));
}
var j0 = {};
function D0(t, n) {
  !t && !j0[n] && ((j0[n] = !0), console.warn(n));
}
var Nw = "useOptimistic",
  M0 = KS[Nw],
  Ow = () => {};
function jw(t) {
  return M0 ? M0(t) : [t, Ow];
}
function Dw(t) {
  let n = {
    hasErrorBoundary:
      t.hasErrorBoundary || t.ErrorBoundary != null || t.errorElement != null,
  };
  return (
    t.Component &&
      (t.element &&
        Tt(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(n, {
        element: w.createElement(t.Component),
        Component: void 0,
      })),
    t.HydrateFallback &&
      (t.hydrateFallbackElement &&
        Tt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(n, {
        hydrateFallbackElement: w.createElement(t.HydrateFallback),
        HydrateFallback: void 0,
      })),
    t.ErrorBoundary &&
      (t.errorElement &&
        Tt(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(n, {
        errorElement: w.createElement(t.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    n
  );
}
var Mw = ["HydrateFallback", "hydrateFallbackElement"],
  Uw = class {
    constructor() {
      (this.status = "pending"),
        (this.promise = new Promise((n, r) => {
          (this.resolve = (s) => {
            this.status === "pending" && ((this.status = "resolved"), n(s));
          }),
            (this.reject = (s) => {
              this.status === "pending" && ((this.status = "rejected"), r(s));
            });
        }));
    }
  };
function Lw({
  router: t,
  flushSync: n,
  unstable_onError: r,
  unstable_useTransitions: s,
}) {
  let [o, u] = w.useState(t.state),
    [d, h] = jw(o),
    [p, g] = w.useState(),
    [v, b] = w.useState({ isTransitioning: !1 }),
    [x, R] = w.useState(),
    [E, T] = w.useState(),
    [_, U] = w.useState(),
    z = w.useRef(new Map()),
    Y = w.useCallback(
      (
        N,
        {
          deletedFetchers: me,
          newErrors: fe,
          flushSync: Re,
          viewTransitionOpts: ge,
        }
      ) => {
        fe &&
          r &&
          Object.values(fe).forEach((he) =>
            r(he, {
              location: N.location,
              params: N.matches[0]?.params ?? {},
              unstable_pattern: Vl(N.matches),
            })
          ),
          N.fetchers.forEach((he, ye) => {
            he.data !== void 0 && z.current.set(ye, he.data);
          }),
          me.forEach((he) => z.current.delete(he)),
          D0(
            Re === !1 || n != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let ce =
          t.window != null &&
          t.window.document != null &&
          typeof t.window.document.startViewTransition == "function";
        if (
          (D0(
            ge == null || ce,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !ge || !ce)
        ) {
          n && Re
            ? n(() => u(N))
            : s === !1
            ? u(N)
            : w.startTransition(() => {
                s === !0 && h((he) => U0(he, N)), u(N);
              });
          return;
        }
        if (n && Re) {
          n(() => {
            E && (x?.resolve(), E.skipTransition()),
              b({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: ge.currentLocation,
                nextLocation: ge.nextLocation,
              });
          });
          let he = t.window.document.startViewTransition(() => {
            n(() => u(N));
          });
          he.finished.finally(() => {
            n(() => {
              R(void 0), T(void 0), g(void 0), b({ isTransitioning: !1 });
            });
          }),
            n(() => T(he));
          return;
        }
        E
          ? (x?.resolve(),
            E.skipTransition(),
            U({
              state: N,
              currentLocation: ge.currentLocation,
              nextLocation: ge.nextLocation,
            }))
          : (g(N),
            b({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: ge.currentLocation,
              nextLocation: ge.nextLocation,
            }));
      },
      [t.window, n, E, x, s, h, r]
    );
  w.useLayoutEffect(() => t.subscribe(Y), [t, Y]),
    w.useEffect(() => {
      v.isTransitioning && !v.flushSync && R(new Uw());
    }, [v]),
    w.useEffect(() => {
      if (x && p && t.window) {
        let N = p,
          me = x.promise,
          fe = t.window.document.startViewTransition(async () => {
            s === !1
              ? u(N)
              : w.startTransition(() => {
                  s === !0 && h((Re) => U0(Re, N)), u(N);
                }),
              await me;
          });
        fe.finished.finally(() => {
          R(void 0), T(void 0), g(void 0), b({ isTransitioning: !1 });
        }),
          T(fe);
      }
    }, [p, x, t.window, s, h]),
    w.useEffect(() => {
      x && p && d.location.key === p.location.key && x.resolve();
    }, [x, E, d.location, p]),
    w.useEffect(() => {
      !v.isTransitioning &&
        _ &&
        (g(_.state),
        b({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: _.currentLocation,
          nextLocation: _.nextLocation,
        }),
        U(void 0));
    }, [v.isTransitioning, _]);
  let Z = w.useMemo(
      () => ({
        createHref: t.createHref,
        encodeLocation: t.encodeLocation,
        go: (N) => t.navigate(N),
        push: (N, me, fe) =>
          t.navigate(N, {
            state: me,
            preventScrollReset: fe?.preventScrollReset,
          }),
        replace: (N, me, fe) =>
          t.navigate(N, {
            replace: !0,
            state: me,
            preventScrollReset: fe?.preventScrollReset,
          }),
      }),
      [t]
    ),
    ee = t.basename || "/",
    pe = w.useMemo(
      () => ({
        router: t,
        navigator: Z,
        static: !1,
        basename: ee,
        unstable_onError: r,
      }),
      [t, Z, ee, r]
    );
  return w.createElement(
    w.Fragment,
    null,
    w.createElement(
      Ti.Provider,
      { value: pe },
      w.createElement(
        Fl.Provider,
        { value: d },
        w.createElement(
          xb.Provider,
          { value: z.current },
          w.createElement(
            Lh.Provider,
            { value: v },
            w.createElement(
              Iw,
              {
                basename: ee,
                location: d.location,
                navigationType: d.historyAction,
                navigator: Z,
                unstable_useTransitions: s === !0,
              },
              w.createElement(zw, {
                routes: t.routes,
                future: t.future,
                state: d,
                unstable_onError: r,
              })
            )
          )
        )
      )
    ),
    null
  );
}
function U0(t, n) {
  return {
    ...t,
    navigation: n.navigation.state !== "idle" ? n.navigation : t.navigation,
    revalidation: n.revalidation !== "idle" ? n.revalidation : t.revalidation,
    actionData:
      n.navigation.state !== "submitting" ? n.actionData : t.actionData,
    fetchers: n.fetchers,
  };
}
var zw = w.memo(kw);
function kw({ routes: t, future: n, state: r, unstable_onError: s }) {
  return vw(t, void 0, r, s, n);
}
function Ab({ to: t, replace: n, state: r, relative: s }) {
  Ve(
    _s(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: o } = w.useContext($n);
  Tt(
    !o,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: u } = w.useContext(Xn),
    { pathname: d } = Dn(),
    h = Mn(),
    p = sc(t, ic(u), d, s === "path"),
    g = JSON.stringify(p);
  return (
    w.useEffect(() => {
      h(JSON.parse(g), { replace: n, state: r, relative: s });
    }, [h, g, s, n, r]),
    null
  );
}
function Cb(t) {
  return yw(t.context);
}
function Iw({
  basename: t = "/",
  children: n = null,
  location: r,
  navigationType: s = "POP",
  navigator: o,
  static: u = !1,
  unstable_useTransitions: d,
}) {
  Ve(
    !_s(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = t.replace(/^\/*/, "/"),
    p = w.useMemo(
      () => ({
        basename: h,
        navigator: o,
        static: u,
        unstable_useTransitions: d,
        future: {},
      }),
      [h, o, u, d]
    );
  typeof r == "string" && (r = qr(r));
  let {
      pathname: g = "/",
      search: v = "",
      hash: b = "",
      state: x = null,
      key: R = "default",
    } = r,
    E = w.useMemo(() => {
      let T = Kn(g, h);
      return T == null
        ? null
        : {
            location: { pathname: T, search: v, hash: b, state: x, key: R },
            navigationType: s,
          };
    }, [h, g, v, b, x, R, s]);
  return (
    Tt(
      E != null,
      `<Router basename="${h}"> is not able to match the URL "${g}${v}${b}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    E == null
      ? null
      : w.createElement(
          $n.Provider,
          { value: p },
          w.createElement(oc.Provider, { children: n, value: E })
        )
  );
}
var Nu = "get",
  Ou = "application/x-www-form-urlencoded";
function cc(t) {
  return typeof HTMLElement < "u" && t instanceof HTMLElement;
}
function Bw(t) {
  return cc(t) && t.tagName.toLowerCase() === "button";
}
function Hw(t) {
  return cc(t) && t.tagName.toLowerCase() === "form";
}
function Pw(t) {
  return cc(t) && t.tagName.toLowerCase() === "input";
}
function qw(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function Vw(t, n) {
  return t.button === 0 && (!n || n === "_self") && !qw(t);
}
function sh(t = "") {
  return new URLSearchParams(
    typeof t == "string" || Array.isArray(t) || t instanceof URLSearchParams
      ? t
      : Object.keys(t).reduce((n, r) => {
          let s = t[r];
          return n.concat(Array.isArray(s) ? s.map((o) => [r, o]) : [[r, s]]);
        }, [])
  );
}
function Fw(t, n) {
  let r = sh(t);
  return (
    n &&
      n.forEach((s, o) => {
        r.has(o) ||
          n.getAll(o).forEach((u) => {
            r.append(o, u);
          });
      }),
    r
  );
}
var Eu = null;
function Gw() {
  if (Eu === null)
    try {
      new FormData(document.createElement("form"), 0), (Eu = !1);
    } catch {
      Eu = !0;
    }
  return Eu;
}
var Yw = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Ff(t) {
  return t != null && !Yw.has(t)
    ? (Tt(
        !1,
        `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ou}"`
      ),
      null)
    : t;
}
function Qw(t, n) {
  let r, s, o, u, d;
  if (Hw(t)) {
    let h = t.getAttribute("action");
    (s = h ? Kn(h, n) : null),
      (r = t.getAttribute("method") || Nu),
      (o = Ff(t.getAttribute("enctype")) || Ou),
      (u = new FormData(t));
  } else if (Bw(t) || (Pw(t) && (t.type === "submit" || t.type === "image"))) {
    let h = t.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = t.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((s = p ? Kn(p, n) : null),
      (r = t.getAttribute("formmethod") || h.getAttribute("method") || Nu),
      (o =
        Ff(t.getAttribute("formenctype")) ||
        Ff(h.getAttribute("enctype")) ||
        Ou),
      (u = new FormData(h, t)),
      !Gw())
    ) {
      let { name: g, type: v, value: b } = t;
      if (v === "image") {
        let x = g ? `${g}.` : "";
        u.append(`${x}x`, "0"), u.append(`${x}y`, "0");
      } else g && u.append(g, b);
    }
  } else {
    if (cc(t))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = Nu), (s = null), (o = Ou), (d = t);
  }
  return (
    u && o === "text/plain" && ((d = u), (u = void 0)),
    { action: s, method: r.toLowerCase(), encType: o, formData: u, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Ih(t, n) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(n);
}
function Kw(t, n, r) {
  let s =
    typeof t == "string"
      ? new URL(
          t,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : t;
  return (
    s.pathname === "/"
      ? (s.pathname = `_root.${r}`)
      : n && Kn(s.pathname, n) === "/"
      ? (s.pathname = `${n.replace(/\/$/, "")}/_root.${r}`)
      : (s.pathname = `${s.pathname.replace(/\/$/, "")}.${r}`),
    s
  );
}
async function $w(t, n) {
  if (t.id in n) return n[t.id];
  try {
    let r = await import(t.module);
    return (n[t.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${t.module}\`, reloading page...`
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Xw(t) {
  return t == null
    ? !1
    : t.href == null
    ? t.rel === "preload" &&
      typeof t.imageSrcSet == "string" &&
      typeof t.imageSizes == "string"
    : typeof t.rel == "string" && typeof t.href == "string";
}
async function Zw(t, n, r) {
  let s = await Promise.all(
    t.map(async (o) => {
      let u = n.routes[o.route.id];
      if (u) {
        let d = await $w(u, r);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return t_(
    s
      .flat(1)
      .filter(Xw)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" }
      )
  );
}
function L0(t, n, r, s, o, u) {
  let d = (p, g) => (r[g] ? p.route.id !== r[g].route.id : !0),
    h = (p, g) =>
      r[g].pathname !== p.pathname ||
      (r[g].route.path?.endsWith("*") && r[g].params["*"] !== p.params["*"]);
  return u === "assets"
    ? n.filter((p, g) => d(p, g) || h(p, g))
    : u === "data"
    ? n.filter((p, g) => {
        let v = s.routes[p.route.id];
        if (!v || !v.hasLoader) return !1;
        if (d(p, g) || h(p, g)) return !0;
        if (p.route.shouldRevalidate) {
          let b = p.route.shouldRevalidate({
            currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
            currentParams: r[0]?.params || {},
            nextUrl: new URL(t, window.origin),
            nextParams: p.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof b == "boolean") return b;
        }
        return !0;
      })
    : [];
}
function Jw(t, n, { includeHydrateFallback: r } = {}) {
  return Ww(
    t
      .map((s) => {
        let o = n.routes[s.route.id];
        if (!o) return [];
        let u = [o.module];
        return (
          o.clientActionModule && (u = u.concat(o.clientActionModule)),
          o.clientLoaderModule && (u = u.concat(o.clientLoaderModule)),
          r &&
            o.hydrateFallbackModule &&
            (u = u.concat(o.hydrateFallbackModule)),
          o.imports && (u = u.concat(o.imports)),
          u
        );
      })
      .flat(1)
  );
}
function Ww(t) {
  return [...new Set(t)];
}
function e_(t) {
  let n = {},
    r = Object.keys(t).sort();
  for (let s of r) n[s] = t[s];
  return n;
}
function t_(t, n) {
  let r = new Set();
  return (
    new Set(n),
    t.reduce((s, o) => {
      let u = JSON.stringify(e_(o));
      return r.has(u) || (r.add(u), s.push({ key: u, link: o })), s;
    }, [])
  );
}
function Nb() {
  let t = w.useContext(Ti);
  return (
    Ih(
      t,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    t
  );
}
function n_() {
  let t = w.useContext(Fl);
  return (
    Ih(
      t,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    t
  );
}
var Bh = w.createContext(void 0);
Bh.displayName = "FrameworkContext";
function Ob() {
  let t = w.useContext(Bh);
  return (
    Ih(t, "You must render this element inside a <HydratedRouter> element"), t
  );
}
function a_(t, n) {
  let r = w.useContext(Bh),
    [s, o] = w.useState(!1),
    [u, d] = w.useState(!1),
    {
      onFocus: h,
      onBlur: p,
      onMouseEnter: g,
      onMouseLeave: v,
      onTouchStart: b,
    } = n,
    x = w.useRef(null);
  w.useEffect(() => {
    if ((t === "render" && d(!0), t === "viewport")) {
      let T = (U) => {
          U.forEach((z) => {
            d(z.isIntersecting);
          });
        },
        _ = new IntersectionObserver(T, { threshold: 0.5 });
      return (
        x.current && _.observe(x.current),
        () => {
          _.disconnect();
        }
      );
    }
  }, [t]),
    w.useEffect(() => {
      if (s) {
        let T = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(T);
        };
      }
    }, [s]);
  let R = () => {
      o(!0);
    },
    E = () => {
      o(!1), d(!1);
    };
  return r
    ? t !== "intent"
      ? [u, x, {}]
      : [
          u,
          x,
          {
            onFocus: wl(h, R),
            onBlur: wl(p, E),
            onMouseEnter: wl(g, R),
            onMouseLeave: wl(v, E),
            onTouchStart: wl(b, R),
          },
        ]
    : [!1, x, {}];
}
function wl(t, n) {
  return (r) => {
    t && t(r), r.defaultPrevented || n(r);
  };
}
function r_({ page: t, ...n }) {
  let { router: r } = Nb(),
    s = w.useMemo(() => Or(r.routes, t, r.basename), [r.routes, t, r.basename]);
  return s ? w.createElement(s_, { page: t, matches: s, ...n }) : null;
}
function i_(t) {
  let { manifest: n, routeModules: r } = Ob(),
    [s, o] = w.useState([]);
  return (
    w.useEffect(() => {
      let u = !1;
      return (
        Zw(t, n, r).then((d) => {
          u || o(d);
        }),
        () => {
          u = !0;
        }
      );
    }, [t, n, r]),
    s
  );
}
function s_({ page: t, matches: n, ...r }) {
  let s = Dn(),
    { manifest: o, routeModules: u } = Ob(),
    { basename: d } = Nb(),
    { loaderData: h, matches: p } = n_(),
    g = w.useMemo(() => L0(t, n, p, o, s, "data"), [t, n, p, o, s]),
    v = w.useMemo(() => L0(t, n, p, o, s, "assets"), [t, n, p, o, s]),
    b = w.useMemo(() => {
      if (t === s.pathname + s.search + s.hash) return [];
      let E = new Set(),
        T = !1;
      if (
        (n.forEach((U) => {
          let z = o.routes[U.route.id];
          !z ||
            !z.hasLoader ||
            ((!g.some((Y) => Y.route.id === U.route.id) &&
              U.route.id in h &&
              u[U.route.id]?.shouldRevalidate) ||
            z.hasClientLoader
              ? (T = !0)
              : E.add(U.route.id));
        }),
        E.size === 0)
      )
        return [];
      let _ = Kw(t, d, "data");
      return (
        T &&
          E.size > 0 &&
          _.searchParams.set(
            "_routes",
            n
              .filter((U) => E.has(U.route.id))
              .map((U) => U.route.id)
              .join(",")
          ),
        [_.pathname + _.search]
      );
    }, [d, h, s, o, g, n, t, u]),
    x = w.useMemo(() => Jw(v, o), [v, o]),
    R = i_(v);
  return w.createElement(
    w.Fragment,
    null,
    b.map((E) =>
      w.createElement("link", {
        key: E,
        rel: "prefetch",
        as: "fetch",
        href: E,
        ...r,
      })
    ),
    x.map((E) =>
      w.createElement("link", { key: E, rel: "modulepreload", href: E, ...r })
    ),
    R.map(({ key: E, link: T }) =>
      w.createElement("link", { key: E, nonce: r.nonce, ...T })
    )
  );
}
function l_(...t) {
  return (n) => {
    t.forEach((r) => {
      typeof r == "function" ? r(n) : r != null && (r.current = n);
    });
  };
}
var jb =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  jb && (window.__reactRouterVersion = "7.10.1");
} catch {}
function o_(t, n) {
  return FE({
    basename: n?.basename,
    getContext: n?.getContext,
    future: n?.future,
    history: rE({ window: n?.window }),
    hydrationData: u_(),
    routes: t,
    mapRouteProperties: Dw,
    hydrationRouteProperties: Mw,
    dataStrategy: n?.dataStrategy,
    patchRoutesOnNavigation: n?.patchRoutesOnNavigation,
    window: n?.window,
    unstable_instrumentations: n?.unstable_instrumentations,
  }).initialize();
}
function u_() {
  let t = window?.__staticRouterHydrationData;
  return t && t.errors && (t = { ...t, errors: c_(t.errors) }), t;
}
function c_(t) {
  if (!t) return null;
  let n = Object.entries(t),
    r = {};
  for (let [s, o] of n)
    if (o && o.__type === "RouteErrorResponse")
      r[s] = new lc(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let u = window[o.__subType];
        if (typeof u == "function")
          try {
            let d = new u(o.message);
            (d.stack = ""), (r[s] = d);
          } catch {}
      }
      if (r[s] == null) {
        let u = new Error(o.message);
        (u.stack = ""), (r[s] = u);
      }
    } else r[s] = o;
  return r;
}
var Db = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Et = w.forwardRef(function (
    {
      onClick: n,
      discover: r = "render",
      prefetch: s = "none",
      relative: o,
      reloadDocument: u,
      replace: d,
      state: h,
      target: p,
      to: g,
      preventScrollReset: v,
      viewTransition: b,
      ...x
    },
    R
  ) {
    let { basename: E, unstable_useTransitions: T } = w.useContext($n),
      _ = typeof g == "string" && Db.test(g),
      U,
      z = !1;
    if (typeof g == "string" && _ && ((U = g), jb))
      try {
        let Re = new URL(window.location.href),
          ge = g.startsWith("//") ? new URL(Re.protocol + g) : new URL(g),
          ce = Kn(ge.pathname, E);
        ge.origin === Re.origin && ce != null
          ? (g = ce + ge.search + ge.hash)
          : (z = !0);
      } catch {
        Tt(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let Y = mw(g, { relative: o }),
      [Z, ee, pe] = a_(s, x),
      N = h_(g, {
        replace: d,
        state: h,
        target: p,
        preventScrollReset: v,
        relative: o,
        viewTransition: b,
        unstable_useTransitions: T,
      });
    function me(Re) {
      n && n(Re), Re.defaultPrevented || N(Re);
    }
    let fe = w.createElement("a", {
      ...x,
      ...pe,
      href: U || Y,
      onClick: z || u ? n : me,
      ref: l_(R, ee),
      target: p,
      "data-discover": !_ && r === "render" ? "true" : void 0,
    });
    return Z && !_
      ? w.createElement(w.Fragment, null, fe, w.createElement(r_, { page: Y }))
      : fe;
  });
Et.displayName = "Link";
var Mb = w.forwardRef(function (
  {
    "aria-current": n = "page",
    caseSensitive: r = !1,
    className: s = "",
    end: o = !1,
    style: u,
    to: d,
    viewTransition: h,
    children: p,
    ...g
  },
  v
) {
  let b = Gl(d, { relative: g.relative }),
    x = Dn(),
    R = w.useContext(Fl),
    { navigator: E, basename: T } = w.useContext($n),
    _ = R != null && b_(b) && h === !0,
    U = E.encodeLocation ? E.encodeLocation(b).pathname : b.pathname,
    z = x.pathname,
    Y =
      R && R.navigation && R.navigation.location
        ? R.navigation.location.pathname
        : null;
  r ||
    ((z = z.toLowerCase()),
    (Y = Y ? Y.toLowerCase() : null),
    (U = U.toLowerCase())),
    Y && T && (Y = Kn(Y, T) || Y);
  const Z = U !== "/" && U.endsWith("/") ? U.length - 1 : U.length;
  let ee = z === U || (!o && z.startsWith(U) && z.charAt(Z) === "/"),
    pe =
      Y != null &&
      (Y === U || (!o && Y.startsWith(U) && Y.charAt(U.length) === "/")),
    N = { isActive: ee, isPending: pe, isTransitioning: _ },
    me = ee ? n : void 0,
    fe;
  typeof s == "function"
    ? (fe = s(N))
    : (fe = [
        s,
        ee ? "active" : null,
        pe ? "pending" : null,
        _ ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Re = typeof u == "function" ? u(N) : u;
  return w.createElement(
    Et,
    {
      ...g,
      "aria-current": me,
      className: fe,
      ref: v,
      style: Re,
      to: d,
      viewTransition: h,
    },
    typeof p == "function" ? p(N) : p
  );
});
Mb.displayName = "NavLink";
var d_ = w.forwardRef(
  (
    {
      discover: t = "render",
      fetcherKey: n,
      navigate: r,
      reloadDocument: s,
      replace: o,
      state: u,
      method: d = Nu,
      action: h,
      onSubmit: p,
      relative: g,
      preventScrollReset: v,
      viewTransition: b,
      ...x
    },
    R
  ) => {
    let { unstable_useTransitions: E } = w.useContext($n),
      T = y_(),
      _ = v_(h, { relative: g }),
      U = d.toLowerCase() === "get" ? "get" : "post",
      z = typeof h == "string" && Db.test(h),
      Y = (Z) => {
        if ((p && p(Z), Z.defaultPrevented)) return;
        Z.preventDefault();
        let ee = Z.nativeEvent.submitter,
          pe = ee?.getAttribute("formmethod") || d,
          N = () =>
            T(ee || Z.currentTarget, {
              fetcherKey: n,
              method: pe,
              navigate: r,
              replace: o,
              state: u,
              relative: g,
              preventScrollReset: v,
              viewTransition: b,
            });
        E && r !== !1 ? w.startTransition(() => N()) : N();
      };
    return w.createElement("form", {
      ref: R,
      method: U,
      action: _,
      onSubmit: s ? p : Y,
      ...x,
      "data-discover": !z && t === "render" ? "true" : void 0,
    });
  }
);
d_.displayName = "Form";
function f_(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ub(t) {
  let n = w.useContext(Ti);
  return Ve(n, f_(t)), n;
}
function h_(
  t,
  {
    target: n,
    replace: r,
    state: s,
    preventScrollReset: o,
    relative: u,
    viewTransition: d,
    unstable_useTransitions: h,
  } = {}
) {
  let p = Mn(),
    g = Dn(),
    v = Gl(t, { relative: u });
  return w.useCallback(
    (b) => {
      if (Vw(b, n)) {
        b.preventDefault();
        let x = r !== void 0 ? r : Sa(g) === Sa(v),
          R = () =>
            p(t, {
              replace: x,
              state: s,
              preventScrollReset: o,
              relative: u,
              viewTransition: d,
            });
        h ? w.startTransition(() => R()) : R();
      }
    },
    [g, p, v, r, s, n, t, o, u, d, h]
  );
}
function m_(t) {
  Tt(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
  );
  let n = w.useRef(sh(t)),
    r = w.useRef(!1),
    s = Dn(),
    o = w.useMemo(() => Fw(s.search, r.current ? null : n.current), [s.search]),
    u = Mn(),
    d = w.useCallback(
      (h, p) => {
        const g = sh(typeof h == "function" ? h(new URLSearchParams(o)) : h);
        (r.current = !0), u("?" + g, p);
      },
      [u, o]
    );
  return [o, d];
}
var p_ = 0,
  g_ = () => `__${String(++p_)}__`;
function y_() {
  let { router: t } = Ub("useSubmit"),
    { basename: n } = w.useContext($n),
    r = Rw(),
    s = t.fetch,
    o = t.navigate;
  return w.useCallback(
    async (u, d = {}) => {
      let { action: h, method: p, encType: g, formData: v, body: b } = Qw(u, n);
      if (d.navigate === !1) {
        let x = d.fetcherKey || g_();
        await s(x, r, d.action || h, {
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: b,
          formMethod: d.method || p,
          formEncType: d.encType || g,
          flushSync: d.flushSync,
        });
      } else
        await o(d.action || h, {
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: b,
          formMethod: d.method || p,
          formEncType: d.encType || g,
          replace: d.replace,
          state: d.state,
          fromRouteId: r,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [s, o, n, r]
  );
}
function v_(t, { relative: n } = {}) {
  let { basename: r } = w.useContext($n),
    s = w.useContext(Xn);
  Ve(s, "useFormAction must be used inside a RouteContext");
  let [o] = s.matches.slice(-1),
    u = { ...Gl(t || ".", { relative: n }) },
    d = Dn();
  if (t == null) {
    u.search = d.search;
    let h = new URLSearchParams(u.search),
      p = h.getAll("index");
    if (p.some((v) => v === "")) {
      h.delete("index"),
        p.filter((b) => b).forEach((b) => h.append("index", b));
      let v = h.toString();
      u.search = v ? `?${v}` : "";
    }
  }
  return (
    (!t || t === ".") &&
      o.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (u.pathname = u.pathname === "/" ? r : va([r, u.pathname])),
    Sa(u)
  );
}
function b_(t, { relative: n } = {}) {
  let r = w.useContext(Lh);
  Ve(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = Ub("useViewTransitionState"),
    o = Gl(t, { relative: n });
  if (!r.isTransitioning) return !1;
  let u = Kn(r.currentLocation.pathname, s) || r.currentLocation.pathname,
    d = Kn(r.nextLocation.pathname, s) || r.nextLocation.pathname;
  return Bu(o.pathname, d) != null || Bu(o.pathname, u) != null;
}
const x_ = () =>
    m.jsx("div", {
      className: "w-full bg-red-50 py-20 md:py-28",
      children: m.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 text-center",
        children: [
          m.jsxs("h1", {
            className:
              "text-3xl md:text-5xl font-bold text-gray-900 leading-snug",
            children: [
              "Save a Life —",
              m.jsx("span", {
                className: "text-red-600",
                children: " Donate Blood Today",
              }),
            ],
          }),
          m.jsx("p", {
            className: "mt-4 text-gray-600 text-lg md:text-xl",
            children:
              "Join our community of life-savers. Your little help can change someone’s life.",
          }),
          m.jsxs("div", {
            className:
              "mt-8 flex flex-col md:flex-row items-center justify-center gap-4",
            children: [
              m.jsx(Et, {
                to: "/signup",
                className: `bg-red-600 text-white font-semibold px-8 py-3 rounded-full shadow \r
            transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-red-700`,
                children: "Join as a Donor",
              }),
              m.jsxs(Et, {
                to: "/search-page",
                className: `relative border border-red-600 text-red-600 font-semibold px-8 py-3 rounded-full \r
            overflow-hidden transition-all duration-300 transform hover:scale-105`,
                children: [
                  m.jsx("span", {
                    className: "relative z-10",
                    children: "Search Donors",
                  }),
                  m.jsx("span", {
                    className: `absolute inset-0 bg-red-100 translate-x-full hover:translate-x-0 \r
              transition-transform duration-300 ease-out`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  S_ = () =>
    m.jsx("div", {
      className: "py-20 bg-red-50",
      children: m.jsxs("div", {
        className: "max-w-6xl mx-auto px-4",
        children: [
          m.jsx("h2", {
            className:
              "text-3xl md:text-4xl font-bold text-center text-gray-900",
            children: "Contact Us",
          }),
          m.jsx("p", {
            className: "mt-3 text-center text-gray-600 max-w-2xl mx-auto",
            children:
              "Have questions or want to get involved? Send us a message or reach us via phone in case of emergency.",
          }),
          m.jsxs("div", {
            className: "mt-12 grid grid-cols-1 md:grid-cols-2 gap-12",
            children: [
              m.jsxs("form", {
                className:
                  "bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4",
                children: [
                  m.jsx("input", {
                    type: "text",
                    placeholder: "Your Name",
                    className:
                      "border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600",
                    required: !0,
                  }),
                  m.jsx("input", {
                    type: "email",
                    placeholder: "Your Email",
                    className:
                      "border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600",
                    required: !0,
                  }),
                  m.jsx("textarea", {
                    placeholder: "Your Message",
                    rows: "5",
                    className:
                      "border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600",
                    required: !0,
                  }),
                  m.jsx("button", {
                    type: "submit",
                    className:
                      "bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-red-700 hover:scale-105 transition transform duration-300",
                    children: "Send Message",
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "flex flex-col justify-center gap-6",
                children: [
                  m.jsx("h3", {
                    className: "text-2xl font-semibold text-gray-900",
                    children: "Emergency Contact",
                  }),
                  m.jsxs("p", {
                    className: "text-gray-600 text-lg",
                    children: [
                      m.jsx("span", {
                        className: "font-semibold",
                        children: "Phone:",
                      }),
                      " +1 (234) 567-890",
                    ],
                  }),
                  m.jsxs("p", {
                    className: "text-gray-600 text-lg",
                    children: [
                      m.jsx("span", {
                        className: "font-semibold",
                        children: "Email:",
                      }),
                      " support@bloodhub.com",
                    ],
                  }),
                  m.jsx("p", {
                    className: "text-gray-600 text-lg",
                    children:
                      "Feel free to reach us anytime. We're here to help you save lives!",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
const E_ = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  w_ = (t) =>
    t.replace(/^([A-Z])|[\s-_]+(\w)/g, (n, r, s) =>
      s ? s.toUpperCase() : r.toLowerCase()
    ),
  z0 = (t) => {
    const n = w_(t);
    return n.charAt(0).toUpperCase() + n.slice(1);
  },
  Lb = (...t) =>
    t
      .filter((n, r, s) => !!n && n.trim() !== "" && s.indexOf(n) === r)
      .join(" ")
      .trim(),
  __ = (t) => {
    for (const n in t)
      if (n.startsWith("aria-") || n === "role" || n === "title") return !0;
  };
var T_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const R_ = w.forwardRef(
  (
    {
      color: t = "currentColor",
      size: n = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: s,
      className: o = "",
      children: u,
      iconNode: d,
      ...h
    },
    p
  ) =>
    w.createElement(
      "svg",
      {
        ref: p,
        ...T_,
        width: n,
        height: n,
        stroke: t,
        strokeWidth: s ? (Number(r) * 24) / Number(n) : r,
        className: Lb("lucide", o),
        ...(!u && !__(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...d.map(([g, v]) => w.createElement(g, v)),
        ...(Array.isArray(u) ? u : [u]),
      ]
    )
);
const Hh = (t, n) => {
  const r = w.forwardRef(({ className: s, ...o }, u) =>
    w.createElement(R_, {
      ref: u,
      iconNode: n,
      className: Lb(`lucide-${E_(z0(t))}`, `lucide-${t}`, s),
      ...o,
    })
  );
  return (r.displayName = z0(t)), r;
};
const A_ = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  C_ = Hh("heart", A_);
const N_ = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  O_ = Hh("shield-check", N_);
const j_ = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  D_ = Hh("users", j_),
  M_ = () => {
    const t = [
      {
        icon: m.jsx(C_, { className: "w-12 h-12 text-red-600" }),
        title: "Why Donate Blood?",
        desc: "One bag of blood can save up to three lives. Your donation can give someone a new lease on life.",
      },
      {
        icon: m.jsx(O_, { className: "w-12 h-12 text-red-600" }),
        title: "Safe & Secure Process",
        desc: "Blood donation is completely safe. All necessary safety protocols are followed to ensure a secure donation.",
      },
      {
        icon: m.jsx(D_, { className: "w-12 h-12 text-red-600" }),
        title: "Join Our Donor Community",
        desc: "Connect with thousands of donors and become a life-saver. Our community is always ready to support those in need.",
      },
    ];
    return m.jsx("div", {
      className: "py-20 bg-white",
      children: m.jsxs("div", {
        className: "max-w-6xl mx-auto px-4",
        children: [
          m.jsx("h2", {
            className:
              "text-3xl md:text-4xl font-bold text-center text-gray-900",
            children: "Featured Highlights",
          }),
          m.jsx("p", {
            className: "mt-3 text-center text-gray-600 max-w-2xl mx-auto",
            children:
              "Learn about the importance of blood donation and the safe process — everything is easy and accessible on our platform.",
          }),
          m.jsx("div", {
            className: "mt-12 grid grid-cols-1 md:grid-cols-3 gap-8",
            children: t.map((n, r) =>
              m.jsxs(
                "div",
                {
                  className: `p-8 rounded-2xl bg-red-50 border border-red-100 shadow-sm\r
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center`,
                  children: [
                    m.jsx("div", {
                      className: "flex justify-center mb-4",
                      children: n.icon,
                    }),
                    m.jsx("h3", {
                      className: "text-xl font-semibold text-gray-900",
                      children: n.title,
                    }),
                    m.jsx("p", {
                      className: "mt-2 text-gray-600",
                      children: n.desc,
                    }),
                  ],
                },
                r
              )
            ),
          }),
        ],
      }),
    });
  },
  U_ = () =>
    m.jsxs("div", { children: [m.jsx(x_, {}), m.jsx(M_, {}), m.jsx(S_, {})] }),
  L_ = ({ label: t, onClick: n, disabled: r, outline: s, small: o, icon: u }) =>
    m.jsxs("button", {
      disabled: r,
      onClick: n,
      className: `
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-lg
          hover:opacity-80
          transition
          cursor-pointer
          px-4
          w-full
          ${s ? "bg-white" : "bg-lime-500"}
          ${s ? "border-black" : "border-lime-500"}
          ${s ? "text-black" : "text-white"}
          ${o ? "text-sm" : "text-md"}
          ${o ? "py-1" : "py-3"}
          ${o ? "font-light" : "font-semibold"}
          ${o ? "border" : "border-2"}
        `,
      children: [
        u &&
          m.jsx(u, {
            size: 24,
            className: `\r
              absolute\r
              left-4\r
              top-3\r
            `,
          }),
        t,
      ],
    }),
  z_ = () => {
    const t = Mn();
    return m.jsx("section", {
      className: "bg-white ",
      children: m.jsx("div", {
        className:
          "container flex items-center min-h-screen px-6 py-12 mx-auto",
        children: m.jsxs("div", {
          className: "flex flex-col items-center max-w-sm mx-auto text-center",
          children: [
            m.jsx("p", {
              className:
                "p-3 text-sm font-medium text-lime-500 rounded-full bg-blue-50 ",
              children: m.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "2",
                stroke: "currentColor",
                className: "w-6 h-6",
                children: m.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z",
                }),
              }),
            }),
            m.jsx("h1", {
              className:
                "mt-3 text-2xl font-semibold text-gray-800  md:text-3xl",
              children: "Something Went Wrong!",
            }),
            m.jsx("p", {
              className: "mt-4 text-gray-500 ",
              children: "Here are some helpful links:",
            }),
            m.jsxs("div", {
              className:
                "flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto",
              children: [
                m.jsxs("button", {
                  onClick: () => t(-1),
                  className:
                    "flex items-center justify-center w-1/2 px-5 py-1 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto   hover:bg-gray-100 ",
                  children: [
                    m.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "1.5",
                      stroke: "currentColor",
                      className: "w-5 h-5 rtl:rotate-180 text-lime-500",
                      children: m.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18",
                      }),
                    }),
                    m.jsx("span", { children: "Go back" }),
                  ],
                }),
                m.jsx(L_, { label: "Take Me Home", onClick: () => t("/") }),
              ],
            }),
          ],
        }),
      }),
    });
  };
var Yl = (t) => t.type === "checkbox",
  gi = (t) => t instanceof Date,
  hn = (t) => t == null;
const zb = (t) => typeof t == "object";
var It = (t) => !hn(t) && !Array.isArray(t) && zb(t) && !gi(t),
  kb = (t) =>
    It(t) && t.target ? (Yl(t.target) ? t.target.checked : t.target.value) : t,
  k_ = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t,
  Ib = (t, n) => t.has(k_(n)),
  I_ = (t) => {
    const n = t.constructor && t.constructor.prototype;
    return It(n) && n.hasOwnProperty("isPrototypeOf");
  },
  Ph =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Pt(t) {
  let n;
  const r = Array.isArray(t),
    s = typeof FileList < "u" ? t instanceof FileList : !1;
  if (t instanceof Date) n = new Date(t);
  else if (!(Ph && (t instanceof Blob || s)) && (r || It(t)))
    if (((n = r ? [] : Object.create(Object.getPrototypeOf(t))), !r && !I_(t)))
      n = t;
    else for (const o in t) t.hasOwnProperty(o) && (n[o] = Pt(t[o]));
  else return t;
  return n;
}
var dc = (t) => /^\w*$/.test(t),
  Nt = (t) => t === void 0,
  qh = (t) => (Array.isArray(t) ? t.filter(Boolean) : []),
  Vh = (t) => qh(t.replace(/["|']|\]/g, "").split(/\.|\[/)),
  ue = (t, n, r) => {
    if (!n || !It(t)) return r;
    const s = (dc(n) ? [n] : Vh(n)).reduce((o, u) => (hn(o) ? o : o[u]), t);
    return Nt(s) || s === t ? (Nt(t[n]) ? r : t[n]) : s;
  },
  On = (t) => typeof t == "boolean",
  pt = (t, n, r) => {
    let s = -1;
    const o = dc(n) ? [n] : Vh(n),
      u = o.length,
      d = u - 1;
    for (; ++s < u; ) {
      const h = o[s];
      let p = r;
      if (s !== d) {
        const g = t[h];
        p = It(g) || Array.isArray(g) ? g : isNaN(+o[s + 1]) ? {} : [];
      }
      if (h === "__proto__" || h === "constructor" || h === "prototype") return;
      (t[h] = p), (t = t[h]);
    }
  };
const Pu = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  ra = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Va = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  Bb = Me.createContext(null);
Bb.displayName = "HookFormContext";
const Fh = () => Me.useContext(Bb);
var Hb = (t, n, r, s = !0) => {
  const o = { defaultValues: n._defaultValues };
  for (const u in t)
    Object.defineProperty(o, u, {
      get: () => {
        const d = u;
        return (
          n._proxyFormState[d] !== ra.all &&
            (n._proxyFormState[d] = !s || ra.all),
          r && (r[d] = !0),
          t[d]
        );
      },
    });
  return o;
};
const Gh = typeof window < "u" ? Me.useLayoutEffect : Me.useEffect;
function B_(t) {
  const n = Fh(),
    { control: r = n.control, disabled: s, name: o, exact: u } = t || {},
    [d, h] = Me.useState(r._formState),
    p = Me.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    });
  return (
    Gh(
      () =>
        r._subscribe({
          name: o,
          formState: p.current,
          exact: u,
          callback: (g) => {
            !s && h({ ...r._formState, ...g });
          },
        }),
      [o, s, u]
    ),
    Me.useEffect(() => {
      p.current.isValid && r._setValid(!0);
    }, [r]),
    Me.useMemo(() => Hb(d, r, p.current, !1), [d, r])
  );
}
var jn = (t) => typeof t == "string",
  lh = (t, n, r, s, o) =>
    jn(t)
      ? (s && n.watch.add(t), ue(r, t, o))
      : Array.isArray(t)
      ? t.map((u) => (s && n.watch.add(u), ue(r, u)))
      : (s && (n.watchAll = !0), r),
  oh = (t) => hn(t) || !zb(t);
function ia(t, n, r = new WeakSet()) {
  if (oh(t) || oh(n)) return Object.is(t, n);
  if (gi(t) && gi(n)) return t.getTime() === n.getTime();
  const s = Object.keys(t),
    o = Object.keys(n);
  if (s.length !== o.length) return !1;
  if (r.has(t) || r.has(n)) return !0;
  r.add(t), r.add(n);
  for (const u of s) {
    const d = t[u];
    if (!o.includes(u)) return !1;
    if (u !== "ref") {
      const h = n[u];
      if (
        (gi(d) && gi(h)) ||
        (It(d) && It(h)) ||
        (Array.isArray(d) && Array.isArray(h))
          ? !ia(d, h, r)
          : !Object.is(d, h)
      )
        return !1;
    }
  }
  return !0;
}
function H_(t) {
  const n = Fh(),
    {
      control: r = n.control,
      name: s,
      defaultValue: o,
      disabled: u,
      exact: d,
      compute: h,
    } = t || {},
    p = Me.useRef(o),
    g = Me.useRef(h),
    v = Me.useRef(void 0),
    b = Me.useRef(r),
    x = Me.useRef(s);
  g.current = h;
  const [R, E] = Me.useState(() => {
      const Z = r._getWatch(s, p.current);
      return g.current ? g.current(Z) : Z;
    }),
    T = Me.useCallback(
      (Z) => {
        const ee = lh(s, r._names, Z || r._formValues, !1, p.current);
        return g.current ? g.current(ee) : ee;
      },
      [r._formValues, r._names, s]
    ),
    _ = Me.useCallback(
      (Z) => {
        if (!u) {
          const ee = lh(s, r._names, Z || r._formValues, !1, p.current);
          if (g.current) {
            const pe = g.current(ee);
            ia(pe, v.current) || (E(pe), (v.current = pe));
          } else E(ee);
        }
      },
      [r._formValues, r._names, u, s]
    );
  Gh(
    () => (
      (b.current !== r || !ia(x.current, s)) &&
        ((b.current = r), (x.current = s), _()),
      r._subscribe({
        name: s,
        formState: { values: !0 },
        exact: d,
        callback: (Z) => {
          _(Z.values);
        },
      })
    ),
    [r, d, s, _]
  ),
    Me.useEffect(() => r._removeUnmounted());
  const U = b.current !== r,
    z = x.current,
    Y = Me.useMemo(() => {
      if (u) return null;
      const Z = !U && !ia(z, s);
      return U || Z ? T() : null;
    }, [u, U, s, z, T]);
  return Y !== null ? Y : R;
}
function P_(t) {
  const n = Fh(),
    {
      name: r,
      disabled: s,
      control: o = n.control,
      shouldUnregister: u,
      defaultValue: d,
      exact: h = !0,
    } = t,
    p = Ib(o._names.array, r),
    g = Me.useMemo(
      () => ue(o._formValues, r, ue(o._defaultValues, r, d)),
      [o, r, d]
    ),
    v = H_({ control: o, name: r, defaultValue: g, exact: h }),
    b = B_({ control: o, name: r, exact: h }),
    x = Me.useRef(t),
    R = Me.useRef(void 0),
    E = Me.useRef(
      o.register(r, {
        ...t.rules,
        value: v,
        ...(On(t.disabled) ? { disabled: t.disabled } : {}),
      })
    );
  x.current = t;
  const T = Me.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!ue(b.errors, r) },
            isDirty: { enumerable: !0, get: () => !!ue(b.dirtyFields, r) },
            isTouched: { enumerable: !0, get: () => !!ue(b.touchedFields, r) },
            isValidating: {
              enumerable: !0,
              get: () => !!ue(b.validatingFields, r),
            },
            error: { enumerable: !0, get: () => ue(b.errors, r) },
          }
        ),
      [b, r]
    ),
    _ = Me.useCallback(
      (Z) =>
        E.current.onChange({
          target: { value: kb(Z), name: r },
          type: Pu.CHANGE,
        }),
      [r]
    ),
    U = Me.useCallback(
      () =>
        E.current.onBlur({
          target: { value: ue(o._formValues, r), name: r },
          type: Pu.BLUR,
        }),
      [r, o._formValues]
    ),
    z = Me.useCallback(
      (Z) => {
        const ee = ue(o._fields, r);
        ee &&
          Z &&
          (ee._f.ref = {
            focus: () => Z.focus && Z.focus(),
            select: () => Z.select && Z.select(),
            setCustomValidity: (pe) => Z.setCustomValidity(pe),
            reportValidity: () => Z.reportValidity(),
          });
      },
      [o._fields, r]
    ),
    Y = Me.useMemo(
      () => ({
        name: r,
        value: v,
        ...(On(s) || b.disabled ? { disabled: b.disabled || s } : {}),
        onChange: _,
        onBlur: U,
        ref: z,
      }),
      [r, s, b.disabled, _, U, z, v]
    );
  return (
    Me.useEffect(() => {
      const Z = o._options.shouldUnregister || u,
        ee = R.current;
      ee && ee !== r && !p && o.unregister(ee),
        o.register(r, {
          ...x.current.rules,
          ...(On(x.current.disabled) ? { disabled: x.current.disabled } : {}),
        });
      const pe = (N, me) => {
        const fe = ue(o._fields, N);
        fe && fe._f && (fe._f.mount = me);
      };
      if ((pe(r, !0), Z)) {
        const N = Pt(ue(o._options.defaultValues, r, x.current.defaultValue));
        pt(o._defaultValues, r, N),
          Nt(ue(o._formValues, r)) && pt(o._formValues, r, N);
      }
      return (
        !p && o.register(r),
        (R.current = r),
        () => {
          (p ? Z && !o._state.action : Z) ? o.unregister(r) : pe(r, !1);
        }
      );
    }, [r, o, p, u]),
    Me.useEffect(() => {
      o._setDisabledField({ disabled: s, name: r });
    }, [s, r, o]),
    Me.useMemo(() => ({ field: Y, formState: b, fieldState: T }), [Y, b, T])
  );
}
const k0 = (t) => t.render(P_(t));
var q_ = (t, n, r, s, o) =>
    n
      ? {
          ...r[t],
          types: { ...(r[t] && r[t].types ? r[t].types : {}), [s]: o || !0 },
        }
      : {},
  Dl = (t) => (Array.isArray(t) ? t : [t]),
  I0 = () => {
    let t = [];
    return {
      get observers() {
        return t;
      },
      next: (o) => {
        for (const u of t) u.next && u.next(o);
      },
      subscribe: (o) => (
        t.push(o),
        {
          unsubscribe: () => {
            t = t.filter((u) => u !== o);
          },
        }
      ),
      unsubscribe: () => {
        t = [];
      },
    };
  };
function Pb(t, n) {
  const r = {};
  for (const s in t)
    if (t.hasOwnProperty(s)) {
      const o = t[s],
        u = n[s];
      if (o && It(o) && u) {
        const d = Pb(o, u);
        It(d) && (r[s] = d);
      } else t[s] && (r[s] = u);
    }
  return r;
}
var tn = (t) => It(t) && !Object.keys(t).length,
  Yh = (t) => t.type === "file",
  sa = (t) => typeof t == "function",
  qu = (t) => {
    if (!Ph) return !1;
    const n = t ? t.ownerDocument : 0;
    return (
      t instanceof
      (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement)
    );
  },
  qb = (t) => t.type === "select-multiple",
  Qh = (t) => t.type === "radio",
  V_ = (t) => Qh(t) || Yl(t),
  Gf = (t) => qu(t) && t.isConnected;
function F_(t, n) {
  const r = n.slice(0, -1).length;
  let s = 0;
  for (; s < r; ) t = Nt(t) ? s++ : t[n[s++]];
  return t;
}
function G_(t) {
  for (const n in t) if (t.hasOwnProperty(n) && !Nt(t[n])) return !1;
  return !0;
}
function kt(t, n) {
  const r = Array.isArray(n) ? n : dc(n) ? [n] : Vh(n),
    s = r.length === 1 ? t : F_(t, r),
    o = r.length - 1,
    u = r[o];
  return (
    s && delete s[u],
    o !== 0 &&
      ((It(s) && tn(s)) || (Array.isArray(s) && G_(s))) &&
      kt(t, r.slice(0, -1)),
    t
  );
}
var Y_ = (t) => {
  for (const n in t) if (sa(t[n])) return !0;
  return !1;
};
function Vb(t) {
  return Array.isArray(t) || (It(t) && !Y_(t));
}
function uh(t, n = {}) {
  for (const r in t) {
    const s = t[r];
    Vb(s)
      ? ((n[r] = Array.isArray(s) ? [] : {}), uh(s, n[r]))
      : Nt(s) || (n[r] = !0);
  }
  return n;
}
function fs(t, n, r) {
  r || (r = uh(n));
  for (const s in t) {
    const o = t[s];
    if (Vb(o))
      Nt(n) || oh(r[s])
        ? (r[s] = uh(o, Array.isArray(o) ? [] : {}))
        : fs(o, hn(n) ? {} : n[s], r[s]);
    else {
      const u = n[s];
      r[s] = !ia(o, u);
    }
  }
  return r;
}
const B0 = { value: !1, isValid: !1 },
  H0 = { value: !0, isValid: !0 };
var Fb = (t) => {
    if (Array.isArray(t)) {
      if (t.length > 1) {
        const n = t
          .filter((r) => r && r.checked && !r.disabled)
          .map((r) => r.value);
        return { value: n, isValid: !!n.length };
      }
      return t[0].checked && !t[0].disabled
        ? t[0].attributes && !Nt(t[0].attributes.value)
          ? Nt(t[0].value) || t[0].value === ""
            ? H0
            : { value: t[0].value, isValid: !0 }
          : H0
        : B0;
    }
    return B0;
  },
  Gb = (t, { valueAsNumber: n, valueAsDate: r, setValueAs: s }) =>
    Nt(t)
      ? t
      : n
      ? t === ""
        ? NaN
        : t && +t
      : r && jn(t)
      ? new Date(t)
      : s
      ? s(t)
      : t;
const P0 = { isValid: !1, value: null };
var Yb = (t) =>
  Array.isArray(t)
    ? t.reduce(
        (n, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : n,
        P0
      )
    : P0;
function q0(t) {
  const n = t.ref;
  return Yh(n)
    ? n.files
    : Qh(n)
    ? Yb(t.refs).value
    : qb(n)
    ? [...n.selectedOptions].map(({ value: r }) => r)
    : Yl(n)
    ? Fb(t.refs).value
    : Gb(Nt(n.value) ? t.ref.value : n.value, t);
}
var Q_ = (t, n, r, s) => {
    const o = {};
    for (const u of t) {
      const d = ue(n, u);
      d && pt(o, u, d._f);
    }
    return {
      criteriaMode: r,
      names: [...t],
      fields: o,
      shouldUseNativeValidation: s,
    };
  },
  Vu = (t) => t instanceof RegExp,
  _l = (t) =>
    Nt(t)
      ? t
      : Vu(t)
      ? t.source
      : It(t)
      ? Vu(t.value)
        ? t.value.source
        : t.value
      : t,
  V0 = (t) => ({
    isOnSubmit: !t || t === ra.onSubmit,
    isOnBlur: t === ra.onBlur,
    isOnChange: t === ra.onChange,
    isOnAll: t === ra.all,
    isOnTouch: t === ra.onTouched,
  });
const F0 = "AsyncFunction";
var K_ = (t) =>
    !!t &&
    !!t.validate &&
    !!(
      (sa(t.validate) && t.validate.constructor.name === F0) ||
      (It(t.validate) &&
        Object.values(t.validate).find((n) => n.constructor.name === F0))
    ),
  $_ = (t) =>
    t.mount &&
    (t.required ||
      t.min ||
      t.max ||
      t.maxLength ||
      t.minLength ||
      t.pattern ||
      t.validate),
  G0 = (t, n, r) =>
    !r &&
    (n.watchAll ||
      n.watch.has(t) ||
      [...n.watch].some(
        (s) => t.startsWith(s) && /^\.\w+/.test(t.slice(s.length))
      ));
const Ml = (t, n, r, s) => {
  for (const o of r || Object.keys(t)) {
    const u = ue(t, o);
    if (u) {
      const { _f: d, ...h } = u;
      if (d) {
        if (d.refs && d.refs[0] && n(d.refs[0], o) && !s) return !0;
        if (d.ref && n(d.ref, d.name) && !s) return !0;
        if (Ml(h, n)) break;
      } else if (It(h) && Ml(h, n)) break;
    }
  }
};
function Y0(t, n, r) {
  const s = ue(t, r);
  if (s || dc(r)) return { error: s, name: r };
  const o = r.split(".");
  for (; o.length; ) {
    const u = o.join("."),
      d = ue(n, u),
      h = ue(t, u);
    if (d && !Array.isArray(d) && r !== u) return { name: r };
    if (h && h.type) return { name: u, error: h };
    if (h && h.root && h.root.type) return { name: `${u}.root`, error: h.root };
    o.pop();
  }
  return { name: r };
}
var X_ = (t, n, r, s) => {
    r(t);
    const { name: o, ...u } = t;
    return (
      tn(u) ||
      Object.keys(u).length >= Object.keys(n).length ||
      Object.keys(u).find((d) => n[d] === (!s || ra.all))
    );
  },
  Z_ = (t, n, r) =>
    !t ||
    !n ||
    t === n ||
    Dl(t).some((s) => s && (r ? s === n : s.startsWith(n) || n.startsWith(s))),
  J_ = (t, n, r, s, o) =>
    o.isOnAll
      ? !1
      : !r && o.isOnTouch
      ? !(n || t)
      : (r ? s.isOnBlur : o.isOnBlur)
      ? !t
      : (r ? s.isOnChange : o.isOnChange)
      ? t
      : !0,
  W_ = (t, n) => !qh(ue(t, n)).length && kt(t, n),
  e3 = (t, n, r) => {
    const s = Dl(ue(t, r));
    return pt(s, "root", n[r]), pt(t, r, s), t;
  };
function Q0(t, n, r = "validate") {
  if (jn(t) || (Array.isArray(t) && t.every(jn)) || (On(t) && !t))
    return { type: r, message: jn(t) ? t : "", ref: n };
}
var cs = (t) => (It(t) && !Vu(t) ? t : { value: t, message: "" }),
  K0 = async (t, n, r, s, o, u) => {
    const {
        ref: d,
        refs: h,
        required: p,
        maxLength: g,
        minLength: v,
        min: b,
        max: x,
        pattern: R,
        validate: E,
        name: T,
        valueAsNumber: _,
        mount: U,
      } = t._f,
      z = ue(r, T);
    if (!U || n.has(T)) return {};
    const Y = h ? h[0] : d,
      Z = (ce) => {
        o &&
          Y.reportValidity &&
          (Y.setCustomValidity(On(ce) ? "" : ce || ""), Y.reportValidity());
      },
      ee = {},
      pe = Qh(d),
      N = Yl(d),
      me = pe || N,
      fe =
        ((_ || Yh(d)) && Nt(d.value) && Nt(z)) ||
        (qu(d) && d.value === "") ||
        z === "" ||
        (Array.isArray(z) && !z.length),
      Re = q_.bind(null, T, s, ee),
      ge = (ce, he, ye, Ne = Va.maxLength, k = Va.minLength) => {
        const J = ce ? he : ye;
        ee[T] = {
          type: ce ? Ne : k,
          message: J,
          ref: d,
          ...Re(ce ? Ne : k, J),
        };
      };
    if (
      u
        ? !Array.isArray(z) || !z.length
        : p &&
          ((!me && (fe || hn(z))) ||
            (On(z) && !z) ||
            (N && !Fb(h).isValid) ||
            (pe && !Yb(h).isValid))
    ) {
      const { value: ce, message: he } = jn(p)
        ? { value: !!p, message: p }
        : cs(p);
      if (
        ce &&
        ((ee[T] = {
          type: Va.required,
          message: he,
          ref: Y,
          ...Re(Va.required, he),
        }),
        !s)
      )
        return Z(he), ee;
    }
    if (!fe && (!hn(b) || !hn(x))) {
      let ce, he;
      const ye = cs(x),
        Ne = cs(b);
      if (!hn(z) && !isNaN(z)) {
        const k = d.valueAsNumber || (z && +z);
        hn(ye.value) || (ce = k > ye.value),
          hn(Ne.value) || (he = k < Ne.value);
      } else {
        const k = d.valueAsDate || new Date(z),
          J = (ze) => new Date(new Date().toDateString() + " " + ze),
          re = d.type == "time",
          Oe = d.type == "week";
        jn(ye.value) &&
          z &&
          (ce = re
            ? J(z) > J(ye.value)
            : Oe
            ? z > ye.value
            : k > new Date(ye.value)),
          jn(Ne.value) &&
            z &&
            (he = re
              ? J(z) < J(Ne.value)
              : Oe
              ? z < Ne.value
              : k < new Date(Ne.value));
      }
      if ((ce || he) && (ge(!!ce, ye.message, Ne.message, Va.max, Va.min), !s))
        return Z(ee[T].message), ee;
    }
    if ((g || v) && !fe && (jn(z) || (u && Array.isArray(z)))) {
      const ce = cs(g),
        he = cs(v),
        ye = !hn(ce.value) && z.length > +ce.value,
        Ne = !hn(he.value) && z.length < +he.value;
      if ((ye || Ne) && (ge(ye, ce.message, he.message), !s))
        return Z(ee[T].message), ee;
    }
    if (R && !fe && jn(z)) {
      const { value: ce, message: he } = cs(R);
      if (
        Vu(ce) &&
        !z.match(ce) &&
        ((ee[T] = {
          type: Va.pattern,
          message: he,
          ref: d,
          ...Re(Va.pattern, he),
        }),
        !s)
      )
        return Z(he), ee;
    }
    if (E) {
      if (sa(E)) {
        const ce = await E(z, r),
          he = Q0(ce, Y);
        if (he && ((ee[T] = { ...he, ...Re(Va.validate, he.message) }), !s))
          return Z(he.message), ee;
      } else if (It(E)) {
        let ce = {};
        for (const he in E) {
          if (!tn(ce) && !s) break;
          const ye = Q0(await E[he](z, r), Y, he);
          ye &&
            ((ce = { ...ye, ...Re(he, ye.message) }),
            Z(ye.message),
            s && (ee[T] = ce));
        }
        if (!tn(ce) && ((ee[T] = { ref: Y, ...ce }), !s)) return ee;
      }
    }
    return Z(!0), ee;
  };
const t3 = {
  mode: ra.onSubmit,
  reValidateMode: ra.onChange,
  shouldFocusError: !0,
};
function n3(t = {}) {
  let n = { ...t3, ...t },
    r = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: sa(n.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: n.errors || {},
      disabled: n.disabled || !1,
    },
    s = {},
    o =
      It(n.defaultValues) || It(n.values)
        ? Pt(n.defaultValues || n.values) || {}
        : {},
    u = n.shouldUnregister ? {} : Pt(o),
    d = { action: !1, mount: !1, watch: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    p,
    g = 0;
  const v = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let b = { ...v };
  const x = { array: I0(), state: I0() },
    R = n.criteriaMode === ra.all,
    E = (j) => (H) => {
      clearTimeout(g), (g = setTimeout(j, H));
    },
    T = async (j) => {
      if (!n.disabled && (v.isValid || b.isValid || j)) {
        const H = n.resolver ? tn((await N()).errors) : await fe(s, !0);
        H !== r.isValid && x.state.next({ isValid: H });
      }
    },
    _ = (j, H) => {
      !n.disabled &&
        (v.isValidating ||
          v.validatingFields ||
          b.isValidating ||
          b.validatingFields) &&
        ((j || Array.from(h.mount)).forEach((Q) => {
          Q && (H ? pt(r.validatingFields, Q, H) : kt(r.validatingFields, Q));
        }),
        x.state.next({
          validatingFields: r.validatingFields,
          isValidating: !tn(r.validatingFields),
        }));
    },
    U = (j, H = [], Q, oe, W = !0, ne = !0) => {
      if (oe && Q && !n.disabled) {
        if (((d.action = !0), ne && Array.isArray(ue(s, j)))) {
          const Se = Q(ue(s, j), oe.argA, oe.argB);
          W && pt(s, j, Se);
        }
        if (ne && Array.isArray(ue(r.errors, j))) {
          const Se = Q(ue(r.errors, j), oe.argA, oe.argB);
          W && pt(r.errors, j, Se), W_(r.errors, j);
        }
        if (
          (v.touchedFields || b.touchedFields) &&
          ne &&
          Array.isArray(ue(r.touchedFields, j))
        ) {
          const Se = Q(ue(r.touchedFields, j), oe.argA, oe.argB);
          W && pt(r.touchedFields, j, Se);
        }
        (v.dirtyFields || b.dirtyFields) && (r.dirtyFields = fs(o, u)),
          x.state.next({
            name: j,
            isDirty: ge(j, H),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else pt(u, j, H);
    },
    z = (j, H) => {
      pt(r.errors, j, H), x.state.next({ errors: r.errors });
    },
    Y = (j) => {
      (r.errors = j), x.state.next({ errors: r.errors, isValid: !1 });
    },
    Z = (j, H, Q, oe) => {
      const W = ue(s, j);
      if (W) {
        const ne = ue(u, j, Nt(Q) ? ue(o, j) : Q);
        Nt(ne) || (oe && oe.defaultChecked) || H
          ? pt(u, j, H ? ne : q0(W._f))
          : ye(j, ne),
          d.mount && !d.action && T();
      }
    },
    ee = (j, H, Q, oe, W) => {
      let ne = !1,
        Se = !1;
      const Ye = { name: j };
      if (!n.disabled) {
        if (!Q || oe) {
          (v.isDirty || b.isDirty) &&
            ((Se = r.isDirty),
            (r.isDirty = Ye.isDirty = ge()),
            (ne = Se !== Ye.isDirty));
          const He = ia(ue(o, j), H);
          (Se = !!ue(r.dirtyFields, j)),
            He ? kt(r.dirtyFields, j) : pt(r.dirtyFields, j, !0),
            (Ye.dirtyFields = r.dirtyFields),
            (ne = ne || ((v.dirtyFields || b.dirtyFields) && Se !== !He));
        }
        if (Q) {
          const He = ue(r.touchedFields, j);
          He ||
            (pt(r.touchedFields, j, Q),
            (Ye.touchedFields = r.touchedFields),
            (ne = ne || ((v.touchedFields || b.touchedFields) && He !== Q)));
        }
        ne && W && x.state.next(Ye);
      }
      return ne ? Ye : {};
    },
    pe = (j, H, Q, oe) => {
      const W = ue(r.errors, j),
        ne = (v.isValid || b.isValid) && On(H) && r.isValid !== H;
      if (
        (n.delayError && Q
          ? ((p = E(() => z(j, Q))), p(n.delayError))
          : (clearTimeout(g),
            (p = null),
            Q ? pt(r.errors, j, Q) : kt(r.errors, j)),
        (Q ? !ia(W, Q) : W) || !tn(oe) || ne)
      ) {
        const Se = {
          ...oe,
          ...(ne && On(H) ? { isValid: H } : {}),
          errors: r.errors,
          name: j,
        };
        (r = { ...r, ...Se }), x.state.next(Se);
      }
    },
    N = async (j) => {
      _(j, !0);
      const H = await n.resolver(
        u,
        n.context,
        Q_(j || h.mount, s, n.criteriaMode, n.shouldUseNativeValidation)
      );
      return _(j), H;
    },
    me = async (j) => {
      const { errors: H } = await N(j);
      if (j)
        for (const Q of j) {
          const oe = ue(H, Q);
          oe ? pt(r.errors, Q, oe) : kt(r.errors, Q);
        }
      else r.errors = H;
      return H;
    },
    fe = async (j, H, Q = { valid: !0 }) => {
      for (const oe in j) {
        const W = j[oe];
        if (W) {
          const { _f: ne, ...Se } = W;
          if (ne) {
            const Ye = h.array.has(ne.name),
              He = W._f && K_(W._f);
            He && v.validatingFields && _([ne.name], !0);
            const xt = await K0(
              W,
              h.disabled,
              u,
              R,
              n.shouldUseNativeValidation && !H,
              Ye
            );
            if (
              (He && v.validatingFields && _([ne.name]),
              xt[ne.name] && ((Q.valid = !1), H))
            )
              break;
            !H &&
              (ue(xt, ne.name)
                ? Ye
                  ? e3(r.errors, xt, ne.name)
                  : pt(r.errors, ne.name, xt[ne.name])
                : kt(r.errors, ne.name));
          }
          !tn(Se) && (await fe(Se, H, Q));
        }
      }
      return Q.valid;
    },
    Re = () => {
      for (const j of h.unMount) {
        const H = ue(s, j);
        H &&
          (H._f.refs ? H._f.refs.every((Q) => !Gf(Q)) : !Gf(H._f.ref)) &&
          qe(j);
      }
      h.unMount = new Set();
    },
    ge = (j, H) => !n.disabled && (j && H && pt(u, j, H), !ia(ze(), o)),
    ce = (j, H, Q) =>
      lh(j, h, { ...(d.mount ? u : Nt(H) ? o : jn(j) ? { [j]: H } : H) }, Q, H),
    he = (j) =>
      qh(ue(d.mount ? u : o, j, n.shouldUnregister ? ue(o, j, []) : [])),
    ye = (j, H, Q = {}) => {
      const oe = ue(s, j);
      let W = H;
      if (oe) {
        const ne = oe._f;
        ne &&
          (!ne.disabled && pt(u, j, Gb(H, ne)),
          (W = qu(ne.ref) && hn(H) ? "" : H),
          qb(ne.ref)
            ? [...ne.ref.options].forEach(
                (Se) => (Se.selected = W.includes(Se.value))
              )
            : ne.refs
            ? Yl(ne.ref)
              ? ne.refs.forEach((Se) => {
                  (!Se.defaultChecked || !Se.disabled) &&
                    (Array.isArray(W)
                      ? (Se.checked = !!W.find((Ye) => Ye === Se.value))
                      : (Se.checked = W === Se.value || !!W));
                })
              : ne.refs.forEach((Se) => (Se.checked = Se.value === W))
            : Yh(ne.ref)
            ? (ne.ref.value = "")
            : ((ne.ref.value = W),
              ne.ref.type || x.state.next({ name: j, values: Pt(u) })));
      }
      (Q.shouldDirty || Q.shouldTouch) &&
        ee(j, W, Q.shouldTouch, Q.shouldDirty, !0),
        Q.shouldValidate && Oe(j);
    },
    Ne = (j, H, Q) => {
      for (const oe in H) {
        if (!H.hasOwnProperty(oe)) return;
        const W = H[oe],
          ne = j + "." + oe,
          Se = ue(s, ne);
        (h.array.has(j) || It(W) || (Se && !Se._f)) && !gi(W)
          ? Ne(ne, W, Q)
          : ye(ne, W, Q);
      }
    },
    k = (j, H, Q = {}) => {
      const oe = ue(s, j),
        W = h.array.has(j),
        ne = Pt(H);
      pt(u, j, ne),
        W
          ? (x.array.next({ name: j, values: Pt(u) }),
            (v.isDirty || v.dirtyFields || b.isDirty || b.dirtyFields) &&
              Q.shouldDirty &&
              x.state.next({
                name: j,
                dirtyFields: fs(o, u),
                isDirty: ge(j, ne),
              }))
          : oe && !oe._f && !hn(ne)
          ? Ne(j, ne, Q)
          : ye(j, ne, Q),
        G0(j, h) && x.state.next({ ...r, name: j }),
        x.state.next({ name: d.mount ? j : void 0, values: Pt(u) });
    },
    J = async (j) => {
      d.mount = !0;
      const H = j.target;
      let Q = H.name,
        oe = !0;
      const W = ue(s, Q),
        ne = (He) => {
          oe =
            Number.isNaN(He) ||
            (gi(He) && isNaN(He.getTime())) ||
            ia(He, ue(u, Q, He));
        },
        Se = V0(n.mode),
        Ye = V0(n.reValidateMode);
      if (W) {
        let He, xt;
        const da = H.type ? q0(W._f) : kb(j),
          Un = j.type === Pu.BLUR || j.type === Pu.FOCUS_OUT,
          Yr =
            (!$_(W._f) && !n.resolver && !ue(r.errors, Q) && !W._f.deps) ||
            J_(Un, ue(r.touchedFields, Q), r.isSubmitted, Ye, Se),
          Wn = G0(Q, h, Un);
        pt(u, Q, da),
          Un
            ? (!H || !H.readOnly) && (W._f.onBlur && W._f.onBlur(j), p && p(0))
            : W._f.onChange && W._f.onChange(j);
        const dt = ee(Q, da, Un),
          vn = !tn(dt) || Wn;
        if ((!Un && x.state.next({ name: Q, type: j.type, values: Pt(u) }), Yr))
          return (
            (v.isValid || b.isValid) &&
              (n.mode === "onBlur" ? Un && T() : Un || T()),
            vn && x.state.next({ name: Q, ...(Wn ? {} : dt) })
          );
        if ((!Un && Wn && x.state.next({ ...r }), n.resolver)) {
          const { errors: Bt } = await N([Q]);
          if ((ne(da), oe)) {
            const Ai = Y0(r.errors, s, Q),
              Ci = Y0(Bt, s, Ai.name || Q);
            (He = Ci.error), (Q = Ci.name), (xt = tn(Bt));
          }
        } else
          _([Q], !0),
            (He = (await K0(W, h.disabled, u, R, n.shouldUseNativeValidation))[
              Q
            ]),
            _([Q]),
            ne(da),
            oe &&
              (He
                ? (xt = !1)
                : (v.isValid || b.isValid) && (xt = await fe(s, !0)));
        oe &&
          (W._f.deps &&
            (!Array.isArray(W._f.deps) || W._f.deps.length > 0) &&
            Oe(W._f.deps),
          pe(Q, xt, He, dt));
      }
    },
    re = (j, H) => {
      if (ue(r.errors, H) && j.focus) return j.focus(), 1;
    },
    Oe = async (j, H = {}) => {
      let Q, oe;
      const W = Dl(j);
      if (n.resolver) {
        const ne = await me(Nt(j) ? j : W);
        (Q = tn(ne)), (oe = j ? !W.some((Se) => ue(ne, Se)) : Q);
      } else
        j
          ? ((oe = (
              await Promise.all(
                W.map(async (ne) => {
                  const Se = ue(s, ne);
                  return await fe(Se && Se._f ? { [ne]: Se } : Se);
                })
              )
            ).every(Boolean)),
            !(!oe && !r.isValid) && T())
          : (oe = Q = await fe(s));
      return (
        x.state.next({
          ...(!jn(j) || ((v.isValid || b.isValid) && Q !== r.isValid)
            ? {}
            : { name: j }),
          ...(n.resolver || !j ? { isValid: Q } : {}),
          errors: r.errors,
        }),
        H.shouldFocus && !oe && Ml(s, re, j ? W : h.mount),
        oe
      );
    },
    ze = (j, H) => {
      let Q = { ...(d.mount ? u : o) };
      return (
        H && (Q = Pb(H.dirtyFields ? r.dirtyFields : r.touchedFields, Q)),
        Nt(j) ? Q : jn(j) ? ue(Q, j) : j.map((oe) => ue(Q, oe))
      );
    },
    O = (j, H) => ({
      invalid: !!ue((H || r).errors, j),
      isDirty: !!ue((H || r).dirtyFields, j),
      error: ue((H || r).errors, j),
      isValidating: !!ue(r.validatingFields, j),
      isTouched: !!ue((H || r).touchedFields, j),
    }),
    G = (j) => {
      j && Dl(j).forEach((H) => kt(r.errors, H)),
        x.state.next({ errors: j ? r.errors : {} });
    },
    ae = (j, H, Q) => {
      const oe = (ue(s, j, { _f: {} })._f || {}).ref,
        W = ue(r.errors, j) || {},
        { ref: ne, message: Se, type: Ye, ...He } = W;
      pt(r.errors, j, { ...He, ...H, ref: oe }),
        x.state.next({ name: j, errors: r.errors, isValid: !1 }),
        Q && Q.shouldFocus && oe && oe.focus && oe.focus();
    },
    le = (j, H) =>
      sa(j)
        ? x.state.subscribe({
            next: (Q) => "values" in Q && j(ce(void 0, H), Q),
          })
        : ce(j, H, !0),
    we = (j) =>
      x.state.subscribe({
        next: (H) => {
          Z_(j.name, H.name, j.exact) &&
            X_(H, j.formState || v, Ns, j.reRenderRoot) &&
            j.callback({ values: { ...u }, ...r, ...H, defaultValues: o });
        },
      }).unsubscribe,
    Le = (j) => (
      (d.mount = !0), (b = { ...b, ...j.formState }), we({ ...j, formState: b })
    ),
    qe = (j, H = {}) => {
      for (const Q of j ? Dl(j) : h.mount)
        h.mount.delete(Q),
          h.array.delete(Q),
          H.keepValue || (kt(s, Q), kt(u, Q)),
          !H.keepError && kt(r.errors, Q),
          !H.keepDirty && kt(r.dirtyFields, Q),
          !H.keepTouched && kt(r.touchedFields, Q),
          !H.keepIsValidating && kt(r.validatingFields, Q),
          !n.shouldUnregister && !H.keepDefaultValue && kt(o, Q);
      x.state.next({ values: Pt(u) }),
        x.state.next({ ...r, ...(H.keepDirty ? { isDirty: ge() } : {}) }),
        !H.keepIsValid && T();
    },
    bt = ({ disabled: j, name: H }) => {
      ((On(j) && d.mount) || j || h.disabled.has(H)) &&
        (j ? h.disabled.add(H) : h.disabled.delete(H));
    },
    ct = (j, H = {}) => {
      let Q = ue(s, j);
      const oe = On(H.disabled) || On(n.disabled);
      return (
        pt(s, j, {
          ...(Q || {}),
          _f: {
            ...(Q && Q._f ? Q._f : { ref: { name: j } }),
            name: j,
            mount: !0,
            ...H,
          },
        }),
        h.mount.add(j),
        Q
          ? bt({ disabled: On(H.disabled) ? H.disabled : n.disabled, name: j })
          : Z(j, !0, H.value),
        {
          ...(oe ? { disabled: H.disabled || n.disabled } : {}),
          ...(n.progressive
            ? {
                required: !!H.required,
                min: _l(H.min),
                max: _l(H.max),
                minLength: _l(H.minLength),
                maxLength: _l(H.maxLength),
                pattern: _l(H.pattern),
              }
            : {}),
          name: j,
          onChange: J,
          onBlur: J,
          ref: (W) => {
            if (W) {
              ct(j, H), (Q = ue(s, j));
              const ne =
                  (Nt(W.value) &&
                    W.querySelectorAll &&
                    W.querySelectorAll("input,select,textarea")[0]) ||
                  W,
                Se = V_(ne),
                Ye = Q._f.refs || [];
              if (Se ? Ye.find((He) => He === ne) : ne === Q._f.ref) return;
              pt(s, j, {
                _f: {
                  ...Q._f,
                  ...(Se
                    ? {
                        refs: [
                          ...Ye.filter(Gf),
                          ne,
                          ...(Array.isArray(ue(o, j)) ? [{}] : []),
                        ],
                        ref: { type: ne.type, name: j },
                      }
                    : { ref: ne }),
                },
              }),
                Z(j, !1, void 0, ne);
            } else
              (Q = ue(s, j, {})),
                Q._f && (Q._f.mount = !1),
                (n.shouldUnregister || H.shouldUnregister) &&
                  !(Ib(h.array, j) && d.action) &&
                  h.unMount.add(j);
          },
        }
      );
    },
    Zn = () => n.shouldFocusError && Ml(s, re, h.mount),
    tr = (j) => {
      On(j) &&
        (x.state.next({ disabled: j }),
        Ml(
          s,
          (H, Q) => {
            const oe = ue(s, Q);
            oe &&
              ((H.disabled = oe._f.disabled || j),
              Array.isArray(oe._f.refs) &&
                oe._f.refs.forEach((W) => {
                  W.disabled = oe._f.disabled || j;
                }));
          },
          0,
          !1
        ));
    },
    _t = (j, H) => async (Q) => {
      let oe;
      Q && (Q.preventDefault && Q.preventDefault(), Q.persist && Q.persist());
      let W = Pt(u);
      if ((x.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: ne, values: Se } = await N();
        (r.errors = ne), (W = Pt(Se));
      } else await fe(s);
      if (h.disabled.size) for (const ne of h.disabled) kt(W, ne);
      if ((kt(r.errors, "root"), tn(r.errors))) {
        x.state.next({ errors: {} });
        try {
          await j(W, Q);
        } catch (ne) {
          oe = ne;
        }
      } else H && (await H({ ...r.errors }, Q)), Zn(), setTimeout(Zn);
      if (
        (x.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: tn(r.errors) && !oe,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        oe)
      )
        throw oe;
    },
    Jn = (j, H = {}) => {
      ue(s, j) &&
        (Nt(H.defaultValue)
          ? k(j, Pt(ue(o, j)))
          : (k(j, H.defaultValue), pt(o, j, Pt(H.defaultValue))),
        H.keepTouched || kt(r.touchedFields, j),
        H.keepDirty ||
          (kt(r.dirtyFields, j),
          (r.isDirty = H.defaultValue ? ge(j, Pt(ue(o, j))) : ge())),
        H.keepError || (kt(r.errors, j), v.isValid && T()),
        x.state.next({ ...r }));
    },
    gn = (j, H = {}) => {
      const Q = j ? Pt(j) : o,
        oe = Pt(Q),
        W = tn(j),
        ne = W ? o : oe;
      if ((H.keepDefaultValues || (o = Q), !H.keepValues)) {
        if (H.keepDirtyValues) {
          const Se = new Set([...h.mount, ...Object.keys(fs(o, u))]);
          for (const Ye of Array.from(Se))
            ue(r.dirtyFields, Ye) ? pt(ne, Ye, ue(u, Ye)) : k(Ye, ue(ne, Ye));
        } else {
          if (Ph && Nt(j))
            for (const Se of h.mount) {
              const Ye = ue(s, Se);
              if (Ye && Ye._f) {
                const He = Array.isArray(Ye._f.refs)
                  ? Ye._f.refs[0]
                  : Ye._f.ref;
                if (qu(He)) {
                  const xt = He.closest("form");
                  if (xt) {
                    xt.reset();
                    break;
                  }
                }
              }
            }
          if (H.keepFieldsRef) for (const Se of h.mount) k(Se, ue(ne, Se));
          else s = {};
        }
        (u = n.shouldUnregister ? (H.keepDefaultValues ? Pt(o) : {}) : Pt(ne)),
          x.array.next({ values: { ...ne } }),
          x.state.next({ values: { ...ne } });
      }
      (h = {
        mount: H.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (d.mount =
          !v.isValid ||
          !!H.keepIsValid ||
          !!H.keepDirtyValues ||
          (!n.shouldUnregister && !tn(ne))),
        (d.watch = !!n.shouldUnregister),
        (d.action = !1),
        H.keepErrors || (r.errors = {}),
        x.state.next({
          submitCount: H.keepSubmitCount ? r.submitCount : 0,
          isDirty: W
            ? !1
            : H.keepDirty
            ? r.isDirty
            : !!(H.keepDefaultValues && !ia(j, o)),
          isSubmitted: H.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: W
            ? {}
            : H.keepDirtyValues
            ? H.keepDefaultValues && u
              ? fs(o, u)
              : r.dirtyFields
            : H.keepDefaultValues && j
            ? fs(o, j)
            : H.keepDirty
            ? r.dirtyFields
            : {},
          touchedFields: H.keepTouched ? r.touchedFields : {},
          errors: H.keepErrors ? r.errors : {},
          isSubmitSuccessful: H.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
          defaultValues: o,
        });
    },
    nr = (j, H) => gn(sa(j) ? j(u) : j, H),
    yn = (j, H = {}) => {
      const Q = ue(s, j),
        oe = Q && Q._f;
      if (oe) {
        const W = oe.refs ? oe.refs[0] : oe.ref;
        W.focus && (W.focus(), H.shouldSelect && sa(W.select) && W.select());
      }
    },
    Ns = (j) => {
      r = { ...r, ...j };
    },
    wa = {
      control: {
        register: ct,
        unregister: qe,
        getFieldState: O,
        handleSubmit: _t,
        setError: ae,
        _subscribe: we,
        _runSchema: N,
        _focusError: Zn,
        _getWatch: ce,
        _getDirty: ge,
        _setValid: T,
        _setFieldArray: U,
        _setDisabledField: bt,
        _setErrors: Y,
        _getFieldArray: he,
        _reset: gn,
        _resetDefaultValues: () =>
          sa(n.defaultValues) &&
          n.defaultValues().then((j) => {
            nr(j, n.resetOptions), x.state.next({ isLoading: !1 });
          }),
        _removeUnmounted: Re,
        _disableForm: tr,
        _subjects: x,
        _proxyFormState: v,
        get _fields() {
          return s;
        },
        get _formValues() {
          return u;
        },
        get _state() {
          return d;
        },
        set _state(j) {
          d = j;
        },
        get _defaultValues() {
          return o;
        },
        get _names() {
          return h;
        },
        set _names(j) {
          h = j;
        },
        get _formState() {
          return r;
        },
        get _options() {
          return n;
        },
        set _options(j) {
          n = { ...n, ...j };
        },
      },
      subscribe: Le,
      trigger: Oe,
      register: ct,
      handleSubmit: _t,
      watch: le,
      setValue: k,
      getValues: ze,
      reset: nr,
      resetField: Jn,
      clearErrors: G,
      unregister: qe,
      setError: ae,
      setFocus: yn,
      getFieldState: O,
    };
  return { ...wa, formControl: wa };
}
function Kh(t = {}) {
  const n = Me.useRef(void 0),
    r = Me.useRef(void 0),
    [s, o] = Me.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: sa(t.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
      isReady: !1,
      defaultValues: sa(t.defaultValues) ? void 0 : t.defaultValues,
    });
  if (!n.current)
    if (t.formControl)
      (n.current = { ...t.formControl, formState: s }),
        t.defaultValues &&
          !sa(t.defaultValues) &&
          t.formControl.reset(t.defaultValues, t.resetOptions);
    else {
      const { formControl: d, ...h } = n3(t);
      n.current = { ...h, formState: s };
    }
  const u = n.current.control;
  return (
    (u._options = t),
    Gh(() => {
      const d = u._subscribe({
        formState: u._proxyFormState,
        callback: () => o({ ...u._formState }),
        reRenderRoot: !0,
      });
      return o((h) => ({ ...h, isReady: !0 })), (u._formState.isReady = !0), d;
    }, [u]),
    Me.useEffect(() => u._disableForm(t.disabled), [u, t.disabled]),
    Me.useEffect(() => {
      t.mode && (u._options.mode = t.mode),
        t.reValidateMode && (u._options.reValidateMode = t.reValidateMode);
    }, [u, t.mode, t.reValidateMode]),
    Me.useEffect(() => {
      t.errors && (u._setErrors(t.errors), u._focusError());
    }, [u, t.errors]),
    Me.useEffect(() => {
      t.shouldUnregister && u._subjects.state.next({ values: u._getWatch() });
    }, [u, t.shouldUnregister]),
    Me.useEffect(() => {
      if (u._proxyFormState.isDirty) {
        const d = u._getDirty();
        d !== s.isDirty && u._subjects.state.next({ isDirty: d });
      }
    }, [u, s.isDirty]),
    Me.useEffect(() => {
      var d;
      t.values && !ia(t.values, r.current)
        ? (u._reset(t.values, {
            keepFieldsRef: !0,
            ...u._options.resetOptions,
          }),
          (!((d = u._options.resetOptions) === null || d === void 0) &&
            d.keepIsValid) ||
            u._setValid(),
          (r.current = t.values),
          o((h) => ({ ...h })))
        : u._resetDefaultValues();
    }, [u, t.values]),
    Me.useEffect(() => {
      u._state.mount || (u._setValid(), (u._state.mount = !0)),
        u._state.watch &&
          ((u._state.watch = !1), u._subjects.state.next({ ...u._formState })),
        u._removeUnmounted();
    }),
    (n.current.formState = Hb(s, u)),
    n.current
  );
}
var Qb = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  $0 = Me.createContext && Me.createContext(Qb),
  a3 = ["attr", "size", "title"];
function r3(t, n) {
  if (t == null) return {};
  var r = i3(t, n),
    s,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (o = 0; o < u.length; o++)
      (s = u[o]),
        !(n.indexOf(s) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, s) &&
          (r[s] = t[s]);
  }
  return r;
}
function i3(t, n) {
  if (t == null) return {};
  var r = {};
  for (var s in t)
    if (Object.prototype.hasOwnProperty.call(t, s)) {
      if (n.indexOf(s) >= 0) continue;
      r[s] = t[s];
    }
  return r;
}
function Fu() {
  return (
    (Fu = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var s in r)
              Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
          }
          return t;
        }),
    Fu.apply(this, arguments)
  );
}
function X0(t, n) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    n &&
      (s = s.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, s);
  }
  return r;
}
function Gu(t) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? X0(Object(r), !0).forEach(function (s) {
          s3(t, s, r[s]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : X0(Object(r)).forEach(function (s) {
          Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(r, s));
        });
  }
  return t;
}
function s3(t, n, r) {
  return (
    (n = l3(n)),
    n in t
      ? Object.defineProperty(t, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[n] = r),
    t
  );
}
function l3(t) {
  var n = o3(t, "string");
  return typeof n == "symbol" ? n : n + "";
}
function o3(t, n) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(t, n);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function Kb(t) {
  return (
    t &&
    t.map((n, r) =>
      Me.createElement(n.tag, Gu({ key: r }, n.attr), Kb(n.child))
    )
  );
}
function Gt(t) {
  return (n) =>
    Me.createElement(u3, Fu({ attr: Gu({}, t.attr) }, n), Kb(t.child));
}
function u3(t) {
  var n = (r) => {
    var { attr: s, size: o, title: u } = t,
      d = r3(t, a3),
      h = o || r.size || "1em",
      p;
    return (
      r.className && (p = r.className),
      t.className && (p = (p ? p + " " : "") + t.className),
      Me.createElement(
        "svg",
        Fu(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          s,
          d,
          {
            className: p,
            style: Gu(Gu({ color: t.color || r.color }, r.style), t.style),
            height: h,
            width: h,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        u && Me.createElement("title", null, u),
        t.children
      )
    );
  };
  return $0 !== void 0
    ? Me.createElement($0.Consumer, null, (r) => n(r))
    : n(Qb);
}
function c3(t) {
  return Gt({
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z",
        },
        child: [],
      },
    ],
  })(t);
}
function d3(t) {
  return Gt({
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z",
        },
        child: [],
      },
    ],
  })(t);
}
function f3(t) {
  return Gt({
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z",
        },
        child: [],
      },
    ],
  })(t);
}
function h3(t) {
  return Gt({
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z",
        },
        child: [],
      },
    ],
  })(t);
}
const $b = w.createContext(null),
  Zt = () => w.useContext($b);
var m3 = {
  cm: !0,
  mm: !0,
  in: !0,
  px: !0,
  pt: !0,
  pc: !0,
  em: !0,
  ex: !0,
  ch: !0,
  rem: !0,
  vw: !0,
  vh: !0,
  vmin: !0,
  vmax: !0,
  "%": !0,
};
function p3(t) {
  if (typeof t == "number") return { value: t, unit: "px" };
  var n,
    r = (t.match(/^[0-9.]*/) || "").toString();
  r.includes(".") ? (n = parseFloat(r)) : (n = parseInt(r, 10));
  var s = (t.match(/[^0-9]*$/) || "").toString();
  return m3[s]
    ? { value: n, unit: s }
    : (console.warn(
        "React Spinners: "
          .concat(t, " is not a valid css value. Defaulting to ")
          .concat(n, "px.")
      ),
      { value: n, unit: "px" });
}
function wu(t) {
  var n = p3(t);
  return "".concat(n.value).concat(n.unit);
}
var g3 = function (t, n, r) {
    var s = "react-spinners-".concat(t, "-").concat(r);
    if (typeof window > "u" || !window.document) return s;
    var o = document.createElement("style");
    document.head.appendChild(o);
    var u = o.sheet,
      d = `
    @keyframes `
        .concat(
          s,
          ` {
      `
        )
        .concat(
          n,
          `
    }
  `
        );
    return u && u.insertRule(d, 0), s;
  },
  Yu = function () {
    return (
      (Yu =
        Object.assign ||
        function (t) {
          for (var n, r = 1, s = arguments.length; r < s; r++) {
            n = arguments[r];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        }),
      Yu.apply(this, arguments)
    );
  },
  y3 = function (t, n) {
    var r = {};
    for (var s in t)
      Object.prototype.hasOwnProperty.call(t, s) &&
        n.indexOf(s) < 0 &&
        (r[s] = t[s]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, s = Object.getOwnPropertySymbols(t); o < s.length; o++)
        n.indexOf(s[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, s[o]) &&
          (r[s[o]] = t[s[o]]);
    return r;
  },
  v3 = function (t, n, r) {
    if (r || arguments.length === 2)
      for (var s = 0, o = n.length, u; s < o; s++)
        (u || !(s in n)) &&
          (u || (u = Array.prototype.slice.call(n, 0, s)), (u[s] = n[s]));
    return t.concat(u || Array.prototype.slice.call(n));
  },
  b3 = g3(
    "ScaleLoader",
    "0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}",
    "scale"
  );
function x3(t) {
  var n = t.loading,
    r = n === void 0 ? !0 : n,
    s = t.color,
    o = s === void 0 ? "#000000" : s,
    u = t.speedMultiplier,
    d = u === void 0 ? 1 : u,
    h = t.cssOverride,
    p = h === void 0 ? {} : h,
    g = t.height,
    v = g === void 0 ? 35 : g,
    b = t.width,
    x = b === void 0 ? 4 : b,
    R = t.radius,
    E = R === void 0 ? 2 : R,
    T = t.margin,
    _ = T === void 0 ? 2 : T,
    U = t.barCount,
    z = U === void 0 ? 5 : U,
    Y = y3(t, [
      "loading",
      "color",
      "speedMultiplier",
      "cssOverride",
      "height",
      "width",
      "radius",
      "margin",
      "barCount",
    ]),
    Z = Yu({ display: "inherit" }, p),
    ee = function (pe) {
      return {
        backgroundColor: o,
        width: wu(x),
        height: wu(v),
        margin: wu(_),
        borderRadius: wu(E),
        display: "inline-block",
        animation: ""
          .concat(b3, " ")
          .concat(1 / d, "s ")
          .concat(pe * 0.1, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
        animationFillMode: "both",
      };
    };
  return r
    ? w.createElement(
        "span",
        Yu({ style: Z }, Y),
        v3([], Array(z), !0).map(function (pe, N) {
          return w.createElement("span", { key: N, style: ee(N + 1) });
        })
      )
    : null;
}
const Ql = ({ smallHeight: t }) =>
  m.jsx("div", {
    className: ` ${t ? "h-[250px]" : "h-[70vh]"}
      flex 
      flex-col 
      justify-center 
      items-center `,
    children: m.jsx(x3, { size: 100, color: "lime" }),
  });
let S3 = { data: "" },
  E3 = (t) => {
    if (typeof window == "object") {
      let n =
        (t ? t.querySelector("#_goober") : window._goober) ||
        Object.assign(document.createElement("style"), {
          innerHTML: " ",
          id: "_goober",
        });
      return (
        (n.nonce = window.__nonce__),
        n.parentNode || (t || document.head).appendChild(n),
        n.firstChild
      );
    }
    return t || S3;
  },
  w3 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  _3 = /\/\*[^]*?\*\/|  +/g,
  Z0 = /\n+/g,
  Dr = (t, n) => {
    let r = "",
      s = "",
      o = "";
    for (let u in t) {
      let d = t[u];
      u[0] == "@"
        ? u[1] == "i"
          ? (r = u + " " + d + ";")
          : (s +=
              u[1] == "f"
                ? Dr(d, u)
                : u + "{" + Dr(d, u[1] == "k" ? "" : n) + "}")
        : typeof d == "object"
        ? (s += Dr(
            d,
            n
              ? n.replace(/([^,])+/g, (h) =>
                  u.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (p) =>
                    /&/.test(p) ? p.replace(/&/g, h) : h ? h + " " + p : p
                  )
                )
              : u
          ))
        : d != null &&
          ((u = /^--/.test(u) ? u : u.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (o += Dr.p ? Dr.p(u, d) : u + ":" + d + ";"));
    }
    return r + (n && o ? n + "{" + o + "}" : o) + s;
  },
  Fa = {},
  Xb = (t) => {
    if (typeof t == "object") {
      let n = "";
      for (let r in t) n += r + Xb(t[r]);
      return n;
    }
    return t;
  },
  T3 = (t, n, r, s, o) => {
    let u = Xb(t),
      d =
        Fa[u] ||
        (Fa[u] = ((p) => {
          let g = 0,
            v = 11;
          for (; g < p.length; ) v = (101 * v + p.charCodeAt(g++)) >>> 0;
          return "go" + v;
        })(u));
    if (!Fa[d]) {
      let p =
        u !== t
          ? t
          : ((g) => {
              let v,
                b,
                x = [{}];
              for (; (v = w3.exec(g.replace(_3, ""))); )
                v[4]
                  ? x.shift()
                  : v[3]
                  ? ((b = v[3].replace(Z0, " ").trim()),
                    x.unshift((x[0][b] = x[0][b] || {})))
                  : (x[0][v[1]] = v[2].replace(Z0, " ").trim());
              return x[0];
            })(t);
      Fa[d] = Dr(o ? { ["@keyframes " + d]: p } : p, r ? "" : "." + d);
    }
    let h = r && Fa.g ? Fa.g : null;
    return (
      r && (Fa.g = Fa[d]),
      ((p, g, v, b) => {
        b
          ? (g.data = g.data.replace(b, p))
          : g.data.indexOf(p) === -1 && (g.data = v ? p + g.data : g.data + p);
      })(Fa[d], n, s, h),
      d
    );
  },
  R3 = (t, n, r) =>
    t.reduce((s, o, u) => {
      let d = n[u];
      if (d && d.call) {
        let h = d(r),
          p = (h && h.props && h.props.className) || (/^go/.test(h) && h);
        d = p
          ? "." + p
          : h && typeof h == "object"
          ? h.props
            ? ""
            : Dr(h, "")
          : h === !1
          ? ""
          : h;
      }
      return s + o + (d ?? "");
    }, "");
function fc(t) {
  let n = this || {},
    r = t.call ? t(n.p) : t;
  return T3(
    r.unshift
      ? r.raw
        ? R3(r, [].slice.call(arguments, 1), n.p)
        : r.reduce((s, o) => Object.assign(s, o && o.call ? o(n.p) : o), {})
      : r,
    E3(n.target),
    n.g,
    n.o,
    n.k
  );
}
let Zb, ch, dh;
fc.bind({ g: 1 });
let Za = fc.bind({ k: 1 });
function A3(t, n, r, s) {
  (Dr.p = n), (Zb = t), (ch = r), (dh = s);
}
function Vr(t, n) {
  let r = this || {};
  return function () {
    let s = arguments;
    function o(u, d) {
      let h = Object.assign({}, u),
        p = h.className || o.className;
      (r.p = Object.assign({ theme: ch && ch() }, h)),
        (r.o = / *go\d+/.test(p)),
        (h.className = fc.apply(r, s) + (p ? " " + p : ""));
      let g = t;
      return (
        t[0] && ((g = h.as || t), delete h.as), dh && g[0] && dh(h), Zb(g, h)
      );
    }
    return o;
  };
}
var C3 = (t) => typeof t == "function",
  Qu = (t, n) => (C3(t) ? t(n) : t),
  N3 = (() => {
    let t = 0;
    return () => (++t).toString();
  })(),
  Jb = (() => {
    let t;
    return () => {
      if (t === void 0 && typeof window < "u") {
        let n = matchMedia("(prefers-reduced-motion: reduce)");
        t = !n || n.matches;
      }
      return t;
    };
  })(),
  O3 = 20,
  $h = "default",
  Wb = (t, n) => {
    let { toastLimit: r } = t.settings;
    switch (n.type) {
      case 0:
        return { ...t, toasts: [n.toast, ...t.toasts].slice(0, r) };
      case 1:
        return {
          ...t,
          toasts: t.toasts.map((d) =>
            d.id === n.toast.id ? { ...d, ...n.toast } : d
          ),
        };
      case 2:
        let { toast: s } = n;
        return Wb(t, {
          type: t.toasts.find((d) => d.id === s.id) ? 1 : 0,
          toast: s,
        });
      case 3:
        let { toastId: o } = n;
        return {
          ...t,
          toasts: t.toasts.map((d) =>
            d.id === o || o === void 0
              ? { ...d, dismissed: !0, visible: !1 }
              : d
          ),
        };
      case 4:
        return n.toastId === void 0
          ? { ...t, toasts: [] }
          : { ...t, toasts: t.toasts.filter((d) => d.id !== n.toastId) };
      case 5:
        return { ...t, pausedAt: n.time };
      case 6:
        let u = n.time - (t.pausedAt || 0);
        return {
          ...t,
          pausedAt: void 0,
          toasts: t.toasts.map((d) => ({
            ...d,
            pauseDuration: d.pauseDuration + u,
          })),
        };
    }
  },
  ju = [],
  e1 = { toasts: [], pausedAt: void 0, settings: { toastLimit: O3 } },
  ya = {},
  t1 = (t, n = $h) => {
    (ya[n] = Wb(ya[n] || e1, t)),
      ju.forEach(([r, s]) => {
        r === n && s(ya[n]);
      });
  },
  n1 = (t) => Object.keys(ya).forEach((n) => t1(t, n)),
  j3 = (t) => Object.keys(ya).find((n) => ya[n].toasts.some((r) => r.id === t)),
  hc =
    (t = $h) =>
    (n) => {
      t1(n, t);
    },
  D3 = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  M3 = (t = {}, n = $h) => {
    let [r, s] = w.useState(ya[n] || e1),
      o = w.useRef(ya[n]);
    w.useEffect(
      () => (
        o.current !== ya[n] && s(ya[n]),
        ju.push([n, s]),
        () => {
          let d = ju.findIndex(([h]) => h === n);
          d > -1 && ju.splice(d, 1);
        }
      ),
      [n]
    );
    let u = r.toasts.map((d) => {
      var h, p, g;
      return {
        ...t,
        ...t[d.type],
        ...d,
        removeDelay:
          d.removeDelay ||
          ((h = t[d.type]) == null ? void 0 : h.removeDelay) ||
          t?.removeDelay,
        duration:
          d.duration ||
          ((p = t[d.type]) == null ? void 0 : p.duration) ||
          t?.duration ||
          D3[d.type],
        style: {
          ...t.style,
          ...((g = t[d.type]) == null ? void 0 : g.style),
          ...d.style,
        },
      };
    });
    return { ...r, toasts: u };
  },
  U3 = (t, n = "blank", r) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: n,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: t,
    pauseDuration: 0,
    ...r,
    id: r?.id || N3(),
  }),
  Kl = (t) => (n, r) => {
    let s = U3(n, t, r);
    return hc(s.toasterId || j3(s.id))({ type: 2, toast: s }), s.id;
  },
  wt = (t, n) => Kl("blank")(t, n);
wt.error = Kl("error");
wt.success = Kl("success");
wt.loading = Kl("loading");
wt.custom = Kl("custom");
wt.dismiss = (t, n) => {
  let r = { type: 3, toastId: t };
  n ? hc(n)(r) : n1(r);
};
wt.dismissAll = (t) => wt.dismiss(void 0, t);
wt.remove = (t, n) => {
  let r = { type: 4, toastId: t };
  n ? hc(n)(r) : n1(r);
};
wt.removeAll = (t) => wt.remove(void 0, t);
wt.promise = (t, n, r) => {
  let s = wt.loading(n.loading, { ...r, ...r?.loading });
  return (
    typeof t == "function" && (t = t()),
    t
      .then((o) => {
        let u = n.success ? Qu(n.success, o) : void 0;
        return (
          u ? wt.success(u, { id: s, ...r, ...r?.success }) : wt.dismiss(s), o
        );
      })
      .catch((o) => {
        let u = n.error ? Qu(n.error, o) : void 0;
        u ? wt.error(u, { id: s, ...r, ...r?.error }) : wt.dismiss(s);
      }),
    t
  );
};
var L3 = 1e3,
  z3 = (t, n = "default") => {
    let { toasts: r, pausedAt: s } = M3(t, n),
      o = w.useRef(new Map()).current,
      u = w.useCallback((b, x = L3) => {
        if (o.has(b)) return;
        let R = setTimeout(() => {
          o.delete(b), d({ type: 4, toastId: b });
        }, x);
        o.set(b, R);
      }, []);
    w.useEffect(() => {
      if (s) return;
      let b = Date.now(),
        x = r.map((R) => {
          if (R.duration === 1 / 0) return;
          let E = (R.duration || 0) + R.pauseDuration - (b - R.createdAt);
          if (E < 0) {
            R.visible && wt.dismiss(R.id);
            return;
          }
          return setTimeout(() => wt.dismiss(R.id, n), E);
        });
      return () => {
        x.forEach((R) => R && clearTimeout(R));
      };
    }, [r, s, n]);
    let d = w.useCallback(hc(n), [n]),
      h = w.useCallback(() => {
        d({ type: 5, time: Date.now() });
      }, [d]),
      p = w.useCallback(
        (b, x) => {
          d({ type: 1, toast: { id: b, height: x } });
        },
        [d]
      ),
      g = w.useCallback(() => {
        s && d({ type: 6, time: Date.now() });
      }, [s, d]),
      v = w.useCallback(
        (b, x) => {
          let {
              reverseOrder: R = !1,
              gutter: E = 8,
              defaultPosition: T,
            } = x || {},
            _ = r.filter(
              (Y) => (Y.position || T) === (b.position || T) && Y.height
            ),
            U = _.findIndex((Y) => Y.id === b.id),
            z = _.filter((Y, Z) => Z < U && Y.visible).length;
          return _.filter((Y) => Y.visible)
            .slice(...(R ? [z + 1] : [0, z]))
            .reduce((Y, Z) => Y + (Z.height || 0) + E, 0);
        },
        [r]
      );
    return (
      w.useEffect(() => {
        r.forEach((b) => {
          if (b.dismissed) u(b.id, b.removeDelay);
          else {
            let x = o.get(b.id);
            x && (clearTimeout(x), o.delete(b.id));
          }
        });
      }, [r, u]),
      {
        toasts: r,
        handlers: {
          updateHeight: p,
          startPause: h,
          endPause: g,
          calculateOffset: v,
        },
      }
    );
  },
  k3 = Za`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  I3 = Za`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  B3 = Za`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  H3 = Vr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${k3} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${I3} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(t) => t.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${B3} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  P3 = Za`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  q3 = Vr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(t) => t.secondary || "#e0e0e0"};
  border-right-color: ${(t) => t.primary || "#616161"};
  animation: ${P3} 1s linear infinite;
`,
  V3 = Za`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  F3 = Za`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  G3 = Vr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V3} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${F3} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(t) => t.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  Y3 = Vr("div")`
  position: absolute;
`,
  Q3 = Vr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  K3 = Za`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  $3 = Vr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K3} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  X3 = ({ toast: t }) => {
    let { icon: n, type: r, iconTheme: s } = t;
    return n !== void 0
      ? typeof n == "string"
        ? w.createElement($3, null, n)
        : n
      : r === "blank"
      ? null
      : w.createElement(
          Q3,
          null,
          w.createElement(q3, { ...s }),
          r !== "loading" &&
            w.createElement(
              Y3,
              null,
              r === "error"
                ? w.createElement(H3, { ...s })
                : w.createElement(G3, { ...s })
            )
        );
  },
  Z3 = (t) => `
0% {transform: translate3d(0,${t * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  J3 = (t) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t * -150}%,-1px) scale(.6); opacity:0;}
`,
  W3 = "0%{opacity:0;} 100%{opacity:1;}",
  e4 = "0%{opacity:1;} 100%{opacity:0;}",
  t4 = Vr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  n4 = Vr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  a4 = (t, n) => {
    let r = t.includes("top") ? 1 : -1,
      [s, o] = Jb() ? [W3, e4] : [Z3(r), J3(r)];
    return {
      animation: n
        ? `${Za(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Za(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  r4 = w.memo(({ toast: t, position: n, style: r, children: s }) => {
    let o = t.height
        ? a4(t.position || n || "top-center", t.visible)
        : { opacity: 0 },
      u = w.createElement(X3, { toast: t }),
      d = w.createElement(n4, { ...t.ariaProps }, Qu(t.message, t));
    return w.createElement(
      t4,
      { className: t.className, style: { ...o, ...r, ...t.style } },
      typeof s == "function"
        ? s({ icon: u, message: d })
        : w.createElement(w.Fragment, null, u, d)
    );
  });
A3(w.createElement);
var i4 = ({
    id: t,
    className: n,
    style: r,
    onHeightUpdate: s,
    children: o,
  }) => {
    let u = w.useCallback(
      (d) => {
        if (d) {
          let h = () => {
            let p = d.getBoundingClientRect().height;
            s(t, p);
          };
          h(),
            new MutationObserver(h).observe(d, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [t, s]
    );
    return w.createElement("div", { ref: u, className: n, style: r }, o);
  },
  s4 = (t, n) => {
    let r = t.includes("top"),
      s = r ? { top: 0 } : { bottom: 0 },
      o = t.includes("center")
        ? { justifyContent: "center" }
        : t.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: Jb() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${n * (r ? 1 : -1)}px)`,
      ...s,
      ...o,
    };
  },
  l4 = fc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  _u = 16,
  o4 = ({
    reverseOrder: t,
    position: n = "top-center",
    toastOptions: r,
    gutter: s,
    children: o,
    toasterId: u,
    containerStyle: d,
    containerClassName: h,
  }) => {
    let { toasts: p, handlers: g } = z3(r, u);
    return w.createElement(
      "div",
      {
        "data-rht-toaster": u || "",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: _u,
          left: _u,
          right: _u,
          bottom: _u,
          pointerEvents: "none",
          ...d,
        },
        className: h,
        onMouseEnter: g.startPause,
        onMouseLeave: g.endPause,
      },
      p.map((v) => {
        let b = v.position || n,
          x = g.calculateOffset(v, {
            reverseOrder: t,
            gutter: s,
            defaultPosition: n,
          }),
          R = s4(b, x);
        return w.createElement(
          i4,
          {
            id: v.id,
            key: v.id,
            onHeightUpdate: g.updateHeight,
            className: v.visible ? l4 : "",
            style: R,
          },
          v.type === "custom"
            ? Qu(v.message, v)
            : o
            ? o(v)
            : w.createElement(r4, { toast: v, position: b })
        );
      })
    );
  },
  Dt = wt;
const u4 = () => {
  const { signIn: t, loading: n, user: r, setLoading: s } = Zt(),
    o = Mn(),
    d = Dn().state || "/",
    {
      register: h,
      handleSubmit: p,
      formState: { errors: g },
    } = Kh();
  if (r) return m.jsx(Ab, { to: d, replace: !0 });
  if (n) return m.jsx(Ql, {});
  const v = async (b) => {
    try {
      const { email: x, password: R } = b,
        E = await t(x, R);
      console.log("Login success:", E), Dt.success("Login Successful "), o("/");
    } catch (x) {
      console.log(x),
        x.message.includes("auth/invalid-credential")
          ? (Dt.error("Incorrect Email or  password!"), s(!1))
          : Dt.error("Login Failed!");
    }
  };
  return m.jsx("div", {
    className: "min-h-screen flex items-center justify-center bg-red-50 px-4",
    children: m.jsxs("div", {
      className: "max-w-md w-full bg-white p-8 rounded-2xl shadow-lg",
      children: [
        m.jsx("h2", {
          className: "text-3xl font-bold text-center text-gray-900",
          children: "Login to Blood Donation",
        }),
        m.jsx("p", {
          className: "text-gray-600 text-center mt-2",
          children: "Enter your email and password to continue",
        }),
        m.jsxs("form", {
          className: "mt-6 flex flex-col gap-4",
          onSubmit: p(v),
          children: [
            m.jsxs("div", {
              className: "relative",
              children: [
                m.jsx(f3, {
                  className:
                    "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                }),
                m.jsx("input", {
                  type: "email",
                  placeholder: "Email",
                  className:
                    "w-full border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-red-600",
                  ...h("email", { required: "Email is required" }),
                }),
                g.email &&
                  m.jsx("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: g.email.message,
                  }),
              ],
            }),
            m.jsxs("div", {
              className: "relative",
              children: [
                m.jsx(d3, {
                  className:
                    "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                }),
                m.jsx("input", {
                  type: "password",
                  placeholder: "Password",
                  className:
                    "w-full border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-red-600",
                  ...h("password", { required: "Password is required" }),
                }),
                g.password &&
                  m.jsx("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: g.password.message,
                  }),
              ],
            }),
            m.jsx("button", {
              type: "submit",
              className:
                "bg-red-600 text-white font-semibold py-3 rounded-full shadow hover:bg-red-700 hover:scale-105 transition transform duration-300 mt-2",
              children: "login",
            }),
          ],
        }),
        m.jsxs("p", {
          className: "text-gray-600 text-center mt-4",
          children: [
            "Don't have an account?",
            " ",
            m.jsx(Et, {
              to: "/signup",
              className: "text-red-600 font-semibold hover:underline",
              children: "Sign Up",
            }),
          ],
        }),
      ],
    }),
  });
};
function a1(t, n) {
  return function () {
    return t.apply(n, arguments);
  };
}
const { toString: c4 } = Object.prototype,
  { getPrototypeOf: Xh } = Object,
  { iterator: mc, toStringTag: r1 } = Symbol,
  pc = ((t) => (n) => {
    const r = c4.call(n);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ca = (t) => ((t = t.toLowerCase()), (n) => pc(n) === t),
  gc = (t) => (n) => typeof n === t,
  { isArray: Ts } = Array,
  xs = gc("undefined");
function $l(t) {
  return (
    t !== null &&
    !xs(t) &&
    t.constructor !== null &&
    !xs(t.constructor) &&
    mn(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const i1 = ca("ArrayBuffer");
function d4(t) {
  let n;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (n = ArrayBuffer.isView(t))
      : (n = t && t.buffer && i1(t.buffer)),
    n
  );
}
const f4 = gc("string"),
  mn = gc("function"),
  s1 = gc("number"),
  Xl = (t) => t !== null && typeof t == "object",
  h4 = (t) => t === !0 || t === !1,
  Du = (t) => {
    if (pc(t) !== "object") return !1;
    const n = Xh(t);
    return (
      (n === null ||
        n === Object.prototype ||
        Object.getPrototypeOf(n) === null) &&
      !(r1 in t) &&
      !(mc in t)
    );
  },
  m4 = (t) => {
    if (!Xl(t) || $l(t)) return !1;
    try {
      return (
        Object.keys(t).length === 0 &&
        Object.getPrototypeOf(t) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  p4 = ca("Date"),
  g4 = ca("File"),
  y4 = ca("Blob"),
  v4 = ca("FileList"),
  b4 = (t) => Xl(t) && mn(t.pipe),
  x4 = (t) => {
    let n;
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        (mn(t.append) &&
          ((n = pc(t)) === "formdata" ||
            (n === "object" &&
              mn(t.toString) &&
              t.toString() === "[object FormData]"))))
    );
  },
  S4 = ca("URLSearchParams"),
  [E4, w4, _4, T4] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ca
  ),
  R4 = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zl(t, n, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u") return;
  let s, o;
  if ((typeof t != "object" && (t = [t]), Ts(t)))
    for (s = 0, o = t.length; s < o; s++) n.call(null, t[s], s, t);
  else {
    if ($l(t)) return;
    const u = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
      d = u.length;
    let h;
    for (s = 0; s < d; s++) (h = u[s]), n.call(null, t[h], h, t);
  }
}
function l1(t, n) {
  if ($l(t)) return null;
  n = n.toLowerCase();
  const r = Object.keys(t);
  let s = r.length,
    o;
  for (; s-- > 0; ) if (((o = r[s]), n === o.toLowerCase())) return o;
  return null;
}
const yi =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  o1 = (t) => !xs(t) && t !== yi;
function fh() {
  const { caseless: t, skipUndefined: n } = (o1(this) && this) || {},
    r = {},
    s = (o, u) => {
      const d = (t && l1(r, u)) || u;
      Du(r[d]) && Du(o)
        ? (r[d] = fh(r[d], o))
        : Du(o)
        ? (r[d] = fh({}, o))
        : Ts(o)
        ? (r[d] = o.slice())
        : (!n || !xs(o)) && (r[d] = o);
    };
  for (let o = 0, u = arguments.length; o < u; o++)
    arguments[o] && Zl(arguments[o], s);
  return r;
}
const A4 = (t, n, r, { allOwnKeys: s } = {}) => (
    Zl(
      n,
      (o, u) => {
        r && mn(o) ? (t[u] = a1(o, r)) : (t[u] = o);
      },
      { allOwnKeys: s }
    ),
    t
  ),
  C4 = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  N4 = (t, n, r, s) => {
    (t.prototype = Object.create(n.prototype, s)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: n.prototype }),
      r && Object.assign(t.prototype, r);
  },
  O4 = (t, n, r, s) => {
    let o, u, d;
    const h = {};
    if (((n = n || {}), t == null)) return n;
    do {
      for (o = Object.getOwnPropertyNames(t), u = o.length; u-- > 0; )
        (d = o[u]), (!s || s(d, t, n)) && !h[d] && ((n[d] = t[d]), (h[d] = !0));
      t = r !== !1 && Xh(t);
    } while (t && (!r || r(t, n)) && t !== Object.prototype);
    return n;
  },
  j4 = (t, n, r) => {
    (t = String(t)),
      (r === void 0 || r > t.length) && (r = t.length),
      (r -= n.length);
    const s = t.indexOf(n, r);
    return s !== -1 && s === r;
  },
  D4 = (t) => {
    if (!t) return null;
    if (Ts(t)) return t;
    let n = t.length;
    if (!s1(n)) return null;
    const r = new Array(n);
    for (; n-- > 0; ) r[n] = t[n];
    return r;
  },
  M4 = (
    (t) => (n) =>
      t && n instanceof t
  )(typeof Uint8Array < "u" && Xh(Uint8Array)),
  U4 = (t, n) => {
    const s = (t && t[mc]).call(t);
    let o;
    for (; (o = s.next()) && !o.done; ) {
      const u = o.value;
      n.call(t, u[0], u[1]);
    }
  },
  L4 = (t, n) => {
    let r;
    const s = [];
    for (; (r = t.exec(n)) !== null; ) s.push(r);
    return s;
  },
  z4 = ca("HTMLFormElement"),
  k4 = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, s, o) {
      return s.toUpperCase() + o;
    }),
  J0 = (
    ({ hasOwnProperty: t }) =>
    (n, r) =>
      t.call(n, r)
  )(Object.prototype),
  I4 = ca("RegExp"),
  u1 = (t, n) => {
    const r = Object.getOwnPropertyDescriptors(t),
      s = {};
    Zl(r, (o, u) => {
      let d;
      (d = n(o, u, t)) !== !1 && (s[u] = d || o);
    }),
      Object.defineProperties(t, s);
  },
  B4 = (t) => {
    u1(t, (n, r) => {
      if (mn(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const s = t[r];
      if (mn(s)) {
        if (((n.enumerable = !1), "writable" in n)) {
          n.writable = !1;
          return;
        }
        n.set ||
          (n.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  H4 = (t, n) => {
    const r = {},
      s = (o) => {
        o.forEach((u) => {
          r[u] = !0;
        });
      };
    return Ts(t) ? s(t) : s(String(t).split(n)), r;
  },
  P4 = () => {},
  q4 = (t, n) => (t != null && Number.isFinite((t = +t)) ? t : n);
function V4(t) {
  return !!(t && mn(t.append) && t[r1] === "FormData" && t[mc]);
}
const F4 = (t) => {
    const n = new Array(10),
      r = (s, o) => {
        if (Xl(s)) {
          if (n.indexOf(s) >= 0) return;
          if ($l(s)) return s;
          if (!("toJSON" in s)) {
            n[o] = s;
            const u = Ts(s) ? [] : {};
            return (
              Zl(s, (d, h) => {
                const p = r(d, o + 1);
                !xs(p) && (u[h] = p);
              }),
              (n[o] = void 0),
              u
            );
          }
        }
        return s;
      };
    return r(t, 0);
  },
  G4 = ca("AsyncFunction"),
  Y4 = (t) => t && (Xl(t) || mn(t)) && mn(t.then) && mn(t.catch),
  c1 = ((t, n) =>
    t
      ? setImmediate
      : n
      ? ((r, s) => (
          yi.addEventListener(
            "message",
            ({ source: o, data: u }) => {
              o === yi && u === r && s.length && s.shift()();
            },
            !1
          ),
          (o) => {
            s.push(o), yi.postMessage(r, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (r) => setTimeout(r))(
    typeof setImmediate == "function",
    mn(yi.postMessage)
  ),
  Q4 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(yi)
      : (typeof process < "u" && process.nextTick) || c1,
  K4 = (t) => t != null && mn(t[mc]),
  V = {
    isArray: Ts,
    isArrayBuffer: i1,
    isBuffer: $l,
    isFormData: x4,
    isArrayBufferView: d4,
    isString: f4,
    isNumber: s1,
    isBoolean: h4,
    isObject: Xl,
    isPlainObject: Du,
    isEmptyObject: m4,
    isReadableStream: E4,
    isRequest: w4,
    isResponse: _4,
    isHeaders: T4,
    isUndefined: xs,
    isDate: p4,
    isFile: g4,
    isBlob: y4,
    isRegExp: I4,
    isFunction: mn,
    isStream: b4,
    isURLSearchParams: S4,
    isTypedArray: M4,
    isFileList: v4,
    forEach: Zl,
    merge: fh,
    extend: A4,
    trim: R4,
    stripBOM: C4,
    inherits: N4,
    toFlatObject: O4,
    kindOf: pc,
    kindOfTest: ca,
    endsWith: j4,
    toArray: D4,
    forEachEntry: U4,
    matchAll: L4,
    isHTMLForm: z4,
    hasOwnProperty: J0,
    hasOwnProp: J0,
    reduceDescriptors: u1,
    freezeMethods: B4,
    toObjectSet: H4,
    toCamelCase: k4,
    noop: P4,
    toFiniteNumber: q4,
    findKey: l1,
    global: yi,
    isContextDefined: o1,
    isSpecCompliantForm: V4,
    toJSONObject: F4,
    isAsyncFn: G4,
    isThenable: Y4,
    setImmediate: c1,
    asap: Q4,
    isIterable: K4,
  };
function Be(t, n, r, s, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    n && (this.code = n),
    r && (this.config = r),
    s && (this.request = s),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
V.inherits(Be, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: V.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const d1 = Be.prototype,
  f1 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  f1[t] = { value: t };
});
Object.defineProperties(Be, f1);
Object.defineProperty(d1, "isAxiosError", { value: !0 });
Be.from = (t, n, r, s, o, u) => {
  const d = Object.create(d1);
  V.toFlatObject(
    t,
    d,
    function (v) {
      return v !== Error.prototype;
    },
    (g) => g !== "isAxiosError"
  );
  const h = t && t.message ? t.message : "Error",
    p = n == null && t ? t.code : n;
  return (
    Be.call(d, h, p, r, s, o),
    t &&
      d.cause == null &&
      Object.defineProperty(d, "cause", { value: t, configurable: !0 }),
    (d.name = (t && t.name) || "Error"),
    u && Object.assign(d, u),
    d
  );
};
const $4 = null;
function hh(t) {
  return V.isPlainObject(t) || V.isArray(t);
}
function h1(t) {
  return V.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function W0(t, n, r) {
  return t
    ? t
        .concat(n)
        .map(function (o, u) {
          return (o = h1(o)), !r && u ? "[" + o + "]" : o;
        })
        .join(r ? "." : "")
    : n;
}
function X4(t) {
  return V.isArray(t) && !t.some(hh);
}
const Z4 = V.toFlatObject(V, {}, null, function (n) {
  return /^is[A-Z]/.test(n);
});
function yc(t, n, r) {
  if (!V.isObject(t)) throw new TypeError("target must be an object");
  (n = n || new FormData()),
    (r = V.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (T, _) {
        return !V.isUndefined(_[T]);
      }
    ));
  const s = r.metaTokens,
    o = r.visitor || v,
    u = r.dots,
    d = r.indexes,
    p = (r.Blob || (typeof Blob < "u" && Blob)) && V.isSpecCompliantForm(n);
  if (!V.isFunction(o)) throw new TypeError("visitor must be a function");
  function g(E) {
    if (E === null) return "";
    if (V.isDate(E)) return E.toISOString();
    if (V.isBoolean(E)) return E.toString();
    if (!p && V.isBlob(E))
      throw new Be("Blob is not supported. Use a Buffer instead.");
    return V.isArrayBuffer(E) || V.isTypedArray(E)
      ? p && typeof Blob == "function"
        ? new Blob([E])
        : Buffer.from(E)
      : E;
  }
  function v(E, T, _) {
    let U = E;
    if (E && !_ && typeof E == "object") {
      if (V.endsWith(T, "{}"))
        (T = s ? T : T.slice(0, -2)), (E = JSON.stringify(E));
      else if (
        (V.isArray(E) && X4(E)) ||
        ((V.isFileList(E) || V.endsWith(T, "[]")) && (U = V.toArray(E)))
      )
        return (
          (T = h1(T)),
          U.forEach(function (Y, Z) {
            !(V.isUndefined(Y) || Y === null) &&
              n.append(
                d === !0 ? W0([T], Z, u) : d === null ? T : T + "[]",
                g(Y)
              );
          }),
          !1
        );
    }
    return hh(E) ? !0 : (n.append(W0(_, T, u), g(E)), !1);
  }
  const b = [],
    x = Object.assign(Z4, {
      defaultVisitor: v,
      convertValue: g,
      isVisitable: hh,
    });
  function R(E, T) {
    if (!V.isUndefined(E)) {
      if (b.indexOf(E) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      b.push(E),
        V.forEach(E, function (U, z) {
          (!(V.isUndefined(U) || U === null) &&
            o.call(n, U, V.isString(z) ? z.trim() : z, T, x)) === !0 &&
            R(U, T ? T.concat(z) : [z]);
        }),
        b.pop();
    }
  }
  if (!V.isObject(t)) throw new TypeError("data must be an object");
  return R(t), n;
}
function ev(t) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (s) {
    return n[s];
  });
}
function Zh(t, n) {
  (this._pairs = []), t && yc(t, this, n);
}
const m1 = Zh.prototype;
m1.append = function (n, r) {
  this._pairs.push([n, r]);
};
m1.toString = function (n) {
  const r = n
    ? function (s) {
        return n.call(this, s, ev);
      }
    : ev;
  return this._pairs
    .map(function (o) {
      return r(o[0]) + "=" + r(o[1]);
    }, "")
    .join("&");
};
function J4(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function p1(t, n, r) {
  if (!n) return t;
  const s = (r && r.encode) || J4;
  V.isFunction(r) && (r = { serialize: r });
  const o = r && r.serialize;
  let u;
  if (
    (o
      ? (u = o(n, r))
      : (u = V.isURLSearchParams(n) ? n.toString() : new Zh(n, r).toString(s)),
    u)
  ) {
    const d = t.indexOf("#");
    d !== -1 && (t = t.slice(0, d)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + u);
  }
  return t;
}
class tv {
  constructor() {
    this.handlers = [];
  }
  use(n, r, s) {
    return (
      this.handlers.push({
        fulfilled: n,
        rejected: r,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(n) {
    V.forEach(this.handlers, function (s) {
      s !== null && n(s);
    });
  }
}
const g1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  W4 = typeof URLSearchParams < "u" ? URLSearchParams : Zh,
  eT = typeof FormData < "u" ? FormData : null,
  tT = typeof Blob < "u" ? Blob : null,
  nT = {
    isBrowser: !0,
    classes: { URLSearchParams: W4, FormData: eT, Blob: tT },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Jh = typeof window < "u" && typeof document < "u",
  mh = (typeof navigator == "object" && navigator) || void 0,
  aT =
    Jh &&
    (!mh || ["ReactNative", "NativeScript", "NS"].indexOf(mh.product) < 0),
  rT =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  iT = (Jh && window.location.href) || "http://localhost",
  sT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Jh,
        hasStandardBrowserEnv: aT,
        hasStandardBrowserWebWorkerEnv: rT,
        navigator: mh,
        origin: iT,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Wt = { ...sT, ...nT };
function lT(t, n) {
  return yc(t, new Wt.classes.URLSearchParams(), {
    visitor: function (r, s, o, u) {
      return Wt.isNode && V.isBuffer(r)
        ? (this.append(s, r.toString("base64")), !1)
        : u.defaultVisitor.apply(this, arguments);
    },
    ...n,
  });
}
function oT(t) {
  return V.matchAll(/\w+|\[(\w*)]/g, t).map((n) =>
    n[0] === "[]" ? "" : n[1] || n[0]
  );
}
function uT(t) {
  const n = {},
    r = Object.keys(t);
  let s;
  const o = r.length;
  let u;
  for (s = 0; s < o; s++) (u = r[s]), (n[u] = t[u]);
  return n;
}
function y1(t) {
  function n(r, s, o, u) {
    let d = r[u++];
    if (d === "__proto__") return !0;
    const h = Number.isFinite(+d),
      p = u >= r.length;
    return (
      (d = !d && V.isArray(o) ? o.length : d),
      p
        ? (V.hasOwnProp(o, d) ? (o[d] = [o[d], s]) : (o[d] = s), !h)
        : ((!o[d] || !V.isObject(o[d])) && (o[d] = []),
          n(r, s, o[d], u) && V.isArray(o[d]) && (o[d] = uT(o[d])),
          !h)
    );
  }
  if (V.isFormData(t) && V.isFunction(t.entries)) {
    const r = {};
    return (
      V.forEachEntry(t, (s, o) => {
        n(oT(s), o, r, 0);
      }),
      r
    );
  }
  return null;
}
function cT(t, n, r) {
  if (V.isString(t))
    try {
      return (n || JSON.parse)(t), V.trim(t);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (r || JSON.stringify)(t);
}
const Jl = {
  transitional: g1,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (n, r) {
      const s = r.getContentType() || "",
        o = s.indexOf("application/json") > -1,
        u = V.isObject(n);
      if ((u && V.isHTMLForm(n) && (n = new FormData(n)), V.isFormData(n)))
        return o ? JSON.stringify(y1(n)) : n;
      if (
        V.isArrayBuffer(n) ||
        V.isBuffer(n) ||
        V.isStream(n) ||
        V.isFile(n) ||
        V.isBlob(n) ||
        V.isReadableStream(n)
      )
        return n;
      if (V.isArrayBufferView(n)) return n.buffer;
      if (V.isURLSearchParams(n))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          n.toString()
        );
      let h;
      if (u) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return lT(n, this.formSerializer).toString();
        if ((h = V.isFileList(n)) || s.indexOf("multipart/form-data") > -1) {
          const p = this.env && this.env.FormData;
          return yc(
            h ? { "files[]": n } : n,
            p && new p(),
            this.formSerializer
          );
        }
      }
      return u || o ? (r.setContentType("application/json", !1), cT(n)) : n;
    },
  ],
  transformResponse: [
    function (n) {
      const r = this.transitional || Jl.transitional,
        s = r && r.forcedJSONParsing,
        o = this.responseType === "json";
      if (V.isResponse(n) || V.isReadableStream(n)) return n;
      if (n && V.isString(n) && ((s && !this.responseType) || o)) {
        const d = !(r && r.silentJSONParsing) && o;
        try {
          return JSON.parse(n, this.parseReviver);
        } catch (h) {
          if (d)
            throw h.name === "SyntaxError"
              ? Be.from(h, Be.ERR_BAD_RESPONSE, this, null, this.response)
              : h;
        }
      }
      return n;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Wt.classes.FormData, Blob: Wt.classes.Blob },
  validateStatus: function (n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
V.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Jl.headers[t] = {};
});
const dT = V.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  fT = (t) => {
    const n = {};
    let r, s, o;
    return (
      t &&
        t
          .split(
            `
`
          )
          .forEach(function (d) {
            (o = d.indexOf(":")),
              (r = d.substring(0, o).trim().toLowerCase()),
              (s = d.substring(o + 1).trim()),
              !(!r || (n[r] && dT[r])) &&
                (r === "set-cookie"
                  ? n[r]
                    ? n[r].push(s)
                    : (n[r] = [s])
                  : (n[r] = n[r] ? n[r] + ", " + s : s));
          }),
      n
    );
  },
  nv = Symbol("internals");
function Tl(t) {
  return t && String(t).trim().toLowerCase();
}
function Mu(t) {
  return t === !1 || t == null ? t : V.isArray(t) ? t.map(Mu) : String(t);
}
function hT(t) {
  const n = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = r.exec(t)); ) n[s[1]] = s[2];
  return n;
}
const mT = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Yf(t, n, r, s, o) {
  if (V.isFunction(s)) return s.call(this, n, r);
  if ((o && (n = r), !!V.isString(n))) {
    if (V.isString(s)) return n.indexOf(s) !== -1;
    if (V.isRegExp(s)) return s.test(n);
  }
}
function pT(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (n, r, s) => r.toUpperCase() + s);
}
function gT(t, n) {
  const r = V.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(t, s + r, {
      value: function (o, u, d) {
        return this[s].call(this, n, o, u, d);
      },
      configurable: !0,
    });
  });
}
let pn = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, r, s) {
    const o = this;
    function u(h, p, g) {
      const v = Tl(p);
      if (!v) throw new Error("header name must be a non-empty string");
      const b = V.findKey(o, v);
      (!b || o[b] === void 0 || g === !0 || (g === void 0 && o[b] !== !1)) &&
        (o[b || p] = Mu(h));
    }
    const d = (h, p) => V.forEach(h, (g, v) => u(g, v, p));
    if (V.isPlainObject(n) || n instanceof this.constructor) d(n, r);
    else if (V.isString(n) && (n = n.trim()) && !mT(n)) d(fT(n), r);
    else if (V.isObject(n) && V.isIterable(n)) {
      let h = {},
        p,
        g;
      for (const v of n) {
        if (!V.isArray(v))
          throw TypeError("Object iterator must return a key-value pair");
        h[(g = v[0])] = (p = h[g])
          ? V.isArray(p)
            ? [...p, v[1]]
            : [p, v[1]]
          : v[1];
      }
      d(h, r);
    } else n != null && u(r, n, s);
    return this;
  }
  get(n, r) {
    if (((n = Tl(n)), n)) {
      const s = V.findKey(this, n);
      if (s) {
        const o = this[s];
        if (!r) return o;
        if (r === !0) return hT(o);
        if (V.isFunction(r)) return r.call(this, o, s);
        if (V.isRegExp(r)) return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, r) {
    if (((n = Tl(n)), n)) {
      const s = V.findKey(this, n);
      return !!(s && this[s] !== void 0 && (!r || Yf(this, this[s], s, r)));
    }
    return !1;
  }
  delete(n, r) {
    const s = this;
    let o = !1;
    function u(d) {
      if (((d = Tl(d)), d)) {
        const h = V.findKey(s, d);
        h && (!r || Yf(s, s[h], h, r)) && (delete s[h], (o = !0));
      }
    }
    return V.isArray(n) ? n.forEach(u) : u(n), o;
  }
  clear(n) {
    const r = Object.keys(this);
    let s = r.length,
      o = !1;
    for (; s--; ) {
      const u = r[s];
      (!n || Yf(this, this[u], u, n, !0)) && (delete this[u], (o = !0));
    }
    return o;
  }
  normalize(n) {
    const r = this,
      s = {};
    return (
      V.forEach(this, (o, u) => {
        const d = V.findKey(s, u);
        if (d) {
          (r[d] = Mu(o)), delete r[u];
          return;
        }
        const h = n ? pT(u) : String(u).trim();
        h !== u && delete r[u], (r[h] = Mu(o)), (s[h] = !0);
      }),
      this
    );
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const r = Object.create(null);
    return (
      V.forEach(this, (s, o) => {
        s != null && s !== !1 && (r[o] = n && V.isArray(s) ? s.join(", ") : s);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, r]) => n + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...r) {
    const s = new this(n);
    return r.forEach((o) => s.set(o)), s;
  }
  static accessor(n) {
    const s = (this[nv] = this[nv] = { accessors: {} }).accessors,
      o = this.prototype;
    function u(d) {
      const h = Tl(d);
      s[h] || (gT(o, d), (s[h] = !0));
    }
    return V.isArray(n) ? n.forEach(u) : u(n), this;
  }
};
pn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
V.reduceDescriptors(pn.prototype, ({ value: t }, n) => {
  let r = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => t,
    set(s) {
      this[r] = s;
    },
  };
});
V.freezeMethods(pn);
function Qf(t, n) {
  const r = this || Jl,
    s = n || r,
    o = pn.from(s.headers);
  let u = s.data;
  return (
    V.forEach(t, function (h) {
      u = h.call(r, u, o.normalize(), n ? n.status : void 0);
    }),
    o.normalize(),
    u
  );
}
function v1(t) {
  return !!(t && t.__CANCEL__);
}
function Rs(t, n, r) {
  Be.call(this, t ?? "canceled", Be.ERR_CANCELED, n, r),
    (this.name = "CanceledError");
}
V.inherits(Rs, Be, { __CANCEL__: !0 });
function b1(t, n, r) {
  const s = r.config.validateStatus;
  !r.status || !s || s(r.status)
    ? t(r)
    : n(
        new Be(
          "Request failed with status code " + r.status,
          [Be.ERR_BAD_REQUEST, Be.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r
        )
      );
}
function yT(t) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (n && n[1]) || "";
}
function vT(t, n) {
  t = t || 10;
  const r = new Array(t),
    s = new Array(t);
  let o = 0,
    u = 0,
    d;
  return (
    (n = n !== void 0 ? n : 1e3),
    function (p) {
      const g = Date.now(),
        v = s[u];
      d || (d = g), (r[o] = p), (s[o] = g);
      let b = u,
        x = 0;
      for (; b !== o; ) (x += r[b++]), (b = b % t);
      if (((o = (o + 1) % t), o === u && (u = (u + 1) % t), g - d < n)) return;
      const R = v && g - v;
      return R ? Math.round((x * 1e3) / R) : void 0;
    }
  );
}
function bT(t, n) {
  let r = 0,
    s = 1e3 / n,
    o,
    u;
  const d = (g, v = Date.now()) => {
    (r = v), (o = null), u && (clearTimeout(u), (u = null)), t(...g);
  };
  return [
    (...g) => {
      const v = Date.now(),
        b = v - r;
      b >= s
        ? d(g, v)
        : ((o = g),
          u ||
            (u = setTimeout(() => {
              (u = null), d(o);
            }, s - b)));
    },
    () => o && d(o),
  ];
}
const Ku = (t, n, r = 3) => {
    let s = 0;
    const o = vT(50, 250);
    return bT((u) => {
      const d = u.loaded,
        h = u.lengthComputable ? u.total : void 0,
        p = d - s,
        g = o(p),
        v = d <= h;
      s = d;
      const b = {
        loaded: d,
        total: h,
        progress: h ? d / h : void 0,
        bytes: p,
        rate: g || void 0,
        estimated: g && h && v ? (h - d) / g : void 0,
        event: u,
        lengthComputable: h != null,
        [n ? "download" : "upload"]: !0,
      };
      t(b);
    }, r);
  },
  av = (t, n) => {
    const r = t != null;
    return [(s) => n[0]({ lengthComputable: r, total: t, loaded: s }), n[1]];
  },
  rv =
    (t) =>
    (...n) =>
      V.asap(() => t(...n)),
  xT = Wt.hasStandardBrowserEnv
    ? ((t, n) => (r) => (
        (r = new URL(r, Wt.origin)),
        t.protocol === r.protocol &&
          t.host === r.host &&
          (n || t.port === r.port)
      ))(
        new URL(Wt.origin),
        Wt.navigator && /(msie|trident)/i.test(Wt.navigator.userAgent)
      )
    : () => !0,
  ST = Wt.hasStandardBrowserEnv
    ? {
        write(t, n, r, s, o, u, d) {
          if (typeof document > "u") return;
          const h = [`${t}=${encodeURIComponent(n)}`];
          V.isNumber(r) && h.push(`expires=${new Date(r).toUTCString()}`),
            V.isString(s) && h.push(`path=${s}`),
            V.isString(o) && h.push(`domain=${o}`),
            u === !0 && h.push("secure"),
            V.isString(d) && h.push(`SameSite=${d}`),
            (document.cookie = h.join("; "));
        },
        read(t) {
          if (typeof document > "u") return null;
          const n = document.cookie.match(
            new RegExp("(?:^|; )" + t + "=([^;]*)")
          );
          return n ? decodeURIComponent(n[1]) : null;
        },
        remove(t) {
          this.write(t, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function ET(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function wT(t, n) {
  return n ? t.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : t;
}
function x1(t, n, r) {
  let s = !ET(n);
  return t && (s || r == !1) ? wT(t, n) : n;
}
const iv = (t) => (t instanceof pn ? { ...t } : t);
function xi(t, n) {
  n = n || {};
  const r = {};
  function s(g, v, b, x) {
    return V.isPlainObject(g) && V.isPlainObject(v)
      ? V.merge.call({ caseless: x }, g, v)
      : V.isPlainObject(v)
      ? V.merge({}, v)
      : V.isArray(v)
      ? v.slice()
      : v;
  }
  function o(g, v, b, x) {
    if (V.isUndefined(v)) {
      if (!V.isUndefined(g)) return s(void 0, g, b, x);
    } else return s(g, v, b, x);
  }
  function u(g, v) {
    if (!V.isUndefined(v)) return s(void 0, v);
  }
  function d(g, v) {
    if (V.isUndefined(v)) {
      if (!V.isUndefined(g)) return s(void 0, g);
    } else return s(void 0, v);
  }
  function h(g, v, b) {
    if (b in n) return s(g, v);
    if (b in t) return s(void 0, g);
  }
  const p = {
    url: u,
    method: u,
    data: u,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: h,
    headers: (g, v, b) => o(iv(g), iv(v), b, !0),
  };
  return (
    V.forEach(Object.keys({ ...t, ...n }), function (v) {
      const b = p[v] || o,
        x = b(t[v], n[v], v);
      (V.isUndefined(x) && b !== h) || (r[v] = x);
    }),
    r
  );
}
const S1 = (t) => {
    const n = xi({}, t);
    let {
      data: r,
      withXSRFToken: s,
      xsrfHeaderName: o,
      xsrfCookieName: u,
      headers: d,
      auth: h,
    } = n;
    if (
      ((n.headers = d = pn.from(d)),
      (n.url = p1(
        x1(n.baseURL, n.url, n.allowAbsoluteUrls),
        t.params,
        t.paramsSerializer
      )),
      h &&
        d.set(
          "Authorization",
          "Basic " +
            btoa(
              (h.username || "") +
                ":" +
                (h.password ? unescape(encodeURIComponent(h.password)) : "")
            )
        ),
      V.isFormData(r))
    ) {
      if (Wt.hasStandardBrowserEnv || Wt.hasStandardBrowserWebWorkerEnv)
        d.setContentType(void 0);
      else if (V.isFunction(r.getHeaders)) {
        const p = r.getHeaders(),
          g = ["content-type", "content-length"];
        Object.entries(p).forEach(([v, b]) => {
          g.includes(v.toLowerCase()) && d.set(v, b);
        });
      }
    }
    if (
      Wt.hasStandardBrowserEnv &&
      (s && V.isFunction(s) && (s = s(n)), s || (s !== !1 && xT(n.url)))
    ) {
      const p = o && u && ST.read(u);
      p && d.set(o, p);
    }
    return n;
  },
  _T = typeof XMLHttpRequest < "u",
  TT =
    _T &&
    function (t) {
      return new Promise(function (r, s) {
        const o = S1(t);
        let u = o.data;
        const d = pn.from(o.headers).normalize();
        let { responseType: h, onUploadProgress: p, onDownloadProgress: g } = o,
          v,
          b,
          x,
          R,
          E;
        function T() {
          R && R(),
            E && E(),
            o.cancelToken && o.cancelToken.unsubscribe(v),
            o.signal && o.signal.removeEventListener("abort", v);
        }
        let _ = new XMLHttpRequest();
        _.open(o.method.toUpperCase(), o.url, !0), (_.timeout = o.timeout);
        function U() {
          if (!_) return;
          const Y = pn.from(
              "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
            ),
            ee = {
              data:
                !h || h === "text" || h === "json"
                  ? _.responseText
                  : _.response,
              status: _.status,
              statusText: _.statusText,
              headers: Y,
              config: t,
              request: _,
            };
          b1(
            function (N) {
              r(N), T();
            },
            function (N) {
              s(N), T();
            },
            ee
          ),
            (_ = null);
        }
        "onloadend" in _
          ? (_.onloadend = U)
          : (_.onreadystatechange = function () {
              !_ ||
                _.readyState !== 4 ||
                (_.status === 0 &&
                  !(_.responseURL && _.responseURL.indexOf("file:") === 0)) ||
                setTimeout(U);
            }),
          (_.onabort = function () {
            _ &&
              (s(new Be("Request aborted", Be.ECONNABORTED, t, _)), (_ = null));
          }),
          (_.onerror = function (Z) {
            const ee = Z && Z.message ? Z.message : "Network Error",
              pe = new Be(ee, Be.ERR_NETWORK, t, _);
            (pe.event = Z || null), s(pe), (_ = null);
          }),
          (_.ontimeout = function () {
            let Z = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const ee = o.transitional || g1;
            o.timeoutErrorMessage && (Z = o.timeoutErrorMessage),
              s(
                new Be(
                  Z,
                  ee.clarifyTimeoutError ? Be.ETIMEDOUT : Be.ECONNABORTED,
                  t,
                  _
                )
              ),
              (_ = null);
          }),
          u === void 0 && d.setContentType(null),
          "setRequestHeader" in _ &&
            V.forEach(d.toJSON(), function (Z, ee) {
              _.setRequestHeader(ee, Z);
            }),
          V.isUndefined(o.withCredentials) ||
            (_.withCredentials = !!o.withCredentials),
          h && h !== "json" && (_.responseType = o.responseType),
          g && (([x, E] = Ku(g, !0)), _.addEventListener("progress", x)),
          p &&
            _.upload &&
            (([b, R] = Ku(p)),
            _.upload.addEventListener("progress", b),
            _.upload.addEventListener("loadend", R)),
          (o.cancelToken || o.signal) &&
            ((v = (Y) => {
              _ &&
                (s(!Y || Y.type ? new Rs(null, t, _) : Y),
                _.abort(),
                (_ = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(v),
            o.signal &&
              (o.signal.aborted ? v() : o.signal.addEventListener("abort", v)));
        const z = yT(o.url);
        if (z && Wt.protocols.indexOf(z) === -1) {
          s(new Be("Unsupported protocol " + z + ":", Be.ERR_BAD_REQUEST, t));
          return;
        }
        _.send(u || null);
      });
    },
  RT = (t, n) => {
    const { length: r } = (t = t ? t.filter(Boolean) : []);
    if (n || r) {
      let s = new AbortController(),
        o;
      const u = function (g) {
        if (!o) {
          (o = !0), h();
          const v = g instanceof Error ? g : this.reason;
          s.abort(
            v instanceof Be ? v : new Rs(v instanceof Error ? v.message : v)
          );
        }
      };
      let d =
        n &&
        setTimeout(() => {
          (d = null), u(new Be(`timeout ${n} of ms exceeded`, Be.ETIMEDOUT));
        }, n);
      const h = () => {
        t &&
          (d && clearTimeout(d),
          (d = null),
          t.forEach((g) => {
            g.unsubscribe
              ? g.unsubscribe(u)
              : g.removeEventListener("abort", u);
          }),
          (t = null));
      };
      t.forEach((g) => g.addEventListener("abort", u));
      const { signal: p } = s;
      return (p.unsubscribe = () => V.asap(h)), p;
    }
  },
  AT = function* (t, n) {
    let r = t.byteLength;
    if (r < n) {
      yield t;
      return;
    }
    let s = 0,
      o;
    for (; s < r; ) (o = s + n), yield t.slice(s, o), (s = o);
  },
  CT = async function* (t, n) {
    for await (const r of NT(t)) yield* AT(r, n);
  },
  NT = async function* (t) {
    if (t[Symbol.asyncIterator]) {
      yield* t;
      return;
    }
    const n = t.getReader();
    try {
      for (;;) {
        const { done: r, value: s } = await n.read();
        if (r) break;
        yield s;
      }
    } finally {
      await n.cancel();
    }
  },
  sv = (t, n, r, s) => {
    const o = CT(t, n);
    let u = 0,
      d,
      h = (p) => {
        d || ((d = !0), s && s(p));
      };
    return new ReadableStream(
      {
        async pull(p) {
          try {
            const { done: g, value: v } = await o.next();
            if (g) {
              h(), p.close();
              return;
            }
            let b = v.byteLength;
            if (r) {
              let x = (u += b);
              r(x);
            }
            p.enqueue(new Uint8Array(v));
          } catch (g) {
            throw (h(g), g);
          }
        },
        cancel(p) {
          return h(p), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  lv = 64 * 1024,
  { isFunction: Tu } = V,
  OT = (({ Request: t, Response: n }) => ({ Request: t, Response: n }))(
    V.global
  ),
  { ReadableStream: ov, TextEncoder: uv } = V.global,
  cv = (t, ...n) => {
    try {
      return !!t(...n);
    } catch {
      return !1;
    }
  },
  jT = (t) => {
    t = V.merge.call({ skipUndefined: !0 }, OT, t);
    const { fetch: n, Request: r, Response: s } = t,
      o = n ? Tu(n) : typeof fetch == "function",
      u = Tu(r),
      d = Tu(s);
    if (!o) return !1;
    const h = o && Tu(ov),
      p =
        o &&
        (typeof uv == "function"
          ? (
              (E) => (T) =>
                E.encode(T)
            )(new uv())
          : async (E) => new Uint8Array(await new r(E).arrayBuffer())),
      g =
        u &&
        h &&
        cv(() => {
          let E = !1;
          const T = new r(Wt.origin, {
            body: new ov(),
            method: "POST",
            get duplex() {
              return (E = !0), "half";
            },
          }).headers.has("Content-Type");
          return E && !T;
        }),
      v = d && h && cv(() => V.isReadableStream(new s("").body)),
      b = { stream: v && ((E) => E.body) };
    o &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((E) => {
        !b[E] &&
          (b[E] = (T, _) => {
            let U = T && T[E];
            if (U) return U.call(T);
            throw new Be(
              `Response type '${E}' is not supported`,
              Be.ERR_NOT_SUPPORT,
              _
            );
          });
      });
    const x = async (E) => {
        if (E == null) return 0;
        if (V.isBlob(E)) return E.size;
        if (V.isSpecCompliantForm(E))
          return (
            await new r(Wt.origin, { method: "POST", body: E }).arrayBuffer()
          ).byteLength;
        if (V.isArrayBufferView(E) || V.isArrayBuffer(E)) return E.byteLength;
        if ((V.isURLSearchParams(E) && (E = E + ""), V.isString(E)))
          return (await p(E)).byteLength;
      },
      R = async (E, T) => {
        const _ = V.toFiniteNumber(E.getContentLength());
        return _ ?? x(T);
      };
    return async (E) => {
      let {
          url: T,
          method: _,
          data: U,
          signal: z,
          cancelToken: Y,
          timeout: Z,
          onDownloadProgress: ee,
          onUploadProgress: pe,
          responseType: N,
          headers: me,
          withCredentials: fe = "same-origin",
          fetchOptions: Re,
        } = S1(E),
        ge = n || fetch;
      N = N ? (N + "").toLowerCase() : "text";
      let ce = RT([z, Y && Y.toAbortSignal()], Z),
        he = null;
      const ye =
        ce &&
        ce.unsubscribe &&
        (() => {
          ce.unsubscribe();
        });
      let Ne;
      try {
        if (
          pe &&
          g &&
          _ !== "get" &&
          _ !== "head" &&
          (Ne = await R(me, U)) !== 0
        ) {
          let O = new r(T, { method: "POST", body: U, duplex: "half" }),
            G;
          if (
            (V.isFormData(U) &&
              (G = O.headers.get("content-type")) &&
              me.setContentType(G),
            O.body)
          ) {
            const [ae, le] = av(Ne, Ku(rv(pe)));
            U = sv(O.body, lv, ae, le);
          }
        }
        V.isString(fe) || (fe = fe ? "include" : "omit");
        const k = u && "credentials" in r.prototype,
          J = {
            ...Re,
            signal: ce,
            method: _.toUpperCase(),
            headers: me.normalize().toJSON(),
            body: U,
            duplex: "half",
            credentials: k ? fe : void 0,
          };
        he = u && new r(T, J);
        let re = await (u ? ge(he, Re) : ge(T, J));
        const Oe = v && (N === "stream" || N === "response");
        if (v && (ee || (Oe && ye))) {
          const O = {};
          ["status", "statusText", "headers"].forEach((we) => {
            O[we] = re[we];
          });
          const G = V.toFiniteNumber(re.headers.get("content-length")),
            [ae, le] = (ee && av(G, Ku(rv(ee), !0))) || [];
          re = new s(
            sv(re.body, lv, ae, () => {
              le && le(), ye && ye();
            }),
            O
          );
        }
        N = N || "text";
        let ze = await b[V.findKey(b, N) || "text"](re, E);
        return (
          !Oe && ye && ye(),
          await new Promise((O, G) => {
            b1(O, G, {
              data: ze,
              headers: pn.from(re.headers),
              status: re.status,
              statusText: re.statusText,
              config: E,
              request: he,
            });
          })
        );
      } catch (k) {
        throw (
          (ye && ye(),
          k && k.name === "TypeError" && /Load failed|fetch/i.test(k.message)
            ? Object.assign(new Be("Network Error", Be.ERR_NETWORK, E, he), {
                cause: k.cause || k,
              })
            : Be.from(k, k && k.code, E, he))
        );
      }
    };
  },
  DT = new Map(),
  E1 = (t) => {
    let n = (t && t.env) || {};
    const { fetch: r, Request: s, Response: o } = n,
      u = [s, o, r];
    let d = u.length,
      h = d,
      p,
      g,
      v = DT;
    for (; h--; )
      (p = u[h]),
        (g = v.get(p)),
        g === void 0 && v.set(p, (g = h ? new Map() : jT(n))),
        (v = g);
    return g;
  };
E1();
const Wh = { http: $4, xhr: TT, fetch: { get: E1 } };
V.forEach(Wh, (t, n) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: n });
    } catch {}
    Object.defineProperty(t, "adapterName", { value: n });
  }
});
const dv = (t) => `- ${t}`,
  MT = (t) => V.isFunction(t) || t === null || t === !1;
function UT(t, n) {
  t = V.isArray(t) ? t : [t];
  const { length: r } = t;
  let s, o;
  const u = {};
  for (let d = 0; d < r; d++) {
    s = t[d];
    let h;
    if (
      ((o = s),
      !MT(s) && ((o = Wh[(h = String(s)).toLowerCase()]), o === void 0))
    )
      throw new Be(`Unknown adapter '${h}'`);
    if (o && (V.isFunction(o) || (o = o.get(n)))) break;
    u[h || "#" + d] = o;
  }
  if (!o) {
    const d = Object.entries(u).map(
      ([p, g]) =>
        `adapter ${p} ` +
        (g === !1
          ? "is not supported by the environment"
          : "is not available in the build")
    );
    let h = r
      ? d.length > 1
        ? `since :
` +
          d.map(dv).join(`
`)
        : " " + dv(d[0])
      : "as no adapter specified";
    throw new Be(
      "There is no suitable adapter to dispatch the request " + h,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const w1 = { getAdapter: UT, adapters: Wh };
function Kf(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new Rs(null, t);
}
function fv(t) {
  return (
    Kf(t),
    (t.headers = pn.from(t.headers)),
    (t.data = Qf.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    w1
      .getAdapter(
        t.adapter || Jl.adapter,
        t
      )(t)
      .then(
        function (s) {
          return (
            Kf(t),
            (s.data = Qf.call(t, t.transformResponse, s)),
            (s.headers = pn.from(s.headers)),
            s
          );
        },
        function (s) {
          return (
            v1(s) ||
              (Kf(t),
              s &&
                s.response &&
                ((s.response.data = Qf.call(
                  t,
                  t.transformResponse,
                  s.response
                )),
                (s.response.headers = pn.from(s.response.headers)))),
            Promise.reject(s)
          );
        }
      )
  );
}
const _1 = "1.13.2",
  vc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, n) => {
    vc[t] = function (s) {
      return typeof s === t || "a" + (n < 1 ? "n " : " ") + t;
    };
  }
);
const hv = {};
vc.transitional = function (n, r, s) {
  function o(u, d) {
    return (
      "[Axios v" +
      _1 +
      "] Transitional option '" +
      u +
      "'" +
      d +
      (s ? ". " + s : "")
    );
  }
  return (u, d, h) => {
    if (n === !1)
      throw new Be(
        o(d, " has been removed" + (r ? " in " + r : "")),
        Be.ERR_DEPRECATED
      );
    return (
      r &&
        !hv[d] &&
        ((hv[d] = !0),
        console.warn(
          o(
            d,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future"
          )
        )),
      n ? n(u, d, h) : !0
    );
  };
};
vc.spelling = function (n) {
  return (r, s) => (console.warn(`${s} is likely a misspelling of ${n}`), !0);
};
function LT(t, n, r) {
  if (typeof t != "object")
    throw new Be("options must be an object", Be.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(t);
  let o = s.length;
  for (; o-- > 0; ) {
    const u = s[o],
      d = n[u];
    if (d) {
      const h = t[u],
        p = h === void 0 || d(h, u, t);
      if (p !== !0)
        throw new Be("option " + u + " must be " + p, Be.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new Be("Unknown option " + u, Be.ERR_BAD_OPTION);
  }
}
const Uu = { assertOptions: LT, validators: vc },
  ga = Uu.validators;
let bi = class {
  constructor(n) {
    (this.defaults = n || {}),
      (this.interceptors = { request: new tv(), response: new tv() });
  }
  async request(n, r) {
    try {
      return await this._request(n, r);
    } catch (s) {
      if (s instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const u = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? u &&
              !String(s.stack).endsWith(u.replace(/^.+\n.+\n/, "")) &&
              (s.stack +=
                `
` + u)
            : (s.stack = u);
        } catch {}
      }
      throw s;
    }
  }
  _request(n, r) {
    typeof n == "string" ? ((r = r || {}), (r.url = n)) : (r = n || {}),
      (r = xi(this.defaults, r));
    const { transitional: s, paramsSerializer: o, headers: u } = r;
    s !== void 0 &&
      Uu.assertOptions(
        s,
        {
          silentJSONParsing: ga.transitional(ga.boolean),
          forcedJSONParsing: ga.transitional(ga.boolean),
          clarifyTimeoutError: ga.transitional(ga.boolean),
        },
        !1
      ),
      o != null &&
        (V.isFunction(o)
          ? (r.paramsSerializer = { serialize: o })
          : Uu.assertOptions(
              o,
              { encode: ga.function, serialize: ga.function },
              !0
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      Uu.assertOptions(
        r,
        {
          baseUrl: ga.spelling("baseURL"),
          withXsrfToken: ga.spelling("withXSRFToken"),
        },
        !0
      ),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let d = u && V.merge(u.common, u[r.method]);
    u &&
      V.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (E) => {
          delete u[E];
        }
      ),
      (r.headers = pn.concat(d, u));
    const h = [];
    let p = !0;
    this.interceptors.request.forEach(function (T) {
      (typeof T.runWhen == "function" && T.runWhen(r) === !1) ||
        ((p = p && T.synchronous), h.unshift(T.fulfilled, T.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function (T) {
      g.push(T.fulfilled, T.rejected);
    });
    let v,
      b = 0,
      x;
    if (!p) {
      const E = [fv.bind(this), void 0];
      for (
        E.unshift(...h), E.push(...g), x = E.length, v = Promise.resolve(r);
        b < x;

      )
        v = v.then(E[b++], E[b++]);
      return v;
    }
    x = h.length;
    let R = r;
    for (; b < x; ) {
      const E = h[b++],
        T = h[b++];
      try {
        R = E(R);
      } catch (_) {
        T.call(this, _);
        break;
      }
    }
    try {
      v = fv.call(this, R);
    } catch (E) {
      return Promise.reject(E);
    }
    for (b = 0, x = g.length; b < x; ) v = v.then(g[b++], g[b++]);
    return v;
  }
  getUri(n) {
    n = xi(this.defaults, n);
    const r = x1(n.baseURL, n.url, n.allowAbsoluteUrls);
    return p1(r, n.params, n.paramsSerializer);
  }
};
V.forEach(["delete", "get", "head", "options"], function (n) {
  bi.prototype[n] = function (r, s) {
    return this.request(
      xi(s || {}, { method: n, url: r, data: (s || {}).data })
    );
  };
});
V.forEach(["post", "put", "patch"], function (n) {
  function r(s) {
    return function (u, d, h) {
      return this.request(
        xi(h || {}, {
          method: n,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: u,
          data: d,
        })
      );
    };
  }
  (bi.prototype[n] = r()), (bi.prototype[n + "Form"] = r(!0));
});
let zT = class T1 {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (u) {
      r = u;
    });
    const s = this;
    this.promise.then((o) => {
      if (!s._listeners) return;
      let u = s._listeners.length;
      for (; u-- > 0; ) s._listeners[u](o);
      s._listeners = null;
    }),
      (this.promise.then = (o) => {
        let u;
        const d = new Promise((h) => {
          s.subscribe(h), (u = h);
        }).then(o);
        return (
          (d.cancel = function () {
            s.unsubscribe(u);
          }),
          d
        );
      }),
      n(function (u, d, h) {
        s.reason || ((s.reason = new Rs(u, d, h)), r(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : (this._listeners = [n]);
  }
  unsubscribe(n) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(n);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const n = new AbortController(),
      r = (s) => {
        n.abort(s);
      };
    return (
      this.subscribe(r),
      (n.signal.unsubscribe = () => this.unsubscribe(r)),
      n.signal
    );
  }
  static source() {
    let n;
    return {
      token: new T1(function (o) {
        n = o;
      }),
      cancel: n,
    };
  }
};
function kT(t) {
  return function (r) {
    return t.apply(null, r);
  };
}
function IT(t) {
  return V.isObject(t) && t.isAxiosError === !0;
}
const ph = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(ph).forEach(([t, n]) => {
  ph[n] = t;
});
function R1(t) {
  const n = new bi(t),
    r = a1(bi.prototype.request, n);
  return (
    V.extend(r, bi.prototype, n, { allOwnKeys: !0 }),
    V.extend(r, n, null, { allOwnKeys: !0 }),
    (r.create = function (o) {
      return R1(xi(t, o));
    }),
    r
  );
}
const Ue = R1(Jl);
Ue.Axios = bi;
Ue.CanceledError = Rs;
Ue.CancelToken = zT;
Ue.isCancel = v1;
Ue.VERSION = _1;
Ue.toFormData = yc;
Ue.AxiosError = Be;
Ue.Cancel = Ue.CanceledError;
Ue.all = function (n) {
  return Promise.all(n);
};
Ue.spread = kT;
Ue.isAxiosError = IT;
Ue.mergeConfig = xi;
Ue.AxiosHeaders = pn;
Ue.formToJSON = (t) => y1(V.isHTMLForm(t) ? new FormData(t) : t);
Ue.getAdapter = w1.getAdapter;
Ue.HttpStatusCode = ph;
Ue.default = Ue;
const {
    Axios: v5,
    AxiosError: b5,
    CanceledError: x5,
    isCancel: S5,
    CancelToken: E5,
    VERSION: w5,
    all: _5,
    Cancel: T5,
    isAxiosError: R5,
    spread: A5,
    toFormData: C5,
    AxiosHeaders: N5,
    HttpStatusCode: O5,
    formToJSON: j5,
    getAdapter: D5,
    mergeConfig: M5,
  } = Ue,
  A1 = async (t) => {
    const n = new FormData();
    n.append("file", t), n.append("upload_preset", "blood-image");
    const { data: r } = await Ue.post(
      "https://api.cloudinary.com/v1_1/dqy9dmujq/image/upload",
      n
    );
    return r.secure_url;
  },
  BT = () => {
    const t = Mn(),
      { createUser: n, updateUserProfile: r, loading: s } = Zt(),
      o = Tb(),
      d = Dn().state || "/",
      {
        register: h,
        handleSubmit: p,
        watch: g,
        formState: { errors: v },
      } = Kh(),
      b = g("district"),
      x = o.map((U) => U.name),
      R = o.find((U) => U.name === b)?.upazilas || [],
      E = async (U) => {
        const {
            name: z,
            image: Y,
            email: Z,
            password: ee,
            bloodGroup: pe,
            district: N,
            upazila: me,
          } = U,
          fe = Y[0];
        try {
          const Re = await A1(fe);
          console.log(Re);
          const ge = await n(Z, ee);
          try {
            const ce = {
                name: z,
                email: Z,
                image: Re,
                blood_group: pe,
                district: N,
                upazila: me,
                role: "donor",
                status: "active",
                createdAt: new Date().toISOString(),
              },
              he = await Ue.post(
                "https://blood-donation-server-ashy.vercel.app/users",
                ce
              );
            console.log("MongoDB Response:", he.data);
          } catch (ce) {
            console.log(ce);
          }
          await r(z, Re),
            console.log(ge),
            t(d, { replace: !0 }),
            Dt.success("Signup Successful");
        } catch (Re) {
          console.log(Re), Dt.error(Re?.message);
        }
      },
      T = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      _ = g("password");
    return s
      ? m.jsx(Ql, {})
      : m.jsx("div", {
          className:
            "min-h-screen flex items-center justify-center bg-red-50 px-4",
          children: m.jsxs("div", {
            className: "max-w-lg w-full bg-white p-8 rounded-2xl shadow-lg",
            children: [
              m.jsx("h2", {
                className: "text-3xl font-bold text-center text-gray-900",
                children: "Sign Up for Blood Donation",
              }),
              m.jsxs("form", {
                className: "mt-6 flex flex-col gap-4",
                onSubmit: p(E),
                children: [
                  m.jsx("input", {
                    type: "text",
                    placeholder: "Full Name",
                    ...h("name", { required: "Name is required" }),
                    className:
                      "w-full border border-gray-300 rounded-lg px-4 py-3",
                  }),
                  v.name &&
                    m.jsx("p", {
                      className: "text-red-600",
                      children: v.name.message,
                    }),
                  m.jsx("input", {
                    type: "email",
                    placeholder: "Enter Your Email",
                    ...h("email", { required: "Email is required" }),
                    className:
                      "w-full border border-gray-300 rounded-lg px-4 py-3",
                  }),
                  v.email &&
                    m.jsx("p", {
                      className: "text-red-600",
                      children: v.email.message,
                    }),
                  m.jsx("input", {
                    type: "file",
                    accept: "image/*",
                    ...h("image", { required: "Avatar is required" }),
                    className:
                      "w-full border border-gray-300 rounded-lg px-4 py-3",
                  }),
                  v.image &&
                    m.jsx("p", {
                      className: "text-red-600",
                      children: v.image.message,
                    }),
                  m.jsxs("select", {
                    ...h("bloodGroup", { required: "Blood group is required" }),
                    className:
                      "w-full border border-gray-300 rounded-lg px-4 py-3",
                    children: [
                      m.jsx("option", {
                        value: "",
                        children: "Select Blood Group",
                      }),
                      T.map((U) =>
                        m.jsx("option", { value: U, children: U }, U)
                      ),
                    ],
                  }),
                  v.bloodGroup &&
                    m.jsx("p", {
                      className: "text-red-600",
                      children: v.bloodGroup.message,
                    }),
                  m.jsx("input", {
                    type: "password",
                    placeholder: "Password",
                    ...h("password", {
                      required: "Password is required",
                      minLength: 6,
                    }),
                    className:
                      "w-full border border-gray-300 rounded-lg px-4 py-3",
                  }),
                  v.password &&
                    m.jsx("p", {
                      className: "text-red-600",
                      children: v.password.message,
                    }),
                  m.jsx("input", {
                    type: "password",
                    placeholder: "Confirm Password",
                    ...h("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (U) => U === _ || "Passwords do not match",
                    }),
                    className:
                      "w-full border border-gray-300 rounded-lg px-4 py-3",
                  }),
                  v.confirmPassword &&
                    m.jsx("p", {
                      className: "text-red-600",
                      children: v.confirmPassword.message,
                    }),
                  m.jsxs("select", {
                    ...h("district", { required: "District is required" }),
                    className:
                      "w-full border border-gray-300 rounded-lg px-4 py-3",
                    children: [
                      m.jsx("option", {
                        value: "",
                        children: "Select District",
                      }),
                      x.map((U) =>
                        m.jsx("option", { value: U, children: U }, U)
                      ),
                    ],
                  }),
                  m.jsxs("select", {
                    ...h("upazila", { required: "Upazila is required" }),
                    className:
                      "w-full border border-gray-300 rounded-lg px-4 py-3",
                    disabled: !b,
                    children: [
                      m.jsx("option", {
                        value: "",
                        children: "Select Upazila",
                      }),
                      R.map((U) =>
                        m.jsx(
                          "option",
                          { value: U.name, children: U.name },
                          U.id
                        )
                      ),
                    ],
                  }),
                  m.jsx("button", {
                    className:
                      "bg-red-600 text-white font-semibold py-3 rounded-full mt-2",
                    children: "Sign Up",
                  }),
                ],
              }),
              m.jsxs("p", {
                className: "text-gray-600 text-center mt-4",
                children: [
                  "Already have an account?",
                  m.jsx(Et, {
                    to: "/login",
                    className: "text-red-600 font-semibold",
                    children: "Login",
                  }),
                ],
              }),
            ],
          }),
        });
  },
  HT = () => {
    const t = {
      recipient_name: "Rahim Uddin",
      recipient_district: "Dhaka",
      recipient_upazila: "Dhanmondi",
      hospital_name: "Dhaka Medical College Hospital",
      full_address: "Zahir Raihan Rd, Dhaka",
      blood_group: "A+",
      donation_date: "2025-12-20",
      donation_time: "10:00 AM",
      request_message: "Urgent blood required for surgery",
      status: "pending",
    };
    return m.jsxs("div", {
      className: "max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen",
      children: [
        m.jsx("h2", {
          className: "text-3xl font-bold mb-6 text-center",
          children: "Donation Request Details",
        }),
        m.jsxs("div", {
          className: "bg-white shadow-md rounded p-6 mb-6",
          children: [
            m.jsx("h3", {
              className: "text-xl font-semibold mb-4",
              children: "Recipient Information",
            }),
            m.jsxs("p", {
              children: [
                m.jsx("strong", { children: "Name:" }),
                " ",
                t.recipient_name,
              ],
            }),
            m.jsxs("p", {
              children: [
                m.jsx("strong", { children: "District:" }),
                " ",
                t.recipient_district,
              ],
            }),
            m.jsxs("p", {
              children: [
                m.jsx("strong", { children: "Upazila:" }),
                " ",
                t.recipient_upazila,
              ],
            }),
            m.jsxs("p", {
              children: [
                m.jsx("strong", { children: "Hospital:" }),
                " ",
                t.hospital_name,
              ],
            }),
            m.jsxs("p", {
              children: [
                m.jsx("strong", { children: "Address:" }),
                " ",
                t.full_address,
              ],
            }),
            m.jsxs("p", {
              children: [
                m.jsx("strong", { children: "Blood Group:" }),
                " ",
                t.blood_group,
              ],
            }),
            m.jsxs("p", {
              children: [
                m.jsx("strong", { children: "Donation Date:" }),
                " ",
                t.donation_date,
              ],
            }),
            m.jsxs("p", {
              children: [
                m.jsx("strong", { children: "Donation Time:" }),
                " ",
                t.donation_time,
              ],
            }),
            m.jsxs("p", {
              children: [
                m.jsx("strong", { children: "Request Message:" }),
                " ",
                t.request_message,
              ],
            }),
            m.jsxs("p", {
              children: [
                m.jsx("strong", { children: "Status:" }),
                " ",
                m.jsx("span", {
                  className: "text-yellow-600",
                  children: t.status,
                }),
              ],
            }),
          ],
        }),
        t.status === "inprogress",
        m.jsx("div", {
          className: "flex justify-center",
          children: m.jsx("button", {
            className:
              "bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition",
            children: "Donate",
          }),
        }),
        t.status === "inprogress",
      ],
    });
  },
  Ga = ({ children: t }) => {
    const { user: n, loading: r } = Zt(),
      s = Dn();
    return r
      ? m.jsx(Ql, {})
      : n
      ? t
      : m.jsx(Ab, { to: "/login", state: s.pathname, replace: "true" });
  },
  gh = "/assets/logo%20(1)-DPo5V6Tc.png";
function PT(t) {
  return Gt({
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeWidth: "2",
          d: "M13,9 L13,2 L1,2 L1,22 L13,22 L13,15 M22,12 L5,12 M17,7 L22,12 L17,17",
        },
        child: [],
      },
    ],
  })(t);
}
function qT(t) {
  return Gt({
    attr: {
      version: "1",
      viewBox: "0 0 48 48",
      enableBackground: "new 0 0 48 48",
    },
    child: [
      {
        tag: "path",
        attr: {
          fill: "#607D8B",
          d: "M39.6,27.2c0.1-0.7,0.2-1.4,0.2-2.2s-0.1-1.5-0.2-2.2l4.5-3.2c0.4-0.3,0.6-0.9,0.3-1.4L40,10.8 c-0.3-0.5-0.8-0.7-1.3-0.4l-5,2.3c-1.2-0.9-2.4-1.6-3.8-2.2l-0.5-5.5c-0.1-0.5-0.5-0.9-1-0.9h-8.6c-0.5,0-1,0.4-1,0.9l-0.5,5.5 c-1.4,0.6-2.7,1.3-3.8,2.2l-5-2.3c-0.5-0.2-1.1,0-1.3,0.4l-4.3,7.4c-0.3,0.5-0.1,1.1,0.3,1.4l4.5,3.2c-0.1,0.7-0.2,1.4-0.2,2.2 s0.1,1.5,0.2,2.2L4,30.4c-0.4,0.3-0.6,0.9-0.3,1.4L8,39.2c0.3,0.5,0.8,0.7,1.3,0.4l5-2.3c1.2,0.9,2.4,1.6,3.8,2.2l0.5,5.5 c0.1,0.5,0.5,0.9,1,0.9h8.6c0.5,0,1-0.4,1-0.9l0.5-5.5c1.4-0.6,2.7-1.3,3.8-2.2l5,2.3c0.5,0.2,1.1,0,1.3-0.4l4.3-7.4 c0.3-0.5,0.1-1.1-0.3-1.4L39.6,27.2z M24,35c-5.5,0-10-4.5-10-10c0-5.5,4.5-10,10-10c5.5,0,10,4.5,10,10C34,30.5,29.5,35,24,35z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fill: "#455A64",
          d: "M24,13c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C36,18.4,30.6,13,24,13z M24,30 c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5s5,2.2,5,5C29,27.8,26.8,30,24,30z",
        },
        child: [],
      },
    ],
  })(t);
}
function VT(t) {
  return Gt({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
        },
        child: [],
      },
    ],
  })(t);
}
function C1(t) {
  return Gt({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4v2z",
        },
        child: [],
      },
    ],
  })(t);
}
function N1(t) {
  return Gt({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "m22.69 18.37 1.14-1-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L20 14h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1c-.08.5-.08.76 0 1.26l-1.14 1 1 1.73 1.45-.49c.32.27.68.48 1.08.63L18 24h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1c.08-.51.08-.77 0-1.27zM19 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM11 7v5.41l2.36 2.36 1.04-1.79-1.4-1.39V7h-2zm10 5a9 9 0 0 0-9-9C9.17 3 6.65 4.32 5 6.36V4H3v6h6V8H6.26A7.01 7.01 0 0 1 12 5c3.86 0 7 3.14 7 7h2zm-10.14 6.91c-2.99-.49-5.35-2.9-5.78-5.91H3.06c.5 4.5 4.31 8 8.94 8h.07l-1.21-2.09z",
        },
        child: [],
      },
    ],
  })(t);
}
const Pr = ({ label: t, address: n, icon: r }) =>
  m.jsxs(Mb, {
    to: n,
    end: !0,
    className: ({ isActive: s }) =>
      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
        s ? "bg-gray-300  text-gray-700" : "text-gray-600"
      }`,
    children: [
      m.jsx(r, { className: "w-5 h-5" }),
      m.jsx("span", { className: "mx-4 font-medium", children: t }),
    ],
  });
function FT(t) {
  return Gt({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
        child: [],
      },
    ],
  })(t);
}
function GT(t) {
  return Gt({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(t);
}
function YT(t) {
  return Gt({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(t);
}
function QT(t) {
  return Gt({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
        child: [],
      },
    ],
  })(t);
}
function KT(t) {
  return Gt({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z",
        },
        child: [],
      },
    ],
  })(t);
}
function $T(t) {
  return Gt({
    attr: { viewBox: "0 0 352 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z",
        },
        child: [],
      },
    ],
  })(t);
}
function XT(t) {
  return Gt({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z",
        },
        child: [],
      },
    ],
  })(t);
}
function ZT(t) {
  return Gt({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
        },
        child: [],
      },
    ],
  })(t);
}
const JT = () =>
    m.jsxs(m.Fragment, {
      children: [
        m.jsx(Pr, { icon: XT, label: "All Users", address: "all-users" }),
        m.jsx(Pr, {
          icon: N1,
          label: "All-Donation-Request",
          address: "all-users",
        }),
      ],
    }),
  WT = () =>
    m.jsxs(m.Fragment, {
      children: [
        m.jsx(Pr, { icon: C1, label: "Create-Donation", address: "add-plant" }),
        m.jsx(Pr, {
          icon: N1,
          label: "All-Donation-Request",
          address: "all-users",
        }),
      ],
    });
function eR(t) {
  return Gt({
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332q0 .613-.066 1.221A.5.5 0 0 1 6 8.447q.06-.555.06-1.115zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8m-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334m.3 1.67a.5.5 0 0 1 .449.546 10.7 10.7 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.7 9.7 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M3.902 4.222a5 5 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 4 4 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556m6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705M3.68 5.842a.5.5 0 0 1 .422.568q-.044.289-.044.59c0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.5 6.5 0 0 0 3.058 7q0-.375.054-.736a.5.5 0 0 1 .568-.422m8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.5 10.5 0 0 0 .584-2.678.5.5 0 0 1 .54-.456",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865m-.89 1.257a.5.5 0 0 1 .04.706A5.48 5.48 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346m12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49",
        },
        child: [],
      },
    ],
  })(t);
}
const tR = () =>
  m.jsxs(m.Fragment, {
    children: [
      m.jsx(Pr, {
        icon: eR,
        label: "My Donation Request",
        address: "my-donation-request",
      }),
      m.jsx(Pr, { icon: C1, label: "Create-Donation", address: "add-plant" }),
    ],
  });
var As = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(t) {
      return (
        this.listeners.add(t),
        this.onSubscribe(),
        () => {
          this.listeners.delete(t), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  nR = {
    setTimeout: (t, n) => setTimeout(t, n),
    clearTimeout: (t) => clearTimeout(t),
    setInterval: (t, n) => setInterval(t, n),
    clearInterval: (t) => clearInterval(t),
  },
  aR = class {
    #e = nR;
    #t = !1;
    setTimeoutProvider(t) {
      this.#e = t;
    }
    setTimeout(t, n) {
      return this.#e.setTimeout(t, n);
    }
    clearTimeout(t) {
      this.#e.clearTimeout(t);
    }
    setInterval(t, n) {
      return this.#e.setInterval(t, n);
    }
    clearInterval(t) {
      this.#e.clearInterval(t);
    }
  },
  vi = new aR();
function rR(t) {
  setTimeout(t, 0);
}
var Si = typeof window > "u" || "Deno" in globalThis;
function nn() {}
function iR(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function yh(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function O1(t, n) {
  return Math.max(t + (n || 0) - Date.now(), 0);
}
function Ir(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function Qn(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function mv(t, n) {
  const {
    type: r = "all",
    exact: s,
    fetchStatus: o,
    predicate: u,
    queryKey: d,
    stale: h,
  } = t;
  if (d) {
    if (s) {
      if (n.queryHash !== em(d, n.options)) return !1;
    } else if (!Bl(n.queryKey, d)) return !1;
  }
  if (r !== "all") {
    const p = n.isActive();
    if ((r === "active" && !p) || (r === "inactive" && p)) return !1;
  }
  return !(
    (typeof h == "boolean" && n.isStale() !== h) ||
    (o && o !== n.state.fetchStatus) ||
    (u && !u(n))
  );
}
function pv(t, n) {
  const { exact: r, status: s, predicate: o, mutationKey: u } = t;
  if (u) {
    if (!n.options.mutationKey) return !1;
    if (r) {
      if (Ei(n.options.mutationKey) !== Ei(u)) return !1;
    } else if (!Bl(n.options.mutationKey, u)) return !1;
  }
  return !((s && n.state.status !== s) || (o && !o(n)));
}
function em(t, n) {
  return (n?.queryKeyHashFn || Ei)(t);
}
function Ei(t) {
  return JSON.stringify(t, (n, r) =>
    vh(r)
      ? Object.keys(r)
          .sort()
          .reduce((s, o) => ((s[o] = r[o]), s), {})
      : r
  );
}
function Bl(t, n) {
  return t === n
    ? !0
    : typeof t != typeof n
    ? !1
    : t && n && typeof t == "object" && typeof n == "object"
    ? Object.keys(n).every((r) => Bl(t[r], n[r]))
    : !1;
}
var sR = Object.prototype.hasOwnProperty;
function j1(t, n) {
  if (t === n) return t;
  const r = gv(t) && gv(n);
  if (!r && !(vh(t) && vh(n))) return n;
  const o = (r ? t : Object.keys(t)).length,
    u = r ? n : Object.keys(n),
    d = u.length,
    h = r ? new Array(d) : {};
  let p = 0;
  for (let g = 0; g < d; g++) {
    const v = r ? g : u[g],
      b = t[v],
      x = n[v];
    if (b === x) {
      (h[v] = b), (r ? g < o : sR.call(t, v)) && p++;
      continue;
    }
    if (
      b === null ||
      x === null ||
      typeof b != "object" ||
      typeof x != "object"
    ) {
      h[v] = x;
      continue;
    }
    const R = j1(b, x);
    (h[v] = R), R === b && p++;
  }
  return o === d && p === o ? t : h;
}
function $u(t, n) {
  if (!n || Object.keys(t).length !== Object.keys(n).length) return !1;
  for (const r in t) if (t[r] !== n[r]) return !1;
  return !0;
}
function gv(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function vh(t) {
  if (!yv(t)) return !1;
  const n = t.constructor;
  if (n === void 0) return !0;
  const r = n.prototype;
  return !(
    !yv(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(t) !== Object.prototype
  );
}
function yv(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function lR(t) {
  return new Promise((n) => {
    vi.setTimeout(n, t);
  });
}
function bh(t, n, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(t, n)
    : r.structuralSharing !== !1
    ? j1(t, n)
    : n;
}
function oR(t, n, r = 0) {
  const s = [...t, n];
  return r && s.length > r ? s.slice(1) : s;
}
function uR(t, n, r = 0) {
  const s = [n, ...t];
  return r && s.length > r ? s.slice(0, -1) : s;
}
var tm = Symbol();
function D1(t, n) {
  return !t.queryFn && n?.initialPromise
    ? () => n.initialPromise
    : !t.queryFn || t.queryFn === tm
    ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
    : t.queryFn;
}
function M1(t, n) {
  return typeof t == "function" ? t(...n) : !!t;
}
var cR = class extends As {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (t) => {
          if (!Si && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(t) {
      (this.#n = t),
        this.#t?.(),
        (this.#t = t((n) => {
          typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
        }));
    }
    setFocused(t) {
      this.#e !== t && ((this.#e = t), this.onFocus());
    }
    onFocus() {
      const t = this.isFocused();
      this.listeners.forEach((n) => {
        n(t);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  nm = new cR();
function xh() {
  let t, n;
  const r = new Promise((o, u) => {
    (t = o), (n = u);
  });
  (r.status = "pending"), r.catch(() => {});
  function s(o) {
    Object.assign(r, o), delete r.resolve, delete r.reject;
  }
  return (
    (r.resolve = (o) => {
      s({ status: "fulfilled", value: o }), t(o);
    }),
    (r.reject = (o) => {
      s({ status: "rejected", reason: o }), n(o);
    }),
    r
  );
}
var dR = rR;
function fR() {
  let t = [],
    n = 0,
    r = (h) => {
      h();
    },
    s = (h) => {
      h();
    },
    o = dR;
  const u = (h) => {
      n
        ? t.push(h)
        : o(() => {
            r(h);
          });
    },
    d = () => {
      const h = t;
      (t = []),
        h.length &&
          o(() => {
            s(() => {
              h.forEach((p) => {
                r(p);
              });
            });
          });
    };
  return {
    batch: (h) => {
      let p;
      n++;
      try {
        p = h();
      } finally {
        n--, n || d();
      }
      return p;
    },
    batchCalls:
      (h) =>
      (...p) => {
        u(() => {
          h(...p);
        });
      },
    schedule: u,
    setNotifyFunction: (h) => {
      r = h;
    },
    setBatchNotifyFunction: (h) => {
      s = h;
    },
    setScheduler: (h) => {
      o = h;
    },
  };
}
var qt = fR(),
  hR = class extends As {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (t) => {
          if (!Si && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(t) {
      (this.#n = t), this.#t?.(), (this.#t = t(this.setOnline.bind(this)));
    }
    setOnline(t) {
      this.#e !== t &&
        ((this.#e = t),
        this.listeners.forEach((r) => {
          r(t);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  Xu = new hR();
function mR(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function U1(t) {
  return (t ?? "online") === "online" ? Xu.isOnline() : !0;
}
var Sh = class extends Error {
  constructor(t) {
    super("CancelledError"),
      (this.revert = t?.revert),
      (this.silent = t?.silent);
  }
};
function L1(t) {
  let n = !1,
    r = 0,
    s;
  const o = xh(),
    u = () => o.status !== "pending",
    d = (T) => {
      if (!u()) {
        const _ = new Sh(T);
        x(_), t.onCancel?.(_);
      }
    },
    h = () => {
      n = !0;
    },
    p = () => {
      n = !1;
    },
    g = () =>
      nm.isFocused() &&
      (t.networkMode === "always" || Xu.isOnline()) &&
      t.canRun(),
    v = () => U1(t.networkMode) && t.canRun(),
    b = (T) => {
      u() || (s?.(), o.resolve(T));
    },
    x = (T) => {
      u() || (s?.(), o.reject(T));
    },
    R = () =>
      new Promise((T) => {
        (s = (_) => {
          (u() || g()) && T(_);
        }),
          t.onPause?.();
      }).then(() => {
        (s = void 0), u() || t.onContinue?.();
      }),
    E = () => {
      if (u()) return;
      let T;
      const _ = r === 0 ? t.initialPromise : void 0;
      try {
        T = _ ?? t.fn();
      } catch (U) {
        T = Promise.reject(U);
      }
      Promise.resolve(T)
        .then(b)
        .catch((U) => {
          if (u()) return;
          const z = t.retry ?? (Si ? 0 : 3),
            Y = t.retryDelay ?? mR,
            Z = typeof Y == "function" ? Y(r, U) : Y,
            ee =
              z === !0 ||
              (typeof z == "number" && r < z) ||
              (typeof z == "function" && z(r, U));
          if (n || !ee) {
            x(U);
            return;
          }
          r++,
            t.onFail?.(r, U),
            lR(Z)
              .then(() => (g() ? void 0 : R()))
              .then(() => {
                n ? x(U) : E();
              });
        });
    };
  return {
    promise: o,
    status: () => o.status,
    cancel: d,
    continue: () => (s?.(), o),
    cancelRetry: h,
    continueRetry: p,
    canStart: v,
    start: () => (v() ? E() : R().then(E), o),
  };
}
var z1 = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        yh(this.gcTime) &&
          (this.#e = vi.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(t) {
      this.gcTime = Math.max(this.gcTime || 0, t ?? (Si ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e && (vi.clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  pR = class extends z1 {
    #e;
    #t;
    #n;
    #r;
    #a;
    #s;
    #l;
    constructor(t) {
      super(),
        (this.#l = !1),
        (this.#s = t.defaultOptions),
        this.setOptions(t.options),
        (this.observers = []),
        (this.#r = t.client),
        (this.#n = this.#r.getQueryCache()),
        (this.queryKey = t.queryKey),
        (this.queryHash = t.queryHash),
        (this.#e = bv(this.options)),
        (this.state = t.state ?? this.#e),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#a?.promise;
    }
    setOptions(t) {
      if (
        ((this.options = { ...this.#s, ...t }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const n = bv(this.options);
        n.data !== void 0 &&
          (this.setState(vv(n.data, n.dataUpdatedAt)), (this.#e = n));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#n.remove(this);
    }
    setData(t, n) {
      const r = bh(this.state.data, t, this.options);
      return (
        this.#i({
          data: r,
          type: "success",
          dataUpdatedAt: n?.updatedAt,
          manual: n?.manual,
        }),
        r
      );
    }
    setState(t, n) {
      this.#i({ type: "setState", state: t, setStateOptions: n });
    }
    cancel(t) {
      const n = this.#a?.promise;
      return this.#a?.cancel(t), n ? n.then(nn).catch(nn) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    reset() {
      this.destroy(), this.setState(this.#e);
    }
    isActive() {
      return this.observers.some((t) => Qn(t.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === tm ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((t) => Ir(t.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((t) => t.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(t = 0) {
      return this.state.data === void 0
        ? !0
        : t === "static"
        ? !1
        : this.state.isInvalidated
        ? !0
        : !O1(this.state.dataUpdatedAt, t);
    }
    onFocus() {
      this.observers
        .find((n) => n.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue();
    }
    onOnline() {
      this.observers
        .find((n) => n.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue();
    }
    addObserver(t) {
      this.observers.includes(t) ||
        (this.observers.push(t),
        this.clearGcTimeout(),
        this.#n.notify({ type: "observerAdded", query: this, observer: t }));
    }
    removeObserver(t) {
      this.observers.includes(t) &&
        ((this.observers = this.observers.filter((n) => n !== t)),
        this.observers.length ||
          (this.#a &&
            (this.#l ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: "observerRemoved", query: this, observer: t }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#i({ type: "invalidate" });
    }
    async fetch(t, n) {
      if (
        this.state.fetchStatus !== "idle" &&
        this.#a?.status() !== "rejected"
      ) {
        if (this.state.data !== void 0 && n?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
      }
      if ((t && this.setOptions(t), !this.options.queryFn)) {
        const h = this.observers.find((p) => p.options.queryFn);
        h && this.setOptions(h.options);
      }
      const r = new AbortController(),
        s = (h) => {
          Object.defineProperty(h, "signal", {
            enumerable: !0,
            get: () => ((this.#l = !0), r.signal),
          });
        },
        o = () => {
          const h = D1(this.options, n),
            g = (() => {
              const v = {
                client: this.#r,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return s(v), v;
            })();
          return (
            (this.#l = !1),
            this.options.persister ? this.options.persister(h, g, this) : h(g)
          );
        },
        d = (() => {
          const h = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#r,
            state: this.state,
            fetchFn: o,
          };
          return s(h), h;
        })();
      this.options.behavior?.onFetch(d, this),
        (this.#t = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== d.fetchOptions?.meta) &&
          this.#i({ type: "fetch", meta: d.fetchOptions?.meta }),
        (this.#a = L1({
          initialPromise: n?.initialPromise,
          fn: d.fetchFn,
          onCancel: (h) => {
            h instanceof Sh &&
              h.revert &&
              this.setState({ ...this.#t, fetchStatus: "idle" }),
              r.abort();
          },
          onFail: (h, p) => {
            this.#i({ type: "failed", failureCount: h, error: p });
          },
          onPause: () => {
            this.#i({ type: "pause" });
          },
          onContinue: () => {
            this.#i({ type: "continue" });
          },
          retry: d.options.retry,
          retryDelay: d.options.retryDelay,
          networkMode: d.options.networkMode,
          canRun: () => !0,
        }));
      try {
        const h = await this.#a.start();
        if (h === void 0)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(h),
          this.#n.config.onSuccess?.(h, this),
          this.#n.config.onSettled?.(h, this.state.error, this),
          h
        );
      } catch (h) {
        if (h instanceof Sh) {
          if (h.silent) return this.#a.promise;
          if (h.revert) {
            if (this.state.data === void 0) throw h;
            return this.state.data;
          }
        }
        throw (
          (this.#i({ type: "error", error: h }),
          this.#n.config.onError?.(h, this),
          this.#n.config.onSettled?.(this.state.data, h, this),
          h)
        );
      } finally {
        this.scheduleGc();
      }
    }
    #i(t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...k1(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            const s = {
              ...r,
              ...vv(t.data, t.dataUpdatedAt),
              dataUpdateCount: r.dataUpdateCount + 1,
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return (this.#t = t.manual ? s : void 0), s;
          case "error":
            const o = t.error;
            return {
              ...r,
              error: o,
              errorUpdateCount: r.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: r.fetchFailureCount + 1,
              fetchFailureReason: o,
              fetchStatus: "idle",
              status: "error",
            };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        qt.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: "updated", action: t });
        });
    }
  };
function k1(t, n) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: U1(n.networkMode) ? "fetching" : "paused",
    ...(t === void 0 && { error: null, status: "pending" }),
  };
}
function vv(t, n) {
  return {
    data: t,
    dataUpdatedAt: n ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function bv(t) {
  const n =
      typeof t.initialData == "function" ? t.initialData() : t.initialData,
    r = n !== void 0,
    s = r
      ? typeof t.initialDataUpdatedAt == "function"
        ? t.initialDataUpdatedAt()
        : t.initialDataUpdatedAt
      : 0;
  return {
    data: n,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? s ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var gR = class extends As {
  constructor(t, n) {
    super(),
      (this.options = n),
      (this.#e = t),
      (this.#i = null),
      (this.#l = xh()),
      this.bindMethods(),
      this.setOptions(n);
  }
  #e;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #a;
  #s;
  #l;
  #i;
  #p;
  #f;
  #h;
  #u;
  #c;
  #o;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      xv(this.#t, this.options) ? this.#d() : this.updateResult(),
      this.#b());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Eh(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Eh(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    (this.listeners = new Set()),
      this.#x(),
      this.#S(),
      this.#t.removeObserver(this);
  }
  setOptions(t) {
    const n = this.options,
      r = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(t)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != "boolean" &&
        typeof this.options.enabled != "function" &&
        typeof Qn(this.options.enabled, this.#t) != "boolean")
    )
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    this.#E(),
      this.#t.setOptions(this.options),
      n._defaulted &&
        !$u(this.options, n) &&
        this.#e
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this,
          });
    const s = this.hasListeners();
    s && Sv(this.#t, r, this.options, n) && this.#d(),
      this.updateResult(),
      s &&
        (this.#t !== r ||
          Qn(this.options.enabled, this.#t) !== Qn(n.enabled, this.#t) ||
          Ir(this.options.staleTime, this.#t) !== Ir(n.staleTime, this.#t)) &&
        this.#g();
    const o = this.#y();
    s &&
      (this.#t !== r ||
        Qn(this.options.enabled, this.#t) !== Qn(n.enabled, this.#t) ||
        o !== this.#o) &&
      this.#v(o);
  }
  getOptimisticResult(t) {
    const n = this.#e.getQueryCache().build(this.#e, t),
      r = this.createResult(n, t);
    return (
      vR(this, r) &&
        ((this.#r = r), (this.#s = this.options), (this.#a = this.#t.state)),
      r
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(t, n) {
    return new Proxy(t, {
      get: (r, s) => (
        this.trackProp(s),
        n?.(s),
        s === "promise" &&
          (this.trackProp("data"),
          !this.options.experimental_prefetchInRender &&
            this.#l.status === "pending" &&
            this.#l.reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            )),
        Reflect.get(r, s)
      ),
    });
  }
  trackProp(t) {
    this.#m.add(t);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...t } = {}) {
    return this.fetch({ ...t });
  }
  fetchOptimistic(t) {
    const n = this.#e.defaultQueryOptions(t),
      r = this.#e.getQueryCache().build(this.#e, n);
    return r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    return this.#d({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#r)
    );
  }
  #d(t) {
    this.#E();
    let n = this.#t.fetch(this.options, t);
    return t?.throwOnError || (n = n.catch(nn)), n;
  }
  #g() {
    this.#x();
    const t = Ir(this.options.staleTime, this.#t);
    if (Si || this.#r.isStale || !yh(t)) return;
    const r = O1(this.#r.dataUpdatedAt, t) + 1;
    this.#u = vi.setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, r);
  }
  #y() {
    return (
      (typeof this.options.refetchInterval == "function"
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(t) {
    this.#S(),
      (this.#o = t),
      !(
        Si ||
        Qn(this.options.enabled, this.#t) === !1 ||
        !yh(this.#o) ||
        this.#o === 0
      ) &&
        (this.#c = vi.setInterval(() => {
          (this.options.refetchIntervalInBackground || nm.isFocused()) &&
            this.#d();
        }, this.#o));
  }
  #b() {
    this.#g(), this.#v(this.#y());
  }
  #x() {
    this.#u && (vi.clearTimeout(this.#u), (this.#u = void 0));
  }
  #S() {
    this.#c && (vi.clearInterval(this.#c), (this.#c = void 0));
  }
  createResult(t, n) {
    const r = this.#t,
      s = this.options,
      o = this.#r,
      u = this.#a,
      d = this.#s,
      p = t !== r ? t.state : this.#n,
      { state: g } = t;
    let v = { ...g },
      b = !1,
      x;
    if (n._optimisticResults) {
      const me = this.hasListeners(),
        fe = !me && xv(t, n),
        Re = me && Sv(t, r, n, s);
      (fe || Re) && (v = { ...v, ...k1(g.data, t.options) }),
        n._optimisticResults === "isRestoring" && (v.fetchStatus = "idle");
    }
    let { error: R, errorUpdatedAt: E, status: T } = v;
    x = v.data;
    let _ = !1;
    if (n.placeholderData !== void 0 && x === void 0 && T === "pending") {
      let me;
      o?.isPlaceholderData && n.placeholderData === d?.placeholderData
        ? ((me = o.data), (_ = !0))
        : (me =
            typeof n.placeholderData == "function"
              ? n.placeholderData(this.#h?.state.data, this.#h)
              : n.placeholderData),
        me !== void 0 && ((T = "success"), (x = bh(o?.data, me, n)), (b = !0));
    }
    if (n.select && x !== void 0 && !_)
      if (o && x === u?.data && n.select === this.#p) x = this.#f;
      else
        try {
          (this.#p = n.select),
            (x = n.select(x)),
            (x = bh(o?.data, x, n)),
            (this.#f = x),
            (this.#i = null);
        } catch (me) {
          this.#i = me;
        }
    this.#i && ((R = this.#i), (x = this.#f), (E = Date.now()), (T = "error"));
    const U = v.fetchStatus === "fetching",
      z = T === "pending",
      Y = T === "error",
      Z = z && U,
      ee = x !== void 0,
      N = {
        status: T,
        fetchStatus: v.fetchStatus,
        isPending: z,
        isSuccess: T === "success",
        isError: Y,
        isInitialLoading: Z,
        isLoading: Z,
        data: x,
        dataUpdatedAt: v.dataUpdatedAt,
        error: R,
        errorUpdatedAt: E,
        failureCount: v.fetchFailureCount,
        failureReason: v.fetchFailureReason,
        errorUpdateCount: v.errorUpdateCount,
        isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
        isFetchedAfterMount:
          v.dataUpdateCount > p.dataUpdateCount ||
          v.errorUpdateCount > p.errorUpdateCount,
        isFetching: U,
        isRefetching: U && !z,
        isLoadingError: Y && !ee,
        isPaused: v.fetchStatus === "paused",
        isPlaceholderData: b,
        isRefetchError: Y && ee,
        isStale: am(t, n),
        refetch: this.refetch,
        promise: this.#l,
        isEnabled: Qn(n.enabled, t) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      const me = (ge) => {
          N.status === "error"
            ? ge.reject(N.error)
            : N.data !== void 0 && ge.resolve(N.data);
        },
        fe = () => {
          const ge = (this.#l = N.promise = xh());
          me(ge);
        },
        Re = this.#l;
      switch (Re.status) {
        case "pending":
          t.queryHash === r.queryHash && me(Re);
          break;
        case "fulfilled":
          (N.status === "error" || N.data !== Re.value) && fe();
          break;
        case "rejected":
          (N.status !== "error" || N.error !== Re.reason) && fe();
          break;
      }
    }
    return N;
  }
  updateResult() {
    const t = this.#r,
      n = this.createResult(this.#t, this.options);
    if (
      ((this.#a = this.#t.state),
      (this.#s = this.options),
      this.#a.data !== void 0 && (this.#h = this.#t),
      $u(n, t))
    )
      return;
    this.#r = n;
    const r = () => {
      if (!t) return !0;
      const { notifyOnChangeProps: s } = this.options,
        o = typeof s == "function" ? s() : s;
      if (o === "all" || (!o && !this.#m.size)) return !0;
      const u = new Set(o ?? this.#m);
      return (
        this.options.throwOnError && u.add("error"),
        Object.keys(this.#r).some((d) => {
          const h = d;
          return this.#r[h] !== t[h] && u.has(h);
        })
      );
    };
    this.#w({ listeners: r() });
  }
  #E() {
    const t = this.#e.getQueryCache().build(this.#e, this.options);
    if (t === this.#t) return;
    const n = this.#t;
    (this.#t = t),
      (this.#n = t.state),
      this.hasListeners() && (n?.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && this.#b();
  }
  #w(t) {
    qt.batch(() => {
      t.listeners &&
        this.listeners.forEach((n) => {
          n(this.#r);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: "observerResultsUpdated" });
    });
  }
};
function yR(t, n) {
  return (
    Qn(n.enabled, t) !== !1 &&
    t.state.data === void 0 &&
    !(t.state.status === "error" && n.retryOnMount === !1)
  );
}
function xv(t, n) {
  return yR(t, n) || (t.state.data !== void 0 && Eh(t, n, n.refetchOnMount));
}
function Eh(t, n, r) {
  if (Qn(n.enabled, t) !== !1 && Ir(n.staleTime, t) !== "static") {
    const s = typeof r == "function" ? r(t) : r;
    return s === "always" || (s !== !1 && am(t, n));
  }
  return !1;
}
function Sv(t, n, r, s) {
  return (
    (t !== n || Qn(s.enabled, t) === !1) &&
    (!r.suspense || t.state.status !== "error") &&
    am(t, r)
  );
}
function am(t, n) {
  return Qn(n.enabled, t) !== !1 && t.isStaleByTime(Ir(n.staleTime, t));
}
function vR(t, n) {
  return !$u(t.getCurrentResult(), n);
}
function Ev(t) {
  return {
    onFetch: (n, r) => {
      const s = n.options,
        o = n.fetchOptions?.meta?.fetchMore?.direction,
        u = n.state.data?.pages || [],
        d = n.state.data?.pageParams || [];
      let h = { pages: [], pageParams: [] },
        p = 0;
      const g = async () => {
        let v = !1;
        const b = (E) => {
            Object.defineProperty(E, "signal", {
              enumerable: !0,
              get: () => (
                n.signal.aborted
                  ? (v = !0)
                  : n.signal.addEventListener("abort", () => {
                      v = !0;
                    }),
                n.signal
              ),
            });
          },
          x = D1(n.options, n.fetchOptions),
          R = async (E, T, _) => {
            if (v) return Promise.reject();
            if (T == null && E.pages.length) return Promise.resolve(E);
            const z = (() => {
                const pe = {
                  client: n.client,
                  queryKey: n.queryKey,
                  pageParam: T,
                  direction: _ ? "backward" : "forward",
                  meta: n.options.meta,
                };
                return b(pe), pe;
              })(),
              Y = await x(z),
              { maxPages: Z } = n.options,
              ee = _ ? uR : oR;
            return {
              pages: ee(E.pages, Y, Z),
              pageParams: ee(E.pageParams, T, Z),
            };
          };
        if (o && u.length) {
          const E = o === "backward",
            T = E ? bR : wv,
            _ = { pages: u, pageParams: d },
            U = T(s, _);
          h = await R(_, U, E);
        } else {
          const E = t ?? u.length;
          do {
            const T = p === 0 ? d[0] ?? s.initialPageParam : wv(s, h);
            if (p > 0 && T == null) break;
            (h = await R(h, T)), p++;
          } while (p < E);
        }
        return h;
      };
      n.options.persister
        ? (n.fetchFn = () =>
            n.options.persister?.(
              g,
              {
                client: n.client,
                queryKey: n.queryKey,
                meta: n.options.meta,
                signal: n.signal,
              },
              r
            ))
        : (n.fetchFn = g);
    },
  };
}
function wv(t, { pages: n, pageParams: r }) {
  const s = n.length - 1;
  return n.length > 0 ? t.getNextPageParam(n[s], n, r[s], r) : void 0;
}
function bR(t, { pages: n, pageParams: r }) {
  return n.length > 0 ? t.getPreviousPageParam?.(n[0], n, r[0], r) : void 0;
}
var xR = class extends z1 {
  #e;
  #t;
  #n;
  #r;
  constructor(t) {
    super(),
      (this.#e = t.client),
      (this.mutationId = t.mutationId),
      (this.#n = t.mutationCache),
      (this.#t = []),
      (this.state = t.state || I1()),
      this.setOptions(t.options),
      this.scheduleGc();
  }
  setOptions(t) {
    (this.options = t), this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    this.#t.includes(t) ||
      (this.#t.push(t),
      this.clearGcTimeout(),
      this.#n.notify({ type: "observerAdded", mutation: this, observer: t }));
  }
  removeObserver(t) {
    (this.#t = this.#t.filter((n) => n !== t)),
      this.scheduleGc(),
      this.#n.notify({ type: "observerRemoved", mutation: this, observer: t });
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(t) {
    const n = () => {
        this.#a({ type: "continue" });
      },
      r = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#r = L1({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(t, r)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (u, d) => {
        this.#a({ type: "failed", failureCount: u, error: d });
      },
      onPause: () => {
        this.#a({ type: "pause" });
      },
      onContinue: n,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    const s = this.state.status === "pending",
      o = !this.#r.canStart();
    try {
      if (s) n();
      else {
        this.#a({ type: "pending", variables: t, isPaused: o }),
          await this.#n.config.onMutate?.(t, this, r);
        const d = await this.options.onMutate?.(t, r);
        d !== this.state.context &&
          this.#a({ type: "pending", context: d, variables: t, isPaused: o });
      }
      const u = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(u, t, this.state.context, this, r),
        await this.options.onSuccess?.(u, t, this.state.context, r),
        await this.#n.config.onSettled?.(
          u,
          null,
          this.state.variables,
          this.state.context,
          this,
          r
        ),
        await this.options.onSettled?.(u, null, t, this.state.context, r),
        this.#a({ type: "success", data: u }),
        u
      );
    } catch (u) {
      try {
        throw (
          (await this.#n.config.onError?.(u, t, this.state.context, this, r),
          await this.options.onError?.(u, t, this.state.context, r),
          await this.#n.config.onSettled?.(
            void 0,
            u,
            this.state.variables,
            this.state.context,
            this,
            r
          ),
          await this.options.onSettled?.(void 0, u, t, this.state.context, r),
          u)
        );
      } finally {
        this.#a({ type: "error", error: u });
      }
    } finally {
      this.#n.runNext(this);
    }
  }
  #a(t) {
    const n = (r) => {
      switch (t.type) {
        case "failed":
          return { ...r, failureCount: t.failureCount, failureReason: t.error };
        case "pause":
          return { ...r, isPaused: !0 };
        case "continue":
          return { ...r, isPaused: !1 };
        case "pending":
          return {
            ...r,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: t.isPaused,
            status: "pending",
            variables: t.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...r,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: t.error,
            failureCount: r.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    (this.state = n(this.state)),
      qt.batch(() => {
        this.#t.forEach((r) => {
          r.onMutationUpdate(t);
        }),
          this.#n.notify({ mutation: this, type: "updated", action: t });
      });
  }
};
function I1() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var SR = class extends As {
  constructor(t = {}) {
    super(),
      (this.config = t),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0);
  }
  #e;
  #t;
  #n;
  build(t, n, r) {
    const s = new xR({
      client: t,
      mutationCache: this,
      mutationId: ++this.#n,
      options: t.defaultMutationOptions(n),
      state: r,
    });
    return this.add(s), s;
  }
  add(t) {
    this.#e.add(t);
    const n = Ru(t);
    if (typeof n == "string") {
      const r = this.#t.get(n);
      r ? r.push(t) : this.#t.set(n, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (this.#e.delete(t)) {
      const n = Ru(t);
      if (typeof n == "string") {
        const r = this.#t.get(n);
        if (r)
          if (r.length > 1) {
            const s = r.indexOf(t);
            s !== -1 && r.splice(s, 1);
          } else r[0] === t && this.#t.delete(n);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const n = Ru(t);
    if (typeof n == "string") {
      const s = this.#t.get(n)?.find((o) => o.state.status === "pending");
      return !s || s === t;
    } else return !0;
  }
  runNext(t) {
    const n = Ru(t);
    return typeof n == "string"
      ? this.#t
          .get(n)
          ?.find((s) => s !== t && s.state.isPaused)
          ?.continue() ?? Promise.resolve()
      : Promise.resolve();
  }
  clear() {
    qt.batch(() => {
      this.#e.forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }),
        this.#e.clear(),
        this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find((r) => pv(n, r));
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => pv(t, n));
  }
  notify(t) {
    qt.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((n) => n.state.isPaused);
    return qt.batch(() => Promise.all(t.map((n) => n.continue().catch(nn))));
  }
};
function Ru(t) {
  return t.options.scope?.id;
}
var ER = class extends As {
    #e;
    #t = void 0;
    #n;
    #r;
    constructor(n, r) {
      super(), (this.#e = n), this.setOptions(r), this.bindMethods(), this.#a();
    }
    bindMethods() {
      (this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this));
    }
    setOptions(n) {
      const r = this.options;
      (this.options = this.#e.defaultMutationOptions(n)),
        $u(this.options, r) ||
          this.#e
            .getMutationCache()
            .notify({
              type: "observerOptionsUpdated",
              mutation: this.#n,
              observer: this,
            }),
        r?.mutationKey &&
        this.options.mutationKey &&
        Ei(r.mutationKey) !== Ei(this.options.mutationKey)
          ? this.reset()
          : this.#n?.state.status === "pending" &&
            this.#n.setOptions(this.options);
    }
    onUnsubscribe() {
      this.hasListeners() || this.#n?.removeObserver(this);
    }
    onMutationUpdate(n) {
      this.#a(), this.#s(n);
    }
    getCurrentResult() {
      return this.#t;
    }
    reset() {
      this.#n?.removeObserver(this), (this.#n = void 0), this.#a(), this.#s();
    }
    mutate(n, r) {
      return (
        (this.#r = r),
        this.#n?.removeObserver(this),
        (this.#n = this.#e.getMutationCache().build(this.#e, this.options)),
        this.#n.addObserver(this),
        this.#n.execute(n)
      );
    }
    #a() {
      const n = this.#n?.state ?? I1();
      this.#t = {
        ...n,
        isPending: n.status === "pending",
        isSuccess: n.status === "success",
        isError: n.status === "error",
        isIdle: n.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #s(n) {
      qt.batch(() => {
        if (this.#r && this.hasListeners()) {
          const r = this.#t.variables,
            s = this.#t.context,
            o = {
              client: this.#e,
              meta: this.options.meta,
              mutationKey: this.options.mutationKey,
            };
          n?.type === "success"
            ? (this.#r.onSuccess?.(n.data, r, s, o),
              this.#r.onSettled?.(n.data, null, r, s, o))
            : n?.type === "error" &&
              (this.#r.onError?.(n.error, r, s, o),
              this.#r.onSettled?.(void 0, n.error, r, s, o));
        }
        this.listeners.forEach((r) => {
          r(this.#t);
        });
      });
    }
  },
  wR = class extends As {
    constructor(t = {}) {
      super(), (this.config = t), (this.#e = new Map());
    }
    #e;
    build(t, n, r) {
      const s = n.queryKey,
        o = n.queryHash ?? em(s, n);
      let u = this.get(o);
      return (
        u ||
          ((u = new pR({
            client: t,
            queryKey: s,
            queryHash: o,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(s),
          })),
          this.add(u)),
        u
      );
    }
    add(t) {
      this.#e.has(t.queryHash) ||
        (this.#e.set(t.queryHash, t), this.notify({ type: "added", query: t }));
    }
    remove(t) {
      const n = this.#e.get(t.queryHash);
      n &&
        (t.destroy(),
        n === t && this.#e.delete(t.queryHash),
        this.notify({ type: "removed", query: t }));
    }
    clear() {
      qt.batch(() => {
        this.getAll().forEach((t) => {
          this.remove(t);
        });
      });
    }
    get(t) {
      return this.#e.get(t);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(t) {
      const n = { exact: !0, ...t };
      return this.getAll().find((r) => mv(n, r));
    }
    findAll(t = {}) {
      const n = this.getAll();
      return Object.keys(t).length > 0 ? n.filter((r) => mv(t, r)) : n;
    }
    notify(t) {
      qt.batch(() => {
        this.listeners.forEach((n) => {
          n(t);
        });
      });
    }
    onFocus() {
      qt.batch(() => {
        this.getAll().forEach((t) => {
          t.onFocus();
        });
      });
    }
    onOnline() {
      qt.batch(() => {
        this.getAll().forEach((t) => {
          t.onOnline();
        });
      });
    }
  },
  _R = class {
    #e;
    #t;
    #n;
    #r;
    #a;
    #s;
    #l;
    #i;
    constructor(t = {}) {
      (this.#e = t.queryCache || new wR()),
        (this.#t = t.mutationCache || new SR()),
        (this.#n = t.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#a = new Map()),
        (this.#s = 0);
    }
    mount() {
      this.#s++,
        this.#s === 1 &&
          ((this.#l = nm.subscribe(async (t) => {
            t && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#i = Xu.subscribe(async (t) => {
            t && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#s--,
        this.#s === 0 &&
          (this.#l?.(), (this.#l = void 0), this.#i?.(), (this.#i = void 0));
    }
    isFetching(t) {
      return this.#e.findAll({ ...t, fetchStatus: "fetching" }).length;
    }
    isMutating(t) {
      return this.#t.findAll({ ...t, status: "pending" }).length;
    }
    getQueryData(t) {
      const n = this.defaultQueryOptions({ queryKey: t });
      return this.#e.get(n.queryHash)?.state.data;
    }
    ensureQueryData(t) {
      const n = this.defaultQueryOptions(t),
        r = this.#e.build(this, n),
        s = r.state.data;
      return s === void 0
        ? this.fetchQuery(t)
        : (t.revalidateIfStale &&
            r.isStaleByTime(Ir(n.staleTime, r)) &&
            this.prefetchQuery(n),
          Promise.resolve(s));
    }
    getQueriesData(t) {
      return this.#e.findAll(t).map(({ queryKey: n, state: r }) => {
        const s = r.data;
        return [n, s];
      });
    }
    setQueryData(t, n, r) {
      const s = this.defaultQueryOptions({ queryKey: t }),
        u = this.#e.get(s.queryHash)?.state.data,
        d = iR(n, u);
      if (d !== void 0)
        return this.#e.build(this, s).setData(d, { ...r, manual: !0 });
    }
    setQueriesData(t, n, r) {
      return qt.batch(() =>
        this.#e
          .findAll(t)
          .map(({ queryKey: s }) => [s, this.setQueryData(s, n, r)])
      );
    }
    getQueryState(t) {
      const n = this.defaultQueryOptions({ queryKey: t });
      return this.#e.get(n.queryHash)?.state;
    }
    removeQueries(t) {
      const n = this.#e;
      qt.batch(() => {
        n.findAll(t).forEach((r) => {
          n.remove(r);
        });
      });
    }
    resetQueries(t, n) {
      const r = this.#e;
      return qt.batch(
        () => (
          r.findAll(t).forEach((s) => {
            s.reset();
          }),
          this.refetchQueries({ type: "active", ...t }, n)
        )
      );
    }
    cancelQueries(t, n = {}) {
      const r = { revert: !0, ...n },
        s = qt.batch(() => this.#e.findAll(t).map((o) => o.cancel(r)));
      return Promise.all(s).then(nn).catch(nn);
    }
    invalidateQueries(t, n = {}) {
      return qt.batch(
        () => (
          this.#e.findAll(t).forEach((r) => {
            r.invalidate();
          }),
          t?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...t, type: t?.refetchType ?? t?.type ?? "active" },
                n
              )
        )
      );
    }
    refetchQueries(t, n = {}) {
      const r = { ...n, cancelRefetch: n.cancelRefetch ?? !0 },
        s = qt.batch(() =>
          this.#e
            .findAll(t)
            .filter((o) => !o.isDisabled() && !o.isStatic())
            .map((o) => {
              let u = o.fetch(void 0, r);
              return (
                r.throwOnError || (u = u.catch(nn)),
                o.state.fetchStatus === "paused" ? Promise.resolve() : u
              );
            })
        );
      return Promise.all(s).then(nn);
    }
    fetchQuery(t) {
      const n = this.defaultQueryOptions(t);
      n.retry === void 0 && (n.retry = !1);
      const r = this.#e.build(this, n);
      return r.isStaleByTime(Ir(n.staleTime, r))
        ? r.fetch(n)
        : Promise.resolve(r.state.data);
    }
    prefetchQuery(t) {
      return this.fetchQuery(t).then(nn).catch(nn);
    }
    fetchInfiniteQuery(t) {
      return (t.behavior = Ev(t.pages)), this.fetchQuery(t);
    }
    prefetchInfiniteQuery(t) {
      return this.fetchInfiniteQuery(t).then(nn).catch(nn);
    }
    ensureInfiniteQueryData(t) {
      return (t.behavior = Ev(t.pages)), this.ensureQueryData(t);
    }
    resumePausedMutations() {
      return Xu.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(t) {
      this.#n = t;
    }
    setQueryDefaults(t, n) {
      this.#r.set(Ei(t), { queryKey: t, defaultOptions: n });
    }
    getQueryDefaults(t) {
      const n = [...this.#r.values()],
        r = {};
      return (
        n.forEach((s) => {
          Bl(t, s.queryKey) && Object.assign(r, s.defaultOptions);
        }),
        r
      );
    }
    setMutationDefaults(t, n) {
      this.#a.set(Ei(t), { mutationKey: t, defaultOptions: n });
    }
    getMutationDefaults(t) {
      const n = [...this.#a.values()],
        r = {};
      return (
        n.forEach((s) => {
          Bl(t, s.mutationKey) && Object.assign(r, s.defaultOptions);
        }),
        r
      );
    }
    defaultQueryOptions(t) {
      if (t._defaulted) return t;
      const n = {
        ...this.#n.queries,
        ...this.getQueryDefaults(t.queryKey),
        ...t,
        _defaulted: !0,
      };
      return (
        n.queryHash || (n.queryHash = em(n.queryKey, n)),
        n.refetchOnReconnect === void 0 &&
          (n.refetchOnReconnect = n.networkMode !== "always"),
        n.throwOnError === void 0 && (n.throwOnError = !!n.suspense),
        !n.networkMode && n.persister && (n.networkMode = "offlineFirst"),
        n.queryFn === tm && (n.enabled = !1),
        n
      );
    }
    defaultMutationOptions(t) {
      return t?._defaulted
        ? t
        : {
            ...this.#n.mutations,
            ...(t?.mutationKey && this.getMutationDefaults(t.mutationKey)),
            ...t,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  B1 = w.createContext(void 0),
  H1 = (t) => {
    const n = w.useContext(B1);
    if (!n)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return n;
  },
  TR = ({ client: t, children: n }) => (
    w.useEffect(
      () => (
        t.mount(),
        () => {
          t.unmount();
        }
      ),
      [t]
    ),
    m.jsx(B1.Provider, { value: t, children: n })
  ),
  P1 = w.createContext(!1),
  RR = () => w.useContext(P1);
P1.Provider;
function AR() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t,
  };
}
var CR = w.createContext(AR()),
  NR = () => w.useContext(CR),
  OR = (t, n) => {
    (t.suspense || t.throwOnError || t.experimental_prefetchInRender) &&
      (n.isReset() || (t.retryOnMount = !1));
  },
  jR = (t) => {
    w.useEffect(() => {
      t.clearReset();
    }, [t]);
  },
  DR = ({
    result: t,
    errorResetBoundary: n,
    throwOnError: r,
    query: s,
    suspense: o,
  }) =>
    t.isError &&
    !n.isReset() &&
    !t.isFetching &&
    s &&
    ((o && t.data === void 0) || M1(r, [t.error, s])),
  MR = (t) => {
    if (t.suspense) {
      const r = (o) => (o === "static" ? o : Math.max(o ?? 1e3, 1e3)),
        s = t.staleTime;
      (t.staleTime = typeof s == "function" ? (...o) => r(s(...o)) : r(s)),
        typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3));
    }
  },
  UR = (t, n) => t.isLoading && t.isFetching && !n,
  LR = (t, n) => t?.suspense && n.isPending,
  _v = (t, n, r) =>
    n.fetchOptimistic(t).catch(() => {
      r.clearReset();
    });
function zR(t, n, r) {
  const s = RR(),
    o = NR(),
    u = H1(),
    d = u.defaultQueryOptions(t);
  u.getDefaultOptions().queries?._experimental_beforeQuery?.(d),
    (d._optimisticResults = s ? "isRestoring" : "optimistic"),
    MR(d),
    OR(d, o),
    jR(o);
  const h = !u.getQueryCache().get(d.queryHash),
    [p] = w.useState(() => new n(u, d)),
    g = p.getOptimisticResult(d),
    v = !s && t.subscribed !== !1;
  if (
    (w.useSyncExternalStore(
      w.useCallback(
        (b) => {
          const x = v ? p.subscribe(qt.batchCalls(b)) : nn;
          return p.updateResult(), x;
        },
        [p, v]
      ),
      () => p.getCurrentResult(),
      () => p.getCurrentResult()
    ),
    w.useEffect(() => {
      p.setOptions(d);
    }, [d, p]),
    LR(d, g))
  )
    throw _v(d, p, o);
  if (
    DR({
      result: g,
      errorResetBoundary: o,
      throwOnError: d.throwOnError,
      query: u.getQueryCache().get(d.queryHash),
      suspense: d.suspense,
    })
  )
    throw g.error;
  return (
    u.getDefaultOptions().queries?._experimental_afterQuery?.(d, g),
    d.experimental_prefetchInRender &&
      !Si &&
      UR(g, s) &&
      (h ? _v(d, p, o) : u.getQueryCache().get(d.queryHash)?.promise)
        ?.catch(nn)
        .finally(() => {
          p.updateResult();
        }),
    d.notifyOnChangeProps ? g : p.trackResult(g)
  );
}
function kR(t, n) {
  return zR(t, gR);
}
function IR(t, n) {
  const r = H1(),
    [s] = w.useState(() => new ER(r, t));
  w.useEffect(() => {
    s.setOptions(t);
  }, [s, t]);
  const o = w.useSyncExternalStore(
      w.useCallback((d) => s.subscribe(qt.batchCalls(d)), [s]),
      () => s.getCurrentResult(),
      () => s.getCurrentResult()
    ),
    u = w.useCallback(
      (d, h) => {
        s.mutate(d, h).catch(nn);
      },
      [s]
    );
  if (o.error && M1(s.options.throwOnError, [o.error])) throw o.error;
  return { ...o, mutate: u, mutateAsync: o.mutate };
}
const Rl = Ue.create({
    baseURL: "https://blood-donation-server-ashy.vercel.app",
    withCredentials: !0,
  }),
  BR = () => {
    const { user: t, logOut: n, loading: r } = Zt(),
      s = Mn();
    return (
      w.useEffect(() => {
        if (!r && t?.accessToken) {
          const o = Rl.interceptors.request.use(
              (d) => ((d.headers.Authorization = `Bearer ${t.accessToken}`), d)
            ),
            u = Rl.interceptors.response.use(
              (d) => d,
              (d) => (
                (d?.response?.status === 401 || d?.response?.status === 403) &&
                  (n()
                    .then(() => {
                      console.log("Logged out successfully.");
                    })
                    .catch(console.error),
                  s("/login")),
                Promise.reject(d)
              )
            );
          return () => {
            Rl.interceptors.request.eject(o), Rl.interceptors.response.eject(u);
          };
        }
      }, [t, r, n, s]),
      Rl
    );
  },
  bc = () => {
    const { user: t, loading: n } = Zt(),
      r = BR(),
      { data: s, isLoading: o } = kR({
        enabled: !n && !!t?.email,
        queryKey: ["role", t?.email],
        queryFn: async () => (await r("/user/role")).data.role,
      });
    return [s, o];
  },
  HR = () => {
    const { setLoading: t } = Zt(),
      [n, r] = w.useState([]),
      [s, o] = bc();
    w.useEffect(() => {
      (async () => {
        t(!0);
        try {
          const v = await Ue.get(
            "https://blood-donation-server-ashy.vercel.app/donation-requests?status=pending"
          );
          r(v.data);
        } catch (v) {
          console.error(v);
        } finally {
          t(!1);
        }
      })();
    }, []);
    const { logOut: u } = Zt(),
      [d, h] = w.useState(!1),
      p = () => {
        h(!d);
      };
    return o
      ? m.jsx(Ql, {})
      : m.jsxs(m.Fragment, {
          children: [
            m.jsxs("div", {
              className:
                "bg-gray-100 text-gray-800 flex justify-between md:hidden",
              children: [
                m.jsx("div", {
                  children: m.jsx("div", {
                    className: "block cursor-pointer p-4 font-bold",
                    children: m.jsx(Et, {
                      to: "/",
                      children: m.jsx("img", {
                        src: gh,
                        alt: "logo",
                        width: "100",
                        height: "100",
                      }),
                    }),
                  }),
                }),
                m.jsx("button", {
                  onClick: p,
                  className:
                    "mobile-menu-button p-4 focus:outline-none focus:bg-gray-200",
                  children: m.jsx(c3, { className: "h-5 w-5" }),
                }),
              ],
            }),
            m.jsx("div", {
              className: `z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
                d && "-translate-x-full"
              }  md:translate-x-0  transition duration-200 ease-in-out`,
              children: m.jsxs("div", {
                className: "flex flex-col h-full",
                children: [
                  m.jsx("div", {
                    children: m.jsx("div", {
                      className:
                        "w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto",
                      children: m.jsx(Et, {
                        to: "/",
                        children: m.jsx("img", {
                          src: gh,
                          alt: "logo",
                          width: "100",
                          height: "100",
                        }),
                      }),
                    }),
                  }),
                  m.jsx("div", {
                    className: "flex flex-col justify-between flex-1 mt-6",
                    children: m.jsxs("nav", {
                      children: [
                        m.jsx(Pr, {
                          icon: VT,
                          label: "Dashboard",
                          address: "/dashboard",
                        }),
                        s === "donor" && m.jsx(tR, {}),
                        s === "volunteer" && m.jsx(WT, {}),
                        s === "admin" && m.jsx(JT, {}),
                      ],
                    }),
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("hr", {}),
                      m.jsx(Pr, {
                        icon: qT,
                        label: "Profile",
                        address: "/dashboard/profile",
                      }),
                      m.jsxs("button", {
                        onClick: u,
                        className:
                          "flex cursor-pointer w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform",
                        children: [
                          m.jsx(PT, { className: "w-5 h-5" }),
                          m.jsx("span", {
                            className: "mx-4 font-medium",
                            children: "Logout",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
  },
  PR = () =>
    m.jsxs("div", {
      className: "relative min-h-screen md:flex bg-white",
      children: [
        m.jsx(HR, {}),
        m.jsx("div", {
          className: "flex-1  md:ml-64",
          children: m.jsx("div", { className: "p-5", children: m.jsx(Cb, {}) }),
        }),
      ],
    }),
  qR = () => {
    const [t, n] = w.useState([]);
    w.useEffect(() => {
      Ue.get("/Districts.json")
        .then((_) => n(_.data))
        .catch((_) => console.log(_));
    }, []),
      console.log(t);
    const [r, s] = w.useState(""),
      { user: o, loading: u } = Zt(),
      {
        register: d,
        handleSubmit: h,
        control: p,
        reset: g,
        watch: v,
        setValue: b,
      } = Kh({ defaultValues: { district: "", recipient_upazila: "" } }),
      x = v("district"),
      R = t.find((_) => _.name === x)?.upazilas || [];
    w.useEffect(() => {
      const _ = async () => {
        try {
          const { data: U } = await Ue.get(
              "https://blood-donation-server-ashy.vercel.app/users"
            ),
            z = U.find((Y) => Y.email === o?.email);
          z && s(z.status);
        } catch (U) {
          console.error(U);
        }
      };
      o?.email && _();
    }, [o]);
    const E = IR({
        mutationFn: async (_) =>
          (
            await Ue.post(
              "https://blood-donation-server-ashy.vercel.app/donation-requests",
              _
            )
          ).data,
      }),
      T = async (_) => {
        if (r === "blocked") {
          wt.error("You are blocked. You cannot create donation request.");
          return;
        }
        const U = {
          requesterName: o?.displayName,
          requesterEmail: o?.email,
          recipientUpazila: _.recipient_upazila,
          district: _.district,
          hospitalName: _.hospital_name,
          fullAddress: _.full_address,
          bloodGroup: _.blood_group,
          donationDate: _.donation_date,
          donationTime: _.donation_time,
          requestMessage: _.request_message,
        };
        try {
          (await E.mutateAsync(U)).success &&
            (wt.success("Donation Request Created"), g());
        } catch {
          wt.error("Failed to create donation request");
        }
      };
    return u
      ? m.jsx(Ql, {})
      : m.jsx("div", {
          className:
            "min-h-screen bg-gradient-to-r from-red-50 to-red-100 flex items-center justify-center p-4",
          children: m.jsxs("div", {
            className: "max-w-3xl w-full bg-white p-8 rounded-3xl shadow-2xl",
            children: [
              m.jsx("h2", {
                className: "text-3xl font-bold mb-6 text-center text-red-700",
                children: "Create Donation Request",
              }),
              m.jsxs("form", {
                onSubmit: h(T),
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  m.jsxs("div", {
                    className: "col-span-2",
                    children: [
                      m.jsx("label", {
                        className: "font-semibold text-gray-700",
                        children: "Requester Name",
                      }),
                      m.jsx("input", {
                        readOnly: !0,
                        value: o?.displayName || "",
                        className:
                          "w-full border border-gray-300 rounded-xl p-3 mt-1 bg-gray-100",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "col-span-2",
                    children: [
                      m.jsx("label", {
                        className: "font-semibold text-gray-700",
                        children: "Requester Email",
                      }),
                      m.jsx("input", {
                        readOnly: !0,
                        value: o?.email || "",
                        className:
                          "w-full border border-gray-300 rounded-xl p-3 mt-1 bg-gray-100",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("label", {
                        className: "font-semibold text-gray-700",
                        children: "District",
                      }),
                      m.jsx(k0, {
                        control: p,
                        name: "district",
                        rules: { required: !0 },
                        render: ({ field: _ }) =>
                          m.jsxs("select", {
                            ..._,
                            onChange: (U) => {
                              _.onChange(U), b("recipient_upazila", "");
                            },
                            className:
                              "w-full border border-gray-300 rounded-xl p-3 mt-1",
                            children: [
                              m.jsx("option", {
                                value: "",
                                children: "Select District",
                              }),
                              t.map((U) =>
                                m.jsx(
                                  "option",
                                  { value: U.name, children: U.name },
                                  U.id
                                )
                              ),
                            ],
                          }),
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("label", {
                        className: "font-semibold text-gray-700",
                        children: "Recipient Upazila",
                      }),
                      m.jsx(k0, {
                        control: p,
                        name: "recipient_upazila",
                        rules: { required: !0 },
                        render: ({ field: _ }) =>
                          m.jsxs("select", {
                            ..._,
                            className:
                              "w-full border border-gray-300 rounded-xl p-3 mt-1",
                            disabled: !x,
                            children: [
                              m.jsx("option", {
                                value: "",
                                children: "Select Upazila",
                              }),
                              R.map((U) =>
                                m.jsx(
                                  "option",
                                  { value: U.name, children: U.name },
                                  U.id
                                )
                              ),
                            ],
                          }),
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("label", {
                        className: "font-semibold text-gray-700",
                        children: "Hospital Name",
                      }),
                      m.jsx("input", {
                        ...d("hospital_name", { required: !0 }),
                        className:
                          "w-full border border-gray-300 rounded-xl p-3 mt-1",
                        placeholder: "Hospital Name",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "col-span-2",
                    children: [
                      m.jsx("label", {
                        className: "font-semibold text-gray-700",
                        children: "Full Address",
                      }),
                      m.jsx("textarea", {
                        ...d("full_address", { required: !0 }),
                        className:
                          "w-full border border-gray-300 rounded-xl p-3 mt-1",
                        placeholder: "Full address",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("label", {
                        className: "font-semibold text-gray-700",
                        children: "Blood Group",
                      }),
                      m.jsxs("select", {
                        ...d("blood_group", { required: !0 }),
                        className:
                          "w-full border border-gray-300 rounded-xl p-3 mt-1",
                        children: [
                          m.jsx("option", {
                            value: "",
                            children: "Select Blood Group",
                          }),
                          m.jsx("option", { children: "A+" }),
                          m.jsx("option", { children: "A-" }),
                          m.jsx("option", { children: "B+" }),
                          m.jsx("option", { children: "B-" }),
                          m.jsx("option", { children: "O+" }),
                          m.jsx("option", { children: "O-" }),
                          m.jsx("option", { children: "AB+" }),
                          m.jsx("option", { children: "AB-" }),
                        ],
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("label", {
                        className: "font-semibold text-gray-700",
                        children: "Donation Date",
                      }),
                      m.jsx("input", {
                        type: "date",
                        ...d("donation_date", { required: !0 }),
                        className:
                          "w-full border border-gray-300 rounded-xl p-3 mt-1",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    children: [
                      m.jsx("label", {
                        className: "font-semibold text-gray-700",
                        children: "Donation Time",
                      }),
                      m.jsx("input", {
                        type: "time",
                        ...d("donation_time", { required: !0 }),
                        className:
                          "w-full border border-gray-300 rounded-xl p-3 mt-1",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "col-span-2",
                    children: [
                      m.jsx("label", {
                        className: "font-semibold text-gray-700",
                        children: "Request Message",
                      }),
                      m.jsx("textarea", {
                        ...d("request_message", { required: !0 }),
                        className:
                          "w-full border border-gray-300 rounded-xl p-3 mt-1",
                        placeholder: "Why do you need blood?",
                      }),
                    ],
                  }),
                  m.jsx("div", {
                    className: "col-span-2",
                    children: m.jsx("button", {
                      type: "submit",
                      disabled: r === "blocked",
                      className: `w-full font-bold py-3 rounded-xl transition ${
                        r === "blocked"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-red-600 hover:bg-red-700 text-white"
                      }`,
                      children: "Submit Request",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
  },
  VR = () => m.jsx("div", { children: m.jsx(qR, {}) }),
  FR = () => {
    const [t, n] = w.useState([]),
      [r, s] = w.useState(!0),
      [o, u] = w.useState("all");
    w.useEffect(() => {
      (async () => {
        try {
          const { data: v } = await Ue.get(
            "https://blood-donation-server-ashy.vercel.app/users"
          );
          n(v), s(!1);
        } catch (v) {
          console.error(v), s(!1);
        }
      })();
    }, []);
    const d = async (g, v) => {
        const b = v === "blocked" ? "active" : "blocked";
        try {
          await Ue.patch(
            `https://blood-donation-server-ashy.vercel.app/users/${g}/status`,
            { status: b }
          ),
            n((x) => x.map((R) => (R._id === g ? { ...R, status: b } : R)));
        } catch (x) {
          console.error(x), alert("Failed to update status");
        }
      },
      h = async (g, v) => {
        try {
          await Ue.patch(
            `https://blood-donation-server-ashy.vercel.app/users/${g}/role`,
            { role: v }
          ),
            n((b) => b.map((x) => (x._id === g ? { ...x, role: v } : x)));
        } catch (b) {
          console.error(b), alert("Failed to update role");
        }
      },
      p = t.filter((g) => (o === "all" ? !0 : (g.status || "active") === o));
    return r
      ? m.jsx("div", {
          className: "flex justify-center items-center h-screen",
          children: m.jsx("p", {
            className: "text-xl font-semibold",
            children: "Loading users...",
          }),
        })
      : m.jsxs("div", {
          className: "p-6 bg-red-50 min-h-screen",
          children: [
            m.jsx("h2", {
              className: "text-3xl font-bold mb-4 text-center text-red-700",
              children: "All Users",
            }),
            m.jsx("div", {
              className: "mb-4 flex justify-end",
              children: m.jsxs("select", {
                value: o,
                onChange: (g) => u(g.target.value),
                className: "border px-3 py-2 rounded focus:outline-none",
                children: [
                  m.jsx("option", { value: "all", children: "All Users" }),
                  m.jsx("option", { value: "active", children: "Active" }),
                  m.jsx("option", { value: "blocked", children: "Blocked" }),
                ],
              }),
            }),
            m.jsx("div", {
              className: "overflow-x-auto shadow-lg rounded-lg bg-white",
              children: m.jsxs("table", {
                className: "min-w-full",
                children: [
                  m.jsx("thead", {
                    className: "bg-red-600 text-white",
                    children: m.jsxs("tr", {
                      children: [
                        m.jsx("th", {
                          className: "py-3 px-4 text-left",
                          children: "Avatar",
                        }),
                        m.jsx("th", {
                          className: "py-3 px-4 text-left",
                          children: "Name",
                        }),
                        m.jsx("th", {
                          className: "py-3 px-4 text-left",
                          children: "Email",
                        }),
                        m.jsx("th", {
                          className: "py-3 px-4 text-left",
                          children: "Role",
                        }),
                        m.jsx("th", {
                          className: "py-3 px-4 text-left",
                          children: "Status",
                        }),
                        m.jsx("th", {
                          className: "py-3 px-4 text-left",
                          children: "Actions",
                        }),
                      ],
                    }),
                  }),
                  m.jsxs("tbody", {
                    children: [
                      p.map((g) =>
                        m.jsxs(
                          "tr",
                          {
                            className:
                              "border-b hover:bg-gray-50 transition duration-150",
                            children: [
                              m.jsx("td", {
                                className: "py-3 px-4",
                                children: m.jsx("img", {
                                  src: g.image || "https://i.pravatar.cc/100",
                                  alt: g.name,
                                  className:
                                    "w-10 h-10 rounded-full object-cover",
                                }),
                              }),
                              m.jsx("td", {
                                className: "py-3 px-4",
                                children: g.name,
                              }),
                              m.jsx("td", {
                                className: "py-3 px-4",
                                children: g.email,
                              }),
                              m.jsx("td", {
                                className: "py-3 px-4 capitalize",
                                children: g.role,
                              }),
                              m.jsx("td", {
                                className: "py-3 px-4",
                                children: m.jsx("span", {
                                  className: `px-2 py-1 rounded-full text-white text-sm ${
                                    (g.status || "active") === "blocked"
                                      ? "bg-red-500"
                                      : "bg-green-500"
                                  }`,
                                  children: g.status || "active",
                                }),
                              }),
                              m.jsxs("td", {
                                className: "py-3 px-4 flex flex-wrap gap-2",
                                children: [
                                  m.jsx("button", {
                                    onClick: () => d(g._id, g.status),
                                    className: `px-3 py-1 rounded text-white text-sm ${
                                      (g.status || "active") === "blocked"
                                        ? "bg-green-500 hover:bg-green-600"
                                        : "bg-red-500 hover:bg-red-600"
                                    }`,
                                    children:
                                      (g.status || "active") === "blocked"
                                        ? "Unblock"
                                        : "Block",
                                  }),
                                  m.jsx("button", {
                                    onClick: () => h(g._id, "volunteer"),
                                    className:
                                      "px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white text-sm",
                                    children: "Make Volunteer",
                                  }),
                                  m.jsx("button", {
                                    onClick: () => h(g._id, "admin"),
                                    className:
                                      "px-3 py-1 rounded bg-purple-500 hover:bg-purple-600 text-white text-sm",
                                    children: "Make Admin",
                                  }),
                                ],
                              }),
                            ],
                          },
                          g._id
                        )
                      ),
                      p.length === 0 &&
                        m.jsx("tr", {
                          children: m.jsx("td", {
                            colSpan: "6",
                            className: "text-center py-6 text-gray-500",
                            children: "No users found",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
  },
  GR = "/assets/cover-d2NzYa9e.jpg",
  YR = () => {
    const { user: t, setLoading: n } = Zt(),
      [r] = bc(),
      [s, o] = w.useState({}),
      [u, d] = w.useState(!1),
      [h, p] = w.useState(null);
    w.useEffect(() => {
      (async () => {
        try {
          const { data: R } = await Ue.get(
              "https://blood-donation-server-ashy.vercel.app/users"
            ),
            E = R.find((T) => T.email === t?.email);
          o(E), n(!1);
        } catch (R) {
          console.error(R), n(!1);
        }
      })();
    }, [t?.email]),
      console.log(s.email);
    const g = (x) => {
        const { name: R, value: E } = x.target;
        o((T) => ({ ...T, [R]: E }));
      },
      v = (x) => p(x.target.files[0]),
      b = async () => {
        try {
          const x = {
            name: s.name,
            blood_group: s.blood_group,
            district: s.district,
            upazila: s.upazila,
          };
          if (h) {
            const E = await A1(h);
            x.avatar = E;
          }
          const R = await Ue.patch(
            `https://blood-donation-server-ashy.vercel.app/users/${s.email}`,
            x
          );
          wt.success(R.data.message || "Profile updated successfully!"),
            o((E) => ({ ...E, ...x })),
            d(!1);
        } catch (x) {
          console.error(x.response?.data || x.message),
            wt.error(x.response?.data?.message || "Failed to update profile");
        }
      };
    return m.jsxs("div", {
      className: "flex justify-center items-center min-h-screen bg-gray-100",
      children: [
        m.jsxs("div", {
          className: "bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5",
          children: [
            m.jsx("img", {
              src: GR,
              alt: "cover",
              className: "w-full h-56 mb-4 rounded-t-lg object-cover",
            }),
            m.jsxs("div", {
              className: "flex flex-col items-center -mt-16 p-4",
              children: [
                m.jsx("div", {
                  className: "relative",
                  children: m.jsx("img", {
                    src: s.avatar || s.image || "",
                    alt: "profile",
                    className:
                      "h-24 w-24 rounded-full border-2 border-white object-cover",
                  }),
                }),
                m.jsx("p", {
                  className:
                    "p-2 px-4 mt-2 text-xs text-white bg-lime-500 rounded-full",
                  children: r,
                }),
                m.jsxs("div", {
                  className: "w-full p-2 mt-4 text-gray-600",
                  children: [
                    m.jsxs("p", {
                      children: [
                        m.jsx("strong", { children: "Name:" }),
                        " ",
                        s.name,
                      ],
                    }),
                    m.jsxs("p", {
                      children: [
                        m.jsx("strong", { children: "Email:" }),
                        " ",
                        s.email,
                      ],
                    }),
                    m.jsxs("p", {
                      children: [
                        m.jsx("strong", { children: "Blood Group:" }),
                        " ",
                        s.blood_group,
                      ],
                    }),
                    m.jsxs("p", {
                      children: [
                        m.jsx("strong", { children: "District:" }),
                        " ",
                        s.district,
                      ],
                    }),
                    m.jsxs("p", {
                      children: [
                        m.jsx("strong", { children: "Upazila:" }),
                        " ",
                        s.upazila,
                      ],
                    }),
                    m.jsx("button", {
                      onClick: () => d(!0),
                      className:
                        "mt-4 bg-lime-500 px-6 py-1 rounded text-white hover:bg-lime-800",
                      children: "Update Profile",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        u &&
          m.jsx("div", {
            className:
              "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",
            children: m.jsxs("div", {
              className: "bg-white rounded-lg w-96 p-6 relative",
              children: [
                m.jsx("h2", {
                  className: "text-xl font-bold mb-4",
                  children: "Update Profile",
                }),
                m.jsxs("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    m.jsx("label", { children: "Name" }),
                    m.jsx("input", {
                      type: "text",
                      name: "name",
                      value: s.name || "",
                      onChange: g,
                      className: "border rounded p-2 w-full",
                    }),
                    m.jsx("label", { children: "Blood Group" }),
                    m.jsx("select", {
                      name: "blood_group",
                      value: s.blood_group || "",
                      onChange: g,
                      className: "border rounded p-2 w-full",
                      children: [
                        "A+",
                        "A-",
                        "B+",
                        "B-",
                        "AB+",
                        "AB-",
                        "O+",
                        "O-",
                      ].map((x) =>
                        m.jsx("option", { value: x, children: x }, x)
                      ),
                    }),
                    m.jsx("label", { children: "District" }),
                    m.jsx("input", {
                      type: "text",
                      name: "district",
                      value: s.district || "",
                      onChange: g,
                      className: "border rounded p-2 w-full",
                    }),
                    m.jsx("label", { children: "Upazila" }),
                    m.jsx("input", {
                      type: "text",
                      name: "upazila",
                      value: s.upazila || "",
                      onChange: g,
                      className: "border rounded p-2 w-full",
                    }),
                    m.jsx("label", { children: "Avatar" }),
                    m.jsx("input", {
                      type: "file",
                      onChange: v,
                      className: "border rounded p-2 w-full",
                    }),
                  ],
                }),
                m.jsxs("div", {
                  className: "flex justify-end gap-2 mt-4",
                  children: [
                    m.jsx("button", {
                      onClick: () => d(!1),
                      className:
                        "bg-gray-400 px-4 py-1 rounded text-white hover:bg-gray-600",
                      children: "Cancel",
                    }),
                    m.jsx("button", {
                      onClick: b,
                      className:
                        "bg-lime-500 px-4 py-1 rounded text-white hover:bg-lime-800",
                      children: "Save",
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  Tv = () => {
    const [t] = bc(),
      n = { totalUsers: 1200, totalFunding: 5e4, totalRequests: 320 };
    return m.jsxs("div", {
      className: "p-6",
      children: [
        m.jsxs("h2", {
          className: "text-2xl font-bold mb-6",
          children: [
            "Welcome, ",
            m.jsxs("span", {
              className: "text-lime-600",
              children: [
                t === "admin" && "Admin",
                t === "volunteer" && "Volunteer",
              ],
            }),
          ],
        }),
        m.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
          children: [
            m.jsxs("div", {
              className:
                "bg-white shadow rounded-xl p-5 flex items-center gap-4",
              children: [
                m.jsx(ZT, { className: "text-4xl text-blue-500" }),
                m.jsxs("div", {
                  children: [
                    m.jsx("p", {
                      className: "text-gray-500",
                      children: "Total Users",
                    }),
                    m.jsx("h3", {
                      className: "text-2xl font-bold",
                      children: n.totalUsers,
                    }),
                  ],
                }),
              ],
            }),
            m.jsxs("div", {
              className:
                "bg-white shadow rounded-xl p-5 flex items-center gap-4",
              children: [
                m.jsx(KT, { className: "text-4xl text-green-500" }),
                m.jsxs("div", {
                  children: [
                    m.jsx("p", {
                      className: "text-gray-500",
                      children: "Total Funding",
                    }),
                    m.jsxs("h3", {
                      className: "text-2xl font-bold",
                      children: ["$", n.totalFunding],
                    }),
                  ],
                }),
              ],
            }),
            m.jsxs("div", {
              className:
                "bg-white shadow rounded-xl p-5 flex items-center gap-4",
              children: [
                m.jsx($T, { className: "text-4xl text-red-500" }),
                m.jsxs("div", {
                  children: [
                    m.jsx("p", {
                      className: "text-gray-500",
                      children: "Blood Requests",
                    }),
                    m.jsx("h3", {
                      className: "text-2xl font-bold",
                      children: n.totalRequests,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  QR = () => {
    const { user: t } = Zt(),
      n = Mn(),
      [r, s] = w.useState([]),
      [o, u] = w.useState(!0);
    w.useEffect(() => {
      const p = async () => {
        try {
          const { data: g } = await Ue.get(
            "https://blood-donation-server-ashy.vercel.app/donation-requests",
            { params: { email: t?.email, limit: 3 } }
          );
          s(g);
        } catch (g) {
          console.error(g);
        } finally {
          u(!1);
        }
      };
      t?.email && p();
    }, [t?.email]);
    const d = async (p, g) => {
      try {
        await Ue.patch(
          `https://blood-donation-server-ashy.vercel.app/donation-requests/${p}`,
          { status: g }
        ),
          s((v) => v.map((b) => (b._id === p ? { ...b, status: g } : b))),
          Dt.success(`Marked as ${g}`);
      } catch {
        Dt.error("Status update failed");
      }
    };
    console.log(r);
    const h = async (p) => {
      if (
        window.confirm("Are you sure you want to delete this donation request?")
      )
        try {
          await Ue.delete(
            `https://blood-donation-server-ashy.vercel.app/donation-requests/${p}`
          ),
            s((v) => v.filter((b) => b._id !== p)),
            Dt.success("Delete successful");
        } catch {
          Dt.error("Delete failed");
        }
    };
    return o
      ? m.jsx("p", { children: "Loading..." })
      : m.jsxs("div", {
          className: "p-6",
          children: [
            m.jsxs("h1", {
              className: "text-3xl font-bold mb-6",
              children: ["👋 Welcome, ", t?.displayName, "!"],
            }),
            m.jsxs("div", {
              className: "bg-white shadow-md rounded-xl p-6 mb-10",
              children: [
                m.jsx("h2", {
                  className: "text-xl font-bold mb-4",
                  children: "Your Recent Donation Requests",
                }),
                m.jsxs("div", {
                  className: "overflow-x-auto",
                  children: [
                    m.jsxs("table", {
                      className: "table w-full",
                      children: [
                        m.jsx("thead", {
                          children: m.jsxs("tr", {
                            className: "bg-gray-100",
                            children: [
                              m.jsx("th", { children: "#" }),
                              m.jsx("th", { children: "Recipient" }),
                              m.jsx("th", { children: "Location" }),
                              m.jsx("th", { children: "Date & Time" }),
                              m.jsx("th", { children: "Blood" }),
                              m.jsx("th", { children: "Status" }),
                              m.jsx("th", { children: "Donor Info" }),
                              m.jsx("th", { children: "Actions" }),
                            ],
                          }),
                        }),
                        m.jsx("tbody", {
                          children: r.map((p, g) =>
                            m.jsxs(
                              "tr",
                              {
                                children: [
                                  m.jsx("td", { children: g + 1 }),
                                  m.jsx("td", {
                                    className: "font-semibold",
                                    children: p?.requesterName,
                                  }),
                                  m.jsxs("td", {
                                    children: [p.district, ", ", p.upazila],
                                  }),
                                  m.jsxs("td", {
                                    children: [
                                      p.donationDate,
                                      m.jsx("br", {}),
                                      m.jsx("span", {
                                        className: "text-sm text-gray-500",
                                        children: p.donationTime,
                                      }),
                                    ],
                                  }),
                                  m.jsx("td", { children: p.bloodGroup }),
                                  m.jsxs("td", {
                                    children: [
                                      p.status === "pending" &&
                                        m.jsx("span", {
                                          className: "badge badge-warning",
                                          children: "Pending",
                                        }),
                                      p.status === "inprogress" &&
                                        m.jsx("span", {
                                          className: "badge badge-primary",
                                          children: "In Progress",
                                        }),
                                      p.status === "done" &&
                                        m.jsx("span", {
                                          className: "badge badge-success",
                                          children: "Done",
                                        }),
                                      p.status === "canceled" &&
                                        m.jsx("span", {
                                          className: "badge badge-error",
                                          children: "Canceled",
                                        }),
                                    ],
                                  }),
                                  m.jsx("td", {
                                    children:
                                      p.status === "inprogress"
                                        ? m.jsxs("div", {
                                            children: [
                                              m.jsx("p", {
                                                className: "font-semibold",
                                                children: t?.displayName,
                                              }),
                                              m.jsx("p", {
                                                className:
                                                  "text-sm text-gray-500",
                                                children: t?.email,
                                              }),
                                            ],
                                          })
                                        : m.jsx("span", {
                                            className: "text-gray-400 italic",
                                            children: "—",
                                          }),
                                  }),
                                  m.jsxs("td", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                      m.jsx("button", {
                                        className: "btn btn-info btn-sm",
                                        onClick: () =>
                                          n(
                                            `/dashboard/all-users/donation-details/${p._id}`,
                                            { state: { mode: "view" } }
                                          ),
                                        children: "View",
                                      }),
                                      m.jsx("button", {
                                        className: "btn btn-warning btn-sm",
                                        onClick: () =>
                                          n(
                                            `/dashboard/all-users/donation-details/${p._id}`,
                                            { state: { mode: "edit" } }
                                          ),
                                        children: "Edit",
                                      }),
                                      m.jsx("button", {
                                        className: "btn btn-error btn-sm",
                                        onClick: () => h(p._id),
                                        children: "Delete",
                                      }),
                                      p.status === "inprogress" &&
                                        m.jsxs(m.Fragment, {
                                          children: [
                                            m.jsx("button", {
                                              className:
                                                "btn btn-success btn-sm",
                                              onClick: () => d(p._id, "done"),
                                              children: "Done",
                                            }),
                                            m.jsx("button", {
                                              className:
                                                "btn btn-outline btn-sm",
                                              onClick: () =>
                                                d(p._id, "canceled"),
                                              children: "Cancel",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              p._id
                            )
                          ),
                        }),
                      ],
                    }),
                    m.jsx("div", {
                      className: "mt-6 text-center",
                      children: m.jsx(Et, {
                        to: "my-donation-request",
                        children: m.jsx("button", {
                          className: "btn btn-neutral",
                          children: "View My All Requests",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  KR = () => {
    const [t] = bc();
    return m.jsxs("div", {
      children: [
        t === "donor" && m.jsx(QR, {}),
        t === "volunteer" && m.jsx(Tv, {}),
        t === "admin" && m.jsx(Tv, {}),
      ],
    });
  },
  $R = ({ children: t }) =>
    m.jsx("div", {
      className: "max-w-screen-2xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4",
      children: t,
    }),
  XR = "/assets/placeholder-CFxm3OyV.jpg",
  ZR = () => {
    const { user: t, logOut: n, setLoading: r } = Zt(),
      [s, o] = w.useState(!1),
      [u, d] = w.useState([]),
      [h, p] = w.useState({});
    return (
      w.useEffect(() => {
        (async () => {
          try {
            const { data: v } = await Ue.get(
                "https://blood-donation-server-ashy.vercel.app/users"
              ),
              b = v.map((x) => p(x.image));
            d(v), r(!1);
          } catch (v) {
            console.error(v), r(!1);
          }
        })();
      }, []),
      console.log(h),
      m.jsx("div", {
        className: "fixed w-full bg-white z-10 shadow-sm",
        children: m.jsx("div", {
          className: "py-4",
          children: m.jsx($R, {
            children: m.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                m.jsx(Et, {
                  to: "/",
                  className: "flex items-center gap-2",
                  children: m.jsx("img", {
                    className: "rounded-full",
                    src: gh,
                    alt: "logo",
                    "md:width": "200",
                    "md:height": "100",
                  }),
                }),
                m.jsxs("div", {
                  className: "flex items-center gap-6",
                  children: [
                    m.jsxs("div", {
                      className:
                        "hidden md:flex items-center gap-6 text-base font-semibold",
                      children: [
                        m.jsx(Et, {
                          to: "/donation-request",
                          className: "hover:text-red-600 transition",
                          children: "Donation Request",
                        }),
                        m.jsx(Et, {
                          to: "/search-page",
                          className: "hover:text-red-600 transition",
                          children: "Search Page",
                        }),
                        t &&
                          m.jsx(Et, {
                            to: "/founding",
                            className: "hover:text-red-600 transition",
                            children: "Funding",
                          }),
                        m.jsx(Et, {
                          to: "/blog",
                          className: "hover:text-red-600 transition",
                          children: "Blog",
                        }),
                      ],
                    }),
                    m.jsxs("div", {
                      className: "relative",
                      children: [
                        m.jsxs("div", {
                          onClick: () => o(!s),
                          className:
                            "p-4 md:py-1 md:px-2 border border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition",
                          children: [
                            m.jsx(h3, {}),
                            m.jsx("div", {
                              className: "hidden md:block",
                              children: m.jsx("img", {
                                className: "rounded-full",
                                referrerPolicy: "no-referrer",
                                src: t?.photoURL ? t?.photoURL || h : XR,
                                alt: "profile",
                                height: "30",
                                width: "30",
                              }),
                            }),
                          ],
                        }),
                        s &&
                          m.jsx("div", {
                            className:
                              "absolute rounded-xl shadow-md w-[40vw] md:w-[12vw] bg-white overflow-hidden right-0 top-12 text-sm",
                            children: m.jsxs("div", {
                              className: "flex flex-col cursor-pointer ",
                              children: [
                                m.jsx(Et, {
                                  to: "/",
                                  className:
                                    "block md:hidden px-4 py-3  transition  hover:text-white hover:bg-red-500 hover:rounded-md font-bold",
                                  children: "Home",
                                }),
                                m.jsx(Et, {
                                  to: "/donation-request",
                                  className:
                                    "block md:hidden px-4 py-3  transition font-bold hover:text-white hover:bg-red-500 hover:rounded-md",
                                  children: "Donation Request",
                                }),
                                m.jsx(Et, {
                                  to: "/search-page",
                                  className:
                                    "block md:hidden px-4 py-3  transition font-bold hover:text-white hover:bg-red-500 hover:rounded-md",
                                  children: "Search Page",
                                }),
                                t &&
                                  m.jsx(Et, {
                                    to: "/founding",
                                    className:
                                      "block md:hidden px-4 py-3  transition font-bold hover:text-white hover:bg-red-500 hover:rounded-md",
                                    children: "Funding",
                                  }),
                                m.jsx(Et, {
                                  to: "/blog",
                                  className:
                                    "block md:hidden px-4 py-3  transition font-bold hover:text-white hover:bg-red-500 hover:rounded-md",
                                  children: "Blog",
                                }),
                                t
                                  ? m.jsxs(m.Fragment, {
                                      children: [
                                        m.jsx(Et, {
                                          to: "/dashboard",
                                          className:
                                            "px-4 py-3  transition font-bold hover:text-white hover:bg-red-500 hover:rounded-md",
                                          children: "Dashboard",
                                        }),
                                        m.jsx("div", {
                                          onClick: n,
                                          className:
                                            "px-4 py-3  transition font-bold hover:text-white hover:bg-red-500 hover:rounded-md cursor-pointer",
                                          children: "Logout",
                                        }),
                                      ],
                                    })
                                  : m.jsxs(m.Fragment, {
                                      children: [
                                        m.jsx(Et, {
                                          to: "/login",
                                          className:
                                            "px-4 py-3  transition font-bold hover:text-white hover:bg-red-500 hover:rounded-md ",
                                          children: "Login",
                                        }),
                                        m.jsx(Et, {
                                          to: "/signup",
                                          className:
                                            "px-4 py-3  transition font-bold hover:text-white hover:bg-red-500 hover:rounded-md",
                                          children: "Sign Up",
                                        }),
                                      ],
                                    }),
                              ],
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      })
    );
  },
  JR = () =>
    m.jsxs("footer", {
      className: "bg-gray-900 text-white pt-10 pb-5",
      children: [
        m.jsxs("div", {
          className:
            "max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [
            m.jsxs("div", {
              children: [
                m.jsx("h2", {
                  className: "text-xl font-bold mb-4",
                  children: "Blood Donation App",
                }),
                m.jsx("p", {
                  className: "text-gray-300",
                  children:
                    "A user-friendly platform connecting donors with those in need of blood. Join our community and help save lives!",
                }),
              ],
            }),
            m.jsxs("div", {
              children: [
                m.jsx("h2", {
                  className: "text-xl font-bold mb-4",
                  children: "Quick Links",
                }),
                m.jsxs("ul", {
                  className: "text-gray-300 space-y-2",
                  children: [
                    m.jsx("li", {
                      children: m.jsx("a", {
                        href: "/",
                        className: "hover:text-red-500",
                        children: "Home",
                      }),
                    }),
                    m.jsx("li", {
                      children: m.jsx("a", {
                        href: "/dashboard",
                        className: "hover:text-red-500",
                        children: "Dashboard",
                      }),
                    }),
                    m.jsx("li", {
                      children: m.jsx("a", {
                        href: "/dashboard/create-donation-request",
                        className: "hover:text-red-500",
                        children: "Create Request",
                      }),
                    }),
                    m.jsx("li", {
                      children: m.jsx("a", {
                        href: "/search",
                        className: "hover:text-red-500",
                        children: "Search Donors",
                      }),
                    }),
                    m.jsx("li", {
                      children: m.jsx("a", {
                        href: "/contact",
                        className: "hover:text-red-500",
                        children: "Contact Us",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            m.jsxs("div", {
              children: [
                m.jsx("h2", {
                  className: "text-xl font-bold mb-4",
                  children: "Contact Us",
                }),
                m.jsx("p", {
                  className: "text-gray-300",
                  children: "Email: support@bloodapp.com",
                }),
                m.jsx("p", {
                  className: "text-gray-300",
                  children: "Phone: +880 123 456 789",
                }),
                m.jsxs("div", {
                  className: "flex space-x-4 mt-4",
                  children: [
                    m.jsx("a", {
                      href: "https://facebook.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:text-blue-500",
                      children: m.jsx(FT, { size: 20 }),
                    }),
                    m.jsx("a", {
                      href: "https://twitter.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:text-blue-400",
                      children: m.jsx(QT, { size: 20 }),
                    }),
                    m.jsx("a", {
                      href: "https://instagram.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:text-pink-500",
                      children: m.jsx(GT, { size: 20 }),
                    }),
                    m.jsx("a", {
                      href: "https://linkedin.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:text-blue-600",
                      children: m.jsx(YT, { size: 20 }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        m.jsxs("div", {
          className:
            "border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm",
          children: [
            "© ",
            new Date().getFullYear(),
            " Blood Donation Application. All rights reserved.",
          ],
        }),
      ],
    }),
  WR = () =>
    m.jsxs("div", {
      children: [
        m.jsx(ZR, {}),
        m.jsx("div", {
          className: "pt-24 min-h-[calc(100vh-68px)]",
          children: m.jsx(Cb, {}),
        }),
        m.jsx(JR, {}),
      ],
    }),
  e6 = () => {
    const t = Mn(),
      [n] = w.useState(null),
      [r, s] = w.useState([]),
      [o, u] = w.useState(!0);
    w.useEffect(() => {
      (async () => {
        try {
          const p = await Ue.get(
            "https://blood-donation-server-ashy.vercel.app/donation-requests?status=pending"
          );
          s(p.data);
        } catch (p) {
          console.error(p);
        } finally {
          u(!1);
        }
      })();
    }, []);
    const d = (h) => {
      t(n ? `/dashboard/all-users/donation-details/${h}` : "/login");
    };
    return m.jsx("div", {
      className: "min-h-screen bg-red-50 py-12 px-4",
      children: m.jsxs("div", {
        className: "max-w-5xl mx-auto",
        children: [
          m.jsx("h2", {
            className: "text-4xl font-bold text-red-700 mb-8 text-center",
            children: "Pending Donation Requests",
          }),
          o
            ? m.jsx("p", { className: "text-center", children: "Loading..." })
            : r.length === 0
            ? m.jsx("p", {
                className: "text-center text-gray-500",
                children: "No pending requests",
              })
            : m.jsx("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                children: r.map((h) =>
                  m.jsxs(
                    "div",
                    {
                      className: "bg-white p-6 rounded-3xl shadow-lg",
                      children: [
                        m.jsx("h3", {
                          className: "text-xl font-semibold text-red-700 mb-2",
                          children: h.requesterName,
                        }),
                        m.jsxs("p", {
                          className: "text-gray-600",
                          children: [
                            m.jsx("b", { children: "Hospital:" }),
                            " ",
                            h.hospitalName,
                          ],
                        }),
                        m.jsxs("p", {
                          className: "text-gray-600",
                          children: [
                            m.jsx("b", { children: "Upazila:" }),
                            " ",
                            h.recipientUpazila,
                          ],
                        }),
                        m.jsxs("p", {
                          className: "text-gray-600",
                          children: [
                            m.jsx("b", { children: "Blood Group:" }),
                            " ",
                            h.bloodGroup,
                          ],
                        }),
                        m.jsxs("p", {
                          className: "text-gray-600",
                          children: [
                            m.jsx("b", { children: "Date:" }),
                            " ",
                            h.donationDate,
                          ],
                        }),
                        m.jsxs("p", {
                          className: "text-gray-600 mb-4",
                          children: [
                            m.jsx("b", { children: "Time:" }),
                            " ",
                            h.donationTime,
                          ],
                        }),
                        m.jsx(Et, {
                          to: `/dashboard/all-users/donation-details/${h._id}`,
                          children: m.jsx("button", {
                            onClick: () => d(h._id),
                            className:
                              "w-full bg-red-500 text-white rounded-xl py-2 font-semibold hover:bg-red-600",
                            children: "View",
                          }),
                        }),
                      ],
                    },
                    h._id
                  )
                ),
              }),
        ],
      }),
    });
  },
  t6 = () => {
    const [t, n] = w.useState([]),
      [r, s] = w.useState(!0);
    return (
      w.useEffect(() => {
        (async () => {
          try {
            const u = await Ue.get(
              "https://blood-donation-server-ashy.vercel.app/donation-requests?status=pending"
            );
            n(u.data);
          } catch (u) {
            console.error(u);
          } finally {
            s(!1);
          }
        })();
      }, []),
      r
        ? m.jsx("p", {
            className: "text-center mt-10",
            children: "Loading donation requests...",
          })
        : t.length
        ? m.jsxs("div", {
            className: "container mx-auto px-4 py-8",
            children: [
              m.jsx("h1", {
                className: "text-3xl font-bold mb-6 text-center",
                children: "Pending Donation Requests",
              }),
              m.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: t.map((o) =>
                  m.jsxs(
                    "div",
                    {
                      className:
                        "bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition",
                      children: [
                        m.jsx("h2", {
                          className: "text-xl font-semibold mb-2",
                          children: o.recipientName,
                        }),
                        m.jsxs("p", {
                          children: [
                            m.jsx("strong", { children: "Location:" }),
                            " ",
                            o.recipientUpazila,
                            ",",
                            " ",
                            o.fullAddress,
                          ],
                        }),
                        m.jsxs("p", {
                          children: [
                            m.jsx("strong", { children: "Blood Group:" }),
                            " ",
                            o.bloodGroup,
                          ],
                        }),
                        m.jsxs("p", {
                          children: [
                            m.jsx("strong", { children: "Hospital:" }),
                            " ",
                            o.hospitalName,
                          ],
                        }),
                        m.jsxs("p", {
                          children: [
                            m.jsx("strong", { children: "Date:" }),
                            " ",
                            o.donationDate,
                            " | ",
                            m.jsx("strong", { children: "Time:" }),
                            " ",
                            o.donationTime,
                          ],
                        }),
                        m.jsxs("p", {
                          className: "mb-3",
                          children: [
                            m.jsx("strong", { children: "Message:" }),
                            " ",
                            o.requestMessage,
                          ],
                        }),
                        m.jsx(Et, {
                          to: `/dashboard/all-users/details-just/${o._id}`,
                          children: m.jsx("button", {
                            className:
                              "bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full",
                            children: "View Details",
                          }),
                        }),
                      ],
                    },
                    o._id
                  )
                ),
              }),
            ],
          })
        : m.jsx("p", {
            className: "text-center mt-10",
            children: "No pending donation requests found.",
          })
    );
  },
  n6 = [
    {
      id: 1,
      title: "Importance of Blood Donation",
      excerpt:
        "Learn why donating blood is essential and how it saves lives every day.",
      author: "Admin",
      date: "2025-12-18",
      image: "https://source.unsplash.com/400x250/?blood-donation",
    },
    {
      id: 2,
      title: "How to Prepare for Blood Donation",
      excerpt:
        "Tips and guidelines for donors before donating blood to ensure safety and comfort.",
      author: "Volunteer Team",
      date: "2025-12-15",
      image: "https://source.unsplash.com/400x250/?donor",
    },
    {
      id: 3,
      title: "Who Can Donate Blood?",
      excerpt:
        "Understand eligibility criteria for blood donation to help save lives efficiently.",
      author: "Health Expert",
      date: "2025-12-12",
      image: "https://source.unsplash.com/400x250/?healthcare",
    },
  ],
  Rv = () =>
    m.jsx("div", {
      className: "bg-gray-100 min-h-screen py-12",
      children: m.jsxs("div", {
        className: "max-w-7xl mx-auto px-4",
        children: [
          m.jsx("h1", {
            className: "text-3xl font-bold text-center mb-8",
            children: "Our Blog",
          }),
          m.jsx("div", {
            className: "grid gap-8 md:grid-cols-3",
            children: n6.map((t) =>
              m.jsxs(
                "div",
                {
                  className:
                    "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",
                  children: [
                    m.jsx("img", {
                      src: t.image,
                      alt: t.title,
                      className: "w-full h-48 object-cover",
                    }),
                    m.jsxs("div", {
                      className: "p-4",
                      children: [
                        m.jsx("h2", {
                          className: "text-xl font-semibold mb-2",
                          children: t.title,
                        }),
                        m.jsx("p", {
                          className: "text-gray-600 text-sm mb-4",
                          children: t.excerpt,
                        }),
                        m.jsxs("div", {
                          className:
                            "flex justify-between items-center text-gray-500 text-xs",
                          children: [
                            m.jsxs("span", { children: ["By ", t.author] }),
                            m.jsx("span", { children: t.date }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                t.id
              )
            ),
          }),
          m.jsx("div", {
            className: "text-center mt-10",
            children: m.jsx("button", {
              className:
                "bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition",
              children: "Load More",
            }),
          }),
        ],
      }),
    }),
  a6 = () => {
    const { user: t, loading: n } = Zt(),
      [r, s] = w.useState([]),
      [o, u] = w.useState(""),
      [d, h] = w.useState(!0);
    w.useEffect(() => {
      (async () => {
        if (t)
          try {
            const b = await t.getIdToken(),
              { data: x } = await Ue.get(
                "https://blood-donation-server-ashy.vercel.app/funds",
                { headers: { authorization: `Bearer ${b}` } }
              );
            s(x);
          } catch (b) {
            console.error(b), Dt.error("Failed to load funds");
          } finally {
            h(!1);
          }
      })();
    }, [t]);
    const p = async () => {
      if (!o || o < 1) {
        Dt.error("Enter valid amount");
        return;
      }
      try {
        const v = await t.getIdToken(),
          { data: b } = await Ue.post(
            "https://blood-donation-server-ashy.vercel.app/create-checkout-session",
            {
              amount: Number(o),
              name: t.displayName || "Anonymous",
              email: t.email,
            },
            { headers: { authorization: `Bearer ${v}` } }
          );
        window.location.href = b.url;
      } catch (v) {
        console.error(v), Dt.error("Payment failed");
      }
    };
    if (n || d)
      return m.jsx("p", {
        className: "text-center mt-10",
        children: "Loading...",
      });
    const g = r.reduce((v, b) => v + b.amount, 0);
    return m.jsx("div", {
      className: "min-h-screen bg-red-50 px-4 py-10",
      children: m.jsxs("div", {
        className: "max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-lg",
        children: [
          m.jsxs("div", {
            className:
              "flex flex-col md:flex-row justify-between items-center gap-4 mb-6",
            children: [
              m.jsx("h2", {
                className: "text-3xl font-bold text-red-700",
                children: "Funding History",
              }),
              m.jsxs("div", {
                className: "flex gap-3",
                children: [
                  m.jsx("input", {
                    type: "number",
                    placeholder: "Enter amount (USD)",
                    value: o,
                    onChange: (v) => u(v.target.value),
                    className: "border px-4 py-2 rounded-xl w-48",
                  }),
                  m.jsx("button", {
                    onClick: p,
                    className:
                      "bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl font-semibold",
                    children: "Give Fund",
                  }),
                ],
              }),
            ],
          }),
          r.length === 0
            ? m.jsx("p", {
                className: "text-center text-gray-500",
                children: "No funding history found",
              })
            : m.jsx("div", {
                className: "overflow-x-auto rounded-xl shadow",
                children: m.jsxs("table", {
                  className: "w-full",
                  children: [
                    m.jsx("thead", {
                      className: "bg-red-600 text-white",
                      children: m.jsxs("tr", {
                        children: [
                          m.jsx("th", {
                            className: "px-6 py-3",
                            children: "Name",
                          }),
                          m.jsx("th", {
                            className: "px-6 py-3",
                            children: "Amount",
                          }),
                          m.jsx("th", {
                            className: "px-6 py-3",
                            children: "Date",
                          }),
                        ],
                      }),
                    }),
                    m.jsx("tbody", {
                      children: r.map((v, b) =>
                        m.jsxs(
                          "tr",
                          {
                            className: "border-b",
                            children: [
                              m.jsx("td", {
                                className: "px-6 py-4",
                                children: v.name,
                              }),
                              m.jsxs("td", {
                                className:
                                  "px-6 py-4 text-red-700 font-semibold",
                                children: ["$", v.amount],
                              }),
                              m.jsx("td", {
                                className: "px-6 py-4",
                                children: new Date(v.date).toLocaleDateString(),
                              }),
                            ],
                          },
                          b
                        )
                      ),
                    }),
                  ],
                }),
              }),
          m.jsx("div", {
            className: "mt-6 bg-red-100 p-4 rounded-xl text-center",
            children: m.jsxs("h3", {
              className: "text-xl font-bold text-red-700",
              children: ["Total Funds Collected: $", g],
            }),
          }),
        ],
      }),
    });
  },
  r6 = () => {
    const { user: t } = Zt(),
      [n, r] = w.useState([]),
      [s, o] = w.useState("all"),
      [u, d] = w.useState(!0),
      h = Mn(),
      [p, g] = w.useState(1),
      v = 5;
    w.useEffect(() => {
      const _ = async () => {
        try {
          d(!0);
          const { data: U } = await Ue.get(
            "https://blood-donation-server-ashy.vercel.app/donation-requests",
            { params: { email: t?.email, status: s !== "all" ? s : void 0 } }
          );
          r(U), g(1);
        } catch (U) {
          console.error(U);
        } finally {
          d(!1);
        }
      };
      t?.email && _();
    }, [t?.email, s]);
    const b = Math.ceil(n.length / v),
      x = (p - 1) * v,
      R = x + v,
      E = n.slice(x, R),
      T = async (_) => {
        if (window.confirm("Are you sure?"))
          try {
            await Ue.delete(
              `https://blood-donation-server-ashy.vercel.app/donation-requests/${_}`
            ),
              r((U) => U.filter((z) => z._id !== _)),
              Dt.success("Deleted");
          } catch {
            Dt.error("Delete failed");
          }
      };
    return u
      ? m.jsx("p", { className: "text-center", children: "Loading..." })
      : m.jsxs("div", {
          className: "p-6",
          children: [
            m.jsx("h1", {
              className: "text-3xl font-bold mb-6 text-center",
              children: "My Donation Requests",
            }),
            m.jsx("div", {
              className: "flex justify-center gap-2 mb-6",
              children: [
                "all",
                "pending",
                "inprogress",
                "done",
                "canceled",
              ].map((_) =>
                m.jsx(
                  "button",
                  {
                    className: `btn btn-sm ${s === _ ? "btn-primary" : ""}`,
                    onClick: () => o(_),
                    children: _,
                  },
                  _
                )
              ),
            }),
            m.jsx("div", {
              className: "bg-white shadow-md rounded-xl p-6",
              children: m.jsxs("div", {
                className: "overflow-x-auto",
                children: [
                  m.jsxs("table", {
                    className: "table w-full",
                    children: [
                      m.jsx("thead", {
                        children: m.jsxs("tr", {
                          children: [
                            m.jsx("th", { children: "#" }),
                            m.jsx("th", { children: "Recipient" }),
                            m.jsx("th", { children: "Blood" }),
                            m.jsx("th", { children: "Date" }),
                            m.jsx("th", { children: "Status" }),
                            m.jsx("th", { children: "Actions" }),
                          ],
                        }),
                      }),
                      m.jsxs("tbody", {
                        children: [
                          E.map((_, U) =>
                            m.jsxs(
                              "tr",
                              {
                                children: [
                                  m.jsx("td", { children: x + U + 1 }),
                                  m.jsx("td", { children: _.requesterName }),
                                  m.jsx("td", { children: _.bloodGroup }),
                                  m.jsx("td", { children: _.donationDate }),
                                  m.jsx("td", {
                                    children: m.jsx("span", {
                                      className: "badge",
                                      children: _.status,
                                    }),
                                  }),
                                  m.jsxs("td", {
                                    className: "flex gap-2",
                                    children: [
                                      m.jsx("button", {
                                        className: "btn btn-info btn-sm",
                                        onClick: () =>
                                          h(
                                            `/dashboard/all-users/donation-details/${_._id}`,
                                            { state: { mode: "view" } }
                                          ),
                                        children: "View",
                                      }),
                                      m.jsx("button", {
                                        className: "btn btn-warning btn-sm",
                                        onClick: () =>
                                          h(
                                            `/dashboard/all-users/donation-details/${_._id}`,
                                            { state: { mode: "edit" } }
                                          ),
                                        children: "Edit",
                                      }),
                                      m.jsx("button", {
                                        className: "btn btn-error btn-sm",
                                        onClick: () => T(_._id),
                                        children: "Delete",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              _._id
                            )
                          ),
                          E.length === 0 &&
                            m.jsx("tr", {
                              children: m.jsx("td", {
                                colSpan: "6",
                                className: "text-center",
                                children: "No data found",
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex justify-center gap-3 mt-6",
                    children: [
                      m.jsx("button", {
                        className: "btn btn-sm",
                        disabled: p === 1,
                        onClick: () => g(p - 1),
                        children: "« Prev",
                      }),
                      m.jsxs("span", {
                        className: "btn btn-sm btn-disabled",
                        children: ["Page ", p, " / ", b],
                      }),
                      m.jsx("button", {
                        className: "btn btn-sm",
                        disabled: p === b,
                        onClick: () => g(p + 1),
                        children: "Next »",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
  },
  i6 = () => {
    const { setLoading: t } = Zt(),
      [n, r] = w.useState(""),
      [s, o] = w.useState(""),
      [u, d] = w.useState(""),
      [h, p] = w.useState([]),
      [g, v] = w.useState([]),
      b = Tb(),
      x = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    w.useEffect(() => {
      (async () => {
        t(!0);
        try {
          const T = await Ue.get(
            "https://blood-donation-server-ashy.vercel.app/donation-requests?status=pending"
          );
          v(T.data), p([]);
        } catch (T) {
          console.error(T);
        } finally {
          t(!1);
        }
      })();
    }, []);
    const R = (E) => {
      E.preventDefault();
      const T = g.filter(
        (_) =>
          (n ? _.bloodGroup === n : !0) &&
          (s ? _.district === s : !0) &&
          (u ? _.recipientUpazila === u : !0)
      );
      p(T);
    };
    return m.jsx("div", {
      className: "min-h-screen bg-red-50 py-12 px-4",
      children: m.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [
          m.jsx("h2", {
            className: "text-4xl font-bold text-center text-red-700 mb-8",
            children: "Find Blood Donors",
          }),
          m.jsxs("form", {
            onSubmit: R,
            className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",
            children: [
              m.jsxs("select", {
                value: n,
                onChange: (E) => r(E.target.value),
                className:
                  "p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300",
                children: [
                  m.jsx("option", { value: "", children: "Blood Group" }),
                  x.map((E) => m.jsx("option", { value: E, children: E }, E)),
                ],
              }),
              m.jsxs("select", {
                value: s,
                onChange: (E) => {
                  o(E.target.value), d("");
                },
                className:
                  "p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300",
                children: [
                  m.jsx("option", { value: "", children: "District" }),
                  b.map((E) =>
                    m.jsx("option", { value: E.name, children: E.name }, E.id)
                  ),
                ],
              }),
              m.jsxs("select", {
                value: u,
                onChange: (E) => d(E.target.value),
                className:
                  "p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300",
                disabled: !s,
                children: [
                  m.jsx("option", { value: "", children: "Upazila" }),
                  b
                    .find((E) => E.name === s)
                    ?.upazilas.map((E) =>
                      m.jsx("option", { value: E.name, children: E.name }, E.id)
                    ),
                ],
              }),
              m.jsx("button", {
                type: "submit",
                className:
                  "bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transform transition py-3",
                children: "Search",
              }),
            ],
          }),
          h.length === 0
            ? m.jsx("p", {
                className: "text-center text-gray-500 text-lg",
                children:
                  "No donors found. Fill the search form and click Search.",
              })
            : m.jsx("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                children: h.map((E) =>
                  m.jsxs(
                    "div",
                    {
                      className:
                        "bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition",
                      children: [
                        m.jsxs("div", {
                          className: "flex items-center justify-between mb-4",
                          children: [
                            m.jsxs("div", {
                              children: [
                                m.jsx("h3", {
                                  className:
                                    "text-xl font-semibold text-red-700",
                                  children: E.requesterName,
                                }),
                                m.jsx("p", {
                                  className: "text-gray-500 text-sm",
                                  children: E.requesterEmail,
                                }),
                              ],
                            }),
                            m.jsx("div", {
                              className:
                                "bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full",
                              children: E.bloodGroup,
                            }),
                          ],
                        }),
                        m.jsxs("p", {
                          className: "text-gray-600",
                          children: [
                            m.jsx("span", {
                              className: "font-semibold",
                              children: "District:",
                            }),
                            " ",
                            E.district || "N/A",
                          ],
                        }),
                        m.jsxs("p", {
                          className: "text-gray-600",
                          children: [
                            m.jsx("span", {
                              className: "font-semibold",
                              children: "Upazila:",
                            }),
                            " ",
                            E.recipientUpazila || "N/A",
                          ],
                        }),
                        m.jsxs("p", {
                          className: "text-gray-600 mt-2",
                          children: [
                            m.jsx("span", {
                              className: "font-semibold",
                              children: "Hospital:",
                            }),
                            " ",
                            E.hospitalName || "N/A",
                          ],
                        }),
                        m.jsxs("p", {
                          className: "text-gray-600 mt-2",
                          children: [
                            m.jsx("span", {
                              className: "font-semibold",
                              children: "Address:",
                            }),
                            " ",
                            E.fullAddress || "N/A",
                          ],
                        }),
                        m.jsx("button", {
                          className:
                            "mt-4 w-full bg-red-500 text-white rounded-xl py-2 font-semibold hover:bg-red-600 transition",
                          children: "Contact",
                        }),
                      ],
                    },
                    E._id
                  )
                ),
              }),
        ],
      }),
    });
  },
  s6 = () => {
    const { id: t } = wb(),
      n = Mn(),
      r = Dn(),
      { user: s } = Zt(),
      o = r.state?.mode || "view",
      [u, d] = w.useState(null),
      [h, p] = w.useState(!0),
      [g, v] = w.useState(!1),
      [b, x] = w.useState(!1);
    w.useEffect(() => {
      (async () => {
        try {
          const _ = await Ue.get(
            `https://blood-donation-server-ashy.vercel.app/donation-requests/${t}`
          );
          d(_.data);
        } catch (_) {
          console.error(_), Dt.error("Failed to load donation request");
        } finally {
          p(!1);
        }
      })();
    }, [t]);
    const R = async () => {
        try {
          const T = await s.getIdToken();
          (
            await Ue.patch(
              `https://blood-donation-server-ashy.vercel.app/donation-requests/${t}/donate`,
              {},
              { headers: { Authorization: `Bearer ${T}` } }
            )
          ).data.success &&
            (d((U) => ({
              ...U,
              status: "inprogress",
              donorName: s?.displayName,
              donorEmail: s?.email,
            })),
            v(!1),
            Dt.success("Donation request accepted!"),
            n(-1));
        } catch (T) {
          console.error(T),
            Dt.error(T.response?.data?.message || "Something went wrong");
        }
      },
      E = async () => {
        x(!0);
        try {
          const { _id: T, ..._ } = u;
          await Ue.patch(
            `https://blood-donation-server-ashy.vercel.app/donation-requests/${t}`,
            _
          ),
            Dt.success("Donation request updated successfully!"),
            n(-1);
        } catch (T) {
          console.error(T),
            Dt.error(T.response?.data?.message || "Update failed!");
        } finally {
          x(!1);
        }
      };
    return h
      ? m.jsx("p", { className: "text-center mt-20", children: "Loading..." })
      : u
      ? m.jsxs("div", {
          className: "min-h-screen bg-red-50 px-4 py-12 flex justify-center",
          children: [
            m.jsxs("div", {
              className: "max-w-3xl w-full bg-white p-8 rounded-3xl shadow-xl",
              children: [
                m.jsx("h2", {
                  className: "text-3xl font-bold text-red-700 mb-6",
                  children:
                    o === "edit"
                      ? "Edit Donation Request"
                      : "Donation Request Details",
                }),
                m.jsxs("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-800",
                  children: [
                    m.jsx(Ya, {
                      label: "Requester Name",
                      value: u.requesterName,
                      editable: o === "edit",
                      onChange: (T) => d((_) => ({ ..._, requesterName: T })),
                    }),
                    m.jsx(Ya, {
                      label: "Blood Group",
                      value: u.bloodGroup,
                      editable: o === "edit",
                      onChange: (T) => d((_) => ({ ..._, bloodGroup: T })),
                    }),
                    m.jsx(Ya, {
                      label: "Hospital",
                      value: u.hospitalName,
                      editable: o === "edit",
                      onChange: (T) => d((_) => ({ ..._, hospitalName: T })),
                    }),
                    m.jsx(Ya, {
                      label: "District",
                      value: u.recipientDistrict,
                      editable: !1,
                    }),
                    m.jsx(Ya, {
                      label: "Upazila",
                      value: u?.recipientUpazila,
                      editable: !1,
                    }),
                    m.jsx(Ya, {
                      label: "Donation Date",
                      value: u.donationDate,
                      editable: o === "edit",
                      type: "date",
                      onChange: (T) => d((_) => ({ ..._, donationDate: T })),
                    }),
                    m.jsx(Ya, {
                      label: "Donation Time",
                      value: u.donationTime,
                      editable: o === "edit",
                      type: "time",
                      onChange: (T) => d((_) => ({ ..._, donationTime: T })),
                    }),
                    m.jsx(Ya, {
                      label: "Full Address",
                      value: u.fullAddress,
                      editable: o === "edit",
                      textarea: !0,
                      onChange: (T) => d((_) => ({ ..._, fullAddress: T })),
                      fullWidth: !0,
                    }),
                    m.jsx(Ya, {
                      label: "Message",
                      value: u.requestMessage,
                      editable: o === "edit",
                      textarea: !0,
                      onChange: (T) => d((_) => ({ ..._, requestMessage: T })),
                      fullWidth: !0,
                    }),
                    o === "edit" &&
                      m.jsxs("div", {
                        className: o === "edit" ? "md:col-span-2" : "",
                        children: [
                          m.jsx("p", {
                            className: "font-semibold text-gray-700 mb-1",
                            children: "Status",
                          }),
                          m.jsxs("select", {
                            value: u.status,
                            onChange: (T) =>
                              d((_) => ({ ..._, status: T.target.value })),
                            className: "select select-bordered w-full",
                            children: [
                              m.jsx("option", {
                                value: "pending",
                                children: "Pending",
                              }),
                              m.jsx("option", {
                                value: "inprogress",
                                children: "In Progress",
                              }),
                              m.jsx("option", {
                                value: "done",
                                children: "Done",
                              }),
                              m.jsx("option", {
                                value: "canceled",
                                children: "Canceled",
                              }),
                            ],
                          }),
                        ],
                      }),
                    u.status === "inprogress" &&
                      m.jsxs("div", {
                        className: "md:col-span-2 bg-green-50 p-4 rounded-xl",
                        children: [
                          m.jsx("p", {
                            className: "font-semibold text-green-700 mb-1",
                            children: "Donor Information",
                          }),
                          m.jsxs("p", {
                            children: ["Name: ", u.donorName || s?.displayName],
                          }),
                          m.jsxs("p", {
                            children: ["Email: ", u.donorEmail || s?.email],
                          }),
                        ],
                      }),
                  ],
                }),
                m.jsxs("div", {
                  className:
                    "text-center mt-10 flex flex-col md:flex-row justify-center gap-4",
                  children: [
                    u.status === "pending" &&
                      s &&
                      o === "view" &&
                      m.jsx("button", {
                        onClick: () => v(!0),
                        className:
                          "bg-red-600 hover:bg-red-700 transition text-white px-10 py-3 rounded-full font-semibold",
                        children: "Donate Now",
                      }),
                    o === "edit" &&
                      m.jsx("button", {
                        onClick: E,
                        className: `bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-full font-semibold ${
                          b ? "opacity-50 cursor-not-allowed" : ""
                        }`,
                        disabled: b,
                        children: b ? "Updating..." : "Update Request",
                      }),
                    m.jsx("button", {
                      onClick: () => n(-1),
                      className:
                        "bg-gray-300 hover:bg-gray-400 px-10 py-3 rounded-full font-semibold",
                      children: "Back",
                    }),
                  ],
                }),
              ],
            }),
            g &&
              m.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40",
                children: m.jsxs("div", {
                  className:
                    "bg-white w-full max-w-md p-8 rounded-2xl shadow-xl",
                  children: [
                    m.jsx("h2", {
                      className:
                        "text-2xl font-bold text-red-700 mb-6 text-center",
                      children: "Confirm Donation",
                    }),
                    m.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        m.jsx(Av, {
                          label: "Donor Name",
                          value: s?.displayName,
                        }),
                        m.jsx(Av, { label: "Donor Email", value: s?.email }),
                        m.jsx("button", {
                          onClick: R,
                          className:
                            "w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold",
                          children: "Confirm & Proceed",
                        }),
                        m.jsx("button", {
                          onClick: () => v(!1),
                          className: "w-full text-gray-600 mt-2",
                          children: "Cancel",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        })
      : m.jsx("p", {
          className: "text-center mt-20",
          children: "Request not found",
        });
  },
  Ya = ({
    label: t,
    value: n,
    editable: r,
    onChange: s,
    textarea: o,
    type: u,
    fullWidth: d,
  }) =>
    m.jsxs("div", {
      className: d ? "md:col-span-2" : "",
      children: [
        m.jsx("p", {
          className: "font-semibold text-gray-700 mb-1",
          children: t,
        }),
        r
          ? o
            ? m.jsx("textarea", {
                value: n || "",
                onChange: (h) => s(h.target.value),
                className: "w-full border rounded-xl px-4 py-3",
              })
            : m.jsx("input", {
                type: u || "text",
                value: n || "",
                onChange: (h) => s(h.target.value),
                className: "w-full border rounded-xl px-4 py-3",
              })
          : m.jsx("p", {
              className: "bg-gray-100 p-3 rounded-xl mt-1",
              children: n,
            }),
      ],
    }),
  Av = ({ label: t, value: n }) =>
    m.jsxs("div", {
      children: [
        m.jsx("p", {
          className: "font-semibold text-gray-700 mb-1",
          children: t,
        }),
        m.jsx("input", {
          readOnly: !0,
          value: n || "",
          className: "w-full border rounded-xl px-4 py-3 bg-gray-100",
        }),
      ],
    }),
  l6 = () => {
    const [t] = m_(),
      n = Mn(),
      { user: r, loading: s } = Zt(),
      [o, u] = w.useState(!1),
      d = t.get("name"),
      h = t.get("email"),
      p = t.get("amount"),
      g = d ? decodeURIComponent(d) : "",
      v = h ? decodeURIComponent(h) : "",
      b = p ? Number(p) : 0,
      x = g || r?.displayName || "Anonymous",
      R = v || r?.email || "N/A";
    return (
      w.useEffect(() => {
        if (s || !r || !b || o) return;
        (async () => {
          try {
            const T = await r.getIdToken();
            await Ue.post(
              "https://blood-donation-server-ashy.vercel.app/funds",
              { name: x, email: R, amount: b },
              { headers: { authorization: `Bearer ${T}` } }
            ),
              u(!0),
              Dt.success("Payment Successful 🎉");
          } catch (T) {
            console.error(T), Dt.error("Payment done but save failed");
          }
        })();
      }, [r, s, b, o]),
      m.jsx("div", {
        className:
          "min-h-screen flex items-center justify-center bg-green-50 px-4",
        children: m.jsxs("div", {
          className:
            "bg-white max-w-md w-full rounded-3xl shadow-xl p-8 text-center",
          children: [
            m.jsx("div", {
              className:
                "w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center",
              children: m.jsx("svg", {
                className: "w-10 h-10 text-green-600",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                viewBox: "0 0 24 24",
                children: m.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M5 13l4 4L19 7",
                }),
              }),
            }),
            m.jsx("h2", {
              className: "text-2xl font-bold text-green-700 mb-2",
              children: "Payment Successful!",
            }),
            m.jsx("p", {
              className: "text-gray-600 mb-4",
              children: "Thank you for your contribution ❤️",
            }),
            m.jsxs("div", {
              className: "bg-green-50 rounded-xl p-4 text-left space-y-2",
              children: [
                m.jsxs("p", {
                  children: [
                    m.jsx("span", {
                      className: "font-semibold",
                      children: "Name:",
                    }),
                    " ",
                    x,
                  ],
                }),
                m.jsxs("p", {
                  children: [
                    m.jsx("span", {
                      className: "font-semibold",
                      children: "Email:",
                    }),
                    " ",
                    R,
                  ],
                }),
                m.jsxs("p", {
                  children: [
                    m.jsx("span", {
                      className: "font-semibold",
                      children: "Amount:",
                    }),
                    " ",
                    m.jsxs("span", {
                      className: "font-bold text-green-700",
                      children: ["$", b],
                    }),
                  ],
                }),
              ],
            }),
            o
              ? m.jsx("p", {
                  className: "mt-4 text-green-600 font-semibold",
                  children: "Redirecting to funding page...",
                })
              : m.jsx("p", {
                  className: "mt-4 text-gray-500 animate-pulse",
                  children: "Saving payment info...",
                }),
            m.jsx("button", {
              onClick: () => n("/founding"),
              className:
                "mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-semibold",
              children: "Go to Funding Page",
            }),
          ],
        }),
      })
    );
  },
  o6 = () => {
    const { id: t } = wb(),
      { user: n } = Zt(),
      r = Mn(),
      [s, o] = w.useState(null),
      [u, d] = w.useState(!1),
      [h, p] = w.useState(!0);
    return (
      w.useEffect(() => {
        (async () => {
          d(!0);
          try {
            const v = await Ue.get(
              `https://blood-donation-server-ashy.vercel.app/donation-requests/${t}`
            );
            o(v.data), n?.role === "admin" && p(!1);
          } catch (v) {
            console.error(v);
          } finally {
            d(!1);
          }
        })();
      }, [t, n]),
      u
        ? m.jsx("p", { className: "text-center mt-10", children: "Loading..." })
        : s
        ? m.jsxs("div", {
            className: "container mx-auto px-4 py-8",
            children: [
              m.jsx("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Donation Request Details",
              }),
              m.jsxs("div", {
                className: "bg-white shadow-md rounded-lg p-5",
                children: [
                  m.jsx("h2", {
                    className: "text-xl font-semibold mb-2",
                    children: s.recipientName,
                  }),
                  m.jsxs("p", {
                    className: "mb-1",
                    children: [
                      m.jsx("strong", { children: "Location:" }),
                      " ",
                      s.recipientUpazila,
                      ", ",
                      s.fullAddress,
                    ],
                  }),
                  m.jsxs("p", {
                    className: "mb-1",
                    children: [
                      m.jsx("strong", { children: "Blood Group:" }),
                      " ",
                      s.bloodGroup,
                    ],
                  }),
                  m.jsxs("p", {
                    className: "mb-1",
                    children: [
                      m.jsx("strong", { children: "Hospital:" }),
                      " ",
                      s.hospitalName,
                    ],
                  }),
                  m.jsxs("p", {
                    className: "mb-1",
                    children: [
                      m.jsx("strong", { children: "Date:" }),
                      " ",
                      s.donationDate,
                      " | ",
                      m.jsx("strong", { children: "Time:" }),
                      " ",
                      s.donationTime,
                    ],
                  }),
                  m.jsxs("p", {
                    className: "mb-3",
                    children: [
                      m.jsx("strong", { children: "Message:" }),
                      " ",
                      s.requestMessage,
                    ],
                  }),
                  m.jsx("button", {
                    onClick: () => r(-1),
                    className:
                      "bg-gray-300 hover:bg-gray-400 px-10 py-3 rounded-full font-semibold",
                    children: "Back",
                  }),
                  h &&
                    m.jsx("p", {
                      className: "text-sm text-gray-500 mt-2 text-center",
                      children: "Only admin can donate",
                    }),
                ],
              }),
            ],
          })
        : m.jsx("p", {
            className: "text-center mt-10",
            children: "Request not found",
          })
    );
  },
  u6 = o_([
    {
      path: "/",
      element: m.jsx(WR, {}),
      errorElement: m.jsx(z_, {}),
      children: [
        { path: "/", element: m.jsx(U_, {}) },
        { path: "/donation-request", element: m.jsx(t6, {}) },
        {
          path: "/search-page",
          element: m.jsx(i6, {}),
          loader: () => fetch("./Districts.json").then((t) => t.json()),
        },
        { path: "/blog", element: m.jsx(Rv, {}) },
        { path: "/founding", element: m.jsx(Ga, { children: m.jsx(a6, {}) }) },
        { path: "/plant/:id", element: m.jsx(HT, {}) },
        { path: "blog", element: m.jsx(Rv, {}) },
        { path: "payment-success", element: m.jsx(l6, {}) },
      ],
    },
    { path: "/login", element: m.jsx(u4, {}) },
    {
      path: "/signup",
      element: m.jsx(BT, {}),
      loader: () => fetch("/Districts.json").then((t) => t.json()),
    },
    {
      path: "/dashboard",
      element: m.jsx(PR, {}),
      children: [
        { index: !0, element: m.jsx(Ga, { children: m.jsx(KR, {}) }) },
        {
          path: "all-users/donation-details/:id",
          element: m.jsx(Ga, { children: m.jsx(s6, {}) }),
        },
        {
          path: "all-users/details-just/:id",
          element: m.jsx(Ga, { children: m.jsx(o6, {}) }),
        },
        { path: "add-plant", element: m.jsx(Ga, { children: m.jsx(VR, {}) }) },
        { path: "all-users", element: m.jsx(Ga, { children: m.jsx(FR, {}) }) },
        { path: "profile", element: m.jsx(Ga, { children: m.jsx(YR, {}) }) },
        {
          path: "my-donation-request",
          element: m.jsx(Ga, { children: m.jsx(r6, {}) }),
        },
        { path: "all-users", element: m.jsx(Ga, { children: m.jsx(e6, {}) }) },
      ],
    },
  ]),
  c6 = () => {};
var Cv = {};
const q1 = function (t) {
    const n = [];
    let r = 0;
    for (let s = 0; s < t.length; s++) {
      let o = t.charCodeAt(s);
      o < 128
        ? (n[r++] = o)
        : o < 2048
        ? ((n[r++] = (o >> 6) | 192), (n[r++] = (o & 63) | 128))
        : (o & 64512) === 55296 &&
          s + 1 < t.length &&
          (t.charCodeAt(s + 1) & 64512) === 56320
        ? ((o = 65536 + ((o & 1023) << 10) + (t.charCodeAt(++s) & 1023)),
          (n[r++] = (o >> 18) | 240),
          (n[r++] = ((o >> 12) & 63) | 128),
          (n[r++] = ((o >> 6) & 63) | 128),
          (n[r++] = (o & 63) | 128))
        : ((n[r++] = (o >> 12) | 224),
          (n[r++] = ((o >> 6) & 63) | 128),
          (n[r++] = (o & 63) | 128));
    }
    return n;
  },
  d6 = function (t) {
    const n = [];
    let r = 0,
      s = 0;
    for (; r < t.length; ) {
      const o = t[r++];
      if (o < 128) n[s++] = String.fromCharCode(o);
      else if (o > 191 && o < 224) {
        const u = t[r++];
        n[s++] = String.fromCharCode(((o & 31) << 6) | (u & 63));
      } else if (o > 239 && o < 365) {
        const u = t[r++],
          d = t[r++],
          h = t[r++],
          p =
            (((o & 7) << 18) | ((u & 63) << 12) | ((d & 63) << 6) | (h & 63)) -
            65536;
        (n[s++] = String.fromCharCode(55296 + (p >> 10))),
          (n[s++] = String.fromCharCode(56320 + (p & 1023)));
      } else {
        const u = t[r++],
          d = t[r++];
        n[s++] = String.fromCharCode(
          ((o & 15) << 12) | ((u & 63) << 6) | (d & 63)
        );
      }
    }
    return n.join("");
  },
  V1 = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(t, n) {
      if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const r = n ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        s = [];
      for (let o = 0; o < t.length; o += 3) {
        const u = t[o],
          d = o + 1 < t.length,
          h = d ? t[o + 1] : 0,
          p = o + 2 < t.length,
          g = p ? t[o + 2] : 0,
          v = u >> 2,
          b = ((u & 3) << 4) | (h >> 4);
        let x = ((h & 15) << 2) | (g >> 6),
          R = g & 63;
        p || ((R = 64), d || (x = 64)), s.push(r[v], r[b], r[x], r[R]);
      }
      return s.join("");
    },
    encodeString(t, n) {
      return this.HAS_NATIVE_SUPPORT && !n
        ? btoa(t)
        : this.encodeByteArray(q1(t), n);
    },
    decodeString(t, n) {
      return this.HAS_NATIVE_SUPPORT && !n
        ? atob(t)
        : d6(this.decodeStringToByteArray(t, n));
    },
    decodeStringToByteArray(t, n) {
      this.init_();
      const r = n ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        s = [];
      for (let o = 0; o < t.length; ) {
        const u = r[t.charAt(o++)],
          h = o < t.length ? r[t.charAt(o)] : 0;
        ++o;
        const g = o < t.length ? r[t.charAt(o)] : 64;
        ++o;
        const b = o < t.length ? r[t.charAt(o)] : 64;
        if ((++o, u == null || h == null || g == null || b == null))
          throw new f6();
        const x = (u << 2) | (h >> 4);
        if ((s.push(x), g !== 64)) {
          const R = ((h << 4) & 240) | (g >> 2);
          if ((s.push(R), b !== 64)) {
            const E = ((g << 6) & 192) | b;
            s.push(E);
          }
        }
      }
      return s;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
      }
    },
  };
class f6 extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const h6 = function (t) {
    const n = q1(t);
    return V1.encodeByteArray(n, !0);
  },
  F1 = function (t) {
    return h6(t).replace(/\./g, "");
  },
  G1 = function (t) {
    try {
      return V1.decodeString(t, !0);
    } catch (n) {
      console.error("base64Decode failed: ", n);
    }
    return null;
  };
function m6() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
const p6 = () => m6().__FIREBASE_DEFAULTS__,
  g6 = () => {
    if (typeof process > "u" || typeof Cv > "u") return;
    const t = Cv.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  y6 = () => {
    if (typeof document > "u") return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const n = t && G1(t[1]);
    return n && JSON.parse(n);
  },
  rm = () => {
    try {
      return c6() || p6() || g6() || y6();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  v6 = (t) => rm()?.emulatorHosts?.[t],
  Y1 = () => rm()?.config,
  Q1 = (t) => rm()?.[`_${t}`];
class b6 {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((n, r) => {
        (this.resolve = n), (this.reject = r);
      }));
  }
  wrapCallback(n) {
    return (r, s) => {
      r ? this.reject(r) : this.resolve(s),
        typeof n == "function" &&
          (this.promise.catch(() => {}), n.length === 1 ? n(r) : n(r, s));
    };
  }
}
function xc(t) {
  try {
    return (
      t.startsWith("http://") || t.startsWith("https://")
        ? new URL(t).hostname
        : t
    ).endsWith(".cloudworkstations.dev");
  } catch {
    return !1;
  }
}
async function x6(t) {
  return (await fetch(t, { credentials: "include" })).ok;
}
const Ul = {};
function S6() {
  const t = { prod: [], emulator: [] };
  for (const n of Object.keys(Ul)) Ul[n] ? t.emulator.push(n) : t.prod.push(n);
  return t;
}
function E6(t) {
  let n = document.getElementById(t),
    r = !1;
  return (
    n ||
      ((n = document.createElement("div")), n.setAttribute("id", t), (r = !0)),
    { created: r, element: n }
  );
}
let Nv = !1;
function w6(t, n) {
  if (
    typeof window > "u" ||
    typeof document > "u" ||
    !xc(window.location.host) ||
    Ul[t] === n ||
    Ul[t] ||
    Nv
  )
    return;
  Ul[t] = n;
  function r(x) {
    return `__firebase__banner__${x}`;
  }
  const s = "__firebase__banner",
    u = S6().prod.length > 0;
  function d() {
    const x = document.getElementById(s);
    x && x.remove();
  }
  function h(x) {
    (x.style.display = "flex"),
      (x.style.background = "#7faaf0"),
      (x.style.position = "fixed"),
      (x.style.bottom = "5px"),
      (x.style.left = "5px"),
      (x.style.padding = ".5em"),
      (x.style.borderRadius = "5px"),
      (x.style.alignItems = "center");
  }
  function p(x, R) {
    x.setAttribute("width", "24"),
      x.setAttribute("id", R),
      x.setAttribute("height", "24"),
      x.setAttribute("viewBox", "0 0 24 24"),
      x.setAttribute("fill", "none"),
      (x.style.marginLeft = "-6px");
  }
  function g() {
    const x = document.createElement("span");
    return (
      (x.style.cursor = "pointer"),
      (x.style.marginLeft = "16px"),
      (x.style.fontSize = "24px"),
      (x.innerHTML = " &times;"),
      (x.onclick = () => {
        (Nv = !0), d();
      }),
      x
    );
  }
  function v(x, R) {
    x.setAttribute("id", R),
      (x.innerText = "Learn more"),
      (x.href =
        "https://firebase.google.com/docs/studio/preview-apps#preview-backend"),
      x.setAttribute("target", "__blank"),
      (x.style.paddingLeft = "5px"),
      (x.style.textDecoration = "underline");
  }
  function b() {
    const x = E6(s),
      R = r("text"),
      E = document.getElementById(R) || document.createElement("span"),
      T = r("learnmore"),
      _ = document.getElementById(T) || document.createElement("a"),
      U = r("preprendIcon"),
      z =
        document.getElementById(U) ||
        document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (x.created) {
      const Y = x.element;
      h(Y), v(_, T);
      const Z = g();
      p(z, U), Y.append(z, E, _, Z), document.body.appendChild(Y);
    }
    u
      ? ((E.innerText = "Preview backend disconnected."),
        (z.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`))
      : ((z.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`),
        (E.innerText = "Preview backend running in this workspace.")),
      E.setAttribute("id", R);
  }
  document.readyState === "loading"
    ? window.addEventListener("DOMContentLoaded", b)
    : b();
}
function rn() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function _6() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())
  );
}
function T6() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function R6() {
  const t =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function A6() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function C6() {
  const t = rn();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function N6() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function O6() {
  return new Promise((t, n) => {
    try {
      let r = !0;
      const s = "validate-browser-context-for-indexeddb-analytics-module",
        o = self.indexedDB.open(s);
      (o.onsuccess = () => {
        o.result.close(), r || self.indexedDB.deleteDatabase(s), t(!0);
      }),
        (o.onupgradeneeded = () => {
          r = !1;
        }),
        (o.onerror = () => {
          n(o.error?.message || "");
        });
    } catch (r) {
      n(r);
    }
  });
}
const j6 = "FirebaseError";
class Fr extends Error {
  constructor(n, r, s) {
    super(r),
      (this.code = n),
      (this.customData = s),
      (this.name = j6),
      Object.setPrototypeOf(this, Fr.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, Wl.prototype.create);
  }
}
class Wl {
  constructor(n, r, s) {
    (this.service = n), (this.serviceName = r), (this.errors = s);
  }
  create(n, ...r) {
    const s = r[0] || {},
      o = `${this.service}/${n}`,
      u = this.errors[n],
      d = u ? D6(u, s) : "Error",
      h = `${this.serviceName}: ${d} (${o}).`;
    return new Fr(o, h, s);
  }
}
function D6(t, n) {
  return t.replace(M6, (r, s) => {
    const o = n[s];
    return o != null ? String(o) : `<${s}?>`;
  });
}
const M6 = /\{\$([^}]+)}/g;
function U6(t) {
  for (const n in t) if (Object.prototype.hasOwnProperty.call(t, n)) return !1;
  return !0;
}
function Ss(t, n) {
  if (t === n) return !0;
  const r = Object.keys(t),
    s = Object.keys(n);
  for (const o of r) {
    if (!s.includes(o)) return !1;
    const u = t[o],
      d = n[o];
    if (Ov(u) && Ov(d)) {
      if (!Ss(u, d)) return !1;
    } else if (u !== d) return !1;
  }
  for (const o of s) if (!r.includes(o)) return !1;
  return !0;
}
function Ov(t) {
  return t !== null && typeof t == "object";
}
function eo(t) {
  const n = [];
  for (const [r, s] of Object.entries(t))
    Array.isArray(s)
      ? s.forEach((o) => {
          n.push(encodeURIComponent(r) + "=" + encodeURIComponent(o));
        })
      : n.push(encodeURIComponent(r) + "=" + encodeURIComponent(s));
  return n.length ? "&" + n.join("&") : "";
}
function Ol(t) {
  const n = {};
  return (
    t
      .replace(/^\?/, "")
      .split("&")
      .forEach((s) => {
        if (s) {
          const [o, u] = s.split("=");
          n[decodeURIComponent(o)] = decodeURIComponent(u);
        }
      }),
    n
  );
}
function jl(t) {
  const n = t.indexOf("?");
  if (!n) return "";
  const r = t.indexOf("#", n);
  return t.substring(n, r > 0 ? r : void 0);
}
function L6(t, n) {
  const r = new z6(t, n);
  return r.subscribe.bind(r);
}
class z6 {
  constructor(n, r) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = r),
      this.task
        .then(() => {
          n(this);
        })
        .catch((s) => {
          this.error(s);
        });
  }
  next(n) {
    this.forEachObserver((r) => {
      r.next(n);
    });
  }
  error(n) {
    this.forEachObserver((r) => {
      r.error(n);
    }),
      this.close(n);
  }
  complete() {
    this.forEachObserver((n) => {
      n.complete();
    }),
      this.close();
  }
  subscribe(n, r, s) {
    let o;
    if (n === void 0 && r === void 0 && s === void 0)
      throw new Error("Missing Observer.");
    k6(n, ["next", "error", "complete"])
      ? (o = n)
      : (o = { next: n, error: r, complete: s }),
      o.next === void 0 && (o.next = $f),
      o.error === void 0 && (o.error = $f),
      o.complete === void 0 && (o.complete = $f);
    const u = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? o.error(this.finalError) : o.complete();
          } catch {}
        }),
      this.observers.push(o),
      u
    );
  }
  unsubscribeOne(n) {
    this.observers === void 0 ||
      this.observers[n] === void 0 ||
      (delete this.observers[n],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(n) {
    if (!this.finalized)
      for (let r = 0; r < this.observers.length; r++) this.sendOne(r, n);
  }
  sendOne(n, r) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[n] !== void 0)
        try {
          r(this.observers[n]);
        } catch (s) {
          typeof console < "u" && console.error && console.error(s);
        }
    });
  }
  close(n) {
    this.finalized ||
      ((this.finalized = !0),
      n !== void 0 && (this.finalError = n),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function k6(t, n) {
  if (typeof t != "object" || t === null) return !1;
  for (const r of n) if (r in t && typeof t[r] == "function") return !0;
  return !1;
}
function $f() {}
function Ea(t) {
  return t && t._delegate ? t._delegate : t;
}
class Es {
  constructor(n, r, s) {
    (this.name = n),
      (this.instanceFactory = r),
      (this.type = s),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(n) {
    return (this.instantiationMode = n), this;
  }
  setMultipleInstances(n) {
    return (this.multipleInstances = n), this;
  }
  setServiceProps(n) {
    return (this.serviceProps = n), this;
  }
  setInstanceCreatedCallback(n) {
    return (this.onInstanceCreated = n), this;
  }
}
const mi = "[DEFAULT]";
class I6 {
  constructor(n, r) {
    (this.name = n),
      (this.container = r),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(n) {
    const r = this.normalizeInstanceIdentifier(n);
    if (!this.instancesDeferred.has(r)) {
      const s = new b6();
      if (
        (this.instancesDeferred.set(r, s),
        this.isInitialized(r) || this.shouldAutoInitialize())
      )
        try {
          const o = this.getOrInitializeService({ instanceIdentifier: r });
          o && s.resolve(o);
        } catch {}
    }
    return this.instancesDeferred.get(r).promise;
  }
  getImmediate(n) {
    const r = this.normalizeInstanceIdentifier(n?.identifier),
      s = n?.optional ?? !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (o) {
        if (s) return null;
        throw o;
      }
    else {
      if (s) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(n) {
    if (n.name !== this.name)
      throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = n), !!this.shouldAutoInitialize())) {
      if (H6(n))
        try {
          this.getOrInitializeService({ instanceIdentifier: mi });
        } catch {}
      for (const [r, s] of this.instancesDeferred.entries()) {
        const o = this.normalizeInstanceIdentifier(r);
        try {
          const u = this.getOrInitializeService({ instanceIdentifier: o });
          s.resolve(u);
        } catch {}
      }
    }
  }
  clearInstance(n = mi) {
    this.instancesDeferred.delete(n),
      this.instancesOptions.delete(n),
      this.instances.delete(n);
  }
  async delete() {
    const n = Array.from(this.instances.values());
    await Promise.all([
      ...n.filter((r) => "INTERNAL" in r).map((r) => r.INTERNAL.delete()),
      ...n.filter((r) => "_delete" in r).map((r) => r._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(n = mi) {
    return this.instances.has(n);
  }
  getOptions(n = mi) {
    return this.instancesOptions.get(n) || {};
  }
  initialize(n = {}) {
    const { options: r = {} } = n,
      s = this.normalizeInstanceIdentifier(n.instanceIdentifier);
    if (this.isInitialized(s))
      throw Error(`${this.name}(${s}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const o = this.getOrInitializeService({
      instanceIdentifier: s,
      options: r,
    });
    for (const [u, d] of this.instancesDeferred.entries()) {
      const h = this.normalizeInstanceIdentifier(u);
      s === h && d.resolve(o);
    }
    return o;
  }
  onInit(n, r) {
    const s = this.normalizeInstanceIdentifier(r),
      o = this.onInitCallbacks.get(s) ?? new Set();
    o.add(n), this.onInitCallbacks.set(s, o);
    const u = this.instances.get(s);
    return (
      u && n(u, s),
      () => {
        o.delete(n);
      }
    );
  }
  invokeOnInitCallbacks(n, r) {
    const s = this.onInitCallbacks.get(r);
    if (s)
      for (const o of s)
        try {
          o(n, r);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: n, options: r = {} }) {
    let s = this.instances.get(n);
    if (
      !s &&
      this.component &&
      ((s = this.component.instanceFactory(this.container, {
        instanceIdentifier: B6(n),
        options: r,
      })),
      this.instances.set(n, s),
      this.instancesOptions.set(n, r),
      this.invokeOnInitCallbacks(s, n),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, n, s);
      } catch {}
    return s || null;
  }
  normalizeInstanceIdentifier(n = mi) {
    return this.component ? (this.component.multipleInstances ? n : mi) : n;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function B6(t) {
  return t === mi ? void 0 : t;
}
function H6(t) {
  return t.instantiationMode === "EAGER";
}
class P6 {
  constructor(n) {
    (this.name = n), (this.providers = new Map());
  }
  addComponent(n) {
    const r = this.getProvider(n.name);
    if (r.isComponentSet())
      throw new Error(
        `Component ${n.name} has already been registered with ${this.name}`
      );
    r.setComponent(n);
  }
  addOrOverwriteComponent(n) {
    this.getProvider(n.name).isComponentSet() && this.providers.delete(n.name),
      this.addComponent(n);
  }
  getProvider(n) {
    if (this.providers.has(n)) return this.providers.get(n);
    const r = new I6(n, this);
    return this.providers.set(n, r), r;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
var mt;
(function (t) {
  (t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT");
})(mt || (mt = {}));
const q6 = {
    debug: mt.DEBUG,
    verbose: mt.VERBOSE,
    info: mt.INFO,
    warn: mt.WARN,
    error: mt.ERROR,
    silent: mt.SILENT,
  },
  V6 = mt.INFO,
  F6 = {
    [mt.DEBUG]: "log",
    [mt.VERBOSE]: "log",
    [mt.INFO]: "info",
    [mt.WARN]: "warn",
    [mt.ERROR]: "error",
  },
  G6 = (t, n, ...r) => {
    if (n < t.logLevel) return;
    const s = new Date().toISOString(),
      o = F6[n];
    if (o) console[o](`[${s}]  ${t.name}:`, ...r);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${n})`
      );
  };
class K1 {
  constructor(n) {
    (this.name = n),
      (this._logLevel = V6),
      (this._logHandler = G6),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(n) {
    if (!(n in mt))
      throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);
    this._logLevel = n;
  }
  setLogLevel(n) {
    this._logLevel = typeof n == "string" ? q6[n] : n;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(n) {
    if (typeof n != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = n;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(n) {
    this._userLogHandler = n;
  }
  debug(...n) {
    this._userLogHandler && this._userLogHandler(this, mt.DEBUG, ...n),
      this._logHandler(this, mt.DEBUG, ...n);
  }
  log(...n) {
    this._userLogHandler && this._userLogHandler(this, mt.VERBOSE, ...n),
      this._logHandler(this, mt.VERBOSE, ...n);
  }
  info(...n) {
    this._userLogHandler && this._userLogHandler(this, mt.INFO, ...n),
      this._logHandler(this, mt.INFO, ...n);
  }
  warn(...n) {
    this._userLogHandler && this._userLogHandler(this, mt.WARN, ...n),
      this._logHandler(this, mt.WARN, ...n);
  }
  error(...n) {
    this._userLogHandler && this._userLogHandler(this, mt.ERROR, ...n),
      this._logHandler(this, mt.ERROR, ...n);
  }
}
const Y6 = (t, n) => n.some((r) => t instanceof r);
let jv, Dv;
function Q6() {
  return (
    jv ||
    (jv = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function K6() {
  return (
    Dv ||
    (Dv = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const $1 = new WeakMap(),
  wh = new WeakMap(),
  X1 = new WeakMap(),
  Xf = new WeakMap(),
  im = new WeakMap();
function $6(t) {
  const n = new Promise((r, s) => {
    const o = () => {
        t.removeEventListener("success", u), t.removeEventListener("error", d);
      },
      u = () => {
        r(Br(t.result)), o();
      },
      d = () => {
        s(t.error), o();
      };
    t.addEventListener("success", u), t.addEventListener("error", d);
  });
  return (
    n
      .then((r) => {
        r instanceof IDBCursor && $1.set(r, t);
      })
      .catch(() => {}),
    im.set(n, t),
    n
  );
}
function X6(t) {
  if (wh.has(t)) return;
  const n = new Promise((r, s) => {
    const o = () => {
        t.removeEventListener("complete", u),
          t.removeEventListener("error", d),
          t.removeEventListener("abort", d);
      },
      u = () => {
        r(), o();
      },
      d = () => {
        s(t.error || new DOMException("AbortError", "AbortError")), o();
      };
    t.addEventListener("complete", u),
      t.addEventListener("error", d),
      t.addEventListener("abort", d);
  });
  wh.set(t, n);
}
let _h = {
  get(t, n, r) {
    if (t instanceof IDBTransaction) {
      if (n === "done") return wh.get(t);
      if (n === "objectStoreNames") return t.objectStoreNames || X1.get(t);
      if (n === "store")
        return r.objectStoreNames[1]
          ? void 0
          : r.objectStore(r.objectStoreNames[0]);
    }
    return Br(t[n]);
  },
  set(t, n, r) {
    return (t[n] = r), !0;
  },
  has(t, n) {
    return t instanceof IDBTransaction && (n === "done" || n === "store")
      ? !0
      : n in t;
  },
};
function Z6(t) {
  _h = t(_h);
}
function J6(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (n, ...r) {
        const s = t.call(Zf(this), n, ...r);
        return X1.set(s, n.sort ? n.sort() : [n]), Br(s);
      }
    : K6().includes(t)
    ? function (...n) {
        return t.apply(Zf(this), n), Br($1.get(this));
      }
    : function (...n) {
        return Br(t.apply(Zf(this), n));
      };
}
function W6(t) {
  return typeof t == "function"
    ? J6(t)
    : (t instanceof IDBTransaction && X6(t),
      Y6(t, Q6()) ? new Proxy(t, _h) : t);
}
function Br(t) {
  if (t instanceof IDBRequest) return $6(t);
  if (Xf.has(t)) return Xf.get(t);
  const n = W6(t);
  return n !== t && (Xf.set(t, n), im.set(n, t)), n;
}
const Zf = (t) => im.get(t);
function eA(t, n, { blocked: r, upgrade: s, blocking: o, terminated: u } = {}) {
  const d = indexedDB.open(t, n),
    h = Br(d);
  return (
    s &&
      d.addEventListener("upgradeneeded", (p) => {
        s(Br(d.result), p.oldVersion, p.newVersion, Br(d.transaction), p);
      }),
    r && d.addEventListener("blocked", (p) => r(p.oldVersion, p.newVersion, p)),
    h
      .then((p) => {
        u && p.addEventListener("close", () => u()),
          o &&
            p.addEventListener("versionchange", (g) =>
              o(g.oldVersion, g.newVersion, g)
            );
      })
      .catch(() => {}),
    h
  );
}
const tA = ["get", "getKey", "getAll", "getAllKeys", "count"],
  nA = ["put", "add", "delete", "clear"],
  Jf = new Map();
function Mv(t, n) {
  if (!(t instanceof IDBDatabase && !(n in t) && typeof n == "string")) return;
  if (Jf.get(n)) return Jf.get(n);
  const r = n.replace(/FromIndex$/, ""),
    s = n !== r,
    o = nA.includes(r);
  if (
    !(r in (s ? IDBIndex : IDBObjectStore).prototype) ||
    !(o || tA.includes(r))
  )
    return;
  const u = async function (d, ...h) {
    const p = this.transaction(d, o ? "readwrite" : "readonly");
    let g = p.store;
    return (
      s && (g = g.index(h.shift())),
      (await Promise.all([g[r](...h), o && p.done]))[0]
    );
  };
  return Jf.set(n, u), u;
}
Z6((t) => ({
  ...t,
  get: (n, r, s) => Mv(n, r) || t.get(n, r, s),
  has: (n, r) => !!Mv(n, r) || t.has(n, r),
}));
class aA {
  constructor(n) {
    this.container = n;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((r) => {
        if (rA(r)) {
          const s = r.getImmediate();
          return `${s.library}/${s.version}`;
        } else return null;
      })
      .filter((r) => r)
      .join(" ");
  }
}
function rA(t) {
  return t.getComponent()?.type === "VERSION";
}
const Th = "@firebase/app",
  Uv = "0.14.6";
const Ja = new K1("@firebase/app"),
  iA = "@firebase/app-compat",
  sA = "@firebase/analytics-compat",
  lA = "@firebase/analytics",
  oA = "@firebase/app-check-compat",
  uA = "@firebase/app-check",
  cA = "@firebase/auth",
  dA = "@firebase/auth-compat",
  fA = "@firebase/database",
  hA = "@firebase/data-connect",
  mA = "@firebase/database-compat",
  pA = "@firebase/functions",
  gA = "@firebase/functions-compat",
  yA = "@firebase/installations",
  vA = "@firebase/installations-compat",
  bA = "@firebase/messaging",
  xA = "@firebase/messaging-compat",
  SA = "@firebase/performance",
  EA = "@firebase/performance-compat",
  wA = "@firebase/remote-config",
  _A = "@firebase/remote-config-compat",
  TA = "@firebase/storage",
  RA = "@firebase/storage-compat",
  AA = "@firebase/firestore",
  CA = "@firebase/ai",
  NA = "@firebase/firestore-compat",
  OA = "firebase",
  jA = "12.6.0";
const Rh = "[DEFAULT]",
  DA = {
    [Th]: "fire-core",
    [iA]: "fire-core-compat",
    [lA]: "fire-analytics",
    [sA]: "fire-analytics-compat",
    [uA]: "fire-app-check",
    [oA]: "fire-app-check-compat",
    [cA]: "fire-auth",
    [dA]: "fire-auth-compat",
    [fA]: "fire-rtdb",
    [hA]: "fire-data-connect",
    [mA]: "fire-rtdb-compat",
    [pA]: "fire-fn",
    [gA]: "fire-fn-compat",
    [yA]: "fire-iid",
    [vA]: "fire-iid-compat",
    [bA]: "fire-fcm",
    [xA]: "fire-fcm-compat",
    [SA]: "fire-perf",
    [EA]: "fire-perf-compat",
    [wA]: "fire-rc",
    [_A]: "fire-rc-compat",
    [TA]: "fire-gcs",
    [RA]: "fire-gcs-compat",
    [AA]: "fire-fst",
    [NA]: "fire-fst-compat",
    [CA]: "fire-vertex",
    "fire-js": "fire-js",
    [OA]: "fire-js-all",
  };
const Zu = new Map(),
  MA = new Map(),
  Ah = new Map();
function Lv(t, n) {
  try {
    t.container.addComponent(n);
  } catch (r) {
    Ja.debug(
      `Component ${n.name} failed to register with FirebaseApp ${t.name}`,
      r
    );
  }
}
function Hl(t) {
  const n = t.name;
  if (Ah.has(n))
    return (
      Ja.debug(`There were multiple attempts to register component ${n}.`), !1
    );
  Ah.set(n, t);
  for (const r of Zu.values()) Lv(r, t);
  for (const r of MA.values()) Lv(r, t);
  return !0;
}
function Z1(t, n) {
  const r = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return r && r.triggerHeartbeat(), t.container.getProvider(n);
}
function la(t) {
  return t == null ? !1 : t.settings !== void 0;
}
const UA = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  Hr = new Wl("app", "Firebase", UA);
class LA {
  constructor(n, r, s) {
    (this._isDeleted = !1),
      (this._options = { ...n }),
      (this._config = { ...r }),
      (this._name = r.name),
      (this._automaticDataCollectionEnabled = r.automaticDataCollectionEnabled),
      (this._container = s),
      this.container.addComponent(new Es("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(n) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = n);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(n) {
    this._isDeleted = n;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Hr.create("app-deleted", { appName: this._name });
  }
}
const to = jA;
function J1(t, n = {}) {
  let r = t;
  typeof n != "object" && (n = { name: n });
  const s = { name: Rh, automaticDataCollectionEnabled: !0, ...n },
    o = s.name;
  if (typeof o != "string" || !o)
    throw Hr.create("bad-app-name", { appName: String(o) });
  if ((r || (r = Y1()), !r)) throw Hr.create("no-options");
  const u = Zu.get(o);
  if (u) {
    if (Ss(r, u.options) && Ss(s, u.config)) return u;
    throw Hr.create("duplicate-app", { appName: o });
  }
  const d = new P6(o);
  for (const p of Ah.values()) d.addComponent(p);
  const h = new LA(r, s, d);
  return Zu.set(o, h), h;
}
function zA(t = Rh) {
  const n = Zu.get(t);
  if (!n && t === Rh && Y1()) return J1();
  if (!n) throw Hr.create("no-app", { appName: t });
  return n;
}
function gs(t, n, r) {
  let s = DA[t] ?? t;
  r && (s += `-${r}`);
  const o = s.match(/\s|\//),
    u = n.match(/\s|\//);
  if (o || u) {
    const d = [`Unable to register library "${s}" with version "${n}":`];
    o &&
      d.push(
        `library name "${s}" contains illegal characters (whitespace or "/")`
      ),
      o && u && d.push("and"),
      u &&
        d.push(
          `version name "${n}" contains illegal characters (whitespace or "/")`
        ),
      Ja.warn(d.join(" "));
    return;
  }
  Hl(new Es(`${s}-version`, () => ({ library: s, version: n }), "VERSION"));
}
const kA = "firebase-heartbeat-database",
  IA = 1,
  Pl = "firebase-heartbeat-store";
let Wf = null;
function W1() {
  return (
    Wf ||
      (Wf = eA(kA, IA, {
        upgrade: (t, n) => {
          switch (n) {
            case 0:
              try {
                t.createObjectStore(Pl);
              } catch (r) {
                console.warn(r);
              }
          }
        },
      }).catch((t) => {
        throw Hr.create("idb-open", { originalErrorMessage: t.message });
      })),
    Wf
  );
}
async function BA(t) {
  try {
    const r = (await W1()).transaction(Pl),
      s = await r.objectStore(Pl).get(ex(t));
    return await r.done, s;
  } catch (n) {
    if (n instanceof Fr) Ja.warn(n.message);
    else {
      const r = Hr.create("idb-get", { originalErrorMessage: n?.message });
      Ja.warn(r.message);
    }
  }
}
async function zv(t, n) {
  try {
    const s = (await W1()).transaction(Pl, "readwrite");
    await s.objectStore(Pl).put(n, ex(t)), await s.done;
  } catch (r) {
    if (r instanceof Fr) Ja.warn(r.message);
    else {
      const s = Hr.create("idb-set", { originalErrorMessage: r?.message });
      Ja.warn(s.message);
    }
  }
}
function ex(t) {
  return `${t.name}!${t.options.appId}`;
}
const HA = 1024,
  PA = 30;
class qA {
  constructor(n) {
    (this.container = n), (this._heartbeatsCache = null);
    const r = this.container.getProvider("app").getImmediate();
    (this._storage = new FA(r)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((s) => ((this._heartbeatsCache = s), s)));
  }
  async triggerHeartbeat() {
    try {
      const r = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        s = kv();
      if (
        (this._heartbeatsCache?.heartbeats == null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          this._heartbeatsCache?.heartbeats == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === s)
      )
        return;
      if (
        (this._heartbeatsCache.heartbeats.push({ date: s, agent: r }),
        this._heartbeatsCache.heartbeats.length > PA)
      ) {
        const o = GA(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(o, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (n) {
      Ja.warn(n);
    }
  }
  async getHeartbeatsHeader() {
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        this._heartbeatsCache?.heartbeats == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const n = kv(),
        { heartbeatsToSend: r, unsentEntries: s } = VA(
          this._heartbeatsCache.heartbeats
        ),
        o = F1(JSON.stringify({ version: 2, heartbeats: r }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        s.length > 0
          ? ((this._heartbeatsCache.heartbeats = s),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        o
      );
    } catch (n) {
      return Ja.warn(n), "";
    }
  }
}
function kv() {
  return new Date().toISOString().substring(0, 10);
}
function VA(t, n = HA) {
  const r = [];
  let s = t.slice();
  for (const o of t) {
    const u = r.find((d) => d.agent === o.agent);
    if (u) {
      if ((u.dates.push(o.date), Iv(r) > n)) {
        u.dates.pop();
        break;
      }
    } else if ((r.push({ agent: o.agent, dates: [o.date] }), Iv(r) > n)) {
      r.pop();
      break;
    }
    s = s.slice(1);
  }
  return { heartbeatsToSend: r, unsentEntries: s };
}
class FA {
  constructor(n) {
    (this.app = n),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return N6()
      ? O6()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const r = await BA(this.app);
      return r?.heartbeats ? r : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(n) {
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return zv(this.app, {
        lastSentHeartbeatDate:
          n.lastSentHeartbeatDate ?? s.lastSentHeartbeatDate,
        heartbeats: n.heartbeats,
      });
    } else return;
  }
  async add(n) {
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return zv(this.app, {
        lastSentHeartbeatDate:
          n.lastSentHeartbeatDate ?? s.lastSentHeartbeatDate,
        heartbeats: [...s.heartbeats, ...n.heartbeats],
      });
    } else return;
  }
}
function Iv(t) {
  return F1(JSON.stringify({ version: 2, heartbeats: t })).length;
}
function GA(t) {
  if (t.length === 0) return -1;
  let n = 0,
    r = t[0].date;
  for (let s = 1; s < t.length; s++)
    t[s].date < r && ((r = t[s].date), (n = s));
  return n;
}
function YA(t) {
  Hl(new Es("platform-logger", (n) => new aA(n), "PRIVATE")),
    Hl(new Es("heartbeat", (n) => new qA(n), "PRIVATE")),
    gs(Th, Uv, t),
    gs(Th, Uv, "esm2020"),
    gs("fire-js", "");
}
YA("");
function tx() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const QA = tx,
  nx = new Wl("auth", "Firebase", tx());
const Ju = new K1("@firebase/auth");
function KA(t, ...n) {
  Ju.logLevel <= mt.WARN && Ju.warn(`Auth (${to}): ${t}`, ...n);
}
function Lu(t, ...n) {
  Ju.logLevel <= mt.ERROR && Ju.error(`Auth (${to}): ${t}`, ...n);
}
function ua(t, ...n) {
  throw sm(t, ...n);
}
function ba(t, ...n) {
  return sm(t, ...n);
}
function ax(t, n, r) {
  const s = { ...QA(), [n]: r };
  return new Wl("auth", "Firebase", s).create(n, { appName: t.name });
}
function Xa(t) {
  return ax(
    t,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function sm(t, ...n) {
  if (typeof t != "string") {
    const r = n[0],
      s = [...n.slice(1)];
    return s[0] && (s[0].appName = t.name), t._errorFactory.create(r, ...s);
  }
  return nx.create(t, ...n);
}
function De(t, n, ...r) {
  if (!t) throw sm(n, ...r);
}
function Ka(t) {
  const n = "INTERNAL ASSERTION FAILED: " + t;
  throw (Lu(n), new Error(n));
}
function Wa(t, n) {
  t || Ka(n);
}
function Ch() {
  return (typeof self < "u" && self.location?.href) || "";
}
function $A() {
  return Bv() === "http:" || Bv() === "https:";
}
function Bv() {
  return (typeof self < "u" && self.location?.protocol) || null;
}
function XA() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    ($A() || R6() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function ZA() {
  if (typeof navigator > "u") return null;
  const t = navigator;
  return (t.languages && t.languages[0]) || t.language || null;
}
class no {
  constructor(n, r) {
    (this.shortDelay = n),
      (this.longDelay = r),
      Wa(r > n, "Short delay should be less than long delay!"),
      (this.isMobile = _6() || A6());
  }
  get() {
    return XA()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
function lm(t, n) {
  Wa(t.emulator, "Emulator should always be set here");
  const { url: r } = t.emulator;
  return n ? `${r}${n.startsWith("/") ? n.slice(1) : n}` : r;
}
class rx {
  static initialize(n, r, s) {
    (this.fetchImpl = n),
      r && (this.headersImpl = r),
      s && (this.responseImpl = s);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    Ka(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    Ka(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    Ka(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
const JA = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
const WA = [
    "/v1/accounts:signInWithCustomToken",
    "/v1/accounts:signInWithEmailLink",
    "/v1/accounts:signInWithIdp",
    "/v1/accounts:signInWithPassword",
    "/v1/accounts:signInWithPhoneNumber",
    "/v1/token",
  ],
  eC = new no(3e4, 6e4);
function Gr(t, n) {
  return t.tenantId && !n.tenantId ? { ...n, tenantId: t.tenantId } : n;
}
async function er(t, n, r, s, o = {}) {
  return ix(t, o, async () => {
    let u = {},
      d = {};
    s && (n === "GET" ? (d = s) : (u = { body: JSON.stringify(s) }));
    const h = eo({ key: t.config.apiKey, ...d }).slice(1),
      p = await t._getAdditionalHeaders();
    (p["Content-Type"] = "application/json"),
      t.languageCode && (p["X-Firebase-Locale"] = t.languageCode);
    const g = { method: n, headers: p, ...u };
    return (
      T6() || (g.referrerPolicy = "no-referrer"),
      t.emulatorConfig &&
        xc(t.emulatorConfig.host) &&
        (g.credentials = "include"),
      rx.fetch()(await sx(t, t.config.apiHost, r, h), g)
    );
  });
}
async function ix(t, n, r) {
  t._canInitEmulator = !1;
  const s = { ...JA, ...n };
  try {
    const o = new nC(t),
      u = await Promise.race([r(), o.promise]);
    o.clearNetworkTimeout();
    const d = await u.json();
    if ("needConfirmation" in d)
      throw Au(t, "account-exists-with-different-credential", d);
    if (u.ok && !("errorMessage" in d)) return d;
    {
      const h = u.ok ? d.errorMessage : d.error.message,
        [p, g] = h.split(" : ");
      if (p === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Au(t, "credential-already-in-use", d);
      if (p === "EMAIL_EXISTS") throw Au(t, "email-already-in-use", d);
      if (p === "USER_DISABLED") throw Au(t, "user-disabled", d);
      const v = s[p] || p.toLowerCase().replace(/[_\s]+/g, "-");
      if (g) throw ax(t, v, g);
      ua(t, v);
    }
  } catch (o) {
    if (o instanceof Fr) throw o;
    ua(t, "network-request-failed", { message: String(o) });
  }
}
async function ao(t, n, r, s, o = {}) {
  const u = await er(t, n, r, s, o);
  return (
    "mfaPendingCredential" in u &&
      ua(t, "multi-factor-auth-required", { _serverResponse: u }),
    u
  );
}
async function sx(t, n, r, s) {
  const o = `${n}${r}?${s}`,
    u = t,
    d = u.config.emulator ? lm(t.config, o) : `${t.config.apiScheme}://${o}`;
  return WA.includes(r) &&
    (await u._persistenceManagerAvailable, u._getPersistenceType() === "COOKIE")
    ? u._getPersistence()._getFinalTarget(d).toString()
    : d;
}
function tC(t) {
  switch (t) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
class nC {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(n) {
    (this.auth = n),
      (this.timer = null),
      (this.promise = new Promise((r, s) => {
        this.timer = setTimeout(
          () => s(ba(this.auth, "network-request-failed")),
          eC.get()
        );
      }));
  }
}
function Au(t, n, r) {
  const s = { appName: t.name };
  r.email && (s.email = r.email),
    r.phoneNumber && (s.phoneNumber = r.phoneNumber);
  const o = ba(t, n, s);
  return (o.customData._tokenResponse = r), o;
}
function Hv(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class aC {
  constructor(n) {
    if (
      ((this.siteKey = ""),
      (this.recaptchaEnforcementState = []),
      n.recaptchaKey === void 0)
    )
      throw new Error("recaptchaKey undefined");
    (this.siteKey = n.recaptchaKey.split("/")[3]),
      (this.recaptchaEnforcementState = n.recaptchaEnforcementState);
  }
  getProviderEnforcementState(n) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const r of this.recaptchaEnforcementState)
      if (r.provider && r.provider === n) return tC(r.enforcementState);
    return null;
  }
  isProviderEnabled(n) {
    return (
      this.getProviderEnforcementState(n) === "ENFORCE" ||
      this.getProviderEnforcementState(n) === "AUDIT"
    );
  }
  isAnyProviderEnabled() {
    return (
      this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") ||
      this.isProviderEnabled("PHONE_PROVIDER")
    );
  }
}
async function rC(t, n) {
  return er(t, "GET", "/v2/recaptchaConfig", Gr(t, n));
}
async function iC(t, n) {
  return er(t, "POST", "/v1/accounts:delete", n);
}
async function Wu(t, n) {
  return er(t, "POST", "/v1/accounts:lookup", n);
}
function Ll(t) {
  if (t)
    try {
      const n = new Date(Number(t));
      if (!isNaN(n.getTime())) return n.toUTCString();
    } catch {}
}
async function sC(t, n = !1) {
  const r = Ea(t),
    s = await r.getIdToken(n),
    o = om(s);
  De(o && o.exp && o.auth_time && o.iat, r.auth, "internal-error");
  const u = typeof o.firebase == "object" ? o.firebase : void 0,
    d = u?.sign_in_provider;
  return {
    claims: o,
    token: s,
    authTime: Ll(eh(o.auth_time)),
    issuedAtTime: Ll(eh(o.iat)),
    expirationTime: Ll(eh(o.exp)),
    signInProvider: d || null,
    signInSecondFactor: u?.sign_in_second_factor || null,
  };
}
function eh(t) {
  return Number(t) * 1e3;
}
function om(t) {
  const [n, r, s] = t.split(".");
  if (n === void 0 || r === void 0 || s === void 0)
    return Lu("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const o = G1(r);
    return o
      ? JSON.parse(o)
      : (Lu("Failed to decode base64 JWT payload"), null);
  } catch (o) {
    return Lu("Caught error parsing JWT payload as JSON", o?.toString()), null;
  }
}
function Pv(t) {
  const n = om(t);
  return (
    De(n, "internal-error"),
    De(typeof n.exp < "u", "internal-error"),
    De(typeof n.iat < "u", "internal-error"),
    Number(n.exp) - Number(n.iat)
  );
}
async function ws(t, n, r = !1) {
  if (r) return n;
  try {
    return await n;
  } catch (s) {
    throw (
      (s instanceof Fr &&
        lC(s) &&
        t.auth.currentUser === t &&
        (await t.auth.signOut()),
      s)
    );
  }
}
function lC({ code: t }) {
  return t === "auth/user-disabled" || t === "auth/user-token-expired";
}
class oC {
  constructor(n) {
    (this.user = n),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(n) {
    if (n) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const s =
        (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 3e5;
      return Math.max(0, s);
    }
  }
  schedule(n = !1) {
    if (!this.isRunning) return;
    const r = this.getInterval(n);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, r);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (n) {
      n?.code === "auth/network-request-failed" && this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
class Nh {
  constructor(n, r) {
    (this.createdAt = n), (this.lastLoginAt = r), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = Ll(this.lastLoginAt)),
      (this.creationTime = Ll(this.createdAt));
  }
  _copy(n) {
    (this.createdAt = n.createdAt),
      (this.lastLoginAt = n.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
async function ec(t) {
  const n = t.auth,
    r = await t.getIdToken(),
    s = await ws(t, Wu(n, { idToken: r }));
  De(s?.users.length, n, "internal-error");
  const o = s.users[0];
  t._notifyReloadListener(o);
  const u = o.providerUserInfo?.length ? lx(o.providerUserInfo) : [],
    d = cC(t.providerData, u),
    h = t.isAnonymous,
    p = !(t.email && o.passwordHash) && !d?.length,
    g = h ? p : !1,
    v = {
      uid: o.localId,
      displayName: o.displayName || null,
      photoURL: o.photoUrl || null,
      email: o.email || null,
      emailVerified: o.emailVerified || !1,
      phoneNumber: o.phoneNumber || null,
      tenantId: o.tenantId || null,
      providerData: d,
      metadata: new Nh(o.createdAt, o.lastLoginAt),
      isAnonymous: g,
    };
  Object.assign(t, v);
}
async function uC(t) {
  const n = Ea(t);
  await ec(n),
    await n.auth._persistUserIfCurrent(n),
    n.auth._notifyListenersIfCurrent(n);
}
function cC(t, n) {
  return [
    ...t.filter((s) => !n.some((o) => o.providerId === s.providerId)),
    ...n,
  ];
}
function lx(t) {
  return t.map(({ providerId: n, ...r }) => ({
    providerId: n,
    uid: r.rawId || "",
    displayName: r.displayName || null,
    email: r.email || null,
    phoneNumber: r.phoneNumber || null,
    photoURL: r.photoUrl || null,
  }));
}
async function dC(t, n) {
  const r = await ix(t, {}, async () => {
    const s = eo({ grant_type: "refresh_token", refresh_token: n }).slice(1),
      { tokenApiHost: o, apiKey: u } = t.config,
      d = await sx(t, o, "/v1/token", `key=${u}`),
      h = await t._getAdditionalHeaders();
    h["Content-Type"] = "application/x-www-form-urlencoded";
    const p = { method: "POST", headers: h, body: s };
    return (
      t.emulatorConfig &&
        xc(t.emulatorConfig.host) &&
        (p.credentials = "include"),
      rx.fetch()(d, p)
    );
  });
  return {
    accessToken: r.access_token,
    expiresIn: r.expires_in,
    refreshToken: r.refresh_token,
  };
}
async function fC(t, n) {
  return er(t, "POST", "/v2/accounts:revokeToken", Gr(t, n));
}
class ys {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(n) {
    De(n.idToken, "internal-error"),
      De(typeof n.idToken < "u", "internal-error"),
      De(typeof n.refreshToken < "u", "internal-error");
    const r =
      "expiresIn" in n && typeof n.expiresIn < "u"
        ? Number(n.expiresIn)
        : Pv(n.idToken);
    this.updateTokensAndExpiration(n.idToken, n.refreshToken, r);
  }
  updateFromIdToken(n) {
    De(n.length !== 0, "internal-error");
    const r = Pv(n);
    this.updateTokensAndExpiration(n, null, r);
  }
  async getToken(n, r = !1) {
    return !r && this.accessToken && !this.isExpired
      ? this.accessToken
      : (De(this.refreshToken, n, "user-token-expired"),
        this.refreshToken
          ? (await this.refresh(n, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(n, r) {
    const { accessToken: s, refreshToken: o, expiresIn: u } = await dC(n, r);
    this.updateTokensAndExpiration(s, o, Number(u));
  }
  updateTokensAndExpiration(n, r, s) {
    (this.refreshToken = r || null),
      (this.accessToken = n || null),
      (this.expirationTime = Date.now() + s * 1e3);
  }
  static fromJSON(n, r) {
    const { refreshToken: s, accessToken: o, expirationTime: u } = r,
      d = new ys();
    return (
      s &&
        (De(typeof s == "string", "internal-error", { appName: n }),
        (d.refreshToken = s)),
      o &&
        (De(typeof o == "string", "internal-error", { appName: n }),
        (d.accessToken = o)),
      u &&
        (De(typeof u == "number", "internal-error", { appName: n }),
        (d.expirationTime = u)),
      d
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(n) {
    (this.accessToken = n.accessToken),
      (this.refreshToken = n.refreshToken),
      (this.expirationTime = n.expirationTime);
  }
  _clone() {
    return Object.assign(new ys(), this.toJSON());
  }
  _performRefresh() {
    return Ka("not implemented");
  }
}
function Nr(t, n) {
  De(typeof t == "string" || typeof t > "u", "internal-error", { appName: n });
}
class oa {
  constructor({ uid: n, auth: r, stsTokenManager: s, ...o }) {
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new oC(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = s),
      (this.accessToken = s.accessToken),
      (this.displayName = o.displayName || null),
      (this.email = o.email || null),
      (this.emailVerified = o.emailVerified || !1),
      (this.phoneNumber = o.phoneNumber || null),
      (this.photoURL = o.photoURL || null),
      (this.isAnonymous = o.isAnonymous || !1),
      (this.tenantId = o.tenantId || null),
      (this.providerData = o.providerData ? [...o.providerData] : []),
      (this.metadata = new Nh(o.createdAt || void 0, o.lastLoginAt || void 0));
  }
  async getIdToken(n) {
    const r = await ws(this, this.stsTokenManager.getToken(this.auth, n));
    return (
      De(r, this.auth, "internal-error"),
      this.accessToken !== r &&
        ((this.accessToken = r),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      r
    );
  }
  getIdTokenResult(n) {
    return sC(this, n);
  }
  reload() {
    return uC(this);
  }
  _assign(n) {
    this !== n &&
      (De(this.uid === n.uid, this.auth, "internal-error"),
      (this.displayName = n.displayName),
      (this.photoURL = n.photoURL),
      (this.email = n.email),
      (this.emailVerified = n.emailVerified),
      (this.phoneNumber = n.phoneNumber),
      (this.isAnonymous = n.isAnonymous),
      (this.tenantId = n.tenantId),
      (this.providerData = n.providerData.map((r) => ({ ...r }))),
      this.metadata._copy(n.metadata),
      this.stsTokenManager._assign(n.stsTokenManager));
  }
  _clone(n) {
    const r = new oa({
      ...this,
      auth: n,
      stsTokenManager: this.stsTokenManager._clone(),
    });
    return r.metadata._copy(this.metadata), r;
  }
  _onReload(n) {
    De(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = n),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(n) {
    this.reloadListener ? this.reloadListener(n) : (this.reloadUserInfo = n);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(n, r = !1) {
    let s = !1;
    n.idToken &&
      n.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(n), (s = !0)),
      r && (await ec(this)),
      await this.auth._persistUserIfCurrent(this),
      s && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (la(this.auth.app)) return Promise.reject(Xa(this.auth));
    const n = await this.getIdToken();
    return (
      await ws(this, iC(this.auth, { idToken: n })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return {
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((n) => ({ ...n })),
      stsTokenManager: this.stsTokenManager.toJSON(),
      _redirectEventId: this._redirectEventId,
      ...this.metadata.toJSON(),
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name,
    };
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(n, r) {
    const s = r.displayName ?? void 0,
      o = r.email ?? void 0,
      u = r.phoneNumber ?? void 0,
      d = r.photoURL ?? void 0,
      h = r.tenantId ?? void 0,
      p = r._redirectEventId ?? void 0,
      g = r.createdAt ?? void 0,
      v = r.lastLoginAt ?? void 0,
      {
        uid: b,
        emailVerified: x,
        isAnonymous: R,
        providerData: E,
        stsTokenManager: T,
      } = r;
    De(b && T, n, "internal-error");
    const _ = ys.fromJSON(this.name, T);
    De(typeof b == "string", n, "internal-error"),
      Nr(s, n.name),
      Nr(o, n.name),
      De(typeof x == "boolean", n, "internal-error"),
      De(typeof R == "boolean", n, "internal-error"),
      Nr(u, n.name),
      Nr(d, n.name),
      Nr(h, n.name),
      Nr(p, n.name),
      Nr(g, n.name),
      Nr(v, n.name);
    const U = new oa({
      uid: b,
      auth: n,
      email: o,
      emailVerified: x,
      displayName: s,
      isAnonymous: R,
      photoURL: d,
      phoneNumber: u,
      tenantId: h,
      stsTokenManager: _,
      createdAt: g,
      lastLoginAt: v,
    });
    return (
      E && Array.isArray(E) && (U.providerData = E.map((z) => ({ ...z }))),
      p && (U._redirectEventId = p),
      U
    );
  }
  static async _fromIdTokenResponse(n, r, s = !1) {
    const o = new ys();
    o.updateFromServerResponse(r);
    const u = new oa({
      uid: r.localId,
      auth: n,
      stsTokenManager: o,
      isAnonymous: s,
    });
    return await ec(u), u;
  }
  static async _fromGetAccountInfoResponse(n, r, s) {
    const o = r.users[0];
    De(o.localId !== void 0, "internal-error");
    const u = o.providerUserInfo !== void 0 ? lx(o.providerUserInfo) : [],
      d = !(o.email && o.passwordHash) && !u?.length,
      h = new ys();
    h.updateFromIdToken(s);
    const p = new oa({
        uid: o.localId,
        auth: n,
        stsTokenManager: h,
        isAnonymous: d,
      }),
      g = {
        uid: o.localId,
        displayName: o.displayName || null,
        photoURL: o.photoUrl || null,
        email: o.email || null,
        emailVerified: o.emailVerified || !1,
        phoneNumber: o.phoneNumber || null,
        tenantId: o.tenantId || null,
        providerData: u,
        metadata: new Nh(o.createdAt, o.lastLoginAt),
        isAnonymous: !(o.email && o.passwordHash) && !u?.length,
      };
    return Object.assign(p, g), p;
  }
}
const qv = new Map();
function $a(t) {
  Wa(t instanceof Function, "Expected a class definition");
  let n = qv.get(t);
  return n
    ? (Wa(n instanceof t, "Instance stored in cache mismatched with class"), n)
    : ((n = new t()), qv.set(t, n), n);
}
class ox {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(n, r) {
    this.storage[n] = r;
  }
  async _get(n) {
    const r = this.storage[n];
    return r === void 0 ? null : r;
  }
  async _remove(n) {
    delete this.storage[n];
  }
  _addListener(n, r) {}
  _removeListener(n, r) {}
}
ox.type = "NONE";
const Vv = ox;
function zu(t, n, r) {
  return `firebase:${t}:${n}:${r}`;
}
class vs {
  constructor(n, r, s) {
    (this.persistence = n), (this.auth = r), (this.userKey = s);
    const { config: o, name: u } = this.auth;
    (this.fullUserKey = zu(this.userKey, o.apiKey, u)),
      (this.fullPersistenceKey = zu("persistence", o.apiKey, u)),
      (this.boundEventHandler = r._onStorageEvent.bind(r)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(n) {
    return this.persistence._set(this.fullUserKey, n.toJSON());
  }
  async getCurrentUser() {
    const n = await this.persistence._get(this.fullUserKey);
    if (!n) return null;
    if (typeof n == "string") {
      const r = await Wu(this.auth, { idToken: n }).catch(() => {});
      return r ? oa._fromGetAccountInfoResponse(this.auth, r, n) : null;
    }
    return oa._fromJSON(this.auth, n);
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(n) {
    if (this.persistence === n) return;
    const r = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = n), r))
      return this.setCurrentUser(r);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(n, r, s = "authUser") {
    if (!r.length) return new vs($a(Vv), n, s);
    const o = (
      await Promise.all(
        r.map(async (g) => {
          if (await g._isAvailable()) return g;
        })
      )
    ).filter((g) => g);
    let u = o[0] || $a(Vv);
    const d = zu(s, n.config.apiKey, n.name);
    let h = null;
    for (const g of r)
      try {
        const v = await g._get(d);
        if (v) {
          let b;
          if (typeof v == "string") {
            const x = await Wu(n, { idToken: v }).catch(() => {});
            if (!x) break;
            b = await oa._fromGetAccountInfoResponse(n, x, v);
          } else b = oa._fromJSON(n, v);
          g !== u && (h = b), (u = g);
          break;
        }
      } catch {}
    const p = o.filter((g) => g._shouldAllowMigration);
    return !u._shouldAllowMigration || !p.length
      ? new vs(u, n, s)
      : ((u = p[0]),
        h && (await u._set(d, h.toJSON())),
        await Promise.all(
          r.map(async (g) => {
            if (g !== u)
              try {
                await g._remove(d);
              } catch {}
          })
        ),
        new vs(u, n, s));
  }
}
function Fv(t) {
  const n = t.toLowerCase();
  if (n.includes("opera/") || n.includes("opr/") || n.includes("opios/"))
    return "Opera";
  if (fx(n)) return "IEMobile";
  if (n.includes("msie") || n.includes("trident/")) return "IE";
  if (n.includes("edge/")) return "Edge";
  if (ux(n)) return "Firefox";
  if (n.includes("silk/")) return "Silk";
  if (mx(n)) return "Blackberry";
  if (px(n)) return "Webos";
  if (cx(n)) return "Safari";
  if ((n.includes("chrome/") || dx(n)) && !n.includes("edge/")) return "Chrome";
  if (hx(n)) return "Android";
  {
    const r = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      s = t.match(r);
    if (s?.length === 2) return s[1];
  }
  return "Other";
}
function ux(t = rn()) {
  return /firefox\//i.test(t);
}
function cx(t = rn()) {
  const n = t.toLowerCase();
  return (
    n.includes("safari/") &&
    !n.includes("chrome/") &&
    !n.includes("crios/") &&
    !n.includes("android")
  );
}
function dx(t = rn()) {
  return /crios\//i.test(t);
}
function fx(t = rn()) {
  return /iemobile/i.test(t);
}
function hx(t = rn()) {
  return /android/i.test(t);
}
function mx(t = rn()) {
  return /blackberry/i.test(t);
}
function px(t = rn()) {
  return /webos/i.test(t);
}
function um(t = rn()) {
  return (
    /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t))
  );
}
function hC(t = rn()) {
  return um(t) && !!window.navigator?.standalone;
}
function mC() {
  return C6() && document.documentMode === 10;
}
function gx(t = rn()) {
  return um(t) || hx(t) || px(t) || mx(t) || /windows phone/i.test(t) || fx(t);
}
function yx(t, n = []) {
  let r;
  switch (t) {
    case "Browser":
      r = Fv(rn());
      break;
    case "Worker":
      r = `${Fv(rn())}-${t}`;
      break;
    default:
      r = t;
  }
  const s = n.length ? n.join(",") : "FirebaseCore-web";
  return `${r}/JsCore/${to}/${s}`;
}
class pC {
  constructor(n) {
    (this.auth = n), (this.queue = []);
  }
  pushCallback(n, r) {
    const s = (u) =>
      new Promise((d, h) => {
        try {
          const p = n(u);
          d(p);
        } catch (p) {
          h(p);
        }
      });
    (s.onAbort = r), this.queue.push(s);
    const o = this.queue.length - 1;
    return () => {
      this.queue[o] = () => Promise.resolve();
    };
  }
  async runMiddleware(n) {
    if (this.auth.currentUser === n) return;
    const r = [];
    try {
      for (const s of this.queue) await s(n), s.onAbort && r.push(s.onAbort);
    } catch (s) {
      r.reverse();
      for (const o of r)
        try {
          o();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: s?.message,
      });
    }
  }
}
async function gC(t, n = {}) {
  return er(t, "GET", "/v2/passwordPolicy", Gr(t, n));
}
const yC = 6;
class vC {
  constructor(n) {
    const r = n.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        r.minPasswordLength ?? yC),
      r.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = r.maxPasswordLength),
      r.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          r.containsLowercaseCharacter),
      r.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          r.containsUppercaseCharacter),
      r.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          r.containsNumericCharacter),
      r.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          r.containsNonAlphanumericCharacter),
      (this.enforcementState = n.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        n.allowedNonAlphanumericCharacters?.join("") ?? ""),
      (this.forceUpgradeOnSignin = n.forceUpgradeOnSignin ?? !1),
      (this.schemaVersion = n.schemaVersion);
  }
  validatePassword(n) {
    const r = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(n, r),
      this.validatePasswordCharacterOptions(n, r),
      r.isValid && (r.isValid = r.meetsMinPasswordLength ?? !0),
      r.isValid && (r.isValid = r.meetsMaxPasswordLength ?? !0),
      r.isValid && (r.isValid = r.containsLowercaseLetter ?? !0),
      r.isValid && (r.isValid = r.containsUppercaseLetter ?? !0),
      r.isValid && (r.isValid = r.containsNumericCharacter ?? !0),
      r.isValid && (r.isValid = r.containsNonAlphanumericCharacter ?? !0),
      r
    );
  }
  validatePasswordLengthOptions(n, r) {
    const s = this.customStrengthOptions.minPasswordLength,
      o = this.customStrengthOptions.maxPasswordLength;
    s && (r.meetsMinPasswordLength = n.length >= s),
      o && (r.meetsMaxPasswordLength = n.length <= o);
  }
  validatePasswordCharacterOptions(n, r) {
    this.updatePasswordCharacterOptionsStatuses(r, !1, !1, !1, !1);
    let s;
    for (let o = 0; o < n.length; o++)
      (s = n.charAt(o)),
        this.updatePasswordCharacterOptionsStatuses(
          r,
          s >= "a" && s <= "z",
          s >= "A" && s <= "Z",
          s >= "0" && s <= "9",
          this.allowedNonAlphanumericCharacters.includes(s)
        );
  }
  updatePasswordCharacterOptionsStatuses(n, r, s, o, u) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (n.containsLowercaseLetter || (n.containsLowercaseLetter = r)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (n.containsUppercaseLetter || (n.containsUppercaseLetter = s)),
      this.customStrengthOptions.containsNumericCharacter &&
        (n.containsNumericCharacter || (n.containsNumericCharacter = o)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (n.containsNonAlphanumericCharacter ||
          (n.containsNonAlphanumericCharacter = u));
  }
}
class bC {
  constructor(n, r, s, o) {
    (this.app = n),
      (this.heartbeatServiceProvider = r),
      (this.appCheckServiceProvider = s),
      (this.config = o),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Gv(this)),
      (this.idTokenSubscription = new Gv(this)),
      (this.beforeStateQueue = new pC(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = nx),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this._resolvePersistenceManagerAvailable = void 0),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = n.name),
      (this.clientVersion = o.sdkClientVersion),
      (this._persistenceManagerAvailable = new Promise(
        (u) => (this._resolvePersistenceManagerAvailable = u)
      ));
  }
  _initializeWithPersistence(n, r) {
    return (
      r && (this._popupRedirectResolver = $a(r)),
      (this._initializationPromise = this.queue(async () => {
        if (
          !this._deleted &&
          ((this.persistenceManager = await vs.create(this, n)),
          this._resolvePersistenceManagerAvailable?.(),
          !this._deleted)
        ) {
          if (this._popupRedirectResolver?._shouldInitProactively)
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(r),
            (this.lastNotifiedUid = this.currentUser?.uid || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const n = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !n)) {
      if (this.currentUser && n && this.currentUser.uid === n.uid) {
        this._currentUser._assign(n), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(n, !0);
    }
  }
  async initializeCurrentUserFromIdToken(n) {
    try {
      const r = await Wu(this, { idToken: n }),
        s = await oa._fromGetAccountInfoResponse(this, r, n);
      await this.directlySetCurrentUser(s);
    } catch (r) {
      console.warn(
        "FirebaseServerApp could not login user with provided authIdToken: ",
        r
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(n) {
    if (la(this.app)) {
      const u = this.app.settings.authIdToken;
      return u
        ? new Promise((d) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(u).then(d, d)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let s = r,
      o = !1;
    if (n && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const u = this.redirectUser?._redirectEventId,
        d = s?._redirectEventId,
        h = await this.tryRedirectSignIn(n);
      (!u || u === d) && h?.user && ((s = h.user), (o = !0));
    }
    if (!s) return this.directlySetCurrentUser(null);
    if (!s._redirectEventId) {
      if (o)
        try {
          await this.beforeStateQueue.runMiddleware(s);
        } catch (u) {
          (s = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(u)
            );
        }
      return s
        ? this.reloadAndSetCurrentUserOrClear(s)
        : this.directlySetCurrentUser(null);
    }
    return (
      De(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === s._redirectEventId
        ? this.directlySetCurrentUser(s)
        : this.reloadAndSetCurrentUserOrClear(s)
    );
  }
  async tryRedirectSignIn(n) {
    let r = null;
    try {
      r = await this._popupRedirectResolver._completeRedirectFn(this, n, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return r;
  }
  async reloadAndSetCurrentUserOrClear(n) {
    try {
      await ec(n);
    } catch (r) {
      if (r?.code !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(n);
  }
  useDeviceLanguage() {
    this.languageCode = ZA();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(n) {
    if (la(this.app)) return Promise.reject(Xa(this));
    const r = n ? Ea(n) : null;
    return (
      r &&
        De(
          r.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(r && r._clone(this))
    );
  }
  async _updateCurrentUser(n, r = !1) {
    if (!this._deleted)
      return (
        n && De(this.tenantId === n.tenantId, this, "tenant-id-mismatch"),
        r || (await this.beforeStateQueue.runMiddleware(n)),
        this.queue(async () => {
          await this.directlySetCurrentUser(n), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return la(this.app)
      ? Promise.reject(Xa(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(n) {
    return la(this.app)
      ? Promise.reject(Xa(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence($a(n));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(n) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const r = this._getPasswordPolicyInternal();
    return r.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {}
          )
        )
      : r.validatePassword(n);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const n = await gC(this),
      r = new vC(n);
    this.tenantId === null
      ? (this._projectPasswordPolicy = r)
      : (this._tenantPasswordPolicies[this.tenantId] = r);
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(n) {
    this._errorFactory = new Wl("auth", "Firebase", n());
  }
  onAuthStateChanged(n, r, s) {
    return this.registerStateListener(this.authStateSubscription, n, r, s);
  }
  beforeAuthStateChanged(n, r) {
    return this.beforeStateQueue.pushCallback(n, r);
  }
  onIdTokenChanged(n, r, s) {
    return this.registerStateListener(this.idTokenSubscription, n, r, s);
  }
  authStateReady() {
    return new Promise((n, r) => {
      if (this.currentUser) n();
      else {
        const s = this.onAuthStateChanged(() => {
          s(), n();
        }, r);
      }
    });
  }
  async revokeAccessToken(n) {
    if (this.currentUser) {
      const r = await this.currentUser.getIdToken(),
        s = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: n,
          idToken: r,
        };
      this.tenantId != null && (s.tenantId = this.tenantId), await fC(this, s);
    }
  }
  toJSON() {
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: this._currentUser?.toJSON(),
    };
  }
  async _setRedirectUser(n, r) {
    const s = await this.getOrInitRedirectPersistenceManager(r);
    return n === null ? s.removeCurrentUser() : s.setCurrentUser(n);
  }
  async getOrInitRedirectPersistenceManager(n) {
    if (!this.redirectPersistenceManager) {
      const r = (n && $a(n)) || this._popupRedirectResolver;
      De(r, this, "argument-error"),
        (this.redirectPersistenceManager = await vs.create(
          this,
          [$a(r._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(n) {
    return (
      this._isInitialized && (await this.queue(async () => {})),
      this._currentUser?._redirectEventId === n
        ? this._currentUser
        : this.redirectUser?._redirectEventId === n
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(n) {
    if (n === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(n));
  }
  _notifyListenersIfCurrent(n) {
    n === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const n = this.currentUser?.uid ?? null;
    this.lastNotifiedUid !== n &&
      ((this.lastNotifiedUid = n),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(n, r, s, o) {
    if (this._deleted) return () => {};
    const u = typeof r == "function" ? r : r.next.bind(r);
    let d = !1;
    const h = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (De(h, this, "internal-error"),
      h.then(() => {
        d || u(this.currentUser);
      }),
      typeof r == "function")
    ) {
      const p = n.addObserver(r, s, o);
      return () => {
        (d = !0), p();
      };
    } else {
      const p = n.addObserver(r);
      return () => {
        (d = !0), p();
      };
    }
  }
  async directlySetCurrentUser(n) {
    this.currentUser &&
      this.currentUser !== n &&
      this._currentUser._stopProactiveRefresh(),
      n && this.isProactiveRefreshEnabled && n._startProactiveRefresh(),
      (this.currentUser = n),
      n
        ? await this.assertedPersistence.setCurrentUser(n)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(n) {
    return (this.operations = this.operations.then(n, n)), this.operations;
  }
  get assertedPersistence() {
    return (
      De(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(n) {
    !n ||
      this.frameworks.includes(n) ||
      (this.frameworks.push(n),
      this.frameworks.sort(),
      (this.clientVersion = yx(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    const n = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await this.heartbeatServiceProvider
      .getImmediate({ optional: !0 })
      ?.getHeartbeatsHeader();
    r && (n["X-Firebase-Client"] = r);
    const s = await this._getAppCheckToken();
    return s && (n["X-Firebase-AppCheck"] = s), n;
  }
  async _getAppCheckToken() {
    if (la(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const n = await this.appCheckServiceProvider
      .getImmediate({ optional: !0 })
      ?.getToken();
    return (
      n?.error && KA(`Error while retrieving App Check token: ${n.error}`),
      n?.token
    );
  }
}
function Ri(t) {
  return Ea(t);
}
class Gv {
  constructor(n) {
    (this.auth = n),
      (this.observer = null),
      (this.addObserver = L6((r) => (this.observer = r)));
  }
  get next() {
    return (
      De(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
let Sc = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function xC(t) {
  Sc = t;
}
function vx(t) {
  return Sc.loadJS(t);
}
function SC() {
  return Sc.recaptchaEnterpriseScript;
}
function EC() {
  return Sc.gapiScript;
}
function wC(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
class _C {
  constructor() {
    this.enterprise = new TC();
  }
  ready(n) {
    n();
  }
  execute(n, r) {
    return Promise.resolve("token");
  }
  render(n, r) {
    return "";
  }
}
class TC {
  ready(n) {
    n();
  }
  execute(n, r) {
    return Promise.resolve("token");
  }
  render(n, r) {
    return "";
  }
}
const RC = "recaptcha-enterprise",
  bx = "NO_RECAPTCHA";
class AC {
  constructor(n) {
    (this.type = RC), (this.auth = Ri(n));
  }
  async verify(n = "verify", r = !1) {
    async function s(u) {
      if (!r) {
        if (u.tenantId == null && u._agentRecaptchaConfig != null)
          return u._agentRecaptchaConfig.siteKey;
        if (
          u.tenantId != null &&
          u._tenantRecaptchaConfigs[u.tenantId] !== void 0
        )
          return u._tenantRecaptchaConfigs[u.tenantId].siteKey;
      }
      return new Promise(async (d, h) => {
        rC(u, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE",
        })
          .then((p) => {
            if (p.recaptchaKey === void 0)
              h(new Error("recaptcha Enterprise site key undefined"));
            else {
              const g = new aC(p);
              return (
                u.tenantId == null
                  ? (u._agentRecaptchaConfig = g)
                  : (u._tenantRecaptchaConfigs[u.tenantId] = g),
                d(g.siteKey)
              );
            }
          })
          .catch((p) => {
            h(p);
          });
      });
    }
    function o(u, d, h) {
      const p = window.grecaptcha;
      Hv(p)
        ? p.enterprise.ready(() => {
            p.enterprise
              .execute(u, { action: n })
              .then((g) => {
                d(g);
              })
              .catch(() => {
                d(bx);
              });
          })
        : h(Error("No reCAPTCHA enterprise script loaded."));
    }
    return this.auth.settings.appVerificationDisabledForTesting
      ? new _C().execute("siteKey", { action: "verify" })
      : new Promise((u, d) => {
          s(this.auth)
            .then((h) => {
              if (!r && Hv(window.grecaptcha)) o(h, u, d);
              else {
                if (typeof window > "u") {
                  d(
                    new Error("RecaptchaVerifier is only supported in browser")
                  );
                  return;
                }
                let p = SC();
                p.length !== 0 && (p += h),
                  vx(p)
                    .then(() => {
                      o(h, u, d);
                    })
                    .catch((g) => {
                      d(g);
                    });
              }
            })
            .catch((h) => {
              d(h);
            });
        });
  }
}
async function Yv(t, n, r, s = !1, o = !1) {
  const u = new AC(t);
  let d;
  if (o) d = bx;
  else
    try {
      d = await u.verify(r);
    } catch {
      d = await u.verify(r, !0);
    }
  const h = { ...n };
  if (r === "mfaSmsEnrollment" || r === "mfaSmsSignIn") {
    if ("phoneEnrollmentInfo" in h) {
      const p = h.phoneEnrollmentInfo.phoneNumber,
        g = h.phoneEnrollmentInfo.recaptchaToken;
      Object.assign(h, {
        phoneEnrollmentInfo: {
          phoneNumber: p,
          recaptchaToken: g,
          captchaResponse: d,
          clientType: "CLIENT_TYPE_WEB",
          recaptchaVersion: "RECAPTCHA_ENTERPRISE",
        },
      });
    } else if ("phoneSignInInfo" in h) {
      const p = h.phoneSignInInfo.recaptchaToken;
      Object.assign(h, {
        phoneSignInInfo: {
          recaptchaToken: p,
          captchaResponse: d,
          clientType: "CLIENT_TYPE_WEB",
          recaptchaVersion: "RECAPTCHA_ENTERPRISE",
        },
      });
    }
    return h;
  }
  return (
    s
      ? Object.assign(h, { captchaResp: d })
      : Object.assign(h, { captchaResponse: d }),
    Object.assign(h, { clientType: "CLIENT_TYPE_WEB" }),
    Object.assign(h, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
    h
  );
}
async function Oh(t, n, r, s, o) {
  if (t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
    const u = await Yv(t, n, r, r === "getOobCode");
    return s(t, u);
  } else
    return s(t, n).catch(async (u) => {
      if (u.code === "auth/missing-recaptcha-token") {
        console.log(
          `${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
        );
        const d = await Yv(t, n, r, r === "getOobCode");
        return s(t, d);
      } else return Promise.reject(u);
    });
}
function CC(t, n) {
  const r = Z1(t, "auth");
  if (r.isInitialized()) {
    const o = r.getImmediate(),
      u = r.getOptions();
    if (Ss(u, n ?? {})) return o;
    ua(o, "already-initialized");
  }
  return r.initialize({ options: n });
}
function NC(t, n) {
  const r = n?.persistence || [],
    s = (Array.isArray(r) ? r : [r]).map($a);
  n?.errorMap && t._updateErrorMap(n.errorMap),
    t._initializeWithPersistence(s, n?.popupRedirectResolver);
}
function OC(t, n, r) {
  const s = Ri(t);
  De(/^https?:\/\//.test(n), s, "invalid-emulator-scheme");
  const o = !1,
    u = xx(n),
    { host: d, port: h } = jC(n),
    p = h === null ? "" : `:${h}`,
    g = { url: `${u}//${d}${p}/` },
    v = Object.freeze({
      host: d,
      port: h,
      protocol: u.replace(":", ""),
      options: Object.freeze({ disableWarnings: o }),
    });
  if (!s._canInitEmulator) {
    De(s.config.emulator && s.emulatorConfig, s, "emulator-config-failed"),
      De(
        Ss(g, s.config.emulator) && Ss(v, s.emulatorConfig),
        s,
        "emulator-config-failed"
      );
    return;
  }
  (s.config.emulator = g),
    (s.emulatorConfig = v),
    (s.settings.appVerificationDisabledForTesting = !0),
    xc(d) ? (x6(`${u}//${d}${p}`), w6("Auth", !0)) : DC();
}
function xx(t) {
  const n = t.indexOf(":");
  return n < 0 ? "" : t.substr(0, n + 1);
}
function jC(t) {
  const n = xx(t),
    r = /(\/\/)?([^?#/]+)/.exec(t.substr(n.length));
  if (!r) return { host: "", port: null };
  const s = r[2].split("@").pop() || "",
    o = /^(\[[^\]]+\])(:|$)/.exec(s);
  if (o) {
    const u = o[1];
    return { host: u, port: Qv(s.substr(u.length + 1)) };
  } else {
    const [u, d] = s.split(":");
    return { host: u, port: Qv(d) };
  }
}
function Qv(t) {
  if (!t) return null;
  const n = Number(t);
  return isNaN(n) ? null : n;
}
function DC() {
  function t() {
    const n = document.createElement("p"),
      r = n.style;
    (n.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (r.position = "fixed"),
      (r.width = "100%"),
      (r.backgroundColor = "#ffffff"),
      (r.border = ".1em solid #000000"),
      (r.color = "#b50000"),
      (r.bottom = "0px"),
      (r.left = "0px"),
      (r.margin = "0px"),
      (r.zIndex = "10000"),
      (r.textAlign = "center"),
      n.classList.add("firebase-emulator-warning"),
      document.body.appendChild(n);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", t)
        : t());
}
class cm {
  constructor(n, r) {
    (this.providerId = n), (this.signInMethod = r);
  }
  toJSON() {
    return Ka("not implemented");
  }
  _getIdTokenResponse(n) {
    return Ka("not implemented");
  }
  _linkToIdToken(n, r) {
    return Ka("not implemented");
  }
  _getReauthenticationResolver(n) {
    return Ka("not implemented");
  }
}
async function MC(t, n) {
  return er(t, "POST", "/v1/accounts:signUp", n);
}
async function UC(t, n) {
  return ao(t, "POST", "/v1/accounts:signInWithPassword", Gr(t, n));
}
async function LC(t, n) {
  return ao(t, "POST", "/v1/accounts:signInWithEmailLink", Gr(t, n));
}
async function zC(t, n) {
  return ao(t, "POST", "/v1/accounts:signInWithEmailLink", Gr(t, n));
}
class ql extends cm {
  constructor(n, r, s, o = null) {
    super("password", s),
      (this._email = n),
      (this._password = r),
      (this._tenantId = o);
  }
  static _fromEmailAndPassword(n, r) {
    return new ql(n, r, "password");
  }
  static _fromEmailAndCode(n, r, s = null) {
    return new ql(n, r, "emailLink", s);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(n) {
    const r = typeof n == "string" ? JSON.parse(n) : n;
    if (r?.email && r?.password) {
      if (r.signInMethod === "password")
        return this._fromEmailAndPassword(r.email, r.password);
      if (r.signInMethod === "emailLink")
        return this._fromEmailAndCode(r.email, r.password, r.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(n) {
    switch (this.signInMethod) {
      case "password":
        const r = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return Oh(n, r, "signInWithPassword", UC);
      case "emailLink":
        return LC(n, { email: this._email, oobCode: this._password });
      default:
        ua(n, "internal-error");
    }
  }
  async _linkToIdToken(n, r) {
    switch (this.signInMethod) {
      case "password":
        const s = {
          idToken: r,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return Oh(n, s, "signUpPassword", MC);
      case "emailLink":
        return zC(n, {
          idToken: r,
          email: this._email,
          oobCode: this._password,
        });
      default:
        ua(n, "internal-error");
    }
  }
  _getReauthenticationResolver(n) {
    return this._getIdTokenResponse(n);
  }
}
async function bs(t, n) {
  return ao(t, "POST", "/v1/accounts:signInWithIdp", Gr(t, n));
}
const kC = "http://localhost";
class wi extends cm {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(n) {
    const r = new wi(n.providerId, n.signInMethod);
    return (
      n.idToken || n.accessToken
        ? (n.idToken && (r.idToken = n.idToken),
          n.accessToken && (r.accessToken = n.accessToken),
          n.nonce && !n.pendingToken && (r.nonce = n.nonce),
          n.pendingToken && (r.pendingToken = n.pendingToken))
        : n.oauthToken && n.oauthTokenSecret
        ? ((r.accessToken = n.oauthToken), (r.secret = n.oauthTokenSecret))
        : ua("argument-error"),
      r
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(n) {
    const r = typeof n == "string" ? JSON.parse(n) : n,
      { providerId: s, signInMethod: o, ...u } = r;
    if (!s || !o) return null;
    const d = new wi(s, o);
    return (
      (d.idToken = u.idToken || void 0),
      (d.accessToken = u.accessToken || void 0),
      (d.secret = u.secret),
      (d.nonce = u.nonce),
      (d.pendingToken = u.pendingToken || null),
      d
    );
  }
  _getIdTokenResponse(n) {
    const r = this.buildRequest();
    return bs(n, r);
  }
  _linkToIdToken(n, r) {
    const s = this.buildRequest();
    return (s.idToken = r), bs(n, s);
  }
  _getReauthenticationResolver(n) {
    const r = this.buildRequest();
    return (r.autoCreate = !1), bs(n, r);
  }
  buildRequest() {
    const n = { requestUri: kC, returnSecureToken: !0 };
    if (this.pendingToken) n.pendingToken = this.pendingToken;
    else {
      const r = {};
      this.idToken && (r.id_token = this.idToken),
        this.accessToken && (r.access_token = this.accessToken),
        this.secret && (r.oauth_token_secret = this.secret),
        (r.providerId = this.providerId),
        this.nonce && !this.pendingToken && (r.nonce = this.nonce),
        (n.postBody = eo(r));
    }
    return n;
  }
}
function IC(t) {
  switch (t) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function BC(t) {
  const n = Ol(jl(t)).link,
    r = n ? Ol(jl(n)).deep_link_id : null,
    s = Ol(jl(t)).deep_link_id;
  return (s ? Ol(jl(s)).link : null) || s || r || n || t;
}
class dm {
  constructor(n) {
    const r = Ol(jl(n)),
      s = r.apiKey ?? null,
      o = r.oobCode ?? null,
      u = IC(r.mode ?? null);
    De(s && o && u, "argument-error"),
      (this.apiKey = s),
      (this.operation = u),
      (this.code = o),
      (this.continueUrl = r.continueUrl ?? null),
      (this.languageCode = r.lang ?? null),
      (this.tenantId = r.tenantId ?? null);
  }
  static parseLink(n) {
    const r = BC(n);
    try {
      return new dm(r);
    } catch {
      return null;
    }
  }
}
class Cs {
  constructor() {
    this.providerId = Cs.PROVIDER_ID;
  }
  static credential(n, r) {
    return ql._fromEmailAndPassword(n, r);
  }
  static credentialWithLink(n, r) {
    const s = dm.parseLink(r);
    return De(s, "argument-error"), ql._fromEmailAndCode(n, s.code, s.tenantId);
  }
}
Cs.PROVIDER_ID = "password";
Cs.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Cs.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
class Sx {
  constructor(n) {
    (this.providerId = n),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(n) {
    this.defaultLanguageCode = n;
  }
  setCustomParameters(n) {
    return (this.customParameters = n), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
class ro extends Sx {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(n) {
    return this.scopes.includes(n) || this.scopes.push(n), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
class Mr extends ro {
  constructor() {
    super("facebook.com");
  }
  static credential(n) {
    return wi._fromParams({
      providerId: Mr.PROVIDER_ID,
      signInMethod: Mr.FACEBOOK_SIGN_IN_METHOD,
      accessToken: n,
    });
  }
  static credentialFromResult(n) {
    return Mr.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return Mr.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n || !("oauthAccessToken" in n) || !n.oauthAccessToken) return null;
    try {
      return Mr.credential(n.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Mr.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Mr.PROVIDER_ID = "facebook.com";
class Ur extends ro {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(n, r) {
    return wi._fromParams({
      providerId: Ur.PROVIDER_ID,
      signInMethod: Ur.GOOGLE_SIGN_IN_METHOD,
      idToken: n,
      accessToken: r,
    });
  }
  static credentialFromResult(n) {
    return Ur.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return Ur.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n) return null;
    const { oauthIdToken: r, oauthAccessToken: s } = n;
    if (!r && !s) return null;
    try {
      return Ur.credential(r, s);
    } catch {
      return null;
    }
  }
}
Ur.GOOGLE_SIGN_IN_METHOD = "google.com";
Ur.PROVIDER_ID = "google.com";
class Lr extends ro {
  constructor() {
    super("github.com");
  }
  static credential(n) {
    return wi._fromParams({
      providerId: Lr.PROVIDER_ID,
      signInMethod: Lr.GITHUB_SIGN_IN_METHOD,
      accessToken: n,
    });
  }
  static credentialFromResult(n) {
    return Lr.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return Lr.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n || !("oauthAccessToken" in n) || !n.oauthAccessToken) return null;
    try {
      return Lr.credential(n.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Lr.GITHUB_SIGN_IN_METHOD = "github.com";
Lr.PROVIDER_ID = "github.com";
class zr extends ro {
  constructor() {
    super("twitter.com");
  }
  static credential(n, r) {
    return wi._fromParams({
      providerId: zr.PROVIDER_ID,
      signInMethod: zr.TWITTER_SIGN_IN_METHOD,
      oauthToken: n,
      oauthTokenSecret: r,
    });
  }
  static credentialFromResult(n) {
    return zr.credentialFromTaggedObject(n);
  }
  static credentialFromError(n) {
    return zr.credentialFromTaggedObject(n.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: n }) {
    if (!n) return null;
    const { oauthAccessToken: r, oauthTokenSecret: s } = n;
    if (!r || !s) return null;
    try {
      return zr.credential(r, s);
    } catch {
      return null;
    }
  }
}
zr.TWITTER_SIGN_IN_METHOD = "twitter.com";
zr.PROVIDER_ID = "twitter.com";
async function HC(t, n) {
  return ao(t, "POST", "/v1/accounts:signUp", Gr(t, n));
}
class _i {
  constructor(n) {
    (this.user = n.user),
      (this.providerId = n.providerId),
      (this._tokenResponse = n._tokenResponse),
      (this.operationType = n.operationType);
  }
  static async _fromIdTokenResponse(n, r, s, o = !1) {
    const u = await oa._fromIdTokenResponse(n, s, o),
      d = Kv(s);
    return new _i({
      user: u,
      providerId: d,
      _tokenResponse: s,
      operationType: r,
    });
  }
  static async _forOperation(n, r, s) {
    await n._updateTokensIfNecessary(s, !0);
    const o = Kv(s);
    return new _i({
      user: n,
      providerId: o,
      _tokenResponse: s,
      operationType: r,
    });
  }
}
function Kv(t) {
  return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
}
class tc extends Fr {
  constructor(n, r, s, o) {
    super(r.code, r.message),
      (this.operationType = s),
      (this.user = o),
      Object.setPrototypeOf(this, tc.prototype),
      (this.customData = {
        appName: n.name,
        tenantId: n.tenantId ?? void 0,
        _serverResponse: r.customData._serverResponse,
        operationType: s,
      });
  }
  static _fromErrorAndOperation(n, r, s, o) {
    return new tc(n, r, s, o);
  }
}
function Ex(t, n, r, s) {
  return (
    n === "reauthenticate"
      ? r._getReauthenticationResolver(t)
      : r._getIdTokenResponse(t)
  ).catch((u) => {
    throw u.code === "auth/multi-factor-auth-required"
      ? tc._fromErrorAndOperation(t, u, n, s)
      : u;
  });
}
async function PC(t, n, r = !1) {
  const s = await ws(t, n._linkToIdToken(t.auth, await t.getIdToken()), r);
  return _i._forOperation(t, "link", s);
}
async function qC(t, n, r = !1) {
  const { auth: s } = t;
  if (la(s.app)) return Promise.reject(Xa(s));
  const o = "reauthenticate";
  try {
    const u = await ws(t, Ex(s, o, n, t), r);
    De(u.idToken, s, "internal-error");
    const d = om(u.idToken);
    De(d, s, "internal-error");
    const { sub: h } = d;
    return De(t.uid === h, s, "user-mismatch"), _i._forOperation(t, o, u);
  } catch (u) {
    throw (u?.code === "auth/user-not-found" && ua(s, "user-mismatch"), u);
  }
}
async function wx(t, n, r = !1) {
  if (la(t.app)) return Promise.reject(Xa(t));
  const s = "signIn",
    o = await Ex(t, s, n),
    u = await _i._fromIdTokenResponse(t, s, o);
  return r || (await t._updateCurrentUser(u.user)), u;
}
async function VC(t, n) {
  return wx(Ri(t), n);
}
async function _x(t) {
  const n = Ri(t);
  n._getPasswordPolicyInternal() && (await n._updatePasswordPolicy());
}
async function FC(t, n, r) {
  if (la(t.app)) return Promise.reject(Xa(t));
  const s = Ri(t),
    d = await Oh(
      s,
      {
        returnSecureToken: !0,
        email: n,
        password: r,
        clientType: "CLIENT_TYPE_WEB",
      },
      "signUpPassword",
      HC
    ).catch((p) => {
      throw (p.code === "auth/password-does-not-meet-requirements" && _x(t), p);
    }),
    h = await _i._fromIdTokenResponse(s, "signIn", d);
  return await s._updateCurrentUser(h.user), h;
}
function GC(t, n, r) {
  return la(t.app)
    ? Promise.reject(Xa(t))
    : VC(Ea(t), Cs.credential(n, r)).catch(async (s) => {
        throw (
          (s.code === "auth/password-does-not-meet-requirements" && _x(t), s)
        );
      });
}
async function YC(t, n) {
  return er(t, "POST", "/v1/accounts:update", n);
}
async function QC(t, { displayName: n, photoURL: r }) {
  if (n === void 0 && r === void 0) return;
  const s = Ea(t),
    u = {
      idToken: await s.getIdToken(),
      displayName: n,
      photoUrl: r,
      returnSecureToken: !0,
    },
    d = await ws(s, YC(s.auth, u));
  (s.displayName = d.displayName || null), (s.photoURL = d.photoUrl || null);
  const h = s.providerData.find(({ providerId: p }) => p === "password");
  h && ((h.displayName = s.displayName), (h.photoURL = s.photoURL)),
    await s._updateTokensIfNecessary(d);
}
function KC(t, n, r, s) {
  return Ea(t).onIdTokenChanged(n, r, s);
}
function $C(t, n, r) {
  return Ea(t).beforeAuthStateChanged(n, r);
}
function XC(t, n, r, s) {
  return Ea(t).onAuthStateChanged(n, r, s);
}
function ZC(t) {
  return Ea(t).signOut();
}
const nc = "__sak";
class Tx {
  constructor(n, r) {
    (this.storageRetriever = n), (this.type = r);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(nc, "1"),
          this.storage.removeItem(nc),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(n, r) {
    return this.storage.setItem(n, JSON.stringify(r)), Promise.resolve();
  }
  _get(n) {
    const r = this.storage.getItem(n);
    return Promise.resolve(r ? JSON.parse(r) : null);
  }
  _remove(n) {
    return this.storage.removeItem(n), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
const JC = 1e3,
  WC = 10;
class Rx extends Tx {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (n, r) => this.onStorageEvent(n, r)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = gx()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(n) {
    for (const r of Object.keys(this.listeners)) {
      const s = this.storage.getItem(r),
        o = this.localCache[r];
      s !== o && n(r, o, s);
    }
  }
  onStorageEvent(n, r = !1) {
    if (!n.key) {
      this.forAllChangedKeys((d, h, p) => {
        this.notifyListeners(d, p);
      });
      return;
    }
    const s = n.key;
    r ? this.detachListener() : this.stopPolling();
    const o = () => {
        const d = this.storage.getItem(s);
        (!r && this.localCache[s] === d) || this.notifyListeners(s, d);
      },
      u = this.storage.getItem(s);
    mC() && u !== n.newValue && n.newValue !== n.oldValue
      ? setTimeout(o, WC)
      : o();
  }
  notifyListeners(n, r) {
    this.localCache[n] = r;
    const s = this.listeners[n];
    if (s) for (const o of Array.from(s)) o(r && JSON.parse(r));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((n, r, s) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: n, oldValue: r, newValue: s }),
            !0
          );
        });
      }, JC));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(n, r) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[n] ||
        ((this.listeners[n] = new Set()),
        (this.localCache[n] = this.storage.getItem(n))),
      this.listeners[n].add(r);
  }
  _removeListener(n, r) {
    this.listeners[n] &&
      (this.listeners[n].delete(r),
      this.listeners[n].size === 0 && delete this.listeners[n]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(n, r) {
    await super._set(n, r), (this.localCache[n] = JSON.stringify(r));
  }
  async _get(n) {
    const r = await super._get(n);
    return (this.localCache[n] = JSON.stringify(r)), r;
  }
  async _remove(n) {
    await super._remove(n), delete this.localCache[n];
  }
}
Rx.type = "LOCAL";
const eN = Rx;
class Ax extends Tx {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(n, r) {}
  _removeListener(n, r) {}
}
Ax.type = "SESSION";
const Cx = Ax;
function tN(t) {
  return Promise.all(
    t.map(async (n) => {
      try {
        return { fulfilled: !0, value: await n };
      } catch (r) {
        return { fulfilled: !1, reason: r };
      }
    })
  );
}
class Ec {
  constructor(n) {
    (this.eventTarget = n),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(n) {
    const r = this.receivers.find((o) => o.isListeningto(n));
    if (r) return r;
    const s = new Ec(n);
    return this.receivers.push(s), s;
  }
  isListeningto(n) {
    return this.eventTarget === n;
  }
  async handleEvent(n) {
    const r = n,
      { eventId: s, eventType: o, data: u } = r.data,
      d = this.handlersMap[o];
    if (!d?.size) return;
    r.ports[0].postMessage({ status: "ack", eventId: s, eventType: o });
    const h = Array.from(d).map(async (g) => g(r.origin, u)),
      p = await tN(h);
    r.ports[0].postMessage({
      status: "done",
      eventId: s,
      eventType: o,
      response: p,
    });
  }
  _subscribe(n, r) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[n] || (this.handlersMap[n] = new Set()),
      this.handlersMap[n].add(r);
  }
  _unsubscribe(n, r) {
    this.handlersMap[n] && r && this.handlersMap[n].delete(r),
      (!r || this.handlersMap[n].size === 0) && delete this.handlersMap[n],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Ec.receivers = [];
function fm(t = "", n = 10) {
  let r = "";
  for (let s = 0; s < n; s++) r += Math.floor(Math.random() * 10);
  return t + r;
}
class nN {
  constructor(n) {
    (this.target = n), (this.handlers = new Set());
  }
  removeMessageHandler(n) {
    n.messageChannel &&
      (n.messageChannel.port1.removeEventListener("message", n.onMessage),
      n.messageChannel.port1.close()),
      this.handlers.delete(n);
  }
  async _send(n, r, s = 50) {
    const o = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!o) throw new Error("connection_unavailable");
    let u, d;
    return new Promise((h, p) => {
      const g = fm("", 20);
      o.port1.start();
      const v = setTimeout(() => {
        p(new Error("unsupported_event"));
      }, s);
      (d = {
        messageChannel: o,
        onMessage(b) {
          const x = b;
          if (x.data.eventId === g)
            switch (x.data.status) {
              case "ack":
                clearTimeout(v),
                  (u = setTimeout(() => {
                    p(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(u), h(x.data.response);
                break;
              default:
                clearTimeout(v),
                  clearTimeout(u),
                  p(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(d),
        o.port1.addEventListener("message", d.onMessage),
        this.target.postMessage({ eventType: n, eventId: g, data: r }, [
          o.port2,
        ]);
    }).finally(() => {
      d && this.removeMessageHandler(d);
    });
  }
}
function xa() {
  return window;
}
function aN(t) {
  xa().location.href = t;
}
function Nx() {
  return (
    typeof xa().WorkerGlobalScope < "u" &&
    typeof xa().importScripts == "function"
  );
}
async function rN() {
  if (!navigator?.serviceWorker) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function iN() {
  return navigator?.serviceWorker?.controller || null;
}
function sN() {
  return Nx() ? self : null;
}
const Ox = "firebaseLocalStorageDb",
  lN = 1,
  ac = "firebaseLocalStorage",
  jx = "fbase_key";
class io {
  constructor(n) {
    this.request = n;
  }
  toPromise() {
    return new Promise((n, r) => {
      this.request.addEventListener("success", () => {
        n(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          r(this.request.error);
        });
    });
  }
}
function wc(t, n) {
  return t.transaction([ac], n ? "readwrite" : "readonly").objectStore(ac);
}
function oN() {
  const t = indexedDB.deleteDatabase(Ox);
  return new io(t).toPromise();
}
function jh() {
  const t = indexedDB.open(Ox, lN);
  return new Promise((n, r) => {
    t.addEventListener("error", () => {
      r(t.error);
    }),
      t.addEventListener("upgradeneeded", () => {
        const s = t.result;
        try {
          s.createObjectStore(ac, { keyPath: jx });
        } catch (o) {
          r(o);
        }
      }),
      t.addEventListener("success", async () => {
        const s = t.result;
        s.objectStoreNames.contains(ac)
          ? n(s)
          : (s.close(), await oN(), n(await jh()));
      });
  });
}
async function $v(t, n, r) {
  const s = wc(t, !0).put({ [jx]: n, value: r });
  return new io(s).toPromise();
}
async function uN(t, n) {
  const r = wc(t, !1).get(n),
    s = await new io(r).toPromise();
  return s === void 0 ? null : s.value;
}
function Xv(t, n) {
  const r = wc(t, !0).delete(n);
  return new io(r).toPromise();
}
const cN = 800,
  dN = 3;
class Dx {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await jh()), this.db);
  }
  async _withRetries(n) {
    let r = 0;
    for (;;)
      try {
        const s = await this._openDb();
        return await n(s);
      } catch (s) {
        if (r++ > dN) throw s;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Nx() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Ec._getInstance(sN())),
      this.receiver._subscribe("keyChanged", async (n, r) => ({
        keyProcessed: (await this._poll()).includes(r.key),
      })),
      this.receiver._subscribe("ping", async (n, r) => ["keyChanged"]);
  }
  async initializeSender() {
    if (((this.activeServiceWorker = await rN()), !this.activeServiceWorker))
      return;
    this.sender = new nN(this.activeServiceWorker);
    const n = await this.sender._send("ping", {}, 800);
    n &&
      n[0]?.fulfilled &&
      n[0]?.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(n) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        iN() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: n },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const n = await jh();
      return await $v(n, nc, "1"), await Xv(n, nc), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(n) {
    this.pendingWrites++;
    try {
      await n();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(n, r) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((s) => $v(s, n, r)),
        (this.localCache[n] = r),
        this.notifyServiceWorker(n)
      )
    );
  }
  async _get(n) {
    const r = await this._withRetries((s) => uN(s, n));
    return (this.localCache[n] = r), r;
  }
  async _remove(n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => Xv(r, n)),
        delete this.localCache[n],
        this.notifyServiceWorker(n)
      )
    );
  }
  async _poll() {
    const n = await this._withRetries((o) => {
      const u = wc(o, !1).getAll();
      return new io(u).toPromise();
    });
    if (!n) return [];
    if (this.pendingWrites !== 0) return [];
    const r = [],
      s = new Set();
    if (n.length !== 0)
      for (const { fbase_key: o, value: u } of n)
        s.add(o),
          JSON.stringify(this.localCache[o]) !== JSON.stringify(u) &&
            (this.notifyListeners(o, u), r.push(o));
    for (const o of Object.keys(this.localCache))
      this.localCache[o] &&
        !s.has(o) &&
        (this.notifyListeners(o, null), r.push(o));
    return r;
  }
  notifyListeners(n, r) {
    this.localCache[n] = r;
    const s = this.listeners[n];
    if (s) for (const o of Array.from(s)) o(r);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), cN));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(n, r) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[n] || ((this.listeners[n] = new Set()), this._get(n)),
      this.listeners[n].add(r);
  }
  _removeListener(n, r) {
    this.listeners[n] &&
      (this.listeners[n].delete(r),
      this.listeners[n].size === 0 && delete this.listeners[n]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Dx.type = "LOCAL";
const fN = Dx;
new no(3e4, 6e4);
function hN(t, n) {
  return n
    ? $a(n)
    : (De(t._popupRedirectResolver, t, "argument-error"),
      t._popupRedirectResolver);
}
class hm extends cm {
  constructor(n) {
    super("custom", "custom"), (this.params = n);
  }
  _getIdTokenResponse(n) {
    return bs(n, this._buildIdpRequest());
  }
  _linkToIdToken(n, r) {
    return bs(n, this._buildIdpRequest(r));
  }
  _getReauthenticationResolver(n) {
    return bs(n, this._buildIdpRequest());
  }
  _buildIdpRequest(n) {
    const r = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return n && (r.idToken = n), r;
  }
}
function mN(t) {
  return wx(t.auth, new hm(t), t.bypassAuthState);
}
function pN(t) {
  const { auth: n, user: r } = t;
  return De(r, n, "internal-error"), qC(r, new hm(t), t.bypassAuthState);
}
async function gN(t) {
  const { auth: n, user: r } = t;
  return De(r, n, "internal-error"), PC(r, new hm(t), t.bypassAuthState);
}
class Mx {
  constructor(n, r, s, o, u = !1) {
    (this.auth = n),
      (this.resolver = s),
      (this.user = o),
      (this.bypassAuthState = u),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(r) ? r : [r]);
  }
  execute() {
    return new Promise(async (n, r) => {
      this.pendingPromise = { resolve: n, reject: r };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (s) {
        this.reject(s);
      }
    });
  }
  async onAuthEvent(n) {
    const {
      urlResponse: r,
      sessionId: s,
      postBody: o,
      tenantId: u,
      error: d,
      type: h,
    } = n;
    if (d) {
      this.reject(d);
      return;
    }
    const p = {
      auth: this.auth,
      requestUri: r,
      sessionId: s,
      tenantId: u || void 0,
      postBody: o || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(h)(p));
    } catch (g) {
      this.reject(g);
    }
  }
  onError(n) {
    this.reject(n);
  }
  getIdpTask(n) {
    switch (n) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return mN;
      case "linkViaPopup":
      case "linkViaRedirect":
        return gN;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return pN;
      default:
        ua(this.auth, "internal-error");
    }
  }
  resolve(n) {
    Wa(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(n),
      this.unregisterAndCleanUp();
  }
  reject(n) {
    Wa(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(n),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
const yN = new no(2e3, 1e4);
class ms extends Mx {
  constructor(n, r, s, o, u) {
    super(n, r, o, u),
      (this.provider = s),
      (this.authWindow = null),
      (this.pollId = null),
      ms.currentPopupAction && ms.currentPopupAction.cancel(),
      (ms.currentPopupAction = this);
  }
  async executeNotNull() {
    const n = await this.execute();
    return De(n, this.auth, "internal-error"), n;
  }
  async onExecution() {
    Wa(this.filter.length === 1, "Popup operations only handle one event");
    const n = fm();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      n
    )),
      (this.authWindow.associatedEvent = n),
      this.resolver._originValidation(this.auth).catch((r) => {
        this.reject(r);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (r) => {
        r || this.reject(ba(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    return this.authWindow?.associatedEvent || null;
  }
  cancel() {
    this.reject(ba(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (ms.currentPopupAction = null);
  }
  pollUserCancellation() {
    const n = () => {
      if (this.authWindow?.window?.closed) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(ba(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(n, yN.get());
    };
    n();
  }
}
ms.currentPopupAction = null;
const vN = "pendingRedirect",
  ku = new Map();
class bN extends Mx {
  constructor(n, r, s = !1) {
    super(
      n,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      r,
      void 0,
      s
    ),
      (this.eventId = null);
  }
  async execute() {
    let n = ku.get(this.auth._key());
    if (!n) {
      try {
        const s = (await xN(this.resolver, this.auth))
          ? await super.execute()
          : null;
        n = () => Promise.resolve(s);
      } catch (r) {
        n = () => Promise.reject(r);
      }
      ku.set(this.auth._key(), n);
    }
    return (
      this.bypassAuthState ||
        ku.set(this.auth._key(), () => Promise.resolve(null)),
      n()
    );
  }
  async onAuthEvent(n) {
    if (n.type === "signInViaRedirect") return super.onAuthEvent(n);
    if (n.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (n.eventId) {
      const r = await this.auth._redirectUserForId(n.eventId);
      if (r) return (this.user = r), super.onAuthEvent(n);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function xN(t, n) {
  const r = wN(n),
    s = EN(t);
  if (!(await s._isAvailable())) return !1;
  const o = (await s._get(r)) === "true";
  return await s._remove(r), o;
}
function SN(t, n) {
  ku.set(t._key(), n);
}
function EN(t) {
  return $a(t._redirectPersistence);
}
function wN(t) {
  return zu(vN, t.config.apiKey, t.name);
}
async function _N(t, n, r = !1) {
  if (la(t.app)) return Promise.reject(Xa(t));
  const s = Ri(t),
    o = hN(s, n),
    d = await new bN(s, o, r).execute();
  return (
    d &&
      !r &&
      (delete d.user._redirectEventId,
      await s._persistUserIfCurrent(d.user),
      await s._setRedirectUser(null, n)),
    d
  );
}
const TN = 600 * 1e3;
class RN {
  constructor(n) {
    (this.auth = n),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(n) {
    this.consumers.add(n),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, n) &&
        (this.sendToConsumer(this.queuedRedirectEvent, n),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(n) {
    this.consumers.delete(n);
  }
  onEvent(n) {
    if (this.hasEventBeenHandled(n)) return !1;
    let r = !1;
    return (
      this.consumers.forEach((s) => {
        this.isEventForConsumer(n, s) &&
          ((r = !0), this.sendToConsumer(n, s), this.saveEventToCache(n));
      }),
      this.hasHandledPotentialRedirect ||
        !AN(n) ||
        ((this.hasHandledPotentialRedirect = !0),
        r || ((this.queuedRedirectEvent = n), (r = !0))),
      r
    );
  }
  sendToConsumer(n, r) {
    if (n.error && !Ux(n)) {
      const s = n.error.code?.split("auth/")[1] || "internal-error";
      r.onError(ba(this.auth, s));
    } else r.onAuthEvent(n);
  }
  isEventForConsumer(n, r) {
    const s = r.eventId === null || (!!n.eventId && n.eventId === r.eventId);
    return r.filter.includes(n.type) && s;
  }
  hasEventBeenHandled(n) {
    return (
      Date.now() - this.lastProcessedEventTime >= TN &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(Zv(n))
    );
  }
  saveEventToCache(n) {
    this.cachedEventUids.add(Zv(n)), (this.lastProcessedEventTime = Date.now());
  }
}
function Zv(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId]
    .filter((n) => n)
    .join("-");
}
function Ux({ type: t, error: n }) {
  return t === "unknown" && n?.code === "auth/no-auth-event";
}
function AN(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Ux(t);
    default:
      return !1;
  }
}
async function CN(t, n = {}) {
  return er(t, "GET", "/v1/projects", n);
}
const NN = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  ON = /^https?/;
async function jN(t) {
  if (t.config.emulator) return;
  const { authorizedDomains: n } = await CN(t);
  for (const r of n)
    try {
      if (DN(r)) return;
    } catch {}
  ua(t, "unauthorized-domain");
}
function DN(t) {
  const n = Ch(),
    { protocol: r, hostname: s } = new URL(n);
  if (t.startsWith("chrome-extension://")) {
    const d = new URL(t);
    return d.hostname === "" && s === ""
      ? r === "chrome-extension:" &&
          t.replace("chrome-extension://", "") ===
            n.replace("chrome-extension://", "")
      : r === "chrome-extension:" && d.hostname === s;
  }
  if (!ON.test(r)) return !1;
  if (NN.test(t)) return s === t;
  const o = t.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(s);
}
const MN = new no(3e4, 6e4);
function Jv() {
  const t = xa().___jsl;
  if (t?.H) {
    for (const n of Object.keys(t.H))
      if (
        ((t.H[n].r = t.H[n].r || []),
        (t.H[n].L = t.H[n].L || []),
        (t.H[n].r = [...t.H[n].L]),
        t.CP)
      )
        for (let r = 0; r < t.CP.length; r++) t.CP[r] = null;
  }
}
function UN(t) {
  return new Promise((n, r) => {
    function s() {
      Jv(),
        gapi.load("gapi.iframes", {
          callback: () => {
            n(gapi.iframes.getContext());
          },
          ontimeout: () => {
            Jv(), r(ba(t, "network-request-failed"));
          },
          timeout: MN.get(),
        });
    }
    if (xa().gapi?.iframes?.Iframe) n(gapi.iframes.getContext());
    else if (xa().gapi?.load) s();
    else {
      const o = wC("iframefcb");
      return (
        (xa()[o] = () => {
          gapi.load ? s() : r(ba(t, "network-request-failed"));
        }),
        vx(`${EC()}?onload=${o}`).catch((u) => r(u))
      );
    }
  }).catch((n) => {
    throw ((Iu = null), n);
  });
}
let Iu = null;
function LN(t) {
  return (Iu = Iu || UN(t)), Iu;
}
const zN = new no(5e3, 15e3),
  kN = "__/auth/iframe",
  IN = "emulator/auth/iframe",
  BN = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  HN = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function PN(t) {
  const n = t.config;
  De(n.authDomain, t, "auth-domain-config-required");
  const r = n.emulator ? lm(n, IN) : `https://${t.config.authDomain}/${kN}`,
    s = { apiKey: n.apiKey, appName: t.name, v: to },
    o = HN.get(t.config.apiHost);
  o && (s.eid = o);
  const u = t._getFrameworks();
  return u.length && (s.fw = u.join(",")), `${r}?${eo(s).slice(1)}`;
}
async function qN(t) {
  const n = await LN(t),
    r = xa().gapi;
  return (
    De(r, t, "internal-error"),
    n.open(
      {
        where: document.body,
        url: PN(t),
        messageHandlersFilter: r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: BN,
        dontclear: !0,
      },
      (s) =>
        new Promise(async (o, u) => {
          await s.restyle({ setHideOnLeave: !1 });
          const d = ba(t, "network-request-failed"),
            h = xa().setTimeout(() => {
              u(d);
            }, zN.get());
          function p() {
            xa().clearTimeout(h), o(s);
          }
          s.ping(p).then(p, () => {
            u(d);
          });
        })
    )
  );
}
const VN = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  FN = 500,
  GN = 600,
  YN = "_blank",
  QN = "http://localhost";
class Wv {
  constructor(n) {
    (this.window = n), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function KN(t, n, r, s = FN, o = GN) {
  const u = Math.max((window.screen.availHeight - o) / 2, 0).toString(),
    d = Math.max((window.screen.availWidth - s) / 2, 0).toString();
  let h = "";
  const p = {
      ...VN,
      width: s.toString(),
      height: o.toString(),
      top: u,
      left: d,
    },
    g = rn().toLowerCase();
  r && (h = dx(g) ? YN : r), ux(g) && ((n = n || QN), (p.scrollbars = "yes"));
  const v = Object.entries(p).reduce((x, [R, E]) => `${x}${R}=${E},`, "");
  if (hC(g) && h !== "_self") return $N(n || "", h), new Wv(null);
  const b = window.open(n || "", h, v);
  De(b, t, "popup-blocked");
  try {
    b.focus();
  } catch {}
  return new Wv(b);
}
function $N(t, n) {
  const r = document.createElement("a");
  (r.href = t), (r.target = n);
  const s = document.createEvent("MouseEvent");
  s.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    r.dispatchEvent(s);
}
const XN = "__/auth/handler",
  ZN = "emulator/auth/handler",
  JN = encodeURIComponent("fac");
async function eb(t, n, r, s, o, u) {
  De(t.config.authDomain, t, "auth-domain-config-required"),
    De(t.config.apiKey, t, "invalid-api-key");
  const d = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: r,
    redirectUrl: s,
    v: to,
    eventId: o,
  };
  if (n instanceof Sx) {
    n.setDefaultLanguage(t.languageCode),
      (d.providerId = n.providerId || ""),
      U6(n.getCustomParameters()) ||
        (d.customParameters = JSON.stringify(n.getCustomParameters()));
    for (const [v, b] of Object.entries({})) d[v] = b;
  }
  if (n instanceof ro) {
    const v = n.getScopes().filter((b) => b !== "");
    v.length > 0 && (d.scopes = v.join(","));
  }
  t.tenantId && (d.tid = t.tenantId);
  const h = d;
  for (const v of Object.keys(h)) h[v] === void 0 && delete h[v];
  const p = await t._getAppCheckToken(),
    g = p ? `#${JN}=${encodeURIComponent(p)}` : "";
  return `${WN(t)}?${eo(h).slice(1)}${g}`;
}
function WN({ config: t }) {
  return t.emulator ? lm(t, ZN) : `https://${t.authDomain}/${XN}`;
}
const th = "webStorageSupport";
class e5 {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Cx),
      (this._completeRedirectFn = _N),
      (this._overrideRedirectResult = SN);
  }
  async _openPopup(n, r, s, o) {
    Wa(
      this.eventManagers[n._key()]?.manager,
      "_initialize() not called before _openPopup()"
    );
    const u = await eb(n, r, s, Ch(), o);
    return KN(n, u, fm());
  }
  async _openRedirect(n, r, s, o) {
    await this._originValidation(n);
    const u = await eb(n, r, s, Ch(), o);
    return aN(u), new Promise(() => {});
  }
  _initialize(n) {
    const r = n._key();
    if (this.eventManagers[r]) {
      const { manager: o, promise: u } = this.eventManagers[r];
      return o
        ? Promise.resolve(o)
        : (Wa(u, "If manager is not set, promise should be"), u);
    }
    const s = this.initAndGetManager(n);
    return (
      (this.eventManagers[r] = { promise: s }),
      s.catch(() => {
        delete this.eventManagers[r];
      }),
      s
    );
  }
  async initAndGetManager(n) {
    const r = await qN(n),
      s = new RN(n);
    return (
      r.register(
        "authEvent",
        (o) => (
          De(o?.authEvent, n, "invalid-auth-event"),
          { status: s.onEvent(o.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[n._key()] = { manager: s }),
      (this.iframes[n._key()] = r),
      s
    );
  }
  _isIframeWebStorageSupported(n, r) {
    this.iframes[n._key()].send(
      th,
      { type: th },
      (o) => {
        const u = o?.[0]?.[th];
        u !== void 0 && r(!!u), ua(n, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(n) {
    const r = n._key();
    return (
      this.originValidationPromises[r] ||
        (this.originValidationPromises[r] = jN(n)),
      this.originValidationPromises[r]
    );
  }
  get _shouldInitProactively() {
    return gx() || cx() || um();
  }
}
const t5 = e5;
var tb = "@firebase/auth",
  nb = "1.11.1";
class n5 {
  constructor(n) {
    (this.auth = n), (this.internalListeners = new Map());
  }
  getUid() {
    return this.assertAuthConfigured(), this.auth.currentUser?.uid || null;
  }
  async getToken(n) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(n) }
        : null
    );
  }
  addAuthTokenListener(n) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(n))) return;
    const r = this.auth.onIdTokenChanged((s) => {
      n(s?.stsTokenManager.accessToken || null);
    });
    this.internalListeners.set(n, r), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(n) {
    this.assertAuthConfigured();
    const r = this.internalListeners.get(n);
    r && (this.internalListeners.delete(n), r(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    De(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
function a5(t) {
  switch (t) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function r5(t) {
  Hl(
    new Es(
      "auth",
      (n, { options: r }) => {
        const s = n.getProvider("app").getImmediate(),
          o = n.getProvider("heartbeat"),
          u = n.getProvider("app-check-internal"),
          { apiKey: d, authDomain: h } = s.options;
        De(d && !d.includes(":"), "invalid-api-key", { appName: s.name });
        const p = {
            apiKey: d,
            authDomain: h,
            clientPlatform: t,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: yx(t),
          },
          g = new bC(s, o, u, p);
        return NC(g, r), g;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((n, r, s) => {
        n.getProvider("auth-internal").initialize();
      })
  ),
    Hl(
      new Es(
        "auth-internal",
        (n) => {
          const r = Ri(n.getProvider("auth").getImmediate());
          return ((s) => new n5(s))(r);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    gs(tb, nb, a5(t)),
    gs(tb, nb, "esm2020");
}
const i5 = 300,
  s5 = Q1("authIdTokenMaxAge") || i5;
let ab = null;
const l5 = (t) => async (n) => {
  const r = n && (await n.getIdTokenResult()),
    s = r && (new Date().getTime() - Date.parse(r.issuedAtTime)) / 1e3;
  if (s && s > s5) return;
  const o = r?.token;
  ab !== o &&
    ((ab = o),
    await fetch(t, {
      method: o ? "POST" : "DELETE",
      headers: o ? { Authorization: `Bearer ${o}` } : {},
    }));
};
function Lx(t = zA()) {
  const n = Z1(t, "auth");
  if (n.isInitialized()) return n.getImmediate();
  const r = CC(t, { popupRedirectResolver: t5, persistence: [fN, eN, Cx] }),
    s = Q1("authTokenSyncURL");
  if (s && typeof isSecureContext == "boolean" && isSecureContext) {
    const u = new URL(s, location.origin);
    if (location.origin === u.origin) {
      const d = l5(u.toString());
      $C(r, d, () => d(r.currentUser)), KC(r, (h) => d(h));
    }
  }
  const o = v6("auth");
  return o && OC(r, `http://${o}`), r;
}
function o5() {
  return document.getElementsByTagName("head")?.[0] ?? document;
}
xC({
  loadJS(t) {
    return new Promise((n, r) => {
      const s = document.createElement("script");
      s.setAttribute("src", t),
        (s.onload = n),
        (s.onerror = (o) => {
          const u = ba("internal-error");
          (u.customData = o), r(u);
        }),
        (s.type = "text/javascript"),
        (s.charset = "UTF-8"),
        o5().appendChild(s);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
r5("Browser");
var u5 = "firebase",
  c5 = "12.6.0";
gs(u5, c5, "app");
const d5 = {
    apiKey: "AIzaSyAIm683yjmYhXDrobmB0Y-BQyrh3AIbfuY",
    authDomain: "blood-donation-75919.firebaseapp.com",
    projectId: "blood-donation-75919",
    storageBucket: "blood-donation-75919.firebasestorage.app",
    messagingSenderId: "936641698388",
    appId: "1:936641698388:web:146805c04c77ed1348ebc1",
  },
  zx = J1(d5);
Lx(zx);
const Al = Lx(zx),
  f5 = ({ children: t }) => {
    const [n, r] = w.useState(null),
      [s, o] = w.useState(!0),
      u = (v, b) => (o(!0), FC(Al, v, b)),
      d = (v, b) => (o(!0), GC(Al, v, b)),
      h = async () => (o(!0), ZC(Al)),
      p = (v, b) => QC(Al.currentUser, { displayName: v, photoURL: b });
    w.useEffect(() => {
      const v = XC(Al, async (b) => {
        r(b), o(!1);
      });
      return () => v();
    }, []);
    const g = {
      user: n,
      setUser: r,
      loading: s,
      setLoading: o,
      createUser: u,
      signIn: d,
      logOut: h,
      updateUserProfile: p,
    };
    return m.jsx($b.Provider, { value: g, children: t });
  };
var h5 = function () {
  return null;
};
const m5 = new _R();
tE.createRoot(document.getElementById("root")).render(
  m.jsx(w.StrictMode, {
    children: m.jsxs(TR, {
      client: m5,
      children: [
        m.jsxs(f5, {
          children: [
            m.jsx(Lw, { router: u6 }),
            m.jsx(o4, { position: "top-right", reverseOrder: !1 }),
          ],
        }),
        m.jsx(h5, { initialIsOpen: !1 }),
      ],
    }),
  })
);
