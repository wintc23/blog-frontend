importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2b38d3e60026ba133414.js",
    "revision": "29d69f0ca4929eecd39d9d810c521fd6"
  },
  {
    "url": "/_nuxt/2ecfa5833e8115ad4d08.js",
    "revision": "3a4f0e96c49d6904be1cced2f7a55124"
  },
  {
    "url": "/_nuxt/45416a4410b100d93a8c.js",
    "revision": "b92c8d5d6cf9e4bd33bbea9ced0dce94"
  },
  {
    "url": "/_nuxt/473887dfdf6022734122.js",
    "revision": "2b0207fab3744ff83f8b8789b03e3da3"
  },
  {
    "url": "/_nuxt/593458d1ecbd35ce885f.js",
    "revision": "062a25694e1db6fd1a8c819fa5bab106"
  },
  {
    "url": "/_nuxt/5bb21e12f568b2dd7949.js",
    "revision": "b06fbb0426bf78d8f708ed5319f28b5a"
  },
  {
    "url": "/_nuxt/77206308401f2a0f3e76.js",
    "revision": "3b7b9186c946625dba95aade94cf1cc8"
  },
  {
    "url": "/_nuxt/7cd211cfae8d9742384a.js",
    "revision": "6216e7116c22df60aff896b330702308"
  },
  {
    "url": "/_nuxt/833fee42910a8397a4a6.js",
    "revision": "c9af8ca00d492a19d7a17e5859c0392d"
  },
  {
    "url": "/_nuxt/8f49b93037ab3c07eb14.js",
    "revision": "78953c857c1a97cd2db7b9a0c31296c0"
  },
  {
    "url": "/_nuxt/9fad56d6be0b93ad71b2.js",
    "revision": "87aa3a9db2f40fb8a286a48d12ea38cc"
  },
  {
    "url": "/_nuxt/ae9260fe846144157e55.js",
    "revision": "0d4de30b21373b8cb57fc01c86b17cb1"
  },
  {
    "url": "/_nuxt/d3e68946e969c7e98e4d.js",
    "revision": "73d2e93e201e46edf1683e9a5d9864a2"
  },
  {
    "url": "/_nuxt/dfa4d62fed234cc8d3bc.js",
    "revision": "af65e9dd904c018d68f36b67bc26b631"
  },
  {
    "url": "/_nuxt/e03126c8759f447f05be.js",
    "revision": "ec3a8597e04a744aaa736aff83b95f3f"
  },
  {
    "url": "/_nuxt/e35c5f3a3f5f1325692d.js",
    "revision": "864d1be24dee1f7c9e278212aa6ad552"
  },
  {
    "url": "/_nuxt/eab1f5d636002772dc9b.js",
    "revision": "19baea390bfb1a1b1acf88c0fbd475b4"
  }
], {
  "cacheId": "blog",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
