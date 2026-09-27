import { useEffect, useState } from 'react';
import { getLocalMinutes } from '../utils/dayPalette';

export default function useLocalMinutes() {
  const [minutes, setMinutes] = useState(getLocalMinutes);

  useEffect(() => {
    const refresh = () => {
      if (!document.hidden) setMinutes(getLocalMinutes());
    };
    // Read the wall clock each time: this handles timezone/DST changes and sleep.
    const timer = window.setInterval(refresh, 15000);
    document.addEventListener('visibilitychange', refresh);
    window.addEventListener('focus', refresh);
    window.addEventListener('pageshow', refresh);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener('visibilitychange', refresh);
      window.removeEventListener('focus', refresh);
      window.removeEventListener('pageshow', refresh);
    };
  }, []);

  return minutes;
}
