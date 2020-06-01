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
    "revision": "ac09ebe3b0b13eedb6b6d82d9d9b2e06"
  },
  {
    "url": "assets/css/0.styles.bd960f84.css",
    "revision": "d5ff78ae63cf9f20d184d270f6de621b"
  },
  {
    "url": "assets/img/1.bfa159b9.png",
    "revision": "bfa159b98b82bc55e95ff71fca163da9"
  },
  {
    "url": "assets/img/2.b6aa8253.png",
    "revision": "b6aa8253a861a355eac820f8933627c2"
  },
  {
    "url": "assets/img/3.3.35ba7300.png",
    "revision": "35ba7300459ee140988430a9d312c1db"
  },
  {
    "url": "assets/img/3.4.dd1118df.png",
    "revision": "dd1118dff52ab7315379beffb58390a6"
  },
  {
    "url": "assets/img/3.5.a9f5f5c8.png",
    "revision": "a9f5f5c898e9cbc655616ab8a158d21a"
  },
  {
    "url": "assets/img/3.ce216786.png",
    "revision": "ce216786bfa5c7aae9e90e30e4940b1e"
  },
  {
    "url": "assets/img/4.d123c121.png",
    "revision": "d123c121e7ab28bea2e80715be227f7f"
  },
  {
    "url": "assets/img/5.2.59227aea.png",
    "revision": "59227aeab30368f83cafae799805089f"
  },
  {
    "url": "assets/img/5.5017d528.png",
    "revision": "5017d5286710a2e94af347094410c687"
  },
  {
    "url": "assets/img/add_account.a44d4f13.png",
    "revision": "a44d4f13e7e9d0464efcee23cc5b7fdc"
  },
  {
    "url": "assets/img/add_my_wechat.91d2ab33.png",
    "revision": "91d2ab336f4fe9f4046100b310cbe3c5"
  },
  {
    "url": "assets/img/add-admin@2x.b3588459.png",
    "revision": "b3588459abd96bfbda9bfcfb51b79152"
  },
  {
    "url": "assets/img/app_put_in.e688e412.png",
    "revision": "e688e4125194f6dc5dd7d26b63415133"
  },
  {
    "url": "assets/img/app_put_out.8bc22504.png",
    "revision": "8bc22504b4e63bc941fec0ebcee8416e"
  },
  {
    "url": "assets/img/area_manage.b20cd9b4.png",
    "revision": "b20cd9b43991cbbcca496b990293d0a6"
  },
  {
    "url": "assets/img/asset_in.58e07fd5.png",
    "revision": "58e07fd5118f470474d9e3721853e0fc"
  },
  {
    "url": "assets/img/asset_manage.6f321842.png",
    "revision": "6f3218429575b236217eec5ed5c92bd0"
  },
  {
    "url": "assets/img/asset_record.01b8a0dd.png",
    "revision": "01b8a0ddea0a82cef3f33bb9519cbacb"
  },
  {
    "url": "assets/img/asset_type.3d3ab088.png",
    "revision": "3d3ab0886df690efad15c8c7d77a4e63"
  },
  {
    "url": "assets/img/batch_put_in.60a19933.png",
    "revision": "60a1993371fcb7efc0fd41dd37029c89"
  },
  {
    "url": "assets/img/brand_set.11189d7f.png",
    "revision": "11189d7f80a346b4c0ff73869233db4d"
  },
  {
    "url": "assets/img/change-use-user@2x.958f1314.png",
    "revision": "958f13147859dc2703fb859da8812a88"
  },
  {
    "url": "assets/img/consumable_access_record.ddf735e7.png",
    "revision": "ddf735e712c1dd690b0a0729bb80a7aa"
  },
  {
    "url": "assets/img/consumable_recipients-record.2a6bc8df.png",
    "revision": "2a6bc8df7aacd162502a66241f3745af"
  },
  {
    "url": "assets/img/consumable_stock_record.6965e1c8.png",
    "revision": "6965e1c8a1dd55ad8c23d6fbdd53a542"
  },
  {
    "url": "assets/img/consumable_type.249c6714.png",
    "revision": "249c671497c23a435864285e7ccbda6c"
  },
  {
    "url": "assets/img/consumable.6b0a1a08.png",
    "revision": "6b0a1a08935db9ea4dda466032f6c2ac"
  },
  {
    "url": "assets/img/depot_set.e1017bdd.png",
    "revision": "e1017bdd668226c74dc6c166e4811406"
  },
  {
    "url": "assets/img/desc.a4b835fe.png",
    "revision": "a4b835fed9d95d9b1ab1fa1fdd636972"
  },
  {
    "url": "assets/img/feedback.fa7764aa.png",
    "revision": "fa7764aae240b083974706687b18201c"
  },
  {
    "url": "assets/img/follow_wechat.d361b666.png",
    "revision": "d361b666fc492a505ce4efba3a989442"
  },
  {
    "url": "assets/img/index.ce7c6985.png",
    "revision": "ce7c698549f6f9b6c7f1734dc9b93385"
  },
  {
    "url": "assets/img/label_tmp.70cbe0f2.png",
    "revision": "70cbe0f226f827ebda82c9cfc28cf2e0"
  },
  {
    "url": "assets/img/label-tmp@2x.b4785da0.png",
    "revision": "b4785da09473791247151ad559dc551a"
  },
  {
    "url": "assets/img/login.fcf0614d.png",
    "revision": "fcf0614db669925590bb2ccc85c1c35b"
  },
  {
    "url": "assets/img/my_asset.754c1796.png",
    "revision": "754c17962cc709901057d1297e56b605"
  },
  {
    "url": "assets/img/org&emp.e126aa47.png",
    "revision": "e126aa47e9e8bf830ded987dcd21d7b2"
  },
  {
    "url": "assets/img/pc_add_put_in.6c396935.png",
    "revision": "6c3969359e26e9089b4ffd2c6c7f7e5d"
  },
  {
    "url": "assets/img/pc_add_put_out.0d69d70f.png",
    "revision": "0d69d70f9b89a86f83250e66fa585b4d"
  },
  {
    "url": "assets/img/pc_put_in.cea621dd.png",
    "revision": "cea621dd53461f43e7aa3f01d0b94e1f"
  },
  {
    "url": "assets/img/pc_put_out.85d4ae76.png",
    "revision": "85d4ae7699f66000593d16adb7f7cade"
  },
  {
    "url": "assets/img/print_label.61954987.png",
    "revision": "61954987289edce7e7ca978484b97418"
  },
  {
    "url": "assets/img/print_label.bd0bfdbd.png",
    "revision": "bd0bfdbd99fc469ee901323e1a59ac79"
  },
  {
    "url": "assets/img/print-tmp@2x.7a485324.png",
    "revision": "7a4853246355394968f3c5459799cfa3"
  },
  {
    "url": "assets/img/quick_operation.f1829bc5.png",
    "revision": "f1829bc5ea044be2a2f240c327accf71"
  },
  {
    "url": "assets/img/role.0fd7db35.png",
    "revision": "0fd7db35604a589bab64e32d13d352bd"
  },
  {
    "url": "assets/img/scandown.1777eebc.png",
    "revision": "1777eebcb823058387d5260200938457"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/self_inventory_2.955cf4c8.png",
    "revision": "955cf4c8668361819720fef1ea83ec29"
  },
  {
    "url": "assets/img/self_inventory_3.f77a5a83.png",
    "revision": "f77a5a83276bdea4338ce13f7d5564fa"
  },
  {
    "url": "assets/img/self_inventory.c2c94bee.png",
    "revision": "c2c94beee93605bc7d0da9bcfcacf158"
  },
  {
    "url": "assets/img/share_wechat.da17c674.png",
    "revision": "da17c674e704b501fb960b4d0b47431e"
  },
  {
    "url": "assets/img/supplier.f406fe63.png",
    "revision": "f406fe631c9826324bfa6abdb870a94a"
  },
  {
    "url": "assets/img/wechat.dda81d83.png",
    "revision": "dda81d837224cc2aceb7a6caa1fc76d2"
  },
  {
    "url": "assets/js/10.acd9e58b.js",
    "revision": "55d7746603cf9b432a55d9762baeee3d"
  },
  {
    "url": "assets/js/11.d54d1ea3.js",
    "revision": "712ffd37696907d71b5a0165d3d8116d"
  },
  {
    "url": "assets/js/12.2b0a14c5.js",
    "revision": "eba18e81f2891e1917780fa487524c65"
  },
  {
    "url": "assets/js/13.c624f59e.js",
    "revision": "0b1d94e130977498cd474d0a3a82a34a"
  },
  {
    "url": "assets/js/2.ebf9d22b.js",
    "revision": "96d0fa69141aacdce79e95f647d7b648"
  },
  {
    "url": "assets/js/3.bdc992eb.js",
    "revision": "66d8bed9f56465e1ca6433d36d10e503"
  },
  {
    "url": "assets/js/4.88315528.js",
    "revision": "83531b2ee06fef361dc3e1c332317c05"
  },
  {
    "url": "assets/js/5.6a3e730d.js",
    "revision": "5822c832c95875dfcd64d2253432e781"
  },
  {
    "url": "assets/js/6.593ab682.js",
    "revision": "0094b0ca5c761ab446f8a881c033a009"
  },
  {
    "url": "assets/js/7.53ccefc8.js",
    "revision": "0f457e7bd29d33402b21798a623fc110"
  },
  {
    "url": "assets/js/8.a31bdf41.js",
    "revision": "e73422b3a63ae4bf7aff525cf5a17dd5"
  },
  {
    "url": "assets/js/9.34e876af.js",
    "revision": "9bfe553d1293ecdc222c680ae2fffe72"
  },
  {
    "url": "assets/js/app.56bccde8.js",
    "revision": "c3fc2b996513d23d1ca95f0372136a18"
  },
  {
    "url": "home.png",
    "revision": "0d39991de49f4cb940236a5a813f27db"
  },
  {
    "url": "index.html",
    "revision": "af6c74b5fd4c074c5eeabde53f3d2d9e"
  },
  {
    "url": "logo.png",
    "revision": "03ae3668e14f31f0323a898c75d23435"
  },
  {
    "url": "pc/consumable.html",
    "revision": "16e48486759f11d48251a18dc00708f1"
  },
  {
    "url": "pc/emp_manage.html",
    "revision": "c8a6a04fa5d271b4f57987653fb8e2b8"
  },
  {
    "url": "pc/guide.html",
    "revision": "4f0728732a8eb6cd3aa64f08dcf8cf11"
  },
  {
    "url": "pc/inventory.html",
    "revision": "09a028f5777e9e962539ef06bba8328a"
  },
  {
    "url": "pc/order.html",
    "revision": "22a9b44be9e751988ee81cd2741169e3"
  },
  {
    "url": "pc/q&a.html",
    "revision": "59095b37448e4e49ef50cafab3ce4a92"
  },
  {
    "url": "pc/summary.html",
    "revision": "2b31c5cb10a92c6a82df76cefb305f29"
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
