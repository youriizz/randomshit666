document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.BB203magazine-container');
    const arrowRight = document.querySelector('.BB203right');
    const arrowLeft = document.querySelector('.BB203left');
    const header = document.querySelector('.BB203header');
    const websiteLink = document.querySelector('.BB203website a');
    const aproposLink = document.querySelector('.BB203apropos a');
    const projetsLink = document.querySelector('.BB203projets a');
    const leftPageNumber = document.querySelector('.BB203leftNumber');
    const rightPageNumber = document.querySelector('.BB203rightNumber');
  
    let currentPage = 0;
  
    arrowRight.addEventListener('click', function () {
      if (currentPage < container.children.length - 2) {
        currentPage += 2;
        showPages();
      }
    });
  
    arrowLeft.addEventListener('click', function () {
      if (currentPage > 0) {
        currentPage -= 2;
        showPages();
      }
    });
  
    function showPages() {
      const translateValue = -currentPage * 100 + 'vw';
      container.style.transform = 'translateX(' + translateValue + ')';
      updateArrowsVisibility();
      updatePageNumbers();
    }
  
    function updateArrowsVisibility() {
      arrowLeft.style.visibility = currentPage === 0 ? 'hidden' : 'visible';
      arrowRight.style.visibility = currentPage === container.children.length - 2 ? 'hidden' : 'visible';
    }
  
    function updatePageNumbers() {
        const leftPageNum = Math.floor(currentPage / 2) * 2 + 1;
        const rightPageNum = leftPageNum + 1;
      
        leftPageNumber.textContent = leftPageNum;
        rightPageNumber.textContent = rightPageNum;
      }
  
    // Au chargement initial, masquer la flèche gauche
    updateArrowsVisibility();
  
    // Au chargement initial, cacher les liens "à propos" et "projets"
    aproposLink.style.opacity = '0';
    projetsLink.style.opacity = '0';
  
    // Gérer l'effet de survol sur le header
    header.addEventListener('mouseenter', function () {
      aproposLink.style.transition = 'opacity 0.5s ease-in-out';
      projetsLink.style.transition = 'opacity 0.5s ease-in-out';
      aproposLink.style.opacity = '1';
      projetsLink.style.opacity = '1';
    });
  
    header.addEventListener('mouseleave', function () {
      aproposLink.style.transition = 'opacity 0.5s ease-in-out';
      projetsLink.style.transition = 'opacity 0.5s ease-in-out';
      aproposLink.style.opacity = '0';
      projetsLink.style.opacity = '0';
    });
  });
  