/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2ff6d22e12d208036dce233cd2cc178d"
  },
  {
    "url": "assets/css/0.styles.2e8d7571.css",
    "revision": "c139759ad1b98063b83ebe2311e31700"
  },
  {
    "url": "assets/img/1.d6048970.png",
    "revision": "d604897048887487c249fd6d2e7f9ff3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2a06032d.js",
    "revision": "439558df747647599f45cb7bf2fc9083"
  },
  {
    "url": "assets/js/11.0abc1af3.js",
    "revision": "da4dead3c93b6b576872c37db1d9f23c"
  },
  {
    "url": "assets/js/12.a3ca932a.js",
    "revision": "4a0a04fa485ee7e0ca327805424f51b1"
  },
  {
    "url": "assets/js/13.7508d28d.js",
    "revision": "12a4faacfe885013007c780ae2d7fa04"
  },
  {
    "url": "assets/js/14.e7fc0364.js",
    "revision": "c6cf6e2bee604b8b4a64990acd411d8e"
  },
  {
    "url": "assets/js/15.d064bc7c.js",
    "revision": "d65bb0fd8f367cbd83d1f7bf85c311e0"
  },
  {
    "url": "assets/js/16.adfe0086.js",
    "revision": "e6d59f97d89d67890c05b4882074c10e"
  },
  {
    "url": "assets/js/17.f229c7a8.js",
    "revision": "bdb02e41d9f90a6809766d2fdc04f268"
  },
  {
    "url": "assets/js/18.4dbc8b36.js",
    "revision": "e4c58bfa76192de458db6e7835f3ee7c"
  },
  {
    "url": "assets/js/19.4f936bc4.js",
    "revision": "c0b04615bd44e49c5dc8b6c7c1e2e856"
  },
  {
    "url": "assets/js/2.f83a357c.js",
    "revision": "c8a74b764340b63e6856d0d06292b7c9"
  },
  {
    "url": "assets/js/3.634cdf67.js",
    "revision": "b4546d80a5ddbb27c51dffc00f65e3a9"
  },
  {
    "url": "assets/js/4.d32f6b8d.js",
    "revision": "4db1b79d8c273f3b919addd81fe56bf9"
  },
  {
    "url": "assets/js/5.b9617a19.js",
    "revision": "9ea2ed3a6c82c58cd172409dc35205b4"
  },
  {
    "url": "assets/js/6.dea30879.js",
    "revision": "29a976ea171b63c52f7af276d7b9e723"
  },
  {
    "url": "assets/js/7.9e7bafe1.js",
    "revision": "3e28c752d241390045257f0f5bb7727e"
  },
  {
    "url": "assets/js/8.334bd4d8.js",
    "revision": "86d6f28003237b9047b97af2e69c01fd"
  },
  {
    "url": "assets/js/9.0adc492f.js",
    "revision": "535bba37c1b9c51796686e030c006d60"
  },
  {
    "url": "assets/js/app.a81d8985.js",
    "revision": "ebab9a5d02195eca768cb1057aa67a03"
  },
  {
    "url": "css.html",
    "revision": "0fb5bcfce9134b79e8fa4a2f7e08729f"
  },
  {
    "url": "engineered.html",
    "revision": "58356a7d7cccb86fd60c169d0802e859"
  },
  {
    "url": "flutter.html",
    "revision": "413efaeaa4bf385582250ac1aa8c71d5"
  },
  {
    "url": "git.html",
    "revision": "879d9a470753f1b5e3f10c4236d5d781"
  },
  {
    "url": "index.html",
    "revision": "2ada709bcc13b6cd2370e44121bc6189"
  },
  {
    "url": "js.html",
    "revision": "3ed358f1a80f4d101a1e7db58c42ad00"
  },
  {
    "url": "mac.html",
    "revision": "7b157b9f30afa3e59eab2f1b2a704598"
  },
  {
    "url": "mini.html",
    "revision": "b3cdb1a8430c004f390e1b47fa64ed9c"
  },
  {
    "url": "optimize.html",
    "revision": "74df47a4d2c666ba95fbadc0e490c681"
  },
  {
    "url": "order.html",
    "revision": "54a4d4c3a4fb38b0119e4bfdaaae0b7f"
  },
  {
    "url": "react.html",
    "revision": "73149c8fa680c146318c347556b8314e"
  },
  {
    "url": "vue.html",
    "revision": "e244f04ef842c3144d58f3c224613aa2"
  },
  {
    "url": "webstorm.html",
    "revision": "c1fa987c1be2b1104309d717e4282f94"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
