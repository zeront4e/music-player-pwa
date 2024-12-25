self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) => {
        console.log("Add common files to the cache.");

        cache.addAll([
          "/",
          "/index.html",
          "/manifest.json",
          "/service-worker.js",
          "/music.json",
          "/favorite-checkbox-checked.png",
          "/favorite-checkbox-unchecked.png",
          "/icon.png",
          "/icon512_maskable.png",
          "/icon512_rounded.png",
          "/js/bootstrap.min.js",
          "/js/mp3tag.min.js",
          "/js/wavesurfer.min.js",
          "/css/bootstrap.min.css",
          "/css/animate.min.css"
        ]);

        console.log("Add music files to the cache.");

        fetch("music.json").then(response => response.json())
        .then(musicJsonData => {
            musicJsonData.files.forEach(tmpFile => {
              cache.add("/music/" + tmpFile);

              console.log("Add music to cache: " + tmpFile);
            });
        })
        .catch((error) => {
            console.log("Unable to read music.json data. Cause: " + error);
        });
      }),
  );
});
  
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response !== undefined) {
        return response;
      } 
      else {
        return fetch(event.request)
          .then((response) => {
            const responseClone = response.clone();

            caches.open("v1").then((cache) => {
              cache.put(event.request, responseClone);
            });

            return response;
          })
          .catch((error) => {
            console.log("Unable to fetch resource. Cause: " + error);
          });
      }
    }),
  );
});