import { useEffect } from 'react';
import ReactGA from 'react-ga4';

function useGoogleAnalytics() {
  useEffect(() => {
    // Reemplaza con tu Google Analytics Measurement ID
    const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

    if (!MEASUREMENT_ID) {
      console.warn('Google Analytics Measurement ID no configurado. Agrega VITE_GA_MEASUREMENT_ID al archivo .env');
      return;
    }

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
  }, []);
}

export default useGoogleAnalytics;
