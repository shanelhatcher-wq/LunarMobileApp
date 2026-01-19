export interface MoonPhase {
  phase: string;
  illumination: number;
  age: number;
  emoji: string;
}

export interface MoonTimes {
  moonrise: Date;
  moonset: Date;
}

export interface SunTimes {
  sunrise: Date;
  sunset: Date;
}

export interface DayMoonData {
  date: Date;
  phase: string;
  illumination: number;
  emoji: string;
}

const MOON_PHASES = [
  { name: 'New Moon', emoji: '🌑' },
  { name: 'Waxing Crescent', emoji: '🌒' },
  { name: 'First Quarter', emoji: '🌓' },
  { name: 'Waxing Gibbous', emoji: '🌔' },
  { name: 'Full Moon', emoji: '🌕' },
  { name: 'Waning Gibbous', emoji: '🌖' },
  { name: 'Last Quarter', emoji: '🌗' },
  { name: 'Waning Crescent', emoji: '🌘' },
];

function calculateMoonPhase(date: Date): MoonPhase {
  // Calculate Julian Date
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;
  
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + hour / 24 + b - 1524.5;
  
  // Known new moon: January 6, 2000, 18:14 UTC (JD 2451550.26)
  const knownNewMoon = 2451550.26;
  const synodicMonth = 29.530588861; // days
  
  // Calculate days since known new moon
  const daysSinceNew = jd - knownNewMoon;
  
  // Calculate current position in lunar cycle (0 to 1)
  const lunarCycles = daysSinceNew / synodicMonth;
  let phase = lunarCycles - Math.floor(lunarCycles);
  
  // Ensure phase is between 0 and 1
  if (phase < 0) phase += 1;
  
  // Calculate moon age (days into current cycle)
  const age = phase * synodicMonth;
  
  // Calculate illumination (0 to 1)
  const illumination = 0.5 * (1 - Math.cos(2 * Math.PI * phase));
  
  // Determine phase name based on position
  let phaseIndex: number;
  if (phase < 0.0625 || phase >= 0.9375) {
    phaseIndex = 0; // New Moon
  } else if (phase < 0.1875) {
    phaseIndex = 1; // Waxing Crescent
  } else if (phase < 0.3125) {
    phaseIndex = 2; // First Quarter
  } else if (phase < 0.4375) {
    phaseIndex = 3; // Waxing Gibbous
  } else if (phase < 0.5625) {
    phaseIndex = 4; // Full Moon
  } else if (phase < 0.6875) {
    phaseIndex = 5; // Waning Gibbous
  } else if (phase < 0.8125) {
    phaseIndex = 6; // Last Quarter
  } else {
    phaseIndex = 7; // Waning Crescent
  }
  
  const phaseData = MOON_PHASES[phaseIndex];
  
  return {
    phase: phaseData.name,
    illumination: Math.round(illumination * 100),
    age,
    emoji: phaseData.emoji,
  };
}

export function getCurrentMoonPhase(): MoonPhase {
  return calculateMoonPhase(new Date());
}

export function getMoonPhaseForDate(date: Date): MoonPhase {
  return calculateMoonPhase(date);
}

export function getMoonTimes(date: Date = new Date()): MoonTimes {
  const baseHour = 4 + (date.getDate() % 20) * 0.8;
  const moonrise = new Date(date);
  moonrise.setHours(Math.floor(baseHour), Math.floor((baseHour % 1) * 60), 0);

  const moonset = new Date(date);
  const setHour = baseHour + 12 + (date.getDate() % 5) * 0.5;
  moonset.setHours(Math.floor(setHour) % 24, Math.floor((setHour % 1) * 60), 0);

  return { moonrise, moonset };
}

export function getSunTimes(date: Date = new Date()): SunTimes {
  // Simplified calculation based on day of year
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  
  // Base sunrise around 6:30 AM, varies by season
  const sunriseOffset = Math.sin((dayOfYear / 365) * 2 * Math.PI) * 1.5; // ±1.5 hours seasonal variation
  const sunriseHour = 6.5 + sunriseOffset;
  
  const sunrise = new Date(date);
  sunrise.setHours(Math.floor(sunriseHour), Math.floor((sunriseHour % 1) * 60), 0);
  
  // Base sunset around 6:30 PM, varies by season
  const sunsetOffset = Math.sin((dayOfYear / 365) * 2 * Math.PI) * 1.5;
  const sunsetHour = 18.5 - sunsetOffset;
  
  const sunset = new Date(date);
  sunset.setHours(Math.floor(sunsetHour), Math.floor((sunsetHour % 1) * 60), 0);
  
  return { sunrise, sunset };
}

export function getDaysUntilNextNewMoon(): number {
  const current = getCurrentMoonPhase();
  const daysInCycle = 29.53;
  const daysUntilNew = daysInCycle - current.age;
  return Math.ceil(daysUntilNew);
}

export function getDaysUntilNextFullMoon(): number {
  const current = getCurrentMoonPhase();
  const daysInCycle = 29.53;
  const fullMoonAge = daysInCycle / 2; // Full moon is at ~14.765 days
  
  let daysUntilFull;
  if (current.age < fullMoonAge) {
    // We haven't reached full moon yet this cycle
    daysUntilFull = fullMoonAge - current.age;
  } else {
    // Full moon has passed, calculate next cycle
    daysUntilFull = (daysInCycle - current.age) + fullMoonAge;
  }
  
  return Math.ceil(daysUntilFull);
}

export function getMonthMoonData(year: number, month: number): DayMoonData[] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const data: DayMoonData[] = [];

  for (let day = 1; day <= lastDay.getDate(); day++) {
    const date = new Date(year, month, day);
    const moonPhase = getMoonPhaseForDate(date);
    data.push({
      date,
      phase: moonPhase.phase,
      illumination: moonPhase.illumination,
      emoji: moonPhase.emoji,
    });
  }

  return data;
}

export function getIlluminationTrendData(): { day: string; value: number }[] {
  const data = [];
  const today = new Date();
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const moonPhase = getMoonPhaseForDate(date);
    
    data.push({
      day: i === 0 ? 'Today' : `${i}d`,
      value: moonPhase.illumination,
    });
  }
  
  return data;
}
