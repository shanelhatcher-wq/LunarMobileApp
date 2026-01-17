import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { theme } from '@/constants/theme';

interface IlluminationChartProps {
  data: { day: string; value: number }[];
}

export function IlluminationChart({ data }: IlluminationChartProps) {
  const chartWidth = Dimensions.get('window').width - theme.spacing.md * 4;
  const chartHeight = 180;
  const maxValue = 100;

  const points = data.map((item, index) => {
    const x = (index / (data.length - 1)) * chartWidth;
    const y = chartHeight - (item.value / maxValue) * chartHeight;
    return { x, y, value: item.value };
  });

  const pathData = points.map((point, index) => {
    if (index === 0) return `M ${point.x} ${point.y}`;
    const prevPoint = points[index - 1];
    const cpX = (prevPoint.x + point.x) / 2;
    return `Q ${cpX} ${prevPoint.y}, ${cpX} ${(prevPoint.y + point.y) / 2} T ${point.x} ${point.y}`;
  }).join(' ');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Illumination Trend</Text>
          <Text style={styles.subtitle}>Illumination over the month</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <View style={styles.yAxis}>
          {[100, 75, 50, 25, 0].map((value) => (
            <Text key={value} style={styles.yLabel}>{value}</Text>
          ))}
        </View>

        <View style={styles.chart}>
          <View style={styles.gridLines}>
            {[0, 1, 2, 3, 4].map((i) => (
              <View key={i} style={styles.gridLine} />
            ))}
          </View>

          <View style={[styles.chartArea, { width: chartWidth, height: chartHeight }]}>
            {points.map((point, index) => (
              <View
                key={index}
                style={[
                  styles.dataPoint,
                  {
                    left: point.x - 3,
                    top: point.y - 3,
                  }
                ]}
              />
            ))}
          </View>
        </View>
      </View>

      <View style={styles.xAxis}>
        <Text style={styles.xLabel}>Oct 1</Text>
        <Text style={styles.xLabel}>3</Text>
        <Text style={styles.xLabel}>6</Text>
        <Text style={styles.xLabel}>10</Text>
        <Text style={styles.xLabel}>Today</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: theme.colors.textSecondary,
    marginTop: 2,
  },
  chartContainer: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  yAxis: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: theme.spacing.xs,
    height: 180,
  },
  yLabel: {
    fontSize: 10,
    color: theme.colors.textTertiary,
  },
  chart: {
    flex: 1,
    position: 'relative',
  },
  gridLines: {
    position: 'absolute',
    width: '100%',
    height: 180,
    justifyContent: 'space-between',
  },
  gridLine: {
    height: 1,
    backgroundColor: theme.colors.border,
    opacity: 0.3,
  },
  chartArea: {
    position: 'relative',
  },
  dataPoint: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.primary,
  },
  xAxis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.sm,
    paddingLeft: 40,
  },
  xLabel: {
    fontSize: 10,
    color: theme.colors.textTertiary,
  },
});
