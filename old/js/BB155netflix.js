const gallery = document.querySelector('.gallery');

gallery.addEventListener('mouseover', () => {
    gallery.style.animationPlayState = 'paused';
});

gallery.addEventListener('mouseout', () => {
    gallery.style.animationPlayState = 'running';
});

gallery.addEventListener('scroll', () => {
    gallery.style.animationPlayState = 'paused';
});
