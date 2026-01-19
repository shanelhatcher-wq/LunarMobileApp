import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { useTranslation } from '@/hooks/useTranslation';
import { CalendarGrid } from '@/components/feature/CalendarGrid';
import { DayDetailsCard } from '@/components/feature/DayDetailsCard';
import { DayMoonData, getMoonPhaseForDate } from '@/services/moonPhaseService';

export default function CalendarScreen() {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  const [selectedDay, setSelectedDay] = useState<DayMoonData | null>(null);

  // Pre-select today's date on mount
  useEffect(() => {
    const today = new Date();
    const todayMoonPhase = getMoonPhaseForDate(today);
    setSelectedDay({
      date: today,
      phase: todayMoonPhase.phase,
      illumination: todayMoonPhase.illumination,
      emoji: todayMoonPhase.emoji,
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/space.png')}
        style={styles.background}
        resizeMode="cover"
      >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={{ paddingTop: insets.top + theme.spacing.md }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{t.calendar.title}</Text>

      <CalendarGrid onDateSelect={setSelectedDay} initialSelectedDate={new Date()} />

      {selectedDay && <DayDetailsCard dayData={selectedDay} />}

        <View style={styles.spacing} />
      </ScrollView>
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
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: theme.colors.text,
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  spacing: {
    height: theme.spacing.xl,
  },
});
