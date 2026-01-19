import React from 'react';
import { View, Text, StyleSheet, Modal, Pressable, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { Language, AVAILABLE_LANGUAGES, LanguageOption } from '@/services/translationService';

interface LanguagePickerProps {
  visible: boolean;
  currentLanguage: Language;
  onClose: () => void;
  onSelect: (language: Language) => void;
}

export function LanguagePicker({ visible, currentLanguage, onClose, onSelect }: LanguagePickerProps) {
  const insets = useSafeAreaInsets();

  const handleSelect = (language: Language) => {
    onSelect(language);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <Text style={styles.title}>Language / Idioma / Langue / Sprache</Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <MaterialIcons name="close" size={24} color={theme.colors.text} />
          </Pressable>
        </View>

        <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
          {AVAILABLE_LANGUAGES.map((lang) => (
            <Pressable
              key={lang.code}
              style={({ pressed }) => [
                styles.languageItem,
                pressed && styles.languageItemPressed,
                currentLanguage === lang.code && styles.languageItemSelected,
              ]}
              onPress={() => handleSelect(lang.code)}
            >
              <View style={styles.languageInfo}>
                <Text style={styles.languageNative}>{lang.nativeName}</Text>
                <Text style={styles.languageName}>{lang.name}</Text>
              </View>
              {currentLanguage === lang.code && (
                <MaterialIcons name="check" size={24} color={theme.colors.primary} />
              )}
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
    flex: 1,
  },
  closeButton: {
    padding: theme.spacing.xs,
  },
  list: {
    flex: 1,
    marginTop: theme.spacing.md,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  languageItemPressed: {
    backgroundColor: theme.colors.surfaceLight,
  },
  languageItemSelected: {
    backgroundColor: theme.colors.surfaceLight,
  },
  languageInfo: {
    flex: 1,
  },
  languageNative: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 2,
  },
  languageName: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.colors.textSecondary,
  },
});
