import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Pressable, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import { theme } from '@/constants/theme';
import { useTranslation } from '@/hooks/useTranslation';

export default function AboutScreen() {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  const appName = Constants.expoConfig?.name || 'Moon Phase App';
  const appVersion = Constants.expoConfig?.version || '1.0.0';
  const deviceModel = Device.modelName || 'Unknown Device';
  const systemVersion = Platform.OS === 'ios' 
    ? `iOS ${Device.osVersion}` 
    : Platform.OS === 'android' 
    ? `Android ${Device.osVersion}` 
    : `${Platform.OS} ${Device.osVersion}`;

  return (
    <>
      <Stack.Screen 
        options={{
          headerShown: true,
          headerTitle: t.about.title,
          headerStyle: {
            backgroundColor: theme.colors.surface,
          },
          headerTitleStyle: {
            color: theme.colors.text,
            fontSize: 18,
            fontWeight: '600',
          },
          headerTintColor: theme.colors.primary,
        }}
      />
      <View style={[styles.container, { paddingBottom: insets.bottom }]}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.iconContainer}>
            <MaterialIcons name="nightlight-round" size={64} color={theme.colors.primary} />
          </View>

          <Text style={styles.description}>{t.about.description}</Text>

          <Pressable 
            style={styles.linkButton}
            onPress={() => Linking.openURL('https://www.portablebinary.com')}
          >
            <Text style={styles.linkText}>www.portablebinary.com</Text>
            <MaterialIcons name="open-in-new" size={16} color={theme.colors.primary} />
          </Pressable>

          <View style={styles.infoCard}>
            <InfoItem 
              icon="info" 
              label={t.about.appName} 
              value={appName} 
            />
            <View style={styles.divider} />
            <InfoItem 
              icon="system-update" 
              label={t.about.appVersion} 
              value={appVersion} 
            />
            <View style={styles.divider} />
            <InfoItem 
              icon="phone-android" 
              label={t.about.deviceModel} 
              value={deviceModel} 
            />
            <View style={styles.divider} />
            <InfoItem 
              icon="settings" 
              label={t.about.systemVersion} 
              value={systemVersion} 
            />
          </View>

          <Text style={styles.footerText}>
            {t.about.madeWith} 🌙
          </Text>
        </ScrollView>
      </View>
    </>
  );
}

function InfoItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <View style={styles.infoItem}>
      <View style={styles.infoLeft}>
        <MaterialIcons name={icon as any} size={20} color={theme.colors.primary} />
        <Text style={styles.infoLabel}>{label}</Text>
      </View>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: theme.spacing.xl,
    alignItems: 'center',
    gap: theme.spacing.xl,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.xl,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  infoCard: {
    width: '100%',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backdropFilter: 'blur(10px)',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
  },
  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    flex: 1,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.text,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.colors.textSecondary,
    textAlign: 'right',
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    opacity: 0.5,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: theme.spacing.md,
  },
  footerText: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginTop: theme.spacing.lg,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.xs,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.primary,
  },
});
