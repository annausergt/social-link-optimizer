!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 16));
})([
  function (t, e, n) {
    var r = n(7),
      o = n(8),
      a = n(9),
      c = n(10);
    t.exports = function (t) {
      return r(t) || o(t) || a(t) || c();
    };
  },
  function (t, e) {
    t.exports = window.regeneratorRuntime;
  },
  function (t, e) {
    t.exports = function (t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    };
  },
  ,
  ,
  ,
  function (t, e) {
    function n(t, e, n, r, o, a, c) {
      try {
        var i = t[a](c),
          l = i.value;
      } catch (t) {
        return void n(t);
      }
      i.done ? e(l) : Promise.resolve(l).then(r, o);
    }
    t.exports = function (t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (o, a) {
          var c = t.apply(e, r);
          function i(t) {
            n(c, o, a, i, l, 'next', t);
          }
          function l(t) {
            n(c, o, a, i, l, 'throw', t);
          }
          i(void 0);
        });
      };
    };
  },
  function (t, e, n) {
    var r = n(2);
    t.exports = function (t) {
      if (Array.isArray(t)) return r(t);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
    };
  },
  function (t, e, n) {
    var r = n(2);
    t.exports = function (t, e) {
      if (t) {
        if ('string' == typeof t) return r(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return (
          'Object' === n && t.constructor && (n = t.constructor.name),
          'Map' === n || 'Set' === n
            ? Array.from(t)
            : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? r(t, e)
            : void 0
        );
      }
    };
  },
  function (t, e) {
    t.exports = function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    };
  },
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r,
      o,
      a,
      c,
      i = n(0),
      l = n.n(i),
      u = function (t) {
        document.querySelectorAll('.gpalab-slo-tab-button').forEach(function (e) {
          e.id === 'gpalab-slo-tab-'.concat(t)
            ? (e.focus(), e.setAttribute('aria-selected', 'true'), e.removeAttribute('tabindex'))
            : (e.removeAttribute('aria-selected'), e.setAttribute('tabindex', '-1'));
        }),
          document.querySelectorAll('.gpalab-slo-tabpanel').forEach(function (e) {
            e.id === 'gpalab-slo-settings-'.concat(t)
              ? (e.style.display = 'flex')
              : (e.style.display = 'none');
          });
      },
      s = function (t) {
        var e = document.querySelectorAll('.gpalab-slo-tab-button');
        if (null !== t)
          switch (t) {
            case -1:
              u(e[e.length - 1].dataset.id);
              break;
            case e.length:
              u(e[0].dataset.id);
              break;
            default:
              u(e[t].dataset.id);
          }
      },
      d = function (t) {
        var e = window.location,
          n = e.origin,
          r = e.pathname,
          o = e.search;
        (window.location.href = ''.concat(n).concat(r).concat(o, '#gpalab-slo-tab-').concat(t)),
          window.location.reload();
      },
      f = n(1),
      p = n.n(f),
      b = n(6),
      v = n.n(b),
      m = (function () {
        var t = v()(
          p.a.mark(function t(e) {
            var n, r, o, a, c;
            return p.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r =
                          (null === (n = window) || void 0 === n ? void 0 : n.gpalabSloAdmin) ||
                          {}),
                        (o = new FormData()).append('action', 'gpalab_add_slo_mission'),
                        o.append('security', r.sloNonce),
                        (t.prev = 4),
                        (t.next = 7),
                        fetch(r.ajaxUrl, { method: 'POST', body: o })
                      );
                    case 7:
                      return (a = t.sent), (t.next = 10), a.json();
                    case 10:
                      (c = t.sent), console.log(c), d(e), (t.next = 18);
                      break;
                    case 15:
                      (t.prev = 15), (t.t0 = t.catch(4)), console.error(t.t0);
                    case 18:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              null,
              [[4, 15]]
            );
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      y = (function () {
        var t = v()(
          p.a.mark(function t(e, n) {
            var r, o, a, c, i;
            return p.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (o =
                          (null === (r = window) || void 0 === r ? void 0 : r.gpalabSloAdmin) ||
                          {}),
                        (a = new FormData()).append('action', 'gpalab_remove_slo_mission'),
                        a.append('security', o.sloNonce),
                        a.append('mission_id', e),
                        (t.prev = 5),
                        (t.next = 8),
                        fetch(o.ajaxUrl, { method: 'POST', body: a })
                      );
                    case 8:
                      return (c = t.sent), (t.next = 11), c.json();
                    case 11:
                      (i = t.sent), console.log(i), d(n), (t.next = 19);
                      break;
                    case 16:
                      (t.prev = 16), (t.t0 = t.catch(5)), console.error(t.t0);
                    case 19:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              null,
              [[5, 16]]
            );
          })
        );
        return function (e, n) {
          return t.apply(this, arguments);
        };
      })(),
      h = (function () {
        var t = v()(
          p.a.mark(function t(e, n, r) {
            var o, a, c, i, l;
            return p.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a =
                          (null === (o = window) || void 0 === o ? void 0 : o.gpalabSloAdmin) ||
                          {}),
                        (c = new FormData()).append('action', 'gpalab_update_slo_permalink'),
                        c.append('security', a.sloNonce),
                        c.append('permalink', n),
                        c.append('post_id', e),
                        (t.prev = 6),
                        (t.next = 9),
                        fetch(a.ajaxUrl, { method: 'POST', body: c })
                      );
                    case 9:
                      return (i = t.sent), (t.next = 12), i.json();
                    case 12:
                      (l = t.sent), console.log(l), d(r), (t.next = 20);
                      break;
                    case 17:
                      (t.prev = 17), (t.t0 = t.catch(6)), console.error(t.t0);
                    case 20:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              null,
              [[6, 17]]
            );
          })
        );
        return function (e, n, r) {
          return t.apply(this, arguments);
        };
      })();
    (r = document.querySelectorAll('.gpalab-slo-tab-button')).forEach(function (t) {
      t.addEventListener('click', function (t) {
        var e = t.target.dataset.id;
        u(e);
      });
    }),
      r.forEach(function (t, e) {
        t.addEventListener('keydown', function (t) {
          switch (t.which) {
            case 37:
              s(e - 1);
              break;
            case 39:
              s(e + 1);
              break;
            case 40:
              t.preventDefault(), document.getElementById('title_'.concat(e)).focus();
              break;
            default:
              return null;
          }
        });
      }),
      document.getElementById('slo-add-mission').addEventListener('click', function () {
        m(r.length);
      }),
      document.querySelectorAll('.slo-remove-mission').forEach(function (t) {
        t.addEventListener('click', function (t) {
          var e = t.target.dataset.id,
            n = l()(r).filter(function (t) {
              return void 0 !== t.attributes['aria-selected'];
            })[0].dataset.id;
          y(e, n > 0 ? n - 1 : 0);
        });
      }),
      document.querySelectorAll('.slo-permalink').forEach(function (t, e) {
        t.addEventListener('click', function (t) {
          var n = t.target.dataset,
            r = n.id,
            o = n.post,
            a = document.getElementById('permalink-'.concat(r));
          h(o, a.value, e);
        });
      }),
      (function (t) {
        var e = document.querySelectorAll('.gpalab-slo-tab-button'),
          n = document.querySelectorAll('.gpalab-slo-tabpanel');
        if (0 !== e.length && 0 !== n.length) {
          var r = t >= e.length ? 0 : t,
            o = l()(e);
          o.splice(r, 1),
            e[r].setAttribute('aria-selected', 'true'),
            (n[r].style.display = 'flex'),
            o.forEach(function (t) {
              t.setAttribute('tabindex', '-1');
            });
        }
      })(
        ((a = /(gpalab-slo-tab-[0-9]*)/g),
        ((c = (o = window.location.hash).match(a) ? o.match(a)[0] : null)
          ? c.replace('gpalab-slo-tab-', '')
          : 0) || 0)
      );
  },
]);
