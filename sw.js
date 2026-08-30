const CACHE_NAME = 'my365-stage4-test-v1';

const ASSETS = [
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './themes/hawaiian/01_iwa.png',
  './themes/hawaiian/02_puakenikeni.png',
  './themes/hawaiian/03_kalo.png',
  './themes/hawaiian/04_ahuula.png',
  './themes/hawaiian/05_lehua.png',
  './themes/dog/01_golden_retriever.png',
  './themes/dog/02_miniature_pinscher.png',
  './themes/dog/03_red_labrador.png',
  './themes/dog/04_rottweiler.png',
  './themes/dog/05_german_shepherd.png',
  './themes/zodiac-celestial/01_Aries.png',
  './themes/zodiac-celestial/02_Taurus.png',
  './themes/zodiac-celestial/03_Gemini.png',
  './themes/zodiac-celestial/04_Cancer.png',
  './themes/zodiac-celestial/05_Leo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key.startsWith('my365-stage'))
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request);
    })
  );
});
