function clearPlaceholderValue() {
    $("[placeholder]").each(function () {
        $(this).val() == $(this).attr("placeholder") && $(this).val("")
    })
}

function removeMobileMenuLink() {
    $("ul.mm-current li a.mm-subopen").each(function () {
        var t = $(this),
            n = t.next("a");
        t.attr("title", n.attr("title"));
        $(t.attr("href") + ' a[href="' + n.attr("href") + '"]') && (n.attr("href", "javascript:void(0);"), n.addClass("OpenNext"))
    });
    $("body").on("click", "a.OpenNext", function () {
        $(this).prev("a.mm-subopen").trigger("click");
        $(this).parent("li").removeClass("mm-selected")
    })
}

function fix_imageCenter() {
    $("div.imgcenter").each(function () {
        var n = $(this).find("img").width();
        $(this).find("span").width(n)
    })
}

function removeMvcCheckBoxHidden() {
    $("input[type='checkbox']").each(function () {
        var t = $(this).attr("name"),
            n = $("input[type='hidden'][name='" + t + "']");
        n && n.remove()
    })
}

function deCodeJson(n) {
    return JSON.parse(n.replace(/&quot;/g, '"'))
}
var commonHelper, LZString, projectHelper;
(function (n, t) {
    function yu(n) {
        var t = wt[n] = {};
        return i.each(n.split(h), function (n, i) {
            t[i] = !0
        }), t
    }

    function ui(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(sr, "-$1").toLowerCase();
            if (u = n.getAttribute(f), typeof u == "string") {
                try {
                    u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : +u + "" === u ? +u : or.test(u) ? i.parseJSON(u) : u
                } catch (e) { }
                i.data(n, r, u)
            } else u = t
        }
        return u
    }

    function at(n) {
        for (var t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
        return !0
    }

    function v() {
        return !1
    }

    function d() {
        return !0
    }

    function b(n) {
        return !n || !n.parentNode || n.parentNode.nodeType === 11
    }

    function fi(n, t) {
        do n = n[t]; while (n && n.nodeType !== 1);
        return n
    }

    function ei(n, t, r) {
        if (t = t || 0, i.isFunction(t)) return i.grep(n, function (n, i) {
            var u = !!t.call(n, i, n);
            return u === r
        });
        if (t.nodeType) return i.grep(n, function (n) {
            return n === t === r
        });
        if (typeof t == "string") {
            var u = i.grep(n, function (n) {
                return n.nodeType === 1
            });
            if (fe.test(t)) return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n, function (n) {
            return i.inArray(n, t) >= 0 === r
        })
    }

    function oi(n) {
        var i = kr.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length) t.createElement(i.pop());
        return t
    }

    function pu(n, t) {
        return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t))
    }

    function si(n, t) {
        if (t.nodeType === 1 && i.hasData(n)) {
            var u, f, o, s = i._data(n),
                r = i._data(t, s),
                e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0, o = e[u].length; f < o; f++) i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }

    function hi(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(n), r = t.nodeName.toLowerCase(), r === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML), i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : r === "input" && nu.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : r === "option" ? t.selected = n.defaultSelected : r === "input" || r === "textarea" ? t.defaultValue = n.defaultValue : r === "script" && t.text !== n.text && (t.text = n.text), t.removeAttribute(i.expando))
    }

    function g(n) {
        return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
    }

    function ci(n) {
        nu.test(n.type) && (n.defaultChecked = n.checked)
    }

    function li(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = fu.length; i--;)
            if (t = fu[i] + r, t in n) return t;
        return u
    }

    function nt(n, t) {
        return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
    }

    function ai(n, t) {
        for (var r, o, e = [], f = 0, s = n.length; f < s; f++)(r = n[f], r.style) && (e[f] = i._data(r, "olddisplay"), t ? (!e[f] && r.style.display === "none" && (r.style.display = ""), r.style.display === "" && nt(r) && (e[f] = i._data(r, "olddisplay", wi(r.nodeName)))) : (o = u(r, "display"), !e[f] && o !== "none" && i._data(r, "olddisplay", o)));
        for (f = 0; f < s; f++)(r = n[f], r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[f] || "" : "none"));
        return n
    }

    function vi(n, t, i) {
        var r = be.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function yi(n, t, r, f) {
        for (var e = r === (f ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + c[e], !0)), f ? (r === "content" && (o -= parseFloat(u(n, "padding" + c[e])) || 0), r !== "margin" && (o -= parseFloat(u(n, "border" + c[e] + "Width")) || 0)) : (o += parseFloat(u(n, "padding" + c[e])) || 0, r !== "padding" && (o += parseFloat(u(n, "border" + c[e] + "Width")) || 0));
        return o
    }

    function pi(n, t, r) {
        var f = t === "width" ? n.offsetWidth : n.offsetHeight,
            e = !0,
            o = i.support.boxSizing && i.css(n, "boxSizing") === "border-box";
        if (f <= 0 || f == null) {
            if (f = u(n, t), (f < 0 || f == null) && (f = n.style[t]), et.test(f)) return f;
            e = o && (i.support.boxSizingReliable || f === n.style[t]);
            f = parseFloat(f) || 0
        }
        return f + yi(n, t, r || (o ? "border" : "content"), e) + "px"
    }

    function wi(n) {
        if (ti[n]) return ti[n];
        var f = i("<" + n + ">").appendTo(r.body),
            t = f.css("display");
        return f.remove(), (t === "none" || t === "") && (y = r.body.appendChild(y || i.extend(r.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), p && y.createElement || (p = (y.contentWindow || y.contentDocument).document, p.write("<!doctype html><html><body>"), p.close()), f = p.body.appendChild(p.createElement(n)), t = u(f, "display"), r.body.removeChild(y)), ti[n] = t, t
    }

    function vt(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function (t, i) {
            r || to.test(n) ? u(n, i) : vt(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else
            for (f in t) vt(n + "[" + f + "]", t[f], r, u)
    }

    function bi(n) {
        return function (t, r) {
            typeof t != "string" && (r = t, t = "*");
            var u, o, f, s = t.toLowerCase().split(h),
                e = 0,
                c = s.length;
            if (i.isFunction(r))
                for (; e < c; e++) u = s[e], f = /^\+/.test(u), f && (u = u.substr(1) || "*"), o = n[u] = n[u] || [], o[f ? "unshift" : "push"](r)
        }
    }

    function tt(n, i, r, u, f, e) {
        f = f || i.dataTypes[0];
        e = e || {};
        e[f] = !0;
        for (var o, s = n[f], h = 0, l = s ? s.length : 0, c = n === ii; h < l && (c || !o); h++) o = s[h](i, r, u), typeof o == "string" && (!c || e[o] ? o = t : (i.dataTypes.unshift(o), o = tt(n, i, r, u, o, e)));
        return (c || !o) && !e["*"] && (o = tt(n, i, r, u, "*", e)), o
    }

    function ki(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f)
    }

    function wu(n, i, r) {
        var o, u, e, s, h = n.contents,
            f = n.dataTypes,
            c = n.responseFields;
        for (u in c) u in r && (i[c[u]] = r[u]);
        while (f[0] === "*") f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o)
            for (u in h)
                if (h[u] && h[u].test(o)) {
                    f.unshift(u);
                    break
                } if (f[0] in r) e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break
                }
                s || (s = u)
            }
            e = e || s
        }
        if (e) return e !== f[0] && f.unshift(e), r[e]
    }

    function bu(n, t) {
        var i, o, r, e, s = n.dataTypes.slice(),
            f = s[0],
            u = {},
            h = 0;
        if (n.dataFilter && (t = n.dataFilter(t, n.dataType)), s[1])
            for (i in n.converters) u[i.toLowerCase()] = n.converters[i];
        for (; r = s[++h];)
            if (r !== "*") {
                if (f !== "*" && f !== r) {
                    if (i = u[f + " " + r] || u["* " + r], !i)
                        for (o in u)
                            if (e = o.split(" "), e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]], i)) {
                                i === !0 ? i = u[o] : u[o] !== !0 && (r = e[0], s.splice(h--, 0, r));
                                break
                            } if (i !== !0)
                        if (i && n.throws) t = i(t);
                        else try {
                            t = i(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: i ? c : "No conversion from " + f + " to " + r
                            }
                        }
                }
                f = r
            } return {
                state: "success",
                data: t
            }
    }

    function di() {
        try {
            return new n.XMLHttpRequest
        } catch (t) { }
    }

    function ku() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) { }
    }

    function gi() {
        return setTimeout(function () {
            ht = t
        }, 0), ht = i.now()
    }

    function du(n, t) {
        i.each(t, function (t, i) {
            for (var u = (k[t] || []).concat(k["*"]), r = 0, f = u.length; r < f; r++)
                if (u[r].call(n, t, i)) return
        })
    }

    function nr(n, t, r) {
        var e, o = 0,
            c = lt.length,
            f = i.Deferred().always(function () {
                delete h.elem
            }),
            h = function () {
                for (var o = ht || gi(), t = Math.max(0, u.startTime + u.duration - o), i = 1 - (t / u.duration || 0), r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
                return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: ht || gi(),
                duration: r.duration,
                tweens: [],
                createTween: function (t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function (t) {
                    for (var i = 0, r = t ? u.tweens.length : 0; i < r; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                }
            }),
            s = u.props;
        for (gu(s, u.opts.specialEasing); o < c; o++)
            if (e = lt[o].call(u, n, s, u.opts), e) return e;
        return du(u, s), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(h, {
            anim: u,
            queue: u.opts.queue,
            elem: n
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function gu(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function nf(n, t, r) {
        var o, u, a, v, h, c, f, w, s = this,
            e = n.style,
            y = {},
            p = [],
            l = n.nodeType && nt(n);
        r.queue || (f = i._queueHooks(n, "fx"), f.unqueued == null && (f.unqueued = 0, w = f.empty.fire, f.empty.fire = function () {
            f.unqueued || w()
        }), f.unqueued++ , s.always(function () {
            s.always(function () {
                f.unqueued--;
                i.queue(n, "fx").length || f.empty.fire()
            })
        }));
        n.nodeType === 1 && ("height" in t || "width" in t) && (r.overflow = [e.overflow, e.overflowX, e.overflowY], i.css(n, "display") === "inline" && i.css(n, "float") === "none" && (!i.support.inlineBlockNeedsLayout || wi(n.nodeName) === "inline" ? e.display = "inline-block" : e.zoom = 1));
        r.overflow && (e.overflow = "hidden", i.support.shrinkWrapBlocks || s.done(function () {
            e.overflow = r.overflow[0];
            e.overflowX = r.overflow[1];
            e.overflowY = r.overflow[2]
        }));
        for (o in t)
            if (a = t[o], ao.exec(a)) {
                if (delete t[o], a === (l ? "hide" : "show")) continue;
                p.push(o)
            } if (v = p.length, v)
            for (h = i._data(n, "fxshow") || i._data(n, "fxshow", {}), l ? i(n).show() : s.done(function () {
                i(n).hide()
            }), s.done(function () {
                var t;
                i.removeData(n, "fxshow", !0);
                for (t in y) i.style(n, t, y[t])
            }), o = 0; o < v; o++) u = p[o], c = s.createTween(u, l ? h[u] : 0), y[u] = h[u] || i.style(n, u), u in h || (h[u] = c.start, l && (c.end = c.start, c.start = u === "width" || u === "height" ? 1 : 0))
    }

    function f(n, t, i, r, u) {
        return new f.prototype.init(n, t, i, r, u)
    }

    function it(n, t) {
        var r, i = {
            height: n
        },
            u = 0;
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = c[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function tr(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    var ir, rt, r = n.document,
        tf = n.location,
        rf = n.navigator,
        uf = n.jQuery,
        ff = n.$,
        rr = Array.prototype.push,
        o = Array.prototype.slice,
        ur = Array.prototype.indexOf,
        ef = Object.prototype.toString,
        yt = Object.prototype.hasOwnProperty,
        pt = String.prototype.trim,
        i = function (n, t) {
            return new i.fn.init(n, t, ir)
        },
        ut = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        of = /\S/,
        h = /\s+/,
        sf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        hf = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        fr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        cf = /^[\],:{}\s]*$/,
        lf = /(?:^|:|,)(?:\s*\[)+/g,
        af = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        vf = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        yf = /^-ms-/,
        pf = /-([\da-z])/gi,
        wf = function (n, t) {
            return (t + "").toUpperCase()
        },
        ft = function () {
            r.addEventListener ? (r.removeEventListener("DOMContentLoaded", ft, !1), i.ready()) : r.readyState === "complete" && (r.detachEvent("onreadystatechange", ft), i.ready())
        },
        er = {},
        wt, or, sr, w, st, vu, ri;
    i.fn = i.prototype = {
        constructor: i,
        init: function (n, u, f) {
            var e, o, s;
            if (!n) return this;
            if (n.nodeType) return this.context = this[0] = n, this.length = 1, this;
            if (typeof n == "string") {
                if (e = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : hf.exec(n), e && (e[1] || !u)) {
                    if (e[1]) return u = u instanceof i ? u[0] : u, s = u && u.nodeType ? u.ownerDocument || u : r, n = i.parseHTML(e[1], s, !0), fr.test(e[1]) && i.isPlainObject(u) && this.attr.call(n, u, !0), i.merge(this, n);
                    if (o = r.getElementById(e[2]), o && o.parentNode) {
                        if (o.id !== e[2]) return f.find(n);
                        this.length = 1;
                        this[0] = o
                    }
                    return this.context = r, this.selector = n, this
                }
                return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
            }
            return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        },
        selector: "",
        jquery: "1.8.1",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return o.call(this)
        },
        get: function (n) {
            return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
        },
        pushStack: function (n, t, r) {
            var u = i.merge(this.constructor(), n);
            return u.prevObject = this, u.context = this.context, t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"), u
        },
        each: function (n, t) {
            return i.each(this, n, t)
        },
        ready: function (n) {
            return i.ready.promise().done(n), this
        },
        eq: function (n) {
            return n = +n, n === -1 ? this.slice(n) : this.slice(n, n + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments), "slice", o.call(arguments).join(","))
        },
        map: function (n) {
            return this.pushStack(i.map(this, function (t, i) {
                return n.call(t, i, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: rr,
        sort: [].sort,
        splice: [].splice
    };
    i.fn.init.prototype = i.fn;
    i.extend = i.fn.extend = function () {
        var o, e, u, r, s, h, n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            c = !1;
        for (typeof n == "boolean" && (c = n, n = arguments[1] || {}, f = 2), typeof n != "object" && !i.isFunction(n) && (n = {}), l === f && (n = this, --f); f < l; f++)
            if ((o = arguments[f]) != null)
                for (e in o) (u = n[e], r = o[e], n !== r) && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1, h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
        return n
    };
    i.extend({
        noConflict: function (t) {
            return n.$ === i && (n.$ = ff), t && n.jQuery === i && (n.jQuery = uf), i
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function (n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!r.body) return setTimeout(i.ready, 1);
                (i.isReady = !0, n !== !0 && --i.readyWait > 0) || (rt.resolveWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready"))
            }
        },
        isFunction: function (n) {
            return i.type(n) === "function"
        },
        isArray: Array.isArray || function (n) {
            return i.type(n) === "array"
        },
        isWindow: function (n) {
            return n != null && n == n.window
        },
        isNumeric: function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        },
        type: function (n) {
            return n == null ? String(n) : er[ef.call(n)] || "object"
        },
        isPlainObject: function (n) {
            if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
            try {
                if (n.constructor && !yt.call(n, "constructor") && !yt.call(n.constructor.prototype, "isPrototypeOf")) return !1
            } catch (u) {
                return !1
            }
            for (var r in n);
            return r === t || yt.call(n, r)
        },
        isEmptyObject: function (n) {
            for (var t in n) return !1;
            return !0
        },
        error: function (n) {
            throw new Error(n);
        },
        parseHTML: function (n, t, u) {
            var f;
            return !n || typeof n != "string" ? null : (typeof t == "boolean" && (u = t, t = 0), t = t || r, (f = fr.exec(n)) ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, u ? null : []), i.merge([], (f.cacheable ? i.clone(f.fragment) : f.fragment).childNodes)))
        },
        parseJSON: function (t) {
            if (!t || typeof t != "string") return null;
            if (t = i.trim(t), n.JSON && n.JSON.parse) return n.JSON.parse(t);
            if (cf.test(t.replace(af, "@").replace(vf, "]").replace(lf, ""))) return new Function("return " + t)();
            i.error("Invalid JSON: " + t)
        },
        parseXML: function (r) {
            var u, f;
            if (!r || typeof r != "string") return null;
            try {
                n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
            } catch (e) {
                u = t
            }
            return (!u || !u.documentElement || u.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + r), u
        },
        noop: function () { },
        globalEval: function (t) {
            t && of.test(t) && (n.execScript || function (t) {
                n.eval.call(n, t)
            })(t)
        },
        camelCase: function (n) {
            return n.replace(yf, "ms-").replace(pf, wf)
        },
        nodeName: function (n, t) {
            return n.nodeName && n.nodeName.toUpperCase() === t.toUpperCase()
        },
        each: function (n, r, u) {
            var f, e = 0,
                o = n.length,
                s = o === t || i.isFunction(n);
            if (u) {
                if (s) {
                    for (f in n)
                        if (r.apply(n[f], u) === !1) break
                } else
                    for (; e < o;)
                        if (r.apply(n[e++], u) === !1) break
            } else if (s) {
                for (f in n)
                    if (r.call(n[f], f, n[f]) === !1) break
            } else
                for (; e < o;)
                    if (r.call(n[e], e, n[e++]) === !1) break;
            return n
        },
        trim: pt && !pt.call("﻿ ") ? function (n) {
            return n == null ? "" : pt.call(n)
        } : function (n) {
            return n == null ? "" : n.toString().replace(sf, "")
        },
        makeArray: function (n, t) {
            var r, u = t || [];
            return n != null && (r = i.type(n), n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? rr.call(u, n) : i.merge(u, n)), u
        },
        inArray: function (n, t, i) {
            var r;
            if (t) {
                if (ur) return ur.call(t, n, i);
                for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                    if (i in t && t[i] === n) return i
            }
            return -1
        },
        merge: function (n, i) {
            var f = i.length,
                u = n.length,
                r = 0;
            if (typeof f == "number")
                for (; r < f; r++) n[u++] = i[r];
            else
                while (i[r] !== t) n[u++] = i[r++];
            return n.length = u, n
        },
        grep: function (n, t, i) {
            var u, f = [],
                r = 0,
                e = n.length;
            for (i = !!i; r < e; r++) u = !!t(n[r], r), i !== u && f.push(n[r]);
            return f
        },
        map: function (n, r, u) {
            var f, h, e = [],
                s = 0,
                o = n.length,
                c = n instanceof i || o !== t && typeof o == "number" && (o > 0 && n[0] && n[o - 1] || o === 0 || i.isArray(n));
            if (c)
                for (; s < o; s++) f = r(n[s], s, u), f != null && (e[e.length] = f);
            else
                for (h in n) f = r(n[h], h, u), f != null && (e[e.length] = f);
            return e.concat.apply([], e)
        },
        guid: 1,
        proxy: function (n, r) {
            var f, e, u;
            return typeof r == "string" && (f = n[r], r = n, n = f), i.isFunction(n) ? (e = o.call(arguments, 2), u = function () {
                return n.apply(r, e.concat(o.call(arguments)))
            }, u.guid = n.guid = n.guid || u.guid || i.guid++ , u) : t
        },
        access: function (n, r, u, f, e, o, s) {
            var c, l = u == null,
                h = 0,
                a = n.length;
            if (u && typeof u == "object") {
                for (h in u) i.access(n, r, h, u[h], 1, o, f);
                e = 1
            } else if (f !== t) {
                if (c = s === t && i.isFunction(f), l && (c ? (c = r, r = function (n, t, r) {
                    return c.call(i(n), r)
                }) : (r.call(n, f), r = null)), r)
                    for (; h < a; h++) r(n[h], u, c ? f.call(n[h], h, r(n[h], u)) : f, s);
                e = 1
            }
            return e ? n : l ? r.call(n) : a ? r(n[0], u) : o
        },
        now: function () {
            return (new Date).getTime()
        }
    });
    i.ready.promise = function (t) {
        if (!rt)
            if (rt = i.Deferred(), r.readyState === "complete") setTimeout(i.ready, 1);
            else if (r.addEventListener) r.addEventListener("DOMContentLoaded", ft, !1), n.addEventListener("load", i.ready, !1);
            else {
                r.attachEvent("onreadystatechange", ft);
                n.attachEvent("onload", i.ready);
                var u = !1;
                try {
                    u = n.frameElement == null && r.documentElement
                } catch (e) { }
                u && u.doScroll && function f() {
                    if (!i.isReady) {
                        try {
                            u.doScroll("left")
                        } catch (n) {
                            return setTimeout(f, 50)
                        }
                        i.ready()
                    }
                }()
            }
        return rt.promise(t)
    };
    i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (n, t) {
        er["[object " + t + "]"] = t.toLowerCase()
    });
    ir = i(r);
    wt = {};
    i.Callbacks = function (n) {
        n = typeof n == "string" ? wt[n] || yu(n) : i.extend({}, n);
        var f, c, o, l, s, e, r = [],
            u = !n.once && [],
            a = function (t) {
                for (f = n.memory && t, c = !0, e = l || 0, l = 0, s = r.length, o = !0; r && e < s; e++)
                    if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                        f = !1;
                        break
                    } o = !1;
                r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
            },
            h = {
                add: function () {
                    if (r) {
                        var t = r.length;
                        (function u(t) {
                            i.each(t, function (t, f) {
                                var e = i.type(f);
                                e === "function" && (!n.unique || !h.has(f)) ? r.push(f) : f && f.length && e !== "string" && u(f)
                            })
                        })(arguments);
                        o ? s = r.length : f && (l = t, a(f))
                    }
                    return this
                },
                remove: function () {
                    return r && i.each(arguments, function (n, t) {
                        for (var u;
                            (u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), o && (u <= s && s-- , u <= e && e--)
                    }), this
                },
                has: function (n) {
                    return i.inArray(n, r) > -1
                },
                empty: function () {
                    return r = [], this
                },
                disable: function () {
                    return r = u = f = t, this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    return u = t, f || h.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (n, t) {
                    return t = t || [], t = [n, t.slice ? t.slice() : t], r && (!c || u) && (o ? u.push(t) : a(t)), this
                },
                fire: function () {
                    return h.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!c
                }
            };
        return h
    };
    i.extend({
        Deferred: function (n) {
            var u = [
                ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                ["notify", "progress", i.Callbacks("memory")]
            ],
                f = "pending",
                r = {
                    state: function () {
                        return f
                    },
                    always: function () {
                        return t.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var n = arguments;
                        return i.Deferred(function (r) {
                            i.each(u, function (u, f) {
                                var e = f[0],
                                    o = n[u];
                                t[f[1]](i.isFunction(o) ? function () {
                                    var n = o.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[e + "With"](this === t ? r : this, [n])
                                } : r[e])
                            });
                            n = null
                        }).promise()
                    },
                    promise: function (n) {
                        return typeof n == "object" ? i.extend(n, r) : r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function (n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add;
                o && e.add(function () {
                    f = o
                }, u[n ^ 1][2].disable, u[2][2].lock);
                t[i[0]] = e.fire;
                t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function (n) {
            var t = 0,
                u = o.call(arguments),
                r = u.length,
                e = r !== 1 || n && i.isFunction(n.promise) ? r : 0,
                f = e === 1 ? n : i.Deferred(),
                c = function (n, t, i) {
                    return function (r) {
                        t[n] = this;
                        i[n] = arguments.length > 1 ? o.call(arguments) : r;
                        i === s ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                },
                s, l, h;
            if (r > 1)
                for (s = new Array(r), l = new Array(r), h = new Array(r); t < r; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(c(t, h, u)).fail(f.reject).progress(c(t, l, s)) : --e;
            return e || f.resolveWith(h, u), f.promise()
        }
    });
    i.support = function () {
        var u, h, e, c, l, f, o, a, v, s, y, t = r.createElement("div");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", h = t.getElementsByTagName("*"), e = t.getElementsByTagName("a")[0], e.style.cssText = "top:1px;float:left;opacity:.5", !h || !h.length || !e) return {};
        c = r.createElement("select");
        l = c.appendChild(r.createElement("option"));
        f = t.getElementsByTagName("input")[0];
        u = {
            leadingWhitespace: t.firstChild.nodeType === 3,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.5/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: f.value === "on",
            optSelected: l.selected,
            getSetAttribute: t.className !== "t",
            enctype: !!r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>",
            boxModel: r.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        f.checked = !0;
        u.noCloneChecked = f.cloneNode(!0).checked;
        c.disabled = !0;
        u.optDisabled = !l.disabled;
        try {
            delete t.test
        } catch (p) {
            u.deleteExpando = !1
        }
        if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", y = function () {
            u.noCloneEvent = !1
        }), t.cloneNode(!0).fireEvent("onclick"), t.detachEvent("onclick", y)), f = r.createElement("input"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = f.value === "t", f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), t.appendChild(f), o = r.createDocumentFragment(), o.appendChild(t.lastChild), u.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, u.appendChecked = f.checked, o.removeChild(f), o.appendChild(t), t.attachEvent)
            for (v in {
                submit: !0,
                change: !0,
                focusin: !0
            }) a = "on" + v, s = a in t, s || (t.setAttribute(a, "return;"), s = typeof t[a] == "function"), u[v + "Bubbles"] = s;
        return i(function () {
            var i, t, f, e, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                o = r.getElementsByTagName("body")[0];
            o && (i = r.createElement("div"), i.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", o.insertBefore(i, o.firstChild), t = r.createElement("div"), i.appendChild(t), t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", f = t.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", s = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", u.reliableHiddenOffsets = s && f[0].offsetHeight === 0, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", u.boxSizing = t.offsetWidth === 4, u.doesNotIncludeMarginInBodyOffset = o.offsetTop !== 1, n.getComputedStyle && (u.pixelPosition = (n.getComputedStyle(t, null) || {}).top !== "1%", u.boxSizingReliable = (n.getComputedStyle(t, null) || {
                width: "4px"
            }).width === "4px", e = r.createElement("div"), e.style.cssText = t.style.cssText = h, e.style.marginRight = e.style.width = "0", t.style.width = "1px", t.appendChild(e), u.reliableMarginRight = !parseFloat((n.getComputedStyle(e, null) || {}).marginRight)), typeof t.style.zoom != "undefined" && (t.innerHTML = "", t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", u.inlineBlockNeedsLayout = t.offsetWidth === 3, t.style.display = "block", t.style.overflow = "visible", t.innerHTML = "<div><\/div>", t.firstChild.style.width = "5px", u.shrinkWrapBlocks = t.offsetWidth !== 3, i.style.zoom = 1), o.removeChild(i), i = t = f = e = null)
        }), o.removeChild(t), h = e = c = l = f = o = t = null, u
    }();
    or = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
    sr = /([A-Z])/g;
    i.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !at(n)
        },
        data: function (n, r, u, f) {
            if (i.acceptData(n)) {
                var s, h, c = i.expando,
                    a = typeof r == "string",
                    l = n.nodeType,
                    o = l ? i.cache : n,
                    e = l ? n[c] : n[c] && c;
                if (e && o[e] && (f || o[e].data) || !a || u !== t) return e || (l ? n[c] = e = i.deletedIds.pop() || ++i.uuid : e = c), o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), (typeof r == "object" || typeof r == "function") && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a ? (h = s[r], h == null && (h = s[i.camelCase(r)])) : h = s, h
            }
        },
        removeData: function (n, t, r) {
            if (i.acceptData(n)) {
                var e, o, h, s = n.nodeType,
                    u = s ? i.cache : n,
                    f = s ? n[i.expando] : i.expando;
                if (u[f]) {
                    if (t && (e = r ? u[f] : u[f].data, e)) {
                        for (i.isArray(t) || ((t in e) ? t = [t] : (t = i.camelCase(t), t = (t in e) ? [t] : t.split(" "))), o = 0, h = t.length; o < h; o++) delete e[t[o]];
                        if (!(r ? at : i.isEmptyObject)(e)) return
                    } (r || (delete u[f].data, at(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
                }
            }
        },
        _data: function (n, t, r) {
            return i.data(n, t, r, !0)
        },
        acceptData: function (n) {
            var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
            return !t || t !== !0 && n.getAttribute("classid") === t
        }
    });
    i.fn.extend({
        data: function (n, r) {
            var u, s, h, o, l, e = this[0],
                c = 0,
                f = null;
            if (n === t) {
                if (this.length && (f = i.data(e), e.nodeType === 1 && !i._data(e, "parsedAttrs"))) {
                    for (h = e.attributes, l = h.length; c < l; c++) o = h[c].name, o.indexOf("data-") === 0 && (o = i.camelCase(o.substring(5)), ui(e, o, f[o]));
                    i._data(e, "parsedAttrs", !0)
                }
                return f
            }
            return typeof n == "object" ? this.each(function () {
                i.data(this, n)
            }) : (u = n.split(".", 2), u[1] = u[1] ? "." + u[1] : "", s = u[1] + "!", i.access(this, function (r) {
                if (r === t) return f = this.triggerHandler("getData" + s, [u[0]]), f === t && e && (f = i.data(e, n), f = ui(e, n, f)), f === t && u[1] ? this.data(u[0]) : f;
                u[1] = r;
                this.each(function () {
                    var t = i(this);
                    t.triggerHandler("setData" + s, u);
                    i.data(this, n, r);
                    t.triggerHandler("changeData" + s, u)
                })
            }, null, r, arguments.length > 1, null, !1))
        },
        removeData: function (n) {
            return this.each(function () {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function (n, t, r) {
            var u;
            if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
        },
        dequeue: function (n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function () {
                    i.dequeue(n, t)
                };
            u === "inprogress" && (u = r.shift(), e--);
            u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function (n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function () {
                    i.removeData(n, t + "queue", !0);
                    i.removeData(n, r, !0)
                })
            })
        }
    });
    i.fn.extend({
        queue: function (n, r) {
            var u = 2;
            return typeof n != "string" && (r = n, n = "fx", u--), arguments.length < u ? i.queue(this[0], n) : r === t ? this : this.each(function () {
                var t = i.queue(this, n, r);
                i._queueHooks(this, n);
                n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function (n) {
            return this.each(function () {
                i.dequeue(this, n)
            })
        },
        delay: function (n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function (t, i) {
                var r = setTimeout(t, n);
                i.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (n) {
            return this.queue(n || "fx", [])
        },
        promise: function (n, r) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function () {
                    --e || o.resolveWith(f, [f])
                };
            for (typeof n != "string" && (r = n, n = t), n = n || "fx"; s--;) u = i._data(f[s], n + "queueHooks"), u && u.empty && (e++ , u.empty.add(h));
            return h(), o.promise(r)
        }
    });
    var s, hr, cr, lr = /[\t\r\n]/g,
        bf = /\r/g,
        kf = /^(?:button|input)$/i,
        df = /^(?:button|input|object|select|textarea)$/i,
        gf = /^a(?:rea|)$/i,
        ar = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        vr = i.support.getSetAttribute;
    i.fn.extend({
        attr: function (n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function (n) {
            return this.each(function () {
                i.removeAttr(this, n)
            })
        },
        prop: function (n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function (n) {
            return n = i.propFix[n] || n, this.each(function () {
                try {
                    this[n] = t;
                    delete this[n]
                } catch (i) { }
            })
        },
        addClass: function (n) {
            var r, f, o, t, e, u, s;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string")
                for (r = n.split(h), f = 0, o = this.length; f < o; f++)
                    if (t = this[f], t.nodeType === 1)
                        if (t.className || r.length !== 1) {
                            for (e = " " + t.className + " ", u = 0, s = r.length; u < s; u++) ~e.indexOf(" " + r[u] + " ") || (e += r[u] + " ");
                            t.className = i.trim(e)
                        } else t.className = n;
            return this
        },
        removeClass: function (n) {
            var e, r, u, f, s, o, c;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string" || n === t)
                for (e = (n || "").split(h), o = 0, c = this.length; o < c; o++)
                    if (u = this[o], u.nodeType === 1 && u.className) {
                        for (r = (" " + u.className + " ").replace(lr, " "), f = 0, s = e.length; f < s; f++)
                            while (r.indexOf(" " + e[f] + " ") > -1) r = r.replace(" " + e[f] + " ", " ");
                        u.className = n ? i.trim(r) : ""
                    } return this
        },
        toggleClass: function (n, t) {
            var r = typeof n,
                u = typeof t == "boolean";
            return i.isFunction(n) ? this.each(function (r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function () {
                if (r === "string")
                    for (var f, s = 0, o = i(this), e = t, c = n.split(h); f = c[s++];) e = u ? e : !o.hasClass(f), o[e ? "addClass" : "removeClass"](f);
                else (r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function (n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(lr, " ").indexOf(i) > -1) return !0;
            return !1
        },
        val: function (n) {
            var r, u, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n), this.each(function (u) {
                var f, o = i(this);
                this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function (n) {
                    return n == null ? "" : n + ""
                })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
            })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t ? u : (u = f.value, typeof u == "string" ? u.replace(bf, "") : u == null ? "" : u)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function (n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function (n) {
                    var o, r, h, t, u = n.selectedIndex,
                        s = [],
                        f = n.options,
                        e = n.type === "select-one";
                    if (u < 0) return null;
                    for (r = e ? u : 0, h = e ? u + 1 : f.length; r < h; r++)
                        if (t = f[r], t.selected && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(), e) return o;
                            s.push(o)
                        } return e && !s.length && f.length ? i(f[u]).val() : s
                },
                set: function (n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function () {
                        this.selected = i.inArray(i(this).val(), r) >= 0
                    }), r.length || (n.selectedIndex = -1), r
                }
            }
        },
        attrFn: {},
        attr: function (n, r, u, f) {
            var e, o, h, c = n.nodeType;
            if (n && c !== 3 && c !== 8 && c !== 2) {
                if (f && i.isFunction(i.fn[r])) return i(n)[r](u);
                if (typeof n.getAttribute == "undefined") return i.prop(n, r, u);
                if (h = c !== 1 || !i.isXMLDoc(n), h && (r = r.toLowerCase(), o = i.attrHooks[r] || (ar.test(r) ? hr : s)), u !== t) {
                    if (u === null) {
                        i.removeAttr(n, r);
                        return
                    }
                    return o && "set" in o && h && (e = o.set(n, u, r)) !== t ? e : (n.setAttribute(r, "" + u), u)
                }
                return o && "get" in o && h && (e = o.get(n, r)) !== null ? e : (e = n.getAttribute(r), e === null ? t : e)
            }
        },
        removeAttr: function (n, t) {
            var u, f, r, e, o = 0;
            if (t && n.nodeType === 1)
                for (f = t.split(h); o < f.length; o++) r = f[o], r && (u = i.propFix[r] || r, e = ar.test(r), e || i.attr(n, r, ""), n.removeAttribute(vr ? r : u), e && u in n && (n[u] = !1))
        },
        attrHooks: {
            type: {
                set: function (n, t) {
                    if (kf.test(n.nodeName) && n.parentNode) i.error("type property can't be changed");
                    else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            },
            value: {
                get: function (n, t) {
                    return s && i.nodeName(n, "button") ? s.get(n, t) : t in n ? n.value : null
                },
                set: function (n, t, r) {
                    if (s && i.nodeName(n, "button")) return s.set(n, t, r);
                    n.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (n, r, u) {
            var e, f, s, o = n.nodeType;
            if (n && o !== 3 && o !== 8 && o !== 2) return s = o !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && (e = f.get(n, r)) !== null ? e : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function (n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : df.test(n.nodeName) || gf.test(n.nodeName) && n.href ? 0 : t
                }
            }
        }
    });
    hr = {
        get: function (n, r) {
            var u, f = i.prop(n, r);
            return f === !0 || typeof f != "boolean" && (u = n.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : t
        },
        set: function (n, t, r) {
            var u;
            return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r, u in n && (n[u] = !0), n.setAttribute(r, r.toLowerCase())), r
        }
    };
    vr || (cr = {
        name: !0,
        id: !0,
        coords: !0
    }, s = i.valHooks.button = {
        get: function (n, i) {
            var r;
            return r = n.getAttributeNode(i), r && (cr[i] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function (n, t, i) {
            var u = n.getAttributeNode(i);
            return u || (u = r.createAttribute(i), n.setAttributeNode(u)), u.value = t + ""
        }
    }, i.each(["width", "height"], function (n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {
            set: function (n, i) {
                if (i === "") return n.setAttribute(t, "auto"), i
            }
        })
    }), i.attrHooks.contenteditable = {
        get: s.get,
        set: function (n, t, i) {
            t === "" && (t = "false");
            s.set(n, t, i)
        }
    });
    i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function (n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function (n) {
                var i = n.getAttribute(r, 2);
                return i === null ? t : i
            }
        })
    });
    i.support.style || (i.attrHooks.style = {
        get: function (n) {
            return n.style.cssText.toLowerCase() || t
        },
        set: function (n, t) {
            return n.style.cssText = "" + t
        }
    });
    i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function (n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }));
    i.support.enctype || (i.propFix.enctype = "encoding");
    i.support.checkOn || i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = {
            get: function (n) {
                return n.getAttribute("value") === null ? "on" : n.value
            }
        }
    });
    i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function (n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        })
    });
    var bt = /^(?:textarea|input|select)$/i,
        yr = /^([^\.]*|)(?:\.(.+)|)$/,
        ne = /(?:^|\s)hover(\.\S+|)\b/,
        te = /^key/,
        ie = /^(?:mouse|contextmenu)|click/,
        pr = /^(?:focusinfocus|focusoutblur)$/,
        wr = function (n) {
            return i.event.special.hover ? n : n.replace(ne, "mouseenter$1 mouseleave$1")
        };
    i.event = {
        add: function (n, r, u, f, e) {
            var a, s, v, y, p, o, b, l, w, c, h;
            if (n.nodeType !== 3 && n.nodeType !== 8 && r && u && (a = i._data(n))) {
                for (u.handler && (w = u, u = w.handler, e = w.selector), u.guid || (u.guid = i.guid++), v = a.events, v || (a.events = v = {}), s = a.handle, s || (a.handle = s = function (n) {
                    return typeof i != "undefined" && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(s.elem, arguments) : t
                }, s.elem = n), r = i.trim(wr(r)).split(" "), y = 0; y < r.length; y++) p = yr.exec(r[y]) || [], o = p[1], b = (p[2] || "").split(".").sort(), h = i.event.special[o] || {}, o = (e ? h.delegateType : h.bindType) || o, h = i.event.special[o] || {}, l = i.extend({
                    type: o,
                    origType: p[1],
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    namespace: b.join(".")
                }, w), c = v[o], c || (c = v[o] = [], c.delegateCount = 0, h.setup && h.setup.call(n, f, b, s) !== !1 || (n.addEventListener ? n.addEventListener(o, s, !1) : n.attachEvent && n.attachEvent("on" + o, s))), h.add && (h.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, l) : c.push(l), i.event.global[o] = !0;
                n = null
            }
        },
        global: {},
        remove: function (n, t, r, u, f) {
            var l, p, e, w, h, b, a, v, c, o, s, y = i.hasData(n) && i._data(n);
            if (y && (v = y.events)) {
                for (t = i.trim(wr(t || "")).split(" "), l = 0; l < t.length; l++) {
                    if (p = yr.exec(t[l]) || [], e = w = p[1], h = p[2], !e) {
                        for (e in v) i.event.remove(n, e + t[l], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, o = v[e] || [], b = o.length, h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a = 0; a < o.length; a++) s = o[a], (f || w === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(a--, 1), s.selector && o.delegateCount-- , c.remove && c.remove.call(n, s));
                    o.length === 0 && b !== o.length && ((!c.teardown || c.teardown.call(n, h, y.handle) === !1) && i.removeEvent(n, e, y.handle), delete v[e])
                }
                i.isEmptyObject(v) && (delete y.handle, i.removeData(n, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (u, f, e, o) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var w, d, c, h, l, v, a, y, p, k, s = u.type || u,
                    b = [];
                if (pr.test(s + i.event.triggered)) return;
                if (s.indexOf("!") >= 0 && (s = s.slice(0, -1), d = !0), s.indexOf(".") >= 0 && (b = s.split("."), s = b.shift(), b.sort()), (!e || i.event.customEvent[s]) && !i.event.global[s]) return;
                if (u = typeof u == "object" ? u[i.expando] ? u : new i.Event(s, u) : new i.Event(s), u.type = s, u.isTrigger = !0, u.exclusive = d, u.namespace = b.join("."), u.namespace_re = u.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, v = s.indexOf(":") < 0 ? "on" + s : "", !e) {
                    w = i.cache;
                    for (c in w) w[c].events && w[c].events[s] && i.event.trigger(u, f, w[c].handle.elem, !0);
                    return
                }
                if (u.result = t, u.target || (u.target = e), f = f != null ? i.makeArray(f) : [], f.unshift(u), a = i.event.special[s] || {}, a.trigger && a.trigger.apply(e, f) === !1) return;
                if (p = [
                    [e, a.bindType || s]
                ], !o && !a.noBubble && !i.isWindow(e)) {
                    for (k = a.delegateType || s, h = pr.test(k + s) ? e : e.parentNode, l = e; h; h = h.parentNode) p.push([h, k]), l = h;
                    l === (e.ownerDocument || r) && p.push([l.defaultView || l.parentWindow || n, k])
                }
                for (c = 0; c < p.length && !u.isPropagationStopped(); c++) h = p[c][0], u.type = p[c][1], y = (i._data(h, "events") || {})[u.type] && i._data(h, "handle"), y && y.apply(h, f), y = v && h[v], y && i.acceptData(h) && y.apply(h, f) === !1 && u.preventDefault();
                return u.type = s, !o && !u.isDefaultPrevented() && (!a._default || a._default.apply(e.ownerDocument, f) === !1) && (s !== "click" || !i.nodeName(e, "a")) && i.acceptData(e) && v && e[s] && (s !== "focus" && s !== "blur" || u.target.offsetWidth !== 0) && !i.isWindow(e) && (l = e[v], l && (e[v] = null), i.event.triggered = s, e[s](), i.event.triggered = t, l && (e[v] = l)), u.result
            }
            return
        },
        dispatch: function (r) {
            r = i.event.fix(r || n.event);
            var f, h, e, c, l, o, a, u, s, v = (i._data(this, "events") || {})[r.type] || [],
                y = v.delegateCount,
                b = [].slice.call(arguments),
                k = !r.exclusive && !r.namespace,
                p = i.event.special[r.type] || {},
                w = [];
            if (b[0] = r, r.delegateTarget = this, !p.preDispatch || p.preDispatch.call(this, r) !== !1) {
                if (y && (!r.button || r.type !== "click"))
                    for (e = r.target; e != this; e = e.parentNode || this)
                        if (e.disabled !== !0 || r.type !== "click") {
                            for (l = {}, a = [], f = 0; f < y; f++) u = v[f], s = u.selector, l[s] === t && (l[s] = i(s, this).index(e) >= 0), l[s] && a.push(u);
                            a.length && w.push({
                                elem: e,
                                matches: a
                            })
                        } for (v.length > y && w.push({
                            elem: this,
                            matches: v.slice(y)
                        }), f = 0; f < w.length && !r.isPropagationStopped(); f++)
                    for (o = w[f], r.currentTarget = o.elem, h = 0; h < o.matches.length && !r.isImmediatePropagationStopped(); h++) u = o.matches[h], (k || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data, r.handleObj = u, c = ((i.event.special[u.origType] || {}).handle || u.handler).apply(o.elem, b), c !== t && (r.result = c, c === !1 && (r.preventDefault(), r.stopPropagation())));
                return p.postDispatch && p.postDispatch.call(this, r), r.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (n, i) {
                var o, u, f, e = i.button,
                    s = i.fromElement;
                return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || r, u = o.documentElement, f = o.body, n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0), n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)), !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s), !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0), n
            }
        },
        fix: function (n) {
            if (n[i.expando]) return n;
            var f, e, t = n,
                u = i.event.fixHooks[n.type] || {},
                o = u.props ? this.props.concat(u.props) : this.props;
            for (n = i.Event(t), f = o.length; f;) e = o[--f], n[e] = t[e];
            return n.target || (n.target = t.srcElement || r), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, u.filter ? u.filter(n, t) : n
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (n, t, r) {
                    i.isWindow(this) && (this.onbeforeunload = r)
                },
                teardown: function (n, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.event.handle = i.event.dispatch;
    i.removeEvent = r.removeEventListener ? function (n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    } : function (n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] == "undefined" && (n[r] = null), n.detachEvent(r, i))
    };
    i.Event = function (n, t) {
        if (this instanceof i.Event) n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? d : v) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0;
        else return new i.Event(n, t)
    };
    i.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = d;
            var n = this.originalEvent;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = d;
            var n = this.originalEvent;
            n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = d;
            this.stopPropagation()
        },
        isDefaultPrevented: v,
        isPropagationStopped: v,
        isImmediatePropagationStopped: v
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
                var f, e = this,
                    r = n.relatedTarget,
                    u = n.handleObj,
                    o = u.selector;
                return r && (r === e || i.contains(e, r)) || (n.type = u.origType, f = u.handler.apply(this, arguments), n.type = t), f
            }
        }
    });
    i.support.submitBubbles || (i.event.special.submit = {
        setup: function () {
            if (i.nodeName(this, "form")) return !1;
            i.event.add(this, "click._submit keypress._submit", function (n) {
                var u = n.target,
                    r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                r && !i._data(r, "_submit_attached") && (i.event.add(r, "submit._submit", function (n) {
                    n._submit_bubble = !0
                }), i._data(r, "_submit_attached", !0))
            })
        },
        postDispatch: function (n) {
            n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function () {
            if (i.nodeName(this, "form")) return !1;
            i.event.remove(this, "._submit")
        }
    });
    i.support.changeBubbles || (i.event.special.change = {
        setup: function () {
            if (bt.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function (n) {
                n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
            }), i.event.add(this, "click._change", function (n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1);
                i.event.simulate("change", this, n, !0)
            })), !1;
            i.event.add(this, "beforeactivate._change", function (n) {
                var t = n.target;
                bt.test(t.nodeName) && !i._data(t, "_change_attached") && (i.event.add(t, "change._change", function (n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }), i._data(t, "_change_attached", !0))
            })
        },
        handle: function (n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return i.event.remove(this, "._change"), !bt.test(this.nodeName)
        }
    });
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, t) {
        var u = 0,
            f = function (n) {
                i.event.simulate(t, n.target, i.event.fix(n), !0)
            };
        i.event.special[t] = {
            setup: function () {
                u++ == 0 && r.addEventListener(n, f, !0)
            },
            teardown: function () {
                --u == 0 && r.removeEventListener(n, f, !0)
            }
        }
    });
    i.fn.extend({
        on: function (n, r, u, f, e) {
            var o, s;
            if (typeof n == "object") {
                typeof r != "string" && (u = u || r, r = t);
                for (s in n) this.on(s, r, u, n[s], e);
                return this
            }
            if (u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = v;
            else if (!f) return this;
            return e === 1 && (o = f, f = function (n) {
                return i().off(n), o.apply(this, arguments)
            }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function () {
                i.event.add(this, n, f, u, r)
            })
        },
        one: function (n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function (n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
            if (typeof n == "object") {
                for (e in n) this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || typeof r == "function") && (u = r, r = t), u === !1 && (u = v), this.each(function () {
                i.event.remove(this, n, u, r)
            })
        },
        bind: function (n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function (n, t) {
            return this.off(n, null, t)
        },
        live: function (n, t, r) {
            return i(this.context).on(n, this.selector, t, r), this
        },
        die: function (n, t) {
            return i(this.context).off(n, this.selector || "**", t), this
        },
        delegate: function (n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function (n, t, i) {
            return arguments.length == 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        },
        trigger: function (n, t) {
            return this.each(function () {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function (n, t) {
            if (this[0]) return i.event.trigger(n, t, this[0], !0)
        },
        toggle: function (n) {
            var t = arguments,
                u = n.guid || i.guid++,
                r = 0,
                f = function (u) {
                    var f = (i._data(this, "lastToggle" + n.guid) || 0) % r;
                    return i._data(this, "lastToggle" + n.guid, f + 1), u.preventDefault(), t[f].apply(this, arguments) || !1
                };
            for (f.guid = u; r < t.length;) t[r++].guid = u;
            return this.click(f)
        },
        hover: function (n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (n, t) {
        i.fn[t] = function (n, i) {
            return i == null && (i = n, n = null), arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        };
        te.test(t) && (i.event.fixHooks[t] = i.event.keyHooks);
        ie.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
    }),
        function (n, t) {
            function r(n, t, i, r) {
                i = i || [];
                t = t || h;
                var e, u, o, f, c = t.nodeType;
                if (c !== 1 && c !== 9) return [];
                if (!n || typeof n != "string") return i;
                if (o = tt(t), !o && !r && (e = ai.exec(n)))
                    if (f = e[1]) {
                        if (c === 9) {
                            if (u = t.getElementById(f), !u || !u.parentNode) return i;
                            if (u.id === f) return i.push(u), i
                        } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && yt(t, u) && u.id === f) return i.push(u), i
                    } else {
                        if (e[2]) return p.apply(i, s.call(t.getElementsByTagName(n), 0)), i;
                        if ((f = e[3]) && ii && t.getElementsByClassName) return p.apply(i, s.call(t.getElementsByClassName(f), 0)), i
                    } return ut(n, t, i, r, o)
            }

            function w(n) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return i === "input" && t.type === n
                }
            }

            function ct(n) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return (i === "input" || i === "button") && t.type === n
                }
            }

            function d(n, t, i) {
                if (n === t) return i;
                for (var r = n.nextSibling; r;) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }

            function g(n, t, i, f) {
                var v, o, y, p, c, w, a, tt, b, k, d = !i && t !== h,
                    g = (d ? "<s>" : "") + n.replace(it, "$1<s>"),
                    nt = kt[e][g];
                if (nt) return f ? 0 : s.call(nt, 0);
                for (c = n, w = [], tt = 0, b = u.preFilter, k = u.filter; c;) {
                    (!v || (o = ci.exec(c))) && (o && (c = c.slice(o[0].length), y.selector = a), w.push(y = []), a = "", d && (c = " " + c));
                    v = !1;
                    (o = rt.exec(c)) && (a += o[0], c = c.slice(o[0].length), v = y.push({
                        part: o.pop().replace(it, " "),
                        string: o[0],
                        captures: o
                    }));
                    for (p in k) (o = l[p].exec(c)) && (!b[p] || (o = b[p](o, t, i))) && (a += o[0], c = c.slice(o[0].length), v = y.push({
                        part: p,
                        string: o.shift(),
                        captures: o
                    }));
                    if (!v) break
                }
                return a && (y.selector = a), f ? c.length : c ? r.error(n) : s.call(kt(g, w), 0)
            }

            function ri(n, t, i, r) {
                var u = t.dir,
                    f = wt++;
                return n || (n = function (n) {
                    return n === i
                }), t.first ? function (t) {
                    while (t = t[u])
                        if (t.nodeType === 1) return n(t) && t
                } : r ? function (t) {
                    while (t = t[u])
                        if (t.nodeType === 1 && n(t)) return t
                } : function (t) {
                    for (var i, r = f + "." + at, o = r + "." + vt; t = t[u];)
                        if (t.nodeType === 1) {
                            if ((i = t[e]) === o) return t.sizset;
                            if (typeof i == "string" && i.indexOf(r) === 0) {
                                if (t.sizset) return t
                            } else {
                                if (t[e] = o, n(t)) return t.sizset = !0, t;
                                t.sizset = !1
                            }
                        }
                }
            }

            function ui(n, t) {
                return n ? function (i) {
                    var r = t(i);
                    return r && n(r === !0 ? i : r)
                } : t
            }

            function fi(n, t, i) {
                for (var r, f, e = 0; r = n[e]; e++) f = u.relative[r.part] ? ri(f, u.relative[r.part], t, i) : ui(f, u.filter[r.part].apply(null, r.captures.concat(t, i)));
                return f
            }

            function ei(n) {
                return function (t) {
                    for (var i, r = 0; i = n[r]; r++)
                        if (i(t)) return !0;
                    return !1
                }
            }

            function lt(n, t, i, u) {
                for (var f = 0, e = t.length; f < e; f++) r(n, t[f], i, u)
            }

            function oi(n, t, i, f, e, o) {
                var s, h = u.setFilters[t.toLowerCase()];
                return h || r.error(t), (n || !(s = e)) && lt(n || "*", f, s = [], e), s.length > 0 ? h(s, i, o) : []
            }

            function si(n, i, u, e) {
                for (var w, o, a, tt, b, v, c, s, h, k, d, g, it, nt = 0, ut = n.length, y = l.POS, ft = new RegExp("^" + y.source + "(?!" + f + ")", "i"), et = function () {
                    for (var n = 1, i = arguments.length - 2; n < i; n++) arguments[n] === t && (h[n] = t)
                }; nt < ut; nt++) {
                    for (w = n[nt], o = "", s = e, a = 0, tt = w.length; a < tt; a++) {
                        if (b = w[a], v = b.string, b.part === "PSEUDO")
                            for (y.exec(""), c = 0; h = y.exec(v);) k = !0, d = y.lastIndex = h.index + h[0].length, d > c && (o += v.slice(c, h.index), c = d, g = [i], rt.test(o) && (s && (g = s), s = e), (it = vi.test(o)) && (o = o.slice(0, -5).replace(rt, "$&*"), c++), h.length > 1 && h[0].replace(ft, et), s = oi(o, h[1], h[2], g, s, it)), o = "";
                        k || (o += v);
                        k = !1
                    }
                    o ? rt.test(o) ? lt(o, s || [i], u, e) : r(o, i, u, e ? e.concat(s) : s) : p.apply(u, s)
                }
                return ut === 1 ? u : r.uniqueSort(u)
            }

            function ut(n, t, i, r, f) {
                n = n.replace(it, "$1");
                var e, b, k, o, h, c, a, d, v, w = g(n, t, f),
                    nt = t.nodeType;
                if (l.POS.test(n)) return si(w, t, i, r);
                if (r) e = s.call(r, 0);
                else if (w.length === 1) {
                    if ((h = s.call(w[0], 0)).length > 2 && (c = h[0]).part === "ID" && nt === 9 && !f && u.relative[h[1].part]) {
                        if (t = u.find.ID(c.captures[0].replace(y, ""), t, f)[0], !t) return i;
                        n = n.slice(h.shift().string.length)
                    }
                    for (d = (w = ht.exec(h[0].string)) && !w.index && t.parentNode || t, a = "", o = h.length - 1; o >= 0; o--) {
                        if (c = h[o], v = c.part, a = c.string + a, u.relative[v]) break;
                        if (u.order.test(v)) {
                            if (e = u.find[v](c.captures[0].replace(y, ""), d, f), e == null) continue;
                            n = n.slice(0, n.length - a.length) + a.replace(l[v], "");
                            n || p.apply(i, s.call(e, 0));
                            break
                        }
                    }
                }
                if (n)
                    for (b = et(n, t, f), at = b.dirruns++ , e == null && (e = u.find.TAG("*", ht.test(n) && t.parentNode || t)), o = 0; k = e[o]; o++) vt = b.runs++ , b(k) && i.push(k);
                return i
            }
            var at, vt, ft, u, nt, tt, yt, et, ot, b, pt = !0,
                c = "undefined",
                e = ("sizcache" + Math.random()).replace(".", ""),
                h = n.document,
                o = h.documentElement,
                wt = 0,
                s = [].slice,
                p = [].push,
                k = function (n, t) {
                    return n[e] = t || !0, n
                },
                st = function () {
                    var n = {},
                        t = [];
                    return k(function (i, r) {
                        return t.push(i) > u.cacheLength && delete n[t.shift()], n[i] = r
                    }, n)
                },
                bt = st(),
                kt = st(),
                dt = st(),
                f = "[\\x20\\t\\r\\n\\f]",
                v = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                hi = v.replace("w", "w#"),
                gt = "\\[" + f + "*(" + v + ")" + f + "*(?:([*^$|!~]?=)" + f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + hi + ")|)|)" + f + "*\\]",
                ni = ":(" + v + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + gt + ")|[^:]|\\\\.)*|.*))\\)|)",
                ti = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",
                it = new RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$", "g"),
                ci = new RegExp("^" + f + "*," + f + "*"),
                rt = new RegExp("^" + f + "*([\\x20\\t\\r\\n\\f>+~])" + f + "*"),
                li = new RegExp(ni),
                ai = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                ht = /[\x20\t\r\n\f]*[+~]/,
                vi = /:not\($/,
                yi = /h\d/i,
                pi = /input|select|textarea|button/i,
                y = /\\(?!\\)/g,
                l = {
                    ID: new RegExp("^#(" + v + ")"),
                    CLASS: new RegExp("^\\.(" + v + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + v + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + v.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + gt),
                    PSEUDO: new RegExp("^" + ni),
                    CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)", "i"),
                    POS: new RegExp(ti, "ig"),
                    needsContext: new RegExp("^" + f + "*[>+~]|" + ti, "i")
                },
                a = function (n) {
                    var t = h.createElement("div");
                    try {
                        return n(t)
                    } catch (i) {
                        return !1
                    } finally {
                        t = null
                    }
                },
                wi = a(function (n) {
                    return n.appendChild(h.createComment("")), !n.getElementsByTagName("*").length
                }),
                bi = a(function (n) {
                    return n.innerHTML = "<a href='#'><\/a>", n.firstChild && typeof n.firstChild.getAttribute !== c && n.firstChild.getAttribute("href") === "#"
                }),
                ki = a(function (n) {
                    n.innerHTML = "<select><\/select>";
                    var t = typeof n.lastChild.getAttribute("multiple");
                    return t !== "boolean" && t !== "string"
                }),
                ii = a(function (n) {
                    return n.innerHTML = "<div class='hidden e'><\/div><div class='hidden'><\/div>", !n.getElementsByClassName || !n.getElementsByClassName("e").length ? !1 : (n.lastChild.className = "e", n.getElementsByClassName("e").length === 2)
                }),
                di = a(function (n) {
                    n.id = e + 0;
                    n.innerHTML = "<a name='" + e + "'><\/a><div name='" + e + "'><\/div>";
                    o.insertBefore(n, o.firstChild);
                    var t = h.getElementsByName && h.getElementsByName(e).length === 2 + h.getElementsByName(e + 0).length;
                    return ft = !h.getElementById(e), o.removeChild(n), t
                });
            try {
                s.call(o.childNodes, 0)[0].nodeType
            } catch (gi) {
                s = function (n) {
                    for (var t, i = []; t = this[n]; n++) i.push(t);
                    return i
                }
            }
            r.matches = function (n, t) {
                return r(n, null, null, t)
            };
            r.matchesSelector = function (n, t) {
                return r(t, null, null, [n]).length > 0
            };
            nt = r.getText = function (n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (t === 1 || t === 9 || t === 11) {
                        if (typeof n.textContent == "string") return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += nt(n)
                    } else if (t === 3 || t === 4) return n.nodeValue
                } else
                    for (; r = n[u]; u++) i += nt(r);
                return i
            };
            tt = r.isXML = function (n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            };
            yt = r.contains = o.contains ? function (n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && r.contains && r.contains(i))
            } : o.compareDocumentPosition ? function (n, t) {
                return t && !!(n.compareDocumentPosition(t) & 16)
            } : function (n, t) {
                while (t = t.parentNode)
                    if (t === n) return !0;
                return !1
            };
            r.attr = function (n, t) {
                var i, r = tt(n);
                return r || (t = t.toLowerCase()), u.attrHandle[t] ? u.attrHandle[t](n) : ki || r ? n.getAttribute(t) : (i = n.getAttributeNode(t), i ? typeof n[t] == "boolean" ? n[t] ? t : null : i.specified ? i.value : null : null)
            };
            u = r.selectors = {
                cacheLength: 50,
                createPseudo: k,
                match: l,
                order: new RegExp("ID|TAG" + (di ? "|NAME" : "") + (ii ? "|CLASS" : "")),
                attrHandle: bi ? {} : {
                    href: function (n) {
                        return n.getAttribute("href", 2)
                    },
                    type: function (n) {
                        return n.getAttribute("type")
                    }
                },
                find: {
                    ID: ft ? function (n, t, i) {
                        if (typeof t.getElementById !== c && !i) {
                            var r = t.getElementById(n);
                            return r && r.parentNode ? [r] : []
                        }
                    } : function (n, i, r) {
                        if (typeof i.getElementById !== c && !r) {
                            var u = i.getElementById(n);
                            return u ? u.id === n || typeof u.getAttributeNode !== c && u.getAttributeNode("id").value === n ? [u] : t : []
                        }
                    },
                    TAG: wi ? function (n, t) {
                        if (typeof t.getElementsByTagName !== c) return t.getElementsByTagName(n)
                    } : function (n, t) {
                        var f = t.getElementsByTagName(n),
                            i, r, u;
                        if (n === "*") {
                            for (r = [], u = 0; i = f[u]; u++) i.nodeType === 1 && r.push(i);
                            return r
                        }
                        return f
                    },
                    NAME: function (n, t) {
                        if (typeof t.getElementsByName !== c) return t.getElementsByName(name)
                    },
                    CLASS: function (n, t, i) {
                        if (typeof t.getElementsByClassName !== c && !i) return t.getElementsByClassName(n)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (n) {
                        return n[1] = n[1].replace(y, ""), n[3] = (n[4] || n[5] || "").replace(y, ""), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function (n) {
                        return n[1] = n[1].toLowerCase(), n[1] === "nth" ? (n[2] || r.error(n[0]), n[3] = +(n[3] ? n[4] + (n[5] || 1) : 2 * (n[2] === "even" || n[2] === "odd")), n[4] = +(n[6] + n[7] || n[2] === "odd")) : n[2] && r.error(n[0]), n
                    },
                    PSEUDO: function (n, t, i) {
                        var r, u;
                        return l.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[3] : (r = n[4]) && (li.test(r) && (u = g(r, t, i, !0)) && (u = r.indexOf(")", r.length - u) - r.length) && (r = r.slice(0, u), n[0] = n[0].slice(0, u)), n[2] = r), n.slice(0, 3))
                    }
                },
                filter: {
                    ID: ft ? function (n) {
                        return n = n.replace(y, ""),
                            function (t) {
                                return t.getAttribute("id") === n
                            }
                    } : function (n) {
                        return n = n.replace(y, ""),
                            function (t) {
                                var i = typeof t.getAttributeNode !== c && t.getAttributeNode("id");
                                return i && i.value === n
                            }
                    },
                    TAG: function (n) {
                        return n === "*" ? function () {
                            return !0
                        } : (n = n.replace(y, "").toLowerCase(), function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === n
                        })
                    },
                    CLASS: function (n) {
                        var t = bt[e][n];
                        return t || (t = bt(n, new RegExp("(^|" + f + ")" + n + "(" + f + "|$)"))),
                            function (n) {
                                return t.test(n.className || typeof n.getAttribute !== c && n.getAttribute("class") || "")
                            }
                    },
                    ATTR: function (n, t, i) {
                        return t ? function (u) {
                            var e = r.attr(u, n),
                                f = e + "";
                            if (e == null) return t === "!=";
                            switch (t) {
                                case "=":
                                    return f === i;
                                case "!=":
                                    return f !== i;
                                case "^=":
                                    return i && f.indexOf(i) === 0;
                                case "*=":
                                    return i && f.indexOf(i) > -1;
                                case "$=":
                                    return i && f.substr(f.length - i.length) === i;
                                case "~=":
                                    return (" " + f + " ").indexOf(i) > -1;
                                case "|=":
                                    return f === i || f.substr(0, i.length + 1) === i + "-"
                            }
                        } : function (t) {
                            return r.attr(t, n) != null
                        }
                    },
                    CHILD: function (n, t, i, r) {
                        if (n === "nth") {
                            var u = wt++;
                            return function (n) {
                                var f, o, s = 0,
                                    t = n;
                                if (i === 1 && r === 0) return !0;
                                if (f = n.parentNode, f && (f[e] !== u || !n.sizset)) {
                                    for (t = f.firstChild; t; t = t.nextSibling)
                                        if (t.nodeType === 1 && (t.sizset = ++s, t === n)) break;
                                    f[e] = u
                                }
                                return o = n.sizset - r, i === 0 ? o === 0 : o % i == 0 && o / i >= 0
                            }
                        }
                        return function (t) {
                            var i = t;
                            switch (n) {
                                case "only":
                                case "first":
                                    while (i = i.previousSibling)
                                        if (i.nodeType === 1) return !1;
                                    if (n === "first") return !0;
                                    i = t;
                                case "last":
                                    while (i = i.nextSibling)
                                        if (i.nodeType === 1) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function (n, t, i, f) {
                        var s, o = u.pseudos[n] || u.pseudos[n.toLowerCase()];
                        return o || r.error("unsupported pseudo: " + n), o[e] ? o(t, i, f) : o.length > 1 ? (s = [n, n, "", t], function (n) {
                            return o(n, 0, s)
                        }) : o
                    }
                },
                pseudos: {
                    not: k(function (n, t, i) {
                        var r = et(n.replace(it, "$1"), t, i);
                        return function (n) {
                            return !r(n)
                        }
                    }),
                    enabled: function (n) {
                        return n.disabled === !1
                    },
                    disabled: function (n) {
                        return n.disabled === !0
                    },
                    checked: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return t === "input" && !!n.checked || t === "option" && !!n.selected
                    },
                    selected: function (n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                    },
                    parent: function (n) {
                        return !u.pseudos.empty(n)
                    },
                    empty: function (n) {
                        var t;
                        for (n = n.firstChild; n;) {
                            if (n.nodeName > "@" || (t = n.nodeType) === 3 || t === 4) return !1;
                            n = n.nextSibling
                        }
                        return !0
                    },
                    contains: k(function (n) {
                        return function (t) {
                            return (t.textContent || t.innerText || nt(t)).indexOf(n) > -1
                        }
                    }),
                    has: k(function (n) {
                        return function (t) {
                            return r(n, t).length > 0
                        }
                    }),
                    header: function (n) {
                        return yi.test(n.nodeName)
                    },
                    text: function (n) {
                        var t, i;
                        return n.nodeName.toLowerCase() === "input" && (t = n.type) === "text" && ((i = n.getAttribute("type")) == null || i.toLowerCase() === t)
                    },
                    radio: w("radio"),
                    checkbox: w("checkbox"),
                    file: w("file"),
                    password: w("password"),
                    image: w("image"),
                    submit: ct("submit"),
                    reset: ct("reset"),
                    button: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return t === "input" && n.type === "button" || t === "button"
                    },
                    input: function (n) {
                        return pi.test(n.nodeName)
                    },
                    focus: function (n) {
                        var t = n.ownerDocument;
                        return n === t.activeElement && (!t.hasFocus || t.hasFocus()) && (!!n.type || !!n.href)
                    },
                    active: function (n) {
                        return n === n.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (n, t, i) {
                        return i ? n.slice(1) : [n[0]]
                    },
                    last: function (n, t, i) {
                        var r = n.pop();
                        return i ? n : [r]
                    },
                    even: function (n, t, i) {
                        for (var u = [], r = i ? 1 : 0, f = n.length; r < f; r = r + 2) u.push(n[r]);
                        return u
                    },
                    odd: function (n, t, i) {
                        for (var u = [], r = i ? 0 : 1, f = n.length; r < f; r = r + 2) u.push(n[r]);
                        return u
                    },
                    lt: function (n, t, i) {
                        return i ? n.slice(+t) : n.slice(0, +t)
                    },
                    gt: function (n, t, i) {
                        return i ? n.slice(0, +t + 1) : n.slice(+t + 1)
                    },
                    eq: function (n, t, i) {
                        var r = n.splice(+t, 1);
                        return i ? n : r
                    }
                }
            };
            ot = o.compareDocumentPosition ? function (n, t) {
                return n === t ? (b = !0, 0) : (!n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition : n.compareDocumentPosition(t) & 4) ? -1 : 1
            } : function (n, t) {
                var i;
                if (n === t) return b = !0, 0;
                if (n.sourceIndex && t.sourceIndex) return n.sourceIndex - t.sourceIndex;
                var e, h, u = [],
                    f = [],
                    o = n.parentNode,
                    s = t.parentNode,
                    r = o;
                if (o === s) return d(n, t);
                if (!o) return -1;
                if (!s) return 1;
                while (r) u.unshift(r), r = r.parentNode;
                for (r = s; r;) f.unshift(r), r = r.parentNode;
                for (e = u.length, h = f.length, i = 0; i < e && i < h; i++)
                    if (u[i] !== f[i]) return d(u[i], f[i]);
                return i === e ? d(n, f[i], -1) : d(u[i], t, 1)
            };
            [0, 0].sort(ot);
            pt = !b;
            r.uniqueSort = function (n) {
                var i, t = 1;
                if (b = pt, n.sort(ot), b)
                    for (; i = n[t]; t++) i === n[t - 1] && n.splice(t--, 1);
                return n
            };
            r.error = function (n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            };
            et = r.compile = function (n, t, i) {
                var u, f, o, r = dt[e][n];
                if (r && r.context === t) return r;
                for (u = g(n, t, i), f = 0, o = u.length; f < o; f++) u[f] = fi(u[f], t, i);
                return r = dt(n, ei(u)), r.context = t, r.runs = r.dirruns = 0, r
            };
            h.querySelectorAll && function () {
                var u, h = ut,
                    c = /'|\\/g,
                    v = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    n = [],
                    t = [":active"],
                    i = o.matchesSelector || o.mozMatchesSelector || o.webkitMatchesSelector || o.oMatchesSelector || o.msMatchesSelector;
                a(function (t) {
                    t.innerHTML = "<select><option selected=''><\/option><\/select>";
                    t.querySelectorAll("[selected]").length || n.push("\\[" + f + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                    t.querySelectorAll(":checked").length || n.push(":checked")
                });
                a(function (t) {
                    t.innerHTML = "<p test=''><\/p>";
                    t.querySelectorAll("[test^='']").length && n.push("[*^$]=" + f + "*(?:\"\"|'')");
                    t.innerHTML = "<input type='hidden'/>";
                    t.querySelectorAll(":enabled").length || n.push(":enabled", ":disabled")
                });
                n = n.length && new RegExp(n.join("|"));
                ut = function (t, i, r, u, f) {
                    if (!u && !f && (!n || !n.test(t)))
                        if (i.nodeType === 9) try {
                            return p.apply(r, s.call(i.querySelectorAll(t), 0)), r
                        } catch (b) { } else if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                            var l, a, y, v = i.getAttribute("id"),
                                o = v || e,
                                w = ht.test(t) && i.parentNode || i;
                            for (v ? o = o.replace(c, "\\$&") : i.setAttribute("id", o), l = g(t, i, f), o = "[id='" + o + "']", a = 0, y = l.length; a < y; a++) l[a] = o + l[a].selector;
                            try {
                                return p.apply(r, s.call(w.querySelectorAll(l.join(",")), 0)), r
                            } catch (b) { } finally {
                                v || i.removeAttribute("id")
                            }
                        } return h(t, i, r, u, f)
                };
                i && (a(function (n) {
                    u = i.call(n, "div");
                    try {
                        i.call(n, "[test!='']:sizzle");
                        t.push(l.PSEUDO.source, l.POS.source, "!=")
                    } catch (r) { }
                }), t = new RegExp(t.join("|")), r.matchesSelector = function (f, e) {
                    if (e = e.replace(v, "='$1']"), !tt(f) && !t.test(e) && (!n || !n.test(e))) try {
                        var o = i.call(f, e);
                        if (o || u || f.document && f.document.nodeType !== 11) return o
                    } catch (s) { }
                    return r(e, null, null, [f]).length > 0
                })
            }();
            u.setFilters.nth = u.setFilters.eq;
            u.filters = u.pseudos;
            r.attr = i.attr;
            i.find = r;
            i.expr = r.selectors;
            i.expr[":"] = i.expr.pseudos;
            i.unique = r.uniqueSort;
            i.text = r.getText;
            i.isXMLDoc = r.isXML;
            i.contains = r.contains
        }(n);
    var re = /Until$/,
        ue = /^(?:parents|prev(?:Until|All))/,
        fe = /^.[^:#\[\.,]*$/,
        br = i.expr.match.needsContext,
        ee = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    i.fn.extend({
        find: function (n) {
            var t, f, o, u, e, r, s = this;
            if (typeof n != "string") return i(n).filter(function () {
                for (t = 0, f = s.length; t < f; t++)
                    if (i.contains(s[t], this)) return !0
            });
            for (r = this.pushStack("", "find", n), t = 0, f = this.length; t < f; t++)
                if (o = r.length, i.find(n, this[t], r), t > 0)
                    for (u = o; u < r.length; u++)
                        for (e = 0; e < o; e++)
                            if (r[e] === r[u]) {
                                r.splice(u--, 1);
                                break
                            } return r
        },
        has: function (n) {
            var t, r = i(n, this),
                u = r.length;
            return this.filter(function () {
                for (t = 0; t < u; t++)
                    if (i.contains(this, r[t])) return !0
            })
        },
        not: function (n) {
            return this.pushStack(ei(this, n, !1), "not", n)
        },
        filter: function (n) {
            return this.pushStack(ei(this, n, !0), "filter", n)
        },
        is: function (n) {
            return !!n && (typeof n == "string" ? br.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function (n, t) {
            for (var r, f = 0, o = this.length, u = [], e = br.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                for (r = this[f]; r && r.ownerDocument && r !== t && r.nodeType !== 11;) {
                    if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
                        u.push(r);
                        break
                    }
                    r = r.parentNode
                }
            return u = u.length > 1 ? i.unique(u) : u, this.pushStack(u, "closest", n)
        },
        index: function (n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (n, t) {
            var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                r = i.merge(this.get(), u);
            return this.pushStack(b(u[0]) || b(r[0]) ? r : i.unique(r))
        },
        addBack: function (n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.fn.andSelf = i.fn.addBack;
    i.each({
        parent: function (n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function (n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function (n) {
            return fi(n, "nextSibling")
        },
        prev: function (n) {
            return fi(n, "previousSibling")
        },
        nextAll: function (n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function (n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function (n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function (n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function (n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function (n) {
            return i.sibling(n.firstChild)
        },
        contents: function (n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function (n, t) {
        i.fn[n] = function (r, u) {
            var f = i.map(this, t, r);
            return re.test(n) || (u = r), u && typeof u == "string" && (f = i.filter(u, f)), f = this.length > 1 && !ee[n] ? i.unique(f) : f, this.length > 1 && ue.test(n) && (f = f.reverse()), this.pushStack(f, n, o.call(arguments).join(","))
        }
    });
    i.extend({
        filter: function (n, t, r) {
            return r && (n = ":not(" + n + ")"), t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
        },
        dir: function (n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u));) f.nodeType === 1 && e.push(f), f = f[r];
            return e
        },
        sibling: function (n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    var kr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        oe = / jQuery\d+="(?:null|\d+)"/g,
        kt = /^\s+/,
        dr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        gr = /<([\w:]+)/,
        se = /<tbody/i,
        he = /<|&#?\w+;/,
        ce = /<(?:script|style|link)/i,
        le = /<(?:script|object|embed|option|style)/i,
        dt = new RegExp("<(?:" + kr + ")[\\s/>]", "i"),
        nu = /^(?:checkbox|radio)$/,
        tu = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ae = /\/(java|ecma)script/i,
        ve = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        e = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            legend: [1, "<fieldset>", "<\/fieldset>"],
            thead: [1, "<table>", "<\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
            area: [1, "<map>", "<\/map>"],
            _default: [0, "", ""]
        },
        iu = oi(r),
        gt = iu.appendChild(r.createElement("div"));
    e.optgroup = e.option;
    e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
    e.th = e.td;
    i.support.htmlSerialize || (e._default = [1, "X<div>", "<\/div>"]);
    i.fn.extend({
        text: function (n) {
            return i.access(this, function (n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
            }, null, n, arguments.length)
        },
        wrapAll: function (n) {
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function () {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function (n) {
            return i.isFunction(n) ? this.each(function (t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function () {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function (n) {
            var t = i.isFunction(n);
            return this.each(function (r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (n) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(n)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (n) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(n, this.firstChild)
            })
        },
        before: function () {
            if (!b(this[0])) return this.domManip(arguments, !1, function (n) {
                this.parentNode.insertBefore(n, this)
            });
            if (arguments.length) {
                var n = i.clean(arguments);
                return this.pushStack(i.merge(n, this), "before", this.selector)
            }
        },
        after: function () {
            if (!b(this[0])) return this.domManip(arguments, !1, function (n) {
                this.parentNode.insertBefore(n, this.nextSibling)
            });
            if (arguments.length) {
                var n = i.clean(arguments);
                return this.pushStack(i.merge(this, n), "after", this.selector)
            }
        },
        remove: function (n, t) {
            for (var r, u = 0;
                (r = this[u]) != null; u++)(!n || i.filter(n, [r]).length) && (t || r.nodeType !== 1 || (i.cleanData(r.getElementsByTagName("*")), i.cleanData([r])), r.parentNode && r.parentNode.removeChild(r));
            return this
        },
        empty: function () {
            for (var n, t = 0;
                (n = this[t]) != null; t++)
                for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild;) n.removeChild(n.firstChild);
            return this
        },
        clone: function (n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function () {
                return i.clone(this, n, t)
            })
        },
        html: function (n) {
            return i.access(this, function (n) {
                var r = this[0] || {},
                    u = 0,
                    f = this.length;
                if (n === t) return r.nodeType === 1 ? r.innerHTML.replace(oe, "") : t;
                if (typeof n == "string" && !ce.test(n) && (i.support.htmlSerialize || !dt.test(n)) && (i.support.leadingWhitespace || !kt.test(n)) && !e[(gr.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(dr, "<$1><\/$2>");
                    try {
                        for (; u < f; u++) r = this[u] || {}, r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), r.innerHTML = n);
                        r = 0
                    } catch (o) { }
                }
                r && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function (n) {
            return b(this[0]) ? this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this : i.isFunction(n) ? this.each(function (t) {
                var r = i(this),
                    u = r.html();
                r.replaceWith(n.call(this, t, u))
            }) : (typeof n != "string" && (n = i(n).detach()), this.each(function () {
                var t = this.nextSibling,
                    r = this.parentNode;
                i(this).remove();
                t ? i(t).before(n) : i(r).append(n)
            }))
        },
        detach: function (n) {
            return this.remove(n, !0)
        },
        domManip: function (n, r, u) {
            n = [].concat.apply([], n);
            var h, o, f, a, e = 0,
                s = n[0],
                c = [],
                l = this.length;
            if (!i.support.checkClone && l > 1 && typeof s == "string" && tu.test(s)) return this.each(function () {
                i(this).domManip(n, r, u)
            });
            if (i.isFunction(s)) return this.each(function (f) {
                var e = i(this);
                n[0] = s.call(this, f, r ? e.html() : t);
                e.domManip(n, r, u)
            });
            if (this[0]) {
                if (h = i.buildFragment(n, this, c), f = h.fragment, o = f.firstChild, f.childNodes.length === 1 && (f = o), o)
                    for (r = r && i.nodeName(o, "tr"), a = h.cacheable || l - 1; e < l; e++) u.call(r && i.nodeName(this[e], "table") ? pu(this[e], "tbody") : this[e], e === a ? f : i.clone(f, !0, !0));
                f = o = null;
                c.length && i.each(c, function (n, t) {
                    t.src ? i.ajax ? i.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    }) : i.error("no ajax") : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ve, ""));
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    });
    i.buildFragment = function (n, u, f) {
        var o, s, h, e = n[0];
        return u = u || r, u = !u.nodeType && u[0] || u, u = u.ownerDocument || u, n.length === 1 && typeof e == "string" && e.length < 512 && u === r && e.charAt(0) === "<" && !le.test(e) && (i.support.checkClone || !tu.test(e)) && (i.support.html5Clone || !dt.test(e)) && (s = !0, o = i.fragments[e], h = o !== t), o || (o = u.createDocumentFragment(), i.clean(n, u, o, f), s && (i.fragments[e] = h && o)), {
            fragment: o,
            cacheable: s
        }
    };
    i.fragments = {};
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (n, t) {
        i.fn[n] = function (r) {
            var o, u = 0,
                s = [],
                f = i(r),
                h = f.length,
                e = this.length === 1 && this[0].parentNode;
            if ((e == null || e && e.nodeType === 11 && e.childNodes.length === 1) && h === 1) return f[t](this[0]), this;
            for (; u < h; u++) o = (u > 0 ? this.clone(!0) : this).get(), i(f[u])[t](o), s = s.concat(o);
            return this.pushStack(s, n, f.selector)
        }
    });
    i.extend({
        clone: function (n, t, r) {
            var f, o, u, e;
            if (i.support.html5Clone || i.isXMLDoc(n) || !dt.test("<" + n.nodeName + ">") ? e = n.cloneNode(!0) : (gt.innerHTML = n.outerHTML, gt.removeChild(e = gt.firstChild)), (!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (hi(n, e), f = g(n), o = g(e), u = 0; f[u]; ++u) o[u] && hi(f[u], o[u]);
            if (t && (si(n, e), r))
                for (f = g(n), o = g(e), u = 0; f[u]; ++u) si(f[u], o[u]);
            return f = o = null, e
        },
        clean: function (n, t, u, f) {
            var h, c, o, p, v, d, s, w, a, b, k, y = t === r && iu,
                l = [];
            for (t && typeof t.createDocumentFragment != "undefined" || (t = r), h = 0;
                (o = n[h]) != null; h++)
                if (typeof o == "number" && (o += ""), o) {
                    if (typeof o == "string")
                        if (he.test(o)) {
                            for (y = y || oi(t), s = t.createElement("div"), y.appendChild(s), o = o.replace(dr, "<$1><\/$2>"), p = (gr.exec(o) || ["", ""])[1].toLowerCase(), v = e[p] || e._default, d = v[0], s.innerHTML = v[1] + o + v[2]; d--;) s = s.lastChild;
                            if (!i.support.tbody)
                                for (w = se.test(o), a = p === "table" && !w ? s.firstChild && s.firstChild.childNodes : v[1] === "<table>" && !w ? s.childNodes : [], c = a.length - 1; c >= 0; --c) i.nodeName(a[c], "tbody") && !a[c].childNodes.length && a[c].parentNode.removeChild(a[c]);
                            !i.support.leadingWhitespace && kt.test(o) && s.insertBefore(t.createTextNode(kt.exec(o)[0]), s.firstChild);
                            o = s.childNodes;
                            s.parentNode.removeChild(s)
                        } else o = t.createTextNode(o);
                    o.nodeType ? l.push(o) : i.merge(l, o)
                } if (s && (o = s = y = null), !i.support.appendChecked)
                for (h = 0;
                    (o = l[h]) != null; h++) i.nodeName(o, "input") ? ci(o) : typeof o.getElementsByTagName != "undefined" && i.grep(o.getElementsByTagName("input"), ci);
            if (u)
                for (b = function (n) {
                    if (!n.type || ae.test(n.type)) return f ? f.push(n.parentNode ? n.parentNode.removeChild(n) : n) : u.appendChild(n)
                }, h = 0;
                    (o = l[h]) != null; h++) i.nodeName(o, "script") && b(o) || (u.appendChild(o), typeof o.getElementsByTagName != "undefined" && (k = i.grep(i.merge([], o.getElementsByTagName("script")), b), l.splice.apply(l, [h + 1, 0].concat(k)), h += k.length));
            return l
        },
        cleanData: function (n, t) {
            for (var f, u, r, e, h = 0, o = i.expando, s = i.cache, c = i.support.deleteExpando, l = i.event.special;
                (r = n[h]) != null; h++)
                if ((t || i.acceptData(r)) && (u = r[o], f = u && s[u], f)) {
                    if (f.events)
                        for (e in f.events) l[e] ? i.event.remove(r, e) : i.removeEvent(r, e, f.handle);
                    s[u] && (delete s[u], c ? delete r[o] : r.removeAttribute ? r.removeAttribute(o) : r[o] = null, i.deletedIds.push(u))
                }
        }
    }),
        function () {
            var t, n;
            i.uaMatch = function (n) {
                n = n.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            };
            t = i.uaMatch(rf.userAgent);
            n = {};
            t.browser && (n[t.browser] = !0, n.version = t.version);
            n.chrome ? n.webkit = !0 : n.webkit && (n.safari = !0);
            i.browser = n;
            i.sub = function () {
                function n(t, i) {
                    return new n.fn.init(t, i)
                }
                i.extend(!0, n, this);
                n.superclass = this;
                n.fn = n.prototype = this();
                n.fn.constructor = n;
                n.sub = this.sub;
                n.fn.init = function (r, u) {
                    return u && u instanceof i && !(u instanceof n) && (u = n(u)), i.fn.init.call(this, r, u, t)
                };
                n.fn.init.prototype = n.fn;
                var t = n(r);
                return n
            }
        }();
    var u, y, p, ni = /alpha\([^)]*\)/i,
        ye = /opacity=([^)]*)/,
        pe = /^(top|right|bottom|left)$/,
        we = /^(none|table(?!-c[ea]).+)/,
        ru = /^margin/,
        be = new RegExp("^(" + ut + ")(.*)$", "i"),
        et = new RegExp("^(" + ut + ")(?!px)[a-z%]+$", "i"),
        ke = new RegExp("^([-+])=(" + ut + ")", "i"),
        ti = {},
        de = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        uu = {
            letterSpacing: 0,
            fontWeight: 400
        },
        c = ["Top", "Right", "Bottom", "Left"],
        fu = ["Webkit", "O", "Moz", "ms"],
        ge = i.fn.toggle;
    i.fn.extend({
        css: function (n, r) {
            return i.access(this, function (n, r, u) {
                return u !== t ? i.style(n, r, u) : i.css(n, r)
            }, n, r, arguments.length > 1)
        },
        show: function () {
            return ai(this, !0)
        },
        hide: function () {
            return ai(this)
        },
        toggle: function (n, t) {
            var r = typeof n == "boolean";
            return i.isFunction(n) && i.isFunction(t) ? ge.apply(this, arguments) : this.each(function () {
                (r ? n : nt(this)) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var i = u(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (n, r, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var o, s, e, h = i.camelCase(r),
                    c = n.style;
                if (r = i.cssProps[h] || (i.cssProps[h] = li(c, h)), e = i.cssHooks[r] || i.cssHooks[h], u === t) return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
                if ((s = typeof u, s === "string" && (o = ke.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)), s = "number"), u != null && (s !== "number" || !isNaN(u))) && (s !== "number" || i.cssNumber[h] || (u += "px"), !e || !("set" in e) || (u = e.set(n, u, f)) !== t)) try {
                    c[r] = u
                } catch (l) { }
            }
        },
        css: function (n, r, f, e) {
            var o, c, s, h = i.camelCase(r);
            return r = i.cssProps[h] || (i.cssProps[h] = li(n.style, h)), s = i.cssHooks[r] || i.cssHooks[h], s && "get" in s && (o = s.get(n, !0, e)), o === t && (o = u(n, r)), o === "normal" && r in uu && (o = uu[r]), f || e !== t ? (c = parseFloat(o), f || i.isNumeric(c) ? c || 0 : o) : o
        },
        swap: function (n, t, i) {
            var u, r, f = {};
            for (r in t) f[r] = n.style[r], n.style[r] = t[r];
            u = i.call(n);
            for (r in t) n.style[r] = f[r];
            return u
        }
    });
    n.getComputedStyle ? u = function (t, r) {
        var f, o, s, h, e = n.getComputedStyle(t, null),
            u = t.style;
        return e && (f = e[r], f === "" && !i.contains(t.ownerDocument, t) && (f = i.style(t, r)), et.test(f) && ru.test(r) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = e.width, u.width = o, u.minWidth = s, u.maxWidth = h)), f
    } : r.documentElement.currentStyle && (u = function (n, t) {
        var f, u, i = n.currentStyle && n.currentStyle[t],
            r = n.style;
        return i == null && r && r[t] && (i = r[t]), et.test(i) && !pe.test(t) && (f = r.left, u = n.runtimeStyle && n.runtimeStyle.left, u && (n.runtimeStyle.left = n.currentStyle.left), r.left = t === "fontSize" ? "1em" : i, i = r.pixelLeft + "px", r.left = f, u && (n.runtimeStyle.left = u)), i === "" ? "auto" : i
    });
    i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = {
            get: function (n, r, f) {
                if (r) return n.offsetWidth === 0 && we.test(u(n, "display")) ? i.swap(n, de, function () {
                    return pi(n, t, f)
                }) : pi(n, t, f)
            },
            set: function (n, r, u) {
                return vi(n, r, u ? yi(n, t, u, i.support.boxSizing && i.css(n, "boxSizing") === "border-box") : 0)
            }
        }
    });
    i.support.opacity || (i.cssHooks.opacity = {
        get: function (n, t) {
            return ye.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (n, t) {
            var r = n.style,
                u = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                f = u && u.filter || r.filter || "";
            (r.zoom = 1, t >= 1 && i.trim(f.replace(ni, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"), u && !u.filter)) || (r.filter = ni.test(f) ? f.replace(ni, e) : f + " " + e)
        }
    });
    i(function () {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function (n, t) {
                return i.swap(n, {
                    display: "inline-block"
                }, function () {
                    if (t) return u(n, "marginRight")
                })
            }
        });
        !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function (n, t) {
            i.cssHooks[t] = {
                get: function (n, r) {
                    if (r) {
                        var f = u(n, t);
                        return et.test(f) ? i(n).position()[t] + "px" : f
                    }
                }
            }
        })
    });
    i.expr && i.expr.filters && (i.expr.filters.hidden = function (n) {
        return n.offsetWidth === 0 && n.offsetHeight === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || u(n, "display")) === "none"
    }, i.expr.filters.visible = function (n) {
        return !i.expr.filters.hidden(n)
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (n, t) {
        i.cssHooks[n + t] = {
            expand: function (i) {
                for (var u = typeof i == "string" ? i.split(" ") : [i], f = {}, r = 0; r < 4; r++) f[n + c[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        ru.test(n) || (i.cssHooks[n + t].set = vi)
    });
    var no = /%20/g,
        to = /\[\]$/,
        eu = /\r?\n/g,
        io = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        ro = /^(?:select|textarea)/i;
    i.fn.extend({
        serialize: function () {
            return i.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? i.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || ro.test(this.nodeName) || io.test(this.type))
            }).map(function (n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function (n) {
                    return {
                        name: t.name,
                        value: n.replace(eu, "\r\n")
                    }
                }) : {
                        name: t.name,
                        value: r.replace(eu, "\r\n")
                    }
            }).get()
        }
    });
    i.param = function (n, r) {
        var u, f = [],
            e = function (n, t) {
                t = i.isFunction(t) ? t() : t == null ? "" : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            };
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function () {
            e(this.name, this.value)
        });
        else
            for (u in n) vt(u, n[u], r, e);
        return f.join("&").replace(no, "+")
    };
    var l, a, uo = /#.*$/,
        fo = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        eo = /^(?:GET|HEAD)$/,
        oo = /^\/\//,
        ou = /\?/,
        so = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ho = /([?&])_=[^&]*/,
        su = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        hu = i.fn.load,
        ii = {},
        cu = {},
        lu = ["*/"] + ["*"];
    try {
        l = tf.href
    } catch (po) {
        l = r.createElement("a");
        l.href = "";
        l = l.href
    }
    a = su.exec(l.toLowerCase()) || [];
    i.fn.load = function (n, r, u) {
        if (typeof n != "string" && hu) return hu.apply(this, arguments);
        if (!this.length) return this;
        var f, o, s, h = this,
            e = n.indexOf(" ");
        return e >= 0 && (f = n.slice(e, n.length), n = n.slice(0, e)), i.isFunction(r) ? (u = r, r = t) : r && typeof r == "object" && (o = "POST"), i.ajax({
            url: n,
            type: o,
            dataType: "html",
            data: r,
            complete: function (n, t) {
                u && h.each(u, s || [n.responseText, t, n])
            }
        }).done(function (n) {
            s = arguments;
            h.html(f ? i("<div>").append(n.replace(so, "")).find(f) : n)
        }), this
    };
    i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (n, t) {
        i.fn[t] = function (n) {
            return this.on(t, n)
        }
    });
    i.each(["get", "post"], function (n, r) {
        i[r] = function (n, u, f, e) {
            return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
                type: r,
                url: n,
                data: u,
                success: f,
                dataType: e
            })
        }
    });
    i.extend({
        getScript: function (n, r) {
            return i.get(n, t, r, "script")
        },
        getJSON: function (n, t, r) {
            return i.get(n, t, r, "json")
        },
        ajaxSetup: function (n, t) {
            return t ? ki(n, i.ajaxSettings) : (t = n, n = i.ajaxSettings), ki(n, t), n
        },
        ajaxSettings: {
            url: l,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(a[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": lu
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": n.String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bi(ii),
        ajaxTransport: bi(cu),
        ajax: function (n, r) {
            function p(n, r, h, l) {
                var a, tt, w, it, p, v = r;
                e !== 2 && (e = 2, d && clearTimeout(d), c = t, k = l || "", f.readyState = n > 0 ? 4 : 0, h && (it = wu(u, f, h)), n >= 200 && n < 300 || n === 304 ? (u.ifModified && (p = f.getResponseHeader("Last-Modified"), p && (i.lastModified[o] = p), p = f.getResponseHeader("Etag"), p && (i.etag[o] = p)), n === 304 ? (v = "notmodified", a = !0) : (a = bu(u, it), v = a.state, tt = a.data, w = a.error, a = !w)) : (w = v, (!v || n) && (v = "error", n < 0 && (n = 0))), f.status = n, f.statusText = "" + (r || v), a ? nt.resolveWith(s, [tt, v, f]) : nt.rejectWith(s, [f, v, w]), f.statusCode(b), b = t, y && g.trigger("ajax" + (a ? "Success" : "Error"), [f, u, a ? tt : w]), ut.fireWith(s, [f, v]), y && (g.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            var it, rt;
            typeof n == "object" && (r = n, n = t);
            r = r || {};
            var o, k, w, c, d, l, y, v, u = i.ajaxSetup({}, r),
                s = u.context || u,
                g = s !== u && (s.nodeType || s instanceof i) ? i(s) : i.event,
                nt = i.Deferred(),
                ut = i.Callbacks("once memory"),
                b = u.statusCode || {},
                ft = {},
                et = {},
                e = 0,
                ot = "canceled",
                f = {
                    readyState: 0,
                    setRequestHeader: function (n, t) {
                        if (!e) {
                            var i = n.toLowerCase();
                            n = et[i] = et[i] || n;
                            ft[n] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return e === 2 ? k : null
                    },
                    getResponseHeader: function (n) {
                        var i;
                        if (e === 2) {
                            if (!w)
                                for (w = {}; i = fo.exec(k);) w[i[1].toLowerCase()] = i[2];
                            i = w[n.toLowerCase()]
                        }
                        return i === t ? null : i
                    },
                    overrideMimeType: function (n) {
                        return e || (u.mimeType = n), this
                    },
                    abort: function (n) {
                        return n = n || ot, c && c.abort(n), p(0, n), this
                    }
                };
            if (nt.promise(f), f.success = f.done, f.error = f.fail, f.complete = ut.add, f.statusCode = function (n) {
                if (n) {
                    var t;
                    if (e < 2)
                        for (t in n) b[t] = [b[t], n[t]];
                    else t = n[f.status], f.always(t)
                }
                return this
            }, u.url = ((n || u.url) + "").replace(uo, "").replace(oo, a[1] + "//"), u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(h), u.crossDomain == null && (l = su.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] == a[1] && l[2] == a[2] && (l[3] || (l[1] === "http:" ? 80 : 443)) == (a[3] || (a[1] === "http:" ? 80 : 443)))), u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), tt(ii, u, r, f), e === 2) return f;
            y = u.global;
            u.type = u.type.toUpperCase();
            u.hasContent = !eo.test(u.type);
            y && i.active++ == 0 && i.event.trigger("ajaxStart");
            u.hasContent || (u.data && (u.url += (ou.test(u.url) ? "&" : "?") + u.data, delete u.data), o = u.url, u.cache === !1 && (it = i.now(), rt = u.url.replace(ho, "$1_=" + it), u.url = rt + (rt === u.url ? (ou.test(u.url) ? "&" : "?") + "_=" + it : "")));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
            u.ifModified && (o = o || u.url, i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o]));
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + lu + "; q=0.01" : "") : u.accepts["*"]);
            for (v in u.headers) f.setRequestHeader(v, u.headers[v]);
            if (!u.beforeSend || u.beforeSend.call(s, f, u) !== !1 && e !== 2) {
                ot = "abort";
                for (v in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) f[v](u[v]);
                if (c = tt(cu, u, r, f), c) {
                    f.readyState = 1;
                    y && g.trigger("ajaxSend", [f, u]);
                    u.async && u.timeout > 0 && (d = setTimeout(function () {
                        f.abort("timeout")
                    }, u.timeout));
                    try {
                        e = 1;
                        c.send(ft, p)
                    } catch (st) {
                        if (e < 2) p(-1, st);
                        else throw st;
                    }
                } else p(-1, "No Transport");
                return f
            }
            return f.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var au = [],
        co = /\?/,
        ot = /(=)\?(?=&|$)|\?\?/,
        lo = i.now();
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var n = au.pop() || i.expando + "_" + lo++;
            return this[n] = !0, n
        }
    });
    i.ajaxPrefilter("json jsonp", function (r, u, f) {
        var e, s, o, h = r.data,
            c = r.url,
            l = r.jsonp !== !1,
            a = l && ot.test(c),
            v = l && !a && typeof h == "string" && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && ot.test(h);
        if (r.dataTypes[0] === "jsonp" || a || v) return e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, s = n[e], a ? r.url = c.replace(ot, "$1" + e) : v ? r.data = h.replace(ot, "$1" + e) : l && (r.url += (co.test(c) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function () {
            return o || i.error(e + " was not called"), o[0]
        }, r.dataTypes[0] = "json", n[e] = function () {
            o = arguments
        }, f.always(function () {
            n[e] = s;
            r[e] && (r.jsonpCallback = u.jsonpCallback, au.push(e));
            o && i.isFunction(s) && s(o[0]);
            o = s = t
        }), "script"
    });
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (n) {
                return i.globalEval(n), n
            }
        }
    });
    i.ajaxPrefilter("script", function (n) {
        n.cache === t && (n.cache = !1);
        n.crossDomain && (n.type = "GET", n.global = !1)
    });
    i.ajaxTransport("script", function (n) {
        if (n.crossDomain) {
            var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
            return {
                send: function (f, e) {
                    i = r.createElement("script");
                    i.async = "async";
                    n.scriptCharset && (i.charset = n.scriptCharset);
                    i.src = n.url;
                    i.onload = i.onreadystatechange = function (n, r) {
                        (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, u && i.parentNode && u.removeChild(i), i = t, r || e(200, "success"))
                    };
                    u.insertBefore(i, u.firstChild)
                },
                abort: function () {
                    i && i.onload(0, 1)
                }
            }
        }
    });
    st = n.ActiveXObject ? function () {
        for (var n in w) w[n](0, 1)
    } : !1;
    vu = 0;
    i.ajaxSettings.xhr = n.ActiveXObject ? function () {
        return !this.isLocal && di() || ku()
    } : di,
        function (n) {
            i.extend(i.support, {
                ajax: !!n,
                cors: !!n && "withCredentials" in n
            })
        }(i.ajaxSettings.xhr());
    i.support.ajax && i.ajaxTransport(function (r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return {
                send: function (f, e) {
                    var h, s, o = r.xhr();
                    if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
                        for (s in r.xhrFields) o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType);
                    r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in f) o.setRequestHeader(s, f[s])
                    } catch (c) { }
                    o.send(r.hasContent && r.data || null);
                    u = function (n, f) {
                        var s, a, v, c, l;
                        try {
                            if (u && (f || o.readyState === 4))
                                if (u = t, h && (o.onreadystatechange = i.noop, st && delete w[h]), f) o.readyState !== 4 && o.abort();
                                else {
                                    s = o.status;
                                    v = o.getAllResponseHeaders();
                                    c = {};
                                    l = o.responseXML;
                                    l && l.documentElement && (c.xml = l);
                                    try {
                                        c.text = o.responseText
                                    } catch (n) { }
                                    try {
                                        a = o.statusText
                                    } catch (p) {
                                        a = ""
                                    } !s && r.isLocal && !r.crossDomain ? s = c.text ? 200 : 404 : s === 1223 && (s = 204)
                                }
                        } catch (y) {
                            f || e(-1, y)
                        }
                        c && e(s, a, c, v)
                    };
                    r.async ? o.readyState === 4 ? setTimeout(u, 0) : (h = ++vu, st && (w || (w = {}, i(n).unload(st)), w[h] = u), o.onreadystatechange = u) : u()
                },
                abort: function () {
                    u && u(0, 1)
                }
            }
        }
    });
    var ht, ct, ao = /^(?:toggle|show|hide)$/,
        vo = new RegExp("^(?:([-+])=|)(" + ut + ")([a-z%]*)$", "i"),
        yo = /queueHooks$/,
        lt = [nf],
        k = {
            "*": [function (n, t) {
                var o, s, h, r = this.createTween(n, t),
                    e = vo.exec(t),
                    c = r.cur(),
                    u = +c || 0,
                    f = 1;
                if (e) {
                    if (o = +e[2], s = e[3] || (i.cssNumber[n] ? "" : "px"), s !== "px" && u) {
                        u = i.css(r.elem, n, !0) || o || 1;
                        do h = f = f || ".5", u = u / f, i.style(r.elem, n, u + s), f = r.cur() / c; while (f !== 1 && f !== h)
                    }
                    r.unit = s;
                    r.start = u;
                    r.end = e[1] ? u + (e[1] + 1) * o : o
                }
                return r
            }]
        };
    i.Animation = i.extend(nr, {
        tweener: function (n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], k[r] = k[r] || [], k[r].unshift(t)
        },
        prefilter: function (n, t) {
            t ? lt.unshift(n) : lt.push(n)
        }
    });
    i.Tween = f;
    f.prototype = {
        constructor: f,
        init: function (n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function () {
            var n = f.propHooks[this.prop];
            return n && n.get ? n.get(this) : f.propHooks._default.get(this)
        },
        run: function (n) {
            var t, r = f.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : f.propHooks._default.set(this), this
        }
    };
    f.prototype.init.prototype = f.prototype;
    f.propHooks = {
        _default: {
            get: function (n) {
                var t;
                return n.elem[n.prop] == null || !!n.elem.style && n.elem.style[n.prop] != null ? (t = i.css(n.elem, n.prop, !1, ""), !t || t === "auto" ? 0 : t) : n.elem[n.prop]
            },
            set: function (n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    f.propHooks.scrollTop = f.propHooks.scrollLeft = {
        set: function (n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.each(["toggle", "show", "hide"], function (n, t) {
        var r = i.fn[t];
        i.fn[t] = function (u, f, e) {
            return u == null || typeof u == "boolean" || !n && i.isFunction(u) && i.isFunction(f) ? r.apply(this, arguments) : this.animate(it(t, !0), u, f, e)
        }
    });
    i.fn.extend({
        fadeTo: function (n, t, i, r) {
            return this.filter(nt).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function (n, t, r, u) {
            var e = i.isEmptyObject(n),
                f = i.speed(t, r, u),
                o = function () {
                    var t = nr(this, i.extend({}, n), f);
                    e && t.stop(!0)
                };
            return e || f.queue === !1 ? this.each(o) : this.queue(f.queue, o)
        },
        stop: function (n, r, u) {
            var f = function (n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return typeof n != "string" && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function () {
                var o = !0,
                    t = n != null && n + "queueHooks",
                    e = i.timers,
                    r = i._data(this);
                if (t) r[t] && r[t].stop && f(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && yo.test(t) && f(r[t]);
                for (t = e.length; t--;) e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(u), o = !1, e.splice(t, 1));
                (o || !u) && i.dequeue(this, n)
            })
        }
    });
    i.each({
        slideDown: it("show"),
        slideUp: it("hide"),
        slideToggle: it("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (n, t) {
        i.fn[n] = function (n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.speed = function (n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function () {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.easing = {
        linear: function (n) {
            return n
        },
        swing: function (n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.timers = [];
    i.fx = f.prototype.init;
    i.fx.tick = function () {
        for (var r, n = i.timers, t = 0; t < n.length; t++) r = n[t], r() || n[t] !== r || n.splice(t--, 1);
        n.length || i.fx.stop()
    };
    i.fx.timer = function (n) {
        n() && i.timers.push(n) && !ct && (ct = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.interval = 13;
    i.fx.stop = function () {
        clearInterval(ct);
        ct = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fx.step = {};
    i.expr && i.expr.filters && (i.expr.filters.animated = function (n) {
        return i.grep(i.timers, function (t) {
            return n === t.elem
        }).length
    });
    ri = /^(?:body|html)$/i;
    i.fn.offset = function (n) {
        if (arguments.length) return n === t ? this : this.each(function (t) {
            i.offset.setOffset(this, n, t)
        });
        var e, r, o, s, h, c, l, a, v, y, u = this[0],
            f = u && u.ownerDocument;
        if (f) return (o = f.body) === u ? i.offset.bodyOffset(u) : (r = f.documentElement, i.contains(r, u) ? (e = u.getBoundingClientRect(), s = tr(f), h = r.clientTop || o.clientTop || 0, c = r.clientLeft || o.clientLeft || 0, l = s.pageYOffset || r.scrollTop, a = s.pageXOffset || r.scrollLeft, v = e.top + l - h, y = e.left + a - c, {
            top: v,
            left: y
        }) : {
                top: 0,
                left: 0
            })
    };
    i.offset = {
        bodyOffset: function (n) {
            var t = n.offsetTop,
                r = n.offsetLeft;
            return i.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(i.css(n, "marginTop")) || 0, r += parseFloat(i.css(n, "marginLeft")) || 0), {
                top: t,
                left: r
            }
        },
        setOffset: function (n, t, r) {
            var f = i.css(n, "position");
            f === "static" && (n.style.position = "relative");
            var e = i(n),
                o = e.offset(),
                l = i.css(n, "top"),
                a = i.css(n, "left"),
                v = (f === "absolute" || f === "fixed") && i.inArray("auto", [l, a]) > -1,
                u = {},
                s = {},
                h, c;
            v ? (s = e.position(), h = s.top, c = s.left) : (h = parseFloat(l) || 0, c = parseFloat(a) || 0);
            i.isFunction(t) && (t = t.call(n, r, o));
            t.top != null && (u.top = t.top - o.top + h);
            t.left != null && (u.left = t.left - o.left + c);
            "using" in t ? t.using.call(n, u) : e.css(u)
        }
    };
    i.fn.extend({
        position: function () {
            if (this[0]) {
                var u = this[0],
                    n = this.offsetParent(),
                    t = this.offset(),
                    r = ri.test(n[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : n.offset();
                return t.top -= parseFloat(i.css(u, "marginTop")) || 0, t.left -= parseFloat(i.css(u, "marginLeft")) || 0, r.top += parseFloat(i.css(n[0], "borderTopWidth")) || 0, r.left += parseFloat(i.css(n[0], "borderLeftWidth")) || 0, {
                    top: t.top - r.top,
                    left: t.left - r.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var n = this.offsetParent || r.body; n && !ri.test(n.nodeName) && i.css(n, "position") === "static";) n = n.offsetParent;
                return n || r.body
            })
        }
    });
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function (f) {
            return i.access(this, function (n, f, e) {
                var o = tr(n);
                if (e === t) return o ? r in o ? o[r] : o.document.documentElement[f] : n[f];
                o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e
            }, n, f, arguments.length, null)
        }
    });
    i.each({
        Height: "height",
        Width: "width"
    }, function (n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        }, function (u, f) {
            i.fn[f] = function (f, e) {
                var o = arguments.length && (u || typeof f != "boolean"),
                    s = u || (f === !0 || e === !0 ? "margin" : "border");
                return i.access(this, function (r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document.documentElement["client" + n] : r.nodeType === 9 ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, f, s) : i.style(r, u, f, s)
                }, r, o ? f : t, o, null)
            }
        })
    });
    n.jQuery = n.$ = i;
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return i
    })
})(window);
$(document).ready(function () {
    function n() {
        $(".editable_content .tableWrap, .form_table .tableWrap").each(function () {
            var n = $(this).find("caption"),
                t = $(this).find(".tableWrap_caption");
            $(this).find(".viewport");
            $(window).width() < 1024 ? (n.css({
                textIndent: -1e4
            }), t.css({
                display: "block",
                marginBottom: -22
            })) : (n.css({
                textIndent: 0
            }), t.css({
                display: "none"
            }))
        })
    }
    $(".editable_content > table, .table_style2, .form_table").each(function () {
        $(this).hasClass("img_grand") || ($(this).addClass("overview"), $(this).wrap("<div class='tableWrap'><div class='viewport'><\/div><\/div>"), $(this).parent(".viewport").before('<div class="scrollbar"><div class="track"><div class="thumb"><\/div><\/div><\/div>'))
    });
    $(".editable_content .tableWrap, .form_table .tableWrap").each(function () {
        0 < $(this).find("caption").length && ($(this).find("caption"), $caption_text = $(this).find("caption").html(), $(this).find(".viewport").before('<div class="tableWrap_caption">' + $caption_text + "<\/div>"))
    });
    $(".tableWrap").tinyscrollbar({
        axis: "x"
    });
    $(window).on("resize", n);
    n()
});
$(window).load(function () {
    function n() {
        $(".img_bg").each(function () {
            $(this).removeAttr("style");
            $(this).find("span").css({
                width: $(this).find("img").width()
            });
            $(this).css({
                width: $(this).find("img").width()
            })
        })
    }
    $(window).on("resize", n);
    n()
});
$(function () {
    function n(n) {
        var t = "M",
            i = "";
        switch (n) {
            case "L":
                $("#Center").css("font-size", "20px").addClass("fs3").removeClass("fs1 , fs2");
                i = "20px";
                t = "L";
                break;
            default:
                $("#Center").css("font-size", "16px").addClass("fs2").removeClass("fs1 , fs3");
                i = "16px";
                t = "M";
                break;
            case "S":
                $("#Center").css("font-size", "14px").addClass("fs1").removeClass("fs2 , fs3");
                i = "14px";
                t = "S"
        }
        $("#test_iframe") && $("#test_iframe").contents().find("body").css("font-size", i),
            function (n, t, i) {
                var r = new Date,
                    u;
                r.setTime(r.getTime() + 864e5 * i);
                u = "expires=" + r.toUTCString();
                document.cookie = n + "=" + t + "; " + u
            }("FSize", t, 10)
    }
    $(window).bind("scroll resize", function () {
        100 < $(this).scrollTop() ? $("body").addClass("MenuFix") : $("body").removeClass("MenuFix")
    }).scroll();
    $(window).bind("scroll resize", function () {
        150 < $(this).scrollTop() ? $(".BtnTop").addClass("TopFix") : $(".BtnTop").removeClass("TopFix")
    }).scroll();
    $(function () {
        function n() {
            $(".popupContBox").removeClass("open").addClass("close");
            $(".popupContBox, .popupContBox .close").off("click", n)
        }
        $(".alert_btn").on("click", function () {
            $(".popupContBox").removeClass("close").addClass("open");
            $(".popupContBox, .popupContBox .close").on("click", n)
        })
    });
    $("input:radio").wrap('<div class="radio-btn"><i><\/i><\/div>');
    $("input:radio:checked").each(function () {
        $(this).parent().parent().addClass("checkedRadio")
    });
    $(".radio-btn").on("click", function () {
        var n = $(this),
            t = n.parent().parent();
        t.find("input:radio").attr("checked", !1);
        t.find(".radio-btn").removeClass("checkedRadio");
        n.addClass("checkedRadio");
        n.find("input:radio").attr("checked", !0)
    });
    $("input:checkbox").wrap('<div class="check-box"><i><\/i><\/div>');
    $("input:checkbox:checked").each(function () {
        $(this).parent().parent().addClass("checkedBox")
    });
    $.fn.toggleCheckbox = function () {
        this.attr("checked", !this.attr("checked"))
    };
    $(".check-box").on("click", function () {
        $(this).find(":checkbox").toggleCheckbox();
        $(this).toggleClass("checkedBox")
    });
    $(".ContLeftMenu > ul > li > a").click(function () {
        var n = $(this).next("ul");
        n.is(":visible") ? $(this).removeClass("slideDown") : ($(this).parent("li").siblings().children("a").next("ul").slideUp(), $(this).addClass("slideDown").parent("li").siblings().children("a").removeClass("slideDown"));
        n.slideToggle()
    }).siblings().hide();
    $(function () {
        $(".tabs_group").each(function () {
            var n = $(this),
                t = $("div.tabs li.tab", n).eq(0).addClass("active");
            $(t.find("a").attr("href")).siblings().hide();
            $("div.tabs li.tab", n).click(function () {
                var n = $(this),
                    t = n.find("a").attr("href");
                return n.addClass("active").siblings(".active").removeClass("active"), $(t).stop(!1, !0).fadeIn().siblings().hide(), !1
            }).find("a").focus(function () {
                this.blur()
            })
        })
    });
    $("#Breadcrumbs ul li").last().addClass("last");
    $(".rwdTable td").each(function () {
        var n = $(this).parents(".rwdTable").find("th").eq($(this).index()).text();
        $(this).attr("data-th", n)
    });
    $(function () {
        var t;
        n(null !== (t = function (n) {
            for (var t, r = n + "=", u = document.cookie.split(";"), i = 0; i < u.length; i++) {
                for (t = u[i];
                    " " == t.charAt(0);) t = t.substring(1);
                if (0 === t.indexOf(r)) return t.substring(r.length, t.length)
            }
            return ""
        }("FSize")) ? t : "M")
    });
    $(".font_small a").click(function () {
        n("S")
    });
    $(".font_medium a").click(function () {
        n("M")
    });
    $(".font_big a").click(function () {
        n("L")
    });
    $(".select").on("change", function () {
        var t, n = $(this).find("option");
        n.each(function (i) {
            1 == n[i].selected && (t = n[i].innerHTML)
        });
        $(this).find("label").html(t)
    }).trigger("change");
    $(".alert_box > div").click(function (n) {
        n.stopPropagation()
    })
}),
    function (n) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof module && module.exports ? module.exports = n(require("jquery")) : n(jQuery)
    }(function (n) {
        var o = -1,
            r = -1,
            i = function (n) {
                return parseFloat(n) || 0
            },
            s = function (t) {
                var f = n(t),
                    u = null,
                    r = [];
                return f.each(function () {
                    var t = n(this),
                        f = t.offset().top - i(t.css("margin-top")),
                        e = 0 < r.length ? r[r.length - 1] : null;
                    null === e ? r.push(t) : Math.floor(Math.abs(u - f)) <= 1 ? r[r.length - 1] = e.add(t) : r.push(t);
                    u = f
                }), r
            },
            u = function (t) {
                var i = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1
                };
                return "object" == typeof t ? n.extend(i, t) : ("boolean" == typeof t ? i.byRow = t : "remove" === t && (i.remove = !0), i)
            },
            t = n.fn.matchHeight = function (i) {
                var r = u(i),
                    f;
                return r.remove ? (f = this, this.css(r.property, ""), n.each(t._groups, function (n, t) {
                    t.elements = t.elements.not(f)
                }), this) : (this.length <= 1 && !r.target || (t._groups.push({
                    elements: this,
                    options: r
                }), t._apply(this, r)), this)
            },
            f, e;
        t.version = "master";
        t._groups = [];
        t._throttle = 80;
        t._maintainScroll = !1;
        t._beforeUpdate = null;
        t._afterUpdate = null;
        t._rows = s;
        t._parse = i;
        t._parseOptions = u;
        t._apply = function (r, f) {
            var e = u(f),
                o = n(r),
                c = [o],
                l = n(window).scrollTop(),
                a = n("html").outerHeight(!0),
                h = o.parents().filter(":hidden");
            return h.each(function () {
                var t = n(this);
                t.data("style-cache", t.attr("style"))
            }), h.css("display", "block"), e.byRow && !e.target && (o.each(function () {
                var i = n(this),
                    t = i.css("display");
                "inline-block" !== t && "flex" !== t && "inline-flex" !== t && (t = "block");
                i.data("style-cache", i.attr("style"));
                i.css({
                    display: t,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px",
                    overflow: "hidden"
                })
            }), c = s(o), o.each(function () {
                var t = n(this);
                t.attr("style", t.data("style-cache") || "")
            })), n.each(c, function (t, r) {
                var u = n(r),
                    f = 0;
                if (e.target) f = e.target.outerHeight(!1);
                else {
                    if (e.byRow && u.length <= 1) return void u.css(e.property, "");
                    u.each(function () {
                        var t = n(this),
                            u = t.attr("style"),
                            i = t.css("display"),
                            r;
                        "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
                        r = {
                            display: i
                        };
                        r[e.property] = "";
                        t.css(r);
                        t.outerHeight(!1) > f && (f = t.outerHeight(!1));
                        u ? t.attr("style", u) : t.css("display", "")
                    })
                }
                u.each(function () {
                    var t = n(this),
                        r = 0;
                    e.target && t.is(e.target) || ("border-box" !== t.css("box-sizing") && (r += i(t.css("border-top-width")) + i(t.css("border-bottom-width")), r += i(t.css("padding-top")) + i(t.css("padding-bottom"))), t.css(e.property, f - r + "px"))
                })
            }), h.each(function () {
                var t = n(this);
                t.attr("style", t.data("style-cache") || null)
            }), t._maintainScroll && n(window).scrollTop(l / a * n("html").outerHeight(!0)), this
        };
        t._applyDataApi = function () {
            var t = {};
            n("[data-match-height], [data-mh]").each(function () {
                var i = n(this),
                    r = i.attr("data-mh") || i.attr("data-match-height");
                t[r] = r in t ? t[r].add(i) : i
            });
            n.each(t, function () {
                this.matchHeight(!0)
            })
        };
        f = function (i) {
            t._beforeUpdate && t._beforeUpdate(i, t._groups);
            n.each(t._groups, function () {
                t._apply(this.elements, this.options)
            });
            t._afterUpdate && t._afterUpdate(i, t._groups)
        };
        t._update = function (i, u) {
            if (u && "resize" === u.type) {
                var e = n(window).width();
                if (e === o) return;
                o = e
            }
            i ? -1 === r && (r = setTimeout(function () {
                f(u);
                r = -1
            }, t._throttle)) : f(u)
        };
        n(t._applyDataApi);
        e = n.fn.on ? "on" : "bind";
        n(window)[e]("load", function (n) {
            t._update(!1, n)
        });
        n(window)[e]("resize orientationchange", function (n) {
            t._update(!0, n)
        })
    });
jQuery(document).ready(function (n) {
    n(".eqHeight").each(function () {
        n(this).children(".item").matchHeight({})
    })
});
$(window).resize(function () {
    $(".eqHeight").each(function () {
        $(this).children(".item").matchHeight("update")
    })
});
$(function () {
    $(".font_size a").click(function () {
        $(".eqHeight").each(function () {
            $(this).children(".item").matchHeight("update")
        })
    })
}),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof exports ? module.exports = n(require("jquery")) : n(jQuery)
    }(function (n) {
        "use strict";

        function r(r, u) {
            function k() {
                return 0 < f.contentPosition
            }

            function d() {
                return f.contentPosition <= f.contentSize - f.viewportSize - 5
            }

            function p(t, i) {
                f.hasContentToSroll && (n("body").addClass("noSelect"), b = i ? e.offset()[o] : y ? t.pageX : t.pageY, w ? (document.ontouchmove = function (n) {
                    (f.options.touchLock || k() && d()) && n.preventDefault();
                    c(n.touches[0])
                }, document.ontouchend = s) : (n(document).bind("mousemove", c), n(document).bind("mouseup", s), e.bind("mouseup", s), v.bind("mouseup", s)), c(t))
            }

            function g(t) {
                if (f.hasContentToSroll) {
                    var i = t || window.event,
                        u = -(i.deltaY || i.detail || -1 / 3 * i.wheelDelta) / 40,
                        s = 1 === i.deltaMode ? f.options.wheelSpeed : 1;
                    f.contentPosition -= u * s * f.options.wheelSpeed;
                    f.contentPosition = Math.min(f.contentSize - f.viewportSize, Math.max(0, f.contentPosition));
                    f.thumbPosition = f.contentPosition / f.trackRatio;
                    r.trigger("move");
                    e.css(o, f.thumbPosition);
                    l.css(o, -f.contentPosition);
                    (f.options.wheelLock || k() && d()) && (i = n.event.fix(i)).preventDefault()
                }
            }

            function c(n) {
                if (f.hasContentToSroll) {
                    var t = y ? n.pageX : n.pageY,
                        u = w ? b - t : t - b,
                        i = Math.min(f.trackSize - f.thumbSize, Math.max(0, f.thumbPosition + u));
                    f.contentPosition = i * f.trackRatio;
                    r.trigger("move");
                    e.css(o, i);
                    l.css(o, -f.contentPosition)
                }
            }

            function s() {
                f.thumbPosition = parseInt(e.css(o), 10) || 0;
                n("body").removeClass("noSelect");
                n(document).unbind("mousemove", c);
                n(document).unbind("mouseup", s);
                e.unbind("mouseup", s);
                v.unbind("mouseup", s);
                document.ontouchmove = document.ontouchend = null
            }
            this.options = n.extend({}, i, u);
            this._defaults = i;
            this._name = t;
            var f = this,
                nt = r.find(".viewport"),
                l = r.find(".overview"),
                a = r.find(".scrollbar"),
                v = a.find(".track"),
                e = a.find(".thumb"),
                w = "ontouchstart" in document.documentElement,
                tt = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                y = "x" === this.options.axis,
                h = y ? "width" : "height",
                o = y ? "margin-left" : "margin-top",
                b = 0;
            return this.contentPosition = 0, this.viewportSize = 0, this.contentSize = 0, this.contentRatio = 0, this.trackSize = 0, this.trackRatio = 0, this.thumbSize = 0, this.thumbPosition = 0, this.hasContentToSroll = !1, this.update = function (n) {
                var t = h.charAt(0).toUpperCase() + h.slice(1).toLowerCase();
                switch (this.viewportSize = nt[0]["offset" + t], this.contentSize = l[0]["scroll" + t], this.contentRatio = this.viewportSize / this.contentSize, this.trackSize = this.options.trackSize || this.viewportSize, this.thumbSize = Math.min(this.trackSize, Math.max(this.options.thumbSizeMin, this.options.thumbSize || this.trackSize * this.contentRatio)), this.trackRatio = (this.contentSize - this.viewportSize) / (this.trackSize - this.thumbSize), this.hasContentToSroll = this.contentRatio < 1, a.toggleClass("disable", !this.hasContentToSroll), n) {
                    case "bottom":
                        this.contentPosition = Math.max(this.contentSize - this.viewportSize, 0);
                        break;
                    case "relative":
                        this.contentPosition = Math.min(Math.max(this.contentSize - this.viewportSize, 0), Math.max(0, this.contentPosition));
                        break;
                    default:
                        this.contentPosition = parseInt(n, 10) || 0
                }
                return this.thumbPosition = this.contentPosition / this.trackRatio, e.css(o, f.thumbPosition), l.css(o, -f.contentPosition), a.css(h, f.trackSize), v.css(h, f.trackSize), e.css(h, f.thumbSize), f
            }, f.update(), w ? nt[0].ontouchstart = function (n) {
                1 === n.touches.length && (n.stopPropagation(), p(n.touches[0]))
            } : (e.bind("mousedown", function (n) {
                n.stopPropagation();
                p(n)
            }), v.bind("mousedown", function (n) {
                p(n, !0)
            })), n(window).resize(function () {
                f.update("relative")
            }), f.options.wheel && window.addEventListener ? r[0].addEventListener(tt, g, !1) : f.options.wheel && (r[0].onmousewheel = g), f
        }
        var t = "tinyscrollbar",
            i = {
                axis: "y",
                wheel: !0,
                wheelSpeed: 30,
                wheelLock: !0,
                touchLock: !0,
                trackSize: !1,
                thumbSize: !1,
                thumbSizeMin: 20
            };
        n.fn[t] = function (i) {
            return this.each(function () {
                n.data(this, "plugin_" + t) || n.data(this, "plugin_" + t, new r(n(this), i))
            })
        }
    });
$("[placeholder]").each(function () {
    var n = $(this);
    n.attr("placeholder");
    "password" == n.prop("type") ? (n.focus(function () {
        $(this).prop("type", "password");
        $(this).val() == $(this).attr("placeholder") && $(this).val("").removeClass("placeholderColor")
    }).blur(function () {
        "" == $(this).val() && ($(this).prop("type", "text"), $(this).val($(this).attr("placeholder")).addClass("placeholderColor"))
    }), "" != n.val() && n.val() != n.attr("placeholder") || (n.prop("type", "text"), n.val($(this).attr("placeholder")).addClass("placeholderColor"))) : (n.focus(function () {
        $(this).val() == $(this).attr("placeholder") && $(this).val("").removeClass("placeholderColor")
    }).blur(function () {
        "" == $(this).val() && $(this).val($(this).attr("placeholder")).addClass("placeholderColor")
    }), "" != n.val() && n.val() != n.attr("placeholder") || n.val($(this).attr("placeholder")).addClass("placeholderColor"))
});
$(function () {
    void 0 !== window.addEventListener ? window.addEventListener("submit", clearPlaceholderValue) : $("form").each(function () {
        this.attachEvent("onsubmit", clearPlaceholderValue)
    })
}),
    function (n) {
        "use strict";
        var t = function () {
            var t = {
                bcClass: "sf-breadcrumb",
                menuClass: "sf-js-enabled",
                anchorClass: "sf-with-ul",
                menuArrowClass: "sf-arrows"
            },
                f = function () {
                    var t = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                    return t && n(window).load(function () {
                        n("body").children().on("click", n.noop)
                    }), t
                }(),
                l = function () {
                    var n = document.documentElement.style;
                    return "behavior" in n && "fill" in n && /iemobile/i.test(navigator.userAgent)
                }(),
                e = function (n, i) {
                    var r = t.menuClass;
                    i.cssArrows && (r += " " + t.menuArrowClass);
                    n.toggleClass(r)
                },
                a = function (i, r) {
                    return i.find("li." + r.pathClass).slice(0, r.pathLevels).addClass(r.hoverClass + " " + t.bcClass).filter(function () {
                        return n(this).children(r.popUpSelector).hide().show().length
                    }).removeClass(r.pathClass)
                },
                o = function (n) {
                    n.children("a").toggleClass(t.anchorClass)
                },
                s = function (n) {
                    var t = n.css("ms-touch-action");
                    t = t === "pan-y" ? "auto" : "pan-y";
                    n.css("ms-touch-action", t)
                },
                v = function (t, r) {
                    var o = "li:has(" + r.popUpSelector + ")",
                        e;
                    if (n.fn.hoverIntent && !r.disableHI) t.hoverIntent(i, u, o);
                    else t.on("mouseenter.superfish", o, i).on("mouseleave.superfish", o, u);
                    e = "MSPointerDown.superfish";
                    f || (e += " touchend.superfish");
                    l && (e += " mousedown.superfish");
                    t.on("focusin.superfish", "li", i).on("focusout.superfish", "li", u).on(e, "a", r, y)
                },
                y = function (t) {
                    var r = n(this),
                        u = r.siblings(t.data.popUpSelector);
                    if (u.length > 0 && u.is(":hidden")) {
                        r.one("click.superfish", !1);
                        t.type === "MSPointerDown" ? r.trigger("focus") : n.proxy(i, r.parent("li"))()
                    }
                },
                i = function () {
                    var t = n(this),
                        i = r(t);
                    clearTimeout(i.sfTimer);
                    t.siblings().superfish("hide").end().superfish("show")
                },
                u = function () {
                    var i = n(this),
                        t = r(i);
                    f ? n.proxy(h, i, t)() : (clearTimeout(t.sfTimer), t.sfTimer = setTimeout(n.proxy(h, i, t), t.delay))
                },
                h = function (t) {
                    t.retainPath = n.inArray(this[0], t.$path) > -1;
                    this.superfish("hide");
                    this.parents("." + t.hoverClass).length || (t.onIdle.call(c(this)), t.$path.length && n.proxy(i, t.$path)())
                },
                c = function (n) {
                    return n.closest("." + t.menuClass)
                },
                r = function (n) {
                    return c(n).data("sf-options")
                };
            return {
                hide: function (t) {
                    var u, i;
                    if (this.length) {
                        if (u = this, i = r(u), !i) return this;
                        var o = i.retainPath === !0 ? i.$path : "",
                            f = u.find("li." + i.hoverClass).add(this).not(o).removeClass(i.hoverClass).children(i.popUpSelector),
                            e = i.speedOut;
                        t && (f.show(), e = 0);
                        i.retainPath = !1;
                        i.onBeforeHide.call(f);
                        f.stop(!0, !0).animate(i.animationOut, e, function () {
                            var t = n(this);
                            i.onHide.call(t)
                        })
                    }
                    return this
                },
                show: function () {
                    var n = r(this),
                        i, t;
                    return n ? (i = this.addClass(n.hoverClass), t = i.children(n.popUpSelector), n.onBeforeShow.call(t), t.stop(!0, !0).animate(n.animation, n.speed, function () {
                        n.onShow.call(t)
                    }), this) : this
                },
                destroy: function () {
                    return this.each(function () {
                        var r = n(this),
                            i = r.data("sf-options"),
                            u;
                        if (!i) return !1;
                        u = r.find(i.popUpSelector).parent("li");
                        clearTimeout(i.sfTimer);
                        e(r, i);
                        o(u);
                        s(r);
                        r.off(".superfish").off(".hoverIntent");
                        u.children(i.popUpSelector).attr("style", function (n, t) {
                            return t.replace(/display[^;]+;?/g, "")
                        });
                        i.$path.removeClass(i.hoverClass + " " + t.bcClass).addClass(i.pathClass);
                        r.find("." + i.hoverClass).removeClass(i.hoverClass);
                        i.onDestroy.call(r);
                        r.removeData("sf-options")
                    })
                },
                init: function (i) {
                    return this.each(function () {
                        var u = n(this),
                            r, f;
                        if (u.data("sf-options")) return !1;
                        r = n.extend({}, n.fn.superfish.defaults, i);
                        f = u.find(r.popUpSelector).parent("li");
                        r.$path = a(u, r);
                        u.data("sf-options", r);
                        e(u, r);
                        o(f);
                        s(u);
                        v(u, r);
                        f.not("." + t.bcClass).superfish("hide", !0);
                        r.onInit.call(this)
                    })
                }
            }
        }();
        n.fn.superfish = function (i) {
            return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : typeof i != "object" && i ? n.error("Method " + i + " does not exist on jQuery.fn.superfish") : t.init.apply(this, arguments)
        };
        n.fn.superfish.defaults = {
            popUpSelector: "ul,.sf-mega",
            hoverClass: "sfHover",
            pathClass: "overrideThisToUse",
            pathLevels: 1,
            delay: 100,
            animation: {
                opacity: "show"
            },
            animationOut: {
                opacity: "hide"
            },
            speed: "normal",
            speedOut: "fast",
            cssArrows: !0,
            disableHI: !1,
            onInit: n.noop,
            onBeforeShow: n.noop,
            onShow: n.noop,
            onBeforeHide: n.noop,
            onHide: n.noop,
            onIdle: n.noop,
            onDestroy: n.noop
        };
        n.fn.extend({
            hideSuperfishUl: t.hide,
            showSuperfishUl: t.show
        })
    }(jQuery);
! function (n) {
    function e(t, r, u) {
        if (u) return "object" != typeof t && (t = {}), t;
        t = n.extend(!0, {}, n[i].defaults, t);
        for (var e = ["position", "zposition", "modal", "moveBackground"], f = 0, o = e.length; o > f; f++) "undefined" != typeof t[e[f]] && (n[i].deprecated('The option "' + e[f] + '"', "offCanvas." + e[f]), t.offCanvas = t.offCanvas || {}, t.offCanvas[e[f]] = t[e[f]]);
        return t
    }

    function s(t) {
        t = n.extend(!0, {}, n[i].configuration, t);
        for (var u = ["panel", "list", "selected", "label", "spacer"], r = 0, f = u.length; f > r; r++) "undefined" != typeof t[u[r] + "Class"] && (n[i].deprecated('The configuration option "' + u[r] + 'Class"', "classNames." + u[r]), t.classNames[u[r]] = t[u[r] + "Class"]);
        if ("undefined" != typeof t.counterClass && (n[i].deprecated('The configuration option "counterClass"', "classNames.counters.counter"), t.classNames.counters = t.classNames.counters || {}, t.classNames.counters.counter = t.counterClass), "undefined" != typeof t.collapsedClass && (n[i].deprecated('The configuration option "collapsedClass"', "classNames.labels.collapsed"), t.classNames.labels = t.classNames.labels || {}, t.classNames.labels.collapsed = t.collapsedClass), "undefined" != typeof t.header)
            for (var u = ["panelHeader", "panelNext", "panelPrev"], r = 0, f = u.length; f > r; r++) "undefined" != typeof t.header[u[r] + "Class"] && (n[i].deprecated('The configuration option "header.' + u[r] + 'Class"', "classNames.header." + u[r]), t.classNames.header = t.classNames.header || {}, t.classNames.header[u[r]] = t.header[u[r] + "Class"]);
        for (var u = ["pageNodetype", "pageSelector", "menuWrapperSelector", "menuInjectMethod"], r = 0, f = u.length; f > r; r++) "undefined" != typeof t[u[r]] && (n[i].deprecated('The configuration option "' + u[r] + '"', "offCanvas." + u[r]), t.offCanvas = t.offCanvas || {}, t.offCanvas[u[r]] = t[u[r]]);
        return t
    }

    function h() {
        o = !0;
        f.$wndw = n(window);
        f.$html = n("html");
        f.$body = n("body");
        n.each([t, u, r], function (n, t) {
            t.add = function (n) {
                n = n.split(" ");
                for (var i in n) t[n[i]] = t.mm(n[i])
            }
        });
        t.mm = function (n) {
            return "mm-" + n
        };
        t.add("wrapper menu inline panel nopanel list nolist subtitle selected label spacer current highest hidden opened subopened subopen fullsubopen subclose");
        t.umm = function (n) {
            return "mm-" == n.slice(0, 3) && (n = n.slice(3)), n
        };
        u.mm = function (n) {
            return "mm-" + n
        };
        u.add("parent");
        r.mm = function (n) {
            return n + ".mm"
        };
        r.add("toggle open close setSelected transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend scroll resize click keydown keyup");
        n[i]._c = t;
        n[i]._d = u;
        n[i]._e = r;
        n[i].glbl = f
    }
    var i = "mmenu";
    if (!n[i]) {
        var t = {},
            u = {},
            r = {},
            o = !1,
            f = {
                $wndw: null,
                $html: null,
                $body: null
            };
        n[i] = function (n, t, i) {
            return this.$menu = n, this.opts = t, this.conf = i, this.vars = {}, this.opts = e(this.opts, this.conf, this.$menu), this._initMenu(), this._init(this.$menu.children(this.conf.panelNodetype)), this
        };
        n[i].version = "4.5.5";
        n[i].addons = [];
        n[i].uniqueId = 0;
        n[i].defaults = {
            classes: "",
            slidingSubmenus: !0,
            onClick: {
                setSelected: !0
            }
        };
        n[i].configuration = {
            panelNodetype: "ul, ol, div",
            transitionDuration: 400,
            openingInterval: 25,
            classNames: {
                panel: "Panel",
                selected: "Selected",
                label: "Label",
                spacer: "Spacer"
            }
        };
        n[i].prototype = {
            _init: function (r) {
                r = r.not("." + t.nopanel);
                r = this._initPanels(r);
                r = this._initLinks(r);
                r = this._bindCustomEvents(r);
                for (var u = 0; u < n[i].addons.length; u++) "function" == typeof this["_init_" + n[i].addons[u]] && this["_init_" + n[i].addons[u]](r);
                this._update()
            },
            _initMenu: function () {
                this.opts.offCanvas && this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("*")).filter("[id]").each(function () {
                    n(this).attr("id", t.mm(n(this).attr("id")))
                }));
                this.$menu.contents().each(function () {
                    3 == n(this)[0].nodeType && n(this).remove()
                });
                this.$menu.parent().addClass(t.wrapper);
                var i = [t.menu];
                i.push(t.mm(this.opts.slidingSubmenus ? "horizontal" : "vertical"));
                this.opts.classes && i.push(this.opts.classes);
                this.$menu.addClass(i.join(" "))
            },
            _initPanels: function (i) {
                var c = this,
                    f, e, s, l, o, h;
                return this.__findAddBack(i, "ul, ol").not("." + t.nolist).addClass(t.list), f = this.__findAddBack(i, "." + t.list).find("> li"), this.__refactorClass(f, this.conf.classNames.selected, "selected"), this.__refactorClass(f, this.conf.classNames.label, "label"), this.__refactorClass(f, this.conf.classNames.spacer, "spacer"), f.off(r.setSelected).on(r.setSelected, function (i, r) {
                    i.stopPropagation();
                    f.removeClass(t.selected);
                    "boolean" != typeof r && (r = !0);
                    r && n(this).addClass(t.selected)
                }), this.__refactorClass(this.__findAddBack(i, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel"), i.add(this.__findAddBack(i, "." + t.list).children().children().filter(this.conf.panelNodetype).not("." + t.nopanel)).addClass(t.panel), e = this.__findAddBack(i, "." + t.panel), s = n("." + t.panel, this.$menu), e.each(function () {
                    var t = n(this),
                        i = t.attr("id") || c.__getUniqueId();
                    t.attr("id", i)
                }), e.each(function () {
                    var i = n(this),
                        o = i.is("ul, ol") ? i : i.find("ul ,ol").first(),
                        r = i.parent(),
                        f = r.find("> a, > span"),
                        s = r.closest("." + t.panel),
                        e;
                    r.parent().is("." + t.list) && (i.data(u.parent, r), e = n('<a class="' + t.subopen + '" href="#' + i.attr("id") + '">Sub Menu<\/a>').insertBefore(f), f.is("a") || e.addClass(t.fullsubopen), c.opts.slidingSubmenus && o.prepend('<li class="' + t.subtitle + '"><a class="' + t.subclose + '" href="#' + s.attr("id") + '">Back<\/a><\/li>'))
                }), l = this.opts.slidingSubmenus ? r.open : r.toggle, (s.each(function () {
                    var t = n(this),
                        i = t.attr("id");
                    n('a[href="#' + i + '"]', s).off(r.click).on(r.click, function (n) {
                        n.preventDefault();
                        t.trigger(l)
                    })
                }), this.opts.slidingSubmenus) ? (o = this.__findAddBack(i, "." + t.list).find("> li." + t.selected), o.parents("li").removeClass(t.selected).end().add(o.parents("li")).each(function () {
                    var i = n(this),
                        r = i.find("> ." + t.panel);
                    r.length && (i.parents("." + t.panel).addClass(t.subopened), r.addClass(t.opened))
                }).closest("." + t.panel).addClass(t.opened).parents("." + t.panel).addClass(t.subopened)) : (o = n("li." + t.selected, s), o.parents("li").removeClass(t.selected).end().add(o.parents("li")).addClass(t.opened)), h = s.filter("." + t.opened), h.length || (h = e.first()), h.addClass(t.opened).last().addClass(t.current), this.opts.slidingSubmenus && e.not(h.last()).addClass(t.hidden).end().appendTo(this.$menu), e
            },
            _initLinks: function (i) {
                var u = this;
                return this.__findAddBack(i, "." + t.list).find("> li > a").not("." + t.subopen).not("." + t.subclose).not('[rel="external"]').not('[target="_blank" rel="noopener noreferrer"]').off(r.click).on(r.click, function (i) {
                    var e = n(this),
                        s = e.attr("href") || "",
                        o;
                    u.__valueOrFn(u.opts.onClick.setSelected, e) && e.parent().trigger(r.setSelected);
                    o = u.__valueOrFn(u.opts.onClick.preventDefault, e, "#" == s.slice(0, 1));
                    o && i.preventDefault();
                    u.__valueOrFn(u.opts.onClick.blockUI, e, !o) && f.$html.addClass(t.blocking);
                    u.__valueOrFn(u.opts.onClick.close, e, o) && u.$menu.triggerHandler(r.close)
                }), i
            },
            _bindCustomEvents: function (i) {
                var u = this;
                return i.off(r.toggle + " " + r.open + " " + r.close).on(r.toggle + " " + r.open + " " + r.close, function (n) {
                    n.stopPropagation()
                }), this.opts.slidingSubmenus ? i.on(r.open, function () {
                    return u._openSubmenuHorizontal(n(this))
                }) : i.on(r.toggle, function () {
                    var i = n(this);
                    return i.triggerHandler(i.parent().hasClass(t.opened) ? r.close : r.open)
                }).on(r.open, function () {
                    return n(this).parent().addClass(t.opened), "open"
                }).on(r.close, function () {
                    return n(this).parent().removeClass(t.opened), "close"
                }), i
            },
            _openSubmenuHorizontal: function (i) {
                if (i.hasClass(t.current)) return !1;
                var u = n("." + t.panel, this.$menu),
                    r = u.filter("." + t.current);
                return u.removeClass(t.highest).removeClass(t.current).not(i).not(r).addClass(t.hidden), i.hasClass(t.opened) ? r.addClass(t.highest).removeClass(t.opened).removeClass(t.subopened) : (i.addClass(t.highest), r.addClass(t.subopened)), i.removeClass(t.hidden).addClass(t.current), setTimeout(function () {
                    i.removeClass(t.subopened).addClass(t.opened)
                }, this.conf.openingInterval), "open"
            },
            _update: function (n) {
                if (this.updates || (this.updates = []), "function" == typeof n) this.updates.push(n);
                else
                    for (var t = 0, i = this.updates.length; i > t; t++) this.updates[t].call(this, n)
            },
            __valueOrFn: function (n, t, i) {
                return "function" == typeof n ? n.call(t[0]) : "undefined" == typeof n && "undefined" != typeof i ? i : n
            },
            __refactorClass: function (n, i, r) {
                n.filter("." + i).removeClass(i).addClass(t[r])
            },
            __findAddBack: function (n, t) {
                return n.find(t).add(n.filter(t))
            },
            __transitionend: function (n, t, i) {
                var f = !1,
                    u = function () {
                        f || t.call(n[0]);
                        f = !0
                    };
                n.one(r.transitionend, u);
                n.one(r.webkitTransitionEnd, u);
                setTimeout(u, 1.1 * i)
            },
            __getUniqueId: function () {
                return t.mm(n[i].uniqueId++)
            }
        };
        n.fn[i] = function (t, r) {
            return o || h(), t = e(t, r), r = s(r), this.each(function () {
                var u = n(this);
                u.data(i) || u.data(i, new n[i](u, t, r))
            })
        };
        n[i].support = {
            touch: "ontouchstart" in window.document
        };
        n[i].debug = function () { };
        n[i].deprecated = function (n, t) {
            "undefined" != typeof console && "undefined" != typeof console.warn && console.warn("MMENU: " + n + " is deprecated, use " + t + " instead.")
        }
    }
}(jQuery);
! function (n) {
    function s(t) {
        return ("top" == t.position || "bottom" == t.position) && ("back" == t.zposition || "next" == t.zposition) && (n[f].deprecated('Using position "' + t.position + '" in combination with zposition "' + t.zposition + '"', 'zposition "front"'), t.zposition = "front"), t
    }

    function h(n) {
        return "string" != typeof n.pageSelector && (n.pageSelector = "> " + n.pageNodetype), n
    }

    function c() {
        o = !0;
        r = n[f]._c;
        e = n[f]._d;
        u = n[f]._e;
        r.add("offcanvas modal background opening blocker page");
        e.add("style");
        u.add("opening opened closing closed setPage");
        i = n[f].glbl;
        i.$allMenus = (i.$allMenus || n()).add(this.$menu);
        i.$wndw.on(u.keydown, function (n) {
            if (i.$html.hasClass(r.opened) && 9 == n.keyCode) return (n.preventDefault(), !1)
        });
        var t = 0;
        i.$wndw.on(u.resize, function (n, u) {
            if (u || i.$html.hasClass(r.opened)) {
                var f = i.$wndw.height();
                (u || f != t) && (t = f, i.$page.css("minHeight", f))
            }
        })
    }
    var f = "mmenu",
        t = "offCanvas",
        r, e, u, i, o;
    n[f].prototype["_init_" + t] = function () {
        if (this.opts[t] && !this.vars[t + "_added"]) {
            this.vars[t + "_added"] = !0;
            o || c();
            this.opts[t] = s(this.opts[t]);
            this.conf[t] = h(this.conf[t]);
            var n = this.opts[t],
                f = this.conf[t],
                u = [r.offcanvas];
            "boolean" != typeof this.vars.opened && (this.vars.opened = !1);
            "left" != n.position && u.push(r.mm(n.position));
            "back" != n.zposition && u.push(r.mm(n.zposition));
            this.$menu.addClass(u.join(" ")).parent().removeClass(r.wrapper);
            this[t + "_initPage"](i.$page);
            this[t + "_initBlocker"]();
            this[t + "_initOpenClose"]();
            this[t + "_bindCustomEvents"]();
            this.$menu[f.menuInjectMethod + "To"](f.menuWrapperSelector)
        }
    };
    n[f].addons.push(t);
    n[f].defaults[t] = {
        position: "left",
        zposition: "back",
        modal: !1,
        moveBackground: !0
    };
    n[f].configuration[t] = {
        pageNodetype: "div",
        pageSelector: null,
        menuWrapperSelector: "body",
        menuInjectMethod: "prepend"
    };
    n[f].prototype.open = function () {
        if (this.vars.opened) return !1;
        var n = this;
        return this._openSetup(), setTimeout(function () {
            n._openFinish()
        }, this.conf.openingInterval), "open"
    };
    n[f].prototype._openSetup = function () {
        i.$allMenus.not(this.$menu).trigger(u.close);
        i.$page.data(e.style, i.$page.attr("style") || "");
        i.$wndw.trigger(u.resize, [!0]);
        var n = [r.opened];
        this.opts[t].modal && n.push(r.modal);
        this.opts[t].moveBackground && n.push(r.background);
        "left" != this.opts[t].position && n.push(r.mm(this.opts[t].position));
        "back" != this.opts[t].zposition && n.push(r.mm(this.opts[t].zposition));
        this.opts.classes && n.push(this.opts.classes);
        i.$html.addClass(n.join(" "));
        this.vars.opened = !0;
        this.$menu.addClass(r.current + " " + r.opened)
    };
    n[f].prototype._openFinish = function () {
        var n = this;
        this.__transitionend(i.$page, function () {
            n.$menu.trigger(u.opened)
        }, this.conf.transitionDuration);
        i.$html.addClass(r.opening);
        this.$menu.trigger(u.opening)
    };
    n[f].prototype.close = function () {
        if (!this.vars.opened) return !1;
        var n = this;
        return this.__transitionend(i.$page, function () {
            n.$menu.removeClass(r.current).removeClass(r.opened);
            i.$html.removeClass(r.opened).removeClass(r.modal).removeClass(r.background).removeClass(r.mm(n.opts[t].position)).removeClass(r.mm(n.opts[t].zposition));
            n.opts.classes && i.$html.removeClass(n.opts.classes);
            i.$page.attr("style", i.$page.data(e.style));
            n.vars.opened = !1;
            n.$menu.trigger(u.closed)
        }, this.conf.transitionDuration), i.$html.removeClass(r.opening), this.$menu.trigger(u.closing), "close"
    };
    n[f].prototype[t + "_initBlocker"] = function () {
        var t = this;
        i.$blck || (i.$blck = n('<div id="' + r.blocker + '" />').appendTo(i.$body));
        i.$blck.off(u.touchstart).on(u.touchstart, function (n) {
            n.preventDefault();
            n.stopPropagation();
            i.$blck.trigger(u.mousedown)
        }).on(u.mousedown, function (n) {
            n.preventDefault();
            i.$html.hasClass(r.modal) || t.close()
        })
    };
    n[f].prototype[t + "_initPage"] = function (u) {
        u || (u = n(this.conf[t].pageSelector, i.$body), u.length > 1 && (n[f].debug("Multiple nodes found for the page-node, all nodes are wrapped in one <" + this.conf[t].pageNodetype + ">."), u = u.wrapAll("<" + this.conf[t].pageNodetype + " />").parent()));
        u.addClass(r.page);
        i.$page = u
    };
    n[f].prototype[t + "_initOpenClose"] = function () {
        var f = this,
            t = this.$menu.attr("id");
        t && t.length && (this.conf.clone && (t = r.umm(t)), n('a[href="#' + t + '"]').off(u.click).on(u.click, function (n) {
            n.preventDefault();
            f.open()
        }));
        t = i.$page.attr("id");
        t && t.length && n('a[href="#' + t + '"]').on(u.click, function (n) {
            n.preventDefault();
            f.close()
        })
    };
    n[f].prototype[t + "_bindCustomEvents"] = function () {
        var n = this,
            i = u.open + " " + u.opening + " " + u.opened + " " + u.close + " " + u.closing + " " + u.closed + " " + u.setPage;
        this.$menu.off(i).on(i, function (n) {
            n.stopPropagation()
        });
        this.$menu.on(u.open, function () {
            n.open()
        }).on(u.close, function () {
            n.close()
        }).on(u.setPage, function (i, r) {
            n[t + "_initPage"](r);
            n[t + "_initOpenClose"]()
        })
    };
    o = !1
}(jQuery);
! function (n) {
    function f(n) {
        return n
    }

    function e(n) {
        return n
    }

    function o() {
        u = !0;
        r = n[i]._c;
        s = n[i]._d;
        h = n[i]._e;
        r.add("buttonbar");
        c = n[i].glbl
    }
    var i = "mmenu",
        t = "buttonbars",
        r, s, h, c, u;
    n[i].prototype["_init_" + t] = function (i) {
        u || o();
        var s = this.vars[t + "_added"];
        this.vars[t + "_added"] = !0;
        s || (this.opts[t] = f(this.opts[t]), this.conf[t] = e(this.conf[t]));
        this.opts[t];
        this.conf[t];
        this.__refactorClass(n("div", i), this.conf.classNames[t].buttonbar, "buttonbar");
        n("div." + r.buttonbar, i).each(function () {
            var t = n(this),
                i = t.children().not("input"),
                u = t.children().filter("input");
            t.addClass(r.buttonbar + "-" + i.length);
            u.each(function () {
                var t = n(this),
                    r = i.filter('label[for="' + t.attr("id") + '"]');
                r.length && t.insertBefore(r)
            })
        })
    };
    n[i].addons.push(t);
    n[i].defaults[t] = {};
    n[i].configuration.classNames[t] = {
        buttonbar: "Buttonbar"
    };
    u = !1
}(jQuery);
! function (n) {
    function e(i) {
        return "boolean" == typeof i && (i = {
            add: i,
            update: i
        }), "object" != typeof i && (i = {}), i = n.extend(!0, {}, n[r].defaults[t], i)
    }

    function o(n) {
        return n
    }

    function s() {
        f = !0;
        i = n[r]._c;
        u = n[r]._d;
        h = n[r]._e;
        i.add("counter search noresultsmsg");
        u.add("updatecounter");
        c = n[r].glbl
    }
    var r = "mmenu",
        t = "counters",
        i, u, h, c, f;
    n[r].prototype["_init_" + t] = function (r) {
        var c, l, h;
        f || s();
        c = this.vars[t + "_added"];
        this.vars[t + "_added"] = !0;
        c || (this.opts[t] = e(this.opts[t]), this.conf[t] = o(this.conf[t]));
        l = this;
        h = this.opts[t];
        this.conf[t];
        this.__refactorClass(n("em", r), this.conf.classNames[t].counter, "counter");
        h.add && r.each(function () {
            var t = n(this).data(u.parent);
            t && (t.find("> em." + i.counter).length || t.prepend(n('<em class="' + i.counter + '" />')))
        });
        h.update && r.each(function () {
            var t = n(this),
                f = t.data(u.parent),
                r;
            f && (r = f.find("> em." + i.counter), r.length && (t.is("." + i.list) || (t = t.find("> ." + i.list)), t.length && !t.data(u.updatecounter) && (t.data(u.updatecounter, !0), l._update(function () {
                var n = t.children().not("." + i.label).not("." + i.subtitle).not("." + i.hidden).not("." + i.search).not("." + i.noresultsmsg);
                r.html(n.length)
            }))))
        })
    };
    n[r].addons.push(t);
    n[r].defaults[t] = {
        add: !1,
        update: !1
    };
    n[r].configuration.classNames[t] = {
        counter: "Counter"
    };
    f = !1
}(jQuery);
! function (n) {
    function e(n, t, i) {
        return t > n && (n = t), n > i && (n = i), n
    }

    function s(r) {
        return "boolean" == typeof r && (r = {
            open: r
        }), "object" != typeof r && (r = {}), r = n.extend(!0, {}, n[i].defaults[t], r)
    }

    function h(n) {
        return n
    }

    function c() {
        f = !0;
        u = n[i]._c;
        l = n[i]._d;
        o = n[i]._e;
        u.add("dragging");
        r = n[i].glbl
    }
    var i = "mmenu",
        t = "dragOpen",
        u, l, o, r, f;
    n[i].prototype["_init_" + t] = function () {
        var d, p, ft;
        if ("function" == typeof Hammer && this.opts.offCanvas && !this.vars[t + "_added"]) {
            this.vars[t + "_added"] = !0;
            f || c();
            this.opts[t] = s(this.opts[t]);
            this.conf[t] = h(this.conf[t]);
            var w = this,
                b = this.opts[t],
                nt = this.conf[t];
            if (b.open) {
                if (Hammer.VERSION < 2) return n[i].deprecated("Older version of the Hammer library", "version 2 or newer"), !1;
                var y, g, tt, it, l = {},
                    a = 0,
                    rt = !1,
                    v = !1,
                    k = 0,
                    ut = 0;
                switch (this.opts.offCanvas.position) {
                    case "left":
                    case "right":
                        l.events = "panleft panright";
                        l.typeLower = "x";
                        l.typeUpper = "X";
                        v = "width";
                        break;
                    case "top":
                    case "bottom":
                        l.events = "panup pandown";
                        l.typeLower = "y";
                        l.typeUpper = "Y";
                        v = "height"
                }
                switch (this.opts.offCanvas.position) {
                    case "left":
                    case "top":
                        l.negative = !1;
                        break;
                    case "right":
                    case "bottom":
                        l.negative = !0
                }
                switch (this.opts.offCanvas.position) {
                    case "left":
                        l.open_dir = "right";
                        l.close_dir = "left";
                        break;
                    case "right":
                        l.open_dir = "left";
                        l.close_dir = "right";
                        break;
                    case "top":
                        l.open_dir = "down";
                        l.close_dir = "up";
                        break;
                    case "bottom":
                        l.open_dir = "up";
                        l.close_dir = "down"
                }
                d = this.__valueOrFn(b.pageNode, this.$menu, r.$page);
                "string" == typeof d && (d = n(d));
                p = r.$page;
                switch (this.opts.offCanvas.zposition) {
                    case "front":
                        p = this.$menu;
                        break;
                    case "next":
                        p = p.add(this.$menu)
                }
                ft = new Hammer(d[0]);
                ft.on("panstart", function (n) {
                    switch (it = n.center[l.typeLower], w.opts.offCanvas.position) {
                        case "right":
                        case "bottom":
                            it >= r.$wndw[v]() - b.maxStartPos && (a = 1);
                            break;
                        default:
                            it <= b.maxStartPos && (a = 1)
                    }
                    rt = l.open_dir
                }).on(l.events + " panend", function (n) {
                    a > 0 && n.preventDefault()
                }).on(l.events, function (n) {
                    if (y = n["delta" + l.typeUpper], l.negative && (y = -y), y != k && (rt = y >= k ? l.open_dir : l.close_dir), k = y, k > b.threshold && 1 == a) {
                        if (r.$html.hasClass(u.opened)) return;
                        a = 2;
                        w._openSetup();
                        w.$menu.trigger(o.opening);
                        r.$html.addClass(u.dragging);
                        ut = e(r.$wndw[v]() * nt[v].perc, nt[v].min, nt[v].max)
                    }
                    2 == a && (g = e(k, 10, ut) - ("front" == w.opts.offCanvas.zposition ? ut : 0), l.negative && (g = -g), tt = "translate" + l.typeUpper + "(" + g + "px )", p.css({
                        "-webkit-transform": "-webkit-" + tt,
                        transform: tt
                    }))
                }).on("panend", function () {
                    2 == a && (r.$html.removeClass(u.dragging), p.css("transform", ""), w[rt == l.open_dir ? "_openFinish" : "close"]());
                    a = 0
                })
            }
        }
    };
    n[i].addons.push(t);
    n[i].defaults[t] = {
        open: !1,
        maxStartPos: 100,
        threshold: 50
    };
    n[i].configuration[t] = {
        width: {
            perc: .8,
            min: 140,
            max: 440
        },
        height: {
            perc: .8,
            min: 140,
            max: 880
        }
    };
    f = !1
}(jQuery);
! function (n) {
    function o(n) {
        return n
    }

    function s(n) {
        return n
    }

    function h() {
        e = !0;
        u = n[i]._c;
        c = n[i]._d;
        f = n[i]._e;
        u.add("fixed-top fixed-bottom");
        r = n[i].glbl
    }
    var i = "mmenu",
        t = "fixedElements",
        u, c, f, r, e;
    n[i].prototype["_init_" + t] = function () {
        var i, c, l;
        if (this.opts.offCanvas && (e || h(), i = this.vars[t + "_added"], this.vars[t + "_added"] = !0, i || (this.opts[t] = o(this.opts[t]), this.conf[t] = s(this.conf[t])), this.opts[t], this.conf[t], this.__refactorClass(n("div, span, a", r.$page), this.conf.classNames[t].fixedTop, "fixed-top"), this.__refactorClass(n("div, span, a", r.$page), this.conf.classNames[t].fixedBottom, "fixed-bottom"), !i)) this.$menu.on(f.opening, function () {
            var t = n(window).scrollTop(),
                i = r.$page.height() - t - r.$wndw.height();
            c = n("." + u["fixed-top"]);
            l = n("." + u["fixed-bottom"]);
            c.css({
                "-webkit-transform": "translateY( " + t + "px )",
                transform: "translateY( " + t + "px )"
            });
            l.css({
                "-webkit-transform": "translateY( -" + i + "px )",
                transform: "translateY( -" + i + "px )"
            })
        }).on(f.closed, function () {
            c.add(l).css({
                "-webkit-transform": "none",
                transform: "none"
            })
        })
    };
    n[i].addons.push(t);
    n[i].defaults[t] = {};
    n[i].configuration.classNames[t] = {
        fixedTop: "FixedTop",
        fixedBottom: "FixedBottom"
    };
    e = !1
}(jQuery);
! function (n) {
    function e(r) {
        return "boolean" == typeof r && (r = {
            add: r,
            update: r
        }), "object" != typeof r && (r = {}), r = n.extend(!0, {}, n[i].defaults[t], r)
    }

    function o(n) {
        return n
    }

    function s() {
        u = !0;
        r = n[i]._c;
        h = n[i]._d;
        f = n[i]._e;
        r.add("footer hasfooter");
        c = n[i].glbl
    }
    var i = "mmenu",
        t = "footer",
        r, h, f, c, u;
    n[i].prototype["_init_" + t] = function (i) {
        var l, a, h, v, c;
        u || s();
        l = this.vars[t + "_added"];
        this.vars[t + "_added"] = !0;
        l || (this.opts[t] = e(this.opts[t]), this.conf[t] = o(this.conf[t]));
        a = this;
        h = this.opts[t];
        (this.conf[t], !l && h.add) && (v = h.content ? h.content : h.title, n('<div class="' + r.footer + '" />').appendTo(this.$menu).append(v));
        c = n("div." + r.footer, this.$menu);
        c.length && (this.$menu.addClass(r.hasfooter), h.update && i.each(function () {
            var u = n(this),
                o = n("." + a.conf.classNames[t].panelFooter, u),
                i = o.html(),
                e;
            i || (i = h.title);
            e = function () {
                c[i ? "show" : "hide"]();
                c.html(i)
            };
            u.on(f.open, e);
            u.hasClass(r.current) && e()
        }), "function" == typeof this._init_buttonbars && this._init_buttonbars(c))
    };
    n[i].addons.push(t);
    n[i].defaults[t] = {
        add: !1,
        content: !1,
        title: "",
        update: !1
    };
    n[i].configuration.classNames[t] = {
        panelFooter: "Footer"
    };
    u = !1
}(jQuery);
! function (n) {
    function o(i) {
        return "boolean" == typeof i && (i = {
            add: i,
            update: i
        }), "object" != typeof i && (i = {}), i = n.extend(!0, {}, n[r].defaults[t], i)
    }

    function s(n) {
        return n
    }

    function h() {
        e = !0;
        i = n[r]._c;
        c = n[r]._d;
        u = n[r]._e;
        i.add("header hasheader prev next title");
        f = n[r].glbl
    }
    var r = "mmenu",
        t = "header",
        i, c, u, f, e;
    n[r].prototype["_init_" + t] = function (r) {
        var v, c, l, b, a;
        if (e || h(), v = this.vars[t + "_added"], this.vars[t + "_added"] = !0, v || (this.opts[t] = o(this.opts[t]), this.conf[t] = s(this.conf[t])), c = this, l = this.opts[t], (this.conf[t], !v && l.add) && (b = l.content ? l.content : '<a class="' + i.prev + '" href="#"><\/a><span class="' + i.title + '"><\/span><a class="' + i.next + '" href="#"><\/a>', n('<div class="' + i.header + '" />').prependTo(this.$menu).append(b)), a = n("div." + i.header, this.$menu), a.length) {
            if (this.$menu.addClass(i.hasheader), l.update) {
                var k = a.find("." + i.title),
                    y = a.find("." + i.prev),
                    p = a.find("." + i.next),
                    w = !1;
                f.$page && (w = "#" + f.$page.attr("id"));
                v || y.add(p).off(u.click).on(u.click, function (t) {
                    t.preventDefault();
                    t.stopPropagation();
                    var i = n(this).attr("href");
                    "#" !== i && (w && i == w ? c.$menu.trigger(u.close) : n(i, c.$menu).trigger(u.open))
                });
                r.each(function () {
                    var r = n(this),
                        b = n("." + c.conf.classNames[t].panelHeader, r),
                        s = n("." + c.conf.classNames[t].panelPrev, r),
                        h = n("." + c.conf.classNames[t].panelNext, r),
                        f = b.html(),
                        e = s.attr("href"),
                        o = h.attr("href");
                    f || (f = n("." + i.subclose, r).html());
                    f || (f = l.title);
                    e || (e = n("." + i.subclose, r).attr("href"));
                    var a = s.html(),
                        v = h.html(),
                        w = function () {
                            k[f ? "show" : "hide"]();
                            k.html(f);
                            y[e ? "attr" : "removeAttr"]("href", e);
                            y[e || a ? "show" : "hide"]();
                            y.html(a);
                            p[o ? "attr" : "removeAttr"]("href", o);
                            p[o || v ? "show" : "hide"]();
                            p.html(v)
                        };
                    r.on(u.open, w);
                    r.hasClass(i.current) && w()
                })
            }
            "function" == typeof this._init_buttonbars && this._init_buttonbars(a)
        }
    };
    n[r].addons.push(t);
    n[r].defaults[t] = {
        add: !1,
        content: !1,
        title: "Menu",
        update: !1
    };
    n[r].configuration.classNames[t] = {
        panelHeader: "Header",
        panelNext: "Next",
        panelPrev: "Prev"
    };
    e = !1
}(jQuery);
! function (n) {
    function o(i) {
        return "boolean" == typeof i && (i = {
            collapse: i
        }), "object" != typeof i && (i = {}), i = n.extend(!0, {}, n[r].defaults[t], i)
    }

    function s(n) {
        return n
    }

    function h() {
        e = !0;
        i = n[r]._c;
        u = n[r]._d;
        f = n[r]._e;
        i.add("collapsed");
        u.add("updatelabel");
        c = n[r].glbl
    }
    var r = "mmenu",
        t = "labels",
        i, u, f, c, e;
    n[r].prototype["_init_" + t] = function (r) {
        var l, c;
        e || h();
        l = this.vars[t + "_added"];
        this.vars[t + "_added"] = !0;
        l || (this.opts[t] = o(this.opts[t]), this.conf[t] = s(this.conf[t]));
        c = this.opts[t];
        this.conf[t];
        c.collapse && (this.__refactorClass(n("li", this.$menu), this.conf.classNames[t].collapsed, "collapsed"), n("." + i.label, r).each(function () {
            var t = n(this),
                r = t.nextUntil("." + i.label, "all" == c.collapse ? null : "." + i.collapsed);
            "all" == c.collapse && (t.addClass(i.opened), r.removeClass(i.collapsed));
            r.length && (t.data(u.updatelabel) || (t.data(u.updatelabel, !0), t.wrapInner("<span />"), t.prepend('<a href="#" class="' + i.subopen + " " + i.fullsubopen + '" />')), t.find("a." + i.subopen).off(f.click).on(f.click, function (n) {
                n.preventDefault();
                t.toggleClass(i.opened);
                r[t.hasClass(i.opened) ? "removeClass" : "addClass"](i.collapsed)
            }))
        }))
    };
    n[r].addons.push(t);
    n[r].defaults[t] = {
        collapse: !1
    };
    n[r].configuration.classNames[t] = {
        collapsed: "Collapsed"
    };
    e = !1
}(jQuery);
! function (n) {
    function o(n) {
        switch (n) {
            case 9:
            case 16:
            case 17:
            case 18:
            case 37:
            case 38:
            case 39:
            case 40:
                return !0
        }
        return !1
    }

    function s(t) {
        return "boolean" == typeof t && (t = {
            add: t,
            search: t
        }), "object" != typeof t && (t = {}), t = n.extend(!0, {}, n[u].defaults[r], t), "boolean" != typeof t.showLinksOnly && (t.showLinksOnly = "menu" == t.addTo), t
    }

    function h(n) {
        return n
    }

    function c() {
        f = !0;
        t = n[u]._c;
        e = n[u]._d;
        i = n[u]._e;
        t.add("search hassearch noresultsmsg noresults nosubresults");
        i.add("search reset change");
        l = n[u].glbl
    }
    var u = "mmenu",
        r = "searchfield",
        t, e, i, l, f;
    n[u].prototype["_init_" + r] = function (u) {
        var p, a, l, v, y;
        if (f || c(), p = this.vars[r + "_added"], this.vars[r + "_added"] = !0, p || (this.opts[r] = s(this.opts[r]), this.conf[r] = h(this.conf[r])), a = this, l = this.opts[r], this.conf[r], l.add) {
            switch (l.addTo) {
                case "menu":
                    v = this.$menu;
                    break;
                case "panels":
                    v = u;
                    break;
                default:
                    v = n(l.addTo, this.$menu).filter("." + t.panel)
            }
            v.length && v.each(function () {
                var i = n(this),
                    r = i.is("." + t.list) ? "li" : "div",
                    u, f;
                i.children(r + "." + t.search).length || (i.is("." + t.menu) ? (u = a.$menu, f = "prependTo") : (u = i.children().first(), f = u.is("." + t.subtitle) ? "insertAfter" : "insertBefore"), n("<" + r + ' class="' + t.search + '" />').append('<input placeholder="' + l.placeholder + '" type="text" autocomplete="off" />')[f](u));
                l.noResults && (i.is("." + t.menu) && (i = i.children("." + t.panel).first()), r = i.is("." + t.list) ? "li" : "div", i.children(r + "." + t.noresultsmsg).length || n("<" + r + ' class="' + t.noresultsmsg + '" />').html(l.noResults).appendTo(i))
            })
        } (this.$menu.children("div." + t.search).length && this.$menu.addClass(t.hassearch), l.search) && (y = n("." + t.search, this.$menu), y.length && y.each(function () {
            var r = n(this),
                u, f;
            "menu" == l.addTo ? (u = n("." + t.panel, a.$menu), f = a.$menu) : (u = r.closest("." + t.panel), f = u);
            var s = r.children("input"),
                c = a.__findAddBack(u, "." + t.list).children("li"),
                y = c.filter("." + t.label),
                h = c.not("." + t.subtitle).not("." + t.label).not("." + t.search).not("." + t.noresultsmsg),
                v = "> a";
            l.showLinksOnly || (v += ", > span");
            s.off(i.keyup + " " + i.change).on(i.keyup, function (n) {
                o(n.keyCode) || r.trigger(i.search)
            }).on(i.change, function () {
                r.trigger(i.search)
            });
            r.off(i.reset + " " + i.search).on(i.reset + " " + i.search, function (n) {
                n.stopPropagation()
            }).on(i.reset, function () {
                r.trigger(i.search, [""])
            }).on(i.search, function (r, o) {
                "string" == typeof o ? s.val(o) : o = s.val();
                o = o.toLowerCase();
                u.scrollTop(0);
                h.add(y).addClass(t.hidden);
                h.each(function () {
                    var i = n(this);
                    n(v, i).text().toLowerCase().indexOf(o) > -1 && i.add(i.prevAll("." + t.label).first()).removeClass(t.hidden)
                });
                n(u.get().reverse()).each(function (r) {
                    var u = n(this),
                        f = u.data(e.parent),
                        o;
                    f && (o = u.add(u.find("> ." + t.list)).find("> li").not("." + t.subtitle).not("." + t.search).not("." + t.noresultsmsg).not("." + t.label).not("." + t.hidden), o.length ? f.removeClass(t.hidden).removeClass(t.nosubresults).prevAll("." + t.label).first().removeClass(t.hidden) : "menu" == l.addTo && (u.hasClass(t.opened) && setTimeout(function () {
                        f.trigger(i.open)
                    }, 1.5 * (r + 1) * a.conf.openingInterval), f.addClass(t.nosubresults)))
                });
                f[h.not("." + t.hidden).length ? "removeClass" : "addClass"](t.noresults);
                a._update()
            })
        }))
    };
    n[u].addons.push(r);
    n[u].defaults[r] = {
        add: !1,
        addTo: "menu",
        search: !1,
        placeholder: "Search",
        noResults: "No results found."
    };
    f = !1
}(jQuery);
! function (n) {
    function f(n) {
        return n
    }

    function e(n) {
        return n
    }

    function o() {
        u = !0;
        r = n[i]._c;
        s = n[i]._d;
        h = n[i]._e;
        r.add("toggle check");
        c = n[i].glbl
    }
    var i = "mmenu",
        t = "toggles",
        r, s, h, c, u;
    n[i].prototype["_init_" + t] = function (i) {
        var s, h;
        u || o();
        s = this.vars[t + "_added"];
        this.vars[t + "_added"] = !0;
        s || (this.opts[t] = f(this.opts[t]), this.conf[t] = e(this.conf[t]));
        h = this;
        this.opts[t];
        this.conf[t];
        this.__refactorClass(n("input", i), this.conf.classNames[t].toggle, "toggle");
        this.__refactorClass(n("input", i), this.conf.classNames[t].check, "check");
        n("input." + r.toggle, i).add("input." + r.check, i).each(function () {
            var t = n(this),
                i = t.closest("li"),
                f = t.hasClass(r.toggle) ? "toggle" : "check",
                u = t.attr("id") || h.__getUniqueId();
            i.children('label[for="' + u + '"]').length || (t.attr("id", u), i.prepend(t), n('<label for="' + u + '" class="' + r[f] + '"><\/label>').insertBefore(i.children().last()))
        })
    };
    n[i].addons.push(t);
    n[i].defaults[t] = {};
    n[i].configuration.classNames[t] = {
        toggle: "Toggle",
        check: "Check"
    };
    u = !1
}(jQuery);
$(function () {
    $(window).load(function () {
        fix_imageCenter();
        $(".TeamList .item a").click(function () {
            $("#team_box_" + $(this).attr("sid")).addClass("show");
            $("body").addClass("fixed")
        })
    })
});
commonHelper = {
    redirect: function (n) {
        document.location = n
    },
    enterClick: function (n, t) {
        if (13 == (window.event ? n.keyCode : n.which)) return commonHelper.doClick(t), !1
    },
    doClick: function (n) {
        var i = document.getElementById(n),
            t;
        document.all && "object" == typeof document.all ? i.click() : (t = document.createEvent("MouseEvents"), t.initEvent("click", !0, !0), i.dispatchEvent(t))
    },
    trim: function (n) {
        return n ? n = (n = n.replace(/^(\r\n|\n)/g, "").replace(/(\r\n|\n)$/g, "")).replace(/^\s+/g, "").replace(/\s+$/g, "") : n
    },
    switchCheckBoxList: function (n, t, i) {
        var r = n.is(":checked");
        $("input[name='" + t + "']", i).each(function () {
            $(this).prop("checked", r)
        })
    },
    validateNumber: function (n, t) {
        if (!/^\d+$/.test(t)) {
            var i = /^\d+/.exec(n.value);
            n.value = null != i ? i : ""
        }
        return !1
    },
    validateNumber2: function (n, t) {
        if (!/^-\d*$/.test(t)) {
            var i = /^-\d*/.exec(n.value);
            n.value = null != i ? i : ""
        }
        return !1
    },
    validateNumber3: function (n, t) {
        if (!/^-?\d*$/.test(t)) {
            var i = /^-?\d*/.exec(n.value);
            n.value = null != i ? i : ""
        }
        return !1
    },
    validateFloat: function (n, t) {
        if (!/^\d+[.]?\d*$/.test(t)) {
            var i = /^\d+[.]?\d*/.exec(n.value);
            n.value = null != i ? i : ""
        }
        return !1
    },
    validateFloat1: function (n, t) {
        if (!/^\d+[.]?[0-9]?$/.test(t)) {
            var i = /\d+[.]?[0-9]?/.exec(n.value);
            n.value = null != i ? i : ""
        }
        return !1
    },
    validateFloat2: function (n, t) {
        if (!/^\d+[.]?[0-9]?[0-9]?$/.test(t)) {
            var i = /\d+[.]?[0-9]?[0-9]?/.exec(n.value);
            n.value = null != i ? i : ""
        }
        return !1
    },
    validateSingleLine: function (n) {
        return 13 == (window.event ? n.keyCode : n.which) && (n.returnValue = !1), !1
    },
    validateFloat4: function (n, t) {
        if (!/^\d+[.]?[0-9]?[0-9]?[0-9]?[0-9]?$/.test(t)) {
            var i = /\d+[.]?[0-9]?[0-9]?[0-9]?[0-9]?/.exec(n.value);
            n.value = null != i ? i : ""
        }
        return !1
    },
    validateEmail: function (n) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())
    },
    gotoScrollTop: function (n) {
        return (window.opera ? "CSS1Compat" == document.compatMode ? $("html") : $("body") : $("html,body")).animate({
            scrollTop: n || 0
        }, 600), !1
    },
    gotoNextInput: function (n, t, i) {
        n.value.length == i && t.focus()
    },
    isNumber: function (n) {
        return /^[0-9]+$/.test(n)
    },
    isDate: function (n) {
        var i = /^(\d{4})-(\d{2})-(\d{2})$/,
            t = n.replace("/", "-");
        return i.exec(t), "" == t || !(!i.test(t) && RegExp.$2 <= 12 && RegExp.$3 <= 31)
    },
    accDiv: function (arg1, arg2) {
        var t1 = 0,
            t2 = 0,
            r1, r2;
        try {
            t1 = arg1.toString().split(".")[1].length
        } catch (n) { }
        try {
            t2 = arg2.toString().split(".")[1].length
        } catch (n) { }
        with (Math) return r1 = Number(arg1.toString().replace(".", "")), r2 = Number(arg2.toString().replace(".", "")), r1 / r2 * pow(10, t2 - t1)
    },
    accMul: function (n, t) {
        var i = 0,
            r = n.toString(),
            u = t.toString();
        try {
            i += r.split(".")[1].length
        } catch (n) { }
        try {
            i += u.split(".")[1].length
        } catch (n) { }
        return Number(r.replace(".", "")) * Number(u.replace(".", "")) / Math.pow(10, i)
    },
    accAdd: function (n, t) {
        var i, r, u;
        try {
            i = n.toString().split(".")[1].length
        } catch (n) {
            i = 0
        }
        try {
            r = t.toString().split(".")[1].length
        } catch (n) {
            r = 0
        }
        return (n * (u = Math.pow(10, Math.max(i, r))) + t * u) / u
    },
    accSub: function (n, t) {
        var i, r, u;
        try {
            i = n.toString().split(".")[1].length
        } catch (n) {
            i = 0
        }
        try {
            r = t.toString().split(".")[1].length
        } catch (n) {
            r = 0
        }
        return (n * (u = Math.pow(10, Math.max(i, r))) - t * u) / u
    },
    htmlEncode: function (n) {
        return n.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    },
    htmlDecode: function (n) {
        return n.replace(/&#?\w+;/g, this.decodeEntity)
    },
    decodeEntity: function (n) {
        if ("#" !== n.charAt(1)) return {
            "&nbsp;": " ",
            "&iexcl;": "¡",
            "&cent;": "¢",
            "&pound;": "£",
            "&curren;": "¤",
            "&yen;": "¥",
            "&brvbar;": "¦",
            "&sect;": "§",
            "&uml;": "¨",
            "&copy;": "©",
            "&ordf;": "ª",
            "&laquo;": "«",
            "&not;": "¬",
            "&shy;": "­",
            "&reg;": "®",
            "&macr;": "¯",
            "&deg;": "°",
            "&plusmn;": "±",
            "&sup2;": "²",
            "&sup3;": "³",
            "&acute;": "´",
            "&micro;": "µ",
            "&para;": "¶",
            "&middot;": "·",
            "&cedil;": "¸",
            "&sup1;": "¹",
            "&ordm;": "º",
            "&raquo;": "»",
            "&frac14;": "¼",
            "&frac12;": "½",
            "&frac34;": "¾",
            "&iquest;": "¿",
            "&Agrave;": "À",
            "&Aacute;": "Á",
            "&Acirc;": "Â",
            "&Atilde;": "Ã",
            "&Auml;": "Ä",
            "&Aring;": "Å",
            "&AElig;": "Æ",
            "&Ccedil;": "Ç",
            "&Egrave;": "È",
            "&Eacute;": "É",
            "&Ecirc;": "Ê",
            "&Euml;": "Ë",
            "&Igrave;": "Ì",
            "&Iacute;": "Í",
            "&Icirc;": "Î",
            "&Iuml;": "Ï",
            "&ETH;": "Ð",
            "&Ntilde;": "Ñ",
            "&Ograve;": "Ò",
            "&Oacute;": "Ó",
            "&Ocirc;": "Ô",
            "&Otilde;": "Õ",
            "&Ouml;": "Ö",
            "&times;": "×",
            "&Oslash;": "Ø",
            "&Ugrave;": "Ù",
            "&Uacute;": "Ú",
            "&Ucirc;": "Û",
            "&Uuml;": "Ü",
            "&Yacute;": "Ý",
            "&THORN;": "Þ",
            "&szlig;": "ß",
            "&agrave;": "à",
            "&aacute;": "á",
            "&acirc;": "â",
            "&atilde;": "ã",
            "&auml;": "ä",
            "&aring;": "å",
            "&aelig;": "æ",
            "&ccedil;": "ç",
            "&egrave;": "è",
            "&eacute;": "é",
            "&ecirc;": "ê",
            "&euml;": "ë",
            "&igrave;": "ì",
            "&iacute;": "í",
            "&icirc;": "î",
            "&iuml;": "ï",
            "&eth;": "ð",
            "&ntilde;": "ñ",
            "&ograve;": "ò",
            "&oacute;": "ó",
            "&ocirc;": "ô",
            "&otilde;": "õ",
            "&ouml;": "ö",
            "&divide;": "÷",
            "&oslash;": "ø",
            "&ugrave;": "ù",
            "&uacute;": "ú",
            "&ucirc;": "û",
            "&uuml;": "ü",
            "&yacute;": "ý",
            "&thorn;": "þ",
            "&yuml;": "ÿ",
            "&quot;": '"',
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&apos;": "'",
            "&OElig;": "Œ",
            "&oelig;": "œ",
            "&Scaron;": "Š",
            "&scaron;": "š",
            "&Yuml;": "Ÿ",
            "&circ;": "ˆ",
            "&tilde;": "˜",
            "&ensp;": " ",
            "&emsp;": " ",
            "&thinsp;": " ",
            "&zwnj;": "‌",
            "&zwj;": "‍",
            "&lrm;": "‎",
            "&rlm;": "‏",
            "&ndash;": "–",
            "&mdash;": "—",
            "&lsquo;": "‘",
            "&rsquo;": "’",
            "&sbquo;": "‚",
            "&ldquo;": "“",
            "&rdquo;": "”",
            "&bdquo;": "„",
            "&dagger;": "†",
            "&Dagger;": "‡",
            "&permil;": "‰",
            "&lsaquo;": "‹",
            "&rsaquo;": "›",
            "&euro;": "€",
            "&fnof;": "ƒ",
            "&Alpha;": "Α",
            "&Beta;": "Β",
            "&Gamma;": "Γ",
            "&Delta;": "Δ",
            "&Epsilon;": "Ε",
            "&Zeta;": "Ζ",
            "&Eta;": "Η",
            "&Theta;": "Θ",
            "&Iota;": "Ι",
            "&Kappa;": "Κ",
            "&Lambda;": "Λ",
            "&Mu;": "Μ",
            "&Nu;": "Ν",
            "&Xi;": "Ξ",
            "&Omicron;": "Ο",
            "&Pi;": "Π",
            "&Rho;": "Ρ",
            "&Sigma;": "Σ",
            "&Tau;": "Τ",
            "&Upsilon;": "Υ",
            "&Phi;": "Φ",
            "&Chi;": "Χ",
            "&Psi;": "Ψ",
            "&Omega;": "Ω",
            "&alpha;": "α",
            "&beta;": "β",
            "&gamma;": "γ",
            "&delta;": "δ",
            "&epsilon;": "ε",
            "&zeta;": "ζ",
            "&eta;": "η",
            "&theta;": "θ",
            "&iota;": "ι",
            "&kappa;": "κ",
            "&lambda;": "λ",
            "&mu;": "μ",
            "&nu;": "ν",
            "&xi;": "ξ",
            "&omicron;": "ο",
            "&pi;": "π",
            "&rho;": "ρ",
            "&sigmaf;": "ς",
            "&sigma;": "σ",
            "&tau;": "τ",
            "&upsilon;": "υ",
            "&phi;": "φ",
            "&chi;": "χ",
            "&psi;": "ψ",
            "&omega;": "ω",
            "&thetasym;": "ϑ",
            "&upsih;": "ϒ",
            "&piv;": "ϖ",
            "&bull;": "•",
            "&hellip;": "…",
            "&prime;": "′",
            "&Prime;": "″",
            "&oline;": "‾",
            "&frasl;": "⁄",
            "&weierp;": "℘",
            "&image;": "ℑ",
            "&real;": "ℜ",
            "&trade;": "™",
            "&alefsym;": "ℵ",
            "&larr;": "←",
            "&uarr;": "↑",
            "&rarr;": "→",
            "&darr;": "↓",
            "&harr;": "↔",
            "&crarr;": "↵",
            "&lArr;": "⇐",
            "&uArr;": "⇑",
            "&rArr;": "⇒",
            "&dArr;": "⇓",
            "&hArr;": "⇔",
            "&forall;": "∀",
            "&part;": "∂",
            "&exist;": "∃",
            "&empty;": "∅",
            "&nabla;": "∇",
            "&isin;": "∈",
            "&notin;": "∉",
            "&ni;": "∋",
            "&prod;": "∏",
            "&sum;": "∑",
            "&minus;": "−",
            "&lowast;": "∗",
            "&radic;": "√",
            "&prop;": "∝",
            "&infin;": "∞",
            "&ang;": "∠",
            "&and;": "∧",
            "&or;": "∨",
            "&cap;": "∩",
            "&cup;": "∪",
            "&int;": "∫",
            "&there4;": "∴",
            "&sim;": "∼",
            "&cong;": "≅",
            "&asymp;": "≈",
            "&ne;": "≠",
            "&equiv;": "≡",
            "&le;": "≤",
            "&ge;": "≥",
            "&sub;": "⊂",
            "&sup;": "⊃",
            "&nsub;": "⊄",
            "&sube;": "⊆",
            "&supe;": "⊇",
            "&oplus;": "⊕",
            "&otimes;": "⊗",
            "&perp;": "⊥",
            "&sdot;": "⋅",
            "&lceil;": "⌈",
            "&rceil;": "⌉",
            "&lfloor;": "⌊",
            "&rfloor;": "⌋",
            "&lang;": "〈",
            "&rang;": "〉",
            "&loz;": "◊",
            "&spades;": "♠",
            "&clubs;": "♣",
            "&hearts;": "♥",
            "&diams;": "♦"
        }[n] || n;
        var i, t = n.charAt(2);
        return "x" === t || "X" === t ? (t = n.substring(3, n.length - 1), i = parseInt(t, 16)) : (t = n.substring(2, n.length - 1), i = parseInt(t)), isNaN(i) ? n : String.fromCharCode(i)
    }
};
Number.prototype.div = function (n) {
    return commonHelper.accDiv(this, n)
};
Number.prototype.mul = function (n) {
    return commonHelper.accMul(n, this)
};
Number.prototype.add = function (n) {
    return commonHelper.accAdd(n, this)
};
Number.prototype.sub = function (n) {
    return commonHelper.accSub(this, n)
};
Math.formatFloat = function (n, t) {
    var i = Math.pow(10, t);
    return parseInt(n * i, 10) / i
};
$(function () {
    $.extend({
        getUrlVars: function () {
            for (var n, t = [], r = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), i = 0; i < r.length; i++) n = r[i].split("="), t.push(n[0]), t[n[0]] = n[1];
            return t
        },
        getUrlVar: function (n) {
            var t = $.getUrlVars()[n];
            return t || ""
        }
    })
}),
    function (n) {
        n.extend(n.fn, {
            checkBind: function (t, i) {
                var r = n._data(this[0], "events");
                r && r[t] || n(this).bind(t, i)
            },
            restrictInt: function () {
                n(this).keydown(function (t) {
                    -1 !== n.inArray(t.keyCode, [46, 8, 9, 27, 13, 110]) || 65 == t.keyCode && (!0 === t.ctrlKey || !0 === t.metaKey) || 35 <= t.keyCode && t.keyCode <= 40 || (t.shiftKey || t.keyCode < 48 || 57 < t.keyCode && 189 != t.keyCode && 190 != t.keyCode) && (t.keyCode < 96 || 105 < t.keyCode) && t.preventDefault()
                });
                n(this).keyup(function () {
                    /[^0-9]/g.test(this.value) && (this.value = this.value.replace(/[^0-9]/g, ""))
                })
            }
        })
    }(jQuery),
    function () {
        "use strict";

        function n(n) {
            function s(s, h) {
                var rt, ut, p = s == window,
                    l = h && h.message !== undefined ? h.message : undefined,
                    g, k, d, tt, nt, w, b, it, ft, et, at;
                if (h = n.extend({}, n.blockUI.defaults, h || {}), !h.ignoreIfBlocked || !n(s).data("blockUI.isBlocked")) {
                    if (h.overlayCSS = n.extend({}, n.blockUI.defaults.overlayCSS, h.overlayCSS || {}), rt = n.extend({}, n.blockUI.defaults.css, h.css || {}), h.onOverlayClick && (h.overlayCSS.cursor = "pointer"), ut = n.extend({}, n.blockUI.defaults.themedCSS, h.themedCSS || {}), l = l === undefined ? h.message : l, p && t && e(window, {
                        fadeOut: 0
                    }), l && typeof l != "string" && (l.parentNode || l.jquery) && (g = l.jquery ? l[0] : l, k = {}, n(s).data("blockUI.history", k), k.el = g, k.parent = g.parentNode, k.display = g.style.display, k.position = g.style.position, k.parent && k.parent.removeChild(g)), n(s).data("blockUI.onUnblock", h.onUnblock), d = h.baseZ, tt = f || h.forceIframe ? n('<iframe class="blockUI" style="z-index:' + d++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + h.iframeSrc + '"><\/iframe>') : n('<div class="blockUI" style="display:none"><\/div>'), nt = h.theme ? n('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + d++ + ';display:none"><\/div>') : n('<div class="blockUI blockOverlay" style="z-index:' + d++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"><\/div>'), h.theme && p ? (b = '<div class="blockUI ' + h.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (d + 10) + ';display:none;position:fixed">', h.title && (b += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (h.title || " ") + "<\/div>"), b += '<div class="ui-widget-content ui-dialog-content"><\/div>', b += "<\/div>") : h.theme ? (b = '<div class="blockUI ' + h.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (d + 10) + ';display:none;position:absolute">', h.title && (b += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (h.title || " ") + "<\/div>"), b += '<div class="ui-widget-content ui-dialog-content"><\/div>', b += "<\/div>") : b = p ? '<div class="blockUI ' + h.blockMsgClass + ' blockPage" style="z-index:' + (d + 10) + ';display:none;position:fixed"><\/div>' : '<div class="blockUI ' + h.blockMsgClass + ' blockElement" style="z-index:' + (d + 10) + ';display:none;position:absolute"><\/div>', w = n(b), l && (h.theme ? (w.css(ut), w.addClass("ui-widget-content")) : w.css(rt)), h.theme || nt.css(h.overlayCSS), nt.css("position", p ? "fixed" : "absolute"), (f || h.forceIframe) && tt.css("opacity", 0), it = [tt, nt, w], ft = p ? n("body") : n(s), n.each(it, function () {
                        this.appendTo(ft)
                    }), h.theme && h.draggable && n.fn.draggable && w.draggable({
                        handle: ".ui-dialog-titlebar",
                        cancel: "li"
                    }), et = v && (!n.support.boxModel || n("object,embed", p ? null : s).length > 0), o || et) {
                        if (p && h.allowBodyStretch && n.support.boxModel && n("html,body").css("height", "100%"), (o || !n.support.boxModel) && !p) var ot = r(s, "borderTopWidth"),
                            st = r(s, "borderLeftWidth"),
                            ht = ot ? "(0 - " + ot + ")" : 0,
                            ct = st ? "(0 - " + st + ")" : 0;
                        n.each(it, function (n, t) {
                            var i = t[0].style,
                                r, u;
                            i.position = "absolute";
                            n < 2 ? (p ? i.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + h.quirksmodeOffsetHack + ') + "px"') : i.setExpression("height", 'this.parentNode.offsetHeight + "px"'), p ? i.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : i.setExpression("width", 'this.parentNode.offsetWidth + "px"'), ct && i.setExpression("left", ct), ht && i.setExpression("top", ht)) : h.centerY ? (p && i.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), i.marginTop = 0) : !h.centerY && p && (r = h.css && h.css.top ? parseInt(h.css.top, 10) : 0, u = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + r + ') + "px"', i.setExpression("top", u))
                        })
                    }
                    if (l && (h.theme ? w.find(".ui-widget-content").append(l) : w.append(l), (l.jquery || l.nodeType) && n(l).show()), (f || h.forceIframe) && h.showOverlay && tt.show(), h.fadeIn) {
                        var lt = h.onBlock ? h.onBlock : u,
                            vt = h.showOverlay && !l ? lt : u,
                            yt = l ? lt : u;
                        h.showOverlay && nt._fadeIn(h.fadeIn, vt);
                        l && w._fadeIn(h.fadeIn, yt)
                    } else h.showOverlay && nt.show(), l && w.show(), h.onBlock && h.onBlock.bind(w)();
                    c(1, s, h);
                    p ? (t = w[0], i = n(h.focusableElements, t), h.focusInput && setTimeout(a, 20)) : y(w[0], h.centerX, h.centerY);
                    h.timeout && (at = setTimeout(function () {
                        p ? n.unblockUI(h) : n(s).unblock(h)
                    }, h.timeout), n(s).data("blockUI.timeout", at))
                }
            }

            function e(r, u) {
                var o, s = r == window,
                    e = n(r),
                    l = e.data("blockUI.history"),
                    a = e.data("blockUI.timeout"),
                    f;
                a && (clearTimeout(a), e.removeData("blockUI.timeout"));
                u = n.extend({}, n.blockUI.defaults, u || {});
                c(0, r, u);
                u.onUnblock === null && (u.onUnblock = e.data("blockUI.onUnblock"), e.removeData("blockUI.onUnblock"));
                f = s ? n("body").children().filter(".blockUI").add("body > .blockUI") : e.find(">.blockUI");
                u.cursorReset && (f.length > 1 && (f[1].style.cursor = u.cursorReset), f.length > 2 && (f[2].style.cursor = u.cursorReset));
                s && (t = i = null);
                u.fadeOut ? (o = f.length, f.stop().fadeOut(u.fadeOut, function () {
                    --o == 0 && h(f, l, u, r)
                })) : h(f, l, u, r)
            }

            function h(t, i, r, u) {
                var f = n(u);
                if (!f.data("blockUI.isBlocked")) {
                    if (t.each(function () {
                        this.parentNode && this.parentNode.removeChild(this)
                    }), i && i.el && (i.el.style.display = i.display, i.el.style.position = i.position, i.el.style.cursor = "default", i.parent && i.parent.appendChild(i.el), f.removeData("blockUI.history")), f.data("blockUI.static") && f.css("position", "static"), typeof r.onUnblock == "function") r.onUnblock(u, r);
                    var e = n(document.body),
                        o = e.width(),
                        s = e[0].style.width;
                    e.width(o - 1).width(o);
                    e[0].style.width = s
                }
            }

            function c(i, r, u) {
                var f = r == window,
                    o = n(r),
                    e;
                (i || (!f || t) && (f || o.data("blockUI.isBlocked"))) && (o.data("blockUI.isBlocked", i), f && u.bindEvents && (!i || u.showOverlay)) && (e = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove", i ? n(document).bind(e, u, l) : n(document).unbind(e, l))
            }

            function l(r) {
                var u, f;
                if (r.type === "keydown" && r.keyCode && r.keyCode == 9 && t && r.data.constrainTabKey) {
                    var e = i,
                        s = !r.shiftKey && r.target === e[e.length - 1],
                        o = r.shiftKey && r.target === e[0];
                    if (s || o) return setTimeout(function () {
                        a(o)
                    }, 10), !1
                }
                if (u = r.data, f = n(r.target), f.hasClass("blockOverlay") && u.onOverlayClick) u.onOverlayClick(r);
                return f.parents("div." + u.blockMsgClass).length > 0 ? !0 : f.parents().children().filter("div.blockUI").length === 0
            }

            function a(n) {
                if (i) {
                    var t = i[n === !0 ? i.length - 1 : 0];
                    t && t.focus()
                }
            }

            function y(n, t, i) {
                var u = n.parentNode,
                    f = n.style,
                    e = (u.offsetWidth - n.offsetWidth) / 2 - r(u, "borderLeftWidth"),
                    o = (u.offsetHeight - n.offsetHeight) / 2 - r(u, "borderTopWidth");
                t && (f.left = e > 0 ? e + "px" : "0");
                i && (f.top = o > 0 ? o + "px" : "0")
            }

            function r(t, i) {
                return parseInt(n.css(t, i), 10) || 0
            }
            var t, i;
            n.fn._fadeIn = n.fn.fadeIn;
            var u = n.noop || function () { },
                f = /MSIE/.test(navigator.userAgent),
                o = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
                p = document.documentMode || 0,
                v = n.isFunction(document.createElement("div").style.setExpression);
            n.blockUI = function (n) {
                s(window, n)
            };
            n.unblockUI = function (n) {
                e(window, n)
            };
            n.growlUI = function (t, i, r, u) {
                var f = n('<div class="growlUI"><\/div>'),
                    e, o;
                t && f.append("<h1>" + t + "<\/h1>");
                i && f.append("<h2>" + i + "<\/h2>");
                r === undefined && (r = 3e3);
                e = function (t) {
                    t = t || {};
                    n.blockUI({
                        message: f,
                        fadeIn: typeof t.fadeIn != "undefined" ? t.fadeIn : 700,
                        fadeOut: typeof t.fadeOut != "undefined" ? t.fadeOut : 1e3,
                        timeout: typeof t.timeout != "undefined" ? t.timeout : r,
                        centerY: !1,
                        showOverlay: !1,
                        onUnblock: u,
                        css: n.blockUI.defaults.growlCSS
                    })
                };
                e();
                o = f.css("opacity");
                f.mouseover(function () {
                    e({
                        fadeIn: 0,
                        timeout: 3e4
                    });
                    var t = n(".blockMsg");
                    t.stop();
                    t.fadeTo(300, 1)
                }).mouseout(function () {
                    n(".blockMsg").fadeOut(1e3)
                })
            };
            n.fn.block = function (t) {
                if (this[0] === window) return n.blockUI(t), this;
                var i = n.extend({}, n.blockUI.defaults, t || {});
                return this.each(function () {
                    var t = n(this);
                    i.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                        fadeOut: 0
                    })
                }), this.each(function () {
                    n.css(this, "position") == "static" && (this.style.position = "relative", n(this).data("blockUI.static", !0));
                    this.style.zoom = 1;
                    s(this, t)
                })
            };
            n.fn.unblock = function (t) {
                return this[0] === window ? (n.unblockUI(t), this) : this.each(function () {
                    e(this, t)
                })
            };
            n.blockUI.version = 2.7;
            n.blockUI.defaults = {
                message: "<h1>Please wait...<\/h1>",
                title: null,
                draggable: !0,
                theme: !1,
                css: {
                    padding: 0,
                    margin: 0,
                    width: "30%",
                    top: "40%",
                    left: "35%",
                    textAlign: "center",
                    color: "#000",
                    border: "3px solid #aaa",
                    backgroundColor: "#fff",
                    cursor: "wait"
                },
                themedCSS: {
                    width: "30%",
                    top: "40%",
                    left: "35%"
                },
                overlayCSS: {
                    backgroundColor: "#000",
                    opacity: .6,
                    cursor: "wait"
                },
                cursorReset: "default",
                growlCSS: {
                    width: "350px",
                    top: "10px",
                    left: "",
                    right: "10px",
                    border: "none",
                    padding: "5px",
                    opacity: .6,
                    cursor: "default",
                    color: "#fff",
                    backgroundColor: "#000",
                    "-webkit-border-radius": "10px",
                    "-moz-border-radius": "10px",
                    "border-radius": "10px"
                },
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
                forceIframe: !1,
                baseZ: 1e3,
                centerX: !0,
                centerY: !0,
                allowBodyStretch: !0,
                bindEvents: !0,
                constrainTabKey: !0,
                fadeIn: 200,
                fadeOut: 400,
                timeout: 0,
                showOverlay: !0,
                focusInput: !0,
                focusableElements: ":input:enabled:visible",
                onBlock: null,
                onUnblock: null,
                onOverlayClick: null,
                quirksmodeOffsetHack: 4,
                blockMsgClass: "blockMsg",
                ignoreIfBlocked: !1
            };
            t = null;
            i = []
        }
        typeof define == "function" && define.amd && define.amd.jQuery ? define(["jquery"], n) : n(jQuery)
    }();
LZString = function () {
    function r(n, t) {
        if (!i[n]) {
            i[n] = {};
            for (var r = 0; r < n.length; r++) i[n][n.charAt(r)] = r
        }
        return i[n][t]
    }
    var t = String.fromCharCode,
        u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
        i = {},
        n = {
            compressToBase64: function (t) {
                if (null == t) return "";
                var i = n._compress(t, 6, function (n) {
                    return u.charAt(n)
                });
                switch (i.length % 4) {
                    default:
                    case 0:
                        return i;
                    case 1:
                        return i + "===";
                    case 2:
                        return i + "==";
                    case 3:
                        return i + "="
                }
            },
            decompressFromBase64: function (t) {
                return null == t ? "" : "" == t ? null : n._decompress(t.length, 32, function (n) {
                    return r(u, t.charAt(n))
                })
            },
            compressToUTF16: function (i) {
                return null == i ? "" : n._compress(i, 15, function (n) {
                    return t(n + 32)
                }) + " "
            },
            decompressFromUTF16: function (t) {
                return null == t ? "" : "" == t ? null : n._decompress(t.length, 16384, function (n) {
                    return t.charCodeAt(n) - 32
                })
            },
            compressToUint8Array: function (t) {
                for (var f, r = n.compress(t), u = new Uint8Array(2 * r.length), i = 0, e = r.length; e > i; i++) f = r.charCodeAt(i), u[2 * i] = f >>> 8, u[2 * i + 1] = f % 256;
                return u
            },
            decompressFromUint8Array: function (i) {
                var f;
                if (null === i || void 0 === i) return n.decompress(i);
                for (var u = new Array(i.length / 2), r = 0, e = u.length; e > r; r++) u[r] = 256 * i[2 * r] + i[2 * r + 1];
                return f = [], u.forEach(function (n) {
                    f.push(t(n))
                }), n.decompress(f.join(""))
            },
            compressToEncodedURIComponent: function (t) {
                return null == t ? "" : n._compress(t, 6, function (n) {
                    return f.charAt(n)
                })
            },
            decompressFromEncodedURIComponent: function (t) {
                return null == t ? "" : "" == t ? null : (t = t.replace(/ /g, "+"), n._decompress(t.length, 32, function (n) {
                    return r(f, t.charAt(n))
                }))
            },
            compress: function (i) {
                return n._compress(i, 16, function (n) {
                    return t(n)
                })
            },
            _compress: function (n, t, i) {
                if (null == n) return "";
                for (var f, e, l = {}, v = {}, a = "", p = "", o = "", c = 2, w = 3, s = 2, h = [], r = 0, u = 0, y = 0; y < n.length; y += 1)
                    if (a = n.charAt(y), Object.prototype.hasOwnProperty.call(l, a) || (l[a] = w++ , v[a] = !0), p = o + a, Object.prototype.hasOwnProperty.call(l, p)) o = p;
                    else {
                        if (Object.prototype.hasOwnProperty.call(v, o)) {
                            if (o.charCodeAt(0) < 256) {
                                for (f = 0; s > f; f++) r <<= 1, u == t - 1 ? (u = 0, h.push(i(r)), r = 0) : u++;
                                for (e = o.charCodeAt(0), f = 0; 8 > f; f++) r = r << 1 | 1 & e, u == t - 1 ? (u = 0, h.push(i(r)), r = 0) : u++ , e >>= 1
                            } else {
                                for (e = 1, f = 0; s > f; f++) r = r << 1 | e, u == t - 1 ? (u = 0, h.push(i(r)), r = 0) : u++ , e = 0;
                                for (e = o.charCodeAt(0), f = 0; 16 > f; f++) r = r << 1 | 1 & e, u == t - 1 ? (u = 0, h.push(i(r)), r = 0) : u++ , e >>= 1
                            }
                            c--;
                            0 == c && (c = Math.pow(2, s), s++);
                            delete v[o]
                        } else
                            for (e = l[o], f = 0; s > f; f++) r = r << 1 | 1 & e, u == t - 1 ? (u = 0, h.push(i(r)), r = 0) : u++ , e >>= 1;
                        c--;
                        0 == c && (c = Math.pow(2, s), s++);
                        l[p] = w++;
                        o = String(a)
                    } if ("" !== o) {
                        if (Object.prototype.hasOwnProperty.call(v, o)) {
                            if (o.charCodeAt(0) < 256) {
                                for (f = 0; s > f; f++) r <<= 1, u == t - 1 ? (u = 0, h.push(i(r)), r = 0) : u++;
                                for (e = o.charCodeAt(0), f = 0; 8 > f; f++) r = r << 1 | 1 & e, u == t - 1 ? (u = 0, h.push(i(r)), r = 0) : u++ , e >>= 1
                            } else {
                                for (e = 1, f = 0; s > f; f++) r = r << 1 | e, u == t - 1 ? (u = 0, h.push(i(r)), r = 0) : u++ , e = 0;
                                for (e = o.charCodeAt(0), f = 0; 16 > f; f++) r = r << 1 | 1 & e, u == t - 1 ? (u = 0, h.push(i(r)), r = 0) : u++ , e >>= 1
                            }
                            c--;
                            0 == c && (c = Math.pow(2, s), s++);
                            delete v[o]
                        } else
                            for (e = l[o], f = 0; s > f; f++) r = r << 1 | 1 & e, u == t - 1 ? (u = 0, h.push(i(r)), r = 0) : u++ , e >>= 1;
                        c--;
                        0 == c && (c = Math.pow(2, s), s++)
                    }
                for (e = 2, f = 0; s > f; f++) r = r << 1 | 1 & e, u == t - 1 ? (u = 0, h.push(i(r)), r = 0) : u++ , e >>= 1;
                for (; ;) {
                    if (r <<= 1, u == t - 1) {
                        h.push(i(r));
                        break
                    }
                    u++
                }
                return h.join("")
            },
            decompress: function (t) {
                return null == t ? "" : "" == t ? null : n._decompress(t.length, 32768, function (n) {
                    return t.charCodeAt(n)
                })
            },
            _decompress: function (n, i, r) {
                for (var k, y, e, o, s, f, h, c = [], l = 4, a = 4, p = 3, w = "", b = [], u = {
                    val: r(0),
                    position: i,
                    index: 1
                }, v = 0; 3 > v; v += 1) c[v] = v;
                for (e = 0, s = Math.pow(2, 2), f = 1; f != s;) o = u.val & u.position, u.position >>= 1, 0 == u.position && (u.position = i, u.val = r(u.index++)), e |= (o > 0 ? 1 : 0) * f, f <<= 1;
                switch (k = e) {
                    case 0:
                        for (e = 0, s = Math.pow(2, 8), f = 1; f != s;) o = u.val & u.position, u.position >>= 1, 0 == u.position && (u.position = i, u.val = r(u.index++)), e |= (o > 0 ? 1 : 0) * f, f <<= 1;
                        h = t(e);
                        break;
                    case 1:
                        for (e = 0, s = Math.pow(2, 16), f = 1; f != s;) o = u.val & u.position, u.position >>= 1, 0 == u.position && (u.position = i, u.val = r(u.index++)), e |= (o > 0 ? 1 : 0) * f, f <<= 1;
                        h = t(e);
                        break;
                    case 2:
                        return ""
                }
                for (c[3] = h, y = h, b.push(h); ;) {
                    if (u.index > n) return "";
                    for (e = 0, s = Math.pow(2, p), f = 1; f != s;) o = u.val & u.position, u.position >>= 1, 0 == u.position && (u.position = i, u.val = r(u.index++)), e |= (o > 0 ? 1 : 0) * f, f <<= 1;
                    switch (h = e) {
                        case 0:
                            for (e = 0, s = Math.pow(2, 8), f = 1; f != s;) o = u.val & u.position, u.position >>= 1, 0 == u.position && (u.position = i, u.val = r(u.index++)), e |= (o > 0 ? 1 : 0) * f, f <<= 1;
                            c[a++] = t(e);
                            h = a - 1;
                            l--;
                            break;
                        case 1:
                            for (e = 0, s = Math.pow(2, 16), f = 1; f != s;) o = u.val & u.position, u.position >>= 1, 0 == u.position && (u.position = i, u.val = r(u.index++)), e |= (o > 0 ? 1 : 0) * f, f <<= 1;
                            c[a++] = t(e);
                            h = a - 1;
                            l--;
                            break;
                        case 2:
                            return b.join("")
                    }
                    if (0 == l && (l = Math.pow(2, p), p++), c[h]) w = c[h];
                    else {
                        if (h !== a) return null;
                        w = y + y.charAt(0)
                    }
                    b.push(w);
                    c[a++] = y + w.charAt(0);
                    l--;
                    y = w;
                    0 == l && (l = Math.pow(2, p), p++)
                }
            }
        };
    return n
}();
"function" == typeof define && define.amd ? define(function () {
    return LZString
}) : "undefined" != typeof module && null != module && (module.exports = LZString),
    function e(n, t, i) {
        function r(u, e) {
            var s, h, o;
            if (!t[u]) {
                if (!n[u]) {
                    if (s = typeof require == "function" && require, !e && s) return s(u, !0);
                    if (f) return f(u, !0);
                    h = new Error("Cannot find module '" + u + "'");
                    throw h.code = "MODULE_NOT_FOUND", h;
                }
                o = t[u] = {
                    exports: {}
                };
                n[u][0].call(o.exports, function (t) {
                    var i = n[u][1][t];
                    return r(i ? i : t)
                }, o, o.exports, e, n, t, i)
            }
            return t[u].exports
        }
        for (var f = typeof require == "function" && require, u = 0; u < i.length; u++) r(i[u]);
        return r
    }({
        1: [function (n, t, i) {
            function f() {
                return {
                    a: ["target", "href", "title"],
                    abbr: ["title"],
                    address: [],
                    area: ["shape", "coords", "href", "alt"],
                    article: [],
                    aside: [],
                    audio: ["autoplay", "controls", "loop", "preload", "src"],
                    b: [],
                    bdi: ["dir"],
                    bdo: ["dir"],
                    big: [],
                    blockquote: ["cite"],
                    br: [],
                    caption: [],
                    center: [],
                    cite: [],
                    code: [],
                    col: ["align", "valign", "span", "width"],
                    colgroup: ["align", "valign", "span", "width"],
                    dd: [],
                    del: ["datetime"],
                    details: ["open"],
                    div: [],
                    dl: [],
                    dt: [],
                    em: [],
                    font: ["color", "size", "face"],
                    footer: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    header: [],
                    hr: [],
                    i: [],
                    img: ["src", "alt", "title", "width", "height"],
                    ins: ["datetime"],
                    li: [],
                    mark: [],
                    nav: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    section: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    table: ["width", "border", "align", "valign"],
                    tbody: ["align", "valign"],
                    td: ["width", "rowspan", "colspan", "align", "valign"],
                    tfoot: ["align", "valign"],
                    th: ["width", "rowspan", "colspan", "align", "valign"],
                    thead: ["align", "valign"],
                    tr: ["rowspan", "align", "valign"],
                    tt: [],
                    u: [],
                    ul: [],
                    video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
                }
            }

            function d() { }

            function g() { }

            function nt() { }

            function tt() { }

            function o(n) {
                return n.replace(rt, "&lt;").replace(ut, "&gt;")
            }

            function it(n, t, i, f) {
                if (i = p(i), t === "href" || t === "src") {
                    if (i = r.trim(i), i === "#") return "#";
                    if (!(i.substr(0, 7) === "http://" || i.substr(0, 8) === "https://" || i.substr(0, 7) === "mailto:" || i.substr(0, 4) === "tel:" || i[0] === "#" || i[0] === "/")) return ""
                } else if (t === "background") {
                    if (u.lastIndex = 0, u.test(i)) return ""
                } else if (t === "style") {
                    if ((s.lastIndex = 0, s.test(i)) || (h.lastIndex = 0, h.test(i) && (u.lastIndex = 0, u.test(i)))) return "";
                    f !== !1 && (f = f || e, i = f.process(i))
                }
                return w(i)
            }

            function c(n) {
                return n.replace(ft, "&quot;")
            }

            function l(n) {
                return n.replace(et, '"')
            }

            function a(n) {
                return n.replace(ot, function (n, t) {
                    return t[0] === "x" || t[0] === "X" ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10))
                })
            }

            function v(n) {
                return n.replace(st, ":").replace(ht, " ")
            }

            function y(n) {
                for (var i = "", t = 0, u = n.length; t < u; t++) i += n.charCodeAt(t) < 32 ? " " : n.charAt(t);
                return r.trim(i)
            }

            function p(n) {
                return n = l(n), n = a(n), n = v(n), y(n)
            }

            function w(n) {
                return n = c(n), o(n)
            }

            function ct() {
                return ""
            }

            function lt(n, t) {
                function e(t) {
                    return f ? !0 : r.indexOf(n, t) !== -1
                }
                var f, u, i;
                return typeof t != "function" && (t = function () { }), f = !Array.isArray(n), u = [], i = !1, {
                    onIgnoreTag: function (n, r, f) {
                        if (e(n)) {
                            if (f.isClosing) {
                                var o = "[/removed]",
                                    s = f.position + o.length;
                                return u.push([i !== !1 ? i : f.position, s]), i = !1, o
                            }
                            return i || (i = f.position), "[removed]"
                        }
                        return t(n, r, f)
                    },
                    remove: function (n) {
                        var i = "",
                            t = 0;
                        return r.forEach(u, function (r) {
                            i += n.slice(t, r[0]);
                            t = r[1]
                        }), i += n.slice(t)
                    }
                }
            }

            function at(n) {
                return n.replace(vt, "")
            }

            function yt(n) {
                var t = n.split("");
                return t = t.filter(function (n) {
                    var t = n.charCodeAt(0);
                    return t === 127 ? !1 : t <= 31 ? t === 10 || t === 13 ? !0 : !1 : !0
                }), t.join("")
            }
            var b = n("cssfilter").FilterCSS,
                k = n("cssfilter").getDefaultWhiteList,
                r = n("./util"),
                e = new b,
                rt = /</g,
                ut = />/g,
                ft = /"/g,
                et = /&quot;/g,
                ot = /&#([a-zA-Z0-9]*);?/gim,
                st = /&colon;?/gim,
                ht = /&newline;?/gim,
                u = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
                s = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
                h = /u\s*r\s*l\s*\(.*/gi,
                vt = /<!--[\s\S]*?-->/g;
            i.whiteList = f();
            i.getDefaultWhiteList = f;
            i.onTag = d;
            i.onIgnoreTag = g;
            i.onTagAttr = nt;
            i.onIgnoreTagAttr = tt;
            i.safeAttrValue = it;
            i.escapeHtml = o;
            i.escapeQuote = c;
            i.unescapeQuote = l;
            i.escapeHtmlEntities = a;
            i.escapeDangerHtml5Entities = v;
            i.clearNonPrintableCharacter = y;
            i.friendlyAttrValue = p;
            i.escapeAttrValue = w;
            i.onIgnoreTagStripAll = ct;
            i.StripTagBody = lt;
            i.stripCommentTag = at;
            i.stripBlankChar = yt;
            i.cssFilter = e;
            i.getDefaultCSSWhiteList = k
        }, {
            "./util": 4,
            cssfilter: 8
        }],
        2: [function (n, t, i) {
            function o(n, t) {
                var i = new e(t);
                return i.process(n)
            }
            var u = n("./default"),
                f = n("./parser"),
                e = n("./xss"),
                r;
            i = t.exports = o;
            i.FilterXSS = e;
            for (r in u) i[r] = u[r];
            for (r in f) i[r] = f[r];
            typeof window != "undefined" && (window.filterXSS = t.exports)
        }, {
            "./default": 1,
            "./parser": 3,
            "./xss": 5
        }],
        3: [function (n, t, i) {
            function f(n) {
                var i = r.spaceIndex(n),
                    t;
                return t = i === -1 ? n.slice(1, -1) : n.slice(1, i + 1), t = r.trim(t).toLowerCase(), t.slice(0, 1) === "/" && (t = t.slice(1)), t.slice(-1) === "/" && (t = t.slice(0, -1)), t
            }

            function e(n) {
                return n.slice(0, 2) === "<\/"
            }

            function o(n, t, i) {
                "user strict";
                for (var s = "", h = 0, o = !1, c = !1, r = 0, v = n.length, a = "", l = "", u, r = 0; r < v; r++)
                    if (u = n.charAt(r), o === !1) {
                        if (u === "<") {
                            o = r;
                            continue
                        }
                    } else if (c === !1) {
                        if (u === "<") {
                            s += i(n.slice(h, r));
                            o = r;
                            h = r;
                            continue
                        }
                        if (u === ">") {
                            s += i(n.slice(h, o));
                            l = n.slice(o, r + 1);
                            a = f(l);
                            s += t(o, s.length, a, l, e(l));
                            h = r + 1;
                            o = !1;
                            continue
                        }
                        if ((u === '"' || u === "'") && n.charAt(r - 1) === "=") {
                            c = u;
                            continue
                        }
                    } else if (u === c) {
                        c = !1;
                        continue
                    }
                return h < n.length && (s += i(n.substr(h))), s
            }

            function h(n, t) {
                "user strict";

                function v(n, i) {
                    if (n = r.trim(n), n = n.replace(s, "").toLowerCase(), !(n.length < 1)) {
                        var u = t(n, i || "");
                        u && y.push(u)
                    }
                }
                for (var a, h, o, f = 0, y = [], e = !1, p = n.length, i = 0; i < p; i++) {
                    if (a = n.charAt(i), e === !1 && a === "=") {
                        e = n.slice(f, i);
                        f = i + 1;
                        continue
                    }
                    if (e !== !1 && i === f && (a === '"' || a === "'") && n.charAt(i - 1) === "=")
                        if (o = n.indexOf(a, i + 1), o === -1) break;
                        else {
                            h = r.trim(n.slice(f + 1, o));
                            v(e, h);
                            e = !1;
                            i = o;
                            f = i + 1;
                            continue
                        } if (/\s|\n|\t/.test(a))
                        if (n = n.replace(/\s|\n|\t/g, " "), e === !1)
                            if (o = c(n, i), o === -1) {
                                h = r.trim(n.slice(f, i));
                                v(h);
                                e = !1;
                                f = i + 1;
                                continue
                            } else {
                                i = o - 1;
                                continue
                            }
                        else if (o = l(n, i - 1), o === -1) {
                            h = r.trim(n.slice(f, i));
                            h = u(h);
                            v(e, h);
                            e = !1;
                            f = i + 1;
                            continue
                        } else continue
                }
                return f < n.length && (e === !1 ? v(n.slice(f)) : v(e, u(r.trim(n.slice(f))))), r.trim(y.join(" "))
            }

            function c(n, t) {
                for (; t < n.length; t++) {
                    var i = n[t];
                    if (i !== " ") return i === "=" ? t : -1
                }
            }

            function l(n, t) {
                for (; t > 0; t--) {
                    var i = n[t];
                    if (i !== " ") return i === "=" ? t : -1
                }
            }

            function a(n) {
                return n[0] === '"' && n[n.length - 1] === '"' || n[0] === "'" && n[n.length - 1] === "'" ? !0 : !1
            }

            function u(n) {
                return a(n) ? n.substr(1, n.length - 2) : n
            }
            var r = n("./util"),
                s = /[^a-zA-Z0-9_:\.\-]/gim;
            i.parseTag = o;
            i.parseAttr = h
        }, {
            "./util": 4
        }],
        4: [function (n, t) {
            t.exports = {
                indexOf: function (n, t) {
                    var i, r;
                    if (Array.prototype.indexOf) return n.indexOf(t);
                    for (i = 0, r = n.length; i < r; i++)
                        if (n[i] === t) return i;
                    return -1
                },
                forEach: function (n, t, i) {
                    var r, u;
                    if (Array.prototype.forEach) return n.forEach(t, i);
                    for (r = 0, u = n.length; r < u; r++) t.call(i, n[r], r, n)
                },
                trim: function (n) {
                    return String.prototype.trim ? n.trim() : n.replace(/(^\s*)|(\s*$)/g, "")
                },
                spaceIndex: function (n) {
                    var t = /\s|\n|\t/.exec(n);
                    return t ? t.index : -1
                }
            }
        }, {}],
        5: [function (n, t) {
            function u(n) {
                return n === undefined || n === null
            }

            function c(n) {
                var i = r.spaceIndex(n),
                    t;
                return i === -1 ? {
                    html: "",
                    closing: n[n.length - 2] === "/"
                } : (n = r.trim(n.slice(i + 1, -1)), t = n[n.length - 1] === "/", t && (n = r.trim(n.slice(0, -1))), {
                    html: n,
                    closing: t
                })
            }

            function l(n) {
                var t = {};
                for (var i in n) t[i] = n[i];
                return t
            }

            function e(n) {
                n = l(n || {});
                n.stripIgnoreTag && (n.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), n.onIgnoreTag = i.onIgnoreTagStripAll);
                n.whiteList = n.whiteList || i.whiteList;
                n.onTag = n.onTag || i.onTag;
                n.onTagAttr = n.onTagAttr || i.onTagAttr;
                n.onIgnoreTag = n.onIgnoreTag || i.onIgnoreTag;
                n.onIgnoreTagAttr = n.onIgnoreTagAttr || i.onIgnoreTagAttr;
                n.safeAttrValue = n.safeAttrValue || i.safeAttrValue;
                n.escapeHtml = n.escapeHtml || i.escapeHtml;
                this.options = n;
                n.css === !1 ? this.cssFilter = !1 : (n.css = n.css || {}, this.cssFilter = new o(n.css))
            }
            var o = n("cssfilter").FilterCSS,
                i = n("./default"),
                f = n("./parser"),
                s = f.parseTag,
                h = f.parseAttr,
                r = n("./util");
            e.prototype.process = function (n) {
                var f, e;
                if (n = n || "", n = n.toString(), !n) return "";
                var l = this,
                    t = l.options,
                    a = t.whiteList,
                    y = t.onTag,
                    o = t.onIgnoreTag,
                    p = t.onTagAttr,
                    w = t.onIgnoreTagAttr,
                    b = t.safeAttrValue,
                    v = t.escapeHtml,
                    k = l.cssFilter;
                return t.stripBlankChar && (n = i.stripBlankChar(n)), t.allowCommentTag || (n = i.stripCommentTag(n)), f = !1, t.stripIgnoreTagBody && (f = i.StripTagBody(t.stripIgnoreTagBody, o), o = f.onIgnoreTag), e = s(n, function (n, t, i, f, e) {
                    var l = {
                        sourcePosition: n,
                        position: t,
                        isClosing: e,
                        isWhite: a.hasOwnProperty(i)
                    },
                        s = y(i, f, l);
                    if (!u(s)) return s;
                    if (l.isWhite) {
                        if (l.isClosing) return "<\/" + i + ">";
                        var d = c(f),
                            nt = a[i],
                            g = h(d.html, function (n, t) {
                                var e = r.indexOf(nt, n) !== -1,
                                    f = p(i, n, t, e);
                                return u(f) ? e ? (t = b(i, n, t, k), t ? n + '="' + t + '"' : n) : (f = w(i, n, t, e), !u(f)) ? f : void 0 : f
                            }),
                            f = "<" + i;
                        return g && (f += " " + g), d.closing && (f += " /"), f + ">"
                    }
                    return (s = o(i, f, l), !u(s)) ? s : v(f)
                }, v), f && (e = f.remove(e)), e
            };
            t.exports = e
        }, {
            "./default": 1,
            "./parser": 3,
            "./util": 4,
            cssfilter: 8
        }],
        6: [function (n, t) {
            function r(n) {
                return n === undefined || n === null
            }

            function e(n) {
                var t = {};
                for (var i in n) t[i] = n[i];
                return t
            }

            function u(n) {
                n = e(n || {});
                n.whiteList = n.whiteList || i.whiteList;
                n.onAttr = n.onAttr || i.onAttr;
                n.onIgnoreAttr = n.onIgnoreAttr || i.onIgnoreAttr;
                n.safeAttrValue = n.safeAttrValue || i.safeAttrValue;
                this.options = n
            }
            var i = n("./default"),
                f = n("./parser"),
                o = n("./util");
            u.prototype.process = function (n) {
                if (n = n || "", n = n.toString(), !n) return "";
                var i = this,
                    t = i.options,
                    u = t.whiteList,
                    e = t.onAttr,
                    o = t.onIgnoreAttr,
                    s = t.safeAttrValue;
                return f(n, function (n, t, i, f, h) {
                    var l = u[i],
                        c = !1,
                        v, a;
                    if (l === !0 ? c = l : typeof l == "function" ? c = l(f) : l instanceof RegExp && (c = l.test(f)), c !== !0 && (c = !1), f = s(i, f), f) return (v = {
                        position: t,
                        sourcePosition: n,
                        source: h,
                        isWhite: c
                    }, c) ? (a = e(i, f, v), r(a) ? i + ":" + f : a) : (a = o(i, f, v), !r(a)) ? a : void 0
                })
            };
            t.exports = u
        }, {
            "./default": 7,
            "./parser": 9,
            "./util": 10
        }],
        7: [function (n, t, i) {
            function r() {
                var n = {};
                return n["align-content"] = !1, n["align-items"] = !1, n["align-self"] = !1, n["alignment-adjust"] = !1, n["alignment-baseline"] = !1, n.all = !1, n["anchor-point"] = !1, n.animation = !1, n["animation-delay"] = !1, n["animation-direction"] = !1, n["animation-duration"] = !1, n["animation-fill-mode"] = !1, n["animation-iteration-count"] = !1, n["animation-name"] = !1, n["animation-play-state"] = !1, n["animation-timing-function"] = !1, n.azimuth = !1, n["backface-visibility"] = !1, n.background = !0, n["background-attachment"] = !0, n["background-clip"] = !0, n["background-color"] = !0, n["background-image"] = !0, n["background-origin"] = !0, n["background-position"] = !0, n["background-repeat"] = !0, n["background-size"] = !0, n["baseline-shift"] = !1, n.binding = !1, n.bleed = !1, n["bookmark-label"] = !1, n["bookmark-level"] = !1, n["bookmark-state"] = !1, n.border = !0, n["border-bottom"] = !0, n["border-bottom-color"] = !0, n["border-bottom-left-radius"] = !0, n["border-bottom-right-radius"] = !0, n["border-bottom-style"] = !0, n["border-bottom-width"] = !0, n["border-collapse"] = !0, n["border-color"] = !0, n["border-image"] = !0, n["border-image-outset"] = !0, n["border-image-repeat"] = !0, n["border-image-slice"] = !0, n["border-image-source"] = !0, n["border-image-width"] = !0, n["border-left"] = !0, n["border-left-color"] = !0, n["border-left-style"] = !0, n["border-left-width"] = !0, n["border-radius"] = !0, n["border-right"] = !0, n["border-right-color"] = !0, n["border-right-style"] = !0, n["border-right-width"] = !0, n["border-spacing"] = !0, n["border-style"] = !0, n["border-top"] = !0, n["border-top-color"] = !0, n["border-top-left-radius"] = !0, n["border-top-right-radius"] = !0, n["border-top-style"] = !0, n["border-top-width"] = !0, n["border-width"] = !0, n.bottom = !1, n["box-decoration-break"] = !0, n["box-shadow"] = !0, n["box-sizing"] = !0, n["box-snap"] = !0, n["box-suppress"] = !0, n["break-after"] = !0, n["break-before"] = !0, n["break-inside"] = !0, n["caption-side"] = !1, n.chains = !1, n.clear = !0, n.clip = !1, n["clip-path"] = !1, n["clip-rule"] = !1, n.color = !0, n["color-interpolation-filters"] = !0, n["column-count"] = !1, n["column-fill"] = !1, n["column-gap"] = !1, n["column-rule"] = !1, n["column-rule-color"] = !1, n["column-rule-style"] = !1, n["column-rule-width"] = !1, n["column-span"] = !1, n["column-width"] = !1, n.columns = !1, n.contain = !1, n.content = !1, n["counter-increment"] = !1, n["counter-reset"] = !1, n["counter-set"] = !1, n.crop = !1, n.cue = !1, n["cue-after"] = !1, n["cue-before"] = !1, n.cursor = !1, n.direction = !1, n.display = !0, n["display-inside"] = !0, n["display-list"] = !0, n["display-outside"] = !0, n["dominant-baseline"] = !1, n.elevation = !1, n["empty-cells"] = !1, n.filter = !1, n.flex = !1, n["flex-basis"] = !1, n["flex-direction"] = !1, n["flex-flow"] = !1, n["flex-grow"] = !1, n["flex-shrink"] = !1, n["flex-wrap"] = !1, n.float = !1, n["float-offset"] = !1, n["flood-color"] = !1, n["flood-opacity"] = !1, n["flow-from"] = !1, n["flow-into"] = !1, n.font = !0, n["font-family"] = !0, n["font-feature-settings"] = !0, n["font-kerning"] = !0, n["font-language-override"] = !0, n["font-size"] = !0, n["font-size-adjust"] = !0, n["font-stretch"] = !0, n["font-style"] = !0, n["font-synthesis"] = !0, n["font-variant"] = !0, n["font-variant-alternates"] = !0, n["font-variant-caps"] = !0, n["font-variant-east-asian"] = !0, n["font-variant-ligatures"] = !0, n["font-variant-numeric"] = !0, n["font-variant-position"] = !0, n["font-weight"] = !0, n.grid = !1, n["grid-area"] = !1, n["grid-auto-columns"] = !1, n["grid-auto-flow"] = !1, n["grid-auto-rows"] = !1, n["grid-column"] = !1, n["grid-column-end"] = !1, n["grid-column-start"] = !1, n["grid-row"] = !1, n["grid-row-end"] = !1, n["grid-row-start"] = !1, n["grid-template"] = !1, n["grid-template-areas"] = !1, n["grid-template-columns"] = !1, n["grid-template-rows"] = !1, n["hanging-punctuation"] = !1, n.height = !0, n.hyphens = !1, n.icon = !1, n["image-orientation"] = !1, n["image-resolution"] = !1, n["ime-mode"] = !1, n["initial-letters"] = !1, n["inline-box-align"] = !1, n["justify-content"] = !1, n["justify-items"] = !1, n["justify-self"] = !1, n.left = !1, n["letter-spacing"] = !0, n["lighting-color"] = !0, n["line-box-contain"] = !1, n["line-break"] = !1, n["line-grid"] = !1, n["line-height"] = !1, n["line-snap"] = !1, n["line-stacking"] = !1, n["line-stacking-ruby"] = !1, n["line-stacking-shift"] = !1, n["line-stacking-strategy"] = !1, n["list-style"] = !0, n["list-style-image"] = !0, n["list-style-position"] = !0, n["list-style-type"] = !0, n.margin = !0, n["margin-bottom"] = !0, n["margin-left"] = !0, n["margin-right"] = !0, n["margin-top"] = !0, n["marker-offset"] = !1, n["marker-side"] = !1, n.marks = !1, n.mask = !1, n["mask-box"] = !1, n["mask-box-outset"] = !1, n["mask-box-repeat"] = !1, n["mask-box-slice"] = !1, n["mask-box-source"] = !1, n["mask-box-width"] = !1, n["mask-clip"] = !1, n["mask-image"] = !1, n["mask-origin"] = !1, n["mask-position"] = !1, n["mask-repeat"] = !1, n["mask-size"] = !1, n["mask-source-type"] = !1, n["mask-type"] = !1, n["max-height"] = !0, n["max-lines"] = !1, n["max-width"] = !0, n["min-height"] = !0, n["min-width"] = !0, n["move-to"] = !1, n["nav-down"] = !1, n["nav-index"] = !1, n["nav-left"] = !1, n["nav-right"] = !1, n["nav-up"] = !1, n["object-fit"] = !1, n["object-position"] = !1, n.opacity = !1, n.order = !1, n.orphans = !1, n.outline = !1, n["outline-color"] = !1, n["outline-offset"] = !1, n["outline-style"] = !1, n["outline-width"] = !1, n.overflow = !1, n["overflow-wrap"] = !1, n["overflow-x"] = !1, n["overflow-y"] = !1, n.padding = !0, n["padding-bottom"] = !0, n["padding-left"] = !0, n["padding-right"] = !0, n["padding-top"] = !0, n.page = !1, n["page-break-after"] = !1, n["page-break-before"] = !1, n["page-break-inside"] = !1, n["page-policy"] = !1, n.pause = !1, n["pause-after"] = !1, n["pause-before"] = !1, n.perspective = !1, n["perspective-origin"] = !1, n.pitch = !1, n["pitch-range"] = !1, n["play-during"] = !1, n.position = !1, n["presentation-level"] = !1, n.quotes = !1, n["region-fragment"] = !1, n.resize = !1, n.rest = !1, n["rest-after"] = !1, n["rest-before"] = !1, n.richness = !1, n.right = !1, n.rotation = !1, n["rotation-point"] = !1, n["ruby-align"] = !1, n["ruby-merge"] = !1, n["ruby-position"] = !1, n["shape-image-threshold"] = !1, n["shape-outside"] = !1, n["shape-margin"] = !1, n.size = !1, n.speak = !1, n["speak-as"] = !1, n["speak-header"] = !1, n["speak-numeral"] = !1, n["speak-punctuation"] = !1, n["speech-rate"] = !1, n.stress = !1, n["string-set"] = !1, n["tab-size"] = !1, n["table-layout"] = !1, n["text-align"] = !0, n["text-align-last"] = !0, n["text-combine-upright"] = !0, n["text-decoration"] = !0, n["text-decoration-color"] = !0, n["text-decoration-line"] = !0, n["text-decoration-skip"] = !0, n["text-decoration-style"] = !0, n["text-emphasis"] = !0, n["text-emphasis-color"] = !0, n["text-emphasis-position"] = !0, n["text-emphasis-style"] = !0, n["text-height"] = !0, n["text-indent"] = !0, n["text-justify"] = !0, n["text-orientation"] = !0, n["text-overflow"] = !0, n["text-shadow"] = !0, n["text-space-collapse"] = !0, n["text-transform"] = !0, n["text-underline-position"] = !0, n["text-wrap"] = !0, n.top = !1, n.transform = !1, n["transform-origin"] = !1, n["transform-style"] = !1, n.transition = !1, n["transition-delay"] = !1, n["transition-duration"] = !1, n["transition-property"] = !1, n["transition-timing-function"] = !1, n["unicode-bidi"] = !1, n["vertical-align"] = !1, n.visibility = !1, n["voice-balance"] = !1, n["voice-duration"] = !1, n["voice-family"] = !1, n["voice-pitch"] = !1, n["voice-range"] = !1, n["voice-rate"] = !1, n["voice-stress"] = !1, n["voice-volume"] = !1, n.volume = !1, n["white-space"] = !1, n.widows = !1, n.width = !0, n["will-change"] = !1, n["word-break"] = !0, n["word-spacing"] = !0, n["word-wrap"] = !0, n["wrap-flow"] = !1, n["wrap-through"] = !1, n["writing-mode"] = !1, n["z-index"] = !1, n
            }

            function u() { }

            function f() { }

            function o(n, t) {
                return e.test(t) ? "" : t
            }
            var e = /javascript\s*\:/gim;
            i.whiteList = r();
            i.getDefaultWhiteList = r;
            i.onAttr = u;
            i.onIgnoreAttr = f;
            i.safeAttrValue = o
        }, {}],
        8: [function (n, t, i) {
            function e(n, t) {
                var i = new f(t);
                return i.process(n)
            }
            var u = n("./default"),
                f = n("./css"),
                r;
            i = t.exports = e;
            i.FilterCSS = f;
            for (r in u) i[r] = u[r];
            typeof window != "undefined" && (window.filterCSS = t.exports)
        }, {
            "./css": 6,
            "./default": 7
        }],
        9: [function (n, t) {
            function r(n, t) {
                function h() {
                    var u, s, h, l, c;
                    f || (u = i.trim(n.slice(e, r)), s = u.indexOf(":"), s !== -1 && (h = i.trim(u.slice(0, s)), l = i.trim(u.slice(s + 1)), h && (c = t(e, o.length, h, l, u), c && (o += c + "; "))));
                    e = r + 1
                }
                var u, s;
                n = i.trimRight(n);
                n[n.length - 1] !== ";" && (n += ";");
                for (var c = n.length, f = !1, e = 0, r = 0, o = ""; r < c; r++)
                    if (u = n[r], u === "/" && n[r + 1] === "*") {
                        if (s = n.indexOf("*/", r + 2), s === -1) break;
                        r = s + 1;
                        e = r + 1;
                        f = !1
                    } else u === "(" ? f = !0 : u === ")" ? f = !1 : u === ";" ? f || h() : u === "\n" && h();
                return i.trim(o)
            }
            var i = n("./util");
            t.exports = r
        }, {
            "./util": 10
        }],
        10: [function (n, t) {
            t.exports = {
                indexOf: function (n, t) {
                    var i, r;
                    if (Array.prototype.indexOf) return n.indexOf(t);
                    for (i = 0, r = n.length; i < r; i++)
                        if (n[i] === t) return i;
                    return -1
                },
                forEach: function (n, t, i) {
                    var r, u;
                    if (Array.prototype.forEach) return n.forEach(t, i);
                    for (r = 0, u = n.length; r < u; r++) t.call(i, n[r], r, n)
                },
                trim: function (n) {
                    return String.prototype.trim ? n.trim() : n.replace(/(^\s*)|(\s*$)/g, "")
                },
                trimRight: function (n) {
                    return String.prototype.trimRight ? n.trimRight() : n.replace(/(\s*$)/g, "")
                }
            }
        }, {}]
    }, {}, [2]);
projectHelper = {
    showErr: function (n, t) {
        var i = /<span id="ErrMsg">([\s\S]*?)<\/span>/gim.exec(n);
        0 === pgInfo.SystemPhase && i ? projectHelper.handleAfterAjaxPostback({
            Type: 2,
            CheckMsgs: [{
                MsgId: "checkMsg_Submit",
                Msg: commonHelper.trim(i[1])
            }]
        }, t) : projectHelper.handleAfterAjaxPostback({
            Type: 2,
            CheckMsgs: [{
                MsgId: "checkMsg_Submit",
                Msg: "系統忙碌中，請稍後再試。"
            }]
        }, t);
        $("body").unblock()
    },
    handleAfterAjaxPostback: function (n, t) {
        var i = 0;
        n.CheckMsgs && $.each(n.CheckMsgs, function (n, r) {
            if (r.Msg) {
                var u = $("<div><\/div>").html(r.Msg);
                switch (r.Type) {
                    case 0:
                        u.addClass("check_msg_notice");
                        break;
                    case 1:
                        u.addClass("check_msg_warning");
                        break;
                    default:
                        u.addClass("check_msg_err")
                }
                r.InputId && u.attr("id", r.InputId + "-error");
                $("#" + r.MsgId, t).append(u);
                r.Type && (i || r.InputId && (i = $("#" + r.InputId, t).offset().top - 63))
            }
        });
        i && commonHelper.gotoScrollTop(i);
        n.Redirect && (document.location = n.Redirect)
    },
    handleAfterPostback: function (n) {
        var t = 0;
        $(".check_msg .check_msg_err", n).each(function () {
            $(this).html() && (t || (t = $(this).offset().top - 63))
        });
        t && commonHelper.gotoScrollTop(t)
    },
    setHash: function (n, t) {
        var i = location.hash,
            r; - 1 < i.indexOf(n) && i ? (r = new RegExp(n + "=[^&]+", "gmi"), r.test(i) && (i = i.replace(r, n + "=" + t))) : i ? i += "&" + n + "=" + t : i = n + "=" + t;
        location.hash = i
    },
    setFilterXSS: function (n) {
        return filterXSS(n, {
            whiteList: {
                a: ["target", "href", "title", "keep-conds", "sid", "onclick", "onkeypress", "class"],
                abbr: ["title"],
                address: [],
                area: ["shape", "coords", "href", "alt"],
                article: [],
                aside: [],
                audio: ["autoplay", "controls", "loop", "preload", "src"],
                b: [],
                bdi: ["dir"],
                bdo: ["dir"],
                big: [],
                blockquote: ["cite"],
                br: [],
                caption: [],
                center: [],
                cite: [],
                code: [],
                col: ["align", "valign", "span", "width"],
                colgroup: ["align", "valign", "span", "width"],
                dd: [],
                del: ["datetime"],
                details: ["open"],
                div: ["id", "class"],
                dl: [],
                dt: [],
                em: [],
                font: ["color", "size", "face"],
                footer: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                header: [],
                hr: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                ins: ["datetime"],
                ul: ["class", "id"],
                li: ["class", "id"],
                label: [],
                mark: [],
                nav: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                section: [],
                small: [],
                span: ["class", "id", "permcode", "xsite"],
                input: ["id", "name", "type", "class", "checked", "maxlength", "size", "cur-paging", "total-paging"],
                select: ["class", "id", "name"],
                option: ["value", "selected"],
                sub: [],
                sup: [],
                strong: [],
                table: ["width", "border", "align", "valign", "class"],
                tbody: ["align", "valign"],
                td: ["width", "rowspan", "colspan", "align", "valign", "class"],
                tfoot: ["align", "valign"],
                th: ["width", "rowspan", "colspan", "align", "valign", "class", "style"],
                thead: ["align", "valign"],
                tr: ["rowspan", "align", "valign", "class"],
                tt: [],
                u: [],
                video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
            },
            css: !1,
            onIgnoreTagAttr: function (n, t, i) {
                return "data-" === t.substr(0, 5) || "validate-display-id" === t ? t + '="' + filterXSS.escapeAttrValue(i) + '"' : "input" === n && "value" === t ? t + '="' + filterXSS.escapeAttrValue(i) + '"' : "style" === t && "display:none;" === i ? t + '="' + filterXSS.escapeAttrValue(i) + '"' : void 0
            }
        })
    },
    setFilterContent: function (n) {
        return filterXSS(n, {
            stripIgnoreTag: !0,
            whiteList: {
                p: [],
                b: [],
                blockquote: ["cite"],
                br: [],
                div: ["id", "class"],
                dl: [],
                dt: [],
                em: [],
                font: ["color", "size", "face"],
                small: [],
                span: ["style"],
                sub: [],
                sup: [],
                strong: []
            },
            css: !1
        })
    },
    Lzcomp: function (n) {
        var t;
        try {
            t = LZString.compressToEncodedURIComponent(n)
        } catch (n) {
            t = ""
        }
        return t
    },
    Lzdecomp: function (n) {
        var t;
        try {
            t = LZString.decompressFromEncodedURIComponent(n)
        } catch (n) {
            t = ""
        }
        return t
    },
    parseFunction: function (n) {
        function i() {
            return Function.apply(this, u)
        }
        var r = n.indexOf("{"),
            f = n.substring(r + 1, n.lastIndexOf("}")),
            t = n.substring(0, r),
            u = t.substring(t.indexOf("(") + 1, t.lastIndexOf(")")).split(",");
        return u.push(f), i.prototype = Function.prototype, new i
    }
};
$(function () {
    $(window).load(function () {
        removeMvcCheckBoxHidden()
    })
})