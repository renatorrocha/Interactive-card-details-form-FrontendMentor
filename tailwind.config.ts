import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      colors: {
        linearGradientStart: 'hsl(249, 99%, 64%)',
        linearGradientEnd: 'hsl(278, 94%, 30%)',
        white: 'hsl(0, 0%, 100%)',
        lightGrayishViolet: 'hsl(270, 3%, 87%)',
        darkGrayishViolet: 'hsl(279, 6%, 55%)',
        veryDarkViolet: 'hsl(278, 68%, 11%)',
        error: 'hsl(0, 100%, 66%)'
      },
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: []
}
export default config
