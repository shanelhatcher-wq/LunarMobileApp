import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import { MoonTimes, SunTimes } from '@/services/moonPhaseService';

interface MoonTimesCardProps {
  moonTimes: MoonTimes;
  sunTimes: SunTimes;
}

export function MoonTimesCard({ moonTimes, sunTimes }: MoonTimesCardProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sun Times</Text>
        <View style={styles.row}>
          <View style={styles.timeItem}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="wb-sunny" size={20} color={theme.colors.primary} />
            </View>
            <View>
              <Text style={styles.label}>Sunrise</Text>
              <Text style={styles.time}>{formatTime(sunTimes.sunrise)}</Text>
            </View>
          </View>
          <View style={styles.timeItem}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="brightness-3" size={20} color={theme.colors.primary} />
            </View>
            <View>
              <Text style={styles.label}>Sunset</Text>
              <Text style={styles.time}>{formatTime(sunTimes.sunset)}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Moon Times</Text>
        <View style={styles.row}>
          <View style={styles.timeItem}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="arrow-upward" size={20} color={theme.colors.primary} />
            </View>
            <View>
              <Text style={styles.label}>Moonrise</Text>
              <Text style={styles.time}>{formatTime(moonTimes.moonrise)}</Text>
            </View>
          </View>
          <View style={styles.timeItem}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="arrow-downward" size={20} color={theme.colors.primary} />
            </View>
            <View>
              <Text style={styles.label}>Moonset</Text>
              <Text style={styles.time}>{formatTime(moonTimes.moonset)}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginHorizontal: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  section: {
    gap: theme.spacing.sm,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  timeItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: theme.colors.textSecondary,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.md,
  },
});
