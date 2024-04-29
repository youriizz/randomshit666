
let time = 0; // Pour contrôler les animations basées sur le temps

function setup() {
    createCanvas(windowWidth, windowHeight);
  background(255); // Fond blanc
  frameRate(30); // Réduit le taux de rafraîchissement pour un affichage plus stable
  initializeIntersectionObserver();
}

function draw() {
    
        clear();
    
        let gradient = drawingContext.createRadialGradient(width / 2, height / 2, 100, width / 2, height / 2, width);

        // Couleurs ajustées selon les spécifications
        let color1 = color(255, 204, 0, map(noise(frameCount * 0.1), 0, 1, 0, 125)); // Vert Émeraude
        let color2 = color(0, 169, 92, map(noise(frameCount * 0.01), 0, 1, 0, 125)); // Jaune Soleil
        let color3 = color(0, 56, 168, map(noise(frameCount * 0.01), 0, 1, 0, 50)); // Bleu Océan
        let color4 = color(255, 253, 208, map(noise(frameCount * 0.01), 0, 1, 0, 125)); // Blanc Crémeux
    
        // Ajout des couleurs au dégradé à des positions basées sur le bruit
        gradient.addColorStop(map(noise(frameCount * 0.5), 0, 1, 0, 0.2), color1.toString());
        gradient.addColorStop(map(noise(frameCount * 0.05), 0, 1, 0.3, 0.6), color2.toString());
        gradient.addColorStop(map(noise(frameCount * 0.05), 0, 1, 0.6, 1), color3.toString());
        gradient.addColorStop(map(noise(frameCount * 0.01), 0, 1, 0.9, 1), color4.toString());
    

  drawingContext.fillStyle = gradient;
  rect(0, 0, width, height);
}

  function scrollToContainer2() {
    const container = document.querySelector(".BB140container-2");
    if (container) {
      container.scrollIntoView({ behavior: "smooth" });
    }
  }
  function initializeIntersectionObserver() {
    // Vérifie si la largeur de la fenêtre est inférieure à 1350 pixels
    if (window.innerWidth < 1350) {
      // Crée un nouvel IntersectionObserver
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Ajoute la classe 'show' pour rendre l'élément visible
          } else {
            entry.target.classList.remove('show'); // Retire la classe 'show' pour cacher l'élément
          }
        });
      });
  
      // Sélectionne tous les éléments à observer et les applique à l'observer
      const hiddenElements = document.querySelectorAll(".BB140item-1-title-4, .BB140item-2-title-4, .BB140item-3-title-4, .BB140item-4-title-4");
      hiddenElements.forEach((el) => observer.observe(el));
    }
  }
  
  

  