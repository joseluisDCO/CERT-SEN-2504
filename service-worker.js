
const CACHE_NAME = "cuestionario-sen-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/icono.png",
  "/manifest.json"
];

// Instala y cachea los archivos necesarios
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Intercepta peticiones para servir desde caché
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
