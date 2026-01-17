import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { theme } from '@/constants/theme';
import { useSubscription } from '@/hooks/useSubscription';
import { PremiumBadge } from '@/components/ui/PremiumBadge';
import { IlluminationChart } from '@/components/feature/IlluminationChart';
import { LockedFeatureCard } from '@/components/feature/LockedFeatureCard';
import { getIlluminationTrendData } from '@/services/moonPhaseService';

export default function InsightsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { status } = useSubscription();

  const chartData = getIlluminationTrendData();

  const handleUnlock = () => {
    router.push('/(tabs)/profile');
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{ paddingTop: insets.top + theme.spacing.md }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Premium Insights</Text>
        {status.isPro && <PremiumBadge />}
      </View>

      {status.isPro ? (
        <View style={styles.content}>
          <View style={styles.chartWrapper}>
            <IlluminationChart data={chartData} />
          </View>

          <View style={styles.featuresGrid}>
            <LockedFeatureCard
              title="Astrological Influences"
              description="Unlock data about astrological events and influences."
            />
            <LockedFeatureCard
              title="Advanced Lunar Data"
              description="Experience lunar cycles with enhanced data."
            />
          </View>
        </View>
      ) : (
        <View style={styles.content}>
          <View style={styles.lockedOverlay}>
            <Text style={styles.lockedText}>🔒</Text>
            <Text style={styles.lockedTitle}>Premium Content</Text>
            <Text style={styles.lockedDescription}>
              Unlock detailed moon insights, illumination trends, and astrological data
            </Text>
          </View>

          <View style={styles.chartWrapper}>
            <IlluminationChart data={chartData.slice(0, 10)} />
          </View>

          <View style={styles.featuresGrid}>
            <LockedFeatureCard
              title="Astrological Influences"
              description="Unlock data about astrological events and influences."
            />
            <LockedFeatureCard
              title="Advanced Lunar Data"
              description="Experience lunar cycles with enhanced data."
            />
          </View>

          <Pressable style={styles.unlockButton} onPress={handleUnlock}>
            <Text style={styles.unlockButtonText}>Unlock with Moon Pro</Text>
          </Pressable>
        </View>
      )}

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
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: theme.colors.text,
  },
  content: {
    paddingHorizontal: theme.spacing.md,
    gap: theme.spacing.md,
  },
  lockedOverlay: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xl,
    alignItems: 'center',
    gap: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  lockedText: {
    fontSize: 48,
  },
  lockedTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.text,
  },
  lockedDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  chartWrapper: {
    opacity: 0.5,
  },
  featuresGrid: {
    gap: theme.spacing.md,
  },
  unlockButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginTop: theme.spacing.sm,
  },
  unlockButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.background,
  },
  spacing: {
    height: theme.spacing.xl,
  },
});
