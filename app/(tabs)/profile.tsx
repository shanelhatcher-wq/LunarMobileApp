import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { theme } from '@/constants/theme';
import { useSubscription } from '@/hooks/useSubscription';
import { useTranslation } from '@/hooks/useTranslation';
import { Language } from '@/services/translationService';
import { SubscriptionPlanCard } from '@/components/feature/SubscriptionPlanCard';
import { LanguagePicker } from '@/components/feature/LanguagePicker';
import { useAlert } from '@/template';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { status, startTrial, subscribe } = useSubscription();
  const { showAlert } = useAlert();
  const { t, language, setLanguage } = useTranslation();
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');
  const [showLanguagePicker, setShowLanguagePicker] = useState(false);

  const handleStartTrial = async () => {
    await startTrial();
    showAlert(t.alerts.success, t.alerts.trialStarted);
  };

  const handleSubscribe = async () => {
    await subscribe(selectedPlan);
    showAlert(t.alerts.success, `${t.alerts.subscribed} ${selectedPlan}!`);
  };

  const handleRestore = () => {
    showAlert(t.profile.restorePurchases, t.alerts.noPurchases);
  };

  const handleSettings = () => {
    showAlert(t.profile.settings, t.alerts.comingSoon);
  };

  const handleAbout = () => {
    router.push('/about' as any);
  };

  const handleLanguageChange = async (newLanguage: Language) => {
    await setLanguage(newLanguage);
    showAlert(t.alerts.success, t.alerts.languageChanged); 
  };

  if (status.isPro) {
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
          <Text style={styles.title}>{t.profile.title}</Text>
          <MaterialIcons name="account-circle" size={28} color={theme.colors.textSecondary} />
        </View>

        <LanguagePicker
          visible={showLanguagePicker}
          currentLanguage={language}
          onClose={() => setShowLanguagePicker(false)}
          onSelect={handleLanguageChange}
        />

        <View style={styles.proCard}>
          <View style={styles.moonIconLarge}>
            <Image
              source={require('@/assets/images/040.moon.png')}
              style={styles.moonIcon}
              contentFit="contain"
            />
          </View>
  
          <Text style={styles.proTitle}>{t.profile.moonProActive}</Text>
          <Text style={styles.proDescription}>
            {t.profile.allFeaturesAccess}
          </Text>

          {status.isTrialActive && status.trialEndsAt && (
            <View style={styles.trialBadge}>
              <Text style={styles.trialText}>
                {t.profile.trialEnds} {status.trialEndsAt.toLocaleDateString()}
              </Text>
            </View>
          )}

          {!status.isTrialActive && status.expiresAt && (
            <View style={styles.trialBadge}>
              <Text style={styles.trialText}>
                {status.plan === 'monthly' ? t.profile.monthlyPlan : t.profile.yearlyPlan} · {t.profile.renews} {status.expiresAt.toLocaleDateString()}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.featuresList}>
          <FeatureItem icon="check-circle" text={t.profile.adFree} />
          <FeatureItem icon="check-circle" text={t.profile.detailedAnalysis} />
          <FeatureItem icon="check-circle" text={t.profile.widgets} />
          <FeatureItem icon="check-circle" text={t.profile.illuminationTrends} />
          <FeatureItem icon="check-circle" text={t.profile.astrologicalInsights} />
        </View>

        <View style={styles.actions}>
          <Pressable style={styles.actionButton} onPress={() => setShowLanguagePicker(true)}>
            <Text style={styles.actionText}>{t.profile.language}</Text>
            <MaterialIcons name="chevron-right" size={20} color={theme.colors.textSecondary} />
          </Pressable>
          <Pressable style={styles.actionButton} onPress={handleSettings}>
            <Text style={styles.actionText}>{t.profile.settings}</Text>
            <MaterialIcons name="chevron-right" size={20} color={theme.colors.textSecondary} />
          </Pressable>
          <Pressable style={styles.actionButton} onPress={handleAbout}>
            <Text style={styles.actionText}>{t.about.title}</Text>
            <MaterialIcons name="chevron-right" size={20} color={theme.colors.textSecondary} />
          </Pressable>
        </View>

          <View style={styles.spacing} />
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }

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
        <Text style={styles.title}>{t.profile.title}</Text>
        <MaterialIcons name="account-circle" size={28} color={theme.colors.textSecondary} />
      </View>

      <LanguagePicker
        visible={showLanguagePicker}
        currentLanguage={language}
        onClose={() => setShowLanguagePicker(false)}
        onSelect={handleLanguageChange}
      />

      <View style={styles.upgradeCard}>
        <View style={styles.moonIconLarge}>
          <Image
            source={require('@/assets/images/040.moon.png')}
            style={styles.moonIcon}
            contentFit="contain"
          />
        </View>
        
        <Text style={styles.upgradeTitle}>{t.profile.upgradeToMoonPro}</Text>

        <View style={styles.featuresList}>
          <FeatureItem icon="check" text={t.profile.adFree} />
          <FeatureItem icon="check" text={t.profile.detailedAnalysis} />
          <FeatureItem icon="check" text={t.profile.widgets} />
        </View>
      </View>

      <View style={styles.plansContainer}>
        <View style={styles.plansRow}>
          <SubscriptionPlanCard
            title={t.profile.monthly}
            price="$2.99"
            period={t.profile.month}
            selected={selectedPlan === 'monthly'}
            onSelect={() => setSelectedPlan('monthly')}
          />
          <SubscriptionPlanCard
            title={t.profile.yearly}
            price="$19.99"
            period={t.profile.year}
            savings={`(${t.profile.save} 48%)`}
            selected={selectedPlan === 'yearly'}
            onSelect={() => setSelectedPlan('yearly')}
          />
        </View>

        <Pressable style={styles.trialButton} onPress={handleStartTrial}>
          <Text style={styles.trialButtonText}>{t.profile.startTrial}</Text>
        </Pressable>

        <Text style={styles.trialNote}>
          {t.profile.cancelAnytime}, ${selectedPlan === 'monthly' ? '2.99/month' : '19.99/year'}.
        </Text>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.actionButton} onPress={handleRestore}>
          <Text style={styles.actionText}>{t.profile.restorePurchases}</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={() => setShowLanguagePicker(true)}>
          <Text style={styles.actionText}>{t.profile.language}</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={handleSettings}>
          <Text style={styles.actionText}>{t.profile.settings}</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={handleAbout}>
          <Text style={styles.actionText}>{t.about.title}</Text>
        </Pressable>
      </View>

        <View style={styles.spacing} />
      </ScrollView>
      </ImageBackground>
    </View>
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
  upgradeCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.xl,
    marginHorizontal: theme.spacing.md,
    alignItems: 'center',
    gap: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backdropFilter: 'blur(10px)',
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
    backdropFilter: 'blur(10px)',
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
    backdropFilter: 'blur(10px)',
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
