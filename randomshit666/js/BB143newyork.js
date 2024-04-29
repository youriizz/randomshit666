
let time = 0; // Pour contrôler les animations basées sur le temps

function setup() {
    createCanvas(windowWidth, windowHeight);
  background(255); // Fond blanc
  frameRate(30); // Réduit le taux de rafraîchissement pour un affichage plus stable
  initializeIntersectionObserver();
}


function draw() {
    clear();
  
    let time = frameCount * 0.01;
    let radiusMovement = noise(time) * 1500 - 100; // Mouvement de -100 à +100
  
    let outerRadius = width / 2 + radiusMovement; // Augmentation de la taille et ajout du mouvement
    let gradient = drawingContext.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, outerRadius);
  
    let baseColors = [
      color(0, 0, 0), // Gris Acier
      color(0, 0, 0), // Noir Profond
      color(255, 215, 0), // Jaune Taxi
      color(255, 255, 255) // Blanc Pur
    ];
  
    let numberOfPlages = 4;
    let plageSize = 1 / numberOfPlages;
  
    for (let i = 0; i <= 1; i += plageSize) {
      let colorIndex = Math.floor(noise(time + i) * baseColors.length) % baseColors.length;
      let nextColorIndex = (colorIndex + 1) % baseColors.length;
      let lerpFactor = noise(time + i + 10);
  
      let color = lerpColor(baseColors[colorIndex], baseColors[nextColorIndex], lerpFactor);
  
      let noiseOpacity = noise(time + i * 5);
      let colorOpacity = map(noiseOpacity, 0, 1, 50, 155);
      color.setAlpha(colorOpacity);
  
      let startPos = i;
      let endPos = i + plageSize + 1;
  
      gradient.addColorStop(Math.max(0, startPos), color.toString());
      gradient.addColorStop(Math.min(1, endPos), color.toString());
    }

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
  
  

  