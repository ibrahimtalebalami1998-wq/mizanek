// Mizanek's offline worker, registered by index.html for the app folder.
// scripts/stamp_web_sw.py fills in BUILD and FILES after `flutter build web`;
// unstamped (a plain build or `flutter run`), FILES is not defined, so the
// script fails and no worker installs: the app then simply needs the network.
const BUILD = '9b113dc9ab10e6b8';
// Every cached file and its SHA-256, so the cache holds exactly this build.
const FILES = {"assets/AssetManifest.bin": "b3690f35eedb3b23431d85d94b165b6cdd20ad69adf6b79ff8aed09ed44279b9", "assets/AssetManifest.bin.json": "f93fb4a337ecc7c39abe47cf23743882afa2db937fa51ac73c67820b51a73f70", "assets/FontManifest.json": "9b7dc1987b165728c90f1b1886e863475da55c37f67f68a46f58bdc7eee780f4", "assets/NOTICES": "f9285a9f37de16d1fe7c234e55ca314f56464b03ee60baf6ba9251002d8eb5c5", "assets/assets/duas.json": "1671849d73f1e14ef7a9f2df830bb41d15934c06655dcd2e4ba27627cc11a3c7", "assets/assets/fonts/Amiri-Regular.ttf": "ab391c4147d054c48976e98322ad0eefe1427aa0e0502a12a4c75d80a70cfcd7", "assets/assets/fonts/InterTight-Variable.ttf": "b81b73dcb64df3c230cabade7df6c5773bf863233f24c9ee51087519f1f88b6f", "assets/brand/logo/png/mizanek-icon-small-192.png": "6732fabeaba458d53217f5fd6cb031f6024f0fb10c3cf8cfa2e2f1399d191728", "assets/brand/logo/png/mizanek-lockup-dark-1200.png": "ee588bb5cb67d06cef12a1d65fed8fddff2535c0c85dcbdeae495c8c4466cbfc", "assets/brand/logo/png/mizanek-symbol-128.png": "79afb816492e992475448b4e045555b48407f94742670a8ad8eac1e3e183bc7f", "assets/fonts/MaterialIcons-Regular.otf": "d9bad7f2677571a9c5586bb96a9fd3769a1c7742771f0165f3f9d088df89c1e1", "assets/fonts/fallback/Roboto-Regular.ttf": "79e851404657dac2106b3d22ad256d47824a9a5765458edb72c9102a45816d95", "assets/packages/flutter_local_notifications_web/web/notifications_service_worker.js": "566f47dccc0f417f0164a3d0852334c340d0941472af43fc65ee50a314555058", "assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "da2712a5bbd45e70b6833dc693e11ef01ca49f0e8cd55fb01fda21ac1a7d37bf", "assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "4bd63b986a7ed9c6ee5facfcb9707c0d20c5a53d12f817ed8cd3cad4b77bfebf", "assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "528e445c720493fd22490eefe7aa2693250828530aee990dd8be7eda33881745", "assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "edd52cc6fa23e71ab1e68a87c808ca45a0914013bd7e6244682cc78d7e2debf6", "assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "4494ab9f98185102ad7e227dd3b431578e6806f2a6c99830d6003abfcd45f3f6", "assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "9b527d1680308a07ce971eb7db76f9801ab1571dd74bc0da596f1f7c64665f6b", "assets/packages/lucide_icons_flutter/assets/lucide.ttf": "1c7368504190bc51323e76be81620a21b8fd602701bcbe92ad932cc1f898f57c", "assets/packages/shadcn_ui/fonts/Geist%255Bwght%255D.ttf": "ab491eb63bca7372be9fa9e7cd511b2fe9d4a602ba59c1e978638ea49cf77461", "assets/packages/shadcn_ui/fonts/GeistMono%255Bwght%255D.ttf": "678ff43c7d3a9b3e971399ea53b3043f98ba51be5a76f4dd6cda61e59a96df05", "assets/shaders/ink_sparkle.frag": "2dca5ab93d4ec29e963f996f3916320ba60825e9537dfb149a68008c7a16b026", "assets/shaders/stretch_effect.frag": "ab412f07a5b9b50b67a885b24dbe16929738ae28630407d6490c924caf0a3220", "canvaskit/canvaskit.js": "bb559f6080c7d312ac2a912b4abec9f68ff3d3022d4a603c7796b9b31460642b", "canvaskit/canvaskit.wasm": "fbed517a43e82452404446683f00f2e876d835aed84410695759e67b6bb01cd3", "canvaskit/chromium/canvaskit.js": "6018b12bd8ed37e6952eee72d59c1cf7ad707ccdb74a0a45190010f77edd9068", "canvaskit/chromium/canvaskit.wasm": "ae8ff1d858140f7b1300ced3fa89fb8c9dce0a400a0f4f1e11f6dcfb3315fdcf", "canvaskit/skwasm.js": "71d7d3e34bf71b52bdba3b588b103bba8148ba28de5754083e01b3398e7a6e1c", "canvaskit/skwasm.wasm": "e540fd5e8303b7b68ec2718cb49e9c421f8ade3075b15e02a7059a62654df9a1", "canvaskit/skwasm_heavy.js": "cec554b46ddcf4c0e63d799e0556d546f42d2c3f69316fb4f67ed776f6104558", "canvaskit/skwasm_heavy.wasm": "565f5cc1cca6ab120f11934b105f01fec4b58b480c82e0889dca93af8e6f8635", "favicon.png": "734c85c8ed3af8df19d8ccb485060acc20f004c2a18fe9c2a318548d14348c01", "flutter.js": "2beb1ce6b159c71540aa66030af1d7964b6a92377cc78473745e02f97b74effe", "flutter_bootstrap.js": "517c90f510866b9fdc1fe0209bad9d85a2326fdcf0b590bc44ba04125c59dab2", "icons/Icon-192.png": "a134ec2abf812a59903f206bfba1c91f4381f89817ff33e4f095446e43276886", "icons/Icon-512.png": "11180bbfb2116aaa41e9d4aa54ced933d6b1c9ca158795a5aa3826cf6911ed23", "icons/Icon-maskable-192.png": "ebb65ab1a1a15b0cf2775d15537418c7e4c67ce97b4a97e9995d4a54db44fd07", "icons/Icon-maskable-512.png": "64875fbea1bae23c01471d295dced3a1d319340361f71ee310a7e44ef91ed68e", "icons/apple-touch-icon.png": "94cf25432c157e49061e627e309d596dbb1ac5861162a794873b5d96afa67096", "index.html": "342feedfdfc4d0c07da48439b1a4556291f37a105a0765e155d7b9126e55bd44", "main.dart.js": "f41cd6e3122f9afcf3d48288e6a957ef25d37a2ad1126b8e47c2cf1db614b007", "main.dart.mjs": "33d04b4f3ee163ad0fd0ba6a20c4e51108ffaaf46e27be4f27fedaf36a1e4a85", "main.dart.wasm": "2939ae7788a3fafc3fc699e944cf75f9a29fad1e8bbf321b3497a3ace9d1c4b8", "manifest.json": "9c628ec69baf70873f4a407a33c3b9f6fae71f9e7191527c85001a28147f68b5", "powersync_db.worker.js": "bde7bf3fa9dd2ee746bbc0d07b42e98b02a480187ba4b484ba598582ce526b97", "sqlite3.wasm": "66f7143d5417ca91940f45a5cda71c48705b4412b3650247fff82e9697f246c4", "version.json": "914ef799c65807483d53de229ea57d2422cc4f09b5e86833a2561e65570c8562"};
const CACHE = 'mizanek-' + BUILD;
const MANIFEST = '__files.json';
// A page whose index.html came from the cache takes every file from the same
// cache, so it never runs on a mix of two builds.
const cachedPages = new Set();
const NAVIGATION_WAIT_MS = 4000;

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

async function cacheFile(cache, old, name) {
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
    const cache = await caches.open(CACHE);
    const old = await previousBuild();
    await Promise.all(Object.keys(FILES).map((name) => cacheFile(cache, old, name)));
    await cache.put(MANIFEST, new Response(JSON.stringify(FILES)));
    await self.skipWaiting();
  })().catch(async (error) => {
    await caches.delete(CACHE);
    throw error;
  }));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k.startsWith('mizanek-') && k !== CACHE).map((k) => caches.delete(k)),
      ))
      .then(() => self.clients.claim()),
  );
});

// This build's copy; once a newer worker took over and deleted this build's
// cache (a page started on this worker is still loading), the newer build's.
// Never `caches.open`, which would re-create the deleted cache empty.
function fromCache(request) {
  return caches.match(request, { ignoreSearch: true, cacheName: CACHE })
    .then((cached) => cached || caches.match(request, { ignoreSearch: true }));
}

// The engine reads these whole before the first frame; a cut or empty one
// draws every screen in a fallback font (W6a).
const READ_WHOLE = /\.(ttf|otf)$|\/FontManifest\.json$/;

// Whether a 200 answer's body arrives whole and not empty.
function wholeBody(response) {
  return response.clone().arrayBuffer().then((body) => body.byteLength > 0, () => false);
}

function navigationTimeout() {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('slow')), NAVIGATION_WAIT_MS));
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  // Only the app's own files: never Supabase, PowerSync, Google or anything
  // signed in.
  if (request.method !== 'GET' || !request.url.startsWith(self.registration.scope)
      || request.headers.has('Authorization')) {
    return;
  }
  if (request.mode === 'navigate') {
    const page = event.resultingClientId;
    // The saved app, or `fallback()` when nothing is saved yet.
    const savedApp = (fallback) => fromCache('index.html').then((cached) => {
      if (!cached) return fallback();
      cachedPages.add(page);
      return cached;
    });
    event.respondWith(
      Promise.race([fetch(request), navigationTimeout()])
        .then((response) => {
          // A server error page (outage, deploy in progress) must not replace
          // the saved app; redirects and opaque responses stay as they are.
          if (response.status >= 400) return savedApp(() => response);
          cachedPages.delete(page);
          return response;
        }, () => savedApp(() => fetch(request))),
    );
    return;
  }
  const page = event.clientId;
  if (cachedPages.has(page)) {
    event.respondWith(fromCache(request).then((cached) => cached || fetch(request)));
    return;
  }
  // Online: the network, exactly as without a worker, so a new publish shows
  // at once; the cache only when the network fails or answers an error (a
  // 404 or 503 font would draw every screen in a fallback font), or a font
  // arrives cut off or empty.
  // `fallback()` gives the answer when nothing is cached.
  const savedFile = (fallback) => fromCache(request).then((cached) => {
    if (!cached) return fallback();
    cachedPages.add(page);
    return cached;
  });
  event.respondWith(
    fetch(request).then(
      async (response) => {
        if (response.status >= 400) return savedFile(() => response);
        if (response.status === 200 && READ_WHOLE.test(new URL(request.url).pathname)
            && !await wholeBody(response)) {
          return savedFile(() => response);
        }
        return response;
      },
      (error) => savedFile(() => { throw error; }),
    ),
  );
});
