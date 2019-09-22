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