import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { theme } from '@/constants/theme';
import { useSubscription } from '@/hooks/useSubscription';
import { SubscriptionPlanCard } from '@/components/feature/SubscriptionPlanCard';
import { useAlert } from '@/template';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { status, startTrial, subscribe } = useSubscription();
  const { showAlert } = useAlert();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

  const handleStartTrial = async () => {
    await startTrial();
    showAlert('Success', 'Your 7-day free trial has started! Enjoy all premium features.');
  };

  const handleSubscribe = async () => {
    await subscribe(selectedPlan);
    showAlert('Success', `You are now subscribed to Moon Pro ${selectedPlan}!`);
  };

  const handleRestore = () => {
    showAlert('Restore Purchases', 'No previous purchases found.');
  };

  const handleSettings = () => {
    showAlert('Settings', 'Settings page coming soon!');
  };

  if (status.isPro) {
    return (
      <ScrollView 
        style={styles.container}
        contentContainerStyle={{ paddingTop: insets.top + theme.spacing.md }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>My Account</Text>
          <MaterialIcons name="account-circle" size={28} color={theme.colors.textSecondary} />
        </View>

        <View style={styles.proCard}>
          <View style={styles.moonIconLarge}>
            <Image
              source={require('@/assets/images/moon-hero.png')}
              style={styles.moonIcon}
              contentFit="contain"
            />
          </View>
          
          <Text style={styles.proTitle}>Moon Pro Active</Text>
          <Text style={styles.proDescription}>
            You have access to all premium features
          </Text>

          {status.isTrialActive && status.trialEndsAt && (
            <View style={styles.trialBadge}>
              <Text style={styles.trialText}>
                Trial ends {status.trialEndsAt.toLocaleDateString()}
              </Text>
            </View>
          )}

          {!status.isTrialActive && status.expiresAt && (
            <View style={styles.trialBadge}>
              <Text style={styles.trialText}>
                {status.plan === 'monthly' ? 'Monthly' : 'Yearly'} plan · Renews {status.expiresAt.toLocaleDateString()}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.featuresList}>
          <FeatureItem icon="check-circle" text="Ad-free experience" />
          <FeatureItem icon="check-circle" text="Detailed analysis" />
          <FeatureItem icon="check-circle" text="Home Screen Widgets" />
          <FeatureItem icon="check-circle" text="Illumination trends" />
          <FeatureItem icon="check-circle" text="Astrological insights" />
        </View>

        <View style={styles.actions}>
          <Pressable style={styles.actionButton} onPress={handleSettings}>
            <Text style={styles.actionText}>Settings</Text>
            <MaterialIcons name="chevron-right" size={20} color={theme.colors.textSecondary} />
          </Pressable>
        </View>

        <View style={styles.spacing} />
      </ScrollView>
    );
  }

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{ paddingTop: insets.top + theme.spacing.md }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>My Account</Text>
        <MaterialIcons name="account-circle" size={28} color={theme.colors.textSecondary} />
      </View>

      <View style={styles.upgradeCard}>
        <View style={styles.moonIconLarge}>
          <Image
            source={require('@/assets/images/moon-hero.png')}
            style={styles.moonIcon}
            contentFit="contain"
          />
        </View>
        
        <Text style={styles.upgradeTitle}>Upgrade to Moon Pro</Text>

        <View style={styles.featuresList}>
          <FeatureItem icon="check" text="Ad-free experience" />
          <FeatureItem icon="check" text="Detailed analysis" />
          <FeatureItem icon="check" text="Home Screen Widgets" />
        </View>
      </View>

      <View style={styles.plansContainer}>
        <View style={styles.plansRow}>
          <SubscriptionPlanCard
            title="Monthly"
            price="$2.99"
            period="/month"
            selected={selectedPlan === 'monthly'}
            onSelect={() => setSelectedPlan('monthly')}
          />
          <SubscriptionPlanCard
            title="Yearly"
            price="$19.99"
            period="/year"
            savings="(Save 48%)"
            selected={selectedPlan === 'yearly'}
            onSelect={() => setSelectedPlan('yearly')}
          />
        </View>

        <Pressable style={styles.trialButton} onPress={handleStartTrial}>
          <Text style={styles.trialButtonText}>Start 7-Day Free Trial</Text>
        </Pressable>

        <Text style={styles.trialNote}>
          Cancel anytime. After trial, ${selectedPlan === 'monthly' ? '2.99/month' : '19.99/year'}.
        </Text>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.actionButton} onPress={handleRestore}>
          <Text style={styles.actionText}>Restore Purchases</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={handleSettings}>
          <Text style={styles.actionText}>Settings</Text>
        </Pressable>
      </View>

      <View style={styles.spacing} />
    </ScrollView>
  );
}

function FeatureItem({ icon, text }: { icon: string; text: string }) {
  return (
    <View style={styles.featureItem}>
      <MaterialIcons name={icon as any} size={20} color={theme.colors.primary} />
      <Text style={styles.featureText}>{text}</Text>
    </View>
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
  upgradeCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.xl,
    marginHorizontal: theme.spacing.md,
    alignItems: 'center',
    gap: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  proCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.xl,
    marginHorizontal: theme.spacing.md,
    alignItems: 'center',
    gap: theme.spacing.md,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  moonIconLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.sm,
  },
  moonIcon: {
    width: 60,
    height: 60,
  },
  upgradeTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.text,
  },
  proTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.primary,
  },
  proDescription: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  trialBadge: {
    backgroundColor: theme.colors.surfaceLight,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.full,
  },
  trialText: {
    fontSize: 13,
    fontWeight: '500',
    color: theme.colors.textSecondary,
  },
  featuresList: {
    alignSelf: 'stretch',
    gap: theme.spacing.sm,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  featureText: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.text,
  },
  plansContainer: {
    paddingHorizontal: theme.spacing.md,
    marginTop: theme.spacing.xl,
    gap: theme.spacing.md,
  },
  plansRow: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  trialButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    alignItems: 'center',
  },
  trialButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.background,
  },
  trialNote: {
    fontSize: 13,
    fontWeight: '400',
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  actions: {
    paddingHorizontal: theme.spacing.md,
    marginTop: theme.spacing.xl,
    gap: theme.spacing.xs,
  },
  actionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.text,
  },
  spacing: {
    height: theme.spacing.xl,
  },
});
