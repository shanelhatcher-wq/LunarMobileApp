import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/constants/theme';

interface NextNewMoonCardProps {
  days: number;
}

export function NextNewMoonCard({ days }: NextNewMoonCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Next New Moon in <Text style={styles.highlight}>{days}</Text> days
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
    marginTop: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
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
