import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/constants/theme';
import { useTranslation } from '@/hooks/useTranslation';

interface NextFullMoonCardProps {
  days: number;
}

export function NextFullMoonCard({ days }: NextFullMoonCardProps) {
  const { t } = useTranslation();
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {t.home.nextFullMoon} <Text style={styles.highlight}>{days}</Text> {t.home.days}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginHorizontal: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.textSecondary,
  },
  highlight: {
    color: theme.colors.text,
    fontWeight: '700',
  },
});
