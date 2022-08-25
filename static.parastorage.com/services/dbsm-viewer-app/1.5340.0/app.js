/*! For license information please see app.js.LICENSE.txt */ ! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("_"));
    else if ("function" == typeof define && define.amd) define(["_"], t);
    else {
        var r = "object" == typeof exports ? t(require("_")) : t(e._);
        for (var n in r)("object" == typeof exports ? exports : e)[n] = r[n]
    }
}("undefined" != typeof self ? self : this, (function(e) {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 103)
    }([function(t, r) {
        t.exports = e
    }, function(e, t, r) {
        "use strict";

        function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        r.d(t, "f", (function() {
            return o
        })), r.d(t, "a", (function() {
            return a
        })), r.d(t, "m", (function() {
            return i
        })), r.d(t, "h", (function() {
            return s
        })), r.d(t, "j", (function() {
            return c
        })), r.d(t, "i", (function() {
            return l
        })), r.d(t, "l", (function() {
            return u
        })), r.d(t, "b", (function() {
            return d.a
        })), r.d(t, "k", (function() {
            return d.e
        })), r.d(t, "c", (function() {
            return d.c
        })), r.d(t, "n", (function() {
            return d.f
        })), r.d(t, "d", (function() {
            return d.d
        })), r.d(t, "r", (function() {
            return E
        })), r.d(t, "g", (function() {
            return j
        })), r.d(t, "p", (function() {
            return k
        })), r.d(t, "o", (function() {
            return F
        })), r.d(t, "q", (function() {
            return U
        })), r.d(t, "e", (function() {
            return W
        }));
        class o extends Error {
            static withMessage(e) {
                return class extends(this) {
                    constructor() {
                        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                        super(e, ...r)
                    }
                }
            }
            static with(e) {
                let {
                    message: t,
                    options: r
                } = e;
                return class extends(this) {
                    constructor(e) {
                        super(t || e instanceof String && e, { ...r,
                            ...e instanceof Object ? e : {}
                        })
                    }
                }
            }
            constructor(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "DataBindingError";
                super(e, t);
                const {
                    cause: n,
                    ...o
                } = t || {};
                this.name = r, this.options = o, this.cause || (this.cause = n)
            }
            toString() {
                return this.cause ? "".concat(super.toString(), "\nCaused by ").concat(this.cause.toString()) : super.toString()
            }
        }
        n(o, "scopes", {
            USER_SCOPE: "userCodeZone",
            APPLICATION_SCOPE: "applicationCodeZone",
            SERVER_SCOPE: "wixDataCodeZone"
        });
        class a extends o {
            constructor(e, t) {
                super(e, t, "AppError"), this.scope = o.scopes.APPLICATION_SCOPE
            }
        }
        class i extends o {
            constructor(e, t) {
                super(e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "UserError"), this.scope = o.scopes.USER_SCOPE
            }
        }
        class s extends i {
            constructor(e, t) {
                const {
                    code: r,
                    ...n
                } = t;
                super(e, n, "DatasetError"), this.code = r
            }
        }
        class c extends i {
            constructor(e, t) {
                super(e, t, "ServerValidationError")
            }
        }
        n(c, "codes", ["WD_SITE_IN_TEMPLATE_MODE", "WD_PERMISSION_DENIED", "WD_COLLECTION_DELETED", "WD_VALIDATION_FAILED"]);
        class l extends o {
            constructor(e, t) {
                const {
                    code: r,
                    ...n
                } = t;
                super(e, n, "ServerError"), this.scope = o.scopes.SERVER_SCOPE, this.code = r
            }
        }
        class u extends o {
            constructor(e) {
                super("Async operation error wasn't handled", e, "UnhandledPromiseRejection")
            }
        }
        var d = r(10),
            p = r(9),
            f = r(20),
            h = r(5),
            m = r(8),
            g = r(3),
            y = r(35),
            v = r(2);
        const {
            READ_WRITE: w,
            READ: b
        } = m, E = (e, t, r, n, o) => {
            if (n) return;
            const a = Object(v.b)(e);
            if (!a) return;
            const i = Object(v.f)(e),
                s = !!Object(v.n)(e),
                {
                    logger: c,
                    platform: {
                        settings: {
                            env: {
                                editor: l
                            }
                        }
                    }
                } = h.b;
            s && [w, b].includes(i) && t.find((e => {
                let {
                    role: t,
                    config: r
                } = e;
                return ((e, t) => [g.m, g.q].includes(e) || t && t.properties && Object.keys(t.properties).length > 0)(t, r)
            })) && c.log(new W({
                id: l ? 153 : 152,
                collectionId: a,
                datasetId: o,
                datasetType: r,
                datasetMode: i
            })), Object(y.a)(Object(v.f)(e), t) && c.log(new W({
                id: l ? 157 : 156,
                collectionId: a,
                datasetId: o,
                datasetType: r,
                datasetMode: i
            }))
        };

        function I(e, t) {
            T(e, t), t.add(e)
        }

        function O(e, t, r) {
            T(e, t), t.set(e, r)
        }

        function T(e, t) {
            if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }

        function R(e, t) {
            return function(e, t) {
                return t.get ? t.get.call(e) : t.value
            }(e, C(e, t, "get"))
        }

        function _(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
            return r
        }

        function C(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
            return t.get(e)
        }
        var S = new WeakMap,
            D = new WeakMap,
            A = new WeakSet,
            P = new WeakSet,
            x = new WeakSet;
        class j {
            constructor(e, t) {
                var r;
                I(this, x), I(this, P), I(this, A), O(this, S, {
                        writable: !0,
                        value: void 0
                    }), O(this, D, {
                        writable: !0,
                        value: new p.c([
                            [d.a, e => {
                                let {
                                    mode: t,
                                    env: r
                                } = e;
                                return t.csr && !r.dev
                            }],
                            [d.f, e => {
                                let {
                                    mode: t,
                                    env: r
                                } = e;
                                return t.verbose && r.preview
                            }]
                        ])
                    }), r = e,
                    function(e, t, r) {
                        if (t.set) t.set.call(e, r);
                        else {
                            if (!t.writable) throw new TypeError("attempted to set read only private field");
                            t.value = r
                        }
                    }(this, C(this, S, "set"), r), _(this, x, L).call(this, t)
            }
            log(e) {
                if (_(this, P, M).call(this, e) && R(this, S).log(e, new d.b(e.cause || e)), _(this, A, N).call(this, e)) return R(this, S).log(e)
            }
            logError(e, t, r) {
                this.log(e instanceof o ? e : new a(t, {
                    cause: e,
                    ...r
                }))
            }
        }

        function N(e) {
            return (R(this, D).find(((t, r) => e instanceof r)) || (() => !0))(h.b.platform.settings)
        }

        function M(e) {
            return e instanceof o && !(e instanceof i) && R(this, D).get(d.a)(h.b.platform.settings)
        }

        function L(e) {
            e.addEventListener("unhandledrejection", (e => {
                e.reason instanceof o && (e.preventDefault(), R(this, S).log(new u({
                    cause: e.reason
                })))
            }))
        }
        const k = e => (t, r) => Object(p.f)(t, (t => e.log(new r({
                cause: t
            })))),
            F = e => (t, r) => Object(p.f)((function() {
                for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                const i = t(...o);
                return e.log(new r({
                    data: {
                        args: o,
                        result: i
                    }
                })), i
            }), (t => {
                throw e.log(new r({
                    data: {
                        exception: t
                    },
                    level: "error"
                })), t
            })),
            U = e => (t, r) => function() {
                for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                if (r.startsWith("on")) return e.log(new d.f(d.f.types.DS_API.REGISTERED, {
                    methodName: r
                })), t(...o);
                if (e.log(new d.f(d.f.types.DS_API.CALLED, {
                        methodName: r,
                        args: o
                    })), f.c.has(r)) {
                    const t = f.c.get(r);
                    e.log(new d.f(d.f.types.DS_API.DEPRECATED, {
                        methodName: r,
                        replacementMethodName: t
                    }))
                }
                return new p.e(t(...o)).then((t => (e.log(new d.f(d.f.types.DS_API.SUCCED, {
                    methodName: r,
                    result: t
                })), t)))
            };
        class W {
            constructor(e) {
                let {
                    id: t,
                    collectionId: r,
                    datasetId: n,
                    datasetType: o,
                    datasetMode: a
                } = e;
                const {
                    platform: {
                        location: {
                            pageId: i,
                            pageUrl: s
                        },
                        settings: {
                            sessionId: c,
                            env: l
                        }
                    }
                } = h.b;
                return new d.a({
                    id: t,
                    collectionId: r,
                    datasetId: n,
                    datasetType: o,
                    datasetMode: a,
                    viewMode: l.name,
                    pageId: i,
                    pageUrl: s,
                    sessionId: l.live && c
                })
            }
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return V
        })), r.d(t, "d", (function() {
            return G
        })), r.d(t, "g", (function() {
            return B
        })), r.d(t, "e", (function() {
            return q
        })), r.d(t, "f", (function() {
            return z
        })), r.d(t, "h", (function() {
            return $
        })), r.d(t, "i", (function() {
            return H
        })), r.d(t, "j", (function() {
            return Y
        })), r.d(t, "l", (function() {
            return X
        })), r.d(t, "m", (function() {
            return K
        })), r.d(t, "k", (function() {
            return Z
        })), r.d(t, "c", (function() {
            return oe
        })), r.d(t, "n", (function() {
            return ae
        })), r.d(t, "o", (function() {
            return ie
        })), r.d(t, "p", (function() {
            return se
        })), r.d(t, "q", (function() {
            return ce
        })), r.d(t, "r", (function() {
            return le
        })), r.d(t, "s", (function() {
            return ue
        })), r.d(t, "C", (function() {
            return de
        })), r.d(t, "t", (function() {
            return pe
        })), r.d(t, "u", (function() {
            return fe
        })), r.d(t, "v", (function() {
            return he
        })), r.d(t, "w", (function() {
            return me
        })), r.d(t, "x", (function() {
            return ge
        })), r.d(t, "y", (function() {
            return ye
        })), r.d(t, "z", (function() {
            return ve
        })), r.d(t, "A", (function() {
            return we
        })), r.d(t, "B", (function() {
            return be
        }));
        var n = r(29),
            o = r(0),
            a = r(4),
            i = r(23),
            s = r(6),
            c = r(19),
            l = r(14),
            u = r(35),
            d = r(27);
        const p = e => {
                let {
                    error: t,
                    payload: r
                } = e;
                return t ? a.Result.Error(r) : a.Result.Ok(r)
            },
            f = {
                currentRecord: {
                    index: void 0,
                    data: void 0,
                    fieldsToUpdate: void 0,
                    updateSource: void 0
                },
                lastSavedRecord: {
                    index: void 0,
                    data: void 0
                },
                desiredIndex: void 0,
                refreshCurrentRecord: !1,
                removeCurrentRecord: !1,
                newRecordIndex: null,
                refreshCurrentView: !1,
                refreshController: !1,
                revertChanges: !1,
                saveRecord: !1,
                defaultRecord: void 0,
                isForm: void 0,
                page: {
                    numPagesToShow: 1,
                    offset: 0,
                    size: i.pageSize
                },
                schema: void 0
            },
            h = e => ((e, t) => Object(o.inRange)(e, v(t).offset, v(t).offset + v(t).size))(w(e), e),
            m = (e, t, r, n) => {
                const o = { ...e,
                    currentRecord: {
                        index: t,
                        data: r,
                        updateSource: n
                    },
                    desiredIndex: t,
                    refreshCurrentRecord: !1,
                    refreshController: !1
                };
                return h(o) ? o : { ...o,
                    page: { ...o.page,
                        offset: Math.floor(o.currentRecord.index / o.page.size) * o.page.size,
                        numPagesToShow: 1
                    }
                }
            },
            g = e => e.page.size,
            y = e => e.currentRecord.data,
            v = e => e.page,
            w = e => e.currentRecord.index;
        var b = {
                reducer: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case s.a.SET_CURRENT_RECORD:
                            {
                                const {
                                    recordIndex: r,
                                    record: n,
                                    updateSource: o
                                } = t;
                                return m(e, r, n, o)
                            }
                        case s.a.NEW_RECORD:
                            return { ...e,
                                newRecordIndex: t.atIndex
                            };
                        case s.a.NEW_RECORD_RESULT:
                            return p(t).fold((() => ({ ...e,
                                newRecordIndex: null
                            })), (t => ({ ...m(e, e.newRecordIndex, t),
                                newRecordIndex: null
                            })));
                        case s.a.UPDATE_FIELDS:
                            {
                                const {
                                    fieldsToUpdate: r,
                                    updateSource: n
                                } = t;
                                return { ...e,
                                    currentRecord: { ...e.currentRecord,
                                        fieldsToUpdate: r,
                                        updateSource: n
                                    }
                                }
                            }
                        case s.a.GO_TO_INDEX:
                            return { ...e,
                                desiredIndex: t.index
                            };
                        case s.a.GET_RECORD_BY_INDEX_RESULT:
                            return p(t).fold((() => ({ ...e,
                                desiredIndex: e.currentRecord.index,
                                refreshCurrentRecord: !1,
                                refreshController: !1
                            })), (t => t.matchWith({
                                Record: t => {
                                    let {
                                        index: r,
                                        record: n
                                    } = t;
                                    return m(e, r, n)
                                },
                                InvalidIndex: () => ({ ...e,
                                    desiredIndex: e.currentRecord.index,
                                    refreshCurrentRecord: !1
                                }),
                                NoRecord: () => m(e, null, null)
                            })));
                        case s.a.REFRESH_CURRENT_RECORD:
                            return { ...e,
                                refreshCurrentRecord: !0
                            };
                        case s.a.REMOVE_CURRENT_RECORD:
                            return { ...e,
                                removeCurrentRecord: !0
                            };
                        case s.a.REMOVE_CURRENT_RECORD_RESULT:
                            return p(t).fold((() => ({ ...e,
                                removeCurrentRecord: !1
                            })), (() => ({ ...e,
                                removeCurrentRecord: !1,
                                refreshCurrentRecord: !0
                            })));
                        case s.a.REFRESH_CURRENT_VIEW:
                            return { ...e,
                                refreshCurrentView: !0
                            };
                        case s.a.CURRENT_VIEW_UPDATED:
                            return { ...e,
                                refreshCurrentView: !1
                            };
                        case s.a.REVERT_CHANGES:
                            return { ...e,
                                revertChanges: !0
                            };
                        case s.a.RECORD_REVERTED:
                            return { ...e,
                                revertChanges: !1
                            };
                        case s.a.SET_DEFAULT_RECORD:
                            {
                                const {
                                    record: r
                                } = t;
                                return { ...e,
                                    defaultRecord: r
                                }
                            }
                        case c.a.actionTypes.INIT:
                            {
                                const {
                                    datasetConfig: r,
                                    connections: n
                                } = t,
                                o = d.a.getPageSize(r),
                                a = d.a.getReadWriteType(r);
                                return { ...e,
                                    isForm: Object(u.a)(a, n),
                                    page: { ...e.page,
                                        size: o || e.page.size
                                    }
                                }
                            }
                        case c.a.actionTypes.SET_PAGINATION_DATA:
                            {
                                const r = { ...e,
                                    page: { ...e.page,
                                        ...t.paginationData
                                    }
                                };
                                return h(r) ? r : { ...r,
                                    desiredIndex: r.page.offset
                                }
                            }
                        case s.a.GO_TO_NEXT_PAGE:
                            {
                                const t = v(e),
                                    r = g(e),
                                    n = t.offset + r,
                                    o = { ...e,
                                        page: { ...e.page,
                                            numPagesToShow: 1,
                                            offset: n
                                        }
                                    };
                                return h(o) ? o : { ...o,
                                    desiredIndex: o.page.offset
                                }
                            }
                        case s.a.GO_TO_PREVIOUS_PAGE:
                            {
                                const t = v(e),
                                    r = Math.max(0, t.offset - t.size),
                                    n = { ...e,
                                        page: { ...e.page,
                                            numPagesToShow: 1,
                                            offset: r
                                        }
                                    };
                                return h(n) ? n : { ...n,
                                    desiredIndex: n.page.offset
                                }
                            }
                        case s.a.LOAD_PAGE:
                            {
                                const {
                                    size: r
                                } = v(e),
                                n = { ...e,
                                    page: { ...e.page,
                                        numPagesToShow: 1,
                                        offset: r * (t.pageNumber - 1)
                                    }
                                };
                                return h(n) ? n : { ...n,
                                    desiredIndex: n.page.offset
                                }
                            }
                        case s.a.INCREMENT_NUM_PAGES_TO_SHOW:
                            return { ...e,
                                page: { ...e.page,
                                    numPagesToShow: e.page.numPagesToShow + 1
                                }
                            };
                        case s.a.SAVE_RECORD:
                            return { ...e,
                                saveRecord: !0,
                                lastSavedRecord: {
                                    index: void 0,
                                    data: void 0
                                }
                            };
                        case s.a.SAVE_RECORD_RESULT:
                            return p(t).fold((() => ({ ...e,
                                saveRecord: !1
                            })), (t => ({ ...e,
                                saveRecord: !1,
                                lastSavedRecord: {
                                    index: e.currentRecord.index,
                                    data: t
                                }
                            })));
                        case l.a.SET_FILTER:
                        case l.a.SET_SORT:
                        case s.a.REFRESH:
                            return { ...e,
                                refreshController: !0
                            };
                        default:
                            return e
                    }
                },
                getPaginationData: v,
                hasCurrentRecord: e => !!y(e),
                selectDefaultDraft: e => ({ ...e.defaultRecord
                }),
                selectCurrentRecord: y,
                selectCurrentRecordIndex: w,
                selectDesiredRecordIndex: e => e.desiredIndex,
                selectFieldsToUpdate: e => e.currentRecord.fieldsToUpdate,
                selectLastSavedRecord: e => e.lastSavedRecord.data,
                selectLastSavedRecordIndex: e => e.lastSavedRecord.index,
                selectRefreshCurrentRecord: e => e.refreshCurrentRecord,
                selectRemoveCurrentRecord: e => e.removeCurrentRecord,
                selectRefreshController: e => e.refreshController,
                selectRefreshCurrentView: e => e.refreshCurrentView,
                selectRevertChanges: e => e.revertChanges,
                selectSaveRecord: e => e.saveRecord,
                selectUpdateSource: e => e.currentRecord.updateSource,
                selectNewRecordIndex: e => e.newRecordIndex,
                isDuringSave: e => e.saveRecord,
                isForm: e => e.isForm
            },
            E = r(8),
            I = r(3),
            O = r(13);
        const {
            WRITE: T
        } = E, {
            ROUTER_DATASET: R
        } = O, _ = ["collectionName", "readWriteType", "includes", "cursor"], C = ["filter", "sort"], S = e => Object(o.pick)(e, _), D = e => Object(o.pick)(e, C), A = e => {
            let {
                datasetConfig: t,
                connections: r,
                isScoped: n,
                datasetType: o
            } = e;
            const a = o === R,
                i = r.some((e => {
                    let {
                        role: t
                    } = e;
                    return t === I.f
                })),
                s = n,
                c = !n,
                l = t.readWriteType === T;
            return {
                datasetIsRouter: a,
                datasetIsMaster: i,
                datasetIsVirtual: s,
                datasetIsReal: c,
                datasetIsDeferred: Boolean(t.deferred) && !(s || i || a || l),
                dynamicPageNavComponentsShouldBeLinked: a && c
            }
        }, P = (e, t) => ({ ...e,
            transientData: { ...e.transientData,
                ...t
            }
        }), x = {
            canonicalData: S(i),
            canonicalCalculatedData: {},
            transientData: {
                isDatasetReady: !1,
                ...D(i)
            }
        };
        var j = {
                reducer: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case c.a.actionTypes.INIT:
                            {
                                const {
                                    datasetConfig: r,
                                    connections: n,
                                    isScoped: o,
                                    datasetType: a
                                } = t;
                                return { ...e,
                                    canonicalData: { ...e.canonicalData,
                                        ...S(t.datasetConfig)
                                    },
                                    canonicalCalculatedData: A({
                                        datasetConfig: r,
                                        connections: n,
                                        isScoped: o,
                                        datasetType: a
                                    }),
                                    transientData: { ...e.transientData,
                                        ...D(t.datasetConfig)
                                    }
                                }
                            }
                        case l.a.SET_FILTER:
                            {
                                const {
                                    filter: r
                                } = t;
                                return P(e, {
                                    filter: r
                                })
                            }
                        case l.a.SET_SORT:
                            {
                                const {
                                    sort: r
                                } = t;
                                return P(e, {
                                    sort: r
                                })
                            }
                        case l.a.SET_IS_DATASET_READY:
                            {
                                const {
                                    isDatasetReady: r
                                } = t;
                                return P(e, {
                                    isDatasetReady: r
                                })
                            }
                        case l.a.SET_FIXED_FILTER_ITEM:
                            {
                                const {
                                    fixedFilterItem: r
                                } = t;
                                return P(e, {
                                    fixedFilterItem: r
                                })
                            }
                        default:
                            return e
                    }
                },
                isWriteOnly: e => Object(o.get)(e, ["canonicalData", "readWriteType"]) === E.WRITE,
                isReadOnly: e => Object(o.get)(e, ["canonicalData", "readWriteType"]) === E.READ,
                getReadWriteMode: e => Object(o.get)(e, ["canonicalData", "readWriteType"]),
                isDatasetReady: e => Object(o.get)(e, ["transientData", "isDatasetReady"]),
                isDatasetConfigured: e => !!Object(o.get)(e, ["canonicalData", "collectionName"]),
                isCursorPagingRequired: e => !!Object(o.get)(e, ["canonicalData", "cursor"]),
                isDatasetRouter: e => {
                    let {
                        canonicalCalculatedData: {
                            datasetIsRouter: t
                        }
                    } = e;
                    return t
                },
                isDatasetMaster: e => {
                    let {
                        canonicalCalculatedData: {
                            datasetIsMaster: t
                        }
                    } = e;
                    return t
                },
                isDatasetVirtual: e => {
                    let {
                        canonicalCalculatedData: {
                            datasetIsVirtual: t
                        }
                    } = e;
                    return t
                },
                isDatasetReal: e => {
                    let {
                        canonicalCalculatedData: {
                            datasetIsReal: t
                        }
                    } = e;
                    return t
                },
                isDatasetDeferred: e => {
                    let {
                        canonicalCalculatedData: {
                            datasetIsDeferred: t
                        }
                    } = e;
                    return t
                },
                shouldLinkDynamicPageNavComponents: e => {
                    let {
                        canonicalCalculatedData: {
                            dynamicPageNavComponentsShouldBeLinked: t
                        }
                    } = e;
                    return t
                },
                getFixedFilterItem: e => Object(o.get)(e, ["transientData", "fixedFilterItem"]),
                getFilter: e => Object(o.get)(e, ["transientData", "filter"]),
                getSort: e => Object(o.get)(e, ["transientData", "sort"]),
                getIncludes: e => Object(o.get)(e, ["canonicalData", "includes"]) || [],
                getCollectionName: e => Object(o.get)(e, ["canonicalData", "collectionName"])
            },
            N = r(17);
        const M = Object(a.union)("DynamicPageUrlLoadState", {
            Empty() {},
            Loading() {},
            Loaded: e => {
                if (!e) throw new Error("url must exist");
                return {
                    url: e
                }
            }
        }, {
            hasUrl: e => () => e.matchWith({
                Empty: () => !1,
                Loading: () => !1,
                Loaded: () => !0
            }),
            shouldLoadUrl: e => () => e.matchWith({
                Empty: () => !1,
                Loading: () => !0,
                Loaded: () => !1
            })
        });
        M.fromUrl = e => e ? M.Loaded(e) : M.Empty();
        var L = M;
        const {
            fromUrl: k
        } = M, F = {
            nextDynamicPageUrl: L.Empty(),
            previousDynamicPageUrl: L.Empty()
        }, U = e => {
            const t = (e => {
                    const t = e.filter((e => !!Object(o.get)(e, "config.events.onClick.action")));
                    return new Set(t.map((e => Object(o.get)(e, "config.events.onClick.action"))))
                })(e),
                r = e => e ? L.Loading() : L.Empty();
            return {
                nextDynamicPageUrl: r(t.has("nextDynamicPage")),
                previousDynamicPageUrl: r(t.has("previousDynamicPage"))
            }
        };
        var W = {
            reducer: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case N.a.INITIALIZE:
                        return { ...e,
                            ...U(t.connections)
                        };
                    case N.a.NEXT_DYNAMIC_PAGE_URL_RESULT:
                        return { ...e,
                            nextDynamicPageUrl: L.fromUrl(t.payload)
                        };
                    case N.a.PREVIOUS_DYNAMIC_PAGE_URL_RESULT:
                        return { ...e,
                            previousDynamicPageUrl: L.fromUrl(t.payload)
                        };
                    default:
                        return e
                }
            },
            selectNextDynamicPageUrl: e => e.nextDynamicPageUrl,
            selectPreviousDynamicPageUrl: e => e.previousDynamicPageUrl
        };
        t.a = Object(n.b)({
            records: b.reducer,
            config: j.reducer,
            dynamicPages: W.reducer
        });
        const V = e => j.getCollectionName(e.config),
            G = e => j.getFilter(e.config),
            B = e => j.getSort(e.config),
            q = e => b.getPaginationData(e.records),
            z = e => j.getReadWriteMode(e.config),
            $ = e => j.isDatasetConfigured(e.config),
            H = e => j.isDatasetReady(e.config),
            Y = e => b.isDuringSave(e.records),
            X = e => j.isReadOnly(e.config),
            K = e => j.isWriteOnly(e.config),
            Z = e => (e => b.hasCurrentRecord(e.records))(e) && !X(e),
            Q = e => j.isDatasetRouter(e.config),
            J = e => j.isDatasetMaster(e.config),
            ee = e => j.isDatasetVirtual(e.config),
            te = e => j.isDatasetReal(e.config),
            re = e => j.isDatasetDeferred(e.config),
            ne = e => j.shouldLinkDynamicPageNavComponents(e.config),
            oe = e => ({
                datasetIsRouter: Q(e),
                datasetIsMaster: J(e),
                datasetIsVirtual: ee(e),
                datasetIsReal: te(e),
                datasetIsDeferred: re(e),
                datasetIsWriteOnly: K(e),
                datasetCollectionName: V(e),
                dynamicPageNavComponentsShouldBeLinked: ne(e)
            }),
            ae = e => b.selectCurrentRecord(e.records),
            ie = e => b.selectCurrentRecordIndex(e.records),
            se = e => b.selectDefaultDraft(e.records),
            ce = e => b.selectDesiredRecordIndex(e.records),
            le = e => b.selectFieldsToUpdate(e.records),
            ue = e => b.selectLastSavedRecord(e.records),
            de = e => b.selectUpdateSource(e.records),
            pe = e => b.selectNewRecordIndex(e.records),
            fe = e => W.selectNextDynamicPageUrl(e.dynamicPages),
            he = e => W.selectPreviousDynamicPageUrl(e.dynamicPages),
            me = e => b.selectRefreshController(e.records),
            ge = e => b.selectRefreshCurrentRecord(e.records),
            ye = e => b.selectRefreshCurrentView(e.records),
            ve = e => b.selectRemoveCurrentRecord(e.records),
            we = e => b.selectRevertChanges(e.records),
            be = e => b.selectSaveRecord(e.records)
    }, function(e, t, r) {
        "use strict";
        r.d(t, "g", (function() {
            return n
        })), r.d(t, "f", (function() {
            return o
        })), r.d(t, "j", (function() {
            return a
        })), r.d(t, "F", (function() {
            return i
        })), r.d(t, "E", (function() {
            return s
        })), r.d(t, "b", (function() {
            return c
        })), r.d(t, "n", (function() {
            return l
        })), r.d(t, "d", (function() {
            return u
        })), r.d(t, "k", (function() {
            return d
        })), r.d(t, "o", (function() {
            return p
        })), r.d(t, "t", (function() {
            return f
        })), r.d(t, "u", (function() {
            return h
        })), r.d(t, "i", (function() {
            return m
        })), r.d(t, "h", (function() {
            return g
        })), r.d(t, "D", (function() {
            return y
        })), r.d(t, "x", (function() {
            return v
        })), r.d(t, "m", (function() {
            return w
        })), r.d(t, "e", (function() {
            return b
        })), r.d(t, "s", (function() {
            return E
        })), r.d(t, "I", (function() {
            return I
        })), r.d(t, "v", (function() {
            return O
        })), r.d(t, "p", (function() {
            return T
        })), r.d(t, "q", (function() {
            return R
        })), r.d(t, "H", (function() {
            return _
        })), r.d(t, "B", (function() {
            return C
        })), r.d(t, "a", (function() {
            return S
        })), r.d(t, "l", (function() {
            return D
        })), r.d(t, "G", (function() {
            return A
        })), r.d(t, "c", (function() {
            return P
        })), r.d(t, "C", (function() {
            return x
        })), r.d(t, "r", (function() {
            return j
        })), r.d(t, "z", (function() {
            return N
        })), r.d(t, "y", (function() {
            return M
        })), r.d(t, "A", (function() {
            return L
        })), r.d(t, "w", (function() {
            return k
        }));
        const n = "detailsRepeaterRole",
            o = "detailsDatasetRole",
            a = "filterInputRole",
            i = "textRole",
            s = "textInputRole",
            c = "siteButtonRole",
            l = "imageButtonRole",
            u = "checkboxRole",
            d = "galleryRole",
            p = "mediaGalleryRole",
            f = "ratingsDisplayRole",
            h = "ratingsInputRole",
            m = "dropdownRole",
            g = "dropdownOptionsRole",
            y = "textAreaRole",
            v = "richTextBoxRole",
            w = "gridRole",
            b = "datepickerRole",
            E = "radioGroupRole",
            I = "uploadButtonRole",
            O = "repeaterRole",
            T = "pageRole",
            R = "paginationRole",
            _ = "toggleSwitchRole",
            C = "sliderRole",
            S = "addressInputRole",
            D = "googleMapRole",
            A = "timePickerRole",
            P = "checkboxGroupRole",
            x = "stylableButtonRole",
            j = "progressBarRole",
            N = "selectionTagsRole",
            M = "selectionTagsOptionsRole",
            L = "signatureInputRole",
            k = "richContentRole"
    }, function(e, t, r) {
        const n = r(81),
            o = r(82),
            a = r(83);
        e.exports = {
            union: n,
            Result: o,
            Maybe: a
        }
    }, function(e, t, r) {
        "use strict";

        function n(e, t) {
            var r = function(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }(e, t);
            return function(e, t) {
                return t.get ? t.get.call(e) : t.value
            }(e, r)
        }
        r.d(t, "a", (function() {
            return a
        }));
        var o = new WeakMap;
        const a = new class {
            constructor() {
                var e, t;
                e = o, t = {
                        writable: !0,
                        value: new Proxy({}, {
                            get(e, t) {
                                if (e[t]) return e[t];
                                throw new ReferenceError("There is no ".concat(t, " in context. Check if the context has been already set"))
                            }
                        })
                    },
                    function(e, t) {
                        if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                    }(this, e), e.set(this, t)
            }
            set(e) {
                Object.entries(e).forEach((e => {
                    let [t, r] = e;
                    return n(this, o)[t] = r
                }))
            }
            get() {
                return n(this, o)
            }
        };
        t.b = a.get()
    }, function(e, t, r) {
        "use strict";
        t.a = {
            SET_CURRENT_RECORD: "SET_CURRENT_RECORD",
            UPDATE_FIELDS: "UPDATE_FIELDS",
            CLEAR_CURRENT_RECORD: "CLEAR_CURRENT_RECORD",
            REFRESH_CURRENT_RECORD: "REFRESH_CURRENT_RECORD",
            REFRESH_CURRENT_VIEW: "REFRESH_CURRENT_VIEW",
            INCREMENT_NUM_PAGES_TO_SHOW: "INCREMENT_NUM_PAGES_TO_SHOW",
            SET_DEFAULT_RECORD: "SET_DEFAULT_RECORD",
            GO_TO_INDEX: "GO_TO_INDEX",
            GO_TO_NEXT_PAGE: "GO_TO_NEXT_PAGE",
            GO_TO_PREVIOUS_PAGE: "GO_TO_PREVIOUS_PAGE",
            LOAD_PAGE: "LOAD_PAGE",
            GET_RECORD_BY_INDEX_RESULT: "GET_RECORD_BY_INDEX_RESULT",
            CURRENT_VIEW_UPDATED: "CURRENT_VIEW_UPDATED",
            REVERT_CHANGES: "REVERT_CHANGES",
            RECORD_REVERTED: "RECORD_REVERTED",
            SAVE_RECORD: "SAVE_RECORD",
            CALL_BEFORE_SAVE_HOOKS_RESULT: "CALL_BEFORE_SAVE_HOOKS_RESULT",
            CHECK_HAS_DRAFT_RESULT: "CHECK_HAS_DRAFT_RESULT",
            ASSERT_VALIDITY_RESULT: "ASSERT_VALIDITY_RESULT",
            SAVE_RECORD_RESULT: "SAVE_RECORD_RESULT",
            SEND_AUTOMATION_EVENT_RESULT: "SEND_AUTOMATION_EVENT_RESULT",
            REMOVE_CURRENT_RECORD: "REMOVE_CURRENT_RECORD",
            REMOVE_CURRENT_RECORD_RESULT: "REMOVE_CURRENT_RECORD_RESULT",
            NEW_RECORD: "NEW_RECORD",
            NEW_RECORD_RESULT: "NEW_RECORD_RESULT",
            REFRESH: "REFRESH"
        }
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r), Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                })
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }),
            o = this && this.__exportStar || function(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o(r(74), t), o(r(75), t), o(r(76), t), o(r(77), t), o(r(45), t), o(r(78), t)
    }, function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "READ_WRITE", (function() {
            return n
        })), r.d(t, "READ", (function() {
            return o
        })), r.d(t, "WRITE", (function() {
            return a
        }));
        const n = "READ_WRITE",
            o = "READ",
            a = "WRITE"
    }, function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return u
        })), r.d(t, "a", (function() {
            return d
        })), r.d(t, "f", (function() {
            return p
        })), r.d(t, "g", (function() {
            return f
        })), r.d(t, "e", (function() {
            return h
        })), r.d(t, "c", (function() {
            return m
        })), r.d(t, "d", (function() {
            return g
        }));
        var n = r(1),
            o = r(5);

        function a(e, t, r) {
            ! function(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(e, t), t.set(e, r)
        }

        function i(e, t) {
            return function(e, t) {
                return t.get ? t.get.call(e) : t.value
            }(e, s(e, t, "get"))
        }

        function s(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
            return t.get(e)
        }
        var c = new WeakMap,
            l = new WeakMap;
        class u {
            constructor(e) {
                var t;
                a(this, c, {
                        writable: !0,
                        value: void 0
                    }), a(this, l, {
                        writable: !0,
                        value: new m
                    }), t = e,
                    function(e, t, r) {
                        if (t.set) t.set.call(e, r);
                        else {
                            if (!t.writable) throw new TypeError("attempted to set read only private field");
                            t.value = r
                        }
                    }(this, s(this, c, "set"), t)
            }
            dispatch(e) {
                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
                return i(this, l).has(e) ? i(this, l).get(e).reduce(((t, a) => [...t, o.b.errorReporting(a, n.a.with({
                    message: "".concat(e, " listener failed"),
                    options: {
                        extra: i(this, c)
                    }
                }))(i(this, c), ...r)]), []) : void 0
            }
            subscribe(e, t) {
                return e.constructor === Object ? Object.entries(e).reduce(((e, t) => {
                    let [r, n] = t;
                    return [...e, this.subscribe(r, n)]
                }), []) : (i(this, l).getOrDefault(e, new g).add(t), () => this.unsubscribe(e, t))
            }
            unsubscribe(e, t) {
                return i(this, l).has(e) && i(this, l).get(e).delete(t)
            }
        }
        class d {
            constructor() {
                const e = {};
                return e.promise = new Promise(((t, r) => {
                    e.resolve = function() {
                        return t(...arguments), e.promise
                    }, e.reject = function() {
                        return r(...arguments), e.promise
                    }
                })), e
            }
        }
        const p = (e, t) => function() {
                for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                try {
                    const r = e(...n);
                    return (null == r ? void 0 : r.catch) instanceof Function ? r.catch((e => t(e, ...n))) : r
                } catch (e) {
                    return t(e, ...n)
                }
            },
            f = e => p((function(t) {
                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                return Promise.resolve(e(t, ...n))
            }), (e => Promise.reject(e)));
        class h {
            constructor(e) {
                return null != e && e.then ? e : {
                    then: t => t(e)
                }
            }
        }
        class m extends Map {
            getOrDefault(e, t) {
                return this.has(e) ? this.get(e) : this.set(e, t).get(e)
            }
            find(e) {
                const [, t] = Array.from(this).find((t => {
                    let [r, n] = t;
                    return e(n, r, this)
                })) || [];
                return t
            }
        }
        class g extends Set {
            reduce(e, t) {
                return Array.from(this).reduce(((t, r, n) => e(t, r, n, this)), t)
            }
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return v
        })), r.d(t, "b", (function() {
            return w
        })), r.d(t, "e", (function() {
            return O
        })), r.d(t, "c", (function() {
            return T
        })), r.d(t, "f", (function() {
            return S
        })), r.d(t, "d", (function() {
            return A
        }));
        var n = r(9),
            o = r(25),
            a = r(32),
            i = r(39),
            s = r.n(i),
            c = r(20),
            l = r(51),
            u = r.n(l);

        function d(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
            return r
        }

        function p(e, t, r) {
            f(e, t), t.set(e, r)
        }

        function f(e, t) {
            if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }

        function h(e, t, r) {
            return function(e, t, r) {
                if (t.set) t.set.call(e, r);
                else {
                    if (!t.writable) throw new TypeError("attempted to set read only private field");
                    t.value = r
                }
            }(e, g(e, t, "set"), r), r
        }

        function m(e, t) {
            return function(e, t) {
                return t.get ? t.get.call(e) : t.value
            }(e, g(e, t, "get"))
        }

        function g(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
            return t.get(e)
        }

        function y(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        class v {
            constructor(e) {
                let {
                    id: t,
                    collectionId: r,
                    datasetId: n,
                    datasetType: i,
                    datasetMode: l,
                    viewMode: u,
                    pageId: d,
                    pageUrl: p,
                    sessionId: f
                } = e;
                y(this, "type", v.types.EVENT), y(this, "event", void 0), this.event = {
                    pageId: d,
                    src: o.BI_SOURCE,
                    ver: s()(Object(a.getAppUrl)(c.b)),
                    app_name: c.b,
                    app_id: c.a,
                    evid: t,
                    ds_id: n,
                    ds_type: i,
                    mode: l,
                    collection_name: r,
                    viewmode: u,
                    page_url: p,
                    ...f ? {
                        vsi: f
                    } : {}
                }
            }
        }
        y(v, "types", {
            EVENT: "event",
            ERROR: "error"
        });
        class w extends v {
            constructor(e) {
                let {
                    message: t,
                    code: r
                } = e;
                super({}), y(this, "type", v.types.ERROR), this.event = {
                    evid: 10,
                    dsc: t,
                    errn: t,
                    errc: r || u.a.ERROR
                }
            }
        }
        var b = new WeakMap,
            E = new WeakMap,
            I = new WeakMap;
        class O {
            constructor(e, t, r) {
                y(this, "onStart", (e => h(this, b, e))), y(this, "onEnd", (e => h(this, E, e))), p(this, b, {
                    writable: !0,
                    value: () => {}
                }), p(this, E, {
                    writable: !0,
                    value: () => {}
                }), p(this, I, {
                    writable: !0,
                    value: {
                        [O.types.TRACE]: e => (m(this, b).call(this), new n.e(e()).then((e => (m(this, E).call(this), e)))),
                        [O.types.START]: () => m(this, b).call(this),
                        [O.types.END]: () => m(this, E).call(this)
                    }
                });
                const {
                    type: o,
                    fn: a
                } = t instanceof Function ? {
                    type: O.types.TRACE,
                    fn: t
                } : {
                    type: t
                };
                this.name = e, this.params = r, this.run = () => m(this, I)[o](a)
            }
        }
        y(O, "types", {
            START: "START",
            END: "END",
            TRACE: "TRACE"
        });
        class T {
            static with(e) {
                let {
                    category: t,
                    message: r,
                    level: n,
                    data: o
                } = e;
                return class extends(this) {
                    constructor(e) {
                        let {
                            category: a = t,
                            message: i = r,
                            level: s = n,
                            data: c
                        } = e;
                        super({
                            category: a,
                            message: i,
                            level: s,
                            data: c || o ? { ...c,
                                ...o
                            } : void 0
                        })
                    }
                }
            }
            constructor(e) {
                let {
                    category: t,
                    message: r,
                    level: n = "info",
                    data: o
                } = e;
                this.event = {
                    category: t,
                    message: r,
                    level: n,
                    data: o
                }
            }
        }
        var R = new WeakMap,
            _ = new WeakMap,
            C = new WeakSet;
        class S {
            static with(e) {
                return class extends(this) {
                    constructor(t) {
                        super(t, { ...e,
                            ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                        })
                    }
                }
            }
            constructor(e, t) {
                var r;
                f(this, r = C), r.add(this), y(this, "messages", []), p(this, R, {
                    writable: !0,
                    value: {
                        [S.types.COMPONENT.BOUND]: e => {
                            let {
                                collectionId: t,
                                description: r
                            } = e;
                            return r ? ["[Dataset - Connected] '".concat(t, "' collection to element '").concat(d(this, C, D).call(this), "':"), r] : ["[Dataset - Connected] '".concat(t, "' collection to element '").concat(d(this, C, D).call(this), "'")]
                        },
                        [S.types.COMPONENT.FILLED]: e => {
                            let {
                                collectionId: t,
                                description: r
                            } = e;
                            return ["[Dataset - Populated] '".concat(t, "' collection into element '").concat(d(this, C, D).call(this), "':"), r]
                        },
                        [S.types.DS_API.CALLED]: e => {
                            let {
                                methodName: t,
                                args: r
                            } = e;
                            return 0 === r.length ? ["[wix-dataset.".concat(t, "] called")] : ["[wix-dataset.".concat(t, "] called with ("), JSON.stringify(r), ")"]
                        },
                        [S.types.DS_API.SUCCED]: e => {
                            let {
                                methodName: t,
                                result: r
                            } = e;
                            return void 0 === r ? ["[wix-dataset.".concat(t, "] returned")] : ["[wix-dataset.".concat(t, "] returned with ("), JSON.stringify(r), ")"]
                        },
                        [S.types.DS_API.DEPRECATED]: e => {
                            let {
                                methodName: t,
                                replacementMethodName: r
                            } = e;
                            const n = r ? "; use [wix-dataset.".concat(r, "] instead") : "";
                            return ["[wix-dataset.".concat(t, "] is deprecated").concat(n)]
                        },
                        [S.types.DS_API.REGISTERED]: e => {
                            let {
                                methodName: t
                            } = e;
                            return ["[".concat(t, " callback registered] on wix-dataset")]
                        },
                        [S.types.DS_API.TRIGGERED]: e => {
                            let {
                                eventName: t,
                                eventArgs: r = []
                            } = e;
                            if (r.length) {
                                const e = r.map((e => e instanceof Error ? e.toString() : e));
                                return ["[".concat(t, " event] triggered on wix-dataset with ("), JSON.stringify(e), ")"]
                            }
                            return ["[".concat(t, " event] triggered on wix-dataset")]
                        }
                    }
                }), p(this, _, {
                    writable: !0,
                    value: {}
                }), h(this, _, t), this.messages = m(this, R)[e](t)
            }
        }

        function D() {
            const {
                component: e,
                parentId: t
            } = m(this, _), r = e.id ? "#".concat(e.id) : e.type;
            return t ? "#".concat(t, ".").concat(r) : r
        }
        y(S, "types", {
            COMPONENT: {
                BOUND: "COMPONENT_BOUND",
                FILLED: "COMPONENT_FILLED"
            },
            DS_API: {
                CALLED: "DS_API_CALLED",
                SUCCED: "DS_API_SUCCED",
                DEPRECATED: "DS_API_DEPRECATED",
                REGISTERED: "DS_API_REGISTERED",
                TRIGGERED: "DS_API_TRIGGERED"
            }
        });
        class A {
            constructor(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
                y(this, "message", void 0), y(this, "level", void 0), this.message = e, this.level = t
            }
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "h", (function() {
            return s
        })), r.d(t, "b", (function() {
            return l
        })), r.d(t, "a", (function() {
            return u
        })), r.d(t, "d", (function() {
            return p
        })), r.d(t, "e", (function() {
            return f
        })), r.d(t, "c", (function() {
            return h
        })), r.d(t, "f", (function() {
            return m
        })), r.d(t, "g", (function() {
            return g
        }));
        var n = r(0),
            o = r(7),
            a = (r(4), r(26));
        const i = e => Object(n.isPlainObject)(e) && Object(n.has)(e, "_id"),
            s = (e, t) => e !== t && i(e) && !i(t) ? e : t,
            c = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                for (const r of e) {
                    const e = t[r._id];
                    t[r._id] = Object(n.mergeWith)(e, r, s)
                }
                return t
            },
            l = e => {
                let {
                    items: t,
                    datasetSize: r,
                    collectionId: n
                } = e;
                return {
                    recordInfosInDatasetOrder: [{
                        itemIds: t.map((e => {
                            let {
                                _id: t
                            } = e;
                            return t
                        })),
                        datasetSize: r,
                        collectionId: n
                    }],
                    recordsByCollectionId: {
                        [n]: c(t, {})
                    }
                }
            },
            u = (e, t) => t.reduce(((t, r, n) => {
                let {
                    items: o,
                    nextCursor: a,
                    totalCount: i,
                    uniqueFieldValues: s,
                    error: l
                } = r;
                if (l) return t.recordInfosInDatasetOrder.push({
                    error: l
                }), t;
                t.recordInfosInDatasetOrder.push({
                    itemIds: o.map((e => {
                        let {
                            _id: t
                        } = e;
                        return t
                    })),
                    totalCount: i,
                    nextCursor: a
                });
                const u = e[n].collectionId,
                    d = t.recordsByCollectionId[u];
                return t.recordsByCollectionId[u] = c(o, d), t.uniqueFieldValuesByCollection[u] = { ...t.uniqueFieldValuesByCollection[u],
                    ...s
                }, t
            }), {
                recordInfosInDatasetOrder: [],
                recordsByCollectionId: {},
                uniqueFieldValuesByCollection: {}
            }),
            d = (e, t) => {
                const r = t.flatMap((e => ["fields", e])).concat("type");
                return Object(n.get)(e, r)
            },
            p = (e, t) => r => {
                const n = r.split(a.FIELD_PATH_SEPARATOR);
                if (((e, t) => t.length >= 2 && d(e, [t[0]]) === o.FieldType.reference)(e, n)) {
                    const [r, ...o] = n, a = e && e.fields[r] ? e.fields[r].referencedCollection : null, i = t && a ? t[a] : null;
                    return d(i, o)
                }
                return d(e, n)
            },
            f = e => e ? Object(n.flow)((e => Object(n.pickBy)(e, (e => {
                let {
                    referencedCollection: t
                } = e;
                return Boolean(t)
            }))), (e => Object(n.map)(e, (e => {
                let {
                    referencedCollection: t
                } = e;
                return t
            }))), n.uniq, (e => e.filter(Boolean)))(e.fields) : [],
            h = (e, t) => null != t && null != t.fields[e] ? t.fields[e].referencedCollection : null,
            m = e => null != e ? e.displayField : null,
            g = e => null != e ? e.maxPageSize : void 0
    }, function(e, t, r) {
        "use strict";
        const n = r(0).mapValues,
            o = r(0).mapKeys,
            {
                Maybe: a
            } = r(4),
            i = {
                AddressInput: {
                    viewerType: ["wixui.AddressInput"],
                    sdkType: "$w.AddressInput"
                },
                Text: {
                    viewerType: ["wysiwyg.viewer.components.WRichText"],
                    sdkType: "$w.Text"
                },
                Image: {
                    viewerType: ["wysiwyg.viewer.components.WPhoto", "wixui.ImageX"],
                    sdkType: "$w.Image"
                },
                TextInput: {
                    viewerType: ["wysiwyg.viewer.components.inputs.TextInput"],
                    sdkType: "$w.TextInput"
                },
                TimePicker: {
                    viewerType: ["wixui.TimePicker"],
                    sdkType: "$w.TimePicker"
                },
                Button: {
                    viewerType: ["wysiwyg.viewer.components.SiteButton"],
                    sdkType: "$w.Button"
                },
                IconButton: {
                    viewerType: ["wysiwyg.common.components.imagebutton.viewer.ImageButton"],
                    sdkType: "$w.IconButton"
                },
                RatingsDisplay: {
                    viewerType: ["wixui.RatingsDisplay"],
                    sdkType: "$w.RatingsDisplay"
                },
                RatingsInput: {
                    viewerType: ["wixui.RatingsInput"],
                    sdkType: "$w.RatingsInput"
                },
                VerticalMenu: {
                    viewerType: ["wysiwyg.common.components.verticalmenu.viewer.VerticalMenu"],
                    sdkType: "$w.VerticalMenu"
                },
                Checkbox: {
                    viewerType: ["wysiwyg.viewer.components.inputs.Checkbox"],
                    sdkType: "$w.Checkbox"
                },
                Gallery: {
                    viewerType: ["wysiwyg.viewer.components.MatrixGallery", "wysiwyg.viewer.components.SliderGallery", "wysiwyg.viewer.components.SlideShowGallery", "wysiwyg.viewer.components.PaginatedGridGallery", "wysiwyg.viewer.components.tpapps.TPAWidget"],
                    sdkType: "$w.Gallery"
                },
                Dropdown: {
                    viewerType: ["wysiwyg.viewer.components.inputs.ComboBoxInput", "wixui.Dropdown"],
                    sdkType: "$w.Dropdown"
                },
                TextBox: {
                    viewerType: ["wysiwyg.viewer.components.inputs.TextAreaInput"],
                    sdkType: "$w.TextBox"
                },
                RichTextBox: {
                    viewerType: ["wixui.RichTextBox"],
                    sdkType: "$w.RichTextBox"
                },
                Table: {
                    viewerType: ["wysiwyg.viewer.components.Grid"],
                    sdkType: "$w.Table"
                },
                DatePicker: {
                    viewerType: ["wysiwyg.viewer.components.inputs.DatePicker"],
                    sdkType: "$w.DatePicker"
                },
                RadioButtonGroup: {
                    viewerType: ["wysiwyg.viewer.components.inputs.RadioGroup"],
                    sdkType: "$w.RadioButtonGroup"
                },
                UploadButton: {
                    viewerType: ["wysiwyg.viewer.components.inputs.UploadButton", "wixui.FileUploaderNew", "wysiwyg.viewer.components.inputs.FileUploader"],
                    sdkType: "$w.UploadButton"
                },
                ClassicSection: {
                    viewerType: ["wysiwyg.viewer.components.ClassicSection"],
                    sdkType: "$w.Section"
                },
                Column: {
                    viewerType: ["wysiwyg.viewer.components.Column"],
                    sdkType: "$w.Column"
                },
                Video: {
                    viewerType: ["wysiwyg.viewer.components.Video"],
                    sdkType: "$w.Video"
                },
                VideoPlayer: {
                    viewerType: ["wixui.VideoPlayer"],
                    sdkType: "$w.VideoPlayer"
                },
                VideoBox: {
                    viewerType: ["wysiwyg.viewer.components.MediaPlayer"],
                    sdkType: "$w.VideoBox"
                },
                MusicPlayer: {
                    viewerType: ["wixui.MusicPlayer"],
                    sdkType: "$w.AudioPlayer"
                },
                Repeater: {
                    viewerType: ["wysiwyg.viewer.components.Repeater"],
                    sdkType: "$w.Repeater"
                },
                Pagination: {
                    viewerType: ["wixui.Pagination"],
                    sdkType: "$w.Pagination"
                },
                Page: {
                    viewerType: ["mobile.core.components.Page"],
                    sdkType: "$w.Page"
                },
                Document: {
                    viewerType: ["fake-document-type"],
                    sdkType: "$w.Document"
                },
                MediaContainer: {
                    viewerType: ["wysiwyg.viewer.components.MediaContainer"],
                    sdkType: "$w.Container"
                },
                StripColumnsContainer: {
                    viewerType: ["wysiwyg.viewer.components.StripColumnsContainer"],
                    sdkType: "$w.ColumnStrip"
                },
                ToggleSwitch: {
                    viewerType: ["wixui.ToggleSwitch"],
                    sdkType: "$w.Switch"
                },
                Slider: {
                    viewerType: ["wixui.Slider"],
                    sdkType: "$w.Slider"
                },
                StylableButton: {
                    viewerType: ["wixui.StylableButton"],
                    sdkType: "$w.StylableButton"
                },
                GoogleMap: {
                    viewerType: ["wysiwyg.viewer.components.GoogleMap"],
                    sdkType: "$w.GoogleMap"
                },
                CheckboxGroup: {
                    viewerType: ["wysiwyg.viewer.components.inputs.CheckboxGroup"],
                    sdkType: "$w.CheckboxGroup"
                },
                ProgressBar: {
                    viewerType: ["wixui.ProgressBar"],
                    sdkType: "$w.ProgressBar"
                },
                VectorImage: {
                    viewerType: ["wysiwyg.viewer.components.VectorImage", "wysiwyg.viewer.components.svgshape.SvgShape"],
                    sdkType: "$w.VectorImage"
                },
                SelectionTags: {
                    viewerType: ["wixui.SelectionTagsList"],
                    sdkType: "$w.SelectionTags"
                },
                Section: {
                    viewerType: ["responsive.components.Section"],
                    sdkType: "$w.Section"
                },
                SignatureInput: {
                    viewerType: ["wixui.SignatureInput"],
                    sdkType: "$w.SignatureInput"
                },
                RefComponent: {
                    viewerType: ["wysiwyg.viewer.components.RefComponent"],
                    sdkType: "$w.RefComponent"
                },
                RichContent: {
                    viewerType: ["wysiwyg.viewer.components.tpapps.TPAWidget"],
                    sdkType: "$w.RichContent"
                }
            };
        e.exports = n(i, (e => {
            let {
                sdkType: t
            } = e;
            return t
        })), e.exports.getSdkTypeByViewerType = e => a.fromNullable(Object.keys(i).filter((t => i[t].viewerType.indexOf(e) >= 0)).map((e => i[e].sdkType))[0]), e.exports.getViewerTypeBySdkType = e => a.fromNullable(Object.keys(i).filter((t => i[t].sdkType === e)).map((e => i[e].viewerType[0]))[0]), e.exports.getViewerTypes = Object.keys(i).reduce(((e, t) => (e.concat(i[t].viewerType), e)), []), e.exports.viewerTypes = Object.keys(i).map((e => i[e].viewerType)).reduce(((e, t) => e.concat(t)), []).reduce(((e, t) => (e[t.split(".").reverse()[0]] = t, e)), {}), e.exports.sdkTypes = Object.keys(i).map((e => i[e].sdkType)), e.exports.isSdkTypeSupported = e => !!o(i, (e => {
            let {
                sdkType: t
            } = e;
            return t
        }))[e]
    }, function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "DATASET", (function() {
            return n
        })), r.d(t, "ROUTER_DATASET", (function() {
            return o
        }));
        const n = "dataset",
            o = "router_dataset"
    }, function(e, t, r) {
        "use strict";
        t.a = {
            SET_FILTER: "SET_FILTER",
            SET_SORT: "SET_SORT",
            SET_PAGING_MODE: "SET_PAGING_MODE",
            SET_IS_DATASET_READY: "SET_IS_DATASET_READY",
            SET_FIXED_FILTER_ITEM: "SET_FIXED_FILTER_ITEM"
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return o
        })), r.d(t, "a", (function() {
            return a
        }));
        var n = function(e, t) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }, n(e, t)
        };

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

            function r() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }
        var a = function() {
            return a = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, a.apply(this, arguments)
        };
        Object.create, Object.create
    }, function(e, t, r) {
        "use strict";
        var n = r(0);
        t.a = (e, t) => Object(n.get)(e, t)
    }, function(e, t, r) {
        "use strict";
        t.a = {
            NEXT_DYNAMIC_PAGE_URL_RESULT: "NEXT_DYNAMIC_PAGE_URL_RESULT",
            PREVIOUS_DYNAMIC_PAGE_URL_RESULT: "PREVIOUS_DYNAMIC_PAGE_URL_RESULT",
            INITIALIZE: "INITIALIZE"
        }
    }, function(e, t) {
        var r = Object.prototype.toString;
        e.exports = function(e) {
            var t = typeof e;
            return "undefined" === t ? "undefined" : null === e ? "null" : !0 === e || !1 === e || e instanceof Boolean ? "boolean" : "string" === t || e instanceof String ? "string" : "number" === t || e instanceof Number ? "number" : "function" === t || e instanceof Function ? void 0 !== e.constructor.name && "Generator" === e.constructor.name.slice(0, 9) ? "generatorfunction" : "function" : void 0 !== Array.isArray && Array.isArray(e) ? "array" : e instanceof RegExp ? "regexp" : e instanceof Date ? "date" : "[object RegExp]" === (t = r.call(e)) ? "regexp" : "[object Date]" === t ? "date" : "[object Arguments]" === t ? "arguments" : "[object Error]" === t ? "error" : "[object Promise]" === t ? "promise" : function(e) {
                return e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }(e) ? "buffer" : "[object Set]" === t ? "set" : "[object WeakSet]" === t ? "weakset" : "[object Map]" === t ? "map" : "[object WeakMap]" === t ? "weakmap" : "[object Symbol]" === t ? "symbol" : "[object Map Iterator]" === t ? "mapiterator" : "[object Set Iterator]" === t ? "setiterator" : "[object String Iterator]" === t ? "stringiterator" : "[object Array Iterator]" === t ? "arrayiterator" : "[object Int8Array]" === t ? "int8array" : "[object Uint8Array]" === t ? "uint8array" : "[object Uint8ClampedArray]" === t ? "uint8clampedarray" : "[object Int16Array]" === t ? "int16array" : "[object Uint16Array]" === t ? "uint16array" : "[object Int32Array]" === t ? "int32array" : "[object Uint32Array]" === t ? "uint32array" : "[object Float32Array]" === t ? "float32array" : "[object Float64Array]" === t ? "float64array" : "object"
        }
    }, function(e, t, r) {
        "use strict";
        const n = {
            INIT: "INIT",
            SET_PAGINATION_DATA: "SET_PAGINATION_DATA"
        };
        t.a = {
            actionTypes: n,
            init: e => {
                let {
                    controllerConfig: t = {},
                    connections: r = [],
                    isScoped: o = !1,
                    datasetType: a
                } = e;
                return {
                    type: n.INIT,
                    datasetConfig: t.dataset || {},
                    connections: r,
                    isScoped: o,
                    datasetType: a
                }
            },
            setPaginationData: e => ({
                type: n.SET_PAGINATION_DATA,
                paginationData: e
            })
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return o
        })), r.d(t, "c", (function() {
            return a
        }));
        var n = r(24);
        r.d(t, "a", (function() {
            return n.DATA_BINDING
        }));
        const o = "dbsm-viewer-app",
            a = new Map([
                ["new", "add"]
            ])
    }, function(e, t, r) {
        "use strict";
        const n = r(0).mapValues,
            o = r(0).mapKeys,
            {
                Maybe: a
            } = r(4),
            i = {
                AddressInput: {
                    viewerType: ["wixui.AddressInput"],
                    sdkType: "$w.AddressInput"
                },
                Text: {
                    viewerType: ["wysiwyg.viewer.components.WRichText"],
                    sdkType: "$w.Text"
                },
                Image: {
                    viewerType: ["wysiwyg.viewer.components.WPhoto", "wixui.ImageX"],
                    sdkType: "$w.Image"
                },
                TextInput: {
                    viewerType: ["wysiwyg.viewer.components.inputs.TextInput"],
                    sdkType: "$w.TextInput"
                },
                TimePicker: {
                    viewerType: ["wixui.TimePicker"],
                    sdkType: "$w.TimePicker"
                },
                Button: {
                    viewerType: ["wysiwyg.viewer.components.SiteButton"],
                    sdkType: "$w.Button"
                },
                IconButton: {
                    viewerType: ["wysiwyg.common.components.imagebutton.viewer.ImageButton"],
                    sdkType: "$w.IconButton"
                },
                RatingsDisplay: {
                    viewerType: ["wixui.RatingsDisplay"],
                    sdkType: "$w.RatingsDisplay"
                },
                RatingsInput: {
                    viewerType: ["wixui.RatingsInput"],
                    sdkType: "$w.RatingsInput"
                },
                VerticalMenu: {
                    viewerType: ["wysiwyg.common.components.verticalmenu.viewer.VerticalMenu"],
                    sdkType: "$w.VerticalMenu"
                },
                Checkbox: {
                    viewerType: ["wysiwyg.viewer.components.inputs.Checkbox"],
                    sdkType: "$w.Checkbox"
                },
                Gallery: {
                    viewerType: ["wysiwyg.viewer.components.MatrixGallery", "wysiwyg.viewer.components.SliderGallery", "wysiwyg.viewer.components.SlideShowGallery", "wysiwyg.viewer.components.PaginatedGridGallery", "wysiwyg.viewer.components.tpapps.TPAWidget"],
                    sdkType: "$w.Gallery"
                },
                Dropdown: {
                    viewerType: ["wysiwyg.viewer.components.inputs.ComboBoxInput", "wixui.Dropdown"],
                    sdkType: "$w.Dropdown"
                },
                TextBox: {
                    viewerType: ["wysiwyg.viewer.components.inputs.TextAreaInput"],
                    sdkType: "$w.TextBox"
                },
                RichTextBox: {
                    viewerType: ["wixui.RichTextBox"],
                    sdkType: "$w.RichTextBox"
                },
                Table: {
                    viewerType: ["wysiwyg.viewer.components.Grid"],
                    sdkType: "$w.Table"
                },
                DatePicker: {
                    viewerType: ["wysiwyg.viewer.components.inputs.DatePicker"],
                    sdkType: "$w.DatePicker"
                },
                RadioButtonGroup: {
                    viewerType: ["wysiwyg.viewer.components.inputs.RadioGroup"],
                    sdkType: "$w.RadioButtonGroup"
                },
                UploadButton: {
                    viewerType: ["wysiwyg.viewer.components.inputs.UploadButton", "wixui.FileUploaderNew", "wysiwyg.viewer.components.inputs.FileUploader"],
                    sdkType: "$w.UploadButton"
                },
                ClassicSection: {
                    viewerType: ["wysiwyg.viewer.components.ClassicSection"],
                    sdkType: "$w.Section"
                },
                Column: {
                    viewerType: ["wysiwyg.viewer.components.Column"],
                    sdkType: "$w.Column"
                },
                Video: {
                    viewerType: ["wysiwyg.viewer.components.Video"],
                    sdkType: "$w.Video"
                },
                VideoPlayer: {
                    viewerType: ["wixui.VideoPlayer"],
                    sdkType: "$w.VideoPlayer"
                },
                VideoBox: {
                    viewerType: ["wysiwyg.viewer.components.MediaPlayer"],
                    sdkType: "$w.VideoBox"
                },
                MusicPlayer: {
                    viewerType: ["wixui.MusicPlayer"],
                    sdkType: "$w.AudioPlayer"
                },
                Repeater: {
                    viewerType: ["wysiwyg.viewer.components.Repeater"],
                    sdkType: "$w.Repeater"
                },
                Pagination: {
                    viewerType: ["wixui.Pagination"],
                    sdkType: "$w.Pagination"
                },
                Page: {
                    viewerType: ["mobile.core.components.Page"],
                    sdkType: "$w.Page"
                },
                Document: {
                    viewerType: ["fake-document-type"],
                    sdkType: "$w.Document"
                },
                MediaContainer: {
                    viewerType: ["wysiwyg.viewer.components.MediaContainer"],
                    sdkType: "$w.Container"
                },
                StripColumnsContainer: {
                    viewerType: ["wysiwyg.viewer.components.StripColumnsContainer"],
                    sdkType: "$w.ColumnStrip"
                },
                ToggleSwitch: {
                    viewerType: ["wixui.ToggleSwitch"],
                    sdkType: "$w.Switch"
                },
                Slider: {
                    viewerType: ["wixui.Slider"],
                    sdkType: "$w.Slider"
                },
                StylableButton: {
                    viewerType: ["wixui.StylableButton"],
                    sdkType: "$w.StylableButton"
                },
                GoogleMap: {
                    viewerType: ["wysiwyg.viewer.components.GoogleMap"],
                    sdkType: "$w.GoogleMap"
                },
                CheckboxGroup: {
                    viewerType: ["wysiwyg.viewer.components.inputs.CheckboxGroup"],
                    sdkType: "$w.CheckboxGroup"
                },
                ProgressBar: {
                    viewerType: ["wixui.ProgressBar"],
                    sdkType: "$w.ProgressBar"
                },
                VectorImage: {
                    viewerType: ["wysiwyg.viewer.components.VectorImage", "wysiwyg.viewer.components.svgshape.SvgShape"],
                    sdkType: "$w.VectorImage"
                },
                SelectionTags: {
                    viewerType: ["wixui.SelectionTagsList"],
                    sdkType: "$w.SelectionTags"
                },
                Section: {
                    viewerType: ["responsive.components.Section"],
                    sdkType: "$w.Section"
                },
                SignatureInput: {
                    viewerType: ["wixui.SignatureInput"],
                    sdkType: "$w.SignatureInput"
                },
                RefComponent: {
                    viewerType: ["wysiwyg.viewer.components.RefComponent"],
                    sdkType: "$w.RefComponent"
                },
                RichContent: {
                    viewerType: ["wysiwyg.viewer.components.tpapps.TPAWidget"],
                    sdkType: "$w.RichContent"
                }
            };
        e.exports = n(i, (e => {
            let {
                sdkType: t
            } = e;
            return t
        })), e.exports.getSdkTypeByViewerType = e => a.fromNullable(Object.keys(i).filter((t => i[t].viewerType.indexOf(e) >= 0)).map((e => i[e].sdkType))[0]), e.exports.getViewerTypeBySdkType = e => a.fromNullable(Object.keys(i).filter((t => i[t].sdkType === e)).map((e => i[e].viewerType[0]))[0]), e.exports.getViewerTypes = Object.keys(i).reduce(((e, t) => (e.concat(i[t].viewerType), e)), []), e.exports.viewerTypes = Object.keys(i).map((e => i[e].viewerType)).reduce(((e, t) => e.concat(t)), []).reduce(((e, t) => (e[t.split(".").reverse()[0]] = t, e)), {}), e.exports.sdkTypes = Object.keys(i).map((e => i[e].sdkType)), e.exports.isSdkTypeSupported = e => !!o(i, (e => {
            let {
                sdkType: t
            } = e;
            return t
        }))[e]
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.generatePackageWebMethodUrl = t.exceptionToWebMethodPayload = t.resultToWebMethodPayload = t.convertFromCustomFormat = t.convertToCustomFormat = void 0;
        var n = r(48);
        Object.defineProperty(t, "convertToCustomFormat", {
            enumerable: !0,
            get: function() {
                return n.convertToCustomFormat
            }
        }), Object.defineProperty(t, "convertFromCustomFormat", {
            enumerable: !0,
            get: function() {
                return n.convertFromCustomFormat
            }
        });
        var o = r(89);
        Object.defineProperty(t, "resultToWebMethodPayload", {
            enumerable: !0,
            get: function() {
                return o.resultToWebMethodPayload
            }
        }), Object.defineProperty(t, "exceptionToWebMethodPayload", {
            enumerable: !0,
            get: function() {
                return o.exceptionToWebMethodPayload
            }
        }), Object.defineProperty(t, "generatePackageWebMethodUrl", {
            enumerable: !0,
            get: function() {
                return o.generatePackageWebMethodUrl
            }
        })
    }, function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "collectionName", (function() {
            return o
        })), r.d(t, "readWriteType", (function() {
            return a
        })), r.d(t, "filter", (function() {
            return i
        })), r.d(t, "sort", (function() {
            return s
        })), r.d(t, "includes", (function() {
            return c
        })), r.d(t, "nested", (function() {
            return l
        })), r.d(t, "pageSize", (function() {
            return u
        })), r.d(t, "deferred", (function() {
            return d
        }));
        var n = r(8);
        const o = null,
            a = n.READ,
            i = null,
            s = null,
            c = null,
            l = [],
            u = 12,
            d = !1
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getAppDependencies = t.WIX_FILE_SHARE = t.RICH_CONTENT = t.WIX_GROUPS = t.WIX_CHALLENGES = t.WIX_FORMS = t.WIX_FAQ = t.WIX_SITE_SEARCH = t.WIX_MUSIC = t.BANDSINTOWN = t.WIX_PORTFOLIO = t.WIX_PRO_GALLERY = t.WIX_PHOTO_ALBUMS = t.WIX_VIDEO = t.WIX_GET_SUBSCRIBERS = t.INSTAGRAM_FEED = t.DEVIANTART_FEED = t.WIX_CHAT = t.WIX_RESTAURANTS_MENUS = t.WIX_RESTAURANTS_ORDERS = t.WIX_RESERVATIONS = t.NOTIFICATIONS = t.META_SITE = t.MEMBERS = t.MEMBERS_AREA = t.WIX_NEW_STORES = t.WIX_STORES = t.WIX_ECOM = t.PRICING_PLANS = t.WIX_FORUM = t.WIX_BOOKINGS = t.WIX_EVENTS = t.WIX_BLOG = t.WIX_HOTELS = t.DASHBOARD_SALES = t.DASHBOARD_SUGGESTIONS = t.DASHBOARD_SETUP = t.BUSINESS_DASHBOARD = t.WIX_CODE_PLATFORM_VISIBILITY = t.WIX_ACCESSIBILITY_WIZARD = t.WIX_CODE_SITE_MONITORING = t.WIX_CODE_SECRETS_MANAGER = t.WIX_CODE_RELEASE_MANAGER = t.CLOUD_DATA_SCHEMA_NOTIFIER = t.OLD_BLOG = t.SITE_MEMBERS = t.DATA_BINDING = t.WIX_CODE_DUPLEXER = t.WIX_CODE_SITE_EXTENSION = t.WIX_CODE = void 0, t.WIX_CODE = "wix-code", t.WIX_CODE_SITE_EXTENSION = "CloudSiteExtension", t.WIX_CODE_DUPLEXER = "af6d536e-0fc6-428b-a7f9-1d8cd6aa3703", t.DATA_BINDING = "dataBinding", t.SITE_MEMBERS = "SiteMembers", t.OLD_BLOG = "79f391eb-7dfc-4adf-be6e-64434c4838d9", t.CLOUD_DATA_SCHEMA_NOTIFIER = "f1fbeff1-05c3-4121-bdb5-75e74b6e9e51", t.WIX_CODE_RELEASE_MANAGER = "8c41f3a6-47f7-40be-ad77-02a72cb2ddb3", t.WIX_CODE_SECRETS_MANAGER = "4b10fcce-732d-4be3-9d46-801d271acda9", t.WIX_CODE_SITE_MONITORING = "675bbcef-18d8-41f5-800e-131ec9e08762", t.WIX_ACCESSIBILITY_WIZARD = "9699c03d-5c19-4a7c-a454-e8109a6e43fc", t.WIX_CODE_PLATFORM_VISIBILITY = "8048f115-449b-4dab-b0e6-e09d5ffc8199", t.BUSINESS_DASHBOARD = "a7597ab5-1ed4-458f-a5c1-5884d5e14281", t.DASHBOARD_SETUP = "0750d046-d599-4cfc-9f6b-e9f4af169aa9", t.DASHBOARD_SUGGESTIONS = "cead4297-02ee-4c0f-ae07-461f4ba71b3b", t.DASHBOARD_SALES = "f95c72b1-84de-48ec-a61b-d96d61315ffe", t.WIX_HOTELS = "135aad86-9125-6074-7346-29dc6a3c9bcf", t.WIX_BLOG = "14bcded7-0066-7c35-14d7-466cb3f09103", t.WIX_EVENTS = "140603ad-af8d-84a5-2c80-a0f60cb47351", t.WIX_BOOKINGS = "13d21c63-b5ec-5912-8397-c3a5ddb27a97", t.WIX_FORUM = "14724f35-6794-cd1a-0244-25fd138f9242", t.PRICING_PLANS = "1522827f-c56c-a5c9-2ac9-00f9e6ae12d3", t.WIX_ECOM = "1380b703-ce81-ff05-f115-39571d94dfcd", t.WIX_STORES = "1380b703-ce81-ff05-f115-39571d94dfcd", t.WIX_NEW_STORES = "215238eb-22a5-4c36-9e7b-e7c08025e04e", t.MEMBERS_AREA = "14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9", t.MEMBERS = "14dbefd2-01b4-fb61-32a7-3abd44da4908", t.META_SITE = "22bef345-3c5b-4c18-b782-74d4085112ff", t.NOTIFICATIONS = "14f25924-5664-31b2-9568-f9c5ed98c9b1", t.WIX_RESERVATIONS = "1475ab65-206b-d79a-856d-fa10bdb479ea", t.WIX_RESTAURANTS_ORDERS = "13e8d036-5516-6104-b456-c8466db39542", t.WIX_RESTAURANTS_MENUS = "13c1402c-27f2-d4ab-7463-ee7c89e07578", t.WIX_CHAT = "14517e1a-3ff0-af98-408e-2bd6953c36a2", t.DEVIANTART_FEED = "7d297b79-baed-46d7-ac58-4bd68dcb70d0", t.INSTAGRAM_FEED = "14635256-b183-1c71-a4d2-f55179b80e8a", t.WIX_GET_SUBSCRIBERS = "1375baa8-8eca-5659-ce9d-455b2009250d", t.WIX_VIDEO = "14409595-f076-4753-8303-9a86f9f71469", t.WIX_PHOTO_ALBUMS = "13ff8629-c1fc-e289-e81f-bc8c8968e9d6", t.WIX_PRO_GALLERY = "14271d6f-ba62-d045-549b-ab972ae1f70e", t.WIX_PORTFOLIO = "d90652a2-f5a1-4c7c-84c4-d4cdcc41f130", t.BANDSINTOWN = "1405ef82-0ee0-65fb-88a1-2f172aa3573c", t.WIX_MUSIC = "13bb5d67-1add-e770-a71f-001277e17c57", t.WIX_SITE_SEARCH = "1484cb44-49cd-5b39-9681-75188ab429de", t.WIX_FAQ = "14c92d28-031e-7910-c9a8-a670011e062d", t.WIX_FORMS = "14ce1214-b278-a7e4-1373-00cebd1bef7c", t.WIX_CHALLENGES = "2936472a-a1ed-4ae5-9f71-614313a9f4e7", t.WIX_GROUPS = "148c2287-c669-d849-d153-463c7486a694", t.RICH_CONTENT = "949cfcc9-2a3f-4a96-bd6c-11d9d82763a4", t.WIX_FILE_SHARE = "1537b24e-29d1-6d8f-b8e1-d6860f2f70b9";
        var r = {};
        t.getAppDependencies = function(e) {
            return r[e] || []
        }
    }, function(e, t, r) {
        "use strict";
        e.exports.BI_ENDPOINT = "platform", e.exports.BI_CM_ENDPOINT = "platform-cm", e.exports.BI_SANTA_EDITOR_ENDPOINT = "editor", e.exports.BI_VIEWER_ENDPOINT = "platform-viewer", e.exports.BI_ERROR_ENDPOINT = "trg", e.exports.BI_SOURCE = 79, e.exports.BI_CM_SOURCE = 83, e.exports.BI_SANTA_EDITOR_SOURCE = 38
    }, function(e, t, r) {
        "use strict";
        const n = r(0).last,
            o = r(0).head,
            a = r(0).includes,
            i = ".",
            s = e => n(e.split(i)),
            c = e => o(e.split(i));
        e.exports.FIELD_PATH_SEPARATOR = i, e.exports.toFieldPath = (e, t) => t ? [t, e].join(i) : e, e.exports.isFieldFromReferencedCollection = e => a(e, i), e.exports.getFieldFromReferencedCollectionName = s, e.exports.getReferenceFieldName = c, e.exports.getFieldFromReferencedCollection = (e, t, r) => {
            const n = c(e),
                o = s(e),
                a = t.fields.find((e => e.name === n)).referencedCollection;
            return r.find((e => e.id === a)).fields.find((e => e.name === o))
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return o
        }));
        var n = r(8);
        const o = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e.readWriteType
        };
        t.a = {
            getCollectionName: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e.collectionName
            },
            getPageSize: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e.pageSize
            },
            isWriteOnly: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e.readWriteType === n.WRITE
            },
            getReadWriteType: o
        }
    }, function(e, t, r) {
        "use strict";
        t.a = e => null == e || "function" != typeof e.toString ? "" : Array.isArray(e) ? e.join(", ") : e.toString()
    }, function(e, t, r) {
        "use strict";
        r.d(t, "c", (function() {
            return I
        })), r.d(t, "b", (function() {
            return T
        })), r.d(t, "a", (function() {
            return C
        }));
        var n, o, a = r(53),
            i = "object" == typeof self && self && self.Object === Object && self,
            s = (a.a || i || Function("return this")()).Symbol,
            c = Object.prototype,
            l = c.hasOwnProperty,
            u = c.toString,
            d = s ? s.toStringTag : void 0,
            p = Object.prototype.toString,
            f = s ? s.toStringTag : void 0,
            h = (n = Object.getPrototypeOf, o = Object, function(e) {
                return n(o(e))
            }),
            m = Function.prototype,
            g = Object.prototype,
            y = m.toString,
            v = g.hasOwnProperty,
            w = y.call(Object),
            b = r(42),
            E = "@@redux/INIT";

        function I(e, t, r) {
            var n;
            if ("function" == typeof t && void 0 === r && (r = t, t = void 0), void 0 !== r) {
                if ("function" != typeof r) throw new Error("Expected the enhancer to be a function.");
                return r(I)(e, t)
            }
            if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
            var o = e,
                a = t,
                i = [],
                s = i,
                c = !1;

            function m() {
                s === i && (s = i.slice())
            }

            function g() {
                return a
            }

            function O(e) {
                if ("function" != typeof e) throw new Error("Expected listener to be a function.");
                var t = !0;
                return m(), s.push(e),
                    function() {
                        if (t) {
                            t = !1, m();
                            var r = s.indexOf(e);
                            s.splice(r, 1)
                        }
                    }
            }

            function T(e) {
                if (! function(e) {
                        if (! function(e) {
                                return null != e && "object" == typeof e
                            }(e) || "[object Object]" != function(e) {
                                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : f && f in Object(e) ? function(e) {
                                    var t = l.call(e, d),
                                        r = e[d];
                                    try {
                                        e[d] = void 0;
                                        var n = !0
                                    } catch (e) {}
                                    var o = u.call(e);
                                    return n && (t ? e[d] = r : delete e[d]), o
                                }(e) : function(e) {
                                    return p.call(e)
                                }(e)
                            }(e)) return !1;
                        var t = h(e);
                        if (null === t) return !0;
                        var r = v.call(t, "constructor") && t.constructor;
                        return "function" == typeof r && r instanceof r && y.call(r) == w
                    }(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (c) throw new Error("Reducers may not dispatch actions.");
                try {
                    c = !0, a = o(a, e)
                } finally {
                    c = !1
                }
                for (var t = i = s, r = 0; r < t.length; r++)(0, t[r])();
                return e
            }
            return T({
                type: E
            }), (n = {
                dispatch: T,
                subscribe: O,
                getState: g,
                replaceReducer: function(e) {
                    if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                    o = e, T({
                        type: E
                    })
                }
            })[b.a] = function() {
                var e, t = O;
                return (e = {
                    subscribe: function(e) {
                        if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");

                        function r() {
                            e.next && e.next(g())
                        }
                        return r(), {
                            unsubscribe: t(r)
                        }
                    }
                })[b.a] = function() {
                    return this
                }, e
            }, n
        }

        function O(e, t) {
            var r = t && t.type;
            return "Given action " + (r && '"' + r.toString() + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
        }

        function T(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                "function" == typeof e[o] && (r[o] = e[o])
            }
            var a = Object.keys(r),
                i = void 0;
            try {
                ! function(e) {
                    Object.keys(e).forEach((function(t) {
                        var r = e[t];
                        if (void 0 === r(void 0, {
                                type: E
                            })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                        if (void 0 === r(void 0, {
                                type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                            })) throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. Don\'t try to handle @@redux/INIT or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                    }))
                }(r)
            } catch (e) {
                i = e
            }
            return function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments[1];
                if (i) throw i;
                for (var n = !1, o = {}, s = 0; s < a.length; s++) {
                    var c = a[s],
                        l = r[c],
                        u = e[c],
                        d = l(u, t);
                    if (void 0 === d) {
                        var p = O(c, t);
                        throw new Error(p)
                    }
                    o[c] = d, n = n || d !== u
                }
                return n ? o : e
            }
        }

        function R() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return 0 === t.length ? function(e) {
                return e
            } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                return function() {
                    return e(t.apply(void 0, arguments))
                }
            }))
        }
        var _ = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };

        function C() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(e) {
                return function(r, n, o) {
                    var a, i = e(r, n, o),
                        s = i.dispatch,
                        c = {
                            getState: i.getState,
                            dispatch: function(e) {
                                return s(e)
                            }
                        };
                    return a = t.map((function(e) {
                        return e(c)
                    })), s = R.apply(void 0, a)(i.dispatch), _({}, i, {
                        dispatch: s
                    })
                }
            }
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return n
        })), r.d(t, "b", (function() {
            return m
        })), r.d(t, "c", (function() {
            return v
        }));
        const n = (e, t) => "".concat(e, ".").concat(t);
        var o = r(7);
        const {
            text: a,
            boolean: i,
            number: s,
            dateTime: c,
            date: l,
            richText: u,
            url: d,
            reference: p,
            stringArray: f
        } = o.FieldType, h = [a, u, i, c, l, p, s, d, f], m = (e, t) => {
            const r = e.type,
                n = h.includes(r),
                o = !!e.systemField,
                a = ["_createdDate", "_updatedDate"].includes(t || e.name);
            return (!o || a) && n
        };
        var g = r(33),
            y = r.n(g);
        const v = e => {
            let {
                httpClient: t
            } = e;
            return {
                reportFormEventToAutomationCreator: () => async e => {
                    let {
                        detailedEventPayload: r,
                        eventUTCTime: n
                    } = e;
                    const o = {
                        eventIdentifier: {
                            eventUniqueId: y.a.v4(),
                            eventType: "form/form/code",
                            sourceUniqueId: "675bbcef-18d8-41f5-800e-131ec9e08762"
                        },
                        eventUTCTime: n,
                        detailedEventPayload: r
                    };
                    await t.post("/_api/action-triggers-server/v1/report-event", o)
                }
            }
        }
    }, function(e, t) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (r = window)
        }
        e.exports = r
    }, function(e, t) {
        const r = () => {
            const e = new Error;
            return e.stack ? e.stack.toString() : ""
        };
        e.exports.getAppUrl = e => {
            const t = r().match(new RegExp("https?://.*?".concat(e, ".*?.js")));
            return t ? t[0] : ""
        }, e.exports.isLocalhost = () => /https?:\/\/localhost/.test(r())
    }, function(e, t, r) {
        var n = r(79),
            o = r(80),
            a = o;
        a.v1 = n, a.v4 = o, e.exports = a
    }, function(e, t, r) {
        "use strict";
        e.exports = (e, t) => t.reduce(((e, t) => e.chain((e => t.map((t => Array.isArray(t) ? e.concat([t]) : e.concat(t)))))), e.of([]))
    }, function(e, t, r) {
        "use strict";
        var n = r(0),
            o = r(8),
            a = r(12),
            i = r(3);
        const s = [{
                type: a.AddressInput,
                role: i.a
            }, {
                type: a.RatingsInput,
                role: i.u
            }, {
                type: a.TextInput,
                role: i.E
            }, {
                type: a.TextBox,
                role: i.D
            }, {
                type: a.RichTextBox,
                role: i.x
            }, {
                type: a.Checkbox,
                role: i.d
            }, {
                type: a.DatePicker,
                role: i.e
            }, {
                type: a.RadioButtonGroup,
                role: i.s
            }, {
                type: a.Dropdown,
                role: i.i
            }, {
                type: a.UploadButton,
                role: i.I
            }, {
                type: a.ToggleSwitch,
                role: i.H
            }, {
                type: a.Slider,
                role: i.B
            }, {
                type: a.TimePicker,
                role: i.G
            }, {
                type: a.CheckboxGroup,
                role: i.c
            }, {
                type: a.SelectionTags,
                role: i.z
            }, {
                type: a.SignatureInput,
                role: i.A
            }],
            c = (s.map((e => e.type)), s.map((e => e.role)));
        t.a = (e, t) => (e => [o.WRITE, o.READ_WRITE].includes(e))(e) && (e => e.some((e => "save" === Object(n.get)(e, "config.events.onClick.action"))))(t) && (e => e.some((e => {
            return t = Object(n.get)(e, "role"), c.includes(t);
            var t
        })))(t)
    }, function(e, t, r) {
        "use strict";
        const n = r(0).isPlainObject,
            o = r(38),
            a = "currentUser";
        e.exports.addResolver = () => ({
            [o]: a
        }), e.exports.shouldResolve = e => n(e) && e[o] === a
    }, function(e, t, r) {
        "use strict";
        const n = r(0).isPlainObject,
            {
                DATA_BINDING: o
            } = r(24),
            a = r(38),
            i = o;
        e.exports.addResolver = e => Object.assign({}, e, {
            [a]: i
        }), e.exports.shouldResolve = e => n(e) && e[a] === i
    }, function(e, t, r) {
        "use strict";
        e.exports = "@resolver"
    }, function(e, t, r) {
        "use strict";
        const n = "unknown",
            o = e => {
                const t = e.split("/"),
                    r = t[t.length - 3],
                    n = t[t.length - 2];
                if (!/^\d+\.\d+\.\d+$/.test(n)) throw Error("Invalid version string ".concat(n));
                return {
                    appName: r,
                    version: n
                }
            };
        e.exports = e => {
            try {
                const {
                    appName: t,
                    version: r
                } = o(e);
                return "".concat(t, "@").concat(r)
            } catch (e) {
                return n
            }
        }, e.exports.getAppVersion = e => {
            try {
                const {
                    version: t
                } = o(e);
                return t
            } catch (e) {
                return n
            }
        }, e.exports.UNKNOWN_VERSION = n
    }, function(e, t, r) {
        "use strict";
        var n = r(93),
            o = r(94),
            a = r(95);

        function i(e, t) {
            return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
        }

        function s(e) {
            return Array.isArray(e) ? e.sort() : "object" == typeof e ? s(Object.keys(e)).sort((function(e, t) {
                return Number(e) - Number(t)
            })).map((function(t) {
                return e[t]
            })) : e
        }

        function c(e) {
            var t = e.indexOf("?");
            return -1 === t ? "" : e.slice(t + 1)
        }

        function l(e, t) {
            var r = function(e) {
                    var t;
                    switch (e.arrayFormat) {
                        case "index":
                            return function(e, r, n) {
                                t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r
                            };
                        case "bracket":
                            return function(e, r, n) {
                                t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                            };
                        default:
                            return function(e, t, r) {
                                void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                            }
                    }
                }(t = o({
                    arrayFormat: "none"
                }, t)),
                n = Object.create(null);
            return "string" != typeof e ? n : (e = e.trim().replace(/^[?#&]/, "")) ? (e.split("&").forEach((function(e) {
                var t = e.replace(/\+/g, " ").split("="),
                    o = t.shift(),
                    i = t.length > 0 ? t.join("=") : void 0;
                i = void 0 === i ? null : a(i), r(a(o), i, n)
            })), Object.keys(n).sort().reduce((function(e, t) {
                var r = n[t];
                return Boolean(r) && "object" == typeof r && !Array.isArray(r) ? e[t] = s(r) : e[t] = r, e
            }), Object.create(null))) : n
        }
        t.extract = c, t.parse = l, t.stringify = function(e, t) {
            !1 === (t = o({
                encode: !0,
                strict: !0,
                arrayFormat: "none"
            }, t)).sort && (t.sort = function() {});
            var r = function(e) {
                switch (e.arrayFormat) {
                    case "index":
                        return function(t, r, n) {
                            return null === r ? [i(t, e), "[", n, "]"].join("") : [i(t, e), "[", i(n, e), "]=", i(r, e)].join("")
                        };
                    case "bracket":
                        return function(t, r) {
                            return null === r ? i(t, e) : [i(t, e), "[]=", i(r, e)].join("")
                        };
                    default:
                        return function(t, r) {
                            return null === r ? i(t, e) : [i(t, e), "=", i(r, e)].join("")
                        }
                }
            }(t);
            return e ? Object.keys(e).sort(t.sort).map((function(n) {
                var o = e[n];
                if (void 0 === o) return "";
                if (null === o) return i(n, t);
                if (Array.isArray(o)) {
                    var a = [];
                    return o.slice().forEach((function(e) {
                        void 0 !== e && a.push(r(n, e, a.length))
                    })), a.join("&")
                }
                return i(n, t) + "=" + i(o, t)
            })).filter((function(e) {
                return e.length > 0
            })).join("&") : ""
        }, t.parseUrl = function(e, t) {
            return {
                url: e.split("?")[0] || "",
                query: l(c(e), t)
            }
        }
    }, function(e, t, r) {
        "use strict";
        (function(t) {
            var n = r(72),
                o = r(73),
                a = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
                i = /[\n\r\t]/g,
                s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                c = /:\d+$/,
                l = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                u = /^[a-zA-Z]:/;

            function d(e) {
                return (e || "").toString().replace(a, "")
            }
            var p = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(e, t) {
                        return m(t.protocol) ? e.replace(/\\/g, "/") : e
                    },
                    ["/", "pathname"],
                    ["@", "auth", 1],
                    [NaN, "host", void 0, 1, 1],
                    [/:(\d*)$/, "port", void 0, 1],
                    [NaN, "hostname", void 0, 1, 1]
                ],
                f = {
                    hash: 1,
                    query: 1
                };

            function h(e) {
                var r, n = ("undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}).location || {},
                    o = {},
                    a = typeof(e = e || n);
                if ("blob:" === e.protocol) o = new y(unescape(e.pathname), {});
                else if ("string" === a)
                    for (r in o = new y(e, {}), f) delete o[r];
                else if ("object" === a) {
                    for (r in e) r in f || (o[r] = e[r]);
                    void 0 === o.slashes && (o.slashes = s.test(e.href))
                }
                return o
            }

            function m(e) {
                return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e
            }

            function g(e, t) {
                e = (e = d(e)).replace(i, ""), t = t || {};
                var r, n = l.exec(e),
                    o = n[1] ? n[1].toLowerCase() : "",
                    a = !!n[2],
                    s = !!n[3],
                    c = 0;
                return a ? s ? (r = n[2] + n[3] + n[4], c = n[2].length + n[3].length) : (r = n[2] + n[4], c = n[2].length) : s ? (r = n[3] + n[4], c = n[3].length) : r = n[4], "file:" === o ? c >= 2 && (r = r.slice(2)) : m(o) ? r = n[4] : o ? a && (r = r.slice(2)) : c >= 2 && m(t.protocol) && (r = n[4]), {
                    protocol: o,
                    slashes: a || m(o),
                    slashesCount: c,
                    rest: r
                }
            }

            function y(e, t, r) {
                if (e = (e = d(e)).replace(i, ""), !(this instanceof y)) return new y(e, t, r);
                var a, s, c, l, f, v, w = p.slice(),
                    b = typeof t,
                    E = this,
                    I = 0;
                for ("object" !== b && "string" !== b && (r = t, t = null), r && "function" != typeof r && (r = o.parse), a = !(s = g(e || "", t = h(t))).protocol && !s.slashes, E.slashes = s.slashes || a && t.slashes, E.protocol = s.protocol || t.protocol || "", e = s.rest, ("file:" === s.protocol && (2 !== s.slashesCount || u.test(e)) || !s.slashes && (s.protocol || s.slashesCount < 2 || !m(E.protocol))) && (w[3] = [/(.*)/, "pathname"]); I < w.length; I++) "function" != typeof(l = w[I]) ? (c = l[0], v = l[1], c != c ? E[v] = e : "string" == typeof c ? ~(f = "@" === c ? e.lastIndexOf(c) : e.indexOf(c)) && ("number" == typeof l[2] ? (E[v] = e.slice(0, f), e = e.slice(f + l[2])) : (E[v] = e.slice(f), e = e.slice(0, f))) : (f = c.exec(e)) && (E[v] = f[1], e = e.slice(0, f.index)), E[v] = E[v] || a && l[3] && t[v] || "", l[4] && (E[v] = E[v].toLowerCase())) : e = l(e, E);
                r && (E.query = r(E.query)), a && t.slashes && "/" !== E.pathname.charAt(0) && ("" !== E.pathname || "" !== t.pathname) && (E.pathname = function(e, t) {
                    if ("" === e) return t;
                    for (var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")), n = r.length, o = r[n - 1], a = !1, i = 0; n--;) "." === r[n] ? r.splice(n, 1) : ".." === r[n] ? (r.splice(n, 1), i++) : i && (0 === n && (a = !0), r.splice(n, 1), i--);
                    return a && r.unshift(""), "." !== o && ".." !== o || r.push(""), r.join("/")
                }(E.pathname, t.pathname)), "/" !== E.pathname.charAt(0) && m(E.protocol) && (E.pathname = "/" + E.pathname), n(E.port, E.protocol) || (E.host = E.hostname, E.port = ""), E.username = E.password = "", E.auth && (~(f = E.auth.indexOf(":")) ? (E.username = E.auth.slice(0, f), E.username = encodeURIComponent(decodeURIComponent(E.username)), E.password = E.auth.slice(f + 1), E.password = encodeURIComponent(decodeURIComponent(E.password))) : E.username = encodeURIComponent(decodeURIComponent(E.auth)), E.auth = E.password ? E.username + ":" + E.password : E.username), E.origin = "file:" !== E.protocol && m(E.protocol) && E.host ? E.protocol + "//" + E.host : "null", E.href = E.toString()
            }
            y.prototype = {
                set: function(e, t, r) {
                    var a = this;
                    switch (e) {
                        case "query":
                            "string" == typeof t && t.length && (t = (r || o.parse)(t)), a[e] = t;
                            break;
                        case "port":
                            a[e] = t, n(t, a.protocol) ? t && (a.host = a.hostname + ":" + t) : (a.host = a.hostname, a[e] = "");
                            break;
                        case "hostname":
                            a[e] = t, a.port && (t += ":" + a.port), a.host = t;
                            break;
                        case "host":
                            a[e] = t, c.test(t) ? (t = t.split(":"), a.port = t.pop(), a.hostname = t.join(":")) : (a.hostname = t, a.port = "");
                            break;
                        case "protocol":
                            a.protocol = t.toLowerCase(), a.slashes = !r;
                            break;
                        case "pathname":
                        case "hash":
                            if (t) {
                                var i = "pathname" === e ? "/" : "#";
                                a[e] = t.charAt(0) !== i ? i + t : t
                            } else a[e] = t;
                            break;
                        case "username":
                        case "password":
                            a[e] = encodeURIComponent(t);
                            break;
                        case "auth":
                            var s = t.indexOf(":");
                            ~s ? (a.username = t.slice(0, s), a.username = encodeURIComponent(decodeURIComponent(a.username)), a.password = t.slice(s + 1), a.password = encodeURIComponent(decodeURIComponent(a.password))) : a.username = encodeURIComponent(decodeURIComponent(t))
                    }
                    for (var l = 0; l < p.length; l++) {
                        var u = p[l];
                        u[4] && (a[u[1]] = a[u[1]].toLowerCase())
                    }
                    return a.auth = a.password ? a.username + ":" + a.password : a.username, a.origin = "file:" !== a.protocol && m(a.protocol) && a.host ? a.protocol + "//" + a.host : "null", a.href = a.toString(), a
                },
                toString: function(e) {
                    e && "function" == typeof e || (e = o.stringify);
                    var t, r = this,
                        n = r.host,
                        a = r.protocol;
                    a && ":" !== a.charAt(a.length - 1) && (a += ":");
                    var i = a + (r.protocol && r.slashes || m(r.protocol) ? "//" : "");
                    return r.username ? (i += r.username, r.password && (i += ":" + r.password), i += "@") : r.password ? (i += ":" + r.password, i += "@") : "file:" !== r.protocol && m(r.protocol) && !n && "/" !== r.pathname && (i += "@"), (":" === n[n.length - 1] || c.test(r.hostname) && !r.port) && (n += ":"), i += n + r.pathname, (t = "object" == typeof r.query ? e(r.query) : r.query) && (i += "?" !== t.charAt(0) ? "?" + t : t), r.hash && (i += r.hash), i
                }
            }, y.extractProtocol = g, y.location = h, y.trimLeft = d, y.qs = o, e.exports = y
        }).call(this, r(31))
    }, function(e, t, r) {
        "use strict";
        (function(e, n) {
            var o, a = r(52);
            o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : n;
            var i = Object(a.a)(o);
            t.a = i
        }).call(this, r(31), r(84)(e))
    }, function(e, t, r) {
        "use strict";
        const n = r(0).isPlainObject,
            o = r(38),
            a = "userInput";
        e.exports.addResolver = e => Object.assign({}, e, {
            [o]: a
        }), e.exports.shouldResolve = e => n(e) && e[o] === a
    }, function(e, t, r) {
        "use strict";

        function n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? n(Object(r), !0).forEach((function(t) {
                    a(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function a(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        var i = r(49),
            s = r(101);
        e.exports = o(o({}, s), i)
    }, function(e, t, r) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PagingMode = void 0, (n = t.PagingMode || (t.PagingMode = {})).Offset = "OFFSET", n.Cursor = "CURSOR"
    }, function(e, t) {
        var r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (r) {
            var n = new Uint8Array(16);
            e.exports = function() {
                return r(n), n
            }
        } else {
            var o = new Array(16);
            e.exports = function() {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
                return o
            }
        }
    }, function(e, t) {
        for (var r = [], n = 0; n < 256; ++n) r[n] = (n + 256).toString(16).substr(1);
        e.exports = function(e, t) {
            var n = t || 0,
                o = r;
            return [o[e[n++]], o[e[n++]], o[e[n++]], o[e[n++]], "-", o[e[n++]], o[e[n++]], "-", o[e[n++]], o[e[n++]], "-", o[e[n++]], o[e[n++]], "-", o[e[n++]], o[e[n++]], o[e[n++]], o[e[n++]], o[e[n++]], o[e[n++]]].join("")
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.convertFromCustomFormat = t.convertToCustomFormat = void 0;
        var n = r(85),
            o = r(87),
            a = r(88),
            i = new n.ConvertersComposer(new o.DateConverter, new a.DefaultConverter);
        t.convertToCustomFormat = function(e) {
            return i.convertToCustomFormat(e)
        }, t.convertFromCustomFormat = function(e) {
            return i.convertFromCustomFormat(e)
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, n(e)
        }
        var o = "User",
            a = "Error",
            i = "EDM",
            s = function(e, t) {
                e && "object" === n(e) && (e.errorGroup = t)
            };
        e.exports = {
            markUserError: function(e) {
                return s(e, o)
            },
            isUserError: function(e) {
                return e && e.errorGroup === o
            },
            markAppError: function(e) {
                return s(e, a)
            },
            isAppError: function(e) {
                return e && e.errorGroup === a
            },
            markEdmError: function(e) {
                return s(e, i)
            },
            isEdmError: function(e) {
                return e && e.errorGroup === i
            },
            markError: s,
            isMarked: function(e) {
                return !!e && void 0 !== e.errorGroup
            },
            USER_ERROR_GROUP: o,
            APP_ERROR_GROUP: a,
            EDM_ERROR_GROUP: i,
            UNKNOWN_ERROR_GROUP: "Unknown"
        }
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", (function() {
                return A
            })), r(71);
            var n = r(41),
                o = r.n(n),
                a = r(30),
                i = r(1),
                s = r(54),
                c = r(55),
                l = r(56),
                u = r(57),
                d = r(58),
                p = r(59),
                f = r(67),
                h = r(69),
                m = r(102),
                g = r(68),
                y = r(65);

            function v(e, t, r) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.set(e, r)
            }

            function w(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function b(e, t) {
                return function(e, t) {
                    return t.get ? t.get.call(e) : t.value
                }(e, I(e, t, "get"))
            }

            function E(e, t, r) {
                return function(e, t, r) {
                    if (t.set) t.set.call(e, r);
                    else {
                        if (!t.writable) throw new TypeError("attempted to set read only private field");
                        t.value = r
                    }
                }(e, I(e, t, "set"), r), r
            }

            function I(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
                return t.get(e)
            }
            var O = new WeakMap,
                T = new WeakMap,
                R = new WeakMap,
                _ = new WeakMap,
                C = new WeakMap,
                S = new WeakMap,
                D = new WeakMap;
            class A {
                constructor() {
                    var t = this;
                    let {
                        verbose: r = !1,
                        wixDataSchemasForItTests: n,
                        getElementorySupport: I = (() => e.elementorySupport),
                        automationsClientCreator: A = a.c
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return w(this, "initAppForPage", (function(e, r, n) {
                        let {
                            routerReturnedData: a,
                            ...y
                        } = e, {
                            bi: v = {},
                            monitoring: {
                                createMonitor: w
                            },
                            fedOpsLoggerFactory: I,
                            biLoggerFactory: A,
                            essentials: {
                                httpClient: x,
                                experiments: j
                            }
                        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        try {
                            const e = new g.a({
                                    platformUtils: r,
                                    wixSdk: n,
                                    bi: v,
                                    devMode: !1,
                                    verbose: b(t, _)
                                }),
                                {
                                    settings: N
                                } = e,
                                {
                                    instance: M,
                                    gridAppId: L
                                } = P(y, b(t, S).call(t)),
                                {
                                    data: k,
                                    window: {
                                        warmupData: F
                                    },
                                    location: {
                                        baseUrl: U,
                                        protocol: W
                                    }
                                } = n;
                            E(t, R, a), E(t, T, new p.a({
                                fedops: {
                                    factory: I,
                                    hooks: {
                                        start: e => {
                                            let {
                                                name: r
                                            } = e;
                                            return b(t, T).log(new i.c({
                                                category: "interaction start",
                                                message: "interaction ".concat(r, " started")
                                            }))
                                        },
                                        end: e => {
                                            let {
                                                name: r,
                                                duration: n
                                            } = e;
                                            return b(t, T).log(new i.c({
                                                category: "interaction end",
                                                message: "interaction ".concat(r, " ended after ").concat(n, " ms")
                                            }))
                                        }
                                    }
                                },
                                bi: {
                                    factory: A
                                },
                                monitor: {
                                    factory: w
                                },
                                verbose: {
                                    factory: () => ({
                                        log: function() {
                                            var e;
                                            return ((null === (e = n.telemetry) || void 0 === e ? void 0 : e.console) || console).verbose(...arguments)
                                        }
                                    })
                                },
                                console: {
                                    factory: () => {
                                        var e;
                                        return (null === (e = n.telemetry) || void 0 === e ? void 0 : e.console) || console
                                    }
                                },
                                settings: N,
                                global: self
                            })), b(t, T).log(new i.k("databinding/initAppForPage", i.k.types.START));
                            const V = new d.a({
                                    experiments: j,
                                    settings: N
                                }),
                                G = V.fes ? new s.a({
                                    httpClient: x,
                                    getRequestParams: () => ({
                                        instance: M,
                                        gridAppId: L
                                    })
                                }) : new c.a({
                                    wixData: k || self.require("wix-data").default,
                                    wixDataSchemas: b(t, C) || new m.a(x, M, L, {
                                        baseUrl: N.env.editor ? void 0 : "".concat(W, "://").concat(o()(U).hostname, "/_api/cloud-data/v1/schemas")
                                    })
                                }),
                                B = new l.a(F),
                                q = new u.a(a),
                                z = Object(h.a)({
                                    automationsClientCreator: () => b(t, D).call(t, {
                                        httpClient: x
                                    })
                                });
                            return E(t, O, new f.a({
                                platform: e,
                                dataFetcher: G,
                                warmupCache: B,
                                staticCache: q,
                                features: V,
                                listenersByEvent: z,
                                logger: b(t, T),
                                global: self
                            })), b(t, T).log(new i.k("databinding/initAppForPage", i.k.types.END)), Promise.resolve()
                        } catch (e) {
                            return b(t, T) && b(t, T).log(new i.a("App initialisation failed", {
                                cause: e
                            })), Promise.reject(e)
                        }
                    })), w(this, "createControllers", (e => {
                        const t = Object(y.a)(e, b(this, R));
                        return e.length ? b(this, O).initializeDatasets({
                            datasetConfigs: t,
                            rawControllerConfigs: e
                        }) : []
                    })), v(this, O, {
                        writable: !0,
                        value: void 0
                    }), v(this, T, {
                        writable: !0,
                        value: void 0
                    }), v(this, R, {
                        writable: !0,
                        value: void 0
                    }), v(this, _, {
                        writable: !0,
                        value: void 0
                    }), v(this, C, {
                        writable: !0,
                        value: void 0
                    }), v(this, S, {
                        writable: !0,
                        value: void 0
                    }), v(this, D, {
                        writable: !0,
                        value: void 0
                    }), E(this, C, n), E(this, S, I), E(this, D, A), E(this, _, r), {
                        initAppForPage: this.initAppForPage,
                        createControllers: this.createControllers
                    }
                }
            }
            const P = (e, t) => {
                let {
                    instance: r,
                    appData: n
                } = e;
                if (r && n) return {
                    instance: r,
                    gridAppId: n.gridAppId
                };
                const {
                    query: {
                        instance: a,
                        gridAppId: i
                    }
                } = o()("?".concat(t.queryParameters), !0);
                return {
                    instance: a,
                    gridAppId: i
                }
            }
        }).call(this, r(31))
    }, function(e, t, r) {
        "use strict";
        e.exports = {
            ERROR: 1,
            UNHANDLED_REJECTION: 2,
            DATASET_FAILED_TO_LOAD: 3,
            CONNECTION_CONFIG_FAILED_TO_LOAD: 4,
            FILTER_PANEL_FAILED_TO_LOAD: 5,
            SORT_PANEL_FAILED_TO_LOAD: 6,
            ADD_COLUMN_PANEL_FAILED_TO_LOAD: 7,
            CHANGE_COLLECTION_PANEL_FAILED_TO_LOAD: 8,
            CREATE_DATASET_PANEL_FAILED_TO_LOAD: 9,
            NEW_DYNAMIC_PAGE_PANEL_FAILED_TO_LOAD: 10,
            DELETE_DYNAMIC_PAGE_PANEL_FAILED_TO_LOAD: 11,
            DYNAMIC_PAGE_INFO_PANEL_FAILED_TO_LOAD: 12,
            DYNAMIC_PAGE_SEO_PANEL_FAILED_TO_LOAD: 13,
            DYNAMIC_PAGES_HOOKS_PANEL_FAILED_TO_LOAD: 14,
            ERROR_PANEL_FAILED_TO_LOAD: 15,
            ADD_PRESET_PANEL_FAILED_TO_LOAD: 16,
            ADD_FIELD_PANEL_FAILED_TO_LOAD: 17,
            NEW_DYNAMIC_PAGE_PANEL_V3_FAILED_TO_LOAD: 18,
            CREATE_COLLECTION_PANEL_FAILED_TO_LOAD: 19,
            CONNECT_PAGE_FAILED_TO_LOAD: 21,
            DELETE_PAGE_FAILED_TO_LOAD: 22,
            NEW_PAGE_FAILED_TO_LOAD: 23,
            PAGE_INFO_FAILED_TO_LOAD: 24,
            PAGE_SEO_FAILED_TO_LOAD: 25,
            UPDATE_PREFIX_FAILED_TO_LOAD: 26,
            WEB_MODULES_PERMISSONS_FAILED_TO_LOAD: 27,
            DELETE_ROUTERS_JS_FAILED_TO_LOAD: 28,
            NPM_MODULES_MANAGEMENT_PANEL_FAILED_TO_LOAD: 79,
            REMOVE_NPM_PACKAGE_PANEL_FAILED_TO_LOAD: 79
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            var t, r = e.Symbol;
            return "function" == typeof r ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
        r.d(t, "a", (function() {
            return n
        }))
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var r = "object" == typeof e && e && e.Object === Object && e;
            t.a = r
        }).call(this, r(31))
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return a
        }));
        var n = r(22);
        class o {
            constructor(e) {
                let {
                    message: t,
                    code: r
                } = e;
                const n = new Error(t);
                return n.code = r, n
            }
        }
        class a {
            constructor(e) {
                let {
                    getRequestParams: t,
                    httpClient: r
                } = e;
                this.getRequestParams = t, this.httpClient = r
            }
            async _makeRequestTo(e, t) {
                const {
                    instance: r,
                    gridAppId: n
                } = this.getRequestParams();
                return (await this.httpClient.post("/_serverless/data-binding-server/".concat(e), t, {
                    params: {
                        gridAppId: n
                    },
                    headers: {
                        Authorization: r,
                        "Content-Type": "application/json"
                    }
                })).data
            }
            async fetchBulkData(e) {
                const {
                    recordsByCollectionId: t,
                    recordsInfoByDataset: r
                } = await this._makeRequestTo("fetch-initial-data", e);
                return {
                    recordsInfoByDataset: r.reduce(((e, t) => {
                        let {
                            itemIds: r = [],
                            totalCount: n = 0,
                            error: a
                        } = t;
                        return [...e, {
                            itemIds: r,
                            totalCount: n,
                            error: a ? new o(a) : void 0
                        }]
                    }), []),
                    recordsByCollectionId: Object.entries(t).reduce(((e, t) => {
                        let [r, o] = t;
                        return { ...e,
                            [r]: Object.entries(o).reduce(((e, t) => {
                                let [r, o] = t;
                                return { ...e,
                                    [r]: Object(n.convertFromCustomFormat)(o)
                                }
                            }), {})
                        }
                    }), {})
                }
            }
            async fetchData(e) {
                const {
                    items: t,
                    ...r
                } = await this._makeRequestTo("fetch-data", e);
                return { ...r,
                    items: t.map((e => Object(n.convertFromCustomFormat)(e)))
                }
            }
            async remove(e) {
                return this._makeRequestTo("remove", e)
            }
            async save(e) {
                const {
                    item: t
                } = await this._makeRequestTo("save", e);
                return Object(n.convertFromCustomFormat)(t)
            }
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return f
        }));
        var n = r(0),
            o = r(11);

        function a(e, t, r) {
            i(e, t), t.set(e, r)
        }

        function i(e, t) {
            if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }

        function s(e, t) {
            return function(e, t) {
                return t.get ? t.get.call(e) : t.value
            }(e, l(e, t, "get"))
        }

        function c(e, t, r) {
            return function(e, t, r) {
                if (t.set) t.set.call(e, r);
                else {
                    if (!t.writable) throw new TypeError("attempted to set read only private field");
                    t.value = r
                }
            }(e, l(e, t, "set"), r), r
        }

        function l(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
            return t.get(e)
        }
        var u = new WeakMap,
            d = new WeakMap,
            p = new WeakSet;
        class f {
            constructor(e) {
                let {
                    wixData: t,
                    wixDataSchemas: r
                } = e;
                var n;
                i(this, n = p), n.add(this), a(this, u, {
                    writable: !0,
                    value: void 0
                }), a(this, d, {
                    writable: !0,
                    value: void 0
                }), c(this, u, m.reduce(((e, r) => (e[r] = function() {
                    const e = t[r](...arguments);
                    return e.catch instanceof Function ? e.catch((e => {
                        throw new E(e)
                    })) : e
                }, e)), { ...t
                })), c(this, d, r)
            }
            async fetchBulkData(e) {
                const t = await Promise.all(e.map((e => {
                    let {
                        collectionId: t,
                        filter: r,
                        sort: n,
                        offset: o,
                        cursor: a,
                        length: i,
                        includes: s,
                        uniqueFieldValues: c
                    } = e;
                    return this.fetchData({
                        collectionId: t,
                        filter: r,
                        sort: n,
                        offset: o,
                        cursor: a,
                        length: i,
                        includes: s,
                        uniqueFieldValues: c
                    }).catch((e => ({
                        error: e
                    })))
                })));
                return Object(o.a)(e, t)
            }
            async fetchData(e) {
                let {
                    collectionId: t,
                    filter: r,
                    sort: n,
                    offset: o = 0,
                    includes: a,
                    cursor: i,
                    length: c,
                    uniqueFieldValues: l
                } = e;
                const d = i ? s(this, u).fetch(t, i, c) : (() => {
                        let e = s(this, u).query(t).setFilterModel(r).setSortModel(n).skip(o).limit(c);
                        return null == a || a.forEach((t => {
                            e = e.include(t)
                        })), e.find()
                    })(),
                    f = l.length > 0 ? function(e, t, r) {
                        if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                        return r
                    }(this, p, h).call(this, {
                        collectionId: t,
                        fieldKeys: l
                    }) : Promise.resolve({}),
                    [m, g] = await Promise.all([d, f]),
                    {
                        items: y,
                        totalCount: v
                    } = m;
                let w;
                try {
                    w = m.nextCursor
                } catch {}
                return {
                    items: y,
                    nextCursor: w,
                    totalCount: v || 0,
                    uniqueFieldValues: g
                }
            }
            async remove(e) {
                let {
                    collectionId: t,
                    recordId: r
                } = e;
                return s(this, u).remove(t, r)
            }
            async save(e) {
                let {
                    collectionId: t,
                    record: r,
                    includeReferences: n
                } = e;
                return s(this, u).save(t, r, {
                    includeReferences: n
                })
            }
            async getSibling(e) {
                let {
                    collectionName: t,
                    filter: r,
                    sort: n,
                    fieldValues: o,
                    sortFields: a,
                    directionTowardSibling: i
                } = e;
                const c = s(this, u).query(t).setFilterModel(r),
                    {
                        items: [l]
                    } = await g({
                        sort: n,
                        sortFields: a,
                        fieldValues: o,
                        baseQuery: c,
                        directionTowardSibling: i
                    }).find();
                return l
            }
            fetchSchemas(e) {
                return s(this, d).bulkGet(e, {
                    referencedCollectionsDepth: 1
                })
            }
            createSimpleFilter(e, t) {
                return s(this, u).filter().eq(e, t).getFilterModel()
            }
        }
        async function h(e) {
            let {
                collectionId: t,
                fieldKeys: r
            } = e;
            return (await Promise.all(r.map((e => s(this, u).query(t).distinct(e))))).reduce(((e, t, n) => {
                let {
                    _items: o
                } = t;
                return e[r[n]] = o, e
            }), {})
        }
        const m = ["save", "remove", "find", "filter", "query", "fetch"],
            g = e => {
                let {
                    sort: t,
                    sortFields: r,
                    directionTowardSibling: n,
                    fieldValues: o,
                    baseQuery: a
                } = e;
                return y({
                    sort: t,
                    sortFields: r,
                    directionTowardSibling: n,
                    fieldValues: o,
                    baseQuery: a
                })(r.length - 1).reduce(((e, t) => e.or(t)))
            },
            y = e => {
                let {
                    baseQuery: t,
                    sortFields: r,
                    sort: o,
                    directionTowardSibling: a,
                    fieldValues: i
                } = e;
                return function e(s) {
                    if (-1 === s) return [];
                    const c = r[s];
                    return [Object(n.flow)(v(o, a), w(o[c], a, c, i[c]), b(s, r, i))(t), ...e(s - 1)]
                }
            },
            v = (e, t) => r => Object.entries(e).reduce(((e, r) => {
                let [n, o] = r;
                return o === t ? e.ascending(n) : e.descending(n)
            }), r),
            w = (e, t, r, n) => o => e === t ? o.gt(r, n) : o.lt(r, n),
            b = (e, t, r) => o => Object(n.range)(e).reduce(((e, n) => e.eq(t[n], r[t[n]])), o).limit(1);
        class E {
            constructor(e) {
                if (!e.stack) {
                    const {
                        message: t,
                        code: r
                    } = "string" == typeof e ? {
                        message: e,
                        code: "WD_VALIDATION_FAILED"
                    } : e, n = new Error(t);
                    return n.code = r, n
                }
                return e
            }
        }
    }, function(e, t, r) {
        "use strict";

        function n(e, t) {
            return function(e, t) {
                return t.get ? t.get.call(e) : t.value
            }(e, o(e, t, "get"))
        }

        function o(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
            return t.get(e)
        }
        r.d(t, "a", (function() {
            return i
        }));
        var a = new WeakMap;
        class i {
            constructor(e) {
                var t, r;
                r = {
                        writable: !0,
                        value: void 0
                    },
                    function(e, t) {
                        if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                    }(this, t = a), t.set(this, r),
                    function(e, t, r) {
                        ! function(e, t, r) {
                            if (t.set) t.set.call(e, r);
                            else {
                                if (!t.writable) throw new TypeError("attempted to set read only private field");
                                t.value = r
                            }
                        }(e, o(e, t, "set"), r)
                    }(this, a, e)
            }
            getSchemas() {
                return n(this, a).get("schemas")
            }
            setSchemas(e) {
                n(this, a).set("schemas", e)
            }
            getDataStore() {
                return n(this, a).get("dataStore")
            }
            setDataStore(e) {
                n(this, a).set("dataStore", e)
            }
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return p
        }));
        var n = r(11);

        function o(e, t, r) {
            ! function(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(e, t), t.set(e, r)
        }

        function a(e, t) {
            return function(e, t) {
                return t.get ? t.get.call(e) : t.value
            }(e, s(e, t, "get"))
        }

        function i(e, t, r) {
            return function(e, t, r) {
                if (t.set) t.set.call(e, r);
                else {
                    if (!t.writable) throw new TypeError("attempted to set read only private field");
                    t.value = r
                }
            }(e, s(e, t, "set"), r), r
        }

        function s(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
            return t.get(e)
        }
        var c = new WeakMap,
            l = new WeakMap,
            u = new WeakMap,
            d = new WeakMap;
        class p {
            constructor(e) {
                if (o(this, c, {
                        writable: !0,
                        value: void 0
                    }), o(this, l, {
                        writable: !0,
                        value: void 0
                    }), o(this, u, {
                        writable: !0,
                        value: void 0
                    }), o(this, d, {
                        writable: !0,
                        value: void 0
                    }), e && e.config) {
                    i(this, c, e.config.dataset.collectionName), i(this, l, e.items), i(this, u, e.schemas);
                    const t = e.nextCursor || void 0,
                        r = e.totalCount || 0,
                        n = (e.items || []).length;
                    i(this, d, {
                        cursor: t,
                        total: r,
                        loaded: n
                    })
                }
            }
            getSchemas() {
                return a(this, u)
            }
            getDataStore() {
                if (a(this, l)) return Object(n.b)({
                    items: a(this, l),
                    datasetSize: a(this, d),
                    collectionId: a(this, c)
                })
            }
            getItems() {
                return a(this, l)
            }
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return n
        }));
        class n {
            constructor(e) {
                let {
                    experiments: t,
                    settings: {
                        env: r
                    }
                } = e;
                return {
                    get fes() {
                        return t.enabled("specs.wixDataViewer.EnableFES")
                    },
                    get warmupData() {
                        return t.enabled("specs.wixDataViewer.UseWarmupData") && r.live
                    },
                    get dropdownOptionsDistinct() {
                        return t.enabled("specs.wixDataViewer.DropdownDistinctOptions")
                    }
                }
            }
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return N
        }));
        var n = r(25),
            o = r(60),
            a = r.n(o),
            i = r(61),
            s = r(20),
            c = r(1);

        function l(e, t) {
            d(e, t), t.add(e)
        }

        function u(e, t, r) {
            d(e, t), t.set(e, r)
        }

        function d(e, t) {
            if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }

        function p(e, t) {
            return function(e, t) {
                return t.get ? t.get.call(e) : t.value
            }(e, m(e, t, "get"))
        }

        function f(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
            return r
        }

        function h(e, t, r) {
            return function(e, t, r) {
                if (t.set) t.set.call(e, r);
                else {
                    if (!t.writable) throw new TypeError("attempted to set read only private field");
                    t.value = r
                }
            }(e, m(e, t, "set"), r), r
        }

        function m(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
            return t.get(e)
        }
        const {
            USER_SCOPE: g,
            APPLICATION_SCOPE: y,
            SERVER_SCOPE: v
        } = c.f.scopes, {
            DBSMViewer: {
                dsn: w
            },
            UserErrors: {
                dsn: b
            },
            WixData: {
                dsn: E
            }
        } = a.a, I = {
            [y]: w,
            [g]: b,
            [v]: E
        };
        let O = function(e, t) {
            return r => {
                var n;
                return this.mode.dev ? (e === Error && (this.console.error(r), r.cause && this.console.error("Caused by:", r.cause)), null === (n = r.run) || void 0 === n ? void 0 : n.call(r)) : t(r)
            }
        };
        var T = new WeakMap,
            R = new WeakMap,
            _ = new WeakMap,
            C = new WeakMap,
            S = new WeakMap,
            D = new WeakMap,
            A = new WeakSet,
            P = new WeakSet,
            x = new WeakSet,
            j = new WeakSet;
        class N {
            constructor(e) {
                let {
                    fedops: t,
                    bi: r,
                    monitor: n,
                    verbose: o,
                    console: a,
                    global: i,
                    settings: s
                } = e;
                l(this, j), l(this, x), l(this, P), l(this, A), u(this, T, {
                    writable: !0,
                    value: void 0
                }), u(this, R, {
                    writable: !0,
                    value: void 0
                }), u(this, _, {
                    writable: !0,
                    value: void 0
                }), u(this, C, {
                    writable: !0,
                    value: void 0
                }), u(this, S, {
                    writable: !0,
                    value: void 0
                }), u(this, D, {
                    writable: !0,
                    value: void 0
                });
                const c = a.factory();
                O = O.bind({
                    mode: s.mode,
                    console: c
                }), h(this, T, f(this, A, M).call(this)), h(this, R, f(this, P, L).call(this, t)), h(this, _, f(this, x, k).call(this, {
                    bi: r,
                    settings: s
                })), h(this, C, f(this, j, F).call(this, {
                    monitor: n,
                    global: i,
                    settings: s
                })), h(this, S, o.factory()), h(this, D, c)
            }
            log() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                if (t.length > 1) return t.map((e => this.log(e)));
                const [n] = t, [, o] = Array.from(p(this, T)).find((e => {
                    let [t] = e;
                    return t.prototype.isPrototypeOf(n)
                })) || [];
                return o ? o(n) : p(this, D).error("Oj-vej! This event is not supported by logger", n)
            }
        }

        function M() {
            return new Map([
                [Error, O(Error, (e => {
                    if (e instanceof c.l) p(this, D).warn("You have unhandled error in async operation. Consider catching it and handling accordingly.\n", e.cause);
                    else {
                        const {
                            scope: t,
                            cause: r,
                            options: {
                                extra: n,
                                ...o
                            } = {}
                        } = e;
                        e instanceof c.m && (p(this, D).error(e), r && p(this, D).error("Caused by:", r)), p(this, C)[t].captureException(e, {
                            zone: t,
                            extra: {
                                cause: r,
                                ...n
                            },
                            ...o
                        })
                    }
                }))],
                [c.b, O(c.b, (e => {
                    let {
                        event: t,
                        type: r
                    } = e;
                    return r === c.b.types.ERROR ? p(this, _).errorLogger.log(t) : p(this, _).logger.log(t)
                }))],
                [c.k, O(c.k, (e => {
                    let {
                        name: t,
                        params: r,
                        run: n,
                        onStart: o,
                        onEnd: a
                    } = e;
                    return o((() => p(this, R).interactionStarted(t, r))), a((() => p(this, R).interactionEnded(t, r))), n()
                }))],
                [c.c, O(c.c, (e => {
                    let {
                        event: t
                    } = e;
                    return p(this, C)[y].captureBreadcrumb(t)
                }))],
                [c.n, e => {
                    let {
                        messages: t
                    } = e;
                    return p(this, S).log(...t)
                }],
                [c.d, e => {
                    let {
                        message: t,
                        level: r
                    } = e;
                    return p(this, D)[r](t)
                }]
            ])
        }

        function L(e) {
            let {
                factory: t,
                hooks: {
                    start: r,
                    end: n
                }
            } = e;
            return t.getLoggerForWidget({
                appId: "databinding",
                appName: "databinding",
                startHook: r,
                endHook: n
            })
        }

        function k(e) {
            let {
                bi: {
                    factory: t
                },
                settings: {
                    env: r
                }
            } = e;
            return {
                logger: t().logger({
                    endpoint: r.editor ? n.BI_ENDPOINT : n.BI_VIEWER_ENDPOINT
                }),
                errorLogger: t().logger({
                    endpoint: n.BI_ERROR_ENDPOINT
                })
            }
        }

        function F(e) {
            let {
                monitor: {
                    factory: t
                },
                global: r,
                settings: {
                    metaSiteId: n,
                    userId: o
                }
            } = e;
            return Object.entries(I).reduce(((e, a) => {
                let [c, l] = a;
                const u = t(l);
                return e[c] = u, Object(i.configureForViewerWorker)({
                    dsn: l,
                    Raven: u,
                    globalScope: r,
                    appName: s.b,
                    user: {
                        id: o
                    },
                    params: {
                        tags: {
                            msid: n
                        }
                    }
                }), e
            }), {})
        }
    }, function(e, t) {
        e.exports.CMEditor = {
            dsn: "https://e788f1b6d7b54d3482c54d1e27b95f38@sentry.wixpress.com/165"
        }, e.exports.CMMyAccount = {
            dsn: "https://bd7df26433634b41b7e711922156bff7@sentry.wixpress.com/166"
        }, e.exports.DBSMEditor = {
            dsn: "https://adc03f08d1814b5a835f586aaba9d8ff@sentry.wixpress.com/159"
        }, e.exports.DBSMViewer = {
            dsn: "https://27180ecd50484e4eafe543b40d29866d@sentry.wixpress.com/89"
        }, e.exports.UserErrors = {
            dsn: "https://73a0410004ae41b7b60ca1c4b4684996@sentry.wixpress.com/183"
        }, e.exports.WixData = {
            dsn: "https://9653fbb3e48143d890dba8a09a5a98c6@sentry.wixpress.com/184"
        }, e.exports.DBSMEditorNext = {
            dsn: "https://7d36178c8efe4cfb8804450a183c5453@sentry-next.wixpress.com/299"
        }
    }, function(e, t, r) {
        "use strict";
        const n = r(0).identity,
            {
                Result: o
            } = r(4),
            a = r(90),
            {
                isLocalhost: i
            } = r(32),
            s = e => o.try(e).getOrElse("unknown"),
            c = e => o.try(e).fold((e => e.message), (e => e)),
            l = e => ({
                referrer: c((() => e["wix-window"].referrer)),
                workerUrl: c((() => e.location.href))
            }),
            u = e => ({
                renderMode: s((() => e["wix-window"].rendering.env)),
                viewMode: s((() => e["wix-window"].viewMode)),
                santaVersion: s((() => (e => {
                    const t = e.match(/santa\/([^/]*)/);
                    return t ? t[1] : "unknown"
                })(e.location.href)))
            });
        e.exports.configureForViewerWorker = e => {
            let {
                Raven: t,
                globalScope: r,
                dsn: o,
                params: c = {},
                appName: d
            } = e;
            i() || (a({
                Raven: t,
                appName: d,
                browserUrlGetter: () => s((() => r["wix-location"].url)),
                dsn: o,
                params: c
            }), t.setDataCallback((function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
                return e.extra = Object.assign(e.extra || {}, l(r)), e.tags = Object.assign(e.tags || {}, c.tags || {}, u(r)), t(e)
            })))
        }
    }, function(e, t) {
        e.exports.SCOPE_TYPES = {
            COMPONENT: "COMPONENT_SCOPE",
            GLOBAL: "GLOBAL_SCOPE"
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(96);
        e.exports = {
            createMiddleware: n
        }
    }, function(e, t, r) {
        "use strict";
        const n = {
                SHORT_DATE: "SHORT_DATE",
                MEDIUM_DATE: "MEDIUM_DATE",
                LONG_DATE: "LONG_DATE",
                FULL_DATE: "FULL_DATE",
                SHORT_DATE_TIME: "SHORT_DATE_TIME",
                LONG_DATE_TIME: "LONG_DATE_TIME",
                FULL_DATE_TIME: "FULL_DATE_TIME",
                MEDIUM_TIME_12: "MEDIUM_TIME_12",
                MEDIUM_TIME_24: "MEDIUM_TIME_24",
                LONG_TIME_12: "LONG_TIME_12",
                LONG_TIME_24: "LONG_TIME_24",
                HOUR_ONLY: "HOUR_ONLY",
                MINUTE_ONLY: "MINUTE_ONLY",
                YEAR_ONLY: "YEAR_ONLY",
                MONTH_ONLY: "MONTH_ONLY",
                SHORT_MONTH_ONLY: "SHORT_MONTH_ONLY",
                DAY_ONLY: "DAY_ONLY"
            },
            o = new Set([n.SHORT_DATE_TIME, n.LONG_DATE_TIME, n.FULL_DATE_TIME, n.MEDIUM_TIME_12, n.MEDIUM_TIME_24, n.LONG_TIME_12, n.LONG_TIME_24, n.HOUR_ONLY, n.MINUTE_ONLY]),
            a = {
                [n.SHORT_DATE]: {
                    day: "numeric",
                    month: "numeric",
                    year: "2-digit"
                },
                [n.MEDIUM_DATE]: {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                },
                [n.LONG_DATE]: {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                },
                [n.FULL_DATE]: {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    weekday: "long"
                },
                [n.SHORT_DATE_TIME]: {
                    day: "numeric",
                    month: "numeric",
                    year: "2-digit",
                    hour: "numeric",
                    minute: "numeric"
                },
                [n.LONG_DATE_TIME]: {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                },
                [n.FULL_DATE_TIME]: {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    weekday: "long",
                    timeZoneName: "short"
                },
                [n.MEDIUM_TIME_12]: {
                    minute: "numeric",
                    hour: "numeric",
                    hour12: !0
                },
                [n.MEDIUM_TIME_24]: {
                    minute: "numeric",
                    hour: "numeric",
                    hour12: !1
                },
                [n.LONG_TIME_12]: {
                    minute: "numeric",
                    hour: "numeric",
                    second: "numeric",
                    hour12: !0
                },
                [n.LONG_TIME_24]: {
                    minute: "numeric",
                    hour: "numeric",
                    second: "numeric",
                    hour12: !1
                },
                [n.HOUR_ONLY]: {
                    hour: "numeric"
                },
                [n.MINUTE_ONLY]: {
                    minute: "numeric"
                },
                [n.YEAR_ONLY]: {
                    year: "numeric"
                },
                [n.MONTH_ONLY]: {
                    month: "long"
                },
                [n.SHORT_MONTH_ONLY]: {
                    month: "short"
                },
                [n.DAY_ONLY]: {
                    weekday: "long"
                }
            };
        e.exports = function() {
            let {
                locale: e,
                timeZone: t
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!e) throw new Error('A "locale" parameter is required for wixFormatting');
            return {
                formatDateTime(r, n) {
                    let {
                        locale: o,
                        timeZone: i
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    const s = { ...a[n],
                        timeZone: i || t
                    };
                    return new Intl.DateTimeFormat(o || e, s).format(r)
                },
                dateFormats: n
            }
        }, e.exports.dateFormats = n, e.exports.setOfDateFormatsWithTime = o
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return o
        }));
        var n = r(13);
        const o = (e, t) => e.map((e => {
            let {
                compId: r,
                config: {
                    dataset: {
                        collectionName: o,
                        filter: a,
                        sort: i,
                        includes: s,
                        nested: c,
                        pageSize: l,
                        readWriteType: u,
                        deferred: d,
                        cursor: p
                    } = {}
                } = {},
                type: f,
                connections: h,
                livePreviewOptions: {
                    shouldFetchData: m,
                    compsIdsToReset: g = []
                } = {}
            } = e;
            const y = {
                id: r,
                type: f,
                collectionId: o,
                filter: a,
                sort: i,
                pageSize: l,
                readWriteType: u,
                includes: s,
                nested: c,
                deferred: d,
                connections: h,
                dataIsInvalidated: m,
                updatedCompIds: g,
                cursor: p
            };
            return f === n.ROUTER_DATASET && t ? ((e, t) => {
                const {
                    readWriteType: r
                } = e, {
                    config: {
                        dataset: {
                            collectionName: n,
                            filter: o,
                            sort: a,
                            includes: i,
                            pageSize: s,
                            lowercase: c
                        }
                    },
                    dynamicUrl: l,
                    userDefinedFilter: u
                } = t;
                return { ...e,
                    collectionId: n,
                    filter: o,
                    sort: a,
                    includes: i,
                    pageSize: s,
                    readWriteType: r,
                    dynamicPageData: {
                        lowercase: c,
                        dynamicUrl: l,
                        userDefinedFilter: u
                    }
                }
            })(y, t) : y
        }))
    }, function(e, t) {
        var r = Object.prototype.hasOwnProperty;

        function n(e) {
            return "[Throws: " + (e ? e.message : "?") + "]"
        }

        function o(e) {
            var t = [];
            return function e(o) {
                if (null === o || "object" != typeof o) return o;
                if (-1 !== t.indexOf(o)) return "[Circular]";
                if (t.push(o), "function" == typeof o.toJSON) try {
                    var a = e(o.toJSON());
                    return t.pop(), a
                } catch (e) {
                    return n(e)
                }
                if (Array.isArray(o)) {
                    var i = o.map(e);
                    return t.pop(), i
                }
                var s = Object.keys(o).reduce((function(t, a) {
                    return t[a] = e(function(e, t) {
                        if (r.call(e, t)) try {
                            return e[t]
                        } catch (e) {
                            return n(e)
                        }
                        return e[t]
                    }(o, a)), t
                }), {});
                return t.pop(), s
            }(e)
        }
        e.exports = function(e, t, r) {
            return JSON.stringify(o(e), t, r)
        }, e.exports.ensureProperties = o
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return go
        }));
        var n = r(5),
            o = r(0),
            a = r(9),
            i = r(11),
            s = r(7);

        function c(e, t, r) {
            ! function(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(e, t), t.set(e, r)
        }

        function l(e, t) {
            return function(e, t) {
                return t.get ? t.get.call(e) : t.value
            }(e, u(e, t, "get"))
        }

        function u(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
            return t.get(e)
        }
        var d = new WeakMap,
            p = new WeakMap,
            f = new WeakMap,
            h = new WeakMap;
        class m {
            constructor() {
                c(this, d, {
                    writable: !0,
                    value: {}
                }), c(this, p, {
                    writable: !0,
                    value: {}
                }), c(this, f, {
                    writable: !0,
                    value: {}
                }), c(this, h, {
                    writable: !0,
                    value: {}
                })
            }
            getData(e) {
                let {
                    datasetId: t,
                    collectionId: r,
                    includes: n
                } = e;
                const o = l(this, d)[t];
                return o ? {
                    datasetSize: o.datasetSize,
                    items: o.itemIds.map((e => g(l(this, p)[r][e], this.getSchema(r), n)))
                } : null
            }
            getRecord(e) {
                var t;
                let {
                    collectionId: r,
                    recordId: n,
                    includes: o
                } = e;
                const a = null === (t = l(this, p)[r]) || void 0 === t ? void 0 : t[n];
                return a && g(a, this.getSchema(r), o)
            }
            updateCollectionData(e) {
                let {
                    collectionId: t,
                    data: r
                } = e;
                const {
                    [t]: n
                } = l(this, p), {
                    [t]: o
                } = l(this, f), {
                    items: a,
                    uniqueFieldValues: i
                } = r;
                l(this, p)[t] = y(a, n), l(this, f)[t] = v(i, o)
            }
            getSchema(e) {
                return l(this, h)[e]
            }
            updateStore(e) {
                let {
                    recordsByCollectionId: t = {},
                    recordInfosByDatasetId: r = {},
                    uniqueFieldValuesByCollection: n = {}
                } = e;
                var o, a;
                o = d, a = { ...l(this, d),
                        ...r
                    },
                    function(e, t, r) {
                        if (t.set) t.set.call(e, r);
                        else {
                            if (!t.writable) throw new TypeError("attempted to set read only private field");
                            t.value = r
                        }
                    }(this, u(this, o, "set"), a);
                for (const [e, r] of Object.entries(t)) l(this, p)[e] = { ...l(this, p)[e],
                    ...r
                };
                for (const [e, t] of Object.entries(n)) l(this, f)[e] = { ...l(this, f)[e],
                    ...t
                }
            }
            getStore() {
                return {
                    recordInfosByDatasetId: l(this, d),
                    recordsByCollectionId: l(this, p),
                    uniqueFieldValuesByCollection: l(this, f)
                }
            }
            hasDataset(e) {
                return Boolean(l(this, d)[e])
            }
            setUniqueFieldValues(e) {
                let {
                    collectionId: t,
                    fieldKey: r,
                    data: n
                } = e;
                l(this, f)[t] = { ...l(this, f)[t],
                    [r]: n
                }
            }
            getUniqueFieldValues(e) {
                var t;
                let {
                    collectionId: r,
                    fieldKey: n
                } = e;
                return null === (t = l(this, f)[r]) || void 0 === t ? void 0 : t[n]
            }
            updateSchemas(e) {
                for (const [t, r] of Object.entries(e)) l(this, h)[t] = { ...l(this, h)[t],
                    ...r
                }
            }
            getSchemas() {
                return l(this, h)
            }
        }
        const g = (e, t, r) => Object.entries(e).reduce(((e, n) => {
                let [o, a] = n;
                return ((e, t) => {
                    var r, n;
                    return (null == t || null === (r = t.fields) || void 0 === r || null === (n = r[e]) || void 0 === n ? void 0 : n.type) === s.FieldType.reference
                })(o, t) && ((e, t) => !e || !e.includes(t))(r, o) && Boolean(null == a ? void 0 : a._id) ? e[o] = a._id : e[o] = a, e
            }), {}),
            y = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return e.reduce(((e, t) => {
                    const r = e[t._id];
                    return e[t._id] = r ? Object(o.mergeWith)(r, t, i.h) : t, e
                }), t)
            },
            v = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return { ...t,
                    ...e
                }
            };
        var w = r(1),
            b = r(13);

        function E(e, t) {
            O(e, t), t.add(e)
        }

        function I(e, t, r) {
            O(e, t), t.set(e, r)
        }

        function O(e, t) {
            if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }

        function T(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
            return r
        }

        function R(e, t) {
            return function(e, t) {
                return t.get ? t.get.call(e) : t.value
            }(e, C(e, t, "get"))
        }

        function _(e, t, r) {
            return function(e, t, r) {
                if (t.set) t.set.call(e, r);
                else {
                    if (!t.writable) throw new TypeError("attempted to set read only private field");
                    t.value = r
                }
            }(e, C(e, t, "set"), r), r
        }

        function C(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
            return t.get(e)
        }
        var S = new WeakMap,
            D = new WeakMap,
            A = new WeakMap,
            P = new WeakMap,
            x = new WeakMap,
            j = new WeakMap,
            N = new WeakMap,
            M = new WeakSet,
            L = new WeakSet;
        class k {
            constructor() {
                E(this, L), E(this, M), I(this, S, {
                    writable: !0,
                    value: void 0
                }), I(this, D, {
                    writable: !0,
                    value: void 0
                }), I(this, A, {
                    writable: !0,
                    value: void 0
                }), I(this, P, {
                    writable: !0,
                    value: void 0
                }), I(this, x, {
                    writable: !0,
                    value: void 0
                }), I(this, j, {
                    writable: !0,
                    value: void 0
                }), I(this, N, {
                    writable: !0,
                    value: void 0
                });
                const {
                    logger: e,
                    dataFetcher: t
                } = n.b;
                _(this, D, t), _(this, S, e), _(this, A, new m), _(this, P, {}), _(this, x, Promise.resolve())
            }
            createInitialDataRequest(e) {
                _(this, P, e.reduce(((e, t) => {
                    let {
                        id: r,
                        refresh: n
                    } = t;
                    return n || !R(this, A).hasDataset(r) ? { ...e,
                        [r]: new a.a
                    } : e
                }), {}));
                const t = Object.entries(R(this, P)).map((e => {
                    let [, {
                        promise: t
                    }] = e;
                    return t
                }));
                _(this, x, T(this, L, U).call(this, t).then((() => _(this, P, {}))))
            }
            async getInitialData(e) {
                let {
                    datasetId: t,
                    collectionId: r,
                    cursorPaging: n,
                    filter: o,
                    sort: a,
                    length: i,
                    includes: s,
                    uniqueFieldValues: c
                } = e;
                return R(this, P)[t] && (R(this, P)[t].resolve({
                    datasetId: t,
                    collectionId: r,
                    cursorPaging: n,
                    filter: o,
                    sort: a,
                    length: i,
                    includes: s,
                    uniqueFieldValues: c
                }), await R(this, x)), R(this, A).getData({
                    datasetId: t,
                    collectionId: r,
                    includes: s
                }) || this.getData({
                    datasetId: t,
                    collectionId: r,
                    cursorPaging: n,
                    filter: o,
                    sort: a,
                    offset: 0,
                    length: i,
                    includes: s,
                    uniqueFieldValues: c
                })
            }
            async getData(e) {
                const {
                    collectionId: t,
                    cursorPaging: r,
                    offset: n,
                    filter: o,
                    sort: a,
                    includes: i,
                    length: s,
                    datasetSize: c,
                    uniqueFieldValues: l
                } = e, u = e => !this.getUniqueFieldValues({
                    collectionId: t,
                    fieldKey: e
                }), {
                    items: d,
                    totalCount: p,
                    nextCursor: f,
                    uniqueFieldValues: h
                } = await R(this, D).fetchData({
                    collectionId: t,
                    offset: n,
                    filter: o,
                    sort: a,
                    includes: i,
                    cursor: r ? null == c ? void 0 : c.cursor : void 0,
                    length: s,
                    uniqueFieldValues: l.filter((e => u(e)))
                }).catch(V("Data fetching failed", {
                    datasetConfig: e
                }));
                return await R(this, j), R(this, A).updateCollectionData({
                    collectionId: t,
                    data: {
                        items: d,
                        uniqueFieldValues: h
                    }
                }), {
                    items: d,
                    datasetSize: {
                        total: p,
                        loaded: ((null == c ? void 0 : c.loaded) || 0) + d.length,
                        cursor: f
                    },
                    uniqueFieldValues: h
                }
            }
            async remove(e) {
                let {
                    collectionId: t,
                    recordId: r
                } = e;
                return R(this, D).remove({
                    collectionId: t,
                    recordId: r
                }).catch(V("Record removing failed", {
                    collectionId: t,
                    recordId: r
                }))
            }
            async save(e) {
                let {
                    collectionId: t,
                    record: r,
                    includeReferences: n
                } = e;
                return R(this, D).save({
                    collectionId: t,
                    record: r,
                    includeReferences: n
                }).catch(V("Record saving failed", {
                    collectionId: t,
                    record: r,
                    includeReferences: n
                }))
            }
            async getSibling(e) {
                return await R(this, D).getSibling(e)
            }
            async loadSchemas(e) {
                const t = R(this, A).getSchemas(),
                    r = e.filter((e => !t[e]));
                _(this, j, r.length ? R(this, D).fetchSchemas(r).catch(V("Schema fetching failed", {
                    collectionIds: r
                })) : Promise.resolve({}));
                const n = await R(this, j);
                return R(this, A).updateSchemas({ ...t,
                    ...n
                }), R(this, A).getSchemas()
            }
            async setSchemas(e) {
                R(this, A).updateSchemas(e)
            }
            getSchemas() {
                return R(this, A).getSchemas()
            }
            getRecord(e) {
                let {
                    collectionId: t,
                    recordId: r,
                    includes: n
                } = e;
                return R(this, A).getRecord({
                    collectionId: t,
                    recordId: r,
                    includes: n
                })
            }
            getSchema(e) {
                return R(this, A).getSchema(e)
            }
            hasSchema(e) {
                return Boolean(this.getSchema(e))
            }
            getReferencedSchemas(e) {
                const t = this.getSchema(e),
                    r = R(this, A).getSchemas();
                return Object(i.e)(t).reduce(((e, t) => ({ ...e,
                    [t]: r[t]
                })), {})
            }
            setCollectionData(e) {
                let {
                    collectionId: t,
                    data: r
                } = e;
                r && R(this, A).updateCollectionData({
                    collectionId: t,
                    data: r
                })
            }
            setStore(e) {
                e && R(this, A).updateStore(e)
            }
            setStaticStore(e) {
                const {
                    recordsByCollectionId: t,
                    recordInfosInDatasetOrder: r,
                    uniqueFieldValuesByCollectionId: n
                } = e, o = R(this, N).find((e => {
                    let {
                        type: t
                    } = e;
                    return t === b.ROUTER_DATASET
                }));
                if (o) {
                    const {
                        datasetId: e
                    } = o, a = {
                        [e]: r[0]
                    };
                    R(this, A).updateStore({
                        recordsByCollectionId: t,
                        recordInfosByDatasetId: a,
                        uniqueFieldValuesByCollectionId: n
                    })
                }
            }
            getStore() {
                return R(this, A).getStore()
            }
            setUniqueFieldValues(e) {
                let {
                    collectionId: t,
                    fieldKey: r,
                    data: n
                } = e;
                return R(this, A).setUniqueFieldValues({
                    collectionId: t,
                    fieldKey: r,
                    data: n
                })
            }
            getUniqueFieldValues(e) {
                let {
                    collectionId: t,
                    fieldKey: r
                } = e;
                return R(this, A).getUniqueFieldValues({
                    collectionId: t,
                    fieldKey: r
                })
            }
            createSimpleFilter(e, t) {
                return R(this, D).createSimpleFilter(e, t)
            }
            setDatasetConfigs(e) {
                _(this, N, e)
            }
        }
        async function F(e) {
            try {
                const {
                    recordsByCollectionId: t,
                    recordInfosInDatasetOrder: r,
                    uniqueFieldValuesByCollection: n
                } = await R(this, S).log(new w.k("dataset/fetchPrimaryInitialData", (() => R(this, D).fetchBulkData(e))));
                return {
                    recordsByCollectionId: t,
                    recordInfosByDatasetId: r.reduce(((t, r, n) => {
                        let {
                            itemIds: o = [],
                            error: a,
                            nextCursor: i,
                            totalCount: s
                        } = r;
                        const c = e[n];
                        return a && R(this, S).log(new W("Initial data fetching failed for one of the datasets", {
                            cause: a,
                            extra: {
                                datasetConfig: c
                            }
                        })), t[c.datasetId] = {
                            itemIds: o,
                            datasetSize: {
                                total: s,
                                loaded: o.length,
                                cursor: i
                            }
                        }, t
                    }), {}),
                    uniqueFieldValuesByCollection: n
                }
            } catch (t) {
                throw new w.a("Initial data fetching failed", {
                    cause: t,
                    extra: {
                        datasetConfigs: e
                    }
                })
            }
        }
        async function U(e) {
            if (e.length) {
                const t = await Promise.all(e),
                    r = await T(this, M, F).call(this, t);
                await R(this, j), R(this, A).updateStore(r)
            }
        }
        class W {
            constructor(e, t) {
                let {
                    cause: r,
                    ...n
                } = t;
                return new(w.j.codes.includes(r.code) ? w.j : w.i)(e, { ...n,
                    cause: r,
                    code: r.code
                })
            }
        }
        const V = (e, t) => r => {
            throw new W(e, {
                cause: r,
                extra: t
            })
        };
        var G = r(22);
        const B = "PRIMARY";
        var q = r(3),
            z = r(8),
            $ = r(23),
            H = r(4),
            Y = r(34),
            X = r.n(Y);
        const K = e => !Array.isArray(e) && !Object(o.isPlainObject)(e),
            Z = function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return e(t) ? [{
                    path: Object(o.clone)(r),
                    filterExpression: t
                }] : K(t) ? [] : Object(o.flatMap)(t, ((t, n) => Z(e, t, r.concat(n))))
            };
        var Q = e => t => {
            let {
                filterId: r
            } = t;
            return H.Maybe.fromNullable(e(r)).chain((e => {
                let t, {
                    masterDataset: r,
                    fieldName: n
                } = e;
                try {
                    t = r.api.getCurrentItem()
                } catch {}
                return H.Maybe.fromNullable(t).map((e => {
                    const t = e[n];
                    return void 0 === t ? null : t
                }))
            }))
        };
        const J = e => te(e).chain((e => {
                let [t, r] = e;
                return "$not" === t && Object(o.isArray)(r) ? ee({
                    positive: !1,
                    filterExpression: r[0]
                }) : H.Maybe.Nothing()
            })).orElse((() => ee({
                positive: !0,
                filterExpression: e
            }))),
            ee = e => {
                let {
                    positive: t,
                    filterExpression: r
                } = e;
                return te(r).chain((e => {
                    let [r, n] = e;
                    return te(n).map((e => {
                        let [n, o] = e;
                        return {
                            field: r,
                            condition: n,
                            value: o,
                            positive: t
                        }
                    }))
                }))
            },
            te = e => {
                if (!Object(o.isPlainObject)(e)) return H.Maybe.Nothing();
                const t = Object(o.entries)(e)[0];
                return H.Maybe.fromNullable(t)
            },
            {
                stringArray: re,
                number: ne
            } = s.FieldType;
        var oe = r(21),
            ae = r.n(oe);
        const {
            Checkbox: ie,
            Dropdown: se
        } = ae.a, ce = e => e.type === ie ? "checked" : "value";
        var le = e => {
                let {
                    getConnectedComponents: t,
                    getFieldType: r
                } = e;
                return e => {
                    const n = t();
                    if (!n) return H.Maybe.Nothing();
                    const a = n.filter((e => {
                        let {
                            role: t
                        } = e;
                        return t === q.j
                    })).map((e => {
                        let {
                            component: t
                        } = e;
                        return t
                    }));
                    return J(e).map((e => {
                        let {
                            field: t,
                            condition: n,
                            value: i,
                            positive: s
                        } = e;
                        const c = ((e, t) => e.map((e => e === ne && "string" == typeof t && /^[+-]?(?:\d+\.?\d*|\d*\.?\d+)$/.test(t.trim()) ? Number(t) : e === re && 0 === Object(o.get)(t, "length", 0) ? null : t)).getOrElse(t))(r(t), ((e, t) => {
                            const {
                                filterId: r
                            } = e, n = t.find((e => e.connectionConfig.filters[r]));
                            if (n) return n[ce(n)]
                        })(i, a));
                        if (!c && 0 !== c) return {
                            $and: []
                        };
                        const l = {
                            [t]: {
                                [n]: c
                            }
                        };
                        return s ? l : {
                            $not: [l]
                        }
                    }))
                }
            },
            ue = r(36),
            de = r(37),
            pe = r(43);
        const fe = e => Object(ue.shouldResolve)(e) || Object(de.shouldResolve)(e) || he(e),
            he = e => J(e).map((e => {
                let {
                    value: t
                } = e;
                return Object(pe.shouldResolve)(t)
            })).getOrElse(!1),
            me = e => Z(de.shouldResolve, e),
            ge = e => !Object(o.isEmpty)(Z(pe.shouldResolve, e)),
            {
                WRITE: ye
            } = z,
            ve = [q.h],
            we = [q.i],
            be = (e, t, r) => {
                const {
                    readWriteType: n,
                    deferred: a,
                    filter: i,
                    collectionName: s
                } = e, c = n === ye, l = r.some((e => {
                    let {
                        role: t
                    } = e;
                    return t === q.f
                })), u = t === b.ROUTER_DATASET, d = Boolean(a) && !(l || u || c), p = i && (e => ge(e) || (e => !Object(o.isEmpty)(Z(ue.shouldResolve, e)))(e) || (e => me(e).length > 0)(e))(i), f = (e => {
                    let {
                        collectionId: t,
                        datasetHasDynamicFilter: r,
                        datasetIsDeferred: n,
                        datasetIsRouter: o,
                        datasetIsWriteOnly: a
                    } = e;
                    return t ? r || n || o || a ? "REGULAR" : B : "UNCONFIGURED"
                })({
                    collectionId: s,
                    datasetHasDynamicFilter: p,
                    datasetIsDeferred: d,
                    datasetIsRouter: u,
                    datasetIsWriteOnly: c
                });
                return {
                    sequenceType: f,
                    datasetIsWriteOnly: c,
                    datasetIsMaster: l,
                    datasetIsRouter: u,
                    datasetIsDeferred: d,
                    datasetHasDynamicFilter: p
                }
            },
            Ee = e => {
                const t = e.reduce(((e, t) => {
                    var r, n;
                    let {
                        config: o,
                        role: a,
                        compId: i
                    } = t;
                    const s = null == o || null === (r = o.properties) || void 0 === r || null === (n = r.value) || void 0 === n ? void 0 : n.fieldName;
                    if (!s) return e;
                    const c = "".concat(i, "-").concat(s);
                    return we.includes(a) ? (e.set(c, null), e) : (ve.includes(a) && !e.has(c) && e.set(c, s), e)
                }), new Map);
                return Object(o.compact)(Array.from(t.values()))
            },
            Ie = /[^{}]+(?=\})/g,
            Oe = /\{[^{}]+\}/g,
            Te = /[^\dA-Za-z]/g,
            Re = e => e.replace(/(\/{2,})/g, "/").replace(/^\//, "");
        var _e = r(33),
            Ce = r.n(_e);
        const Se = Symbol("isPristine"),
            De = e => e._id,
            Ae = e => ({ ...e,
                [Se]: !1
            }),
            Pe = (e, t) => ({ ...e,
                _id: t || Ce.a.v4(),
                [Se]: !0
            }),
            xe = (e, t) => e && t && e._id === t._id,
            je = e => Object(o.omit)(e, [Se]),
            Ne = {
                chain: e => t => e.matchWith({
                    Empty: () => e,
                    Results: e => {
                        let {
                            items: r,
                            datasetSize: n,
                            offset: o
                        } = e;
                        return t({
                            items: r,
                            datasetSize: n,
                            offset: o
                        })
                    }
                }),
                map: e => t => e.matchWith({
                    Empty: () => e,
                    Results: e => {
                        let {
                            items: r,
                            datasetSize: n,
                            offset: o
                        } = e;
                        const {
                            items: a = r,
                            datasetSize: i = n,
                            offset: s = o
                        } = t({
                            items: r,
                            datasetSize: n,
                            offset: o
                        });
                        return Me.Results(a, i, s)
                    }
                }),
                filter: e => t => e.matchWith({
                    Empty: () => e,
                    Results: r => {
                        let {
                            items: n,
                            datasetSize: o,
                            offset: a
                        } = r;
                        return t({
                            items: n,
                            datasetSize: o,
                            offset: a
                        }) ? e : Me.Empty()
                    }
                }),
                orElse: e => t => e.matchWith({
                    Empty: () => t(),
                    Results: () => e
                }),
                get: e => () => e.matchWith({
                    Empty: () => ({
                        items: [],
                        datasetSize: {
                            total: 0,
                            loaded: 0
                        },
                        offset: 0
                    }),
                    Results: e => e
                }),
                of: () => Le
            },
            Me = Object(H.union)("QueryResults", {
                Empty: () => ({}),
                Results: function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return {
                        items: e,
                        datasetSize: t,
                        offset: r
                    }
                }
            }, Ne);

        function Le(e) {
            let {
                items: t,
                datasetSize: r,
                offset: n
            } = e;
            return r && Math.max(r.total, r.loaded) > 0 && Array.isArray(t) ? Me.Results(t, r, n) : Me.Empty()
        }
        var ke = {
            Empty: Me.Empty,
            Results: Me.Results,
            fromWixDataQueryResults: function(e, t) {
                return e ? this.of({
                    items: e.items,
                    datasetSize: e.datasetSize,
                    offset: t
                }) : Me.Empty()
            },
            of: Le
        };
        const Fe = e => t => ({ ...t,
                ...e
            }),
            Ue = (e, t) => r => t(e(r))(r),
            We = (e, t, r) => {
                const n = new Map;
                return function() {
                    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                    const s = t(a),
                        c = n.get(s);
                    if (c && r(a, c.args)) return c.result;
                    const l = e.apply(this, a);
                    return n.set(s, {
                        args: a,
                        result: l
                    }), l
                }
            },
            Ve = e => Fe({
                records: e
            }),
            Ge = e => t => {
                var r, n, o;
                return { ...t,
                    datasetSize: {
                        cursor: null === (r = t.datasetSize) || void 0 === r ? void 0 : r.cursor,
                        total: ((null === (n = t.datasetSize) || void 0 === n ? void 0 : n.total) || 0) + e,
                        loaded: ((null === (o = t.datasetSize) || void 0 === o ? void 0 : o.loaded) || 0) + e
                    }
                }
            },
            Be = e => {
                let {
                    cursor: t,
                    loaded: r,
                    total: n
                } = e;
                return e => ({ ...e,
                    datasetSize: {
                        cursor: t,
                        loaded: r + He(e),
                        total: n + He(e)
                    }
                })
            },
            qe = e => ({ ...e,
                numSeedRecords: e.records.length
            }),
            ze = e => e.matchWith({
                Empty: () => Be({
                    total: 0,
                    loaded: 0
                }),
                Results: e => {
                    let {
                        items: t,
                        datasetSize: r
                    } = e;
                    return Object(o.flow)(Ve(t.map((e => De(e)))), Be(r), qe)
                }
            }),
            $e = e => t => ({ ...t,
                newRecordMarkers: e(t.newRecordMarkers)
            }),
            He = (e, t) => e.newRecordMarkers.filter((e => null == t || e <= t)).length,
            Ye = function(e, t) {
                let {
                    overwrite: r = !0,
                    fixIndex: n = !0
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const o = o => {
                    const a = e + (n ? He(o, e) : 0),
                        i = Math.max(0, a - o.records.length),
                        s = a + (r ? t.length : 0);
                    return o.records.slice(0, a).concat(new Array(i)).concat(t.map((e => De(e)))).concat(o.records.slice(s))
                };
                return Ue(o, Ve)
            },
            Xe = (e, t, r) => n => Object.assign({}, e(n), ...r.map((e => ({
                [t(e)]: e
            })))),
            Ke = (e, t, r) => n => ({ ...e(n),
                [t]: r(e(n)[t])
            }),
            Ze = (e, t) => r => Object.assign({}, ...Object.keys(e(r)).filter((e => e !== t)).map((t => ({
                [t]: e(r)[t]
            })))),
            Qe = e => Fe({
                records: e
            }),
            Je = e => Fe({
                drafts: e
            }),
            et = Object(o.curry)(((e, t, r) => Fe({
                scopes: { ...r.scopes,
                    [e]: t
                }
            })(r))),
            tt = e => t => t.scopes[e],
            rt = e => Ue(Xe((e => {
                let {
                    records: t
                } = e;
                return t
            }), De, e), Qe),
            nt = e => Ue(Ze((e => {
                let {
                    drafts: t
                } = e;
                return t
            }), De(e)), Je),
            ot = () => Je({}),
            at = e => e.matchWith({
                Empty: () => e => e,
                Results: e => {
                    let {
                        items: t
                    } = e;
                    return t.length > 0 ? rt(t) : e => e
                }
            }),
            it = (e, t, r, n) => {
                const a = t.records[e],
                    i = t.drafts[e],
                    s = Object(o.isPlainObject)(a),
                    c = Object(o.isPlainObject)(i);
                return s && c ? (e => {
                    let {
                        record: t,
                        draft: {
                            _id: r,
                            ...n
                        },
                        includes: a,
                        nestedFieldKeys: i
                    } = e;
                    const s = Object.keys(n).filter((e => (e => {
                            let {
                                record: t,
                                draft: r,
                                includes: n,
                                nestedFieldKeys: a,
                                fieldKey: i
                            } = e;
                            return (e => {
                                let {
                                    includes: t,
                                    nestedFieldKeys: r,
                                    fieldKey: n
                                } = e;
                                const o = null == t ? void 0 : t.includes(n),
                                    a = r.includes(n);
                                return o || a
                            })({
                                includes: n,
                                nestedFieldKeys: a,
                                fieldKey: i
                            }) && (e => {
                                let {
                                    record: t,
                                    draft: r,
                                    fieldKey: n
                                } = e;
                                return Object(o.isPlainObject)(t[n]) && Object(o.isPlainObject)(r[n])
                            })({
                                record: t,
                                draft: r,
                                fieldKey: i
                            })
                        })({
                            record: t,
                            draft: n,
                            includes: a,
                            nestedFieldKeys: i,
                            fieldKey: e
                        }))),
                        c = { ...t,
                            ...n
                        };
                    return s.reduce(((e, r) => ({ ...e,
                        [r]: Object(o.merge)({}, t[r], n[r])
                    })), c)
                })({
                    record: a,
                    draft: i,
                    includes: r,
                    nestedFieldKeys: n
                }) : s ? { ...a
                } : c ? { ...i
                } : null
            },
            st = Object(o.curry)(((e, t, r) => Object.keys(r.scopes).filter((e => t(r.scopes[e], e))).map((t => e(r.scopes[t], t))))),
            ct = Object(o.curry)((function(e, t, r, n, o, a) {
                let i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                const {
                    records: s,
                    datasetSize: c
                } = tt(e)(a), l = r - t, u = s.slice(t, r), d = u.reduce(((e, t) => {
                    const r = it(t, a, n, o);
                    return null != r ? e.concat(je(r)) : e
                }), []);
                return ke.of({
                    items: d,
                    datasetSize: c,
                    offset: t
                }).filter(p);

                function p(e) {
                    let {
                        items: t
                    } = e;
                    return i || t.length >= l
                }
            })),
            lt = Object(o.curry)(((e, t) => Ue(Object(o.flow)(tt(e), t), et(e)))),
            ut = Object(o.curry)(((e, t) => Fe({
                [e]: t
            }))),
            dt = e => t => t[e],
            pt = Object(o.curry)(((e, t) => Ue(Object(o.flow)(dt(e), t), ut(e))));
        var ft = r(2);
        const ht = e => {
                let {
                    recordStore: t
                } = e;
                return t().fold((() => null), (e => e.isCursorPaging()))
            },
            mt = e => {
                let {
                    state: t
                } = e;
                const {
                    size: r
                } = Object(ft.e)(t);
                return r
            },
            gt = e => {
                let {
                    state: t
                } = e;
                const {
                    offset: r
                } = Object(ft.e)(t);
                return r
            },
            yt = e => {
                let {
                    state: t
                } = e;
                const {
                    size: r,
                    numPagesToShow: n
                } = Object(ft.e)(t);
                return r * n
            },
            vt = e => {
                let {
                    state: t
                } = e;
                const r = Object(ft.o)(t);
                return null == r ? null : r
            },
            wt = e => {
                let {
                    state: t
                } = e;
                if (null == vt({
                        state: t
                    })) return null;
                const {
                    size: r,
                    offset: n,
                    numPagesToShow: o
                } = Object(ft.e)(t);
                return n / r + o
            },
            bt = e => {
                let {
                    recordStore: t
                } = e;
                return t().fold((() => null), (e => e.getDatasetSize()))
            },
            Et = e => {
                let {
                    state: t,
                    recordStore: r
                } = e;
                const n = bt({
                    recordStore: r
                });
                return n ? Math.ceil(n.total / mt({
                    state: t
                })) : null
            },
            It = e => {
                let {
                    recordStore: t
                } = e;
                return t().fold((() => !1), (e => {
                    const t = e.getDatasetSize();
                    return e.isCursorPaging() && !(null == t || !t.cursor)
                }))
            },
            Ot = e => {
                let {
                    state: t
                } = e;
                const r = vt({
                    state: t
                });
                return null != r && r > 0
            },
            Tt = e => {
                let {
                    state: t,
                    recordStore: r
                } = e;
                if (It({
                        recordStore: r
                    })) return !0;
                const n = bt({
                    recordStore: r
                });
                if (!n) return !1;
                const o = vt({
                    state: t
                });
                return null != o && o < n.total - 1
            },
            Rt = e => {
                let {
                    state: t
                } = e;
                const {
                    offset: r
                } = Object(ft.e)(t);
                return r > 0
            },
            _t = e => {
                let {
                    state: t,
                    recordStore: r
                } = e;
                if (It({
                        recordStore: r
                    })) return !0;
                const n = bt({
                    recordStore: r
                });
                if (!n) return !1;
                const {
                    offset: o,
                    size: a
                } = Object(ft.e)(t);
                return o + a < n.total
            },
            Ct = e => {
                let {
                    state: t
                } = e;
                const r = vt({
                    state: t
                });
                return null == r ? 0 : r + 1
            },
            St = async e => {
                let {
                    index: t,
                    recordStore: r
                } = e;
                await r().fold((() => {}), (e => e.getRecords(t, 1)))
            },
            Dt = e => e === z.WRITE,
            At = e => {
                let [{
                    datasetId: t
                }] = e;
                return t
            },
            Pt = (e, t) => {
                let [r] = e, [n] = t;
                return Object(o.every)(r, ((e, t) => {
                    return "filter" === t ? (r = e, o = n[t], JSON.stringify(r) === JSON.stringify(o)) : e === n[t];
                    var r, o
                }))
            };
        var xt = e => {
                let {
                    primaryDatasetId: t,
                    recordStoreCache: r,
                    refreshStoreCache: a,
                    dataProvider: c,
                    mainCollectionName: l,
                    includes: u,
                    nestedFieldKeys: d,
                    uniqueFieldValues: p,
                    readWriteType: f,
                    cursorPagingRequired: h
                } = e;
                const {
                    breadcrumbReporting: m
                } = n.b, g = () => r[t], y = e => {
                    r[t] = e
                };
                (Object(o.isEmpty)(g()) || a || Dt(f)) && y((e => ({
                    [e]: {
                        records: {},
                        drafts: {},
                        scopes: {}
                    }
                }))(l));
                const v = [],
                    b = We((e => {
                        let {
                            pageSize: t,
                            sort: r,
                            filter: n,
                            datasetId: a,
                            referencedCollectionName: b,
                            fixedRecordId: E
                        } = e;
                        const I = null != b ? b : l,
                            O = JSON.stringify({
                                filter: n,
                                sort: r
                            }),
                            T = dt(I),
                            R = pt(I),
                            _ = Object(o.flow)(T, tt(O)),
                            C = lt(O),
                            S = () => c.getSchema(I),
                            D = e => e - e % t,
                            A = Object(o.memoize)((e => {
                                let {
                                    offset: t,
                                    length: o,
                                    datasetSize: i
                                } = e;
                                return c.getData({
                                    datasetId: a,
                                    length: o,
                                    collectionId: I,
                                    cursorPaging: k.isCursorPaging(),
                                    offset: t,
                                    filter: n,
                                    sort: r,
                                    includes: null != b ? void 0 : u,
                                    uniqueFieldValues: p,
                                    datasetSize: i
                                }).then((e => ({
                                    items: e.items,
                                    datasetSize: e.datasetSize,
                                    offset: t
                                })))
                            }), (e => {
                                let {
                                    offset: t,
                                    length: r,
                                    datasetSize: n
                                } = e;
                                return [t, r, null == n ? void 0 : n.cursor].join("-")
                            })),
                            P = (e, t, r) => X()(H.Result, v.map((n => H.Result.try((() => n(null != e ? je(e) : null, null != t ? je(t) : null, r)))))),
                            x = function(e, t, r) {
                                const n = _(g()).records[r],
                                    a = it(n, T(g()), u, d);
                                if (null == a) return t(); {
                                    const t = function() {
                                            y(Object(o.flow)(...arguments)(g()))
                                        },
                                        l = e => {
                                            const t = it(n, T(g()), u, d);
                                            return Object(o.isEqual)(a, t) ? H.Result.Ok([]) : P(a, t, e)
                                        };
                                    for (var i = arguments.length, s = new Array(i > 3 ? i - 3 : 0), c = 3; c < i; c++) s[c - 3] = arguments[c];
                                    return e({
                                        update: t,
                                        notifyIfChanged: l
                                    }, a, r, ...s)
                                }
                            },
                            j = (e, t) => function(r) {
                                for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                                return x(e, t, r, ...o)
                            },
                            N = (e, t) => async function(r) {
                                for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                                return x(e, t, r, ...o)
                            },
                            M = (e, t) => m(t, w.c.with({
                                category: "recordStore",
                                message: e,
                                data: {
                                    datasetId: a,
                                    scope: O
                                }
                            })),
                            L = e => {
                                return e && (t = De(e), !T(g()).records[t]);
                                var t
                            },
                            k = {
                                getRecords: M("getRecords", (async (e, r) => {
                                    const {
                                        datasetSize: n
                                    } = _(g()), a = (e => {
                                        let {
                                            from: t,
                                            length: r,
                                            datasetSize: n,
                                            cursorPaging: o
                                        } = e;
                                        if (!n) return t + r;
                                        const {
                                            total: a,
                                            loaded: i,
                                            cursor: s
                                        } = n, c = o ? s ? 1 / 0 : i : a;
                                        return Math.min(t + r, c)
                                    })({
                                        from: e,
                                        length: r,
                                        datasetSize: n,
                                        cursorPaging: k.isCursorPaging()
                                    }), c = ct(O, e, a, u, d), l = Dt(f) || !n || (e => {
                                        let {
                                            loaded: t,
                                            total: r,
                                            cursor: n
                                        } = e;
                                        return !t && !r && !n
                                    })(n);
                                    return c(T(g()), l).orElse((async () => {
                                        const r = await ((e, r, n) => {
                                                const a = k.isCursorPaging() ? 0 : D(r),
                                                    c = (l = r, u = n, Math.ceil((D(l) + (u - D(l))) / t) * t);
                                                var l, u;
                                                const d = Object(i.g)(S()) || s.DefaultMaxPageSize[k.getPaging()],
                                                    p = ((e, t, r) => {
                                                        const n = e.records.slice(t, r),
                                                            o = n.findIndex(d),
                                                            a = ((e, t) => {
                                                                if (t.length > 0)
                                                                    for (let r = t.length - 1; r >= 0; r -= 1)
                                                                        if (e(t[r])) return r;
                                                                return -1
                                                            })(d, n),
                                                            i = p(o, t),
                                                            s = p(a, r),
                                                            c = He(e, i),
                                                            l = i - c,
                                                            u = s - c - l;
                                                        return 0 === u ? H.Maybe.Nothing() : H.Maybe.Just({
                                                            offset: l,
                                                            length: u
                                                        });

                                                        function d(e) {
                                                            return "string" != typeof e
                                                        }

                                                        function p(t, r) {
                                                            return -1 === t ? Math.max(e.records.length, r) : o + r
                                                        }
                                                    })(e, a, c);
                                                return f = p.map((e => {
                                                    let {
                                                        offset: t,
                                                        length: r
                                                    } = e;
                                                    return r <= d ? [{
                                                        offset: t,
                                                        length: r
                                                    }] : Object(o.flatten)(Object(o.times)(Math.ceil(r / d), (e => [{
                                                        offset: t + e * d,
                                                        length: Math.min(d, r - e * d)
                                                    }])))
                                                })).getOrElse([]), k.isCursorPaging() ? (async e => {
                                                    const t = [];
                                                    let {
                                                        datasetSize: r
                                                    } = _(g());
                                                    for (const {
                                                            offset: n,
                                                            length: o
                                                        } of e) {
                                                        const e = await A({
                                                            offset: n,
                                                            length: o,
                                                            datasetSize: r
                                                        });
                                                        if (t.push(e), r = e.datasetSize, !r.cursor) break
                                                    }
                                                    return t
                                                })(f) : Promise.all(f.map((e => {
                                                    let {
                                                        offset: t,
                                                        length: r
                                                    } = e;
                                                    return A({
                                                        offset: t,
                                                        length: r
                                                    })
                                                })));
                                                var f
                                            })(_(g()), e, a),
                                            n = R(Object(o.flow)(...r.map((e => {
                                                let {
                                                    items: t,
                                                    datasetSize: r,
                                                    offset: n
                                                } = e;
                                                return ke.fromWixDataQueryResults({
                                                    items: t,
                                                    datasetSize: r
                                                }, n)
                                            })).map((e => Object(o.flow)(at(e), C(e.matchWith({
                                                Empty: () => Be({
                                                    total: 0,
                                                    loaded: 0
                                                }),
                                                Results: e => {
                                                    let {
                                                        items: t,
                                                        datasetSize: r,
                                                        offset: n
                                                    } = e;
                                                    return Object(o.flow)(Be(r), t.length > 0 ? Ye(n, t) : e => e)
                                                }
                                            }))))))),
                                            l = g();
                                        var u, d;
                                        return y(n(g())), u = T(l), d = T(g()), Object.keys(u.records).filter((e => Object(o.isPlainObject)(d.records[e]) && d.records[e]._updatedDate > u.records[e]._updatedDate)).forEach((e => P(u.records[e], d.records[e]))), c(T(g()), !0)
                                    }))
                                })),
                                getRecordsLimitedByMaxPageSize: (e, t) => {
                                    const r = Math.min(t, Object(i.g)(S()) || t);
                                    return k.getRecords(e, r)
                                },
                                seed: M("seed", (() => 0 === _(g()).numSeedRecords ? (E ? c.getData({
                                    datasetId: a,
                                    length: t,
                                    collectionId: I,
                                    cursorPaging: void 0,
                                    offset: 0,
                                    filter: n,
                                    sort: r,
                                    includes: null != b ? void 0 : u,
                                    uniqueFieldValues: p
                                }) : c.getInitialData({
                                    datasetId: a,
                                    collectionId: I,
                                    filter: n,
                                    sort: r,
                                    includes: u,
                                    length: t,
                                    uniqueFieldValues: p
                                })).then((e => {
                                    const t = ke.fromWixDataQueryResults(e, 0),
                                        r = R(Object(o.flow)(at(t), C(ze(t))));
                                    y(r(g()))
                                })) : Promise.resolve())),
                                getTheStore: g,
                                getPaging: () => (e => {
                                    var t, r, n;
                                    let {
                                        schema: o,
                                        cursorPagingPreferred: a
                                    } = e;
                                    const i = null == o || null === (t = o.pagingMode) || void 0 === t ? void 0 : t.includes(s.PagingMode.Offset),
                                        c = null == o || null === (r = o.pagingMode) || void 0 === r ? void 0 : r.includes(s.PagingMode.Cursor);
                                    return 1 === (null == o || null === (n = o.pagingMode) || void 0 === n ? void 0 : n.length) && c || i && c && a ? s.PagingMode.Cursor : s.PagingMode.Offset
                                })({
                                    schema: S(),
                                    cursorPagingPreferred: h
                                }),
                                isCursorPaging: () => k.getPaging() === s.PagingMode.Cursor,
                                getSeedRecords: M("getSeedRecords", (() => ct(O, 0, _(g()).numSeedRecords, u, d, T(g()), !0))),
                                getDatasetSize: M("getDatasetSize", (() => _(g()).datasetSize)),
                                getRecordById: M("getRecordById", (e => H.Maybe.fromNullable(T(g()).records[e]))),
                                removeRecord: M("removeRecord", N((async (e, t, r) => {
                                    let {
                                        update: n,
                                        notifyIfChanged: a
                                    } = e;
                                    const i = De(t);
                                    !L(t) && i && await c.remove({
                                        collectionId: I,
                                        recordId: i
                                    }), A.cache.clear();
                                    const s = st(((e, t) => {
                                        return lt(t, Object(o.flow)((n = i, Ue((e => e.records.filter((e => e !== n))), Ve)), Ge(-1), $e((r = ((e, t) => t.records.indexOf(e))(i, e), e => e.filter((e => e !== r))))));
                                        var r, n
                                    }), (l = i, e => e.records.includes(l)), T(g()));
                                    var l;
                                    return n(R(Object(o.flow)(Object(o.flow)(nt(t), (e => Ue(Ze((e => {
                                        let {
                                            records: t
                                        } = e;
                                        return t
                                    }), e), Qe))(i)), ...s))), a()
                                }), (() => Promise.resolve(H.Result.Error("cannot remove record: index not found"))))),
                                reset: M("reset", (() => {
                                    A.cache.clear(), y(R(Object(o.flow)(et(O, {
                                        records: [],
                                        numSeedRecords: 0,
                                        newRecordMarkers: []
                                    }), ot()))(g()))
                                })),
                                newRecord: M("newRecord", ((e, t) => {
                                    const r = Pe(t),
                                        n = R(Object(o.flow)((e => Ue(Xe((e => {
                                            let {
                                                drafts: t
                                            } = e;
                                            return t
                                        }), De, [e]), Je))(r), C(Object(o.flow)(Ge(1), Fe({
                                            newRecordMarkers: [e]
                                        }), Ye(e, [r], {
                                            overwrite: !1,
                                            fixIndex: !1
                                        })))));
                                    return y(n(g())), P(null, r), je(r)
                                })),
                                saveRecord: M("saveRecord", N((async (e, t, r) => {
                                    let {
                                        update: n,
                                        notifyIfChanged: a
                                    } = e;
                                    const i = await c.save({
                                        collectionId: I,
                                        record: je(t),
                                        includeReferences: !0
                                    });
                                    return n(R(Object(o.flow)((e => rt([e]))(i), nt(t), C(Object(o.flow)(((e, t) => Ye(e, [t], {
                                        fixIndex: !1
                                    }))(r, i), $e((e => e.filter((e => e !== r))))))))), a(), je(i)
                                }), (() => Promise.reject(new Error("cannot save record: index not found"))))),
                                setFieldsValues: M("setFieldsValues", j(((e, t, r, n, a) => {
                                    let {
                                        update: i,
                                        notifyIfChanged: s
                                    } = e;
                                    return Object.keys(n).length && i(R(((e, t) => Ue(Ke((e => {
                                        let {
                                            drafts: t
                                        } = e;
                                        return t
                                    }), e, Object(o.flow)(Ae, (e => t => Object.entries(e).reduce(((e, t) => {
                                        let [r, n] = t;
                                        return Object(o.set)(e, r, n)
                                    }), Object(o.cloneDeep)(t)))(t))), Je))(De(t), n))), s(a)
                                }), (() => H.Result.Error("cannot update field values: index not found")))),
                                isPristine: M("isPristine", j(((e, t) => (e => "boolean" != typeof e[Se] || e[Se])(t)), (() => !0))),
                                hasDraft: M("hasDraft", j(((e, t) => (e => "boolean" == typeof e[Se])(t)), (() => !1))),
                                isNewRecord: M("isNewRecord", j(((e, t) => L(t)), (() => !0))),
                                clearDrafts: M("clearDrafts", (() => {
                                    y(R(ot())(g()))
                                })),
                                resetDraft: M("resetDraft", j(((e, t, r, n) => {
                                    let {
                                        update: o,
                                        notifyIfChanged: a
                                    } = e;
                                    return o(R(L(t) ? ((e, t) => Ue(Ke((e => {
                                        let {
                                            drafts: t
                                        } = e;
                                        return t
                                    }), De(e), (e => Pe(t, e._id))), Je))(t, n) : nt(t))), a()
                                }), (() => H.Result.Error("cannot reset draft: index not found")))),
                                hasSeedData: M("hasSeedData", (() => _(g()).numSeedRecords > 0)),
                                getUniqueFieldValues: M("getUniqueFieldValues", (e => c.getUniqueFieldValues({
                                    collectionId: I,
                                    fieldKey: e
                                })))
                            };
                        if (T(g()) || y(ut(I, {
                                records: {},
                                drafts: {},
                                scopes: {}
                            })(g())), !T(g()).scopes[O]) {
                            const e = [];
                            if (E) {
                                const t = c.getRecord({
                                        collectionId: I,
                                        recordId: E,
                                        includes: u
                                    }) || it(E, T(g()), u, d),
                                    r = t ? [t] : [],
                                    n = r.length > 0 ? ke.of({
                                        items: r,
                                        offset: 0,
                                        datasetSize: {
                                            loaded: r.length,
                                            total: r.length
                                        }
                                    }) : ke.Empty(),
                                    a = n.matchWith({
                                        Empty: H.Maybe.Nothing,
                                        Results: Object(o.flow)(ke.of, H.Maybe.Just)
                                    });
                                Object(o.some)(r, L) && e.push(at(n)), a.fold((() => {
                                    e.push(et(O, {
                                        records: [],
                                        numSeedRecords: 0,
                                        newRecordMarkers: []
                                    }))
                                }), (t => {
                                    e.push(et(O, ze(t)({
                                        records: [],
                                        numSeedRecords: 0,
                                        newRecordMarkers: []
                                    })))
                                }))
                            } else e.push(et(O, {
                                records: [],
                                numSeedRecords: 0,
                                newRecordMarkers: []
                            }));
                            y(R(Object(o.flow)(...e))(g()))
                        }
                        return k.externalApi = {
                            getRecords: async (e, t) => (await k.getRecords(e, t)).map((e => {
                                let {
                                    items: t,
                                    ...r
                                } = e;
                                return {
                                    items: Object(o.cloneDeep)(t),
                                    ...r
                                }
                            })),
                            getSeedRecords: () => k.getSeedRecords().map((e => {
                                let {
                                    items: t,
                                    ...r
                                } = e;
                                return {
                                    items: Object(o.cloneDeep)(t),
                                    ...r
                                }
                            })),
                            getRecordsLimitedByMaxPageSize: async (e, t) => (await k.getRecordsLimitedByMaxPageSize(e, t)).map((e => {
                                let {
                                    items: t,
                                    ...r
                                } = e;
                                return {
                                    items: Object(o.cloneDeep)(t),
                                    ...r
                                }
                            }))
                        }, k
                    }), At, Pt);
                var E;
                return b.onChange = (E = v, e => (E.push(e), () => {
                    const t = E.indexOf(e);
                    t >= 0 && E.splice(t, 1)
                })), b
            },
            jt = r(62),
            Nt = r(6);
        const Mt = Object(H.union)("GoToIndexResult", {
                Record: (e, t) => ({
                    index: e,
                    record: t
                }),
                InvalidIndex: () => ({}),
                NoRecord: () => ({})
            }),
            Lt = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return {
                    type: Nt.a.GO_TO_INDEX,
                    index: e,
                    suppressRefreshView: t
                }
            },
            kt = (e, t) => ({
                type: Nt.a.UPDATE_FIELDS,
                fieldsToUpdate: e,
                updateSource: t
            }),
            Ft = e => ({
                type: Nt.a.NEW_RECORD,
                atIndex: e
            }),
            Ut = () => ({
                type: Nt.a.REFRESH
            }),
            Wt = async (e, t, r, n) => (await e(n).fold((() => ke.Empty()), (e => e.externalApi.getRecords(t, r)))).get(),
            Vt = (e, t) => Wt(e, gt({
                state: t
            }), yt({
                state: t
            }));
        var Gt = {
                doFetch: Wt,
                fetchCurrentPage: Vt,
                flushDraft: () => ({
                    type: Nt.a.SAVE_RECORD
                }),
                goToRecordByIndexResult: (e, t) => ({
                    type: Nt.a.GET_RECORD_BY_INDEX_RESULT,
                    error: e,
                    payload: t
                }),
                incrementNumOfPagesToShow: () => ({
                    type: Nt.a.INCREMENT_NUM_PAGES_TO_SHOW
                }),
                initWriteOnly: e => e ? Lt(0) : Ft(0),
                loadPage: e => ({
                    type: Nt.a.LOAD_PAGE,
                    pageNumber: e
                }),
                newRecord: Ft,
                newRecordResult: (e, t) => ({
                    type: Nt.a.NEW_RECORD_RESULT,
                    error: e,
                    payload: t
                }),
                nextPage: () => ({
                    type: Nt.a.GO_TO_NEXT_PAGE
                }),
                previousPage: () => ({
                    type: Nt.a.GO_TO_PREVIOUS_PAGE
                }),
                reInitWriteOnly: () => Ft(0),
                refresh: Ut,
                refreshCurrentRecord: () => ({
                    type: Nt.a.REFRESH_CURRENT_RECORD
                }),
                refreshCurrentView: () => ({
                    type: Nt.a.REFRESH_CURRENT_VIEW
                }),
                refreshResult: (e, t) => ({
                    type: Nt.a.GET_RECORD_BY_INDEX_RESULT,
                    error: e,
                    payload: t
                }),
                remove: () => ({
                    type: Nt.a.REMOVE_CURRENT_RECORD
                }),
                removeCurrentRecordResult: (e, t) => ({
                    type: Nt.a.REMOVE_CURRENT_RECORD_RESULT,
                    error: e,
                    payload: t
                }),
                revert: () => ({
                    type: Nt.a.REVERT_CHANGES
                }),
                revertResult: (e, t) => ({
                    type: Nt.a.RECORD_REVERTED,
                    error: e,
                    payload: t
                }),
                saveRecordResult: (e, t) => ({
                    type: Nt.a.SAVE_RECORD_RESULT,
                    error: e,
                    payload: t
                }),
                setCurrentIndex: Lt,
                setCurrentRecord: (e, t, r) => ({
                    type: Nt.a.SET_CURRENT_RECORD,
                    record: e,
                    recordIndex: t,
                    updateSource: r
                }),
                setDefaultRecord: e => ({
                    type: Nt.a.SET_DEFAULT_RECORD,
                    record: e
                }),
                updateCurrentViewResult: (e, t) => ({
                    type: Nt.a.CURRENT_VIEW_UPDATED,
                    error: e,
                    payload: t
                }),
                updateFields: kt,
                GoToIndexResult: Mt
            },
            Bt = r(17),
            qt = r(14),
            zt = e => ({
                type: qt.a.SET_IS_DATASET_READY,
                isDatasetReady: e
            }),
            $t = r(19),
            Ht = r(29),
            Yt = r(63),
            Xt = r.n(Yt);
        const {
            READ: Kt,
            WRITE: Zt,
            READ_WRITE: Qt
        } = z, Jt = {
            [Kt]: "read-only",
            [Zt]: "write-only",
            [Qt]: "read-write"
        }, er = (e, t, r) => {
            if (!Object(ft.h)(e())) throw new w.h(r === b.ROUTER_DATASET ? "Operation (".concat(t, ") is not allowed because the field used to build this page's URL is empty") : "Operation (".concat(t, ") not allowed on an unconfigured dataset"), {
                code: "OPERATION_NOT_ALLOWED"
            })
        }, tr = function(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            const n = Object(ft.f)(e());
            if (!Object(o.includes)(r, n)) throw new w.h("Operation (".concat(t, ") not allowed on ").concat(Jt[n], " dataset"), {
                code: "OPERATION_NOT_ALLOWED"
            })
        }, rr = (e, t) => {
            if (e) throw new w.h("Operation (".concat(t, ") not allowed on a dataset with non-offset paging mode"), {
                code: "OPERATION_NOT_ALLOWED"
            })
        }, nr = (e, t) => {
            if (Object(ft.j)(e())) throw new w.h("Operation (".concat(t, ") not allowed during save"), {
                code: "OPERATION_NOT_ALLOWED"
            })
        }, or = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                r = arguments.length > 2 ? arguments[2] : void 0,
                n = arguments.length > 3 ? arguments[3] : void 0,
                o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
            er(e, t, n), tr(e, t, r), o || nr(e, t)
        }, ar = (e, t) => {
            if (!Object(o.isNumber)(t)) throw new w.h("Parameter (".concat(e, ") must be a number"), {
                code: "DS_INVALID_ARGUMENT"
            })
        }, ir = (e, t) => {
            if (!Object(o.isInteger)(t) || t < 1) throw new w.h("Parameter (".concat(e, ") must be a positive integer number"), {
                code: "DS_INVALID_ARGUMENT"
            })
        }, sr = e => {
            let {
                index: t,
                datasetSize: {
                    total: r,
                    loaded: n
                }
            } = e;
            if (t < 0 || t > Math.max(r, n)) throw new w.h("Invalid index", {
                code: "DS_INDEX_OUT_OF_RANGE"
            })
        }, cr = (e, t) => {
            if (!Object(o.isFunction)(t)) throw new w.h("The callback passed to (".concat(e, ") must be a function"), {
                code: "DS_INVALID_ARGUMENT"
            })
        }, lr = (e, t) => {
            if (!Object(ft.i)(e())) throw new w.h("The dataset didn't load yet. You need to call ".concat(t, " inside the onReady for the dataset."), {
                code: "DS_NOT_LOADED"
            })
        }, ur = e => {
            if (null == vt({
                    state: e()
                })) throw new w.h("There is no current item", {
                code: "DS_NO_CURRENT_ITEM"
            })
        }, dr = (e, t) => {
            if (e) throw new w.h('The "'.concat(t, '" function cannot be called on the dataset because the dataset was selected using a repeated item scope selector.\nRead more about repeated item scope selectors: http://wix.to/94BuAAs/$w.Repeater.html#repeated-item-scope'), {
                code: "OPERATION_NOT_ALLOWED"
            })
        }, pr = (e, t) => {
            if (e !== b.ROUTER_DATASET) throw new w.h('"'.concat(t, '" function on the dataset is not allowed. "').concat(t, '" can only be called on a Dynamic Page Dataset.'), {
                code: "OPERATION_NOT_ALLOWED"
            })
        }, {
            READ: fr,
            WRITE: hr,
            READ_WRITE: mr
        } = z;
        var gr = e => "onChange" in e && ("value" in e || "checked" in e);
        const yr = [q.b, q.n, q.C],
            vr = [q.h, q.j, q.y],
            wr = e => e.filter((e => {
                let {
                    role: t,
                    component: r
                } = e;
                return !vr.includes(t) && gr(r)
            })),
            br = (e, t) => e.filter((e => {
                let {
                    role: t
                } = e;
                return Object(o.includes)(yr, t)
            })).filter((e => {
                let {
                    connectionConfig: r
                } = e;
                return Object(o.includes)(t, Object(o.get)(r, "events.onClick.action"))
            })),
            Er = (e, t, r, n, o) => {
                e.enabled !== r && (r ? e.enable() : e.disable(), n.log(new w.c({
                    category: "components",
                    message: "".concat(t, " changed to ").concat(r ? "enabled" : "disabled", " (dataset: ").concat(o, ")")
                })))
            },
            {
                richText: Ir
            } = s.FieldType,
            Or = {
                $text: e => e.map((e => e === Ir ? "html" : "text")).getOrElse("text")
            };
        var Tr = {
            properties: {},
            events: {}
        };
        const Rr = e => {
                let {
                    getFieldType: t,
                    role: r,
                    compId: n,
                    component: a,
                    $w: i,
                    api: s
                } = e;
                const c = H.Maybe.fromNullable(a.connectionConfig).filter(o.isPlainObject).map((e => ((e, t, r) => {
                    let {
                        connectionConfig: n
                    } = e;
                    return H.Maybe.fromNullable(Object(o.get)(n, "properties")).map((e => Object(o.mapKeys)(n.properties, ((e, t) => Object(o.startsWith)(t, "$") ? ((e, t, r) => H.Maybe.fromNullable(Or[e]).map((e => e(r(t.fieldName)))).getOrElse(e))(t, e, r) : t)))).map((e => Object(o.assign)({}, n, {
                        properties: e
                    }))).getOrElse(n)
                })({
                    connectionConfig: e
                }, 0, t))).getOrElse(Tr);
                return r === q.p && (a = i("Document")), {
                    role: r,
                    compId: n,
                    connectionConfig: c,
                    component: a,
                    api: s
                }
            },
            _r = "PRIMARY",
            Cr = "DETAILS",
            Sr = e => {
                let {
                    datasetId: t,
                    repeaterCompId: r,
                    masterIds: n,
                    connectionsGraph: o
                } = e;
                return o[t].includes(r) ? _r : n.some((e => o[e].includes(r))) ? Cr : "OTHER"
            },
            {
                Repeater: Dr
            } = ae.a,
            Ar = e => {
                const t = H.Maybe.fromNullable(e).chain((e => {
                    let {
                        parent: t
                    } = e;
                    return H.Maybe.fromNullable(t)
                }));
                return t.filter((e => {
                    let {
                        type: t
                    } = e;
                    return (e => [Dr].includes(e))(t)
                })).orElse((() => t.chain((e => Ar(e)))))
            };
        var Pr = r(16);
        const xr = e => {
            let {
                previousRecord: t,
                currentRecord: r,
                fieldName: n
            } = e;
            return !Object(o.isEqual)(Object(Pr.a)(t, n), Object(Pr.a)(r, n))
        };
        var jr = e => {
                let {
                    previousRecord: t,
                    currentRecord: r,
                    fieldName: n
                } = e;
                return (e => !e)(t) || xr({
                    previousRecord: t,
                    currentRecord: r,
                    fieldName: n
                })
            },
            Nr = e => {
                let {
                    component: t,
                    fieldType: r,
                    propPath: n,
                    value: a,
                    modeIsLivePreview: i
                } = e;
                const s = ((e, t) => {
                    return "reference" === t && (r = e, Object(o.isObject)(r) && Object(o.has)(r, "_id"));
                    var r
                })(a, r) ? a._id : a;
                (e => {
                    let {
                        type: t
                    } = e;
                    return t === ae.a.SignatureInput
                })(t) ? s || t.clear(): i && (e => void 0 === e || "" === e || Array.isArray(e) && 0 === e.length)(s) || ((e, t, r) => {
                    const n = t.split("."),
                        a = n.slice(0, -1),
                        i = n.slice(-1);
                    (a.length > 0 ? Object(o.get)(e, a) : e)[i] = r
                })(t, n, s)
            },
            Mr = e => {
                const {
                    properties: t,
                    events: r,
                    behaviors: n
                } = e, a = {};
                return Object(o.forEach)(t, ((e, t) => {
                    let {
                        fieldName: r
                    } = e;
                    a[t] = r
                })), Object(o.forEach)(r, ((e, t) => {
                    let {
                        action: r
                    } = e;
                    a[t] = r
                })), Object(o.forEach)(n, (e => {
                    let {
                        type: t
                    } = e;
                    a.text = t
                })), a
            };
        const {
            mediaGallery: Lr
        } = s.FieldType;
        var kr = e => e === Lr ? [] : void 0,
            Fr = r(24);
        const Ur = "/_api/cm-server",
            Wr = ("".concat(Ur, "/dbsm-editor-app"), Fr.DATA_BINDING, "https://static.parastorage.com/services/dbsm-editor-app/1.329.0/".concat("locale/data-binding"), Fr.WIX_CODE, "".concat(Ur, "/auto-cms"), "datetime"),
            Vr = e => /^\d{2}:\d{2}:\d{2}\.\d{3}$/.test(e),
            Gr = e => e instanceof Date && !isNaN(e),
            Br = e => {
                let {
                    time: t,
                    date: r
                } = e;
                const [n, o] = t.split(":");
                return r.setHours(n), r.setMinutes(o), r.setSeconds(0), r.setMilliseconds(0), r
            },
            qr = e => "".concat(e.toTimeString().split(" ")[0], ".000"),
            zr = e => {
                const t = new Date(e);
                return Gr(t) ? t : (e => {
                    const t = new Date;
                    return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t
                })()
            },
            $r = e => String(e).padStart(2, "0"),
            Hr = e => [e.getFullYear(), $r(e.getMonth() + 1), $r(e.getDate())].join("-");
        var Yr = r(28);
        const {
            mediaGallery: Xr,
            address: Kr,
            date: Zr
        } = s.FieldType;
        var Qr = function(e) {
                var t = function(e) {
                    var t = 0;
                    if (void 0 === e || 0 === e.length) return t;
                    for (var r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r), t |= 0;
                    return t *= Math.sign(t), t = Math.sqrt(t), Math.floor(1e6 * (t - Math.floor(t)))
                }(e);
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e, r) {
                    var n = Math.ceil(t / (r + 1)) % 16;
                    return ("x" === e ? n : 3 & n | 8).toString(16)
                }))
            },
            Jr = function(e) {
                return void 0 === e && (e = ""), e ? e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-\.]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "") : ""
            };

        function en(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function tn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? en(Object(r), !0).forEach((function(t) {
                    rn(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : en(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function rn(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        var nn = function(e, t) {
                switch (typeof e) {
                    case "object":
                        return {
                            type: "wix",
                            data: e
                        };
                    case "string":
                        return {
                            type: "web",
                            url: e,
                            target: t
                        };
                    default:
                        return {
                            target: "_blank",
                            type: "none"
                        }
                }
            },
            on = function(e) {
                void 0 === e && (e = {});
                var t = {
                    link: e.url
                };
                return e.url && (t.target = e.target), t
            },
            an = function(e) {
                return null !== /^(wix:)?(image|video)(:\/\/)/.exec(e)
            },
            sn = function(e) {
                return an(e) ? e.split("/")[3] : e
            },
            cn = function(e) {
                try {
                    return an(e) ? e.split("/")[4].split("#").slice(0, -1).join("#") : "_.jpg"
                } catch (e) {
                    return "_.jpg"
                }
            },
            ln = function(e, t) {
                return "wix:image://v1/" + (e || Jr(t.name)) + "/" + Jr(t.fileName || t.name) + "#originWidth=" + t.width + "&originHeight=" + t.height
            },
            un = function(e, t) {
                return "wix:video://v1/" + (e || Jr(t.name)) + "/" + Jr(t.fileName || t.name) + "#posterUri=" + t.posters[0].url + "&posterWidth=" + t.width + "&posterHeight=" + t.height
            },
            dn = function(e) {
                var t = {},
                    r = !1;
                try {
                    var n = /\/\d*_\d*\//.exec(e);
                    if (n && n[0] && n[0].length > 0) {
                        var o = n[0].replace(/\//g, "").split("_").map((function(e) {
                                return Number(e)
                            })),
                            a = o[0],
                            i = o[1];
                        a > 0 && i > 0 && (r = !0, t = {
                            originWidth: a,
                            originHeight: i
                        })
                    }
                } catch (e) {
                    r = !1
                }
                if (!r) try {
                    var s = /wm_(.*)\//.exec(e);
                    if (s && s[0] && s[0].length > 0) {
                        var c = s[1];
                        c.length > 0 && (t.watermark = c)
                    }
                } catch (e) {
                    r = !1
                }
                if (!r) try {
                    e.split("#").pop().split("&").map((function(e) {
                        return e.split("=")
                    })).forEach((function(e) {
                        t[e[0]] = isNaN(Number(e[1])) ? String(e[1]) : Number(e[1])
                    }))
                } catch (e) {
                    r = !1
                }
                return t
            };
        const {
            mediaGallery: pn,
            documentArray: fn
        } = s.FieldType;
        const {
            reference: hn,
            dateTime: mn,
            date: gn
        } = s.FieldType;
        var yn = e => {
            let {
                value: t,
                currentValue: r,
                fieldType: a,
                fieldName: i,
                role: s,
                utils: {
                    referenceFetcher: c
                } = {}
            } = e;
            const l = [{
                    converter: e => c(e, i),
                    condition: a === hn
                }, {
                    converter: e => ((e, t) => {
                        const r = {},
                            n = {};
                        if (Vr(e)) r.time = e, r.date = new Date;
                        else {
                            const t = zr(e);
                            r.date = t, r.time = qr(t)
                        }
                        return Vr(t) ? n.time = t : n.date = zr(t), Br({ ...r,
                            ...n
                        })
                    })(r, e),
                    condition: a === mn && [q.e, q.G, q.s].includes(s)
                }, {
                    converter: Hr,
                    condition: a === gn && s === q.e
                }, {
                    converter: e => (e => {
                        let {
                            value: t,
                            currentValue: r = [],
                            fieldType: o
                        } = e;
                        switch (o) {
                            case pn:
                                return [...r, ...t.map((e => {
                                    let {
                                        fileUrl: t,
                                        url: r
                                    } = e;
                                    return (e => {
                                        let {
                                            uploadedFileUrl: t
                                        } = e;
                                        const {
                                            platform: {
                                                utils: {
                                                    media: r
                                                }
                                            }
                                        } = n.b, o = r.parseMediaItemUri(t), a = r.createMediaItemUri(o).item, i = (void 0 === c && (c = 0), function(e) {
                                            return !!(e.src || e.type && e.html)
                                        }(s = { ...o,
                                            src: a
                                        }) ? function(e, t) {
                                            var r = dn(e.src);
                                            r.width = e.width || r.originWidth || r.originalWidth || r.posterWidth || 1, r.height = e.height || r.originHeight || r.originalHeight || r.posterHeight || 1;
                                            var n = e.settings && e.settings.focalPoint,
                                                o = r.watermark,
                                                a = e.imageToken || e.token || r.token,
                                                i = (e.type || "image").toLowerCase(),
                                                s = tn({
                                                    itemId: Jr(e.slug) || (Jr(e.title || e.id) || Qr(e.src || e.html || t)) + "_" + t,
                                                    mediaUrl: sn(e.src),
                                                    metaData: Object.assign({
                                                        type: i,
                                                        alt: e.alt || "",
                                                        title: e.title || "",
                                                        description: e.description || "",
                                                        name: cn(e.src),
                                                        fileName: cn(e.src),
                                                        link: nn(e.link, e.target),
                                                        width: r.width,
                                                        height: r.height,
                                                        sourceName: "private"
                                                    }, n ? {
                                                        focalPoint: n
                                                    } : {}, o ? {
                                                        watermarkStr: o
                                                    } : {}),
                                                    orderIndex: t
                                                }, a && {
                                                    token: a
                                                });
                                            if ("text" === i) {
                                                var c = e.style;
                                                s.metaData.height = r.height || 500, s.metaData.width = r.width || 500 * c.layoutRatio, s.metaData.textStyle = {
                                                    width: s.metaData.width,
                                                    height: s.metaData.height,
                                                    backgroundColor: c.fillColor
                                                }, s.metaData.html = s.editorHtml = e.html
                                            }
                                            if ("video" === i) {
                                                var l = {};
                                                e.thumbnail && (l = dn(e.thumbnail));
                                                var u = function(e) {
                                                    return null !== /^.*\.(jpeg|jpg|webp|png|jpe)$/.exec(e)
                                                }(sn(e.thumbnail)) ? sn(e.thumbnail) : r.posterUri;
                                                s.metaData.posters = [{
                                                    url: u,
                                                    width: l.width || r.width,
                                                    height: l.height || r.height
                                                }], s.isExternal = 0 === e.src.indexOf("http"), s.isExternal || an(e.src) ? (s.metaData.source = e.src.indexOf("youtube.com") > 0 ? "youtube" : e.src.indexOf("vimeo.com") > 0 ? "vimeo" : "wix", s.metaData.videoUrl = e.src) : s.metaData.qualities = [{
                                                    width: r.width,
                                                    height: r.height,
                                                    quality: r.height + "p",
                                                    formats: [an(e.src) ? "wix" : e.src.split(/#|\?/)[0].split(".").pop().trim()]
                                                }]
                                            }
                                            return s
                                        }(s, c) : function(e, t) {
                                            return {
                                                itemId: Qr(t + "_" + (e.uri || e.alt || t)),
                                                mediaUrl: e.uri || "",
                                                metaData: {
                                                    height: e.height || 1,
                                                    lastModified: Date.now(),
                                                    link: nn(e.link, e.target),
                                                    title: e.title || "",
                                                    description: e.description || "",
                                                    alt: e.alt || "",
                                                    sourceName: "private",
                                                    tags: [],
                                                    width: e.width || 1
                                                },
                                                orderIndex: t
                                            }
                                        }(s, c));
                                        var s, c, l, u, d, p, f;
                                        return void 0 === (l = i) && (l = {}), void 0 === u && (u = !0), u ? function(e) {
                                            void 0 === e && (e = {});
                                            var t = e.metaData || e.metadata || {},
                                                r = on(t.link) || {},
                                                n = tn({
                                                    type: t.type || "image",
                                                    slug: e.itemId
                                                }, r),
                                                o = n.type.toLowerCase();
                                            if ("text" === o) {
                                                var a = t.testStyle || {};
                                                Object.assign(n, {
                                                    html: t.html,
                                                    style: {
                                                        width: a.width,
                                                        height: a.height,
                                                        bgColor: a.backgroundColor
                                                    }
                                                })
                                            } else Object.assign(n, {
                                                title: t.title,
                                                description: t.description,
                                                alt: t.alt
                                            }), "image" === o ? Object.assign(n, tn(tn({
                                                src: ln(e.mediaUrl, t),
                                                settings: Object.assign({}, t.focalPoint ? {
                                                    focalPoint: t.focalPoint
                                                } : {})
                                            }, "imageToken" in e && {
                                                imageToken: e.imageToken
                                            }), "token" in e && {
                                                token: e.token
                                            })) : "video" === o && Object.assign(n, {
                                                src: un(e.mediaUrl, t),
                                                thumbnail: t.posters[0].url
                                            });
                                            return n
                                        }(l) : (p = (d = l).metaData || d.metadata || {}, f = on(p.link) || {}, tn({
                                            uri: d.mediaUrl,
                                            description: p.description,
                                            alt: p.alt,
                                            title: p.title,
                                            height: p.height,
                                            width: p.width
                                        }, f))
                                    })({
                                        uploadedFileUrl: t || r
                                    })
                                }))];
                            case fn:
                                return [...r, ...t.map((e => {
                                    let {
                                        fileUrl: t,
                                        url: r
                                    } = e;
                                    return t || r
                                }))];
                            default:
                                return t[0].fileUrl || t[0].url
                        }
                    })({
                        value: e,
                        currentValue: r,
                        fieldType: a
                    }),
                    condition: s === q.I
                }],
                u = l.reduce(((e, t) => {
                    let {
                        converter: r,
                        condition: n
                    } = t;
                    return n && e.push(r), e
                }), []);
            return Object(o.flow)(u)(t)
        };
        const vn = e => {
            let {
                value: t,
                role: r,
                fieldType: a,
                propPath: i,
                componentIsInput: c,
                format: l,
                utils: {
                    formatter: u
                } = {}
            } = e;
            return Object(o.flow)([e => (e => {
                let {
                    value: t,
                    formatter: r,
                    fieldType: n,
                    format: o
                } = e;
                return o ? (e => {
                    let {
                        value: t,
                        formatter: r,
                        fieldType: n,
                        format: o
                    } = e;
                    if (o.type === Wr) {
                        const e = n === s.FieldType.date,
                            a = e ? new Date(t) : t;
                        return Gr(a) ? r ? r.formatDateTime(a, o.params.dateFormat, {
                            timeZone: e ? "UTC" : void 0
                        }) : e && "string" == typeof t ? t : "" : t
                    }
                    return t
                })({
                    value: t,
                    formatter: r,
                    fieldType: n,
                    format: o
                }) : t
            })({
                value: e,
                formatter: u,
                fieldType: a,
                format: l
            }), e => ((e, t) => {
                let {
                    fieldType: r,
                    role: a,
                    componentIsInput: i,
                    propPath: s
                } = t;
                const c = [{
                        converter: e => {
                            let {
                                formatted: t
                            } = e;
                            return t
                        },
                        condition: e && r === Kr && a !== q.a
                    }, {
                        converter: Yr.a,
                        condition: !i && ![q.t, q.o, q.r, q.w].includes(a)
                    }, {
                        converter: e => (e => {
                            let {
                                value: t
                            } = e;
                            const {
                                platform: {
                                    utils: {
                                        media: r
                                    }
                                }
                            } = n.b, o = r.parseMediaItemUri(t);
                            if (o.error) return t;
                            switch (o.type) {
                                case r.types.IMAGE:
                                    return r.getScaleToFillImageURL(o.mediaId, o.width, o.height, o.width, o.height, {
                                        name: o.title
                                    });
                                case r.types.VIDEO:
                                    return "https://video.wixstatic.com/video/".concat(o.mediaId, "/file");
                                case r.types.AUDIO:
                                    return "https://static.wixstatic.com/mp3/".concat(o.mediaId);
                                default:
                                    return t
                            }
                        })({
                            value: e
                        }),
                        condition: "link" === s && q.l !== a
                    }, {
                        converter: () => [],
                        condition: !e && r === Xr
                    }, {
                        converter: qr,
                        condition: a === q.G && Gr(e)
                    }, {
                        converter: e => {
                            const t = new Date(e);
                            return Gr(t) ? t : "" === e ? void 0 : e
                        },
                        condition: a === q.e && r === Zr
                    }],
                    l = c.reduce(((e, t) => {
                        let {
                            converter: r,
                            condition: n
                        } = t;
                        return n && e.push(r), e
                    }), []);
                return Object(o.flow)(l)(e)
            })(e, {
                fieldType: a,
                role: r,
                componentIsInput: c,
                propPath: i
            })])(t)
        };
        var wn = {
                isValidContext: () => !0,
                hideComponent(e) {
                    let {
                        component: t
                    } = e, {
                        rememberInitiallyHidden: r = !1
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    "function" == typeof t.hide && (t.hidden ? r && (this.initiallyHidden = !0) : t.hide())
                },
                showComponent(e) {
                    let {
                        component: t
                    } = e, {
                        ignoreInitiallyHidden: r = !1
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    !t.hidden || r && this.initiallyHidden || t.show()
                },
                clearComponent() {},
                bindToComponent() {},
                currentRecordModified() {},
                recordSetLoaded() {},
                currentViewChanged() {},
                currentIndexChanged() {}
            },
            bn = r(10);
        const {
            url: En
        } = s.FieldType;
        var In = e => {
                let {
                    getState: t,
                    datasetApi: r,
                    eventListeners: {
                        register: a
                    },
                    getFieldType: i,
                    PresetVerboseMessage: s,
                    wixFormatter: c,
                    modeIsLivePreview: l,
                    dispatcher: u
                } = e;
                const {
                    logger: d,
                    platform: {
                        location: p,
                        utils: f
                    }
                } = n.b, h = e => e.matchWith({
                    Empty() {},
                    Loading() {},
                    Loaded(e) {
                        let {
                            url: t
                        } = e;
                        p.navigateTo(t)
                    }
                }), m = (e, r) => {
                    let {
                        connectionConfig: {
                            properties: n
                        },
                        component: a,
                        role: u
                    } = e;
                    const p = Object(ft.n)(t());
                    if (!p) return;
                    const f = {};
                    Object(o.forEach)(n, ((e, t) => {
                        let {
                            fieldName: n,
                            format: s
                        } = e;
                        try {
                            const e = i(n).getOrElse(""),
                                d = vn({
                                    value: Object(Pr.a)(p, n),
                                    role: u,
                                    fieldType: e,
                                    propPath: t,
                                    format: s,
                                    utils: {
                                        formatter: c
                                    }
                                });
                            f[t] = d, jr({
                                previousRecord: r,
                                currentRecord: p,
                                fieldName: n
                            }) && (Nr({
                                component: a,
                                propPath: t,
                                value: d,
                                fieldType: e,
                                modeIsLivePreview: l
                            }), e === En && u === q.F && (e => {
                                const t = e.text;
                                e.text = "<a href=".concat(t, ' target="_blank" style="text-decoration: underline">').concat(t, "</a>");
                                const r = e.html;
                                e.text = "", e.html = Object(o.unescape)(r)
                            })(a))
                        } catch (e) {
                            d.log(new w.a("Failed setting ".concat(t), {
                                cause: e
                            }))
                        }
                    })), d.log(new s(bn.f.types.COMPONENT.FILLED, {
                        component: a,
                        description: f
                    }))
                };
                return { ...wn,
                    isValidContext(e) {
                        let {
                            connectionConfig: t
                        } = e;
                        return Object(o.values)(t).find((e => !Object(o.isEmpty)(e)))
                    },
                    clearComponent(e) {
                        let {
                            component: t,
                            connectionConfig: {
                                properties: r
                            }
                        } = e;
                        Object(o.forEach)(r, ((e, r) => {
                            let {
                                fieldName: n
                            } = e;
                            const o = i(n).getOrElse("");
                            Nr({
                                component: t,
                                propPath: r,
                                value: kr(o),
                                fieldType: o
                            })
                        }))
                    },
                    bindToComponent(e, n) {
                        let {
                            connectionConfig: i,
                            component: c
                        } = e;
                        const {
                            events: l,
                            behaviors: m
                        } = i;
                        l && ((e, n, a) => {
                            Object(o.forEach)(e, ((e, o) => {
                                let {
                                    action: i,
                                    postAction: s
                                } = e;
                                n[o]((async () => {
                                    try {
                                        if ("nextDynamicPage" === i) return void h(Object(ft.u)(t()));
                                        if ("previousDynamicPage" === i) return void h(Object(ft.v)(t()));
                                        if ("resetUserFilter" === i) return void a.resetUserInputFilters();
                                        const e = await Promise.resolve(r[i]());
                                        if (s && s.navigate) {
                                            const t = ((e, t) => e.fieldName ? Object(Pr.a)(t, e.fieldName) : e.linkObject ? f.links.toUrl(e.linkObject) : void 0)(s.navigate, e);
                                            p.navigateTo(t)
                                        }
                                    } catch (e) {
                                        e instanceof w.f || d.log(new w.a("".concat(i, " operation failed:"), {
                                            cause: e
                                        }))
                                    }
                                }))
                            }))
                        })(l, c, n), m && ((e, t) => {
                            Object(o.forEach)(e, (e => {
                                let {
                                    type: r
                                } = e, n = !1;
                                switch (r) {
                                    case "saveSuccessFeedback":
                                        a("beforeSave", (() => t.hide())), a("afterSave", (() => {
                                            t.show(), n = !0
                                        })), a("currentIndexChanged", (() => {
                                            n ? n = !1 : t.hide()
                                        })), a("itemValuesChanged", (() => t.hide()));
                                        break;
                                    case "saveFailureFeedback":
                                        a("beforeSave", (() => t.hide())), a("currentIndexChanged", (() => t.hide())), u.subscribe("datasetSaveError", (() => t.show()))
                                }
                            }))
                        })(m, c), d.log(new s(bn.f.types.COMPONENT.BOUND, {
                            component: c,
                            description: Mr(i)
                        }))
                    },
                    currentRecordModified(e, t, r) {
                        m(e, r)
                    },
                    recordSetLoaded(e) {
                        m(e);
                        const {
                            behaviors: t
                        } = e.connectionConfig;
                        t && ((e, t) => {
                            Object(o.forEach)(e, (e => {
                                let {
                                    type: r
                                } = e;
                                "saveSuccessFeedback" === r && t.hide()
                            }))
                        })(t, e.component)
                    },
                    currentViewChanged(e) {
                        m(e)
                    },
                    currentIndexChanged(e) {
                        m(e)
                    }
                }
            },
            On = e => {
                let {
                    getState: t,
                    getFieldType: r,
                    PresetVerboseMessage: a,
                    modeIsLivePreview: i
                } = e;
                const {
                    logger: s,
                    errorReporting: c
                } = n.b, l = (e, n) => {
                    let {
                        connectionConfig: {
                            properties: c
                        },
                        component: l,
                        role: u
                    } = e;
                    const d = Object(ft.n)(t());
                    if (!d) return;
                    const p = {};
                    Object(o.forEach)(c, ((e, t) => {
                        let {
                            fieldName: o
                        } = e;
                        try {
                            const e = r(o).getOrElse(""),
                                a = vn({
                                    value: Object(Pr.a)(d, o),
                                    role: u,
                                    fieldType: e,
                                    componentIsInput: !0
                                });
                            p[t] = a, jr({
                                previousRecord: n,
                                currentRecord: d,
                                fieldName: o
                            }) && Nr({
                                component: l,
                                propPath: t,
                                value: a,
                                fieldType: e,
                                modeIsLivePreview: i
                            })
                        } catch (e) {
                            s.log(new w.a("Failed setting ".concat(t), {
                                cause: e
                            }))
                        }
                    })), s.log(new a(w.n.types.COMPONENT.FILLED, {
                        component: l,
                        description: p
                    }))
                }, u = (e, r) => {
                    let {
                        component: n
                    } = e;
                    const o = r.isCurrentRecordPristine(t()),
                        a = r.isCurrentRecordNew(t());
                    o && a && n.resetValidityIndication && n.resetValidityIndication()
                };
                return { ...wn,
                    isValidContext(e) {
                        let {
                            connectionConfig: t
                        } = e;
                        return Object(o.values)(t).find((e => !Object(o.isEmpty)(e)))
                    },
                    clearComponent(e) {
                        let {
                            component: t,
                            connectionConfig: {
                                properties: n
                            }
                        } = e;
                        Object(o.forEach)(n, ((e, n) => {
                            let {
                                fieldName: o
                            } = e;
                            const a = r(o).getOrElse("");
                            Nr({
                                component: t,
                                propPath: n,
                                value: void 0,
                                fieldType: a
                            })
                        }))
                    },
                    bindToComponent(e, n) {
                        let {
                            connectionConfig: o,
                            component: i,
                            compId: l,
                            role: u
                        } = e;
                        const {
                            properties: d,
                            filters: p
                        } = o;
                        (e => {
                            let {
                                component: n,
                                properties: o,
                                actions: a,
                                compId: i,
                                role: s
                            } = e;
                            n.onChange(c((e => {
                                const n = o.checked ? "checked" : "value",
                                    c = o[n].fieldName,
                                    l = Object(ft.n)(t()),
                                    u = yn({
                                        value: e.target[n],
                                        currentValue: Object(Pr.a)(l, c),
                                        fieldType: r(c).getOrElse(""),
                                        fieldName: c,
                                        utils: {
                                            referenceFetcher: (e, t) => a.fetchRecordById(e, t).getOrElse(e)
                                        },
                                        role: s
                                    });
                                a.setFieldInCurrentRecordAndSynchronize(c, u, i)
                            }), w.a.withMessage("Input adapter onChange - setting value to record failed")))
                        })({
                            component: i,
                            properties: d,
                            actions: n,
                            compId: l,
                            role: u
                        }), p && i.onChange(c((e => () => {
                            e.refresh()
                        })(n), w.a.withMessage("Input adapter onChange - sync actions failed"))), s.log(new a(w.n.types.COMPONENT.BOUND, {
                            component: i,
                            description: Mr(o)
                        }))
                    },
                    currentRecordModified(e, t, r) {
                        l(e, r), u(e, t)
                    },
                    recordSetLoaded(e, t) {
                        l(e), u(e, t)
                    },
                    currentViewChanged(e, t) {
                        l(e), u(e, t)
                    },
                    currentIndexChanged(e, t) {
                        l(e), u(e, t)
                    }
                }
            };
        const Tn = {
                start: 0,
                end: 0
            },
            Rn = e => Object(o.get)(e, "properties.value.fieldName"),
            _n = () => "bolt" === n.b.platform.settings.env.renderer,
            Cn = {
                [q.m]: e => {
                    let {
                        datasetApi: t,
                        PresetVerboseMessage: r,
                        getState: a,
                        modeIsLivePreview: i
                    } = e;
                    const {
                        logger: s,
                        errorReporting: c
                    } = n.b;
                    let l = Tn;
                    const u = e => l = e,
                        d = () => u(Tn),
                        p = e => {
                            let {
                                fetchRows: t,
                                logGridValue: r,
                                disableNavigation: n = !1
                            } = e;
                            return async (e, o) => {
                                const {
                                    items: a,
                                    datasetSize: i
                                } = await t(e, o - e);
                                return r(a), {
                                    pageRows: a,
                                    totalRowsCount: n ? a.length : i.total
                                }
                            }
                        },
                        f = e => {
                            let {
                                fetchRows: t,
                                logGridValue: r,
                                component: n
                            } = e;
                            return async e => {
                                let {
                                    direction: o,
                                    limit: a
                                } = e, {
                                    start: i,
                                    end: s
                                } = l;
                                "previous" === o ? (s = i, i -= a) : (i = s, s += a);
                                const {
                                    items: c,
                                    datasetSize: d
                                } = await t(i, s - i);
                                return u({
                                    start: i,
                                    end: s
                                }), n.nextEnabled = !!d.cursor || s < d.loaded, n.previousEnabled = i > 0, r(c), {
                                    pageRows: c,
                                    totalRowsCount: d.total || void 0
                                }
                            }
                        };
                    return { ...wn,
                        clearComponent(e) {
                            let {
                                component: t
                            } = e;
                            t.rows = [], t.dataFetcher = void 0
                        },
                        bindToComponent(e, l) {
                            let {
                                component: u
                            } = e;
                            l.getInitialData().chain((e => {
                                let {
                                    items: t
                                } = e;
                                u.rows = t
                            }));
                            const d = (h = u, e => {
                                const t = [],
                                    n = h.columns;
                                Object(o.forEach)(e, (e => {
                                    const r = {};
                                    Object(o.forEach)(n, (t => {
                                        r[t.label] = Object(o.get)(e, t.dataPath)
                                    })), t.push(r)
                                })), s.log(new r(w.n.types.COMPONENT.FILLED, {
                                    component: h,
                                    description: t
                                }))
                            });
                            var h;
                            const m = Object(ft.n)(a());
                            if (!i || m) {
                                const e = l.isCursorPaging(),
                                    t = "bolt" === n.b.platform.settings.env.renderer;
                                u.dataFetcher = t ? p({
                                    fetchRows: l.fetch,
                                    logGridValue: d,
                                    disableNavigation: e
                                }) : e ? {
                                    type: "directional",
                                    value: f({
                                        fetchRows: l.fetch,
                                        logGridValue: d,
                                        component: u
                                    })
                                } : {
                                    type: "pages",
                                    value: p({
                                        fetchRows: l.fetch,
                                        logGridValue: d
                                    })
                                }
                            }
                            u.onCellSelect(c((e => {
                                let {
                                    cellRowIndex: r
                                } = e;
                                t.setCurrentItemIndex(r)
                            }), w.a.withMessage("Grid adapter onCellSelect failed"))), u.onRowSelect(c((e => {
                                let {
                                    rowIndex: r
                                } = e;
                                t.setCurrentItemIndex(r)
                            }), w.a.withMessage("Grid adapter onRowSelect failed"))), (e => {
                                const t = {};
                                e.columns.forEach((e => {
                                    let {
                                        label: r,
                                        dataPath: n,
                                        linkPath: o
                                    } = e;
                                    (n || o) && (t[r] = Object.assign(n ? {
                                        dataPath: n
                                    } : {}, o ? {
                                        linkPath: o
                                    } : {}))
                                })), s.log(new r(w.n.types.COMPONENT.BOUND, {
                                    component: e,
                                    description: t
                                }))
                            })(u)
                        },
                        currentRecordModified(e) {
                            let {
                                component: t
                            } = e;
                            t.refresh()
                        },
                        recordSetLoaded(e) {
                            let {
                                component: t
                            } = e;
                            d(), t.refresh()
                        },
                        currentViewChanged(e) {
                            let {
                                component: t
                            } = e;
                            d(), t.refresh()
                        }
                    }
                },
                [q.h]: e => {
                    let {
                        getState: t,
                        getFieldType: r,
                        getSchema: a,
                        PresetVerboseMessage: s
                    } = e;
                    const {
                        features: c,
                        logger: l
                    } = n.b, u = async (e, t) => {
                        let {
                            connectionConfig: {
                                properties: n
                            },
                            component: u,
                            role: d
                        } = e;
                        const p = u;
                        if (n.value && n.value.fieldName) {
                            const e = await (async (e, t, n) => (e => {
                                const t = e[0];
                                return 1 === e.length && "" === t.label && "" === t.value ? [] : e
                            })(await (async (e, t, n) => {
                                if (r(e).map((e => "reference" === e)).getOrElse(!1)) return a().chain((r => {
                                    const s = Object(i.c)(e, r);
                                    return a(s).map(i.f).map((async r => {
                                        const {
                                            items: a
                                        } = await t.fetchAll(e), i = Object(o.orderBy)(a.map((e => ((e, t, r) => ({
                                            value: r(e._id),
                                            label: r(e[t])
                                        }))(e, r, n))), [e => e.label.toLowerCase()]);
                                        return i
                                    }))
                                })).getOrElse(Promise.resolve([]));
                                if (!c.dropdownOptionsDistinct) {
                                    const {
                                        items: r
                                    } = await t.fetchAll(), a = r.map((t => ((e, t, r) => {
                                        const n = r(Object(Pr.a)(e, t));
                                        return {
                                            value: n,
                                            label: n || ""
                                        }
                                    })(t, e, n)));
                                    return Object(o.uniqBy)(a, "value")
                                } {
                                    const r = t.getUniqueFieldValues(e);
                                    if (r) return r.map((e => {
                                        const t = n(e);
                                        return {
                                            value: t,
                                            label: t || ""
                                        }
                                    }))
                                }
                            })(e, t, (e => vn({
                                value: e,
                                role: d
                            })))))(n.value.fieldName, t);
                            l.log(new s(w.n.types.COMPONENT.FILLED, {
                                component: u,
                                description: {
                                    options: e
                                }
                            })), p.options = e
                        }
                    };
                    return { ...wn,
                        clearComponent(e) {
                            let {
                                component: t
                            } = e;
                            t.options = []
                        },
                        isValidContext(e) {
                            let {
                                connectionConfig: {
                                    properties: t
                                }
                            } = e;
                            return !Object(o.isEmpty)(t)
                        },
                        bindToComponent(e) {
                            let {
                                component: t,
                                connectionConfig: r
                            } = e;
                            ((e, t) => {
                                const {
                                    properties: r
                                } = t, n = {};
                                Object(o.forEach)(r, (e => {
                                    let {
                                        fieldName: t
                                    } = e;
                                    n.options = t
                                })), l.log(new s(w.n.types.COMPONENT.BOUND, {
                                    component: e,
                                    description: n
                                }))
                            })(t, r)
                        },
                        currentRecordModified: u,
                        recordSetLoaded: u
                    }
                },
                [q.k]: e => {
                    let {
                        getState: t,
                        getFieldType: r,
                        PresetVerboseMessage: a,
                        wixFormatter: i,
                        modeIsLivePreview: s
                    } = e;
                    const {
                        logger: c,
                        errorReporting: l
                    } = n.b, u = (e, t, n, a) => Object(o.forEach)(n || [], ((n, o) => {
                        let {
                            fieldName: s,
                            format: c
                        } = n;
                        const l = vn({
                            value: Object(Pr.a)(t, s),
                            role: a,
                            fieldType: r(s).getOrElse(""),
                            propPath: o,
                            format: c,
                            utils: {
                                formatter: i
                            }
                        });
                        e[o] = l
                    })), d = e => {
                        try {
                            e.galleryCapabilities.hasCurrentItem && (e.currentIndex = vt({
                                state: t()
                            }))
                        } catch {}
                    }, p = async (e, r) => {
                        let {
                            connectionConfig: {
                                properties: n
                            },
                            component: o,
                            role: i
                        } = e;
                        const {
                            items: l
                        } = await r.fetchCurrentItems(t());
                        try {
                            const e = l.map((e => {
                                    const t = {};
                                    return u(t, e, n, i), t
                                })),
                                t = e.every((e => {
                                    let {
                                        src: t
                                    } = e;
                                    return !t
                                }));
                            if (s && t) return;
                            c.log(new a(w.n.types.COMPONENT.FILLED, {
                                component: o,
                                description: e
                            })), o.items = e
                        } catch (e) {
                            if ("URIError" !== e.name) throw e
                        }
                        d(o)
                    };
                    return { ...wn,
                        clearComponent(e) {
                            let {
                                component: t
                            } = e;
                            t.items = []
                        },
                        isValidContext(e) {
                            let {
                                connectionConfig: {
                                    properties: t
                                }
                            } = e;
                            return !Object(o.isEmpty)(t)
                        },
                        bindToComponent(e, t) {
                            let {
                                connectionConfig: {
                                    properties: r
                                },
                                component: n
                            } = e;
                            n.clickAction && (n.clickAction = n.clickAction), Object(o.get)(n, ["galleryCapabilities", "hasCurrentItem"]) && n.onCurrentItemChanged(l((() => {
                                t.setCurrentIndex(n.currentIndex)
                            }), w.a.withMessage("Gallery adapter onItemReady failed"))), ((e, t) => {
                                const r = {};
                                Object(o.forEach)(t, ((e, t) => {
                                    let {
                                        fieldName: n
                                    } = e;
                                    r[t] = n
                                })), c.log(new a(w.n.types.COMPONENT.BOUND, {
                                    component: e,
                                    description: r
                                }))
                            })(n, r)
                        },
                        currentRecordModified(e) {
                            let {
                                connectionConfig: {
                                    properties: r
                                },
                                component: n,
                                role: o
                            } = e;
                            const a = Object(ft.n)(t()),
                                i = vt({
                                    state: t()
                                }),
                                s = n.items || [],
                                c = s[i];
                            c && u(c, a, r, o), n.items = s, d(n)
                        },
                        recordSetLoaded: p,
                        currentViewChanged: p,
                        currentIndexChanged(e) {
                            let {
                                component: t
                            } = e;
                            d(t)
                        }
                    }
                },
                [q.I]: e => {
                    let {
                        getState: t,
                        datasetApi: r,
                        getFieldType: a,
                        PresetVerboseMessage: i
                    } = e;
                    const s = {},
                        {
                            logger: c,
                            errorReporting: l
                        } = n.b,
                        u = e => {
                            e.reset && e.reset()
                        },
                        d = function(e, r) {
                            let {
                                component: n,
                                connectionConfig: a
                            } = e, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            const s = Object(ft.n)(t()),
                                c = Rn(a),
                                l = r.isCurrentRecordNew(t()),
                                d = Object(o.isEmpty)(Object(Pr.a)(s, c)),
                                p = r.isCurrentRecordPristine(t());
                            (p || i) && u(n), !d || l && !i || n.updateValidityIndication()
                        };
                    return { ...wn,
                        clearComponent(e) {
                            let {
                                component: t
                            } = e;
                            u(t)
                        },
                        isValidContext(e) {
                            let {
                                connectionConfig: t
                            } = e;
                            return Object(o.values)(t).find((e => !Object(o.isEmpty)(e)))
                        },
                        bindToComponent(e, n) {
                            let {
                                connectionConfig: u,
                                component: d,
                                compId: p,
                                role: f
                            } = e;
                            if (Object(ft.l)(t())) return;
                            const h = Rn(u),
                                m = a(h).getOrElse("");
                            d.onChange(l((() => s[p] = !0), w.a.withMessage("Upload button adapter onChange failed"))), r.onBeforeSave((() => {
                                if (s[p] && d.value.length) return (e => "function" != typeof e.uploadFiles ? (c.log(new w.a("uploadFiles API method is not supported by Platform")), e.startUpload()) : e.uploadFiles())(d).then((e => {
                                    s[p] = !1;
                                    const r = Object(ft.n)(t()),
                                        o = yn({
                                            value: Array.isArray(e) ? e : [e],
                                            currentValue: Object(Pr.a)(r, h),
                                            fieldType: m,
                                            fieldName: h,
                                            role: f
                                        });
                                    n.setFieldInCurrentRecordAndSynchronize(h, o, p)
                                }), (e => {
                                    const t = d.value,
                                        r = Array.isArray(t) && 1 === t.length ? t[0].name : "unknown";
                                    throw c.log(new w.m("The ".concat(r, " file failed to upload. Please try again later."), {
                                        cause: e
                                    })), e
                                }))
                            })), a(h).map((e => {
                                switch (e) {
                                    case "image":
                                        d.fileType = "Image";
                                        break;
                                    case "document":
                                        d.fileType = "Document"
                                }
                            }));
                            const {
                                properties: g
                            } = u;
                            Object(o.forEach)(g, ((e, t) => {
                                let {
                                    fieldName: r
                                } = e;
                                c.log(new i(w.n.types.COMPONENT.BOUND, {
                                    component: d,
                                    description: {
                                        [t]: r
                                    }
                                }))
                            }))
                        },
                        currentRecordModified(e, r, n) {
                            let {
                                component: o,
                                connectionConfig: a,
                                compId: i
                            } = e;
                            const c = Rn(a),
                                l = Object(ft.n)(t()),
                                u = xr({
                                    previousRecord: n,
                                    currentRecord: l,
                                    fieldName: c
                                });
                            u && (s[i] = !1), d({
                                component: o,
                                connectionConfig: a
                            }, r, u)
                        },
                        recordSetLoaded(e, t) {
                            d(e, t)
                        },
                        currentViewChanged(e, t) {
                            d(e, t)
                        },
                        currentIndexChanged(e, t) {
                            d(e, t)
                        }
                    }
                },
                [q.f]: () => ({
                    isValidContext: () => !1
                }),
                [q.v]: e => {
                    let {
                        getState: t,
                        controllerFactory: r,
                        controllerStore: o,
                        PresetVerboseMessage: a,
                        modeIsLivePreview: i
                    } = e;
                    const s = [],
                        {
                            logger: c,
                            errorReporting: l
                        } = n.b,
                        u = () => async (e, r) => {
                            let {
                                component: n
                            } = e;
                            const {
                                items: o
                            } = await r.fetchCurrentItems(t());
                            i && 0 === o.length || (c.log(new a(w.n.types.COMPONENT.FILLED, {
                                component: n,
                                description: {
                                    data: o
                                }
                            })), n.data = o, await Promise.all(s), s.splice(0))
                        };
                    return { ...wn,
                        clearComponent(e) {
                            let {
                                component: t
                            } = e;
                            t.data = []
                        },
                        bindToComponent(e) {
                            let {
                                component: t,
                                compId: n
                            } = e;
                            const {
                                id: i
                            } = t;
                            var u;
                            t.onItemReady(l(((e, t) => (n, a, i) => {
                                const c = {
                                        repeaterId: e,
                                        itemId: a._id
                                    },
                                    l = r.createScopedDataset({
                                        datasetScope: c,
                                        fixedItem: a,
                                        parentId: t,
                                        scoped$w: n.scoped
                                    });
                                o.setController(c, l);
                                const u = l.pageReady();
                                s.push(u)
                            })(n, i), w.a.withMessage("Repeater adapter onItemReady failed"))), t.onItemRemoved(l((u = n, e => {
                                const t = {
                                    repeaterId: u,
                                    itemId: e._id
                                };
                                o.removeController(t)
                            }), w.a.withMessage("Repeater adapter onItemRemoved failed"))), c.log(new a(w.n.types.COMPONENT.BOUND, {
                                component: t
                            }))
                        },
                        currentRecordModified(e) {
                            let {
                                component: r
                            } = e;
                            const n = Object(ft.n)(t());
                            if (r.data && r.data.length > 0) {
                                const e = r.data.map((e => e._id === n._id ? n : e));
                                r.data = e
                            }
                        },
                        recordSetLoaded: u(),
                        currentViewChanged: u()
                    }
                },
                [q.q]: e => {
                    let {
                        getState: t,
                        PresetVerboseMessage: r
                    } = e;
                    const {
                        logger: a,
                        errorReporting: i
                    } = n.b, s = (e, r) => {
                        let {
                            component: n
                        } = e;
                        const o = wt({
                                state: t()
                            }),
                            a = r.getTotalPageCount(t());
                        n.currentPage = o, a < 1 ? n.disable() : (n.enable(), n.totalPages = a)
                    }, c = (e, r) => {
                        let {
                            component: n
                        } = e;
                        const o = wt({
                            state: t()
                        });
                        n.nextEnabled = r.hasNextPage(t()), n.previousEnabled = o > 1
                    }, l = (e, t) => {
                        const r = t.isCursorPaging();
                        _n() && r || (r ? c : s)(e, t)
                    };
                    return { ...wn,
                        bindToComponent(e, n) {
                            let {
                                component: s
                            } = e;
                            const c = e => {
                                    let {
                                        delta: r,
                                        index: a
                                    } = e;
                                    const i = wt({
                                            state: t()
                                        }),
                                        s = r ? i + r : a,
                                        c = mt({
                                            state: t()
                                        }),
                                        l = u ? s : Object(o.clamp)(s, 1, n.getTotalPageCount(t()));
                                    n.setCurrentIndex(((e, t) => t * (e - 1))(l, c))
                                },
                                l = _n(),
                                u = n.isCursorPaging();
                            l && u ? (s.currentPage = 1, s.disable()) : u ? (s.navigationType = "arrowsOnly", s.onNextClicked(i((() => c({
                                delta: 1
                            })), w.a.withMessage("Pagination adapter onNextClicked failed"))), s.onPreviousClicked(i((() => c({
                                delta: -1
                            })), w.a.withMessage("Pagination adapter onPreviousClicked failed")))) : s.onChange(i((e => c({
                                index: e.target.currentPage
                            })), w.a.withMessage("Pagination adapter onChange failed"))), a.log(new r(w.n.types.COMPONENT.BOUND, {
                                component: s
                            }))
                        },
                        recordSetLoaded: l,
                        currentViewChanged: l
                    }
                },
                [q.g]: e => {
                    let {
                        controllerFactory: t,
                        controllerStore: r
                    } = e;
                    const {
                        errorReporting: o
                    } = n.b;
                    return { ...wn,
                        bindToComponent(e) {
                            let {
                                component: n,
                                compId: a
                            } = e;
                            var i;
                            n.onItemReady(o((i = a, (e, n, o) => {
                                const a = {
                                        repeaterId: i,
                                        itemId: n._id
                                    },
                                    s = t.createScopedDetailsDataset({
                                        datasetScope: a,
                                        scoped$w: e.scoped
                                    });
                                r.setController(a, s), s.pageReady()
                            }), w.a.withMessage("Details repeater adapter onItemReady failed"))), n.onItemRemoved(o((e => t => {
                                const n = {
                                    repeaterId: e,
                                    itemId: t._id
                                };
                                r.removeController(n)
                            })(a), w.a.withMessage("Details repeater adapter onItemRemoved failed")))
                        }
                    }
                },
                [q.j]: () => {
                    const {
                        errorReporting: e
                    } = n.b;
                    return { ...wn,
                        bindToComponent(t, r) {
                            let {
                                component: n
                            } = t;
                            "function" == typeof n.onChange && n.onChange(e(r.refresh, w.a.withMessage("Filter input adapter onChange failed")))
                        },
                        resetUserFilter(e) {
                            let {
                                component: t
                            } = e;
                            t[ce(t)] = (e => {
                                switch (e.type) {
                                    case ie:
                                        return !1;
                                    case se:
                                        return "";
                                    default:
                                        return null
                                }
                            })(t)
                        }
                    }
                },
                [q.l]: e => {
                    let {
                        getState: t,
                        getFieldType: r,
                        PresetVerboseMessage: a,
                        wixFormatter: i
                    } = e;
                    const {
                        logger: s
                    } = n.b, c = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return Object(o.reduce)(t, ((t, a, s) => {
                            let {
                                fieldName: c,
                                format: l
                            } = a;
                            const u = Object(Pr.a)(e, c);
                            if ("address" === s) return Object.assign(t, {
                                address: Object(o.get)(u, "formatted"),
                                location: Object(o.get)(u, "location")
                            });
                            if ("link" === s && Object(o.isEmpty)(u)) return t;
                            const d = vn({
                                value: Object(Pr.a)(e, c),
                                role: n,
                                fieldType: r(c).getOrElse(""),
                                propPath: s,
                                format: l,
                                utils: {
                                    formatter: i
                                }
                            });
                            return Object.assign(t, {
                                [s]: d
                            })
                        }), {})
                    }, l = async (e, r) => {
                        let {
                            connectionConfig: {
                                properties: n
                            },
                            component: o,
                            role: a
                        } = e;
                        try {
                            const {
                                items: e
                            } = await r.fetchCurrentItems(t());
                            o.markers = e.map((e => c(e, n, a)))
                        } catch (e) {
                            s.log(new w.a("Failed setting markers", {
                                cause: e
                            }))
                        }
                    };
                    return { ...wn,
                        clearComponent(e) {
                            let {
                                component: t
                            } = e;
                            t.markers = []
                        },
                        isValidContext(e) {
                            let {
                                connectionConfig: t
                            } = e;
                            return Object(o.values)(t).find((e => !Object(o.isEmpty)(e)))
                        },
                        bindToComponent(e) {
                            let {
                                connectionConfig: t,
                                component: r
                            } = e;
                            ((e, t) => {
                                const {
                                    properties: r
                                } = t, n = {};
                                Object(o.forEach)(r, ((e, t) => {
                                    let {
                                        fieldName: r
                                    } = e;
                                    n[t] = r
                                })), s.log(new a(w.n.types.COMPONENT.BOUND, {
                                    component: e,
                                    description: n
                                }))
                            })(r, t)
                        },
                        currentRecordModified: e => {
                            let {
                                component: r,
                                role: n,
                                connectionConfig: {
                                    properties: a
                                }
                            } = e;
                            const i = Object(ft.n)(t()),
                                s = vt({
                                    state: t()
                                });
                            r.markers[s] = c(i, a, n), r.setCenter(Object(o.get)(r, ["markers", s, "location"]))
                        },
                        recordSetLoaded: l,
                        currentViewChanged: l,
                        currentIndexChanged(e) {
                            (e => {
                                let {
                                    component: r
                                } = e;
                                const n = vt({
                                    state: t()
                                });
                                r.setCenter(Object(o.get)(r, ["markers", n, "location"]))
                            })(e)
                        }
                    }
                },
                [q.y]: e => {
                    let {
                        PresetVerboseMessage: t,
                        modeIsLivePreview: r
                    } = e;
                    const {
                        logger: o
                    } = n.b, a = async (e, n) => {
                        let {
                            connectionConfig: {
                                properties: {
                                    options: {
                                        fieldName: a
                                    }
                                }
                            },
                            component: i,
                            role: s
                        } = e;
                        const {
                            items: c
                        } = await n.fetchAll(), l = c.reduce(((e, t) => {
                            const r = vn({
                                value: Object(Pr.a)(t, a),
                                role: s
                            });
                            return r && e.push({
                                value: r,
                                label: r
                            }), e
                        }), []);
                        r && 0 === l.length || (i.options = l, o.log(new t(w.n.types.COMPONENT.FILLED, {
                            component: i,
                            description: {
                                options: l
                            }
                        })))
                    };
                    return { ...wn,
                        isValidContext(e) {
                            let {
                                connectionConfig: {
                                    properties: t = {}
                                }
                            } = e;
                            return Boolean(Object.keys(t).length)
                        },
                        clearComponent(e) {
                            let {
                                component: t
                            } = e;
                            t.options = []
                        },
                        bindToComponent(e) {
                            let {
                                component: r,
                                connectionConfig: {
                                    properties: {
                                        options: {
                                            fieldName: n
                                        }
                                    }
                                }
                            } = e;
                            o.log(new t(w.n.types.COMPONENT.BOUND, {
                                component: r,
                                description: {
                                    options: n
                                }
                            }))
                        },
                        currentRecordModified: a,
                        recordSetLoaded: a
                    }
                }
            },
            Sn = e => {
                let {
                    role: t,
                    adapterParams: r,
                    component: n
                } = e;
                const o = ((e, t) => Cn[e] || t && On || In)(t, gr(n));
                return o(r)
            };
        var Dn = r(64),
            An = r.n(Dn);
        const {
            UploadButton: Pn
        } = ae.a, xn = e => Object(o.isEqual)(!1, e);
        const jn = e => mt({
                state: e
            }),
            Nn = e => Object(ft.u)(e).shouldLoadUrl(),
            Mn = e => Object(ft.v)(e).shouldLoadUrl(),
            Ln = async e => {
                let {
                    dataProvider: t,
                    collectionName: r,
                    directionTowardSibling: n,
                    useLowerCaseDynamicPageUrl: o,
                    dynamicPagesData: {
                        dynamicUrl: a,
                        userDefinedFilter: i,
                        dynamicUrlPatternFieldsValues: s,
                        sort: c,
                        sortFields: l,
                        patternFields: u
                    } = {}
                } = e;
                if (null == a || !u.length) return null;
                const d = await t.getSibling({
                    collectionName: r,
                    sort: c,
                    sortFields: l,
                    directionTowardSibling: n,
                    fieldValues: s,
                    filter: i
                });
                return d && ((e, t, r) => "/" + Re(t).replace(Oe, (t => {
                    const n = t.substring(1, t.length - 1),
                        o = r ? String(e[n]).toLowerCase() : e[n];
                    return encodeURIComponent("".concat(o).replace(/ /g, "-"))
                })))(d, a, o)
            },
            kn = (e, t) => {
                try {
                    return Fn(e(t))
                } catch (e) {
                    return Un(e)
                }
            },
            Fn = e => ({
                value: e,
                then: t => kn(t, e),
                catch: () => Fn(e)
            }),
            Un = e => ({
                error: e,
                then: () => Un(e),
                catch: t => kn(t, e)
            });
        var Wn = {
            resolve: Fn,
            reject: Un
        };
        const Vn = (e, t, r) => {
                var n;
                return t === r || (null === (n = e[t]) || void 0 === n ? void 0 : n.some((t => Vn(e, t, r))))
            },
            Gn = (e, t) => {
                let {
                    repeaterId: r,
                    itemId: n
                } = t;
                return [e, "componentId", r, "itemId", n].join("_")
            },
            Bn = e => e.split("_componentId_")[0];
        var qn = r(27);
        const zn = e => {
                let {
                    detailsDatasetApis: t,
                    masterDatasetApi: r,
                    controllerConfig: o,
                    unsubscribeHandlers: a
                } = e;
                const {
                    logger: i
                } = n.b;
                t.forEach((e => {
                    const t = () => {
                        a.push($n({
                            masterDatasetApi: r,
                            masterDatasetConfig: o,
                            detailsDatasetApi: e
                        }))
                    };
                    try {
                        a.push(r.onReady(t))
                    } catch (e) {
                        i.log(new w.d(new w.h("The dataset cannot filter by the dynamic dataset because the field used to build this page's URL is empty", {
                            code: "DS_EMPTY_URL_FIELD",
                            cause: e
                        }), "error"))
                    }
                }))
            },
            $n = e => {
                let {
                    masterDatasetConfig: t,
                    masterDatasetApi: r,
                    detailsDatasetApi: n
                } = e;
                const o = Object(qn.b)(t.dataset);
                let a, i;
                return o !== z.WRITE && (a = r.onCurrentIndexChanged((() => n.refresh()))), o !== z.READ && (i = r.onItemValuesChanged((() => n.refresh()))), () => [a, i].forEach((e => null == e ? void 0 : e()))
            };
        var Hn = (e, t) => r => {
            let {
                $w: s,
                controllerConfig: c,
                datasetType: l,
                connections: u,
                connectionsGraph: d,
                isScoped: p,
                datasetScope: f,
                dataProvider: h,
                dependencyManager: m,
                firePlatformEvent: g,
                dynamicPagesData: y,
                datasetId: v,
                fixedRecordId: b,
                recordStoreService: E,
                parentId: I,
                updatedCompIds: O,
                markControllerAsRendered: T,
                markDatasetDataFetched: R,
                renderingRegularControllers: _,
                modeIsLivePreview: C,
                modeIsSSR: S,
                useLowerCaseDynamicPageUrl: D,
                schemasLoading: A,
                listenersByEvent: P
            } = r;
            const x = !!b,
                {
                    logger: j,
                    platform: {
                        user: N,
                        settings: {
                            locale: M,
                            env: {
                                renderer: L
                            }
                        },
                        timers: {
                            queueMicrotask: k
                        }
                    }
                } = n.b,
                {
                    findConnectedComponents: F,
                    setConnectedComponents: U,
                    getConnectedComponents: W
                } = (() => {
                    let e;
                    return {
                        findConnectedComponents: (e, t) => {
                            const r = [];
                            return e.forEach((e => {
                                const n = t("@" + e);
                                n && n.forEach((t => t && r.push({
                                    role: e,
                                    component: t,
                                    compId: t.uniqueId
                                })))
                            })), r
                        },
                        setConnectedComponents: t => e = t,
                        getConnectedComponents: () => e
                    }
                })(),
                V = [],
                {
                    store: G,
                    subscribe: B,
                    onIdle: z
                } = ((e, t) => {
                    const {
                        middleware: r,
                        subscribe: n,
                        onIdle: a
                    } = Xt.a.createMiddleware(), i = Object(Ht.c)(ft.a, void 0, Object(Ht.a)(r, ((e, t) => r => r => n => (e.log(new w.c({
                        category: "redux",
                        message: "".concat(n.type, " (dataset: ").concat(t, ")"),
                        data: Object(o.omit)(n, "type", "record")
                    })), r(n)))(e, t)));
                    return {
                        store: i,
                        subscribe: n,
                        onIdle: a
                    }
                })(j, v),
                $ = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.noop,
                        t = !1,
                        r = {};
                    const i = e => r[e] ? r[e] : r[e] = [],
                        s = function(e) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                            return Promise.all(i(e).map((e => e(...r))))
                        },
                        c = function(t) {
                            for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
                            return n.b.logger.log(new w.n(w.n.types.DS_API.TRIGGERED, {
                                eventName: t,
                                eventArgs: o
                            })), e(t, ...o), s(t, ...o)
                        };
                    return {
                        register: (e, r) => {
                            if (t) return o.noop;
                            const n = Object(a.g)(r);
                            return i(e).push(n), () => {
                                Object(o.remove)(i(e), (e => e === n))
                            }
                        },
                        executeHooks: s,
                        fireEvent: c,
                        dispose: () => {
                            t = !0, r = {}
                        }
                    }
                }(g),
                {
                    fireEvent: Y
                } = $;
            V.push($.dispose);
            const K = new a.b({
                    datasetId: Bn(v),
                    scopedDatasetId: p ? v : void 0,
                    getState: G.getState,
                    getSchema: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe;
                        return h.getSchema(e)
                    }
                }),
                J = K.subscribe(P);
            V.push(...J), G.dispatch($t.a.init({
                controllerConfig: c,
                connections: u,
                isScoped: p,
                datasetType: l
            }));
            const {
                datasetIsVirtual: ee,
                datasetIsReal: te,
                datasetIsDeferred: re,
                datasetIsWriteOnly: ne,
                datasetCollectionName: oe,
                dynamicPageNavComponentsShouldBeLinked: ae
            } = Object(ft.c)(G.getState()), ie = Object(ft.d)(G.getState()), se = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe;
                return H.Maybe.fromNullable(h.getSchema(e))
            }, ce = e => {
                const t = se(oe),
                    r = h.getReferencedSchemas(oe);
                return t.chain((t => H.Maybe.fromNullable(Object(i.d)(t, r)(e))))
            }, pe = ((e, t, r) => ({
                dataBinding: Q((e => m.getDependencyById(e, f))),
                currentUser: () => H.Maybe.fromNullable(n.b.platform.user).map((e => {
                    let {
                        id: t,
                        loggedIn: r
                    } = e;
                    return r ? t : null
                })),
                userInput: le({
                    getConnectedComponents: t,
                    getFieldType: r
                })
            }))(0, W, ce), me = (ye = pe, e => ((e, t, r) => {
                const n = ((e, t) => X()(H.Maybe, t.map((t => {
                    let {
                        path: r,
                        filterExpression: n
                    } = t;
                    return e(n).map((e => ({
                        path: r,
                        filterExpression: e
                    })))
                }))))(t, Z(e, r));
                return n.map((e => t => t.reduce(((e, t) => {
                    let {
                        path: r,
                        filterExpression: n
                    } = t;
                    return ((e, t, r) => Object(o.set)(e, t, r))(e, r, n)
                }), Object(o.cloneDeep)(e)))(r))
            })(fe, (e => Object(ue.shouldResolve)(e) ? ye.currentUser() : Object(de.shouldResolve)(e) ? ye.dataBinding(e) : he(e) ? ye.userInput(e) : void 0), e));
            var ye;
            const ve = (e => {
                    let {
                        recordStoreService: t,
                        getFilter: r,
                        getSort: n,
                        getPageSize: o,
                        datasetId: a,
                        filterResolver: s,
                        getSchema: c,
                        fixedRecordId: l
                    } = e;
                    return e => {
                        const u = o();
                        return t.chain((t => {
                            if (e) return H.Result.fromMaybe(c().map((t => Object(i.c)(e, t))), "cannot resolve referenced collection name for field ".concat(e)).map((e => t({
                                pageSize: u,
                                sort: null,
                                filter: null,
                                datasetId: a,
                                referencedCollectionName: e,
                                fixedRecordId: l
                            }))); {
                                const e = r();
                                return H.Result.fromMaybe(s(e).map((e => t({
                                    pageSize: u,
                                    sort: n(),
                                    filter: e,
                                    datasetId: a,
                                    referencedCollectionName: null,
                                    fixedRecordId: l
                                }))), "could not resolve dynamic filter")
                            }
                        }))
                    }
                })({
                    recordStoreService: E,
                    getFilter: Object(o.flow)((e => G.getState()), ft.d),
                    getSort: Object(o.flow)((e => G.getState()), ft.g),
                    getPageSize: () => mt({
                        state: G.getState()
                    }),
                    datasetId: v,
                    filterResolver: me,
                    getSchema: se,
                    fixedRecordId: b
                }),
                we = ae ? (e => {
                    let {
                        dataProvider: t,
                        dynamicPagesData: r,
                        collectionName: n,
                        useLowerCaseDynamicPageUrl: o
                    } = e;
                    return {
                        getNextDynamicPageUrl: () => Ln({
                            dataProvider: t,
                            dynamicPagesData: r,
                            collectionName: n,
                            directionTowardSibling: "asc",
                            useLowerCaseDynamicPageUrl: o
                        }),
                        getPreviousDynamicPageUrl: () => Ln({
                            dataProvider: t,
                            dynamicPagesData: r,
                            collectionName: n,
                            directionTowardSibling: "desc",
                            useLowerCaseDynamicPageUrl: o
                        })
                    }
                })({
                    dataProvider: h,
                    dynamicPagesData: y,
                    collectionName: oe,
                    useLowerCaseDynamicPageUrl: D
                }) : null;
            ae && (B((e => {
                let {
                    getNextDynamicPageUrl: t,
                    getPreviousDynamicPageUrl: r
                } = e;
                const n = {
                        run: t,
                        isQueued: !0,
                        resultActionCreator: (e, t) => ({
                            type: Bt.a.NEXT_DYNAMIC_PAGE_URL_RESULT,
                            error: e,
                            payload: t
                        })
                    },
                    a = {
                        run: r,
                        isQueued: !0,
                        resultActionCreator: (e, t) => ({
                            type: Bt.a.PREVIOUS_DYNAMIC_PAGE_URL_RESULT,
                            error: e,
                            payload: t
                        })
                    },
                    i = e => {
                        let {
                            hasChangedToTrue: t
                        } = e;
                        const r = [];
                        return t(Nn) && r.push(n), t(Mn) && r.push(a), r
                    };
                return e => Object(o.flatten)([i].map((t => t(e))))
            })(we)), G.dispatch((e => ({
                type: Bt.a.INITIALIZE,
                connections: e
            }))(u)));
            const be = (e => {
                    let {
                        store: {
                            dispatch: t,
                            getState: r
                        },
                        recordStore: i,
                        eventListeners: {
                            fireEvent: s,
                            register: c
                        },
                        controllerStore: l,
                        datasetId: u,
                        datasetType: d,
                        isFixedItem: p,
                        siblingDynamicPageUrlGetter: f,
                        onIdle: h,
                        dispatcher: m
                    } = e;
                    const {
                        logger: g,
                        errorReporting: y,
                        breadcrumbReporting: v,
                        verboseReporting: b
                    } = n.b, E = async function() {
                        try {
                            await t(Gt.flushDraft());
                            const e = Object(ft.s)(r()) || Object(ft.n)(r());
                            return Object(o.cloneDeep)(e)
                        } catch (e) {
                            throw m.dispatch("datasetSaveError"), e
                        }
                    }, I = async function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct({
                                state: r()
                            }),
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        lr(r, n), or(r, n, [hr, mr], d, !1), ar("atIndex", e), await E(), ht({
                            recordStore: i
                        }) && await St({
                            index: e,
                            recordStore: i
                        }), sr({
                            index: e,
                            datasetSize: bt({
                                recordStore: i
                            })
                        }), await t(Gt.newRecord(e))
                    };
                    return e => {
                        const n = e ? (e, t) => y(e, w.m.withMessage("An error occurred in one of ".concat(t, " callbacks"))) : o.identity,
                            m = {
                                async isIdle() {
                                    await new Promise((e => {
                                        const t = h((() => {
                                            t(), e()
                                        }))
                                    }))
                                },
                                onBeforeSave: e => (cr("onBeforeSave", e), or(r, "onBeforeSave", [hr, mr], d, !1), c("beforeSave", n(e, "beforeSave"))),
                                onAfterSave: e => (cr("onAfterSave", e), or(r, "onAfterSave", [hr, mr], d, !1), c("afterSave", n(e, "afterSave"))),
                                async save() {
                                    or(r, "save", [hr, mr], d, !1);
                                    const e = await E();
                                    return Object(ft.m)(r()) && await t(Gt.reInitWriteOnly()), e
                                },
                                async getItems(e, t) {
                                    or(r, "getItems", [fr, mr], d, !1), ar("fromIndex", e), ar("numberOfItems", t);
                                    const {
                                        items: n,
                                        offset: o,
                                        datasetSize: a
                                    } = await Gt.doFetch(i, e, t);
                                    return {
                                        items: n,
                                        totalCount: ht({
                                            recordStore: i
                                        }) ? void 0 : a.total,
                                        offset: o
                                    }
                                },
                                getTotalCount: () => (or(r, "getTotalCount", [fr, mr], d, !1), Object(ft.i)(r()) ? (rr(ht({
                                    recordStore: i
                                }), "getTotalCount"), bt({
                                    recordStore: i
                                }).total) : null),
                                getCurrentItem: () => {
                                    or(r, "getCurrentItem", [fr, hr, mr], d);
                                    const e = Object(ft.n)(r());
                                    return e ? Object(o.cloneDeep)(e) : null
                                },
                                getCurrentItemIndex: () => (or(r, "getCurrentItemIndex", [fr, mr], d), vt({
                                    state: r()
                                })),
                                async setCurrentItemIndex(e) {
                                    dr(p, "setCurrentItemIndex"), or(r, "setCurrentItemIndex", [fr, mr], d, !1), (e => {
                                        if (!Object(o.isInteger)(e)) throw new w.h("Parameter (".concat(e, ") must be a number"), {
                                            code: "PARAMETER_NOT_ALLOWED"
                                        })
                                    })(e), await new Promise((e => T.onReady(e))), Object(ft.l)(r()) || await E(), await t(Gt.setCurrentIndex(e))
                                },
                                setFieldValue: (e, n) => {
                                    lr(r, "setFieldValue"), or(r, "setFieldValue", [hr, mr], d), ur(r), t(Gt.updateFields({
                                        [e]: Object(o.cloneDeep)(n)
                                    }))
                                },
                                setFieldValues: e => {
                                    lr(r, "setFieldValues"), or(r, "setFieldValues", [hr, mr], d), ur(r), t(Gt.updateFields(Object(o.mapValues)(e, o.cloneDeep)))
                                },
                                async next() {
                                    if (dr(p, "next"), lr(r, "next"), or(r, "next", [fr, mr], d, !1), Object(ft.l)(r()) || await E(), !T.hasNext()) throw new w.h("There are no more items in the dataset", {
                                        code: "NO_SUCH_ITEM"
                                    });
                                    const e = vt({
                                        state: r()
                                    });
                                    return await t(Gt.setCurrentIndex(e + 1)), T.getCurrentItem()
                                },
                                async previous() {
                                    if (dr(p, "previous"), lr(r, "previous"), or(r, "previous", [fr, mr], d, !1), Object(ft.l)(r()) || await E(), !T.hasPrevious()) throw new w.h("This is the first item in the dataset", {
                                        code: "NO_SUCH_ITEM"
                                    });
                                    const e = vt({
                                        state: r()
                                    });
                                    return await t(Gt.setCurrentIndex(e - 1)), T.getCurrentItem()
                                },
                                hasNext: () => (or(r, "hasNext", [fr, mr], d), Tt({
                                    state: r(),
                                    recordStore: i
                                })),
                                hasPrevious: () => (or(r, "hasPrevious", [fr, mr], d), Ot({
                                    state: r()
                                })),
                                new: async e => I(e, "new"),
                                add: async e => I(e, "add"),
                                async remove() {
                                    if (lr(r, "remove"), or(r, "remove", [mr], d, !1), null == vt({
                                            state: r()
                                        })) throw new w.h("Invalid index", {
                                        code: "DS_INDEX_OUT_OF_RANGE"
                                    });
                                    await t(Gt.remove())
                                },
                                revert: async () => (lr(r, "revert"), or(r, "revert", [hr, mr], d, !1), ur(r), t(Gt.revert())),
                                async refresh() {
                                    lr(r, "refresh"), or(r, "refresh", [fr, hr, mr], d, !1), await t(Gt.refresh())
                                },
                                onCurrentIndexChanged: e => (cr("onCurrentIndexChanged", e), or(r, "onCurrentIndexChanged", [mr, fr], d, !1), c("currentIndexChanged", n(e, "currentIndexChanged"))),
                                onItemValuesChanged: e => (cr("onItemValuesChanged", e), or(r, "onItemValuesChanged", [mr, hr], d, !1), c("itemValuesChanged", n(e, "itemValuesChanged"))),
                                onError: e => (cr("onError", e), or(r, "onError", [mr, fr, hr], d, !1), c("datasetError", n(e, "datasetError"))),
                                onReady: e => (cr("onReady", e), or(r, "onReady", [fr, hr, mr], d, !1), Object(ft.i)(r()) ? (Promise.resolve(n(e)()), o.noop) : c("datasetReady", n(e, "datasetReady"))),
                                async setSort(e) {
                                    dr(p, "setSort"), or(r, "setSort", [fr, mr], d, !1), (e => {
                                        if (!e || !Object(o.isFunction)(e._build)) throw new w.h("The given sort object is invalid", {
                                            code: "DS_INVALID_ARGUMENT"
                                        })
                                    })(e), await new Promise((e => T.onReady(e))), Object(ft.l)(r()) || await E();
                                    const n = y((() => e._build()), w.m.withMessage("Sort building failed"));
                                    await t((e => ({
                                        type: qt.a.SET_SORT,
                                        sort: e
                                    }))(Object(o.cloneDeep)(n())))
                                },
                                async setFilter(e) {
                                    dr(p, "setFilter"), or(r, "setFilter", [fr, mr], d, !1), (e => {
                                        if (!e || !Object(o.isFunction)(e._build)) throw new w.h("The given filter object is invalid", {
                                            code: "DS_INVALID_ARGUMENT"
                                        })
                                    })(e), await new Promise((e => T.onReady(e))), Object(ft.l)(r()) || await E();
                                    const n = y((() => e._build()), w.m.withMessage("Filter building failed"));
                                    await t((e => ({
                                        type: qt.a.SET_FILTER,
                                        filter: e
                                    }))(Object(o.cloneDeep)(n())))
                                },
                                loadMore: async () => {
                                    dr(p, "loadMore"), lr(r, "loadMore"), or(r, "loadMore", [fr, mr], d, !1), await t(Gt.incrementNumOfPagesToShow())
                                },
                                async nextPage() {
                                    if (dr(p, "nextPage"), lr(r, "nextPage"), or(r, "nextPage", [fr, mr], d, !1), Object(ft.l)(r()) || await E(), !T.hasNextPage()) throw new w.h("There are no more pages in the dataset", {
                                        code: "NO_SUCH_PAGE"
                                    });
                                    await t(Gt.nextPage());
                                    const {
                                        items: e
                                    } = await Gt.fetchCurrentPage(i, r());
                                    return e
                                },
                                async previousPage() {
                                    if (dr(p, "previousPage"), lr(r, "previousPage"), or(r, "previousPage", [fr, mr], d, !1), Object(ft.l)(r()) || await E(), !T.hasPreviousPage()) throw new w.h("This is the first page in the dataset", {
                                        code: "NO_SUCH_PAGE"
                                    });
                                    await t(Gt.previousPage());
                                    const {
                                        items: e
                                    } = await Gt.fetchCurrentPage(i, r());
                                    return e
                                },
                                hasNextPage: () => (or(r, "hasNextPage", [fr, mr], d), _t({
                                    state: r(),
                                    recordStore: i
                                })),
                                hasPreviousPage: () => (or(r, "hasPreviousPage", [fr, mr], d), Rt({
                                    state: r()
                                })),
                                getTotalPageCount: () => (or(r, "getTotalPageCount", [fr, mr], d), Object(ft.i)(r()) ? (rr(ht({
                                    recordStore: i
                                }), "getTotalPageCount"), Et({
                                    state: r(),
                                    recordStore: i
                                })) : null),
                                getCurrentPageIndex: () => (or(r, "getCurrentPageIndex", [fr, mr], d), wt({
                                    state: r()
                                })),
                                async loadPage(e) {
                                    or(r, "loadPage", [fr, mr], d, !1), dr(p, "loadPage"), lr(r, "loadPage"), rr(ht({
                                        recordStore: i
                                    }), "loadPage"), ((e, t) => {
                                        if (ir("pageNumber", e), e > t) throw new w.h("Page ".concat(e, " does not exist"), {
                                            code: "NO_SUCH_PAGE"
                                        })
                                    })(e, T.getTotalPageCount()), Object(ft.l)(r()) || await E(), await t(Gt.loadPage(e));
                                    const {
                                        items: n
                                    } = await Gt.fetchCurrentPage(i, r());
                                    return n
                                },
                                inScope: (e, t) => {
                                    or(r, "inScope", [fr, hr, mr], d, !1);
                                    const n = l.getController({
                                        repeaterId: e,
                                        itemId: t
                                    });
                                    return n ? n.staticExports : T
                                },
                                getPageSize: () => (or(r, "getPageSize", [fr, mr], d), mt({
                                    state: r()
                                })),
                                async setPageSize(e) {
                                    or(r, "setPageSize", [fr, mr], d, !1), ir("size", e), await new Promise((e => T.onReady(e))), Object(ft.l)(r()) || await E(), await t($t.a.setPaginationData({
                                        size: e
                                    }))
                                }
                            },
                            O = (e => {
                                let {
                                    datasetType: t,
                                    siblingDynamicPageUrlGetter: r
                                } = e;
                                const n = {
                                    getNextDynamicPage: async () => null != r ? r.getNextDynamicPageUrl() : null,
                                    getPreviousDynamicPage: async () => r ? r.getPreviousDynamicPageUrl() : null
                                };
                                return Object(o.mapValues)(n, ((e, r) => function() {
                                    return pr(t, r), e(...arguments)
                                }))
                            })({
                                datasetType: d,
                                siblingDynamicPageUrlGetter: f
                            }),
                            T = Object.assign(m, O),
                            R = {};
                        for (const e in T) R[e] = Object(o.flow)((t => v(t, w.c.with({
                            category: "datasetAPI",
                            message: "method: ".concat(e, " - datasetId:").concat(u)
                        }))), (t => b(t, e)), (t => {
                            return Object(a.f)(t, (r = e, e => {
                                throw e instanceof w.m ? g.log(new w.m("datasetApi '".concat(r, "' operation failed"), {
                                    cause: e
                                })) : e instanceof w.i ? g.log(e) : g.log(new w.a("datasetApi '".concat(r, "' operation failed"), {
                                    cause: e
                                })), s("datasetError", r, e instanceof w.j ? e.cause.message : e.cause || e), e.cause || e
                            }));
                            var r
                        }))(T[e]);
                        return R
                    }
                })({
                    store: G,
                    recordStore: ve,
                    eventListeners: $,
                    controllerStore: t,
                    datasetId: v,
                    datasetType: l,
                    isFixedItem: x,
                    siblingDynamicPageUrlGetter: we,
                    onIdle: z,
                    dispatcher: K
                }),
                Ee = be(!1),
                Ie = [],
                Oe = {
                    getState: G.getState,
                    datasetApi: Ee,
                    eventListeners: $,
                    dispatcher: K,
                    getFieldType: ce,
                    getSchema: se,
                    controllerFactory: e,
                    controllerStore: t,
                    PresetVerboseMessage: bn.f.with({
                        collectionId: oe,
                        parentId: I
                    }),
                    parentId: I,
                    modeIsLivePreview: C,
                    wixFormatter: S && "bolt" === L || !M ? null : An()({
                        locale: M
                    })
                },
                Te = (e => {
                    let {
                        dispatch: t,
                        recordStore: r,
                        componentAdapterContexts: n
                    } = e;
                    return () => {
                        const e = {
                                fetchRecordById: (e, t) => r(t).fold((() => H.Maybe.Nothing()), (t => t.getRecordById(e))),
                                fetchAll: e => (async (e, t, r, n) => (await e(n).fold((() => ke.Empty()), (e => e.externalApi.getRecordsLimitedByMaxPageSize(0, 1e3)))).get())(r, 0, 0, e),
                                fetchCurrentItems: e => Vt(r, e).catch((() => ke.Empty().get())),
                                fetchOne: () => Wt(r, 0, 1),
                                fetch: (e, t, n) => Wt(r, e, t, n),
                                getTotalPageCount: e => Et({
                                    state: e,
                                    recordStore: r
                                }),
                                getInitialData: () => r().fold((() => ke.Empty()), (e => e.externalApi.getSeedRecords())),
                                setCurrentIndex: (e, r) => t(Lt(e, r)),
                                setFieldInCurrentRecordAndSynchronize: (e, r, n) => {
                                    t(kt({
                                        [e]: Object(o.cloneDeep)(r)
                                    }, n))
                                },
                                refresh: () => t(Ut()),
                                resetUserInputFilters: () => {
                                    n.filter((e => {
                                        let {
                                            role: t
                                        } = e;
                                        return t === q.j
                                    })).length && (n.forEach((e => {
                                        const t = a(e);
                                        t.resetUserFilter && t.resetUserFilter(e)
                                    })), e.refresh())
                                },
                                isCurrentRecordNew: e => r().fold((() => !1), (t => t.isNewRecord(vt({
                                    state: e
                                })))),
                                isCurrentRecordPristine: e => r().fold((() => !1), (t => t.isPristine(vt({
                                    state: e
                                })))),
                                isCursorPaging: () => ht({
                                    recordStore: r
                                }),
                                hasNextPage: e => _t({
                                    state: e,
                                    recordStore: r
                                }),
                                getUniqueFieldValues: e => r().fold((() => !1), (t => t.getUniqueFieldValues(e)))
                            },
                            a = e => e.api,
                            i = {
                                isValidContext: e => a(e).isValidContext(e),
                                hideComponent: e => {
                                    n.map((t => a(t).hideComponent(t, e)))
                                },
                                showComponent: e => {
                                    n.map((t => a(t).showComponent(t, e)))
                                },
                                clearComponent: () => {
                                    n.map((e => a(e).clearComponent(e)))
                                },
                                bindToComponent: () => {
                                    n.map((t => a(t).bindToComponent(t, e, i)))
                                },
                                currentRecordModified: function() {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                    return n.filter((e => !t || e.compId !== t)).map((t => a(t).currentRecordModified(t, e, r, i)))
                                },
                                recordSetLoaded: () => n.map((t => a(t).recordSetLoaded(t, e, i))),
                                currentViewChanged: () => n.map((t => a(t).currentViewChanged(t, e, i))),
                                currentIndexChanged: () => n.map((t => a(t).currentIndexChanged(t, e, i)))
                            };
                        return i
                    }
                })({
                    dispatch: G.dispatch,
                    recordStore: ve,
                    componentAdapterContexts: Ie
                });
            V.push(E.map((e => e.onChange(((e, t) => {
                const {
                    logger: r
                } = n.b;
                return (n, a, i) => {
                    const s = ((e, t) => Object(o.isNull)(e) && Object(o.isNull)(t))(n, a);
                    if (s) return void r.log(new w.a("onChangeHandler invoked with illegal arguments", {
                        extra: {
                            arguments: {
                                before: n,
                                after: a,
                                componentIdToExclude: i
                            }
                        }
                    }));
                    if (((e, t) => Object(o.isNull)(e))(n)) return void t(Gt.refreshCurrentView()).catch((() => {}));
                    const c = Object(ft.n)(e());
                    if (((e, t) => Object(o.isNull)(t))(0, a)) return xe(n, c) && t(Gt.refreshCurrentRecord()).catch((() => {})), void t(Gt.refreshCurrentView()).catch((() => {}));
                    if (((e, t) => xe(e, t))(n, c)) {
                        const r = vt({
                            state: e()
                        });
                        t(Gt.setCurrentRecord(a, r, i)).catch((() => {}))
                    }
                }
            })(G.getState, G.dispatch)))).getOrElse((() => {})));
            const {
                fetchingInitialData: Re,
                resolveUserInputDependency: _e
            } = (e => {
                let {
                    shouldFetchInitialData: t,
                    recordStore: r,
                    filter: o,
                    datasetIsDeferred: i,
                    modeIsSSR: s,
                    queueMicrotask: c,
                    dependencyManager: l
                } = e;
                const u = () => t ? (e => {
                        let {
                            recordStore: t
                        } = e;
                        const {
                            logger: r
                        } = n.b;
                        return t().fold((() => Promise.resolve(H.Maybe.Nothing())), (e => e.hasSeedData() ? (e => e.getSeedRecords().matchWith({
                            Empty: () => Wn.resolve(H.Maybe.Nothing()),
                            Results: e => {
                                let {
                                    items: t
                                } = e;
                                return Wn.resolve(H.Maybe.Just(t[0]))
                            }
                        }))(e) : r.log(new w.k("dataset/pageReady/getData", (() => (e => e.seed().then((() => e.getRecords(0, 1).then((e => e.chain((e => {
                            let {
                                items: t
                            } = e;
                            return H.Maybe.Just(t[0])
                        })))))).catch((e => (r.logError(e, "Fetch initial data failed"), H.Maybe.Nothing()))))(e))))))
                    })({
                        recordStore: r
                    }) : Promise.resolve(H.Maybe.Nothing()),
                    d = l.getDependencyResolutionPromise(o),
                    p = i && ((e, t) => {
                        const {
                            promise: r,
                            resolve: n
                        } = new a.a;
                        return e || t(n), r
                    })(s, c),
                    {
                        waitingForUserInput: f,
                        resolveUserInputDependency: h
                    } = ge(o) && (() => {
                        const {
                            promise: e,
                            resolve: t
                        } = new a.a;
                        return {
                            waitingForUserInput: e,
                            resolveUserInputDependency: t
                        }
                    })(),
                    m = [d, p, f].filter((e => Boolean(e)));
                return {
                    fetchingInitialData: m.length ? Promise.all(m).then(u) : u(),
                    resolveUserInputDependency: () => h && h()
                }
            })({
                dependencyManager: m,
                shouldFetchInitialData: c && !ne,
                recordStore: ve,
                filter: ie,
                datasetIsDeferred: re,
                modeIsSSR: S,
                queueMicrotask: k
            });
            Re.then((() => {
                R();
                const e = ve().fold((() => {}), (e => e.getSeedRecords().matchWith({
                    Empty: () => {},
                    Results: e => {
                        let {
                            items: t
                        } = e;
                        return t[0]
                    }
                })));
                e && G.dispatch(Gt.setCurrentRecord(e, 0))
            })), p && !x && m.getDependenciesByFilter(ie, f).forEach((e => {
                let {
                    masterDataset: {
                        api: t
                    }
                } = e;
                zn({
                    detailsDatasetApis: [Ee],
                    store: G,
                    masterDatasetApi: t,
                    controllerConfig: c,
                    unsubscribeHandlers: V
                })
            }));
            const Ce = async function() {
                    if (N.onLogin((() => {
                            (() => {
                                const e = vt({
                                    state: G.getState()
                                });
                                return ve().fold((() => !1), (t => t.isPristine(e))) && !ne
                            })() && Ee.refresh()
                        })), U((e => {
                            let {
                                connectedComponents: t,
                                connectionsGraph: r,
                                updatedCompIds: n,
                                datasetIsReal: o
                            } = e;
                            const a = t.filter((e => (e => {
                                let {
                                    connectedComponent: t,
                                    updatedCompIds: r,
                                    datasetIsReal: n,
                                    connectionsGraph: o
                                } = e;
                                if (r.length && n) {
                                    const {
                                        compId: e
                                    } = t;
                                    return r.some((t => Vn(o, e, t) || Vn(o, t, e)))
                                }
                                return !0
                            })({
                                connectedComponent: e,
                                connectionsGraph: r,
                                updatedCompIds: n,
                                datasetIsReal: o
                            })));
                            return a.some((e => {
                                let {
                                    role: t
                                } = e;
                                return t === q.j
                            })) ? t : a
                        })({
                            updatedCompIds: O,
                            datasetIsReal: te,
                            connectionsGraph: d,
                            connectedComponents: F(Object(o.uniq)(u.map((e => e.role))), s)
                        })), zn({
                            detailsDatasetApis: W().filter((e => {
                                let {
                                    role: t
                                } = e;
                                return t === q.f
                            })).map((e => {
                                let {
                                    component: t
                                } = e;
                                return t
                            })),
                            masterDatasetApi: Ee,
                            dependencyManager: m,
                            controllerConfig: c,
                            unsubscribeHandlers: V
                        }), te && await A, _e(), !Object(ft.h)(G.getState()) || !h.hasSchema(c.dataset.collectionName)) return Re.then((() => {
                        T(), m.resolveDependants(v), G.dispatch(zt(!0)), Y("datasetReady")
                    })), Promise.resolve();
                    const e = m.getDependenciesByFilter(ie).map((e => e.masterDatasetId));
                    if (Ie.push(...(e => {
                            let {
                                datasetId: t,
                                masterIds: r,
                                connectionsGraph: n,
                                connectedComponents: o,
                                $w: a,
                                adapterApi: i,
                                getFieldType: s,
                                ignoreItemsInRepeater: c,
                                adapterParams: l
                            } = e;
                            const u = [];
                            return o.forEach((e => {
                                let {
                                    component: o,
                                    role: d,
                                    compId: p
                                } = e;
                                if (c && Ar(o).map((e => {
                                        let {
                                            uniqueId: o
                                        } = e;
                                        return Sr({
                                            datasetId: t,
                                            repeaterCompId: o,
                                            masterIds: r,
                                            connectionsGraph: n
                                        })
                                    })).map((e => e === _r || e === Cr)).getOrElse(!1)) return;
                                const f = Rr({
                                    getFieldType: s,
                                    role: d,
                                    compId: p,
                                    component: o,
                                    $w: a,
                                    api: Sn({
                                        role: d,
                                        adapterParams: l,
                                        component: o
                                    })
                                });
                                i().isValidContext(f) && u.push(f)
                            })), u
                        })({
                            datasetId: v,
                            masterIds: e,
                            connectionsGraph: d,
                            connectedComponents: W(),
                            $w: s,
                            adapterApi: Te,
                            getFieldType: ce,
                            ignoreItemsInRepeater: te,
                            adapterParams: Oe
                        })), te) {
                        const t = (e => {
                            let {
                                datasetId: t,
                                masterIds: r,
                                connectionsGraph: n,
                                connectedComponents: a,
                                getFieldType: i,
                                adapterParams: s
                            } = e;
                            const c = [];
                            return a.forEach((e => {
                                let {
                                    component: o
                                } = e;
                                Ar(o).chain((e => {
                                    Sr({
                                        datasetId: t,
                                        repeaterCompId: e.uniqueId,
                                        masterIds: r,
                                        connectionsGraph: n
                                    }) === Cr && c.push(e)
                                }))
                            })), Object(o.uniqBy)(c, "uniqueId").map((e => Rr({
                                getFieldType: i,
                                role: q.g,
                                component: e,
                                compId: e.uniqueId,
                                api: Sn({
                                    role: q.g,
                                    adapterParams: s,
                                    component: e
                                })
                            })))
                        })({
                            datasetId: v,
                            masterIds: e,
                            connectionsGraph: d,
                            connectedComponents: W(),
                            getFieldType: ce,
                            adapterParams: Oe
                        });
                        Ie.push(...t)
                    }
                    B(((e, t, r, a, i, s, c, l) => {
                        const u = function(e, t, r, a, i, s, c, l) {
                                const {
                                    logger: u,
                                    errorReporting: d,
                                    breadcrumbReporting: p
                                } = n.b, f = (e, t) => p(t, w.c.with({
                                    category: "effects",
                                    message: e,
                                    data: {
                                        datasetId: i
                                    }
                                }));

                                function h(e, r) {
                                    t().currentRecordModified(e, r)
                                }

                                function m(e) {
                                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                                    return d(c, w.a.withMessage("Dataset ".concat(e, " event execution failed")))(e, ...r)
                                }

                                function g() {
                                    return Promise.all(t().recordSetLoaded())
                                }
                                const y = e => {
                                    throw new w.h(e, {
                                        code: "DS_OPERATION_FAILED"
                                    })
                                };
                                return {
                                    goToRecordByIndex: (t, r, n) => ({
                                        run: f("goToRecordByIndex", (async function() {
                                            let o;
                                            ht({
                                                recordStore: e
                                            }) && await St({
                                                index: r,
                                                recordStore: e
                                            });
                                            try {
                                                o = (e => {
                                                    let {
                                                        recordStore: t,
                                                        index: r
                                                    } = e;
                                                    const {
                                                        total: n,
                                                        loaded: o
                                                    } = t().fold((e => {
                                                        throw e
                                                    }), (e => e.getDatasetSize()));
                                                    return Math.max(Math.min(r, Math.max(n, o) - 1), 0)
                                                })({
                                                    recordStore: e,
                                                    index: r
                                                })
                                            } catch (e) {
                                                y(e)
                                            }
                                            return t !== o || n ? (await (a = o, e().fold(y, (e => e.getRecords(a, 1))))).matchWith({
                                                Empty: () => Gt.GoToIndexResult.NoRecord(),
                                                Results: e => {
                                                    let {
                                                        items: t
                                                    } = e;
                                                    return Gt.GoToIndexResult.Record(o, t[0])
                                                }
                                            }) : Gt.GoToIndexResult.InvalidIndex();
                                            var a
                                        })),
                                        isQueued: !0,
                                        resultActionCreator: Gt.goToRecordByIndexResult
                                    }),
                                    setFieldsInCurrentRecord: (t, n, a) => ({
                                        run: f("setFieldsInCurrentRecord", (function() {
                                            const i = function(e, t) {
                                                return Object(o.mapValues)(t, ((t, r) => e(r).map((e => function(e, t) {
                                                    switch (e) {
                                                        case "number":
                                                            return Number(t);
                                                        case "boolean":
                                                            if ("string" == typeof t) return "true" === t.toLowerCase() || "1" === t.toLowerCase();
                                                            break;
                                                        case "text":
                                                            if (null != t && "function" == typeof t.toString) return t.toString()
                                                    }
                                                    return t
                                                }(e, t))).getOrElse(t)))
                                            }(r, t);
                                            return e().fold(y, (e => e.setFieldsValues(n, i, a).fold((e => {
                                                throw e
                                            }), (e => {}))))
                                        })),
                                        isQueued: !1
                                    }),
                                    revertChanges: (t, r) => ({
                                        run: f("revertChanges", (function() {
                                            e().chain((e => e.resetDraft(t, r))), h()
                                        })),
                                        isQueued: !1,
                                        resultActionCreator: Gt.revertResult
                                    }),
                                    saveRecord: (t, r) => ({
                                        run: f("saveRecord", (async function() {
                                            return await (u.log(new w.n(w.n.types.DS_API.TRIGGERED, {
                                                eventName: "beforeSave"
                                            })), a("beforeSave").then((e => e.some(xn))).catch((e => ({
                                                error: e
                                            }))).then((e => {
                                                if (e) throw new w.h("Operation cancelled by user code. ".concat(Object(o.isBoolean)(e) ? "" : e.error), {
                                                    code: "DS_OPERATION_CANCELLED"
                                                })
                                            }))), e().fold((() => !1), (async e => {
                                                if (e.hasDraft(t)) {
                                                    ! function(e) {
                                                        const t = s.filter((t => !((e, t) => {
                                                            let {
                                                                component: r,
                                                                connectionConfig: n
                                                            } = e;
                                                            return r.type === Pn ? ((e, t, r) => {
                                                                if (e.validity.valid) return !0;
                                                                if (Object(o.some)(Object(o.values)(Object(o.omit)(e.validity, ["valid", "valueMissing"])), (e => e))) return !1;
                                                                const n = Object(o.get)(r, "properties.value.fieldName");
                                                                return !Object(o.isEmpty)(Object(Pr.a)(t, n))
                                                            })(r, t, n) : "object" != typeof r.validity || r.validity.valid
                                                        })(t, e)));
                                                        if (t.forEach((e => {
                                                                let {
                                                                    component: t
                                                                } = e;
                                                                return t.updateValidityIndication()
                                                            })), t.length) throw new w.h("Some of the elements validation failed", {
                                                            code: "DS_VALIDATION_ERROR"
                                                        })
                                                    }(r);
                                                    const n = await e.saveRecord(t);
                                                    return m("afterSave", r, n), l.dispatch("afterSave", r, n), n
                                                }
                                            }))
                                        })),
                                        isQueued: !0,
                                        resultActionCreator: Gt.saveRecordResult
                                    }),
                                    removeCurrentRecord: t => ({
                                        run: f("removeCurrentRecord", (() => function(t) {
                                            return e().fold(y, (e => e.removeRecord(t)))
                                        }(t))),
                                        isQueued: !0,
                                        resultActionCreator: Gt.removeCurrentRecordResult
                                    }),
                                    newRecord: (t, r) => ({
                                        run: f("newRecord", (() => function(t, r) {
                                            return e().fold(y, (e => e.newRecord(t, r)))
                                        }(t, r))),
                                        isQueued: !0,
                                        resultActionCreator: Gt.newRecordResult
                                    }),
                                    fireEvent: function(e) {
                                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                                        return {
                                            run: f("fireEvent", (() => m(e, ...r))),
                                            isQueued: !1
                                        }
                                    },
                                    notifyIndexChange: e => ({
                                        run: f("notifyIndexChange", (() => {
                                            t().currentIndexChanged(), m("currentIndexChanged", e)
                                        })),
                                        isQueued: !1
                                    }),
                                    notifyRecordSetLoaded: () => ({
                                        run: f("notifyRecordSetLoaded", g),
                                        isQueued: !0
                                    }),
                                    updateCurrentView: e => ({
                                        run: f("updateCurrentView", (() => Promise.all(t().currentViewChanged()))),
                                        isQueued: !0,
                                        resultActionCreator: Gt.updateCurrentViewResult
                                    }),
                                    refresh: (t, r, n) => ({
                                        run: f("refresh", (async function() {
                                            return e().fold(y, (async e => (e.reset(), n ? Gt.GoToIndexResult.Record(0, e.newRecord(0, r)) : e.getRecords(0, 1).then((e => e.matchWith({
                                                Empty: () => Gt.GoToIndexResult.NoRecord(),
                                                Results: e => {
                                                    let {
                                                        items: t
                                                    } = e;
                                                    return Gt.GoToIndexResult.Record(0, t[0])
                                                }
                                            }))))))
                                        })),
                                        isQueued: !0,
                                        resultActionCreator: Gt.refreshResult
                                    }),
                                    updateComponents: (e, t) => ({
                                        run: f("updateComponents", (() => {
                                            h(e, t)
                                        })),
                                        isQueued: !1
                                    })
                                }
                            }(e, t, r, a, i, s, c, l),
                            d = e => {
                                let {
                                    from: t,
                                    to: r,
                                    hasChanged: n,
                                    hasChangedToFalse: o,
                                    hasChangedToTrue: a,
                                    hasChangedToMatch: i
                                } = e;
                                const s = Object(ft.o)(r),
                                    c = Object(ft.o)(t),
                                    l = Object(ft.q)(r),
                                    d = Object(ft.x)(r),
                                    p = [];
                                return (i(ft.q, (e => e >= 0 && e !== s)) || a(ft.x)) && p.push(u.goToRecordByIndex(c, l, d)), (n(ft.o) && c >= 0 || o(ft.w) && 0 === s) && p.push(u.notifyIndexChange(s)), p
                            },
                            p = e => {
                                let {
                                    from: t,
                                    to: r,
                                    hasChanged: n,
                                    hasChangedToMatch: a,
                                    hasChangedToTrue: i
                                } = e;
                                const s = Object(ft.o)(r),
                                    c = Object(ft.n)(r),
                                    l = Object(ft.n)(t),
                                    d = [];
                                xe(l, c) ? Object(o.isEqual)(l, c) || (d.push(u.updateComponents(Object(ft.C)(r), l)), d.push(u.fireEvent("itemValuesChanged", Object(o.cloneDeep)(l), Object(o.cloneDeep)(c)))) : null == l || null == c || n(ft.o) || d.push(u.updateComponents());
                                const p = Object(ft.r)(r);
                                return a(ft.r, (e => null != e)) && d.push(u.setFieldsInCurrentRecord(p, s, Object(ft.C)(r))), i(ft.A) && d.push(u.revertChanges(s, Object(ft.p)(r))), i(ft.z) && d.push(u.removeCurrentRecord(s)), d
                            },
                            f = e => {
                                let {
                                    to: t,
                                    hasChanged: r,
                                    hasChangedToFalse: n,
                                    hasChangedToTrue: o
                                } = e;
                                const a = [];
                                return r(jn) && a.push(u.refresh(Object(ft.o)(t), Object(ft.p)(t), Object(ft.m)(t))), r(ft.e) && a.push(u.notifyRecordSetLoaded()), o(ft.w) && a.push(u.refresh(Object(ft.o)(t), Object(ft.p)(t), Object(ft.m)(t))), n(ft.w) && a.push(u.notifyRecordSetLoaded()), o(ft.y) && a.push(u.updateCurrentView()), a
                            },
                            h = e => {
                                let {
                                    from: t,
                                    to: r,
                                    hasChangedToTrue: n
                                } = e;
                                const o = Object(ft.o)(r),
                                    a = Object(ft.n)(r);
                                if (n(ft.B)) return u.saveRecord(o, a)
                            },
                            m = e => {
                                let {
                                    from: t,
                                    to: r,
                                    hasChangedToNotNull: n
                                } = e;
                                const o = [];
                                return n(ft.t) && o.push(u.newRecord(Object(ft.t)(r), Object(ft.p)(r))), o
                            };
                        return e => Object(o.flatten)([d, p, f, h, m].map((t => t(e))))
                    })(ve, Te, ce, $.executeHooks, v, Ie, Y, K)), V.push(((e, t, r, n, a) => ((e, t, r, n, a) => {
                        let {
                            getState: i,
                            subscribe: s
                        } = e;
                        const c = {
                                new: () => !Object(ft.l)(i()),
                                save: () => Object(ft.k)(i()),
                                revert: () => Object(ft.k)(i()),
                                remove: () => Object(ft.k)(i()),
                                next: () => Tt({
                                    state: i(),
                                    recordStore: a
                                }),
                                previous: () => Ot({
                                    state: i()
                                }),
                                nextPage: () => _t({
                                    state: i(),
                                    recordStore: a
                                }),
                                previousPage: () => Rt({
                                    state: i()
                                }),
                                nextDynamicPage: () => Object(ft.u)(i()).hasUrl(),
                                previousDynamicPage: () => Object(ft.v)(i()).hasUrl(),
                                loadMore: () => (e => {
                                    let {
                                        state: t,
                                        recordStore: r
                                    } = e;
                                    if (It({
                                            recordStore: r
                                        })) return !0;
                                    const n = bt({
                                        recordStore: r
                                    });
                                    return !!n && gt({
                                        state: t
                                    }) + yt({
                                        state: t
                                    }) < n.total
                                })({
                                    state: i(),
                                    recordStore: a
                                })
                            },
                            {
                                inputCacs: l,
                                linkedCacs: u
                            } = ((e, t) => {
                                const r = Object(o.uniqBy)(e.filter((e => {
                                    let {
                                        component: t
                                    } = e;
                                    return t.enabled
                                })), (e => {
                                    let {
                                        compId: t
                                    } = e;
                                    return t
                                }));
                                return {
                                    inputCacs: wr(r),
                                    linkedCacs: br(r, t)
                                }
                            })(t, Object.keys(c)),
                            d = l.length + u.length ? s((e => {
                                let {
                                    getState: t,
                                    inputCacs: r,
                                    linkedCacs: n,
                                    datasetId: o,
                                    logger: a,
                                    shouldEnableLinkedComponent: i
                                } = e;
                                return () => {
                                    const e = t();
                                    if (!Object(ft.i)(e)) return;
                                    const s = Object(ft.k)(e);
                                    r.forEach((e => {
                                        let {
                                            component: t,
                                            compId: r
                                        } = e;
                                        Er(t, r, s, a, o)
                                    })), n.forEach((e => {
                                        let {
                                            component: t,
                                            compId: r
                                        } = e;
                                        const {
                                            action: n
                                        } = t.connectionConfig.events.onClick, s = i[n]();
                                        Er(t, r, s, a, o)
                                    }))
                                }
                            })({
                                getState: i,
                                inputCacs: l,
                                linkedCacs: u,
                                datasetId: n,
                                logger: r,
                                shouldEnableLinkedComponent: c
                            })) : o.noop;
                        return d
                    })(e, t, r, n, a))(G, Ie, j, v, ve));
                    const r = (e => {
                        const t = ["value", "checked"];
                        return e.reduce(((e, r) => {
                            let {
                                component: n,
                                connectionConfig: {
                                    properties: a
                                }
                            } = r;
                            return t.forEach((t => {
                                Object(o.has)(a, t) && ((e, t, r) => {
                                    const n = Object(o.get)(r, t),
                                        a = Vr(n) && Gr(e) ? Br({
                                            time: n,
                                            date: e
                                        }) : Gr(n) && Vr(e) ? Br({
                                            time: e,
                                            date: n
                                        }) : e;
                                    Object(o.set)(r, t, a)
                                })(n[t], a[t].fieldName, e)
                            })), e
                        }), {})
                    })(Ie.filter((e => {
                        let {
                            role: t
                        } = e;
                        return ![q.I, q.A].includes(t)
                    })));
                    G.dispatch(Gt.setDefaultRecord(r)), ne && await G.dispatch(Gt.initWriteOnly(ee)), re && (Te().hideComponent({
                        rememberInitiallyHidden: !0
                    }), S && Te().clearComponent());
                    const a = Re.then((async () => {
                        if (re && await _, !S) try {
                            Object(w.r)(G.getState(), u, l, ee, v)
                        } catch (e) {
                            j.log(new w.a("Failed to report dataset active BI", {
                                cause: e
                            }))
                        }
                        await
                        function(e) {
                            return e.bindToComponent(), Promise.all(e.recordSetLoaded())
                        }(Te()), te && await (e => Promise.all(e.getAll().map((e => new Promise((t => {
                            e.staticExports.onReady(t)
                        }))))))(t), re && Te().showComponent({
                            ignoreInitiallyHidden: !0
                        }), m.resolveDependants(v), G.dispatch(zt(!0)), Y("datasetReady")
                    }));
                    return re ? (T(), Promise.resolve()) : (a.then(T), a)
                },
                Se = be(!0),
                De = ee ? Ce : () => j.log(new w.k("dataset/pageReady", Ce));
            return {
                pageReady: Object(a.f)(De, (e => j.logError(e, "Dataset pageReady callback failed", {
                    datasetId: v
                }))),
                exports: e => e.type === jt.SCOPE_TYPES.COMPONENT ? Se.inScope(e.compId, e.additionalData.itemId) : Se,
                staticExports: Se,
                dispose: () => {
                    Ie.splice(0), V.forEach((e => e()))
                },
                api: Ee
            }
        };
        const Yn = e => me(e).map((e => {
            let {
                filterExpression: {
                    filterId: t
                }
            } = e;
            return t
        }));

        function Xn(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
            return t.get(e)
        }
        var Kn = new WeakMap;
        class Zn {
            constructor() {
                var e, t;
                t = {
                        writable: !0,
                        value: void 0
                    },
                    function(e, t) {
                        if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                    }(this, e = Kn), e.set(this, t),
                    function(e, t, r) {
                        ! function(e, t, r) {
                            if (t.set) t.set.call(e, r);
                            else {
                                if (!t.writable) throw new TypeError("attempted to set read only private field");
                                t.value = r
                            }
                        }(e, Xn(e, t, "set"), r)
                    }(this, Kn, new Map)
            }
            get datasetConfigs() {
                return e = this, (t = Xn(this, Kn, "get")).get ? t.get.call(e) : t.value;
                var e, t
            }
        }

        function Qn(e, t) {
            eo(e, t), t.add(e)
        }

        function Jn(e, t, r) {
            eo(e, t), t.set(e, r)
        }

        function eo(e, t) {
            if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }

        function to(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
            return r
        }

        function ro(e, t) {
            return function(e, t) {
                return t.get ? t.get.call(e) : t.value
            }(e, oo(e, t, "get"))
        }

        function no(e, t, r) {
            return function(e, t, r) {
                if (t.set) t.set.call(e, r);
                else {
                    if (!t.writable) throw new TypeError("attempted to set read only private field");
                    t.value = r
                }
            }(e, oo(e, t, "set"), r), r
        }

        function oo(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
            return t.get(e)
        }
        var ao = new WeakMap,
            io = new WeakMap,
            so = new WeakMap,
            co = new WeakMap,
            lo = new WeakMap,
            uo = new WeakMap,
            po = new WeakMap,
            fo = new WeakSet,
            ho = new WeakSet,
            mo = new WeakSet;
        class go {
            constructor(e) {
                let {
                    platform: t,
                    dataFetcher: r,
                    warmupCache: o,
                    staticCache: a,
                    features: i,
                    listenersByEvent: s,
                    logger: c,
                    global: l
                } = e;
                Qn(this, mo), Qn(this, ho), Qn(this, fo), Jn(this, ao, {
                    writable: !0,
                    value: void 0
                }), Jn(this, io, {
                    writable: !0,
                    value: void 0
                }), Jn(this, so, {
                    writable: !0,
                    value: void 0
                }), Jn(this, co, {
                    writable: !0,
                    value: void 0
                }), Jn(this, lo, {
                    writable: !0,
                    value: void 0
                }), Jn(this, uo, {
                    writable: !0,
                    value: void 0
                }), Jn(this, po, {
                    writable: !0,
                    value: void 0
                });
                const u = new w.g(c, l);
                n.a.set({
                    platform: t,
                    features: i,
                    dataFetcher: r,
                    appState: new Zn,
                    logger: u,
                    errorReporting: Object(w.p)(u),
                    breadcrumbReporting: Object(w.o)(u),
                    verboseReporting: Object(w.q)(u)
                }), no(this, ao, new k), no(this, io, o), no(this, so, a), no(this, co, i), no(this, uo, u), no(this, po, {}), no(this, lo, s)
            }
            initializeDatasets(e) {
                let {
                    datasetConfigs: t,
                    rawControllerConfigs: r
                } = e;
                try {
                    return ro(this, uo).log(new w.k("databinding/createControllers", (() => to(this, fo, yo).call(this, {
                        datasetConfigs: t,
                        rawControllerConfigs: r
                    }))))
                } catch (e) {
                    return ro(this, uo).logError(e, "Datasets initialisation failed"), []
                }
            }
        }

        function yo(e) {
            let {
                datasetConfigs: t,
                rawControllerConfigs: r
            } = e;
            const {
                platform: {
                    settings: {
                        mode: {
                            name: i,
                            csr: s,
                            ssr: c
                        },
                        env: {
                            livePreview: l
                        }
                    }
                }
            } = n.b, u = (e => {
                const t = Object(o.values)({
                    DATASET: b.DATASET,
                    ROUTER_DATASET: b.ROUTER_DATASET
                });
                return e.map((e => {
                    const {
                        id: r,
                        type: a,
                        collectionId: i,
                        filter: s,
                        sort: c,
                        pageSize: l,
                        readWriteType: u,
                        includes: d,
                        nested: p,
                        deferred: f,
                        connections: h,
                        dataIsInvalidated: m,
                        updatedCompIds: g,
                        dynamicPageData: y,
                        cursor: v
                    } = e;
                    t.includes(a) || n.b.logger.log(new w.a("type of controller MUST be one of ".concat(t, " but is ").concat(a)));
                    const b = Object(o.defaults)({
                        collectionName: i,
                        filter: s,
                        sort: c,
                        includes: d,
                        nested: p,
                        pageSize: l,
                        readWriteType: u,
                        cursor: v,
                        deferred: f,
                        uniqueFieldValues: n.b.features.dropdownOptionsDistinct ? Ee(h) : []
                    }, $);
                    return {
                        id: r,
                        compId: r,
                        type: a,
                        livePreviewOptions: {
                            shouldFetchData: m,
                            compsIdsToReset: g
                        },
                        connections: h,
                        dynamicPageData: y,
                        config: {
                            dataset: b,
                            datasetStaticConfig: be(b, a, h)
                        }
                    }
                }))
            })(t), d = to(this, ho, vo).call(this, u), p = ro(this, co).warmupData, f = [], h = [], {
                resolve: m,
                promise: g
            } = new a.a;
            ro(this, ao).setSchemas({ ...p && s && ro(this, io).getSchemas() || {},
                ...ro(this, so).getSchemas() || {}
            });
            const y = ro(this, uo).log(new w.k("databinding/loadSchemas", (() => ro(this, ao).loadSchemas(bo(u)).then((() => p && c && ro(this, io).setSchemas(ro(this, ao).getSchemas()))))));
            ro(this, ao).setDatasetConfigs(u.map((e => {
                let {
                    config: {
                        dataset: {
                            collectionName: t
                        }
                    },
                    compId: r,
                    type: n
                } = e;
                return {
                    collectionId: t,
                    datasetId: r,
                    type: n
                }
            })));
            const v = s && p && ro(this, io).getDataStore();
            v && ro(this, ao).setStore(Do(v));
            const E = ro(this, so).getDataStore();
            E && ro(this, ao).setStaticStore(Do(E)), ro(this, ao).createInitialDataRequest(to(this, mo, wo).call(this, u, d));
            const I = u.reduce(((e, t) => {
                    let {
                        compId: r,
                        connections: n
                    } = t;
                    return e[r] = n.map((e => {
                        let {
                            compId: t
                        } = e;
                        return t
                    })), e
                }), {}),
                O = (e => {
                    let {
                        datasetConfigs: t
                    } = e;
                    const r = {},
                        n = {},
                        o = (e, t) => {
                            const o = n[e];
                            if (!o) return;
                            const a = r[o.masterDatasetId];
                            return a ? { ...o,
                                masterDataset: t ? { ...a,
                                    api: a.api.inScope(t.repeaterId, t.itemId)
                                } : a
                            } : o
                        };
                    return t.forEach((e => {
                        let {
                            id: t,
                            connections: r
                        } = e;
                        r.forEach((e => {
                            let {
                                role: r,
                                config: o
                            } = e;
                            r === q.f && Object.entries(o.filters).forEach((e => {
                                let r, [o, {
                                    fieldName: a
                                }] = e;
                                n[o] = {
                                    id: o,
                                    fieldName: a,
                                    masterDatasetId: t,
                                    isResolved: !1,
                                    promise: new Promise((e => r = e)),
                                    resolve: () => {
                                        n[o].isResolved = !0, r()
                                    }
                                }
                            }))
                        }))
                    })), {
                        resolveDependants: e => Object.values(n).forEach((t => {
                            let {
                                id: r,
                                masterDatasetId: o
                            } = t;
                            e === o && n[r].resolve()
                        })),
                        getDependencyResolutionPromise: e => {
                            const t = Yn(e).flatMap((e => n[e] && !n[e].isResolved ? [n[e].promise] : []));
                            return t.length > 0 ? Promise.all(t) : void 0
                        },
                        getDependencyById: o,
                        getDependenciesByFilter: (e, t) => Yn(e).flatMap((e => o(e, t) || [])),
                        registerDataset: e => {
                            let {
                                id: t,
                                api: n,
                                config: o
                            } = e;
                            r[t] = {
                                id: t,
                                api: n,
                                config: o
                            }
                        }
                    }
                })({
                    datasetConfigs: u
                }),
                T = u.map(((e, t) => {
                    let {
                        type: n,
                        config: s,
                        connections: u,
                        compId: d,
                        livePreviewOptions: {
                            shouldFetchData: p,
                            compsIdsToReset: m = []
                        } = {},
                        dynamicPageData: b
                    } = e;
                    const {
                        $w: E
                    } = r[t], {
                        datasetIsRouter: T,
                        datasetIsDeferred: R
                    } = s.datasetStaticConfig;
                    ro(this, uo).log(new w.c({
                        category: "createControllers",
                        message: "warmup data contents",
                        data: {
                            datasetId: d,
                            datasetType: n,
                            mode: i,
                            warmupData: Boolean(v)
                        }
                    }));
                    const _ = (e => {
                            let {
                                primaryDatasetId: t,
                                recordStoreCache: r,
                                refreshStoreCache: n,
                                dataProvider: a,
                                controllerConfig: i
                            } = e;
                            return H.Result.fromNullable(i, "missing controller configuration").chain((e => {
                                let {
                                    dataset: t
                                } = e;
                                return H.Result.fromNullable(t, "controller configuration is missing dataset object")
                            })).chain((e => {
                                let {
                                    collectionName: t
                                } = e;
                                return H.Result.fromNullable(t, "dataset is not connected to a collection")
                            })).map((e => {
                                const s = Object(o.get)(i, ["dataset", "includes"]),
                                    c = Object(o.get)(i, ["dataset", "nested"]),
                                    l = Object(o.get)(i, ["dataset", "cursor"]),
                                    u = Object(o.get)(i, ["dataset", "readWriteType"]),
                                    d = Object(o.get)(i, ["dataset", "uniqueFieldValues"]);
                                return xt({
                                    primaryDatasetId: t,
                                    recordStoreCache: r,
                                    refreshStoreCache: n,
                                    dataProvider: a,
                                    mainCollectionName: e,
                                    includes: s,
                                    nestedFieldKeys: c,
                                    uniqueFieldValues: d,
                                    readWriteType: u,
                                    cursorPagingRequired: l
                                })
                            }))
                        })({
                            primaryDatasetId: d,
                            recordStoreCache: ro(this, po),
                            refreshStoreCache: p,
                            dataProvider: ro(this, ao),
                            controllerConfig: s
                        }),
                        {
                            promise: C,
                            resolve: S
                        } = new a.a;
                    T || R || f.push(C);
                    const {
                        promise: D,
                        resolve: A
                    } = new a.a;
                    h.push(D);
                    const P = ((e, t) => {
                        const r = (e => {
                                const t = {};
                                return {
                                    setController: (r, n) => {
                                        let {
                                            repeaterId: o,
                                            itemId: a
                                        } = r;
                                        e.log(new w.c({
                                            category: "scopeStore",
                                            message: "adding scope",
                                            data: {
                                                componentId: o,
                                                itemId: a
                                            }
                                        })), t[o] = t[o] || {}, t[o][a] = n
                                    },
                                    getController: e => {
                                        let {
                                            repeaterId: r,
                                            itemId: n
                                        } = e;
                                        const o = t[r];
                                        return o && o[n]
                                    },
                                    removeController: r => {
                                        let {
                                            repeaterId: n,
                                            itemId: a
                                        } = r;
                                        e.log(new w.c({
                                            category: "scopeStore",
                                            message: "removing scope",
                                            data: {
                                                componentId: n,
                                                itemId: a
                                            }
                                        }));
                                        const i = t[n];
                                        Object(o.get)(i, a) && (i[a].dispose(), Object(o.unset)(i, a))
                                    },
                                    getAll: () => Object.values(t).reduce(((e, t) => e.concat(Object.values(t))), [])
                                }
                            })(e),
                            n = {
                                createRealDataset: () => a({ ...t,
                                    isScoped: !1
                                }),
                                createScopedDetailsDataset: e => {
                                    let {
                                        datasetScope: r,
                                        scoped$w: n
                                    } = e;
                                    return a({ ...t,
                                        isScoped: !0,
                                        firePlatformEvent: o.noop,
                                        datasetId: Gn(t.datasetId, r),
                                        datasetScope: r,
                                        $w: n
                                    })
                                },
                                createScopedDataset: e => {
                                    let {
                                        datasetScope: r,
                                        fixedItem: n,
                                        parentId: i,
                                        scoped$w: s
                                    } = e;
                                    const {
                                        dataProvider: c,
                                        controllerConfig: l,
                                        dynamicPagesData: u
                                    } = t, d = Object(o.cloneDeep)(l), p = {
                                        items: [n]
                                    };
                                    d.dataset.filter = c.createSimpleFilter("_id", n._id);
                                    const {
                                        collectionName: f
                                    } = l.dataset;
                                    return c.setCollectionData({
                                        collectionId: f,
                                        data: p
                                    }), a({ ...t,
                                        isScoped: !0,
                                        controllerConfig: d,
                                        firePlatformEvent: o.noop,
                                        dynamicPagesData: u,
                                        datasetId: Gn(t.datasetId, r),
                                        fixedRecordId: r.itemId,
                                        parentId: i,
                                        $w: s
                                    })
                                }
                            },
                            a = Hn(n, r);
                        return n
                    })(ro(this, uo), {
                        $w: E,
                        dependencyManager: O,
                        controllerConfig: s,
                        datasetType: n,
                        connections: u,
                        connectionsGraph: I,
                        recordStoreService: _,
                        dataProvider: ro(this, ao),
                        firePlatformEvent: E.fireEvent,
                        dynamicPagesData: T && b ? Eo({
                            dynamicPageData: b,
                            items: ro(this, so).getItems(),
                            config: s,
                            convertFromCustomFormat: G.convertFromCustomFormat
                        }) : void 0,
                        datasetId: d,
                        schemasLoading: y,
                        listenersByEvent: ro(this, lo),
                        updatedCompIds: m,
                        markControllerAsRendered: A,
                        markDatasetDataFetched: S,
                        renderingRegularControllers: g,
                        modeIsLivePreview: l,
                        modeIsSSR: c,
                        useLowerCaseDynamicPageUrl: null == b ? void 0 : b.lowercase
                    }).createRealDataset();
                    return O.registerDataset({
                        id: d,
                        api: P.api,
                        config: s
                    }), Promise.resolve(_o(P))
                }));
            return c && p && f.length && Promise.all(f).then((() => {
                ro(this, io).setDataStore(So(ro(this, ao).getStore()))
            })), Promise.all(h).then(m), T
        }

        function vo(e) {
            const {
                appState: t
            } = n.b;
            return e.reduce(((e, r) => {
                let {
                    compId: n,
                    config: {
                        dataset: a
                    }
                } = r;
                const i = t.datasetConfigs.get(n);
                return i && !Object(o.isEqual)(i, a) && e.push(n), t.datasetConfigs.set(n, a), e
            }), [])
        }

        function wo(e, t) {
            return e.reduce(((e, r) => {
                let {
                    compId: n,
                    config: {
                        datasetStaticConfig: {
                            sequenceType: o
                        }
                    },
                    livePreviewOptions: {
                        shouldFetchData: a
                    } = {}
                } = r;
                return o === B ? [...e, {
                    id: n,
                    refresh: a || t.includes(n)
                }] : e
            }), [])
        }
        const bo = e => [...e.reduce(((e, t) => {
                let {
                    config: {
                        dataset: {
                            collectionName: r
                        }
                    }
                } = t;
                return r ? e.add(r) : e
            }), new Set)],
            Eo = e => {
                let {
                    dynamicPageData: t,
                    config: r,
                    items: n,
                    convertFromCustomFormat: a
                } = e;
                const {
                    dynamicUrl: i,
                    userDefinedFilter: s
                } = t, c = a(n)[0], l = Object(o.get)(r, "dataset.sort", []) || [], u = i && c ? (d = i, {
                    fields: (d = Re(d)).match(Ie) || [],
                    nonFields: d.replace(Ie, "").split(Te).filter((e => !!e))
                }).fields : [];
                var d;
                const p = Io(l),
                    f = Object(o.difference)(u, p),
                    h = Oo([...l, ...To(f)]),
                    m = [...p, ...f];
                return {
                    dynamicUrl: i,
                    userDefinedFilter: s,
                    dynamicUrlPatternFieldsValues: Ro(c, m, u),
                    sort: h,
                    sortFields: m,
                    patternFields: u
                }
            },
            Io = e => Object(o.flatten)(e.map((e => Object.keys(e).map((e => e))))),
            Oo = e => e.reduce(((e, t) => Object.assign(e, t)), {}),
            To = e => e.map((e => ({
                [e]: "asc"
            }))),
            Ro = (e, t, r) => {
                const n = r.concat(t);
                return r.length ? Object(o.pick)(e, n) : null
            },
            _o = e => {
                let {
                    pageReady: t,
                    exports: r,
                    dispose: n
                } = e;
                return {
                    pageReady: t,
                    exports: r,
                    dispose: n
                }
            },
            Co = e => t => {
                if (t) return { ...t,
                    recordsByCollectionId: Object.entries(t.recordsByCollectionId).reduce(((t, r) => {
                        let [n, o] = r;
                        return t[n] = e(o), t
                    }), {})
                }
            },
            So = Co(G.convertToCustomFormat),
            Do = Co(G.convertFromCustomFormat)
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return Je
        }));
        const n = {
                SCALE_TO_FILL: "fill",
                SCALE_TO_FIT: "fit",
                STRETCH: "stretch",
                ORIGINAL_SIZE: "original_size",
                TILE: "tile",
                TILE_HORIZONTAL: "tile_horizontal",
                TILE_VERTICAL: "tile_vertical",
                FIT_AND_TILE: "fit_and_tile",
                LEGACY_STRIP_TILE: "legacy_strip_tile",
                LEGACY_STRIP_TILE_HORIZONTAL: "legacy_strip_tile_horizontal",
                LEGACY_STRIP_TILE_VERTICAL: "legacy_strip_tile_vertical",
                LEGACY_STRIP_SCALE_TO_FILL: "legacy_strip_fill",
                LEGACY_STRIP_SCALE_TO_FIT: "legacy_strip_fit",
                LEGACY_STRIP_FIT_AND_TILE: "legacy_strip_fit_and_tile",
                LEGACY_STRIP_ORIGINAL_SIZE: "legacy_strip_original_size",
                LEGACY_ORIGINAL_SIZE: "actual_size",
                LEGACY_FIT_WIDTH: "fitWidth",
                LEGACY_FIT_HEIGHT: "fitHeight",
                LEGACY_FULL: "full",
                LEGACY_BG_FIT_AND_TILE: "legacy_tile",
                LEGACY_BG_FIT_AND_TILE_HORIZONTAL: "legacy_tile_horizontal",
                LEGACY_BG_FIT_AND_TILE_VERTICAL: "legacy_tile_vertical",
                LEGACY_BG_NORMAL: "legacy_normal"
            },
            o = "fit",
            a = "fill",
            i = "fill_focal",
            s = "crop",
            c = "legacy_crop",
            l = "legacy_fill",
            u = "center",
            d = "top_left",
            p = "top_right",
            f = "bottom",
            h = "bottom_left",
            m = "bottom_right",
            g = "left",
            y = "right",
            v = {
                [u]: {
                    x: .5,
                    y: .5
                },
                [d]: {
                    x: 0,
                    y: 0
                },
                [p]: {
                    x: 1,
                    y: .5
                },
                top: {
                    x: .5,
                    y: 0
                },
                [h]: {
                    x: 0,
                    y: 1
                },
                [m]: {
                    x: 1,
                    y: 1
                },
                [f]: {
                    x: .5,
                    y: 1
                },
                [y]: {
                    x: 1,
                    y: .5
                },
                [g]: {
                    x: 0,
                    y: .5
                }
            },
            w = {
                center: "c",
                top: "t",
                top_left: "tl",
                top_right: "tr",
                bottom: "b",
                bottom_left: "bl",
                bottom_right: "br",
                left: "l",
                right: "r"
            },
            b = "img",
            E = {
                AUTO: "auto",
                CLASSIC: "classic",
                SUPER: "super"
            },
            I = {
                radius: "0.66",
                amount: "1.00",
                threshold: "0.01"
            },
            O = 25e6,
            T = [1.5, 2, 4],
            R = {
                HIGH: {
                    size: 196e4,
                    quality: 90,
                    maxUpscale: 1
                },
                MEDIUM: {
                    size: 36e4,
                    quality: 85,
                    maxUpscale: 1
                },
                LOW: {
                    size: 16e4,
                    quality: 80,
                    maxUpscale: 1.2
                },
                TINY: {
                    size: 0,
                    quality: 80,
                    maxUpscale: 1.4
                }
            },
            _ = "jpg",
            C = "jpeg",
            S = "png",
            D = "webp",
            A = {
                isMobile: !1
            };

        function P() {
            if ("undefined" != typeof window && "undefined" != typeof navigator) {
                const t = window.matchMedia && window.matchMedia("(max-width: 767px)").matches,
                    r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                e = t && r, A.isMobile = e
            }
            var e
        }

        function x(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            return function() {
                for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                const a = n[n.length - 1] || {},
                    i = [e[0]];
                return r.forEach((function(t, r) {
                    const o = Number.isInteger(t) ? n[t] : a[t];
                    i.push(o, e[r + 1])
                })), i.join("")
            }
        }

        function j(e) {
            return e[e.length - 1]
        }
        const N = [S, C, _, "jpe", "wix_ico_mp", "wix_mp"],
            M = [C, _, "jpe"];

        function L(e) {
            return function(e) {
                return N.includes(U(e))
            }(e) && !/(^https?)|(^data)|(^\/\/)/.test(e)
        }
        const k = ["/", "\\", "?", "<", ">", "|", "“", ":", '"'].map(encodeURIComponent),
            F = ["\\.", "\\*"];

        function U(e) {
            return (/[.]([^.]+)$/.exec(e) && /[.]([^.]+)$/.exec(e)[1] || "").toLowerCase()
        }

        function W(e, t, r, n, i) {
            let s;
            return s = i === a ? function(e, t, r, n) {
                return Math.max(r / e, n / t)
            }(e, t, r, n) : i === o ? function(e, t, r, n) {
                return Math.min(r / e, n / t)
            }(e, t, r, n) : 1, s
        }

        function V(e, t, r, n, i, s) {
            e = e || n.width, t = t || n.height;
            const {
                scaleFactor: c,
                width: l,
                height: u
            } = function(e, t, r, n, a) {
                let i, s = r,
                    c = n;
                if (i = W(e, t, r, n, a), a === o && (s = e * i, c = t * i), s && c && s * c > O) {
                    const r = Math.sqrt(O / (s * c));
                    s *= r, c *= r, i = W(e, t, s, c, a)
                }
                return {
                    scaleFactor: i,
                    width: s,
                    height: c
                }
            }(e, t, n.width * i, n.height * i, r);
            return function(e, t, r, n, i, s, c) {
                const {
                    optimizedScaleFactor: l,
                    upscaleMethodValue: u,
                    forceUSM: d
                } = function(e, t, r, n) {
                    return "auto" === n ? function(e, t) {
                        const r = q(e, t);
                        return {
                            optimizedScaleFactor: R[r].maxUpscale,
                            upscaleMethodValue: 1,
                            forceUSM: !1
                        }
                    }(e, t) : "super" === n ? function(e) {
                        return {
                            optimizedScaleFactor: j(T),
                            upscaleMethodValue: 2,
                            forceUSM: !(T.includes(e) || e > j(T))
                        }
                    }(r) : function(e, t) {
                        const r = q(e, t);
                        return {
                            optimizedScaleFactor: R[r].maxUpscale,
                            upscaleMethodValue: 1,
                            forceUSM: !1
                        }
                    }(e, t)
                }(e, t, s, i);
                let p = r,
                    f = n;
                if (s <= l) return {
                    width: p,
                    height: f,
                    scaleFactor: s,
                    upscaleMethodValue: u,
                    forceUSM: d,
                    cssUpscaleNeeded: !1
                };
                switch (c) {
                    case a:
                        p = r * (l / s), f = n * (l / s);
                        break;
                    case o:
                        p = e * l, f = t * l
                }
                return {
                    width: p,
                    height: f,
                    scaleFactor: l,
                    upscaleMethodValue: u,
                    forceUSM: d,
                    cssUpscaleNeeded: !0
                }
            }(e, t, l, u, s, c, r)
        }

        function G(e) {
            return e.alignment && w[e.alignment] || w.center
        }

        function B(e) {
            let t;
            return !e || "number" != typeof e.x || isNaN(e.x) || "number" != typeof e.y || isNaN(e.y) || (t = {
                x: z(Math.max(0, Math.min(100, e.x)) / 100, 2),
                y: z(Math.max(0, Math.min(100, e.y)) / 100, 2)
            }), t
        }

        function q(e, t) {
            const r = e * t;
            return r > R.HIGH.size ? "HIGH" : r > R.MEDIUM.size ? "MEDIUM" : r > R.LOW.size ? "LOW" : "TINY"
        }

        function z(e, t) {
            const r = Math.pow(10, t || 0);
            return (e * r / r).toFixed(t)
        }

        function $(e) {
            return e && e.upscaleMethod && E[e.upscaleMethod.toUpperCase()] || E.AUTO
        }

        function H(e, t) {
            const r = V(e.src.width, e.src.height, o, t, e.devicePixelRatio, e.upscaleMethod);
            return {
                transformType: a,
                width: Math.round(r.width),
                height: Math.round(r.height),
                alignment: w.center,
                upscale: r.scaleFactor > 1,
                forceUSM: r.forceUSM,
                scaleFactor: r.scaleFactor,
                cssUpscaleNeeded: r.cssUpscaleNeeded,
                upscaleMethodValue: r.upscaleMethodValue
            }
        }

        function Y(e) {
            return {
                transformType: s,
                x: Math.round(e.x),
                y: Math.round(e.y),
                width: Math.round(e.width),
                height: Math.round(e.height),
                upscale: !1,
                forceUSM: !1,
                scaleFactor: 1,
                cssUpscaleNeeded: !1
            }
        }

        function X(e, t, r) {
            return "number" == typeof e && !isNaN(e) && 0 !== e && e >= t && e <= r
        }

        function K(e, t, r, s) {
            const d = function(e) {
                    var t;
                    return null !== (t = null == e ? void 0 : e.isSEOBot) && void 0 !== t && t
                }(s),
                p = function(e) {
                    return M.includes(U(e))
                }(b = t.id) ? _ : function(e) {
                    return U(e) === S
                }(b) ? S : function(e) {
                    return U(e) === D
                }(b) ? D : "unrecognized",
                f = function(e, t) {
                    const r = /\.([^.]*)$/,
                        n = new RegExp("(".concat(k.concat(F).join("|"), ")"), "g");
                    if (t && t.length) {
                        let e = t;
                        const o = t.match(r);
                        return o && N.includes(o[1]) && (e = t.replace(r, "")), encodeURIComponent(e).replace(n, "_")
                    }
                    const o = e.match(/\/(.*?)$/);
                    return (o ? o[1] : e).replace(r, "")
                }(t.id, t.name),
                h = d ? 1 : function(e) {
                    return Math.min(e.pixelAspectRatio || 1, 2)
                }(r),
                m = U(t.id),
                g = m,
                y = L(t.id),
                w = {
                    fileName: f,
                    fileExtension: m,
                    fileType: p,
                    fittingType: e,
                    preferredExtension: g,
                    src: {
                        id: t.id,
                        width: t.width,
                        height: t.height,
                        isCropped: !1
                    },
                    focalPoint: {
                        x: t.focalPoint && t.focalPoint.x,
                        y: t.focalPoint && t.focalPoint.y
                    },
                    parts: [],
                    devicePixelRatio: h,
                    quality: 0,
                    upscaleMethod: $(s),
                    progressive: !0,
                    watermark: "",
                    unsharpMask: {},
                    filters: {},
                    transformed: y
                };
            var b;
            return y && (function(e, t, r) {
                let s;
                switch (t.crop && (s = function(e, t) {
                    const r = Math.max(0, Math.min(e.width, t.x + t.width) - Math.max(0, t.x)),
                        n = Math.max(0, Math.min(e.height, t.y + t.height) - Math.max(0, t.y));
                    return r && n && (e.width !== r || e.height !== n) ? {
                        x: Math.max(0, t.x),
                        y: Math.max(0, t.y),
                        width: r,
                        height: n
                    } : null
                }(t, t.crop), s && (e.src.width = s.width, e.src.height = s.height, e.src.isCropped = !0, e.parts.push(Y(s)))), e.fittingType) {
                    case n.SCALE_TO_FIT:
                    case n.LEGACY_FIT_WIDTH:
                    case n.LEGACY_FIT_HEIGHT:
                    case n.LEGACY_FULL:
                    case n.FIT_AND_TILE:
                    case n.LEGACY_BG_FIT_AND_TILE:
                    case n.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:
                    case n.LEGACY_BG_FIT_AND_TILE_VERTICAL:
                    case n.LEGACY_BG_NORMAL:
                        e.parts.push(H(e, r));
                        break;
                    case n.SCALE_TO_FILL:
                        e.parts.push(function(e, t) {
                            const r = V(e.src.width, e.src.height, a, t, e.devicePixelRatio, e.upscaleMethod),
                                n = B(e.focalPoint);
                            return {
                                transformType: n ? i : a,
                                width: Math.round(r.width),
                                height: Math.round(r.height),
                                alignment: G(t),
                                focalPointX: n && n.x,
                                focalPointY: n && n.y,
                                upscale: r.scaleFactor > 1,
                                forceUSM: r.forceUSM,
                                scaleFactor: r.scaleFactor,
                                cssUpscaleNeeded: r.cssUpscaleNeeded,
                                upscaleMethodValue: r.upscaleMethodValue
                            }
                        }(e, r));
                        break;
                    case n.STRETCH:
                        e.parts.push(function(e, t) {
                            const r = W(e.src.width, e.src.height, t.width, t.height, a),
                                n = Object.assign({}, t);
                            return n.width = e.src.width * r, n.height = e.src.height * r, H(e, n)
                        }(e, r));
                        break;
                    case n.TILE_HORIZONTAL:
                    case n.TILE_VERTICAL:
                    case n.TILE:
                    case n.LEGACY_ORIGINAL_SIZE:
                    case n.ORIGINAL_SIZE:
                        s = function(e, t, r, n) {
                            const o = B(r) || function() {
                                return v[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u]
                            }(n);
                            return {
                                x: Math.max(0, Math.min(e.width - t.width, o.x * e.width - t.width / 2)),
                                y: Math.max(0, Math.min(e.height - t.height, o.y * e.height - t.height / 2)),
                                width: Math.min(e.width, t.width),
                                height: Math.min(e.height, t.height)
                            }
                        }(e.src, r, e.focalPoint, r.alignment), e.src.isCropped ? (Object.assign(e.parts[0], s), e.src.width = s.width, e.src.height = s.height) : e.parts.push(Y(s));
                        break;
                    case n.LEGACY_STRIP_TILE_HORIZONTAL:
                    case n.LEGACY_STRIP_TILE_VERTICAL:
                    case n.LEGACY_STRIP_TILE:
                    case n.LEGACY_STRIP_ORIGINAL_SIZE:
                        e.parts.push(function(e) {
                            return {
                                transformType: c,
                                width: Math.round(e.width),
                                height: Math.round(e.height),
                                alignment: G(e),
                                upscale: !1,
                                forceUSM: !1,
                                scaleFactor: 1,
                                cssUpscaleNeeded: !1
                            }
                        }(r));
                        break;
                    case n.LEGACY_STRIP_SCALE_TO_FIT:
                    case n.LEGACY_STRIP_FIT_AND_TILE:
                        e.parts.push(function(e) {
                            return {
                                transformType: o,
                                width: Math.round(e.width),
                                height: Math.round(e.height),
                                upscale: !1,
                                forceUSM: !0,
                                scaleFactor: 1,
                                cssUpscaleNeeded: !1
                            }
                        }(r));
                        break;
                    case n.LEGACY_STRIP_SCALE_TO_FILL:
                        e.parts.push(function(e) {
                            return {
                                transformType: l,
                                width: Math.round(e.width),
                                height: Math.round(e.height),
                                alignment: G(e),
                                upscale: !1,
                                forceUSM: !0,
                                scaleFactor: 1,
                                cssUpscaleNeeded: !1
                            }
                        }(r))
                }
            }(w, t, r), function(e, t) {
                var r;
                t = t || {}, e.quality = function(e, t) {
                    const r = e.fileType === S;
                    if (e.fileType === _ || r) {
                        const a = j(e.parts),
                            i = (n = a.width, o = a.height, R[q(n, o)].quality);
                        let s = t.quality && t.quality >= 5 && t.quality <= 90 ? t.quality : i;
                        return s = r ? s + 5 : s, s
                    }
                    var n, o;
                    return 0
                }(e, t), e.progressive = function(e) {
                    return !1 !== e.progressive
                }(t), e.watermark = function(e) {
                    return e.watermark
                }(t), e.autoEncode = null === (r = t.autoEncode) || void 0 === r || r, e.unsharpMask = function(e, t) {
                    var r, n, o, a;
                    return function(e) {
                        const t = "number" == typeof(e = e || {}).radius && !isNaN(e.radius) && e.radius >= .1 && e.radius <= 500,
                            r = "number" == typeof e.amount && !isNaN(e.amount) && e.amount >= 0 && e.amount <= 10,
                            n = "number" == typeof e.threshold && !isNaN(e.threshold) && e.threshold >= 0 && e.threshold <= 255;
                        return t && r && n
                    }(t.unsharpMask) ? {
                        radius: z(null === (r = t.unsharpMask) || void 0 === r ? void 0 : r.radius, 2),
                        amount: z(null === (n = t.unsharpMask) || void 0 === n ? void 0 : n.amount, 2),
                        threshold: z(null === (o = t.unsharpMask) || void 0 === o ? void 0 : o.threshold, 2)
                    } : ("number" != typeof(a = (a = t.unsharpMask) || {}).radius || isNaN(a.radius) || 0 !== a.radius || "number" != typeof a.amount || isNaN(a.amount) || 0 !== a.amount || "number" != typeof a.threshold || isNaN(a.threshold) || 0 !== a.threshold) && function(e) {
                        const t = j(e.parts);
                        return !(t.scaleFactor >= 1) || t.forceUSM
                    }(e) ? I : void 0
                }(e, t), e.filters = function(e) {
                    const t = e.filters || {},
                        r = {};
                    return X(t.contrast, -100, 100) && (r.contrast = t.contrast), X(t.brightness, -100, 100) && (r.brightness = t.brightness), X(t.saturation, -100, 100) && (r.saturation = t.saturation), X(t.hue, -180, 180) && (r.hue = t.hue), X(t.blur, 0, 100) && (r.blur = t.blur), r
                }(t)
            }(w, s)), w
        }
        var Z, Q, J, ee, te, re, ne, oe, ae, ie, se, ce, le, ue, de, pe, fe;

        function he(e, t) {
            return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        const me = x(Z || (Z = he(["fit/w_", ",h_", ""])), "width", "height"),
            ge = x(Q || (Q = he(["fill/w_", ",h_", ",al_", ""])), "width", "height", "alignment"),
            ye = x(J || (J = he(["fill/w_", ",h_", ",fp_", "_", ""])), "width", "height", "focalPointX", "focalPointY"),
            ve = x(ee || (ee = he(["crop/x_", ",y_", ",w_", ",h_", ""])), "x", "y", "width", "height"),
            we = x(te || (te = he(["crop/w_", ",h_", ",al_", ""])), "width", "height", "alignment"),
            be = x(re || (re = he(["fill/w_", ",h_", ",al_", ""])), "width", "height", "alignment"),
            Ee = x(ne || (ne = he([",lg_", ""])), "upscaleMethodValue"),
            Ie = x(oe || (oe = he([",q_", ""])), "quality"),
            Oe = x(ae || (ae = he([",usm_", "_", "_", ""])), "radius", "amount", "threshold"),
            Te = x(ie || (ie = he([",bl"]))),
            Re = x(se || (se = he([",wm_", ""])), "watermark"),
            _e = {
                contrast: x(ce || (ce = he([",con_", ""])), "contrast"),
                brightness: x(le || (le = he([",br_", ""])), "brightness"),
                saturation: x(ue || (ue = he([",sat_", ""])), "saturation"),
                hue: x(de || (de = he([",hue_", ""])), "hue"),
                blur: x(pe || (pe = he([",blur_", ""])), "blur")
            },
            Ce = x(fe || (fe = he([",enc_auto"])));

        function Se(e) {
            const t = [];
            e.parts.forEach((e => {
                switch (e.transformType) {
                    case s:
                        t.push(ve(e));
                        break;
                    case c:
                        t.push(we(e));
                        break;
                    case l:
                        let r = be(e);
                        e.upscale && (r += Ee(e)), t.push(r);
                        break;
                    case o:
                        let n = me(e);
                        e.upscale && (n += Ee(e)), t.push(n);
                        break;
                    case a:
                        let u = ge(e);
                        e.upscale && (u += Ee(e)), t.push(u);
                        break;
                    case i:
                        let d = ye(e);
                        e.upscale && (d += Ee(e)), t.push(d)
                }
            }));
            let r = t.join("/");
            return e.quality && (r += Ie(e)), e.unsharpMask && (r += Oe(e.unsharpMask)), e.progressive || (r += Te(e)), e.watermark && (r += Re(e)), e.filters && (r += Object.keys(e.filters).map((t => _e[t](e.filters))).join("")), e.autoEncode && "gif" !== e.fileType && (r += Ce(e)), "".concat(e.src.id, "/").concat("v1", "/").concat(r, "/").concat(e.fileName, ".").concat(e.preferredExtension)
        }

        function De(e, t, r) {
            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                o = arguments.length > 4 ? arguments[4] : void 0;
            return L(t.id) ? (o = o || K(e, t, r, n), Se(o)) : t.id
        }
        const Ae = {
            [u]: "50% 50%",
            [d]: "0% 0%",
            [p]: "100% 0%",
            top: "50% 0%",
            [h]: "0% 100%",
            [m]: "100% 100%",
            [f]: "50% 100%",
            [y]: "100% 50%",
            [g]: "0% 50%"
        };

        function Pe(e, t, r, o) {
            if (function(e, t, r) {
                    return r && t && !(!(o = t.id) || !o.trim() || "none" === o.toLowerCase()) && Object.values(n).includes(e);
                    var o
                }(e, t, r)) {
                const a = function(e, t, r) {
                    const o = Object.assign({}, r),
                        a = A.isMobile;
                    switch (e) {
                        case n.LEGACY_BG_FIT_AND_TILE:
                        case n.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:
                        case n.LEGACY_BG_FIT_AND_TILE_VERTICAL:
                        case n.LEGACY_BG_NORMAL:
                            const e = a ? 1e3 : 1920,
                                r = a ? 1e3 : 1920;
                            o.width = Math.min(e, t.width), o.height = Math.min(r, Math.round(o.width / (t.width / t.height))), o.pixelAspectRatio = 1
                    }
                    return o
                }(e, t, r);
                return {
                    uri: De(e, t, a, o || {}, K(e, t, a, o))
                }
            }
            return {
                uri: ""
            }
        }
        Object.entries(Ae).reduce(((e, t) => {
            let [r, n] = t;
            return e[n] = r, e
        }), {});
        const xe = /^media\//i,
            je = "undefined" != typeof window ? window.devicePixelRatio : 1,
            Ne = (e, t) => {
                const r = t && t.baseHostURL;
                return r ? "".concat(r).concat(e) : (e => xe.test(e) ? "".concat("https://static.wixstatic.com/").concat(e) : "".concat("https://static.wixstatic.com/media/").concat(e))(e)
            };
        P(), P();
        const Me = {
            getScaleToFitImageURL: function(e, t, r, o, a, i) {
                const s = Pe(n.SCALE_TO_FIT, {
                    id: e,
                    width: t,
                    height: r,
                    name: i && i.name
                }, {
                    width: o,
                    height: a,
                    htmlTag: b,
                    alignment: u,
                    pixelAspectRatio: je
                }, i);
                return Ne(s.uri, i)
            },
            getScaleToFillImageURL: function(e, t, r, o, a, i) {
                const s = Pe(n.SCALE_TO_FILL, {
                    id: e,
                    width: t,
                    height: r,
                    name: i && i.name,
                    focalPoint: {
                        x: i && i.focalPoint && i.focalPoint.x,
                        y: i && i.focalPoint && i.focalPoint.y
                    }
                }, {
                    width: o,
                    height: a,
                    htmlTag: b,
                    alignment: u,
                    pixelAspectRatio: je
                }, i);
                return Ne(s.uri, i)
            },
            getCropImageURL: function(e, t, r, o, a, i, s, c, l, d) {
                const p = Pe(n.SCALE_TO_FILL, {
                    id: e,
                    width: t,
                    height: r,
                    name: d && d.name,
                    crop: {
                        x: o,
                        y: a,
                        width: i,
                        height: s
                    }
                }, {
                    width: c,
                    height: l,
                    htmlTag: b,
                    alignment: u,
                    pixelAspectRatio: je
                }, d);
                return Ne(p.uri, d)
            }
        };

        function Le(e, t) {
            Fe(e, t), t.add(e)
        }

        function ke(e, t, r) {
            Fe(e, t), t.set(e, r)
        }

        function Fe(e, t) {
            if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }

        function Ue(e, t) {
            return function(e, t) {
                return t.get ? t.get.call(e) : t.value
            }(e, Ge(e, t, "get"))
        }

        function We(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
            return r
        }

        function Ve(e, t, r) {
            return function(e, t, r) {
                if (t.set) t.set.call(e, r);
                else {
                    if (!t.writable) throw new TypeError("attempted to set read only private field");
                    t.value = r
                }
            }(e, Ge(e, t, "set"), r), r
        }

        function Ge(e, t, r) {
            if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
            return t.get(e)
        }
        var Be = new WeakMap,
            qe = new WeakMap,
            ze = new WeakMap,
            $e = new WeakMap,
            He = new WeakMap,
            Ye = new WeakSet,
            Xe = new WeakSet,
            Ke = new WeakSet,
            Ze = new WeakSet,
            Qe = new WeakSet;
        class Je {
            constructor(e) {
                let {
                    platformUtils: t,
                    wixSdk: r,
                    bi: n,
                    devMode: o,
                    verbose: a
                } = e;
                Le(this, Qe), Le(this, Ze), Le(this, Ke), Le(this, Xe), Le(this, Ye), ke(this, Be, {
                    writable: !0,
                    value: void 0
                }), ke(this, qe, {
                    writable: !0,
                    value: void 0
                }), ke(this, ze, {
                    writable: !0,
                    value: void 0
                }), ke(this, $e, {
                    writable: !0,
                    value: void 0
                }), ke(this, He, {
                    writable: !0,
                    value: void 0
                }), Ve(this, Be, We(this, Ye, et).call(this, {
                    wixSdk: r,
                    bi: n,
                    devMode: o,
                    verbose: a
                })), Ve(this, qe, We(this, Xe, tt).call(this, r.user)), Ve(this, ze, We(this, Ke, rt).call(this, r.location, n)), Ve(this, $e, We(this, Ze, nt).call(this, t)), Ve(this, He, We(this, Qe, ot).call(this, r))
            }
            get settings() {
                return Ue(this, Be)
            }
            get user() {
                return Ue(this, qe)
            }
            get location() {
                return Ue(this, ze)
            }
            get utils() {
                return Ue(this, $e)
            }
            get timers() {
                return Ue(this, He)
            }
        }

        function et(e) {
            let {
                wixSdk: {
                    window: {
                        viewMode: t,
                        rendering: {
                            env: r
                        },
                        browserLocale: n
                    },
                    site: {
                        regionalSettings: o = n
                    }
                },
                bi: {
                    metaSiteId: a,
                    viewerSessionId: i,
                    viewerName: s
                },
                devMode: c,
                verbose: l
            } = e;
            return {
                metaSiteId: a,
                session: i,
                locale: o,
                mode: {
                    name: r,
                    dev: c,
                    verbose: l,
                    ssr: "backend" === r,
                    csr: "backend" !== r
                },
                env: {
                    name: t,
                    live: "Site" === t,
                    preview: "Preview" === t,
                    livePreview: "Editor" === t,
                    editor: "Preview" === t || "Editor" === t,
                    renderer: s
                }
            }
        }

        function tt(e) {
            return {
                get id() {
                    return e.currentUser.id
                },
                get loggedIn() {
                    return e.currentUser.loggedIn
                },
                onLogin: e.onLogin
            }
        }

        function rt(e, t) {
            let {
                baseUrl: r,
                to: n
            } = e, {
                pageId: o,
                pageUrl: a
            } = t;
            return {
                pageId: o,
                pageUrl: a,
                baseUrl: r,
                navigateTo: n
            }
        }

        function nt(e) {
            let {
                links: t,
                mediaItemUtils: r
            } = e;
            return {
                links: t,
                media: { ...r,
                    getScaleToFillImageURL: Me.getScaleToFillImageURL
                }
            }
        }

        function ot(e) {
            var t, r;
            return {
                queueMicrotask: (null === (t = e.environment) || void 0 === t || null === (r = t.timers) || void 0 === r ? void 0 : r.queueMicrotask) || queueMicrotask
            }
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return c
        }));
        var n = r(0),
            o = r(30),
            a = r(28),
            i = r(16);
        const s = e => {
                let {
                    datasetId: t,
                    record: r,
                    schema: s,
                    getSchema: c
                } = e;
                const l = {
                        "form-id": {
                            value: t,
                            keyName: ""
                        }
                    },
                    u = Object(n.pickBy)(s.fields, ((e, t) => Object(o.b)(e, t) && ! function(e) {
                        return !!e.isDeleted
                    }(e)));
                return Object(n.forEach)(u, ((e, n) => {
                    const s = function(e) {
                        let {
                            record: t,
                            fieldData: r,
                            fieldName: n,
                            getSchema: o
                        } = e;
                        if ("reference" === r.type) {
                            const e = o(r.referencedCollection);
                            if (!e) return;
                            const s = Object(i.a)(t[n], e.displayField);
                            return {
                                value: Object(a.a)(s),
                                type: e.fields[e.displayField].type
                            }
                        }
                        return {
                            value: Object(a.a)(Object(i.a)(t, n)),
                            type: r.type
                        }
                    }({
                        record: r,
                        fieldData: e,
                        fieldName: n,
                        getSchema: c
                    });
                    if (!s) return;
                    const {
                        value: u,
                        type: d
                    } = s, {
                        displayName: p,
                        index: f
                    } = e, h = Object(o.a)(t, n);
                    l["field:".concat(h)] = {
                        value: u,
                        keyName: p,
                        index: f,
                        valueType: d
                    }
                })), l
            },
            c = e => {
                let {
                    automationsClientCreator: t
                } = e;
                const r = t().reportFormEventToAutomationCreator();
                return {
                    afterSave: async (e, t, n) => {
                        let {
                            datasetId: o,
                            getSchema: a,
                            getState: c
                        } = e;
                        const l = c(),
                            u = a();
                        Boolean(l.records.isForm) && u && await r((e => {
                            let {
                                datasetId: t,
                                getSchema: r,
                                record: n,
                                schema: o
                            } = e;
                            return {
                                eventUTCTime: Object(i.a)(n, "_updatedDate"),
                                detailedEventPayload: s({
                                    datasetId: t,
                                    record: n,
                                    schema: o,
                                    getSchema: r
                                })
                            }
                        })({
                            datasetId: o,
                            record: n,
                            schema: u,
                            getSchema: a
                        }))
                    }
                }
            }
    }, , function(e, t, r) {
        "use strict";
        if ("function" != typeof self.queueMicrotask && (self.queueMicrotask = function(e) {
                Promise.resolve().then(e).catch((e => setTimeout((() => {
                    throw e
                }))))
            }), "function" != typeof Array.prototype.at) {
            function n(e) {
                if ((e = Math.trunc(e) || 0) < 0 && (e += this.length), !(e < 0 || e >= this.length)) return this[e]
            }
            const o = Reflect.getPrototypeOf(Int8Array);
            for (const a of [Array, String, o]) Object.defineProperty(a.prototype, "at", {
                value: n,
                writable: !0,
                enumerable: !1,
                configurable: !0
            })
        }
    }, function(e, t, r) {
        "use strict";
        e.exports = function(e, t) {
            if (t = t.split(":")[0], !(e = +e)) return !1;
            switch (t) {
                case "http":
                case "ws":
                    return 80 !== e;
                case "https":
                case "wss":
                    return 443 !== e;
                case "ftp":
                    return 21 !== e;
                case "gopher":
                    return 70 !== e;
                case "file":
                    return !1
            }
            return 0 !== e
        }
    }, function(e, t, r) {
        "use strict";
        var n = Object.prototype.hasOwnProperty;

        function o(e) {
            try {
                return decodeURIComponent(e.replace(/\+/g, " "))
            } catch (e) {
                return null
            }
        }

        function a(e) {
            try {
                return encodeURIComponent(e)
            } catch (e) {
                return null
            }
        }
        t.stringify = function(e, t) {
            t = t || "";
            var r, o, i = [];
            for (o in "string" != typeof t && (t = "?"), e)
                if (n.call(e, o)) {
                    if ((r = e[o]) || null != r && !isNaN(r) || (r = ""), o = a(o), r = a(r), null === o || null === r) continue;
                    i.push(o + "=" + r)
                }
            return i.length ? t + i.join("&") : ""
        }, t.parse = function(e) {
            for (var t, r = /([^=?#&]+)=?([^&]*)/g, n = {}; t = r.exec(e);) {
                var a = o(t[1]),
                    i = o(t[2]);
                null === a || null === i || a in n || (n[a] = i)
            }
            return n
        }
    }, function(e, t, r) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Direction = void 0, (n = t.Direction || (t.Direction = {})).asc = "asc", n.desc = "desc"
    }, function(e, t, r) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Operator = void 0, (n = t.Operator || (t.Operator = {})).and = "$and", n.or = "$or", n.not = "$not", n.eq = "$eq", n.ne = "$ne", n.lt = "$lt", n.lte = "$lte", n.gt = "$gt", n.gte = "$gte", n.hasSome = "$hasSome", n.hasAll = "$hasAll", n.contains = "$contains", n.startsWith = "$startsWith", n.endsWith = "$endsWith", n.urlized = "$urlized"
    }, function(e, t, r) {
        "use strict";
        var n, o;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AllowedFilterOperator = t.FieldType = void 0, (o = t.FieldType || (t.FieldType = {})).number = "number", o.text = "text", o.image = "image", o.boolean = "boolean", o.document = "document", o.url = "url", o.richText = "richtext", o.date = "date", o.dateTime = "datetime", o.video = "video", o.reference = "reference", o.multiReference = "multi-reference", o.pageLink = "pagelink", o.object = "object", o.mediaGallery = "media-gallery", o.address = "address", o.stringArray = "array<string>", o.color = "color", o.audio = "audio", o.time = "time", o.array = "array", o.richContent = "rich-content", o.language = "language", o.documentArray = "array<document>", o.any = "any", (n = t.AllowedFilterOperator || (t.AllowedFilterOperator = {})).eq = "eq", n.ne = "ne", n.lt = "lt", n.lte = "lte", n.gt = "gt", n.gte = "gte", n.hasSome = "hasSome", n.hasAll = "hasAll", n.contains = "contains", n.startsWith = "startsWith", n.endsWith = "endsWith", n.urlized = "urlized"
    }, function(e, t, r) {
        "use strict";
        var n, o, a;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Storage = t.PermissionRole = t.DataOperation = void 0, (a = t.DataOperation || (t.DataOperation = {})).aggregate = "aggregate", a.bulkInsert = "bulkInsert", a.bulkRemove = "bulkRemove", a.bulkSave = "bulkSave", a.bulkUpdate = "bulkUpdate", a.count = "count", a.distinct = "distinct", a.find = "find", a.get = "get", a.insert = "insert", a.insertReference = "insertReference", a.isReferenced = "isReferenced", a.queryReferenced = "queryReferenced", a.remove = "remove", a.removeReference = "removeReference", a.replaceReferences = "replaceReferences", a.save = "save", a.truncate = "truncate", a.update = "update", (o = t.PermissionRole || (t.PermissionRole = {})).anyone = "anyone", o.siteMember = "siteMember", o.siteMemberAuthor = "siteMemberAuthor", o.admin = "admin", (n = t.Storage || (t.Storage = {})).driver = "driver", n.docstore = "docstore", n.app = "app", n.expernal = "external", n.dynamicApplication = "dynamicApplication", n.staticAppSchema = "staticAppSchema"
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DefaultMaxPageSize = void 0;
        const n = r(45);
        t.DefaultMaxPageSize = {
            [n.PagingMode.Offset]: 1e3,
            [n.PagingMode.Cursor]: 100
        }
    }, function(e, t, r) {
        var n, o, a = r(46),
            i = r(47),
            s = 0,
            c = 0;
        e.exports = function(e, t, r) {
            var l = t && r || 0,
                u = t || [],
                d = (e = e || {}).node || n,
                p = void 0 !== e.clockseq ? e.clockseq : o;
            if (null == d || null == p) {
                var f = a();
                null == d && (d = n = [1 | f[0], f[1], f[2], f[3], f[4], f[5]]), null == p && (p = o = 16383 & (f[6] << 8 | f[7]))
            }
            var h = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                m = void 0 !== e.nsecs ? e.nsecs : c + 1,
                g = h - s + (m - c) / 1e4;
            if (g < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (g < 0 || h > s) && void 0 === e.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            s = h, c = m, o = p;
            var y = (1e4 * (268435455 & (h += 122192928e5)) + m) % 4294967296;
            u[l++] = y >>> 24 & 255, u[l++] = y >>> 16 & 255, u[l++] = y >>> 8 & 255, u[l++] = 255 & y;
            var v = h / 4294967296 * 1e4 & 268435455;
            u[l++] = v >>> 8 & 255, u[l++] = 255 & v, u[l++] = v >>> 24 & 15 | 16, u[l++] = v >>> 16 & 255, u[l++] = p >>> 8 | 128, u[l++] = 255 & p;
            for (var w = 0; w < 6; ++w) u[l + w] = d[w];
            return t || i(u)
        }
    }, function(e, t, r) {
        var n = r(46),
            o = r(47);
        e.exports = function(e, t, r) {
            var a = t && r || 0;
            "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
            var i = (e = e || {}).random || (e.rng || n)();
            if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t)
                for (var s = 0; s < 16; ++s) t[a + s] = i[s];
            return t || o(i)
        }
    }, function(e, t) {
        const r = Symbol.for("union-type-any-symbol"),
            n = e => t => {
                const n = Object.keys(t);
                for (const r of n)
                    if (r === e.name) return t[r](e.payload);
                if (t[r]) return t[r]();
                throw new Error('Variant "'.concat(e.name, '" not covered in pattern with keys [').concat(n, "].\nThis could mean you did not include all variants in your Union's matchWith function."))
            },
            o = (e, t, r, o) => {
                const a = Symbol("[".concat(e, ":").concat(t, "]")),
                    i = function() {
                        const e = r(...arguments),
                            i = {
                                matchWith: n({
                                    name: t,
                                    payload: e
                                }),
                                toString: () => t,
                                [a]: !0
                            };
                        return Object.keys(o).forEach((e => {
                            i[e] = o[e](i)
                        })), i
                    };
                return i.hasInstance = e => e && !0 === e[a], i
            },
            a = function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return Object.keys(t).reduce(((n, a) => (n[a] = o(e, a, t[a], r), n)), {})
            };
        a.any = r, e.exports = a
    }, function(e, t, r) {
        "use strict";
        const n = e => ({
                map: t => n(t(e)),
                chain: t => t(e),
                fold: (t, r) => r(e),
                getOrElse: () => e,
                merge: () => e
            }),
            o = e => ({
                map: () => o(e),
                chain: () => o(e),
                fold: t => t(e),
                getOrElse: e => e,
                merge: () => e
            }),
            a = {
                Ok: n,
                Error: o,
                try: e => {
                    try {
                        return n(e())
                    } catch (e) {
                        return o(e)
                    }
                },
                fromNullable: (e, t) => null != e ? n(e) : o(t),
                fromMaybe: (e, t) => e.fold((() => o(t)), (e => n(e))),
                of: e => n(e)
            };
        e.exports = a
    }, function(e, t, r) {
        "use strict";
        const n = e => ({
                map: t => n(t(e)),
                chain: t => t(e),
                fold: (t, r) => r(e),
                getOrElse: () => e,
                orElse: () => n(e),
                filter: t => t(e) ? n(e) : o()
            }),
            o = () => ({
                map: () => o(),
                chain: () => o(),
                fold: e => e(),
                getOrElse: e => e,
                orElse: e => e(),
                filter: () => o()
            }),
            a = {
                Just: n,
                Nothing: o,
                fromNullable: e => null != e ? n(e) : o(),
                of: e => n(e)
            };
        e.exports = a
    }, function(e, t) {
        e.exports = function(e) {
            if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return t.l
                    }
                }), Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function() {
                        return t.i
                    }
                }), Object.defineProperty(t, "exports", {
                    enumerable: !0
                }), t.webpackPolyfill = 1
            }
            return t
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ConvertersComposer = void 0;
        var n = r(86),
            o = function(e) {
                return null !== e && "object" == typeof e
            },
            a = function() {
                function e() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._converters = e
                }
                return e.prototype.convertToCustomFormat = function(e, t, r) {
                    var n;
                    if (void 0 === t && (t = new Set), void 0 === r && (r = !1), o(e)) {
                        if (t.has(e)) throw new TypeError("Converting circular structure to JSON");
                        t.add(e)
                    }
                    if (Array.isArray(e)) return this._convertArray(e, t);
                    var a = null === (n = this._findConverterToCustomFormat(e)) || void 0 === n ? void 0 : n.convertToCustomFormat(e, r);
                    return o(e) ? this._convertObject(a, e, t) : a
                }, e.prototype.convertFromCustomFormat = function(e) {
                    var t, r = this,
                        a = e;
                    return Array.isArray(e) ? a = e.map((function(e) {
                        return r.convertFromCustomFormat(e)
                    })) : o(e) && (a = (0, n.mapValues)(e, this.convertFromCustomFormat.bind(this))), null === (t = this._findConverterFromCustomFormat(a)) || void 0 === t ? void 0 : t.convertFromCustomFormat(a)
                }, e.prototype._convertObject = function(e, t, r) {
                    var o, a = this;
                    return o = "function" == typeof e.toJSON ? (0, n.mapValues)(e.toJSON(), (function(e) {
                        return a.convertToCustomFormat(e, r)
                    })) : (0, n.mapValues)(e, (function(e) {
                        return a.convertToCustomFormat(e, r)
                    })), r.delete(t), o
                }, e.prototype._convertArray = function(e, t) {
                    var r = this,
                        n = e.map((function(e) {
                            return r.convertToCustomFormat(e, t, !0)
                        }));
                    return t.delete(e), n
                }, e.prototype._findConverterFromCustomFormat = function(e) {
                    return this._converters.find((function(t) {
                        return t.canConvertFromCustomFormat(e)
                    }))
                }, e.prototype._findConverterToCustomFormat = function(e) {
                    return this._converters.find((function(t) {
                        return t.canConvertToCustomFormat(e)
                    }))
                }, e
            }();
        t.ConvertersComposer = a
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.mapValues = void 0, t.mapValues = function(e, t) {
            var r = {};
            return Object.keys(e).forEach((function(n) {
                var o = t(e[n]);
                void 0 !== o && (r[n] = o)
            })), r
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DateConverter = void 0;
        var n = function() {
            function e() {}
            return e.prototype.canConvertToCustomFormat = function(e) {
                return e instanceof Date
            }, e.prototype.convertToCustomFormat = function(e) {
                return {
                    $date: e.toISOString()
                }
            }, e.prototype.canConvertFromCustomFormat = function(e) {
                return this._isObjectWith$Date(e) && "string" == typeof e.$date && (t = e.$date, !Number.isNaN(Date.parse(t)));
                var t
            }, e.prototype.convertFromCustomFormat = function(e) {
                return new Date(e.$date)
            }, e.prototype._isObjectWith$Date = function(e) {
                return !!e && "object" == typeof e && "$date" in e
            }, e
        }();
        t.DateConverter = n
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DefaultConverter = void 0;
        var n = function() {
            function e() {}
            return e.prototype.canConvertToCustomFormat = function() {
                return !0
            }, e.prototype.convertToCustomFormat = function(e, t) {
                return t && void 0 === e ? null : e
            }, e.prototype.canConvertFromCustomFormat = function() {
                return !0
            }, e.prototype.convertFromCustomFormat = function(e) {
                return e
            }, e
        }();
        t.DefaultConverter = n
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.generatePackageWebMethodUrl = t.exceptionToWebMethodPayload = t.resultToWebMethodPayload = void 0;
        var n = r(48);
        t.resultToWebMethodPayload = function(e, t) {
            var r = t ? JSON.parse(JSON.stringify(e, t)) : (0, n.convertToCustomFormat)(e);
            return void 0 === r ? {} : {
                result: r
            }
        }, t.exceptionToWebMethodPayload = function(e, t, r) {
            return void 0 === t && (t = function(e) {
                return e
            }), void 0 === r && (r = function(e) {
                return ""
            }), {
                result: e instanceof Error ? {
                    message: t(e.message),
                    name: e.name,
                    stack: r(e.stack),
                    code: e.code,
                    _elementoryError: !0
                } : e,
                exception: !0
            }
        }, t.generatePackageWebMethodUrl = function(e, t) {
            return "/_webMethods/packages/".concat(encodeURIComponent(e), "/").concat(t, ".ajax")
        }
    }, function(e, t, r) {
        "use strict";
        const n = r(0).identity,
            o = r(91),
            a = r(39),
            {
                getAppUrl: i
            } = r(32),
            s = r(92);
        e.exports = e => {
            let {
                Raven: t,
                appName: r,
                browserUrlGetter: c,
                dsn: l,
                params: u
            } = e;
            const d = i(r),
                p = a(d);
            return t.config(l, Object.assign({}, o, {
                captureUnhandledRejections: !1,
                autoBreadcrumbs: {
                    dom: !1
                }
            })), t.setRelease(u.release || p), t.setShouldSendCallback(u.shouldSendCallback || s), t.setDataCallback((function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
                return e.request = Object.assign(e.request || {}, {
                    url: c()
                }), t(e)
            })), () => {
                t.setDataCallback(n)
            }
        }
    }, function(e, t, r) {
        "use strict";
        e.exports = {
            maxUrlLength: 1e3
        }
    }, function(e, t, r) {
        "use strict";
        const {
            extract: n,
            parse: o
        } = r(40), a = r(0).get, i = r(0).includes, s = r(0).identity, {
            Result: c,
            Maybe: l
        } = r(4), u = ["ReactSource", "EditorSource", "experiments", "petri_ovr", "WixCodeRuntimeSource", "js-wixcode-sdk-override", "debug"], d = e => l.fromNullable(e).chain((e => c.try((() => o(n(e)))))).map((e => (e => "true" === e.forceReportSentry)(e) || (e => Object.keys(e).every((e => !i(u, e))))(e))).getOrElse(!0), p = [e => (e => [a(e, ["request", "headers", "Referer"]), a(e, ["request", "url"])])(e).every(d)];
        e.exports = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
            return p.concat(t).every((t => t(e)))
        }
    }, function(e, t, r) {
        "use strict";
        e.exports = function(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            }))
        }
    }, function(e, t, r) {
        "use strict";
        var n = Object.getOwnPropertySymbols,
            o = Object.prototype.hasOwnProperty,
            a = Object.prototype.propertyIsEnumerable;

        function i(e) {
            if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }
        e.exports = function() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                        return t[e]
                    })).join("")) return !1;
                var n = {};
                return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                    n[e] = e
                })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
            } catch (e) {
                return !1
            }
        }() ? Object.assign : function(e, t) {
            for (var r, s, c = i(e), l = 1; l < arguments.length; l++) {
                for (var u in r = Object(arguments[l])) o.call(r, u) && (c[u] = r[u]);
                if (n) {
                    s = n(r);
                    for (var d = 0; d < s.length; d++) a.call(r, s[d]) && (c[s[d]] = r[s[d]])
                }
            }
            return c
        }
    }, function(e, t, r) {
        "use strict";
        var n = "%[a-f0-9]{2}",
            o = new RegExp(n, "gi"),
            a = new RegExp("(" + n + ")+", "gi");

        function i(e, t) {
            try {
                return decodeURIComponent(e.join(""))
            } catch (e) {}
            if (1 === e.length) return e;
            t = t || 1;
            var r = e.slice(0, t),
                n = e.slice(t);
            return Array.prototype.concat.call([], i(r), i(n))
        }

        function s(e) {
            try {
                return decodeURIComponent(e)
            } catch (n) {
                for (var t = e.match(o), r = 1; r < t.length; r++) t = (e = i(t, r).join("")).match(o);
                return e
            }
        }
        e.exports = function(e) {
            if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
            try {
                return e = e.replace(/\+/g, " "), decodeURIComponent(e)
            } catch (t) {
                return function(e) {
                    for (var t = {
                            "%FE%FF": "��",
                            "%FF%FE": "��"
                        }, r = a.exec(e); r;) {
                        try {
                            t[r[0]] = decodeURIComponent(r[0])
                        } catch (e) {
                            var n = s(r[0]);
                            n !== r[0] && (t[r[0]] = n)
                        }
                        r = a.exec(e)
                    }
                    t["%C2"] = "�";
                    for (var o = Object.keys(t), i = 0; i < o.length; i++) {
                        var c = o[i];
                        e = e.replace(new RegExp(c, "g"), t[c])
                    }
                    return e
                }(e)
            }
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(97).isPromise,
            o = r(98),
            a = o.sequence,
            i = o.try_,
            s = r(99),
            c = r(100),
            l = c.isEffect,
            u = c.isImmediateEffect,
            d = c.isQueuedEffect,
            p = function(e) {
                return function(t) {
                    return e.push(t),
                        function() {
                            var r = e.indexOf(t);
                            r >= 0 && e.splice(r, 1)
                        }
                }
            };
        e.exports = function() {
            var e = [],
                t = [],
                r = Promise.resolve();
            return {
                middleware: function(o) {
                    return function(c) {
                        return function(p) {
                            var f = function(e) {
                                    var t = i((function() {
                                        return e.run()
                                    }));
                                    return t.fold((function(r) {
                                        var n = e.resultActionCreator ? o.dispatch(e.resultActionCreator(!0, r)) : Promise.resolve();
                                        return [t, n]
                                    }), (function(r) {
                                        if (n(r)) {
                                            var a = r.then((function(t) {
                                                return e.resultActionCreator ? o.dispatch(e.resultActionCreator(!1, t)) : Promise.resolve()
                                            }), (function(t) {
                                                throw e.resultActionCreator && o.dispatch(e.resultActionCreator(!0, t)).catch((function() {})), t
                                            }));
                                            return [t, a]
                                        }
                                        var i = e.resultActionCreator ? o.dispatch(e.resultActionCreator(!1, r)) : Promise.resolve();
                                        return [t, i]
                                    }))
                                },
                                h = o.getState(),
                                m = c(p),
                                g = o.getState();
                            if (h !== g) {
                                var y = s(h, g);
                                return a(e.slice().map((function(e) {
                                    return i((function() {
                                        return e(y) || []
                                    }))
                                }))).fold((function(e) {
                                    throw e
                                }), (function(e) {
                                    return function(e) {
                                        var n = function() {
                                                var e = void 0,
                                                    n = new Promise((function(t) {
                                                        return e = t
                                                    })),
                                                    o = new Promise((function(e, o) {
                                                        var a = r = r.then((function() {
                                                            return n
                                                        })).then(function(e, t) {
                                                            return function(r) {
                                                                if (r.length > 0) {
                                                                    var n = r.filter(d).map(f);
                                                                    return Promise.all(n.map((function(e) {
                                                                        return e[1]
                                                                    }))).then((function() {
                                                                        return e()
                                                                    }), t), Promise.all(n.map((function(e) {
                                                                        return e[0]
                                                                    })).map((function(e) {
                                                                        return e.fold((function(e) {
                                                                            return Promise.reject(e)
                                                                        }), (function(e) {
                                                                            return e
                                                                        }))
                                                                    }))).catch(t)
                                                                }
                                                                return e(), Promise.resolve()
                                                            }
                                                        }(e, o), o).catch(o).then((function() {
                                                            a === r && t.slice().forEach((function(e) {
                                                                return e()
                                                            }))
                                                        }))
                                                    }));
                                                return {
                                                    promise: o,
                                                    trigger: e
                                                }
                                            }(),
                                            o = n.promise,
                                            a = n.trigger;
                                        return i((function() {
                                            return function(e) {
                                                var t = e.filter(u).map(f);
                                                return t.map((function(e) {
                                                    return e[0]
                                                })).map((function(e) {
                                                    return e.fold((function(e) {
                                                        throw e
                                                    }), (function(e) {
                                                        return e
                                                    }))
                                                })), t.map((function(e) {
                                                    return e[1]
                                                })).map((function(e) {
                                                    return e.catch((function() {}))
                                                })), e.filter(d)
                                            }(e)
                                        })).fold((function(e) {
                                            throw a([]), e
                                        }), (function(e) {
                                            return a(e), o
                                        }))
                                    }(e.filter(l))
                                }))
                            }
                            return Promise.resolve(m)
                        }
                    }
                },
                subscribe: p(e),
                onIdle: p(t)
            }
        }
    }, function(e, t, r) {
        "use strict";
        e.exports.isPromise = function(e) {
            return null != e && "function" == typeof e.then
        }
    }, function(e, t, r) {
        "use strict";
        var n = function() {},
            o = function(e, t) {
                return e.fold(t.Error || n, t.Ok || n)
            },
            a = function(e) {
                return {
                    map: function(e) {
                        return this
                    },
                    fold: function(t, r) {
                        return t(e)
                    },
                    chain: function(e) {
                        return this
                    },
                    match: function(e) {
                        return o(this, e)
                    },
                    value: e
                }
            },
            i = function e(t) {
                return {
                    map: function(r) {
                        return e(r(t))
                    },
                    fold: function(e, r) {
                        return r(t)
                    },
                    chain: function(e) {
                        return e(t)
                    },
                    match: function(e) {
                        return o(this, e)
                    },
                    value: t
                }
            },
            s = {
                Left: a,
                Right: i
            };
        e.exports = {
            Either: s,
            sequence: function(e) {
                return e.reduce((function(e, t) {
                    return e.chain((function(e) {
                        return t.map((function(t) {
                            return e.concat(t)
                        }))
                    }))
                }), i([]))
            },
            try_: function(e) {
                try {
                    return i(e())
                } catch (e) {
                    return a(e)
                }
            }
        }
    }, function(e, t, r) {
        "use strict";
        e.exports = function(e, t) {
            var r = {
                from: e,
                to: t,
                hasChanged: function(r) {
                    return r(e) !== r(t)
                },
                hasChangedToMatch: function(e, n) {
                    return r.hasChanged(e) && n(e(t))
                },
                hasChangedToTrue: function(e) {
                    return r.hasChangedToMatch(e, (function(e) {
                        return !0 === e
                    }))
                },
                hasChangedToFalse: function(e) {
                    return r.hasChangedToMatch(e, (function(e) {
                        return !1 === e
                    }))
                },
                hasChangedToNull: function(e) {
                    return r.hasChangedToMatch(e, (function(e) {
                        return null === e
                    }))
                },
                hasChangedToNotNull: function(e) {
                    return r.hasChangedToMatch(e, (function(e) {
                        return null !== e
                    }))
                }
            };
            return r
        }
    }, function(e, t, r) {
        "use strict";
        var n = function(e) {
            return null != e && "function" == typeof e.run && "boolean" == typeof e.isQueued && (!e.resultActionCreator || "function" == typeof e.resultActionCreator)
        };
        e.exports = {
            isEffect: n,
            isImmediateEffect: function(e) {
                return n(e) && !e.isQueued
            },
            isQueuedEffect: function(e) {
                return n(e) && e.isQueued
            }
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, n(e)
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            }, a(e, t)
        }

        function i(e, t) {
            if (t && ("object" === n(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return s(e)
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function c(e) {
            return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, c(e)
        }
        var l = r(49),
            u = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && a(e, t)
                }(d, e);
                var t, r, n, u = (r = d, n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, t = c(r);
                    if (n) {
                        var o = c(this).constructor;
                        e = Reflect.construct(t, arguments, o)
                    } else e = t.apply(this, arguments);
                    return i(this, e)
                });

                function d() {
                    var e;
                    o(this, d);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return e = u.call.apply(u, [this].concat(r)), Error.captureStackTrace && Error.captureStackTrace(s(e), e.constructor), e.name = d.name, l.markUserError(s(e)), e
                }
                return t = d, Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }(function(e) {
                function t() {
                    var t = Reflect.construct(e, Array.from(arguments));
                    return Object.setPrototypeOf(t, Object.getPrototypeOf(this)), t
                }
                return t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e, t
            }(Error));
        e.exports = {
            UserCodeError: u
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(40),
            o = r.n(n),
            a = r(15),
            i = r(18),
            s = r.n(i);

        function c(e) {
            return "object" === s()(e)
        }

        function l(e) {
            return "array" === s()(e)
        }

        function u(e) {
            return "string" === s()(e)
        }

        function d(e) {
            if (null == e || "object" != typeof e) return e;
            var t = null;
            if (function(e) {
                    return "date" === s()(e)
                }(e)) t = new Date(e.getTime());
            else
                for (var r in t = e.constructor(), e) t[r] = d(e[r]);
            return t
        }
        var p = r(44);
        r(66);
        var f = function() {
                return "WDE0019: Reference operation takes a string ID or an object with an ID to be connected."
            },
            h = function() {
                return "WDE0021: Invalid reference"
            };

        function m(e, t) {
            return g(e, t)
        }

        function g(e, t) {
            var r = new(t && "WD_UNKNOWN_ERROR" !== t ? v : Error)(e);
            return r.code = t, r
        }

        function y(e) {
            return m(function(e) {
                return "WDE0025: The ".concat(e, " collection does not exist. You cannot work with a collection using the Data API before it is created in the Editor.")
            }(e), "WD_SCHEMA_DOES_NOT_EXIST")
        }

        function v(e) {
            var t = new p.UserCodeError(e);
            return Object.setPrototypeOf(t, Object.getPrototypeOf(this)), Error.captureStackTrace && Error.captureStackTrace(t, v), t.name = Error.name, t
        }
        Object.create(Error.prototype, {
            constructor: {
                value: Error,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), v.prototype = Object.create(p.UserCodeError.prototype, {
            constructor: {
                value: v,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
        var w = function() {
                function e() {
                    this._validations = []
                }
                return e.prototype.arityIsZero = function(e) {
                    var t = this;
                    return this.addValidation((function() {
                        return 0 === e.length
                    }), (function() {
                        return e = t.operatorName, "WDE0038: Invalid ".concat(e, " usage. ").concat(e, " does not take parameters.");
                        var e
                    }))
                }, e.prototype.arityIsOne = function(e) {
                    var t = this;
                    return this.addValidation((function() {
                        return 1 === e.length
                    }), (function() {
                        return e = t.operatorName, "WDE0039: Invalid ".concat(e, " usage. ").concat(e, " requires one parameter.");
                        var e
                    }))
                }, e.prototype.arityIsTwo = function(e) {
                    var t = this;
                    return this.addValidation((function() {
                        return 2 === e.length
                    }), (function() {
                        return e = t.operatorName, "WDE0040: Invalid ".concat(e, " usage. ").concat(e, " requires two parameters.");
                        var e
                    }))
                }, e.prototype.arityIsThree = function(e) {
                    var t = this;
                    return this.addValidation((function() {
                        return 3 === e.length
                    }), (function() {
                        return e = t.operatorName, "WDE0041: Invalid ".concat(e, " usage. ").concat(e, " requires three parameters.");
                        var e
                    }))
                }, e.prototype.arityIsAtLeastTwo = function(e) {
                    var t = this;
                    return this.addValidation((function() {
                        return e.length >= 2
                    }), (function() {
                        return e = t.operatorName, "WDE0042: Invalid ".concat(e, " usage. ").concat(e, " requires at least two parameters.");
                        var e
                    }))
                }, e.prototype.arityIsAtLeastOne = function(e) {
                    var t = this;
                    return this.addValidation((function() {
                        return e.length >= 1
                    }), (function() {
                        return e = t.operatorName, "WDE0043: Invalid ".concat(e, " usage. ").concat(e, " requires at least one parameter.");
                        var e
                    }))
                }, e.prototype.addValidation = function(e, t) {
                    return this._validations.push({
                        predicateFn: e,
                        messageFn: t
                    }), this
                }, e
            }(),
            b = (function(e) {
                function t(t) {
                    var r = e.call(this) || this;
                    return r._invalidArguments = d(t), r
                }
                Object(a.b)(t, e), t.prototype.validateAndAggregate = function() {
                    var e = this,
                        t = this._validations.every((function(t) {
                            var r = t.predicateFn,
                                n = t.messageFn;
                            return e._appendIfInvalid(r(), n())
                        }));
                    return [this._invalidArguments, t]
                }, t.prototype._appendIfInvalid = function(e, t) {
                    return !!e || (this._invalidArguments.push(t), !1)
                }
            }(w), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return Object(a.b)(t, e), t.prototype.validateAndReject = function() {
                    var e = this;
                    return Promise.resolve().then((function() {
                        e._validations.forEach((function(e) {
                            var t = e.predicateFn,
                                r = e.messageFn;
                            if (!t()) throw g(r(), "WD_VALIDATION_ERROR")
                        }))
                    }))
                }, t
            }(w));

        function E(e) {
            return u(e) && "" !== e || c(e) && e.hasOwnProperty("_id")
        }

        function I(e) {
            return u(e) || c(e) && e.hasOwnProperty("_id")
        }

        function O(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function T(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function R(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function _(e) {
            return t = function(e) {
                return "WDE0026: The ".concat(e, " collection was removed, so you cannot work with it. To restore its data, create a new collection with the same name.")
            }(e), Promise.reject(m(t, "WD_COLLECTION_DELETED"));
            var t
        }! function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            Object(a.b)(t, e), t.prototype.arity = function(e, t, r, n) {
                return this.addValidation((function() {
                    return t.length <= n && t.length >= r
                }), (function() {
                    return function(e, t, r, n) {
                        return "WDE0008: wixData.".concat(e, " expects between ").concat(t, " and ").concat(r, " arguments, but was called with ").concat(n, ".")
                    }(e, r, n, t.length)
                }))
            }, t.prototype._isObject = function(e, t) {
                return this.addValidation((function() {
                    return c(e)
                }), (function() {
                    return function(e, t) {
                        return "WDE0004: Failed to save [".concat(e, "] into [").concat(t, "].\nItems must be JavaScript objects.")
                    }(e, t)
                }))
            }, t.prototype.item = function(e, t, r) {
                return this._isObject(e, t).addValidation((function() {
                    return void 0 !== e._id ? u(e._id) : !r
                }), (function() {
                    return "WDE0007: Invalid update. Updated object must have a string _id property."
                }))
            }, t.prototype.items = function(e, t) {
                return this.addValidation((function() {
                    return l(e) && e.every((function(e) {
                        return c(e) && (void 0 === e._id || null === e._id || u(e._id))
                    }))
                }), (function() {
                    return function(e) {
                        return "WDE0005: Failed to bulk save items into [".concat(e, "].\nItems must be an array of JavaScript objects and itemIds must be strings if present.")
                    }(t)
                })).addValidation((function() {
                    return e.length <= 1e3
                }), (function() {
                    return function(e) {
                        return "WDE0006: Failed to bulk save items into [".concat(e, "].\nCannot insert more than 1000 items in one request")
                    }(t)
                }))
            }, t.prototype.fieldName = function(e) {
                return this.addValidation((function() {
                    return u(e)
                }), (function() {
                    return "WDE0003: FieldName must be a string."
                }))
            }, t.prototype.itemId = function(e) {
                return this.addValidation((function() {
                    return u(e)
                }), (function() {
                    return "WDE0002: ItemId must be a string."
                }))
            }, t.prototype.itemIds = function(e, t) {
                return this.addValidation((function() {
                    return l(e) && e.every((function(e) {
                        return u(e)
                    }))
                }), (function() {
                    return "WDE0068: Item ids must be an array of strings"
                })).addValidation((function() {
                    return e.length <= 1e3
                }), (function() {
                    return function(e) {
                        return "WDE0069: Failed to remove items from [".concat(e, "].\nCannot remove more than 1000 items in one request")
                    }(t)
                }))
            }, t.prototype._options = function(e, t) {
                return this.addValidation((function() {
                    var r = c(e) && t.every((function(t) {
                        return null == (r = e[t]) || (n = r, "boolean" === s()(n));
                        var r, n
                    }));
                    return null == e || r
                }), (function() {
                    return "WDE0018: Options must be an object with one or all of the following boolean properties: ".concat(t.join(", "), ".")
                }))
            }, t.prototype.referenceRemoveParameters = function(e) {
                return this.addValidation((function() {
                    return l(e) && e.every(I)
                }), f)
            }, t.prototype.referenceParameters = function(e) {
                return this.addValidation((function() {
                    return l(e) && e.every(E)
                }), f)
            }, t.prototype.referenceParameter = function(e) {
                return this.addValidation((function() {
                    return E(e)
                }), f)
            }, t.prototype.isNonEmptyString = function(e, t) {
                return this.addValidation((function() {
                    return "string" == typeof e && e.length > 0
                }), (function() {
                    return "WDE0094: Invalid ".concat(e = t, " parameter. ").concat(e, " parameter must be non-empty string.");
                    var e
                }))
            }, t.prototype.references = function(e) {
                return this.addValidation((function() {
                    return l(e) && e.every((function(e) {
                        return u(e.relationshipName) && E(e.left) && E(e.right)
                    }))
                }), h)
            }, t.prototype.options = function(e) {
                return this._options(e, ["suppressAuth", "suppressHooks", "showDrafts"])
            }, t.prototype.bulkInsertOptions = function(e) {
                return this._options(e, ["suppressAuth", "suppressHooks", "overrideExisting"])
            }, t.prototype.bulkUpdateOptions = function(e) {
                return this._options(e, ["suppressAuth", "suppressHooks", "showDrafts"])
            }, t.prototype.bulkRemoveOptions = function(e) {
                return this._options(e, ["suppressAuth", "suppressHooks", "showDrafts"])
            }, t.prototype.truncateOptions = function(e) {
                return this._options(e, ["suppressAuth"])
            }, t.prototype.collectionName = function(e) {
                return this.addValidation((function() {
                    return u(e)
                }), (function() {
                    return "WDE0001: Collection name must be a string."
                }))
            }
        }(b);
        var C = function(e) {
                function t(e, r) {
                    O(this, t);
                    var n = T(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return Object.setPrototypeOf(n, r.prototype), n.name = r.name, Error.captureStackTrace ? Error.captureStackTrace(n, r) : n.stack = new Error(e).stack, n
                }
                return R(t, Error), t
            }(),
            S = function(e) {
                function t(e) {
                    O(this, t);
                    var r = T(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, t));
                    return r.reason = e, r.message = e, r
                }
                return R(t, e), t
            }(C),
            D = function(e) {
                function t(e, r, n, o) {
                    O(this, t);
                    var a = T(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, t));
                    return a.status = e, a.responseText = r, a.requestId = o, a
                }
                return R(t, e), t
            }(C),
            A = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            !n && s.return && s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            P = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            j = function(e) {
                return "object" === (void 0 === e ? "undefined" : x(e)) && e.message ? e.message : "string" == typeof e ? e : JSON.stringify(e)
            },
            N = function(e) {
                return e.reduce((function(e, t) {
                    return Object.assign({}, e, (r = {}, o = t, (n = t.id) in r ? Object.defineProperty(r, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[n] = o, r));
                    var r, n, o
                }), {})
            },
            M = function(e, t) {
                return e.endsWith(t) ? e.substring(0, e.length - t.length) : e
            },
            L = function() {
                function e(t, r, n, o) {
                    var a = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = function(e) {
                        return e = M(e, "/"), M(e, "/v1/schemas")
                    }(o && o.baseUrl || "https://cloud-data.wix-code.com");
                    this.signedInstance = r, this.gridAppId = n, this.mutate = function(e, r, n) {
                        return t[e](i + r, n, a._setHeaders()).then((function(e) {
                            return e.data
                        })).catch(a._handleError)
                    }, this.retrieve = function(e) {
                        return t.get(i + e, a._setHeaders()).then((function(e) {
                            return e.data
                        })).catch(a._handleError)
                    }
                }
                return P(e, null, [{
                    key: "FailedRequestException",
                    get: function() {
                        return S
                    }
                }, {
                    key: "UnsuccessfulResponseException",
                    get: function() {
                        return D
                    }
                }]), P(e, [{
                    key: "wrapWithDefaultOptions",
                    value: function(e) {
                        return Object.assign({}, e, {
                            appId: this.gridAppId
                        })
                    }
                }, {
                    key: "formRequestUrl",
                    value: function(e) {
                        return "/v1/schemas?" + o.a.stringify(e)
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                includeDeletedCollections: !1
                            },
                            r = this.wrapWithDefaultOptions({
                                includeDeleted: !0,
                                schemaIds: e
                            });
                        return this.retrieve(this.formRequestUrl(r)).then((function(r) {
                            var n = A(r.schemas, 1)[0];
                            return n && n.isDeleted && !t.includeDeletedCollections ? _(e) : n || Promise.reject(y(e))
                        }))
                    }
                }, {
                    key: "bulkGet",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                includeDeletedCollections: !1,
                                referencedCollectionsDepth: 0
                            },
                            r = this.wrapWithDefaultOptions({
                                depth: t.referencedCollectionsDepth || 0,
                                includeDeleted: t.includeDeletedCollections || !1,
                                schemaIds: e
                            });
                        return this.retrieve(this.formRequestUrl(r)).then((function(e) {
                            var t = e.schemas;
                            return N(t)
                        }))
                    }
                }, {
                    key: "list",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                includeDeletedCollections: !1
                            },
                            t = this.wrapWithDefaultOptions({
                                schemaIds: [],
                                depth: 0,
                                includeDeleted: e.includeDeletedCollections || !1
                            });
                        return this.retrieve(this.formRequestUrl(t)).then((function(e) {
                            var t = e.schemas;
                            return N(t)
                        }))
                    }
                }, {
                    key: "save",
                    value: function(e, t) {
                        var r = this.wrapWithDefaultOptions({
                            schemaId: e,
                            schema: t
                        });
                        return this.mutate("post", "/v1/schemas", r).then((function(e) {
                            return e.schemas
                        }))
                    }
                }, {
                    key: "setIsDeletedFlag",
                    value: function(e, t) {
                        var r = this.wrapWithDefaultOptions({
                            schemaId: e,
                            partialSchema: {
                                isDeleted: t
                            }
                        });
                        return this.mutate("patch", "/v1/schemas", r).then((function(e) {
                            return e.schemas
                        }))
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        return this.setIsDeletedFlag(e, !0)
                    }
                }, {
                    key: "restore",
                    value: function(e) {
                        return this.setIsDeletedFlag(e, !1)
                    }
                }, {
                    key: "_setHeaders",
                    value: function() {
                        return {
                            headers: {
                                authorization: this.signedInstance
                            }
                        }
                    }
                }, {
                    key: "_handleError",
                    value: function(e) {
                        if (!e.response) return Promise.reject(new S(j(e)));
                        var t = e.response,
                            r = t.headers["x-wix-request-id"];
                        return Promise.reject(new D(t.status, t.data, j(t.data), r))
                    }
                }]), e
            }();
        t.a = L
    }, function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "initAppForPage", (function() {
            return o
        })), r.d(t, "createControllers", (function() {
            return a
        }));
        var n = r(50);
        const {
            initAppForPage: o,
            createControllers: a
        } = new n.a
    }])
}));
//# sourceMappingURL=app.js.map
//# sourceURL=https://static.parastorage.com/services/dbsm-viewer-app/1.5340.0/app.js