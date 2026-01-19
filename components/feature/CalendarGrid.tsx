import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import { useTranslation } from '@/hooks/useTranslation';
import { getMonthMoonData, DayMoonData } from '@/services/moonPhaseService';

interface CalendarGridProps {
  onDateSelect?: (data: DayMoonData) => void;
  initialSelectedDate?: Date;
}

export function CalendarGrid({ onDateSelect, initialSelectedDate }: CalendarGridProps) {
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialSelectedDate || null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthData = getMonthMoonData(year, month);
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDatePress = (dayData: DayMoonData) => {
    setSelectedDate(dayData.date);
    onDateSelect?.(dayData);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date: Date) => {
    if (!selectedDate) return false;
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  const renderCalendarDays = () => {
    const days = [];
    
    for (let i = 0; i < firstDay; i++) {
      days.push(<View key={`empty-${i}`} style={styles.dayCell} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayData = monthData[day - 1];
      const today = isToday(dayData.date);
      const selected = isSelected(dayData.date);

      days.push(
        <Pressable
          key={`day-${day}`}
          style={[
            styles.dayCell,
            selected && styles.selectedDay,
          ]}
          onPress={() => handleDatePress(dayData)}
        >
          <Text style={[
            styles.dayNumber,
            today && styles.todayText,
            selected && styles.selectedText,
          ]}>
            {day}
          </Text>
          <Text style={styles.moonEmoji}>{dayData.emoji}</Text>
        </Pressable>
      );
    }

    return days;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handlePrevMonth} style={styles.navButton}>
          <MaterialIcons name="chevron-left" size={24} color={theme.colors.text} />
        </Pressable>
        
        <Text style={styles.monthYear}>
          {t.calendar.months[month]} {year}
        </Text>
        
        <Pressable onPress={handleNextMonth} style={styles.navButton}>
          <MaterialIcons name="chevron-right" size={24} color={theme.colors.text} />
        </Pressable>
      </View>

      <View style={styles.weekdaysRow}>
        {t.calendar.weekdays.map((day) => (
          <View key={day} style={styles.weekdayCell}>
            <Text style={styles.weekdayText}>{day}</Text>
          </View>
        ))}
      </View>

      <View style={styles.calendarGrid}>
        {renderCalendarDays()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginHorizontal: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backdropFilter: 'blur(10px)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  navButton: {
    padding: theme.spacing.xs,
  },
  monthYear: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
  },
  weekdaysRow: {
    flexDirection: 'row',
    marginBottom: theme.spacing.sm,
  },
  weekdayCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: theme.spacing.xs,
  },
  weekdayText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.textSecondary,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
  },
  selectedDay: {
    backgroundColor: theme.colors.primary,
  },
  dayNumber: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.text,
    marginBottom: 2,
  },
  todayText: {
    color: theme.colors.primary,
    fontWeight: '700',
  },
  selectedText: {
    color: theme.colors.background,
    fontWeight: '700',
  },
  moonEmoji: {
    fontSize: 16,
  },
});
