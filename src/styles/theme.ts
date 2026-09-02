export const theme = {
  colors: {
    ink: '#24211e',
    muted: '#716b65',
    paper: '#f7f3ee',
    cream: '#eee7df',
    line: '#d9d0c7',
    accent: '#263d35',
    white: '#fffdf9',
    darkText: '#f6f1eb',
    darkMuted: '#c9d0cb',
    lead: '#45403b',
    cardText: '#59534d',
  },
  fonts: {
    sans: 'Arial, Helvetica, sans-serif',
    serif: 'Georgia, "Times New Roman", serif',
  },
  breakpoints: {
    mobile: '800px',
  },
} as const;

export type AppTheme = typeof theme;
