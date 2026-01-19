import { useState, useEffect } from 'react';
import { Location, getCurrentLocation, saveLocation } from '@/services/locationService';

export function useLocation() {
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLocation();
  }, []);

  const loadLocation = async () => {
    try {
      const currentLocation = await getCurrentLocation();
      setLocation(currentLocation);
    } catch (error) {
      console.error('Error loading location:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateLocation = async (newLocation: Location) => {
    try {
      await saveLocation(newLocation);
      setLocation(newLocation);
    } catch (error) {
      console.error('Error updating location:', error);
    }
  };

  return {
    location,
    loading,
    updateLocation,
  };
}
