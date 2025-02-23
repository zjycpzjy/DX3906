const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['assets/AboutView-BkvIdKkt.js', 'assets/AboutView-CSIvawM9.css']),
) => i.map((i) => d[i])
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === 'childList')
        for (const i of o.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const o = {}
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function s(r) {
    if (r.ep) return
    r.ep = !0
    const o = n(r)
    fetch(r.href, o)
  }
})()
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function is(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const te = {},
  St = [],
  Ve = () => {},
  Qo = () => !1,
  bn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ls = (e) => e.startsWith('onUpdate:'),
  fe = Object.assign,
  cs = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Jo = Object.prototype.hasOwnProperty,
  q = (e, t) => Jo.call(e, t),
  F = Array.isArray,
  Rt = (e) => wn(e) === '[object Map]',
  Er = (e) => wn(e) === '[object Set]',
  D = (e) => typeof e == 'function',
  re = (e) => typeof e == 'string',
  Qe = (e) => typeof e == 'symbol',
  se = (e) => e !== null && typeof e == 'object',
  Sr = (e) => (se(e) || D(e)) && D(e.then) && D(e.catch),
  Rr = Object.prototype.toString,
  wn = (e) => Rr.call(e),
  Xo = (e) => wn(e).slice(8, -1),
  Cr = (e) => wn(e) === '[object Object]',
  us = (e) => re(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Nt = is(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  xn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Zo = /-(\w)/g,
  lt = xn((e) => e.replace(Zo, (t, n) => (n ? n.toUpperCase() : ''))),
  ei = /\B([A-Z])/g,
  vt = xn((e) => e.replace(ei, '-$1').toLowerCase()),
  Pr = xn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Tn = xn((e) => (e ? `on${Pr(e)}` : '')),
  it = (e, t) => !Object.is(e, t),
  Mn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Ar = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n })
  },
  ti = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Ts
const En = () =>
  Ts ||
  (Ts =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function fs(e) {
  if (F(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = re(s) ? oi(s) : fs(s)
      if (r) for (const o in r) t[o] = r[o]
    }
    return t
  } else if (re(e) || se(e)) return e
}
const ni = /;(?![^(]*\))/g,
  si = /:([^]+)/,
  ri = /\/\*[^]*?\*\//g
function oi(e) {
  const t = {}
  return (
    e
      .replace(ri, '')
      .split(ni)
      .forEach((n) => {
        if (n) {
          const s = n.split(si)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function as(e) {
  let t = ''
  if (re(e)) t = e
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const s = as(e[n])
      s && (t += s + ' ')
    }
  else if (se(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const ii = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  li = is(ii)
function Or(e) {
  return !!e || e === ''
}
const Tr = (e) => !!(e && e.__v_isRef === !0),
  Mr = (e) =>
    re(e)
      ? e
      : e == null
        ? ''
        : F(e) || (se(e) && (e.toString === Rr || !D(e.toString)))
          ? Tr(e)
            ? Mr(e.value)
            : JSON.stringify(e, Ir, 2)
          : String(e),
  Ir = (e, t) =>
    Tr(t)
      ? Ir(e, t.value)
      : Rt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], o) => ((n[In(s, o) + ' =>'] = r), n),
              {},
            ),
          }
        : Er(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => In(n)) }
          : Qe(t)
            ? In(t)
            : se(t) && !F(t) && !Cr(t)
              ? String(t)
              : t,
  In = (e, t = '') => {
    var n
    return Qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let xe
class zr {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = xe),
      !t && xe && (this.index = (xe.scopes || (xe.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = xe
      try {
        return (xe = this), t()
      } finally {
        xe = n
      }
    }
  }
  on() {
    xe = this
  }
  off() {
    xe = this.parent
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function ci(e) {
  return new zr(e)
}
function ui() {
  return xe
}
let ee
const zn = new WeakSet()
class Hr {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      xe && xe.active && xe.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), zn.has(this) && (zn.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Lr(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), Ms(this), jr(this)
    const t = ee,
      n = Pe
    ;(ee = this), (Pe = !0)
    try {
      return this.fn()
    } finally {
      Fr(this), (ee = t), (Pe = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) ps(t)
      ;(this.deps = this.depsTail = void 0),
        Ms(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64 ? zn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    Kn(this) && this.run()
  }
  get dirty() {
    return Kn(this)
  }
}
let $r = 0,
  kt,
  Bt
function Lr(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = Bt), (Bt = e)
    return
  }
  ;(e.next = kt), (kt = e)
}
function ds() {
  $r++
}
function hs() {
  if (--$r > 0) return
  if (Bt) {
    let t = Bt
    for (Bt = void 0; t; ) {
      const n = t.next
      ;(t.next = void 0), (t.flags &= -9), (t = n)
    }
  }
  let e
  for (; kt; ) {
    let t = kt
    for (kt = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function jr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t)
}
function Fr(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    s.version === -1 ? (s === n && (n = r), ps(s), fi(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function Kn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Dr(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function Dr(e) {
  if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === Yt)) return
  e.globalVersion = Yt
  const t = e.dep
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Kn(e))) {
    e.flags &= -3
    return
  }
  const n = ee,
    s = Pe
  ;(ee = e), (Pe = !0)
  try {
    jr(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || it(r, e._value)) && ((e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;(ee = n), (Pe = s), Fr(e), (e.flags &= -3)
  }
}
function ps(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let o = n.computed.deps; o; o = o.nextDep) ps(o, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function fi(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0))
}
let Pe = !0
const Vr = []
function ct() {
  Vr.push(Pe), (Pe = !1)
}
function ut() {
  const e = Vr.pop()
  Pe = e === void 0 ? !0 : e
}
function Ms(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = ee
    ee = void 0
    try {
      t()
    } finally {
      ee = n
    }
  }
}
let Yt = 0
class ai {
  constructor(t, n) {
    ;(this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0)
  }
}
class gs {
  constructor(t) {
    ;(this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0)
  }
  track(t) {
    if (!ee || !Pe || ee === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== ee)
      (n = this.activeLink = new ai(ee, this)),
        ee.deps
          ? ((n.prevDep = ee.depsTail), (ee.depsTail.nextDep = n), (ee.depsTail = n))
          : (ee.deps = ee.depsTail = n),
        Nr(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;(s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = ee.depsTail),
        (n.nextDep = void 0),
        (ee.depsTail.nextDep = n),
        (ee.depsTail = n),
        ee.deps === n && (ee.deps = s)
    }
    return n
  }
  trigger(t) {
    this.version++, Yt++, this.notify(t)
  }
  notify(t) {
    ds()
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      hs()
    }
  }
}
function Nr(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) Nr(s)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const Wn = new WeakMap(),
  gt = Symbol(''),
  qn = Symbol(''),
  Qt = Symbol('')
function ce(e, t, n) {
  if (Pe && ee) {
    let s = Wn.get(e)
    s || Wn.set(e, (s = new Map()))
    let r = s.get(n)
    r || (s.set(n, (r = new gs())), (r.map = s), (r.key = n)), r.track()
  }
}
function qe(e, t, n, s, r, o) {
  const i = Wn.get(e)
  if (!i) {
    Yt++
    return
  }
  const c = (l) => {
    l && l.trigger()
  }
  if ((ds(), t === 'clear')) i.forEach(c)
  else {
    const l = F(e),
      h = l && us(n)
    if (l && n === 'length') {
      const a = Number(s)
      i.forEach((d, g) => {
        ;(g === 'length' || g === Qt || (!Qe(g) && g >= a)) && c(d)
      })
    } else
      switch (((n !== void 0 || i.has(void 0)) && c(i.get(n)), h && c(i.get(Qt)), t)) {
        case 'add':
          l ? h && c(i.get('length')) : (c(i.get(gt)), Rt(e) && c(i.get(qn)))
          break
        case 'delete':
          l || (c(i.get(gt)), Rt(e) && c(i.get(qn)))
          break
        case 'set':
          Rt(e) && c(i.get(gt))
          break
      }
  }
  hs()
}
function wt(e) {
  const t = W(e)
  return t === e ? t : (ce(t, 'iterate', Qt), Ae(e) ? t : t.map(de))
}
function ms(e) {
  return ce((e = W(e)), 'iterate', Qt), e
}
const di = {
  __proto__: null,
  [Symbol.iterator]() {
    return Hn(this, Symbol.iterator, de)
  },
  concat(...e) {
    return wt(this).concat(...e.map((t) => (F(t) ? wt(t) : t)))
  },
  entries() {
    return Hn(this, 'entries', (e) => ((e[1] = de(e[1])), e))
  },
  every(e, t) {
    return Ue(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return Ue(this, 'filter', e, t, (n) => n.map(de), arguments)
  },
  find(e, t) {
    return Ue(this, 'find', e, t, de, arguments)
  },
  findIndex(e, t) {
    return Ue(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Ue(this, 'findLast', e, t, de, arguments)
  },
  findLastIndex(e, t) {
    return Ue(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Ue(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return $n(this, 'includes', e)
  },
  indexOf(...e) {
    return $n(this, 'indexOf', e)
  },
  join(e) {
    return wt(this).join(e)
  },
  lastIndexOf(...e) {
    return $n(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return Ue(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return Lt(this, 'pop')
  },
  push(...e) {
    return Lt(this, 'push', e)
  },
  reduce(e, ...t) {
    return Is(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return Is(this, 'reduceRight', e, t)
  },
  shift() {
    return Lt(this, 'shift')
  },
  some(e, t) {
    return Ue(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return Lt(this, 'splice', e)
  },
  toReversed() {
    return wt(this).toReversed()
  },
  toSorted(e) {
    return wt(this).toSorted(e)
  },
  toSpliced(...e) {
    return wt(this).toSpliced(...e)
  },
  unshift(...e) {
    return Lt(this, 'unshift', e)
  },
  values() {
    return Hn(this, 'values', de)
  },
}
function Hn(e, t, n) {
  const s = ms(e),
    r = s[t]()
  return (
    s !== e &&
      !Ae(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const o = r._next()
        return o.value && (o.value = n(o.value)), o
      })),
    r
  )
}
const hi = Array.prototype
function Ue(e, t, n, s, r, o) {
  const i = ms(e),
    c = i !== e && !Ae(e),
    l = i[t]
  if (l !== hi[t]) {
    const d = l.apply(e, o)
    return c ? de(d) : d
  }
  let h = n
  i !== e &&
    (c
      ? (h = function (d, g) {
          return n.call(this, de(d), g, e)
        })
      : n.length > 2 &&
        (h = function (d, g) {
          return n.call(this, d, g, e)
        }))
  const a = l.call(i, h, s)
  return c && r ? r(a) : a
}
function Is(e, t, n, s) {
  const r = ms(e)
  let o = n
  return (
    r !== e &&
      (Ae(e)
        ? n.length > 3 &&
          (o = function (i, c, l) {
            return n.call(this, i, c, l, e)
          })
        : (o = function (i, c, l) {
            return n.call(this, i, de(c), l, e)
          })),
    r[t](o, ...s)
  )
}
function $n(e, t, n) {
  const s = W(e)
  ce(s, 'iterate', Qt)
  const r = s[t](...n)
  return (r === -1 || r === !1) && ys(n[0]) ? ((n[0] = W(n[0])), s[t](...n)) : r
}
function Lt(e, t, n = []) {
  ct(), ds()
  const s = W(e)[t].apply(e, n)
  return hs(), ut(), s
}
const pi = is('__proto__,__v_isRef,__isVue'),
  kr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Qe),
  )
function gi(e) {
  Qe(e) || (e = String(e))
  const t = W(this)
  return ce(t, 'has', e), t.hasOwnProperty(e)
}
class Br {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    if (n === '__v_skip') return t.__v_skip
    const r = this._isReadonly,
      o = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return o
    if (n === '__v_raw')
      return s === (r ? (o ? Ri : qr) : o ? Wr : Kr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const i = F(t)
    if (!r) {
      let l
      if (i && (l = di[n])) return l
      if (n === 'hasOwnProperty') return gi
    }
    const c = Reflect.get(t, n, ue(t) ? t : s)
    return (Qe(n) ? kr.has(n) : pi(n)) || (r || ce(t, 'get', n), o)
      ? c
      : ue(c)
        ? i && us(n)
          ? c
          : c.value
        : se(c)
          ? r
            ? Yr(c)
            : Sn(c)
          : c
  }
}
class Ur extends Br {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let o = t[n]
    if (!this._isShallow) {
      const l = mt(o)
      if ((!Ae(s) && !mt(s) && ((o = W(o)), (s = W(s))), !F(t) && ue(o) && !ue(s)))
        return l ? !1 : ((o.value = s), !0)
    }
    const i = F(t) && us(n) ? Number(n) < t.length : q(t, n),
      c = Reflect.set(t, n, s, ue(t) ? t : r)
    return t === W(r) && (i ? it(s, o) && qe(t, 'set', n, s) : qe(t, 'add', n, s)), c
  }
  deleteProperty(t, n) {
    const s = q(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && qe(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!Qe(n) || !kr.has(n)) && ce(t, 'has', n), s
  }
  ownKeys(t) {
    return ce(t, 'iterate', F(t) ? 'length' : gt), Reflect.ownKeys(t)
  }
}
class mi extends Br {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const vi = new Ur(),
  _i = new mi(),
  yi = new Ur(!0)
const Gn = (e) => e,
  ln = (e) => Reflect.getPrototypeOf(e)
function bi(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = W(r),
      i = Rt(o),
      c = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      h = r[e](...s),
      a = n ? Gn : t ? Yn : de
    return (
      !t && ce(o, 'iterate', l ? qn : gt),
      {
        next() {
          const { value: d, done: g } = h.next()
          return g ? { value: d, done: g } : { value: c ? [a(d[0]), a(d[1])] : a(d), done: g }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function cn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function wi(e, t) {
  const n = {
    get(r) {
      const o = this.__v_raw,
        i = W(o),
        c = W(r)
      e || (it(r, c) && ce(i, 'get', r), ce(i, 'get', c))
      const { has: l } = ln(i),
        h = t ? Gn : e ? Yn : de
      if (l.call(i, r)) return h(o.get(r))
      if (l.call(i, c)) return h(o.get(c))
      o !== i && o.get(r)
    },
    get size() {
      const r = this.__v_raw
      return !e && ce(W(r), 'iterate', gt), Reflect.get(r, 'size', r)
    },
    has(r) {
      const o = this.__v_raw,
        i = W(o),
        c = W(r)
      return (
        e || (it(r, c) && ce(i, 'has', r), ce(i, 'has', c)),
        r === c ? o.has(r) : o.has(r) || o.has(c)
      )
    },
    forEach(r, o) {
      const i = this,
        c = i.__v_raw,
        l = W(c),
        h = t ? Gn : e ? Yn : de
      return !e && ce(l, 'iterate', gt), c.forEach((a, d) => r.call(o, h(a), h(d), i))
    },
  }
  return (
    fe(
      n,
      e
        ? { add: cn('add'), set: cn('set'), delete: cn('delete'), clear: cn('clear') }
        : {
            add(r) {
              !t && !Ae(r) && !mt(r) && (r = W(r))
              const o = W(this)
              return ln(o).has.call(o, r) || (o.add(r), qe(o, 'add', r, r)), this
            },
            set(r, o) {
              !t && !Ae(o) && !mt(o) && (o = W(o))
              const i = W(this),
                { has: c, get: l } = ln(i)
              let h = c.call(i, r)
              h || ((r = W(r)), (h = c.call(i, r)))
              const a = l.call(i, r)
              return i.set(r, o), h ? it(o, a) && qe(i, 'set', r, o) : qe(i, 'add', r, o), this
            },
            delete(r) {
              const o = W(this),
                { has: i, get: c } = ln(o)
              let l = i.call(o, r)
              l || ((r = W(r)), (l = i.call(o, r))), c && c.call(o, r)
              const h = o.delete(r)
              return l && qe(o, 'delete', r, void 0), h
            },
            clear() {
              const r = W(this),
                o = r.size !== 0,
                i = r.clear()
              return o && qe(r, 'clear', void 0, void 0), i
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = bi(r, e, t)
    }),
    n
  )
}
function vs(e, t) {
  const n = wi(e, t)
  return (s, r, o) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(q(n, r) && r in s ? n : s, r, o)
}
const xi = { get: vs(!1, !1) },
  Ei = { get: vs(!1, !0) },
  Si = { get: vs(!0, !1) }
const Kr = new WeakMap(),
  Wr = new WeakMap(),
  qr = new WeakMap(),
  Ri = new WeakMap()
function Ci(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Pi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ci(Xo(e))
}
function Sn(e) {
  return mt(e) ? e : _s(e, !1, vi, xi, Kr)
}
function Gr(e) {
  return _s(e, !1, yi, Ei, Wr)
}
function Yr(e) {
  return _s(e, !0, _i, Si, qr)
}
function _s(e, t, n, s, r) {
  if (!se(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = r.get(e)
  if (o) return o
  const i = Pi(e)
  if (i === 0) return e
  const c = new Proxy(e, i === 2 ? s : n)
  return r.set(e, c), c
}
function Ut(e) {
  return mt(e) ? Ut(e.__v_raw) : !!(e && e.__v_isReactive)
}
function mt(e) {
  return !!(e && e.__v_isReadonly)
}
function Ae(e) {
  return !!(e && e.__v_isShallow)
}
function ys(e) {
  return e ? !!e.__v_raw : !1
}
function W(e) {
  const t = e && e.__v_raw
  return t ? W(t) : e
}
function Qr(e) {
  return !q(e, '__v_skip') && Object.isExtensible(e) && Ar(e, '__v_skip', !0), e
}
const de = (e) => (se(e) ? Sn(e) : e),
  Yn = (e) => (se(e) ? Yr(e) : e)
function ue(e) {
  return e ? e.__v_isRef === !0 : !1
}
function Jr(e) {
  return Xr(e, !1)
}
function Ai(e) {
  return Xr(e, !0)
}
function Xr(e, t) {
  return ue(e) ? e : new Oi(e, t)
}
class Oi {
  constructor(t, n) {
    ;(this.dep = new gs()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : W(t)),
      (this._value = n ? t : de(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Ae(t) || mt(t)
    ;(t = s ? t : W(t)),
      it(t, n) && ((this._rawValue = t), (this._value = s ? t : de(t)), this.dep.trigger())
  }
}
function Ge(e) {
  return ue(e) ? e.value : e
}
const Ti = {
  get: (e, t, n) => (t === '__v_raw' ? e : Ge(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t]
    return ue(r) && !ue(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function Zr(e) {
  return Ut(e) ? e : new Proxy(e, Ti)
}
class Mi {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new gs(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Yt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ee !== this)) return Lr(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return Dr(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function Ii(e, t, n = !1) {
  let s, r
  return D(e) ? (s = e) : ((s = e.get), (r = e.set)), new Mi(s, r, n)
}
const un = {},
  pn = new WeakMap()
let pt
function zi(e, t = !1, n = pt) {
  if (n) {
    let s = pn.get(n)
    s || pn.set(n, (s = [])), s.push(e)
  }
}
function Hi(e, t, n = te) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: c, call: l } = n,
    h = (T) => (r ? T : Ae(T) || r === !1 || r === 0 ? ot(T, 1) : ot(T))
  let a,
    d,
    g,
    m,
    A = !1,
    O = !1
  if (
    (ue(e)
      ? ((d = () => e.value), (A = Ae(e)))
      : Ut(e)
        ? ((d = () => h(e)), (A = !0))
        : F(e)
          ? ((O = !0),
            (A = e.some((T) => Ut(T) || Ae(T))),
            (d = () =>
              e.map((T) => {
                if (ue(T)) return T.value
                if (Ut(T)) return h(T)
                if (D(T)) return l ? l(T, 2) : T()
              })))
          : D(e)
            ? t
              ? (d = l ? () => l(e, 2) : e)
              : (d = () => {
                  if (g) {
                    ct()
                    try {
                      g()
                    } finally {
                      ut()
                    }
                  }
                  const T = pt
                  pt = a
                  try {
                    return l ? l(e, 3, [m]) : e(m)
                  } finally {
                    pt = T
                  }
                })
            : (d = Ve),
    t && r)
  ) {
    const T = d,
      J = r === !0 ? 1 / 0 : r
    d = () => ot(T(), J)
  }
  const V = ui(),
    H = () => {
      a.stop(), V && V.active && cs(V.effects, a)
    }
  if (o && t) {
    const T = t
    t = (...J) => {
      T(...J), H()
    }
  }
  let I = O ? new Array(e.length).fill(un) : un
  const $ = (T) => {
    if (!(!(a.flags & 1) || (!a.dirty && !T)))
      if (t) {
        const J = a.run()
        if (r || A || (O ? J.some((le, ne) => it(le, I[ne])) : it(J, I))) {
          g && g()
          const le = pt
          pt = a
          try {
            const ne = [J, I === un ? void 0 : O && I[0] === un ? [] : I, m]
            l ? l(t, 3, ne) : t(...ne), (I = J)
          } finally {
            pt = le
          }
        }
      } else a.run()
  }
  return (
    c && c($),
    (a = new Hr(d)),
    (a.scheduler = i ? () => i($, !1) : $),
    (m = (T) => zi(T, !1, a)),
    (g = a.onStop =
      () => {
        const T = pn.get(a)
        if (T) {
          if (l) l(T, 4)
          else for (const J of T) J()
          pn.delete(a)
        }
      }),
    t ? (s ? $(!0) : (I = a.run())) : i ? i($.bind(null, !0), !0) : a.run(),
    (H.pause = a.pause.bind(a)),
    (H.resume = a.resume.bind(a)),
    (H.stop = H),
    H
  )
}
function ot(e, t = 1 / 0, n) {
  if (t <= 0 || !se(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e
  if ((n.add(e), t--, ue(e))) ot(e.value, t, n)
  else if (F(e)) for (let s = 0; s < e.length; s++) ot(e[s], t, n)
  else if (Er(e) || Rt(e))
    e.forEach((s) => {
      ot(s, t, n)
    })
  else if (Cr(e)) {
    for (const s in e) ot(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ot(e[s], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function sn(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    Rn(r, t, n)
  }
}
function Ne(e, t, n, s) {
  if (D(e)) {
    const r = sn(e, t, n, s)
    return (
      r &&
        Sr(r) &&
        r.catch((o) => {
          Rn(o, t, n)
        }),
      r
    )
  }
  if (F(e)) {
    const r = []
    for (let o = 0; o < e.length; o++) r.push(Ne(e[o], t, n, s))
    return r
  }
}
function Rn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } = (t && t.appContext.config) || te
  if (t) {
    let c = t.parent
    const l = t.proxy,
      h = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; c; ) {
      const a = c.ec
      if (a) {
        for (let d = 0; d < a.length; d++) if (a[d](e, l, h) === !1) return
      }
      c = c.parent
    }
    if (o) {
      ct(), sn(o, null, 10, [e, l, h]), ut()
      return
    }
  }
  $i(e, n, r, s, i)
}
function $i(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const he = []
let Fe = -1
const Ct = []
let nt = null,
  xt = 0
const eo = Promise.resolve()
let gn = null
function to(e) {
  const t = gn || eo
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Li(e) {
  let t = Fe + 1,
    n = he.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = he[s],
      o = Jt(r)
    o < e || (o === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function bs(e) {
  if (!(e.flags & 1)) {
    const t = Jt(e),
      n = he[he.length - 1]
    !n || (!(e.flags & 2) && t >= Jt(n)) ? he.push(e) : he.splice(Li(t), 0, e), (e.flags |= 1), no()
  }
}
function no() {
  gn || (gn = eo.then(ro))
}
function ji(e) {
  F(e)
    ? Ct.push(...e)
    : nt && e.id === -1
      ? nt.splice(xt + 1, 0, e)
      : e.flags & 1 || (Ct.push(e), (e.flags |= 1)),
    no()
}
function zs(e, t, n = Fe + 1) {
  for (; n < he.length; n++) {
    const s = he[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      he.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2)
    }
  }
}
function so(e) {
  if (Ct.length) {
    const t = [...new Set(Ct)].sort((n, s) => Jt(n) - Jt(s))
    if (((Ct.length = 0), nt)) {
      nt.push(...t)
      return
    }
    for (nt = t, xt = 0; xt < nt.length; xt++) {
      const n = nt[xt]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(nt = null), (xt = 0)
  }
}
const Jt = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function ro(e) {
  try {
    for (Fe = 0; Fe < he.length; Fe++) {
      const t = he[Fe]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), sn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Fe < he.length; Fe++) {
      const t = he[Fe]
      t && (t.flags &= -2)
    }
    ;(Fe = -1), (he.length = 0), so(), (gn = null), (he.length || Ct.length) && ro()
  }
}
let _e = null,
  oo = null
function mn(e) {
  const t = _e
  return (_e = e), (oo = (e && e.type.__scopeId) || null), t
}
function ie(e, t = _e, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && ks(-1)
    const o = mn(t)
    let i
    try {
      i = e(...r)
    } finally {
      mn(o), s._d && ks(1)
    }
    return i
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function dt(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs
  for (let i = 0; i < r.length; i++) {
    const c = r[i]
    o && (c.oldValue = o[i].value)
    let l = c.dir[s]
    l && (ct(), Ne(l, n, 8, [e.el, c, e, t]), ut())
  }
}
const Fi = Symbol('_vte'),
  Di = (e) => e.__isTeleport
function ws(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), ws(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
/*! #__NO_SIDE_EFFECTS__ */ function zt(e, t) {
  return D(e) ? fe({ name: e.name }, t, { setup: e }) : e
}
function io(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function vn(e, t, n, s, r = !1) {
  if (F(e)) {
    e.forEach((A, O) => vn(A, t && (F(t) ? t[O] : t), n, s, r))
    return
  }
  if (Pt(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      vn(e, t, n, s.component.subTree)
    return
  }
  const o = s.shapeFlag & 4 ? Ss(s.component) : s.el,
    i = r ? null : o,
    { i: c, r: l } = e,
    h = t && t.r,
    a = c.refs === te ? (c.refs = {}) : c.refs,
    d = c.setupState,
    g = W(d),
    m = d === te ? () => !1 : (A) => q(g, A)
  if (
    (h != null &&
      h !== l &&
      (re(h) ? ((a[h] = null), m(h) && (d[h] = null)) : ue(h) && (h.value = null)),
    D(l))
  )
    sn(l, c, 12, [i, a])
  else {
    const A = re(l),
      O = ue(l)
    if (A || O) {
      const V = () => {
        if (e.f) {
          const H = A ? (m(l) ? d[l] : a[l]) : l.value
          r
            ? F(H) && cs(H, o)
            : F(H)
              ? H.includes(o) || H.push(o)
              : A
                ? ((a[l] = [o]), m(l) && (d[l] = a[l]))
                : ((l.value = [o]), e.k && (a[e.k] = l.value))
        } else A ? ((a[l] = i), m(l) && (d[l] = i)) : O && ((l.value = i), e.k && (a[e.k] = i))
      }
      i ? ((V.id = -1), we(V, n)) : V()
    }
  }
}
En().requestIdleCallback
En().cancelIdleCallback
const Pt = (e) => !!e.type.__asyncLoader,
  lo = (e) => e.type.__isKeepAlive
function Vi(e, t) {
  co(e, 'a', t)
}
function Ni(e, t) {
  co(e, 'da', t)
}
function co(e, t, n = pe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Cn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) lo(r.parent.vnode) && ki(s, t, n, r), (r = r.parent)
  }
}
function ki(e, t, n, s) {
  const r = Cn(t, e, s, !0)
  uo(() => {
    cs(s[t], r)
  }, n)
}
function Cn(e, t, n = pe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          ct()
          const c = rn(n),
            l = Ne(t, n, e, i)
          return c(), ut(), l
        })
    return s ? r.unshift(o) : r.push(o), o
  }
}
const Je =
    (e) =>
    (t, n = pe) => {
      ;(!en || e === 'sp') && Cn(e, (...s) => t(...s), n)
    },
  Bi = Je('bm'),
  Ui = Je('m'),
  Ki = Je('bu'),
  Wi = Je('u'),
  qi = Je('bum'),
  uo = Je('um'),
  Gi = Je('sp'),
  Yi = Je('rtg'),
  Qi = Je('rtc')
function Ji(e, t = pe) {
  Cn('ec', e, t)
}
const Xi = Symbol.for('v-ndc')
function Ln(e, t, n = {}, s, r) {
  if (_e.ce || (_e.parent && Pt(_e.parent) && _e.parent.ce))
    return t !== 'default' && (n.name = t), Re(), Bs(ve, null, [Q('slot', n, s)], 64)
  let o = e[t]
  o && o._c && (o._d = !1), Re()
  const i = o && fo(o(n)),
    c = n.key || (i && i.key),
    l = Bs(ve, { key: (c && !Qe(c) ? c : `_${t}`) + '' }, i || [], i && e._ === 1 ? 64 : -2)
  return o && o._c && (o._d = !0), l
}
function fo(e) {
  return e.some((t) => (Zt(t) ? !(t.type === Ot || (t.type === ve && !fo(t.children))) : !0))
    ? e
    : null
}
const Qn = (e) => (e ? (Io(e) ? Ss(e) : Qn(e.parent)) : null),
  Kt = fe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Qn(e.parent),
    $root: (e) => Qn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ho(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        bs(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = to.bind(e.proxy)),
    $watch: (e) => yl.bind(e),
  }),
  jn = (e, t) => e !== te && !e.__isScriptSetup && q(e, t),
  Zi = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: c, appContext: l } = e
      let h
      if (t[0] !== '$') {
        const m = i[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (jn(s, t)) return (i[t] = 1), s[t]
          if (r !== te && q(r, t)) return (i[t] = 2), r[t]
          if ((h = e.propsOptions[0]) && q(h, t)) return (i[t] = 3), o[t]
          if (n !== te && q(n, t)) return (i[t] = 4), n[t]
          Jn && (i[t] = 0)
        }
      }
      const a = Kt[t]
      let d, g
      if (a) return t === '$attrs' && ce(e.attrs, 'get', ''), a(e)
      if ((d = c.__cssModules) && (d = d[t])) return d
      if (n !== te && q(n, t)) return (i[t] = 4), n[t]
      if (((g = l.config.globalProperties), q(g, t))) return g[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e
      return jn(r, t)
        ? ((r[t] = n), !0)
        : s !== te && q(s, t)
          ? ((s[t] = n), !0)
          : q(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } },
      i,
    ) {
      let c
      return (
        !!n[i] ||
        (e !== te && q(e, i)) ||
        jn(t, i) ||
        ((c = o[0]) && q(c, i)) ||
        q(s, i) ||
        q(Kt, i) ||
        q(r.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : q(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function Hs(e) {
  return F(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Jn = !0
function el(e) {
  const t = ho(e),
    n = e.proxy,
    s = e.ctx
  ;(Jn = !1), t.beforeCreate && $s(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: o,
    methods: i,
    watch: c,
    provide: l,
    inject: h,
    created: a,
    beforeMount: d,
    mounted: g,
    beforeUpdate: m,
    updated: A,
    activated: O,
    deactivated: V,
    beforeDestroy: H,
    beforeUnmount: I,
    destroyed: $,
    unmounted: T,
    render: J,
    renderTracked: le,
    renderTriggered: ne,
    errorCaptured: Te,
    serverPrefetch: Xe,
    expose: Me,
    inheritAttrs: Ze,
    components: at,
    directives: Ie,
    filters: Ht,
  } = t
  if ((h && tl(h, s, null), i))
    for (const Y in i) {
      const U = i[Y]
      D(U) && (s[Y] = U.bind(n))
    }
  if (r) {
    const Y = r.call(n, n)
    se(Y) && (e.data = Sn(Y))
  }
  if (((Jn = !0), o))
    for (const Y in o) {
      const U = o[Y],
        Be = D(U) ? U.bind(n, n) : D(U.get) ? U.get.bind(n, n) : Ve,
        et = !D(U) && D(U.set) ? U.set.bind(n) : Ve,
        ze = Ce({ get: Be, set: et })
      Object.defineProperty(s, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => ze.value,
        set: (ge) => (ze.value = ge),
      })
    }
  if (c) for (const Y in c) ao(c[Y], s, n, Y)
  if (l) {
    const Y = D(l) ? l.call(n) : l
    Reflect.ownKeys(Y).forEach((U) => {
      fn(U, Y[U])
    })
  }
  a && $s(a, e, 'c')
  function oe(Y, U) {
    F(U) ? U.forEach((Be) => Y(Be.bind(n))) : U && Y(U.bind(n))
  }
  if (
    (oe(Bi, d),
    oe(Ui, g),
    oe(Ki, m),
    oe(Wi, A),
    oe(Vi, O),
    oe(Ni, V),
    oe(Ji, Te),
    oe(Qi, le),
    oe(Yi, ne),
    oe(qi, I),
    oe(uo, T),
    oe(Gi, Xe),
    F(Me))
  )
    if (Me.length) {
      const Y = e.exposed || (e.exposed = {})
      Me.forEach((U) => {
        Object.defineProperty(Y, U, { get: () => n[U], set: (Be) => (n[U] = Be) })
      })
    } else e.exposed || (e.exposed = {})
  J && e.render === Ve && (e.render = J),
    Ze != null && (e.inheritAttrs = Ze),
    at && (e.components = at),
    Ie && (e.directives = Ie),
    Xe && io(e)
}
function tl(e, t, n = Ve) {
  F(e) && (e = Xn(e))
  for (const s in e) {
    const r = e[s]
    let o
    se(r)
      ? 'default' in r
        ? (o = Ye(r.from || s, r.default, !0))
        : (o = Ye(r.from || s))
      : (o = Ye(r)),
      ue(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[s] = o)
  }
}
function $s(e, t, n) {
  Ne(F(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function ao(e, t, n, s) {
  let r = s.includes('.') ? Po(n, s) : () => n[s]
  if (re(e)) {
    const o = t[e]
    D(o) && an(r, o)
  } else if (D(e)) an(r, e.bind(n))
  else if (se(e))
    if (F(e)) e.forEach((o) => ao(o, t, n, s))
    else {
      const o = D(e.handler) ? e.handler.bind(n) : t[e.handler]
      D(o) && an(r, o, e)
    }
}
function ho(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    c = o.get(t)
  let l
  return (
    c
      ? (l = c)
      : !r.length && !n && !s
        ? (l = t)
        : ((l = {}), r.length && r.forEach((h) => _n(l, h, i, !0)), _n(l, t, i)),
    se(t) && o.set(t, l),
    l
  )
}
function _n(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t
  o && _n(e, o, n, !0), r && r.forEach((i) => _n(e, i, n, !0))
  for (const i in t)
    if (!(s && i === 'expose')) {
      const c = nl[i] || (n && n[i])
      e[i] = c ? c(e[i], t[i]) : t[i]
    }
  return e
}
const nl = {
  data: Ls,
  props: js,
  emits: js,
  methods: Vt,
  computed: Vt,
  beforeCreate: ae,
  created: ae,
  beforeMount: ae,
  mounted: ae,
  beforeUpdate: ae,
  updated: ae,
  beforeDestroy: ae,
  beforeUnmount: ae,
  destroyed: ae,
  unmounted: ae,
  activated: ae,
  deactivated: ae,
  errorCaptured: ae,
  serverPrefetch: ae,
  components: Vt,
  directives: Vt,
  watch: rl,
  provide: Ls,
  inject: sl,
}
function Ls(e, t) {
  return t
    ? e
      ? function () {
          return fe(D(e) ? e.call(this, this) : e, D(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function sl(e, t) {
  return Vt(Xn(e), Xn(t))
}
function Xn(e) {
  if (F(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Vt(e, t) {
  return e ? fe(Object.create(null), e, t) : t
}
function js(e, t) {
  return e
    ? F(e) && F(t)
      ? [...new Set([...e, ...t])]
      : fe(Object.create(null), Hs(e), Hs(t ?? {}))
    : t
}
function rl(e, t) {
  if (!e) return t
  if (!t) return e
  const n = fe(Object.create(null), e)
  for (const s in t) n[s] = ae(e[s], t[s])
  return n
}
function po() {
  return {
    app: null,
    config: {
      isNativeTag: Qo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let ol = 0
function il(e, t) {
  return function (s, r = null) {
    D(s) || (s = fe({}, s)), r != null && !se(r) && (r = null)
    const o = po(),
      i = new WeakSet(),
      c = []
    let l = !1
    const h = (o.app = {
      _uid: ol++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Dl,
      get config() {
        return o.config
      },
      set config(a) {},
      use(a, ...d) {
        return (
          i.has(a) ||
            (a && D(a.install) ? (i.add(a), a.install(h, ...d)) : D(a) && (i.add(a), a(h, ...d))),
          h
        )
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), h
      },
      component(a, d) {
        return d ? ((o.components[a] = d), h) : o.components[a]
      },
      directive(a, d) {
        return d ? ((o.directives[a] = d), h) : o.directives[a]
      },
      mount(a, d, g) {
        if (!l) {
          const m = h._ceVNode || Q(s, r)
          return (
            (m.appContext = o),
            g === !0 ? (g = 'svg') : g === !1 && (g = void 0),
            e(m, a, g),
            (l = !0),
            (h._container = a),
            (a.__vue_app__ = h),
            Ss(m.component)
          )
        }
      },
      onUnmount(a) {
        c.push(a)
      },
      unmount() {
        l && (Ne(c, h._instance, 16), e(null, h._container), delete h._container.__vue_app__)
      },
      provide(a, d) {
        return (o.provides[a] = d), h
      },
      runWithContext(a) {
        const d = At
        At = h
        try {
          return a()
        } finally {
          At = d
        }
      },
    })
    return h
  }
}
let At = null
function fn(e, t) {
  if (pe) {
    let n = pe.provides
    const s = pe.parent && pe.parent.provides
    s === n && (n = pe.provides = Object.create(s)), (n[e] = t)
  }
}
function Ye(e, t, n = !1) {
  const s = pe || _e
  if (s || At) {
    const r = At
      ? At._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && D(t) ? t.call(s && s.proxy) : t
  }
}
const go = {},
  mo = () => Object.create(go),
  vo = (e) => Object.getPrototypeOf(e) === go
function ll(e, t, n, s = !1) {
  const r = {},
    o = mo()
  ;(e.propsDefaults = Object.create(null)), _o(e, t, r, o)
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0)
  n ? (e.props = s ? r : Gr(r)) : e.type.props ? (e.props = r) : (e.props = o), (e.attrs = o)
}
function cl(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    c = W(r),
    [l] = e.propsOptions
  let h = !1
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const a = e.vnode.dynamicProps
      for (let d = 0; d < a.length; d++) {
        let g = a[d]
        if (Pn(e.emitsOptions, g)) continue
        const m = t[g]
        if (l)
          if (q(o, g)) m !== o[g] && ((o[g] = m), (h = !0))
          else {
            const A = lt(g)
            r[A] = Zn(l, c, A, m, e, !1)
          }
        else m !== o[g] && ((o[g] = m), (h = !0))
      }
    }
  } else {
    _o(e, t, r, o) && (h = !0)
    let a
    for (const d in c)
      (!t || (!q(t, d) && ((a = vt(d)) === d || !q(t, a)))) &&
        (l
          ? n && (n[d] !== void 0 || n[a] !== void 0) && (r[d] = Zn(l, c, d, void 0, e, !0))
          : delete r[d])
    if (o !== c) for (const d in o) (!t || !q(t, d)) && (delete o[d], (h = !0))
  }
  h && qe(e.attrs, 'set', '')
}
function _o(e, t, n, s) {
  const [r, o] = e.propsOptions
  let i = !1,
    c
  if (t)
    for (let l in t) {
      if (Nt(l)) continue
      const h = t[l]
      let a
      r && q(r, (a = lt(l)))
        ? !o || !o.includes(a)
          ? (n[a] = h)
          : ((c || (c = {}))[a] = h)
        : Pn(e.emitsOptions, l) || ((!(l in s) || h !== s[l]) && ((s[l] = h), (i = !0)))
    }
  if (o) {
    const l = W(n),
      h = c || te
    for (let a = 0; a < o.length; a++) {
      const d = o[a]
      n[d] = Zn(r, l, d, h[d], e, !q(h, d))
    }
  }
  return i
}
function Zn(e, t, n, s, r, o) {
  const i = e[n]
  if (i != null) {
    const c = q(i, 'default')
    if (c && s === void 0) {
      const l = i.default
      if (i.type !== Function && !i.skipFactory && D(l)) {
        const { propsDefaults: h } = r
        if (n in h) s = h[n]
        else {
          const a = rn(r)
          ;(s = h[n] = l.call(null, t)), a()
        }
      } else s = l
      r.ce && r.ce._setProp(n, s)
    }
    i[0] && (o && !c ? (s = !1) : i[1] && (s === '' || s === vt(n)) && (s = !0))
  }
  return s
}
const ul = new WeakMap()
function yo(e, t, n = !1) {
  const s = n ? ul : t.propsCache,
    r = s.get(e)
  if (r) return r
  const o = e.props,
    i = {},
    c = []
  let l = !1
  if (!D(e)) {
    const a = (d) => {
      l = !0
      const [g, m] = yo(d, t, !0)
      fe(i, g), m && c.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  if (!o && !l) return se(e) && s.set(e, St), St
  if (F(o))
    for (let a = 0; a < o.length; a++) {
      const d = lt(o[a])
      Fs(d) && (i[d] = te)
    }
  else if (o)
    for (const a in o) {
      const d = lt(a)
      if (Fs(d)) {
        const g = o[a],
          m = (i[d] = F(g) || D(g) ? { type: g } : fe({}, g)),
          A = m.type
        let O = !1,
          V = !0
        if (F(A))
          for (let H = 0; H < A.length; ++H) {
            const I = A[H],
              $ = D(I) && I.name
            if ($ === 'Boolean') {
              O = !0
              break
            } else $ === 'String' && (V = !1)
          }
        else O = D(A) && A.name === 'Boolean'
        ;(m[0] = O), (m[1] = V), (O || q(m, 'default')) && c.push(d)
      }
    }
  const h = [i, c]
  return se(e) && s.set(e, h), h
}
function Fs(e) {
  return e[0] !== '$' && !Nt(e)
}
const bo = (e) => e[0] === '_' || e === '$stable',
  xs = (e) => (F(e) ? e.map(De) : [De(e)]),
  fl = (e, t, n) => {
    if (t._n) return t
    const s = ie((...r) => xs(t(...r)), n)
    return (s._c = !1), s
  },
  wo = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (bo(r)) continue
      const o = e[r]
      if (D(o)) t[r] = fl(r, o, s)
      else if (o != null) {
        const i = xs(o)
        t[r] = () => i
      }
    }
  },
  xo = (e, t) => {
    const n = xs(t)
    e.slots.default = () => n
  },
  Eo = (e, t, n) => {
    for (const s in t) (n || s !== '_') && (e[s] = t[s])
  },
  al = (e, t, n) => {
    const s = (e.slots = mo())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (Eo(s, t, n), n && Ar(s, '_', r, !0)) : wo(t, s)
    } else t && xo(e, t)
  },
  dl = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let o = !0,
      i = te
    if (s.shapeFlag & 32) {
      const c = t._
      c ? (n && c === 1 ? (o = !1) : Eo(r, t, n)) : ((o = !t.$stable), wo(t, r)), (i = t)
    } else t && (xo(e, t), (i = { default: 1 }))
    if (o) for (const c in r) !bo(c) && i[c] == null && delete r[c]
  },
  we = Cl
function hl(e) {
  return pl(e)
}
function pl(e, t) {
  const n = En()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: c,
      createComment: l,
      setText: h,
      setElementText: a,
      parentNode: d,
      nextSibling: g,
      setScopeId: m = Ve,
      insertStaticContent: A,
    } = e,
    O = (u, f, p, v = null, b = null, y = null, S = void 0, E = null, x = !!f.dynamicChildren) => {
      if (u === f) return
      u && !jt(u, f) && ((v = _(u)), ge(u, b, y, !0), (u = null)),
        f.patchFlag === -2 && ((x = !1), (f.dynamicChildren = null))
      const { type: w, ref: L, shapeFlag: C } = f
      switch (w) {
        case An:
          V(u, f, p, v)
          break
        case Ot:
          H(u, f, p, v)
          break
        case Dn:
          u == null && I(f, p, v, S)
          break
        case ve:
          at(u, f, p, v, b, y, S, E, x)
          break
        default:
          C & 1
            ? J(u, f, p, v, b, y, S, E, x)
            : C & 6
              ? Ie(u, f, p, v, b, y, S, E, x)
              : (C & 64 || C & 128) && w.process(u, f, p, v, b, y, S, E, x, M)
      }
      L != null && b && vn(L, u && u.ref, y, f || u, !f)
    },
    V = (u, f, p, v) => {
      if (u == null) s((f.el = c(f.children)), p, v)
      else {
        const b = (f.el = u.el)
        f.children !== u.children && h(b, f.children)
      }
    },
    H = (u, f, p, v) => {
      u == null ? s((f.el = l(f.children || '')), p, v) : (f.el = u.el)
    },
    I = (u, f, p, v) => {
      ;[u.el, u.anchor] = A(u.children, f, p, v, u.el, u.anchor)
    },
    $ = ({ el: u, anchor: f }, p, v) => {
      let b
      for (; u && u !== f; ) (b = g(u)), s(u, p, v), (u = b)
      s(f, p, v)
    },
    T = ({ el: u, anchor: f }) => {
      let p
      for (; u && u !== f; ) (p = g(u)), r(u), (u = p)
      r(f)
    },
    J = (u, f, p, v, b, y, S, E, x) => {
      f.type === 'svg' ? (S = 'svg') : f.type === 'math' && (S = 'mathml'),
        u == null ? le(f, p, v, b, y, S, E, x) : Xe(u, f, b, y, S, E, x)
    },
    le = (u, f, p, v, b, y, S, E) => {
      let x, w
      const { props: L, shapeFlag: C, transition: z, dirs: j } = u
      if (
        ((x = u.el = i(u.type, y, L && L.is, L)),
        C & 8 ? a(x, u.children) : C & 16 && Te(u.children, x, null, v, b, Fn(u, y), S, E),
        j && dt(u, null, v, 'created'),
        ne(x, u, u.scopeId, S, v),
        L)
      ) {
        for (const Z in L) Z !== 'value' && !Nt(Z) && o(x, Z, null, L[Z], y, v)
        'value' in L && o(x, 'value', null, L.value, y), (w = L.onVnodeBeforeMount) && je(w, v, u)
      }
      j && dt(u, null, v, 'beforeMount')
      const B = gl(b, z)
      B && z.beforeEnter(x),
        s(x, f, p),
        ((w = L && L.onVnodeMounted) || B || j) &&
          we(() => {
            w && je(w, v, u), B && z.enter(x), j && dt(u, null, v, 'mounted')
          }, b)
    },
    ne = (u, f, p, v, b) => {
      if ((p && m(u, p), v)) for (let y = 0; y < v.length; y++) m(u, v[y])
      if (b) {
        let y = b.subTree
        if (f === y || (Oo(y.type) && (y.ssContent === f || y.ssFallback === f))) {
          const S = b.vnode
          ne(u, S, S.scopeId, S.slotScopeIds, b.parent)
        }
      }
    },
    Te = (u, f, p, v, b, y, S, E, x = 0) => {
      for (let w = x; w < u.length; w++) {
        const L = (u[w] = E ? st(u[w]) : De(u[w]))
        O(null, L, f, p, v, b, y, S, E)
      }
    },
    Xe = (u, f, p, v, b, y, S) => {
      const E = (f.el = u.el)
      let { patchFlag: x, dynamicChildren: w, dirs: L } = f
      x |= u.patchFlag & 16
      const C = u.props || te,
        z = f.props || te
      let j
      if (
        (p && ht(p, !1),
        (j = z.onVnodeBeforeUpdate) && je(j, p, f, u),
        L && dt(f, u, p, 'beforeUpdate'),
        p && ht(p, !0),
        ((C.innerHTML && z.innerHTML == null) || (C.textContent && z.textContent == null)) &&
          a(E, ''),
        w
          ? Me(u.dynamicChildren, w, E, p, v, Fn(f, b), y)
          : S || U(u, f, E, null, p, v, Fn(f, b), y, !1),
        x > 0)
      ) {
        if (x & 16) Ze(E, C, z, p, b)
        else if (
          (x & 2 && C.class !== z.class && o(E, 'class', null, z.class, b),
          x & 4 && o(E, 'style', C.style, z.style, b),
          x & 8)
        ) {
          const B = f.dynamicProps
          for (let Z = 0; Z < B.length; Z++) {
            const G = B[Z],
              ye = C[G],
              me = z[G]
            ;(me !== ye || G === 'value') && o(E, G, ye, me, b, p)
          }
        }
        x & 1 && u.children !== f.children && a(E, f.children)
      } else !S && w == null && Ze(E, C, z, p, b)
      ;((j = z.onVnodeUpdated) || L) &&
        we(() => {
          j && je(j, p, f, u), L && dt(f, u, p, 'updated')
        }, v)
    },
    Me = (u, f, p, v, b, y, S) => {
      for (let E = 0; E < f.length; E++) {
        const x = u[E],
          w = f[E],
          L = x.el && (x.type === ve || !jt(x, w) || x.shapeFlag & 70) ? d(x.el) : p
        O(x, w, L, null, v, b, y, S, !0)
      }
    },
    Ze = (u, f, p, v, b) => {
      if (f !== p) {
        if (f !== te) for (const y in f) !Nt(y) && !(y in p) && o(u, y, f[y], null, b, v)
        for (const y in p) {
          if (Nt(y)) continue
          const S = p[y],
            E = f[y]
          S !== E && y !== 'value' && o(u, y, E, S, b, v)
        }
        'value' in p && o(u, 'value', f.value, p.value, b)
      }
    },
    at = (u, f, p, v, b, y, S, E, x) => {
      const w = (f.el = u ? u.el : c('')),
        L = (f.anchor = u ? u.anchor : c(''))
      let { patchFlag: C, dynamicChildren: z, slotScopeIds: j } = f
      j && (E = E ? E.concat(j) : j),
        u == null
          ? (s(w, p, v), s(L, p, v), Te(f.children || [], p, L, b, y, S, E, x))
          : C > 0 && C & 64 && z && u.dynamicChildren
            ? (Me(u.dynamicChildren, z, p, b, y, S, E),
              (f.key != null || (b && f === b.subTree)) && So(u, f, !0))
            : U(u, f, p, L, b, y, S, E, x)
    },
    Ie = (u, f, p, v, b, y, S, E, x) => {
      ;(f.slotScopeIds = E),
        u == null
          ? f.shapeFlag & 512
            ? b.ctx.activate(f, p, v, S, x)
            : Ht(f, p, v, b, y, S, x)
          : _t(u, f, x)
    },
    Ht = (u, f, p, v, b, y, S) => {
      const E = (u.component = zl(u, v, b))
      if ((lo(u) && (E.ctx.renderer = M), Hl(E, !1, S), E.asyncDep)) {
        if ((b && b.registerDep(E, oe, S), !u.el)) {
          const x = (E.subTree = Q(Ot))
          H(null, x, f, p)
        }
      } else oe(E, u, f, p, b, y, S)
    },
    _t = (u, f, p) => {
      const v = (f.component = u.component)
      if (Sl(u, f, p))
        if (v.asyncDep && !v.asyncResolved) {
          Y(v, f, p)
          return
        } else (v.next = f), v.update()
      else (f.el = u.el), (v.vnode = f)
    },
    oe = (u, f, p, v, b, y, S) => {
      const E = () => {
        if (u.isMounted) {
          let { next: C, bu: z, u: j, parent: B, vnode: Z } = u
          {
            const $e = Ro(u)
            if ($e) {
              C && ((C.el = Z.el), Y(u, C, S)),
                $e.asyncDep.then(() => {
                  u.isUnmounted || E()
                })
              return
            }
          }
          let G = C,
            ye
          ht(u, !1),
            C ? ((C.el = Z.el), Y(u, C, S)) : (C = Z),
            z && Mn(z),
            (ye = C.props && C.props.onVnodeBeforeUpdate) && je(ye, B, C, Z),
            ht(u, !0)
          const me = Vs(u),
            He = u.subTree
          ;(u.subTree = me),
            O(He, me, d(He.el), _(He), u, b, y),
            (C.el = me.el),
            G === null && Rl(u, me.el),
            j && we(j, b),
            (ye = C.props && C.props.onVnodeUpdated) && we(() => je(ye, B, C, Z), b)
        } else {
          let C
          const { el: z, props: j } = f,
            { bm: B, m: Z, parent: G, root: ye, type: me } = u,
            He = Pt(f)
          ht(u, !1), B && Mn(B), !He && (C = j && j.onVnodeBeforeMount) && je(C, G, f), ht(u, !0)
          {
            ye.ce && ye.ce._injectChildStyle(me)
            const $e = (u.subTree = Vs(u))
            O(null, $e, p, v, u, b, y), (f.el = $e.el)
          }
          if ((Z && we(Z, b), !He && (C = j && j.onVnodeMounted))) {
            const $e = f
            we(() => je(C, G, $e), b)
          }
          ;(f.shapeFlag & 256 || (G && Pt(G.vnode) && G.vnode.shapeFlag & 256)) &&
            u.a &&
            we(u.a, b),
            (u.isMounted = !0),
            (f = p = v = null)
        }
      }
      u.scope.on()
      const x = (u.effect = new Hr(E))
      u.scope.off()
      const w = (u.update = x.run.bind(x)),
        L = (u.job = x.runIfDirty.bind(x))
      ;(L.i = u), (L.id = u.uid), (x.scheduler = () => bs(L)), ht(u, !0), w()
    },
    Y = (u, f, p) => {
      f.component = u
      const v = u.vnode.props
      ;(u.vnode = f), (u.next = null), cl(u, f.props, v, p), dl(u, f.children, p), ct(), zs(u), ut()
    },
    U = (u, f, p, v, b, y, S, E, x = !1) => {
      const w = u && u.children,
        L = u ? u.shapeFlag : 0,
        C = f.children,
        { patchFlag: z, shapeFlag: j } = f
      if (z > 0) {
        if (z & 128) {
          et(w, C, p, v, b, y, S, E, x)
          return
        } else if (z & 256) {
          Be(w, C, p, v, b, y, S, E, x)
          return
        }
      }
      j & 8
        ? (L & 16 && Se(w, b, y), C !== w && a(p, C))
        : L & 16
          ? j & 16
            ? et(w, C, p, v, b, y, S, E, x)
            : Se(w, b, y, !0)
          : (L & 8 && a(p, ''), j & 16 && Te(C, p, v, b, y, S, E, x))
    },
    Be = (u, f, p, v, b, y, S, E, x) => {
      ;(u = u || St), (f = f || St)
      const w = u.length,
        L = f.length,
        C = Math.min(w, L)
      let z
      for (z = 0; z < C; z++) {
        const j = (f[z] = x ? st(f[z]) : De(f[z]))
        O(u[z], j, p, null, b, y, S, E, x)
      }
      w > L ? Se(u, b, y, !0, !1, C) : Te(f, p, v, b, y, S, E, x, C)
    },
    et = (u, f, p, v, b, y, S, E, x) => {
      let w = 0
      const L = f.length
      let C = u.length - 1,
        z = L - 1
      for (; w <= C && w <= z; ) {
        const j = u[w],
          B = (f[w] = x ? st(f[w]) : De(f[w]))
        if (jt(j, B)) O(j, B, p, null, b, y, S, E, x)
        else break
        w++
      }
      for (; w <= C && w <= z; ) {
        const j = u[C],
          B = (f[z] = x ? st(f[z]) : De(f[z]))
        if (jt(j, B)) O(j, B, p, null, b, y, S, E, x)
        else break
        C--, z--
      }
      if (w > C) {
        if (w <= z) {
          const j = z + 1,
            B = j < L ? f[j].el : v
          for (; w <= z; ) O(null, (f[w] = x ? st(f[w]) : De(f[w])), p, B, b, y, S, E, x), w++
        }
      } else if (w > z) for (; w <= C; ) ge(u[w], b, y, !0), w++
      else {
        const j = w,
          B = w,
          Z = new Map()
        for (w = B; w <= z; w++) {
          const be = (f[w] = x ? st(f[w]) : De(f[w]))
          be.key != null && Z.set(be.key, w)
        }
        let G,
          ye = 0
        const me = z - B + 1
        let He = !1,
          $e = 0
        const $t = new Array(me)
        for (w = 0; w < me; w++) $t[w] = 0
        for (w = j; w <= C; w++) {
          const be = u[w]
          if (ye >= me) {
            ge(be, b, y, !0)
            continue
          }
          let Le
          if (be.key != null) Le = Z.get(be.key)
          else
            for (G = B; G <= z; G++)
              if ($t[G - B] === 0 && jt(be, f[G])) {
                Le = G
                break
              }
          Le === void 0
            ? ge(be, b, y, !0)
            : (($t[Le - B] = w + 1),
              Le >= $e ? ($e = Le) : (He = !0),
              O(be, f[Le], p, null, b, y, S, E, x),
              ye++)
        }
        const As = He ? ml($t) : St
        for (G = As.length - 1, w = me - 1; w >= 0; w--) {
          const be = B + w,
            Le = f[be],
            Os = be + 1 < L ? f[be + 1].el : v
          $t[w] === 0
            ? O(null, Le, p, Os, b, y, S, E, x)
            : He && (G < 0 || w !== As[G] ? ze(Le, p, Os, 2) : G--)
        }
      }
    },
    ze = (u, f, p, v, b = null) => {
      const { el: y, type: S, transition: E, children: x, shapeFlag: w } = u
      if (w & 6) {
        ze(u.component.subTree, f, p, v)
        return
      }
      if (w & 128) {
        u.suspense.move(f, p, v)
        return
      }
      if (w & 64) {
        S.move(u, f, p, M)
        return
      }
      if (S === ve) {
        s(y, f, p)
        for (let C = 0; C < x.length; C++) ze(x[C], f, p, v)
        s(u.anchor, f, p)
        return
      }
      if (S === Dn) {
        $(u, f, p)
        return
      }
      if (v !== 2 && w & 1 && E)
        if (v === 0) E.beforeEnter(y), s(y, f, p), we(() => E.enter(y), b)
        else {
          const { leave: C, delayLeave: z, afterLeave: j } = E,
            B = () => s(y, f, p),
            Z = () => {
              C(y, () => {
                B(), j && j()
              })
            }
          z ? z(y, B, Z) : Z()
        }
      else s(y, f, p)
    },
    ge = (u, f, p, v = !1, b = !1) => {
      const {
        type: y,
        props: S,
        ref: E,
        children: x,
        dynamicChildren: w,
        shapeFlag: L,
        patchFlag: C,
        dirs: z,
        cacheIndex: j,
      } = u
      if (
        (C === -2 && (b = !1),
        E != null && vn(E, null, p, u, !0),
        j != null && (f.renderCache[j] = void 0),
        L & 256)
      ) {
        f.ctx.deactivate(u)
        return
      }
      const B = L & 1 && z,
        Z = !Pt(u)
      let G
      if ((Z && (G = S && S.onVnodeBeforeUnmount) && je(G, f, u), L & 6)) on(u.component, p, v)
      else {
        if (L & 128) {
          u.suspense.unmount(p, v)
          return
        }
        B && dt(u, null, f, 'beforeUnmount'),
          L & 64
            ? u.type.remove(u, f, p, M, v)
            : w && !w.hasOnce && (y !== ve || (C > 0 && C & 64))
              ? Se(w, f, p, !1, !0)
              : ((y === ve && C & 384) || (!b && L & 16)) && Se(x, f, p),
          v && yt(u)
      }
      ;((Z && (G = S && S.onVnodeUnmounted)) || B) &&
        we(() => {
          G && je(G, f, u), B && dt(u, null, f, 'unmounted')
        }, p)
    },
    yt = (u) => {
      const { type: f, el: p, anchor: v, transition: b } = u
      if (f === ve) {
        bt(p, v)
        return
      }
      if (f === Dn) {
        T(u)
        return
      }
      const y = () => {
        r(p), b && !b.persisted && b.afterLeave && b.afterLeave()
      }
      if (u.shapeFlag & 1 && b && !b.persisted) {
        const { leave: S, delayLeave: E } = b,
          x = () => S(p, y)
        E ? E(u.el, y, x) : x()
      } else y()
    },
    bt = (u, f) => {
      let p
      for (; u !== f; ) (p = g(u)), r(u), (u = p)
      r(f)
    },
    on = (u, f, p) => {
      const { bum: v, scope: b, job: y, subTree: S, um: E, m: x, a: w } = u
      Ds(x),
        Ds(w),
        v && Mn(v),
        b.stop(),
        y && ((y.flags |= 8), ge(S, u, f, p)),
        E && we(E, f),
        we(() => {
          u.isUnmounted = !0
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          u.asyncDep &&
          !u.asyncResolved &&
          u.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve())
    },
    Se = (u, f, p, v = !1, b = !1, y = 0) => {
      for (let S = y; S < u.length; S++) ge(u[S], f, p, v, b)
    },
    _ = (u) => {
      if (u.shapeFlag & 6) return _(u.component.subTree)
      if (u.shapeFlag & 128) return u.suspense.next()
      const f = g(u.anchor || u.el),
        p = f && f[Fi]
      return p ? g(p) : f
    }
  let P = !1
  const R = (u, f, p) => {
      u == null
        ? f._vnode && ge(f._vnode, null, null, !0)
        : O(f._vnode || null, u, f, null, null, null, p),
        (f._vnode = u),
        P || ((P = !0), zs(), so(), (P = !1))
    },
    M = { p: O, um: ge, m: ze, r: yt, mt: Ht, mc: Te, pc: U, pbc: Me, n: _, o: e }
  return { render: R, hydrate: void 0, createApp: il(R) }
}
function Fn({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function ht({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function gl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function So(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (F(s) && F(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o]
      let c = r[o]
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) && ((c = r[o] = st(r[o])), (c.el = i.el)),
        !n && c.patchFlag !== -2 && So(i, c)),
        c.type === An && (c.el = i.el)
    }
}
function ml(e) {
  const t = e.slice(),
    n = [0]
  let s, r, o, i, c
  const l = e.length
  for (s = 0; s < l; s++) {
    const h = e[s]
    if (h !== 0) {
      if (((r = n[n.length - 1]), e[r] < h)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (o = 0, i = n.length - 1; o < i; ) (c = (o + i) >> 1), e[n[c]] < h ? (o = c + 1) : (i = c)
      h < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s))
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i])
  return n
}
function Ro(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ro(t)
}
function Ds(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const vl = Symbol.for('v-scx'),
  _l = () => Ye(vl)
function an(e, t, n) {
  return Co(e, t, n)
}
function Co(e, t, n = te) {
  const { immediate: s, deep: r, flush: o, once: i } = n,
    c = fe({}, n),
    l = (t && s) || (!t && o !== 'post')
  let h
  if (en) {
    if (o === 'sync') {
      const m = _l()
      h = m.__watcherHandles || (m.__watcherHandles = [])
    } else if (!l) {
      const m = () => {}
      return (m.stop = Ve), (m.resume = Ve), (m.pause = Ve), m
    }
  }
  const a = pe
  c.call = (m, A, O) => Ne(m, a, A, O)
  let d = !1
  o === 'post'
    ? (c.scheduler = (m) => {
        we(m, a && a.suspense)
      })
    : o !== 'sync' &&
      ((d = !0),
      (c.scheduler = (m, A) => {
        A ? m() : bs(m)
      })),
    (c.augmentJob = (m) => {
      t && (m.flags |= 4), d && ((m.flags |= 2), a && ((m.id = a.uid), (m.i = a)))
    })
  const g = Hi(e, t, c)
  return en && (h ? h.push(g) : l && g()), g
}
function yl(e, t, n) {
  const s = this.proxy,
    r = re(e) ? (e.includes('.') ? Po(s, e) : () => s[e]) : e.bind(s, s)
  let o
  D(t) ? (o = t) : ((o = t.handler), (n = t))
  const i = rn(this),
    c = Co(r, o.bind(s), n)
  return i(), c
}
function Po(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const bl = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${lt(t)}Modifiers`] || e[`${vt(t)}Modifiers`]
function wl(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || te
  let r = n
  const o = t.startsWith('update:'),
    i = o && bl(s, t.slice(7))
  i && (i.trim && (r = n.map((a) => (re(a) ? a.trim() : a))), i.number && (r = n.map(ti)))
  let c,
    l = s[(c = Tn(t))] || s[(c = Tn(lt(t)))]
  !l && o && (l = s[(c = Tn(vt(t)))]), l && Ne(l, e, 6, r)
  const h = s[c + 'Once']
  if (h) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[c]) return
    ;(e.emitted[c] = !0), Ne(h, e, 6, r)
  }
}
function Ao(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const o = e.emits
  let i = {},
    c = !1
  if (!D(e)) {
    const l = (h) => {
      const a = Ao(h, t, !0)
      a && ((c = !0), fe(i, a))
    }
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  return !o && !c
    ? (se(e) && s.set(e, null), null)
    : (F(o) ? o.forEach((l) => (i[l] = null)) : fe(i, o), se(e) && s.set(e, i), i)
}
function Pn(e, t) {
  return !e || !bn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      q(e, t[0].toLowerCase() + t.slice(1)) || q(e, vt(t)) || q(e, t))
}
function Vs(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [o],
      slots: i,
      attrs: c,
      emit: l,
      render: h,
      renderCache: a,
      props: d,
      data: g,
      setupState: m,
      ctx: A,
      inheritAttrs: O,
    } = e,
    V = mn(e)
  let H, I
  try {
    if (n.shapeFlag & 4) {
      const T = r || s,
        J = T
      ;(H = De(h.call(J, T, a, d, m, g, A))), (I = c)
    } else {
      const T = t
      ;(H = De(T.length > 1 ? T(d, { attrs: c, slots: i, emit: l }) : T(d, null))),
        (I = t.props ? c : xl(c))
    }
  } catch (T) {
    ;(Wt.length = 0), Rn(T, e, 1), (H = Q(Ot))
  }
  let $ = H
  if (I && O !== !1) {
    const T = Object.keys(I),
      { shapeFlag: J } = $
    T.length && J & 7 && (o && T.some(ls) && (I = El(I, o)), ($ = Tt($, I, !1, !0)))
  }
  return (
    n.dirs && (($ = Tt($, null, !1, !0)), ($.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ws($, n.transition),
    (H = $),
    mn(V),
    H
  )
}
const xl = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || bn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  El = (e, t) => {
    const n = {}
    for (const s in e) (!ls(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Sl(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: c, patchFlag: l } = t,
    h = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return s ? Ns(s, i, h) : !!i
    if (l & 8) {
      const a = t.dynamicProps
      for (let d = 0; d < a.length; d++) {
        const g = a[d]
        if (i[g] !== s[g] && !Pn(h, g)) return !0
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : s === i ? !1 : s ? (i ? Ns(s, i, h) : !0) : !!i
  return !1
}
function Ns(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const o = s[r]
    if (t[o] !== e[o] && !Pn(n, o)) return !0
  }
  return !1
}
function Rl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Oo = (e) => e.__isSuspense
function Cl(e, t) {
  t && t.pendingBranch ? (F(e) ? t.effects.push(...e) : t.effects.push(e)) : ji(e)
}
const ve = Symbol.for('v-fgt'),
  An = Symbol.for('v-txt'),
  Ot = Symbol.for('v-cmt'),
  Dn = Symbol.for('v-stc'),
  Wt = []
let Ee = null
function Re(e = !1) {
  Wt.push((Ee = e ? null : []))
}
function Pl() {
  Wt.pop(), (Ee = Wt[Wt.length - 1] || null)
}
let Xt = 1
function ks(e, t = !1) {
  ;(Xt += e), e < 0 && Ee && t && (Ee.hasOnce = !0)
}
function To(e) {
  return (e.dynamicChildren = Xt > 0 ? Ee || St : null), Pl(), Xt > 0 && Ee && Ee.push(e), e
}
function ke(e, t, n, s, r, o) {
  return To(N(e, t, n, s, r, o, !0))
}
function Bs(e, t, n, s, r) {
  return To(Q(e, t, n, s, r, !0))
}
function Zt(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function jt(e, t) {
  return e.type === t.type && e.key === t.key
}
const Mo = ({ key: e }) => e ?? null,
  dn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (re(e) || ue(e) || D(e) ? { i: _e, r: e, k: t, f: !!n } : e) : null
  )
function N(e, t = null, n = null, s = 0, r = null, o = e === ve ? 0 : 1, i = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mo(t),
    ref: t && dn(t),
    scopeId: oo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: _e,
  }
  return (
    c ? (Es(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= re(n) ? 8 : 16),
    Xt > 0 && !i && Ee && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && Ee.push(l),
    l
  )
}
const Q = Al
function Al(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === Xi) && (e = Ot), Zt(e))) {
    const c = Tt(e, t, !0)
    return (
      n && Es(c, n),
      Xt > 0 && !o && Ee && (c.shapeFlag & 6 ? (Ee[Ee.indexOf(e)] = c) : Ee.push(c)),
      (c.patchFlag = -2),
      c
    )
  }
  if ((Fl(e) && (e = e.__vccOpts), t)) {
    t = Ol(t)
    let { class: c, style: l } = t
    c && !re(c) && (t.class = as(c)),
      se(l) && (ys(l) && !F(l) && (l = fe({}, l)), (t.style = fs(l)))
  }
  const i = re(e) ? 1 : Oo(e) ? 128 : Di(e) ? 64 : se(e) ? 4 : D(e) ? 2 : 0
  return N(e, t, n, s, r, i, o, !0)
}
function Ol(e) {
  return e ? (ys(e) || vo(e) ? fe({}, e) : e) : null
}
function Tt(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: c, transition: l } = e,
    h = t ? Tl(r || {}, t) : r,
    a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: h,
      key: h && Mo(h),
      ref: t && t.ref ? (n && o ? (F(o) ? o.concat(dn(t)) : [o, dn(t)]) : dn(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: c,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ve ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Tt(e.ssContent),
      ssFallback: e.ssFallback && Tt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return l && s && ws(a, l.clone(a)), a
}
function k(e = ' ', t = 0) {
  return Q(An, null, e, t)
}
function De(e) {
  return e == null || typeof e == 'boolean'
    ? Q(Ot)
    : F(e)
      ? Q(ve, null, e.slice())
      : Zt(e)
        ? st(e)
        : Q(An, null, String(e))
}
function st(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Tt(e)
}
function Es(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (F(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Es(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !vo(t)
        ? (t._ctx = _e)
        : r === 3 && _e && (_e.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    D(t)
      ? ((t = { default: t, _ctx: _e }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [k(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Tl(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class') t.class !== s.class && (t.class = as([t.class, s.class]))
      else if (r === 'style') t.style = fs([t.style, s.style])
      else if (bn(r)) {
        const o = t[r],
          i = s[r]
        i && o !== i && !(F(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function je(e, t, n, s = null) {
  Ne(e, t, 7, [n, s])
}
const Ml = po()
let Il = 0
function zl(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Ml,
    o = {
      uid: Il++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new zr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: yo(s, r),
      emitsOptions: Ao(s, r),
      emit: null,
      emitted: null,
      propsDefaults: te,
      inheritAttrs: s.inheritAttrs,
      ctx: te,
      data: te,
      props: te,
      attrs: te,
      slots: te,
      refs: te,
      setupState: te,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = wl.bind(null, o)), e.ce && e.ce(o), o
  )
}
let pe = null,
  yn,
  es
{
  const e = En(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (o) => {
          r.length > 1 ? r.forEach((i) => i(o)) : r[0](o)
        }
      )
    }
  ;(yn = t('__VUE_INSTANCE_SETTERS__', (n) => (pe = n))),
    (es = t('__VUE_SSR_SETTERS__', (n) => (en = n)))
}
const rn = (e) => {
    const t = pe
    return (
      yn(e),
      e.scope.on(),
      () => {
        e.scope.off(), yn(t)
      }
    )
  },
  Us = () => {
    pe && pe.scope.off(), yn(null)
  }
function Io(e) {
  return e.vnode.shapeFlag & 4
}
let en = !1
function Hl(e, t = !1, n = !1) {
  t && es(t)
  const { props: s, children: r } = e.vnode,
    o = Io(e)
  ll(e, s, o, t), al(e, r, n)
  const i = o ? $l(e, t) : void 0
  return t && es(!1), i
}
function $l(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Zi))
  const { setup: s } = n
  if (s) {
    ct()
    const r = (e.setupContext = s.length > 1 ? jl(e) : null),
      o = rn(e),
      i = sn(s, e, 0, [e.props, r]),
      c = Sr(i)
    if ((ut(), o(), (c || e.sp) && !Pt(e) && io(e), c)) {
      if ((i.then(Us, Us), t))
        return i
          .then((l) => {
            Ks(e, l)
          })
          .catch((l) => {
            Rn(l, e, 0)
          })
      e.asyncDep = i
    } else Ks(e, i)
  } else zo(e)
}
function Ks(e, t, n) {
  D(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : se(t) && (e.setupState = Zr(t)),
    zo(e)
}
function zo(e, t, n) {
  const s = e.type
  e.render || (e.render = s.render || Ve)
  {
    const r = rn(e)
    ct()
    try {
      el(e)
    } finally {
      ut(), r()
    }
  }
}
const Ll = {
  get(e, t) {
    return ce(e, 'get', ''), e[t]
  },
}
function jl(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, Ll), slots: e.slots, emit: e.emit, expose: t }
}
function Ss(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Zr(Qr(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in Kt) return Kt[n](e)
          },
          has(t, n) {
            return n in t || n in Kt
          },
        }))
    : e.proxy
}
function Fl(e) {
  return D(e) && '__vccOpts' in e
}
const Ce = (e, t) => Ii(e, t, en)
function Ho(e, t, n) {
  const s = arguments.length
  return s === 2
    ? se(t) && !F(t)
      ? Zt(t)
        ? Q(e, null, [t])
        : Q(e, t)
      : Q(e, null, t)
    : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && Zt(n) && (n = [n]),
      Q(e, t, n))
}
const Dl = '3.5.13'
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ts
const Ws = typeof window < 'u' && window.trustedTypes
if (Ws)
  try {
    ts = Ws.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const $o = ts ? (e) => ts.createHTML(e) : (e) => e,
  Vl = 'http://www.w3.org/2000/svg',
  Nl = 'http://www.w3.org/1998/Math/MathML',
  We = typeof document < 'u' ? document : null,
  qs = We && We.createElement('template'),
  kl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? We.createElementNS(Vl, e)
          : t === 'mathml'
            ? We.createElementNS(Nl, e)
            : n
              ? We.createElement(e, { is: n })
              : We.createElement(e)
      return e === 'select' && s && s.multiple != null && r.setAttribute('multiple', s.multiple), r
    },
    createText: (e) => We.createTextNode(e),
    createComment: (e) => We.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => We.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild
      if (r && (r === o || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); );
      else {
        qs.innerHTML = $o(
          s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e,
        )
        const c = qs.content
        if (s === 'svg' || s === 'mathml') {
          const l = c.firstChild
          for (; l.firstChild; ) c.appendChild(l.firstChild)
          c.removeChild(l)
        }
        t.insertBefore(c, n)
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    },
  },
  Bl = Symbol('_vtc')
function Ul(e, t, n) {
  const s = e[Bl]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const Gs = Symbol('_vod'),
  Kl = Symbol('_vsh'),
  Wl = Symbol(''),
  ql = /(^|;)\s*display\s*:/
function Gl(e, t, n) {
  const s = e.style,
    r = re(n)
  let o = !1
  if (n && !r) {
    if (t)
      if (re(t))
        for (const i of t.split(';')) {
          const c = i.slice(0, i.indexOf(':')).trim()
          n[c] == null && hn(s, c, '')
        }
      else for (const i in t) n[i] == null && hn(s, i, '')
    for (const i in n) i === 'display' && (o = !0), hn(s, i, n[i])
  } else if (r) {
    if (t !== n) {
      const i = s[Wl]
      i && (n += ';' + i), (s.cssText = n), (o = ql.test(n))
    }
  } else t && e.removeAttribute('style')
  Gs in e && ((e[Gs] = o ? s.display : ''), e[Kl] && (s.display = 'none'))
}
const Ys = /\s*!important$/
function hn(e, t, n) {
  if (F(n)) n.forEach((s) => hn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = Yl(e, t)
    Ys.test(n) ? e.setProperty(vt(s), n.replace(Ys, ''), 'important') : (e[s] = n)
  }
}
const Qs = ['Webkit', 'Moz', 'ms'],
  Vn = {}
function Yl(e, t) {
  const n = Vn[t]
  if (n) return n
  let s = lt(t)
  if (s !== 'filter' && s in e) return (Vn[t] = s)
  s = Pr(s)
  for (let r = 0; r < Qs.length; r++) {
    const o = Qs[r] + s
    if (o in e) return (Vn[t] = o)
  }
  return t
}
const Js = 'http://www.w3.org/1999/xlink'
function Xs(e, t, n, s, r, o = li(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Js, t.slice(6, t.length))
      : e.setAttributeNS(Js, t, n)
    : n == null || (o && !Or(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : Qe(n) ? String(n) : n)
}
function Zs(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? $o(n) : n)
    return
  }
  const o = e.tagName
  if (t === 'value' && o !== 'PROGRESS' && !o.includes('-')) {
    const c = o === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      l = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;(c !== l || !('_value' in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let i = !1
  if (n === '' || n == null) {
    const c = typeof e[t]
    c === 'boolean'
      ? (n = Or(n))
      : n == null && c === 'string'
        ? ((n = ''), (i = !0))
        : c === 'number' && ((n = 0), (i = !0))
  }
  try {
    e[t] = n
  } catch {}
  i && e.removeAttribute(r || t)
}
function Ql(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Jl(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const er = Symbol('_vei')
function Xl(e, t, n, s, r = null) {
  const o = e[er] || (e[er] = {}),
    i = o[t]
  if (s && i) i.value = s
  else {
    const [c, l] = Zl(t)
    if (s) {
      const h = (o[t] = nc(s, r))
      Ql(e, c, h, l)
    } else i && (Jl(e, c, i, l), (o[t] = void 0))
  }
}
const tr = /(?:Once|Passive|Capture)$/
function Zl(e) {
  let t
  if (tr.test(e)) {
    t = {}
    let s
    for (; (s = e.match(tr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : vt(e.slice(2)), t]
}
let Nn = 0
const ec = Promise.resolve(),
  tc = () => Nn || (ec.then(() => (Nn = 0)), (Nn = Date.now()))
function nc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Ne(sc(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = tc()), n
}
function sc(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const nr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  rc = (e, t, n, s, r, o) => {
    const i = r === 'svg'
    t === 'class'
      ? Ul(e, s, i)
      : t === 'style'
        ? Gl(e, n, s)
        : bn(t)
          ? ls(t) || Xl(e, t, n, s, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : oc(e, t, s, i)
              )
            ? (Zs(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Xs(e, t, s, i, o, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !re(s))
              ? Zs(e, lt(t), s, o, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                Xs(e, t, s, i))
  }
function oc(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && nr(t) && D(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1
  }
  return nr(t) && re(n) ? !1 : t in e
}
const ic = fe({ patchProp: rc }, kl)
let sr
function lc() {
  return sr || (sr = hl(ic))
}
const cc = (...e) => {
  const t = lc().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = fc(s)
      if (!r) return
      const o = t._component
      !D(o) && !o.render && !o.template && (o.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = '')
      const i = n(r, !1, uc(r))
      return (
        r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')), i
      )
    }),
    t
  )
}
function uc(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function fc(e) {
  return re(e) ? document.querySelector(e) : e
}
/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const ac = Symbol()
var rr
;(function (e) {
  ;(e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function')
})(rr || (rr = {}))
function dc() {
  const e = ci(!0),
    t = e.run(() => Jr({}))
  let n = [],
    s = []
  const r = Qr({
    install(o) {
      ;(r._a = o),
        o.provide(ac, r),
        (o.config.globalProperties.$pinia = r),
        s.forEach((i) => n.push(i)),
        (s = [])
    },
    use(o) {
      return this._a ? n.push(o) : s.push(o), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  })
  return r
}
const hc =
  "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e"
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Et = typeof document < 'u'
function Lo(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function pc(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && Lo(e.default))
}
const K = Object.assign
function kn(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = Oe(r) ? r.map(e) : e(r)
  }
  return n
}
const qt = () => {},
  Oe = Array.isArray,
  jo = /#/g,
  gc = /&/g,
  mc = /\//g,
  vc = /=/g,
  _c = /\?/g,
  Fo = /\+/g,
  yc = /%5B/g,
  bc = /%5D/g,
  Do = /%5E/g,
  wc = /%60/g,
  Vo = /%7B/g,
  xc = /%7C/g,
  No = /%7D/g,
  Ec = /%20/g
function Rs(e) {
  return encodeURI('' + e)
    .replace(xc, '|')
    .replace(yc, '[')
    .replace(bc, ']')
}
function Sc(e) {
  return Rs(e).replace(Vo, '{').replace(No, '}').replace(Do, '^')
}
function ns(e) {
  return Rs(e)
    .replace(Fo, '%2B')
    .replace(Ec, '+')
    .replace(jo, '%23')
    .replace(gc, '%26')
    .replace(wc, '`')
    .replace(Vo, '{')
    .replace(No, '}')
    .replace(Do, '^')
}
function Rc(e) {
  return ns(e).replace(vc, '%3D')
}
function Cc(e) {
  return Rs(e).replace(jo, '%23').replace(_c, '%3F')
}
function Pc(e) {
  return e == null ? '' : Cc(e).replace(mc, '%2F')
}
function tn(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const Ac = /\/$/,
  Oc = (e) => e.replace(Ac, '')
function Bn(e, t, n = '/') {
  let s,
    r = {},
    o = '',
    i = ''
  const c = t.indexOf('#')
  let l = t.indexOf('?')
  return (
    c < l && c >= 0 && (l = -1),
    l > -1 && ((s = t.slice(0, l)), (o = t.slice(l + 1, c > -1 ? c : t.length)), (r = e(o))),
    c > -1 && ((s = s || t.slice(0, c)), (i = t.slice(c, t.length))),
    (s = zc(s ?? t, n)),
    { fullPath: s + (o && '?') + o + i, path: s, query: r, hash: tn(i) }
  )
}
function Tc(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function or(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function Mc(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    Mt(t.matched[s], n.matched[r]) &&
    ko(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Mt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function ko(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Ic(e[n], t[n])) return !1
  return !0
}
function Ic(e, t) {
  return Oe(e) ? ir(e, t) : Oe(t) ? ir(t, e) : e === t
}
function ir(e, t) {
  return Oe(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function zc(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    r = s[s.length - 1]
  ;(r === '..' || r === '.') && s.push('')
  let o = n.length - 1,
    i,
    c
  for (i = 0; i < s.length; i++)
    if (((c = s[i]), c !== '.'))
      if (c === '..') o > 1 && o--
      else break
  return n.slice(0, o).join('/') + '/' + s.slice(i).join('/')
}
const tt = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
var nn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(nn || (nn = {}))
var Gt
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Gt || (Gt = {}))
function Hc(e) {
  if (!e)
    if (Et) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Oc(e)
}
const $c = /^[^#]+#/
function Lc(e, t) {
  return e.replace($c, '#') + t
}
function jc(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  }
}
const On = () => ({ left: window.scrollX, top: window.scrollY })
function Fc(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      r =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    t = jc(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      )
}
function lr(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const ss = new Map()
function Dc(e, t) {
  ss.set(e, t)
}
function Vc(e) {
  const t = ss.get(e)
  return ss.delete(e), t
}
let Nc = () => location.protocol + '//' + location.host
function Bo(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let c = r.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = r.slice(c)
    return l[0] !== '/' && (l = '/' + l), or(l, '')
  }
  return or(n, e) + s + r
}
function kc(e, t, n, s) {
  let r = [],
    o = [],
    i = null
  const c = ({ state: g }) => {
    const m = Bo(e, location),
      A = n.value,
      O = t.value
    let V = 0
    if (g) {
      if (((n.value = m), (t.value = g), i && i === A)) {
        i = null
        return
      }
      V = O ? g.position - O.position : 0
    } else s(m)
    r.forEach((H) => {
      H(n.value, A, {
        delta: V,
        type: nn.pop,
        direction: V ? (V > 0 ? Gt.forward : Gt.back) : Gt.unknown,
      })
    })
  }
  function l() {
    i = n.value
  }
  function h(g) {
    r.push(g)
    const m = () => {
      const A = r.indexOf(g)
      A > -1 && r.splice(A, 1)
    }
    return o.push(m), m
  }
  function a() {
    const { history: g } = window
    g.state && g.replaceState(K({}, g.state, { scroll: On() }), '')
  }
  function d() {
    for (const g of o) g()
    ;(o = []),
      window.removeEventListener('popstate', c),
      window.removeEventListener('beforeunload', a)
  }
  return (
    window.addEventListener('popstate', c),
    window.addEventListener('beforeunload', a, { passive: !0 }),
    { pauseListeners: l, listen: h, destroy: d }
  )
}
function cr(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? On() : null,
  }
}
function Bc(e) {
  const { history: t, location: n } = window,
    s = { value: Bo(e, n) },
    r = { value: t.state }
  r.value ||
    o(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    )
  function o(l, h, a) {
    const d = e.indexOf('#'),
      g = d > -1 ? (n.host && document.querySelector('base') ? e : e.slice(d)) + l : Nc() + e + l
    try {
      t[a ? 'replaceState' : 'pushState'](h, '', g), (r.value = h)
    } catch (m) {
      console.error(m), n[a ? 'replace' : 'assign'](g)
    }
  }
  function i(l, h) {
    const a = K({}, t.state, cr(r.value.back, l, r.value.forward, !0), h, {
      position: r.value.position,
    })
    o(l, a, !0), (s.value = l)
  }
  function c(l, h) {
    const a = K({}, r.value, t.state, { forward: l, scroll: On() })
    o(a.current, a, !0)
    const d = K({}, cr(s.value, l, null), { position: a.position + 1 }, h)
    o(l, d, !1), (s.value = l)
  }
  return { location: s, state: r, push: c, replace: i }
}
function Uc(e) {
  e = Hc(e)
  const t = Bc(e),
    n = kc(e, t.state, t.location, t.replace)
  function s(o, i = !0) {
    i || n.pauseListeners(), history.go(o)
  }
  const r = K({ location: '', base: e, go: s, createHref: Lc.bind(null, e) }, t, n)
  return (
    Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
    r
  )
}
function Kc(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    Uc(e)
  )
}
function Wc(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function Uo(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const Ko = Symbol('')
var ur
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(ur || (ur = {}))
function It(e, t) {
  return K(new Error(), { type: e, [Ko]: !0 }, t)
}
function Ke(e, t) {
  return e instanceof Error && Ko in e && (t == null || !!(e.type & t))
}
const fr = '[^/]+?',
  qc = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Gc = /[.+*?^${}()[\]/\\]/g
function Yc(e, t) {
  const n = K({}, qc, t),
    s = []
  let r = n.start ? '^' : ''
  const o = []
  for (const h of e) {
    const a = h.length ? [] : [90]
    n.strict && !h.length && (r += '/')
    for (let d = 0; d < h.length; d++) {
      const g = h[d]
      let m = 40 + (n.sensitive ? 0.25 : 0)
      if (g.type === 0) d || (r += '/'), (r += g.value.replace(Gc, '\\$&')), (m += 40)
      else if (g.type === 1) {
        const { value: A, repeatable: O, optional: V, regexp: H } = g
        o.push({ name: A, repeatable: O, optional: V })
        const I = H || fr
        if (I !== fr) {
          m += 10
          try {
            new RegExp(`(${I})`)
          } catch (T) {
            throw new Error(`Invalid custom RegExp for param "${A}" (${I}): ` + T.message)
          }
        }
        let $ = O ? `((?:${I})(?:/(?:${I}))*)` : `(${I})`
        d || ($ = V && h.length < 2 ? `(?:/${$})` : '/' + $),
          V && ($ += '?'),
          (r += $),
          (m += 20),
          V && (m += -8),
          O && (m += -20),
          I === '.*' && (m += -50)
      }
      a.push(m)
    }
    s.push(a)
  }
  if (n.strict && n.end) {
    const h = s.length - 1
    s[h][s[h].length - 1] += 0.7000000000000001
  }
  n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && !r.endsWith('/') && (r += '(?:/|$)')
  const i = new RegExp(r, n.sensitive ? '' : 'i')
  function c(h) {
    const a = h.match(i),
      d = {}
    if (!a) return null
    for (let g = 1; g < a.length; g++) {
      const m = a[g] || '',
        A = o[g - 1]
      d[A.name] = m && A.repeatable ? m.split('/') : m
    }
    return d
  }
  function l(h) {
    let a = '',
      d = !1
    for (const g of e) {
      ;(!d || !a.endsWith('/')) && (a += '/'), (d = !1)
      for (const m of g)
        if (m.type === 0) a += m.value
        else if (m.type === 1) {
          const { value: A, repeatable: O, optional: V } = m,
            H = A in h ? h[A] : ''
          if (Oe(H) && !O)
            throw new Error(
              `Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const I = Oe(H) ? H.join('/') : H
          if (!I)
            if (V) g.length < 2 && (a.endsWith('/') ? (a = a.slice(0, -1)) : (d = !0))
            else throw new Error(`Missing required param "${A}"`)
          a += I
        }
    }
    return a || '/'
  }
  return { re: i, score: s, keys: o, parse: c, stringify: l }
}
function Qc(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function Wo(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const o = Qc(s[n], r[n])
    if (o) return o
    n++
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (ar(s)) return 1
    if (ar(r)) return -1
  }
  return r.length - s.length
}
function ar(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const Jc = { type: 0, value: '' },
  Xc = /[a-zA-Z0-9_]/
function Zc(e) {
  if (!e) return [[]]
  if (e === '/') return [[Jc]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${h}": ${m}`)
  }
  let n = 0,
    s = n
  const r = []
  let o
  function i() {
    o && r.push(o), (o = [])
  }
  let c = 0,
    l,
    h = '',
    a = ''
  function d() {
    h &&
      (n === 0
        ? o.push({ type: 0, value: h })
        : n === 1 || n === 2 || n === 3
          ? (o.length > 1 &&
              (l === '*' || l === '+') &&
              t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),
            o.push({
              type: 1,
              value: h,
              regexp: a,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?',
            }))
          : t('Invalid state to consume buffer'),
      (h = ''))
  }
  function g() {
    h += l
  }
  for (; c < e.length; ) {
    if (((l = e[c++]), l === '\\' && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        l === '/' ? (h && d(), i()) : l === ':' ? (d(), (n = 1)) : g()
        break
      case 4:
        g(), (n = s)
        break
      case 1:
        l === '('
          ? (n = 2)
          : Xc.test(l)
            ? g()
            : (d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && c--)
        break
      case 2:
        l === ')' ? (a[a.length - 1] == '\\' ? (a = a.slice(0, -1) + l) : (n = 3)) : (a += l)
        break
      case 3:
        d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && c--, (a = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${h}"`), d(), i(), r
}
function eu(e, t, n) {
  const s = Yc(Zc(e.path), n),
    r = K(s, { record: e, parent: t, children: [], alias: [] })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function tu(e, t) {
  const n = [],
    s = new Map()
  t = gr({ strict: !1, end: !0, sensitive: !1 }, t)
  function r(d) {
    return s.get(d)
  }
  function o(d, g, m) {
    const A = !m,
      O = hr(d)
    O.aliasOf = m && m.record
    const V = gr(t, d),
      H = [O]
    if ('alias' in d) {
      const T = typeof d.alias == 'string' ? [d.alias] : d.alias
      for (const J of T)
        H.push(
          hr(
            K({}, O, {
              components: m ? m.record.components : O.components,
              path: J,
              aliasOf: m ? m.record : O,
            }),
          ),
        )
    }
    let I, $
    for (const T of H) {
      const { path: J } = T
      if (g && J[0] !== '/') {
        const le = g.record.path,
          ne = le[le.length - 1] === '/' ? '' : '/'
        T.path = g.record.path + (J && ne + J)
      }
      if (
        ((I = eu(T, g, V)),
        m
          ? m.alias.push(I)
          : (($ = $ || I), $ !== I && $.alias.push(I), A && d.name && !pr(I) && i(d.name)),
        qo(I) && l(I),
        O.children)
      ) {
        const le = O.children
        for (let ne = 0; ne < le.length; ne++) o(le[ne], I, m && m.children[ne])
      }
      m = m || I
    }
    return $
      ? () => {
          i($)
        }
      : qt
  }
  function i(d) {
    if (Uo(d)) {
      const g = s.get(d)
      g && (s.delete(d), n.splice(n.indexOf(g), 1), g.children.forEach(i), g.alias.forEach(i))
    } else {
      const g = n.indexOf(d)
      g > -1 &&
        (n.splice(g, 1),
        d.record.name && s.delete(d.record.name),
        d.children.forEach(i),
        d.alias.forEach(i))
    }
  }
  function c() {
    return n
  }
  function l(d) {
    const g = ru(d, n)
    n.splice(g, 0, d), d.record.name && !pr(d) && s.set(d.record.name, d)
  }
  function h(d, g) {
    let m,
      A = {},
      O,
      V
    if ('name' in d && d.name) {
      if (((m = s.get(d.name)), !m)) throw It(1, { location: d })
      ;(V = m.record.name),
        (A = K(
          dr(
            g.params,
            m.keys
              .filter(($) => !$.optional)
              .concat(m.parent ? m.parent.keys.filter(($) => $.optional) : [])
              .map(($) => $.name),
          ),
          d.params &&
            dr(
              d.params,
              m.keys.map(($) => $.name),
            ),
        )),
        (O = m.stringify(A))
    } else if (d.path != null)
      (O = d.path), (m = n.find(($) => $.re.test(O))), m && ((A = m.parse(O)), (V = m.record.name))
    else {
      if (((m = g.name ? s.get(g.name) : n.find(($) => $.re.test(g.path))), !m))
        throw It(1, { location: d, currentLocation: g })
      ;(V = m.record.name), (A = K({}, g.params, d.params)), (O = m.stringify(A))
    }
    const H = []
    let I = m
    for (; I; ) H.unshift(I.record), (I = I.parent)
    return { name: V, path: O, params: A, matched: H, meta: su(H) }
  }
  e.forEach((d) => o(d))
  function a() {
    ;(n.length = 0), s.clear()
  }
  return {
    addRoute: o,
    resolve: h,
    removeRoute: i,
    clearRoutes: a,
    getRoutes: c,
    getRecordMatcher: r,
  }
}
function dr(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function hr(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: nu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  }
  return Object.defineProperty(t, 'mods', { value: {} }), t
}
function nu(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function pr(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function su(e) {
  return e.reduce((t, n) => K(t, n.meta), {})
}
function gr(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function ru(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const o = (n + s) >> 1
    Wo(e, t[o]) < 0 ? (s = o) : (n = o + 1)
  }
  const r = ou(e)
  return r && (s = t.lastIndexOf(r, s - 1)), s
}
function ou(e) {
  let t = e
  for (; (t = t.parent); ) if (qo(t) && Wo(e, t) === 0) return t
}
function qo({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect)
}
function iu(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let r = 0; r < s.length; ++r) {
    const o = s[r].replace(Fo, ' '),
      i = o.indexOf('='),
      c = tn(i < 0 ? o : o.slice(0, i)),
      l = i < 0 ? null : tn(o.slice(i + 1))
    if (c in t) {
      let h = t[c]
      Oe(h) || (h = t[c] = [h]), h.push(l)
    } else t[c] = l
  }
  return t
}
function mr(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = Rc(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Oe(s) ? s.map((o) => o && ns(o)) : [s && ns(s)]).forEach((o) => {
      o !== void 0 && ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o))
    })
  }
  return t
}
function lu(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Oe(s) ? s.map((r) => (r == null ? null : '' + r)) : s == null ? s : '' + s)
  }
  return t
}
const cu = Symbol(''),
  vr = Symbol(''),
  Cs = Symbol(''),
  Go = Symbol(''),
  rs = Symbol('')
function Ft() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function rt(e, t, n, s, r, o = (i) => i()) {
  const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((c, l) => {
      const h = (g) => {
          g === !1
            ? l(It(4, { from: n, to: t }))
            : g instanceof Error
              ? l(g)
              : Wc(g)
                ? l(It(2, { from: t, to: g }))
                : (i && s.enterCallbacks[r] === i && typeof g == 'function' && i.push(g), c())
        },
        a = o(() => e.call(s && s.instances[r], t, n, h))
      let d = Promise.resolve(a)
      e.length < 3 && (d = d.then(h)), d.catch((g) => l(g))
    })
}
function Un(e, t, n, s, r = (o) => o()) {
  const o = []
  for (const i of e)
    for (const c in i.components) {
      let l = i.components[c]
      if (!(t !== 'beforeRouteEnter' && !i.instances[c]))
        if (Lo(l)) {
          const a = (l.__vccOpts || l)[t]
          a && o.push(rt(a, n, s, i, c, r))
        } else {
          let h = l()
          o.push(() =>
            h.then((a) => {
              if (!a) throw new Error(`Couldn't resolve component "${c}" at "${i.path}"`)
              const d = pc(a) ? a.default : a
              ;(i.mods[c] = a), (i.components[c] = d)
              const m = (d.__vccOpts || d)[t]
              return m && rt(m, n, s, i, c, r)()
            }),
          )
        }
    }
  return o
}
function _r(e) {
  const t = Ye(Cs),
    n = Ye(Go),
    s = Ce(() => {
      const l = Ge(e.to)
      return t.resolve(l)
    }),
    r = Ce(() => {
      const { matched: l } = s.value,
        { length: h } = l,
        a = l[h - 1],
        d = n.matched
      if (!a || !d.length) return -1
      const g = d.findIndex(Mt.bind(null, a))
      if (g > -1) return g
      const m = yr(l[h - 2])
      return h > 1 && yr(a) === m && d[d.length - 1].path !== m
        ? d.findIndex(Mt.bind(null, l[h - 2]))
        : g
    }),
    o = Ce(() => r.value > -1 && du(n.params, s.value.params)),
    i = Ce(() => r.value > -1 && r.value === n.matched.length - 1 && ko(n.params, s.value.params))
  function c(l = {}) {
    if (au(l)) {
      const h = t[Ge(e.replace) ? 'replace' : 'push'](Ge(e.to)).catch(qt)
      return (
        e.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => h),
        h
      )
    }
    return Promise.resolve()
  }
  return { route: s, href: Ce(() => s.value.href), isActive: o, isExactActive: i, navigate: c }
}
function uu(e) {
  return e.length === 1 ? e[0] : e
}
const fu = zt({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: _r,
    setup(e, { slots: t }) {
      const n = Sn(_r(e)),
        { options: s } = Ye(Cs),
        r = Ce(() => ({
          [br(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
          [br(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }))
      return () => {
        const o = t.default && uu(t.default(n))
        return e.custom
          ? o
          : Ho(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              o,
            )
      }
    },
  }),
  os = fu
function au(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function du(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (!Oe(r) || r.length !== s.length || s.some((o, i) => o !== r[i])) return !1
  }
  return !0
}
function yr(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const br = (e, t, n) => e ?? t ?? n,
  hu = zt({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Ye(rs),
        r = Ce(() => e.route || s.value),
        o = Ye(vr, 0),
        i = Ce(() => {
          let h = Ge(o)
          const { matched: a } = r.value
          let d
          for (; (d = a[h]) && !d.components; ) h++
          return h
        }),
        c = Ce(() => r.value.matched[i.value])
      fn(
        vr,
        Ce(() => i.value + 1),
      ),
        fn(cu, c),
        fn(rs, r)
      const l = Jr()
      return (
        an(
          () => [l.value, c.value, e.name],
          ([h, a, d], [g, m, A]) => {
            a &&
              ((a.instances[d] = h),
              m &&
                m !== a &&
                h &&
                h === g &&
                (a.leaveGuards.size || (a.leaveGuards = m.leaveGuards),
                a.updateGuards.size || (a.updateGuards = m.updateGuards))),
              h && a && (!m || !Mt(a, m) || !g) && (a.enterCallbacks[d] || []).forEach((O) => O(h))
          },
          { flush: 'post' },
        ),
        () => {
          const h = r.value,
            a = e.name,
            d = c.value,
            g = d && d.components[a]
          if (!g) return wr(n.default, { Component: g, route: h })
          const m = d.props[a],
            A = m ? (m === !0 ? h.params : typeof m == 'function' ? m(h) : m) : null,
            V = Ho(
              g,
              K({}, A, t, {
                onVnodeUnmounted: (H) => {
                  H.component.isUnmounted && (d.instances[a] = null)
                },
                ref: l,
              }),
            )
          return wr(n.default, { Component: V, route: h }) || V
        }
      )
    },
  })
function wr(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Yo = hu
function pu(e) {
  const t = tu(e.routes, e),
    n = e.parseQuery || iu,
    s = e.stringifyQuery || mr,
    r = e.history,
    o = Ft(),
    i = Ft(),
    c = Ft(),
    l = Ai(tt)
  let h = tt
  Et && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const a = kn.bind(null, (_) => '' + _),
    d = kn.bind(null, Pc),
    g = kn.bind(null, tn)
  function m(_, P) {
    let R, M
    return Uo(_) ? ((R = t.getRecordMatcher(_)), (M = P)) : (M = _), t.addRoute(M, R)
  }
  function A(_) {
    const P = t.getRecordMatcher(_)
    P && t.removeRoute(P)
  }
  function O() {
    return t.getRoutes().map((_) => _.record)
  }
  function V(_) {
    return !!t.getRecordMatcher(_)
  }
  function H(_, P) {
    if (((P = K({}, P || l.value)), typeof _ == 'string')) {
      const p = Bn(n, _, P.path),
        v = t.resolve({ path: p.path }, P),
        b = r.createHref(p.fullPath)
      return K(p, v, { params: g(v.params), hash: tn(p.hash), redirectedFrom: void 0, href: b })
    }
    let R
    if (_.path != null) R = K({}, _, { path: Bn(n, _.path, P.path).path })
    else {
      const p = K({}, _.params)
      for (const v in p) p[v] == null && delete p[v]
      ;(R = K({}, _, { params: d(p) })), (P.params = d(P.params))
    }
    const M = t.resolve(R, P),
      X = _.hash || ''
    M.params = a(g(M.params))
    const u = Tc(s, K({}, _, { hash: Sc(X), path: M.path })),
      f = r.createHref(u)
    return K({ fullPath: u, hash: X, query: s === mr ? lu(_.query) : _.query || {} }, M, {
      redirectedFrom: void 0,
      href: f,
    })
  }
  function I(_) {
    return typeof _ == 'string' ? Bn(n, _, l.value.path) : K({}, _)
  }
  function $(_, P) {
    if (h !== _) return It(8, { from: P, to: _ })
  }
  function T(_) {
    return ne(_)
  }
  function J(_) {
    return T(K(I(_), { replace: !0 }))
  }
  function le(_) {
    const P = _.matched[_.matched.length - 1]
    if (P && P.redirect) {
      const { redirect: R } = P
      let M = typeof R == 'function' ? R(_) : R
      return (
        typeof M == 'string' &&
          ((M = M.includes('?') || M.includes('#') ? (M = I(M)) : { path: M }), (M.params = {})),
        K({ query: _.query, hash: _.hash, params: M.path != null ? {} : _.params }, M)
      )
    }
  }
  function ne(_, P) {
    const R = (h = H(_)),
      M = l.value,
      X = _.state,
      u = _.force,
      f = _.replace === !0,
      p = le(R)
    if (p)
      return ne(
        K(I(p), { state: typeof p == 'object' ? K({}, X, p.state) : X, force: u, replace: f }),
        P || R,
      )
    const v = R
    v.redirectedFrom = P
    let b
    return (
      !u && Mc(s, M, R) && ((b = It(16, { to: v, from: M })), ze(M, M, !0, !1)),
      (b ? Promise.resolve(b) : Me(v, M))
        .catch((y) => (Ke(y) ? (Ke(y, 2) ? y : et(y)) : U(y, v, M)))
        .then((y) => {
          if (y) {
            if (Ke(y, 2))
              return ne(
                K({ replace: f }, I(y.to), {
                  state: typeof y.to == 'object' ? K({}, X, y.to.state) : X,
                  force: u,
                }),
                P || v,
              )
          } else y = at(v, M, !0, f, X)
          return Ze(v, M, y), y
        })
    )
  }
  function Te(_, P) {
    const R = $(_, P)
    return R ? Promise.reject(R) : Promise.resolve()
  }
  function Xe(_) {
    const P = bt.values().next().value
    return P && typeof P.runWithContext == 'function' ? P.runWithContext(_) : _()
  }
  function Me(_, P) {
    let R
    const [M, X, u] = gu(_, P)
    R = Un(M.reverse(), 'beforeRouteLeave', _, P)
    for (const p of M)
      p.leaveGuards.forEach((v) => {
        R.push(rt(v, _, P))
      })
    const f = Te.bind(null, _, P)
    return (
      R.push(f),
      Se(R)
        .then(() => {
          R = []
          for (const p of o.list()) R.push(rt(p, _, P))
          return R.push(f), Se(R)
        })
        .then(() => {
          R = Un(X, 'beforeRouteUpdate', _, P)
          for (const p of X)
            p.updateGuards.forEach((v) => {
              R.push(rt(v, _, P))
            })
          return R.push(f), Se(R)
        })
        .then(() => {
          R = []
          for (const p of u)
            if (p.beforeEnter)
              if (Oe(p.beforeEnter)) for (const v of p.beforeEnter) R.push(rt(v, _, P))
              else R.push(rt(p.beforeEnter, _, P))
          return R.push(f), Se(R)
        })
        .then(
          () => (
            _.matched.forEach((p) => (p.enterCallbacks = {})),
            (R = Un(u, 'beforeRouteEnter', _, P, Xe)),
            R.push(f),
            Se(R)
          ),
        )
        .then(() => {
          R = []
          for (const p of i.list()) R.push(rt(p, _, P))
          return R.push(f), Se(R)
        })
        .catch((p) => (Ke(p, 8) ? p : Promise.reject(p)))
    )
  }
  function Ze(_, P, R) {
    c.list().forEach((M) => Xe(() => M(_, P, R)))
  }
  function at(_, P, R, M, X) {
    const u = $(_, P)
    if (u) return u
    const f = P === tt,
      p = Et ? history.state : {}
    R &&
      (M || f
        ? r.replace(_.fullPath, K({ scroll: f && p && p.scroll }, X))
        : r.push(_.fullPath, X)),
      (l.value = _),
      ze(_, P, R, f),
      et()
  }
  let Ie
  function Ht() {
    Ie ||
      (Ie = r.listen((_, P, R) => {
        if (!on.listening) return
        const M = H(_),
          X = le(M)
        if (X) {
          ne(K(X, { replace: !0, force: !0 }), M).catch(qt)
          return
        }
        h = M
        const u = l.value
        Et && Dc(lr(u.fullPath, R.delta), On()),
          Me(M, u)
            .catch((f) =>
              Ke(f, 12)
                ? f
                : Ke(f, 2)
                  ? (ne(K(I(f.to), { force: !0 }), M)
                      .then((p) => {
                        Ke(p, 20) && !R.delta && R.type === nn.pop && r.go(-1, !1)
                      })
                      .catch(qt),
                    Promise.reject())
                  : (R.delta && r.go(-R.delta, !1), U(f, M, u)),
            )
            .then((f) => {
              ;(f = f || at(M, u, !1)),
                f &&
                  (R.delta && !Ke(f, 8)
                    ? r.go(-R.delta, !1)
                    : R.type === nn.pop && Ke(f, 20) && r.go(-1, !1)),
                Ze(M, u, f)
            })
            .catch(qt)
      }))
  }
  let _t = Ft(),
    oe = Ft(),
    Y
  function U(_, P, R) {
    et(_)
    const M = oe.list()
    return M.length ? M.forEach((X) => X(_, P, R)) : console.error(_), Promise.reject(_)
  }
  function Be() {
    return Y && l.value !== tt
      ? Promise.resolve()
      : new Promise((_, P) => {
          _t.add([_, P])
        })
  }
  function et(_) {
    return Y || ((Y = !_), Ht(), _t.list().forEach(([P, R]) => (_ ? R(_) : P())), _t.reset()), _
  }
  function ze(_, P, R, M) {
    const { scrollBehavior: X } = e
    if (!Et || !X) return Promise.resolve()
    const u =
      (!R && Vc(lr(_.fullPath, 0))) || ((M || !R) && history.state && history.state.scroll) || null
    return to()
      .then(() => X(_, P, u))
      .then((f) => f && Fc(f))
      .catch((f) => U(f, _, P))
  }
  const ge = (_) => r.go(_)
  let yt
  const bt = new Set(),
    on = {
      currentRoute: l,
      listening: !0,
      addRoute: m,
      removeRoute: A,
      clearRoutes: t.clearRoutes,
      hasRoute: V,
      getRoutes: O,
      resolve: H,
      options: e,
      push: T,
      replace: J,
      go: ge,
      back: () => ge(-1),
      forward: () => ge(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: c.add,
      onError: oe.add,
      isReady: Be,
      install(_) {
        const P = this
        _.component('RouterLink', os),
          _.component('RouterView', Yo),
          (_.config.globalProperties.$router = P),
          Object.defineProperty(_.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => Ge(l),
          }),
          Et && !yt && l.value === tt && ((yt = !0), T(r.location).catch((X) => {}))
        const R = {}
        for (const X in tt) Object.defineProperty(R, X, { get: () => l.value[X], enumerable: !0 })
        _.provide(Cs, P), _.provide(Go, Gr(R)), _.provide(rs, l)
        const M = _.unmount
        bt.add(_),
          (_.unmount = function () {
            bt.delete(_),
              bt.size < 1 &&
                ((h = tt), Ie && Ie(), (Ie = null), (l.value = tt), (yt = !1), (Y = !1)),
              M()
          })
      },
    }
  function Se(_) {
    return _.reduce((P, R) => P.then(() => Xe(R)), Promise.resolve())
  }
  return on
}
function gu(e, t) {
  const n = [],
    s = [],
    r = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < o; i++) {
    const c = t.matched[i]
    c && (e.matched.find((h) => Mt(h, c)) ? s.push(c) : n.push(c))
    const l = e.matched[i]
    l && (t.matched.find((h) => Mt(h, l)) || r.push(l))
  }
  return [n, s, r]
}
const mu = { class: 'greetings' },
  vu = { class: 'green' },
  _u = zt({
    __name: 'HelloWorld',
    props: { msg: {} },
    setup(e) {
      return (t, n) => (
        Re(),
        ke('div', mu, [
          N('h1', vu, Mr(t.msg), 1),
          n[0] ||
            (n[0] = N(
              'h3',
              null,
              [
                k(' You’ve successfully created a project with '),
                N('a', { href: 'https://vite.dev/', target: '_blank', rel: 'noopener' }, 'Vite'),
                k(' + '),
                N('a', { href: 'https://vuejs.org/', target: '_blank', rel: 'noopener' }, 'Vue 3'),
                k(". What's next? "),
              ],
              -1,
            )),
        ])
      )
    },
  }),
  ft = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  yu = ft(_u, [['__scopeId', 'data-v-d1bb330e']]),
  bu = { class: 'wrapper' },
  wu = zt({
    __name: 'App',
    setup(e) {
      return (t, n) => (
        Re(),
        ke(
          ve,
          null,
          [
            N('header', null, [
              n[2] ||
                (n[2] = N(
                  'img',
                  { alt: 'Vue logo', class: 'logo', src: hc, width: '125', height: '125' },
                  null,
                  -1,
                )),
              N('div', bu, [
                Q(yu, { msg: 'You did it!' }),
                N('nav', null, [
                  Q(Ge(os), { to: '/' }, { default: ie(() => n[0] || (n[0] = [k('Home')])), _: 1 }),
                  Q(
                    Ge(os),
                    { to: '/about' },
                    { default: ie(() => n[1] || (n[1] = [k('About')])), _: 1 },
                  ),
                ]),
              ]),
            ]),
            Q(Ge(Yo)),
          ],
          64,
        )
      )
    },
  }),
  xu = ft(wu, [['__scopeId', 'data-v-85852c48']]),
  Eu = 'modulepreload',
  Su = function (e) {
    return '/DX3906/' + e
  },
  xr = {},
  Ru = function (t, n, s) {
    let r = Promise.resolve()
    if (n && n.length > 0) {
      document.getElementsByTagName('link')
      const i = document.querySelector('meta[property=csp-nonce]'),
        c = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute('nonce'))
      r = Promise.allSettled(
        n.map((l) => {
          if (((l = Su(l)), l in xr)) return
          xr[l] = !0
          const h = l.endsWith('.css'),
            a = h ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${l}"]${a}`)) return
          const d = document.createElement('link')
          if (
            ((d.rel = h ? 'stylesheet' : Eu),
            h || (d.as = 'script'),
            (d.crossOrigin = ''),
            (d.href = l),
            c && d.setAttribute('nonce', c),
            document.head.appendChild(d),
            h)
          )
            return new Promise((g, m) => {
              d.addEventListener('load', g),
                d.addEventListener('error', () => m(new Error(`Unable to preload CSS for ${l}`)))
            })
        }),
      )
    }
    function o(i) {
      const c = new Event('vite:preloadError', { cancelable: !0 })
      if (((c.payload = i), window.dispatchEvent(c), !c.defaultPrevented)) throw i
    }
    return r.then((i) => {
      for (const c of i || []) c.status === 'rejected' && o(c.reason)
      return t().catch(o)
    })
  },
  Cu = {},
  Pu = { class: 'item' },
  Au = { class: 'details' }
function Ou(e, t) {
  return (
    Re(),
    ke('div', Pu, [
      N('i', null, [Ln(e.$slots, 'icon', {}, void 0)]),
      N('div', Au, [
        N('h3', null, [Ln(e.$slots, 'heading', {}, void 0)]),
        Ln(e.$slots, 'default', {}, void 0),
      ]),
    ])
  )
}
const Dt = ft(Cu, [
    ['render', Ou],
    ['__scopeId', 'data-v-fd0742eb'],
  ]),
  Tu = {},
  Mu = { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '17', fill: 'currentColor' }
function Iu(e, t) {
  return (
    Re(),
    ke(
      'svg',
      Mu,
      t[0] ||
        (t[0] = [
          N(
            'path',
            {
              d: 'M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
const zu = ft(Tu, [['render', Iu]]),
  Hu = {},
  $u = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'aria-hidden': 'true',
    role: 'img',
    class: 'iconify iconify--mdi',
    width: '24',
    height: '24',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 24 24',
  }
function Lu(e, t) {
  return (
    Re(),
    ke(
      'svg',
      $u,
      t[0] ||
        (t[0] = [
          N(
            'path',
            {
              d: 'M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z',
              fill: 'currentColor',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
const ju = ft(Hu, [['render', Lu]]),
  Fu = {},
  Du = { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '20', fill: 'currentColor' }
function Vu(e, t) {
  return (
    Re(),
    ke(
      'svg',
      Du,
      t[0] ||
        (t[0] = [
          N(
            'path',
            {
              d: 'M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
const Nu = ft(Fu, [['render', Vu]]),
  ku = {},
  Bu = { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', fill: 'currentColor' }
function Uu(e, t) {
  return (
    Re(),
    ke(
      'svg',
      Bu,
      t[0] ||
        (t[0] = [
          N(
            'path',
            {
              d: 'M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
const Ku = ft(ku, [['render', Uu]]),
  Wu = {},
  qu = { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', fill: 'currentColor' }
function Gu(e, t) {
  return (
    Re(),
    ke(
      'svg',
      qu,
      t[0] ||
        (t[0] = [
          N(
            'path',
            {
              d: 'M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
const Yu = ft(Wu, [['render', Gu]]),
  Qu = zt({
    __name: 'TheWelcome',
    setup(e) {
      const t = () => fetch('/__open-in-editor?file=README.md')
      return (n, s) => (
        Re(),
        ke(
          ve,
          null,
          [
            Q(Dt, null, {
              icon: ie(() => [Q(zu)]),
              heading: ie(() => s[0] || (s[0] = [k('Documentation')])),
              default: ie(() => [
                s[1] || (s[1] = k(' Vue’s ')),
                s[2] ||
                  (s[2] = N(
                    'a',
                    { href: 'https://vuejs.org/', target: '_blank', rel: 'noopener' },
                    'official documentation',
                    -1,
                  )),
                s[3] || (s[3] = k(' provides you with all information you need to get started. ')),
              ]),
              _: 1,
            }),
            Q(Dt, null, {
              icon: ie(() => [Q(ju)]),
              heading: ie(() => s[4] || (s[4] = [k('Tooling')])),
              default: ie(() => [
                s[6] || (s[6] = k(' This project is served and bundled with ')),
                s[7] ||
                  (s[7] = N(
                    'a',
                    {
                      href: 'https://vite.dev/guide/features.html',
                      target: '_blank',
                      rel: 'noopener',
                    },
                    'Vite',
                    -1,
                  )),
                s[8] || (s[8] = k('. The recommended IDE setup is ')),
                s[9] ||
                  (s[9] = N(
                    'a',
                    { href: 'https://code.visualstudio.com/', target: '_blank', rel: 'noopener' },
                    'VSCode',
                    -1,
                  )),
                s[10] || (s[10] = k(' + ')),
                s[11] ||
                  (s[11] = N(
                    'a',
                    {
                      href: 'https://github.com/johnsoncodehk/volar',
                      target: '_blank',
                      rel: 'noopener',
                    },
                    'Volar',
                    -1,
                  )),
                s[12] ||
                  (s[12] = k('. If you need to test your components and web pages, check out ')),
                s[13] ||
                  (s[13] = N(
                    'a',
                    { href: 'https://vitest.dev/', target: '_blank', rel: 'noopener' },
                    'Vitest',
                    -1,
                  )),
                s[14] || (s[14] = k(' and ')),
                s[15] ||
                  (s[15] = N(
                    'a',
                    { href: 'https://www.cypress.io/', target: '_blank', rel: 'noopener' },
                    'Cypress',
                    -1,
                  )),
                s[16] || (s[16] = k(' / ')),
                s[17] ||
                  (s[17] = N(
                    'a',
                    { href: 'https://playwright.dev/', target: '_blank', rel: 'noopener' },
                    'Playwright',
                    -1,
                  )),
                s[18] || (s[18] = k('. ')),
                s[19] || (s[19] = N('br', null, null, -1)),
                s[20] || (s[20] = k(' More instructions are available in ')),
                N(
                  'a',
                  { href: 'javascript:void(0)', onClick: t },
                  s[5] || (s[5] = [N('code', null, 'README.md', -1)]),
                ),
                s[21] || (s[21] = k('. ')),
              ]),
              _: 1,
            }),
            Q(Dt, null, {
              icon: ie(() => [Q(Nu)]),
              heading: ie(() => s[22] || (s[22] = [k('Ecosystem')])),
              default: ie(() => [
                s[23] || (s[23] = k(' Get official tools and libraries for your project: ')),
                s[24] ||
                  (s[24] = N(
                    'a',
                    { href: 'https://pinia.vuejs.org/', target: '_blank', rel: 'noopener' },
                    'Pinia',
                    -1,
                  )),
                s[25] || (s[25] = k(', ')),
                s[26] ||
                  (s[26] = N(
                    'a',
                    { href: 'https://router.vuejs.org/', target: '_blank', rel: 'noopener' },
                    'Vue Router',
                    -1,
                  )),
                s[27] || (s[27] = k(', ')),
                s[28] ||
                  (s[28] = N(
                    'a',
                    { href: 'https://test-utils.vuejs.org/', target: '_blank', rel: 'noopener' },
                    'Vue Test Utils',
                    -1,
                  )),
                s[29] || (s[29] = k(', and ')),
                s[30] ||
                  (s[30] = N(
                    'a',
                    {
                      href: 'https://github.com/vuejs/devtools',
                      target: '_blank',
                      rel: 'noopener',
                    },
                    'Vue Dev Tools',
                    -1,
                  )),
                s[31] || (s[31] = k('. If you need more resources, we suggest paying ')),
                s[32] ||
                  (s[32] = N(
                    'a',
                    {
                      href: 'https://github.com/vuejs/awesome-vue',
                      target: '_blank',
                      rel: 'noopener',
                    },
                    'Awesome Vue',
                    -1,
                  )),
                s[33] || (s[33] = k(' a visit. ')),
              ]),
              _: 1,
            }),
            Q(Dt, null, {
              icon: ie(() => [Q(Ku)]),
              heading: ie(() => s[34] || (s[34] = [k('Community')])),
              default: ie(() => [
                s[35] || (s[35] = k(' Got stuck? Ask your question on ')),
                s[36] ||
                  (s[36] = N(
                    'a',
                    { href: 'https://chat.vuejs.org', target: '_blank', rel: 'noopener' },
                    'Vue Land',
                    -1,
                  )),
                s[37] || (s[37] = k(' (our official Discord server), or ')),
                s[38] ||
                  (s[38] = N(
                    'a',
                    {
                      href: 'https://stackoverflow.com/questions/tagged/vue.js',
                      target: '_blank',
                      rel: 'noopener',
                    },
                    'StackOverflow',
                    -1,
                  )),
                s[39] || (s[39] = k('. You should also follow the official ')),
                s[40] ||
                  (s[40] = N(
                    'a',
                    {
                      href: 'https://bsky.app/profile/vuejs.org',
                      target: '_blank',
                      rel: 'noopener',
                    },
                    '@vuejs.org',
                    -1,
                  )),
                s[41] || (s[41] = k(' Bluesky account or the ')),
                s[42] ||
                  (s[42] = N(
                    'a',
                    { href: 'https://x.com/vuejs', target: '_blank', rel: 'noopener' },
                    '@vuejs',
                    -1,
                  )),
                s[43] || (s[43] = k(' X account for latest news in the Vue world. ')),
              ]),
              _: 1,
            }),
            Q(Dt, null, {
              icon: ie(() => [Q(Yu)]),
              heading: ie(() => s[44] || (s[44] = [k('Support Vue')])),
              default: ie(() => [
                s[45] ||
                  (s[45] = k(
                    ' As an independent project, Vue relies on community backing for its sustainability. You can help us by ',
                  )),
                s[46] ||
                  (s[46] = N(
                    'a',
                    { href: 'https://vuejs.org/sponsor/', target: '_blank', rel: 'noopener' },
                    'becoming a sponsor',
                    -1,
                  )),
                s[47] || (s[47] = k('. ')),
              ]),
              _: 1,
            }),
          ],
          64,
        )
      )
    },
  }),
  Ju = zt({
    __name: 'HomeView',
    setup(e) {
      return (t, n) => (Re(), ke('main', null, [Q(Qu)]))
    },
  }),
  Xu = pu({
    history: Kc(),
    routes: [
      { path: '/', name: 'home', component: Ju },
      {
        path: '/about',
        name: 'about',
        component: () => Ru(() => import('./AboutView-BkvIdKkt.js'), __vite__mapDeps([0, 1])),
      },
    ],
  }),
  Ps = cc(xu)
Ps.use(dc())
Ps.use(Xu)
Ps.mount('#app')
export { ft as _, N as a, ke as c, Re as o }
