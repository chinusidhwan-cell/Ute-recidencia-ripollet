const CACHE_NAME = "control-obra-shell-v1";
const APP_SHELL = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./icon-180.png"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  // Never cache Supabase/API/auth responses or other cross-origin requests.
  if (request.method !== "GET" || url.origin !== self.location.origin) return;
  event.respondWith(fetch(request).catch(() => caches.match(request).then(cached => cached || caches.match("./index.html"))));
});
