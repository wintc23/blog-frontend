importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/19b0fc87999f3311a7e5.js",
    "revision": "a54183bef33bb49f6c50128f55e92597"
  },
  {
    "url": "/_nuxt/1c3e63293431fc2576e5.js",
    "revision": "c5171392aca1b2f5a5d8b76f356610ef"
  },
  {
    "url": "/_nuxt/30851164299f0cdaabe2.js",
    "revision": "53a756f9dc4e03ae6b8b1742f2000b18"
  },
  {
    "url": "/_nuxt/3992914c9b6916811567.js",
    "revision": "7b49b528b544b18b5c06453c9236f3f4"
  },
  {
    "url": "/_nuxt/44acdd01a5b77729f19c.js",
    "revision": "5babc4493fae411162371a60292b04d0"
  },
  {
    "url": "/_nuxt/5a6352ca7b7ac2feebf6.js",
    "revision": "d7b1291d132fdd2e15329479d9923269"
  },
  {
    "url": "/_nuxt/5e2cfd84593fce64c54a.js",
    "revision": "96a24aa2ce44d5373a23843d8fa53331"
  },
  {
    "url": "/_nuxt/5e728ffb857501c7e777.js",
    "revision": "76b78afe3ea364e5f696c6316d4118b1"
  },
  {
    "url": "/_nuxt/64143d7ba7a0b4c24a60.js",
    "revision": "a93eef7e648321f93afe41d65b07658e"
  },
  {
    "url": "/_nuxt/7ecce0bf3f141256395d.js",
    "revision": "549cbffd0dce215c7c19e9754c716c7c"
  },
  {
    "url": "/_nuxt/7ee25faeabbac9e6f5df.js",
    "revision": "2bad393e26323ca451dd14953864e5f2"
  },
  {
    "url": "/_nuxt/a5fc2f94f31dc68ed246.js",
    "revision": "46d7edf35d70072bb5f69bf8f2b5ebcf"
  },
  {
    "url": "/_nuxt/c2ae7027b54f0d94eaea.js",
    "revision": "f8c43de24e8fc868515ed2e0f58adce9"
  },
  {
    "url": "/_nuxt/dc8503c1e94f12318698.js",
    "revision": "113e204d99a0e38b20fdcaeac049b8eb"
  },
  {
    "url": "/_nuxt/e0e519f4c1710aed8e0f.js",
    "revision": "2a3432ea2c21dcfa21fb999afd7b53e6"
  },
  {
    "url": "/_nuxt/ef078e87bf9a1053dfc1.js",
    "revision": "cd24b669821fc9e9cf511f352cdc5691"
  },
  {
    "url": "/_nuxt/faab9720179481e4eb89.js",
    "revision": "931c5844bc678fcd1160da8a8e870184"
  },
  {
    "url": "/_nuxt/fb87eb81dea65b61cd64.js",
    "revision": "9435622b9c33c16e2ed18c5fc38e481d"
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
