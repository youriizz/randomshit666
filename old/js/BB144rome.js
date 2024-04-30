
let time = 0; // Pour contrôler les animations basées sur le temps

function setup() {
    createCanvas(windowWidth, windowHeight);
  background(255); // Fond blanc
  frameRate(30); // Réduit le taux de rafraîchissement pour un affichage plus stable
  initializeIntersectionObserver();
}

function draw() {
  clear();
  time += 0.02; // Incrémente le temps

  // Dynamiquement ajuster les rayons min et max avec un effet de "respiration"
  let radiusMin = map(sin(time), -1, 1, 50, 150); // Rayon minimum qui "respire"
  let radiusMax = map(cos(time), -1, 1, 600, width + 400); // Rayon maximum qui "respire"

  let gradient = drawingContext.createRadialGradient(width / 2, height / 2, radiusMin, width / 2, height / 2, radiusMax);

  // Couleurs de base
  let colors = [
    [204, 78, 92],    // Terracotta
    [245, 245, 220],  // Beige
    [255, 215, 0],    // Doré
    [250, 235, 215]   // Blanc Antique
  ];

  // Positions fixes pour un dégradé lisse
  let positions = [0, 0.4, 0.8, 1];

  // Ajuster l'opacité de chaque couleur indépendamment en utilisant le bruit
  for (let i = 0; i < colors.length; i++) {
    // Utilise un décalage unique par couleur pour varier indépendamment
    let noiseValue = noise(time * 0.5 + i * 0.5); // Multiplicateurs ajustés pour la variation
    // Cartographie la valeur de bruit à une plage d'opacité de 0 à 100
    let opacity = map(noiseValue, 0, 1, 50, 90); 
    let colorWithOpacity = color(...colors[i], opacity);
    gradient.addColorStop(positions[i], colorWithOpacity);
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
  
  

  