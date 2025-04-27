import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-UTEJFLXC.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({
  "node_modules/shallowequal/index.js"(exports, module) {
    module.exports = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i2 = 0; i2 < keys.length; ++i2) {
          var key = keys[i2];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e2) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    module.exports = _interopRequireDefault;
  }
});

// node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  "node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
    function _extends() {
      module.exports = _extends = Object.assign || function(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    module.exports = _extends;
  }
});

// node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var require_objectWithoutPropertiesLoose = __commonJS({
  "node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
    function _objectWithoutPropertiesLoose2(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i2;
      for (i2 = 0; i2 < sourceKeys.length; i2++) {
        key = sourceKeys[i2];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }
    module.exports = _objectWithoutPropertiesLoose2;
  }
});

// node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var require_objectWithoutProperties = __commonJS({
  "node_modules/@babel/runtime/helpers/objectWithoutProperties.js"(exports, module) {
    var objectWithoutPropertiesLoose = require_objectWithoutPropertiesLoose();
    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = objectWithoutPropertiesLoose(source, excluded);
      var key, i2;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
          key = sourceSymbolKeys[i2];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    module.exports = _objectWithoutProperties;
  }
});

// node_modules/@babel/runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS({
  "node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module) {
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    module.exports = _classCallCheck;
  }
});

// node_modules/@babel/runtime/helpers/createClass.js
var require_createClass = __commonJS({
  "node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
    function _defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    module.exports = _createClass;
  }
});

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof2(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof22(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof22(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        module.exports = _typeof = function _typeof3(obj2) {
          return _typeof2(obj2);
        };
      } else {
        module.exports = _typeof = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : _typeof2(obj2);
        };
      }
      return _typeof(obj);
    }
    module.exports = _typeof;
  }
});

// node_modules/@babel/runtime/helpers/assertThisInitialized.js
var require_assertThisInitialized = __commonJS({
  "node_modules/@babel/runtime/helpers/assertThisInitialized.js"(exports, module) {
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    module.exports = _assertThisInitialized;
  }
});

// node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var require_possibleConstructorReturn = __commonJS({
  "node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"(exports, module) {
    var _typeof = require_typeof();
    var assertThisInitialized = require_assertThisInitialized();
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return assertThisInitialized(self);
    }
    module.exports = _possibleConstructorReturn;
  }
});

// node_modules/@babel/runtime/helpers/getPrototypeOf.js
var require_getPrototypeOf = __commonJS({
  "node_modules/@babel/runtime/helpers/getPrototypeOf.js"(exports, module) {
    function _getPrototypeOf(o2) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
        return o3.__proto__ || Object.getPrototypeOf(o3);
      };
      return _getPrototypeOf(o2);
    }
    module.exports = _getPrototypeOf;
  }
});

// node_modules/@babel/runtime/helpers/setPrototypeOf.js
var require_setPrototypeOf = __commonJS({
  "node_modules/@babel/runtime/helpers/setPrototypeOf.js"(exports, module) {
    function _setPrototypeOf(o2, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p2) {
        o3.__proto__ = p2;
        return o3;
      };
      return _setPrototypeOf(o2, p);
    }
    module.exports = _setPrototypeOf;
  }
});

// node_modules/@babel/runtime/helpers/inherits.js
var require_inherits = __commonJS({
  "node_modules/@babel/runtime/helpers/inherits.js"(exports, module) {
    var setPrototypeOf = require_setPrototypeOf();
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) setPrototypeOf(subClass, superClass);
    }
    module.exports = _inherits;
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i2 = 0; i2 < 10; i2++) {
          test2["_" + String.fromCharCode(i2)] = i2;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
          return test2[n2];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s2 = 1; s2 < arguments.length; s2++) {
        from = Object(arguments[s2]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            if (propIsEnumerable.call(from, symbols[i2])) {
              to[symbols[i2]] = from[symbols[i2]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x2, y2) {
        if (x2 === y2) {
          return x2 !== 0 || 1 / x2 === 1 / y2;
        } else {
          return x2 !== x2 && y2 !== y2;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i2 = 0; i2 < propValue.length; i2++) {
            var error = typeChecker(propValue, i2, componentName, location, propFullName + "[" + i2 + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i2 = 0; i2 < expectedValues.length; i2++) {
            if (is(propValue, expectedValues[i2])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker = arrayOfTypeCheckers[i2];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i2 + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
            var checker2 = arrayOfTypeCheckers[i3];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    var __DEV__ = true;
    var warning = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
      warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (!condition) {
          printWarning.apply(null, [format].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning;
  }
});

// node_modules/react-swipeable-views-core/lib/checkIndexBounds.js
var require_checkIndexBounds = __commonJS({
  "node_modules/react-swipeable-views-core/lib/checkIndexBounds.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault(require_react());
    var _warning = _interopRequireDefault(require_warning());
    var checkIndexBounds = function checkIndexBounds2(props) {
      var index = props.index, children = props.children;
      var childrenCount = _react.default.Children.count(children);
      true ? (0, _warning.default)(index >= 0 && index <= childrenCount, "react-swipeable-view: the new index: ".concat(index, " is out of bounds: [0-").concat(childrenCount, "].")) : void 0;
    };
    var _default = checkIndexBounds;
    exports.default = _default;
  }
});

// node_modules/react-swipeable-views-core/lib/constant.js
var require_constant = __commonJS({
  "node_modules/react-swipeable-views-core/lib/constant.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = {
      RESISTANCE_COEF: 0.6,
      // This value is closed to what browsers are using internally to
      // trigger a native scroll.
      UNCERTAINTY_THRESHOLD: 3
      // px
    };
    exports.default = _default;
  }
});

// node_modules/react-swipeable-views-core/lib/computeIndex.js
var require_computeIndex = __commonJS({
  "node_modules/react-swipeable-views-core/lib/computeIndex.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = computeIndex;
    var _react = _interopRequireDefault(require_react());
    var _constant = _interopRequireDefault(require_constant());
    function computeIndex(params) {
      var children = params.children, startIndex = params.startIndex, startX = params.startX, pageX = params.pageX, viewLength = params.viewLength, resistance = params.resistance;
      var indexMax = _react.default.Children.count(children) - 1;
      var index = startIndex + (startX - pageX) / viewLength;
      var newStartX;
      if (!resistance) {
        if (index < 0) {
          index = 0;
          newStartX = (index - startIndex) * viewLength + pageX;
        } else if (index > indexMax) {
          index = indexMax;
          newStartX = (index - startIndex) * viewLength + pageX;
        }
      } else if (index < 0) {
        index = Math.exp(index * _constant.default.RESISTANCE_COEF) - 1;
      } else if (index > indexMax) {
        index = indexMax + 1 - Math.exp((indexMax - index) * _constant.default.RESISTANCE_COEF);
      }
      return {
        index,
        startX: newStartX
      };
    }
  }
});

// node_modules/react-swipeable-views-core/lib/getDisplaySameSlide.js
var require_getDisplaySameSlide = __commonJS({
  "node_modules/react-swipeable-views-core/lib/getDisplaySameSlide.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault(require_react());
    var getDisplaySameSlide = function getDisplaySameSlide2(props, nextProps) {
      var displaySameSlide = false;
      var getChildrenKey = function getChildrenKey2(child) {
        return child ? child.key : "empty";
      };
      if (props.children.length && nextProps.children.length) {
        var oldKeys = _react.default.Children.map(props.children, getChildrenKey);
        var oldKey = oldKeys[props.index];
        if (oldKey !== null && oldKey !== void 0) {
          var newKeys = _react.default.Children.map(nextProps.children, getChildrenKey);
          var newKey = newKeys[nextProps.index];
          if (oldKey === newKey) {
            displaySameSlide = true;
          }
        }
      }
      return displaySameSlide;
    };
    var _default = getDisplaySameSlide;
    exports.default = _default;
  }
});

// node_modules/react-swipeable-views-core/lib/mod.js
var require_mod = __commonJS({
  "node_modules/react-swipeable-views-core/lib/mod.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function mod(n2, m2) {
      var q2 = n2 % m2;
      return q2 < 0 ? q2 + m2 : q2;
    }
    var _default = mod;
    exports.default = _default;
  }
});

// node_modules/react-swipeable-views-core/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-swipeable-views-core/lib/index.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "checkIndexBounds", {
      enumerable: true,
      get: function get() {
        return _checkIndexBounds.default;
      }
    });
    Object.defineProperty(exports, "computeIndex", {
      enumerable: true,
      get: function get() {
        return _computeIndex.default;
      }
    });
    Object.defineProperty(exports, "constant", {
      enumerable: true,
      get: function get() {
        return _constant.default;
      }
    });
    Object.defineProperty(exports, "getDisplaySameSlide", {
      enumerable: true,
      get: function get() {
        return _getDisplaySameSlide.default;
      }
    });
    Object.defineProperty(exports, "mod", {
      enumerable: true,
      get: function get() {
        return _mod.default;
      }
    });
    var _checkIndexBounds = _interopRequireDefault(require_checkIndexBounds());
    var _computeIndex = _interopRequireDefault(require_computeIndex());
    var _constant = _interopRequireDefault(require_constant());
    var _getDisplaySameSlide = _interopRequireDefault(require_getDisplaySameSlide());
    var _mod = _interopRequireDefault(require_mod());
  }
});

// node_modules/react-swipeable-views/lib/SwipeableViews.js
var require_SwipeableViews = __commonJS({
  "node_modules/react-swipeable-views/lib/SwipeableViews.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getDomTreeShapes = getDomTreeShapes;
    exports.findNativeHandler = findNativeHandler;
    exports.default = void 0;
    var _extends2 = _interopRequireDefault(require_extends());
    var _objectWithoutProperties2 = _interopRequireDefault(require_objectWithoutProperties());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _warning = _interopRequireDefault(require_warning());
    var _reactSwipeableViewsCore = require_lib();
    function addEventListener(node, event, handler, options) {
      node.addEventListener(event, handler, options);
      return {
        remove: function remove() {
          node.removeEventListener(event, handler, options);
        }
      };
    }
    var styles = {
      container: {
        direction: "ltr",
        display: "flex",
        willChange: "transform"
      },
      slide: {
        width: "100%",
        WebkitFlexShrink: 0,
        flexShrink: 0,
        overflow: "auto"
      }
    };
    var axisProperties = {
      root: {
        x: {
          overflowX: "hidden"
        },
        "x-reverse": {
          overflowX: "hidden"
        },
        y: {
          overflowY: "hidden"
        },
        "y-reverse": {
          overflowY: "hidden"
        }
      },
      flexDirection: {
        x: "row",
        "x-reverse": "row-reverse",
        y: "column",
        "y-reverse": "column-reverse"
      },
      transform: {
        x: function x2(translate) {
          return "translate(".concat(-translate, "%, 0)");
        },
        "x-reverse": function xReverse(translate) {
          return "translate(".concat(translate, "%, 0)");
        },
        y: function y2(translate) {
          return "translate(0, ".concat(-translate, "%)");
        },
        "y-reverse": function yReverse(translate) {
          return "translate(0, ".concat(translate, "%)");
        }
      },
      length: {
        x: "width",
        "x-reverse": "width",
        y: "height",
        "y-reverse": "height"
      },
      rotationMatrix: {
        x: {
          x: [1, 0],
          y: [0, 1]
        },
        "x-reverse": {
          x: [-1, 0],
          y: [0, 1]
        },
        y: {
          x: [0, 1],
          y: [1, 0]
        },
        "y-reverse": {
          x: [0, -1],
          y: [1, 0]
        }
      },
      scrollPosition: {
        x: "scrollLeft",
        "x-reverse": "scrollLeft",
        y: "scrollTop",
        "y-reverse": "scrollTop"
      },
      scrollLength: {
        x: "scrollWidth",
        "x-reverse": "scrollWidth",
        y: "scrollHeight",
        "y-reverse": "scrollHeight"
      },
      clientLength: {
        x: "clientWidth",
        "x-reverse": "clientWidth",
        y: "clientHeight",
        "y-reverse": "clientHeight"
      }
    };
    function createTransition(property, options) {
      var duration = options.duration, easeFunction = options.easeFunction, delay = options.delay;
      return "".concat(property, " ").concat(duration, " ").concat(easeFunction, " ").concat(delay);
    }
    function applyRotationMatrix(touch, axis) {
      var rotationMatrix = axisProperties.rotationMatrix[axis];
      return {
        pageX: rotationMatrix.x[0] * touch.pageX + rotationMatrix.x[1] * touch.pageY,
        pageY: rotationMatrix.y[0] * touch.pageX + rotationMatrix.y[1] * touch.pageY
      };
    }
    function adaptMouse(event) {
      event.touches = [{
        pageX: event.pageX,
        pageY: event.pageY
      }];
      return event;
    }
    function getDomTreeShapes(element, rootNode) {
      var domTreeShapes = [];
      while (element && element !== rootNode) {
        if (element.hasAttribute("data-swipeable")) {
          break;
        }
        var style = window.getComputedStyle(element);
        if (
          // Ignore the scroll children if the element is absolute positioned.
          style.getPropertyValue("position") === "absolute" || // Ignore the scroll children if the element has an overflowX hidden
          style.getPropertyValue("overflow-x") === "hidden"
        ) {
          domTreeShapes = [];
        } else if (element.clientWidth > 0 && element.scrollWidth > element.clientWidth || element.clientHeight > 0 && element.scrollHeight > element.clientHeight) {
          domTreeShapes.push({
            element,
            scrollWidth: element.scrollWidth,
            scrollHeight: element.scrollHeight,
            clientWidth: element.clientWidth,
            clientHeight: element.clientHeight,
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
          });
        }
        element = element.parentNode;
      }
      return domTreeShapes;
    }
    var nodeWhoClaimedTheScroll = null;
    function findNativeHandler(params) {
      var domTreeShapes = params.domTreeShapes, pageX = params.pageX, startX = params.startX, axis = params.axis;
      return domTreeShapes.some(function(shape) {
        var goingForward = pageX >= startX;
        if (axis === "x" || axis === "y") {
          goingForward = !goingForward;
        }
        var scrollPosition = shape[axisProperties.scrollPosition[axis]];
        var areNotAtStart = scrollPosition > 0;
        var areNotAtEnd = scrollPosition + shape[axisProperties.clientLength[axis]] < shape[axisProperties.scrollLength[axis]];
        if (goingForward && areNotAtEnd || !goingForward && areNotAtStart) {
          nodeWhoClaimedTheScroll = shape.element;
          return true;
        }
        return false;
      });
    }
    var SwipeableViews2 = function(_React$Component) {
      (0, _inherits2.default)(SwipeableViews3, _React$Component);
      function SwipeableViews3(props) {
        var _this;
        (0, _classCallCheck2.default)(this, SwipeableViews3);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SwipeableViews3).call(this, props));
        _this.rootNode = null;
        _this.containerNode = null;
        _this.ignoreNextScrollEvents = false;
        _this.viewLength = 0;
        _this.startX = 0;
        _this.lastX = 0;
        _this.vx = 0;
        _this.startY = 0;
        _this.isSwiping = void 0;
        _this.started = false;
        _this.startIndex = 0;
        _this.transitionListener = null;
        _this.touchMoveListener = null;
        _this.activeSlide = null;
        _this.indexCurrent = null;
        _this.firstRenderTimeout = null;
        _this.setRootNode = function(node) {
          _this.rootNode = node;
        };
        _this.setContainerNode = function(node) {
          _this.containerNode = node;
        };
        _this.setActiveSlide = function(node) {
          _this.activeSlide = node;
          _this.updateHeight();
        };
        _this.handleSwipeStart = function(event) {
          var axis = _this.props.axis;
          var touch = applyRotationMatrix(event.touches[0], axis);
          _this.viewLength = _this.rootNode.getBoundingClientRect()[axisProperties.length[axis]];
          _this.startX = touch.pageX;
          _this.lastX = touch.pageX;
          _this.vx = 0;
          _this.startY = touch.pageY;
          _this.isSwiping = void 0;
          _this.started = true;
          var computedStyle = window.getComputedStyle(_this.containerNode);
          var transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
          if (transform && transform !== "none") {
            var transformValues = transform.split("(")[1].split(")")[0].split(",");
            var rootStyle = window.getComputedStyle(_this.rootNode);
            var tranformNormalized = applyRotationMatrix({
              pageX: parseInt(transformValues[4], 10),
              pageY: parseInt(transformValues[5], 10)
            }, axis);
            _this.startIndex = -tranformNormalized.pageX / (_this.viewLength - parseInt(rootStyle.paddingLeft, 10) - parseInt(rootStyle.paddingRight, 10)) || 0;
          }
        };
        _this.handleSwipeMove = function(event) {
          if (!_this.started) {
            _this.handleTouchStart(event);
            return;
          }
          if (nodeWhoClaimedTheScroll !== null && nodeWhoClaimedTheScroll !== _this.rootNode) {
            return;
          }
          var _this$props = _this.props, axis = _this$props.axis, children = _this$props.children, ignoreNativeScroll = _this$props.ignoreNativeScroll, onSwitching = _this$props.onSwitching, resistance = _this$props.resistance;
          var touch = applyRotationMatrix(event.touches[0], axis);
          if (_this.isSwiping === void 0) {
            var dx = Math.abs(touch.pageX - _this.startX);
            var dy = Math.abs(touch.pageY - _this.startY);
            var isSwiping = dx > dy && dx > _reactSwipeableViewsCore.constant.UNCERTAINTY_THRESHOLD;
            if (!resistance && (axis === "y" || axis === "y-reverse") && (_this.indexCurrent === 0 && _this.startX < touch.pageX || _this.indexCurrent === _react.default.Children.count(_this.props.children) - 1 && _this.startX > touch.pageX)) {
              _this.isSwiping = false;
              return;
            }
            if (dx > dy) {
              event.preventDefault();
            }
            if (isSwiping === true || dy > _reactSwipeableViewsCore.constant.UNCERTAINTY_THRESHOLD) {
              _this.isSwiping = isSwiping;
              _this.startX = touch.pageX;
              return;
            }
          }
          if (_this.isSwiping !== true) {
            return;
          }
          event.preventDefault();
          _this.vx = _this.vx * 0.5 + (touch.pageX - _this.lastX) * 0.5;
          _this.lastX = touch.pageX;
          var _computeIndex = (0, _reactSwipeableViewsCore.computeIndex)({
            children,
            resistance,
            pageX: touch.pageX,
            startIndex: _this.startIndex,
            startX: _this.startX,
            viewLength: _this.viewLength
          }), index = _computeIndex.index, startX = _computeIndex.startX;
          if (nodeWhoClaimedTheScroll === null && !ignoreNativeScroll) {
            var domTreeShapes = getDomTreeShapes(event.target, _this.rootNode);
            var hasFoundNativeHandler = findNativeHandler({
              domTreeShapes,
              startX: _this.startX,
              pageX: touch.pageX,
              axis
            });
            if (hasFoundNativeHandler) {
              return;
            }
          }
          if (startX) {
            _this.startX = startX;
          } else if (nodeWhoClaimedTheScroll === null) {
            nodeWhoClaimedTheScroll = _this.rootNode;
          }
          _this.setIndexCurrent(index);
          var callback = function callback2() {
            if (onSwitching) {
              onSwitching(index, "move");
            }
          };
          if (_this.state.displaySameSlide || !_this.state.isDragging) {
            _this.setState({
              displaySameSlide: false,
              isDragging: true
            }, callback);
          }
          callback();
        };
        _this.handleSwipeEnd = function() {
          nodeWhoClaimedTheScroll = null;
          if (!_this.started) {
            return;
          }
          _this.started = false;
          if (_this.isSwiping !== true) {
            return;
          }
          var indexLatest = _this.state.indexLatest;
          var indexCurrent = _this.indexCurrent;
          var delta = indexLatest - indexCurrent;
          var indexNew;
          if (Math.abs(_this.vx) > _this.props.threshold) {
            if (_this.vx > 0) {
              indexNew = Math.floor(indexCurrent);
            } else {
              indexNew = Math.ceil(indexCurrent);
            }
          } else if (Math.abs(delta) > _this.props.hysteresis) {
            indexNew = delta > 0 ? Math.floor(indexCurrent) : Math.ceil(indexCurrent);
          } else {
            indexNew = indexLatest;
          }
          var indexMax = _react.default.Children.count(_this.props.children) - 1;
          if (indexNew < 0) {
            indexNew = 0;
          } else if (indexNew > indexMax) {
            indexNew = indexMax;
          }
          _this.setIndexCurrent(indexNew);
          _this.setState({
            indexLatest: indexNew,
            isDragging: false
          }, function() {
            if (_this.props.onSwitching) {
              _this.props.onSwitching(indexNew, "end");
            }
            if (_this.props.onChangeIndex && indexNew !== indexLatest) {
              _this.props.onChangeIndex(indexNew, indexLatest, {
                reason: "swipe"
              });
            }
            if (indexCurrent === indexLatest) {
              _this.handleTransitionEnd();
            }
          });
        };
        _this.handleTouchStart = function(event) {
          if (_this.props.onTouchStart) {
            _this.props.onTouchStart(event);
          }
          _this.handleSwipeStart(event);
        };
        _this.handleTouchEnd = function(event) {
          if (_this.props.onTouchEnd) {
            _this.props.onTouchEnd(event);
          }
          _this.handleSwipeEnd(event);
        };
        _this.handleMouseDown = function(event) {
          if (_this.props.onMouseDown) {
            _this.props.onMouseDown(event);
          }
          event.persist();
          _this.handleSwipeStart(adaptMouse(event));
        };
        _this.handleMouseUp = function(event) {
          if (_this.props.onMouseUp) {
            _this.props.onMouseUp(event);
          }
          _this.handleSwipeEnd(adaptMouse(event));
        };
        _this.handleMouseLeave = function(event) {
          if (_this.props.onMouseLeave) {
            _this.props.onMouseLeave(event);
          }
          if (_this.started) {
            _this.handleSwipeEnd(adaptMouse(event));
          }
        };
        _this.handleMouseMove = function(event) {
          if (_this.props.onMouseMove) {
            _this.props.onMouseMove(event);
          }
          if (_this.started) {
            _this.handleSwipeMove(adaptMouse(event));
          }
        };
        _this.handleScroll = function(event) {
          if (_this.props.onScroll) {
            _this.props.onScroll(event);
          }
          if (event.target !== _this.rootNode) {
            return;
          }
          if (_this.ignoreNextScrollEvents) {
            _this.ignoreNextScrollEvents = false;
            return;
          }
          var indexLatest = _this.state.indexLatest;
          var indexNew = Math.ceil(event.target.scrollLeft / event.target.clientWidth) + indexLatest;
          _this.ignoreNextScrollEvents = true;
          event.target.scrollLeft = 0;
          if (_this.props.onChangeIndex && indexNew !== indexLatest) {
            _this.props.onChangeIndex(indexNew, indexLatest, {
              reason: "focus"
            });
          }
        };
        _this.updateHeight = function() {
          if (_this.activeSlide !== null) {
            var child = _this.activeSlide.children[0];
            if (child !== void 0 && child.offsetHeight !== void 0 && _this.state.heightLatest !== child.offsetHeight) {
              _this.setState({
                heightLatest: child.offsetHeight
              });
            }
          }
        };
        if (true) {
          (0, _reactSwipeableViewsCore.checkIndexBounds)(props);
        }
        _this.state = {
          indexLatest: props.index,
          // Set to true as soon as the component is swiping.
          // It's the state counter part of this.isSwiping.
          isDragging: false,
          // Help with SSR logic and lazy loading logic.
          renderOnlyActive: !props.disableLazyLoading,
          heightLatest: 0,
          // Let the render method that we are going to display the same slide than previously.
          displaySameSlide: true
        };
        _this.setIndexCurrent(props.index);
        return _this;
      }
      (0, _createClass2.default)(SwipeableViews3, [{
        key: "getChildContext",
        value: function getChildContext() {
          var _this2 = this;
          return {
            swipeableViews: {
              slideUpdateHeight: function slideUpdateHeight() {
                _this2.updateHeight();
              }
            }
          };
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this3 = this;
          this.transitionListener = addEventListener(this.containerNode, "transitionend", function(event) {
            if (event.target !== _this3.containerNode) {
              return;
            }
            _this3.handleTransitionEnd();
          });
          this.touchMoveListener = addEventListener(this.rootNode, "touchmove", function(event) {
            if (_this3.props.disabled) {
              return;
            }
            _this3.handleSwipeMove(event);
          }, {
            passive: false
          });
          if (!this.props.disableLazyLoading) {
            this.firstRenderTimeout = setTimeout(function() {
              _this3.setState({
                renderOnlyActive: false
              });
            }, 0);
          }
          if (this.props.action) {
            this.props.action({
              updateHeight: this.updateHeight
            });
          }
        }
      }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
          var index = nextProps.index;
          if (typeof index === "number" && index !== this.props.index) {
            if (true) {
              (0, _reactSwipeableViewsCore.checkIndexBounds)(nextProps);
            }
            this.setIndexCurrent(index);
            this.setState({
              // If true, we are going to change the children. We shoudn't animate it.
              displaySameSlide: (0, _reactSwipeableViewsCore.getDisplaySameSlide)(this.props, nextProps),
              indexLatest: index
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.transitionListener.remove();
          this.touchMoveListener.remove();
          clearTimeout(this.firstRenderTimeout);
        }
      }, {
        key: "setIndexCurrent",
        value: function setIndexCurrent(indexCurrent) {
          if (!this.props.animateTransitions && this.indexCurrent !== indexCurrent) {
            this.handleTransitionEnd();
          }
          this.indexCurrent = indexCurrent;
          if (this.containerNode) {
            var axis = this.props.axis;
            var transform = axisProperties.transform[axis](indexCurrent * 100);
            this.containerNode.style.WebkitTransform = transform;
            this.containerNode.style.transform = transform;
          }
        }
      }, {
        key: "handleTransitionEnd",
        value: function handleTransitionEnd() {
          if (!this.props.onTransitionEnd) {
            return;
          }
          if (this.state.displaySameSlide) {
            return;
          }
          if (!this.state.isDragging) {
            this.props.onTransitionEnd();
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this4 = this;
          var _this$props2 = this.props, action = _this$props2.action, animateHeight = _this$props2.animateHeight, animateTransitions = _this$props2.animateTransitions, axis = _this$props2.axis, children = _this$props2.children, containerStyleProp = _this$props2.containerStyle, disabled = _this$props2.disabled, disableLazyLoading = _this$props2.disableLazyLoading, enableMouseEvents = _this$props2.enableMouseEvents, hysteresis = _this$props2.hysteresis, ignoreNativeScroll = _this$props2.ignoreNativeScroll, index = _this$props2.index, onChangeIndex = _this$props2.onChangeIndex, onSwitching = _this$props2.onSwitching, onTransitionEnd = _this$props2.onTransitionEnd, resistance = _this$props2.resistance, slideStyleProp = _this$props2.slideStyle, slideClassName = _this$props2.slideClassName, springConfig = _this$props2.springConfig, style = _this$props2.style, threshold = _this$props2.threshold, other = (0, _objectWithoutProperties2.default)(_this$props2, ["action", "animateHeight", "animateTransitions", "axis", "children", "containerStyle", "disabled", "disableLazyLoading", "enableMouseEvents", "hysteresis", "ignoreNativeScroll", "index", "onChangeIndex", "onSwitching", "onTransitionEnd", "resistance", "slideStyle", "slideClassName", "springConfig", "style", "threshold"]);
          var _this$state = this.state, displaySameSlide = _this$state.displaySameSlide, heightLatest = _this$state.heightLatest, indexLatest = _this$state.indexLatest, isDragging = _this$state.isDragging, renderOnlyActive = _this$state.renderOnlyActive;
          var touchEvents = !disabled ? {
            onTouchStart: this.handleTouchStart,
            onTouchEnd: this.handleTouchEnd
          } : {};
          var mouseEvents = !disabled && enableMouseEvents ? {
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.handleMouseUp,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: this.handleMouseMove
          } : {};
          true ? (0, _warning.default)(!animateHeight || !containerStyleProp || !containerStyleProp.height, "react-swipeable-view: You are setting animateHeight to true but you are\nalso providing a custom height.\nThe custom height has a higher priority than the animateHeight property.\nSo animateHeight is most likely having no effect at all.") : void 0;
          var slideStyle = (0, _extends2.default)({}, styles.slide, slideStyleProp);
          var transition;
          var WebkitTransition;
          if (isDragging || !animateTransitions || displaySameSlide) {
            transition = "all 0s ease 0s";
            WebkitTransition = "all 0s ease 0s";
          } else {
            transition = createTransition("transform", springConfig);
            WebkitTransition = createTransition("-webkit-transform", springConfig);
            if (heightLatest !== 0) {
              var additionalTranstion = ", ".concat(createTransition("height", springConfig));
              transition += additionalTranstion;
              WebkitTransition += additionalTranstion;
            }
          }
          var containerStyle = {
            height: null,
            WebkitFlexDirection: axisProperties.flexDirection[axis],
            flexDirection: axisProperties.flexDirection[axis],
            WebkitTransition,
            transition
          };
          if (!renderOnlyActive) {
            var transform = axisProperties.transform[axis](this.indexCurrent * 100);
            containerStyle.WebkitTransform = transform;
            containerStyle.transform = transform;
          }
          if (animateHeight) {
            containerStyle.height = heightLatest;
          }
          return _react.default.createElement("div", (0, _extends2.default)({
            ref: this.setRootNode,
            style: (0, _extends2.default)({}, axisProperties.root[axis], style)
          }, other, touchEvents, mouseEvents, {
            onScroll: this.handleScroll
          }), _react.default.createElement("div", {
            ref: this.setContainerNode,
            style: (0, _extends2.default)({}, containerStyle, styles.container, containerStyleProp),
            className: "react-swipeable-view-container"
          }, _react.default.Children.map(children, function(child, indexChild) {
            if (renderOnlyActive && indexChild !== indexLatest) {
              return null;
            }
            true ? (0, _warning.default)(_react.default.isValidElement(child), "react-swipeable-view: one of the children provided is invalid: ".concat(child, ".\nWe are expecting a valid React Element")) : void 0;
            var ref;
            var hidden = true;
            if (indexChild === indexLatest) {
              hidden = false;
              if (animateHeight) {
                ref = _this4.setActiveSlide;
                slideStyle.overflowY = "hidden";
              }
            }
            return _react.default.createElement("div", {
              ref,
              style: slideStyle,
              className: slideClassName,
              "aria-hidden": hidden,
              "data-swipeable": "true"
            }, child);
          })));
        }
      }]);
      return SwipeableViews3;
    }(_react.default.Component);
    SwipeableViews2.displayName = "ReactSwipableView";
    SwipeableViews2.propTypes = true ? {
      /**
       * This is callback property. It's called by the component on mount.
       * This is useful when you want to trigger an action programmatically.
       * It currently only supports updateHeight() action.
       *
       * @param {object} actions This object contains all posible actions
       * that can be triggered programmatically.
       */
      action: _propTypes.default.func,
      /**
       * If `true`, the height of the container will be animated to match the current slide height.
       * Animating another style property has a negative impact regarding performance.
       */
      animateHeight: _propTypes.default.bool,
      /**
       * If `false`, changes to the index prop will not cause an animated transition.
       */
      animateTransitions: _propTypes.default.bool,
      /**
       * The axis on which the slides will slide.
       */
      axis: _propTypes.default.oneOf(["x", "x-reverse", "y", "y-reverse"]),
      /**
       * Use this property to provide your slides.
       */
      children: _propTypes.default.node.isRequired,
      /**
       * This is the inlined style that will be applied
       * to each slide container.
       */
      containerStyle: _propTypes.default.object,
      /**
       * If `true`, it will disable touch events.
       * This is useful when you want to prohibit the user from changing slides.
       */
      disabled: _propTypes.default.bool,
      /**
       * This is the config used to disable lazyloding,
       * if `true` will render all the views in first rendering.
       */
      disableLazyLoading: _propTypes.default.bool,
      /**
       * If `true`, it will enable mouse events.
       * This will allow the user to perform the relevant swipe actions with a mouse.
       */
      enableMouseEvents: _propTypes.default.bool,
      /**
       * Configure hysteresis between slides. This value determines how far
       * should user swipe to switch slide.
       */
      hysteresis: _propTypes.default.number,
      /**
       * If `true`, it will ignore native scroll container.
       * It can be used to filter out false positive that blocks the swipe.
       */
      ignoreNativeScroll: _propTypes.default.bool,
      /**
       * This is the index of the slide to show.
       * This is useful when you want to change the default slide shown.
       * Or when you have tabs linked to each slide.
       */
      index: _propTypes.default.number,
      /**
       * This is callback prop. It's call by the
       * component when the shown slide change after a swipe made by the user.
       * This is useful when you have tabs linked to each slide.
       *
       * @param {integer} index This is the current index of the slide.
       * @param {integer} indexLatest This is the oldest index of the slide.
       * @param {object} meta Meta data containing more information about the event.
       */
      onChangeIndex: _propTypes.default.func,
      /**
       * @ignore
       */
      onMouseDown: _propTypes.default.func,
      /**
       * @ignore
       */
      onMouseLeave: _propTypes.default.func,
      /**
       * @ignore
       */
      onMouseMove: _propTypes.default.func,
      /**
       * @ignore
       */
      onMouseUp: _propTypes.default.func,
      /**
       * @ignore
       */
      onScroll: _propTypes.default.func,
      /**
       * This is callback prop. It's called by the
       * component when the slide switching.
       * This is useful when you want to implement something corresponding
       * to the current slide position.
       *
       * @param {integer} index This is the current index of the slide.
       * @param {string} type Can be either `move` or `end`.
       */
      onSwitching: _propTypes.default.func,
      /**
       * @ignore
       */
      onTouchEnd: _propTypes.default.func,
      /**
       * @ignore
       */
      onTouchMove: _propTypes.default.func,
      /**
       * @ignore
       */
      onTouchStart: _propTypes.default.func,
      /**
       * The callback that fires when the animation comes to a rest.
       * This is useful to defer CPU intensive task.
       */
      onTransitionEnd: _propTypes.default.func,
      /**
       * If `true`, it will add bounds effect on the edges.
       */
      resistance: _propTypes.default.bool,
      /**
       * This is the className that will be applied
       * on the slide component.
       */
      slideClassName: _propTypes.default.string,
      /**
       * This is the inlined style that will be applied
       * on the slide component.
       */
      slideStyle: _propTypes.default.object,
      /**
       * This is the config used to create CSS transitions.
       * This is useful to change the dynamic of the transition.
       */
      springConfig: _propTypes.default.shape({
        delay: _propTypes.default.string,
        duration: _propTypes.default.string,
        easeFunction: _propTypes.default.string
      }),
      /**
       * This is the inlined style that will be applied
       * on the root component.
       */
      style: _propTypes.default.object,
      /**
       * This is the threshold used for detecting a quick swipe.
       * If the computed speed is above this value, the index change.
       */
      threshold: _propTypes.default.number
    } : {};
    SwipeableViews2.defaultProps = {
      animateHeight: false,
      animateTransitions: true,
      axis: "x",
      disabled: false,
      disableLazyLoading: false,
      enableMouseEvents: false,
      hysteresis: 0.6,
      ignoreNativeScroll: false,
      index: 0,
      threshold: 5,
      springConfig: {
        duration: "0.35s",
        easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
        delay: "0s"
      },
      resistance: false
    };
    SwipeableViews2.childContextTypes = {
      swipeableViews: _propTypes.default.shape({
        slideUpdateHeight: _propTypes.default.func
      })
    };
    var _default = SwipeableViews2;
    exports.default = _default;
  }
});

// node_modules/react-swipeable-views/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/react-swipeable-views/lib/index.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _SwipeableViews = _interopRequireDefault(require_SwipeableViews());
    var _default = _SwipeableViews.default;
    exports.default = _default;
  }
});

// node_modules/react-brackets/dist/index.modern.js
var import_react2 = __toESM(require_react());

// node_modules/styled-components/dist/styled-components.browser.esm.js
var import_react_is = __toESM(require_react_is());
var import_react = __toESM(require_react());
var import_shallowequal = __toESM(require_shallowequal());

// node_modules/@emotion/stylis/dist/stylis.browser.esm.js
function stylis_min(W2) {
  function M2(d2, c2, e2, h, a2) {
    for (var m2 = 0, b2 = 0, v2 = 0, n2 = 0, q2, g2, x2 = 0, K2 = 0, k2, u2 = k2 = q2 = 0, l2 = 0, r2 = 0, I2 = 0, t2 = 0, B3 = e2.length, J2 = B3 - 1, y2, f = "", p = "", F3 = "", G3 = "", C2; l2 < B3; ) {
      g2 = e2.charCodeAt(l2);
      l2 === J2 && 0 !== b2 + n2 + v2 + m2 && (0 !== b2 && (g2 = 47 === b2 ? 10 : 47), n2 = v2 = m2 = 0, B3++, J2++);
      if (0 === b2 + n2 + v2 + m2) {
        if (l2 === J2 && (0 < r2 && (f = f.replace(N2, "")), 0 < f.trim().length)) {
          switch (g2) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e2.charAt(l2);
          }
          g2 = 59;
        }
        switch (g2) {
          case 123:
            f = f.trim();
            q2 = f.charCodeAt(0);
            k2 = 1;
            for (t2 = ++l2; l2 < B3; ) {
              switch (g2 = e2.charCodeAt(l2)) {
                case 123:
                  k2++;
                  break;
                case 125:
                  k2--;
                  break;
                case 47:
                  switch (g2 = e2.charCodeAt(l2 + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u2 = l2 + 1; u2 < J2; ++u2) {
                          switch (e2.charCodeAt(u2)) {
                            case 47:
                              if (42 === g2 && 42 === e2.charCodeAt(u2 - 1) && l2 + 2 !== u2) {
                                l2 = u2 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (47 === g2) {
                                l2 = u2 + 1;
                                break a;
                              }
                          }
                        }
                        l2 = u2;
                      }
                  }
                  break;
                case 91:
                  g2++;
                case 40:
                  g2++;
                case 34:
                case 39:
                  for (; l2++ < J2 && e2.charCodeAt(l2) !== g2; ) {
                  }
              }
              if (0 === k2) break;
              l2++;
            }
            k2 = e2.substring(t2, l2);
            0 === q2 && (q2 = (f = f.replace(ca, "").trim()).charCodeAt(0));
            switch (q2) {
              case 64:
                0 < r2 && (f = f.replace(N2, ""));
                g2 = f.charCodeAt(1);
                switch (g2) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r2 = c2;
                    break;
                  default:
                    r2 = O2;
                }
                k2 = M2(c2, r2, k2, g2, a2 + 1);
                t2 = k2.length;
                0 < A && (r2 = X2(O2, f, I2), C2 = H2(3, k2, r2, c2, D2, z2, t2, g2, a2, h), f = r2.join(""), void 0 !== C2 && 0 === (t2 = (k2 = C2.trim()).length) && (g2 = 0, k2 = ""));
                if (0 < t2) switch (g2) {
                  case 115:
                    f = f.replace(da, ea);
                  case 100:
                  case 109:
                  case 45:
                    k2 = f + "{" + k2 + "}";
                    break;
                  case 107:
                    f = f.replace(fa, "$1 $2");
                    k2 = f + "{" + k2 + "}";
                    k2 = 1 === w2 || 2 === w2 && L2("@" + k2, 3) ? "@-webkit-" + k2 + "@" + k2 : "@" + k2;
                    break;
                  default:
                    k2 = f + k2, 112 === h && (k2 = (p += k2, ""));
                }
                else k2 = "";
                break;
              default:
                k2 = M2(c2, X2(c2, f, I2), k2, h, a2 + 1);
            }
            F3 += k2;
            k2 = I2 = r2 = u2 = q2 = 0;
            f = "";
            g2 = e2.charCodeAt(++l2);
            break;
          case 125:
          case 59:
            f = (0 < r2 ? f.replace(N2, "") : f).trim();
            if (1 < (t2 = f.length)) switch (0 === u2 && (q2 = f.charCodeAt(0), 45 === q2 || 96 < q2 && 123 > q2) && (t2 = (f = f.replace(" ", ":")).length), 0 < A && void 0 !== (C2 = H2(1, f, c2, d2, D2, z2, p.length, h, a2, h)) && 0 === (t2 = (f = C2.trim()).length) && (f = "\0\0"), q2 = f.charCodeAt(0), g2 = f.charCodeAt(1), q2) {
              case 0:
                break;
              case 64:
                if (105 === g2 || 99 === g2) {
                  G3 += f + e2.charAt(l2);
                  break;
                }
              default:
                58 !== f.charCodeAt(t2 - 1) && (p += P(f, q2, g2, f.charCodeAt(2)));
            }
            I2 = r2 = u2 = q2 = 0;
            f = "";
            g2 = e2.charCodeAt(++l2);
        }
      }
      switch (g2) {
        case 13:
        case 10:
          47 === b2 ? b2 = 0 : 0 === 1 + q2 && 107 !== h && 0 < f.length && (r2 = 1, f += "\0");
          0 < A * Y2 && H2(0, f, c2, d2, D2, z2, p.length, h, a2, h);
          z2 = 1;
          D2++;
          break;
        case 59:
        case 125:
          if (0 === b2 + n2 + v2 + m2) {
            z2++;
            break;
          }
        default:
          z2++;
          y2 = e2.charAt(l2);
          switch (g2) {
            case 9:
            case 32:
              if (0 === n2 + m2 + b2) switch (x2) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y2 = "";
                  break;
                default:
                  32 !== g2 && (y2 = " ");
              }
              break;
            case 0:
              y2 = "\\0";
              break;
            case 12:
              y2 = "\\f";
              break;
            case 11:
              y2 = "\\v";
              break;
            case 38:
              0 === n2 + b2 + m2 && (r2 = I2 = 1, y2 = "\f" + y2);
              break;
            case 108:
              if (0 === n2 + b2 + m2 + E2 && 0 < u2) switch (l2 - u2) {
                case 2:
                  112 === x2 && 58 === e2.charCodeAt(l2 - 3) && (E2 = x2);
                case 8:
                  111 === K2 && (E2 = K2);
              }
              break;
            case 58:
              0 === n2 + b2 + m2 && (u2 = l2);
              break;
            case 44:
              0 === b2 + v2 + n2 + m2 && (r2 = 1, y2 += "\r");
              break;
            case 34:
            case 39:
              0 === b2 && (n2 = n2 === g2 ? 0 : 0 === n2 ? g2 : n2);
              break;
            case 91:
              0 === n2 + b2 + v2 && m2++;
              break;
            case 93:
              0 === n2 + b2 + v2 && m2--;
              break;
            case 41:
              0 === n2 + b2 + m2 && v2--;
              break;
            case 40:
              if (0 === n2 + b2 + m2) {
                if (0 === q2) switch (2 * x2 + 3 * K2) {
                  case 533:
                    break;
                  default:
                    q2 = 1;
                }
                v2++;
              }
              break;
            case 64:
              0 === b2 + v2 + n2 + m2 + u2 + k2 && (k2 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n2 + m2 + v2)) switch (b2) {
                case 0:
                  switch (2 * g2 + 3 * e2.charCodeAt(l2 + 1)) {
                    case 235:
                      b2 = 47;
                      break;
                    case 220:
                      t2 = l2, b2 = 42;
                  }
                  break;
                case 42:
                  47 === g2 && 42 === x2 && t2 + 2 !== l2 && (33 === e2.charCodeAt(t2 + 2) && (p += e2.substring(t2, l2 + 1)), y2 = "", b2 = 0);
              }
          }
          0 === b2 && (f += y2);
      }
      K2 = x2;
      x2 = g2;
      l2++;
    }
    t2 = p.length;
    if (0 < t2) {
      r2 = c2;
      if (0 < A && (C2 = H2(2, p, r2, d2, D2, z2, t2, h, a2, h), void 0 !== C2 && 0 === (p = C2).length)) return G3 + p + F3;
      p = r2.join(",") + "{" + p + "}";
      if (0 !== w2 * E2) {
        2 !== w2 || L2(p, 2) || (E2 = 0);
        switch (E2) {
          case 111:
            p = p.replace(ha, ":-moz-$1") + p;
            break;
          case 112:
            p = p.replace(Q2, "::-webkit-input-$1") + p.replace(Q2, "::-moz-$1") + p.replace(Q2, ":-ms-input-$1") + p;
        }
        E2 = 0;
      }
    }
    return G3 + p + F3;
  }
  function X2(d2, c2, e2) {
    var h = c2.trim().split(ia);
    c2 = h;
    var a2 = h.length, m2 = d2.length;
    switch (m2) {
      case 0:
      case 1:
        var b2 = 0;
        for (d2 = 0 === m2 ? "" : d2[0] + " "; b2 < a2; ++b2) {
          c2[b2] = Z2(d2, c2[b2], e2).trim();
        }
        break;
      default:
        var v2 = b2 = 0;
        for (c2 = []; b2 < a2; ++b2) {
          for (var n2 = 0; n2 < m2; ++n2) {
            c2[v2++] = Z2(d2[n2] + " ", h[b2], e2).trim();
          }
        }
    }
    return c2;
  }
  function Z2(d2, c2, e2) {
    var h = c2.charCodeAt(0);
    33 > h && (h = (c2 = c2.trim()).charCodeAt(0));
    switch (h) {
      case 38:
        return c2.replace(F2, "$1" + d2.trim());
      case 58:
        return d2.trim() + c2.replace(F2, "$1" + d2.trim());
      default:
        if (0 < 1 * e2 && 0 < c2.indexOf("\f")) return c2.replace(F2, (58 === d2.charCodeAt(0) ? "" : "$1") + d2.trim());
    }
    return d2 + c2;
  }
  function P(d2, c2, e2, h) {
    var a2 = d2 + ";", m2 = 2 * c2 + 3 * e2 + 4 * h;
    if (944 === m2) {
      d2 = a2.indexOf(":", 9) + 1;
      var b2 = a2.substring(d2, a2.length - 1).trim();
      b2 = a2.substring(0, d2).trim() + b2 + ";";
      return 1 === w2 || 2 === w2 && L2(b2, 1) ? "-webkit-" + b2 + b2 : b2;
    }
    if (0 === w2 || 2 === w2 && !L2(a2, 1)) return a2;
    switch (m2) {
      case 1015:
        return 97 === a2.charCodeAt(10) ? "-webkit-" + a2 + a2 : a2;
      case 951:
        return 116 === a2.charCodeAt(3) ? "-webkit-" + a2 + a2 : a2;
      case 963:
        return 110 === a2.charCodeAt(5) ? "-webkit-" + a2 + a2 : a2;
      case 1009:
        if (100 !== a2.charCodeAt(4)) break;
      case 969:
      case 942:
        return "-webkit-" + a2 + a2;
      case 978:
        return "-webkit-" + a2 + "-moz-" + a2 + a2;
      case 1019:
      case 983:
        return "-webkit-" + a2 + "-moz-" + a2 + "-ms-" + a2 + a2;
      case 883:
        if (45 === a2.charCodeAt(8)) return "-webkit-" + a2 + a2;
        if (0 < a2.indexOf("image-set(", 11)) return a2.replace(ja, "$1-webkit-$2") + a2;
        break;
      case 932:
        if (45 === a2.charCodeAt(4)) switch (a2.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + a2.replace("-grow", "") + "-webkit-" + a2 + "-ms-" + a2.replace("grow", "positive") + a2;
          case 115:
            return "-webkit-" + a2 + "-ms-" + a2.replace("shrink", "negative") + a2;
          case 98:
            return "-webkit-" + a2 + "-ms-" + a2.replace("basis", "preferred-size") + a2;
        }
        return "-webkit-" + a2 + "-ms-" + a2 + a2;
      case 964:
        return "-webkit-" + a2 + "-ms-flex-" + a2 + a2;
      case 1023:
        if (99 !== a2.charCodeAt(8)) break;
        b2 = a2.substring(a2.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b2 + "-webkit-" + a2 + "-ms-flex-pack" + b2 + a2;
      case 1005:
        return ka.test(a2) ? a2.replace(aa, ":-webkit-") + a2.replace(aa, ":-moz-") + a2 : a2;
      case 1e3:
        b2 = a2.substring(13).trim();
        c2 = b2.indexOf("-") + 1;
        switch (b2.charCodeAt(0) + b2.charCodeAt(c2)) {
          case 226:
            b2 = a2.replace(G2, "tb");
            break;
          case 232:
            b2 = a2.replace(G2, "tb-rl");
            break;
          case 220:
            b2 = a2.replace(G2, "lr");
            break;
          default:
            return a2;
        }
        return "-webkit-" + a2 + "-ms-" + b2 + a2;
      case 1017:
        if (-1 === a2.indexOf("sticky", 9)) break;
      case 975:
        c2 = (a2 = d2).length - 10;
        b2 = (33 === a2.charCodeAt(c2) ? a2.substring(0, c2) : a2).substring(d2.indexOf(":", 7) + 1).trim();
        switch (m2 = b2.charCodeAt(0) + (b2.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b2.charCodeAt(8)) break;
          case 115:
            a2 = a2.replace(b2, "-webkit-" + b2) + ";" + a2;
            break;
          case 207:
          case 102:
            a2 = a2.replace(b2, "-webkit-" + (102 < m2 ? "inline-" : "") + "box") + ";" + a2.replace(b2, "-webkit-" + b2) + ";" + a2.replace(b2, "-ms-" + b2 + "box") + ";" + a2;
        }
        return a2 + ";";
      case 938:
        if (45 === a2.charCodeAt(5)) switch (a2.charCodeAt(6)) {
          case 105:
            return b2 = a2.replace("-items", ""), "-webkit-" + a2 + "-webkit-box-" + b2 + "-ms-flex-" + b2 + a2;
          case 115:
            return "-webkit-" + a2 + "-ms-flex-item-" + a2.replace(ba, "") + a2;
          default:
            return "-webkit-" + a2 + "-ms-flex-line-pack" + a2.replace("align-content", "").replace(ba, "") + a2;
        }
        break;
      case 973:
      case 989:
        if (45 !== a2.charCodeAt(3) || 122 === a2.charCodeAt(4)) break;
      case 931:
      case 953:
        if (true === la.test(d2)) return 115 === (b2 = d2.substring(d2.indexOf(":") + 1)).charCodeAt(0) ? P(d2.replace("stretch", "fill-available"), c2, e2, h).replace(":fill-available", ":stretch") : a2.replace(b2, "-webkit-" + b2) + a2.replace(b2, "-moz-" + b2.replace("fill-", "")) + a2;
        break;
      case 962:
        if (a2 = "-webkit-" + a2 + (102 === a2.charCodeAt(5) ? "-ms-" + a2 : "") + a2, 211 === e2 + h && 105 === a2.charCodeAt(13) && 0 < a2.indexOf("transform", 10)) return a2.substring(0, a2.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a2;
    }
    return a2;
  }
  function L2(d2, c2) {
    var e2 = d2.indexOf(1 === c2 ? ":" : "{"), h = d2.substring(0, 3 !== c2 ? e2 : 10);
    e2 = d2.substring(e2 + 1, d2.length - 1);
    return R2(2 !== c2 ? h : h.replace(na, "$1"), e2, c2);
  }
  function ea(d2, c2) {
    var e2 = P(c2, c2.charCodeAt(0), c2.charCodeAt(1), c2.charCodeAt(2));
    return e2 !== c2 + ";" ? e2.replace(oa, " or ($1)").substring(4) : "(" + c2 + ")";
  }
  function H2(d2, c2, e2, h, a2, m2, b2, v2, n2, q2) {
    for (var g2 = 0, x2 = c2, w3; g2 < A; ++g2) {
      switch (w3 = S2[g2].call(B2, d2, x2, e2, h, a2, m2, b2, v2, n2, q2)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x2 = w3;
      }
    }
    if (x2 !== c2) return x2;
  }
  function T2(d2) {
    switch (d2) {
      case void 0:
      case null:
        A = S2.length = 0;
        break;
      default:
        if ("function" === typeof d2) S2[A++] = d2;
        else if ("object" === typeof d2) for (var c2 = 0, e2 = d2.length; c2 < e2; ++c2) {
          T2(d2[c2]);
        }
        else Y2 = !!d2 | 0;
    }
    return T2;
  }
  function U2(d2) {
    d2 = d2.prefix;
    void 0 !== d2 && (R2 = null, d2 ? "function" !== typeof d2 ? w2 = 1 : (w2 = 2, R2 = d2) : w2 = 0);
    return U2;
  }
  function B2(d2, c2) {
    var e2 = d2;
    33 > e2.charCodeAt(0) && (e2 = e2.trim());
    V2 = e2;
    e2 = [V2];
    if (0 < A) {
      var h = H2(-1, c2, e2, e2, D2, z2, 0, 0, 0, 0);
      void 0 !== h && "string" === typeof h && (c2 = h);
    }
    var a2 = M2(O2, e2, c2, 0, 0);
    0 < A && (h = H2(-2, a2, e2, e2, D2, z2, a2.length, 0, 0, 0), void 0 !== h && (a2 = h));
    V2 = "";
    E2 = 0;
    z2 = D2 = 1;
    return a2;
  }
  var ca = /^\0+/g, N2 = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha = /:(read-only)/g, G2 = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z2 = 1, D2 = 1, E2 = 0, w2 = 1, O2 = [], S2 = [], A = 0, R2 = null, Y2 = 0, V2 = "";
  B2.use = T2;
  B2.set = U2;
  void 0 !== W2 && U2(W2);
  return B2;
}
var stylis_browser_esm_default = stylis_min;

// node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var unitless_browser_esm_default = unitlessKeys;

// node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}

// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);

// node_modules/styled-components/dist/styled-components.browser.esm.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
function y() {
  return (y = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
var v = function(e2, t2) {
  for (var n2 = [e2[0]], r2 = 0, o2 = t2.length; r2 < o2; r2 += 1) n2.push(t2[r2], e2[r2 + 1]);
  return n2;
};
var g = function(t2) {
  return null !== t2 && "object" == typeof t2 && "[object Object]" === (t2.toString ? t2.toString() : Object.prototype.toString.call(t2)) && !(0, import_react_is.typeOf)(t2);
};
var S = Object.freeze([]);
var w = Object.freeze({});
function E(e2) {
  return "function" == typeof e2;
}
function b(e2) {
  return "string" == typeof e2 && e2 || e2.displayName || e2.name || "Component";
}
function _(e2) {
  return e2 && "string" == typeof e2.styledComponentId;
}
var N = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var C = "undefined" != typeof window && "HTMLElement" in window;
var I = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && (void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : true));
var O = true ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n" } : {};
function R() {
  for (var e2 = arguments.length <= 0 ? void 0 : arguments[0], t2 = [], n2 = 1, r2 = arguments.length; n2 < r2; n2 += 1) t2.push(n2 < 0 || arguments.length <= n2 ? void 0 : arguments[n2]);
  return t2.forEach(function(t3) {
    e2 = e2.replace(/%[a-z]/, t3);
  }), e2;
}
function D(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
  throw false ? new Error("An error occurred. See https://git.io/JUIaE#" + e2 + " for more information." + (n2.length > 0 ? " Args: " + n2.join(", ") : "")) : new Error(R.apply(void 0, [O[e2]].concat(n2)).trim());
}
var j = function() {
  function e2(e3) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
  }
  var t2 = e2.prototype;
  return t2.indexOfGroup = function(e3) {
    for (var t3 = 0, n2 = 0; n2 < e3; n2++) t3 += this.groupSizes[n2];
    return t3;
  }, t2.insertRules = function(e3, t3) {
    if (e3 >= this.groupSizes.length) {
      for (var n2 = this.groupSizes, r2 = n2.length, o2 = r2; e3 >= o2; ) (o2 <<= 1) < 0 && D(16, "" + e3);
      this.groupSizes = new Uint32Array(o2), this.groupSizes.set(n2), this.length = o2;
      for (var s2 = r2; s2 < o2; s2++) this.groupSizes[s2] = 0;
    }
    for (var i2 = this.indexOfGroup(e3 + 1), a2 = 0, c2 = t3.length; a2 < c2; a2++) this.tag.insertRule(i2, t3[a2]) && (this.groupSizes[e3]++, i2++);
  }, t2.clearGroup = function(e3) {
    if (e3 < this.length) {
      var t3 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), r2 = n2 + t3;
      this.groupSizes[e3] = 0;
      for (var o2 = n2; o2 < r2; o2++) this.tag.deleteRule(n2);
    }
  }, t2.getGroup = function(e3) {
    var t3 = "";
    if (e3 >= this.length || 0 === this.groupSizes[e3]) return t3;
    for (var n2 = this.groupSizes[e3], r2 = this.indexOfGroup(e3), o2 = r2 + n2, s2 = r2; s2 < o2; s2++) t3 += this.tag.getRule(s2) + "/*!sc*/\n";
    return t3;
  }, e2;
}();
var T = /* @__PURE__ */ new Map();
var x = /* @__PURE__ */ new Map();
var k = 1;
var V = function(e2) {
  if (T.has(e2)) return T.get(e2);
  for (; x.has(k); ) k++;
  var t2 = k++;
  return ((0 | t2) < 0 || t2 > 1 << 30) && D(16, "" + t2), T.set(e2, t2), x.set(t2, e2), t2;
};
var B = function(e2) {
  return x.get(e2);
};
var z = function(e2, t2) {
  t2 >= k && (k = t2 + 1), T.set(e2, t2), x.set(t2, e2);
};
var M = "style[" + N + '][data-styled-version="5.3.11"]';
var G = new RegExp("^" + N + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
var L = function(e2, t2, n2) {
  for (var r2, o2 = n2.split(","), s2 = 0, i2 = o2.length; s2 < i2; s2++) (r2 = o2[s2]) && e2.registerName(t2, r2);
};
var F = function(e2, t2) {
  for (var n2 = (t2.textContent || "").split("/*!sc*/\n"), r2 = [], o2 = 0, s2 = n2.length; o2 < s2; o2++) {
    var i2 = n2[o2].trim();
    if (i2) {
      var a2 = i2.match(G);
      if (a2) {
        var c2 = 0 | parseInt(a2[1], 10), u2 = a2[2];
        0 !== c2 && (z(u2, c2), L(e2, u2, a2[3]), e2.getTag().insertRules(c2, r2)), r2.length = 0;
      } else r2.push(i2);
    }
  }
};
var Y = function() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
};
var q = function(e2) {
  var t2 = document.head, n2 = e2 || t2, r2 = document.createElement("style"), o2 = function(e3) {
    for (var t3 = e3.childNodes, n3 = t3.length; n3 >= 0; n3--) {
      var r3 = t3[n3];
      if (r3 && 1 === r3.nodeType && r3.hasAttribute(N)) return r3;
    }
  }(n2), s2 = void 0 !== o2 ? o2.nextSibling : null;
  r2.setAttribute(N, "active"), r2.setAttribute("data-styled-version", "5.3.11");
  var i2 = Y();
  return i2 && r2.setAttribute("nonce", i2), n2.insertBefore(r2, s2), r2;
};
var H = function() {
  function e2(e3) {
    var t3 = this.element = q(e3);
    t3.appendChild(document.createTextNode("")), this.sheet = function(e4) {
      if (e4.sheet) return e4.sheet;
      for (var t4 = document.styleSheets, n2 = 0, r2 = t4.length; n2 < r2; n2++) {
        var o2 = t4[n2];
        if (o2.ownerNode === e4) return o2;
      }
      D(17);
    }(t3), this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    try {
      return this.sheet.insertRule(t3, e3), this.length++, true;
    } catch (e4) {
      return false;
    }
  }, t2.deleteRule = function(e3) {
    this.sheet.deleteRule(e3), this.length--;
  }, t2.getRule = function(e3) {
    var t3 = this.sheet.cssRules[e3];
    return void 0 !== t3 && "string" == typeof t3.cssText ? t3.cssText : "";
  }, e2;
}();
var $ = function() {
  function e2(e3) {
    var t3 = this.element = q(e3);
    this.nodes = t3.childNodes, this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    if (e3 <= this.length && e3 >= 0) {
      var n2 = document.createTextNode(t3), r2 = this.nodes[e3];
      return this.element.insertBefore(n2, r2 || null), this.length++, true;
    }
    return false;
  }, t2.deleteRule = function(e3) {
    this.element.removeChild(this.nodes[e3]), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.nodes[e3].textContent : "";
  }, e2;
}();
var W = function() {
  function e2(e3) {
    this.rules = [], this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    return e3 <= this.length && (this.rules.splice(e3, 0, t3), this.length++, true);
  }, t2.deleteRule = function(e3) {
    this.rules.splice(e3, 1), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.rules[e3] : "";
  }, e2;
}();
var U = C;
var J = { isServer: !C, useCSSOMInjection: !I };
var X = function() {
  function e2(e3, t3, n2) {
    void 0 === e3 && (e3 = w), void 0 === t3 && (t3 = {}), this.options = y({}, J, {}, e3), this.gs = t3, this.names = new Map(n2), this.server = !!e3.isServer, !this.server && C && U && (U = false, function(e4) {
      for (var t4 = document.querySelectorAll(M), n3 = 0, r2 = t4.length; n3 < r2; n3++) {
        var o2 = t4[n3];
        o2 && "active" !== o2.getAttribute(N) && (F(e4, o2), o2.parentNode && o2.parentNode.removeChild(o2));
      }
    }(this));
  }
  e2.registerId = function(e3) {
    return V(e3);
  };
  var t2 = e2.prototype;
  return t2.reconstructWithOptions = function(t3, n2) {
    return void 0 === n2 && (n2 = true), new e2(y({}, this.options, {}, t3), this.gs, n2 && this.names || void 0);
  }, t2.allocateGSInstance = function(e3) {
    return this.gs[e3] = (this.gs[e3] || 0) + 1;
  }, t2.getTag = function() {
    return this.tag || (this.tag = (n2 = (t3 = this.options).isServer, r2 = t3.useCSSOMInjection, o2 = t3.target, e3 = n2 ? new W(o2) : r2 ? new H(o2) : new $(o2), new j(e3)));
    var e3, t3, n2, r2, o2;
  }, t2.hasNameForId = function(e3, t3) {
    return this.names.has(e3) && this.names.get(e3).has(t3);
  }, t2.registerName = function(e3, t3) {
    if (V(e3), this.names.has(e3)) this.names.get(e3).add(t3);
    else {
      var n2 = /* @__PURE__ */ new Set();
      n2.add(t3), this.names.set(e3, n2);
    }
  }, t2.insertRules = function(e3, t3, n2) {
    this.registerName(e3, t3), this.getTag().insertRules(V(e3), n2);
  }, t2.clearNames = function(e3) {
    this.names.has(e3) && this.names.get(e3).clear();
  }, t2.clearRules = function(e3) {
    this.getTag().clearGroup(V(e3)), this.clearNames(e3);
  }, t2.clearTag = function() {
    this.tag = void 0;
  }, t2.toString = function() {
    return function(e3) {
      for (var t3 = e3.getTag(), n2 = t3.length, r2 = "", o2 = 0; o2 < n2; o2++) {
        var s2 = B(o2);
        if (void 0 !== s2) {
          var i2 = e3.names.get(s2), a2 = t3.getGroup(o2);
          if (i2 && a2 && i2.size) {
            var c2 = N + ".g" + o2 + '[id="' + s2 + '"]', u2 = "";
            void 0 !== i2 && i2.forEach(function(e4) {
              e4.length > 0 && (u2 += e4 + ",");
            }), r2 += "" + a2 + c2 + '{content:"' + u2 + '"}/*!sc*/\n';
          }
        }
      }
      return r2;
    }(this);
  }, e2;
}();
var Z = /(a)(d)/gi;
var K = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function Q(e2) {
  var t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0) n2 = K(t2 % 52) + n2;
  return (K(t2 % 52) + n2).replace(Z, "$1-$2");
}
var ee = function(e2, t2) {
  for (var n2 = t2.length; n2; ) e2 = 33 * e2 ^ t2.charCodeAt(--n2);
  return e2;
};
var te = function(e2) {
  return ee(5381, e2);
};
function ne(e2) {
  for (var t2 = 0; t2 < e2.length; t2 += 1) {
    var n2 = e2[t2];
    if (E(n2) && !_(n2)) return false;
  }
  return true;
}
var re = te("5.3.11");
var oe = function() {
  function e2(e3, t2, n2) {
    this.rules = e3, this.staticRulesId = "", this.isStatic = false, this.componentId = t2, this.baseHash = ee(re, t2), this.baseStyle = n2, X.registerId(t2);
  }
  return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
    var r2 = this.componentId, o2 = [];
    if (this.baseStyle && o2.push(this.baseStyle.generateAndInjectStyles(e3, t2, n2)), this.isStatic && !n2.hash) if (this.staticRulesId && t2.hasNameForId(r2, this.staticRulesId)) o2.push(this.staticRulesId);
    else {
      var s2 = _e(this.rules, e3, t2, n2).join(""), i2 = Q(ee(this.baseHash, s2) >>> 0);
      if (!t2.hasNameForId(r2, i2)) {
        var a2 = n2(s2, "." + i2, void 0, r2);
        t2.insertRules(r2, i2, a2);
      }
      o2.push(i2), this.staticRulesId = i2;
    }
    else {
      for (var c2 = this.rules.length, u2 = ee(this.baseHash, n2.hash), l2 = "", d2 = 0; d2 < c2; d2++) {
        var h = this.rules[d2];
        if ("string" == typeof h) l2 += h, u2 = ee(u2, h + d2);
        else if (h) {
          var p = _e(h, e3, t2, n2), f = Array.isArray(p) ? p.join("") : p;
          u2 = ee(u2, f + d2), l2 += f;
        }
      }
      if (l2) {
        var m2 = Q(u2 >>> 0);
        if (!t2.hasNameForId(r2, m2)) {
          var y2 = n2(l2, "." + m2, void 0, r2);
          t2.insertRules(r2, m2, y2);
        }
        o2.push(m2);
      }
    }
    return o2.join(" ");
  }, e2;
}();
var se = /^\s*\/\/.*$/gm;
var ie = [":", "[", ".", "#"];
function ae(e2) {
  var t2, n2, r2, o2, s2 = void 0 === e2 ? w : e2, i2 = s2.options, a2 = void 0 === i2 ? w : i2, c2 = s2.plugins, u2 = void 0 === c2 ? S : c2, l2 = new stylis_browser_esm_default(a2), d2 = [], p = /* @__PURE__ */ function(e3) {
    function t3(t4) {
      if (t4) try {
        e3(t4 + "}");
      } catch (e4) {
      }
    }
    return function(n3, r3, o3, s3, i3, a3, c3, u3, l3, d3) {
      switch (n3) {
        case 1:
          if (0 === l3 && 64 === r3.charCodeAt(0)) return e3(r3 + ";"), "";
          break;
        case 2:
          if (0 === u3) return r3 + "/*|*/";
          break;
        case 3:
          switch (u3) {
            case 102:
            case 112:
              return e3(o3[0] + r3), "";
            default:
              return r3 + (0 === d3 ? "/*|*/" : "");
          }
        case -2:
          r3.split("/*|*/}").forEach(t3);
      }
    };
  }(function(e3) {
    d2.push(e3);
  }), f = function(e3, r3, s3) {
    return 0 === r3 && -1 !== ie.indexOf(s3[n2.length]) || s3.match(o2) ? e3 : "." + t2;
  };
  function m2(e3, s3, i3, a3) {
    void 0 === a3 && (a3 = "&");
    var c3 = e3.replace(se, ""), u3 = s3 && i3 ? i3 + " " + s3 + " { " + c3 + " }" : c3;
    return t2 = a3, n2 = s3, r2 = new RegExp("\\" + n2 + "\\b", "g"), o2 = new RegExp("(\\" + n2 + "\\b){2,}"), l2(i3 || !s3 ? "" : s3, u3);
  }
  return l2.use([].concat(u2, [function(e3, t3, o3) {
    2 === e3 && o3.length && o3[0].lastIndexOf(n2) > 0 && (o3[0] = o3[0].replace(r2, f));
  }, p, function(e3) {
    if (-2 === e3) {
      var t3 = d2;
      return d2 = [], t3;
    }
  }])), m2.hash = u2.length ? u2.reduce(function(e3, t3) {
    return t3.name || D(15), ee(e3, t3.name);
  }, 5381).toString() : "", m2;
}
var ce = import_react.default.createContext();
var ue = ce.Consumer;
var le = import_react.default.createContext();
var de = (le.Consumer, new X());
var he = ae();
function pe() {
  return (0, import_react.useContext)(ce) || de;
}
function fe() {
  return (0, import_react.useContext)(le) || he;
}
function me(e2) {
  var t2 = (0, import_react.useState)(e2.stylisPlugins), n2 = t2[0], s2 = t2[1], c2 = pe(), u2 = (0, import_react.useMemo)(function() {
    var t3 = c2;
    return e2.sheet ? t3 = e2.sheet : e2.target && (t3 = t3.reconstructWithOptions({ target: e2.target }, false)), e2.disableCSSOMInjection && (t3 = t3.reconstructWithOptions({ useCSSOMInjection: false })), t3;
  }, [e2.disableCSSOMInjection, e2.sheet, e2.target]), l2 = (0, import_react.useMemo)(function() {
    return ae({ options: { prefix: !e2.disableVendorPrefixes }, plugins: n2 });
  }, [e2.disableVendorPrefixes, n2]);
  return (0, import_react.useEffect)(function() {
    (0, import_shallowequal.default)(n2, e2.stylisPlugins) || s2(e2.stylisPlugins);
  }, [e2.stylisPlugins]), import_react.default.createElement(ce.Provider, { value: u2 }, import_react.default.createElement(le.Provider, { value: l2 }, true ? import_react.default.Children.only(e2.children) : e2.children));
}
var ye = function() {
  function e2(e3, t2) {
    var n2 = this;
    this.inject = function(e4, t3) {
      void 0 === t3 && (t3 = he);
      var r2 = n2.name + t3.hash;
      e4.hasNameForId(n2.id, r2) || e4.insertRules(n2.id, r2, t3(n2.rules, r2, "@keyframes"));
    }, this.toString = function() {
      return D(12, String(n2.name));
    }, this.name = e3, this.id = "sc-keyframes-" + e3, this.rules = t2;
  }
  return e2.prototype.getName = function(e3) {
    return void 0 === e3 && (e3 = he), this.name + e3.hash;
  }, e2;
}();
var ve = /([A-Z])/;
var ge = /([A-Z])/g;
var Se = /^ms-/;
var we = function(e2) {
  return "-" + e2.toLowerCase();
};
function Ee(e2) {
  return ve.test(e2) ? e2.replace(ge, we).replace(Se, "-ms-") : e2;
}
var be = function(e2) {
  return null == e2 || false === e2 || "" === e2;
};
function _e(e2, n2, r2, o2) {
  if (Array.isArray(e2)) {
    for (var s2, i2 = [], a2 = 0, c2 = e2.length; a2 < c2; a2 += 1) "" !== (s2 = _e(e2[a2], n2, r2, o2)) && (Array.isArray(s2) ? i2.push.apply(i2, s2) : i2.push(s2));
    return i2;
  }
  if (be(e2)) return "";
  if (_(e2)) return "." + e2.styledComponentId;
  if (E(e2)) {
    if ("function" != typeof (l2 = e2) || l2.prototype && l2.prototype.isReactComponent || !n2) return e2;
    var u2 = e2(n2);
    return (0, import_react_is.isElement)(u2) && console.warn(b(e2) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), _e(u2, n2, r2, o2);
  }
  var l2;
  return e2 instanceof ye ? r2 ? (e2.inject(r2, o2), e2.getName(o2)) : e2 : g(e2) ? function e3(t2, n3) {
    var r3, o3, s3 = [];
    for (var i3 in t2) t2.hasOwnProperty(i3) && !be(t2[i3]) && (Array.isArray(t2[i3]) && t2[i3].isCss || E(t2[i3]) ? s3.push(Ee(i3) + ":", t2[i3], ";") : g(t2[i3]) ? s3.push.apply(s3, e3(t2[i3], i3)) : s3.push(Ee(i3) + ": " + (r3 = i3, null == (o3 = t2[i3]) || "boolean" == typeof o3 || "" === o3 ? "" : "number" != typeof o3 || 0 === o3 || r3 in unitless_browser_esm_default || r3.startsWith("--") ? String(o3).trim() : o3 + "px") + ";"));
    return n3 ? [n3 + " {"].concat(s3, ["}"]) : s3;
  }(e2) : e2.toString();
}
var Ne = function(e2) {
  return Array.isArray(e2) && (e2.isCss = true), e2;
};
function Ae(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
  return E(e2) || g(e2) ? Ne(_e(v(S, [e2].concat(n2)))) : 0 === n2.length && 1 === e2.length && "string" == typeof e2[0] ? e2 : Ne(_e(v(e2, n2)));
}
var Ce = /invalid hook call/i;
var Ie = /* @__PURE__ */ new Set();
var Pe = function(e2, t2) {
  if (true) {
    var n2 = "The component " + e2 + (t2 ? ' with the id of "' + t2 + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.", r2 = console.error;
    try {
      var o2 = true;
      console.error = function(e3) {
        if (Ce.test(e3)) o2 = false, Ie.delete(n2);
        else {
          for (var t3 = arguments.length, s2 = new Array(t3 > 1 ? t3 - 1 : 0), i2 = 1; i2 < t3; i2++) s2[i2 - 1] = arguments[i2];
          r2.apply(void 0, [e3].concat(s2));
        }
      }, (0, import_react.useRef)(), o2 && !Ie.has(n2) && (console.warn(n2), Ie.add(n2));
    } catch (e3) {
      Ce.test(e3.message) && Ie.delete(n2);
    } finally {
      console.error = r2;
    }
  }
};
var Oe = function(e2, t2, n2) {
  return void 0 === n2 && (n2 = w), e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
};
var Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var De = /(^-|-$)/g;
function je(e2) {
  return e2.replace(Re, "-").replace(De, "");
}
var Te = function(e2) {
  return Q(te(e2) >>> 0);
};
function xe(e2) {
  return "string" == typeof e2 && e2.charAt(0) === e2.charAt(0).toLowerCase();
}
var ke = function(e2) {
  return "function" == typeof e2 || "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
};
var Ve = function(e2) {
  return "__proto__" !== e2 && "constructor" !== e2 && "prototype" !== e2;
};
function Be(e2, t2, n2) {
  var r2 = e2[n2];
  ke(t2) && ke(r2) ? ze(r2, t2) : e2[n2] = t2;
}
function ze(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
  for (var o2 = 0, s2 = n2; o2 < s2.length; o2++) {
    var i2 = s2[o2];
    if (ke(i2)) for (var a2 in i2) Ve(a2) && Be(e2, i2[a2], a2);
  }
  return e2;
}
var Me = import_react.default.createContext();
var Ge = Me.Consumer;
var Fe = {};
function Ye(e2, t2, n2) {
  var o2 = _(e2), i2 = !xe(e2), a2 = t2.attrs, c2 = void 0 === a2 ? S : a2, l2 = t2.componentId, d2 = void 0 === l2 ? function(e3, t3) {
    var n3 = "string" != typeof e3 ? "sc" : je(e3);
    Fe[n3] = (Fe[n3] || 0) + 1;
    var r2 = n3 + "-" + Te("5.3.11" + n3 + Fe[n3]);
    return t3 ? t3 + "-" + r2 : r2;
  }(t2.displayName, t2.parentComponentId) : l2, h = t2.displayName, p = void 0 === h ? function(e3) {
    return xe(e3) ? "styled." + e3 : "Styled(" + b(e3) + ")";
  }(e2) : h, v2 = t2.displayName && t2.componentId ? je(t2.displayName) + "-" + t2.componentId : t2.componentId || d2, g2 = o2 && e2.attrs ? Array.prototype.concat(e2.attrs, c2).filter(Boolean) : c2, N2 = t2.shouldForwardProp;
  o2 && e2.shouldForwardProp && (N2 = t2.shouldForwardProp ? function(n3, r2, o3) {
    return e2.shouldForwardProp(n3, r2, o3) && t2.shouldForwardProp(n3, r2, o3);
  } : e2.shouldForwardProp);
  var A, C2 = new oe(n2, v2, o2 ? e2.componentStyle : void 0), I2 = C2.isStatic && 0 === c2.length, P = function(e3, t3) {
    return function(e4, t4, n3, r2) {
      var o3 = e4.attrs, i3 = e4.componentStyle, a3 = e4.defaultProps, c3 = e4.foldedComponentIds, l3 = e4.shouldForwardProp, d3 = e4.styledComponentId, h2 = e4.target, p2 = function(e5, t5, n4) {
        void 0 === e5 && (e5 = w);
        var r3 = y({}, t5, { theme: e5 }), o4 = {};
        return n4.forEach(function(e6) {
          var t6, n5, s2, i4 = e6;
          for (t6 in E(i4) && (i4 = i4(r3)), i4) r3[t6] = o4[t6] = "className" === t6 ? (n5 = o4[t6], s2 = i4[t6], n5 && s2 ? n5 + " " + s2 : n5 || s2) : i4[t6];
        }), [r3, o4];
      }(Oe(t4, (0, import_react.useContext)(Me), a3) || w, t4, o3), m2 = p2[0], v3 = p2[1], g3 = function(e5, t5, n4, r3) {
        var o4 = pe(), s2 = fe(), i4 = t5 ? e5.generateAndInjectStyles(w, o4, s2) : e5.generateAndInjectStyles(n4, o4, s2);
        return !t5 && r3 && r3(i4), i4;
      }(i3, r2, m2, true ? e4.warnTooManyClasses : void 0), S2 = n3, b2 = v3.$as || t4.$as || v3.as || t4.as || h2, _2 = xe(b2), N3 = v3 !== t4 ? y({}, t4, {}, v3) : t4, A2 = {};
      for (var C3 in N3) "$" !== C3[0] && "as" !== C3 && ("forwardedAs" === C3 ? A2.as = N3[C3] : (l3 ? l3(C3, isPropValid, b2) : !_2 || isPropValid(C3)) && (A2[C3] = N3[C3]));
      return t4.style && v3.style !== t4.style && (A2.style = y({}, t4.style, {}, v3.style)), A2.className = Array.prototype.concat(c3, d3, g3 !== d3 ? g3 : null, t4.className, v3.className).filter(Boolean).join(" "), A2.ref = S2, (0, import_react.createElement)(b2, A2);
    }(A, e3, t3, I2);
  };
  return P.displayName = p, (A = import_react.default.forwardRef(P)).attrs = g2, A.componentStyle = C2, A.displayName = p, A.shouldForwardProp = N2, A.foldedComponentIds = o2 ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId) : S, A.styledComponentId = v2, A.target = o2 ? e2.target : e2, A.withComponent = function(e3) {
    var r2 = t2.componentId, o3 = function(e4, t3) {
      if (null == e4) return {};
      var n3, r3, o4 = {}, s3 = Object.keys(e4);
      for (r3 = 0; r3 < s3.length; r3++) n3 = s3[r3], t3.indexOf(n3) >= 0 || (o4[n3] = e4[n3]);
      return o4;
    }(t2, ["componentId"]), s2 = r2 && r2 + "-" + (xe(e3) ? e3 : je(b(e3)));
    return Ye(e3, y({}, o3, { attrs: g2, componentId: s2 }), n2);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(t3) {
    this._foldedDefaultProps = o2 ? ze({}, e2.defaultProps, t3) : t3;
  } }), Pe(p, v2), A.warnTooManyClasses = /* @__PURE__ */ function(e3, t3) {
    var n3 = {}, r2 = false;
    return function(o3) {
      if (!r2 && (n3[o3] = true, Object.keys(n3).length >= 200)) {
        var s2 = t3 ? ' with the id of "' + t3 + '"' : "";
        console.warn("Over 200 classes were generated for component " + e3 + s2 + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r2 = true, n3 = {};
      }
    };
  }(p, v2), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), i2 && (0, import_hoist_non_react_statics.default)(A, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), A;
}
var qe = function(e2) {
  return function e3(t2, r2, o2) {
    if (void 0 === o2 && (o2 = w), !(0, import_react_is.isValidElementType)(r2)) return D(1, String(r2));
    var s2 = function() {
      return t2(r2, o2, Ae.apply(void 0, arguments));
    };
    return s2.withConfig = function(n2) {
      return e3(t2, r2, y({}, o2, {}, n2));
    }, s2.attrs = function(n2) {
      return e3(t2, r2, y({}, o2, { attrs: Array.prototype.concat(o2.attrs, n2).filter(Boolean) }));
    }, s2;
  }(Ye, e2);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e2) {
  qe[e2] = qe(e2);
});
var He = function() {
  function e2(e3, t3) {
    this.rules = e3, this.componentId = t3, this.isStatic = ne(e3), X.registerId(this.componentId + 1);
  }
  var t2 = e2.prototype;
  return t2.createStyles = function(e3, t3, n2, r2) {
    var o2 = r2(_e(this.rules, t3, n2, r2).join(""), ""), s2 = this.componentId + e3;
    n2.insertRules(s2, s2, o2);
  }, t2.removeStyles = function(e3, t3) {
    t3.clearRules(this.componentId + e3);
  }, t2.renderStyles = function(e3, t3, n2, r2) {
    e3 > 2 && X.registerId(this.componentId + e3), this.removeStyles(e3, n2), this.createStyles(e3, t3, n2, r2);
  }, e2;
}();
var Ue = function() {
  function e2() {
    var e3 = this;
    this._emitSheetCSS = function() {
      var t3 = e3.instance.toString();
      if (!t3) return "";
      var n2 = Y();
      return "<style " + [n2 && 'nonce="' + n2 + '"', N + '="true"', 'data-styled-version="5.3.11"'].filter(Boolean).join(" ") + ">" + t3 + "</style>";
    }, this.getStyleTags = function() {
      return e3.sealed ? D(2) : e3._emitSheetCSS();
    }, this.getStyleElement = function() {
      var t3;
      if (e3.sealed) return D(2);
      var n2 = ((t3 = {})[N] = "", t3["data-styled-version"] = "5.3.11", t3.dangerouslySetInnerHTML = { __html: e3.instance.toString() }, t3), o2 = Y();
      return o2 && (n2.nonce = o2), [import_react.default.createElement("style", y({}, n2, { key: "sc-0-0" }))];
    }, this.seal = function() {
      e3.sealed = true;
    }, this.instance = new X({ isServer: true }), this.sealed = false;
  }
  var t2 = e2.prototype;
  return t2.collectStyles = function(e3) {
    return this.sealed ? D(2) : import_react.default.createElement(me, { sheet: this.instance }, e3);
  }, t2.interleaveWithNodeStream = function(e3) {
    return D(3);
  }, e2;
}();
"undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), "undefined" != typeof window && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, 1 === window["__styled-components-init__"] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1);
var styled_components_browser_esm_default = qe;

// node_modules/react-brackets/dist/index.modern.js
var import_react_swipeable_views = __toESM(require_lib2());
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}
var _templateObject;
var _templateObject2;
var Bracket = styled_components_browser_esm_default.div(function(props) {
  return "\n  display: flex;\n  flex-direction: row;\n  @media (max-width: " + props.mobileBreakpoint + "px) {\n    flex-direction: column;\n  }\n  ";
});
var Round = styled_components_browser_esm_default.div(function(props) {
  return "\n  flex: 0;\n  // min-width:300px;\n  display:flex;\n  flex-direction:column;\n  @media (max-width: " + props.mobileBreakpoint + "px) {\n    min-width:0;\n  }\n  ";
});
var RoundTitle = styled_components_browser_esm_default.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  color: #8f8f8f;\n  font-weight: 400;\n  text-align: center;\n"])));
var SeedsList = styled_components_browser_esm_default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-flow: row wrap;\n  justify-content: center;\n  height: 100%;\n  list-style: none;\n"])));
function useMedia(breakPoint) {
  var _useState = (0, import_react2.useState)(typeof window !== "undefined" ? window.innerWidth <= breakPoint : false), isSmaller = _useState[0], setIsSmaller = _useState[1];
  (0, import_react2.useEffect)(function() {
    function screenResized() {
      if (isSmaller && window.innerWidth > breakPoint) {
        setIsSmaller(false);
      } else if (!isSmaller && window.innerWidth <= breakPoint) {
        setIsSmaller(true);
      }
    }
    if (typeof window !== "undefined") window.addEventListener("resize", screenResized);
    return function() {
      if (typeof window !== "undefined") window.removeEventListener("resize", screenResized);
    };
  }, [isSmaller]);
  return isSmaller;
}
var _templateObject$1;
var _templateObject2$1;
var SeedItem = styled_components_browser_esm_default.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  color: #fff;\n  width: 100%;\n  background-color: #1a1d2e;\n  padding: 0;\n  border-radius: 0.2em;\n  box-shadow: 0 2px 4px -2px #111630;\n  text-align: center;\n  position: relative;\n"])));
var SeedTeam = styled_components_browser_esm_default.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n  padding: 0.3rem 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 0.2em;\n  align-items: center;\n"])));
var SeedTime = styled_components_browser_esm_default.div(function(props) {
  return "\nmargin-top: 2px;\nfont-size: 12px;\ncolor: #8f8f8f;\nheight: 0;\n@media (max-width: " + props.mobileBreakpoint + "px) {\n  height:auto;\n}\n";
});
var SingleLineSeed = styled_components_browser_esm_default.div(function(props) {
  return "\npadding: 1em 1.5em;\nmin-width: 225px;\nwidth:100%;\nposition: relative;\ndisplay: flex;\nalign-items: center;\nflex: 0 1 auto;\nflex-direction: column;\njustify-content: center;\nfont-size: 14px;\n@media (max-width: " + props.mobileBreakpoint + "px) {\n  width:100%;\n}\n@media (min-width: " + ((props.mobileBreakpoint || 0) + 1) + 'px) {\n  &::after {\n      content: "";\n      position: absolute;\n      height: 50%;\n      width: 3em;\n    [dir="rtl"] & {\n      left: -1.5em;\n    }\n    [dir="ltr"] & {\n      right: -1.5em;\n    }\n  }\n  &:nth-child(even)::after {\n    border-bottom: 1px solid #707070;\n    top: -0.5px;\n  }\n  &:nth-child(odd)::after {\n    border-top: 1px solid #707070;\n    top: calc(50% - 0.5px);\n  }\n}\n';
});
var Seed = styled_components_browser_esm_default.div(function(props) {
  return "\n  padding: 1em 1.5em;\n  min-width: 225px;\n  width:100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 0 1 auto;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 14px;\n  @media (max-width: " + props.mobileBreakpoint + "px) {\n    width:100%;\n  }\n  @media (min-width: " + ((props.mobileBreakpoint || 0) + 1) + `px) {
    &::after {
        content: "";
        position: absolute;
        height: 50%;
        width: 1.5em;
      [dir="rtl"] & {
        left: 0px;
      }
      [dir="ltr"] & {
        right: 0px;
      }
    }

    &:nth-child(even)::before{
      content:'';
      border-top: 1px solid #707070;
      position:absolute;
      top: -0.5px;
      width:1.5em;
      [dir="rtl"] & {
        left:-1.5em;
        }
      [dir="ltr"] & {
        right:-1.5em;
      }
    }

    &:nth-child(even)::after {
      border-bottom: 1px solid #707070;
      top: -0.5px;
     [dir="rtl"] & {
        border-left: 1px solid #707070;
        }
      [dir="ltr"] & {
        border-right: 1px solid #707070;
      }
    }
    &:nth-child(odd):not(:last-child)::after {
      border-top: 1px solid #707070;
      top: calc(50% - 0.5px);
      [dir="rtl"] & {
        border-left: 1px solid #707070;
        }
      [dir="ltr"] & {
        border-right: 1px solid #707070;
      }
    }
}
`;
});
var renderTitle = function renderTitle2(title) {
  return import_react2.default.createElement(RoundTitle, null, title);
};
var renderSeed = function renderSeed2(_ref) {
  var _seed$teams, _seed$teams$, _seed$teams2, _seed$teams2$;
  var seed = _ref.seed, breakpoint = _ref.breakpoint;
  return import_react2.default.createElement(Seed, {
    mobileBreakpoint: breakpoint
  }, import_react2.default.createElement(SeedItem, null, import_react2.default.createElement("div", null, import_react2.default.createElement(SeedTeam, null, ((_seed$teams = seed.teams) === null || _seed$teams === void 0 ? void 0 : (_seed$teams$ = _seed$teams[0]) === null || _seed$teams$ === void 0 ? void 0 : _seed$teams$.name) || "-----------"), import_react2.default.createElement(SeedTeam, null, ((_seed$teams2 = seed.teams) === null || _seed$teams2 === void 0 ? void 0 : (_seed$teams2$ = _seed$teams2[1]) === null || _seed$teams2$ === void 0 ? void 0 : _seed$teams2$.name) || "-----------"))), import_react2.default.createElement(SeedTime, {
    mobileBreakpoint: breakpoint
  }, seed === null || seed === void 0 ? void 0 : seed.date));
};
var _excluded = ["ref"];
var SingleElimination = function SingleElimination2(_ref) {
  var rounds = _ref.rounds, _ref$rtl = _ref.rtl, rtl = _ref$rtl === void 0 ? false : _ref$rtl, roundClassName = _ref.roundClassName, bracketClassName = _ref.bracketClassName, _ref$swipeableProps = _ref.swipeableProps, swipeableProps = _ref$swipeableProps === void 0 ? {} : _ref$swipeableProps, _ref$mobileBreakpoint = _ref.mobileBreakpoint, mobileBreakpoint = _ref$mobileBreakpoint === void 0 ? 992 : _ref$mobileBreakpoint, _ref$renderSeedCompon = _ref.renderSeedComponent, renderSeedComponent = _ref$renderSeedCompon === void 0 ? renderSeed : _ref$renderSeedCompon, _ref$roundTitleCompon = _ref.roundTitleComponent, roundTitleComponent = _ref$roundTitleCompon === void 0 ? renderTitle : _ref$roundTitleCompon;
  var isResponsive = useMedia(mobileBreakpoint);
  var data = rounds.map(function(round, roundIdx) {
    return import_react2.default.createElement(Round, {
      key: round.title,
      className: roundClassName,
      mobileBreakpoint
    }, round.title && roundTitleComponent(round.title, roundIdx), import_react2.default.createElement(SeedsList, null, round.seeds.map(function(seed, idx) {
      return import_react2.default.createElement(import_react2.Fragment, {
        key: seed.id
      }, renderSeedComponent({
        seed,
        breakpoint: mobileBreakpoint,
        roundIndex: roundIdx,
        seedIndex: idx,
        rounds
      }));
    })));
  });
  if (isResponsive) {
    var rest = _objectWithoutPropertiesLoose(swipeableProps, _excluded);
    return import_react2.default.createElement(Bracket, {
      className: bracketClassName,
      dir: rtl ? "rtl" : "ltr",
      mobileBreakpoint
    }, import_react2.default.createElement(import_react_swipeable_views.default, Object.assign({
      style: {
        minHeight: "500px"
      },
      axis: rtl ? "x-reverse" : "x"
    }, rest), data));
  }
  return import_react2.default.createElement(Bracket, {
    className: bracketClassName,
    dir: rtl ? "rtl" : "ltr",
    mobileBreakpoint
  }, data);
};
export {
  SingleElimination as Bracket,
  Seed,
  SeedItem,
  SeedTeam,
  SeedTime,
  SingleLineSeed
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-brackets.js.map
