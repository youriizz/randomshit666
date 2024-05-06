const globalContainer = document.querySelector(".BB154container-1");
const datewithme = document.querySelector(".BB154datewithme");
const yes = document.querySelector(".BB154yes");
const no = document.querySelector(".BB154no");

let isPressing = false; // Variable de contrôle pour savoir si l'utilisateur est en train de cliquer/toucher
let initialLetterSpacing = 0; // Valeur initiale de l'espacement entre les lettres
let currentLetterSpacing = initialLetterSpacing;
let intervalId = null;

// Cacher les éléments lors du relâchement
datewithme.addEventListener('pointerup', e => {
    isPressing = false; // L'utilisateur a relâché le bouton de la souris/levé le doigt
    e.currentTarget.style.display = 'none';
    e.currentTarget.parentNode.style.display = 'none';
    
    // Commence à réduire l'espacement entre les lettres jusqu'à la valeur initiale
    intervalId = setInterval(() => {
        if (currentLetterSpacing > initialLetterSpacing) {
            currentLetterSpacing -= 0.1; // Ajustez cette valeur pour contrôler la vitesse de réduction
            datewithme.style.letterSpacing = `${currentLetterSpacing}px`;
        } else {
            clearInterval(intervalId);
        }
    }, 10); // Ajustez ce délai pour contrôler la rapidité avec laquelle l'espacement revient à la normale
});

// Augmenter l'espacement lors du déplacement avec pression
datewithme.addEventListener('pointermove', e => {
    if (isPressing) { // Vérifie si l'utilisateur est en train de cliquer/toucher
        currentLetterSpacing += 0.1; // Ajustez cette valeur pour contrôler la rapidité d'augmentation de l'espacement
        datewithme.style.letterSpacing = `${currentLetterSpacing}px`;
    }
});

// Détecter quand l'utilisateur commence à cliquer/toucher
datewithme.addEventListener('pointerdown', e => {
    isPressing = true; // L'utilisateur a commencé à cliquer/toucher
});
