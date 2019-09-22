const images = document.querySelectorAll('[data-src]');
// console.log(images);
const options = {
    // root: null,
    // rootMargin: '0px',
    // threshold: 1.0
    root: null,
    threshold: 0.2,
    rootMargin: "0px 0px 0px 0px"
};
const observer = new IntersectionObserver(function(entries, observer){
    // console.log(entries);
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        // console.log(entry.target);
        entry.target.src = entry.target.getAttribute('data-src');
        observer.unobserve(entry.target);
    });
}, options);

images.forEach( image => observer.observe(image));


// document.addEventListener("DOMContentLoaded", function() {
//     var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
//     if ("IntersectionObserver" in window) {
//       let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//         entries.forEach(function(entry) {
//           if (entry.isIntersecting) {
//             let lazyImage = entry.target;
//             lazyImage.src = lazyImage.dataset.src;
//             lazyImage.srcset = lazyImage.dataset.srcset;
//             lazyImage.classList.remove("lazy");
//             lazyImageObserver.unobserve(lazyImage);
//           }
//         });
//       });
  
//       lazyImages.forEach(function(lazyImage) {
//         lazyImageObserver.observe(lazyImage);
//       });
//     } else {
//       // Possibly fall back to a more compatible method here
//     }
//   });

/* Lazy loading using JS */
// document.addEventListener("DOMContentLoaded", function() {
//     let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
//     let active = false;
  
//     const lazyLoad = function() {
//       if (active === false) {
//         active = true;
  
//         setTimeout(function() {
//           lazyImages.forEach(function(lazyImage) {
//             if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
//               lazyImage.src = lazyImage.dataset.src;
//               lazyImage.srcset = lazyImage.dataset.srcset;
//               lazyImage.classList.remove("lazy");
  
//               lazyImages = lazyImages.filter(function(image) {
//                 return image !== lazyImage;
//               });
  
//               if (lazyImages.length === 0) {
//                 document.removeEventListener("scroll", lazyLoad);
//                 window.removeEventListener("resize", lazyLoad);
//                 window.removeEventListener("orientationchange", lazyLoad);
//               }
//             }
//           });
  
//           active = false;
//         }, 200);
//       }
//     };
  
//     document.addEventListener("scroll", lazyLoad);
//     window.addEventListener("resize", lazyLoad);
//     window.addEventListener("orientationchange", lazyLoad);
//   });

/* Lazy Loading CSS background images */
// .lazy-background {
//   background-image: url("hero-placeholder.jpg"); /* Placeholder image */
// }

// .lazy-background.visible {
//   background-image: url("hero.jpg"); /* The final image */
// }
// document.addEventListener("DOMContentLoaded", function() {
//     var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));
  
//     if ("IntersectionObserver" in window) {
//       let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
//         entries.forEach(function(entry) {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//             lazyBackgroundObserver.unobserve(entry.target);
//           }
//         });
//       });
  
//       lazyBackgrounds.forEach(function(lazyBackground) {
//         lazyBackgroundObserver.observe(lazyBackground);
//       });
//     }
//   });

/* Lazy loading videos */
/* <video autoplay muted loop playsinline width="610" height="254" poster="one-does-not-simply.jpg">
  <source data-src="one-does-not-simply.webm" type="video/webm">
  <source data-src="one-does-not-simply.mp4" type="video/mp4">
</video> */

// document.addEventListener("DOMContentLoaded", function() {
//     var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
  
//     if ("IntersectionObserver" in window) {
//       var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
//         entries.forEach(function(video) {
//           if (video.isIntersecting) {
//             for (var source in video.target.children) {
//               var videoSource = video.target.children[source];
//               if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
//                 videoSource.src = videoSource.dataset.src;
//               }
//             }
  
//             video.target.load();
//             video.target.classList.remove("lazy");
//             lazyVideoObserver.unobserve(video.target);
//           }
//         });
//       });
  
//       lazyVideos.forEach(function(lazyVideo) {
//         lazyVideoObserver.observe(lazyVideo);
//       });
//     }
//   });