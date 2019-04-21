importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00e6804e5abf7733e7f2.js",
    "revision": "95c04d6d252de961015e704ea1049d0a"
  },
  {
    "url": "/_nuxt/228390f3a00a96771f08.js",
    "revision": "a45c3e7754aeb9508da29cdf7ceb51a1"
  },
  {
    "url": "/_nuxt/379064d473c692fa5eed.js",
    "revision": "0d6829f4e5936c7ec4323fd9e94d6c25"
  },
  {
    "url": "/_nuxt/3a3e86c32877db14de69.js",
    "revision": "6fabb9a5d22f69ac7e0071aa0df059d5"
  },
  {
    "url": "/_nuxt/64eb50aa773be403e803.js",
    "revision": "2842736c766c4f3442095818702ea2b7"
  },
  {
    "url": "/_nuxt/68d11de2ee0e35bdb408.js",
    "revision": "b200f7a484814dda15fe504fe31213e2"
  },
  {
    "url": "/_nuxt/6f71e7d86c19dd872c12.js",
    "revision": "ba0d15cfa95039d6dfdf2bddca375870"
  },
  {
    "url": "/_nuxt/7214851a9cb4a91a53e2.js",
    "revision": "33bf3e41540cbca28f3a0f77b9bdfa07"
  },
  {
    "url": "/_nuxt/76cb513bb617a90f6583.js",
    "revision": "4c3e4a7532490ea95db5e0050e69cbd3"
  },
  {
    "url": "/_nuxt/8394a7d26ce5c0be82bc.js",
    "revision": "6163830056a20e5f2b7f6ebd7dee0b2b"
  },
  {
    "url": "/_nuxt/8a3116a1cebb42c7b1b4.js",
    "revision": "31f4c71ec03a9b20f02788a1e0b77e14"
  },
  {
    "url": "/_nuxt/9b91a33720155e2423de.js",
    "revision": "7126821447c650ed938c58d963c2a7f8"
  },
  {
    "url": "/_nuxt/ac57438e093fb3f70782.js",
    "revision": "773723dfeb4d33588ce0c9f01633365d"
  },
  {
    "url": "/_nuxt/baba37e9b17e7df77002.js",
    "revision": "8efc3d3525661822882a483a8dab5d65"
  },
  {
    "url": "/_nuxt/cac2ea939daf7d3b0e5a.js",
    "revision": "c0098cd86164d822ef2c8a6961341d94"
  },
  {
    "url": "/_nuxt/d9ef2f6d74357478611f.js",
    "revision": "0b55d6766080e0065941a832c11b2e60"
  },
  {
    "url": "/_nuxt/eca4b82f57e3b3896ddc.js",
    "revision": "c1004bdf0d96b5094e28c14e92e888aa"
  },
  {
    "url": "/_nuxt/f4607bf448e3f8029270.js",
    "revision": "04939c361a06a5d2f6fabfca536a9936"
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
