const CACHE_NAME = 'my365-stage-production-hdca-zodiac-storage-migration-test-v3-backup-restore-fix-new-icon';

const ASSETS = [
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./themes/hawaiian/01_iwa.png",
  "./themes/hawaiian/02_puakenikeni.png",
  "./themes/hawaiian/03_kalo.png",
  "./themes/hawaiian/04_ahuula.png",
  "./themes/hawaiian/05_lehua.png",
  "./themes/hawaiian/06_fish_hooks.png",
  "./themes/hawaiian/07_kapa.png",
  "./themes/hawaiian/08_hula.png",
  "./themes/hawaiian/09_tahitian.png",
  "./themes/hawaiian/10_pohaku.png",
  "./themes/hawaiian/11_hae.png",
  "./themes/hawaiian/12_ferns.png",
  "./themes/hawaiian/13_lauhala.png",
  "./themes/hawaiian/14_ipu.png",
  "./themes/hawaiian/15_awapuhi.png",
  "./themes/hawaiian/16_weapons.png",
  "./themes/hawaiian/17_upena.png",
  "./themes/hawaiian/18_spearfishing.png",
  "./themes/hawaiian/19_hokulea.png",
  "./themes/hawaiian/20_boar_jaw.png",
  "./themes/hawaiian/21_opihi.png",
  "./themes/hawaiian/22_quilt.png",
  "./themes/hawaiian/23_pu.png",
  "./themes/hawaiian/24_hammah.png",
  "./themes/hawaiian/25_hula_instruments.png",
  "./themes/dog/01_golden_retriever.png",
  "./themes/dog/02_miniature_pinscher.png",
  "./themes/dog/03_red_labrador.png",
  "./themes/dog/04_rottweiler.png",
  "./themes/dog/05_german_shepherd.png",
  "./themes/dog/06_blue_pitbull.png",
  "./themes/dog/07_cane_corso.png",
  "./themes/dog/08_black_bullmastiff.png",
  "./themes/dog/09_chocolate_doberman.png",
  "./themes/dog/10_alaskan_malamute.png",
  "./themes/dog/11_siberian_husky.png",
  "./themes/dog/12_great_dane.png",
  "./themes/dog/13_belgian_malinois.png",
  "./themes/dog/14_american_bully.png",
  "./themes/dog/15_boxer.png",
  "./themes/dog/16_akita.png",
  "./themes/dog/17_great_pyrenees.png",
  "./themes/dog/18_dalmatian.png",
  "./themes/dog/19_saint_bernard.png",
  "./themes/dog/20_bernese.png",
  "./themes/dog/21_english_bulldog.png",
  "./themes/dog/22_australian_shepherd.png",
  "./themes/dog/23_pomeranian.png",
  "./themes/dog/24_corgi.png",
  "./themes/dog/25_newfoundland.png",
  "./themes/country/01_Country_Luxury_Estate.png",
  "./themes/country/02_Golden_Country_Estate.png",
  "./themes/country/03_Midnight_Leather_Boots.png",
  "./themes/country/04_Turquoise_and_Tooled_Leather.png",
  "./themes/country/05_Pearl_Western_Saddle.png",
  "./themes/country/06_Ruby_Western_Buckle.png",
  "./themes/country/07_Sage_Leather_Gear.png",
  "./themes/country/08_Copper_Spurs_and_Leather.png",
  "./themes/country/09_Rustic_Guitar_and_Leather.png",
  "./themes/country/10_Silver_Horseshoe.png",
  "./themes/country/11_Denim_and_Leather.png",
  "./themes/country/12_Emerald_Western_Trunk.png",
  "./themes/country/13_Mountain_Ranch_Overlook.png",
  "./themes/country/14_Country_Porch_Sunset.png",
  "./themes/country/15_Rainy_Country_Barn_Door.png",
  "./themes/country/16_Country_Music_Porch.png",
  "./themes/country/17_Cowboy_Fence_at_Blue_Hour.png",
  "./themes/country/18_Desert_Ranch_Sunrise.png",
  "./themes/country/19_Mountain_Cowboy_Morning.png",
  "./themes/country/20_Texas_Longhorn.png",
  "./themes/country/21_Canyon_Ranch_Horse.png",
  "./themes/country/22_Bull_and_Cowboy_Ranch_Gear.png",
  "./themes/country/23_Horse_and_Cowboy_Tack.png",
  "./themes/country/24_Black_Horse_at_the_Stable.png",
  "./themes/country/25_RAFP_Black-Tie_Cowboy_Finale.png",
  "./themes/armed-forces/01_Army_Obsidian_Field_Gear.png",
  "./themes/armed-forces/02_Navy_Carrier_at_Blue_Hour.png",
  "./themes/armed-forces/03_Air_Force_Fighter_Hangar.png",
  "./themes/armed-forces/04_Marine_Corps_Dress_Blues.png",
  "./themes/armed-forces/05_Coast_Guard_Cutter_in_Rough_Seas.png",
  "./themes/armed-forces/06_Space_Force_Orbital_Operations.png",
  "./themes/armed-forces/07_Army_Main_Battle_Tank.png",
  "./themes/armed-forces/08_Navy_Submarine_at_Dawn.png",
  "./themes/armed-forces/09_Air_Force_Bomber_Runway.png",
  "./themes/armed-forces/10_Marine_Corps_Desert_Field_Kit.png",
  "./themes/armed-forces/11_Army_Black_Hawk_Mountain_Landing.png",
  "./themes/armed-forces/12_Navy_Deep_Sea_Diver.png",
  "./themes/armed-forces/13_Air_Force_Pilot_Ready_Room.png",
  "./themes/armed-forces/14_Marine_Corps_Amphibious_Training.png",
  "./themes/armed-forces/15_Coast_Guard_Rescue_Helicopter.png",
  "./themes/armed-forces/16_Space_Force_Night_Operations.png",
  "./themes/armed-forces/17_Army_Mountain_Humvee.png",
  "./themes/armed-forces/18_Navy_Anchor_and_Naval_Chain.png",
  "./themes/armed-forces/19_Air_Force_Cargo_Aircraft.png",
  "./themes/armed-forces/20_Marine_Corps_Ceremonial_Sword.png",
  "./themes/armed-forces/21_Coast_Guard_Search_and_Rescue_Station.png",
  "./themes/armed-forces/22_Space_Force_Guardian_Uniform_Operations.png",
  "./themes/armed-forces/23_Navy_Special_Operations_Heritage.png",
  "./themes/armed-forces/24_Military_Medical_Medevac.png",
  "./themes/armed-forces/25_US_Armed_Forces_Luxury_Finale.png",
  "./themes/zodiac-celestial/01_Aries.png",
  "./themes/zodiac-celestial/02_Taurus.png",
  "./themes/zodiac-celestial/03_Gemini.png",
  "./themes/zodiac-celestial/04_Cancer.png",
  "./themes/zodiac-celestial/05_Leo.png",
  "./themes/zodiac-celestial/06_Virgo.png",
  "./themes/zodiac-celestial/07_Libra.png",
  "./themes/zodiac-celestial/08_Scorpio.png",
  "./themes/zodiac-celestial/09_Sagittarius.png",
  "./themes/zodiac-celestial/10_Capricorn.png",
  "./themes/zodiac-celestial/11_Aquarius.png",
  "./themes/zodiac-celestial/12_Pisces.png",
  "./themes/zodiac-celestial/13_Diamond_Galaxy.png",
  "./themes/zodiac-celestial/14_Golden_Lunar_Eclipse.png",
  "./themes/zodiac-celestial/15_Saturn_Above_the_Clouds.png",
  "./themes/zodiac-celestial/16_Emerald_Nebula.png",
  "./themes/zodiac-celestial/17_Moonlit_Cosmic_Ocean_IMAGE_2.png",
  "./themes/zodiac-celestial/18_Crystal_Ice_Planet_IMAGE_2.png",
  "./themes/zodiac-celestial/19_Rose_Gold_Star_Birth.png",
  "./themes/zodiac-celestial/20_Meteor_Shower_Canyon.png",
  "./themes/zodiac-celestial/21_Twin_Moons_IMAGE_2.png",
  "./themes/zodiac-celestial/22_Celestial_Aurora.png",
  "./themes/zodiac-celestial/23_Black_Hole_Luxury.png",
  "./themes/zodiac-celestial/24_Cosmic_Waterfall.png",
  "./themes/zodiac-celestial/25_RAFP_Celestial_Finale_Edge_of_the_Universe.png"
];

self.addEventListener('install', event => {
  self.skipWaiting();
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
