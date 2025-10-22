import { useEffect } from 'react';

function useSmoothScroll() {
  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (!navbar) return;

    // Actualizar altura de la navbar
    const updateNavHeight = () => {
      const navHeight = navbar.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
    };

    // Llamada inicial
    updateNavHeight();

    // Observar cambios de tamaño de la navbar
    const resizeObserver = new ResizeObserver(updateNavHeight);
    resizeObserver.observe(navbar);

    // Actualizar altura en resize de ventana (solo cuando necesario)
    window.addEventListener('resize', updateNavHeight);

    // Manejar clicks en anchors
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      // Validar que sea un anchor válido
      if (!href || href === '#') return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      e.preventDefault();

      // Calcular posición con offset de la navbar
      const navHeight = navbar.getBoundingClientRect().height;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - navHeight;

      // Scroll suave
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateNavHeight);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
}

export default useSmoothScroll;