import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { theme } from '@/constants/theme';
import { useTranslation } from '@/hooks/useTranslation';
import { MoonPhase } from '@/services/moonPhaseService';

interface MoonVisualizationProps {
  moonPhase: MoonPhase;
}

export function MoonVisualization({ moonPhase }: MoonVisualizationProps) {
  const { translatePhase, t } = useTranslation();
  
  return (
    <View style={styles.container}>
      <View style={styles.moonContainer}>
        <Image
          source={require('@/assets/images/moon-hero.png')}
          style={styles.moonImage}
          contentFit="contain"
          transition={200}
        />
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.phaseName}>{translatePhase(moonPhase.phase)}</Text>
        <Text style={styles.illumination}>{moonPhase.illumination}% {t.home.illumination}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
  },
  moonContainer: {
    width: 280,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.lg,
  },
  moonImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  phaseName: {
    fontSize: 28,
    fontWeight: '700',
    color: theme.colors.text,
    textAlign: 'center',
  },
  illumination: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
});
