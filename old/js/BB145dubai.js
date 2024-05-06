function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255); // Fond blanc
  frameRate(100);
  initializeIntersectionObserver();
}

function draw() {
  clear();

  let gradient = drawingContext.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 2);
  
  let colorStops = [
    { color: color(255, 223, 0), position: 0 }, // Doré Luxueux
    { color: color(192, 192, 192), position: 0.001 }, // Argent Métallique
    { color: color(0, 191, 255), position: 0.6 }, // Bleu Ciel Moderne
    { color: color(0, 0, 0), position: 1 } // Noir Élégant
  ];

  colorStops.forEach((stop, index) => {
    let noiseOpacity = noise(frameCount * 0.03 + stop.position); // Varier le bruit avec 'position'
    let colorOpacity = map(noiseOpacity, 0, 1, 0, 255); // Mappage de l'opacité basée sur le bruit
    let cssColor = `rgba(${red(stop.color)}, ${green(stop.color)}, ${blue(stop.color)}, ${colorOpacity / 255})`; // Convertir en chaîne CSS
    gradient.addColorStop(stop.position, cssColor);
  });

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
  
  

  