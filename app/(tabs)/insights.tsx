import React from 'react';
import { ImageBackground, View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { theme } from '@/constants/theme';
import { useSubscription } from '@/hooks/useSubscription';
import { useTranslation } from '@/hooks/useTranslation';
import { PremiumBadge } from '@/components/ui/PremiumBadge';
import { IlluminationChart } from '@/components/feature/IlluminationChart';
import { LockedFeatureCard } from '@/components/feature/LockedFeatureCard';
import { getIlluminationTrendData } from '@/services/moonPhaseService';

export default function InsightsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { status } = useSubscription();
  const { t } = useTranslation();

  const chartData = getIlluminationTrendData();

  const handleUnlock = () => {
    router.push('/(tabs)/profile');
  };

  // User has premium access if they're subscribed OR on trial
  const hasAccess = status.isPro || status.isTrialActive;

  return (
    <View style={styles.container}>
            <ImageBackground
              source={require('@/assets/images/space.png')}
              style={styles.background}
              resizeMode="cover"
            >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={{ paddingTop: insets.top + theme.spacing.md }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
        <Text style={styles.title}>{t.insights.title}</Text>
        {hasAccess && <PremiumBadge />}
      </View>

      {hasAccess ? (
        <View style={styles.content}>
          <View style={styles.chartWrapper}>
            <IlluminationChart data={chartData} />
          </View>

          <View style={styles.featuresGrid}>
            <LockedFeatureCard
              title={t.insights.astrologicalInfluences}
              description={t.insights.astrologicalDescription}
              isLocked={false}
            />
            <LockedFeatureCard
              title={t.insights.advancedData}
              description={t.insights.advancedDataDescription}
              isLocked={false}
            />
          </View>
          
        </View>
      ) : (
        <View style={styles.content}>
          <View style={styles.lockedOverlay}>
            <Text style={styles.lockedText}>🔒</Text>
            <Text style={styles.lockedTitle}>{t.insights.premiumContent}</Text>
            <Text style={styles.lockedDescription}>
              {t.insights.unlockDescription}
            </Text>
          </View>

          <View style={styles.chartWrapper}>
            <IlluminationChart data={chartData.slice(0, 10)} />
          </View>

          <View style={styles.featuresGrid}>
            <LockedFeatureCard
              title={t.insights.astrologicalInfluences}
              description={t.insights.astrologicalDescription}
              isLocked={false}
            />
            <LockedFeatureCard
              title={t.insights.advancedData}
              description={t.insights.advancedDataDescription}
              isLocked={false}
            />
          </View>

          <Pressable style={styles.unlockButton} onPress={handleUnlock}>
            <Text style={styles.unlockButtonText}>{t.insights.unlockButton}</Text>
          </Pressable>
        </View>
      )}

        <View style={styles.spacing} />
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollView: {
    flex: 1,
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
    backdropFilter: 'blur(10px)',
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
