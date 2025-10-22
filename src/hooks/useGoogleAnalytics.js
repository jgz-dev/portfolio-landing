import { useEffect } from 'react';

function useGoogleAnalytics() {
  useEffect(() => {
    const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

    if (!MEASUREMENT_ID) {
      console.warn('Google Analytics Measurement ID no configurado. Agrega VITE_GA_MEASUREMENT_ID al archivo .env');
      return;
    }

    // Lazy load ReactGA para no bloquear main thread en móviles lentos
    const loadGA = async () => {
      try {
        const ReactGA = (await import('react-ga4')).default;
        
        // Inicializar Google Analytics
        ReactGA.initialize(MEASUREMENT_ID);

        // Rastrear pageview inicial
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

        // Rastrear cambios de ruta
        const handleRouteChange = () => {
          ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
        };

        window.addEventListener('hashchange', handleRouteChange);

        return () => {
          window.removeEventListener('hashchange', handleRouteChange);
        };
      } catch (error) {
        console.error('Error loading Google Analytics:', error);
      }
    };

    // Usar setTimeout para no bloquear el renderizado inicial
    const timer = setTimeout(loadGA, 2000);

    return () => clearTimeout(timer);
  }, []);
}

export default useGoogleAnalytics;
