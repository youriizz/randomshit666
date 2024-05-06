
let time = 0; // Pour contrôler les animations basées sur le temps

function setup() {
    createCanvas(windowWidth, windowHeight);
  background(255); // Fond blanc
  frameRate(30); // Réduit le taux de rafraîchissement pour un affichage plus stable
  initializeIntersectionObserver();
}

function draw() {
    
        clear();
    
        // Dégradé radial centré avec un rayon qui couvre tout le canvas
        let gradient = drawingContext.createRadialGradient(width / 2, height / 2, 100, width / 2, height / 2, width);
    
        // Les couleurs spécifiées
        let colorRougeVif = color(172, 225, 175); // Rouge Vif
        let colorNoirProfond = color(0, 0, 0); // Noir Profond
        let colorDoreTraditionnel = color(255, 195, 0); // Doré Traditionnel
        let colorBlancNeige = color(114, 47, 55); // Blanc Neige
    
        // Utilisation du bruit pour l'opacité de chaque couleur dans le dégradé
        let noiseOpacityRV = noise(frameCount * 0.02);
        let noiseOpacityNP = noise(frameCount * 0.03);
        let noiseOpacityDT = noise(frameCount * 0.04);
        let noiseOpacityBN = noise(frameCount * 0.05);
    
        colorRougeVif.setAlpha(map(noiseOpacityRV, 0, 1, 0, 150));
        colorNoirProfond.setAlpha(map(noiseOpacityNP, 0, 1, 0, 130));
        colorDoreTraditionnel.setAlpha(map(noiseOpacityDT, 0, 1, 0, 150));
        colorBlancNeige.setAlpha(map(noiseOpacityBN, 0, 1, 0, 150));
    
        // Ajout des couleurs au dégradé à des positions spécifiques, utilisant le bruit pour varier ces positions
        gradient.addColorStop(map(noise(frameCount * 0.1), 0, 1, 0, 0.2), colorRougeVif.toString());
        gradient.addColorStop(map(noise(frameCount * 0.03), 0, 1, 0.1, 0.4), colorNoirProfond.toString());
        gradient.addColorStop(map(noise(frameCount * 0.07), 0, 1, 0.3, 0.75), colorDoreTraditionnel.toString());
        gradient.addColorStop(map(noise(frameCount * 0.05), 0, 1, 0.75, 1), colorBlancNeige.toString());
    

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
  
  

  