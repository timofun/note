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
    "revision": "29fb10be0354944c9a212f8bc39738a1"
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
    "url": "assets/js/10.69540429.js",
    "revision": "218594715dc72dd5cc609767b43ae666"
  },
  {
    "url": "assets/js/11.a8ad12dc.js",
    "revision": "65326da944aac2171695e3b6b19df80e"
  },
  {
    "url": "assets/js/12.91659095.js",
    "revision": "781fa7702c0bfebad17de29d1d56ef10"
  },
  {
    "url": "assets/js/13.636a4b81.js",
    "revision": "7f116f75db376ee412618ab82502d70b"
  },
  {
    "url": "assets/js/14.bf293f06.js",
    "revision": "6e24d989310983e58da0e72824cfb69c"
  },
  {
    "url": "assets/js/15.7ad7c87a.js",
    "revision": "2b12ab8e23e379896f95050a30a23c01"
  },
  {
    "url": "assets/js/16.adfe0086.js",
    "revision": "e6d59f97d89d67890c05b4882074c10e"
  },
  {
    "url": "assets/js/17.0fe0ce34.js",
    "revision": "0476f0a0ef50153d52e39c411dcd0aff"
  },
  {
    "url": "assets/js/18.571ea446.js",
    "revision": "070246bfdc1ab0b35e20f43b0922c92b"
  },
  {
    "url": "assets/js/19.4f936bc4.js",
    "revision": "c0b04615bd44e49c5dc8b6c7c1e2e856"
  },
  {
    "url": "assets/js/2.5d60ff05.js",
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
    "url": "assets/js/5.1796766d.js",
    "revision": "e0232cf8ce1663a511a3ef55e1820ed6"
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
    "url": "assets/js/8.7dcb691f.js",
    "revision": "5f4546d1fe5fddfd4165256e1241fcd1"
  },
  {
    "url": "assets/js/9.5f493ca2.js",
    "revision": "7581cf668e34dc5b98a0faa43184abc4"
  },
  {
    "url": "assets/js/app.62a30812.js",
    "revision": "ba861fab9ccc516f2d781f351317defa"
  },
  {
    "url": "css.html",
    "revision": "bb906128fffb16a054167a92a4fc6c72"
  },
  {
    "url": "engineered.html",
    "revision": "63e7305f3244d9e84dbb44b0a986c59d"
  },
  {
    "url": "flutter.html",
    "revision": "ea17569ba62eda8af2e4f11a300d7b3f"
  },
  {
    "url": "git.html",
    "revision": "b419854ccd19542e069c4183299876f7"
  },
  {
    "url": "index.html",
    "revision": "11fe83b79779e74e9731cbd0b5c9cf34"
  },
  {
    "url": "js.html",
    "revision": "ebbf58066c0242e22c9bcb81671639db"
  },
  {
    "url": "mac.html",
    "revision": "a372ced86bed1b64a9e73e0479b8e322"
  },
  {
    "url": "mini.html",
    "revision": "0fd1030c9c492970ce0969650ffd2e41"
  },
  {
    "url": "optimize.html",
    "revision": "03baf7e7282a6710cefdab08e123c846"
  },
  {
    "url": "order.html",
    "revision": "bb131d7319b44174cc1405ac0f22128b"
  },
  {
    "url": "react.html",
    "revision": "3165aa3aa39c4eec99f6a14594ec56a9"
  },
  {
    "url": "vue.html",
    "revision": "d1c8d625b1e304dad58597a6be6c9df4"
  },
  {
    "url": "webstorm.html",
    "revision": "d3ce3a3fd6739103fe6f8e01f164224e"
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
