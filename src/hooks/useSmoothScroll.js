import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    // keep the CSS variable --nav-height in sync with the actual nav height
    const updateNavHeight = (h) => {
      if (typeof h === 'number') {
        document.documentElement.style.setProperty('--nav-height', `${Math.ceil(h) + 12}px`);
        return;
      }
      const nav = document.querySelector('nav');
      const navHeight = nav ? Math.ceil(nav.getBoundingClientRect().height) : 120;
      document.documentElement.style.setProperty('--nav-height', `${navHeight + 12}px`);
    };

    // initialize
    updateNavHeight();

    // Use ResizeObserver to react to dynamic changes in nav height (better than only resize)
    let ro;
    const navEl = document.querySelector('nav');
    if (navEl && 'ResizeObserver' in window) {
      ro = new ResizeObserver(entries => {
        for (const entry of entries) {
          const h = entry.contentRect ? entry.contentRect.height : entry.target.getBoundingClientRect().height;
          updateNavHeight(h);
        }
      });
      ro.observe(navEl);
    } else {
      // fallback to window resize
      window.addEventListener('resize', updateNavHeight);
    }

    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();

      // special case: top
      if (href === '#' || href === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Use native scrollIntoView and let the CSS pseudo-element offset handle the final position
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
  if (ro) ro.disconnect();
  else window.removeEventListener('resize', updateNavHeight);
    };
  }, []);
};

export default useSmoothScroll;
