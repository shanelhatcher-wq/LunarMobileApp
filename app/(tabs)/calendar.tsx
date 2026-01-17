import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { CalendarGrid } from '@/components/feature/CalendarGrid';
import { DayDetailsCard } from '@/components/feature/DayDetailsCard';
import { DayMoonData } from '@/services/moonPhaseService';

export default function CalendarScreen() {
  const insets = useSafeAreaInsets();
  const [selectedDay, setSelectedDay] = useState<DayMoonData | null>(null);

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{ paddingTop: insets.top + theme.spacing.md }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Lunar Calendar</Text>

      <CalendarGrid onDateSelect={setSelectedDay} />

      {selectedDay && <DayDetailsCard dayData={selectedDay} />}

      <View style={styles.spacing} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
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
