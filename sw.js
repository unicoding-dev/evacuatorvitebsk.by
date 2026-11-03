const CACHE = 'evak-v2';
const HOME = self.registration.scope; // base-путь приложения

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.add(HOME))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.origin !== location.origin) return;

  const homePath = HOME.replace(/\/+$/, '');
  const isHome = u.pathname === HOME || u.pathname === homePath || u.pathname === homePath + '/index.html';

  if (req.mode === 'navigate') {
    if (isHome) {
      // Главная — cache-first: приложение грузится целиком из кэша.
      e.respondWith(
        caches.match(HOME).then((hit) => hit || fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(HOME, copy));
          return res;
        }))
      );
    } else {
      // Остальные страницы — network-first: при открытии берётся свежая версия,
      // оффлайн — последняя сохранённая, иначе главная.
      e.respondWith(
        fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        }).catch(() => caches.match(req).then((hit) => hit || caches.match(HOME)))
      );
    }
  } else {
    // Статика (css/js/шрифты/картинки) — cache-first.
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }))
    );
  }
});
