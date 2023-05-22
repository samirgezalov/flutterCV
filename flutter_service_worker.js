'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js": "38dfb1cc86c6512c5e271dc606575ed2",
"version.json": "5fc10240b73452c6a64964c44206397c",
"assets/assets/img/achievement.png": "21ff001ec780d9d3b43bf32b1f0c3647",
"assets/assets/img/beoc.png": "ea81fc9df6b31713a9f84fd92532a0bf",
"assets/assets/img/bp.png": "19b36a70efc4a6070ce2b734fc5f5285",
"assets/assets/img/dev.png": "92947572d05dde0dec3df4e2d0dc8b99",
"assets/assets/img/drillingrig.jpg": "30c02485b92ce9b3ab0cac516d71c4bd",
"assets/assets/img/drill.png": "40828a18c721521cf988716eb6459b44",
"assets/assets/img/generalinfo.jpg": "29220aa8c28ed2cb92267e76c087a71a",
"assets/assets/img/headshot.jpg": "eb0b674cce29b51b8e8706967ad7a714",
"assets/assets/img/kcadeutag.png": "ed09c44a0324417323b73fe6e18e93f3",
"assets/assets/img/koc.png": "e7af57e2d5d601db7359c671adeecc69",
"assets/assets/img/nrpti-mlzSk.jpg": "c498b27378376bad5f909e6e14a11c54",
"assets/assets/img/safarico.png": "8d4ccca8be3de41857a9e6373c9bce48",
"assets/assets/img/safarico.svg": "328ffbc5630d7cadefcf59297bafc9ea",
"assets/assets/img/safety.png": "69b29b8fc88048a7090f13447989c529",
"assets/assets/img/socar.png": "fdc3d113cf71a2d4f9d71ef46c3d425e",
"assets/assets/img/sam.png": "1210e1c584ccb29f5bb892e982447502",
"assets/assets/img/surflight.jpeg": "c7a6bf6ec58778cbd0bcbb64049ad8c8",
"assets/assets/icons/academy.png": "0376faedb37e7b8cd1469ec9423ee356",
"assets/assets/icons/achievement.png": "e04700a5de506fc7b7559e62c247192f",
"assets/assets/icons/based.png": "30c5fe5407050ebfb9e587028dbc9654",
"assets/assets/icons/born.png": "652a20f6b9551ecbcc604044e4c59209",
"assets/assets/icons/cell.png": "b700f11392943cc1326e23cf33a38d49",
"assets/assets/icons/cv.ico": "34d43b2bcc7104a1dbc477dc9b7b176f",
"assets/assets/icons/education.png": "e62818a01d9dc1b7f2ec08ce14cffa1f",
"assets/assets/icons/drillingsoftware.png": "e95a433c0ae33db00559fdf2ee868e6f",
"assets/assets/icons/email.png": "c04e212e3438f1d87a2c72365bd1ace9",
"assets/assets/icons/hobby.png": "9a5f2c26f12d0e258ee57e1599ca6ece",
"assets/assets/icons/honors.jpg": "83c733e984b208bf4f2b2cbe4fcf3cb6",
"assets/assets/icons/marrital.png": "8413202014f11f56a3887c2ce2eb823f",
"assets/assets/icons/personalassesment.png": "b0aa8ebe710545385635928bb329cd30",
"assets/assets/icons/skills.png": "fefe1b5d05160b4acdf5d2566c7d8db3",
"assets/assets/icons/status.png": "8ad5b53f12596cb4a5090d1ff87cd1f2",
"assets/assets/icons/training.png": "77ca075b78ec3c5b1f540bdbe59e1a77",
"assets/assets/icons/workexperience.png": "0eafaedcf5fdea8a875d3dce48883ade",
"assets/assets/certificates/android.jpg": "cfd8bba7decb0c956c415c0b4f1bcd26",
"assets/assets/certificates/bosiet.png": "84d74fad89fd6104cd2a77073e138e38",
"assets/assets/certificates/dd.png": "9d73f18e1775cbf48c4be85daea32f49",
"assets/assets/certificates/deandwp.png": "a07cc92f688534d3cb1a54ba4d268128",
"assets/assets/certificates/dmandcf.png": "6b51c43de18376bbcd86893e780f0f90",
"assets/assets/certificates/drprac.png": "66942bcffa4950ae7ecb7619cc3ce8d9",
"assets/assets/certificates/dsd.png": "a93c962ff383a345214eeb99699455b8",
"assets/assets/certificates/flutterdev.png": "9aad18e52bd3c294c353e5f371ad5234",
"assets/assets/certificates/globalchallange.png": "9a34417e45e901dc59e6a2d6bf356c63",
"assets/assets/certificates/introdeandce.png": "c2d7f64f6a30d2fcb8fd7ed03c3ad846",
"assets/assets/certificates/java.jpg": "cf66a07097219460b7b2774269aaed3e",
"assets/assets/certificates/next.png": "18881833ec14cde7c13511c6e7546f6d",
"assets/assets/certificates/sslc2.png": "e4f5dbd6f1ddec72f319bfa4f256de6b",
"assets/assets/certificates/vhic.png": "d7905545a29dae65633b2941c640e24f",
"assets/assets/certificates/wellcap.png": "9f5299be246b32ebb2c876c52af584f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/AssetManifest.json": "c5b9a6da820d1397122a7057c5ea37c6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "6e5d658c773126f200b7d35511341aae",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "169f479627a0f594d00c7ae2f466346f",
"/": "169f479627a0f594d00c7ae2f466346f",
"manifest.json": "50d88bb80b30c4c6b332838ef129b062"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
