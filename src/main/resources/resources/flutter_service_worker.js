'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1d496e70998b2450b745d03094bc1b25",
  "assets/FontManifest.json": "9a7e810e229a0d951b3f92d03eebedb1",
  "assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
  "assets/imgs/answer.png": "99bc49795f481a3f39a00de28e4d06d5",
  "assets/imgs/artical.png": "371194f10ed09e1336c3de683ccc74ea",
  "assets/imgs/care.png": "e5a0289054c8624a84535317537c0f67",
  "assets/imgs/collect.png": "ebc77181fc111ee783f0d2c85e4762f9",
  "assets/imgs/discuss.png": "2b4062bf063d863a93833b288d7feecd",
  "assets/imgs/exit.png": "c3457754de35db1b674f5728045ffb8b",
  "assets/imgs/fankui.png": "fef2b75f2c93479a07e4e31622edbdcd",
  "assets/imgs/find.png": "137101450b4a13b8a2bc80b39d3fe3da",
  "assets/imgs/find_select.png": "49aebf147c6bd8d01d378a0d2a371a74",
  "assets/imgs/fuli.png": "51e47b2a694550a851743c24b86ad6e4",
  "assets/imgs/history.png": "5daf00191354b057f4409aef1fe36fb9",
  "assets/imgs/idea.png": "9f183a8546ca3c54946a765d193ff57d",
  "assets/imgs/img_default.png": "dffaf288d6f79d2f68b75a82c5c2f8ca",
  "assets/imgs/index1.png": "e56cc097846007879f7a55538dd2f1ac",
  "assets/imgs/index1_select.png": "475e348dc8e0cf9310f2e1d196d0dcb4",
  "assets/imgs/level-1.png": "64f85ea0edd0f994de21c56ed7b64485",
  "assets/imgs/level-2.png": "5d236d0ac7a535e87b2a84fb8a62ce0b",
  "assets/imgs/level.png": "8e89d393db5af49df3e96684fd0b2860",
  "assets/imgs/link.png": "dca1e43da1ce30896d55b97193aa22cc",
  "assets/imgs/me.png": "dca4c3ddd3d61b7dc7198dcd467e918d",
  "assets/imgs/me_select.png": "63170ad62ea64d6b8d3195e9e1ff0a80",
  "assets/imgs/msg.png": "341298840f852b6dfb096be3660a8118",
  "assets/imgs/msg_select.png": "ba94e8cfef233f216523660780103b0b",
  "assets/imgs/night.png": "a44d2f00c4a4d6b43895110992d29d75",
  "assets/imgs/order.png": "af49cc61b2f1e58c5fb70986b679e9f1",
  "assets/imgs/put_video.png": "7f99975642b0a799c1c71a8bb72dc0ba",
  "assets/imgs/qq.png": "5040ebae1f822e0b382b3af840ef887c",
  "assets/imgs/room.png": "ad8488271536964bb51430ac0bfa3497",
  "assets/imgs/send_friend.png": "3f8b389e8207cf77c6d264a471afa97f",
  "assets/imgs/set.png": "c0c2f79b24f32b378e1fca853e3c77c9",
  "assets/imgs/shop.png": "cd4bb4b1a68102dd0daed716d82f51d4",
  "assets/imgs/sun.png": "b07cba526226a1f2852172e9dffdb435",
  "assets/imgs/team.png": "44edffcca8ec82d646f3ecf2969afad3",
  "assets/imgs/user_default.png": "9e6c0eafcdd257ee33d3a7df4b5cebbf",
  "assets/imgs/version.png": "54329fe1de47eb96315ecd457edf2232",
  "assets/imgs/video.png": "8925607a2dff62ba912244f543a6f421",
  "assets/imgs/video_select.png": "74627ace7fc6957ae1ad117007d5e433",
  "assets/imgs/wechat.png": "f85ddabbe9a450285b96c94fce359c2c",
  "assets/NOTICES": "2d681eb555ddc0b104c3dc4816962d70",
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
  "assets/packages/flutter_showcase/assets/dart.png": "f3ae419dc11ddc054a8725e2cbab4939",
  "assets/packages/flutter_showcase/assets/flutter.png": "d21f1eecaeaab081ba7efec1721c0712",
  "assets/packages/flutter_showcase/assets/flutter_black.png": "3e4d716d500f9d0b927f55c48379289a",
  "assets/packages/flutter_showcase/assets/flutter_original.png": "cf171b29e3b2c0cb9a12223f952da7c6",
  "assets/packages/flutter_showcase/assets/flutter_white.png": "91cbceb6f4b8345f509ba4cde4bdcee5",
  "assets/packages/flutter_showcase/assets/github.png": "3e54ed15b9cd877c5223f5ecf64579df",
  "assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
  "assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
  "assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
  "assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
  "favicon-bk.png": "5dcef449791fa27946b3d35ad8803796",
  "favicon.png": "5710ce465dadf04b728b786f296f8c47",
  "icons/Icon-192-bk.png": "ac9a721a12bbc803b44f645561ecb1e1",
  "icons/icon-192.png": "97659436ee86706dd46ed731b6fcca5b",
  "icons/Icon-512-bk.png": "96e752610906ba2a93c65f8abe1645f1",
  "icons/icon-512.png": "7d5473d96ee0f4e46ab372860d710c06",
  "icons/icon.png": "ba4367b3730abbf42a80aed0cf3a0df4",
  "index.html": "ca2210dd11207f1d780d09d6913a3d8b",
  "/": "ca2210dd11207f1d780d09d6913a3d8b",
  "main.dart.js": "b4e96d44f9fd1ac675a00a8d10c2b3ad",
  "manifest.json": "72c168f02f2320d7e599ebac05dc375b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
  "main.dart.js",
  "index.html",
  "assets/LICENSE",
  "assets/AssetManifest.json",
  "assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
      caches.open(TEMP).then((cache) => {
        // Provide a no-cache param to ensure the latest version is downloaded.
        return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
      })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function (event) {
  return event.waitUntil(async function () {
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.match(event.request).then((response) => {
          // Either respond with the cached resource, or perform a fetch and
          // lazily populate the cache. Ensure the resources are not cached
          // by the browser for longer than the service worker expects.
          var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
          return response || fetch(modifiedRequest).then((response) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
      })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
