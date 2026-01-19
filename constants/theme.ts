export const theme = {
  colors: {
    background: '#0a0e1a',
    surface: 'rgba(26, 31, 46, 0.6)',
    surfaceLight: 'rgba(37, 43, 61, 0.7)',
    primary: '#d4af37',
    primaryLight: '#f0d78c',
    text: '#ffffff',
    textSecondary: '#8a92a8',
    textTertiary: '#5a6276',
    border: 'rgba(42, 49, 68, 0.5)',
    accent: '#4a5568',
    success: '#4ade80',
    warning: '#fbbf24',
    premium: '#d4af37',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },
  typography: {
    title: {
      fontSize: 32,
      fontWeight: '700' as const,
      lineHeight: 40,
    },
    heading: {
      fontSize: 24,
      fontWeight: '600' as const,
      lineHeight: 32,
    },
    subheading: {
      fontSize: 18,
      fontWeight: '600' as const,
      lineHeight: 24,
    },
    body: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 24,
    },
    caption: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 20,
    },
    small: {
      fontSize: 12,
      fontWeight: '400' as const,
      lineHeight: 16,
    },
  },
};
