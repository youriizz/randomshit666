let cw; // cell width
let ch = 1; // cell height
let noiseFactor = 0.05; // Ajustez ce facteur pour contrôler l'influence du bruit

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(100);
  // noLoop(); // Si vous souhaitez désactiver l'actualisation continue, vous pouvez décommenter cette ligne

  // Initialiser la valeur de cw en fonction de la fenêtre initiale
  updateCw();
}

function draw() {
  clear();
  for (let x = 0; x < width; x += cw) {
    for (let y = 0; y < height; y += ch) {
      translate(x, y);

      // Utilisation de noise pour déterminer la position verticale avec le facteur de bruit
      let noiseValue = noise(x * noiseFactor, frameCount * 0.007);
      let startY = map(noiseValue, 0, 1, 0, ch);
      let endY = startY + random(0, noiseFactor);

      stroke((noiseValue * 250), (noiseValue * 250), (noiseValue * 250));
      // Dessiner la ligne avec position verticale déterminée par le bruit
      line(0, startY, cw, endY);

      resetMatrix(); // Réinitialise la matrice de transformation pour la prochaine itération
    }
  }
}

// Redimensionnez le canevas lorsque la fenêtre du navigateur est redimensionnée
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Mettre à jour la valeur de cw lors du redimensionnement de la fenêtre
  updateCw();
}

// Fonction pour mettre à jour la valeur de cw en fonction de la fenêtre
function updateCw() {
  cw = windowWidth / 4; // Ajustez le facteur selon la taille souhaitée
}
