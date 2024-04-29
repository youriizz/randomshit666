document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.draggable');

    elements.forEach(elem => {
        let isDragging = false;
        let x = 0;
        let y = 0;
        let moved = false;
        let start = elem.getBoundingClientRect(); //get initial element position


        const dragStart = (e) => {
            // Pour les événements tactiles, preventDefault évite des comportements par défaut comme le scroll
            if (e.type === 'touchstart') {
                e.preventDefault();
            }
            isDragging = true;
            
            const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
            x = clientX - elem.offsetLeft;
            y = clientY - elem.offsetTop;
            elem.style.cursor = 'grabbing';

            elem.style.backgroundColor = 'transparent';
            
            if (!moved) { // get initial element position
                start = elem.getBoundingClientRect();
            }

            moved = true;

        };

        const dragging = (e) => {
            if (isDragging) {
                e.preventDefault();
                const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
                const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;

                elem.style.position = 'absolute';
                elem.style.left = clientX - x + 'px';
                elem.style.top = clientY - y + 'px';

            }
        };

        const dragEnd = () => {
            if (isDragging) {
                isDragging = false;
                elem.style.cursor = 'grab';
                
                let end = elem.getBoundingClientRect();
                let distance = Math.sqrt((end.left - start.left)**2 + (end.top - start.top)**2);

                // appelle la fonction si l'elem a bougé d'une certaine distance
                if (distance > 100){ 
                    handleDragEnd(elem.id);
                    elem.style.opacity = '0.3'; // Change l'opacité à 50%
                } else {
                    elem.style.backgroundColor = 'rgb(197, 197, 197)';
                }
                    
            }
        };
        
        function handleDragEnd(elemId) {
            // Utilisez elemId pour déterminer quel texte a été déplacé et quel texte montrer ensuite
            if (elemId === 'draggable-text-1') {
                document.getElementById('draggable-text-2').style.display = 'block'; // Affiche texte-2 après le drag de texte-1
            } else if (elemId === 'draggable-text-2') {
                document.getElementById('draggable-image-1').style.display = 'block'; // Affiche texte-3 après le drag de texte-2
            } else if (elemId === 'draggable-image-1') {
                document.getElementById('draggable-text-3').style.display = 'block'; // Affiche texte-3 après le drag de texte-2
            } else if (elemId === 'draggable-text-3') {
                document.getElementById('draggable-text-4').style.display = 'block'; // Affiche texte-3 après le drag de texte-2
            } else if (elemId === 'draggable-text-4') {
                document.getElementById('draggable-image-2').style.display = 'block'; // Affiche texte-3 après le drag de texte-2
            } else if (elemId === 'draggable-image-2') {
                document.getElementById('draggable-text-5').style.display = 'block'; // Affiche texte-3 après le drag de texte-2
            } else if (elemId === 'draggable-text-5') {
                document.getElementById('draggable-text-6').style.display = 'block'; // Affiche texte-3 après le drag de texte-2
            } else if (elemId === 'draggable-text-6') {
                document.getElementById('draggable-text-7').style.display = 'block'; // Affiche texte-3 après le drag de texte-2
            } else if (elemId === 'draggable-text-7') {
                document.getElementById('draggable-text-8').style.display = 'block'; // Affiche texte-3 après le drag de texte-2
            } else if (elemId === 'draggable-text-8') {
                document.getElementById('draggable-text-9').style.display = 'block'; // Affiche texte-3 après le drag de texte-2
            } else if (elemId === 'draggable-text-9') {
                document.getElementById('draggable-image-3').style.display = 'block'; // Affiche texte-3 après le drag de texte-2
            } else if (elemId === 'draggable-image-3') {
                document.getElementById('BB151feux-container').style.display = 'block'; // Affiche texte-3 après le drag de texte-2
            }
            
        }
        

        // Événements de souris
        elem.addEventListener('mousedown', dragStart);
        document.addEventListener('mousemove', dragging);
        document.addEventListener('mouseup', dragEnd);

        // Événements tactiles
        elem.addEventListener('touchstart', dragStart);
        document.addEventListener('touchmove', dragging, {passive: false}); // preventDefault dans touchmove nécessite {passive: false}
        document.addEventListener('touchend', dragEnd);
    });
});
