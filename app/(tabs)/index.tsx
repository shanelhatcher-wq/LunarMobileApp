import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { theme } from '@/constants/theme';
import { useMoonPhase } from '@/hooks/useMoonPhase';
import { useLocation } from '@/hooks/useLocation';
import { useTranslation } from '@/hooks/useTranslation';
import { MoonVisualization } from '@/components/feature/MoonVisualization';
import { MoonTimesCard } from '@/components/feature/MoonTimesCard';
import { MoonAgeCard } from '@/components/feature/MoonAgeCard';
import { NextNewMoonCard } from '@/components/feature/NextNewMoonCard';
import { NextFullMoonCard } from '@/components/feature/NextFullMoonCard';
import { LocationPicker } from '@/components/feature/LocationPicker';

export default function MoonScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const { moonPhase, moonTimes, sunTimes, daysUntilNewMoon, daysUntilFullMoon, loading } = useMoonPhase(selectedDate);
  const { location, updateLocation } = useLocation();
  const { t } = useTranslation();
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  const handlePreviousDay = () => {
    setSelectedDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const handleNextDay = () => {
    setSelectedDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  const handleToday = () => {
    setSelectedDate(new Date());
  };

  const isToday = selectedDate.toDateString() === new Date().toDateString();

  const getLocaleCode = (lang: string): string => {
    const localeMap: Record<string, string> = {
      en: 'en-US',
      es: 'es-ES',
      fr: 'fr-FR',
      de: 'de-DE',
      hi: 'hi-IN',
      zh: 'zh-CN',
      ja: 'ja-JP',
      it: 'it-IT',
    };
    return localeMap[lang] || 'en-US';
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    };
    const locale = getLocaleCode(t.language || 'en');
    return date.toLocaleDateString(locale, options);
  };

  if (loading || !moonPhase || !moonTimes || !sunTimes) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={styles.loadingText}>{t.tabs.moon}...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
                <ImageBackground
                  source={require('@/assets/images/space.png')}
                  style={styles.background}
                  resizeMode="cover"
                >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={{ paddingTop: insets.top }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Pressable 
            style={styles.locationButton}
            onPress={() => setShowLocationPicker(true)}
          >
            <MaterialIcons name="location-on" size={16} color={theme.colors.primary} />
            <Text style={styles.locationText}>
              {location ? location.city : t.location.selectLocation}
            </Text>
            <MaterialIcons name="expand-more" size={16} color={theme.colors.textSecondary} />
          </Pressable>
          {location && (
            <View style={styles.coordinatesContainer}>
              <Text style={styles.coordinateText}>
                {t.location.latitude}: {location.latitude.toFixed(4)}°
              </Text>
              <Text style={styles.coordinateText}>
                {t.location.longitude}: {location.longitude.toFixed(4)}°
              </Text>
            </View>
          )}
        </View>
        <Pressable onPress={() => router.push('/settings' as any)}>
          <MaterialIcons name="settings" size={24} color={theme.colors.textSecondary} />
        </Pressable>
      </View>

      <LocationPicker
        visible={showLocationPicker}
        currentLocation={location}
        onClose={() => setShowLocationPicker(false)}
        onSelect={updateLocation}
      />

      <MoonVisualization moonPhase={moonPhase} />
      
      <MoonAgeCard age={moonPhase.age} />
      
      <MoonTimesCard moonTimes={moonTimes} sunTimes={sunTimes} />
      
      <NextNewMoonCard days={daysUntilNewMoon} />
      
      <NextFullMoonCard days={daysUntilFullMoon} />

        <View style={styles.spacing} />
      </ScrollView>

      <View style={[styles.dateNavigation, { paddingBottom: insets.bottom + 8 }]}>
        <Pressable 
          style={styles.navButton}
          onPress={handlePreviousDay}
        >
          <MaterialIcons name="chevron-left" size={28} color={theme.colors.text} />
        </Pressable>
        
        <Pressable 
          style={styles.dateContainer}
          onPress={handleToday}
          disabled={isToday}
        >
          <Text style={styles.dateText}>{formatDate(selectedDate)}</Text>
          {!isToday && (
            <Text style={styles.todayHint}>{t.common.today}</Text>
          )}
        </Pressable>
        
        <Pressable 
          style={styles.navButton}
          onPress={handleNextDay}
        >
          <MaterialIcons name="chevron-right" size={28} color={theme.colors.text} />
        </Pressable>
        
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
   background: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  locationContainer: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignSelf: 'flex-start',
  },
  locationText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text,
  },
  coordinatesContainer: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    paddingLeft: theme.spacing.xs,
  },
  coordinateText: {
    fontSize: 11,
    fontWeight: '400',
    color: theme.colors.textSecondary,
  },
  loadingText: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginTop: theme.spacing.xxl,
  },
  spacing: {
    height: theme.spacing.xl,
  },
  dateNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.surface,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.sm,
  },
  navButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surfaceLight,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  dateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
  },
  todayHint: {
    fontSize: 12,
    fontWeight: '400',
    color: theme.colors.primary,
    marginTop: 2,
  },
});
