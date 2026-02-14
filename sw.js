const CACHE = 'hami-portfolio-v1';
self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) {
    return c.addAll(['./index.html', './manifest.json']);
  }).then(function() { return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
  }).then(function() { return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e) {
  if (e.request.url.startsWith(self.location.origin) && (e.request.mode === 'navigate' || e.request.destination === 'document'))
    e.respondWith(fetch(e.request).catch(function() { return caches.match('./index.html'); }));
});
