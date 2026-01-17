import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { theme } from '@/constants/theme';
import { useMoonPhase } from '@/hooks/useMoonPhase';
import { MoonVisualization } from '@/components/feature/MoonVisualization';
import { MoonTimesCard } from '@/components/feature/MoonTimesCard';
import { NextNewMoonCard } from '@/components/feature/NextNewMoonCard';

export default function MoonScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { moonPhase, moonTimes, sunTimes, daysUntilNewMoon, loading } = useMoonPhase();

  if (loading || !moonPhase || !moonTimes || !sunTimes) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={styles.loadingText}>Loading moon data...</Text>
      </View>
    );
  }

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{ paddingTop: insets.top }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.time}>
          {new Date().toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit' 
          })}
        </Text>
        <Pressable onPress={() => router.push('/settings' as any)}>
          <MaterialIcons name="settings" size={24} color={theme.colors.textSecondary} />
        </Pressable>
      </View>

      <MoonVisualization moonPhase={moonPhase} />
      
      <MoonTimesCard moonTimes={moonTimes} sunTimes={sunTimes} />
      
      <NextNewMoonCard days={daysUntilNewMoon} />

      <View style={styles.spacing} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  time: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.text,
  },
  loadingText: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginTop: theme.spacing.xxl,
  },
  spacing: {
    height: theme.spacing.xl,
  },
});
