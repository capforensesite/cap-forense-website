if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>a(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1tN4aWuCHKsb7QYgt6Ugy/_buildManifest.js",revision:"1tN4aWuCHKsb7QYgt6Ugy"},{url:"/_next/static/1tN4aWuCHKsb7QYgt6Ugy/_middlewareManifest.js",revision:"1tN4aWuCHKsb7QYgt6Ugy"},{url:"/_next/static/1tN4aWuCHKsb7QYgt6Ugy/_ssgManifest.js",revision:"1tN4aWuCHKsb7QYgt6Ugy"},{url:"/_next/static/chunks/651.e7ad805f32a091cd.js",revision:"1tN4aWuCHKsb7QYgt6Ugy"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"1tN4aWuCHKsb7QYgt6Ugy"},{url:"/_next/static/chunks/main-0036ae1b5de01f2f.js",revision:"1tN4aWuCHKsb7QYgt6Ugy"},{url:"/_next/static/chunks/pages/_app-df4b96d2d85d88e7.js",revision:"1tN4aWuCHKsb7QYgt6Ugy"},{url:"/_next/static/chunks/pages/_error-9734db4c9fd59614.js",revision:"1tN4aWuCHKsb7QYgt6Ugy"},{url:"/_next/static/chunks/pages/analises-metodologia-02ae8bed92b23aa4.js",revision:"1tN4aWuCHKsb7QYgt6Ugy"},{url:"/_next/static/chunks/pages/index-e946b610ea916476.js",revision:"1tN4aWuCHKsb7QYgt6Ugy"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"1tN4aWuCHKsb7QYgt6Ugy"},{url:"/_next/static/chunks/webpack-5c5912133a3556b5.js",revision:"1tN4aWuCHKsb7QYgt6Ugy"},{url:"/capImages/capForenseBranco.png",revision:"b591c01d5c885fc3780b4842baa32322"},{url:"/capImages/homem1.png",revision:"2a9327c0087926f2226d003235254dda"},{url:"/capImages/logo1.png",revision:"26ab1b51add815dcf636f69f192e56e4"},{url:"/capImages/logo2.png",revision:"6f5d877e9953ccdc075b66448eb4c600"},{url:"/capImages/logoOpacity.png",revision:"cdaec80c9c1a8cd6fa16aced17f18a26"},{url:"/capImages/mulher1.png",revision:"49da7494c9cd3407b087246fbde882e4"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo-gh.svg",revision:"e3a0c31390db72fd374570f4a57c56b0"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"16533bbe34bb10c6839568af6535fe26"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
