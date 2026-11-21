// Compiles a dart2wasm-generated main module from `source` which can then
// be instantiated via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm module from `bytes` which is then
// instantiable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredModules` is a JS function that takes an array of module names
  //   matching wasm files produced by the dart2wasm compiler. It also takes a
  //   callback that should be invoked for each loaded module with 2 arguments:
  //   (1) the module name, (2) the loaded module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The callback
  //   returns a Promise that resolves when the module is instantiated.
  //   loadDeferredModules should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  // `loadDeferredId` is a JS function that takes load ID produced by the
  //   compiler when the `use-load-ids` option is passed. Each load ID maps to
  //   one or more wasm files as specified in the emitted JSON file. It also
  //   takes a callback that should be invoked for each loaded module with 2
  //   arguments: (1) the module name, (2) the loaded module in a format
  //   supported by `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  //   The callback returns a Promise that resolves when the module is
  //   instantiated.
  //   loadDeferredId should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  async instantiate(additionalImports, {loadDeferredModules, loadDeferredId} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + value;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {
            AB: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      AC: Function.prototype.call.bind(DataView.prototype.setInt16),
      AD: x0 => x0.height,
      AE: (x0,x1) => x0.observe(x1),
      AF: x0 => x0.wheelDeltaY,
      AG: (x0,x1) => x0.go(x1),
      AH: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      AI: (x0,x1) => { x0.onmessage = x1 },
      AJ: x0 => new WeakRef(x0),
      AK: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      AL: (x0,x1,x2,x3) => ({endpoint: x0,token: x1,userId: x2,expiresAt: x3}),
      AM: x0 => globalThis.fetch(x0),
      AN: (x0,x1,x2,x3) => ({rawKind: x0,rawSql: x1,rawParameters: x2,typeInfo: x3}),
      AO: x0 => x0.createSyncAccessHandle(),
      AP: (x0,x1,x2,x3) => x0.createIndex(x1,x2,x3),
      AQ: x0 => globalThis.IDBKeyRange.only(x0),
      AR: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      AS: () => globalThis.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable(),
      AT: (x0,x1) => { x0.height = x1 },
      AU: (x0,x1) => x0.getRandomValues(x1),
      B: s => printToConsole(s),
      BB: b => !!b,
      BC: Function.prototype.call.bind(DataView.prototype.setUint16),
      BD: x0 => x0.width,
      BE: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      BF: x0 => x0.wheelDeltaX,
      BG: x0 => x0.parentElement,
      BH: x0 => x0.readText(),
      BI: x0 => x0.payload,
      BJ: x0 => x0.deref(),
      BK: x0 => ({type: x0}),
      BL: x0 => x0.lockName,
      BM: x0 => x0.arrayBuffer(),
      BN: (x0,x1) => ({rawKind: x0,name: x1}),
      BO: x0 => ({mode: x0}),
      BP: x0 => x0.oldVersion,
      BQ: (x0,x1) => x0.getKey(x1),
      BR: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      BS: (x0,x1) => ({type: x0,id: x1}),
      BT: (x0,x1) => { x0.width = x1 },
      BU: (x0,x1,x2,x3) => x0.encrypt(x1,x2,x3),
      C: Function.prototype.call.bind(Number.prototype.toString),
      CB: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      CC: Function.prototype.call.bind(DataView.prototype.setUint8),
      CD: x0 => x0.screen,
      CE: x0 => new ResizeObserver(x0),
      CF: x0 => x0.key,
      CG: (x0,x1) => x0.querySelectorAll(x1),
      CH: x0 => x0.clipboard,
      CI: x0 => x0.reply,
      CJ: () => globalThis.WeakRef,
      CK: (x0,x1) => new Blob(x0,x1),
      CL: (x0,x1,x2) => ({i: x0,d: x1,t: x2}),
      CM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      CN: x0 => ({useMultipleCiphersVfs: x0}),
      CO: x0 => ({create: x0}),
      CP: () => globalThis.indexedDB,
      CQ: (x0,x1) => x0.put(x1),
      CR: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      CS: (x0,x1,x2,x3) => ({challenge: x0,timeout: x1,allowCredentials: x2,userVerification: x3}),
      CT: x0 => x0.height,
      CU: x0 => x0.sessionStorage,
      D: Function.prototype.call.bind(BigInt.prototype.toString),
      DB: (x0,x1) => x0.focus(x1),
      DC: Function.prototype.call.bind(DataView.prototype.setInt8),
      DD: o => {
        if (o === null || o === undefined) return 0;
        if (typeof(o) === 'string') return 1;
        return 2;
      },
      DE: (x0,x1) => x0.getPropertyValue(x1),
      DF: x0 => x0.identifier,
      DG: (x0,x1) => x0.requestAnimationFrame(x1),
      DH: (x0,x1) => x0.writeText(x1),
      DI: x0 => x0.id,
      DJ: (a, i) => a.splice(i, 1),
      DK: x0 => globalThis.URL.createObjectURL(x0),
      DL: x0 => x0.requestId,
      DM: (x0,x1,x2) => x0.addEventListener(x1,x2),
      DN: (x0,x1,x2,x3) => ({a: x0,i: x1,d: x2,t: x3}),
      DO: (x0,x1,x2) => x0.getFileHandle(x1,x2),
      DP: (x0,x1) => new URL(x0,x1),
      DQ: x0 => x0.flush(),
      DR: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2,x3,x4) { return wasmFunction(f,arguments.length,x0,x1,x2,x3,x4) }),
      DS: x0 => ({publicKey: x0}),
      DT: x0 => x0.width,
      DU: x0 => x0.subtle,
      E: (exn) => {
        let stackString = exn.toString();
        let frames = stackString.split('\n');
        let drop = 4;
        if (frames[0].startsWith('Error')) {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      EB: () => ({}),
      EC: Function.prototype.call.bind(DataView.prototype.getInt8),
      ED: x0 => x0.tabIndex,
      EE: x0 => globalThis.parseFloat(x0),
      EF: x0 => x0.touches,
      EG: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      EH: x0 => x0.unlock(),
      EI: x0 => x0.action,
      EJ: a => a.pop(),
      EK: (x0,x1) => x0.append(x1),
      EL: x0 => x0.errorMessage,
      EM: x0 => x0.state,
      EN: x0 => x0.d,
      EO: x0 => x0.d,
      EP: x0 => x0.pathname,
      EQ: (x0,x1) => x0.read(x1),
      ER: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return wasmFunction(f,arguments.length,x0,x1,x2,x3) }),
      ES: (x0,x1) => x0.get(x1),
      ET: (x0,x1) => { x0.src = x1 },
      EU: (x0,x1,x2,x3,x4,x5,x6,x7) => x0.unwrapKey(x1,x2,x3,x4,x5,x6,x7),
      F: () => new Error().stack,
      FB: (o, p, v) => o[p] = v,
      FC: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      FD: (x0,x1) => x0.contains(x1),
      FE: (x0,x1) => x0.getComputedStyle(x1),
      FF: x0 => x0.pressure,
      FG: x0 => x0.now(),
      FH: (x0,x1) => x0.lock(x1),
      FI: x0 => x0.data,
      FJ: (x0,x1,x2) => x0.insertBefore(x1,x2),
      FK: x0 => x0.click(),
      FL: x0 => x0.recognizedType,
      FM: x0 => x0.state,
      FN: (x0,x1,x2,x3) => ({a: x0,i: x1,d: x2,t: x3}),
      FO: (x0,x1) => x0.dart_sqlite3_unregister_vfs(x1),
      FP: x0 => x0.a,
      FQ: (x0,x1,x2) => x0.read(x1,x2),
      FR: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return wasmFunction(f,arguments.length,x0,x1,x2,x3) }),
      FS: x0 => x0.credentials,
      FT: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      FU: (x0,x1,x2,x3,x4,x5) => x0.importKey(x1,x2,x3,x4,x5),
      G: s => JSON.stringify(s),
      GB: () => [],
      GC: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      GD: x0 => x0.activeElement,
      GE: x0 => x0.documentElement,
      GF: x0 => x0.tiltY,
      GG: x0 => x0.performance,
      GH: x0 => x0.orientation,
      GI: x0 => x0.serviceWorker,
      GJ: x0 => x0.id,
      GK: x0 => x0.remove(),
      GL: x0 => x0.payload,
      GM: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      GN: (x0,x1,x2,x3) => ({a: x0,i: x1,d: x2,t: x3}),
      GO: (x0,x1) => x0.unregister(x1),
      GP: x0 => x0.d,
      GQ: x0 => x0.f,
      GR: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return wasmFunction(f,arguments.length,x0,x1,x2,x3) }),
      GS: x0 => ({name: x0}),
      GT: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      GU: (x0,x1,x2,x3) => x0.generateKey(x1,x2,x3),
      H: Function.prototype.call.bind(Number.prototype.toString),
      HB: (a, i) => a.push(i),
      HC: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      HD: x0 => x0.parentNode,
      HE: x0 => x0.computedStyleMap(),
      HF: x0 => x0.tiltX,
      HG: (d, digits) => d.toFixed(digits),
      HH: (x0,x1) => x0.querySelector(x1),
      HI: x0 => x0.navigator,
      HJ: x0 => x0.offsetHeight,
      HK: x0 => globalThis.URL.revokeObjectURL(x0),
      HL: x0 => x0.requestId,
      HM: x0 => x0.location,
      HN: x0 => x0.r,
      HO: (x0,x1) => x0.sqlite3_finalize(x1),
      HP: (x0,x1) => ({d: x0,t: x1}),
      HQ: x0 => x0.f,
      HR: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      HS: (x0,x1,x2) => ({name: x0,id: x1,displayName: x2}),
      HT: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      HU: (x0,x1,x2,x3,x4) => x0.wrapKey(x1,x2,x3,x4),
      I: Function.prototype.call.bind(String.prototype.indexOf),
      IB: x0 => new Int8Array(x0),
      IC: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      ID: x0 => x0.tagName,
      IE: (x0,x1) => x0.get(x1),
      IF: x0 => x0.pointerType,
      IG: x0 => x0.maxHeight,
      IH: (x0,x1) => { x0.title = x1 },
      II: () => globalThis.window,
      IJ: x0 => x0.offsetWidth,
      IK: x0 => x0.body,
      IL: x0 => x0.i,
      IM: (x0,x1,x2) => globalThis.crypto.subtle.decrypt(x0,x1,x2),
      IN: x0 => x0.u,
      IO: (x0,x1) => x0.sqlite3_reset(x1),
      IP: (x0,x1,x2) => x0.dart_sqlite3_rollbacks(x1,x2),
      IQ: x0 => x0.b,
      IR: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      IS: (x0,x1) => ({type: x0,alg: x1}),
      IT: (x0,x1) => { x0.onerror = x1 },
      IU: (x0,x1,x2) => x0.exportKey(x1,x2),
      J: (s, p, i) => s.lastIndexOf(p, i),
      JB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      JC: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      JD: x0 => x0.target,
      JE: (o, p) => p in o,
      JF: x0 => x0.pointerId,
      JG: x0 => x0.maxWidth,
      JH: (x0,x1) => x0.vibrate(x1),
      JI: (map, o, v) => map.set(o, v),
      JJ: x0 => x0.stopPropagation(),
      JK: () => globalThis.document,
      JL: x0 => x0.r,
      JM: (x0,x1,x2) => ({i: x0,d: x1,t: x2}),
      JN: x0 => x0.k,
      JO: (x0,x1) => ({d: x0,t: x1}),
      JP: (x0,x1,x2,x3,x4) => ({k: x0,u: x1,r: x2,d: x3,t: x4}),
      JQ: x0 => x0.a,
      JR: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2,x3,x4) { return wasmFunction(f,arguments.length,x0,x1,x2,x3,x4) }),
      JS: (x0,x1,x2) => ({authenticatorAttachment: x0,residentKey: x1,userVerification: x2}),
      JT: (x0,x1) => { x0.oncancel = x1 },
      JU: x0 => x0.crypto,
      K: o => o,
      KB: x0 => new Uint8Array(x0),
      KC: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      KD: x0 => x0.clientY,
      KE: (x0,x1) => { x0.textContent = x1 },
      KF: x0 => x0.getCoalescedEvents(),
      KG: x0 => x0.minHeight,
      KH: x0 => x0.arrayBuffer(),
      KI: () => new WeakMap(),
      KJ: x0 => x0.disabled,
      KK: (x0,x1) => { x0.download = x1 },
      KL: x0 => x0.r,
      KM: (x0,x1,x2) => x0.showNotification(x1,x2),
      KN: (x0,x1,x2,x3,x4,x5,x6,x7) => ({u: x0,d: x1,s: x2,o: x3,a: x4,c: x5,i: x6,t: x7}),
      KO: (x0,x1,x2) => x0.dart_sqlite3_commits(x1,x2),
      KP: (x0,x1,x2) => ({r: x0,i: x1,t: x2}),
      KQ: (x0,x1) => x0.postMessage(x1),
      KR: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      KS: (x0,x1,x2,x3,x4,x5,x6) => ({rp: x0,user: x1,challenge: x2,pubKeyCredParams: x3,timeout: x4,authenticatorSelection: x5,attestation: x6}),
      KT: (x0,x1) => { x0.onchange = x1 },
      KU: x0 => x0.isSecureContext,
      L: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'number') return 1;
        return 2;
      },
      LB: x0 => new Uint8ClampedArray(x0),
      LC: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      LD: x0 => x0.clientX,
      LE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      LF: (x0,x1) => x0.getModifierState(x1),
      LG: x0 => x0.minWidth,
      LH: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof ArrayBuffer) return 1;
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
          return 2;
        }
        return 3;
      },
      LI: (x0,x1,x2,x3) => ({z: x0,i: x1,d: x2,t: x3}),
      LJ: (x0,x1) => { x0.min = x1 },
      LK: (x0,x1) => { x0.href = x1 },
      LL: x0 => x0.i,
      LM: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12) => ({dir: x0,lang: x1,body: x2,tag: x3,image: x4,icon: x5,badge: x6,timestamp: x7,renotify: x8,silent: x9,requireInteraction: x10,data: x11,actions: x12}),
      LN: x0 => x0.aborted,
      LO: x0 => x0.getSize(),
      LP: x0 => x0.z,
      LQ: (x0,x1) => ({a: x0,b: x1}),
      LR: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      LS: x0 => ({publicKey: x0}),
      LT: x0 => x0.lastModified,
      LU: (x0,x1,x2,x3) => x0.decrypt(x1,x2,x3),
      M: x0 => x0.index,
      MB: x0 => new Int16Array(x0),
      MC: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      MD: (x0,x1,x2) => x0.setAttribute(x1,x2),
      ME: x0 => x0.matches,
      MF: s => s.trimLeft(),
      MG: (x0,x1) => x0.removeProperty(x1),
      MH: x0 => x0.status,
      MI: x0 => x0.r,
      MJ: (x0,x1) => { x0.max = x1 },
      MK: (x0,x1) => x0.createElement(x1),
      ML: x0 => x0.r,
      MM: x0 => x0.active,
      MN: x0 => ({steal: x0}),
      MO: (x0,x1) => x0.truncate(x1),
      MP: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      MQ: x0 => new BroadcastChannel(x0),
      MR: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2) { return wasmFunction(f,arguments.length,x0,x1,x2) }),
      MS: (x0,x1) => x0.create(x1),
      MT: x0 => x0.name,
      MU: (x0,x1,x2,x3,x4) => x0.clearRect(x1,x2,x3,x4),
      N: o => String(o),
      NB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      NC: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      ND: x0 => x0.getBoundingClientRect(),
      NE: (x0,x1) => x0.matchMedia(x1),
      NF: s => s.toUpperCase(),
      NG: (x0,x1) => x0.add(x1),
      NH: (x0,x1) => x0.fetch(x1),
      NI: x0 => x0.e,
      NJ: (x0,x1) => { x0.disabled = x1 },
      NK: (x0,x1) => x0.share(x1),
      NL: x0 => x0.req,
      NM: () => globalThis.Notification.permission,
      NN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      NO: x0 => ({at: x0}),
      NP: (x0,x1) => { x0.onabort = x1 },
      NQ: x0 => x0.name,
      NR: () => globalThis.WebAssembly,
      NS: x0 => x0.rawId,
      NT: (x0,x1) => x0.item(x1),
      NU: x0 => x0.close(),
      O: o => o === undefined,
      OB: x0 => new Uint16Array(x0),
      OC: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      OD: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      OE: x0 => x0.matches,
      OF: x0 => x0.pop(),
      OG: x0 => x0.data,
      OH: x0 => x0.content,
      OI: x0 => globalThis.Number(x0),
      OJ: (x0,x1) => { x0.scrollLeft = x1 },
      OK: x0 => x0.name,
      OL: x0 => x0.requestId,
      OM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ON: x0 => x0.close(),
      OO: (x0,x1) => x0.write(x1),
      OP: (x0,x1,x2,x3,x4,x5,x6,x7) => ({c: x0,n: x1,v: x2,r: x3,x: x4,y: x5,i: x6,t: x7}),
      OQ: x0 => x0.parameterTypes,
      OR: x0 => x0.href,
      OS: (x0,x1) => x0.transferFromImageBitmap(x1),
      OT: x0 => x0.length,
      OU: (x0,x1,x2) => x0.toDataURL(x1,x2),
      P: (x0,x1) => x0.exec(x1),
      PB: x0 => new Int32Array(x0),
      PC: (x0,x1) => x0.querySelector(x1),
      PD: s => new Date(s * 1000).getTimezoneOffset() * 60,
      PE: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      PF: x0 => x0.flags,
      PG: (x0,x1) => { x0.scrollTop = x1 },
      PH: x0 => x0.document,
      PI: x0 => x0.r,
      PJ: (x0,x1) => { x0.spellcheck = x1 },
      PK: x0 => ({type: x0}),
      PL: x0 => x0.requestId,
      PM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      PN: (x0,x1) => { x0.signal = x1 },
      PO: (x0,x1,x2) => x0.write(x1,x2),
      PP: (x0,x1) => x0.sqlite3_step(x1),
      PQ: x0 => x0.parameters,
      PR: x0 => x0.u,
      PS: (x0,x1) => x0.getContext(x1),
      PT: x0 => x0.files,
      PU: x0 => x0.height,
      Q: (x0,x1) => { x0.lastIndex = x1 },
      QB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      QC: (x0,x1) => x0.item(x1),
      QD: Date.now,
      QE: f => f.dartFunction,
      QF: (a, s) => a.join(s),
      QG: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      QH: () => typeof dartUseDateNowForTicks !== "undefined",
      QI: x0 => x0.s,
      QJ: (x0,x1) => { x0.disabled = x1 },
      QK: (x0,x1,x2) => new File(x0,x1,x2),
      QL: (x0,x1) => ({requestId: x0,payload: x1}),
      QM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QN: () => globalThis.navigator,
      QO: (x0,x1,x2) => x0.dart_sqlite3_updates(x1,x2),
      QP: (x0,x1,x2) => x0.sqlite3_bind_null(x1,x2),
      QQ: x0 => x0.parameters,
      QR: (x0,x1) => ({port: x0,lockName: x1}),
      QS: (x0,x1) => { x0.height = x1 },
      QT: x0 => x0.target,
      QU: x0 => x0.width,
      R: o => o,
      RB: x0 => new Uint32Array(x0),
      RC: x0 => x0.length,
      RD: (handle) => clearTimeout(handle),
      RE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      RF: (x0,x1) => x0.error(x1),
      RG: (x0,x1) => { x0.value = x1 },
      RH: () => Date.now(),
      RI: x0 => x0.t,
      RJ: (map, o) => map.get(o),
      RK: x0 => ({files: x0}),
      RL: (x0,x1,x2) => ({requestId: x0,recognizedType: x1,errorMessage: x2}),
      RM: (x0,x1,x2,x3) => x0.slice(x1,x2,x3),
      RN: x0 => x0.error,
      RO: x0 => x0.close(),
      RP: (x0,x1,x2,x3,x4) => x0.dart_sqlite3_bind_blob(x1,x2,x3,x4),
      RQ: x0 => x0.rawSql,
      RR: () => new EventTarget(),
      RS: (x0,x1) => { x0.width = x1 },
      RT: (x0,x1) => x0.replaceChildren(x1),
      RU: (x0,x1) => x0.createImageBitmap(x1),
      S: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      SB: x0 => new Float32Array(x0),
      SC: (x0,x1) => x0.querySelectorAll(x1),
      SD: (x0,x1) => x0.closest(x1),
      SE: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      SF: () => globalThis.console,
      SG: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      SH: () => 1000 * performance.now(),
      SI: (x0,x1) => ({i: x0,t: x1}),
      SJ: (x0,x1) => x0.revokeObjectURL(x1),
      SK: (x0,x1) => x0.canShare(x1),
      SL: x0 => x0.payload,
      SM: x0 => x0.type,
      SN: x0 => x0.i,
      SO: x0 => x0.buffer,
      SP: (x0,x1,x2,x3,x4) => x0.dart_sqlite3_bind_text(x1,x2,x3,x4),
      SQ: x0 => x0.requireTransaction,
      SR: x0 => ({data: x0}),
      SS: x0 => x0.height,
      ST: (x0,x1,x2) => x0.setAttribute(x1,x2),
      SU: (x0,x1) => x0.removeChild(x1),
      T: o => o instanceof RegExp,
      TB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      TC: (x0,x1) => x0.getAttribute(x1),
      TD: x0 => x0.bottom,
      TE: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      TF: s => s.trimRight(),
      TG: (x0,x1) => { x0.value = x1 },
      TH: x0 => new Uint8Array(x0),
      TI: (x0,x1,x2) => x0.postMessage(x1,x2),
      TJ: (x0,x1) => { x0.src = x1 },
      TK: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      TL: x0 => x0.type,
      TM: x0 => x0.size,
      TN: (x0,x1) => x0.error(x1),
      TO: (x0,x1) => x0.sqlite3_errstr(x1),
      TP: (x0,x1,x2,x3) => x0.sqlite3_bind_double(x1,x2,x3),
      TQ: x0 => x0.z,
      TR: (x0,x1) => new MessageEvent(x0,x1),
      TS: x0 => x0.width,
      TT: (x0,x1) => { x0.accept = x1 },
      TU: x0 => x0.firstChild,
      U: (string, times) => string.repeat(times),
      UB: x0 => new Float64Array(x0),
      UC: x0 => x0.remove(),
      UD: x0 => x0.top,
      UE: (o, i) => o[i],
      UF: x0 => x0.blur(),
      UG: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      UH: (x0,x1,x2) => x0.slice(x1,x2),
      UI: () => new Array(),
      UJ: (x0,x1,x2,x3,x4) => globalThis.createImageBitmap(x0,x1,x2,x3,x4),
      UK: x0 => new FinalizationRegistry(x0),
      UL: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      UM: x0 => x0.blob(),
      UN: (x0,x1,x2,x3,x4) => ({e: x0,s: x1,r: x2,i: x3,t: x4}),
      UO: (x0,x1) => x0.sqlite3_errmsg(x1),
      UP: (x0,x1,x2,x3) => x0.sqlite3_bind_int64(x1,x2,x3),
      UQ: x0 => x0.o,
      UR: x0 => ({name: x0}),
      US: x0 => x0.rasterEndMilliseconds,
      UT: (x0,x1) => { x0.multiple = x1 },
      UU: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      V: o => o,
      VB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      VC: (x0,x1) => x0.appendChild(x1),
      VD: x0 => x0.right,
      VE: o => o.length,
      VF: x0 => x0.button,
      VG: x0 => x0.value,
      VH: (x0,x1) => x0.decode(x1),
      VI: (x0,x1) => x0.push(x1),
      VJ: x0 => x0.naturalHeight,
      VK: () => globalThis.FinalizationRegistry,
      VL: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      VM: (x0,x1,x2) => x0.slice(x1,x2),
      VN: () => globalThis.console,
      VO: (x0,x1) => x0.sqlite3_error_offset(x1),
      VP: (x0,x1) => x0.sqlite3_bind_parameter_count(x1),
      VQ: x0 => x0.a,
      VR: (x0,x1) => new Worker(x0,x1),
      VS: x0 => x0.rasterStartMilliseconds,
      VT: (x0,x1) => { x0.type = x1 },
      VU: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      W: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'boolean') return 1;
        return 2;
      },
      WB: x0 => new ArrayBuffer(x0),
      WC: (x0,x1) => x0.append(x1),
      WD: x0 => x0.left,
      WE: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        // Feature check for `SharedArrayBuffer` before doing a type-check.
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
            return 17;
        }
        if (o instanceof Promise) return 18;
        return 19;
      },
      WF: x0 => x0.innerHeight,
      WG: x0 => x0.selectionDirection,
      WH: (x0,x1) => x0.adoptText(x1),
      WI: x0 => x0.v,
      WJ: x0 => x0.naturalWidth,
      WK: x0 => x0.abort(),
      WL: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
      WM: x0 => x0.arrayBuffer(),
      WN: (x0,x1,x2) => ({r: x0,i: x1,t: x2}),
      WO: (x0,x1) => x0.sqlite3_extended_errcode(x1),
      WP: (x0,x1) => x0.sqlite3_stmt_isexplain(x1),
      WQ: x0 => x0.c,
      WR: (x0,x1,x2) => x0.postMessage(x1,x2),
      WS: x0 => x0.imageBitmaps,
      WT: (x0,x1) => x0.getAttribute(x1),
      WU: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      X: x0 => x0.dotAll,
      XB: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      XC: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      XD: x0 => x0.clientY,
      XE: x0 => x0.language,
      XF: x0 => x0.innerWidth,
      XG: x0 => x0.selectionStart,
      XH: x0 => x0.first(),
      XI: x0 => x0.r,
      XJ: x0 => x0.decode(),
      XK: (x0,x1,x2,x3,x4,x5) => ({method: x0,headers: x1,body: x2,credentials: x3,redirect: x4,signal: x5}),
      XL: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      XM: (x0,x1,x2) => x0.open(x1,x2),
      XN: x0 => x0.rawSql,
      XO: (x0,x1) => x0.sqlite3_close_v2(x1),
      XP: (x0,x1,x2,x3,x4,x5,x6) => x0.sqlite3_prepare_v3(x1,x2,x3,x4,x5,x6),
      XQ: x0 => x0.s,
      XR: (x0,x1,x2) => ({d: x0,i: x1,t: x2}),
      XS: x0 => x0.canvasKitMaximumSurfaces,
      XT: (x0,x1) => x0.debug(x1),
      XU: x0 => x0.parentNode,
      Y: x0 => x0.unicode,
      YB: (x0,x1,x2) => new DataView(x0,x1,x2),
      YC: x0 => x0.style,
      YD: x0 => x0.clientX,
      YE: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      YF: x0 => x0.height,
      YG: x0 => x0.selectionEnd,
      YH: x0 => x0.next(),
      YI: () => globalThis.ArrayBuffer,
      YJ: (x0,x1) => { x0.decoding = x1 },
      YK: (x0,x1) => globalThis.fetch(x0,x1),
      YL: (x0,x1) => ({requestId: x0,content: x1}),
      YM: (x0,x1,x2) => x0.transaction(x1,x2),
      YN: x0 => x0.rawParameters,
      YO: (x0,x1,x2) => x0.sqlite3_extended_result_codes(x1,x2),
      YP: (x0,x1,x2,x3,x4,x5) => x0.sqlite3_exec(x1,x2,x3,x4,x5),
      YQ: x0 => x0.d,
      YR: (x0,x1,x2) => ({d: x0,i: x1,t: x2}),
      YS: x0 => x0.hostElement,
      YT: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      YU: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      Z: x0 => x0.ignoreCase,
      ZB: (o, p) => o[p],
      ZC: x0 => x0.debugShowSemanticsNodes,
      ZD: x0 => x0.changedTouches,
      ZE: () => globalThis.window.FinalizationRegistry,
      ZF: x0 => x0.width,
      ZG: x0 => x0.value,
      ZH: x0 => x0.current(),
      ZI: x0 => x0.v,
      ZJ: (x0,x1) => { x0.crossOrigin = x1 },
      ZK: (x0,x1) => x0.get(x1),
      ZL: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13) => ({databaseName: x0,crudThrottleTimeMs: x1,requestId: x2,retryDelayMs: x3,schemaJson: x4,lockName: x5,syncParamsEncoded: x6,subscriptions: x7,appMetadataEncoded: x8,customHttpClient: x9,checkpointModeRequestsDelay: x10,diagnostics: x11,hasAuthenticator: x12,hasUploader: x13}),
      ZM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ZN: x0 => x0.rawKind,
      ZO: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      ZP: (x0,x1) => { x0.y = x1 },
      ZQ: (x0,x1) => globalThis.fetch(x0,x1),
      ZR: (x0,x1) => x0.getItem(x1),
      ZS: x0 => x0.location,
      ZT: x0 => ({createScriptURL: x0}),
      ZU: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      a: x0 => x0.multiline,
      aB: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      aC: (x0,x1) => x0.warn(x1),
      aD: x0 => x0.offsetY,
      aE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aF: x0 => x0.clientHeight,
      aG: x0 => x0.selectionDirection,
      aH: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      aI: x0 => x0.b,
      aJ: (x0,x1) => x0.createObjectURL(x1),
      aK: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2) { return wasmFunction(f,arguments.length,x0,x1,x2) }),
      aL: x0 => x0.randomUUID(),
      aM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aN: x0 => x0.r,
      aO: (x0,x1) => x0.dart_sqlite3_free(x1),
      aP: (x0,x1) => x0.sqlite3_last_insert_rowid(x1),
      aQ: (x0,x1) => x0.sqlite3session_delete(x1),
      aR: x0 => x0.localStorage,
      aS: (x0,x1) => x0.getModifierState(x1),
      aT: (x0,x1,x2) => x0.createPolicy(x1,x2),
      aU: (x0,x1) => { x0.draggable = x1 },
      b: (exn) => {
        if (exn instanceof Error) {
          return exn.stack;
        } else {
          return null;
        }
      },
      bB: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      bC: x0 => x0.console,
      bD: x0 => x0.offsetX,
      bE: x0 => new window.FinalizationRegistry(x0),
      bF: x0 => x0.clientWidth,
      bG: x0 => x0.selectionStart,
      bH: x0 => x0.v8BreakIterator,
      bI: x0 => x0.port,
      bJ: x0 => x0.URL,
      bK: (x0,x1) => x0.forEach(x1),
      bL: x0 => x0.port,
      bM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      bN: x0 => x0.i,
      bO: (x0,x1,x2,x3,x4) => x0.sqlite3_open_v2(x1,x2,x3,x4),
      bP: (x0,x1) => { x0.x = x1 },
      bQ: (x0,x1) => x0.sqlite3changeset_finalize(x1),
      bR: x0 => x0.href,
      bS: x0 => x0.metaKey,
      bT: (x0,x1) => x0.createScriptURL(x1),
      bU: x0 => x0.length,
      c: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      cB: o => o.byteOffset,
      cC: () => globalThis.window,
      cD: x0 => x0.type,
      cE: (x0,x1) => x0.unregister(x1),
      cF: (x0,x1) => { x0.content = x1 },
      cG: x0 => x0.selectionEnd,
      cH: () => globalThis.Intl,
      cI: x0 => x0.r,
      cJ: x0 => new Blob(x0),
      cK: x0 => x0.statusText,
      cL: x0 => x0.port2,
      cM: (x0,x1) => x0.objectStore(x1),
      cN: x0 => x0.i,
      cO: (x0,x1) => x0.dart_sqlite3_malloc(x1),
      cP: (x0,x1) => { x0.i = x1 },
      cQ: x0 => x0.exports,
      cR: (x0,x1) => x0.removeItem(x1),
      cS: x0 => x0.altKey,
      cT: (x0,x1) => x0.appendChild(x1),
      cU: x0 => x0.getReader(),
      d: (x0,x1) => x0.didCreateEngineInitializer(x1),
      dB: o => o.buffer,
      dC: (o, c) => o instanceof c,
      dD: x0 => x0.maxTouchPoints,
      dE: (x0,x1) => x0.contains(x1),
      dF: (x0,x1) => { x0.name = x1 },
      dG: x0 => x0.keyCode,
      dH: (x0,x1) => x0.segment(x1),
      dI: (x0,x1) => { x0.i = x1 },
      dJ: x0 => x0.close(),
      dK: x0 => x0.url,
      dL: x0 => x0.port1,
      dM: (x0,x1) => { x0.onabort = x1 },
      dN: (o, a) => o == a,
      dO: x0 => x0.sqlite3_initialize(),
      dP: x0 => globalThis.Number(x0),
      dQ: x0 => x0.call(),
      dR: (x0,x1,x2) => x0.setItem(x1,x2),
      dS: x0 => x0.ctrlKey,
      dT: x0 => x0.head,
      dU: x0 => x0.value,
      e: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      eB: Function.prototype.call.bind(DataView.prototype.getUint8),
      eC: (x0,x1) => x0[x1],
      eD: x0 => x0.platform,
      eE: (s) => +s,
      eF: x0 => x0.head,
      eG: (x0,x1) => x0.scrollIntoView(x1),
      eH: x0 => x0.index,
      eI: (x0,x1,x2) => ({i: x0,d: x1,t: x2}),
      eJ: (x0,x1) => ({frameIndex: x0,completeFramesOnly: x1}),
      eK: x0 => x0.status,
      eL: (x0,x1) => x0.go(x1),
      eM: x0 => x0.message,
      eN: (x0,x1,x2,x3) => ({r: x0,i: x1,d: x2,t: x3}),
      eO: x0 => x0.useMultipleCiphersVfs,
      eP: x0 => globalThis.Number.isSafeInteger(x0),
      eQ: x0 => x0.instance,
      eR: (x0,x1) => new WebSocket(x0,x1),
      eS: x0 => x0.isComposing,
      eT: (x0,x1) => { x0.nonce = x1 },
      eU: x0 => x0.done,
      f: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      fB: (b, o) => new DataView(b, o),
      fC: x0 => x0.length,
      fD: x0 => x0.body,
      fE: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      fF: (x0,x1) => x0.removeChild(x1),
      fG: x0 => x0.multiViewEnabled,
      fH: x0 => x0.next(),
      fI: () => new AbortController(),
      fJ: (x0,x1) => x0.decode(x1),
      fK: x0 => x0.getReader(),
      fL: x0 => x0.history,
      fM: x0 => x0.error,
      fN: (x0,x1) => x0.postMessage(x1),
      fO: (x0,x1,x2,x3) => x0.dart_sqlite3_register_vfs(x1,x2,x3),
      fP: (x0,x1,x2) => x0.setUint8(x1,x2),
      fQ: (x0,x1,x2) => x0.instantiateStreaming(x1,x2),
      fR: x0 => x0.reason,
      fS: x0 => x0.code,
      fT: (x0,x1) => x0.querySelectorAll(x1),
      fU: x0 => x0.read(),
      g: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      gB: (b, o, l) => new DataView(b, o, l),
      gC: (string, token) => string.split(token),
      gD: () => globalThis.document,
      gE: s => s.trim(),
      gF: x0 => x0.firstChild,
      gG: (x0,x1) => x0.replaceWith(x1),
      gH: x0 => x0.value,
      gI: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      gJ: x0 => x0.displayHeight,
      gK: x0 => x0.read(),
      gL: (x0,x1,x2) => x0.pushState(x1,x2),
      gM: (x0,x1) => { x0.onerror = x1 },
      gN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      gO: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      gP: (x0,x1) => x0.transfer(x1),
      gQ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      gR: x0 => x0.code,
      gS: x0 => x0.repeat,
      gT: (x0,x1) => x0.item(x1),
      gU: x0 => x0.body,
      h: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      hB: Function.prototype.call.bind(DataView.prototype.getFloat64),
      hC: o => o instanceof Array,
      hD: (x0,x1,x2) => x0.addEventListener(x1,x2),
      hE: x0 => x0.classList,
      hF: x0 => x0.viewConstraints,
      hG: (x0,x1) => { x0.type = x1 },
      hH: x0 => x0.done,
      hI: (x0,x1,x2,x3) => x0.request(x1,x2,x3),
      hJ: x0 => x0.displayWidth,
      hK: x0 => x0.value,
      hL: (x0,x1,x2,x3) => ({name: x0,iv: x1,additionalData: x2,tagLength: x3}),
      hM: (x0,x1) => { x0.oncomplete = x1 },
      hN: x0 => x0.close(),
      hO: () => globalThis.Promise.resolve(),
      hP: (x0,x1,x2) => x0.slice(x1,x2),
      hQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      hR: (x0,x1,x2) => x0.close(x1,x2),
      hS: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      hT: x0 => x0.nonce,
      hU: (x0,x1) => new OffscreenCanvas(x0,x1),
      i: x0 => new Promise(x0),
      iB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      iC: (a, i) => a[i],
      iD: x0 => x0.hasFocus(),
      iE: x0 => x0.preventDefault(),
      iF: x0 => x0.hostElement,
      iG: (x0,x1) => { x0.className = x1 },
      iH: (o, m, a) => o[m].apply(o, a),
      iI: x0 => x0.locks,
      iJ: x0 => x0.duration,
      iK: x0 => x0.done,
      iL: (x0,x1,x2) => globalThis.crypto.subtle.encrypt(x0,x1,x2),
      iM: (x0,x1,x2) => x0.open(x1,x2),
      iN: x0 => x0.abort(),
      iO: (x0,x1) => x0.then(x1),
      iP: (x0,x1,x2) => x0.sqlite3_column_name(x1,x2),
      iQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2,x3,x4) { return wasmFunction(f,arguments.length,x0,x1,x2,x3,x4) }),
      iR: (x0,x1) => x0.close(x1),
      iS: x0 => x0.userAgent,
      iT: x0 => x0.length,
      iU: x0 => x0.assetBase,
      j: (x0,x1,x2) => x0.call(x1,x2),
      jB: Function.prototype.call.bind(DataView.prototype.setFloat64),
      jC: a => a.length,
      jD: x0 => x0.relatedTarget,
      jE: x0 => x0.parent,
      jF: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      jG: (x0,x1) => { x0.tabIndex = x1 },
      jH: x0 => x0.iterator,
      jI: (o, p, v) => o[p] = v,
      jJ: x0 => x0.image,
      jK: x0 => x0.cancel(),
      jL: (x0,x1,x2,x3,x4) => globalThis.crypto.subtle.importKey(x0,x1,x2,x3,x4),
      jM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      jN: x0 => x0.transaction,
      jO: x0 => x0.commit(),
      jP: (x0,x1,x2) => x0.sqlite3_column_blob(x1,x2),
      jQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2) { return wasmFunction(f,arguments.length,x0,x1,x2) }),
      jR: x0 => x0.close(),
      jS: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      jT: x0 => x0.document,
      jU: x0 => x0.loader,
      k: (constructor, args) => {
        const factoryFunction = constructor.bind.apply(
            constructor, [null, ...args]);
        return new factoryFunction();
      },
      kB: (t, s) => t.set(s),
      kC: (x0,x1) => x0.test(x1),
      kD: x0 => x0.shiftKey,
      kE: x0 => x0.timeStamp,
      kF: x0 => ({runApp: x0}),
      kG: (x0,x1) => { x0.name = x1 },
      kH: () => globalThis.Symbol,
      kI: x0 => x0.signal,
      kJ: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
      kK: x0 => x0.body,
      kL: () => globalThis.window.isSecureContext,
      kM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      kN: x0 => x0.name,
      kO: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      kP: (x0,x1,x2) => x0.sqlite3_column_bytes(x1,x2),
      kQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return wasmFunction(f,arguments.length,x0,x1,x2,x3) }),
      kR: (x0,x1) => x0.send(x1),
      kS: (x0,x1) => x0.key(x1),
      kT: (x0,x1) => { x0.src = x1 },
      kU: () => globalThis._flutter,
      l: x0 => new Array(x0),
      lB: Function.prototype.call.bind(DataView.prototype.setFloat32),
      lC: x0 => x0.userAgent,
      lD: (decoder, codeUnits) => decoder.decode(codeUnits),
      lE: (x0,x1) => x0.hasAttribute(x1),
      lF: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      lG: (x0,x1) => { x0.placeholder = x1 },
      lH: (x0,x1) => new Intl.Segmenter(x0,x1),
      lI: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      lJ: x0 => new window.ImageDecoder(x0),
      lK: x0 => x0.headers,
      lL: () => globalThis.crypto.subtle,
      lM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      lN: x0 => x0.kind,
      lO: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      lP: (x0,x1,x2) => x0.sqlite3_column_text(x1,x2),
      lQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return wasmFunction(f,arguments.length,x0,x1,x2,x3) }),
      lR: x0 => x0.readyState,
      lS: x0 => x0.length,
      lT: (x0,x1) => { x0.src = x1 },
      m: o => [o],
      mB: Function.prototype.call.bind(DataView.prototype.getFloat32),
      mC: x0 => x0.navigator,
      mD: () => new TextDecoder("utf-8", {fatal: true}),
      mE: x0 => x0.buttons,
      mF: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      mG: (x0,x1) => { x0.autocomplete = x1 },
      mH: x0 => x0.Segmenter,
      mI: (o,s,v) => o[s] = v,
      mJ: x0 => x0.name,
      mK: x0 => new SharedWorker(x0),
      mL: (x0,x1,x2,x3) => ({name: x0,hash: x1,salt: x2,iterations: x3}),
      mM: (x0,x1) => { x0.onerror = x1 },
      mN: () => globalThis.Symbol.asyncIterator,
      mO: x0 => new DOMException(x0),
      mP: (x0,x1,x2) => x0.sqlite3_column_double(x1,x2),
      mQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2) { return wasmFunction(f,arguments.length,x0,x1,x2) }),
      mR: (x0,x1) => { x0.binaryType = x1 },
      mS: (o, a) => o + a,
      mT: (x0,x1) => { x0.defer = x1 },
      n: (o0, o1) => [o0, o1],
      nB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      nC: Function.prototype.call.bind(String.prototype.toLowerCase),
      nD: () => new TextDecoder("utf-8", {fatal: false}),
      nE: x0 => x0.ctrlKey,
      nF: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      nG: (x0,x1) => { x0.name = x1 },
      nH: x0 => x0.buffer,
      nI: () => Symbol("jsBoxedDartObjectProperty"),
      nJ: x0 => x0.repetitionCount,
      nK: () => new MessageChannel(),
      nL: (x0,x1,x2) => globalThis.crypto.subtle.deriveBits(x0,x1,x2),
      nM: x0 => x0.error,
      nN: x0 => x0.next(),
      nO: (x0,x1) => x0.openCursor(x1),
      nP: (x0,x1,x2) => x0.sqlite3_column_int64(x1,x2),
      nQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      nR: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      nS: x0 => x0.children,
      nT: (x0,x1) => { x0.async = x1 },
      o: (o0, o1, o2) => [o0, o1, o2],
      oB: Function.prototype.call.bind(DataView.prototype.getUint32),
      oC: Object.is,
      oD: (a, i, v) => a[i] = v,
      oE: x0 => x0.y,
      oF: o => o.byteLength,
      oG: (x0,x1) => { x0.placeholder = x1 },
      oH: x0 => x0.wasmMemory,
      oI: (x0,x1) => x0.call(x1),
      oJ: x0 => x0.frameCount,
      oK: x0 => x0.start(),
      oL: Function.prototype.call.bind(DataView.prototype.getBigUint64),
      oM: (x0,x1) => { x0.onsuccess = x1 },
      oN: x0 => x0.value,
      oO: () => globalThis.Blob,
      oP: (x0,x1,x2) => x0.sqlite3_column_type(x1,x2),
      oQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      oR: (x0,x1) => { x0.onmessage = x1 },
      oS: (x0,x1) => { x0.display = x1 },
      oT: x0 => x0.trustedTypes,
      p: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      pB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      pC: x0 => x0.vendor,
      pD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      pE: x0 => x0.x,
      pF: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      pG: (x0,x1) => { x0.action = x1 },
      pH: () => globalThis.window._flutter_skwasmInstance,
      pI: (x0,x1) => x0.abort(x1),
      pJ: x0 => x0.selectedTrack,
      pK: (x0,x1) => ({isForSyncWorker: x0,message: x1}),
      pL: () => new FileReader(),
      pM: x0 => x0.result,
      pN: x0 => x0.done,
      pO: x0 => x0.value,
      pP: (x0,x1) => x0.set(x1),
      pQ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      pR: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      pS: () => ({}),
      pT: x0 => x0.trustedTypes,
      q: (x0,x1,x2) => { x0[x1] = x2 },
      qB: Function.prototype.call.bind(DataView.prototype.getInt32),
      qC: (x0,x1) => x0.createTextNode(x1),
      qD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI16ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      qE: x0 => x0.scrollTop,
      qF: x0 => x0.history,
      qG: (x0,x1) => { x0.method = x1 },
      qH: () => new TextDecoder(),
      qI: () => globalThis.navigator,
      qJ: x0 => x0.completed,
      qK: (x0,x1) => ({type: x0,payload: x1}),
      qL: (x0,x1) => x0.readAsArrayBuffer(x1),
      qM: (x0,x1) => { x0.onupgradeneeded = x1 },
      qN: x0 => ({create: x0}),
      qO: x0 => x0.key,
      qP: (x0,x1) => x0.sqlite3_column_count(x1),
      qQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return wasmFunction(f,arguments.length,x0,x1,x2,x3) }),
      qR: (x0,x1) => x0.getComputedStyle(x1),
      qS: (x0,x1) => { x0.type = x1 },
      qT: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      r: (o, p) => o[p],
      rB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      rC: (x0,x1) => { x0.id = x1 },
      rD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      rE: x0 => x0.offsetTop,
      rF: x0 => x0.search,
      rG: (x0,x1) => { x0.noValidate = x1 },
      rH: x0 => x0.debugSkipFontRetryDelay,
      rI: (x0,x1,x2,x3,x4) => ({r: x0,z: x1,i: x2,d: x3,t: x4}),
      rJ: x0 => x0.ready,
      rK: (x0,x1) => x0.postMessage(x1),
      rL: x0 => x0.result,
      rM: (x0,x1) => x0.createObjectStore(x1),
      rN: (x0,x1,x2) => x0.getDirectoryHandle(x1,x2),
      rO: x0 => x0.continue(),
      rP: x0 => x0.s,
      rQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return wasmFunction(f,arguments.length,x0,x1,x2,x3) }),
      rR: x0 => x0.paddingBottom,
      rS: (x0,x1) => x0.querySelector(x1),
      rT: x0 => { globalThis.onGoogleLibraryLoad = x0 },
      s: () => globalThis,
      sB: o => o instanceof Uint16Array,
      sC: (x0,x1) => { x0.nonce = x1 },
      sD: x0 => x0.visibilityState,
      sE: x0 => x0.scrollLeft,
      sF: x0 => x0.location,
      sG: (x0,x1) => x0.removeAttribute(x1),
      sH: (x0,x1,x2) => x0.set(x1,x2),
      sI: x0 => ({rawKind: x0}),
      sJ: x0 => x0.tracks,
      sK: x0 => x0.uploadError,
      sL: () => new XMLHttpRequest(),
      sM: x0 => x0.indexedDB,
      sN: x0 => x0.getDirectory(),
      sO: x0 => x0.length,
      sP: x0 => x0.r,
      sQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      sR: x0 => x0.paddingRight,
      sS: (x0,x1) => { x0.id = x1 },
      sT: (x0,x1) => x0.initialize(x1),
      t: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      tB: Function.prototype.call.bind(DataView.prototype.getUint16),
      tC: x0 => x0.nonce,
      tD: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      tE: x0 => x0.offsetLeft,
      tF: x0 => x0.pathname,
      tG: x0 => x0.isConnected,
      tH: x0 => x0.fontFallbackBaseUrl,
      tI: x0 => x0.r,
      tJ: () => globalThis.window.ImageDecoder,
      tK: (o, t) => typeof o === t,
      tL: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      tM: (x0,x1,x2) => x0.put(x1,x2),
      tN: x0 => x0.storage,
      tO: (x0,x1) => x0.index(x1),
      tP: x0 => x0.p,
      tQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      tR: x0 => x0.paddingTop,
      tS: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      tT: () => globalThis.google.accounts.id,
      u: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      uB: o => o instanceof Int16Array,
      uC: () => globalThis.window.flutterConfiguration,
      uD: x0 => x0.disconnect(),
      uE: x0 => x0.offsetParent,
      uF: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      uG: x0 => x0.click(),
      uH: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      uI: x0 => x0.n,
      uJ: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      uK: x0 => x0.downloadError,
      uL: x0 => x0.send(),
      uM: (x0,x1) => globalThis.IDBKeyRange.bound(x0,x1),
      uN: () => globalThis.navigator,
      uO: x0 => x0.openKeyCursor(),
      uP: (x0,x1) => x0.sqlite3_get_autocommit(x1),
      uQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      uR: x0 => x0.paddingLeft,
      uS: (x0,x1,x2,x3) => x0.toBlob(x1,x2,x3),
      uT: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      v: (x0,x1) => ({addView: x0,removeView: x1}),
      vB: Function.prototype.call.bind(DataView.prototype.getInt16),
      vC: (x0,x1) => x0.attachShadow(x1),
      vD: x0 => new Intl.Locale(x0),
      vE: (o, p, r) => o.replace(p, () => r),
      vF: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      vG: (x0,x1) => x0.getElementsByClassName(x1),
      vH: () => Date.now(),
      vI: x0 => x0.c,
      vJ: (a, s, e) => a.slice(s, e),
      vK: x0 => x0.uploading,
      vL: x0 => x0.type,
      vM: (x0,x1) => x0.delete(x1),
      vN: (x0,x1) => x0.open(x1),
      vO: x0 => x0.primaryKey,
      vP: x0 => x0.c,
      vQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      vR: (x0,x1) => { x0.padding = x1 },
      vS: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      vT: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16) => ({client_id: x0,auto_select: x1,callback: x2,login_uri: x3,native_callback: x4,cancel_on_tap_outside: x5,prompt_parent_id: x6,nonce: x7,context: x8,state_cookie_domain: x9,ux_mode: x10,allowed_parent_origin: x11,intermediate_iframe_close_callback: x12,itp_support: x13,login_hint: x14,hd: x15,use_fedcm_for_prompt: x16}),
      w: (l, r) => l === r,
      wB: o => o instanceof Uint8ClampedArray,
      wC: (x0,x1) => x0.createElement(x1),
      wD: x0 => x0.region,
      wE: (o, p, r) => o.replaceAll(p, () => r),
      wF: o => Object.keys(o),
      wG: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      wH: (handle) => clearInterval(handle),
      wI: x0 => x0.y,
      wJ: (x0,x1) => x0.getRandomValues(x1),
      wK: x0 => x0.core,
      wL: x0 => x0.response,
      wM: (x0,x1) => x0.get(x1),
      wN: (x0,x1) => x0.deleteDatabase(x1),
      wO: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      wP: x0 => x0.z,
      wQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      wR: (x0,x1) => { x0.pointerEvents = x1 },
      wS: (x0,x1,x2,x3,x4,x5) => x0.drawImage(x1,x2,x3,x4,x5),
      wT: x0 => x0.error,
      x: x0 => x0.random(),
      xB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      xC: x0 => x0.scale,
      xD: x0 => x0.script,
      xE: x0 => x0.deltaMode,
      xF: x0 => x0.state,
      xG: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      xH: x0 => x0.getRegistration(),
      xI: x0 => x0.x,
      xJ: () => globalThis.crypto,
      xK: (x0,x1,x2) => ({databaseName: x0,databasePort: x1,lockName: x2}),
      xL: (x0,x1) => { x0.responseType = x1 },
      xM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      xN: x0 => ({recursive: x0}),
      xO: x0 => ({autoIncrement: x0}),
      xP: (x0,x1) => ({name: x0,length: x1}),
      xQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      xR: (x0,x1) => { x0.visibility = x1 },
      xS: x0 => x0.height,
      xT: x0 => x0.credential,
      y: () => globalThis.Math,
      yB: Function.prototype.call.bind(DataView.prototype.setInt32),
      yC: x0 => x0.visualViewport,
      yD: x0 => x0.language,
      yE: x0 => x0.deltaY,
      yF: x0 => x0.hash,
      yG: (x0,x1) => x0.dispatchEvent(x1),
      yH: (x0,x1) => x0.register(x1),
      yI: (x0,x1,x2,x3,x4,x5,x6,x7,x8) => ({s: x0,p: x1,v: x2,z: x3,r: x4,c: x5,i: x6,d: x7,t: x8}),
      yJ: l => new DataView(new ArrayBuffer(l)),
      yK: x0 => x0.requestId,
      yL: x0 => x0.vendor,
      yM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      yN: (x0,x1,x2) => x0.removeEntry(x1,x2),
      yO: (x0,x1,x2) => x0.createObjectStore(x1,x2),
      yP: (x0,x1) => x0.update(x1),
      yQ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      yR: (x0,x1) => { x0.position = x1 },
      yS: x0 => x0.width,
      yT: (o, p) => p in o,
      z: (x0,x1) => x0.prepend(x1),
      zB: Function.prototype.call.bind(DataView.prototype.setUint32),
      zC: x0 => x0.devicePixelRatio,
      zD: x0 => x0.languages,
      zE: x0 => x0.deltaX,
      zF: x0 => x0.state,
      zG: (x0,x1) => x0.createEvent(x1),
      zH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      zI: x0 => globalThis.BigInt(x0),
      zJ: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      zK: x0 => x0.clientId,
      zL: x0 => new Blob(x0),
      zM: x0 => x0.reload(),
      zN: (x0,x1) => x0.createSyncAccessHandle(x1),
      zO: x0 => ({unique: x0}),
      zP: x0 => x0.name,
      zQ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2) { return wasmFunction(f,arguments.length,x0,x1,x2) }),
      zR: x0 => x0.style,
      zS: (x0,x1) => x0.getContext(x1),
      zT: x0 => x0.groups,

    };

    const baseImports = {
      _: dart2wasm,
      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
      WebAssembly: {
        JSTag: WebAssembly.JSTag,
      },
      "": new Proxy({}, { get(_, prop) { return prop; } }),

    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      "intoCharCodeArray": (s, a, start) => {
        if (s === '') return 0;

        const write = dartInstance.exports.$wasmI16ArraySet;
        for (var i = 0; i < s.length; ++i) {
          write(a, start++, s.charCodeAt(i));
        }
        return s.length;
      },
      "test": (s) => typeof s == "string",
    };


    

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}
