import { useState, useEffect } from 'react';
import { getCurrentMoonPhase, getMoonTimes, getSunTimes, getDaysUntilNextNewMoon, MoonPhase, MoonTimes, SunTimes } from '@/services/moonPhaseService';

export function useMoonPhase() {
  const [moonPhase, setMoonPhase] = useState<MoonPhase | null>(null);
  const [moonTimes, setMoonTimes] = useState<MoonTimes | null>(null);
  const [sunTimes, setSunTimes] = useState<SunTimes | null>(null);
  const [daysUntilNewMoon, setDaysUntilNewMoon] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMoonData();
    const interval = setInterval(loadMoonData, 60000);
    return () => clearInterval(interval);
  }, []);

  const loadMoonData = () => {
    try {
      const phase = getCurrentMoonPhase();
      const times = getMoonTimes();
      const sun = getSunTimes();
      const days = getDaysUntilNextNewMoon();

      setMoonPhase(phase);
      setMoonTimes(times);
      setSunTimes(sun);
      setDaysUntilNewMoon(days);
    } catch (error) {
      console.error('Error loading moon data:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    moonPhase,
    moonTimes,
    sunTimes,
    daysUntilNewMoon,
    loading,
    refresh: loadMoonData,
  };
}
