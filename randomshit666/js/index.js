window.addEventListener("pageshow", function() {
    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        video.load(); // Recharge la vidéo
        video.play(); // Essaye de jouer la vidéo
    });
});

