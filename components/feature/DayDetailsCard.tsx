import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/constants/theme';
import { DayMoonData, getMoonTimes } from '@/services/moonPhaseService';

interface DayDetailsCardProps {
  dayData: DayMoonData;
}

export function DayDetailsCard({ dayData }: DayDetailsCardProps) {
  const moonTimes = getMoonTimes(dayData.date);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const getSpecialMoonName = (phase: string) => {
    if (phase === 'Full Moon') {
      const month = dayData.date.getMonth();
      const names = [
        'Wolf Moon', 'Snow Moon', 'Worm Moon', 'Pink Moon',
        'Flower Moon', 'Strawberry Moon', 'Buck Moon', 'Sturgeon Moon',
        'Harvest Moon', "Hunter's Moon", 'Beaver Moon', 'Cold Moon'
      ];
      return names[month];
    }
    return null;
  };

  const specialName = getSpecialMoonName(dayData.phase);

  return (
    <View style={styles.container}>
      <Text style={styles.dateTitle}>
        {formatDate(dayData.date)}: {specialName || dayData.phase}
      </Text>
      
      {specialName && (
        <Text style={styles.description}>
          {specialName} is a celestial name given to the full moon during this period.
        </Text>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Best Viewing Times</Text>
        <Text style={styles.times}>
          {formatTime(moonTimes.moonrise)} - {formatTime(moonTimes.moonset)}
        </Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Illumination</Text>
          <Text style={styles.statValue}>{dayData.illumination}%</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Phase</Text>
          <Text style={styles.statValue}>{dayData.emoji}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginHorizontal: theme.spacing.md,
    marginTop: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    gap: theme.spacing.md,
  },
  dateTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  section: {
    gap: theme.spacing.xs,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.textSecondary,
  },
  times: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
  },
  statsRow: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  statItem: {
    flex: 1,
    backgroundColor: theme.colors.surfaceLight,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.textSecondary,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.text,
  },
});
