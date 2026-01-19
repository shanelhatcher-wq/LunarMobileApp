import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';

interface LockedFeatureCardProps {
  title: string;
  description: string;
  isLocked?: boolean;
}

export function LockedFeatureCard({ title, description, isLocked = true }: LockedFeatureCardProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, !isLocked && styles.iconContainerUnlocked]}>
        <MaterialIcons 
          name={isLocked ? "lock" : "check-circle"} 
          size={20} 
          color={isLocked ? theme.colors.primary : theme.colors.success} 
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    gap: theme.spacing.md,
    backdropFilter: 'blur(10px)',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerUnlocked: {
    backgroundColor: 'rgba(52, 211, 153, 0.15)',
  },
  content: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
    color: theme.colors.textSecondary,
    lineHeight: 18,
  },
});
