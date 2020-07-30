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
    "revision": "7a70386f89bf0fe4d52431d27f90ff22"
  },
  {
    "url": "assets/css/0.styles.29276d48.css",
    "revision": "aaa47d84fe1a2440bd2087846fb63dff"
  },
  {
    "url": "assets/img/1.36b62d9f.png",
    "revision": "36b62d9fecdce5088829c927401e0626"
  },
  {
    "url": "assets/img/1.49c05ac5.png",
    "revision": "49c05ac5bb3805607ed26c2737007d53"
  },
  {
    "url": "assets/img/1.86236b00.png",
    "revision": "86236b00011ce5754aad7076c86389ef"
  },
  {
    "url": "assets/img/1.cf30899d.png",
    "revision": "cf30899d36506a71a7e19dd180b823b2"
  },
  {
    "url": "assets/img/10.4b3ffd8e.png",
    "revision": "4b3ffd8ee16417d970baccf5b2695887"
  },
  {
    "url": "assets/img/10.6c36c841.png",
    "revision": "6c36c84172d64ee5b46dc96aeba69a2a"
  },
  {
    "url": "assets/img/10.bd0bfdbd.png",
    "revision": "bd0bfdbd99fc469ee901323e1a59ac79"
  },
  {
    "url": "assets/img/10.bf2238c6.png",
    "revision": "bf2238c6a3e12f847b4c4567b42c6d04"
  },
  {
    "url": "assets/img/10.fd6d3214.png",
    "revision": "fd6d32143bbe01b59c9d1525ba12bdee"
  },
  {
    "url": "assets/img/11.193dc5c8.png",
    "revision": "193dc5c8ced83906023e45377d08d3aa"
  },
  {
    "url": "assets/img/11.2da5da78.png",
    "revision": "2da5da786bd680d9064df25505b4ec64"
  },
  {
    "url": "assets/img/11.7493984f.png",
    "revision": "7493984f0304b0ca7f3aecdd6aa8a7f9"
  },
  {
    "url": "assets/img/11.dd66477c.png",
    "revision": "dd66477c09ac9685fb4276971f5a2b22"
  },
  {
    "url": "assets/img/11.ef0cfdc1.png",
    "revision": "ef0cfdc1eb814907e9f75bf5a02722cd"
  },
  {
    "url": "assets/img/12.1121b25a.png",
    "revision": "1121b25a40c1d5c90d1cfbb50915ab11"
  },
  {
    "url": "assets/img/12.728f8f2d.png",
    "revision": "728f8f2d33a65637025633809e56a276"
  },
  {
    "url": "assets/img/12.8cbcf227.png",
    "revision": "8cbcf227b6233626cb812308b1557fc7"
  },
  {
    "url": "assets/img/12.dda81d83.png",
    "revision": "dda81d837224cc2aceb7a6caa1fc76d2"
  },
  {
    "url": "assets/img/12.f4ccc2f3.png",
    "revision": "f4ccc2f3c7ad5ab1236e73f0cea3f918"
  },
  {
    "url": "assets/img/13.04d63bfd.png",
    "revision": "04d63bfd96e0a56bf142139243894767"
  },
  {
    "url": "assets/img/13.4c78a5ed.png",
    "revision": "4c78a5edaf9721de4fed119325d0fb79"
  },
  {
    "url": "assets/img/13.99962f35.png",
    "revision": "99962f35f55ab3cf0dd03cfde55e0db1"
  },
  {
    "url": "assets/img/13.a6a91548.png",
    "revision": "a6a915484190e755774065ddcc41fd49"
  },
  {
    "url": "assets/img/14.01b8a0dd.png",
    "revision": "01b8a0ddea0a82cef3f33bb9519cbacb"
  },
  {
    "url": "assets/img/14.1be931bf.png",
    "revision": "1be931bfeee3c30664906799d6e894d8"
  },
  {
    "url": "assets/img/14.9aedc728.png",
    "revision": "9aedc72841b95a80af7580b54bcca22b"
  },
  {
    "url": "assets/img/14.c5bc4db0.png",
    "revision": "c5bc4db025450363eb5f241fc463e39b"
  },
  {
    "url": "assets/img/15.1cb59cd3.png",
    "revision": "1cb59cd374d4211497b3197de9febfdf"
  },
  {
    "url": "assets/img/15.98f20fef.png",
    "revision": "98f20fef12ffef0dabbd55bf8e3d4dd0"
  },
  {
    "url": "assets/img/15.c61e489d.png",
    "revision": "c61e489d66e32bf0eddcb4f024076a20"
  },
  {
    "url": "assets/img/15.d5496c68.png",
    "revision": "d5496c680b1cde521a167f8b10fba62a"
  },
  {
    "url": "assets/img/16.2dc75025.png",
    "revision": "2dc75025e6d9e248c5fb59e52576449f"
  },
  {
    "url": "assets/img/16.2f1beaf3.png",
    "revision": "2f1beaf3f27d81afbf5666fe6985d186"
  },
  {
    "url": "assets/img/16.9b34fd99.png",
    "revision": "9b34fd993075d9ea6690c15f58f579f2"
  },
  {
    "url": "assets/img/17.4abc5ad9.png",
    "revision": "4abc5ad9b8b266adc934ea92bd695837"
  },
  {
    "url": "assets/img/17.69d1ff64.png",
    "revision": "69d1ff64c98bcc27399259695cb91a87"
  },
  {
    "url": "assets/img/17.87ea6648.png",
    "revision": "87ea6648d7ca81f7b8669b5e7443803e"
  },
  {
    "url": "assets/img/18.227801a7.png",
    "revision": "227801a74e9d2d406c202498b62e0aff"
  },
  {
    "url": "assets/img/18.7005ced5.png",
    "revision": "7005ced522f1b3a115d3649598c8026d"
  },
  {
    "url": "assets/img/18.78d32565.png",
    "revision": "78d32565edcc654451057e45a6bdcada"
  },
  {
    "url": "assets/img/19.ad6fa62b.png",
    "revision": "ad6fa62ba92be530fd5d87a067c63abb"
  },
  {
    "url": "assets/img/19.c8d29e46.jpg",
    "revision": "c8d29e46038fc01c23afa85301ff6658"
  },
  {
    "url": "assets/img/19.e7566112.png",
    "revision": "e7566112a61b3bc79fa0b8c8364a9604"
  },
  {
    "url": "assets/img/2.188ee401.png",
    "revision": "188ee401a2fb7af1622e904847678137"
  },
  {
    "url": "assets/img/2.2da5f3be.png",
    "revision": "2da5f3bee91819cc8407e852bb864bc8"
  },
  {
    "url": "assets/img/2.648123af.png",
    "revision": "648123affd4e143fbf53a86b586ae149"
  },
  {
    "url": "assets/img/2.75b3cde7.png",
    "revision": "75b3cde78c57b27b6c3c96cedca58fae"
  },
  {
    "url": "assets/img/2.aae16b4d.png",
    "revision": "aae16b4d40ec44732a2e2a3c8ee65f08"
  },
  {
    "url": "assets/img/2.cedfde03.png",
    "revision": "cedfde03f9c761c51c0294177a354eca"
  },
  {
    "url": "assets/img/20.0330c665.jpg",
    "revision": "0330c665d682f4e96a6b1a1b4a4f6080"
  },
  {
    "url": "assets/img/20.36681bd2.png",
    "revision": "36681bd20c51ae550ad3563501d3e1bd"
  },
  {
    "url": "assets/img/20.fbe34620.png",
    "revision": "fbe34620ac486435578d11eeea1918f2"
  },
  {
    "url": "assets/img/21.446e8a76.png",
    "revision": "446e8a767bb667ec0c6b47bdb6481a14"
  },
  {
    "url": "assets/img/21.b4acbe3f.jpg",
    "revision": "b4acbe3ff755f10a2577b07d685f3f4e"
  },
  {
    "url": "assets/img/22.42c58ade.jpg",
    "revision": "42c58adeea765191044a6d42c0bfa5de"
  },
  {
    "url": "assets/img/22.c6862b09.png",
    "revision": "c6862b091a3fae147d8725d1725e7399"
  },
  {
    "url": "assets/img/23.03b75529.jpg",
    "revision": "03b75529c2bef35531f201a7d2b76da6"
  },
  {
    "url": "assets/img/23.6e7c7df7.png",
    "revision": "6e7c7df72bbac6b98227384de8897897"
  },
  {
    "url": "assets/img/24.bd316aae.png",
    "revision": "bd316aaed9006efe086051cc65b7ae41"
  },
  {
    "url": "assets/img/25.c3c587d2.png",
    "revision": "c3c587d2d7e6b0fd01cc7ec751984652"
  },
  {
    "url": "assets/img/26.7c237ac5.png",
    "revision": "7c237ac5f20a9d82d47e97c02728d7b1"
  },
  {
    "url": "assets/img/27.64b414f7.png",
    "revision": "64b414f779426ad3342adb71dc36736a"
  },
  {
    "url": "assets/img/28.c8b0dfd0.png",
    "revision": "c8b0dfd04c1283aa1dbaa8422b9574a7"
  },
  {
    "url": "assets/img/29.4ea09435.png",
    "revision": "4ea09435ff11dd546d979a3d5365da27"
  },
  {
    "url": "assets/img/3.59ac6bce.png",
    "revision": "59ac6bceeea31a930b0f1648daf34b94"
  },
  {
    "url": "assets/img/3.88988627.png",
    "revision": "8898862709fcfe742b94f08c7f65cbb4"
  },
  {
    "url": "assets/img/3.c51fd751.png",
    "revision": "c51fd75181661bd609db11f3f7ff39f1"
  },
  {
    "url": "assets/img/3.e9d198c1.png",
    "revision": "e9d198c11c506b56aae479a11661bf29"
  },
  {
    "url": "assets/img/3.ee795910.png",
    "revision": "ee7959108c2fbcba19ec2b9af0014d33"
  },
  {
    "url": "assets/img/30.f3e5795f.png",
    "revision": "f3e5795fed9e391b75ef4fa75b0b8b14"
  },
  {
    "url": "assets/img/31.cb57b3b4.png",
    "revision": "cb57b3b4efe7b37a9ce81e1f30df365a"
  },
  {
    "url": "assets/img/32.7f3f39e6.png",
    "revision": "7f3f39e66769c0eaefd8b2cb6377a00a"
  },
  {
    "url": "assets/img/33.e0dd5384.png",
    "revision": "e0dd538453be17c375b3e4217725aca5"
  },
  {
    "url": "assets/img/34.2748fe31.png",
    "revision": "2748fe317c66793324312356e8794189"
  },
  {
    "url": "assets/img/35.e96fcc55.png",
    "revision": "e96fcc551629ccbb511321f932f28456"
  },
  {
    "url": "assets/img/36.12db0c02.png",
    "revision": "12db0c0253e0d7b28ab95bbc2dc90c58"
  },
  {
    "url": "assets/img/37.cd7ff20c.png",
    "revision": "cd7ff20c88755c7acb96101e1537b52c"
  },
  {
    "url": "assets/img/38.0c9d9011.png",
    "revision": "0c9d901145272a5e3d87384f9c9cee60"
  },
  {
    "url": "assets/img/39.6e7c7df7.png",
    "revision": "6e7c7df72bbac6b98227384de8897897"
  },
  {
    "url": "assets/img/4.0dd7416a.png",
    "revision": "0dd7416a261af8715ab5ce56808dd416"
  },
  {
    "url": "assets/img/4.5c58d699.png",
    "revision": "5c58d69993a3ffdff0ef101e3ea3fe17"
  },
  {
    "url": "assets/img/4.6a5efe58.png",
    "revision": "6a5efe58f21be1d5723fa543775d8f67"
  },
  {
    "url": "assets/img/4.9660b74f.png",
    "revision": "9660b74f72c797e9e7d0d0b80b8de032"
  },
  {
    "url": "assets/img/4.d9262bb1.png",
    "revision": "d9262bb1b51c12ab0d1fe5ce6bfa078e"
  },
  {
    "url": "assets/img/4.e74c19a5.png",
    "revision": "e74c19a54422c14a9414ddbf98ec958e"
  },
  {
    "url": "assets/img/40.1e48eb0a.png",
    "revision": "1e48eb0a70ef76cf3fb01508fc19455c"
  },
  {
    "url": "assets/img/5.0b059d09.png",
    "revision": "0b059d094561f200d96786b74e479d8b"
  },
  {
    "url": "assets/img/5.53676f78.png",
    "revision": "53676f78336ef48bf22a2ad7f30eac5b"
  },
  {
    "url": "assets/img/5.93251117.png",
    "revision": "93251117360fa091eda8d0ef1de9dbef"
  },
  {
    "url": "assets/img/5.b8882c83.png",
    "revision": "b8882c83d996dea120a42d2d0773e4bb"
  },
  {
    "url": "assets/img/5.e126aa47.png",
    "revision": "e126aa47e9e8bf830ded987dcd21d7b2"
  },
  {
    "url": "assets/img/6.188ee401.png",
    "revision": "188ee401a2fb7af1622e904847678137"
  },
  {
    "url": "assets/img/6.31dd8d01.png",
    "revision": "31dd8d0197f23b18e36ea643e5a9e6b0"
  },
  {
    "url": "assets/img/6.3d3ab088.png",
    "revision": "3d3ab0886df690efad15c8c7d77a4e63"
  },
  {
    "url": "assets/img/6.c35dd8db.png",
    "revision": "c35dd8dbe7320f6594a13a8bbae89c2f"
  },
  {
    "url": "assets/img/6.ccf4436d.png",
    "revision": "ccf4436d0da0f750d5a37602519b9795"
  },
  {
    "url": "assets/img/7.1c67ad8b.png",
    "revision": "1c67ad8bb6bb68417befc9a1964e25c9"
  },
  {
    "url": "assets/img/7.867465d2.png",
    "revision": "867465d207274917114f13ad307eae2d"
  },
  {
    "url": "assets/img/7.b1b3ac3d.png",
    "revision": "b1b3ac3db9e8826f69adc2edb4783897"
  },
  {
    "url": "assets/img/7.b20cd9b4.png",
    "revision": "b20cd9b43991cbbcca496b990293d0a6"
  },
  {
    "url": "assets/img/7.c24491ee.png",
    "revision": "c24491eeaa791c87c09df0577134e10c"
  },
  {
    "url": "assets/img/8.13881dea.png",
    "revision": "13881deaed9e214ad3c6b7aa91ce05cb"
  },
  {
    "url": "assets/img/8.86846741.png",
    "revision": "8684674137f355317c144654c6ec4297"
  },
  {
    "url": "assets/img/8.b4c6d2a5.png",
    "revision": "b4c6d2a5895f0c2a8cbfc8b2c56225c9"
  },
  {
    "url": "assets/img/8.d3053962.png",
    "revision": "d30539624caa0b10ca8f2853bc2aebc8"
  },
  {
    "url": "assets/img/8.d9262bb1.png",
    "revision": "d9262bb1b51c12ab0d1fe5ce6bfa078e"
  },
  {
    "url": "assets/img/9.58e07fd5.png",
    "revision": "58e07fd5118f470474d9e3721853e0fc"
  },
  {
    "url": "assets/img/9.5da9529f.png",
    "revision": "5da9529f7d3f4b2ac283ad8940154800"
  },
  {
    "url": "assets/img/9.cb0b2fcf.png",
    "revision": "cb0b2fcf500182ec2a1d3bada5091997"
  },
  {
    "url": "assets/img/9.e0d89e9c.png",
    "revision": "e0d89e9cb04b70a09c78ef44681ea363"
  },
  {
    "url": "assets/img/9.eb2d86ee.png",
    "revision": "eb2d86ee0a172210ecb62534306895bb"
  },
  {
    "url": "assets/img/app_add_consumbles.710f8ece.png",
    "revision": "710f8ece379c5807433ae5d031a8bc68"
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
    "url": "assets/img/batch_put_in.60a19933.png",
    "revision": "60a1993371fcb7efc0fd41dd37029c89"
  },
  {
    "url": "assets/img/brand_set.11189d7f.png",
    "revision": "11189d7f80a346b4c0ff73869233db4d"
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
    "url": "assets/img/experience.63648d36.png",
    "revision": "63648d36914c112f3ea05ad5e41ac975"
  },
  {
    "url": "assets/img/experience2.f1da610b.png",
    "revision": "f1da610b2a305695425427d02c29dc74"
  },
  {
    "url": "assets/img/link_print.0d1fb69f.png",
    "revision": "0d1fb69fd6c2f470c2630475563691fc"
  },
  {
    "url": "assets/img/link_success.149e0a78.png",
    "revision": "149e0a78d55975afe79d8b237711e60c"
  },
  {
    "url": "assets/img/out_paper.bbae4f35.png",
    "revision": "bbae4f35ba31e4f3dd92897378ceb870"
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
    "url": "assets/img/scandown.1777eebc.png",
    "revision": "1777eebcb823058387d5260200938457"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/stock_record&receive_record.a939be40.png",
    "revision": "a939be401df351a72b5e2e858085dc5a"
  },
  {
    "url": "assets/img/supplier.f406fe63.png",
    "revision": "f406fe631c9826324bfa6abdb870a94a"
  },
  {
    "url": "assets/js/10.3c4bf55e.js",
    "revision": "b6aeb70bff6ff318717d567e81069f70"
  },
  {
    "url": "assets/js/11.8fed2181.js",
    "revision": "1abe20b0261d6ee43e32ff9a1c4d8114"
  },
  {
    "url": "assets/js/12.7cfd03d9.js",
    "revision": "a1b98ddea3f777fc1b55ebcb73570762"
  },
  {
    "url": "assets/js/13.6b770518.js",
    "revision": "b454ad5b4986db3015e19e3a62c339df"
  },
  {
    "url": "assets/js/14.435b6afd.js",
    "revision": "d20876d208e1620960e270ea63583559"
  },
  {
    "url": "assets/js/15.791f12b7.js",
    "revision": "a3948815d480a939a70d8186e8eb882e"
  },
  {
    "url": "assets/js/2.7bf96e14.js",
    "revision": "0d70cee6a82e5dec920f4e388f054daf"
  },
  {
    "url": "assets/js/3.79a60af4.js",
    "revision": "0ddc9b64a3e5b8d2c0f4ac747fb2afea"
  },
  {
    "url": "assets/js/4.2afe926d.js",
    "revision": "c0b5e93b047201eac58684d70b2189fa"
  },
  {
    "url": "assets/js/5.e212a07c.js",
    "revision": "f755f3f6175c7861aefa4df8458b5447"
  },
  {
    "url": "assets/js/6.ed71c25a.js",
    "revision": "ded999186b9b4f0b1a0bc75191859569"
  },
  {
    "url": "assets/js/7.15c06d2a.js",
    "revision": "1520f31b3bd3885bf16930a999a33a39"
  },
  {
    "url": "assets/js/8.d8d3d170.js",
    "revision": "5e405f49f1a3dd00c251eaa2b2ef8bbe"
  },
  {
    "url": "assets/js/9.119b2596.js",
    "revision": "c64a2d603bdbaef4b5ce301c277cdf8c"
  },
  {
    "url": "assets/js/app.1bdc0d39.js",
    "revision": "b49ba8306d86f93fee0323da4bdd0c5a"
  },
  {
    "url": "home.png",
    "revision": "0d39991de49f4cb940236a5a813f27db"
  },
  {
    "url": "index.html",
    "revision": "3114a39105c7213c58393ae00aa162d7"
  },
  {
    "url": "logo.png",
    "revision": "03ae3668e14f31f0323a898c75d23435"
  },
  {
    "url": "pc/consumable.html",
    "revision": "4abc5d1c4b59a723d8dae16ccd22bbe9"
  },
  {
    "url": "pc/emp_manage.html",
    "revision": "8763362155e6faccf2dd04c87edd04a6"
  },
  {
    "url": "pc/finance.html",
    "revision": "fb3c4151c269739c62816f6233f0fb7f"
  },
  {
    "url": "pc/guide.html",
    "revision": "acd521c7f907b053ef670deb02edb4e9"
  },
  {
    "url": "pc/inventory.html",
    "revision": "56cd0874e394dbb19c415fcf28acbca8"
  },
  {
    "url": "pc/order.html",
    "revision": "aa049d483fa4b64149ef7751ea3eeb1a"
  },
  {
    "url": "pc/q&a.html",
    "revision": "c6249621d3110f1948d8ee9dba0aaaab"
  },
  {
    "url": "pc/summary.html",
    "revision": "99e53fd6e68ee20e6630c7cae0871c5c"
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
