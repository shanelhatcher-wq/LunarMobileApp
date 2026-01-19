import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Location {
  id: string;
  city: string;
  country: string;
  timezone: string;
  latitude: number;
  longitude: number;
}

const LOCATION_STORAGE_KEY = 'moon_app_location';

export const AVAILABLE_LOCATIONS: Location[] = [
  { id: '1', city: 'New York', country: 'USA', timezone: 'America/New_York', latitude: 40.7128, longitude: -74.0060 },
  { id: '2', city: 'Los Angeles', country: 'USA', timezone: 'America/Los_Angeles', latitude: 34.0522, longitude: -118.2437 },
  { id: '3', city: 'Chicago', country: 'USA', timezone: 'America/Chicago', latitude: 41.8781, longitude: -87.6298 },
  { id: '4', city: 'London', country: 'UK', timezone: 'Europe/London', latitude: 51.5074, longitude: -0.1278 },
  { id: '5', city: 'Paris', country: 'France', timezone: 'Europe/Paris', latitude: 48.8566, longitude: 2.3522 },
  { id: '6', city: 'Tokyo', country: 'Japan', timezone: 'Asia/Tokyo', latitude: 35.6762, longitude: 139.6503 },
  { id: '7', city: 'Sydney', country: 'Australia', timezone: 'Australia/Sydney', latitude: -33.8688, longitude: 151.2093 },
  { id: '8', city: 'Dubai', country: 'UAE', timezone: 'Asia/Dubai', latitude: 25.2048, longitude: 55.2708 },
  { id: '9', city: 'Singapore', country: 'Singapore', timezone: 'Asia/Singapore', latitude: 1.3521, longitude: 103.8198 },
  { id: '10', city: 'Mumbai', country: 'India', timezone: 'Asia/Kolkata', latitude: 19.0760, longitude: 72.8777 },
  { id: '11', city: 'Toronto', country: 'Canada', timezone: 'America/Toronto', latitude: 43.6532, longitude: -79.3832 },
  { id: '12', city: 'Berlin', country: 'Germany', timezone: 'Europe/Berlin', latitude: 52.5200, longitude: 13.4050 },
  { id: '13', city: 'Rome', country: 'Italy', timezone: 'Europe/Rome', latitude: 41.9028, longitude: 12.4964 },
  { id: '14', city: 'Madrid', country: 'Spain', timezone: 'Europe/Madrid', latitude: 40.4168, longitude: -3.7038 },
  { id: '15', city: 'Mexico City', country: 'Mexico', timezone: 'America/Mexico_City', latitude: 19.4326, longitude: -99.1332 },
];

export async function saveLocation(location: Location): Promise<void> {
  try {
    await AsyncStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(location));
  } catch (error) {
    console.error('Error saving location:', error);
  }
}

export async function getStoredLocation(): Promise<Location | null> {
  try {
    const stored = await AsyncStorage.getItem(LOCATION_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading location:', error);
  }
  return null;
}

export function getDefaultLocation(): Location {
  return AVAILABLE_LOCATIONS[0]; // New York as default
}

export async function getCurrentLocation(): Promise<Location> {
  const stored = await getStoredLocation();
  return stored || getDefaultLocation();
}
