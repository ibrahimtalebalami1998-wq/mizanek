// Mizanek's offline worker, registered by index.html for the app folder.
// scripts/stamp_web_sw.py fills in BUILD and FILES after `flutter build web`;
// unstamped (a plain build or `flutter run`), FILES is not defined, so the
// script fails and no worker installs: the app then simply needs the network.
// The page registers it as sw.js?engine=<engine .wasm path>; the worker saves only that engine.
const BUILD = '68a8d9aefc489618';
// Every cached file and its SHA-256, so the cache holds exactly this build.
const FILES = {"assets/AssetManifest.bin": "b3690f35eedb3b23431d85d94b165b6cdd20ad69adf6b79ff8aed09ed44279b9", "assets/AssetManifest.bin.json": "f93fb4a337ecc7c39abe47cf23743882afa2db937fa51ac73c67820b51a73f70", "assets/FontManifest.json": "9b7dc1987b165728c90f1b1886e863475da55c37f67f68a46f58bdc7eee780f4", "assets/NOTICES": "f9285a9f37de16d1fe7c234e55ca314f56464b03ee60baf6ba9251002d8eb5c5", "assets/assets/duas.json": "1671849d73f1e14ef7a9f2df830bb41d15934c06655dcd2e4ba27627cc11a3c7", "assets/assets/fonts/Amiri-Regular.ttf": "ab391c4147d054c48976e98322ad0eefe1427aa0e0502a12a4c75d80a70cfcd7", "assets/assets/fonts/InterTight-Variable.ttf": "b81b73dcb64df3c230cabade7df6c5773bf863233f24c9ee51087519f1f88b6f", "assets/brand/logo/png/mizanek-icon-small-192.png": "6732fabeaba458d53217f5fd6cb031f6024f0fb10c3cf8cfa2e2f1399d191728", "assets/brand/logo/png/mizanek-lockup-dark-1200.png": "ee588bb5cb67d06cef12a1d65fed8fddff2535c0c85dcbdeae495c8c4466cbfc", "assets/brand/logo/png/mizanek-symbol-128.png": "79afb816492e992475448b4e045555b48407f94742670a8ad8eac1e3e183bc7f", "assets/fonts/MaterialIcons-Regular.otf": "d9bad7f2677571a9c5586bb96a9fd3769a1c7742771f0165f3f9d088df89c1e1", "assets/fonts/fallback/Roboto-Regular.ttf": "79e851404657dac2106b3d22ad256d47824a9a5765458edb72c9102a45816d95", "assets/packages/flutter_local_notifications_web/web/notifications_service_worker.js": "566f47dccc0f417f0164a3d0852334c340d0941472af43fc65ee50a314555058", "assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "da2712a5bbd45e70b6833dc693e11ef01ca49f0e8cd55fb01fda21ac1a7d37bf", "assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "4bd63b986a7ed9c6ee5facfcb9707c0d20c5a53d12f817ed8cd3cad4b77bfebf", "assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "528e445c720493fd22490eefe7aa2693250828530aee990dd8be7eda33881745", "assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "edd52cc6fa23e71ab1e68a87c808ca45a0914013bd7e6244682cc78d7e2debf6", "assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "4494ab9f98185102ad7e227dd3b431578e6806f2a6c99830d6003abfcd45f3f6", "assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "9b527d1680308a07ce971eb7db76f9801ab1571dd74bc0da596f1f7c64665f6b", "assets/packages/lucide_icons_flutter/assets/lucide.ttf": "1c7368504190bc51323e76be81620a21b8fd602701bcbe92ad932cc1f898f57c", "assets/packages/shadcn_ui/fonts/Geist%255Bwght%255D.ttf": "ab491eb63bca7372be9fa9e7cd511b2fe9d4a602ba59c1e978638ea49cf77461", "assets/packages/shadcn_ui/fonts/GeistMono%255Bwght%255D.ttf": "678ff43c7d3a9b3e971399ea53b3043f98ba51be5a76f4dd6cda61e59a96df05", "assets/shaders/ink_sparkle.frag": "2dca5ab93d4ec29e963f996f3916320ba60825e9537dfb149a68008c7a16b026", "assets/shaders/stretch_effect.frag": "ab412f07a5b9b50b67a885b24dbe16929738ae28630407d6490c924caf0a3220", "canvaskit/canvaskit.js": "bb559f6080c7d312ac2a912b4abec9f68ff3d3022d4a603c7796b9b31460642b", "canvaskit/canvaskit.wasm": "fbed517a43e82452404446683f00f2e876d835aed84410695759e67b6bb01cd3", "canvaskit/chromium/canvaskit.js": "6018b12bd8ed37e6952eee72d59c1cf7ad707ccdb74a0a45190010f77edd9068", "canvaskit/chromium/canvaskit.wasm": "ae8ff1d858140f7b1300ced3fa89fb8c9dce0a400a0f4f1e11f6dcfb3315fdcf", "canvaskit/skwasm.js": "71d7d3e34bf71b52bdba3b588b103bba8148ba28de5754083e01b3398e7a6e1c", "canvaskit/skwasm.wasm": "e540fd5e8303b7b68ec2718cb49e9c421f8ade3075b15e02a7059a62654df9a1", "canvaskit/skwasm_heavy.js": "cec554b46ddcf4c0e63d799e0556d546f42d2c3f69316fb4f67ed776f6104558", "canvaskit/skwasm_heavy.wasm": "565f5cc1cca6ab120f11934b105f01fec4b58b480c82e0889dca93af8e6f8635", "favicon.png": "734c85c8ed3af8df19d8ccb485060acc20f004c2a18fe9c2a318548d14348c01", "flutter.js": "2beb1ce6b159c71540aa66030af1d7964b6a92377cc78473745e02f97b74effe", "flutter_bootstrap.js": "2a92b35123ba2ec0b7cf54275519b6dccb0b2beeb97c7242d5d7c8196c14a2c4", "icons/Icon-192.png": "a134ec2abf812a59903f206bfba1c91f4381f89817ff33e4f095446e43276886", "icons/Icon-512.png": "11180bbfb2116aaa41e9d4aa54ced933d6b1c9ca158795a5aa3826cf6911ed23", "icons/Icon-maskable-192.png": "ebb65ab1a1a15b0cf2775d15537418c7e4c67ce97b4a97e9995d4a54db44fd07", "icons/Icon-maskable-512.png": "64875fbea1bae23c01471d295dced3a1d319340361f71ee310a7e44ef91ed68e", "icons/apple-touch-icon.png": "94cf25432c157e49061e627e309d596dbb1ac5861162a794873b5d96afa67096", "index.html": "834606dbb7725cfe7eccf628d660efbd103f25620515506b06e8a63ac95469fa", "main.dart.js": "8bafe53196ef44fa7a8b23fb831fd8fe10e58d871f02122eeeef40f62cc61511", "main.dart.mjs": "ebe28d018c99d5ecce945ead3f0c1801b4e4820d59b530c466e53c7034b8e68f", "main.dart.wasm": "ac30aeaa08e88db14de42bd9cd6ccba13221b056514f1aae7d4650a9ace11b06", "manifest.json": "9c628ec69baf70873f4a407a33c3b9f6fae71f9e7191527c85001a28147f68b5", "powersync_db.worker.js": "bde7bf3fa9dd2ee746bbc0d07b42e98b02a480187ba4b484ba598582ce526b97", "sqlite3.wasm": "66f7143d5417ca91940f45a5cda71c48705b4412b3650247fff82e9697f246c4", "version.json": "914ef799c65807483d53de229ea57d2422cc4f09b5e86833a2561e65570c8562"};
const ENGINES = {"canvaskit/canvaskit.wasm": ["main.dart.js", "canvaskit/canvaskit.js", "canvaskit/canvaskit.wasm"], "canvaskit/skwasm.wasm": ["main.dart.wasm", "main.dart.mjs", "canvaskit/skwasm.js", "canvaskit/skwasm.wasm"], "canvaskit/skwasm_heavy.wasm": ["main.dart.wasm", "main.dart.mjs", "canvaskit/skwasm_heavy.js", "canvaskit/skwasm_heavy.wasm"], "canvaskit/chromium/canvaskit.wasm": ["main.dart.js", "canvaskit/chromium/canvaskit.js", "canvaskit/chromium/canvaskit.wasm"]};
const CACHE = 'mizanek-' + BUILD;
const MANIFEST = '__files.json';
const NETWORK_WAIT_MS = 10000;

async function sha256(response) {
  const bytes = await response.clone().arrayBuffer();
  return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)),
    (b) => b.toString(16).padStart(2, '0')).join('');
}

// The previous build's cache and file hashes, to reuse what did not change.
async function previousBuild() {
  for (const key of await caches.keys()) {
    if (!key.startsWith('mizanek-') || key === CACHE) continue;
    const cache = await caches.open(key);
    const manifest = await cache.match(MANIFEST);
    if (manifest) return { cache, files: await manifest.json() };
  }
  return null;
}

// The files this worker saves: the shared ones plus the engine named in its
// URL. An unknown or missing engine saves every file (safe after a Flutter
// upgrade renames an engine).
function wanted() {
  const key = new URL(self.location.href).searchParams.get('engine');
  if (!key || !Object.hasOwn(ENGINES, key)) return Object.keys(FILES);
  const owned = new Set(Object.values(ENGINES).flat());
  return Object.keys(FILES).filter((name) => !owned.has(name) || ENGINES[key].includes(name));
}

async function cacheFile(cache, old, name) {
  if (await cache.match(name)) return; // saved and SHA-checked by an earlier, cut-off install of this build
  let response = old && old.files[name] === FILES[name] ? await old.cache.match(name) : undefined;
  if (!response) {
    response = await fetch(new Request(name, { cache: 'no-cache' }));
    // A server still handing out the old file (mid-publish) fails the install,
    // rather than caching a mix; the browser tries again on a later start.
    if (!response.ok || await sha256(response) !== FILES[name]) throw new Error('stale ' + name);
  }
  await cache.put(name, response);
}

self.addEventListener('install', (event) => {
  // The whole build, or nothing: on any failure the old worker and its cache stay.
  event.waitUntil((async () => {
    // A cache of this build that already exists may be the active worker's
    // (a sw.js-only publish or an engine switch): a failure never deletes it.
    const fresh = !(await caches.has(CACHE));
    try {
      const names = wanted();
      const cache = await caches.open(CACHE);
      const old = await previousBuild();
      await Promise.all(names.map((name) => cacheFile(cache, old, name)));
      await cache.put(MANIFEST, new Response(JSON.stringify(Object.fromEntries(names.map((name) => [name, FILES[name]])))));
    } catch (error) {
      if (fresh) await caches.delete(CACHE);
      throw error;
    }
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k.startsWith('mizanek-') && k !== CACHE).map((k) => caches.delete(k)),
      )),
  );
});

// The page asks a waiting build to take over (index.html, on a safe return).
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'mizanek-take-over') event.waitUntil(self.skipWaiting());
});

// This build's copy; once a newer worker took over and deleted this build's
// cache (a page started on this worker is still loading), the newer build's.
// Never `caches.open`, which would re-create the deleted cache empty.
function fromCache(request) {
  return caches.match(request, { ignoreSearch: true, cacheName: CACHE })
    .then((cached) => cached || caches.match(request, { ignoreSearch: true }));
}

// A request for a file the saved build lacks: the network, with a limit on the
// wait for the answer to start (a body that has started is not cut).
function fromNetwork(request) {
  return Promise.race([
    fetch(request),
    new Promise((_, reject) => setTimeout(() => reject(new Error('slow')), NETWORK_WAIT_MS)),
  ]);
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  // Only the app's own files: never Supabase, PowerSync, Google or anything
  // signed in.
  if (request.method !== 'GET' || !request.url.startsWith(self.registration.scope)
      || request.headers.has('Authorization')) {
    return;
  }
  // The saved copy first, always; the network only for a file it lacks.
  const saved = fromCache(request.mode === 'navigate' ? 'index.html' : request);
  event.respondWith(saved.then((cached) => cached || fromNetwork(request)));
});

// Web push reminders (W6). The payload's keys never change once shipped:
// `t` title, `b` body, `d` debt id, `g` tag (a repeated push replaces the
// first on screen).
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
// No `mizanek-` prefix, so `activate` never deletes it.
const TAP_CACHE = 'reminder-tap';
const TAP_KEY = '__reminder_tap';

function validId(value) {
  return typeof value === 'string' && UUID.test(value) ? value : null;
}

self.addEventListener('push', (event) => {
  event.waitUntil((async () => {
    let payload = null;
    try {
      payload = event.data.json();
    } catch (_) {
      // Not JSON or no data: the plain notice below.
    }
    if (payload && typeof payload.t === 'string' && typeof payload.b === 'string'
        && validId(payload.d) && validId(payload.g)) {
      await self.registration.showNotification(payload.t,
        { body: payload.b, tag: payload.g, data: { d: payload.d } });
      return;
    }
    // Every push must show something.
    await self.registration.showNotification('Mizanek');
  })());
});

// The tap travels through the cache, read by the app at start, on resume and
// on the message, which is only a nudge: iOS has ignored `openWindow`'s URL
// and lost messages to a just-launched app.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil((async () => {
    const data = event.notification.data;
    const tap = { d: validId(data && data.d), at: Date.now() };
    const cache = await caches.open(TAP_CACHE);
    await cache.put(new URL(TAP_KEY, self.registration.scope),
      new Response(JSON.stringify(tap), { headers: { 'Content-Type': 'application/json' } }));
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const client = windows.find((c) => c.url.startsWith(self.registration.scope));
    if (client) {
      await client.focus();
      client.postMessage({ type: 'mizanek-reminder-tap' });
    } else {
      await self.clients.openWindow(self.registration.scope);
    }
  })());
});
