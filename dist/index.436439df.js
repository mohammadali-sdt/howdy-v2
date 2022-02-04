// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"drOo7":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "6632b38b436439df";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jKMjS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _overlayViewJs = require("../js/views/overlayView.js");
var _overlayViewJsDefault = parcelHelpers.interopDefault(_overlayViewJs);
var _currentViewJs = require("../js/views/currentView.js");
var _currentViewJsDefault = parcelHelpers.interopDefault(_currentViewJs);
var _heroViewJs = require("../js/views/heroView.js");
var _heroViewJsDefault = parcelHelpers.interopDefault(_heroViewJs);
var _futureViewJs = require("./views/futureView.js");
var _futureViewJsDefault = parcelHelpers.interopDefault(_futureViewJs);
var _containerViewJs = require("./views/containerView.js");
var _containerViewJsDefault = parcelHelpers.interopDefault(_containerViewJs);
var _spinnerViewJs = require("../js/views/spinnerView.js");
var _spinnerViewJsDefault = parcelHelpers.interopDefault(_spinnerViewJs);
var _errorViewJs = require("../js/views/errorView.js");
var _errorViewJsDefault = parcelHelpers.interopDefault(_errorViewJs);
var _searchFormViewJs = require("../js/views/searchFormView.js");
var _searchFormViewJsDefault = parcelHelpers.interopDefault(_searchFormViewJs);
var _searchBtnViewJs = require("./views/searchBtnView.js");
var _searchBtnViewJsDefault = parcelHelpers.interopDefault(_searchBtnViewJs);
var _modelJs = require("../js/model.js");
const showOverlayHandler = function(overlay) {
    overlay.removeClassFromParent('overlay--hide');
};
const hideOverlayHandler = function(overlay) {
    overlay.addClassToParentEl('overlay--hide');
};
const getWeatherByCityHandler = async function(city) {
    try {
        _overlayViewJsDefault.default.disappearOverlay();
        _spinnerViewJsDefault.default.showSpinner();
        await _modelJs.getWeatherBycity(city);
        const { current , location , future  } = _modelJs.state;
        _heroViewJsDefault.default.render(current);
        _currentViewJsDefault.default.render({
            current,
            location
        });
        _futureViewJsDefault.default.render(future);
        _containerViewJsDefault.default.changeBgWithCondition(current.condition, current.is_day);
        _searchBtnViewJsDefault.default.changeBgWithCondition(current.condition, current.is_day);
        _spinnerViewJsDefault.default.hideSpinner();
    } catch (err) {
        _spinnerViewJsDefault.default.hideSpinner();
        _errorViewJsDefault.default.render(err.message);
        _errorViewJsDefault.default.showError();
        _overlayViewJsDefault.default.appearOverlay();
    }
};
function init() {
    navigator.geolocation.getCurrentPosition(async (pos)=>{
        _spinnerViewJsDefault.default.showSpinner();
        try {
            await _modelJs.getCityByCoords(pos.coords.longitude, pos.coords.latitude);
            await getWeatherByCityHandler(_modelJs.state.city);
            _spinnerViewJsDefault.default.hideSpinner();
        } catch (err) {
            _spinnerViewJsDefault.default.hideSpinner();
            _errorViewJsDefault.default.render(err.message);
            _errorViewJsDefault.default.showError();
            _overlayViewJsDefault.default.appearOverlay();
        }
    }, (err)=>{
        _spinnerViewJsDefault.default.hideSpinner();
        _errorViewJsDefault.default.render("Cannot get you, Trun on your Location !");
        _errorViewJsDefault.default.showError();
        _overlayViewJsDefault.default.appearOverlay();
    });
    _overlayViewJsDefault.default.showOverlay(showOverlayHandler);
    _overlayViewJsDefault.default.hideOverlay(hideOverlayHandler);
    _searchFormViewJsDefault.default.submitForm(getWeatherByCityHandler);
    _searchBtnViewJsDefault.default.showBtn();
}
init();

},{"../js/views/overlayView.js":"8dltL","../js/views/currentView.js":"eLmHJ","../js/views/heroView.js":"lvw3U","./views/futureView.js":"7lNfP","./views/containerView.js":"dkHQ0","../js/views/spinnerView.js":"kl1EK","../js/views/errorView.js":"dZeTj","../js/views/searchFormView.js":"bB1DM","./views/searchBtnView.js":"3T5uO","../js/model.js":"6Yfb5","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8dltL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class OverlayView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.overlay');
    _searchBtn = document.querySelector('.search__btn');
    _closeBtn = document.querySelector('.overlay__close');
    constructor(){
        super();
    }
    _hideWindow(handler) {
        handler(this);
    }
    _showWindow(handler) {
        handler(this);
    }
    showOverlay(handler) {
        this._searchBtn.addEventListener('click', this._showWindow.bind(this, handler));
    }
    hideOverlay(handler) {
        this._closeBtn.addEventListener('click', this._hideWindow.bind(this, handler));
    }
    appearOverlay() {
        this._parentElement.classList.remove('overlay--hide');
    }
    disappearOverlay() {
        this._parentElement.classList.add('overlay--hide');
    }
}
exports.default = new OverlayView();

},{"./view.js":"96b9L","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"96b9L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _parentElement;
    render(data) {
        const markup = this._generateMarkup(data);
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    _generateMarkup(data) {
    }
    addClassToParentEl(className) {
        this._parentElement.classList.add(className);
    }
    removeClassFromParent(className) {
        this._parentElement.classList.remove(className);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eLmHJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spriteSvg = require("../../img/sprite.svg");
var _spriteSvgDefault = parcelHelpers.interopDefault(_spriteSvg);
var _weatherConditionViewJs = require("./weatherConditionView.js");
var _weatherConditionViewJsDefault = parcelHelpers.interopDefault(_weatherConditionViewJs);
class CurrentView extends _weatherConditionViewJsDefault.default {
    _parentElement = document.querySelector('.current');
    _icons = {
        rainDay: 'icon-rainy-full',
        rainNight: 'icon-rainy-full',
        clearDay: "icon-clear-day-full",
        clearNight: 'icon-clear-night-full',
        cloudyDay: 'icon-cloudy-day-full',
        cloudyNight: 'icon-cloudy-night-full',
        mistDay: 'icon-cloud-fog',
        mistNight: 'icon-cloud-fog',
        snowDay: 'icon-snowy-full',
        snowNight: 'icon-snowy-full',
        lightingDay: 'icon-lightning-full',
        lightingNight: 'icon-lightning-full'
    };
    constructor(){
        super();
    }
    _generateMarkup(data) {
        return `\n      <h3 class="current__date">${data.location.datetime.toLocaleDateString('en-US', {
            weekday: 'long',
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        })}</h3>\n        <div class="current__content">\n          <div class="current__card">\n            <p class="current__temp">${data.current.temp.toFixed(0)}&#176;</p>\n            <p class="current__location">${data.location.name}, ${data.location.country}</p>\n          </div>\n          <div class="current__card">\n            <svg class="current__icon">\n              <use xlink:href="${_spriteSvgDefault.default}#${this.setIconByCondition(data.current.condition, data.current.is_day)}"></use>\n            </svg>\n            <p class="current__condition">${data.current.is_day === 0 ? 'Night' : 'Day'}, ${data.current.condition.charAt(0).toUpperCase() + data.current.condition.slice(1)}</p>\n          </div>\n        </div>\n    `;
    }
}
exports.default = new CurrentView();

},{"../../img/sprite.svg":"6YktF","./weatherConditionView.js":"cpBMM","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6YktF":[function() {},{}],"cpBMM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class WeatherConditionView extends _viewJsDefault.default {
    _icons;
    setIconByCondition(condition, is_day) {
        if (condition.includes('rain') || condition.includes('drizzle') || condition.includes('sleet')) {
            if (is_day) return this._icons.rainDay;
            return this._icons.rainNight;
        } else if (condition.includes('clear') || condition.includes('sunny')) {
            if (is_day) return this._icons.clearDay;
            return this._icons.clearNight;
        } else if (condition.includes('cloudy') || condition.includes('overcast')) {
            if (is_day) return this._icons.cloudyDay;
            return this._icons.cloudyNight;
        } else if (condition.includes('mist') || condition.includes('fog')) {
            if (is_day) return this._icons.mistDay;
            return this._icons.mistNight;
        } else if (condition.includes('snow') || condition.includes('ice') || condition.includes('blizzard')) {
            if (is_day) return this._icons.snowDay;
            return this._icons.snowNight;
        } else if (condition.includes('thundary')) {
            if (this._icons.lightingDay) return this._icons.lightingDay;
            if (is_day) return this._icons.rainDay;
            return this._icons.rainNight;
        }
    }
}
exports.default = WeatherConditionView;

},{"./view.js":"96b9L","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"lvw3U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rainDayJpg = require("../../img/rain-day.jpg");
var _rainDayJpgDefault = parcelHelpers.interopDefault(_rainDayJpg);
var _rainNightJpg = require("../../img/rain-night.jpg");
var _rainNightJpgDefault = parcelHelpers.interopDefault(_rainNightJpg);
var _clearDayJpg = require("../../img/clear-day.jpg");
var _clearDayJpgDefault = parcelHelpers.interopDefault(_clearDayJpg);
var _clearNightPng = require("../../img/clear-night.png");
var _clearNightPngDefault = parcelHelpers.interopDefault(_clearNightPng);
var _cloudyDayPng = require("../../img/cloudy-day.png");
var _cloudyDayPngDefault = parcelHelpers.interopDefault(_cloudyDayPng);
var _cloudyNightJpg = require("../../img/cloudy-night.jpg");
var _cloudyNightJpgDefault = parcelHelpers.interopDefault(_cloudyNightJpg);
var _mistDayJpg = require("../../img/mist-day.jpg");
var _mistDayJpgDefault = parcelHelpers.interopDefault(_mistDayJpg);
var _mistNightJpg = require("../../img/mist-night.jpg");
var _mistNightJpgDefault = parcelHelpers.interopDefault(_mistNightJpg);
var _snowDayJpg = require("../../img/snow-day.jpg");
var _snowDayJpgDefault = parcelHelpers.interopDefault(_snowDayJpg);
var _snowNightJpg = require("../../img/snow-night.jpg");
var _snowNightJpgDefault = parcelHelpers.interopDefault(_snowNightJpg);
var _weatherConditionViewJs = require("./weatherConditionView.js");
var _weatherConditionViewJsDefault = parcelHelpers.interopDefault(_weatherConditionViewJs);
class HeroView extends _weatherConditionViewJsDefault.default {
    _parentElement = document.querySelector('.hero');
    _icons = {
        rainDay: _rainDayJpgDefault.default,
        rainNight: _rainNightJpgDefault.default,
        clearDay: _clearDayJpgDefault.default,
        clearNight: _clearNightPngDefault.default,
        cloudyDay: _cloudyDayPngDefault.default,
        cloudyNight: _cloudyNightJpgDefault.default,
        mistDay: _mistDayJpgDefault.default,
        mistNight: _mistNightJpgDefault.default,
        snowDay: _snowDayJpgDefault.default,
        snowNight: _snowNightJpgDefault.default
    };
    constructor(){
        super();
    }
    _generateMarkup(data) {
        return `\n            <img\n              class="hero__img"\n              src="${this.setIconByCondition(data.condition, data.is_day)}"\n              alt="${data.condition}"\n            />\n        `;
    }
}
exports.default = new HeroView();

},{"../../img/rain-day.jpg":"a8lkO","../../img/rain-night.jpg":"dfhBV","../../img/clear-day.jpg":"cRVPk","../../img/clear-night.png":"eh3Wt","../../img/cloudy-day.png":"6xMrm","../../img/cloudy-night.jpg":"zEYX2","../../img/mist-day.jpg":"6NE1p","../../img/mist-night.jpg":"47F4v","../../img/snow-day.jpg":"4Yb5u","../../img/snow-night.jpg":"aCKNn","./weatherConditionView.js":"cpBMM","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"a8lkO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8LZRF') + "rain-day.6101aee6.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"dfhBV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8LZRF') + "rain-night.cf7bf9fb.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"cRVPk":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8LZRF') + "clear-day.815feaeb.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"eh3Wt":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8LZRF') + "clear-night.a26b97c5.png";

},{"./helpers/bundle-url":"8YnfL"}],"6xMrm":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8LZRF') + "cloudy-day.8972e539.png";

},{"./helpers/bundle-url":"8YnfL"}],"zEYX2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8LZRF') + "cloudy-night.399380c1.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"6NE1p":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8LZRF') + "mist-day.e4e2f19e.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"47F4v":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8LZRF') + "mist-night.8ef91dc1.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"4Yb5u":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8LZRF') + "snow-day.4554612b.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"aCKNn":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8LZRF') + "snow-night.e315a26f.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"7lNfP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spriteSvg = require("../../img/sprite.svg");
var _spriteSvgDefault = parcelHelpers.interopDefault(_spriteSvg);
var _weatherConditionViewJs = require("./weatherConditionView.js");
var _weatherConditionViewJsDefault = parcelHelpers.interopDefault(_weatherConditionViewJs);
class FutureView extends _weatherConditionViewJsDefault.default {
    _parentElement = document.querySelector('.future');
    _icons = {
        rainDay: 'icon-rainy-full',
        rainNight: 'icon-rainy-full',
        clearDay: "icon-clear-day-full",
        clearNight: 'icon-clear-night-full',
        cloudyDay: 'icon-cloudy-day-full',
        cloudyNight: 'icon-cloudy-night-full',
        mistDay: 'icon-cloud-fog',
        mistNight: 'icon-cloud-fog',
        snowDay: 'icon-snowy-full',
        snowNight: 'icon-snowy-full',
        lightingDay: 'icon-lightning-full',
        lightingNight: 'icon-lightning-full'
    };
    constructor(){
        super();
    }
    _generateCardMarkup(day) {
        return `\n            <div class="future__card card">\n                  <svg class="card__icon">\n                    <use xlink:href="${_spriteSvgDefault.default}#${this.setIconByCondition(day.condition, day.is_day)}"></use>\n                  </svg>\n                  <div class="card__temp">${day.temp.toFixed(0)}&#176;</div>\n                  <div class="card__day">${day.date.toLocaleDateString('en-US', {
            weekday: 'short'
        })}</div>\n            </div>\n        `;
    }
    _generateMarkup(data) {
        return data.map((day)=>this._generateCardMarkup(day)
        ).join('');
    }
}
exports.default = new FutureView();

},{"../../img/sprite.svg":"6YktF","./weatherConditionView.js":"cpBMM","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6YktF":[function() {},{}],"dkHQ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bgHandlerViewJs = require("./bgHandlerView.js");
var _bgHandlerViewJsDefault = parcelHelpers.interopDefault(_bgHandlerViewJs);
class ContainerView extends _bgHandlerViewJsDefault.default {
    _parentElement = document.querySelector('.container');
    _colors = {
        rainDay: '#9bf6ff',
        rainNight: '#67c8eb',
        clearDay: "#caffbf",
        clearNight: '#bdb2ff',
        cloudyDay: '#a0c4ff',
        cloudyNight: '#7ba2e3',
        mistDay: '#CAF6E6ff',
        mistNight: '#A5C8C4ff',
        snowDay: '#a8def1',
        snowNight: '#a0c4ff'
    };
    constructor(){
        super();
    }
}
exports.default = new ContainerView();

},{"./bgHandlerView.js":"lED2i","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"lED2i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class BgHandlerView {
    _parentElement;
    _colors;
    changeBgWithCondition(condition, is_day) {
        if (condition.includes('rain') || condition.includes('drizzle') || condition.includes('sleet') || condition.includes('thundery')) {
            if (is_day) {
                this._parentElement.style.backgroundColor = this._colors.rainDay;
                return;
            }
            this._parentElement.style.backgroundColor = this._colors.rainNight;
        } else if (condition.includes('clear') || condition.includes('sunny')) {
            if (is_day) {
                this._parentElement.style.backgroundColor = this._colors.clearDay;
                return;
            }
            this._parentElement.style.backgroundColor = this._colors.clearNight;
        } else if (condition.includes('cloudy') || condition.includes('overcast')) {
            if (is_day) {
                this._parentElement.style.backgroundColor = this._colors.cloudyDay;
                return;
            }
            this._parentElement.style.backgroundColor = this._colors.cloudyNight;
        } else if (condition.includes('mist') || condition.includes('fog')) {
            if (is_day) {
                this._parentElement.style.backgroundColor = this._colors.mistDay;
                return;
            }
            this._parentElement.style.backgroundColor = this._colors.mistNight;
        } else if (condition.includes('snow') || condition.includes('ice') || condition.includes('blizzard')) {
            if (is_day) {
                this._parentElement.style.backgroundColor = this._colors.snowDay;
                return;
            }
            this._parentElement.style.backgroundColor = this._colors.snowNight;
        }
    }
}
exports.default = BgHandlerView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kl1EK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SpinnerView {
    _parentElement = document.querySelector('.spinner');
    showSpinner() {
        this._parentElement.classList.add('spinner__show');
    }
    hideSpinner() {
        this._parentElement.classList.remove('spinner__show');
    }
}
exports.default = new SpinnerView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dZeTj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class ErrorView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.error');
    _generateMarkup(data) {
        return `\n            <p class="error__msg">\n                ${data}\n            </p>\n        `;
    }
    showError() {
        this._parentElement.classList.add('error__show');
    }
    hideError() {
        this._parentElement.classList.remove('error__show');
    }
}
exports.default = new ErrorView();

},{"./view.js":"96b9L","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bB1DM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class SearchFormView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.search-form');
    constructor(){
        super();
    }
    submitForm(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            const form = new FormData(e.target);
            const city = form.get('search_input');
            handler(city);
            e.target.reset();
        });
    }
}
exports.default = new SearchFormView();

},{"./view.js":"96b9L","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3T5uO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bgHandlerViewJs = require("./bgHandlerView.js");
var _bgHandlerViewJsDefault = parcelHelpers.interopDefault(_bgHandlerViewJs);
class SearchBtnView extends _bgHandlerViewJsDefault.default {
    _parentElement = document.querySelector('.search__btn');
    _colors = {
        rainDay: '#79f4ff',
        rainNight: '#46bde9',
        clearDay: '#a1fb8f',
        clearNight: '#a596f8',
        cloudyDay: '#81b0fb',
        cloudyNight: '#588ae0',
        mistDay: '#b1e1cd',
        mistNight: '#91b9b4',
        snowDay: '#88d4f0',
        snowNight: '#7cadfb'
    };
    showBtn() {
        this._parentElement.parentNode.classList.remove('search__hide');
    }
}
exports.default = new SearchBtnView();

},{"./bgHandlerView.js":"lED2i","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6Yfb5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "getWeatherBycity", ()=>getWeatherBycity
);
parcelHelpers.export(exports, "getCityByCoords", ()=>getCityByCoords
);
var _configJs = require("../js/config.js");
var _helpersJs = require("../js/helpers.js");
const state = {
    current: {
    },
    future: {
    },
    location: {
    }
};
const getWeatherBycity = async function(city) {
    const url = `${_configJs.API_URL}?key=${_configJs.API_KEY}&q=${city}&days=7&aqi=no&alerts=no`;
    try {
        const data = await _helpersJs.getJSON(url, 'City Not Found');
        // console.log(data);
        const { is_day , temp_c , condition: { text  } ,  } = data.current;
        state.current = {
            is_day,
            condition: text.toLowerCase(),
            temp: Number(temp_c)
        };
        state.future = data.forecast.forecastday.map((day)=>{
            return {
                temp: Number(day.day.avgtemp_c),
                condition: day.day.condition.text.toLowerCase(),
                date: new Date(day.date),
                is_day
            };
        }).slice(1);
        const { localtime , name , country  } = data.location;
        state.location = {
            datetime: new Date(localtime),
            name,
            country
        };
    //
    } catch (err) {
        throw err;
    }
};
const getCityByCoords = async function(lng, lat) {
    try {
        const url = `${_configJs.API_URL_GEOCODING}?lat=${lat}&lon=${lng}&apiKey=${_configJs.API_KEY_GEOCODING}`;
        const data = await _helpersJs.getJSON(url, 'Cannot Get You');
        const { features  } = data;
        const [locationData] = features;
        state.city = locationData.properties.city;
    } catch (err) {
        throw err;
    }
};

},{"../js/config.js":"beA2m","../js/helpers.js":"9l3Yy","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"beA2m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY
);
parcelHelpers.export(exports, "API_URL", ()=>API_URL
);
parcelHelpers.export(exports, "API_URL_GEOCODING", ()=>API_URL_GEOCODING
);
parcelHelpers.export(exports, "API_KEY_GEOCODING", ()=>API_KEY_GEOCODING
);
const API_KEY = '29f186587a4044dda85230845212608';
const API_URL = 'https://api.weatherapi.com/v1/forecast.json';
const API_URL_GEOCODING = 'https://api.geoapify.com/v1/geocode/reverse';
const API_KEY_GEOCODING = '40245b20dcef4a169bd05f056eb85049';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9l3Yy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON
);
const getJSON = async function(url, msg = 'Something was wrong!') {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(msg);
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error(msg);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["drOo7","jKMjS"], "jKMjS", "parcelRequired7d4")

//# sourceMappingURL=index.436439df.js.map
