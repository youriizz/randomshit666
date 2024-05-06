document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.BB202magazine-container');
  const arrowRight = document.querySelector('.BB202right');
  const arrowLeft = document.querySelector('.BB202left');
  const header = document.querySelector('.BB202header');
  const websiteLink = document.querySelector('.BB202website a');
  const aproposLink = document.querySelector('.BB202apropos a');
  const projetsLink = document.querySelector('.BB202projets a');
  const leftPageNumber = document.querySelector('.BB202leftNumber');
  const rightPageNumber = document.querySelector('.BB202rightNumber');
  const pagination = document.getElementById('pagination');

  let currentPage = 0;
  let windowSize = getWindowSize();

  arrowRight.addEventListener('click', function () {
    const maxPage = container.children.length - windowSize;
    const nextPage = currentPage + windowSize;
    const remainingPages = container.children.length - nextPage;

    if (remainingPages >= 0 && remainingPages < windowSize) {
      currentPage = maxPage;
    } else if (nextPage <= maxPage) {
      currentPage = nextPage;
    }

    showPages();
  });

  arrowLeft.addEventListener('click', function () {
    if (currentPage >= windowSize) {
      currentPage -= windowSize;
      showPages();
    }
  });

  function showPages() {
    const translateValue = -currentPage * (100 / windowSize) + 'vw';
    container.style.transform = 'translateX(' + translateValue + ')';
    updateArrowsVisibility();
    updatePageNumbers();
    updatePagination();
  }

  function updateArrowsVisibility() {
    const maxPage = container.children.length - windowSize;
    arrowLeft.style.visibility = currentPage === 0 ? 'hidden' : 'visible';
    arrowRight.style.visibility = currentPage >= maxPage ? 'hidden' : 'visible';
  }

  function updatePageNumbers() {
    const leftPageNum = currentPage + 1;
    const rightPageNum = leftPageNum + windowSize - 1;

    leftPageNumber.textContent = leftPageNum;
    rightPageNumber.textContent = rightPageNum;
  }

  function updatePagination() {
    pagination.innerHTML = '';

    for (let i = 0; i < container.children.length + (windowSize - 1); i += windowSize) {
      const point = document.createElement('span');
      point.className = 'pagination-point';
      point.addEventListener('click', function () {
        currentPage = i;
        showPages();
      });
      pagination.appendChild(point);
    }

    const activePoint = Math.floor(currentPage / windowSize);
    pagination.children[activePoint].classList.add('active');
  }

  function getWindowSize() {
    return window.innerWidth <= 600 ? 1 : 2;
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

  // Mettre à jour la logique lorsque la taille de la fenêtre change
  window.addEventListener('resize', function () {
    windowSize = getWindowSize();
    showPages();
  });

  // Exécutez showPages au chargement initial pour afficher correctement la pagination
  showPages();
});
