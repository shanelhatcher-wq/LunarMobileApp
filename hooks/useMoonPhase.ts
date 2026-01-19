import { useState, useEffect } from 'react';
import { getCurrentMoonPhase, getMoonPhaseForDate, getMoonTimes, getSunTimes, getDaysUntilNextNewMoon, getDaysUntilNextFullMoon, MoonPhase, MoonTimes, SunTimes } from '@/services/moonPhaseService';

export function useMoonPhase(selectedDate?: Date) {
  const [moonPhase, setMoonPhase] = useState<MoonPhase | null>(null);
  const [moonTimes, setMoonTimes] = useState<MoonTimes | null>(null);
  const [sunTimes, setSunTimes] = useState<SunTimes | null>(null);
  const [daysUntilNewMoon, setDaysUntilNewMoon] = useState<number>(0);
  const [daysUntilFullMoon, setDaysUntilFullMoon] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMoonData();
    // Only auto-refresh if no date is selected (viewing current day)
    if (!selectedDate) {
      const interval = setInterval(loadMoonData, 60000);
      return () => clearInterval(interval);
    }
  }, [selectedDate]);

  const loadMoonData = () => {
    try {
      const targetDate = selectedDate || new Date();
      const phase = selectedDate ? getMoonPhaseForDate(targetDate) : getCurrentMoonPhase();
      const times = getMoonTimes(targetDate);
      const sun = getSunTimes(targetDate);
      const daysNew = getDaysUntilNextNewMoon();
      const daysFull = getDaysUntilNextFullMoon();

      setMoonPhase(phase);
      setMoonTimes(times);
      setSunTimes(sun);
      setDaysUntilNewMoon(daysNew);
      setDaysUntilFullMoon(daysFull);
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
    daysUntilFullMoon,
    loading,
    refresh: loadMoonData,
  };
}
