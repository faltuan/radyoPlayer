self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("fgold-cache").then((cache) => {
      return cache.addAll(["/radyoplayer/index.html", "/radyoplayer/icon-512.png", "/radyoplayer/manifest.json"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
