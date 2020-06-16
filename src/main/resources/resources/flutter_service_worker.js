'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
    "assets/AssetManifest.json": "1456d2c7318230f5d3a44f336748cdf5",
    "assets/FontManifest.json": "96880f5cbd12a15751331cdbdac93202",
    "assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
    "assets/imgs/care.png": "e5a0289054c8624a84535317537c0f67",
    "assets/imgs/collect.png": "ebc77181fc111ee783f0d2c85e4762f9",
    "assets/imgs/discuss.png": "2b4062bf063d863a93833b288d7feecd",
    "assets/imgs/exit.png": "c3457754de35db1b674f5728045ffb8b",
    "assets/imgs/fankui.png": "fef2b75f2c93479a07e4e31622edbdcd",
    "assets/imgs/find.png": "137101450b4a13b8a2bc80b39d3fe3da",
    "assets/imgs/find_select.png": "49aebf147c6bd8d01d378a0d2a371a74",
    "assets/imgs/fuli.png": "51e47b2a694550a851743c24b86ad6e4",
    "assets/imgs/history.png": "5daf00191354b057f4409aef1fe36fb9",
    "assets/imgs/img_default.png": "dffaf288d6f79d2f68b75a82c5c2f8ca",
    "assets/imgs/index1.png": "e56cc097846007879f7a55538dd2f1ac",
    "assets/imgs/index1_select.png": "475e348dc8e0cf9310f2e1d196d0dcb4",
    "assets/imgs/level-1.png": "64f85ea0edd0f994de21c56ed7b64485",
    "assets/imgs/level-2.png": "5d236d0ac7a535e87b2a84fb8a62ce0b",
    "assets/imgs/level.png": "8e89d393db5af49df3e96684fd0b2860",
    "assets/imgs/me.png": "dca4c3ddd3d61b7dc7198dcd467e918d",
    "assets/imgs/me_select.png": "63170ad62ea64d6b8d3195e9e1ff0a80",
    "assets/imgs/msg.png": "341298840f852b6dfb096be3660a8118",
    "assets/imgs/msg_select.png": "ba94e8cfef233f216523660780103b0b",
    "assets/imgs/night.png": "a44d2f00c4a4d6b43895110992d29d75",
    "assets/imgs/order.png": "af49cc61b2f1e58c5fb70986b679e9f1",
    "assets/imgs/room.png": "ad8488271536964bb51430ac0bfa3497",
    "assets/imgs/set.png": "c0c2f79b24f32b378e1fca853e3c77c9",
    "assets/imgs/shop.png": "cd4bb4b1a68102dd0daed716d82f51d4",
    "assets/imgs/sun.png": "b07cba526226a1f2852172e9dffdb435",
    "assets/imgs/team.png": "44edffcca8ec82d646f3ecf2969afad3",
    "assets/imgs/user_default.png": "9e6c0eafcdd257ee33d3a7df4b5cebbf",
    "assets/imgs/version.png": "54329fe1de47eb96315ecd457edf2232",
    "assets/imgs/video.png": "8925607a2dff62ba912244f543a6f421",
    "assets/imgs/video_select.png": "74627ace7fc6957ae1ad117007d5e433",
    "assets/LICENSE": "94e21a7e941756506376ea957f5fc820",
    "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
    "assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
    "favicon.png": "5dcef449791fa27946b3d35ad8803796",
    "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
    "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
    "index.html": "ca2210dd11207f1d780d09d6913a3d8b",
    "/": "ca2210dd11207f1d780d09d6913a3d8b",
    "main.dart.js": "41ab9d5ae6147ca8c652817e8c1f6a4f",
    "manifest.json": "72c168f02f2320d7e599ebac05dc375b"
};

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheName) {
            return caches.delete(cacheName);
        }).then(function (_) {
            return caches.open(CACHE_NAME);
        }).then(function (cache) {
            return cache.addAll(Object.keys(RESOURCES));
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
