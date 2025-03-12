(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px;padding-bottom:0}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption{visibility:hidden;position:absolute;bottom:0;left:0;margin-bottom:10px}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__image-preloader{display:none}.image-tool--empty .image-tool__caption,.image-tool--uploading .image-tool__caption{visibility:hidden!important}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--uploading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--uploading .image-tool__image-picture,.image-tool--uploading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}.image-tool--caption .image-tool__caption{visibility:visible}.image-tool--caption{padding-bottom:50px}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const I = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', B = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>', D = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function S(C, a = null, i = {}) {
  const s = document.createElement(C);
  Array.isArray(a) ? s.classList.add(...a) : a !== null && s.classList.add(a);
  for (const r in i)
    i.hasOwnProperty(r) && (s[r] = i[r]);
  return s;
}
var _ = /* @__PURE__ */ ((C) => (C.Empty = "empty", C.Uploading = "uploading", C.Filled = "filled", C))(_ || {});
class U {
  /**
   * @param ui - image tool Ui module
   * @param ui.api - Editor.js API
   * @param ui.config - user config
   * @param ui.onSelectFile - callback for clicks on Select file button
   * @param ui.readOnly - read-only mode flag
   */
  constructor({ api: a, config: i, onSelectFile: s, readOnly: r }) {
    this.api = a, this.config = i, this.onSelectFile = s, this.readOnly = r, this.nodes = {
      wrapper: S("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: S("div", [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: void 0,
      imagePreloader: S("div", this.CSS.imagePreloader),
      caption: S("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  /**
   * Apply visual representation of activated tune
   * @param tuneName - one of available tunes {@link Tunes.tunes}
   * @param status - true for enable, false for disable
   */
  applyTune(a, i) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${a}`, i);
  }
  /**
   * Renders tool UI
   */
  render() {
    return this.toggleStatus(
      "empty"
      /* Empty */
    ), this.nodes.wrapper;
  }
  /**
   * Shows uploading preloader
   * @param src - preview source
   */
  showPreloader(a) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${a})`, this.toggleStatus(
      "uploading"
      /* Uploading */
    );
  }
  /**
   * Hide uploading preloader
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(
      "empty"
      /* Empty */
    );
  }
  /**
   * Shows an image
   * @param url - image source
   */
  fillImage(a) {
    const i = /\.mp4$/.test(a) ? "VIDEO" : "IMG", s = {
      src: a
    };
    let r = "load";
    i === "VIDEO" && (s.autoplay = !0, s.loop = !0, s.muted = !0, s.playsinline = !0, r = "loadeddata"), this.nodes.imageEl = S(i, this.CSS.imageEl, s), this.nodes.imageEl.addEventListener(r, () => {
      this.toggleStatus(
        "filled"
        /* Filled */
      ), this.nodes.imagePreloader !== void 0 && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows caption input
   * @param text - caption content text
   */
  fillCaption(a) {
    this.nodes.caption !== void 0 && (this.nodes.caption.innerHTML = a);
  }
  /**
   * Changes UI status
   * @param status - see {@link Ui.status} constants
   */
  toggleStatus(a) {
    for (const i in _)
      if (Object.prototype.hasOwnProperty.call(_, i)) {
        const s = _[i];
        this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${s}`, s === a);
      }
  }
  /**
   * CSS classes
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "image-tool",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption"
    };
  }
  /**
   * Creates upload-file button
   */
  createFileButton() {
    const a = S("div", [this.CSS.button]);
    return a.innerHTML = this.config.buttonContent ?? `${R} ${this.api.i18n.t("Select an Image")}`, a.addEventListener("click", () => {
      this.onSelectFile();
    }), a;
  }
}
function q(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
var O = { exports: {} }, H;
function A() {
  return H || (H = 1, function(C, a) {
    (function(i, s) {
      C.exports = s();
    })(window, function() {
      return function(i) {
        var s = {};
        function r(o) {
          if (s[o]) return s[o].exports;
          var e = s[o] = { i: o, l: !1, exports: {} };
          return i[o].call(e.exports, e, e.exports, r), e.l = !0, e.exports;
        }
        return r.m = i, r.c = s, r.d = function(o, e, d) {
          r.o(o, e) || Object.defineProperty(o, e, { enumerable: !0, get: d });
        }, r.r = function(o) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
        }, r.t = function(o, e) {
          if (1 & e && (o = r(o)), 8 & e || 4 & e && typeof o == "object" && o && o.__esModule) return o;
          var d = /* @__PURE__ */ Object.create(null);
          if (r.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: o }), 2 & e && typeof o != "string") for (var v in o) r.d(d, v, (function(l) {
            return o[l];
          }).bind(null, v));
          return d;
        }, r.n = function(o) {
          var e = o && o.__esModule ? function() {
            return o.default;
          } : function() {
            return o;
          };
          return r.d(e, "a", e), e;
        }, r.o = function(o, e) {
          return Object.prototype.hasOwnProperty.call(o, e);
        }, r.p = "", r(r.s = 3);
      }([function(i, s) {
        var r;
        r = /* @__PURE__ */ function() {
          return this;
        }();
        try {
          r = r || new Function("return this")();
        } catch {
          typeof window == "object" && (r = window);
        }
        i.exports = r;
      }, function(i, s, r) {
        (function(o) {
          var e = r(2), d = setTimeout;
          function v() {
          }
          function l(n) {
            if (!(this instanceof l)) throw new TypeError("Promises must be constructed via new");
            if (typeof n != "function") throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(n, this);
          }
          function f(n, c) {
            for (; n._state === 3; ) n = n._value;
            n._state !== 0 ? (n._handled = !0, l._immediateFn(function() {
              var u = n._state === 1 ? c.onFulfilled : c.onRejected;
              if (u !== null) {
                var g;
                try {
                  g = u(n._value);
                } catch (m) {
                  return void y(c.promise, m);
                }
                p(c.promise, g);
              } else (n._state === 1 ? p : y)(c.promise, n._value);
            })) : n._deferreds.push(c);
          }
          function p(n, c) {
            try {
              if (c === n) throw new TypeError("A promise cannot be resolved with itself.");
              if (c && (typeof c == "object" || typeof c == "function")) {
                var u = c.then;
                if (c instanceof l) return n._state = 3, n._value = c, void w(n);
                if (typeof u == "function") return void t((g = u, m = c, function() {
                  g.apply(m, arguments);
                }), n);
              }
              n._state = 1, n._value = c, w(n);
            } catch (h) {
              y(n, h);
            }
            var g, m;
          }
          function y(n, c) {
            n._state = 2, n._value = c, w(n);
          }
          function w(n) {
            n._state === 2 && n._deferreds.length === 0 && l._immediateFn(function() {
              n._handled || l._unhandledRejectionFn(n._value);
            });
            for (var c = 0, u = n._deferreds.length; c < u; c++) f(n, n._deferreds[c]);
            n._deferreds = null;
          }
          function b(n, c, u) {
            this.onFulfilled = typeof n == "function" ? n : null, this.onRejected = typeof c == "function" ? c : null, this.promise = u;
          }
          function t(n, c) {
            var u = !1;
            try {
              n(function(g) {
                u || (u = !0, p(c, g));
              }, function(g) {
                u || (u = !0, y(c, g));
              });
            } catch (g) {
              if (u) return;
              u = !0, y(c, g);
            }
          }
          l.prototype.catch = function(n) {
            return this.then(null, n);
          }, l.prototype.then = function(n, c) {
            var u = new this.constructor(v);
            return f(this, new b(n, c, u)), u;
          }, l.prototype.finally = e.a, l.all = function(n) {
            return new l(function(c, u) {
              if (!n || n.length === void 0) throw new TypeError("Promise.all accepts an array");
              var g = Array.prototype.slice.call(n);
              if (g.length === 0) return c([]);
              var m = g.length;
              function h(T, E) {
                try {
                  if (E && (typeof E == "object" || typeof E == "function")) {
                    var M = E.then;
                    if (typeof M == "function") return void M.call(E, function(F) {
                      h(T, F);
                    }, u);
                  }
                  g[T] = E, --m == 0 && c(g);
                } catch (F) {
                  u(F);
                }
              }
              for (var k = 0; k < g.length; k++) h(k, g[k]);
            });
          }, l.resolve = function(n) {
            return n && typeof n == "object" && n.constructor === l ? n : new l(function(c) {
              c(n);
            });
          }, l.reject = function(n) {
            return new l(function(c, u) {
              u(n);
            });
          }, l.race = function(n) {
            return new l(function(c, u) {
              for (var g = 0, m = n.length; g < m; g++) n[g].then(c, u);
            });
          }, l._immediateFn = typeof o == "function" && function(n) {
            o(n);
          } || function(n) {
            d(n, 0);
          }, l._unhandledRejectionFn = function(n) {
            typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", n);
          }, s.a = l;
        }).call(this, r(5).setImmediate);
      }, function(i, s, r) {
        s.a = function(o) {
          var e = this.constructor;
          return this.then(function(d) {
            return e.resolve(o()).then(function() {
              return d;
            });
          }, function(d) {
            return e.resolve(o()).then(function() {
              return e.reject(d);
            });
          });
        };
      }, function(i, s, r) {
        function o(t) {
          return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
            return typeof n;
          } : function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
          })(t);
        }
        r(4);
        var e, d, v, l, f, p, y, w = r(8), b = (d = function(t) {
          return new Promise(function(n, c) {
            t = l(t), (t = f(t)).beforeSend && t.beforeSend();
            var u = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
            u.open(t.method, t.url), u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
              var h = t.headers[m];
              u.setRequestHeader(m, h);
            });
            var g = t.ratio;
            u.upload.addEventListener("progress", function(m) {
              var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * g / 100);
              t.progress(Math.min(k, 100));
            }, !1), u.addEventListener("progress", function(m) {
              var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * (100 - g) / 100) + g;
              t.progress(Math.min(k, 100));
            }, !1), u.onreadystatechange = function() {
              if (u.readyState === 4) {
                var m = u.response;
                try {
                  m = JSON.parse(m);
                } catch {
                }
                var h = w.parseHeaders(u.getAllResponseHeaders()), k = { body: m, code: u.status, headers: h };
                y(u.status) ? n(k) : c(k);
              }
            }, u.send(t.data);
          });
        }, v = function(t) {
          return t.method = "POST", d(t);
        }, l = function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (t.url && typeof t.url != "string") throw new Error("Url must be a string");
          if (t.url = t.url || "", t.method && typeof t.method != "string") throw new Error("`method` must be a string or null");
          if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && o(t.headers) !== "object") throw new Error("`headers` must be an object or null");
          if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(e).includes(t.type))) throw new Error("`type` must be taken from module's «contentType» library");
          if (t.progress && typeof t.progress != "function") throw new Error("`progress` must be a function or null");
          if (t.progress = t.progress || function(n) {
          }, t.beforeSend = t.beforeSend || function(n) {
          }, t.ratio && typeof t.ratio != "number") throw new Error("`ratio` must be a number");
          if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
          if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
          if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean") throw new Error("`multiple` must be a true or false");
          if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string") throw new Error("`fieldName` must be a string");
          return t.fieldName = t.fieldName || "files", t;
        }, f = function(t) {
          switch (t.method) {
            case "GET":
              var n = p(t.data, e.URLENCODED);
              delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + n : t.url + "?" + n;
              break;
            case "POST":
            case "PUT":
            case "DELETE":
            case "UPDATE":
              var c = function() {
                return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || e.JSON;
              }(t);
              (w.isFormData(t.data) || w.isFormElement(t.data)) && (c = e.FORM), t.data = p(t.data, c), c !== b.contentType.FORM && (t.headers["content-type"] = c);
          }
          return t;
        }, p = function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          switch (arguments.length > 1 ? arguments[1] : void 0) {
            case e.URLENCODED:
              return w.urlEncode(t);
            case e.JSON:
              return w.jsonEncode(t);
            case e.FORM:
              return w.formEncode(t);
            default:
              return t;
          }
        }, y = function(t) {
          return t >= 200 && t < 300;
        }, { contentType: e = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: d, get: function(t) {
          return t.method = "GET", d(t);
        }, post: v, transport: function(t) {
          return t = l(t), w.selectFiles(t).then(function(n) {
            for (var c = new FormData(), u = 0; u < n.length; u++) c.append(t.fieldName, n[u], n[u].name);
            w.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
              var h = t.data[m];
              c.append(m, h);
            });
            var g = t.beforeSend;
            return t.beforeSend = function() {
              return g(n);
            }, t.data = c, v(t);
          });
        }, selectFiles: function(t) {
          return delete (t = l(t)).beforeSend, w.selectFiles(t);
        } });
        i.exports = b;
      }, function(i, s, r) {
        r.r(s);
        var o = r(1);
        window.Promise = window.Promise || o.a;
      }, function(i, s, r) {
        (function(o) {
          var e = o !== void 0 && o || typeof self < "u" && self || window, d = Function.prototype.apply;
          function v(l, f) {
            this._id = l, this._clearFn = f;
          }
          s.setTimeout = function() {
            return new v(d.call(setTimeout, e, arguments), clearTimeout);
          }, s.setInterval = function() {
            return new v(d.call(setInterval, e, arguments), clearInterval);
          }, s.clearTimeout = s.clearInterval = function(l) {
            l && l.close();
          }, v.prototype.unref = v.prototype.ref = function() {
          }, v.prototype.close = function() {
            this._clearFn.call(e, this._id);
          }, s.enroll = function(l, f) {
            clearTimeout(l._idleTimeoutId), l._idleTimeout = f;
          }, s.unenroll = function(l) {
            clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
          }, s._unrefActive = s.active = function(l) {
            clearTimeout(l._idleTimeoutId);
            var f = l._idleTimeout;
            f >= 0 && (l._idleTimeoutId = setTimeout(function() {
              l._onTimeout && l._onTimeout();
            }, f));
          }, r(6), s.setImmediate = typeof self < "u" && self.setImmediate || o !== void 0 && o.setImmediate || this && this.setImmediate, s.clearImmediate = typeof self < "u" && self.clearImmediate || o !== void 0 && o.clearImmediate || this && this.clearImmediate;
        }).call(this, r(0));
      }, function(i, s, r) {
        (function(o, e) {
          (function(d, v) {
            if (!d.setImmediate) {
              var l, f, p, y, w, b = 1, t = {}, n = !1, c = d.document, u = Object.getPrototypeOf && Object.getPrototypeOf(d);
              u = u && u.setTimeout ? u : d, {}.toString.call(d.process) === "[object process]" ? l = function(h) {
                e.nextTick(function() {
                  m(h);
                });
              } : function() {
                if (d.postMessage && !d.importScripts) {
                  var h = !0, k = d.onmessage;
                  return d.onmessage = function() {
                    h = !1;
                  }, d.postMessage("", "*"), d.onmessage = k, h;
                }
              }() ? (y = "setImmediate$" + Math.random() + "$", w = function(h) {
                h.source === d && typeof h.data == "string" && h.data.indexOf(y) === 0 && m(+h.data.slice(y.length));
              }, d.addEventListener ? d.addEventListener("message", w, !1) : d.attachEvent("onmessage", w), l = function(h) {
                d.postMessage(y + h, "*");
              }) : d.MessageChannel ? ((p = new MessageChannel()).port1.onmessage = function(h) {
                m(h.data);
              }, l = function(h) {
                p.port2.postMessage(h);
              }) : c && "onreadystatechange" in c.createElement("script") ? (f = c.documentElement, l = function(h) {
                var k = c.createElement("script");
                k.onreadystatechange = function() {
                  m(h), k.onreadystatechange = null, f.removeChild(k), k = null;
                }, f.appendChild(k);
              }) : l = function(h) {
                setTimeout(m, 0, h);
              }, u.setImmediate = function(h) {
                typeof h != "function" && (h = new Function("" + h));
                for (var k = new Array(arguments.length - 1), T = 0; T < k.length; T++) k[T] = arguments[T + 1];
                var E = { callback: h, args: k };
                return t[b] = E, l(b), b++;
              }, u.clearImmediate = g;
            }
            function g(h) {
              delete t[h];
            }
            function m(h) {
              if (n) setTimeout(m, 0, h);
              else {
                var k = t[h];
                if (k) {
                  n = !0;
                  try {
                    (function(T) {
                      var E = T.callback, M = T.args;
                      switch (M.length) {
                        case 0:
                          E();
                          break;
                        case 1:
                          E(M[0]);
                          break;
                        case 2:
                          E(M[0], M[1]);
                          break;
                        case 3:
                          E(M[0], M[1], M[2]);
                          break;
                        default:
                          E.apply(v, M);
                      }
                    })(k);
                  } finally {
                    g(h), n = !1;
                  }
                }
              }
            }
          })(typeof self > "u" ? o === void 0 ? this : o : self);
        }).call(this, r(0), r(7));
      }, function(i, s) {
        var r, o, e = i.exports = {};
        function d() {
          throw new Error("setTimeout has not been defined");
        }
        function v() {
          throw new Error("clearTimeout has not been defined");
        }
        function l(u) {
          if (r === setTimeout) return setTimeout(u, 0);
          if ((r === d || !r) && setTimeout) return r = setTimeout, setTimeout(u, 0);
          try {
            return r(u, 0);
          } catch {
            try {
              return r.call(null, u, 0);
            } catch {
              return r.call(this, u, 0);
            }
          }
        }
        (function() {
          try {
            r = typeof setTimeout == "function" ? setTimeout : d;
          } catch {
            r = d;
          }
          try {
            o = typeof clearTimeout == "function" ? clearTimeout : v;
          } catch {
            o = v;
          }
        })();
        var f, p = [], y = !1, w = -1;
        function b() {
          y && f && (y = !1, f.length ? p = f.concat(p) : w = -1, p.length && t());
        }
        function t() {
          if (!y) {
            var u = l(b);
            y = !0;
            for (var g = p.length; g; ) {
              for (f = p, p = []; ++w < g; ) f && f[w].run();
              w = -1, g = p.length;
            }
            f = null, y = !1, function(m) {
              if (o === clearTimeout) return clearTimeout(m);
              if ((o === v || !o) && clearTimeout) return o = clearTimeout, clearTimeout(m);
              try {
                o(m);
              } catch {
                try {
                  return o.call(null, m);
                } catch {
                  return o.call(this, m);
                }
              }
            }(u);
          }
        }
        function n(u, g) {
          this.fun = u, this.array = g;
        }
        function c() {
        }
        e.nextTick = function(u) {
          var g = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var m = 1; m < arguments.length; m++) g[m - 1] = arguments[m];
          p.push(new n(u, g)), p.length !== 1 || y || l(t);
        }, n.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.version = "", e.versions = {}, e.on = c, e.addListener = c, e.once = c, e.off = c, e.removeListener = c, e.removeAllListeners = c, e.emit = c, e.prependListener = c, e.prependOnceListener = c, e.listeners = function(u) {
          return [];
        }, e.binding = function(u) {
          throw new Error("process.binding is not supported");
        }, e.cwd = function() {
          return "/";
        }, e.chdir = function(u) {
          throw new Error("process.chdir is not supported");
        }, e.umask = function() {
          return 0;
        };
      }, function(i, s, r) {
        function o(d, v) {
          for (var l = 0; l < v.length; l++) {
            var f = v[l];
            f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(d, f.key, f);
          }
        }
        var e = r(9);
        i.exports = function() {
          function d() {
            (function(p, y) {
              if (!(p instanceof y)) throw new TypeError("Cannot call a class as a function");
            })(this, d);
          }
          var v, l, f;
          return v = d, f = [{ key: "urlEncode", value: function(p) {
            return e(p);
          } }, { key: "jsonEncode", value: function(p) {
            return JSON.stringify(p);
          } }, { key: "formEncode", value: function(p) {
            if (this.isFormData(p)) return p;
            if (this.isFormElement(p)) return new FormData(p);
            if (this.isObject(p)) {
              var y = new FormData();
              return Object.keys(p).forEach(function(w) {
                var b = p[w];
                y.append(w, b);
              }), y;
            }
            throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
          } }, { key: "isObject", value: function(p) {
            return Object.prototype.toString.call(p) === "[object Object]";
          } }, { key: "isFormData", value: function(p) {
            return p instanceof FormData;
          } }, { key: "isFormElement", value: function(p) {
            return p instanceof HTMLFormElement;
          } }, { key: "selectFiles", value: function() {
            var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return new Promise(function(y, w) {
              var b = document.createElement("INPUT");
              b.type = "file", p.multiple && b.setAttribute("multiple", "multiple"), p.accept && b.setAttribute("accept", p.accept), b.style.display = "none", document.body.appendChild(b), b.addEventListener("change", function(t) {
                var n = t.target.files;
                y(n), document.body.removeChild(b);
              }, !1), b.click();
            });
          } }, { key: "parseHeaders", value: function(p) {
            var y = p.trim().split(/[\r\n]+/), w = {};
            return y.forEach(function(b) {
              var t = b.split(": "), n = t.shift(), c = t.join(": ");
              n && (w[n] = c);
            }), w;
          } }], (l = null) && o(v.prototype, l), f && o(v, f), d;
        }();
      }, function(i, s) {
        var r = function(e) {
          return encodeURIComponent(e).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
        }, o = function(e, d, v, l) {
          return d = d || null, v = v || "&", l = l || null, e ? function(f) {
            for (var p = new Array(), y = 0; y < f.length; y++) f[y] && p.push(f[y]);
            return p;
          }(Object.keys(e).map(function(f) {
            var p, y, w = f;
            if (l && (w = l + "[" + w + "]"), typeof e[f] == "object" && e[f] !== null) p = o(e[f], null, v, w);
            else {
              d && (y = w, w = !isNaN(parseFloat(y)) && isFinite(y) ? d + Number(w) : w);
              var b = e[f];
              b = (b = (b = (b = b === !0 ? "1" : b) === !1 ? "0" : b) === 0 ? "0" : b) || "", p = r(w) + "=" + r(b);
            }
            return p;
          })).join(v).replace(/[!'()*]/g, "") : "";
        };
        i.exports = o;
      }]);
    });
  }(O)), O.exports;
}
var N = A();
const j = /* @__PURE__ */ q(N);
function P(C) {
  return C !== void 0 && typeof C.then == "function";
}
class V {
  /**
   * @param params - uploader module params
   * @param params.config - image tool config
   * @param params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param params.onError - callback for uploading errors
   */
  constructor({ config: a, onUpload: i, onError: s }) {
    this.config = a, this.onUpload = i, this.onError = s;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   * @param onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: a }) {
    const i = function(r) {
      const o = new FileReader();
      o.readAsDataURL(r), o.onload = (e) => {
        a(e.target.result);
      };
    };
    let s;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
      const r = this.config.uploader.uploadByFile;
      s = j.selectFiles({ accept: this.config.types ?? "image/*" }).then((o) => {
        i(o[0]);
        const e = r(o[0]);
        return P(e) || console.warn("Custom uploader method uploadByFile should return a Promise"), e;
      });
    } else
      s = j.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types ?? "image/*",
        headers: this.config.additionalRequestHeaders,
        beforeSend: (r) => {
          i(r[0]);
        },
        fieldName: this.config.field ?? "image"
      }).then((r) => r.body);
    s.then((r) => {
      this.onUpload(r);
    }).catch((r) => {
      this.onError(r);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param url - image source url
   */
  uploadByUrl(a) {
    let i;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (i = this.config.uploader.uploadByUrl(a), P(i) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : i = j.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: a
      }, this.config.additionalRequestData),
      type: j.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((s) => s.body), i.then((s) => {
      this.onUpload(s);
    }).catch((s) => {
      this.onError(s);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param file - file pasted by drag-n-drop
   * @param onPreview - file pasted by drag-n-drop
   */
  uploadByFile(a, { onPreview: i }) {
    const s = new FileReader();
    s.readAsDataURL(a), s.onload = (o) => {
      i(o.target.result);
    };
    let r;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      r = this.config.uploader.uploadByFile(a), P(r) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const o = new FormData();
      o.append(this.config.field ?? "image", a), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([e, d]) => {
        o.append(e, d);
      }), r = j.post({
        url: this.config.endpoints.byFile,
        data: o,
        type: j.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((e) => e.body);
    }
    r.then((o) => {
      this.onUpload(o);
    }).catch((o) => {
      this.onError(o);
    });
  }
}
/**
 * Image Tool for the Editor.js
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.ts — main Tool's interface, public API and methods for working with data
 *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
class L {
  /**
   * @param tool - tool properties got from editor.js
   * @param tool.data - previously saved data
   * @param tool.config - user config for Tool
   * @param tool.api - Editor.js API
   * @param tool.readOnly - read-only mode flag
   * @param tool.block - current Block API
   */
  constructor({ data: a, config: i, api: s, readOnly: r, block: o }) {
    this.isCaptionEnabled = null, this.api = s, this.block = o, this.config = {
      endpoints: i.endpoints,
      additionalRequestData: i.additionalRequestData,
      additionalRequestHeaders: i.additionalRequestHeaders,
      field: i.field,
      types: i.types,
      captionPlaceholder: this.api.i18n.t(i.captionPlaceholder ?? "Caption"),
      buttonContent: i.buttonContent,
      uploader: i.uploader,
      actions: i.actions,
      features: i.features || {}
    }, this.uploader = new V({
      config: this.config,
      onUpload: (e) => this.onUpload(e),
      onError: (e) => this.uploadingFailed(e)
    }), this.ui = new U({
      api: s,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (e) => {
            this.ui.showPreloader(e);
          }
        });
      },
      readOnly: r
    }), this._data = {
      caption: "",
      withBorder: !1,
      withBackground: !1,
      stretched: !1,
      file: {
        url: ""
      }
    }, this.data = a;
  }
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return {
      icon: R,
      title: "Image"
    };
  }
  /**
   * Available image tools
   */
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: x,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: B,
        title: "Stretch image",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: I,
        title: "With background",
        toggle: !0
      }
    ];
  }
  /**
   * Renders Block content
   */
  render() {
    var a, i, s;
    return (((a = this.config.features) == null ? void 0 : a.caption) === !0 || ((i = this.config.features) == null ? void 0 : i.caption) === void 0 || ((s = this.config.features) == null ? void 0 : s.caption) === "optional" && this.data.caption) && (this.isCaptionEnabled = !0), this.ui.render();
  }
  /**
   * Validate data: check if Image exists
   * @param savedData — data received after saving
   * @returns false if saved data is not correct, otherwise true
   */
  validate(a) {
    return a.file.preview != null;
  }
  /**
   * Return Block data
   */
  save() {
    const a = this.ui.nodes.caption;
    return this._data.caption = a.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   * @returns TunesMenuConfig
   */
  renderSettings() {
    var o;
    const a = L.tunes.concat(this.config.actions || []), i = {
      border: "withBorder",
      background: "withBackground",
      stretch: "stretched",
      caption: "caption"
    };
    ((o = this.config.features) == null ? void 0 : o.caption) === "optional" && a.push({
      name: "caption",
      icon: D,
      title: "With caption",
      toggle: !0
    });
    const s = a.filter((e) => {
      var v, l;
      const d = Object.keys(i).find((f) => i[f] === e.name);
      return d === "caption" ? ((v = this.config.features) == null ? void 0 : v.caption) !== !1 : d == null || ((l = this.config.features) == null ? void 0 : l[d]) !== !1;
    }), r = (e) => {
      let d = this.data[e.name];
      return e.name === "caption" && (d = this.isCaptionEnabled ?? d), d;
    };
    return s.map((e) => ({
      icon: e.icon,
      label: this.api.i18n.t(e.title),
      name: e.name,
      toggle: e.toggle,
      isActive: r(e),
      onActivate: () => {
        if (typeof e.action == "function") {
          e.action(e.name);
          return;
        }
        let d = !r(e);
        e.name === "caption" && (this.isCaptionEnabled = !(this.isCaptionEnabled ?? !1), d = this.isCaptionEnabled), this.tuneToggled(e.name, d);
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          img: { src: !0 }
        }
      ],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   */
  async onPaste(a) {
    switch (a.type) {
      case "tag": {
        const i = a.detail.data;
        if (/^blob:/.test(i.src)) {
          const r = await (await fetch(i.src)).blob();
          this.uploadFile(r);
          break;
        }
        this.uploadUrl(i.src);
        break;
      }
      case "pattern": {
        const i = a.detail.data;
        this.uploadUrl(i);
        break;
      }
      case "file": {
        const i = a.detail.file;
        this.uploadFile(i);
        break;
      }
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   * @param data - data in Image Tool format
   */
  set data(a) {
    this.image = a.file, this._data.caption = a.caption || "", this.ui.fillCaption(this._data.caption), L.tunes.forEach(({ name: i }) => {
      const s = typeof a[i] < "u" ? a[i] === !0 || a[i] === "true" : !1;
      this.setTune(i, s);
    }), a.caption && this.setTune("caption", !0);
  }
  /**
   * Return Tool data
   */
  get data() {
    return this._data;
  }
  /**
   * Set new image file
   * @param file - uploaded file data
   */
  set image(a) {
    this._data.file = a || { preview: "" }, a && a.preview != null && this.ui.fillImage(a.preview);
  }
  /**
   * File uploading callback
   * @param response - uploading server response
   */
  onUpload(a) {
    a.success && a.file ? this.image = a.file : this.uploadingFailed("incorrect response: " + JSON.stringify(a));
  }
  /**
   * Handle uploader errors
   * @param errorText - uploading error info
   */
  uploadingFailed(a) {
    console.log("Image Tool: uploading failed because of", a), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   * @param tuneName - tune that has been clicked
   * @param state - new state
   */
  tuneToggled(a, i) {
    a === "caption" ? (this.ui.applyTune(a, i), i || (this._data.caption = "", this.ui.fillCaption(""))) : this.setTune(a, i);
  }
  /**
   * Set one tune
   * @param tuneName - {@link Tunes.tunes}
   * @param value - tune state
   */
  setTune(a, i) {
    this._data[a] = i, this.ui.applyTune(a, i), a === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = i;
    }).catch((s) => {
      console.error(s);
    });
  }
  /**
   * Show preloader and upload image file
   * @param file - file that is currently uploading (from paste)
   */
  uploadFile(a) {
    this.uploader.uploadByFile(a, {
      onPreview: (i) => {
        this.ui.showPreloader(i);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   * @param url - url pasted
   */
  uploadUrl(a) {
    this.ui.showPreloader(a), this.uploader.uploadByUrl(a);
  }
}
export {
  L as default
};
