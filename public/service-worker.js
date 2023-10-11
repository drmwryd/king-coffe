// service-worker.js

// Instalasi Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('KING-COFFE').then(function(cache) {
      return cache.addAll([
        'http://localhost/king-coffe',
        // Tambahkan sumber daya lain yang ingin Anda cache di sini
      ]);
    })
  );
});

// Aktivasi Service Worker
self.addEventListener('activate', function(event) {
  // Tambahkan logika aktivasi di sini
});

// Intersepsi permintaan fetch
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});