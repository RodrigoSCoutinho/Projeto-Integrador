export const setupScrollAnimations = () => {
    document.addEventListener("DOMContentLoaded", function () {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideTop');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
  
      elements.forEach(element => {
        observer.observe(element);
      });
    });
  };
  