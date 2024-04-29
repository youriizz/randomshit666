const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add("BB134show");
      } else {
          entry.target.classList.remove("BB134show");
         }
  });
}); 

const hiddenElements = document.querySelectorAll(".BB134test1")
hiddenElements.forEach((el) => observer.observe(el));