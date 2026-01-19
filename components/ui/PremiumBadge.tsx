import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';

export function PremiumBadge() {
  return (
    <View style={styles.badge}>
      <MaterialIcons name="star" size={14} color={theme.colors.background} />
      <Text style={styles.text}>Pro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.premium,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.full,
    gap: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.background,
  },
});
