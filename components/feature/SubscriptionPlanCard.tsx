import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { theme } from '@/constants/theme';

interface SubscriptionPlanCardProps {
  title: string;
  price: string;
  period: string;
  savings?: string;
  selected: boolean;
  onSelect: () => void;
}

export function SubscriptionPlanCard({ 
  title, 
  price, 
  period, 
  savings,
  selected, 
  onSelect 
}: SubscriptionPlanCardProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      onPress={onSelect}
    >
      <Text style={[styles.title, selected && styles.selectedText]}>{title}</Text>
      <Text style={[styles.price, selected && styles.selectedText]}>{price}</Text>
      {savings && (
        <Text style={[styles.savings, selected && styles.selectedText]}>{savings}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    borderWidth: 2,
    borderColor: theme.colors.border,
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  selected: {
    backgroundColor: theme.colors.surfaceLight,
    borderColor: theme.colors.primary,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.text,
  },
  savings: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.textSecondary,
  },
  selectedText: {
    color: theme.colors.text,
  },
});
