import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/constants/theme';
import { useTranslation } from '@/hooks/useTranslation';

interface MoonAgeCardProps {
  age: number;
}

export function MoonAgeCard({ age }: MoonAgeCardProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{t.home.moonAge}</Text>
      <View style={styles.ageContainer}>
        <Text style={styles.ageValue}>{age.toFixed(1)}</Text>
        <Text style={styles.ageUnit}>{t.home.days}</Text>
      </View>
      <Text style={styles.description}>
        {t.home.moonAgeSince}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginHorizontal: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  ageContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  ageValue: {
    fontSize: 48,
    fontWeight: '700',
    color: theme.colors.primary,
  },
  ageUnit: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.textSecondary,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: theme.colors.textTertiary,
    textAlign: 'center',
  },
});
