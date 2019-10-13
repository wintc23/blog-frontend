importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06cac600f20ebe81b09d.js",
    "revision": "021618d0a620571d5af50c3c5f860924"
  },
  {
    "url": "/_nuxt/173a75c9acfe8efa922e.js",
    "revision": "735a273aea11411138553386c344268e"
  },
  {
    "url": "/_nuxt/23c88bd068265a3f29cc.js",
    "revision": "abf3b86a290302d298dd2a28a73a686f"
  },
  {
    "url": "/_nuxt/261d3117dbe8987f302d.js",
    "revision": "70937654f8d244ecd4db36f053b885d1"
  },
  {
    "url": "/_nuxt/263908a430fa3a429b74.js",
    "revision": "e6e9b803d100fbdb55e2d204f55687f0"
  },
  {
    "url": "/_nuxt/3b446dbf4dd8ca368c57.js",
    "revision": "4fdf122060ff4de583bfa30c22124727"
  },
  {
    "url": "/_nuxt/4a32700212ac5e1c6ae9.js",
    "revision": "f9400034e0f9984f31f5d29b795aedeb"
  },
  {
    "url": "/_nuxt/72d4562026194ade3be0.js",
    "revision": "c64fb79408c4d12df026e244e498e5c8"
  },
  {
    "url": "/_nuxt/874664e3bf397424f2eb.js",
    "revision": "6d722e7f0ab5b77afb19e8281e8af472"
  },
  {
    "url": "/_nuxt/8dd1064c72133432d693.js",
    "revision": "f5d63dc947d5bec6879a3f608b58b505"
  },
  {
    "url": "/_nuxt/b70af6306a39cd0fc7eb.js",
    "revision": "b5197c33d3e75ab350a2c5746be5c688"
  },
  {
    "url": "/_nuxt/b8cecaf43db16fa696af.js",
    "revision": "acf7383af3c13933001fddb088a552fc"
  },
  {
    "url": "/_nuxt/c3ba403a19b3575324f9.js",
    "revision": "ca52c9bf77894eb76a32c00188e72386"
  },
  {
    "url": "/_nuxt/c83b0d80dc4f845de148.js",
    "revision": "4e7910cc96d61793d75373bb6ea868b0"
  },
  {
    "url": "/_nuxt/dcbcf514c263df74a3fa.js",
    "revision": "8d58925caa2d39845fe04458d39580fe"
  },
  {
    "url": "/_nuxt/e4574afaa0e7cebba92d.js",
    "revision": "6e0620f30c21d88e1a195473627af8e1"
  },
  {
    "url": "/_nuxt/f7516964550d10c41ba3.js",
    "revision": "80025b9dabe180021113a2b7483c1336"
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
