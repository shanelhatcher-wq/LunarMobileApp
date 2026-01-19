import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Pressable, ScrollView, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { useTranslation } from '@/hooks/useTranslation';
import { Location, AVAILABLE_LOCATIONS } from '@/services/locationService';

interface LocationPickerProps {
  visible: boolean;
  currentLocation: Location | null;
  onClose: () => void;
  onSelect: (location: Location) => void;
}

export function LocationPicker({ visible, currentLocation, onClose, onSelect }: LocationPickerProps) {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = AVAILABLE_LOCATIONS.filter(
    (loc) =>
      loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (location: Location) => {
    onSelect(location);
    setSearchQuery('');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <Text style={styles.title}>{t.location.selectLocation}</Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <MaterialIcons name="close" size={24} color={theme.colors.text} />
          </Pressable>
        </View>

        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={20} color={theme.colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder={t.location.searchCities}
            placeholderTextColor={theme.colors.textTertiary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
          {filteredLocations.map((location) => (
            <Pressable
              key={location.id}
              style={({ pressed }) => [
                styles.locationItem,
                pressed && styles.locationItemPressed,
                currentLocation?.id === location.id && styles.locationItemSelected,
              ]}
              onPress={() => handleSelect(location)}
            >
              <View style={styles.locationInfo}>
                <Text style={styles.locationCity}>{location.city}</Text>
                <Text style={styles.locationCountry}>{location.country}</Text>
              </View>
              {currentLocation?.id === location.id && (
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
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.text,
  },
  closeButton: {
    padding: theme.spacing.xs,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    marginHorizontal: theme.spacing.md,
    marginTop: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    gap: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backdropFilter: 'blur(10px)',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: theme.colors.text,
  },
  list: {
    flex: 1,
    marginTop: theme.spacing.md,
  },
  locationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  locationItemPressed: {
    backgroundColor: theme.colors.surfaceLight,
  },
  locationItemSelected: {
    backgroundColor: theme.colors.surfaceLight,
  },
  locationInfo: {
    flex: 1,
  },
  locationCity: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 2,
  },
  locationCountry: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.colors.textSecondary,
  },
});
