importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01d8a237bce0c833c141.js",
    "revision": "ba914cd8f9845231f842a213a0be0b98"
  },
  {
    "url": "/_nuxt/084f4d0be1762bf2495d.js",
    "revision": "def18e7a6fa607c8ac21243a54bbc108"
  },
  {
    "url": "/_nuxt/0a87acacab2daff95cc3.js",
    "revision": "bc56b6d05eb8c5007ae6cdd5e6fe8d00"
  },
  {
    "url": "/_nuxt/0ddc13d787770e229da1.js",
    "revision": "f3dae2b1a05a135302c013e51c9b08da"
  },
  {
    "url": "/_nuxt/135f51738b354c10ba88.js",
    "revision": "dcdb71a3b66c57c3560336fa0e984cdf"
  },
  {
    "url": "/_nuxt/175f02d7a06670e1387f.js",
    "revision": "cdde199d9cef3277bf49e5c01159a33a"
  },
  {
    "url": "/_nuxt/1a205c9e8ec4653770c4.js",
    "revision": "c063a36feb75a6294bfb2285c230156c"
  },
  {
    "url": "/_nuxt/637178c1c683d15db839.js",
    "revision": "88584a8740da2c5cfa3574dcbabd313f"
  },
  {
    "url": "/_nuxt/7f26d1b36c54ac7c4c0f.js",
    "revision": "9a0571bae237243e502df338aab2695e"
  },
  {
    "url": "/_nuxt/82b3c4597ef5ab113ad2.js",
    "revision": "eb356f3d53bc17760d8603735fee93c1"
  },
  {
    "url": "/_nuxt/84c1f3a7a7f57c87710d.js",
    "revision": "a3cd11483ad151b381ba7f5e3cbbf376"
  },
  {
    "url": "/_nuxt/86e174fbabdc4b927915.js",
    "revision": "dc02a0efb4e0f12f6ef8a49ece18b949"
  },
  {
    "url": "/_nuxt/9ed8f0e3be0f5fcdca87.js",
    "revision": "888197df2eb87e464564f103a927c232"
  },
  {
    "url": "/_nuxt/a6382313075400c4b0ed.js",
    "revision": "80b243699f784c5aa6e14eba920225d0"
  },
  {
    "url": "/_nuxt/c0bc6c15cefb623e75e8.js",
    "revision": "633ec61d41ffc4beb524726bc19930d8"
  },
  {
    "url": "/_nuxt/d0f075e2d942830a8534.js",
    "revision": "fddf3ebabb255cc3d393b7f396c49bad"
  },
  {
    "url": "/_nuxt/d3ed1bbe3830ae5501b3.js",
    "revision": "f91e7eb9c22e6da93ea4a7898f81e39a"
  },
  {
    "url": "/_nuxt/d7f34733c6f92f3f79c5.js",
    "revision": "1786842bea3d25106a3184195322f60e"
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
