document.addEventListener('DOMContentLoaded', function() {
    const sequence = ["circle", "svg", "circle", "circle", "svg"];
    const sequence2 = ["circle-2", "svg-2", "circle-2", "svg-2", "circle-2"];
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let currentIndex = 0;
    let currentIndex2 = 0;
    let analysers = [];
    let analysers2 = [];
    let audios = document.getElementsByClassName('audio');
    let audios2 = document.getElementsByClassName('audio-2'); // Assurez-vous que cette ligne est placée ici pour initialiser `audios`
    
    // Initialisation des cercles et des audios
    for (let i = 0; i < audios.length; i++) {
        let analyser = audioContext.createAnalyser();
        analysers.push(analyser);
        audios[i].volume = 1.0; // Volume initial plein
    }

    for (let i = 0; i < audios2.length; i++) {
        let analyser = audioContext.createAnalyser();
        analysers2.push(analyser);
        audios2[i].volume = 1.0; // Volume initial plein
    }


    function logAudioVolumes() {
        Array.from(audios).forEach((audio, index) => {
            console.log(`Audio ${index}: Volume = ${audio.volume}`);
        });
    }


    document.getElementById('firstWindow').addEventListener('click', function(event) {
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

    
        if (currentIndex < sequence.length) {
            if (currentIndex > 0) {
                for (let i = 0; i < currentIndex; i++) {
                    if (sequence[i] === "circle") { // S'assure que c'est un cercle pour appliquer la réduction
                        const audioIndex = [...document.querySelectorAll('.circle, .svg-container')].slice(0, i + 1).filter((el, idx) => sequence[idx] === "circle").length - 1;
                        if (audioIndex >= 0 && audioIndex < audios.length) {
                            console.log(`Reducing volume for audio index ${audioIndex}`);
                            audios[audioIndex].volume *= 0.5;
                            logAudioVolumes();  // Log volumes after each change
                        }
                    }
                }
            }

            const itemType = sequence[currentIndex];
            
            if (itemType === "circle") {
                const circleIndex = [...document.querySelectorAll('.circle, .svg-container')].slice(0, currentIndex + 1).filter((el, idx) => sequence[idx] === "circle").length - 1;
                const circle = document.querySelectorAll('.circle')[circleIndex];
                const audio = audios[circleIndex];
                const analyser = analysers[circleIndex];

                circle.style.display = 'flex';
                if (!audio.source) {
                    audio.source = audioContext.createMediaElementSource(audio);
                    audio.source.connect(analyser);
                    analyser.connect(audioContext.destination);
                }
                audio.play();
                animateCircle(circle, analyser, audio);
            } else if (itemType === "svg") {
                const svgIndex = [...document.querySelectorAll('.circle, .svg-container')].slice(0, currentIndex + 1).filter((el, idx) => sequence[idx] === "svg").length - 1;
                const svg = document.querySelectorAll('.svg-container')[svgIndex];
                svg.style.display = 'block';
            }

            currentIndex++;
            checkEndOfSequence(currentIndex, sequence.length);
        }
    });


    document.getElementById('secondWindow').addEventListener('click', function(event) {
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
    
        if (currentIndex2 < sequence2.length) {
            if (currentIndex2 > 0) {
                for (let i = 0; i < currentIndex2; i++) {
                    if (sequence2[i] === "circle-2") { // S'assure que c'est un cercle pour appliquer la réduction
                        const audioIndex = [...document.querySelectorAll('.circle-2, .svg-container-2')].slice(0, i + 1).filter((el, idx) => sequence2[idx] === "circle-2").length - 1;
                        if (audioIndex >= 0 && audioIndex < audios2.length) {
                            audios2[audioIndex].volume *= 0.5;
                        }
                    }
                }
            }
            const itemType = sequence2[currentIndex2];
            
            if (itemType === "circle-2") {
                const circleIndex2 = [...document.querySelectorAll('.circle-2, .svg-container-2')].slice(0, currentIndex2 + 1).filter((el, idx) => sequence2[idx] === "circle-2").length - 1;
                const circle = document.querySelectorAll('.circle-2')[circleIndex2];
                const audio = audios2[circleIndex2];
                const analyser = analysers2[circleIndex2];

                circle.style.display = 'flex';
                if (!audio.source) {
                    audio.source = audioContext.createMediaElementSource(audio);
                    audio.source.connect(analyser);
                    analyser.connect(audioContext.destination);
                }
                audio.play();
                animateCircle(circle, analyser, audio);
            } else if (itemType === "svg-2") {
                const svgIndex = [...document.querySelectorAll('.circle-2, .svg-container-2')].slice(0, currentIndex2 + 1).filter((el, idx) => sequence2[idx] === "svg-2").length - 1;
                const svg = document.querySelectorAll('.svg-container-2')[svgIndex];
                svg.style.display = 'block';
            }
    
            currentIndex2++;
            checkEndOfSequence2(currentIndex2, sequence2.length);

        }
    });
    
    
    document.querySelector('.initialcircle1').addEventListener('click', function() {
        thirdWindow.style.opacity = '0'; // Commence à rendre transparent
        document.getElementById('firstWindow').style.top = '0'; // Fait apparaître la première fenêtre
        setTimeout(() => {
            thirdWindow.style.top = '-100%'; // Déplace vers le haut après la disparition 
        }, 500); // Delai pour la transition
    });

    document.querySelector('.initialcircle2').addEventListener('click', function() {
        thirdWindow.style.opacity = '0'; // Commence à rendre transparent
        document.getElementById('secondWindow').style.top = '0'; // Fait disparaître la troisième fenêtre
        setTimeout(() => {
            thirdWindow.style.top = '100%'; // Déplace vers le haut après la disparition 
        }, 500); // Delai pour la transition
    });



    function stopAllAudios() {
        for (let audio of audios2) {
            if (!audio.paused) {
                audio.pause();
                audio.currentTime = 0; // Optionnel: remettre à zéro si vous voulez recommencer l'audio depuis le début la prochaine fois
            }
        }
        for (let audio of audios) {
            if (!audio.paused) {
                audio.pause();
                audio.currentTime = 0; // Optionnel: remettre à zéro si vous voulez recommencer l'audio depuis le début la prochaine fois
            }
        }
    }

    document.getElementById('goDown').addEventListener('click', function(event) {
        stopAllAudios(); // Arrêter tous les audios en descendant vers la fenêtre 2
        document.getElementById('secondWindow').style.top = '0';
        document.getElementById('firstWindow').style.top = '-100%';
        event.stopPropagation();
    });
    
    document.getElementById('goUp').addEventListener('click', function(event) {
        stopAllAudios(); // Arrêter tous les audios en montant vers la fenêtre 1
        document.getElementById('firstWindow').style.top = '0';
        document.getElementById('secondWindow').style.top = '100%';
        event.stopPropagation();
    });

    document.getElementById('goDown').addEventListener('click', function(event) {
        document.getElementById('firstWindow').style.top = '0'; // Reset position before transition
        document.getElementById('secondWindow').style.top = '100%'; // Ensure it's ready to slide in
        setTimeout(() => {
          document.getElementById('secondWindow').style.top = '0';
          document.getElementById('firstWindow').style.top = '-100%';
        }, 10); // Delay the actual transition slightly to ensure styles are applied
        event.stopPropagation();
    });
    
      
      
    
    // Ajouter la logique de reprise de l'audio correctement dans chaque gestionnaire de clics de fenêtre
    

    function animateCircle(circle, analyser, audio) {
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(dataArray);
        let sum = dataArray.reduce((a, b) => a + b, 0);
        let average = sum / dataArray.length;
        let diameter = Math.max(10, average * 5); // Ajustement du diamètre
        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        if (!audio.paused) {
            requestAnimationFrame(() => animateCircle(circle, analyser, audio));
        }
    }

    function checkEndOfSequence(currentIndex, sequenceLength) {
        if (currentIndex >= sequenceLength) {
            setTimeout(() => {
                const feuxDiv = document.querySelector('.BB140feux');
                feuxDiv.style.display = 'flex'; // Assurez-vous que l'élément est affiché pour que la transition d'opacité fonctionne
                setTimeout(() => {
                    feuxDiv.style.opacity = '1'; // Change l'opacité à 1 pour déclencher la transition
                }, 500); // Délai avant de commencer la transition d'opacité
            }, 500); // Délai avant d'afficher les boutons
        }
    }

    function checkEndOfSequence2(currentIndex2, sequenceLength2) {
        if (currentIndex2 >= sequenceLength2) {
            setTimeout(() => {
                const feuxDiv = document.querySelector('.BB140feux2');
                feuxDiv.style.display = 'flex'; // Assurez-vous que l'élément est affiché pour que la transition d'opacité fonctionne
                setTimeout(() => {
                    feuxDiv.style.opacity = '1'; // Change l'opacité à 1 pour déclencher la transition
                }, 500); // Délai avant de commencer la transition d'opacité
            }, 500); // Délai avant d'afficher les boutons
        }
    }


    
   
    
});

