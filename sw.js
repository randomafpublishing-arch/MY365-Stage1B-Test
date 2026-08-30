const CACHE_NAME = 'my365-stage5-test-v1';

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
  './themes/hawaiian/06_fish_hooks.png',
  './themes/hawaiian/07_kapa.png',
  './themes/hawaiian/08_hula.png',
  './themes/hawaiian/09_tahitian.png',
  './themes/hawaiian/10_pohaku.png',
  './themes/hawaiian/11_hae.png',
  './themes/hawaiian/12_ferns.png',
  './themes/hawaiian/13_lauhala.png',
  './themes/hawaiian/14_ipu.png',
  './themes/hawaiian/15_awapuhi.png',
  './themes/hawaiian/16_weapons.png',
  './themes/hawaiian/17_upena.png',
  './themes/hawaiian/18_spearfishing.png',
  './themes/hawaiian/19_hokulea.png',
  './themes/hawaiian/20_boar_jaw.png',
  './themes/hawaiian/21_opihi.png',
  './themes/hawaiian/22_quilt.png',
  './themes/hawaiian/23_pu.png',
  './themes/hawaiian/24_hammah.png',
  './themes/hawaiian/25_hula_instruments.png',
  './themes/dog/01_golden_retriever.png',
  './themes/dog/02_miniature_pinscher.png',
  './themes/dog/03_red_labrador.png',
  './themes/dog/04_rottweiler.png',
  './themes/dog/05_german_shepherd.png',
  './themes/dog/06_blue_pitbull.png',
  './themes/dog/07_cane_corso.png',
  './themes/dog/08_black_bullmastiff.png',
  './themes/dog/09_chocolate_doberman.png',
  './themes/dog/10_alaskan_malamute.png',
  './themes/dog/11_siberian_husky.png',
  './themes/dog/12_great_dane.png',
  './themes/dog/13_belgian_malinois.png',
  './themes/dog/14_american_bully.png',
  './themes/dog/15_boxer.png',
  './themes/dog/16_akita.png',
  './themes/dog/17_great_pyrenees.png',
  './themes/dog/18_dalmatian.png',
  './themes/dog/19_saint_bernard.png',
  './themes/dog/20_bernese.png',
  './themes/dog/21_english_bulldog.png',
  './themes/dog/22_australian_shepherd.png',
  './themes/dog/23_pomeranian.png',
  './themes/dog/24_corgi.png',
  './themes/dog/25_newfoundland.png',
  './themes/zodiac-celestial/01_Aries.png',
  './themes/zodiac-celestial/02_Taurus.png',
  './themes/zodiac-celestial/03_Gemini.png',
  './themes/zodiac-celestial/04_Cancer.png',
  './themes/zodiac-celestial/05_Leo.png',
  './themes/zodiac-celestial/06_Virgo.png',
  './themes/zodiac-celestial/07_Libra.png',
  './themes/zodiac-celestial/08_Scorpio.png',
  './themes/zodiac-celestial/09_Sagittarius.png',
  './themes/zodiac-celestial/10_Capricorn.png',
  './themes/zodiac-celestial/11_Aquarius.png',
  './themes/zodiac-celestial/12_Pisces.png',
  './themes/zodiac-celestial/13_Diamond_Galaxy.png',
  './themes/zodiac-celestial/14_Golden_Lunar_Eclipse.png',
  './themes/zodiac-celestial/15_Saturn_Above_the_Clouds.png',
  './themes/zodiac-celestial/16_Emerald_Nebula.png',
  './themes/zodiac-celestial/17_Moonlit_Cosmic_Ocean_IMAGE_2.png',
  './themes/zodiac-celestial/18_Crystal_Ice_Planet_IMAGE_2.png',
  './themes/zodiac-celestial/19_Rose_Gold_Star_Birth.png',
  './themes/zodiac-celestial/20_Meteor_Shower_Canyon.png',
  './themes/zodiac-celestial/21_Twin_Moons_IMAGE_2.png',
  './themes/zodiac-celestial/22_Celestial_Aurora.png',
  './themes/zodiac-celestial/23_Black_Hole_Luxury.png',
  './themes/zodiac-celestial/24_Cosmic_Waterfall.png',
  './themes/zodiac-celestial/25_RAFP_Celestial_Finale_Edge_of_the_Universe.png'
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
