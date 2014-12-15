/**
 * SimpleViewer v2.3.2
 * http://simpleviewer.net/simpleviewer/
 *
 * Copyright (c) 2014 SimpleViewer Inc. All rights reserved.
 * Build Time: 06/25/2014 02:32:44 PM
 */
var SV = SV ? SV : {};
SV.simpleviewer = {};
var simpleviewer = SV.simpleviewer;
(function(bR, I) {
    var bS = bR.document;
    var b = (function() {
        var j = function(a, b) {
                return new j.fn.init(a, b, bm)
            },
            bD = simpleviewer.jQuery,
            bq = simpleviewer.$,
            bm, bH = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
            bw = /\S/,
            bs = /^\s+/,
            bn = /\s+$/,
            br = /\d/,
            bk = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
            bx = /^[\],:{}\s]*$/,
            bF = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            bz = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            bt = /(?:^|:|,)(?:\s*\[)+/g,
            bi = /(webkit)[ \/]([\w.]+)/,
            bB = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            bA = /(msie) ([\w.]+)/,
            bC = /(mozilla)(?:.*? rv:([\w.]+))?/,
            bG = navigator.userAgent,
            bE, bl, e, bv = Object.prototype.toString,
            bp = Object.prototype.hasOwnProperty,
            bj = Array.prototype.push,
            bu = Array.prototype.slice,
            by = String.prototype.trim,
            bf = Array.prototype.indexOf,
            bh = {};
        j.fn = j.prototype = {
            constructor: j,
            init: function(a, b, c) {
                var d, bN, bJ, bO;
                if (!a) {
                    return this
                }
                if (a.nodeType) {
                    this.context = this[0] = a;
                    this.length = 1;
                    return this
                }
                if (a === "body" && !b && bS.body) {
                    this.context = bS;
                    this[0] = bS.body;
                    this.selector = "body";
                    this.length = 1;
                    return this
                }
                if (typeof a === "string") {
                    d = bH.exec(a);
                    if (d && (d[1] || !b)) {
                        if (d[1]) {
                            b = b instanceof j ? b[0] : b;
                            bO = (b ? b.ownerDocument || b : bS);
                            bJ = bk.exec(a);
                            if (bJ) {
                                if (j.isPlainObject(b)) {
                                    a = [bS.createElement(bJ[1])];
                                    j.fn.attr.call(a, b, true)
                                } else {
                                    a = [bO.createElement(bJ[1])]
                                }
                            } else {
                                bJ = j.buildFragment([d[1]], [bO]);
                                a = (bJ.cacheable ? j.clone(bJ.fragment) : bJ.fragment).childNodes
                            }
                            return j.merge(this, a)
                        } else {
                            bN = bS.getElementById(d[2]);
                            if (bN && bN.parentNode) {
                                if (bN.id !== d[2]) {
                                    return c.find(a)
                                }
                                this.length = 1;
                                this[0] = bN
                            }
                            this.context = bS;
                            this.selector = a;
                            return this
                        }
                    } else {
                        if (!b || b.jquery) {
                            return (b || c).find(a)
                        } else {
                            return this.constructor(b).find(a)
                        }
                    }
                } else {
                    if (j.isFunction(a)) {
                        return c.ready(a)
                    }
                }
                if (a.selector !== I) {
                    this.selector = a.selector;
                    this.context = a.context
                }
                return j.makeArray(a, this)
            },
            selector: "",
            jquery: "1.5.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return bu.call(this, 0)
            },
            get: function(a) {
                return a == null ? this.toArray() : (a < 0 ? this[this.length + a] : this[a])
            },
            pushStack: function(a, b, c) {
                var d = this.constructor();
                if (j.isArray(a)) {
                    bj.apply(d, a)
                } else {
                    j.merge(d, a)
                }
                d.prevObject = this;
                d.context = this.context;
                if (b === "find") {
                    d.selector = this.selector + (this.selector ? " " : "") + c
                } else {
                    if (b) {
                        d.selector = this.selector + "." + b + "(" + c + ")"
                    }
                }
                return d
            },
            each: function(a, b) {
                return j.each(this, a, b)
            },
            ready: function(a) {
                j.bindReady();
                bl.done(a);
                return this
            },
            eq: function(a) {
                return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(bu.apply(this, arguments), "slice", bu.call(arguments).join(","))
            },
            map: function(c) {
                return this.pushStack(j.map(this, function(a, b) {
                    return c.call(a, b, a)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: bj,
            sort: [].sort,
            splice: [].splice
        };
        j.fn.init.prototype = j.fn;
        j.extend = j.fn.extend = function() {
            var a, bK, bI, bJ, bO, bP, bN = arguments[0] || {},
                bM = 1,
                bL = arguments.length,
                bQ = false;
            if (typeof bN === "boolean") {
                bQ = bN;
                bN = arguments[1] || {};
                bM = 2
            }
            if (typeof bN !== "object" && !j.isFunction(bN)) {
                bN = {}
            }
            if (bL === bM) {
                bN = this;
                --bM
            }
            for (; bM < bL; bM++) {
                if ((a = arguments[bM]) != null) {
                    for (bK in a) {
                        bI = bN[bK];
                        bJ = a[bK];
                        if (bN === bJ) {
                            continue
                        }
                        if (bQ && bJ && (j.isPlainObject(bJ) || (bO = j.isArray(bJ)))) {
                            if (bO) {
                                bO = false;
                                bP = bI && j.isArray(bI) ? bI : []
                            } else {
                                bP = bI && j.isPlainObject(bI) ? bI : {}
                            }
                            bN[bK] = j.extend(bQ, bP, bJ)
                        } else {
                            if (bJ !== I) {
                                bN[bK] = bJ
                            }
                        }
                    }
                }
            }
            return bN
        };
        j.extend({
            noConflict: function(a) {
                simpleviewer.$ = bq;
                if (a) {
                    simpleviewer.jQuery = bD
                }
                return j
            },
            isReady: false,
            readyWait: 1,
            ready: function(a) {
                if (a === true) {
                    j.readyWait--
                }
                if (!j.readyWait || (a !== true && !j.isReady)) {
                    if (!bS.body) {
                        return setTimeout(j.ready, 1)
                    }
                    j.isReady = true;
                    if (a !== true && --j.readyWait > 0) {
                        return
                    }
                    bl.resolveWith(bS, [j]);
                    if (j.fn.trigger) {
                        j(bS).trigger("ready").unbind("ready")
                    }
                }
            },
            bindReady: function() {
                if (bl) {
                    return
                }
                bl = j._Deferred();
                if (bS.readyState === "complete") {
                    return setTimeout(j.ready, 1)
                }
                if (bS.addEventListener) {
                    bS.addEventListener("DOMContentLoaded", e, false);
                    bR.addEventListener("load", j.ready, false)
                } else {
                    if (bS.attachEvent) {
                        bS.attachEvent("onreadystatechange", e);
                        bR.attachEvent("onload", j.ready);
                        var a = false;
                        try {
                            a = bR.frameElement == null
                        } catch (bJ) {}
                        if (bS.documentElement.doScroll && a) {
                            bg()
                        }
                    }
                }
            },
            isFunction: function(a) {
                return j.type(a) === "function"
            },
            isArray: Array.isArray || function(a) {
                return j.type(a) === "array"
            },
            isWindow: function(a) {
                return a && typeof a === "object" && "setInterval" in a
            },
            isNaN: function(a) {
                return a == null || !br.test(a) || isNaN(a)
            },
            type: function(a) {
                return a == null ? String(a) : bh[bv.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || j.type(a) !== "object" || a.nodeType || j.isWindow(a)) {
                    return false
                }
                if (a.constructor && !bp.call(a, "constructor") && !bp.call(a.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
                var b;
                for (b in a) {}
                return b === I || bp.call(a, b)
            },
            isEmptyObject: function(a) {
                for (var b in a) {
                    return false
                }
                return true
            },
            error: function(a) {
                throw a
            },
            parseJSON: function(a) {
                if (typeof a !== "string" || !a) {
                    return null
                }
                a = j.trim(a);
                if (bx.test(a.replace(bF, "@").replace(bz, "]").replace(bt, ""))) {
                    return bR.JSON && bR.JSON.parse ? bR.JSON.parse(a) : (new Function("return " + a))()
                } else {
                    j.error("Invalid JSON: " + a)
                }
            },
            parseXML: function(a, b, c) {
                if (bR.DOMParser) {
                    c = new DOMParser();
                    b = c.parseFromString(a, "text/xml")
                } else {
                    b = new ActiveXObject("Microsoft.XMLDOM");
                    b.async = "false";
                    b.loadXML(a)
                }
                c = b.documentElement;
                if (!c || !c.nodeName || c.nodeName === "parsererror") {
                    j.error("Invalid XML: " + a)
                }
                return b
            },
            noop: function() {},
            globalEval: function(a) {
                if (a && bw.test(a)) {
                    var b = bS.head || bS.getElementsByTagName("head")[0] || bS.documentElement,
                        bI = bS.createElement("script");
                    if (j.support.scriptEval()) {
                        bI.appendChild(bS.createTextNode(a))
                    } else {
                        bI.text = a
                    }
                    b.insertBefore(bI, b.firstChild);
                    b.removeChild(bI)
                }
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function(a, b, c) {
                var d, bM = 0,
                    bN = a.length,
                    bI = bN === I || j.isFunction(a);
                if (c) {
                    if (bI) {
                        for (d in a) {
                            if (b.apply(a[d], c) === false) {
                                break
                            }
                        }
                    } else {
                        for (; bM < bN;) {
                            if (b.apply(a[bM++], c) === false) {
                                break
                            }
                        }
                    }
                } else {
                    if (bI) {
                        for (d in a) {
                            if (b.call(a[d], d, a[d]) === false) {
                                break
                            }
                        }
                    } else {
                        for (var e = a[0]; bM < bN && b.call(e, bM, e) !== false; e = a[++bM]) {}
                    }
                }
                return a
            },
            trim: by ? function(a) {
                return a == null ? "" : by.call(a)
            } : function(a) {
                return a == null ? "" : a.toString().replace(bs, "").replace(bn, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                if (a != null) {
                    var d = j.type(a);
                    if (a.length == null || d === "string" || d === "function" || d === "regexp" || j.isWindow(a)) {
                        bj.call(c, a)
                    } else {
                        j.merge(c, a)
                    }
                }
                return c
            },
            inArray: function(a, b) {
                if (b.indexOf) {
                    return b.indexOf(a)
                }
                for (var c = 0, bJ = b.length; c < bJ; c++) {
                    if (b[c] === a) {
                        return c
                    }
                }
                return -1
            },
            merge: function(a, b) {
                var c = a.length,
                    bJ = 0;
                if (typeof b.length === "number") {
                    for (var d = b.length; bJ < d; bJ++) {
                        a[c++] = b[bJ]
                    }
                } else {
                    while (b[bJ] !== I) {
                        a[c++] = b[bJ++]
                    }
                }
                a.length = c;
                return a
            },
            grep: function(a, b, c) {
                var d = [],
                    bN;
                c = !!c;
                for (var e = 0, bM = a.length; e < bM; e++) {
                    bN = !!b(a[e], e);
                    if (c !== bN) {
                        d.push(a[e])
                    }
                }
                return d
            },
            map: function(a, b, c) {
                var d = [],
                    bN;
                for (var e = 0, bM = a.length; e < bM; e++) {
                    bN = b(a[e], e, c);
                    if (bN != null) {
                        d[d.length] = bN
                    }
                }
                return d.concat.apply([], d)
            },
            guid: 1,
            proxy: function(a, b, c) {
                if (arguments.length === 2) {
                    if (typeof b === "string") {
                        c = a;
                        a = c[b];
                        b = I
                    } else {
                        if (b && !j.isFunction(b)) {
                            c = b;
                            b = I
                        }
                    }
                }
                if (!b && a) {
                    b = function() {
                        return a.apply(c || this, arguments)
                    }
                }
                if (a) {
                    b.guid = a.guid = a.guid || b.guid || j.guid++
                }
                return b
            },
            access: function(a, b, c, d, e, f) {
                var g = a.length;
                if (typeof b === "object") {
                    for (var h in b) {
                        j.access(a, h, b[h], d, e, c)
                    }
                    return a
                }
                if (c !== I) {
                    d = !f && d && j.isFunction(c);
                    for (var i = 0; i < g; i++) {
                        e(a[i], b, d ? c.call(a[i], i, e(a[i], b)) : c, f)
                    }
                    return a
                }
                return g ? e(a[0], b) : I
            },
            now: function() {
                return (new Date()).getTime()
            },
            uaMatch: function(a) {
                a = a.toLowerCase();
                var b = bi.exec(a) || bB.exec(a) || bA.exec(a) || a.indexOf("compatible") < 0 && bC.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            },
            sub: function() {
                function bJ(a, b) {
                    return new bJ.fn.init(a, b)
                }
                j.extend(true, bJ, this);
                bJ.superclass = this;
                bJ.fn = bJ.prototype = this();
                bJ.fn.constructor = bJ;
                bJ.subclass = this.subclass;
                bJ.fn.init = function bK(a, b) {
                    if (b && b instanceof j && !(b instanceof bJ)) {
                        b = bJ(b)
                    }
                    return j.fn.init.call(this, a, b, c)
                };
                bJ.fn.init.prototype = bJ.fn;
                var c = bJ(bS);
                return bJ
            },
            browser: {}
        });
        j.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
            bh["[object " + b + "]"] = b.toLowerCase()
        });
        bE = j.uaMatch(bG);
        if (bE.browser) {
            j.browser[bE.browser] = true;
            j.browser.version = bE.version
        }
        if (j.browser.webkit) {
            j.browser.safari = true
        }
        if (bf) {
            j.inArray = function(a, b) {
                return bf.call(b, a)
            }
        }
        if (bw.test("\xA0")) {
            bs = /^[\s\xA0]+/;
            bn = /[\s\xA0]+$/
        }
        bm = j(bS);
        if (bS.addEventListener) {
            e = function() {
                bS.removeEventListener("DOMContentLoaded", e, false);
                j.ready()
            }
        } else {
            if (bS.attachEvent) {
                e = function() {
                    if (bS.readyState === "complete") {
                        bS.detachEvent("onreadystatechange", e);
                        j.ready()
                    }
                }
            }
        }

        function bg() {
            if (j.isReady) {
                return
            }
            try {
                bS.documentElement.doScroll("left")
            } catch (bI) {
                setTimeout(bg, 1);
                return
            }
            j.ready()
        }
        return j
    })();
    var a = "then done fail isResolved isRejected promise".split(" "),
        aA = [].slice;
    b.extend({
        _Deferred: function() {
            var c = [],
                bi, bf, bg, e = {
                    done: function() {
                        if (!bg) {
                            var a = arguments,
                                bl, bo, bn, bm, bj;
                            if (bi) {
                                bj = bi;
                                bi = 0
                            }
                            for (bl = 0, bo = a.length; bl < bo; bl++) {
                                bn = a[bl];
                                bm = b.type(bn);
                                if (bm === "array") {
                                    e.done.apply(e, bn)
                                } else {
                                    if (bm === "function") {
                                        c.push(bn)
                                    }
                                }
                            }
                            if (bj) {
                                e.resolveWith(bj[0], bj[1])
                            }
                        }
                        return this
                    },
                    resolveWith: function(a, b) {
                        if (!bg && !bi && !bf) {
                            b = b || [];
                            bf = 1;
                            try {
                                while (c[0]) {
                                    c.shift().apply(a, b)
                                }
                            } finally {
                                bi = [a, b];
                                bf = 0
                            }
                        }
                        return this
                    },
                    resolve: function() {
                        e.resolveWith(this, arguments);
                        return this
                    },
                    isResolved: function() {
                        return !!(bf || bi)
                    },
                    cancel: function() {
                        bg = 1;
                        c = [];
                        return this
                    }
                };
            return e
        },
        Deferred: function(d) {
            var e = b._Deferred(),
                bh = b._Deferred(),
                bg;
            b.extend(e, {
                then: function(a, b) {
                    e.done(a).fail(b);
                    return this
                },
                fail: bh.done,
                rejectWith: bh.resolveWith,
                reject: bh.resolve,
                isRejected: bh.isResolved,
                promise: function(b) {
                    if (b == null) {
                        if (bg) {
                            return bg
                        }
                        bg = b = {}
                    }
                    var c = a.length;
                    while (c--) {
                        b[a[c]] = e[a[c]]
                    }
                    return b
                }
            });
            e.done(bh.cancel).fail(e.cancel);
            delete e.cancel;
            if (d) {
                d.call(e, e)
            }
            return e
        },
        when: function(c) {
            var d = arguments,
                bg = 0,
                bj = d.length,
                bi = bj,
                e = bj <= 1 && c && b.isFunction(c.promise) ? c : b.Deferred();

            function bh(b) {
                return function(a) {
                    d[b] = arguments.length > 1 ? aA.call(arguments, 0) : a;
                    if (!(--bi)) {
                        e.resolveWith(e, aA.call(d, 0))
                    }
                }
            }
            if (bj > 1) {
                for (; bg < bj; bg++) {
                    if (d[bg] && b.isFunction(d[bg].promise)) {
                        d[bg].promise().then(bh(bg), e.reject)
                    } else {
                        --bi
                    }
                }
                if (!bi) {
                    e.resolveWith(e, d)
                }
            } else {
                if (e !== c) {
                    e.resolveWith(e, bj ? [c] : [])
                }
            }
            return e.promise()
        }
    });
    (function() {
        b.support = {};
        var d = bS.createElement("div");
        d.style.display = "none";
        d.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var f = d.getElementsByTagName("*"),
            bm = d.getElementsByTagName("a")[0],
            bn = bS.createElement("select"),
            bg = bn.appendChild(bS.createElement("option")),
            bl = d.getElementsByTagName("input")[0];
        if (!f || !f.length || !bm) {
            return
        }
        b.support = {
            leadingWhitespace: d.firstChild.nodeType === 3,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /red/.test(bm.getAttribute("style")),
            hrefNormalized: bm.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(bm.style.opacity),
            cssFloat: !!bm.style.cssFloat,
            checkOn: bl.value === "on",
            optSelected: bg.selected,
            deleteExpando: true,
            optDisabled: false,
            checkClone: false,
            noCloneEvent: true,
            noCloneChecked: true,
            boxModel: null,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableHiddenOffsets: true,
            reliableMarginRight: true
        };
        bl.checked = true;
        b.support.noCloneChecked = bl.cloneNode(true).checked;
        bn.disabled = true;
        b.support.optDisabled = !bg.disabled;
        var g = null;
        b.support.scriptEval = function() {
            if (g === null) {
                var a = bS.documentElement,
                    br = bS.createElement("script"),
                    bt = "script" + b.now();
                try {
                    br.appendChild(bS.createTextNode("window." + bt + "=1;"))
                } catch (bs) {}
                a.insertBefore(br, a.firstChild);
                if (bR[bt]) {
                    g = true;
                    delete bR[bt]
                } else {
                    g = false
                }
                a.removeChild(br)
            }
            return g
        };
        try {
            delete d.test
        } catch (bj) {
            b.support.deleteExpando = false
        }
        if (!d.addEventListener && d.attachEvent && d.fireEvent) {
            d.attachEvent("onclick", function bp() {
                b.support.noCloneEvent = false;
                d.detachEvent("onclick", bp)
            });
            d.cloneNode(true).fireEvent("onclick")
        }
        d = bS.createElement("div");
        d.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
        var h = bS.createDocumentFragment();
        h.appendChild(d.firstChild);
        b.support.checkClone = h.cloneNode(true).cloneNode(true).lastChild.checked;
        b(function() {
            var a = bS.createElement("div"),
                e = bS.getElementsByTagName("body")[0];
            if (!e) {
                return
            }
            a.style.width = a.style.paddingLeft = "1px";
            e.appendChild(a);
            b.boxModel = b.support.boxModel = a.offsetWidth === 2;
            if ("zoom" in a.style) {
                a.style.display = "inline";
                a.style.zoom = 1;
                b.support.inlineBlockNeedsLayout = a.offsetWidth === 2;
                a.style.display = "";
                a.innerHTML = "<div style='width:4px;'></div>";
                b.support.shrinkWrapBlocks = a.offsetWidth !== 2
            }
            a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
            var c = a.getElementsByTagName("td");
            b.support.reliableHiddenOffsets = c[0].offsetHeight === 0;
            c[0].style.display = "";
            c[1].style.display = "none";
            b.support.reliableHiddenOffsets = b.support.reliableHiddenOffsets && c[0].offsetHeight === 0;
            a.innerHTML = "";
            if (bS.defaultView && bS.defaultView.getComputedStyle) {
                a.style.width = "1px";
                a.style.marginRight = "0";
                b.support.reliableMarginRight = (parseInt(bS.defaultView.getComputedStyle(a, null).marginRight, 10) || 0) === 0
            }
            e.removeChild(a).style.display = "none";
            a = c = null
        });
        var i = function(e) {
            var a = bS.createElement("div");
            e = "on" + e;
            if (!a.attachEvent) {
                return true
            }
            var b = (e in a);
            if (!b) {
                a.setAttribute(e, "return;");
                b = typeof a[e] === "function"
            }
            return b
        };
        b.support.submitBubbles = i("submit");
        b.support.changeBubbles = i("change");
        d = f = bm = null
    })();
    var bT = /^(?:\{.*\}|\[.*\])$/;
    b.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (b.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        hasData: function(e) {
            e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando];
            return !!e && !Q(e)
        },
        data: function(a, c, d, f) {
            if (!b.acceptData(a)) {
                return
            }
            var g = b.expando,
                bl = typeof c === "string",
                bk, bn = a.nodeType,
                e = bn ? b.cache : a,
                bg = bn ? a[b.expando] : a[b.expando] && b.expando;
            if ((!bg || (f && bg && !e[bg][g])) && bl && d === I) {
                return
            }
            if (!bg) {
                if (bn) {
                    a[b.expando] = bg = ++b.uuid
                } else {
                    bg = b.expando
                }
            }
            if (!e[bg]) {
                e[bg] = {};
                if (!bn) {
                    e[bg].toJSON = b.noop
                }
            }
            if (typeof c === "object" || typeof c === "function") {
                if (f) {
                    e[bg][g] = b.extend(e[bg][g], c)
                } else {
                    e[bg] = b.extend(e[bg], c)
                }
            }
            bk = e[bg];
            if (f) {
                if (!bk[g]) {
                    bk[g] = {}
                }
                bk = bk[g]
            }
            if (d !== I) {
                bk[c] = d
            }
            if (c === "events" && !bk[c]) {
                return bk[g] && bk[g].events
            }
            return bl ? bk[c] : bk
        },
        removeData: function(a, c, d) {
            if (!b.acceptData(a)) {
                return
            }
            var f = b.expando,
                bm = a.nodeType,
                bf = bm ? b.cache : a,
                bh = bm ? a[b.expando] : b.expando;
            if (!bf[bh]) {
                return
            }
            if (c) {
                var g = d ? bf[bh][f] : bf[bh];
                if (g) {
                    delete g[c];
                    if (!Q(g)) {
                        return
                    }
                }
            }
            if (d) {
                delete bf[bh][f];
                if (!Q(bf[bh])) {
                    return
                }
            }
            var e = bf[bh][f];
            if (b.support.deleteExpando || bf != bR) {
                delete bf[bh]
            } else {
                bf[bh] = null
            }
            if (e) {
                bf[bh] = {};
                if (!bm) {
                    bf[bh].toJSON = b.noop
                }
                bf[bh][f] = e
            } else {
                if (bm) {
                    if (b.support.deleteExpando) {
                        delete a[b.expando]
                    } else {
                        if (a.removeAttribute) {
                            a.removeAttribute(b.expando)
                        } else {
                            a[b.expando] = null
                        }
                    }
                }
            }
        },
        _data: function(a, e, c) {
            return b.data(a, e, c, true)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var e = b.noData[a.nodeName.toLowerCase()];
                if (e) {
                    return !(e === true || a.getAttribute("classid") !== e)
                }
            }
            return true
        }
    });
    b.fn.extend({
        data: function(c, d) {
            var f = null;
            if (typeof c === "undefined") {
                if (this.length) {
                    f = b.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var e = this[0].attributes,
                            bg;
                        for (var g = 0, bf = e.length; g < bf; g++) {
                            bg = e[g].name;
                            if (bg.indexOf("data-") === 0) {
                                bg = bg.substr(5);
                                aV(this[0], bg, f[bg])
                            }
                        }
                    }
                }
                return f
            } else {
                if (typeof c === "object") {
                    return this.each(function() {
                        b.data(this, c)
                    })
                }
            }
            var h = c.split(".");
            h[1] = h[1] ? "." + h[1] : "";
            if (d === I) {
                f = this.triggerHandler("getData" + h[1] + "!", [h[0]]);
                if (f === I && this.length) {
                    f = b.data(this[0], c);
                    f = aV(this[0], c, f)
                }
                return f === I && h[1] ? this.data(h[0]) : f
            } else {
                return this.each(function() {
                    var a = b(this),
                        bm = [h[0], d];
                    a.triggerHandler("setData" + h[1] + "!", bm);
                    b.data(this, c, d);
                    a.triggerHandler("changeData" + h[1] + "!", bm)
                })
            }
        },
        removeData: function(e) {
            return this.each(function() {
                b.removeData(this, e)
            })
        }
    });

    function aV(a, c, d) {
        if (d === I && a.nodeType === 1) {
            d = a.getAttribute("data-" + c);
            if (typeof d === "string") {
                try {
                    d = d === "true" ? true : d === "false" ? false : d === "null" ? null : !b.isNaN(d) ? parseFloat(d) : bT.test(d) ? b.parseJSON(d) : d
                } catch (bi) {}
                b.data(a, c, d)
            } else {
                d = I
            }
        }
        return d
    }

    function Q(a) {
        for (var e in a) {
            if (e !== "toJSON") {
                return false
            }
        }
        return true
    }
    b.extend({
        queue: function(a, e, c) {
            if (!a) {
                return
            }
            e = (e || "fx") + "queue";
            var d = b._data(a, e);
            if (!c) {
                return d || []
            }
            if (!d || b.isArray(c)) {
                d = b._data(a, e, b.makeArray(c))
            } else {
                d.push(c)
            }
            return d
        },
        dequeue: function(a, c) {
            c = c || "fx";
            var e = b.queue(a, c),
                bf = e.shift();
            if (bf === "inprogress") {
                bf = e.shift()
            }
            if (bf) {
                if (c === "fx") {
                    e.unshift("inprogress")
                }
                bf.call(a, function() {
                    b.dequeue(a, c)
                })
            }
            if (!e.length) {
                b.removeData(a, c + "queue", true)
            }
        }
    });
    b.fn.extend({
        queue: function(e, d) {
            if (typeof e !== "string") {
                d = e;
                e = "fx"
            }
            if (d === I) {
                return b.queue(this[0], e)
            }
            return this.each(function(a) {
                var c = b.queue(this, e, d);
                if (e === "fx" && c[0] !== "inprogress") {
                    b.dequeue(this, e)
                }
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e)
            })
        },
        delay: function(c, e) {
            c = b.fx ? b.fx.speeds[c] || c : c;
            e = e || "fx";
            return this.queue(e, function() {
                var a = this;
                setTimeout(function() {
                    b.dequeue(a, e)
                }, c)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        }
    });
    var bU = /[\n\t\r]/g,
        a5 = /\s+/,
        aI = /\r/g,
        a4 = /^(?:href|src|style)$/,
        g = /^(?:button|input)$/i,
        D = /^(?:button|input|object|select|textarea)$/i,
        l = /^a(?:rea)?$/i,
        R = /^(?:radio|checkbox)$/i;
    b.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    b.fn.extend({
        attr: function(e, a) {
            return b.access(this, e, a, true, b.attr)
        },
        removeAttr: function(e, a) {
            return this.each(function() {
                b.attr(this, e, "");
                if (this.nodeType === 1) {
                    this.removeAttribute(e)
                }
            })
        },
        addClass: function(d) {
            if (b.isFunction(d)) {
                return this.each(function(a) {
                    var c = b(this);
                    c.addClass(d.call(this, a, c.attr("class")))
                })
            }
            if (d && typeof d === "string") {
                var e = (d || "").split(a5);
                for (var f = 0, bg = this.length; f < bg; f++) {
                    var g = this[f];
                    if (g.nodeType === 1) {
                        if (!g.className) {
                            g.className = d
                        } else {
                            var h = " " + g.className + " ",
                                bk = g.className;
                            for (var i = 0, bm = e.length; i < bm; i++) {
                                if (h.indexOf(" " + e[i] + " ") < 0) {
                                    bk += " " + e[i]
                                }
                            }
                            g.className = b.trim(bk)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function(d) {
            if (b.isFunction(d)) {
                return this.each(function(a) {
                    var c = b(this);
                    c.removeClass(d.call(this, a, c.attr("class")))
                })
            }
            if ((d && typeof d === "string") || d === I) {
                var f = (d || "").split(a5);
                for (var g = 0, bf = this.length; g < bf; g++) {
                    var h = this[g];
                    if (h.nodeType === 1 && h.className) {
                        if (d) {
                            var i = (" " + h.className + " ").replace(bU, " ");
                            for (var j = 0, e = f.length; j < e; j++) {
                                i = i.replace(" " + f[j] + " ", " ")
                            }
                            h.className = b.trim(i)
                        } else {
                            h.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function(d, f) {
            var g = typeof d,
                e = typeof f === "boolean";
            if (b.isFunction(d)) {
                return this.each(function(a) {
                    var c = b(this);
                    c.toggleClass(d.call(this, a, c.attr("class"), f), f)
                })
            }
            return this.each(function() {
                if (g === "string") {
                    var a, bj = 0,
                        bi = b(this),
                        bl = f,
                        bm = d.split(a5);
                    while ((a = bm[bj++])) {
                        bl = e ? bl : !bi.hasClass(a);
                        bi[bl ? "addClass" : "removeClass"](a)
                    }
                } else {
                    if (g === "undefined" || g === "boolean") {
                        if (this.className) {
                            b._data(this, "__className__", this.className)
                        }
                        this.className = this.className || d === false ? "" : b._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function(e) {
            var a = " " + e + " ";
            for (var b = 0, bf = this.length; b < bf; b++) {
                if ((" " + this[b].className + " ").replace(bU, " ").indexOf(a) > -1) {
                    return true
                }
            }
            return false
        },
        val: function(g) {
            if (!arguments.length) {
                var h = this[0];
                if (h) {
                    if (b.nodeName(h, "option")) {
                        var i = h.attributes.value;
                        return !i || i.specified ? h.value : h.text
                    }
                    if (b.nodeName(h, "select")) {
                        var j = h.selectedIndex,
                            bn = [],
                            bo = h.options,
                            bj = h.type === "select-one";
                        if (j < 0) {
                            return null
                        }
                        for (var k = bj ? j : 0, bl = bj ? j + 1 : bo.length; k < bl; k++) {
                            var l = bo[k];
                            if (l.selected && (b.support.optDisabled ? !l.disabled : l.getAttribute("disabled") === null) && (!l.parentNode.disabled || !b.nodeName(l.parentNode, "optgroup"))) {
                                g = b(l).val();
                                if (bj) {
                                    return g
                                }
                                bn.push(g)
                            }
                        }
                        if (bj && !bn.length && bo.length) {
                            return b(bo[j]).val()
                        }
                        return bn
                    }
                    if (R.test(h.type) && !b.support.checkOn) {
                        return h.getAttribute("value") === null ? "on" : h.value
                    }
                    return (h.value || "").replace(aI, "")
                }
                return I
            }
            var e = b.isFunction(g);
            return this.each(function(c) {
                var d = b(this),
                    bs = g;
                if (this.nodeType !== 1) {
                    return
                }
                if (e) {
                    bs = g.call(this, c, d.val())
                }
                if (bs == null) {
                    bs = ""
                } else {
                    if (typeof bs === "number") {
                        bs += ""
                    } else {
                        if (b.isArray(bs)) {
                            bs = b.map(bs, function(a) {
                                return a == null ? "" : a + ""
                            })
                        }
                    }
                }
                if (b.isArray(bs) && R.test(this.type)) {
                    this.checked = b.inArray(d.val(), bs) >= 0
                } else {
                    if (b.nodeName(this, "select")) {
                        var f = b.makeArray(bs);
                        b("option", this).each(function() {
                            this.selected = b.inArray(b(this).val(), f) >= 0
                        });
                        if (!f.length) {
                            this.selectedIndex = -1
                        }
                    } else {
                        this.value = bs
                    }
                }
            })
        }
    });
    b.extend({
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attr: function(a, e, c, d) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || a.nodeType === 2) {
                return I
            }
            if (d && e in b.attrFn) {
                return b(a)[e](c)
            }
            var f = a.nodeType !== 1 || !b.isXMLDoc(a),
                bj = c !== I;
            e = f && b.props[e] || e;
            if (a.nodeType === 1) {
                var h = a4.test(e);
                if (e === "selected" && !b.support.optSelected) {
                    var i = a.parentNode;
                    if (i) {
                        i.selectedIndex;
                        if (i.parentNode) {
                            i.parentNode.selectedIndex
                        }
                    }
                }
                if ((e in a || a[e] !== I) && f && !h) {
                    if (bj) {
                        if (e === "type" && g.test(a.nodeName) && a.parentNode) {
                            b.error("type property can't be changed")
                        }
                        if (c === null) {
                            if (a.nodeType === 1) {
                                a.removeAttribute(e)
                            }
                        } else {
                            a[e] = c
                        }
                    }
                    if (b.nodeName(a, "form") && a.getAttributeNode(e)) {
                        return a.getAttributeNode(e).nodeValue
                    }
                    if (e === "tabIndex") {
                        var j = a.getAttributeNode("tabIndex");
                        return j && j.specified ? j.value : D.test(a.nodeName) || l.test(a.nodeName) && a.href ? 0 : I
                    }
                    return a[e]
                }
                if (!b.support.style && f && e === "style") {
                    if (bj) {
                        a.style.cssText = "" + c
                    }
                    return a.style.cssText
                }
                if (bj) {
                    a.setAttribute(e, "" + c)
                }
                if (!a.attributes[e] && (a.hasAttribute && !a.hasAttribute(e))) {
                    return I
                }
                var k = !b.support.hrefNormalized && f && h ? a.getAttribute(e, 2) : a.getAttribute(e);
                return k === null ? I : k
            }
            if (bj) {
                a[e] = c
            }
            return a[e]
        }
    });
    var bV = /\.(.*)$/,
        a2 = /^(?:textarea|input|select)$/i,
        L = /\./g,
        ab = / /g,
        ax = /[^\w\s.|`]/g,
        F = function(e) {
            return e.replace(ax, "\\$&")
        };
    b.event = {
        add: function(c, d, e, f) {
            if (c.nodeType === 3 || c.nodeType === 8) {
                return
            }
            try {
                if (b.isWindow(c) && (c !== bR && !c.frameElement)) {
                    c = bR
                }
            } catch (bn) {}
            if (e === false) {
                e = a7
            } else {
                if (!e) {
                    return
                }
            }
            var g, br;
            if (e.handler) {
                g = e;
                e = g.handler
            }
            if (!e.guid) {
                e.guid = b.guid++
            }
            var h = b._data(c);
            if (!h) {
                return
            }
            var i = h.events,
                bl = h.handle;
            if (!i) {
                h.events = i = {}
            }
            if (!bl) {
                h.handle = bl = function(a) {
                    return typeof b !== "undefined" && b.event.triggered !== a.type ? b.event.handle.apply(bl.elem, arguments) : I
                }
            }
            bl.elem = c;
            d = d.split(" ");
            var j, bj = 0,
                bf;
            while ((j = d[bj++])) {
                br = g ? b.extend({}, g) : {
                    handler: e,
                    data: f
                };
                if (j.indexOf(".") > -1) {
                    bf = j.split(".");
                    j = bf.shift();
                    br.namespace = bf.slice(0).sort().join(".")
                } else {
                    bf = [];
                    br.namespace = ""
                }
                br.type = j;
                if (!br.guid) {
                    br.guid = e.guid
                }
                var k = i[j],
                    bp = b.event.special[j] || {};
                if (!k) {
                    k = i[j] = [];
                    if (!bp.setup || bp.setup.call(c, f, bf, bl) === false) {
                        if (c.addEventListener) {
                            c.addEventListener(j, bl, false)
                        } else {
                            if (c.attachEvent) {
                                c.attachEvent("on" + j, bl)
                            }
                        }
                    }
                }
                if (bp.add) {
                    bp.add.call(c, br);
                    if (!br.handler.guid) {
                        br.handler.guid = e.guid
                    }
                }
                k.push(br);
                b.event.global[j] = true
            }
            c = null
        },
        global: {},
        remove: function(a, c, d, f) {
            if (a.nodeType === 3 || a.nodeType === 8) {
                return
            }
            if (d === false) {
                d = a7
            }
            var g, bj, bl, bq, br = 0,
                bh, bm, bp, bi, bn, e, bv, bs = b.hasData(a) && b._data(a),
                bf = bs && bs.events;
            if (!bs || !bf) {
                return
            }
            if (c && c.type) {
                d = c.handler;
                c = c.type
            }
            if (!c || typeof c === "string" && c.charAt(0) === ".") {
                c = c || "";
                for (bj in bf) {
                    b.event.remove(a, bj + c)
                }
                return
            }
            c = c.split(" ");
            while ((bj = c[br++])) {
                bv = bj;
                e = null;
                bh = bj.indexOf(".") < 0;
                bm = [];
                if (!bh) {
                    bm = bj.split(".");
                    bj = bm.shift();
                    bp = new RegExp("(^|\\.)" + b.map(bm.slice(0).sort(), F).join("\\.(?:.*\\.)?") + "(\\.|$)")
                }
                bn = bf[bj];
                if (!bn) {
                    continue
                }
                if (!d) {
                    for (bq = 0; bq < bn.length; bq++) {
                        e = bn[bq];
                        if (bh || bp.test(e.namespace)) {
                            b.event.remove(a, bv, e.handler, bq);
                            bn.splice(bq--, 1)
                        }
                    }
                    continue
                }
                bi = b.event.special[bj] || {};
                for (bq = f || 0; bq < bn.length; bq++) {
                    e = bn[bq];
                    if (d.guid === e.guid) {
                        if (bh || bp.test(e.namespace)) {
                            if (f == null) {
                                bn.splice(bq--, 1)
                            }
                            if (bi.remove) {
                                bi.remove.call(a, e)
                            }
                        }
                        if (f != null) {
                            break
                        }
                    }
                }
                if (bn.length === 0 || f != null && bn.length === 1) {
                    if (!bi.teardown || bi.teardown.call(a, bm) === false) {
                        b.removeEvent(a, bj, bs.handle)
                    }
                    g = null;
                    delete bf[bj]
                }
            }
            if (b.isEmptyObject(bf)) {
                var h = bs.handle;
                if (h) {
                    h.elem = null
                }
                delete bs.events;
                delete bs.handle;
                if (b.isEmptyObject(bs)) {
                    b.removeData(a, I, true)
                }
            }
        },
        trigger: function(c, d, f) {
            var g = c.type || c,
                bj = arguments[3];
            if (!bj) {
                c = typeof c === "object" ? c[b.expando] ? c : b.extend(b.Event(g), c) : b.Event(g);
                if (g.indexOf("!") >= 0) {
                    c.type = g = g.slice(0, -1);
                    c.exclusive = true
                }
                if (!f) {
                    c.stopPropagation();
                    if (b.event.global[g]) {
                        b.each(b.cache, function() {
                            var a = b.expando,
                                bs = this[a];
                            if (bs && bs.events && bs.events[g]) {
                                b.event.trigger(c, d, bs.handle.elem)
                            }
                        })
                    }
                }
                if (!f || f.nodeType === 3 || f.nodeType === 8) {
                    return I
                }
                c.result = I;
                c.target = f;
                d = b.makeArray(d);
                d.unshift(c)
            }
            c.currentTarget = f;
            var h = b._data(f, "handle");
            if (h) {
                h.apply(f, d)
            }
            var i = f.parentNode || f.ownerDocument;
            try {
                if (!(f && f.nodeName && b.noData[f.nodeName.toLowerCase()])) {
                    if (f["on" + g] && f["on" + g].apply(f, d) === false) {
                        c.result = false;
                        c.preventDefault()
                    }
                }
            } catch (bp) {}
            if (!c.isPropagationStopped() && i) {
                b.event.trigger(c, d, i, true)
            } else {
                if (!c.isDefaultPrevented()) {
                    var j, bm = c.target,
                        e = g.replace(bV, ""),
                        br = b.nodeName(bm, "a") && e === "click",
                        bn = b.event.special[e] || {};
                    if ((!bn._default || bn._default.call(f, c) === false) && !br && !(bm && bm.nodeName && b.noData[bm.nodeName.toLowerCase()])) {
                        try {
                            if (bm[e]) {
                                j = bm["on" + e];
                                if (j) {
                                    bm["on" + e] = null
                                }
                                b.event.triggered = c.type;
                                bm[e]()
                            }
                        } catch (bi) {}
                        if (j) {
                            bm["on" + e] = j
                        }
                        b.event.triggered = I
                    }
                }
            }
        },
        handle: function(e) {
            var a, bg, bf, bp, bo, bj = [],
                bl = b.makeArray(arguments);
            e = bl[0] = b.event.fix(e || bR.event);
            e.currentTarget = this;
            a = e.type.indexOf(".") < 0 && !e.exclusive;
            if (!a) {
                bf = e.type.split(".");
                e.type = bf.shift();
                bj = bf.slice(0).sort();
                bp = new RegExp("(^|\\.)" + bj.join("\\.(?:.*\\.)?") + "(\\.|$)")
            }
            e.namespace = e.namespace || bj.join(".");
            bo = b._data(this, "events");
            bg = (bo || {})[e.type];
            if (bo && bg) {
                bg = bg.slice(0);
                for (var c = 0, bh = bg.length; c < bh; c++) {
                    var d = bg[c];
                    if (a || bp.test(d.namespace)) {
                        e.handler = d.handler;
                        e.data = d.data;
                        e.handleObj = d;
                        var f = d.handler.apply(this, bl);
                        if (f !== I) {
                            e.result = f;
                            if (f === false) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                        if (e.isImmediatePropagationStopped()) {
                            break
                        }
                    }
                }
            }
            return e.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function(a) {
            if (a[b.expando]) {
                return a
            }
            var c = a;
            a = b.Event(c);
            for (var d = this.props.length, bj; d;) {
                bj = this.props[--d];
                a[bj] = c[bj]
            }
            if (!a.target) {
                a.target = a.srcElement || bS
            }
            if (a.target.nodeType === 3) {
                a.target = a.target.parentNode
            }
            if (!a.relatedTarget && a.fromElement) {
                a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement
            }
            if (a.pageX == null && a.clientX != null) {
                var f = bS.documentElement,
                    e = bS.body;
                a.pageX = a.clientX + (f && f.scrollLeft || e && e.scrollLeft || 0) - (f && f.clientLeft || e && e.clientLeft || 0);
                a.pageY = a.clientY + (f && f.scrollTop || e && e.scrollTop || 0) - (f && f.clientTop || e && e.clientTop || 0)
            }
            if (a.which == null && (a.charCode != null || a.keyCode != null)) {
                a.which = a.charCode != null ? a.charCode : a.keyCode
            }
            if (!a.metaKey && a.ctrlKey) {
                a.metaKey = a.ctrlKey
            }
            if (!a.which && a.button !== I) {
                a.which = (a.button & 1 ? 1 : (a.button & 2 ? 3 : (a.button & 4 ? 2 : 0)))
            }
            return a
        },
        guid: 100000000,
        proxy: b.proxy,
        special: {
            ready: {
                setup: b.bindReady,
                teardown: b.noop
            },
            live: {
                add: function(e) {
                    b.event.add(this, o(e.origType, e.selector), b.extend({}, e, {
                        handler: ag,
                        guid: e.handler.guid
                    }))
                },
                remove: function(e) {
                    b.event.remove(this, o(e.origType, e.selector), e)
                }
            },
            beforeunload: {
                setup: function(a, c, e) {
                    if (b.isWindow(this)) {
                        this.onbeforeunload = e
                    }
                },
                teardown: function(a, e) {
                    if (this.onbeforeunload === e) {
                        this.onbeforeunload = null
                    }
                }
            }
        }
    };
    b.removeEvent = bS.removeEventListener ? function(a, e, b) {
        if (a.removeEventListener) {
            a.removeEventListener(e, b, false)
        }
    } : function(a, e, b) {
        if (a.detachEvent) {
            a.detachEvent("on" + e, b)
        }
    };
    b.Event = function(e) {
        if (!this.preventDefault) {
            return new b.Event(e)
        }
        if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = (e.defaultPrevented || e.returnValue === false || e.getPreventDefault && e.getPreventDefault()) ? i : a7
        } else {
            this.type = e
        }
        this.timeStamp = b.now();
        this[b.expando] = true
    };

    function a7() {
        return false
    }

    function i() {
        return true
    }
    b.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = i;
            var a = this.originalEvent;
            if (!a) {
                return
            }
            if (a.preventDefault) {
                a.preventDefault()
            } else {
                a.returnValue = false
            }
        },
        stopPropagation: function() {
            this.isPropagationStopped = i;
            var a = this.originalEvent;
            if (!a) {
                return
            }
            if (a.stopPropagation) {
                a.stopPropagation()
            }
            a.cancelBubble = true
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = i;
            this.stopPropagation()
        },
        isDefaultPrevented: a7,
        isPropagationStopped: a7,
        isImmediatePropagationStopped: a7
    };
    var bW = function(a) {
            var c = a.relatedTarget;
            try {
                if (c && c !== bS && !c.parentNode) {
                    return
                }
                while (c && c !== this) {
                    c = c.parentNode
                }
                if (c !== this) {
                    a.type = a.data;
                    b.event.handle.apply(this, arguments)
                }
            } catch (bh) {}
        },
        aM = function(e) {
            e.type = e.data;
            b.event.handle.apply(this, arguments)
        };
    b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(c, e) {
        b.event.special[c] = {
            setup: function(a) {
                b.event.add(this, e, a && a.selector ? aM : bW, c)
            },
            teardown: function(a) {
                b.event.remove(this, e, a && a.selector ? aM : bW)
            }
        }
    });
    if (!b.support.submitBubbles) {
        b.event.special.submit = {
            setup: function(d, e) {
                if (this.nodeName && this.nodeName.toLowerCase() !== "form") {
                    b.event.add(this, "click.specialSubmit", function(a) {
                        var c = a.target,
                            bg = c.type;
                        if ((bg === "submit" || bg === "image") && b(c).closest("form").length) {
                            aP("submit", this, arguments)
                        }
                    });
                    b.event.add(this, "keypress.specialSubmit", function(a) {
                        var c = a.target,
                            bg = c.type;
                        if ((bg === "text" || bg === "password") && b(c).closest("form").length && a.keyCode === 13) {
                            aP("submit", this, arguments)
                        }
                    })
                } else {
                    return false
                }
            },
            teardown: function(e) {
                b.event.remove(this, ".specialSubmit")
            }
        }
    }
    if (!b.support.changeBubbles) {
        var bX, k = function(c) {
                var e = c.type,
                    bg = c.value;
                if (e === "radio" || e === "checkbox") {
                    bg = c.checked
                } else {
                    if (e === "select-multiple") {
                        bg = c.selectedIndex > -1 ? b.map(c.options, function(a) {
                            return a.selected
                        }).join("-") : ""
                    } else {
                        if (c.nodeName.toLowerCase() === "select") {
                            bg = c.selectedIndex
                        }
                    }
                }
                return bg
            },
            Y = function Y(a) {
                var c = a.target,
                    bg, bi;
                if (!a2.test(c.nodeName) || c.readOnly) {
                    return
                }
                bg = b._data(c, "_change_data");
                bi = k(c);
                if (a.type !== "focusout" || c.type !== "radio") {
                    b._data(c, "_change_data", bi)
                }
                if (bg === I || bi === bg) {
                    return
                }
                if (bg != null || bi) {
                    a.type = "change";
                    a.liveFired = I;
                    b.event.trigger(a, arguments[1], c)
                }
            };
        b.event.special.change = {
            filters: {
                focusout: Y,
                beforedeactivate: Y,
                click: function(a) {
                    var b = a.target,
                        bf = b.type;
                    if (bf === "radio" || bf === "checkbox" || b.nodeName.toLowerCase() === "select") {
                        Y.call(this, a)
                    }
                },
                keydown: function(a) {
                    var b = a.target,
                        bf = b.type;
                    if ((a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea") || (a.keyCode === 32 && (bf === "checkbox" || bf === "radio")) || bf === "select-multiple") {
                        Y.call(this, a)
                    }
                },
                beforeactivate: function(a) {
                    var c = a.target;
                    b._data(c, "_change_data", k(c))
                }
            },
            setup: function(a, c) {
                if (this.type === "file") {
                    return false
                }
                for (var e in bX) {
                    b.event.add(this, e + ".specialChange", bX[e])
                }
                return a2.test(this.nodeName)
            },
            teardown: function(e) {
                b.event.remove(this, ".specialChange");
                return a2.test(this.nodeName)
            }
        };
        bX = b.event.special.change.filters;
        bX.focus = bX.beforeactivate
    }

    function aP(a, c, e) {
        var d = b.extend({}, e[0]);
        d.type = a;
        d.originalEvent = {};
        d.liveFired = I;
        b.event.handle.call(c, d);
        if (d.isDefaultPrevented()) {
            e[0].preventDefault()
        }
    }
    if (bS.addEventListener) {
        b.each({
            focus: "focusin",
            blur: "focusout"
        }, function(d, e) {
            var f = 0;
            b.event.special[e] = {
                setup: function() {
                    if (f++ === 0) {
                        bS.addEventListener(d, bg, true)
                    }
                },
                teardown: function() {
                    if (--f === 0) {
                        bS.removeEventListener(d, bg, true)
                    }
                }
            };

            function bg(a) {
                var c = b.event.fix(a);
                c.type = e;
                c.originalEvent = {};
                b.event.trigger(c, null, c.target);
                if (c.isDefaultPrevented()) {
                    a.preventDefault()
                }
            }
        })
    }
    b.each(["bind", "one"], function(j, e) {
        b.fn[e] = function(c, d, f) {
            if (typeof c === "object") {
                for (var g in c) {
                    this[e](g, d, c[g], f)
                }
                return this
            }
            if (b.isFunction(d) || d === false) {
                f = d;
                d = I
            }
            var h = e === "one" ? b.proxy(f, function(a) {
                b(this).unbind(a, h);
                return f.apply(this, arguments)
            }) : f;
            if (c === "unload" && e !== "one") {
                this.one(c, d, f)
            } else {
                for (var i = 0, bg = this.length; i < bg; i++) {
                    b.event.add(this[i], c, h, d)
                }
            }
            return this
        }
    });
    b.fn.extend({
        unbind: function(a, c) {
            if (typeof a === "object" && !a.preventDefault) {
                for (var d in a) {
                    this.unbind(d, a[d])
                }
            } else {
                for (var f = 0, e = this.length; f < e; f++) {
                    b.event.remove(this[f], a, c)
                }
            }
            return this
        },
        delegate: function(e, a, b, c) {
            return this.live(a, b, c, e)
        },
        undelegate: function(e, a, b) {
            if (arguments.length === 0) {
                return this.unbind("live")
            } else {
                return this.die(a, null, b, e)
            }
        },
        trigger: function(e, a) {
            return this.each(function() {
                b.event.trigger(e, a, this)
            })
        },
        triggerHandler: function(e, a) {
            if (this[0]) {
                var c = b.Event(e);
                c.preventDefault();
                c.stopPropagation();
                b.event.trigger(c, a, this[0]);
                return c.result
            }
        },
        toggle: function(d) {
            var e = arguments,
                bf = 1;
            while (bf < e.length) {
                b.proxy(d, e[bf++])
            }
            return this.click(b.proxy(d, function(a) {
                var c = (b._data(this, "lastToggle" + d.guid) || 0) % bf;
                b._data(this, "lastToggle" + d.guid, c + 1);
                a.preventDefault();
                return e[c].apply(this, arguments) || false
            }))
        },
        hover: function(e, a) {
            return this.mouseenter(e).mouseleave(a || e)
        }
    });
    var bY = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    b.each(["live", "die"], function(j, e) {
        b.fn[e] = function(a, c, d, f) {
            var g, bn = 0,
                bo, bh, bt, bk = f || this.selector,
                bg = f ? this : b(this.context);
            if (typeof a === "object" && !a.preventDefault) {
                for (var h in a) {
                    bg[e](h, c, a[h], bk)
                }
                return this
            }
            if (b.isFunction(c)) {
                d = c;
                c = I
            }
            a = (a || "").split(" ");
            while ((g = a[bn++]) != null) {
                bo = bV.exec(g);
                bh = "";
                if (bo) {
                    bh = bo[0];
                    g = g.replace(bV, "")
                }
                if (g === "hover") {
                    a.push("mouseenter" + bh, "mouseleave" + bh);
                    continue
                }
                bt = g;
                if (g === "focus" || g === "blur") {
                    a.push(bY[g] + bh);
                    g = g + bh
                } else {
                    g = (bY[g] || g) + bh
                }
                if (e === "live") {
                    for (var i = 0, bj = bg.length; i < bj; i++) {
                        b.event.add(bg[i], "live." + o(g, bk), {
                            data: c,
                            selector: bk,
                            handler: d,
                            origType: g,
                            origHandler: d,
                            preType: bt
                        })
                    }
                } else {
                    bg.unbind("live." + o(g, bk), d)
                }
            }
            return this
        }
    });

    function ag(a) {
        var c, bh, bv, bj, e, br, bo, bq, bn, bu, bl, bk, bt, bs = [],
            bi = [],
            bf = b._data(this, "events");
        if (a.liveFired === this || !bf || !bf.live || a.target.disabled || a.button && a.type === "click") {
            return
        }
        if (a.namespace) {
            bk = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")
        }
        a.liveFired = this;
        var d = bf.live.slice(0);
        for (bo = 0; bo < d.length; bo++) {
            e = d[bo];
            if (e.origType.replace(bV, "") === a.type) {
                bi.push(e.selector)
            } else {
                d.splice(bo--, 1)
            }
        }
        bj = b(a.target).closest(bi, a.currentTarget);
        for (bq = 0, bn = bj.length; bq < bn; bq++) {
            bl = bj[bq];
            for (bo = 0; bo < d.length; bo++) {
                e = d[bo];
                if (bl.selector === e.selector && (!bk || bk.test(e.namespace)) && !bl.elem.disabled) {
                    br = bl.elem;
                    bv = null;
                    if (e.preType === "mouseenter" || e.preType === "mouseleave") {
                        a.type = e.preType;
                        bv = b(a.relatedTarget).closest(e.selector)[0]
                    }
                    if (!bv || bv !== br) {
                        bs.push({
                            elem: br,
                            handleObj: e,
                            level: bl.level
                        })
                    }
                }
            }
        }
        for (bq = 0, bn = bs.length; bq < bn; bq++) {
            bj = bs[bq];
            if (bh && bj.level > bh) {
                break
            }
            a.currentTarget = bj.elem;
            a.data = bj.handleObj.data;
            a.handleObj = bj.handleObj;
            bt = bj.handleObj.origHandler.apply(bj.elem, arguments);
            if (bt === false || a.isPropagationStopped()) {
                bh = bj.level;
                if (bt === false) {
                    c = false
                }
                if (a.isImmediatePropagationStopped()) {
                    break
                }
            }
        }
        return c
    }

    function o(a, e) {
        return (a && a !== "*" ? a + "." : "") + e.replace(L, "`").replace(ab, "&")
    }
    b.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "), function(c, e) {
        b.fn[e] = function(a, b) {
            if (b == null) {
                b = a;
                a = null
            }
            return arguments.length > 0 ? this.bind(e, a, b) : this.trigger(e)
        };
        if (b.attrFn) {
            b.attrFn[e] = true
        }
    });
    (function() {
        var k = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            bq = 0,
            bt = Object.prototype.toString,
            bk = false,
            bj = true,
            br = /\\/g,
            bx = /\W/;
        [0, 0].sort(function() {
            bj = false;
            return 0
        });
        var l = function(a, e, b, c) {
            b = b || [];
            e = e || bS;
            var d = e;
            if (e.nodeType !== 1 && e.nodeType !== 9) {
                return []
            }
            if (!a || typeof a !== "string") {
                return b
            }
            var f, bK, bN, by, bJ, bM, bL, bE, bB = true,
                bA = l.isXML(e),
                bD = [],
                bH = a;
            do {
                k.exec("");
                f = k.exec(bH);
                if (f) {
                    bH = f[3];
                    bD.push(f[1]);
                    if (f[2]) {
                        by = f[3];
                        break
                    }
                }
            } while (f);
            if (bD.length > 1 && n.exec(a)) {
                if (bD.length === 2 && m.relative[bD[0]]) {
                    bK = r(bD[0] + bD[1], e)
                } else {
                    bK = m.relative[bD[0]] ? [e] : l(bD.shift(), e);
                    while (bD.length) {
                        a = bD.shift();
                        if (m.relative[a]) {
                            a += bD.shift()
                        }
                        bK = r(a, bK)
                    }
                }
            } else {
                if (!c && bD.length > 1 && e.nodeType === 9 && !bA && m.match.ID.test(bD[0]) && !m.match.ID.test(bD[bD.length - 1])) {
                    bJ = l.find(bD.shift(), e, bA);
                    e = bJ.expr ? l.filter(bJ.expr, bJ.set)[0] : bJ.set[0]
                }
                if (e) {
                    bJ = c ? {
                        expr: bD.pop(),
                        set: p(c)
                    } : l.find(bD.pop(), bD.length === 1 && (bD[0] === "~" || bD[0] === "+") && e.parentNode ? e.parentNode : e, bA);
                    bK = bJ.expr ? l.filter(bJ.expr, bJ.set) : bJ.set;
                    if (bD.length > 0) {
                        bN = p(bK)
                    } else {
                        bB = false
                    }
                    while (bD.length) {
                        bM = bD.pop();
                        bL = bM;
                        if (!m.relative[bM]) {
                            bM = ""
                        } else {
                            bL = bD.pop()
                        }
                        if (bL == null) {
                            bL = e
                        }
                        m.relative[bM](bN, bL, bA)
                    }
                } else {
                    bN = bD = []
                }
            }
            if (!bN) {
                bN = bK
            }
            if (!bN) {
                l.error(bM || a)
            }
            if (bt.call(bN) === "[object Array]") {
                if (!bB) {
                    b.push.apply(b, bN)
                } else {
                    if (e && e.nodeType === 1) {
                        for (bE = 0; bN[bE] != null; bE++) {
                            if (bN[bE] && (bN[bE] === true || bN[bE].nodeType === 1 && l.contains(e, bN[bE]))) {
                                b.push(bK[bE])
                            }
                        }
                    } else {
                        for (bE = 0; bN[bE] != null; bE++) {
                            if (bN[bE] && bN[bE].nodeType === 1) {
                                b.push(bK[bE])
                            }
                        }
                    }
                }
            } else {
                p(bN, b)
            }
            if (by) {
                l(by, d, b, c);
                l.uniqueSort(b)
            }
            return b
        };
        l.uniqueSort = function(a) {
            if (q) {
                bk = bj;
                a.sort(q);
                if (bk) {
                    for (var e = 1; e < a.length; e++) {
                        if (a[e] === a[e - 1]) {
                            a.splice(e--, 1)
                        }
                    }
                }
            }
            return a
        };
        l.matches = function(e, a) {
            return l(e, null, null, a)
        };
        l.matchesSelector = function(e, a) {
            return l(a, null, null, [e]).length > 0
        };
        l.find = function(a, e, b) {
            var c;
            if (!a) {
                return []
            }
            for (var d = 0, bz = m.order.length; d < bz; d++) {
                var f, bC = m.order[d];
                if ((f = m.leftMatch[bC].exec(a))) {
                    var g = f[1];
                    f.splice(1, 1);
                    if (g.substr(g.length - 1) !== "\\") {
                        f[1] = (f[1] || "").replace(br, "");
                        c = m.find[bC](f, e, b);
                        if (c != null) {
                            a = a.replace(m.match[bC], "");
                            break
                        }
                    }
                }
            }
            if (!c) {
                c = typeof e.getElementsByTagName !== "undefined" ? e.getElementsByTagName("*") : []
            }
            return {
                set: c,
                expr: a
            }
        };
        l.filter = function(a, b, c, d) {
            var f, e, bz = a,
                bN = [],
                bF = b,
                bE = b && b[0] && l.isXML(b[0]);
            while (a && b.length) {
                for (var g in m.filter) {
                    if ((f = m.leftMatch[g].exec(a)) != null && f[2]) {
                        var h, bK, by = m.filter[g],
                            bA = f[1];
                        e = false;
                        f.splice(1, 1);
                        if (bA.substr(bA.length - 1) === "\\") {
                            continue
                        }
                        if (bF === bN) {
                            bN = []
                        }
                        if (m.preFilter[g]) {
                            f = m.preFilter[g](f, bF, c, bN, d, bE);
                            if (!f) {
                                e = h = true
                            } else {
                                if (f === true) {
                                    continue
                                }
                            }
                        }
                        if (f) {
                            for (var i = 0;
                                (bK = bF[i]) != null; i++) {
                                if (bK) {
                                    h = by(bK, f, i, bF);
                                    var j = d ^ !!h;
                                    if (c && h != null) {
                                        if (j) {
                                            e = true
                                        } else {
                                            bF[i] = false
                                        }
                                    } else {
                                        if (j) {
                                            bN.push(bK);
                                            e = true
                                        }
                                    }
                                }
                            }
                        }
                        if (h !== I) {
                            if (!c) {
                                bF = bN
                            }
                            a = a.replace(m.match[g], "");
                            if (!e) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (a === bz) {
                    if (e == null) {
                        l.error(a)
                    } else {
                        break
                    }
                }
                bz = a
            }
            return bF
        };
        l.error = function(e) {
            throw "Syntax error, unrecognized expression: " + e
        };
        var m = l.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(e) {
                    return e.getAttribute("href")
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function(a, b) {
                    var c = typeof b === "string",
                        bC = c && !bx.test(b),
                        bE = c && !bC;
                    if (bC) {
                        b = b.toLowerCase()
                    }
                    for (var d = 0, e = a.length, bB; d < e; d++) {
                        if ((bB = a[d])) {
                            while ((bB = bB.previousSibling) && bB.nodeType !== 1) {}
                            a[d] = bE || bB && bB.nodeName.toLowerCase() === b ? bB || false : bB === b
                        }
                    }
                    if (bE) {
                        l.filter(b, a, true)
                    }
                },
                ">": function(a, b) {
                    var c, bB = typeof b === "string",
                        bz = 0,
                        e = a.length;
                    if (bB && !bx.test(b)) {
                        b = b.toLowerCase();
                        for (; bz < e; bz++) {
                            c = a[bz];
                            if (c) {
                                var d = c.parentNode;
                                a[bz] = d.nodeName.toLowerCase() === b ? d : false
                            }
                        }
                    } else {
                        for (; bz < e; bz++) {
                            c = a[bz];
                            if (c) {
                                a[bz] = bB ? c.parentNode : c.parentNode === b
                            }
                        }
                        if (bB) {
                            l.filter(b, a, true)
                        }
                    }
                },
                "": function(a, b, c) {
                    var d, bz = bq++,
                        e = bv;
                    if (typeof b === "string" && !bx.test(b)) {
                        b = b.toLowerCase();
                        d = b;
                        e = bf
                    }
                    e("parentNode", b, bz, a, d, c)
                },
                "~": function(a, b, c) {
                    var d, bz = bq++,
                        e = bv;
                    if (typeof b === "string" && !bx.test(b)) {
                        b = b.toLowerCase();
                        d = b;
                        e = bf
                    }
                    e("previousSibling", b, bz, a, d, c)
                }
            },
            find: {
                ID: function(a, b, c) {
                    if (typeof b.getElementById !== "undefined" && !c) {
                        var e = b.getElementById(a[1]);
                        return e && e.parentNode ? [e] : []
                    }
                },
                NAME: function(a, b) {
                    if (typeof b.getElementsByName !== "undefined") {
                        var c = [],
                            bB = b.getElementsByName(a[1]);
                        for (var d = 0, e = bB.length; d < e; d++) {
                            if (bB[d].getAttribute("name") === a[1]) {
                                c.push(bB[d])
                            }
                        }
                        return c.length === 0 ? null : c
                    }
                },
                TAG: function(e, a) {
                    if (typeof a.getElementsByTagName !== "undefined") {
                        return a.getElementsByTagName(e[1])
                    }
                }
            },
            preFilter: {
                CLASS: function(a, b, c, e, d, f) {
                    a = " " + a[1].replace(br, "") + " ";
                    if (f) {
                        return a
                    }
                    for (var g = 0, bC;
                        (bC = b[g]) != null; g++) {
                        if (bC) {
                            if (d ^ (bC.className && (" " + bC.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0)) {
                                if (!c) {
                                    e.push(bC)
                                }
                            } else {
                                if (c) {
                                    b[g] = false
                                }
                            }
                        }
                    }
                    return false
                },
                ID: function(e) {
                    return e[1].replace(br, "")
                },
                TAG: function(a, e) {
                    return a[1].replace(br, "").toLowerCase()
                },
                CHILD: function(e) {
                    if (e[1] === "nth") {
                        if (!e[2]) {
                            l.error(e[0])
                        }
                        e[2] = e[2].replace(/^\+|\s*/g, "");
                        var a = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = (a[1] + (a[2] || 1)) - 0;
                        e[3] = a[3] - 0
                    } else {
                        if (e[2]) {
                            l.error(e[0])
                        }
                    }
                    e[0] = bq++;
                    return e
                },
                ATTR: function(a, b, c, e, d, f) {
                    var g = a[1] = a[1].replace(br, "");
                    if (!f && m.attrMap[g]) {
                        a[1] = m.attrMap[g]
                    }
                    a[4] = (a[4] || a[5] || "").replace(br, "");
                    if (a[2] === "~=") {
                        a[4] = " " + a[4] + " "
                    }
                    return a
                },
                PSEUDO: function(a, b, c, e, d) {
                    if (a[1] === "not") {
                        if ((k.exec(a[3]) || "").length > 1 || /^\w/.test(a[3])) {
                            a[3] = l(a[3], null, null, b)
                        } else {
                            var f = l.filter(a[3], b, c, true ^ d);
                            if (!c) {
                                e.push.apply(e, f)
                            }
                            return false
                        }
                    } else {
                        if (m.match.POS.test(a[0]) || m.match.CHILD.test(a[0])) {
                            return true
                        }
                    }
                    return a
                },
                POS: function(e) {
                    e.unshift(true);
                    return e
                }
            },
            filters: {
                enabled: function(e) {
                    return e.disabled === false && e.type !== "hidden"
                },
                disabled: function(e) {
                    return e.disabled === true
                },
                checked: function(e) {
                    return e.checked === true
                },
                selected: function(e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                },
                parent: function(e) {
                    return !!e.firstChild
                },
                empty: function(e) {
                    return !e.firstChild
                },
                has: function(a, b, e) {
                    return !!l(e[3], a).length
                },
                header: function(e) {
                    return (/h\d/i).test(e.nodeName)
                },
                text: function(a) {
                    var e = a.getAttribute("type"),
                        by = a.type;
                    return "text" === by && (e === by || e === null)
                },
                radio: function(e) {
                    return "radio" === e.type
                },
                checkbox: function(e) {
                    return "checkbox" === e.type
                },
                file: function(e) {
                    return "file" === e.type
                },
                password: function(e) {
                    return "password" === e.type
                },
                submit: function(e) {
                    return "submit" === e.type
                },
                image: function(e) {
                    return "image" === e.type
                },
                reset: function(e) {
                    return "reset" === e.type
                },
                button: function(e) {
                    return "button" === e.type || e.nodeName.toLowerCase() === "button"
                },
                input: function(e) {
                    return (/input|select|textarea|button/i).test(e.nodeName)
                }
            },
            setFilters: {
                first: function(a, e) {
                    return e === 0
                },
                last: function(a, b, e, c) {
                    return b === c.length - 1
                },
                even: function(a, e) {
                    return e % 2 === 0
                },
                odd: function(a, e) {
                    return e % 2 === 1
                },
                lt: function(a, b, e) {
                    return b < e[3] - 0
                },
                gt: function(a, b, e) {
                    return b > e[3] - 0
                },
                nth: function(a, b, e) {
                    return e[3] - 0 === b
                },
                eq: function(a, b, e) {
                    return e[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function(a, b, c, d) {
                    var e = b[1],
                        by = m.filters[e];
                    if (by) {
                        return by(a, c, b, d)
                    } else {
                        if (e === "contains") {
                            return (a.textContent || a.innerText || l.getText([a]) || "").indexOf(b[3]) >= 0
                        } else {
                            if (e === "not") {
                                var f = b[3];
                                for (var g = 0, bB = f.length; g < bB; g++) {
                                    if (f[g] === a) {
                                        return false
                                    }
                                }
                                return true
                            } else {
                                l.error(e)
                            }
                        }
                    }
                },
                CHILD: function(e, a) {
                    var b = a[1],
                        by = e;
                    switch (b) {
                        case "only":
                        case "first":
                            while ((by = by.previousSibling)) {
                                if (by.nodeType === 1) {
                                    return false
                                }
                            }
                            if (b === "first") {
                                return true
                            }
                            by = e;
                        case "last":
                            while ((by = by.nextSibling)) {
                                if (by.nodeType === 1) {
                                    return false
                                }
                            }
                            return true;
                        case "nth":
                            var c = a[2],
                                bG = a[3];
                            if (c === 1 && bG === 0) {
                                return true
                            }
                            var d = a[0],
                                bF = e.parentNode;
                            if (bF && (bF.sizcache !== d || !e.nodeIndex)) {
                                var f = 0;
                                for (by = bF.firstChild; by; by = by.nextSibling) {
                                    if (by.nodeType === 1) {
                                        by.nodeIndex = ++f
                                    }
                                }
                                bF.sizcache = d
                            }
                            var g = e.nodeIndex - bG;
                            if (c === 0) {
                                return g === 0
                            } else {
                                return (g % c === 0 && g / c >= 0)
                            }
                    }
                },
                ID: function(a, e) {
                    return a.nodeType === 1 && a.getAttribute("id") === e
                },
                TAG: function(a, e) {
                    return (e === "*" && a.nodeType === 1) || a.nodeName.toLowerCase() === e
                },
                CLASS: function(a, e) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(e) > -1
                },
                ATTR: function(a, b) {
                    var c = b[1],
                        e = m.attrHandle[c] ? m.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                        bD = e + "",
                        bB = b[2],
                        by = b[4];
                    return e == null ? bB === "!=" : bB === "=" ? bD === by : bB === "*=" ? bD.indexOf(by) >= 0 : bB === "~=" ? (" " + bD + " ").indexOf(by) >= 0 : !by ? bD && e !== false : bB === "!=" ? bD !== by : bB === "^=" ? bD.indexOf(by) === 0 : bB === "$=" ? bD.substr(bD.length - by.length) === by : bB === "|=" ? bD === by || bD.substr(0, by.length + 1) === by + "-" : false
                },
                POS: function(a, b, c, d) {
                    var e = b[2],
                        bA = m.setFilters[e];
                    if (bA) {
                        return bA(a, c, b, d)
                    }
                }
            }
        };
        var n = m.match.POS,
            bg = function(a, e) {
                return "\\" + (e - 0 + 1)
            };
        for (var o in m.match) {
            m.match[o] = new RegExp(m.match[o].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
            m.leftMatch[o] = new RegExp(/(^(?:.|\r|\n)*?)/.source + m.match[o].source.replace(/\\(\d+)/g, bg))
        }
        var p = function(a, e) {
            a = Array.prototype.slice.call(a, 0);
            if (e) {
                e.push.apply(e, a);
                return e
            }
            return a
        };
        try {
            Array.prototype.slice.call(bS.documentElement.childNodes, 0)[0].nodeType
        } catch (bw) {
            p = function(a, b) {
                var c = 0,
                    by = b || [];
                if (bt.call(a) === "[object Array]") {
                    Array.prototype.push.apply(by, a)
                } else {
                    if (typeof a.length === "number") {
                        for (var e = a.length; c < e; c++) {
                            by.push(a[c])
                        }
                    } else {
                        for (; a[c]; c++) {
                            by.push(a[c])
                        }
                    }
                }
                return by
            }
        }
        var q, bo;
        if (bS.documentElement.compareDocumentPosition) {
            q = function(a, e) {
                if (a === e) {
                    bk = true;
                    return 0
                }
                if (!a.compareDocumentPosition || !e.compareDocumentPosition) {
                    return a.compareDocumentPosition ? -1 : 1
                }
                return a.compareDocumentPosition(e) & 4 ? -1 : 1
            }
        } else {
            q = function(a, b) {
                var c, by, bz = [],
                    e = [],
                    bB = a.parentNode,
                    bD = b.parentNode,
                    bG = bB;
                if (a === b) {
                    bk = true;
                    return 0
                } else {
                    if (bB === bD) {
                        return bo(a, b)
                    } else {
                        if (!bB) {
                            return -1
                        } else {
                            if (!bD) {
                                return 1
                            }
                        }
                    }
                }
                while (bG) {
                    bz.unshift(bG);
                    bG = bG.parentNode
                }
                bG = bD;
                while (bG) {
                    e.unshift(bG);
                    bG = bG.parentNode
                }
                c = bz.length;
                by = e.length;
                for (var d = 0; d < c && d < by; d++) {
                    if (bz[d] !== e[d]) {
                        return bo(bz[d], e[d])
                    }
                }
                return d === c ? bo(a, e[d], -1) : bo(bz[d], b, 1)
            };
            bo = function(a, e, b) {
                if (a === e) {
                    return b
                }
                var c = a.nextSibling;
                while (c) {
                    if (c === e) {
                        return -1
                    }
                    c = c.nextSibling
                }
                return 1
            }
        }
        l.getText = function(e) {
            var a = "",
                bA;
            for (var b = 0; e[b]; b++) {
                bA = e[b];
                if (bA.nodeType === 3 || bA.nodeType === 4) {
                    a += bA.nodeValue
                } else {
                    if (bA.nodeType !== 8) {
                        a += l.getText(bA.childNodes)
                    }
                }
            }
            return a
        };
        (function() {
            var f = bS.createElement("div"),
                bz = "script" + (new Date()).getTime(),
                e = bS.documentElement;
            f.innerHTML = "<a name='" + bz + "'/>";
            e.insertBefore(f, e.firstChild);
            if (bS.getElementById(bz)) {
                m.find.ID = function(a, b, c) {
                    if (typeof b.getElementById !== "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d ? d.id === a[1] || typeof d.getAttributeNode !== "undefined" && d.getAttributeNode("id").nodeValue === a[1] ? [d] : I : []
                    }
                };
                m.filter.ID = function(a, b) {
                    var c = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
                    return a.nodeType === 1 && c && c.nodeValue === b
                }
            }
            e.removeChild(f);
            e = f = null
        })();
        (function() {
            var e = bS.createElement("div");
            e.appendChild(bS.createComment(""));
            if (e.getElementsByTagName("*").length > 0) {
                m.find.TAG = function(a, b) {
                    var c = b.getElementsByTagName(a[1]);
                    if (a[1] === "*") {
                        var d = [];
                        for (var e = 0; c[e]; e++) {
                            if (c[e].nodeType === 1) {
                                d.push(c[e])
                            }
                        }
                        c = d
                    }
                    return c
                }
            }
            e.innerHTML = "<a href='#'></a>";
            if (e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#") {
                m.attrHandle.href = function(a) {
                    return a.getAttribute("href", 2)
                }
            }
            e = null
        })();
        if (bS.querySelectorAll) {
            (function() {
                var e = l,
                    bA = bS.createElement("div"),
                    bz = "__sizzle__";
                bA.innerHTML = "<p class='TEST'></p>";
                if (bA.querySelectorAll && bA.querySelectorAll(".TEST").length === 0) {
                    return
                }
                l = function(a, b, c, d) {
                    b = b || bS;
                    if (!d && !l.isXML(b)) {
                        var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);
                        if (f && (b.nodeType === 1 || b.nodeType === 9)) {
                            if (f[1]) {
                                return p(b.getElementsByTagName(a), c)
                            } else {
                                if (f[2] && m.find.CLASS && b.getElementsByClassName) {
                                    return p(b.getElementsByClassName(f[2]), c)
                                }
                            }
                        }
                        if (b.nodeType === 9) {
                            if (a === "body" && b.body) {
                                return p([b.body], c)
                            } else {
                                if (f && f[3]) {
                                    var g = b.getElementById(f[3]);
                                    if (g && g.parentNode) {
                                        if (g.id === f[3]) {
                                            return p([g], c)
                                        }
                                    } else {
                                        return p([], c)
                                    }
                                }
                            }
                            try {
                                return p(b.querySelectorAll(a), c)
                            } catch (bH) {}
                        } else {
                            if (b.nodeType === 1 && b.nodeName.toLowerCase() !== "object") {
                                var h = b,
                                    bE = b.getAttribute("id"),
                                    bB = bE || bz,
                                    bN = b.parentNode,
                                    bM = /^\s*[+~]/.test(a);
                                if (!bE) {
                                    b.setAttribute("id", bB)
                                } else {
                                    bB = bB.replace(/'/g, "\\$&")
                                }
                                if (bM && bN) {
                                    b = b.parentNode
                                }
                                try {
                                    if (!bM || bN) {
                                        return p(b.querySelectorAll("[id='" + bB + "'] " + a), c)
                                    }
                                } catch (bI) {} finally {
                                    if (!bE) {
                                        h.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                    return e(a, b, c, d)
                };
                for (var i in e) {
                    l[i] = e[i]
                }
                bA = null
            })()
        }(function() {
            var e = bS.documentElement,
                bz = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (bz) {
                var d = !bz.call(bS.createElement("div"), "div"),
                    by = false;
                try {
                    bz.call(bS.documentElement, "[test!='']:sizzle")
                } catch (bA) {
                    by = true
                }
                l.matchesSelector = function(a, b) {
                    b = b.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!l.isXML(a)) {
                        try {
                            if (by || !m.match.PSEUDO.test(b) && !/!=/.test(b)) {
                                var c = bz.call(a, b);
                                if (c || !d || a.document && a.document.nodeType !== 11) {
                                    return c
                                }
                            }
                        } catch (bE) {}
                    }
                    return l(b, null, null, [a]).length > 0
                }
            }
        })();
        (function() {
            var e = bS.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) {
                return
            }
            e.lastChild.className = "e";
            if (e.getElementsByClassName("e").length === 1) {
                return
            }
            m.order.splice(1, 0, "CLASS");
            m.find.CLASS = function(a, b, c) {
                if (typeof b.getElementsByClassName !== "undefined" && !c) {
                    return b.getElementsByClassName(a[1])
                }
            };
            e = null
        })();

        function bf(a, b, c, d, f, g) {
            for (var h = 0, bz = d.length; h < bz; h++) {
                var e = d[h];
                if (e) {
                    var i = false;
                    e = e[a];
                    while (e) {
                        if (e.sizcache === c) {
                            i = d[e.sizset];
                            break
                        }
                        if (e.nodeType === 1 && !g) {
                            e.sizcache = c;
                            e.sizset = h
                        }
                        if (e.nodeName.toLowerCase() === b) {
                            i = e;
                            break
                        }
                        e = e[a]
                    }
                    d[h] = i
                }
            }
        }

        function bv(a, b, c, d, f, g) {
            for (var h = 0, bz = d.length; h < bz; h++) {
                var e = d[h];
                if (e) {
                    var i = false;
                    e = e[a];
                    while (e) {
                        if (e.sizcache === c) {
                            i = d[e.sizset];
                            break
                        }
                        if (e.nodeType === 1) {
                            if (!g) {
                                e.sizcache = c;
                                e.sizset = h
                            }
                            if (typeof b !== "string") {
                                if (e === b) {
                                    i = true;
                                    break
                                }
                            } else {
                                if (l.filter(b, [e]).length > 0) {
                                    i = e;
                                    break
                                }
                            }
                        }
                        e = e[a]
                    }
                    d[h] = i
                }
            }
        }
        if (bS.documentElement.contains) {
            l.contains = function(a, e) {
                return a !== e && (a.contains ? a.contains(e) : true)
            }
        } else {
            if (bS.documentElement.compareDocumentPosition) {
                l.contains = function(a, e) {
                    return !!(a.compareDocumentPosition(e) & 16)
                }
            } else {
                l.contains = function() {
                    return false
                }
            }
        }
        l.isXML = function(e) {
            var a = (e ? e.ownerDocument || e : 0).documentElement;
            return a ? a.nodeName !== "HTML" : false
        };
        var r = function(e, a) {
            var b, bA = [],
                bB = "",
                bz = a.nodeType ? [a] : a;
            while ((b = m.match.PSEUDO.exec(e))) {
                bB += b[0];
                e = e.replace(m.match.PSEUDO, "")
            }
            e = m.relative[e] ? e + "*" : e;
            for (var c = 0, by = bz.length; c < by; c++) {
                l(e, bz[c], bA)
            }
            return l.filter(bB, bA)
        };
        b.find = l;
        b.expr = l.selectors;
        b.expr[":"] = b.expr.filters;
        b.unique = l.uniqueSort;
        b.text = l.getText;
        b.isXMLDoc = l.isXML;
        b.contains = l.contains
    })();
    var X = /Until$/,
        aj = /^(?:parents|prevUntil|prevAll)/,
        aY = /,/,
        bb = /^.[^:#\[\.,]*$/,
        N = Array.prototype.slice,
        G = b.expr.match.POS,
        ap = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    b.fn.extend({
        find: function(e) {
            var a = this.pushStack("", "find", e),
                bj = 0;
            for (var c = 0, bf = this.length; c < bf; c++) {
                bj = a.length;
                b.find(e, this[c], a);
                if (c > 0) {
                    for (var d = bj; d < a.length; d++) {
                        for (var f = 0; f < bj; f++) {
                            if (a[f] === a[d]) {
                                a.splice(d--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return a
        },
        has: function(c) {
            var e = b(c);
            return this.filter(function() {
                for (var a = 0, bg = e.length; a < bg; a++) {
                    if (b.contains(this, e[a])) {
                        return true
                    }
                }
            })
        },
        not: function(e) {
            return this.pushStack(aw(this, e, false), "not", e)
        },
        filter: function(e) {
            return this.pushStack(aw(this, e, true), "filter", e)
        },
        is: function(e) {
            return !!e && b.filter(e, this).length > 0
        },
        closest: function(a, c) {
            var d = [],
                bi, bg, bn = this[0];
            if (b.isArray(a)) {
                var f, bh, bj = {},
                    e = 1;
                if (bn && a.length) {
                    for (bi = 0, bg = a.length; bi < bg; bi++) {
                        bh = a[bi];
                        if (!bj[bh]) {
                            bj[bh] = b.expr.match.POS.test(bh) ? b(bh, c || this.context) : bh
                        }
                    }
                    while (bn && bn.ownerDocument && bn !== c) {
                        for (bh in bj) {
                            f = bj[bh];
                            if (f.jquery ? f.index(bn) > -1 : b(bn).is(f)) {
                                d.push({
                                    selector: bh,
                                    elem: bn,
                                    level: e
                                })
                            }
                        }
                        bn = bn.parentNode;
                        e++
                    }
                }
                return d
            }
            var g = G.test(a) ? b(a, c || this.context) : null;
            for (bi = 0, bg = this.length; bi < bg; bi++) {
                bn = this[bi];
                while (bn) {
                    if (g ? g.index(bn) > -1 : b.find.matchesSelector(bn, a)) {
                        d.push(bn);
                        break
                    } else {
                        bn = bn.parentNode;
                        if (!bn || !bn.ownerDocument || bn === c) {
                            break
                        }
                    }
                }
            }
            d = d.length > 1 ? b.unique(d) : d;
            return this.pushStack(d, "closest", a)
        },
        index: function(e) {
            if (!e || typeof e === "string") {
                return b.inArray(this[0], e ? b(e) : this.parent().children())
            }
            return b.inArray(e.jquery ? e[0] : e, this)
        },
        add: function(e, a) {
            var c = typeof e === "string" ? b(e, a) : b.makeArray(e),
                bg = b.merge(this.get(), c);
            return this.pushStack(C(c[0]) || C(bg[0]) ? bg : b.unique(bg))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });

    function C(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }
    b.each({
        parent: function(a) {
            var e = a.parentNode;
            return e && e.nodeType !== 11 ? e : null
        },
        parents: function(e) {
            return b.dir(e, "parentNode")
        },
        parentsUntil: function(a, e, c) {
            return b.dir(a, "parentNode", c)
        },
        next: function(e) {
            return b.nth(e, 2, "nextSibling")
        },
        prev: function(e) {
            return b.nth(e, 2, "previousSibling")
        },
        nextAll: function(e) {
            return b.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return b.dir(e, "previousSibling")
        },
        nextUntil: function(a, e, c) {
            return b.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, e, c) {
            return b.dir(a, "previousSibling", c)
        },
        siblings: function(e) {
            return b.sibling(e.parentNode.firstChild, e)
        },
        children: function(e) {
            return b.sibling(e.firstChild)
        },
        contents: function(e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.makeArray(e.childNodes)
        }
    }, function(e, f) {
        b.fn[e] = function(a, c) {
            var d = b.map(this, f, a),
                bh = N.call(arguments);
            if (!X.test(e)) {
                c = a
            }
            if (c && typeof c === "string") {
                d = b.filter(c, d)
            }
            d = this.length > 1 && !ap[e] ? b.unique(d) : d;
            if ((this.length > 1 || aY.test(c)) && aj.test(e)) {
                d = d.reverse()
            }
            return this.pushStack(d, e, bh.join(","))
        }
    });
    b.extend({
        filter: function(a, e, c) {
            if (c) {
                a = ":not(" + a + ")"
            }
            return e.length === 1 ? b.find.matchesSelector(e[0], a) ? [e[0]] : [] : b.find.matches(a, e)
        },
        dir: function(a, c, d) {
            var e = [],
                bh = a[c];
            while (bh && bh.nodeType !== 9 && (d === I || bh.nodeType !== 1 || !b(bh).is(d))) {
                if (bh.nodeType === 1) {
                    e.push(bh)
                }
                bh = bh[c]
            }
            return e
        },
        nth: function(a, e, b, c) {
            e = e || 1;
            var d = 0;
            for (; a; a = a[b]) {
                if (a.nodeType === 1 && ++d === e) {
                    break
                }
            }
            return a
        },
        sibling: function(a, b) {
            var e = [];
            for (; a; a = a.nextSibling) {
                if (a.nodeType === 1 && a !== b) {
                    e.push(a)
                }
            }
            return e
        }
    });

    function aw(d, f, e) {
        if (b.isFunction(f)) {
            return b.grep(d, function(a, b) {
                var c = !!f.call(a, b, a);
                return c === e
            })
        } else {
            if (f.nodeType) {
                return b.grep(d, function(a, b) {
                    return (a === f) === e
                })
            } else {
                if (typeof f === "string") {
                    var g = b.grep(d, function(a) {
                        return a.nodeType === 1
                    });
                    if (bb.test(f)) {
                        return b.filter(f, g, !e)
                    } else {
                        f = b.filter(f, g)
                    }
                }
            }
        }
        return b.grep(d, function(a, c) {
            return (b.inArray(a, f) >= 0) === e
        })
    }
    var bZ = / jQuery\d+="(?:\d+|null)"/g,
        ak = /^\s+/,
        P = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        d = /<([\w:]+)/,
        w = /<tbody/i,
        U = /<|&#?\w+;/,
        M = /<(?:script|object|embed|option|style)/i,
        n = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ao = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    ao.optgroup = ao.option;
    ao.tbody = ao.tfoot = ao.colgroup = ao.caption = ao.thead;
    ao.th = ao.td;
    if (!b.support.htmlSerialize) {
        ao._default = [1, "div<div>", "</div>"]
    }
    b.fn.extend({
        text: function(e) {
            if (b.isFunction(e)) {
                return this.each(function(a) {
                    var c = b(this);
                    c.text(e.call(this, a, c.text()))
                })
            }
            if (typeof e !== "object" && e !== I) {
                return this.empty().append((this[0] && this[0].ownerDocument || bS).createTextNode(e))
            }
            return b.text(this)
        },
        wrapAll: function(e) {
            if (b.isFunction(e)) {
                return this.each(function(a) {
                    b(this).wrapAll(e.call(this, a))
                })
            }
            if (this[0]) {
                var c = b(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    c.insertBefore(this[0])
                }
                c.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            if (b.isFunction(e)) {
                return this.each(function(a) {
                    b(this).wrapInner(e.call(this, a))
                })
            }
            return this.each(function() {
                var a = b(this),
                    bg = a.contents();
                if (bg.length) {
                    bg.wrapAll(e)
                } else {
                    a.append(e)
                }
            })
        },
        wrap: function(e) {
            return this.each(function() {
                b(this).wrapAll(e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!b.nodeName(this, "body")) {
                    b(this).replaceWith(this.childNodes)
                }
            }).end()
        },
        append: function() {
            return this.domManip(arguments, true, function(e) {
                if (this.nodeType === 1) {
                    this.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, true, function(e) {
                if (this.nodeType === 1) {
                    this.insertBefore(e, this.firstChild)
                }
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function(a) {
                    this.parentNode.insertBefore(a, this)
                })
            } else {
                if (arguments.length) {
                    var e = b(arguments[0]);
                    e.push.apply(e, this.toArray());
                    return this.pushStack(e, "before", arguments)
                }
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                })
            } else {
                if (arguments.length) {
                    var e = this.pushStack(this, "after", arguments);
                    e.push.apply(e, b(arguments[0]).toArray());
                    return e
                }
            }
        },
        remove: function(e, a) {
            for (var c = 0, bg;
                (bg = this[c]) != null; c++) {
                if (!e || b.filter(e, [bg]).length) {
                    if (!a && bg.nodeType === 1) {
                        b.cleanData(bg.getElementsByTagName("*"));
                        b.cleanData([bg])
                    }
                    if (bg.parentNode) {
                        bg.parentNode.removeChild(bg)
                    }
                }
            }
            return this
        },
        empty: function() {
            for (var e = 0, bf;
                (bf = this[e]) != null; e++) {
                if (bf.nodeType === 1) {
                    b.cleanData(bf.getElementsByTagName("*"))
                }
                while (bf.firstChild) {
                    bf.removeChild(bf.firstChild)
                }
            }
            return this
        },
        clone: function(a, e) {
            a = a == null ? false : a;
            e = e == null ? a : e;
            return this.map(function() {
                return b.clone(this, a, e)
            })
        },
        html: function(c) {
            if (c === I) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(bZ, "") : null
            } else {
                if (typeof c === "string" && !M.test(c) && (b.support.leadingWhitespace || !ak.test(c)) && !ao[(d.exec(c) || ["", ""])[1].toLowerCase()]) {
                    c = c.replace(P, "<$1></$2>");
                    try {
                        for (var f = 0, bf = this.length; f < bf; f++) {
                            if (this[f].nodeType === 1) {
                                b.cleanData(this[f].getElementsByTagName("*"));
                                this[f].innerHTML = c
                            }
                        }
                    } catch (bi) {
                        this.empty().append(c)
                    }
                } else {
                    if (b.isFunction(c)) {
                        this.each(function(a) {
                            var e = b(this);
                            e.html(c.call(this, a, e.html()))
                        })
                    } else {
                        this.empty().append(c)
                    }
                }
            }
            return this
        },
        replaceWith: function(e) {
            if (this[0] && this[0].parentNode) {
                if (b.isFunction(e)) {
                    return this.each(function(a) {
                        var c = b(this),
                            bf = c.html();
                        c.replaceWith(e.call(this, a, bf))
                    })
                }
                if (typeof e !== "string") {
                    e = b(e).detach()
                }
                return this.each(function() {
                    var a = this.nextSibling,
                        bf = this.parentNode;
                    b(this).remove();
                    if (a) {
                        b(a).before(e)
                    } else {
                        b(bf).append(e)
                    }
                })
            } else {
                return this.length ? this.pushStack(b(b.isFunction(e) ? e() : e), "replaceWith", e) : this
            }
        },
        detach: function(e) {
            return this.remove(e, true)
        },
        domManip: function(d, f, g) {
            var h, bi, bk, bn, bm = d[0],
                bf = [];
            if (!b.support.checkClone && arguments.length === 3 && typeof bm === "string" && n.test(bm)) {
                return this.each(function() {
                    b(this).domManip(d, f, g, true)
                })
            }
            if (b.isFunction(bm)) {
                return this.each(function(a) {
                    var c = b(this);
                    d[0] = bm.call(this, a, f ? c.html() : I);
                    c.domManip(d, f, g)
                })
            }
            if (this[0]) {
                bn = bm && bm.parentNode;
                if (b.support.parentNode && bn && bn.nodeType === 11 && bn.childNodes.length === this.length) {
                    h = {
                        fragment: bn
                    }
                } else {
                    h = b.buildFragment(d, this, bf)
                }
                bk = h.fragment;
                if (bk.childNodes.length === 1) {
                    bi = bk = bk.firstChild
                } else {
                    bi = bk.firstChild
                }
                if (bi) {
                    f = f && b.nodeName(bi, "tr");
                    for (var i = 0, e = this.length, bj = e - 1; i < e; i++) {
                        g.call(f ? aZ(this[i], bi) : this[i], h.cacheable || (e > 1 && i < bj) ? b.clone(bk, true, true) : bk)
                    }
                }
                if (bf.length) {
                    b.each(bf, ba)
                }
            }
            return this
        }
    });

    function aZ(e, a) {
        return b.nodeName(e, "table") ? (e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody"))) : e
    }

    function t(e, a) {
        if (a.nodeType !== 1 || !b.hasData(e)) {
            return
        }
        var c = b.expando,
            bh = b.data(e),
            bi = b.data(a, bh);
        if ((bh = bh[c])) {
            var d = bh.events;
            bi = bi[c] = b.extend({}, bh);
            if (d) {
                delete bi.handle;
                bi.events = {};
                for (var f in d) {
                    for (var g = 0, bf = d[f].length; g < bf; g++) {
                        b.event.add(a, f + (d[f][g].namespace ? "." : "") + d[f][g].namespace, d[f][g], d[f][g].data)
                    }
                }
            }
        }
    }

    function ad(a, e) {
        if (e.nodeType !== 1) {
            return
        }
        var c = e.nodeName.toLowerCase();
        e.clearAttributes();
        e.mergeAttributes(a);
        if (c === "object") {
            e.outerHTML = a.outerHTML
        } else {
            if (c === "input" && (a.type === "checkbox" || a.type === "radio")) {
                if (a.checked) {
                    e.defaultChecked = e.checked = a.checked
                }
                if (e.value !== a.value) {
                    e.value = a.value
                }
            } else {
                if (c === "option") {
                    e.selected = a.defaultSelected
                } else {
                    if (c === "input" || c === "textarea") {
                        e.defaultValue = a.defaultValue
                    }
                }
            }
        }
        e.removeAttribute(b.expando)
    }
    b.buildFragment = function(a, c, d) {
        var f, e, bg, bk = (c && c[0] ? c[0].ownerDocument || c[0] : bS);
        if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && bk === bS && a[0].charAt(0) === "<" && !M.test(a[0]) && (b.support.checkClone || !n.test(a[0]))) {
            e = true;
            bg = b.fragments[a[0]];
            if (bg) {
                if (bg !== 1) {
                    f = bg
                }
            }
        }
        if (!f) {
            f = bk.createDocumentFragment();
            b.clean(a, bk, f, d)
        }
        if (e) {
            b.fragments[a[0]] = bg ? f : 1
        }
        return {
            fragment: f,
            cacheable: e
        }
    };
    b.fragments = {};
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, g) {
        b.fn[e] = function(a) {
            var c = [],
                bm = b(a),
                bl = this.length === 1 && this[0].parentNode;
            if (bl && bl.nodeType === 11 && bl.childNodes.length === 1 && bm.length === 1) {
                bm[g](this[0]);
                return this
            } else {
                for (var d = 0, bh = bm.length; d < bh; d++) {
                    var f = (d > 0 ? this.clone(true) : this).get();
                    b(bm[d])[g](f);
                    c = c.concat(f)
                }
                return this.pushStack(c, e, bm.selector)
            }
        }
    });

    function a3(e) {
        if ("getElementsByTagName" in e) {
            return e.getElementsByTagName("*")
        } else {
            if ("querySelectorAll" in e) {
                return e.querySelectorAll("*")
            } else {
                return []
            }
        }
    }
    b.extend({
        clone: function(a, c, d) {
            var f = a.cloneNode(true),
                e, bf, bh;
            if ((!b.support.noCloneEvent || !b.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !b.isXMLDoc(a)) {
                ad(a, f);
                e = a3(a);
                bf = a3(f);
                for (bh = 0; e[bh]; ++bh) {
                    ad(e[bh], bf[bh])
                }
            }
            if (c) {
                t(a, f);
                if (d) {
                    e = a3(a);
                    bf = a3(f);
                    for (bh = 0; e[bh]; ++bh) {
                        t(e[bh], bf[bh])
                    }
                }
            }
            return f
        },
        clean: function(a, c, f, g) {
            c = c || bS;
            if (typeof c.createElement === "undefined") {
                c = c.ownerDocument || c[0] && c[0].ownerDocument || bS
            }
            var h = [];
            for (var i = 0, bj;
                (bj = a[i]) != null; i++) {
                if (typeof bj === "number") {
                    bj += ""
                }
                if (!bj) {
                    continue
                }
                if (typeof bj === "string" && !U.test(bj)) {
                    bj = c.createTextNode(bj)
                } else {
                    if (typeof bj === "string") {
                        bj = bj.replace(P, "<$1></$2>");
                        var j = (d.exec(bj) || ["", ""])[1].toLowerCase(),
                            bh = ao[j] || ao._default,
                            bn = bh[0],
                            bf = c.createElement("div");
                        bf.innerHTML = bh[1] + bj + bh[2];
                        while (bn--) {
                            bf = bf.lastChild
                        }
                        if (!b.support.tbody) {
                            var e = w.test(bj),
                                bm = j === "table" && !e ? bf.firstChild && bf.firstChild.childNodes : bh[1] === "<table>" && !e ? bf.childNodes : [];
                            for (var k = bm.length - 1; k >= 0; --k) {
                                if (b.nodeName(bm[k], "tbody") && !bm[k].childNodes.length) {
                                    bm[k].parentNode.removeChild(bm[k])
                                }
                            }
                        }
                        if (!b.support.leadingWhitespace && ak.test(bj)) {
                            bf.insertBefore(c.createTextNode(ak.exec(bj)[0]), bf.firstChild)
                        }
                        bj = bf.childNodes
                    }
                }
                if (bj.nodeType) {
                    h.push(bj)
                } else {
                    h = b.merge(h, bj)
                }
            }
            if (f) {
                for (i = 0; h[i]; i++) {
                    if (g && b.nodeName(h[i], "script") && (!h[i].type || h[i].type.toLowerCase() === "text/javascript")) {
                        g.push(h[i].parentNode ? h[i].parentNode.removeChild(h[i]) : h[i])
                    } else {
                        if (h[i].nodeType === 1) {
                            h.splice.apply(h, [i + 1, 0].concat(b.makeArray(h[i].getElementsByTagName("script"))))
                        }
                        f.appendChild(h[i])
                    }
                }
            }
            return h
        },
        cleanData: function(a) {
            var c, bg, e = b.cache,
                bn = b.expando,
                bl = b.event.special,
                bk = b.support.deleteExpando;
            for (var d = 0, bh;
                (bh = a[d]) != null; d++) {
                if (bh.nodeName && b.noData[bh.nodeName.toLowerCase()]) {
                    continue
                }
                bg = bh[b.expando];
                if (bg) {
                    c = e[bg] && e[bg][bn];
                    if (c && c.events) {
                        for (var f in c.events) {
                            if (bl[f]) {
                                b.event.remove(bh, f)
                            } else {
                                b.removeEvent(bh, f, c.handle)
                            }
                        }
                        if (c.handle) {
                            c.handle.elem = null
                        }
                    }
                    if (bk) {
                        delete bh[b.expando]
                    } else {
                        if (bh.removeAttribute) {
                            bh.removeAttribute(b.expando)
                        }
                    }
                    delete e[bg]
                }
            }
        }
    });

    function ba(e, a) {
        if (a.src) {
            b.ajax({
                url: a.src,
                async: false,
                dataType: "script"
            })
        } else {
            b.globalEval(a.text || a.textContent || a.innerHTML || "")
        }
        if (a.parentNode) {
            a.parentNode.removeChild(a)
        }
    }
    var ca = /alpha\([^)]*\)/i,
        al = /opacity=([^)]*)/,
        aO = /-([a-z])/ig,
        z = /([A-Z]|^ms)/g,
        a1 = /^-?\d+(?:px)?$/i,
        a9 = /^-?\d/,
        aX = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ah = ["Left", "Right"],
        aT = ["Top", "Bottom"],
        V, az, aN, m = function(e, a) {
            return a.toUpperCase()
        };
    b.fn.css = function(e, f) {
        if (arguments.length === 2 && f === I) {
            return this
        }
        return b.access(this, e, f, true, function(a, c, d) {
            return d !== I ? b.style(a, c, d) : b.css(a, c)
        })
    };
    b.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var e = V(a, "opacity", "opacity");
                        return e === "" ? "1" : e
                    } else {
                        return a.style.opacity
                    }
                }
            }
        },
        cssNumber: {
            zIndex: true,
            fontWeight: true,
            opacity: true,
            zoom: true,
            lineHeight: true
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) {
                return
            }
            var f, bj = b.camelCase(c),
                bf = a.style,
                bn = b.cssHooks[bj];
            c = b.cssProps[bj] || bj;
            if (d !== I) {
                if (typeof d === "number" && isNaN(d) || d == null) {
                    return
                }
                if (typeof d === "number" && !b.cssNumber[bj]) {
                    d += "px"
                }
                if (!bn || !("set" in bn) || (d = bn.set(a, d)) !== I) {
                    try {
                        bf[c] = d
                    } catch (bk) {}
                }
            } else {
                if (bn && "get" in bn && (f = bn.get(a, false, e)) !== I) {
                    return f
                }
                return bf[c]
            }
        },
        css: function(a, c, d) {
            var f, bg = b.camelCase(c),
                e = b.cssHooks[bg];
            c = b.cssProps[bg] || bg;
            if (e && "get" in e && (f = e.get(a, true, d)) !== I) {
                return f
            } else {
                if (V) {
                    return V(a, c, bg)
                }
            }
        },
        swap: function(a, b, c) {
            var e = {};
            for (var d in b) {
                e[d] = a.style[d];
                a.style[d] = b[d]
            }
            c.call(a);
            for (d in b) {
                a.style[d] = e[d]
            }
        },
        camelCase: function(e) {
            return e.replace(aO, m)
        }
    });
    b.curCSS = b.css;
    b.each(["height", "width"], function(g, e) {
        b.cssHooks[e] = {
            get: function(a, c, d) {
                var f;
                if (c) {
                    if (a.offsetWidth !== 0) {
                        f = p(a, e, d)
                    } else {
                        b.swap(a, aX, function() {
                            f = p(a, e, d)
                        })
                    }
                    if (f <= 0) {
                        f = V(a, e, e);
                        if (f === "0px" && aN) {
                            f = aN(a, e, e)
                        }
                        if (f != null) {
                            return f === "" || f === "auto" ? "0px" : f
                        }
                    }
                    if (f < 0 || f == null) {
                        f = a.style[e];
                        return f === "" || f === "auto" ? "0px" : f
                    }
                    return typeof f === "string" ? f : f + "px"
                }
            },
            set: function(a, b) {
                if (a1.test(b)) {
                    b = parseFloat(b);
                    if (b >= 0) {
                        return b + "px"
                    }
                } else {
                    return b
                }
            }
        }
    });
    if (!b.support.opacity) {
        b.cssHooks.opacity = {
            get: function(a, e) {
                return al.test((e && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? (parseFloat(RegExp.$1) / 100) + "" : e ? "1" : ""
            },
            set: function(a, c) {
                var d = a.style;
                d.zoom = 1;
                var e = b.isNaN(c) ? "" : "alpha(opacity=" + c * 100 + ")",
                    bf = d.filter || "";
                d.filter = ca.test(bf) ? bf.replace(ca, e) : d.filter + " " + e
            }
        }
    }
    b(function() {
        if (!b.support.reliableMarginRight) {
            b.cssHooks.marginRight = {
                get: function(a, c) {
                    var e;
                    b.swap(a, {
                        display: "inline-block"
                    }, function() {
                        if (c) {
                            e = V(a, "margin-right", "marginRight")
                        } else {
                            e = a.style.marginRight
                        }
                    });
                    return e
                }
            }
        }
    });
    if (bS.defaultView && bS.defaultView.getComputedStyle) {
        az = function(a, e, c) {
            var d, bi, bf;
            c = c.replace(z, "-$1").toLowerCase();
            if (!(bi = a.ownerDocument.defaultView)) {
                return I
            }
            if ((bf = bi.getComputedStyle(a, null))) {
                d = bf.getPropertyValue(c);
                if (d === "" && !b.contains(a.ownerDocument.documentElement, a)) {
                    d = b.style(a, c)
                }
            }
            return d
        }
    }
    if (bS.documentElement.currentStyle) {
        aN = function(a, b) {
            var c, bf = a.currentStyle && a.currentStyle[b],
                e = a.runtimeStyle && a.runtimeStyle[b],
                bh = a.style;
            if (!a1.test(bf) && a9.test(bf)) {
                c = bh.left;
                if (e) {
                    a.runtimeStyle.left = a.currentStyle.left
                }
                bh.left = b === "fontSize" ? "1em" : (bf || 0);
                bf = bh.pixelLeft + "px";
                bh.left = c;
                if (e) {
                    a.runtimeStyle.left = e
                }
            }
            return bf === "" ? "auto" : bf
        }
    }
    V = az || aN;

    function p(a, c, e) {
        var d = c === "width" ? ah : aT,
            bh = c === "width" ? a.offsetWidth : a.offsetHeight;
        if (e === "border") {
            return bh
        }
        b.each(d, function() {
            if (!e) {
                bh -= parseFloat(b.css(a, "padding" + this)) || 0
            }
            if (e === "margin") {
                bh += parseFloat(b.css(a, "margin" + this)) || 0
            } else {
                bh -= parseFloat(b.css(a, "border" + this + "Width")) || 0
            }
        });
        return bh
    }
    if (b.expr && b.expr.filters) {
        b.expr.filters.hidden = function(a) {
            var c = a.offsetWidth,
                e = a.offsetHeight;
            return (c === 0 && e === 0) || (!b.support.reliableHiddenOffsets && (a.style.display || b.css(a, "display")) === "none")
        };
        b.expr.filters.visible = function(e) {
            return !b.expr.filters.hidden(e)
        }
    }
    var j = /%20/g,
        ai = /\[\]$/,
        be = /\r?\n/g,
        bc = /#.*$/,
        at = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        aQ = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        aD = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/,
        aF = /^(?:GET|HEAD)$/,
        c = /^\/\//,
        J = /\?/,
        aW = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        q = /^(?:select|textarea)/i,
        h = /\s+/,
        bd = /([?&])_=[^&]*/,
        S = /(^|\-)([a-z])/g,
        aL = function(a, e, b) {
            return e + b.toUpperCase()
        },
        H = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        A = b.fn.load,
        W = {},
        r = {},
        av, s;
    try {
        av = bS.location.href
    } catch (an) {
        av = bS.createElement("a");
        av.href = "";
        av = av.href
    }
    s = H.exec(av.toLowerCase()) || [];

    function f(e) {
        return function(a, c) {
            if (typeof a !== "string") {
                c = a;
                a = "*"
            }
            if (b.isFunction(c)) {
                var d = a.toLowerCase().split(h),
                    bg = 0,
                    bj = d.length,
                    bf, bl, bm;
                for (; bg < bj; bg++) {
                    bf = d[bg];
                    bm = /^\+/.test(bf);
                    if (bm) {
                        bf = bf.substr(1) || "*"
                    }
                    bl = e[bf] = e[bf] || [];
                    bl[bm ? "unshift" : "push"](c)
                }
            }
        }
    }

    function aK(a, b, c, d, f, g) {
        f = f || b.dataTypes[0];
        g = g || {};
        g[f] = true;
        var h = a[f],
            bg = 0,
            e = h ? h.length : 0,
            bi = (a === W),
            bm;
        for (; bg < e && (bi || !bm); bg++) {
            bm = h[bg](b, c, d);
            if (typeof bm === "string") {
                if (!bi || g[bm]) {
                    bm = I
                } else {
                    b.dataTypes.unshift(bm);
                    bm = aK(a, b, c, d, bm, g)
                }
            }
        }
        if ((bi || !bm) && !g["*"]) {
            bm = aK(a, b, c, d, "*", g)
        }
        return bm
    }
    b.fn.extend({
        load: function(g, h, i) {
            if (typeof g !== "string" && A) {
                return A.apply(this, arguments)
            } else {
                if (!this.length) {
                    return this
                }
            }
            var j = g.indexOf(" ");
            if (j >= 0) {
                var e = g.slice(j, g.length);
                g = g.slice(0, j)
            }
            var k = "GET";
            if (h) {
                if (b.isFunction(h)) {
                    i = h;
                    h = I
                } else {
                    if (typeof h === "object") {
                        h = b.param(h, b.ajaxSettings.traditional);
                        k = "POST"
                    }
                }
            }
            var l = this;
            b.ajax({
                url: g,
                type: k,
                dataType: "html",
                data: h,
                complete: function(c, d, f) {
                    f = c.responseText;
                    if (c.isResolved()) {
                        c.done(function(a) {
                            f = a
                        });
                        l.html(e ? b("<div>").append(f.replace(aW, "")).find(e) : f)
                    }
                    if (i) {
                        l.each(i, [f, d, c])
                    }
                }
            });
            return this
        },
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? b.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || q.test(this.nodeName) || aQ.test(this.type))
            }).map(function(e, c) {
                var d = b(this).val();
                return d == null ? null : b.isArray(d) ? b.map(d, function(a, b) {
                    return {
                        name: c.name,
                        value: a.replace(be, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(be, "\r\n")
                }
            }).get()
        }
    });
    b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, c) {
        b.fn[c] = function(a) {
            return this.bind(c, a)
        }
    });
    b.each(["get", "post"], function(e, f) {
        b[f] = function(a, c, d, e) {
            if (b.isFunction(c)) {
                e = e || d;
                d = c;
                c = I
            }
            return b.ajax({
                type: f,
                url: a,
                data: c,
                success: d,
                dataType: e
            })
        }
    });
    b.extend({
        getScript: function(e, a) {
            return b.get(e, I, a, "script")
        },
        getJSON: function(e, a, c) {
            return b.get(e, a, c, "json")
        },
        ajaxSetup: function(a, e) {
            if (!e) {
                e = a;
                a = b.extend(true, b.ajaxSettings, e)
            } else {
                b.extend(true, a, b.ajaxSettings, e)
            }
            for (var c in {
                    context: 1,
                    url: 1
                }) {
                if (c in e) {
                    a[c] = e[c]
                } else {
                    if (c in b.ajaxSettings) {
                        a[c] = b.ajaxSettings[c]
                    }
                }
            }
            return a
        },
        ajaxSettings: {
            url: av,
            isLocal: aD.test(s[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
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
                "* text": bR.String,
                "text html": true,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            }
        },
        ajaxPrefilter: f(W),
        ajaxTransport: f(r),
        ajax: function(g, i) {
            if (typeof g === "object") {
                i = g;
                g = I
            }
            i = i || {};
            var j = b.ajaxSetup({}, i),
                bB = j.context || j,
                bq = bB !== j && (bB.nodeType || bB instanceof b) ? b(bB) : b.event,
                bA = b.Deferred(),
                bx = b._Deferred(),
                bl = j.statusCode || {},
                bm, br = {},
                bz, bi, bv, bo, bs, bk = 0,
                bg, bu, bt = {
                    readyState: 0,
                    setRequestHeader: function(e, a) {
                        if (!bk) {
                            br[e.toLowerCase().replace(S, aL)] = a
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return bk === 2 ? bz : null
                    },
                    getResponseHeader: function(a) {
                        var e;
                        if (bk === 2) {
                            if (!bi) {
                                bi = {};
                                while ((e = at.exec(bz))) {
                                    bi[e[1].toLowerCase()] = e[2]
                                }
                            }
                            e = bi[a.toLowerCase()]
                        }
                        return e === I ? null : e
                    },
                    overrideMimeType: function(e) {
                        if (!bk) {
                            j.mimeType = e
                        }
                        return this
                    },
                    abort: function(e) {
                        e = e || "abort";
                        if (bv) {
                            bv.abort(e)
                        }
                        bp(0, e);
                        return this
                    }
                };

            function bp(a, c, d, e) {
                if (bk === 2) {
                    return
                }
                bk = 2;
                if (bo) {
                    clearTimeout(bo)
                }
                bv = I;
                bz = e || "";
                bt.readyState = a ? 4 : 0;
                var f, bM, bL, bG = d ? a6(j, bt, d) : I,
                    bD, bK;
                if (a >= 200 && a < 300 || a === 304) {
                    if (j.ifModified) {
                        if ((bD = bt.getResponseHeader("Last-Modified"))) {
                            b.lastModified[bm] = bD
                        }
                        if ((bK = bt.getResponseHeader("Etag"))) {
                            b.etag[bm] = bK
                        }
                    }
                    if (a === 304) {
                        c = "notmodified";
                        f = true
                    } else {
                        try {
                            bM = E(j, bG);
                            c = "success";
                            f = true
                        } catch (bJ) {
                            c = "parsererror";
                            bL = bJ
                        }
                    }
                } else {
                    bL = c;
                    if (!c || a) {
                        c = "error";
                        if (a < 0) {
                            a = 0
                        }
                    }
                }
                bt.status = a;
                bt.statusText = c;
                if (f) {
                    bA.resolveWith(bB, [bM, c, bt])
                } else {
                    bA.rejectWith(bB, [bt, c, bL])
                }
                bt.statusCode(bl);
                bl = I;
                if (bg) {
                    bq.trigger("ajax" + (f ? "Success" : "Error"), [bt, j, f ? bM : bL])
                }
                bx.resolveWith(bB, [bt, c]);
                if (bg) {
                    bq.trigger("ajaxComplete", [bt, j]);
                    if (!(--b.active)) {
                        b.event.trigger("ajaxStop")
                    }
                }
            }
            bA.promise(bt);
            bt.success = bt.done;
            bt.error = bt.fail;
            bt.complete = bx.done;
            bt.statusCode = function(a) {
                if (a) {
                    var e;
                    if (bk < 2) {
                        for (e in a) {
                            bl[e] = [bl[e], a[e]]
                        }
                    } else {
                        e = a[bt.status];
                        bt.then(e, e)
                    }
                }
                return this
            };
            j.url = ((g || j.url) + "").replace(bc, "").replace(c, s[1] + "//");
            j.dataTypes = b.trim(j.dataType || "*").toLowerCase().split(h);
            if (j.crossDomain == null) {
                bs = H.exec(j.url.toLowerCase());
                j.crossDomain = !!(bs && (bs[1] != s[1] || bs[2] != s[2] || (bs[3] || (bs[1] === "http:" ? 80 : 443)) != (s[3] || (s[1] === "http:" ? 80 : 443))))
            }
            if (j.data && j.processData && typeof j.data !== "string") {
                j.data = b.param(j.data, j.traditional)
            }
            aK(W, j, i, bt);
            if (bk === 2) {
                return false
            }
            bg = j.global;
            j.type = j.type.toUpperCase();
            j.hasContent = !aF.test(j.type);
            if (bg && b.active++ === 0) {
                b.event.trigger("ajaxStart")
            }
            if (!j.hasContent) {
                if (j.data) {
                    j.url += (J.test(j.url) ? "&" : "?") + j.data
                }
                bm = j.url;
                if (j.cache === false) {
                    var k = b.now(),
                        by = j.url.replace(bd, "$1_=" + k);
                    j.url = by + ((by === j.url) ? (J.test(j.url) ? "&" : "?") + "_=" + k : "")
                }
            }
            if (j.data && j.hasContent && j.contentType !== false || i.contentType) {
                br["Content-Type"] = j.contentType
            }
            if (j.ifModified) {
                bm = bm || j.url;
                if (b.lastModified[bm]) {
                    br["If-Modified-Since"] = b.lastModified[bm]
                }
                if (b.etag[bm]) {
                    br["If-None-Match"] = b.etag[bm]
                }
            }
            br.Accept = j.dataTypes[0] && j.accepts[j.dataTypes[0]] ? j.accepts[j.dataTypes[0]] + (j.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : j.accepts["*"];
            for (bu in j.headers) {
                bt.setRequestHeader(bu, j.headers[bu])
            }
            if (j.beforeSend && (j.beforeSend.call(bB, bt, j) === false || bk === 2)) {
                bt.abort();
                return false
            }
            for (bu in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                bt[bu](j[bu])
            }
            bv = aK(r, j, i, bt);
            if (!bv) {
                bp(-1, "No Transport")
            } else {
                bt.readyState = 1;
                if (bg) {
                    bq.trigger("ajaxSend", [bt, j])
                }
                if (j.async && j.timeout > 0) {
                    bo = setTimeout(function() {
                        bt.abort("timeout")
                    }, j.timeout)
                }
                try {
                    bk = 1;
                    bv.send(br, bp)
                } catch (bw) {
                    if (status < 2) {
                        bp(-1, bw)
                    } else {
                        b.error(bw)
                    }
                }
            }
            return bt
        },
        param: function(e, d) {
            var f = [],
                bi = function(a, c) {
                    c = b.isFunction(c) ? c() : c;
                    f[f.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c)
                };
            if (d === I) {
                d = b.ajaxSettings.traditional
            }
            if (b.isArray(e) || (e.jquery && !b.isPlainObject(e))) {
                b.each(e, function() {
                    bi(this.name, this.value)
                })
            } else {
                for (var g in e) {
                    v(g, e[g], d, bi)
                }
            }
            return f.join("&").replace(j, "+")
        }
    });

    function v(d, f, g, h) {
        if (b.isArray(f) && f.length) {
            b.each(f, function(a, c) {
                if (g || ai.test(d)) {
                    h(d, c)
                } else {
                    v(d + "[" + (typeof c === "object" || b.isArray(c) ? a : "") + "]", c, g, h)
                }
            })
        } else {
            if (!g && f != null && typeof f === "object") {
                if (b.isArray(f) || b.isEmptyObject(f)) {
                    h(d, "")
                } else {
                    for (var e in f) {
                        v(d + "[" + e + "]", f[e], g, h)
                    }
                }
            } else {
                h(d, f)
            }
        }
    }
    b.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });

    function a6(a, b, c) {
        var d = a.contents,
            bl = a.dataTypes,
            bg = a.responseFields,
            bi, bk, bh, e;
        for (bk in bg) {
            if (bk in c) {
                b[bg[bk]] = c[bk]
            }
        }
        while (bl[0] === "*") {
            bl.shift();
            if (bi === I) {
                bi = a.mimeType || b.getResponseHeader("content-type")
            }
        }
        if (bi) {
            for (bk in d) {
                if (d[bk] && d[bk].test(bi)) {
                    bl.unshift(bk);
                    break
                }
            }
        }
        if (bl[0] in c) {
            bh = bl[0]
        } else {
            for (bk in c) {
                if (!bl[0] || a.converters[bk + " " + bl[0]]) {
                    bh = bk;
                    break
                }
                if (!e) {
                    e = bk
                }
            }
            bh = bh || e
        }
        if (bh) {
            if (bh !== bl[0]) {
                bl.unshift(bh)
            }
            return c[bh]
        }
    }

    function E(a, c) {
        if (a.dataFilter) {
            c = a.dataFilter(c, a.dataType)
        }
        var d = a.dataTypes,
            bq = {},
            bk, bo, bg = d.length,
            bl, bm = d[0],
            bh, bi, bp, bf, e;
        for (bk = 1; bk < bg; bk++) {
            if (bk === 1) {
                for (bo in a.converters) {
                    if (typeof bo === "string") {
                        bq[bo.toLowerCase()] = a.converters[bo]
                    }
                }
            }
            bh = bm;
            bm = d[bk];
            if (bm === "*") {
                bm = bh
            } else {
                if (bh !== "*" && bh !== bm) {
                    bi = bh + " " + bm;
                    bp = bq[bi] || bq["* " + bm];
                    if (!bp) {
                        e = I;
                        for (bf in bq) {
                            bl = bf.split(" ");
                            if (bl[0] === bh || bl[0] === "*") {
                                e = bq[bl[1] + " " + bm];
                                if (e) {
                                    bf = bq[bf];
                                    if (bf === true) {
                                        bp = e
                                    } else {
                                        if (e === true) {
                                            bp = bf
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (!(bp || e)) {
                        b.error("No conversion from " + bi.replace(" ", " to "))
                    }
                    if (bp !== true) {
                        c = bp ? bp(c) : e(bf(c))
                    }
                }
            }
        }
        return c
    }
    var cb = b.now(),
        u = /(\=)\?(&|$)|\?\?/i;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return b.expando + "_" + (cb++)
        }
    });
    b.ajaxPrefilter("json jsonp", function(c, d, f) {
        var g = (typeof c.data === "string");
        if (c.dataTypes[0] === "jsonp" || d.jsonpCallback || d.jsonp != null || c.jsonp !== false && (u.test(c.url) || g && u.test(c.data))) {
            var h, bg = c.jsonpCallback = b.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback,
                bj = bR[bg],
                e = c.url,
                bi = c.data,
                bf = "$1" + bg + "$2",
                bh = function() {
                    bR[bg] = bj;
                    if (h && b.isFunction(bj)) {
                        bR[bg](h[0])
                    }
                };
            if (c.jsonp !== false) {
                e = e.replace(u, bf);
                if (c.url === e) {
                    if (g) {
                        bi = bi.replace(u, bf)
                    }
                    if (c.data === bi) {
                        e += (/\?/.test(e) ? "&" : "?") + c.jsonp + "=" + bg
                    }
                }
            }
            c.url = e;
            c.data = bi;
            bR[bg] = function(a) {
                h = [a]
            };
            f.then(bh, bh);
            c.converters["script json"] = function() {
                if (!h) {
                    b.error(bg + " was not called")
                }
                return h[0]
            };
            c.dataTypes[0] = "json";
            return "script"
        }
    });
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                b.globalEval(e);
                return e
            }
        }
    });
    b.ajaxPrefilter("script", function(e) {
        if (e.cache === I) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    b.ajaxTransport("script", function(f) {
        if (f.crossDomain) {
            var e, bf = bS.head || bS.getElementsByTagName("head")[0] || bS.documentElement;
            return {
                send: function(c, d) {
                    e = bS.createElement("script");
                    e.async = "async";
                    if (f.scriptCharset) {
                        e.charset = f.scriptCharset
                    }
                    e.src = f.url;
                    e.onload = e.onreadystatechange = function(a, b) {
                        if (!e.readyState || /loaded|complete/.test(e.readyState)) {
                            e.onload = e.onreadystatechange = null;
                            if (bf && e.parentNode) {
                                bf.removeChild(e)
                            }
                            e = I;
                            if (!b) {
                                d(200, "success")
                            }
                        }
                    };
                    bf.insertBefore(e, bf.firstChild)
                },
                abort: function() {
                    if (e) {
                        e.onload(0, 1)
                    }
                }
            }
        }
    });
    var y = b.now(),
        K, au;

    function B() {
        b(bR).unload(function() {
            for (var e in K) {
                K[e](0, 1)
            }
        })
    }

    function aC() {
        try {
            return new bR.XMLHttpRequest()
        } catch (bf) {}
    }

    function ae() {
        try {
            return new bR.ActiveXObject("Microsoft.XMLHTTP")
        } catch (bf) {}
    }
    b.ajaxSettings.xhr = bR.ActiveXObject ? function() {
        return !this.isLocal && aC() || ae()
    } : aC;
    au = b.ajaxSettings.xhr();
    b.support.ajax = !!au;
    b.support.cors = au && ("withCredentials" in au);
    au = I;
    if (b.support.ajax) {
        b.ajaxTransport(function(e) {
            if (!e.crossDomain || b.support.cors) {
                var i;
                return {
                    send: function(f, g) {
                        var h = e.xhr(),
                            bj, bi;
                        if (e.username) {
                            h.open(e.type, e.url, e.async, e.username, e.password)
                        } else {
                            h.open(e.type, e.url, e.async)
                        }
                        if (e.xhrFields) {
                            for (bi in e.xhrFields) {
                                h[bi] = e.xhrFields[bi]
                            }
                        }
                        if (e.mimeType && h.overrideMimeType) {
                            h.overrideMimeType(e.mimeType)
                        }
                        if (!e.crossDomain && !f["X-Requested-With"]) {
                            f["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (bi in f) {
                                h.setRequestHeader(bi, f[bi])
                            }
                        } catch (bh) {}
                        h.send((e.hasContent && e.data) || null);
                        i = function(a, c) {
                            var d, bn, bm, bs, br;
                            try {
                                if (i && (c || h.readyState === 4)) {
                                    i = I;
                                    if (bj) {
                                        h.onreadystatechange = b.noop;
                                        delete K[bj]
                                    }
                                    if (c) {
                                        if (h.readyState !== 4) {
                                            h.abort()
                                        }
                                    } else {
                                        d = h.status;
                                        bm = h.getAllResponseHeaders();
                                        bs = {};
                                        br = h.responseXML;
                                        if (br && br.documentElement) {
                                            bs.xml = br
                                        }
                                        bs.text = h.responseText;
                                        try {
                                            bn = h.statusText
                                        } catch (bt) {
                                            bn = ""
                                        }
                                        if (!d && e.isLocal && !e.crossDomain) {
                                            d = bs.text ? 200 : 404
                                        } else {
                                            if (d === 1223) {
                                                d = 204
                                            }
                                        }
                                    }
                                }
                            } catch (bq) {
                                if (!c) {
                                    g(-1, bq)
                                }
                            }
                            if (bs) {
                                g(d, bn, bs, bm)
                            }
                        };
                        if (!e.async || h.readyState === 4) {
                            i()
                        } else {
                            if (!K) {
                                K = {};
                                B()
                            }
                            bj = y++;
                            h.onreadystatechange = K[bj] = i
                        }
                    },
                    abort: function() {
                        if (i) {
                            i(0, 1)
                        }
                    }
                }
            }
        })
    }
    var O = {},
        aq = /^(?:toggle|show|hide)$/,
        aH = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        aU, ay = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    b.fn.extend({
        show: function(a, c, d) {
            var f, bi;
            if (a || a === 0) {
                return this.animate(aS("show", 3), a, c, d)
            } else {
                for (var g = 0, e = this.length; g < e; g++) {
                    f = this[g];
                    bi = f.style.display;
                    if (!b._data(f, "olddisplay") && bi === "none") {
                        bi = f.style.display = ""
                    }
                    if (bi === "" && b.css(f, "display") === "none") {
                        b._data(f, "olddisplay", x(f.nodeName))
                    }
                }
                for (g = 0; g < e; g++) {
                    f = this[g];
                    bi = f.style.display;
                    if (bi === "" || bi === "none") {
                        f.style.display = b._data(f, "olddisplay") || ""
                    }
                }
                return this
            }
        },
        hide: function(a, c, d) {
            if (a || a === 0) {
                return this.animate(aS("hide", 3), a, c, d)
            } else {
                for (var f = 0, e = this.length; f < e; f++) {
                    var g = b.css(this[f], "display");
                    if (g !== "none" && !b._data(this[f], "olddisplay")) {
                        b._data(this[f], "olddisplay", g)
                    }
                }
                for (f = 0; f < e; f++) {
                    this[f].style.display = "none"
                }
                return this
            }
        },
        _toggle: b.fn.toggle,
        toggle: function(c, d, f) {
            var e = typeof c === "boolean";
            if (b.isFunction(c) && b.isFunction(d)) {
                this._toggle.apply(this, arguments)
            } else {
                if (c == null || e) {
                    this.each(function() {
                        var a = e ? c : b(this).is(":hidden");
                        b(this)[a ? "show" : "hide"]()
                    })
                } else {
                    this.animate(aS("toggle", 3), c, d, f)
                }
            }
            return this
        },
        fadeTo: function(e, a, b, c) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: a
            }, e, b, c)
        },
        animate: function(j, k, l, m) {
            var e = b.speed(k, l, m);
            if (b.isEmptyObject(j)) {
                return this.each(e.complete)
            }
            return this[e.queue === false ? "each" : "queue"](function() {
                var g = b.extend({}, e),
                    bp, bm = this.nodeType === 1,
                    bn = bm && b(this).is(":hidden"),
                    bj = this;
                for (bp in j) {
                    var h = b.camelCase(bp);
                    if (bp !== h) {
                        j[h] = j[bp];
                        delete j[bp];
                        bp = h
                    }
                    if (j[bp] === "hide" && bn || j[bp] === "show" && !bn) {
                        return g.complete.call(this)
                    }
                    if (bm && (bp === "height" || bp === "width")) {
                        g.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (b.css(this, "display") === "inline" && b.css(this, "float") === "none") {
                            if (!b.support.inlineBlockNeedsLayout) {
                                this.style.display = "inline-block"
                            } else {
                                var i = x(this.nodeName);
                                if (i === "inline") {
                                    this.style.display = "inline-block"
                                } else {
                                    this.style.display = "inline";
                                    this.style.zoom = 1
                                }
                            }
                        }
                    }
                    if (b.isArray(j[bp])) {
                        (g.specialEasing = g.specialEasing || {})[bp] = j[bp][1];
                        j[bp] = j[bp][0]
                    }
                }
                if (g.overflow != null) {
                    this.style.overflow = "hidden"
                }
                g.curAnim = b.extend({}, j);
                b.each(j, function(a, c) {
                    var d = new b.fx(bj, g, a);
                    if (aq.test(c)) {
                        d[c === "toggle" ? bn ? "show" : "hide" : c](j)
                    } else {
                        var e = aH.exec(c),
                            bw = d.cur();
                        if (e) {
                            var f = parseFloat(e[2]),
                                bs = e[3] || (b.cssNumber[a] ? "" : "px");
                            if (bs !== "px") {
                                b.style(bj, a, (f || 1) + bs);
                                bw = ((f || 1) / d.cur()) * bw;
                                b.style(bj, a, bw + bs)
                            }
                            if (e[1]) {
                                f = ((e[1] === "-=" ? -1 : 1) * f) + bw
                            }
                            d.custom(bw, f, bs)
                        } else {
                            d.custom(bw, c, "")
                        }
                    }
                });
                return true
            })
        },
        stop: function(c, e) {
            var d = b.timers;
            if (c) {
                this.queue([])
            }
            this.each(function() {
                for (var a = d.length - 1; a >= 0; a--) {
                    if (d[a].elem === this) {
                        if (e) {
                            d[a](true)
                        }
                        d.splice(a, 1)
                    }
                }
            });
            if (!e) {
                this.dequeue()
            }
            return this
        }
    });

    function aS(a, e) {
        var c = {};
        b.each(ay.concat.apply([], ay.slice(0, e)), function() {
            c[this] = a
        });
        return c
    }
    b.each({
        slideDown: aS("show", 1),
        slideUp: aS("hide", 1),
        slideToggle: aS("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, d) {
        b.fn[e] = function(a, b, c) {
            return this.animate(d, a, b, c)
        }
    });
    b.extend({
        speed: function(a, c, d) {
            var e = a && typeof a === "object" ? b.extend({}, a) : {
                complete: d || !d && c || b.isFunction(a) && a,
                duration: a,
                easing: d && c || c && !b.isFunction(c) && c
            };
            e.duration = b.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in b.fx.speeds ? b.fx.speeds[e.duration] : b.fx.speeds._default;
            e.old = e.complete;
            e.complete = function() {
                if (e.queue !== false) {
                    b(this).dequeue()
                }
                if (b.isFunction(e.old)) {
                    e.old.call(this)
                }
            };
            return e
        },
        easing: {
            linear: function(a, b, e, c) {
                return e + c * a
            },
            swing: function(a, b, e, c) {
                return ((-Math.cos(a * Math.PI) / 2) + 0.5) * c + e
            }
        },
        timers: [],
        fx: function(a, e, b) {
            this.options = e;
            this.elem = a;
            this.prop = b;
            if (!e.orig) {
                e.orig = {}
            }
        }
    });
    b.fx.prototype = {
        update: function() {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }(b.fx.step[this.prop] || b.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var e, bf = b.css(this.elem, this.prop);
            return isNaN(e = parseFloat(bf)) ? !bf || bf === "auto" ? 0 : bf : e
        },
        custom: function(c, d, f) {
            var e = this,
                bg = b.fx;
            this.startTime = b.now();
            this.start = c;
            this.end = d;
            this.unit = f || this.unit || (b.cssNumber[this.prop] ? "" : "px");
            this.now = this.start;
            this.pos = this.state = 0;

            function bf(a) {
                return e.step(a)
            }
            bf.elem = this.elem;
            if (bf() && b.timers.push(bf) && !aU) {
                aU = setInterval(bg.tick, bg.interval)
            }
        },
        show: function() {
            this.options.orig[this.prop] = b.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            b(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = b.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function(c) {
            var d = b.now(),
                bi = true;
            if (c || d >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                for (var f in this.options.curAnim) {
                    if (this.options.curAnim[f] !== true) {
                        bi = false
                    }
                }
                if (bi) {
                    if (this.options.overflow != null && !b.support.shrinkWrapBlocks) {
                        var g = this.elem,
                            bn = this.options;
                        b.each(["", "X", "Y"], function(a, b) {
                            g.style["overflow" + b] = bn.overflow[a]
                        })
                    }
                    if (this.options.hide) {
                        b(this.elem).hide()
                    }
                    if (this.options.hide || this.options.show) {
                        for (var e in this.options.curAnim) {
                            b.style(this.elem, e, this.options.orig[e])
                        }
                    }
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                var h = d - this.startTime;
                this.state = h / this.options.duration;
                var i = this.options.specialEasing && this.options.specialEasing[this.prop];
                var j = this.options.easing || (b.easing.swing ? "swing" : "linear");
                this.pos = b.easing[i || j](this.state, h, 0, 1, this.options.duration);
                this.now = this.start + ((this.end - this.start) * this.pos);
                this.update()
            }
            return true
        }
    };
    b.extend(b.fx, {
        tick: function() {
            var a = b.timers;
            for (var e = 0; e < a.length; e++) {
                if (!a[e]()) {
                    a.splice(e--, 1)
                }
            }
            if (!a.length) {
                b.fx.stop()
            }
        },
        interval: 13,
        stop: function() {
            clearInterval(aU);
            aU = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                b.style(e.elem, "opacity", e.now)
            },
            _default: function(e) {
                if (e.elem.style && e.elem.style[e.prop] != null) {
                    e.elem.style[e.prop] = (e.prop === "width" || e.prop === "height" ? Math.max(0, e.now) : e.now) + e.unit
                } else {
                    e.elem[e.prop] = e.now
                }
            }
        }
    });
    if (b.expr && b.expr.filters) {
        b.expr.filters.animated = function(e) {
            return b.grep(b.timers, function(a) {
                return e === a.elem
            }).length
        }
    }

    function x(a) {
        if (!O[a]) {
            var e = b("<" + a + ">").appendTo("body"),
                bf = e.css("display");
            e.remove();
            if (bf === "none" || bf === "") {
                bf = "block"
            }
            O[a] = bf
        }
        return O[a]
    }
    var T = /^t(?:able|d|h)$/i,
        Z = /^(?:body|html)$/i;
    if ("getBoundingClientRect" in bS.documentElement) {
        b.fn.offset = function(a) {
            var c = this[0],
                bl;
            if (a) {
                return this.each(function(e) {
                    b.offset.setOffset(this, a, e)
                })
            }
            if (!c || !c.ownerDocument) {
                return null
            }
            if (c === c.ownerDocument.body) {
                return b.offset.bodyOffset(c)
            }
            try {
                bl = c.getBoundingClientRect()
            } catch (bp) {}
            var d = c.ownerDocument,
                bg = d.documentElement;
            if (!bl || !b.contains(bg, c)) {
                return bl ? {
                    top: bl.top,
                    left: bl.left
                } : {
                    top: 0,
                    left: 0
                }
            }
            var f = d.body,
                bn = aB(d),
                bk = bg.clientTop || f.clientTop || 0,
                bo = bg.clientLeft || f.clientLeft || 0,
                bf = bn.pageYOffset || b.support.boxModel && bg.scrollTop || f.scrollTop,
                bj = bn.pageXOffset || b.support.boxModel && bg.scrollLeft || f.scrollLeft,
                bq = bl.top + bf - bk,
                bh = bl.left + bj - bo;
            return {
                top: bq,
                left: bh
            }
        }
    } else {
        b.fn.offset = function(c) {
            var d = this[0];
            if (c) {
                return this.each(function(a) {
                    b.offset.setOffset(this, c, a)
                })
            }
            if (!d || !d.ownerDocument) {
                return null
            }
            if (d === d.ownerDocument.body) {
                return b.offset.bodyOffset(d)
            }
            b.offset.initialize();
            var f, bg = d.offsetParent,
                bf = d,
                bo = d.ownerDocument,
                bh = bo.documentElement,
                bk = bo.body,
                bl = bo.defaultView,
                e = bl ? bl.getComputedStyle(d, null) : d.currentStyle,
                bn = d.offsetTop,
                bi = d.offsetLeft;
            while ((d = d.parentNode) && d !== bk && d !== bh) {
                if (b.offset.supportsFixedPosition && e.position === "fixed") {
                    break
                }
                f = bl ? bl.getComputedStyle(d, null) : d.currentStyle;
                bn -= d.scrollTop;
                bi -= d.scrollLeft;
                if (d === bg) {
                    bn += d.offsetTop;
                    bi += d.offsetLeft;
                    if (b.offset.doesNotAddBorder && !(b.offset.doesAddBorderForTableAndCells && T.test(d.nodeName))) {
                        bn += parseFloat(f.borderTopWidth) || 0;
                        bi += parseFloat(f.borderLeftWidth) || 0
                    }
                    bf = bg;
                    bg = d.offsetParent
                }
                if (b.offset.subtractsBorderForOverflowNotVisible && f.overflow !== "visible") {
                    bn += parseFloat(f.borderTopWidth) || 0;
                    bi += parseFloat(f.borderLeftWidth) || 0
                }
                e = f
            }
            if (e.position === "relative" || e.position === "static") {
                bn += bk.offsetTop;
                bi += bk.offsetLeft
            }
            if (b.offset.supportsFixedPosition && e.position === "fixed") {
                bn += Math.max(bh.scrollTop, bk.scrollTop);
                bi += Math.max(bh.scrollLeft, bk.scrollLeft)
            }
            return {
                top: bn,
                left: bi
            }
        }
    }
    b.offset = {
        initialize: function() {
            var e = bS.body,
                bf = bS.createElement("div"),
                bi, bk, bj, bl, bg = parseFloat(b.css(e, "marginTop")) || 0,
                bh = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            b.extend(bf.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            bf.innerHTML = bh;
            e.insertBefore(bf, e.firstChild);
            bi = bf.firstChild;
            bk = bi.firstChild;
            bl = bi.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = (bk.offsetTop !== 5);
            this.doesAddBorderForTableAndCells = (bl.offsetTop === 5);
            bk.style.position = "fixed";
            bk.style.top = "20px";
            this.supportsFixedPosition = (bk.offsetTop === 20 || bk.offsetTop === 15);
            bk.style.position = bk.style.top = "";
            bi.style.overflow = "hidden";
            bi.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = (bk.offsetTop === -5);
            this.doesNotIncludeMarginInBodyOffset = (e.offsetTop !== bg);
            e.removeChild(bf);
            b.offset.initialize = b.noop
        },
        bodyOffset: function(e) {
            var a = e.offsetTop,
                bf = e.offsetLeft;
            b.offset.initialize();
            if (b.offset.doesNotIncludeMarginInBodyOffset) {
                a += parseFloat(b.css(e, "marginTop")) || 0;
                bf += parseFloat(b.css(e, "marginLeft")) || 0
            }
            return {
                top: a,
                left: bf
            }
        },
        setOffset: function(a, c, d) {
            var f = b.css(a, "position");
            if (f === "static") {
                a.style.position = "relative"
            }
            var g = b(a),
                bf = g.offset(),
                e = b.css(a, "top"),
                bo = b.css(a, "left"),
                bp = (f === "absolute" || f === "fixed") && b.inArray("auto", [e, bo]) > -1,
                bn = {},
                bm = {},
                bg, bi;
            if (bp) {
                bm = g.position()
            }
            bg = bp ? bm.top : parseInt(e, 10) || 0;
            bi = bp ? bm.left : parseInt(bo, 10) || 0;
            if (b.isFunction(c)) {
                c = c.call(a, d, bf)
            }
            if (c.top != null) {
                bn.top = (c.top - bf.top) + bg
            }
            if (c.left != null) {
                bn.left = (c.left - bf.left) + bi
            }
            if ("using" in c) {
                c.using.call(a, bn)
            } else {
                g.css(bn)
            }
        }
    };
    b.fn.extend({
        position: function() {
            if (!this[0]) {
                return null
            }
            var a = this[0],
                bf = this.offsetParent(),
                bh = this.offset(),
                e = Z.test(bf[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : bf.offset();
            bh.top -= parseFloat(b.css(a, "marginTop")) || 0;
            bh.left -= parseFloat(b.css(a, "marginLeft")) || 0;
            e.top += parseFloat(b.css(bf[0], "borderTopWidth")) || 0;
            e.left += parseFloat(b.css(bf[0], "borderLeftWidth")) || 0;
            return {
                top: bh.top - e.top,
                left: bh.left - e.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || bS.body;
                while (e && (!Z.test(e.nodeName) && b.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e
            })
        }
    });
    b.each(["Left", "Top"], function(d, e) {
        var f = "scroll" + e;
        b.fn[f] = function(a) {
            var c = this[0],
                bi;
            if (!c) {
                return null
            }
            if (a !== I) {
                return this.each(function() {
                    bi = aB(this);
                    if (bi) {
                        bi.scrollTo(!d ? a : b(bi).scrollLeft(), d ? a : b(bi).scrollTop())
                    } else {
                        this[f] = a
                    }
                })
            } else {
                bi = aB(c);
                return bi ? ("pageXOffset" in bi) ? bi[d ? "pageYOffset" : "pageXOffset"] : b.support.boxModel && bi.document.documentElement[f] || bi.document.body[f] : c[f]
            }
        }
    });

    function aB(e) {
        return b.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }
    b.each(["Height", "Width"], function(i, e) {
        var j = e.toLowerCase();
        b.fn["inner" + e] = function() {
            return this[0] ? parseFloat(b.css(this[0], j, "padding")) : null
        };
        b.fn["outer" + e] = function(a) {
            return this[0] ? parseFloat(b.css(this[0], j, a ? "margin" : "border")) : null
        };
        b.fn[j] = function(d) {
            var f = this[0];
            if (!f) {
                return d == null ? null : this
            }
            if (b.isFunction(d)) {
                return this.each(function(a) {
                    var c = b(this);
                    c[j](d.call(this, a, c[j]()))
                })
            }
            if (b.isWindow(f)) {
                var g = f.document.documentElement["client" + e];
                return f.document.compatMode === "CSS1Compat" && g || f.document.body["client" + e] || g
            } else {
                if (f.nodeType === 9) {
                    return Math.max(f.documentElement["client" + e], f.body["scroll" + e], f.documentElement["scroll" + e], f.body["offset" + e], f.documentElement["offset" + e])
                } else {
                    if (d === I) {
                        var h = b.css(f, j),
                            bh = parseFloat(h);
                        return b.isNaN(bh) ? h : bh
                    } else {
                        return this.css(j, typeof d === "string" ? d : d + "px")
                    }
                }
            }
        }
    });
    simpleviewer.jQuery = simpleviewer.$ = b
})(window);
if (typeof jQuery === "undefined") {
    window.jQuery = simpleviewer.jQuery
}
if (typeof $ === "undefined") {
    window.$ = simpleviewer.jQuery
}
var svmeta4idvc = document.createElement("meta");
svmeta4idvc.name = "viewport";
svmeta4idvc.id = "sv-meta";
if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)) {
    svmeta4idvc.content = "";
    /*
    Hey Tim,
    
    The following line seems to kick this site out of using the mobile CSS on
    iPhone.
    
    Even if I delete the node immediately, as soon as it touches the DOM things
    seem to get messed up.
    */
    document.getElementsByTagName("head")[0].appendChild(svmeta4idvc)
    
    svmeta4idvc.parentNode.removeChild(svmeta4idvc); // ryan added this
} else {
    if (navigator.userAgent.match(/Android/i)) {
        svmeta4idvc.content = "width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0; target-densitydpi=160;";
        document.getElementsByTagName("head")[0].appendChild(svmeta4idvc)
    }
}
var svCoreURL = (function() {
    var c, b, d, a = document.getElementsByTagName("script");
    for (c = 0; c < a.length; c++) {
        d = a[c].src.toLowerCase().indexOf("simpleviewer.unmin.js");
        if (d >= 0) {
            b = a[c].src;
            break
        }
    }
    if (b.toLowerCase().indexOf("js/simpleviewer.unmin.js") === 0) {
        return ""
    }
    return b.replace(/\/[^\/]*$/, "").replace(/\/[^\/]*$/, "") + "/"
})();
document.write('<script type="text/javascript" src="' + svCoreURL + 'js/swfobject.js"><\/script>');
document.write('<link rel="stylesheet" href="' + svCoreURL + 'css/simpleviewer.css" type="text/css">');
simpleviewer.ready = function(a) {
    SV.simpleviewer.jQuery(document).ready(a)
};
SV.simpleviewer.idx = 0;
SV.simpleviewer.insobjs = [];
SV.simpleviewer.load = function(f, a, j, i, g, d, c, h, b) {
    var e = new SV.simpleviewer.instance();
    e.load("svcp-" + SV.simpleviewer.idx + "-", f, a, j, i, g, d, c, h, b);
    SV.simpleviewer.idx++;
    SV.simpleviewer.insobjs.push(e);
    if (e.ispv) {
        e.stub = {
            debug: e.debug,
            show: e.showSvGlry,
            setSize: e.resetGallerySize,
            showImage: e.showImage,
            showNextImage: e.nextImage,
            showPreviousImage: e.prevImage,
            downloadImage: e.downloadImage,
            openImageLinkURL: e.openImageLinkURL,
            dispose: e.dispose,
            showThumbPage: e.showThumbPage,
            getImageInfo: e.getImageInfo,
            getGalleryInfo: e.getGalleryInfo,
            getThumbPageIndex: e.getThumbPageIndex,
            getImageIndex: e.getImageIndex
        };
        return e.stub
    } else {
        return {
            debug: e.debug
        }
    }
};
SV.simpleviewer.saveCurrentPage = function() {
    var a;
    for (a = 0; a < SV.simpleviewer.insobjs.length; a++) {
        SV.simpleviewer.insobjs[a].saveCrntPg()
    }
};
SV.simpleviewer.instance = function() {
    var bc = false;
    var bd = false;
    var be = "";
    var bf = {
        randomId: be + "sv" + (new Date()).getTime(),
        maxItemCount: 50
    };
    var bg = 0;
    var bh;
    var bi = 25;
    var bj = 100;
    var bk;
    var bl, winWidth;
    var bm = {
        width: 0,
        height: 0,
        widthRatio: 0,
        heightRatio: 0
    };
    var bn = {
        width: 0,
        height: 0,
        showOverlay: true
    };
    var bo = {
        width: 0,
        height: 0,
        maxRowCount: 4,
        maxColCount: 3,
        navListIndex: 0,
        thumbCountPerPage: 0,
        totalPage: 0
    };
    var bp, svHeight, backgroundColor, svContainer, svContainerId;
    var bq = {};
    var br = {
        displayMode: "",
        panelMode: "both"
    };
    var bs = "9.0.124";
    var bt, params, attributes;
    var bu = screen.availHeight && screen.availHeight > 500 ? 14 : 11;
    var bv = 1;
    var $ = simpleviewer.jQuery;
    var bw;
    var bx = "";

    function getStub() {
        var a = parseInt(be.replace("svcp-", "").replace("-", ""));
        if (SV.simpleviewer.insobjs[a]) {
            return SV.simpleviewer.insobjs[a].stub
        }
        return this
    }

    function getFlashVarValue(a, b, c) {
        if (typeof(a[b]) === "undefined") {
            return c
        }
        return a[b]
    }

    function getOptionValue(a, b, c, d, e) {
        if (b && b[c]) {
            if (e === "bool") {
                if (b[c] === "false") {
                    return false
                }
                if (b[c] === "true") {
                    return true
                }
            }
            if (e === "int") {
                return parseInt(b[c])
            }
            return b[c]
        }
        if (!bk) {
            return getFlashVarValue(a, c, d)
        }
        if (typeof bk[c] === "undefined") {
            return getFlashVarValue(a, c, d)
        }
        if (e === "int") {
            return parseInt(bk[c])
        }
        return bk[c]
    }
    var by = "showopenbutton,showfullscreenbutton,useflickr,mobileshowcaption,mobileshownav,mobileshowthumbs,mobilethumbstextcolor,mobilecaptiontextcolor,mobileshowpagecount,disableswipe,";
    var bz = "preseturl,firstimageindex,baseurl,flickrusername,flickrtags,flickruserid,flickrsetid,flickrgroupid,flickrtagmode,flickrsort,flickrimagecount,flickrimagesize,flickrextraparams,imagepath,thumbpath,galleryurl,preseturl,embedurl,title,";
    var bA = "firstimageindex,flickrusername,flickrtags,flickruserid,flickrsetid,flickrgroupid,title,";

    function parseXML(f, g, h, j, k) {
        var l = {};
        var m = $($.browser.msie ? f.childNodes[1].attributes : f.childNodes[0].attributes);
        m.each(function(i, n) {
            if (by.indexOf(n.nodeName.toLowerCase() + ",") >= 0) {
                l[n.nodeName.toLowerCase()] = n.nodeValue.toLowerCase()
            }
            if (bz.indexOf(n.nodeName.toLowerCase() + ",") >= 0) {
                l[n.nodeName.toLowerCase()] = n.nodeValue
            }
        });
        try {
            var o = $(f).find("simpleviewergallery,simpleviewerGallery");
            bq = {
                showopenbutton: getOptionValue(g, l, "showopenbutton", true, "bool"),
                showfullscreenbutton: getOptionValue(g, l, "showfullscreenbutton", true, "bool"),
                useflickr: getOptionValue(g, l, "useflickr", false, "bool"),
                mobileshowcaption: getOptionValue(g, l, "mobileshowcaption", true, "bool"),
                mobileshownav: getOptionValue(g, l, "mobileshownav", true, "bool"),
                mobileshowthumbs: getOptionValue(g, l, "mobileshowthumbs", true, "bool"),
                mobilethumbstextcolor: getOptionValue(g, l, "mobilethumbstextcolor", "#fff", ""),
                mobilecaptiontextcolor: getOptionValue(g, l, "mobilecaptiontextcolor", "#fff", ""),
                mobileshowpagecount: getOptionValue(g, l, "mobileshowpagecount", true, "bool"),
                preseturl: getOptionValue(g, l, "preseturl", ""),
                firstimageindex: getOptionValue(g, l, "firstimageindex", -1, "int"),
                flickrusername: getOptionValue(g, l, "flickrusername", ""),
                flickrtags: getOptionValue(g, l, "flickrtags", ""),
                flickruserid: getOptionValue(g, l, "flickruserid", ""),
                flickrsetid: getOptionValue(g, l, "flickrsetid", ""),
                flickrgroupid: getOptionValue(g, l, "flickrgroupid", ""),
                flickrtagmode: getOptionValue(g, l, "flickrtagmode", "ALL"),
                flickrsort: getOptionValue(g, l, "flickrsort", "DATE-POSTED-DESC"),
                flickrimagecount: getOptionValue(g, l, "flickrimagecount", "50"),
                flickrimagesize: getOptionValue(g, l, "flickrimagesize", "LARGE"),
                flickrextraparams: getOptionValue(g, l, "flickrextraparams", ""),
                imagepath: getOptionValue(g, l, "imagepath", ""),
                thumbpath: getOptionValue(g, l, "thumbpath", ""),
                title: getOptionValue(g, l, "title", ""),
                images: []
            };
            if (bc) {
                if (bq.useflickr) {
                    bg = parseInt(bq.flickrimagecount)
                } else {
                    bg = o.find("image").length
                }
            } else {
                if (bq.useflickr) {
                    bg = Math.min(bf.maxItemCount, parseInt(bq.flickrimagecount))
                } else {
                    bg = Math.min(bf.maxItemCount, o.find("image").length)
                }
                delete bq.preseturl;
                delete bq.flickruserid;
                delete bq.flickrsetid;
                delete bq.flickrgroupid;
                delete bq.flickrextraparams
            }
            if (bk || bq.useflickr) {
                return bq
            }
            j = "";
            k = "";
            var p = function(a, b, c) {
                if (!c) {
                    return ""
                }
                if (b) {
                    if (!isEndedWithSlash(b)) {
                        b += "/"
                    }
                }
                if (isOnRoot(b)) {
                    return b + c
                }
                if (typeof a !== "undefined" && typeof c !== "undefined" && c.indexOf("://") < 0) {
                    return ((isEndedWithSlash(a) || a.length === 0) ? a : a + "/") + (b ? b : "") + c
                }
                return (b ? b : "") + c
            };
            o.find("image").each(function() {
                if (bq.images.length >= bg) {
                    return
                }
                var a;
                var b = (h ? h : ((typeof svGalleryPath !== "undefined") ? svGalleryPath : ""));
                var c = $(this).attr("imageURL");
                var d = $(this).attr("thumbURL");
                var e = $(this).attr("linkURL");
                if (!c && !d && !e) {
                    c = $(this).find("filename").text();
                    d = c;
                    if (bi > 12) {
                        bi -= 12
                    }
                }
                if (!d) {
                    k = j;
                    d = c
                }
                a = {
                    imageURL: p(b, j, c),
                    thumbURL: p(b, k, d),
                    imageFullURL: p("", j, e) || p(b, j, c),
                    linkTarget: $(this).attr("linkTarget") || "_blank",
                    caption: "",
                    description: "",
                    preloadedImage: null,
                    preloaded: false
                };
                if ($(this).find("caption").length > 0) {
                    a.description = filterCaptionTags($(this).find("caption:first").text())
                }
                bq.images.push(a)
            })
        } catch (e) {
            errorMessage("Cannot Parse Gallery XML.")
        }
        return bq
    }
    var bB = function(a, b) {
        if (!a || !b) {
            return false
        }
        if (a.substring(a.length - b.length) === b) {
            return true
        }
        return false
    };

    function isEndedWithSlash(a) {
        if (!a) {
            return false
        }
        if (!bB(a, "/") && !bB(a.toLowerCase(), "%2f")) {
            return false
        }
        return true
    }

    function isOnRoot(a) {
        if (!a) {
            return false
        }
        if (a.toLowerCase().indexOf("http") === 0 || a.toLowerCase().indexOf("/") === 0 || a.toLowerCase().indexOf("%2f") === 0) {
            return true
        }
        if (a.indexOf(":/") > 0 || a.indexOf("%3A%2F") > 0) {
            return true
        }
        return false
    }

    function getAddQueryParam4FS(d) {
        var a = (by + bA).split(",");
        var b, ret = "";
        for (var i = 0; i < a.length; i++) {
            b = a[i].replace(/ /g, "");
            if (b.length <= 0 || d[b] == null || d[b] === "") {
                continue
            }
            ret += "&" + b + "=" + encodeURIComponent(d[b])
        }
        return ret
    }

    function getAddParamFromURL(a, d) {
        var b = (by + bA).split(",");
        var c, val;
        for (var i = 0; i < b.length; i++) {
            c = b[i].replace(/ /g, "");
            if (c.length <= 0) {
                continue
            }
            val = getQueryStrValue(a, c);
            if (!val) {
                continue
            }
            if (typeof val === "string") {
                if (val.toLowerCase() === "true") {
                    val = true
                } else {
                    if (val.toLowerCase() === "false") {
                        val = false
                    }
                }
            }
            d[c] = val
        }
    }

    function convertStringValue(a) {
        if (!a) {
            return a
        }
        if (a.toLowerCase() === "false") {
            return false
        }
        if (a.toLowerCase() === "true") {
            return true
        }
        return a
    }

    function cvtObjectAttrLowerCase(a) {
        var b = {};
        if (!a) {
            return b
        }
        var c, prop;
        for (prop in a) {
            c = prop.toLowerCase();
            if (by.indexOf(prop.toLowerCase() + ",") >= 0) {
                b[c] = (a[prop] === true ? true : (a[prop] === false ? false : convertStringValue(a[prop])));
                continue
            }
            if (bz.indexOf(prop.toLowerCase() + ",") >= 0) {
                b[c] = a[prop];
                continue
            }
            b[prop] = a[prop]
        }
        return b
    }

    function setPanelSize() {
        calculateMvSize();
        setBodySize(bl, winWidth);
        if (bn.width < bn.height) {
            $("#" + be + "sv-mobile").removeClass("sv-horizental");
            $("#" + be + "sv-mobile").addClass("sv-vertical")
        } else {
            $("#" + be + "sv-mobile").removeClass("sv-vertical");
            $("#" + be + "sv-mobile").addClass("sv-horizental")
        }
        if (br.panelMode === "navigation") {
            bo.width = bn.width;
            bo.height = bn.height
        } else {
            bo.width = 270;
            bo.height = 320
        }
    }

    function setGridScale() {
        bo.maxRowCount = 4;
        if (separateNavPanel()) {
            bo.maxRowCount = parseInt((bo.height) / 80);
            bo.maxColCount = parseInt((bo.width) / 80);
            bo.maxRowCount--;
            if (isAndroid()) {
                if (bo.width > bo.height && bo.maxRowCount <= 1) {
                    bo.maxRowCount++
                }
                if (bo.width < bo.height) {
                    if (bo.maxRowCount <= 3) {
                        bo.maxRowCount++
                    }
                }
                if (getAndroidVer() < 2.3 && bo.maxRowCount >= 3) {
                    bo.maxRowCount--
                }
            }
            bo.maxColCount--;
            if (bo.maxRowCount > bo.maxColCount) {
                if (bo.maxRowCount > 10) {
                    bo.maxRowCount = 10
                }
                if (bo.maxColCount > 7) {
                    bo.maxColCount = 7
                }
            } else {
                if (bo.maxRowCount > 7) {
                    bo.maxRowCount = 7
                }
                if (bo.maxColCount > 10) {
                    bo.maxColCount = 10
                }
            }
            if (bo.maxRowCount <= 0) {
                bo.maxRowCount = 1
            }
            if (bo.maxColCount <= 0) {
                bo.maxColCount = 1
            }
            var a = getThumbnailGridSize();
            var b = parseInt((bo.width - a.width) / 2);
            if (b < 59 && bo.maxColCount > 1) {
                bo.maxColCount--
            }
            if (bo.maxColCount * bo.maxRowCount > bk.images.length && bk.images.length > 0) {
                var c = parseInt(bk.images.length / bo.maxColCount);
                if (bk.images.length % bo.maxColCount > 0) {
                    c++
                }
                bo.maxRowCount = c
            }
        } else {
            bo.maxColCount = 3
        }
    }

    function setNavPnlCalculatedValues() {
        bo.thumbCountPerPage = bo.maxRowCount * bo.maxColCount;
        bo.totalPage = parseInt(bg / bo.thumbCountPerPage) + (bg % bo.thumbCountPerPage === 0 ? 0 : 1)
    }

    function setPanelsScale() {
        setPanelSize();
        setGridScale();
        bo.navListIndex = 0;
        setNavPnlCalculatedValues()
    }

    function filterCaptionTags(a) {
        a = filterCaptionFontTag(a);
        a = a.replace(/<\/img>/ig, "</sv_img>");
        return a.replace(/<img/ig, "<sv_img")
    }

    function disableFontSize(a, b) {
        var c = a.toLowerCase();
        var d = c.indexOf("<font", b);
        if (d < 0) {
            return {
                foundTag: false,
                foundSize: false,
                text: a
            }
        }
        var e = c.indexOf(">", d);
        if (e < 0) {
            return {
                foundTag: false,
                foundSize: false,
                text: a
            }
        }
        var f = c.indexOf("size", d);
        if (f > e || f < d) {
            return {
                foundTag: true,
                foundSize: false,
                text: a,
                lastPos: e
            }
        }
        return {
            foundTag: true,
            foundSize: true,
            text: a.substring(0, f) + "_" + a.substring(f),
            lastPos: e
        }
    }

    function filterCaptionFontTag(a) {
        var b, start = 0;
        do {
            b = disableFontSize(a, start);
            a = b.text;
            start = b.lastPos
        } while (b.foundTag);
        return a
    }

    function onSwiping(d, a, b, c, e) {
        var f = 0;
        if (d.direction !== "left2right") {
            f -= d.distance
        } else {
            if (d.direction !== "right2left") {
                f = d.distance
            }
        }
        if (f === 0) {
            return
        }
        var g = getThumbnailGridSize();
        var h = e ? g.width : (bn.width + bj);
        b.style.webkitTransitionDuration = "0";
        b.style.webkitTransform = "translate3d(" + f + "px, 0px, 0px)";
        if (a) {
            a.style.webkitTransitionDuration = "0";
            if (f > 0) {
                a.style.webkitTransform = "translate3d(-" + (h - f) + "px, 0px, 0px)"
            } else {
                a.style.webkitTransform = "translate3d(-" + (h) + "px, 0px, 0px)"
            }
        }
        if (c) {
            c.style.webkitTransitionDuration = "0";
            if (f < 0) {
                c.style.webkitTransform = "translate3d(" + (h + f) + "px, 0px, 0px)"
            } else {
                c.style.webkitTransform = "translate3d(" + (h) + "px, 0px, 0px)"
            }
        }
    }

    function afterSwiping(a, b, d, c, e, f, g) {
        var h = false;
        var i = 0.1;
        var j = getThumbnailGridSize();
        var k = g ? j.width : (bn.width + bj);
        e.style.webkitTransitionDuration = b.d + "ms";
        if (d.direction === "left2right") {
            if (a <= 0) {
                h = true
            }
            if (d.distance > i * k && !h) {
                if (g) {
                    move2NavListPnl(a, bo.navListIndex - 1, b.d)
                } else {
                    bv--;
                    move2Photo(bv, bv - 1, true, b.d, d.distance)
                }
            } else {
                e.style.webkitTransform = "";
                if (c) {
                    c.style.webkitTransitionDuration = b.d + "ms";
                    c.style.webkitTransform = "translate3d(-" + k + "px, 0px, 0px)"
                }
            }
        } else {
            if (d.direction === "right2left") {
                if ((g && a >= bo.totalPage - 1) || (!g && a >= bg - 1)) {
                    h = true
                }
                if (d.distance > i * k && !h) {
                    if (g) {
                        move2NavListPnl(a, bo.navListIndex + 1, b.d)
                    } else {
                        bv++;
                        move2Photo(bv - 2, bv - 1, true, b.d, d.distance)
                    }
                } else {
                    e.style.webkitTransform = "";
                    if (f) {
                        f.style.webkitTransitionDuration = b.d + "ms";
                        f.style.webkitTransform = "translate3d(" + k + "px, 0px, 0px)"
                    }
                }
            }
        }
    }

    function getDurationWithSwipeSpeed(d, a) {
        var b = parseInt(d.timerValue * a / d.distance - 1.1 * d.timerValue);
        if (b > 3000) {
            b = 3000
        }
        if (b <= 0) {
            nt = 100
        }
        return b
    }

    function setVerticalScroll(b, c) {
        if (b === "embed") {
            c.detectFlicks({
                axis: "y",
                threshold: 15,
                flickMove: function(d) {},
                flickEvent: function(d) {
                    var a = 0;
                    if (d.direction === "up2down") {
                        a -= d.distance
                    } else {
                        if (d.direction === "down2up") {
                            a = d.distance
                        }
                    }
                    if (!a) {
                        return
                    }
                    window.scrollBy(0, a)
                }
            })
        }
    }

    function showPhoto(b) {
        var c = $("#" + be + "sv-photo-navigation");
        if (br.panelMode === "navigation" && c.is(":visible")) {
            c.fadeOut(250, function() {
                c.hide();
                var a = $("#" + be + "sv-photo-detail");
                a.show();
                move2Photo(bv - 1, b, "calledfromnav", 0);
                a.fadeIn(250)
            })
        } else {
            move2Photo(bv - 1, b)
        }
    }

    function showThumbnails() {
        var b = $("#" + be + "sv-photo-detail");
        if (br.panelMode == "both" || !b.is(":visible")) {
            return
        }
        b.fadeOut(250, function() {
            b.hide();
            var a = $("#" + be + "sv-photo-navigation");
            a.show();
            a.fadeIn(250)
        })
    }

    function setNavControls(c, e) {
        if (c + 1 >= bo.totalPage) {
            $("#" + be + "sv-nav-page-next").hide()
        } else {
            $("#" + be + "sv-nav-page-next").show()
        }
        if (c <= 0) {
            $("#" + be + "sv-nav-page-prev").hide()
        } else {
            $("#" + be + "sv-nav-page-prev").show()
        }
        $("#" + be + "sv-nav-page-label").html("page " + (parseInt(c) + 1) + " of " + bo.totalPage);
        $("#" + be + "sv-nav-page-caption").html(filterCaptionTags(bk.title));
        $("#" + be + "sv-next-photo").show();
        $("#" + be + "sv-prev-photo").show();
        if (bn.showOverlay && bk.mobileshownav && e < bk.images.length - 1) {
            $("#" + be + "sv-next-photo span").show()
        } else {
            $("#" + be + "sv-next-photo span").hide()
        }
        if (bn.showOverlay && bk.mobileshownav && e > 0) {
            $("#" + be + "sv-prev-photo span").show()
        } else {
            $("#" + be + "sv-prev-photo span").hide()
        }
        var f = $("#" + be + "-nav-lst-" + c + " a");
        f.unbind();
        f.click(function() {
            var a = $(this);
            var b = parseInt(a.attr("id").replace(be + "nav-pht-lnks-", ""));
            showPhoto(b);
            return false
        });
        if (bc && !getStub().svPageChange && typeof(svPageChange) != "undefined") {
            getStub().svPageChange = svPageChange
        }
        if (bc && typeof(getStub().svPageChange) === "function" && bo.navListIndex !== c) {
            if (isBeforeIeVersion8()) {
                window.setTimeout(function() {
                    getStub().svPageChange(c)
                }, 100)
            } else {
                getStub().svPageChange(c)
            }
        }
        bo.navListIndex = c;
        if (typeof e !== "undefined") {
            bv = e + 1
        }
        if (!isSwipable(bk) || bo.totalPage <= 1) {
            return
        }
        var g = getThumbnailGridSize();
        var h = getSlideDuration();
        var i = document.getElementById(be + "-nav-lst-" + (c - 1));
        var j = document.getElementById(be + "-nav-lst-" + c);
        var k = document.getElementById(be + "-nav-lst-" + (c + 1));
        var l = $("#" + be + "-nav-lst-" + c + " img, #" + be + "-nav-lst-" + c + " .sv-nav-empty-thumbnail");
        if (!l.detectFlicks) {
            return
        }
        l.unbind();
        l.detectFlicks({
            axis: "x",
            threshold: 5,
            flickMove: function(d) {
                onSwiping(d, i, j, k, true)
            },
            flickEvent: function(d) {
                h.d = getDurationWithSwipeSpeed(d, g.width);
                afterSwiping(c, h, d, i, j, k, true)
            }
        });
        setVerticalScroll(br.displayMode, l)
    }

    function populatePhotoListByImageIndex(a) {
        var b = parseInt(a / bo.thumbCountPerPage);
        populatePhotoList(b)
    }

    function populatePhotoList(a) {
        var b = "";
        var c = getThumbnailGridSize().width + 5;
        var d = supportWebkitAnim() ? "-webkit-transform:translateX(-" + c + "px);" : "left:" + (-c) + "px;";
        var e = supportWebkitAnim() ? "-webkit-transform:translateX(" + c + "px);" : "left:" + c + "px;";
        if (a > 0) {
            b += getPhotoListHtml(a - 1, d)
        }
        b += getPhotoListHtml(a);
        if (a < bg - 1) {
            b += getPhotoListHtml(a + 1, e)
        }
        $("#" + be + "sv-nav-photo-list").html(b);
        setNavControls(a, bv - 1);
        setCurrentPohot(bv - 1)
    }

    function getNavBoundary(a) {
        return {
            lowbdry: bo.thumbCountPerPage * a,
            highbdry: bo.thumbCountPerPage * (parseInt(a) + 1)
        }
    }

    function getThumbnailGridSize() {
        return {
            width: bo.maxColCount * 80,
            height: bo.maxRowCount * 80
        }
    }

    function getPhotoListHtml(a, b) {
        if (a < 0 || a >= bg) {
            return ""
        }
        var i, j, bdryobj = getNavBoundary(a);
        var c = bdryobj.lowbdry;
        var d, visited, current;
        var e = getThumbnailGridSize();
        var f = e.width + 10;
        d = '<table id="' + be + "-nav-lst-" + a + '" border="0" cellpadding="0" cellspacing="0" style="width:' + f + "px;" + (b ? b : "") + '">';
        for (i = 0; i < bo.maxRowCount; i++) {
            d += "<tr>";
            for (j = 0; j < bo.maxColCount; j++) {
                if (c < bdryobj.highbdry && c >= 0 && c < bk.images.length && c < bg) {
                    d += "<td>";
                    if (bk.images[c].visited) {
                        visited = "visited"
                    } else {
                        visited = ""
                    }
                    if (c === bv - 1) {
                        current = "current"
                    } else {
                        current = ""
                    }
                    d += '<a id="' + be + "nav-pht-lnks-" + c + '" href="#" onclick="" class="' + visited + " " + current + '"><img src="' + bk.images[c].thumbURL + '"/></a>';
                    c++
                } else {
                    d += '<td class="sv-nav-empty-thumbnail">'
                }
                d += "</td>"
            }
            d += "</tr>"
        }
        d += "";
        d += "";
        d += "</table>";
        return d
    }

    function getDeviceClass() {
        if (isIphone()) {
            return "sv-cls-4-iphone"
        }
        if (isIpad()) {
            return "sv-cls-4-ipad"
        }
        if (isAndroid()) {
            return "sv-cls-4-android"
        }
        if ($.browser.msie) {
            if ($.browser.version < 9) {
                return "sv-cls-4-msie8"
            } else {
                return "sv-cls-4-msie9"
            }
        }
        return "sv-generic-device"
    }

    function getLogo4Nav() {
        if (bc) {
            return ""
        }
        return '<span id="nav-' + bf.randomId + '" style="display:block;width: 105px;height: 15px;overflow: hidden;position: absolute;bottom: 0px;right: 0px;z-index: 10;text-decoration: none;font-size: 90%;background: url(http://simpleviewer.net/m/sv.png) no-repeat 0 0;cursor:pointer;"></span>'
    }

    function generateSVHtml() {
        var a = (br.displayMode === "fullscreen" ? "Exit Full Window" : "Go Full Window");
        var b;
        b = '<div id="' + be + 'sv-mobile" class="simpleviewer-mobile-glry cls-mobile ' + getDeviceClass() + '" style="background: ' + formatColor(backgroundColor) + ';">';
        b += '<div id="' + be + 'sv-photo-navigation" class="sv-photo-nav">';
        b += '<div id="' + be + 'sv-nav-photo-list" class="sv-nav-photo-list">';
        b += "</div>";
        b += '<span id="' + be + 'sv-nav-page-caption" class="sv-nav-page-caption"></span>';
        b += '<span id="' + be + 'sv-nav-page-prev" class="sv-nav-page-prev"></span>';
        b += '<span id="' + be + 'sv-nav-page-label" class="sv-nav-page-label"></span>';
        b += '<span id="' + be + 'sv-nav-page-next" class="sv-nav-page-next"></span>';
        b += getLogo4Nav();
        b += '<div id="' + be + 'sv-nav-topmenu" class="cls-topmenu"><div id="' + be + 'sv-nav-topmenu-right" class="cls-topmenu-right"></div><div id="' + be + 'sv-nav-topmenu-links" class="cls-topmenu-links">';
        b += '<a href="" id="' + be + 'sv-nav-go-fullscreen" class="cls-go-fullscreen" title="' + a + '"><span>' + a + "</span></a>";
        b += '</div><div id="' + be + 'sv-nav-topmenu-left" class="cls-topmenu-left"></div></div>';
        b += "</div>";
        b += '<div id="' + be + 'sv-photo-detail" class="sv-photo-detail">';
        b += '<div id="' + be + 'sv-photos" class="cls-photos"></div>';
        b += '<div id="' + be + 'sv-prev-photo" class="cls-prev-photo"><span></span></div>';
        b += '<div id="' + be + 'sv-next-photo" class="cls-next-photo"><span></span></div>';
        if (!bc) {
            b += '<div id="' + bf.randomId + '" style="display:block;width: 105px;height: 15px;overflow: hidden;position: absolute;bottom: 0px;right: 0px;z-index: 10;text-decoration: none;font-size: 90%;background: url(http://simpleviewer.net/m/sv.png) no-repeat 0 0;cursor:pointer;"></div>'
        }
        b += '<div id="' + be + 'sv-topmenu" class="cls-topmenu"><div id="' + be + 'sv-topmenu-right" class="cls-topmenu-right"></div><div id="' + be + 'sv-topmenu-links" class="cls-topmenu-links">';
        b += '<a href="#" id="' + be + 'sv-go-fullscreen" class="cls-go-fullscreen" title="' + a + '"><span>' + a + "</span></a>";
        b += '<a href="#" id="' + be + 'sv-open-window" class="cls-open-window" target="_blank" title="Open Image in New Window"><span>Open Image in New Window</span></a>';
        b += '<a href="#" id="' + be + 'sv-go-nav-panel" class="cls-go-nav-panel" title="View Thumbnails"><span>View Thumbnails</span></a>';
        b += '</div><div id="' + be + 'sv-topmenu-left" class="cls-topmenu-left"></div></div>';
        b += "</div>";
        b += "</div>";
        return b
    }

    function generateSVFlashHtml() {
        var a;
        a = '<div id="' + be + 'sv-mobile-flash" class="cls-mobile-flash">';
        a += '<div id="' + be + 'sv-mobile-flash-swf" class="cls-mobile-flash-swf"></div>';
        a += "</div>";
        return a
    }

    function getiPhoneBodyAdjRatio(a, b) {
        if (!isIphone() || br.displayMode !== "fullscreen" || isInIframe()) {
            return 1
        }
        return (a > b) ? 1.085 : 1.14
    }

    function setBodySize(a, b) {
        if (br.displayMode !== "fullscreen") {
            return
        }
        var c = isSmallAndroid() ? (getAndroidVer() >= 2.3 ? 1 * a + "px" : "110%") : 100 * getiPhoneBodyAdjRatio(bl, winWidth) + "%";
        $("body, html").css({
            overflow: isSmallAndroid() ? "auto" : "hidden",
            height: c,
            margin: "0",
            padding: "0"
        })
    }

    function checkForResize() {
        var a = getWindowWidth();
        var b = adjustHeight4Devices(getWindowHeight(), a);
        if (isAndroid()) {
            if (br.displayMode === "fullscreen" && (b !== bl || a !== winWidth)) {
                setBodySize(b, a)
            } else {
                hideUrlBar.InTimer()
            }
        }
        if (bg > 1 && $("#" + be + "sv-photo-detail:visible").length > 0 && $("#" + be + "sv-next-photo:visible").length === 0 && $("#" + be + "sv-prev-photo:visible").length === 0) {
            resizeViewer()
        }
    }

    function showOverlayControlsAnim(a) {
        var b = getSlideDuration();
        if (a) {
            $("#" + be + "sv-topmenu").fadeIn(b.od)
        } else {
            $("#" + be + "sv-topmenu").fadeOut(2 * b.od)
        }
        if (bk.mobileshowcaption) {
            if (a) {
                $("#" + be + "sv-photos .sv-photo .sv-caption").fadeIn(b.od);
                setCaptionEvent()
            } else {
                $("#" + be + "sv-photos .sv-photo .sv-caption").fadeOut(2 * b.od)
            }
        }
        if (bk.mobileshownav) {
            if (a) {
                if (bk.mobileshownav && bv > 1) {
                    $("#" + be + "sv-prev-photo span").fadeIn(b.od)
                }
                if (bk.mobileshownav && bv < bk.images.length) {
                    $("#" + be + "sv-next-photo span").fadeIn(b.od)
                }
            } else {
                if (bk.mobileshownav && bv > 1) {
                    $("#" + be + "sv-prev-photo span").fadeOut(2 * b.od)
                }
                if (bk.mobileshownav && bv < bk.images.length) {
                    $("#" + be + "sv-next-photo span").fadeOut(2 * b.od)
                }
            }
        }
    }

    function showOverlayControls(a) {
        $("#" + be + "sv-topmenu").hide();
        $("#" + be + "sv-photos .sv-photo .sv-caption").hide();
        $("#" + be + "sv-prev-photo span").hide();
        $("#" + be + "sv-next-photo span").hide();
        if (!a) {
            return
        }
        $("#" + be + "sv-topmenu").show();
        if (bk.mobileshowcaption) {
            var b = $("#" + be + "sv-photos .sv-photo .sv-caption");
            b.show();
            setCaptionEvent()
        }
        if (bk.mobileshownav) {
            if (bk.mobileshownav && bv > 1) {
                $("#" + be + "sv-prev-photo span").show()
            }
            if (bk.mobileshownav && bv < bk.images.length) {
                $("#" + be + "sv-next-photo span").show()
            }
        }
    }

    function getWindowWidth() {
        if (isAndroid4After()) {
            return $(window).width()
        }
        var w = $(window).width();
        if (isAndroid() && w > screen.width) {
            return screen.width - 6
        }
        return w
    }

    function getWindowHeight() {
        if (isAndroid4After()) {
            return $(window).height()
        }
        var h = $("body").height();
        if (h <= 0) {
            h = $(window).height()
        }
        if (isAndroid()) {
            if (h > screen.height || (br.displayMode === "fullscreen" && !isInIframe())) {
                return screen.height
            }
        }
        return h
    }

    function calculateMvSize() {
        winWidth = getWindowWidth();
        bl = adjustHeight4Devices(getWindowHeight(), winWidth);
        if (br.displayMode === "fullscreen") {
            bn.width = winWidth;
            bn.height = bl
        } else {
            bO(svHeight);
            if (bp.indexOf("%") > -1) {
                if ($("table #" + svContainerId).length <= 0 || hasFixedSizeTag(svContainer, "width")) {
                    bm.width = getContainerWidth(svContainer) || winWidth;
                    bn.width = bm.width
                } else {
                    if (bm.widthRatio) {
                        bn.width = bm.widthRatio * winWidth;
                        if (bn.width - 20 < parseInt(winWidth) && bn.width > parseInt(winWidth) - 20) {
                            bn.width -= 20
                        }
                    } else {
                        bn.width = bm.width
                    }
                }
            } else {
                bn.width = parseInt(bp)
            }
            if (svHeight.indexOf("%") > -1) {
                if ($("table #" + svContainerId).length <= 0 || hasFixedSizeTag(svContainer, "height")) {
                    bm.height = getContainerHeight(svContainer) || bl;
                    bn.height = bm.height
                } else {
                    if (bm.heightRatio) {
                        bn.height = bm.heightRatio * bl
                    } else {
                        bn.height = bm.height
                    }
                }
            } else {
                bn.height = parseInt(svHeight)
            }
        }
        if (br.panelMode === "both") {
            bn.width -= bo.width
        }
    }

    function setMvSize() {
        $("#" + be + "sv-photo-detail, #" + be + "sv-photo-detail .photo-frame").width(bn.width);
        var a = be + "sv-photo-" + (bv - 2);
        var b = be + "sv-photo-" + (bv);
        if (supportWebkitAnim()) {
            var c = document.getElementById(a);
            var d = document.getElementById(b);
            if (c) {
                c.style.webkitTransitionProperty = "-webkit-transform";
                c.style.webkitTransitionTimingFunction = "cubic-bezier(0.09,0.34,0.06,1)";
                c.style.webkitTransitionDuration = "0";
                c.style.webkitTransform = "translate3d(-" + bn.width + "px, 0px, 0px)"
            }
            if (d) {
                d.style.webkitTransitionProperty = "-webkit-transform";
                d.style.webkitTransitionTimingFunction = "cubic-bezier(0.09,0.34,0.06,1)";
                d.style.webkitTransitionDuration = "0";
                d.style.webkitTransform = "translate3d(" + bn.width + "px, 0px, 0px)"
            }
        } else {
            $("#" + a).css("left", -bn.width);
            $("#" + b).css("left", bn.width)
        }
        var e = $("#" + be + "sv-photos .sv-photo.photo-frame img");
        e.css("max-width", bn.width);
        $("#" + be + "sv-photo-detail, #" + be + "sv-photos, #" + be + "sv-photos .sv-photo, #" + be + "sv-prev-photo, #" + be + "sv-next-photo").height(bn.height);
        $("#" + be + "sv-prev-photo span, #" + be + "sv-next-photo span").css({
            top: parseInt(bn.height / 2)
        });
        var f = $("#" + be + "sv-photo-navigation");
        f.height(bn.height);
        f.width(bo.width);
        if (br.panelMode === "both") {
            $("#" + be + "sv-mobile").width(bn.width + bo.width).height(bn.height)
        } else {
            if (br.panelMode === "navigation") {
                $("#" + be + "sv-mobile").width(bn.width).height(bn.height)
            }
        }
        var g, mglft, btrgt;
        var h = getThumbnailGridSize();
        if (br.panelMode === "both") {
            g = parseInt((bn.height - 400) / 2);
            mglft = 0;
            btrgt = 27
        } else {
            g = parseInt((bo.height - h.height) / 2);
            mglft = parseInt((bo.width - h.width) / 2);
            if (mglft < 60) {
                btrgt = 3
            } else {
                btrgt = parseInt(mglft / 2 - 27)
            }
        }
        var i = h.width + 5;
        $("#" + be + "sv-nav-photo-list").css("margin-top", g).css("margin-left", mglft).height(h.height + 10).width(i);
        $("#" + be + "sv-nav-page-label").css("left", parseInt(mglft + h.width / 2) - 20).css("top", g + h.height + 10);
        $("#" + be + "sv-nav-page-caption").css("left", mglft).css("top", g - 28);
        $("#" + be + "sv-nav-page-prev").css("left", btrgt);
        $("#" + be + "sv-nav-page-next").css("right", btrgt + 5);
        resizeImages()
    }

    function convertNavPnlIndex(a, b) {
        var c = a.rowCount * a.colCount;
        var d = b.rowCount * b.colCount;
        var e = c * a.crntPnlIndex;
        var f = (c + 1) * a.crntPnlIndex - 1;
        var g = e;
        if (a.imgIndex >= e && a.imgIndex <= f) {
            g = a.imgIndex
        }
        var h = parseInt(g / d);
        return {
            pnlIndex: h,
            pnlImgOnPageIdx: (g % d),
            thumbnailPerPage: d
        }
    }

    function repopuateNavPanel() {
        if (!separateNavPanel()) {
            return
        }
        var a = {
            colCount: bo.maxColCount,
            rowCount: bo.maxRowCount,
            crntPnlIndex: bo.navListIndex,
            imgIndex: (bv - 1)
        };
        var b;
        setGridScale();
        b = convertNavPnlIndex(a, {
            colCount: bo.maxColCount,
            rowCount: bo.maxRowCount
        });
        setNavPnlCalculatedValues();
        removeExtraNavList(a.crntPnlIndex);
        populatePhotoList(b.pnlIndex)
    }
    hideUrlBar = {
        AfterIni: function() {
            if (br.displayMode !== "fullscreen") {
                return
            }
            if (!isInIframe()) {
                if (isIphone()) {
                    window.scrollTo(0, 1)
                } else {
                    if (isSmallAndroid()) {
                        window.scrollTo(0, 1)
                    }
                }
            }
        },
        InTimer: function() {
            if (br.displayMode !== "fullscreen") {
                return
            }
            if (isSmallAndroid() && getAndroidVer() >= 2.3) {
                window.scrollTo(0, 1)
            }
        },
        hidingTimer: 0,
        hidingTimer2: 0,
        AfterResizing: function() {
            if (br.displayMode !== "fullscreen") {
                return
            }
            if (!isInIframe()) {
                if (isIphone()) {
                    window.scrollTo(0, 1)
                } else {
                    if (isSmallAndroid()) {
                        if (hideUrlBar.hidingTimer) {
                            window.clearTimeout(hideUrlBar.hidingTimer)
                        }
                        hideUrlBar.hidingTimer = window.setTimeout(function() {
                            hideUrlBar.hidingTimer = 0;
                            window.scrollTo(0, 1);
                            if (hideUrlBar.hidingTimer2) {
                                window.clearTimeout(hideUrlBar.hidingTimer2)
                            }
                            hideUrlBar.hidingTimer2 = window.setTimeout(function() {
                                hideUrlBar.hidingTimer2 = 0;
                                $(".cls-prev-photo, .sv-nav-page-label").hide();
                                window.setTimeout(function() {
                                    $(".cls-prev-photo, .sv-nav-page-label").show()
                                }, 100)
                            }, 500)
                        }, 4000)
                    }
                }
            }
        }
    };

    function debugInfo() {
        $("#svcp-0-sv-prev-photo").html("timestamp = " + ((new Date()).valueOf() + "").substring(9) + "<br/>.displayMode = " + br.displayMode + "<br/>scrn.h = " + screen.height + "<br/>win.h = " + $(window).height() + "<br/>doc.h = " + $(document).height() + "<br/>bd.h = " + $("body").height() + "<br/>scrn.w = " + screen.width + "<br/>win.w = " + $(window).width() + "<br/>doc.w = " + $(document).width() + "<br/>bd.w = " + $("body").width() + "<br/>svContainer.width = " + svContainer.width() + "<br/>container.height = " + bm.height + "<br/>winHeight = " + bl)
    }

    function resizeViewer() {
        if (hideUrlBar.hidingTimer) {
            window.clearTimeout(hideUrlBar.hidingTimer)
        }
        if (hideUrlBar.hidingTimer2) {
            window.clearTimeout(hideUrlBar.hidingTimer2)
        }
        hideUrlBar.hidingTimer = 0;
        hideUrlBar.hidingTimer2 = 0;
        setPanelSize();
        repopuateNavPanel(true);
        setMvSize();
        hideUrlBar.AfterResizing()
    }

    function resizeImages() {
        $("#" + be + "sv-photos .sv-photo.photo-frame").each(function() {
            if (!$(this).hasClass("loading")) {
                resizeImage(parseInt($(this).attr("id").replace(be + "sv-photo-", "")))
            }
        })
    }

    function resizePhoto(a, b, c) {
        var d, origH, targetW, targetH, ration, xRatio, yRatio;
        var e, newSvHeight;
        d = b;
        origH = c;
        e = bn.width;
        newSvHeight = bn.height;
        xRatio = e / d;
        yRatio = newSvHeight / origH;
        ratio = Math.min(xRatio, yRatio);
        var f = 0;
        if (xRatio > yRatio) {
            var g;
            g = newSvHeight;
            f = 0;
            $("#" + be + "sv-photo-" + a + " img").css({
                height: g + "px",
                width: "auto",
                marginTop: f + "px"
            })
        } else {
            var h, nImgH;
            h = e;
            nImgH = parseInt(origH * xRatio);
            $("#" + be + "sv-photo-" + a + " img").css({
                width: h + "px",
                height: "auto",
                marginTop: parseInt((newSvHeight - nImgH) / 2) + "px"
            })
        }
    }

    function resizeImage(a) {
        if (!bk.images[a].preloadSet) {
            window.setTimeout(function() {
                preloadImages(a, 1)
            }, 250);
            return
        }
        if (!bk.images[a].preloaded || !bk.images[a].preloadedImage || !bk.images[a].preloadedImage.height) {
            window.setTimeout(function() {
                resizeImage(a)
            }, 250);
            return
        }
        resizePhoto(a, bk.images[a].preloadedImage.width, bk.images[a].preloadedImage.height)
    }

    function resizeFlashViewer() {
        bl = getWindowHeight();
        winWidth = getWindowWidth();
        if (br.displayMode === "fullscreen") {
            svContainer.css("position", "static");
            $("#" + be + "sv-mobile-flash").width(winWidth);
            $("#" + be + "sv-mobile-flash").height(bl)
        } else {
            bO(svHeight);
            if (bp.indexOf("%") === -1) {
                bn.width = parseInt(bp || bm.width || winWidth)
            } else {
                if ($("table #" + svContainerId).length <= 0 || hasFixedSizeTag(svContainer, "width")) {
                    bm.width = getContainerWidth(svContainer) || winWidth;
                    bn.width = bm.width
                } else {
                    if (bm.widthRatio) {
                        bn.width = bm.widthRatio * winWidth;
                        if (bn.width - 20 < parseInt(winWidth) && bn.width > parseInt(winWidth) - 20) {
                            bn.width -= 20
                        }
                    } else {
                        bn.width = (bm.width || winWidth)
                    }
                }
            }
            if (svHeight.indexOf("%") === -1) {
                bn.height = parseInt(svHeight || bm.height || bl)
            } else {
                if ($("table #" + svContainerId).length <= 0 || hasFixedSizeTag(svContainer, "height")) {
                    bm.height = getContainerHeight(svContainer);
                    bn.height = bm.height
                } else {
                    if (bm.heightRatio) {
                        bn.height = bm.heightRatio * bl
                    } else {
                        bn.height = (bm.height || bl)
                    }
                }
            }
            $("#" + be + "sv-mobile-flash").width(bn.width).children().width(bn.width);
            $("#" + be + "sv-mobile-flash").height(bn.height).children().height(bn.height)
        }
    }

    function preloadImages(b, c) {
        var i, end;
        if (b < 0) {
            b = 0
        }
        end = ((b - 1 + c) > bk.images.length - 1) ? bk.images.length - 1 : (b - 1 + c);
        for (i = b; i <= end; i += 1) {
            if (needPageReload() && bd) {
                $("#" + be + "sv-photo-" + i + " img").attr("src", bk.images[i].imageURL);
                $("#" + be + "sv-photo-" + i).removeClass("loading");
                var d = $("#" + be + "sv-photo-" + i + " img");
                resizePhoto(i, d.width(), d.height())
            } else {
                if (!bk.images[i].preloadSet) {
                    bk.images[i].preloadedImage = new Image();
                    bk.images[i].preloadedImage.onload = function(a) {
                        return function() {
                            bk.images[a].preloaded = true;
                            $("#" + be + "sv-photo-" + a + " img").attr("src", bk.images[a].imageURL);
                            $("#" + be + "sv-photo-" + a).removeClass("loading");
                            resizeImage(a)
                        }
                    }(i);
                    bk.images[i].preloadedImage.src = bk.images[i].imageURL;
                    bk.images[i].preloadSet = true
                } else {
                    if (bk.images[i].preloaded) {
                        resizeImage(i)
                    }
                }
            }
            if (!bk.images[i].imageLoaded) {
                bk.images[i].imageLoaded = true;
                if (!bk.loadedCount) {
                    bk.loadedCount = 0
                }
                bk.loadedCount++
            }
        }
    }

    function isInIframe() {
        if (top && top.location !== location) {
            return true
        }
        return false
    }

    function errorMessage(a) {
        var b, newH;
        if (bp.indexOf("%") > -1) {
            b = Math.floor(bm.width)
        } else {
            b = parseInt(bp)
        }
        if (svHeight.indexOf("%") > -1) {
            newH = Math.floor((bm.height || bl))
        } else {
            newH = parseInt(svHeight)
        }
        setPanelSize();
        setMvSize();
        $("#" + be + "sv-mobile").html('<div id="' + be + 'sv-error" class="sv-cls-error" style=""><div id="' + be + 'sv-error-text" class="sv-cls-error-text">' + a + '</div><div id="' + be + 'sv-error-bg" class="sv-cls-error-bg"></div></div>');
        $("#" + be + "sv-error").css({
            width: $("#" + be + "sv-error-text").outerWidth() + "px",
            height: $("#" + be + "sv-error-text").outerHeight() + "px",
            top: (newH / 2) - ($("#" + be + "sv-error-text").outerHeight() / 2) + "px",
            left: (b / 2) - ($("#" + be + "sv-error-text").outerWidth() / 2) + "px"
        });
        $("#" + be + "sv-error-bg").css({
            height: $("#" + be + "sv-error-text").outerHeight() + "px"
        })
    }

    function getImageHtmlContent(i) {
        var a = '<img src="' + svCoreURL + 'img/empty-pixel.png" alt="">';
        if (bk.images[i].preloaded) {
            a = '<img src="' + bk.images[i].imageURL + '" alt="">'
        }
        a += '<div class="sv-caption clearfix" style="font-size: ' + bu + "px;" + (bn.showOverlay && bk.mobileshowcaption ? "" : "display:none;") + '">';
        a += '<div class="sv-paging" style="color:' + formatColor(bk.mobilecaptiontextcolor) + ';">' + (i + 1) + "/" + bg + "</div>";
        a += bk.images[i].caption ? '<div class="sv-title" style="color:' + formatColor(bk.mobilecaptiontextcolor) + ';">' + bk.images[i].caption + "</div>" : "";
        a += '<div class="sv-description" style="color:' + formatColor(bk.mobilecaptiontextcolor) + ';">' + bk.images[i].description + "</div>";
        a += "</div>";
        return a
    }

    function getImageHtml(i, a) {
        if (i < 0 || i >= bk.images.length) {
            return ""
        }
        var b = (bk.images[i] && bk.images[i].preloaded) ? "" : "loading";
        var c = '<div class="sv-photo ' + b + ' photo-frame" id="' + be + "sv-photo-" + i + '" style="' + (a ? a : "") + '">';
        c += getImageHtmlContent(i);
        c += "</div>";
        return c
    }

    function populatePhotoFrame(a) {
        var b = "";
        var c = supportWebkitAnim() ? "-webkit-transform:translateX(-" + (bn.width + bj) + "px);" : "left:" + (-bn.width) + "px;";
        var d = supportWebkitAnim() ? "-webkit-transform:translateX(" + (bn.width + bj) + "px);" : "left:" + bn.width + "px;";
        if (a > 0) {
            b += getImageHtml(a - 1, c)
        }
        b += getImageHtml(a);
        if (a < bg - 1) {
            b += getImageHtml(a + 1, d)
        }
        $("#" + be + "sv-photos").html(b);
        if (a > 0) {
            preloadImages(a - 1, 1)
        }
        preloadImages(a, 1);
        if (a < bg - 1) {
            preloadImages(a + 1, 1)
        }
        setMvSize()
    }

    function adjCurrentIndex(a) {
        if (a > bk.images.length) {
            a = bk.images.length
        }
        if (a <= 0) {
            a = 1
        }
        return a
    }

    function removeExtraNavList(a) {
        if (a < 0 || a >= bg - 1) {
            return
        }
        if (supportWebkitAnim()) {
            var b = document.getElementById(be + "-nav-lst-" + a);
            b.style.webkitTransitionTimingFunction = "cubic-bezier(0.09,0.34,0.06,1)";
            b.style.webkitTransitionDuration = "0";
            b.style.webkitTransform = "";
            if (needPageReload()) {
                $("#" + be + "-nav-lst-" + a + " img").attr("src", "")
            }
        }
        $("#" + be + "-nav-lst-" + a).remove()
    }

    function move2NavListPnl(a, b, c) {
        if (a < 0 || a > bo.totalPage || b < 0 || b > bo.totalPage) {
            return
        }
        var d = 0;
        if (a > b) {
            d = 1
        } else {
            if (b > a) {
                d = -1
            }
        }
        if (d === 0) {
            return
        }
        if (Math.abs(b - a) > 1) {
            removeExtraNavList(a + d);
            removeExtraNavList(a);
            populatePhotoList(b);
            return
        }
        removeExtraNavList(a + d);
        var e = getSlideDuration();
        if (!supportWebkitAnim()) {
            $("#" + be + "-nav-lst-" + a).animate({
                left: (d * getThumbnailGridSize().width + 5) + "px"
            }, {
                specialEasing: {
                    left: "easeOutQuart"
                },
                duration: e.d
            });
            $("#" + be + "-nav-lst-" + b).animate({
                left: "0"
            }, {
                specialEasing: {
                    left: "easeOutQuart"
                },
                duration: e.d,
                complete: function() {
                    populatePhotoList(b)
                }
            });
            return
        }
        var f = $("#" + be + "-nav-lst-" + a);
        var g = getPhotoListHtml(b - d, "-webkit-animation-duration:0;-webkit-transform:translateX(" + (-d * (getThumbnailGridSize().width + 5)) + "px);");
        if (d < 0) {
            $("#" + be + "sv-nav-photo-list").append(g)
        } else {
            $(g).insertBefore("#" + be + "-nav-lst-" + b)
        }
        var h = document.getElementById(be + "-nav-lst-" + a);
        var i = document.getElementById(be + "-nav-lst-" + b);
        h.style.webkitTransitionProperty = "-webkit-transform";
        i.style.webkitTransitionProperty = "-webkit-transform";
        if (c) {
            h.style.webkitTransitionTimingFunction = "cubic-bezier(0.11,0.16,0.60,1)";
            h.style.webkitTransitionDuration = e.fixeddur + "ms";
            i.style.webkitTransitionTimingFunction = "cubic-bezier(0.11,0.16,0.60,1)";
            i.style.webkitTransitionDuration = e.fixeddur + "ms"
        } else {
            h.style.webkitTransitionTimingFunction = "cubic-bezier(0.09,0.34,0.06,1)";
            h.style.webkitTransitionDuration = e.d + "ms";
            i.style.webkitTransitionTimingFunction = "cubic-bezier(0.09,0.34,0.06,1)";
            i.style.webkitTransitionDuration = e.d + "ms"
        }
        h.style.webkitTransform = "translate3d(" + (d * 100) + "%, 0px, 0px)";
        i.style.webkitTransform = "translate3d(0px, 0px, 0px)";
        setNavControls(b, bv - 1)
    }

    function getSlideDuration() {
        if (isIpad() || isAndroid() || isIphone()) {
            return {
                od: 200,
                d: 400,
                glcls: "anim-go2left-ipad",
                grcls: "anim-go2right-ipad",
                fixeddur: 200
            }
        }
        return {
            od: 200,
            d: 500,
            glcls: "anim-go2left",
            grcls: "anim-go2right"
        }
    }

    function removeExtraPhoto(a) {
        if (supportWebkitAnim()) {
            var b = document.getElementById(be + "sv-photo-" + a);
            if (b) {
                b.style.webkitTransitionDuration = "0";
                b.style.webkitTransform = ""
            }
            if (needPageReload()) {
                $("#" + be + "sv-photo-" + a + " img").attr("src", "")
            }
        }
        $("#" + be + "sv-photo-" + a).remove()
    }
    var bC = "";

    function removeExtraPhotos(a, b) {
        if (b > a) {
            if (a - 1 >= 0) {
                removeExtraPhoto(a - 1)
            }
            if (a + 1 < b - 1) {
                removeExtraPhoto(a + 1)
            }
        } else {
            if (a + 1 < bg - 1) {
                removeExtraPhoto(a + 1)
            }
            if (a - 1 > b + 1) {
                removeExtraPhoto(a - 1)
            }
        }
        var c = bC.split(",");
        var d, i;
        for (i = 0; i < c.length; i++) {
            d = parseInt(c[i]);
            if (d !== a && Math.abs(d - b) > 1) {
                removeExtraPhoto(d)
            }
        }
        bC = ""
    }

    function setCurrentPohot(a) {
        $("#" + be + "nav-pht-lnks-" + a).addClass("current").addClass("visited")
    }

    function setNavStyle(a, b) {
        $("#" + be + "nav-pht-lnks-" + a).removeClass("current");
        setCurrentPohot(b);
        setCaptionEvent();
        if (bc && !getStub().svImageChange && typeof(svImageChange) != "undefined") {
            getStub().svImageChange = svImageChange
        }
        if (bc && typeof(getStub().svImageChange) === "function" && a !== b) {
            if (isBeforeIeVersion8()) {
                window.setTimeout(function() {
                    getStub().svImageChange(b)
                }, 100)
            } else {
                getStub().svImageChange(b)
            }
        }
    }
    var bD = null;
    var bE = null;

    function cancelUnfinishedAnima() {
        if (bD) {
            bD.stop()
        }
        if (bE) {
            bE.stop()
        }
        bD = null;
        bE = null
    }

    function setCaptionEvent() {
        var a = $("#" + be + "sv-photos .sv-photo .sv-caption");
        a.unbind();
        a.hover(function() {
            bn.showOverlay = true;
            setOverlay(bn.showOverlay)
        }, function() {
            bn.showOverlay = false;
            setOverlay(bn.showOverlay)
        })
    }

    function setSingleLinkColorAndUnderline(a) {
        var b = $("#" + be + "sv-photo-" + a + " .sv-description a");
        if (b.attr("style") && b.attr("style").toLowerCase().indexOf("color") >= 0) {
            return
        }
        var c = b.parent().attr("color");
        if (!c) {
            c = bk.mobilecaptiontextcolor
        }
        b.css("color", formatColor(c));
        var d = b.parent().parent().html();
        if (!d) {
            return
        }
        d = d.toLowerCase();
        if (d.indexOf("<u>") == 0 || d.indexOf("<u ") == 0) {
            return
        }
        b.css("text-decoration", "none")
    }

    function setCaptionLinkColorAndUnderline(a) {
        setSingleLinkColorAndUnderline(a);
        setSingleLinkColorAndUnderline(a - 1);
        setSingleLinkColorAndUnderline(a + 1)
    }
    var bF = 0;

    function move2Photo(a, b, c, d, e) {
        if (a < 0 || a > bg || b < 0 || b > bg || a === b) {
            return
        }
        var f = 0;
        if (a > b) {
            f = 1
        } else {
            if (b > a) {
                f = -1
            }
        }
        if (b >= 0 && b < bg) {
            bk.images[b].visited = true
        }
        var g = parseInt(b / bo.thumbCountPerPage);
        var h = bo.navListIndex;
        if (needPageReload() && !bd && bk.loadedCount >= bi + 2) {
            bv = b + 1;
            SV.simpleviewer.saveCurrentPage();
            $("#" + be + "sv-photo-detail").hide();
            reloadPhotoSlid();
            return
        }
        move2NavListPnl(h, g);
        setNavControls(g, b);
        removeExtraPhotos(a, b);
        $("#" + be + "sv-open-window").attr("href", bk.images[b].imageFullURL).attr("target", bk.images[b].linkTarget);
        var i = "width:" + bn.width + "px;height:" + bn.height + "px;";
        if (Math.abs(a - b) > 1) {
            var j;
            if (supportWebkitAnim()) {
                j = getImageHtml(b, "-webkit-animation-duration:0;-webkit-transform:translateX(" + (-f * (bn.width + bj)) + "px);" + i)
            } else {
                j = getImageHtml(b, "left:" + (-f * (bn.width + bj)) + "px;" + i)
            }
            if (f < 0) {
                $("#" + be + "sv-photos").append(j)
            } else {
                $(j).insertBefore("#" + be + "sv-photo-" + a)
            }
            preloadImages(b, 1)
        }
        if (c === "calledfromnav") {
            populatePhotoFrame(b);
            setCaptionLinkColorAndUnderline(b);
            setCaptionEvent()
        } else {
            var k = getSlideDuration();
            if (!supportWebkitAnim()) {
                var l = $("#" + be + "sv-photo-" + b);
                if (l.length <= 0) {
                    populatePhotoFrame(b);
                    setCaptionLinkColorAndUnderline(b);
                    setCaptionEvent();
                    setNavStyle(a, b);
                    return
                }
                cancelUnfinishedAnima();
                bE = $("#" + be + "sv-photo-" + a);
                bE.animate({
                    left: (f * (bn.width + bj)) + "px"
                }, k.d, "easeOutQuart", function() {
                    bE = null
                });
                bD = l;
                l.animate({
                    left: "0"
                }, k.d, "easeOutQuart", function() {
                    cancelUnfinishedAnima();
                    if (parseInt($("#" + be + "sv-photo-" + b).css("left")) === 0) {
                        populatePhotoFrame(b);
                        setCaptionLinkColorAndUnderline(b)
                    }
                    bD = null
                });
                setNavStyle(a, b);
                return
            }
            var m = $("#" + be + "sv-photo-" + a);
            var n = getImageHtml(b - f, "-webkit-animation-duration:0;-webkit-transform:translateX(" + (-f * (bn.width + bj)) + "px);" + i);
            var o;
            if (f < 0) {
                $("#" + be + "sv-photos").append(n);
                if (b - a > 1) {
                    o = getImageHtml(b - 1, "-webkit-animation-duration:0;-webkit-transform:translateX(" + (-f * (bn.width + bj)) + "px);" + i);
                    $(o).insertBefore("#" + be + "sv-photo-" + b);
                    preloadImages(b - 1, 1)
                }
            } else {
                $(n).insertBefore("#" + be + "sv-photo-" + b);
                if (a - b > 1) {
                    o = getImageHtml(b + 1, "-webkit-animation-duration:0;-webkit-transform:translateX(" + (-f * (bn.width + bj)) + "px);" + i);
                    $("#" + be + "sv-photos").append(o);
                    preloadImages(b + 1, 1)
                }
            }
            preloadImages(b - f, 1);
            setNavStyle(a, b);
            var p = document.getElementById(be + "sv-photo-" + a);
            var q = document.getElementById(be + "sv-photo-" + b);
            p.style.webkitTransitionProperty = "-webkit-transform";
            q.style.webkitTransitionProperty = "-webkit-transform";
            if (d) {
                p.style.webkitTransitionTimingFunction = "cubic-bezier(0.11,0.16,0.60,1)";
                p.style.webkitTransitionDuration = k.fixeddur + "ms";
                q.style.webkitTransitionTimingFunction = "cubic-bezier(0.11,0.16,0.60,1)";
                q.style.webkitTransitionDuration = k.fixeddur + "ms"
            } else {
                p.style.webkitTransitionTimingFunction = "cubic-bezier(0.09,0.34,0.06,1)";
                p.style.webkitTransitionDuration = k.d + "ms";
                q.style.webkitTransitionTimingFunction = "cubic-bezier(0.09,0.34,0.06,1)";
                q.style.webkitTransitionDuration = k.d + "ms"
            }
            if (!separateNavPanel()) {
                if (bF) {
                    window.clearTimeout(bF);
                    bF = 0
                }
                bF = window.setTimeout(function() {
                    p.style.webkitTransform = "translate3d(" + (f * bn.width) + "px, 0px, 0px)";
                    q.style.webkitTransform = "translate3d(0px, 0px, 0px)";
                    bF = 0
                }, 100)
            } else {
                p.style.webkitTransform = "translate3d(" + (f * (bn.width + bj)) + "px, 0px, 0px)";
                q.style.webkitTransform = "translate3d(0px, 0px, 0px)";
                bF = 0
            }
            var r = $("#" + be + "sv-photo-" + b + " a");
            if (r.length > 0) {
                var s = $("#" + be + "sv-photos .sv-photo .sv-caption").height() + 10;
                if (!bc) {
                    s = parseInt(s) + 35
                }
                $("#" + be + "sv-prev-photo span, #" + be + "sv-next-photo span").css("top", parseInt(bn.height / 2));
                $("#" + be + "sv-prev-photo, #" + be + "sv-next-photo").height(bn.height - s)
            }
        }
        setNavStyle(a, b);
        bC += a + ","
    }

    function getIosVer() {
        var a = new RegExp(/ OS \d_\d(\S)* like Mac OS/);
        var b = a.exec(navigator.userAgent);
        if (!b) {
            return 0
        }
        b = b[0].replace(" OS ", "").replace("_", ".");
        return parseFloat(b)
    }

    function isIpad() {
        if (navigator.userAgent.match(/iPad/i)) {
            return true
        }
        return false
    }

    function isSmallAndroid() {
        if (isAndroid() && Math.max(screen.width, screen.height) < 800) {
            return true
        }
        return false
    }

    function separateNavPanel() {
        return true
    }

    function toggleOverlay() {
        if (bn.showOverlay) {
            bn.showOverlay = false
        } else {
            bn.showOverlay = true
        }
    }

    function useClickableOverlay() {
        if (isIpad() || isAndroid() || isIphone()) {
            return true
        }
        return false
    }

    function needPageReload() {
        var a = getIosVer();
        if (navigator.userAgent.match(/iPad/i) && a < 4.3) {
            return true
        }
        if (navigator.userAgent.match(/iPhone/i) && a < 4.3) {
            return true
        }
        return false
    }

    function isWindowsPhone7IE() {
        return false;
        if (navigator.userAgent.match(/Windows Phone OS 7/i) && navigator.userAgent.match(/MSIE/i)) {
            return true
        }
        return false
    }

    function isAndroid() {
        if (navigator.userAgent.match(/Android/i)) {
            return true
        }
        return false
    }

    function getAndroidVer() {
        var a = navigator.userAgent.indexOf("Android");
        if (a < 0) {
            return 0
        }
        var b = navigator.userAgent.indexOf(";", a);
        if (b <= a) {
            return 0
        }
        var c = navigator.userAgent.substring(a, b);
        var d = c.split(" ");
        if (d.length !== 2) {
            return 0
        }
        return parseFloat(d[1])
    }

    function isAndroid4After() {
        if (navigator.userAgent.match(/Android/i) && getAndroidVer() >= 4) {
            return true
        }
        return false
    }

    function isBeforeIeVersion8() {
        if ($.browser.msie && $.browser.version < 8) {
            return true
        }
        return false
    }

    function isIphone() {
        if (navigator.userAgent.match(/iPhone/i)) {
            return true
        }
        return false
    }

    function iosVersion() {
        var m = navigator.userAgent.match(/OS \d?_/g);
        if (!m) {
            return 0
        }
        return parseFloat(m[0].replace(/OS /g, ""))
    }

    function isSvBiggerThanWin() {
        if (window.innerWidth > 0 && bn.width > window.innerWidth) {
            return true
        }
        if (window.innerHeight > 0 && bn.height > window.innerHeight) {
            return true
        }
        return false
    }

    function isSwipable(a) {
        if (br.displayMode !== "fullscreen" && ((a && a.disableswipe) || isSvBiggerThanWin())) {
            return false
        } else {
            if (isAndroid() || isIpad() || isIphone()) {
                return true
            }
        }
        return false
    }

    function supportWebkitAnim() {
        if (navigator.userAgent.match(/AppleWebKit/i)) {
            return true
        }
        return false
    }

    function formatColor(a) {
        a = a ? a.replace("#", "").replace("0x", "").replace("0X", "") : "";
        if (/[ghijklmnopqrstuvwxyz]/.test(a.toLowerCase())) {
            return a
        }
        return "#" + a
    }

    function getContainerHeightRatio2Win(a) {
        return getContainerSizeRatio2Win(a, getInlineCssHeight)
    }

    function getContainerHeight(a) {
        return getContainerSize(a, getContainerPxHeight, bl, "height")
    }

    function getContainerPxHeight(a) {
        if ($.browser.msie && $.browser.version === "6.0") {
            var b = getInlineCssHeight(a.attr("style"));
            if (parseInt(b) > 0 && b.indexOf("%") < 0) {
                return parseInt(b)
            }
        }
        if (a.height()) {
            return a.height()
        }
        var c = $("body").height();
        if (c === 0) {
            return 0
        }
        var d = a.parent();
        while (d && d.length > 0) {
            if (d.height()) {
                return d.height()
            }
            d = d.parent()
        }
        return getContainerPxHeightOld(a)
    }

    function getContainerPxHeightOld(a) {
        var b, bdyh;
        if ($.browser.msie && $.browser.version === "6.0") {
            b = getInlineCssHeight(a.attr("style"));
            if (parseInt(b) > 0 && b.indexOf("%") < 0) {
                return parseInt(b)
            }
        } else {
            if ($.browser.msie) {
                var c = a.attr("id");
                var d = document.getElementById(c);
                b = d ? d.clientHeight : 0
            } else {
                b = a.height()
            }
        }
        b = parseInt(b);
        if (isBeforeIeVersion8()) {
            if ($.browser.version < 7) {
                if (b && !(b < 0.5 * a.width())) {
                    return b
                }
                return 0
            }
            bdyh = $("body").height();
            if (bdyh === 0) {
                return 0
            } else {
                if (bdyh < 0.7 * bl) {
                    return bl - bdyh
                }
            }
        }
        if (b && !($.browser.msie && $.browser.version < 7 && b < 0.5 * a.width())) {
            return b
        }
        bdyh = $("body").height();
        if (bdyh === 0) {
            return 0
        }
        var e = a.parent();
        while (e && e.length > 0) {
            if (e.height()) {
                return e.height()
            }
            e = e.parent()
        }
        return 0
    }

    function getInlineCssWidth(a) {
        var w = getInlineStyleValue(a, "width");
        if (parseInt(w) === 0) {
            return 0
        }
        return w
    }

    function getInlineCssHeight(a) {
        var h = getInlineStyleValue(a, "height");
        if (parseInt(h) === 0) {
            return 0
        }
        return h
    }

    function getInlineStyleInt(a, k) {
        return parseInt(getInlineStyleValue(a, k))
    }

    function getInlineStyleValue(a, k) {
        if (!a || !k) {
            return ""
        }
        var b = a.split(";");
        var c, itm, vk, vv, i;
        for (i = 0; i < b.length; i++) {
            itm = $.trim(b[i]);
            if (!itm) {
                continue
            }
            c = itm.split(":");
            if (c.length !== 2) {
                continue
            }
            vk = $.trim(c[0]);
            vv = $.trim(c[1]);
            if (!vk) {
                continue
            }
            if (vk.toLowerCase() === k.toLowerCase()) {
                return vv
            }
        }
        return ""
    }

    function isPercentage(a, b) {
        var c = getInlineStyleValue(a, b);
        if (c.indexOf("%") < 0 && parseInt(c)) {
            return false
        }
        return true
    }

    function hasFixedSizeTag(c, d) {
        var e = false;
        var f = false;
        c.parents().each(function(i, n) {
            if (f) {
                return
            }
            var a = n.nodeName.toUpperCase();
            if (a === "HTML" || a === "BODY") {
                f = true;
                return
            }
            var b = $(n).attr("style");
            if (!isPercentage(b, d)) {
                f = true;
                e = true
            }
        });
        return e
    }

    function getContainerSizeRatio2Win(c, d) {
        var e = 1;
        var f = 0;
        var g;
        c.parents().each(function(i, n) {
            var a = n.nodeName.toUpperCase();
            if (a === "HTML" || a === "BODY") {
                return
            }
            g = $(n).attr("style");
            var b = d(g);
            if (b.toLowerCase().indexOf("%") < 0 && parseInt(b) > 0) {
                f = parseInt(b)
            }
            if (!b || f > 0) {
                return
            }
            if (b.indexOf("%") > 0) {
                e *= (parseInt(b) / 100)
            }
        });
        if (f > 0) {
            return 0
        }
        g = c.attr("style");
        var h = d(g);
        if (h.indexOf("%") > 0) {
            e *= (parseInt(h) / 100)
        } else {
            if (parseInt(h) > 0) {
                return 0
            }
        }
        return e
    }

    function getContainerWidthRatio2Win(a) {
        return getContainerSizeRatio2Win(a, getInlineCssWidth)
    }

    function getContainerSize(c, d, e, f) {
        var g = d(c);
        if (g) {
            return g
        }
        if (!getInlineStyleInt(c.attr("style"), f) && !getInlineStyleInt(c.parents().attr("style"), f)) {
            return 0
        }
        var h = 1;
        var j = 0;
        c.parents().each(function(i, n) {
            var a = n.nodeName.toUpperCase();
            if (a === "HTML" || a === "BODY") {
                return
            }
            var b = getInlineStyleValue($(n).attr("style"), f);
            if (!b || j > 0) {
                return
            }
            if (b.indexOf("%") > 0) {
                h *= (parseInt(b) / 100)
            } else {
                j = parseInt(b)
            }
        });
        return h * (j || e)
    }

    function getContainerWidth(a) {
        return getContainerSize(a, getContainerPxWidth, winWidth, "width")
    }

    function getContainerPxWidth(a) {
        if ($.browser.msie && $.browser.version === "6.0") {
            var b = getInlineCssWidth(a.attr("style"));
            if (parseInt(b) > 0 && b.indexOf("%") < 0) {
                return parseInt(b)
            }
        }
        if (a.width()) {
            return a.width()
        }
        var c = $("body").width();
        if (c === 0) {
            return 0
        }
        var d = a.parent();
        while (d && d.length > 0) {
            if (d.width()) {
                return d.width()
            }
            d = d.parent()
        }
        return 0
    }

    function getPresetUrlOptions(d, e, f) {
        $.ajax({
            type: "GET",
            url: (isOnRoot(d) ? d : (e.baseurl ? e.baseurl + (isEndedWithSlash(e.baseurl) ? "" : "/") + d : d)),
            dataType: ($.browser.msie) ? "text" : "xml",
            success: function(a) {
                var b;
                if (typeof a === "string") {
                    b = new ActiveXObject("Microsoft.XMLDOM");
                    b.async = false;
                    b.loadXML(a)
                } else {
                    b = a
                }
                var c = parseXML(b, bk, e.baseurl);
                delete c.images;
                bk = $.extend(false, bk, c);
                bg = bk.images.length;
                f()
            },
            error: function(a, b, c) {
                if (navigator.userAgent.indexOf("Chrome") > -1 && (window.location.href.indexOf("http://") === -1 && window.location.href.indexOf("https://") === -1)) {
                    errorMessage("SimpleViewer does not display locally in Google Chrome.")
                } else {
                    errorMessage("Gallery XML Not Found.")
                }
            }
        })
    }

    function parseBool(a, b) {
        if (typeof(a) === "undefined") {
            return b
        }
        if (typeof(a) !== "string") {
            return a
        }
        if (a.toLowerCase() === "false") {
            return false
        }
        if (a.toLowerCase() === "true") {
            return true
        }
        return a
    }

    function setCookie(a, b, c) {
        if (c < 0) {
            c = "Thu, 01 Jan 1970 00:00:00 GMT"
        } else {
            c = ""
        }
        document.cookie = a + "=" + escape(b) + ((c === "") ? "" : ";expires=" + c) + ";path=/"
    }

    function getCookie(a) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(a + "=");
            if (c_start !== -1) {
                c_start = c_start + a.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end === -1) {
                    c_end = document.cookie.length
                }
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }

    function getCrntImgIdxKey() {
        return be + "svcrntimgi"
    }

    function getCrntNavIdxKey() {
        return be + "svcrntnavi"
    }

    function getSvReLoadedFlag() {
        return be + "svcrntimgi_lf"
    }

    function getCrntDisplayedPanelKey() {
        return be + "svcrntpanel"
    }

    function getVisitedPhotoKey() {
        return be + "svvisitedphotos"
    }

    function getIfShowOverlay() {
        return be + "svckifshowoverlay"
    }

    function getThumbnailCountPerPage() {
        return be + "svthumbnailcountperpage"
    }

    function getCurrentImgIdxFromCookie() {
        if (!getCookie(getSvReLoadedFlag())) {
            return null
        }
        var a = parseInt(getCookie(getCrntImgIdxKey()));
        setCookie(getSvReLoadedFlag(), "", -10);
        var b = parseInt(getCookie(getCrntNavIdxKey()));
        var c = parseInt(getCookie(getThumbnailCountPerPage()));
        var d = parseBool(getCookie(getIfShowOverlay()));
        var e = parseInt(getCookie(getCrntDisplayedPanelKey())) > 0 ? true : false;
        var f = getCookie(getVisitedPhotoKey());
        return {
            crntImgIdx: a,
            crntNavIdx: b,
            navPnlVisible: e,
            visitedImages: f,
            showOverlay: d,
            thumbnailPageCount: c
        }
    }

    function setCurrentImgIdxCookie(a) {
        setCookie(getCrntImgIdxKey(), a, null);
        setCookie(getCrntNavIdxKey(), bo.navListIndex);
        setCookie(getThumbnailCountPerPage(), bo.thumbCountPerPage);
        setCookie(getSvReLoadedFlag(), "1", null);
        setCookie(getIfShowOverlay(), bn.showOverlay);
        var t = $("#" + be + "sv-photo-navigation:visible").length;
        setCookie(getCrntDisplayedPanelKey(), t);
        var i, visitedImgs = "";
        for (i = 0; i < bk.images.length; i++) {
            if (!bk.images[i].visited) {
                continue
            }
            visitedImgs += (i + ",")
        }
        setCookie(getVisitedPhotoKey(), visitedImgs)
    }

    function reloadPhotoSlid() {
        location.reload(true)
    }
    var bG = [{
        name: "Nexus S",
        height: 515,
        width: 299
    }, {
        name: "HTC Panache",
        height: 535,
        width: 323
    }, {
        name: "HTC myTouch",
        height: 535,
        width: 323
    }, {
        name: "MB860",
        height: 615,
        width: 331
    }, {
        name: "GT-I9100M",
        height: 515,
        width: 299
    }];
    var bH = function() {
        var a;
        for (var i = 0; i < bG.length; i++) {
            a = bG[i];
            if (navigator.userAgent.indexOf(a.name) >= 0) {
                return a
            }
        }
        return null
    };
    var bI = function(a) {
        var d = bH();
        if (!d) {
            if (br.displayMode === "fullscreen" && isSmallAndroid()) {
                return {
                    height: screen.height + (isInIframe() ? 0 : 5),
                    registered: false
                }
            }
            return {
                height: (isInIframe() ? 1 : 1.15) * a,
                registered: false
            }
        }
        return {
            height: d.height,
            registered: true
        }
    };
    var bJ = function(a) {
        var d = bH();
        if (!d) {
            if (br.displayMode === "fullscreen" && isSmallAndroid()) {
                return {
                    width: screen.height + (isInIframe() ? 0 : 5),
                    registered: false
                }
            }
            return {
                width: a,
                registered: false
            }
        }
        return {
            width: d.width,
            registered: true
        }
    };
    var bK = null;
    var bL;
    var bM;

    function iniBodyHeightInfo() {
        if (bK) {
            return
        }
        bK = $("body");
        bL = getInlineCssHeight(bK.attr("style"));
        bM = (!bL && bL.toLowerCase().indexOf("%") < 0 && parseInt(bL) > 0) || (bK.height() > 0.7 * $(window).height() && bK.height() > 160)
    }
    var bN = function(a) {
        if (bM) {
            return false
        }
        if (a.indexOf("%") < 0) {
            return false
        }
        return true
    };
    var bO = function(a) {
        iniBodyHeightInfo();
        if (!bN(a)) {
            return
        }
        var b = $(window);
        bK.height(adjustHeight4Devices(b.height(), b.width()))
    };

    function adjustHeight4Devices(a, b) {
        if (isIphone()) {
            if (br.displayMode !== "fullscreen") {
                return a
            }
            if (iosVersion() >= 7) {
                var c = window.innerHeight;
                c++;
                if (window.innerHeight < window.innerWidth) {
                    c++
                }
                return c
            }
            return a > b ? screen.height - 60 : screen.width - 50
        } else {
            if (isSmallAndroid()) {
                var d = getAndroidVer();
                if (d >= 4) {
                    return screen.height * 1.25
                } else {
                    if (d >= 2.3) {
                        var e;
                        if (a > b) {
                            e = bI(a + 1);
                            return e.height
                        } else {
                            e = bJ(a + 1);
                            return e.width
                        }
                    } else {
                        if (d >= 2.2) {
                            return a + 2
                        } else {
                            return a - 24
                        }
                    }
                }
            }
        }
        return a
    }

    function initializePhotoFrameObjs() {
        bw = document.getElementById(be + "sv-photos");
        bw.style.webkitTransitionProperty = "-webkit-transform";
        bw.style.webkitTransitionTimingFunction = "cubic-bezier(0.09,0.34,0.06,1)";
        var a = getSlideDuration();
        bx = a.d + "ms";
        bw.style.webkitTransitionDuration = bx
    }
    var bP = 0;

    function setOverlay(a) {
        if (bP) {
            window.clearTimeout(bP);
            bP = 0
        }
        bP = window.setTimeout(function() {
            bP = 0;
            showOverlayControlsAnim(a)
        }, 100)
    }

    function getQueryStrValue(a, b) {
        var c = b + "=";
        var d = a.indexOf(c);
        if (d < 0) {
            return ""
        }
        return decodeURIComponent(a.substring(d + c.length).split("&")[0])
    }

    function formatSize(v) {
        if (v.indexOf("%") > 0) {
            return v
        }
        return parseInt(v) + "px"
    }

    function setContainerSize(w, h, a) {
        a.css("width", formatSize(w));
        a.css("height", formatSize(h))
    }

    function isFlashAvailable(a) {
        if (!isAndroid() && typeof swfobject !== "undefined" && swfobject.hasFlashPlayerVersion(bs) && (typeof a === "undefined" || (typeof a !== "undefined" && a))) {
            return true
        }
        return false
    }

    function setDisplayMode(a, b) {
        if (a === "100%" && b === "100%" && svContainer.width() === $("body").width() && (!bm.height || parseInt(bm.height) === $("body").height()) && bm.widthRatio === 1 && bm.heightRatio === 1) {
            br.displayMode = "fullscreen";
            setBodySize(bl, winWidth);
            $("meta#sv-meta").attr("content", "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" + (isAndroid() ? "target-densitydpi=160" : ""))
        } else {
            br.displayMode = "embed";
            if (!bm.height && b.indexOf("%") === -1) {
                svContainer.css({
                    height: b + "px"
                })
            }
            $("meta#sv-meta").remove()
        }
    }
    bh = {
        load: function(M, N, O, P, Q, R, S, T, U, V) {
            be = M;
            if (!$.easing.easeOutQuart) {
                $.extend($.easing, {
                    easeOutQuart: function(x, t, b, c, d) {
                        return -c * ((t = t / d - 1) * t * t * t - 1) + b
                    }
                })
            }
            svContainerId = N;
            svContainer = $("#" + N);
            svContainer.html("");
            bO(P);
            setContainerSize(O, P, svContainer);
            var W;
            winWidth = getWindowWidth();
            bl = adjustHeight4Devices(getWindowHeight(), winWidth);
            O = O.replace("px", "");
            P = P.replace("px", "");
            bm.width = getContainerWidth(svContainer);
            bm.height = getContainerHeight(svContainer);
            bm.widthRatio = getContainerWidthRatio2Win(svContainer);
            bm.heightRatio = getContainerHeightRatio2Win(svContainer);
            bp = O;
            svHeight = P;
            setDisplayMode(O, P);
            var X = window.location.href;
            var Y = getQueryStrValue(X, "bg");
            if (Y) {
                Q = Y
            }
            backgroundColor = (Q ? Q.replace("#", "") : "");
            bt = S || {};
            params = T || {};
            attributes = U || {};
            var Z = bc && (V === null || typeof V === "undefined" || (typeof V !== "undefined" && V));
            if (isFlashAvailable(R)) {
                var bQ;
                if (swfobject.hasFlashPlayerVersion("10.0.0") && Z) {
                    bQ = svCoreURL + "swf/simpleviewer_icc.swf"
                } else {
                    bQ = svCoreURL + "swf/simpleviewer.swf"
                }
                W = parseInt(bm.height || bl);
                svContainer.html(generateSVFlashHtml());
                $("#" + be + "sv-mobile-flash").height(W);
                params.allowfullscreen = true;
                params.allowscriptaccess = "always";
                if (!Q || Q.toLowerCase() === "transparent") {
                    params.wmode = "transparent";
                    params.bgcolor = params.bgcolor || "#222222"
                } else {
                    params.bgcolor = params.bgcolor || Q
                }
                bt.embedurl = window.location.href;
                swfobject.embedSWF(bQ, be + "sv-mobile-flash-swf", O, P, bs, false, bt, params, attributes);
                $(window).bind("resize", resizeFlashViewer);
                window.setTimeout(resizeFlashViewer, 100);
                return
            }
            svContainer.css({
                position: "relative"
            });
            svContainer.html(generateSVHtml());
            if (br.displayMode === "embed") {
                $("#" + N + " .simpleviewer").css({
                    position: "relative"
                })
            }
            $("#" + be + "sv-mobile").css({
                background: formatColor(backgroundColor)
            });
            if (!bc) {
                $("#" + bf.randomId + ", #nav-" + bf.randomId).click(function(a) {
                    window.open("http://www.simpleviewer.net/simpleviewer", "sv");
                    a.preventDefault();
                    a.stopPropagation()
                })
            }
            S = cvtObjectAttrLowerCase(S);
            if (!S) {
                S = {}
            }
            Y = getQueryStrValue(X, "baseURL");
            if (Y) {
                S.baseurl = Y
            }
            var bR = getQueryStrValue(X, "galleryURL");
            bR = (S && S.galleryurl ? S.galleryurl : (bR ? bR : "gallery.xml"));
            if (!isOnRoot(bR)) {
                if (S.baseurl) {
                    bR = (isEndedWithSlash(S.baseurl) ? S.baseurl : S.baseurl + "/") + bR
                } else {
                    bR = (svCoreURL !== "" && svCoreURL !== "svcore/" ? X.substr(0, X.lastIndexOf("/") + 1) : "") + bR
                }
            }
            Y = getQueryStrValue(X, "presetURL");
            if (Y) {
                S.preseturl = Y
            }
            Y = getQueryStrValue(X, "imagePath");
            if (Y) {
                S.imagepath = Y
            }
            Y = getQueryStrValue(X, "thumbPath");
            if (Y) {
                S.thumbpath = Y
            }
            getAddParamFromURL(X, S);
            $.ajax({
                type: "GET",
                url: bR,
                dataType: ($.browser.msie) ? "text" : "xml",
                success: function(K) {
                    var L;
                    if (typeof K === "string") {
                        L = new ActiveXObject("Microsoft.XMLDOM");
                        L.async = false;
                        L.loadXML(K)
                    } else {
                        L = K
                    }
                    bk = parseXML(L, S, S.baseurl, S.imagepath, S.thumbpath);
                    bk = $.extend(S, bk);
                    if (!bc) {
                        bk.mobileshownav = true;
                        bk.mobileshowcaption = true;
                        bk.mobileshowthumbs = true;
                        bk.mobilethumbstextcolor = "#fff";
                        bk.mobilecaptiontextcolor = "#fff";
                        bk.mobileshowpagecount = true;
                        delete bk.preseturl
                    }
                    if (bk.preseturl) {
                        getPresetUrlOptions(bk.preseturl, S, onFinishXmlLoad)
                    } else {
                        onFinishXmlLoad()
                    }

                    function onFinishXmlLoad() {
                        bk.mobileshownav = parseBool(bk.mobileshownav, true);
                        bk.mobileshowcaption = parseBool(bk.mobileshowcaption, true);
                        bk.showopenbutton = parseBool(bk.showopenbutton, true);
                        bk.showfullscreenbutton = parseBool(bk.showfullscreenbutton, true);
                        $("#" + be + "sv-nav-page-caption").css("color", formatColor(bk.mobilethumbstextcolor));
                        $("#" + be + "sv-nav-page-label").css("color", formatColor(bk.mobilethumbstextcolor));
                        if (!bk.mobileshowpagecount) {
                            $("#" + be + "sv-nav-page-label").remove()
                        }
                        if (bk.useflickr) {
                            if (bk.flickrsetid) {
                                bk.flickrusername = ""
                            }
                            bk.images = [];
                            if (bi > 13) {
                                bi -= 13
                            }
                            if (bk.flickrusername) {
                                bh.flickrApi.getUserId(function() {
                                    bh.flickrApi.getPhotos(initCallback)
                                })
                            } else {
                                bh.flickrApi.getPhotos(initCallback)
                            }
                        } else {
                            initCallback()
                        }
                    }

                    function showTopNavmenuBk() {
                        $("#" + be + "sv-nav-topmenu-links").show();
                        if ($.browser.msie && $.browser.version >= 9) {
                            return
                        }
                        $("#" + be + "sv-nav-topmenu-left, #" + be + "sv-nav-topmenu-right").show()
                    }

                    function showTopmenuBk() {
                        $("#" + be + "sv-topmenu-links").show();
                        if ($.browser.msie && $.browser.version >= 9) {
                            return
                        }
                        $("#" + be + "sv-topmenu-left, #" + be + "sv-topmenu-right").show()
                    }

                    function initCallback() {
                        var i, photoHtml;
                        if (!bk.images || bk.images.length === 0) {
                            if (separateNavPanel()) {
                                br.panelMode = "navigation"
                            }
                            errorMessage("No Images Specified in Gallery XML.");
                            return
                        }
                        if (separateNavPanel()) {
                            br.panelMode = "navigation";
                            $("#" + be + "sv-photo-detail").hide();
                            $("#" + be + "sv-photo-navigation").show();
                            if (bk.mobileshowthumbs) {
                                showTopmenuBk();
                                var f = $("#" + be + "sv-go-nav-panel");
                                f.show();
                                $("#" + be + "sv-topmenu-links").width(37);
                                var g = function() {
                                    showThumbnails();
                                    return false
                                };
                                if (isAndroid() || isIpad() || isIphone()) {
                                    f.bind({
                                        touchstart: g
                                    })
                                } else {
                                    f.click(g)
                                }
                            } else {
                                $("#" + be + "sv-go-nav-panel").hide()
                            }
                        }
                        setPanelsScale();
                        calculateMvSize();
                        if (br.displayMode === "embed" && bk.showfullscreenbutton && !isInIframe()) {
                            var h = "";
                            if (isOnRoot(bk.baseurl)) {
                                h = bk.baseurl
                            } else {
                                h = (svCoreURL !== "" && svCoreURL !== "svcore/" ? window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1) : "../");
                                if (bk.baseurl) {
                                    h += bk.baseurl
                                }
                                if (!isEndedWithSlash(h)) {
                                    h += "/"
                                }
                            }
                            if (bk.imagepath) {
                                if (!isOnRoot(bk.imagepath)) {
                                    bk.imagepath = h + bk.imagepath
                                }
                                if (!isEndedWithSlash(bk.imagepath)) {
                                    bk.imagepath += "/"
                                }
                            }
                            if (bk.thumbpath) {
                                if (!isOnRoot(bk.thumbpath)) {
                                    bk.thumbpath = h + bk.thumbpath
                                }
                                if (!isEndedWithSlash(bk.thumbpath)) {
                                    bk.thumbpath += "/"
                                }
                            }
                            var k = bk && bk.galleryurl ? bk.galleryurl : "gallery.xml";
                            var l = bk.preseturl ? bk.preseturl : "";
                            if (!isOnRoot(k)) {
                                k = h + k
                            }
                            if (l && !isOnRoot(l)) {
                                l = h + l
                            }
                            if (l) {
                                l = "&presetURL=" + encodeURIComponent(l)
                            }
                            var m = getAddQueryParam4FS(bk);
                            var n = window.location.href;
                            var o = n.lastIndexOf("/");
                            if (o > 7 || (o > 4 && window.location.href.indexOf("//") < 0)) {
                                n = n.substring(0, o)
                            }
                            if (!isEndedWithSlash(n)) {
                                n += "/"
                            }
                            var p = svCoreURL + "full.html?bg=" + Q.replace(/#/g, "") + "&galleryURL=" + encodeURIComponent(k) + l + "&baseURL=" + (bk.baseurl ? encodeURIComponent(h) : n) + (bk.imagepath ? "&imagePath=" + encodeURIComponent(bk.imagepath) : "") + (bk.thumbpath ? "&thumbPath=" + encodeURIComponent(bk.thumbpath) : "") + m;
                            $("#" + be + "sv-go-fullscreen, #" + be + "sv-nav-go-fullscreen").attr("href", p);
                            $("#" + be + "sv-topmenu-links").width($("#" + be + "sv-topmenu-links").width() + 37);
                            $("#" + be + "sv-nav-topmenu-links").width($("#" + be + "sv-nav-topmenu-links").width() + 37);
                            showTopmenuBk();
                            showTopNavmenuBk();
                            $("#" + be + "sv-go-fullscreen, #" + be + "sv-nav-go-fullscreen, #" + be + "sv-nav-topmenu").show();
                            var q = $("#" + be + "sv-go-fullscreen, #" + be + "sv-nav-go-fullscreen");
                            if (isAndroid() || isIpad() || isIphone()) {
                                if (br.displayMode === "fullscreen") {
                                    q.bind({
                                        touchstart: function(a) {
                                            SV.simpleviewer.saveCurrentPage();
                                            window.location.href = p;
                                            return false
                                        }
                                    })
                                } else {
                                    q.click(function(a) {
                                        SV.simpleviewer.saveCurrentPage();
                                        window.location.href = p;
                                        return false
                                    })
                                }
                            } else {
                                q.click(function(a) {
                                    SV.simpleviewer.saveCurrentPage();
                                    return true
                                })
                            }
                        }
                        if (bk.showopenbutton) {
                            showTopmenuBk();
                            $("#" + be + "sv-topmenu-links").width($("#" + be + "sv-topmenu-links").width() + 37);
                            $("#" + be + "sv-open-window").show()
                        }
                        if (typeof svMobile !== "undefined" && svMobile) {
                            var r = $("#" + be + "sv-go-fullscreen, #" + be + "sv-nav-go-fullscreen");
                            if (document.referrer) {
                                r.attr("href", document.referrer)
                            }
                            var s = function(a) {
                                SV.simpleviewer.saveCurrentPage();
                                if (document.referrer) {
                                    window.location.href = document.referrer;
                                    return false
                                }
                                history.back();
                                return false
                            };
                            if (isAndroid() || isIpad() || isIphone()) {
                                r.bind({
                                    touchstart: s
                                })
                            } else {
                                r.click(s)
                            }
                            if (!$.browser.msie || $.browser.version >= 8) {
                                $("#" + be + "sv-topmenu-links").width($("#" + be + "sv-topmenu-links").width() + 37);
                                $("#" + be + "sv-nav-topmenu-links").width($("#" + be + "sv-nav-topmenu-links").width() + 37)
                            }
                            showTopmenuBk();
                            showTopNavmenuBk();
                            $("#" + be + "sv-go-fullscreen, #" + be + "sv-nav-go-fullscreen, #" + be + "sv-nav-topmenu").show()
                        }
                        if (isSwipable(bk)) {
                            initializeSwipe($)
                        }
                        var t = function() {
                            var a = bo.navListIndex;
                            if (a <= 0) {
                                return false
                            }
                            move2NavListPnl(a, bo.navListIndex - 1);
                            return false
                        };
                        if (isAndroid() || isIpad() || isIphone()) {
                            $("#" + be + "sv-nav-page-prev").bind({
                                touchstart: t
                            })
                        } else {
                            $("#" + be + "sv-nav-page-prev").click(t)
                        }
                        var u = function() {
                            var a = bo.navListIndex;
                            if (a >= bo.totalPage - 1) {
                                return false
                            }
                            move2NavListPnl(a, bo.navListIndex + 1);
                            return false
                        };
                        if (isAndroid() || isIpad() || isIphone()) {
                            $("#" + be + "sv-nav-page-next").bind({
                                touchstart: u
                            })
                        } else {
                            $("#" + be + "sv-nav-page-next").click(u)
                        }
                        bk.firstimageindex++;
                        var v = window.location.href.split("#");
                        var w = (v.length >= 2) ? parseInt(v[1]) : -1;
                        var x = (bc && bk.firstimageindex) ? parseInt(bk.firstimageindex) : 0;
                        if (bc && w >= 1 && w <= bg) {
                            x = w
                        }
                        if (x > bg || x < 0) {
                            x = 0
                        }
                        if (x <= 0 && !bk.mobileshowthumbs) {
                            x = 1
                        }
                        if (bc) {
                            var y = -1;
                            var z = function() {
                                v = window.location.href.split("#");
                                w = (v.length >= 2) ? parseInt(v[1]) : -1;
                                if (!w && w !== 0) {
                                    w = -1
                                }
                                if (w <= 0 || w > bg) {
                                    return
                                }
                                if (y == w) {
                                    return
                                }
                                y = w;
                                $("#" + be + "sv-photo-navigation").hide();
                                $("#" + be + "sv-photo-detail").show();
                                move2Photo(bv - 1, w - 1)
                            };
                            if (isBeforeIeVersion8()) {
                                window.setInterval(z, 800)
                            } else {
                                $(window).bind("hashchange", z)
                            }
                        }
                        var A = true;
                        var B = getCurrentImgIdxFromCookie();
                        var C;
                        if (B) {
                            bv = adjCurrentIndex(B.crntImgIdx);
                            bo.navListIndex = B.crntNavIdx;
                            C = B.thumbnailPageCount;
                            A = B.navPnlVisible;
                            bn.showOverlay = B.showOverlay;
                            if (B.visitedImages) {
                                var D = B.visitedImages.split(",");
                                var E, j;
                                for (j = 0; j < D.length; j++) {
                                    E = parseInt(D[j]);
                                    if (E < 0 || E >= bk.images.length) {
                                        continue
                                    }
                                    if (bk.images[E]) {
                                        bk.images[E].visited = true
                                    }
                                }
                            }
                        } else {
                            bv = 1;
                            bo.navListIndex = 0;
                            if (x > 0) {
                                bv = x;
                                A = false
                            }
                            C = bo.thumbCountPerPage
                        }
                        if (A === false) {
                            $("#" + be + "sv-photo-navigation").hide();
                            $("#" + be + "sv-photo-detail").show()
                        }
                        bk.images[bv - 1].visited = true;
                        if (C === bo.thumbCountPerPage) {
                            populatePhotoList(bo.navListIndex)
                        } else {
                            populatePhotoListByImageIndex(bv - 1)
                        }
                        populatePhotoFrame(bv - 1);
                        setCaptionLinkColorAndUnderline(bv - 1);
                        showOverlayControls(bn.showOverlay);
                        if (bc && !getStub().svMobileComplete && typeof(svMobileComplete) != "undefined") {
                            getStub().svMobileComplete = svMobileComplete
                        }
                        if (bc && typeof(getStub().svMobileComplete) === "function") {
                            if (isBeforeIeVersion8()) {
                                window.setTimeout(function() {
                                    getStub().svMobileComplete()
                                }, 100)
                            } else {
                                getStub().svMobileComplete()
                            }
                        }
                        var F = bo.navListIndex;
                        bo.navListIndex = -1;
                        setNavControls(F, bv - 1);
                        if (supportWebkitAnim()) {
                            initializePhotoFrameObjs()
                        }
                        if (isSwipable(bk)) {
                            var G = getSlideDuration();
                            var H = bw;
                            var I = bn.width;
                            var J = $("#" + be + "sv-next-photo, #" + be + "sv-prev-photo");
                            J.detectFlicks({
                                axis: "x",
                                threshold: 5,
                                flickMove: function(d) {
                                    var a = bv - 1;
                                    var b = document.getElementById(be + "sv-photo-" + (a - 1));
                                    var c = document.getElementById(be + "sv-photo-" + a);
                                    var e = document.getElementById(be + "sv-photo-" + (a + 1));
                                    onSwiping(d, b, c, e)
                                },
                                flickEvent: function(d) {
                                    var a = bv - 1;
                                    var b = document.getElementById(be + "sv-photo-" + (a - 1));
                                    var c = document.getElementById(be + "sv-photo-" + a);
                                    var e = document.getElementById(be + "sv-photo-" + (a + 1));
                                    G.d = getDurationWithSwipeSpeed(d, bo.width);
                                    afterSwiping(a, G, d, b, c, e)
                                },
                                clickEvent: function() {
                                    if (!useClickableOverlay()) {
                                        return
                                    }
                                    toggleOverlay();
                                    showOverlayControlsAnim(bn.showOverlay)
                                }
                            });
                            setVerticalScroll(br.displayMode, J)
                        } else {
                            if (!useClickableOverlay()) {
                                $("#" + be + "sv-next-photo, #" + be + "sv-prev-photo, #" + be + "sv-topmenu").hover(function() {
                                    bn.showOverlay = true;
                                    setOverlay(bn.showOverlay)
                                }, function() {
                                    bn.showOverlay = false;
                                    setOverlay(bn.showOverlay)
                                })
                            }
                        }
                        $("#" + be + "sv-open-window").attr("href", bk.images[bv - 1].imageFullURL).attr("target", bk.images[bv - 1].linkTarget);
                        if (!bk.mobileshowcaption) {
                            $("#" + be + "sv-photos .sv-photo .sv-caption").hide()
                        }
                        if (useClickableOverlay()) {
                            $("#" + be + "sv-prev-photo span").bind({
                                touchstart: function(a) {
                                    if (bv > 1) {
                                        bh.prevImage()
                                    }
                                    a.preventDefault()
                                }
                            });
                            $("#" + be + "sv-next-photo span").bind({
                                touchstart: function(a) {
                                    if (bk.images.length > bv) {
                                        bh.nextImage()
                                    }
                                    a.preventDefault()
                                }
                            })
                        } else {
                            $("#" + be + "sv-prev-photo").click(function(a) {
                                if (bv > 1) {
                                    bh.prevImage()
                                }
                                a.preventDefault()
                            });
                            $("#" + be + "sv-next-photo").click(function(a) {
                                if (bk.images.length > bv) {
                                    bh.nextImage()
                                }
                                a.preventDefault()
                            })
                        }
                        $(window).bind("resize", resizeViewer);
                        if ((isIpad() || isIphone()) && $("meta#sv-meta").length <= 0) {
                            window.onorientationchange = resizeViewer
                        }
                        window.setTimeout(hideUrlBar.AfterIni, 1000);
                        window.setInterval(checkForResize, 1000)
                    }
                },
                error: function(a, b, c) {
                    if (separateNavPanel()) {
                        br.panelMode = "navigation"
                    }
                    if (navigator.userAgent.indexOf("Chrome") > -1 && (window.location.href.indexOf("http://") === -1 && window.location.href.indexOf("https://") === -1)) {
                        errorMessage("SimpleViewer does not display locally in Google Chrome.")
                    } else {
                        errorMessage("Gallery XML Not Found.")
                    }
                }
            })
        },
        saveCrntPg: function() {
            setCurrentImgIdxCookie(bv)
        },
        flickrApi: (function() {
            var g;
            var h = 1;
            var j = 0;
            var k = "https://api.flickr.com/services/rest/?method=";
            var l = "&api_key=b40dc56c795c0103c6170731e6271e04";
            var m = {
                FLICKR_SEARCH: "flickr.photos.search",
                FLICKR_INTERESTINGNESS: "flickr.interestingness.getList",
                FLICKR_SET: "flickr.photosets.getPhotos",
                FLICKR_GROUP: "flickr.groups.pools.getPhotos",
                FLICKR_FIND_USER: "flickr.people.findByUsername",
                FLICKR_PHOTO_INFO: "flickr.photos.getInfo",
                FLICKR_PEOPLE_FIND: "flickr.people.findByUsername"
            };

            function getFlickrBaseUrl(a) {
                return k + m[a] + l
            }

            function getFlickrSearchUrl(a) {
                return getFlickrBaseUrl("FLICKR_SEARCH") + (bk.flickrtags ? "&tags=" + bk.flickrtags : "") + (bk.flickruserid ? "&user_id=" + bk.flickruserid : "") + "&page=" + h + "&per_page=" + a + "&sort=" + bk.flickrsort.toLowerCase() + "&tag_mode=" + bk.flickrtagmode.toLowerCase() + (bk.flickrextraparams ? "&" + bk.flickrextraparams.replace(/,/g, "&") : "") + "&media=photos&extras=url_sq,url_m,url_l,url_o,original_format&format=json&jsoncallback=?"
            }

            function getFlickrSetUrl(a) {
                return getFlickrBaseUrl("FLICKR_SET") + "&photoset_id=" + bk.flickrsetid + (bk.flickrtags ? "&tags=" + bk.flickrtags : "") + "&page=" + h + "&per_page=" + a + "&tag_mode=" + bk.flickrtagmode.toLowerCase() + "&media=photos&extras=url_sq,url_m,url_l,url_o,original_format&format=json&jsoncallback=?"
            }

            function getFlickrGroupUrl(a) {
                return getFlickrBaseUrl("FLICKR_GROUP") + "&group_id=" + bk.flickrgroupid + (bk.flickrtags ? "&tags=" + bk.flickrtags : "") + "&page=" + h + "&per_page=" + a + "&tag_mode=" + bk.flickrtagmode.toLowerCase() + "&extras=url_sq,url_m,url_l,url_o,original_format&format=json&jsoncallback=?"
            }

            function getFlickrInterestingnessUrl(a) {
                return getFlickrBaseUrl("FLICKR_INTERESTINGNESS") + "&page=" + h + "&per_page=" + a + "&extras=url_sq, url_m, url_l,url_o,original_format&format=json&jsoncallback=?"
            }

            function getFlickrPeopleFindUrl() {
                return getFlickrBaseUrl("FLICKR_PEOPLE_FIND") + "&username=" + bk.flickrusername + "&format=json&jsoncallback=?"
            }

            function getFlickrUrl(a) {
                if (!bc) {
                    if (bk.flickrtags || bk.flickrusername) {
                        return getFlickrSearchUrl(a)
                    } else {
                        return getFlickrInterestingnessUrl(a)
                    }
                }
                if (bk.flickrsetid) {
                    return getFlickrSetUrl(a)
                } else {
                    if (bk.flickrgroupid) {
                        return getFlickrGroupUrl(a)
                    } else {
                        if (bk.flickruserid) {
                            return getFlickrSearchUrl(a)
                        } else {
                            if (bk.flickrusername) {
                                return getFlickrSearchUrl(a)
                            } else {
                                if (bk.flickrtags) {
                                    return getFlickrSearchUrl(a)
                                } else {
                                    return getFlickrInterestingnessUrl(a)
                                }
                            }
                        }
                    }
                }
            }

            function getPhotoPageUrl(a, b) {
                return "https://www.flickr.com/photos/" + a + "/" + b
            }

            function getThumbUrl(a, b, c, d) {
                return "https://farm" + a + ".static.flickr.com/" + b + "/" + d + "_" + c + "_s.jpg"
            }

            function getMediumUrl(a, b, c, d) {
                return "https://farm" + a + ".static.flickr.com/" + b + "/" + d + "_" + c + ".jpg"
            }

            function getLargeUrl(a, b, c, d) {
                return "https://farm" + a + ".static.flickr.com/" + b + "/" + d + "_" + c + "_b.jpg"
            }

            function getOriginalUrl(a, b, c, d) {
                return "https://farm" + a + ".static.flickr.com/" + b + "/" + d + "_" + c + "_o.jpg"
            }
            g = {
                getUserId: function(d) {
                    var e = getFlickrPeopleFindUrl();
                    $.ajax({
                        url: e,
                        dataType: "json",
                        success: function(a) {
                            if (a.stat === "ok") {
                                bk.flickruserid = a.user.id;
                                if (d) {
                                    d()
                                }
                            } else {
                                errorMessage("Cannot load from Flickr.")
                            }
                        },
                        error: function(a, b, c) {
                            errorMessage("Cannot load from Flickr.")
                        }
                    })
                },
                getPhotos: function(d) {
                    var e = (bc ? parseInt(bq.flickrimagecount) : bf.maxItemCount);
                    var f = getFlickrUrl(e);
                    $.ajax({
                        url: f,
                        dataType: "json",
                        success: function(a) {
                            if (a.photos) {
                                bg = Math.min(a.photos.total, e);
                                j = a.photos.pages
                            } else {
                                if (a.photoset) {
                                    bg = Math.min(a.photoset.total, e);
                                    j = a.photoset.pages
                                }
                            }
                            if (a.stat === "ok") {
                                if (bc || bk.flickrtags || bk.flickrusername) {
                                    g.parseFlickrResponse(a)
                                } else {
                                    bk.images = g.parseFlickrResponse4Reg(a)
                                }
                                if (d) {
                                    d()
                                }
                            } else {
                                errorMessage("Cannot load from Flickr.")
                            }
                        },
                        error: function(a, b, c) {
                            errorMessage("Cannot load from Flickr.")
                        }
                    })
                },
                nextPage: function() {
                    if (h < j) {
                        h += 1;
                        return true
                    }
                    return false
                },
                prevPage: function() {
                    if (h > 1) {
                        h -= 1
                    }
                },
                parseFlickrResponse4Reg: function(a) {
                    var b, i, items, item;
                    b = a.photos.photo;
                    items = [];
                    if (bg > b.length) {
                        bg = b.length
                    }
                    for (i = 0; i < b.length; i += 1) {
                        item = {
                            thumbURL: getThumbUrl(b[i].farm, b[i].server, b[i].secret, b[i].id),
                            imageFullURL: getPhotoPageUrl(b[i].owner, b[i].id),
                            linkTarget: "_blank",
                            caption: b[i].title || "",
                            description: "",
                            preloadedImage: null,
                            preloaded: false
                        };
                        if (b[i].url_l) {
                            item.imageURL = b[i].url_l
                        } else {
                            item.imageURL = b[i].url_m
                        }
                        items.push(item)
                    }
                    return items
                },
                parseFlickrResponse: function(a) {
                    var b, i, item;
                    var c = 0;
                    var d = "";
                    if (a.photos) {
                        b = a.photos.photo
                    } else {
                        if (a.photoset) {
                            b = a.photoset.photo;
                            d = a.photoset.owner
                        }
                    }
                    for (i = 0; i < b.length; i += 1) {
                        if (bk.images.length < bg) {
                            item = {
                                thumbURL: getThumbUrl(b[i].farm, b[i].server, b[i].secret, b[i].id),
                                imageFullURL: getPhotoPageUrl(b[i].owner || d, b[i].id),
                                linkTarget: "_blank",
                                caption: b[i].title || "",
                                description: "",
                                preloadedImage: null,
                                preloaded: false
                            };
                            if (bk.flickrimagesize.toLowerCase() === "original" && b[i].url_o) {
                                item.imageURL = b[i].url_o
                            } else {
                                if ((bk.flickrimagesize.toLowerCase() === "large" || bk.flickrimagesize.toLowerCase() === "original") && b[i].url_l) {
                                    item.imageURL = b[i].url_l
                                } else {
                                    item.imageURL = b[i].url_m
                                }
                            }
                            bk.images.push(item);
                            c += 1
                        }
                    }
                }
            };
            return g
        })(),
        refreshPhoto: function() {
            var a = adjCurrentIndex(bv) - 1;
            $("#" + be + "sv-photo-" + bv + ".loading").addClass("loading");
            bk.images[a].preloadSet = false;
            bk.images[a].preloaded = false;
            delete bk.images[a].preloadedImage;
            bk.images[a].preloadedImage = null;
            preloadImages(a, 1);
            return false
        },
        nextImage: function(a) {
            if (br.panelMode === "navigation" && $("#" + be + "sv-photo-navigation:visible").length > 0) {
                var b = (bv >= bk.images.length) ? 0 : bv;
                showPhoto(b);
                return
            }
            if (bv + 1 > bk.images.length) {
                return
            }
            bv += 1;
            bv = adjCurrentIndex(bv);
            move2Photo(bv - 2, bv - 1)
        },
        prevImage: function(a) {
            if (br.panelMode === "navigation" && $("#" + be + "sv-photo-navigation:visible").length > 0) {
                var b = (bv <= 1) ? bk.images.length - 1 : bv - 2;
                showPhoto(b);
                return
            }
            if (bv <= 1) {
                return
            }
            bv -= 1;
            bv = adjCurrentIndex(bv);
            move2Photo(bv, bv - 1)
        },
        debug: function(a) {
            eval(a)
        },
        showSvGlry: function(a) {
            if (a === false) {
                svContainer.hide()
            } else {
                svContainer.show()
            }
        },
        showImage: function(a) {
            if (a < 0) {
                a = 0
            }
            if (a >= bg) {
                a = bg - 1
            }
            showPhoto(a)
        },
        resetGallerySize: function(a, b) {
            bp = formatSize(a);
            svHeight = formatSize(b);
            setContainerSize(bp, svHeight, svContainer);
            setDisplayMode(bp, svHeight);
            bm.width = getContainerWidth(svContainer);
            bm.height = getContainerHeight(svContainer);
            bm.widthRatio = getContainerWidthRatio2Win(svContainer);
            bm.heightRatio = getContainerHeightRatio2Win(svContainer);
            resizeViewer()
        },
        downloadImage: function() {
            var a = $("#" + be + "sv-open-window").attr("href");
            if ($.browser.msie) {
                document.execCommand("SaveAs", true, a);
                return
            }
            window.open(a, "", "")
        },
        openImageLinkURL: function() {
            var a = $("#" + be + "sv-open-window").attr("href");
            window.open(a, "", "")
        },
        dispose: function() {
            svContainer.html("")
        },
        showThumbPage: function(a) {
            if (a >= bo.totalPage) {
                a = bo.totalPage - 1
            }
            if (a < 0) {
                a = 0
            }
            showThumbnails();
            move2NavListPnl(bo.navListIndex, a)
        },
        getImageInfo: function() {
            var a = bv - 1;
            var b = bk.images[a];
            return {
                imageURL: b.imageURL,
                thumbURL: b.thumbURL,
                caption: b.description,
                linkURL: b.imageFullURL,
                linkTarget: b.linkTarget
            }
        },
        getGalleryInfo: function() {
            return {
                imageCount: bg,
                thumbPageCount: bo.totalPage,
                thumbPageSize: bo.thumbCountPerPage
            }
        },
        getThumbPageIndex: function() {
            return bo.navListIndex
        },
        getImageIndex: function() {
            return bv - 1
        },
        ispv: bc
    };
    return bh
};

function initializeSwipe(a) {
    a.fn.detectFlicks = function(b) {
        var f;
        var h = "left2right",
            i = "right2left",
            e = "up2down",
            d = "down2up";
        var c = {
            direction: "",
            maxMove: 0,
            isFlick: false
        };
        var g = {
            threshold: 5,
            axis: "x",
            flickEvent: function() {
                return true
            },
            flickMove: function() {
                return true
            }
        };
        b = a.extend(g, b);
        c.touchStart = function(k) {
            var j = a(k.target);
            this.isFlick = false;
            this.maxMove = 0;
            this.startX = event.targetTouches[0].clientX;
            this.startY = event.targetTouches[0].clientY;
            if (b.axis === "y") {
                j.bind("touchmove", c.touchMoveY)
            } else {
                j.bind("touchmove", c.touchMoveX)
            }
            c.direction = "";
            j.bind("touchend", c.touchEnd);
            f = new Date()
        };
        c.touchMoveX = function(k) {
            event.preventDefault();
            this.movedX = event.targetTouches[0].clientX;
            var j = Math.abs(Math.abs(this.movedX) - Math.abs(this.startX));
            if (j > this.maxMove) {
                this.maxMove = j
            }
            if (j > b.threshold) {
                this.isFlick = true;
                if (this.movedX > this.startX) {
                    c.direction = h;
                    c.moveDistance = this.movedX - this.startX
                } else {
                    c.direction = i;
                    c.moveDistance = this.startX - this.movedX
                }
                b.flickMove({
                    direction: c.direction,
                    distance: c.moveDistance
                })
            }
        };
        c.touchMoveY = function(l) {
            event.preventDefault();
            this.movedY = event.targetTouches[0].clientY;
            var j = Math.abs(Math.abs(this.movedY) - Math.abs(this.startY));
            var k = Math.abs(Math.abs(event.targetTouches[0].clientX) - Math.abs(this.startX));
            if (j > b.threshold && j > 1.6 * k) {
                this.isFlick = true;
                if (this.movedY > this.startY) {
                    c.direction = e;
                    c.moveDistance = j
                } else {
                    c.direction = d;
                    c.moveDistance = j
                }
                b.flickMove({
                    direction: c.direction,
                    distance: c.moveDistance
                })
            }
        };
        c.touchEnd = function(m) {
            var l = a(m.target);
            if (this.isFlick) {
                var j = new Date();
                var k = j.valueOf() - f.valueOf();
                b.flickEvent({
                    direction: c.direction,
                    distance: c.moveDistance,
                    timerValue: k
                })
            } else {
                if (b.clickEvent && this.maxMove < b.threshold) {
                    b.clickEvent()
                }
            }
            l.unbind("touchmove touchend")
        };
        obj = a(this);
        obj.bind("touchstart", c.touchStart);
        return c
    }
};