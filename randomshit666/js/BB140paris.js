

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255); 
    frameRate(100);
    initializeIntersectionObserver();
  }
  
  
  function draw() {
    clear();
  

    let gradient = drawingContext.createRadialGradient(windowWidth / 2, windowHeight / 2, 100, windowWidth / 2, windowHeight / 2, windowWidth);
  

    let linePosition = map(noise(frameCount * 0.06), 0, 1, 300, 900);
  

    let startNoiseOpacity = noise(frameCount * 0.06);
    let color1 = color(233, 182, 187, map(startNoiseOpacity, 0, 1, 0, 255));

    let color2 = color(200, 200, 200, map(startNoiseOpacity, 0, 1, 0, 255));
    let color3 = color(173, 216, 230, map(startNoiseOpacity, 0, 1, 0, 255));
  
    // Fin du dégradé avec bruit pour l'opacité
    let noiseOpacity = noise(frameCount * 0.1);
    let color4 = color(255, 250, 240, map(noiseOpacity, 0, 1, 0, 255));
  
    // Ajout des couleurs au dégradé à des positions spécifiques
    gradient.addColorStop(map(noise(frameCount * 0.05), 0, 1, 0, 0.1), color1);
    gradient.addColorStop(map(noise(frameCount * 0.05), 0, 1, 0.1, 0.3), color2);
    gradient.addColorStop(map(noise(frameCount * 0.05), 0, 1, 0.2, 0.5), color3);
    gradient.addColorStop(map(noise(frameCount * 0.05), 0, 1, 0.4, 1), color4);
  
    drawingContext.fillStyle = gradient;
    rect(0, 0, width, height, 0);
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
  
  

  