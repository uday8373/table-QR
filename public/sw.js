if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const f=e=>a(e,c),r={module:{uri:c},exports:t,require:f};s[c]=Promise.all(i.map((e=>r[e]||f(e)))).then((e=>(n(...e),t)))}}define(["./workbox-07672ec7"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Group.svg",revision:"e76f1ed0514f501bd1f359a5f4d49894"},{url:"/Vector-1.svg",revision:"e545159759c93df5020f21e239cc1cc1"},{url:"/_next/app-build-manifest.json",revision:"3fad2de92577f2e3ff3a58481fff8b76"},{url:"/_next/static/chunks/1004-1b6d9630c05d8409.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/1089-5749f449d1a1bf63.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/13b76428-5a68792917164904.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/164f4fb6-bbc5f103e936c50c.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/174.277d460de34ad70c.js",revision:"277d460de34ad70c"},{url:"/_next/static/chunks/181.1bb07eb4ffecc851.js",revision:"1bb07eb4ffecc851"},{url:"/_next/static/chunks/1838.de9db9911f85992b.js",revision:"de9db9911f85992b"},{url:"/_next/static/chunks/2029-bc659c017f5c848a.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/2174-6b0485bbf8f6c1ac.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/221-c56f018a973b1eec.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/2317-906d3dc13c92b732.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/2457-f6c309ef0b4bc139.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/2492-e87431c98d2684be.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/2626716e-73bf811bf7818e31.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/2828-f2d87dc8b769d634.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/2869-1be7533738585b36.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/302-92297f6ef26b3de7.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/3106-54136dd1203d06f0.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/3593-dff040b60812f61d.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/3720-19170535ae3390da.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/3749-6a74a50c2b921744.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/3795-f0f016843432e0b7.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/4060-e640eec560a5e48f.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/4768-1c8081ebbbcc4fbd.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/4773-eebab581cbbca5aa.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/4973-c635e583fc374e05.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/4e6af11a-2c32d0ff5f688894.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/5432-b65af8a9e2dc608f.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/5489-efeefe8a344be7a4.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/586-b6b40fb50617eaf4.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/5862-508ffea840aac191.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/5956-c8120c595e2282df.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/6004-1892462f935c2fb3.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/6022-41e84eda309757e6.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/6380-4395ba7dd3a18171.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/7017-fdb08b24707a3deb.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/7023-31fd0cf0a2d5c8e1.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/7035.cb726032edead13d.js",revision:"cb726032edead13d"},{url:"/_next/static/chunks/7124-5fdc6a9898b74f07.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/7133-4b9ea1df61087fc5.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/7781-cc5968701fa0a06e.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/8026-db5a0a4e486df819.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/8110-40dfffbc4ba958f2.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/8173-c5216f714c414907.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/8284-9e70e49099167d12.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/8735-00c4a02d45e9b971.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/898-95e5dad1f6b9b94f.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/9246-78cc1f85de80eead.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/9446-4f3516414f58846f.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/9734-be0a655af477e834.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/ad2866b8-b2aba5370a0d21e8.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/%5B...restaurant%5D/page-be60e5b228a6cd33.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/_not-found/page-7829e21dbddf5607.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/book-free-demo/page-e8bc922ccf41a596.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/cancel/page-4ae48742068517a4.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/checkout/page-8769ed540fc5ce68.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/complete/page-41d767dfc8e05c3b.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/delivered/page-5d821145674a566f.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/layout-6a6f4e36bc882ca4.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/leaderboard/page-38c90e8e189af075.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/login/page-6d5768906173a6bd.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/not-found-b4e9a708ce559911.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/order-history/page-68798a5c62f8cfe7.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/page-36bb5ce809b7c5a1.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/preparing/page-79fa100b4c7b3b9e.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/profile/page-71c1e44ce111d2c5.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/app/restaurant-registration/page-f66c7edec3414d12.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/bc98253f.971ada04d38e5cb0.js",revision:"971ada04d38e5cb0"},{url:"/_next/static/chunks/dc112a36-dd72e56818520f67.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/f8e4659f-0baef7734cb5e54c.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/fd9d1056-67aceefe62c744ae.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/main-app-4e41e54ad415004f.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/main-d0ad352a8da7ad08.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/pages/_app-f870474a17b7f2fd.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/pages/_error-c66a4e8afc46f17b.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-c5f9eacd2a890c57.js",revision:"f9Nq7WVCglkasfhRIwGlz"},{url:"/_next/static/css/4df78f2cd73d6b26.css",revision:"4df78f2cd73d6b26"},{url:"/_next/static/css/8677a9a6902ea955.css",revision:"8677a9a6902ea955"},{url:"/_next/static/css/f12df54ab14c9b1d.css",revision:"f12df54ab14c9b1d"},{url:"/_next/static/css/fb9a9af3f6f81ba5.css",revision:"fb9a9af3f6f81ba5"},{url:"/_next/static/f9Nq7WVCglkasfhRIwGlz/_buildManifest.js",revision:"3e2d62a10f4d6bf0b92e14aecf7836f4"},{url:"/_next/static/f9Nq7WVCglkasfhRIwGlz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/Analytics1.d6eb170e.png",revision:"d693bc4cc5de70384a0b0db04f3851a0"},{url:"/_next/static/media/Analytics2.166007fa.png",revision:"97e76cec1a1f644c9f7e3f688cc90db1"},{url:"/_next/static/media/Clock.8d59540d.svg",revision:"3fdc2d988437b3304cfe45134e0adfc3"},{url:"/_next/static/media/Dashboard.8ea4353b.svg",revision:"fafc18762d4b70658b742e3d77f4976f"},{url:"/_next/static/media/Dinner.eeefa2b3.svg",revision:"9b52a17e371e00c10975d7182a30e0c7"},{url:"/_next/static/media/Hand.bbbc97ad.svg",revision:"87637e42db558abf270bfdec7249e03d"},{url:"/_next/static/media/Laptop.a88e5361.png",revision:"e78fb14781f2e106249792f01f52c0f4"},{url:"/_next/static/media/Laptop2.c0b6bf54.svg",revision:"45fb78dfb06249ea621ec527df13a80b"},{url:"/_next/static/media/Mobile.8864111f.svg",revision:"82ead98039281d5c37f541c3a947df2f"},{url:"/_next/static/media/ScanMe.6f4a271d.svg",revision:"2d29a8be413bdd58af59644fbcbfb03a"},{url:"/_next/static/media/aaaa9cc2c27bc3d7.woff2",revision:"1c83c5073046b835341f2152ca527312"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/e3390baf8128c1f3.p.woff2",revision:"014ff6a2e8a0ed6f9bec29d4c245e1c9"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/android-chrome-192x192.png",revision:"16c99de2928864fcf6370bbf9a88c63c"},{url:"/android-chrome-512x512.png",revision:"149488b88ee3e88c96795ada6f71a71d"},{url:"/apple-touch-icon.png",revision:"dbe9ae9c187882cc03bb7f9071627eb2"},{url:"/assets/QRScan.png",revision:"e3192922f22b89dcab7424d92ac67e94"},{url:"/assets/bg-image.jpg",revision:"7e2d37965f80764ed096fa69f8800806"},{url:"/assets/coins.png",revision:"b1501893044ca7b25b88e00fde9806f1"},{url:"/assets/crown.png",revision:"95452ef28e169797316e51c21f1d43c3"},{url:"/assets/hero.png",revision:"9b7f1e59942d0f1d66c39c4f2844578d"},{url:"/assets/placeholder.png",revision:"d3d59e046a90f897a1795e5f3866ef59"},{url:"/assets/qrcode.png",revision:"de63dc71f12b71698c91be4f3648c56a"},{url:"/assets/ranking.png",revision:"188e14554a9911fc92f7f57ed3687a1f"},{url:"/assets/svg/Home-Page/Analytics1.png",revision:"d693bc4cc5de70384a0b0db04f3851a0"},{url:"/assets/svg/Home-Page/Analytics2.png",revision:"97e76cec1a1f644c9f7e3f688cc90db1"},{url:"/assets/svg/Home-Page/BannerTransparent.svg",revision:"b2b8718f48b5e4bcd681c27816b7abc1"},{url:"/assets/svg/Home-Page/Clock.svg",revision:"3fdc2d988437b3304cfe45134e0adfc3"},{url:"/assets/svg/Home-Page/Dashboard.svg",revision:"fafc18762d4b70658b742e3d77f4976f"},{url:"/assets/svg/Home-Page/Dinner.svg",revision:"9b52a17e371e00c10975d7182a30e0c7"},{url:"/assets/svg/Home-Page/Hand.svg",revision:"87637e42db558abf270bfdec7249e03d"},{url:"/assets/svg/Home-Page/Index.js",revision:"eca2e7864994f20ce00a34eedfaad1e2"},{url:"/assets/svg/Home-Page/Laptop.png",revision:"e78fb14781f2e106249792f01f52c0f4"},{url:"/assets/svg/Home-Page/Laptop1.svg",revision:"45fb78dfb06249ea621ec527df13a80b"},{url:"/assets/svg/Home-Page/Laptop2.svg",revision:"45fb78dfb06249ea621ec527df13a80b"},{url:"/assets/svg/Home-Page/Mobile.svg",revision:"82ead98039281d5c37f541c3a947df2f"},{url:"/assets/svg/Home-Page/ScanMe.svg",revision:"2d29a8be413bdd58af59644fbcbfb03a"},{url:"/assets/svg/Home-Page/Screenshot 2024-09-06 at 1.23.43 PM 1.svg",revision:"fafc18762d4b70658b742e3d77f4976f"},{url:"/assets/svg/Home-Page/banner-transparent 1.svg",revision:"b2b8718f48b5e4bcd681c27816b7abc1"},{url:"/assets/svg/PaymentQR.svg",revision:"e149e9c50e7b1a3ce21ab1402afe12be"},{url:"/assets/svg/Vector-2.svg",revision:"8e13ff534696899486844b765abf9c6e"},{url:"/assets/svg/Vector-3.svg",revision:"8016304d8b464d9f02d3fc3300f9b042"},{url:"/assets/svg/Vector-4.svg",revision:"8b2e1782f7442f7ae1315857e8cdd8d3"},{url:"/assets/svg/Vector-5.svg",revision:"c97619d65121e138d8757f74dbdcebc2"},{url:"/assets/svg/Vector-6.svg",revision:"7117cf910f1c87d4005d02c4cd548f91"},{url:"/assets/svg/Vector.svg",revision:"b2137f1bb003a65992e0aedf792f83d9"},{url:"/assets/trophy.png",revision:"717db968c7a56bc260748ac43a3e27a9"},{url:"/browserconfig.xml",revision:"68c9044fa4a08749efb85bb2a4edaede"},{url:"/elements/element.svg",revision:"25793514be909c1590d2a67513c2b6bf"},{url:"/elements/rectangle.svg",revision:"48154e64de1e81d7c10e355064be54e6"},{url:"/favicon-16x16.png",revision:"c1c1d7840bb7091346c626bc5f71b48d"},{url:"/favicon-32x32.png",revision:"24e193e379d5ed31c35aa0b9d14764ce"},{url:"/favicon.ico",revision:"4bddf94ed1c8c7c1e00c3d346db02bff"},{url:"/icon512_maskable.png",revision:"e21de2c6c5bf2ad36d93ab30faba9251"},{url:"/icon512_rounded.png",revision:"ebe9bdb916a77e49b1675efcc47a3532"},{url:"/manifest.json",revision:"3df89c92b782173a61a8b6e3e8ba45e1"},{url:"/mockup/cost.png",revision:"94462f7983d522a8e7fd7909b3ef2424"},{url:"/mockup/cta-element.png",revision:"bff9dd2343d295f53f32774d413a5700"},{url:"/mockup/mockup1.png",revision:"02c4c6c11ed18b0c22540691a29297d7"},{url:"/mockup/order-mockup.png",revision:"706cd72a33262044d2b746cd0fa30de2"},{url:"/mockup/qr-mockup.png",revision:"b9e58d8993159ad951b31e5003bb63d2"},{url:"/mstile-144x144.png",revision:"ca116a532bddbf37696b656288a5a9c2"},{url:"/mstile-150x150.png",revision:"3eb292772f782cfbad53a9d5b4da65c8"},{url:"/mstile-310x150.png",revision:"195d4fb3738f394333e84ae345c3c730"},{url:"/mstile-310x310.png",revision:"9ad25f7b7da076cbf03953cf1aea6ff2"},{url:"/mstile-70x70.png",revision:"1ba7479deecc82f7806cb4d9575d5d15"},{url:"/safari-pinned-tab.svg",revision:"456add58863d5694708d606c3454773f"},{url:"/site.webmanifest",revision:"22a36b7df2717d75493d9174d28391be"},{url:"/sounds/notification.mp3",revision:"7a3389aa036b9739d6a74dcba348c76e"},{url:"/sounds/notification1.mp3",revision:"b4a9472cbe7ed19702bd40e40efaf4fb"},{url:"/sounds/water_droplet.mp3",revision:"1f2f116e6e9c7adb8cab557f8f65197b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
