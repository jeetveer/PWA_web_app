let cacheData = "appV1";

// yanha par humne jo file load hoti hai use cache storage me store kar liya hai taki offile bhi use kar sake
this.addEventListener("install", (event) => {
    event.waitUntill(
        caches.open(cacheData)
            .then((cache) => {
                cache.addAll([
                    "/static/js/bundle.js",
                    // "/static/js/main.chunk.js",
                    // "/static/js/0.chunk.js",
                    "/index.html",
                    "/",
                    "/Home",
                    "/about",
                    "/users"
                ])
            })
    )
})

// ab jo cache storage me jo file hai use offline use karna hai to use fetch karna hoga 

this.addEventListener("fetch", (event)=>{
    if((!navigator.onLine)){    // is line ka matlab hai ki jab Internet na ho tabhi ye data Chache storage me se fetch ho.
        event.respondWith(
            caches.match(event.request)
            .then((result)=>{
                if(result){
                    return result;
                }
                let requestUrl = event.request.clone();  // yah code 
                return fetch(requestUrl)
            })
        )
    }
})