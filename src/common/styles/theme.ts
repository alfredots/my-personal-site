import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    blue1: '#046BBF',
    blue2: '#1c2541',
    white: '#FFFFFF',
    gray1: '#B3B0B8',
    gray2: '#7C7A80',
    black0: '#000000',
    black1: '#101114',
    black2: '#1E1F24',
    black3: '#2B2C33',
    black4: '#454652'
  },
  container: '100rem',
  fontFamily: {
    spaceGrotesk: `'Space Grotesk', sans-serif;`,
    inter: `'Inter', sans-serif`
  },
  sizing: {
    '4px': '0.25rem',
    '8px': '0.5rem',
    '12px': '0.75rem',
    '16px': '1rem',
    '20px': '1.25rem',
    '24px': '1.5rem',
    '28px': '1.75rem',
    '32px': '2rem',
    '36px': '2.25rem',
    '40px': '2.5rem',
    '44px': '2.75rem',
    '48px': '3rem',
    '52px': '3.25rem',
    '56px': '3.5rem',
    '60px': '3.75rem',
    '64px': '4rem'
  }
} as const
