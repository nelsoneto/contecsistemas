import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'overlay-dark': 'rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        bannerImg: 'url(/images/freepik-woman-bus.jpg)',
        pattern: 'url(/images/bg.png)',
        maleImg: 'url(/images/happy-young-asian-businesswoman2.jpg)',
        midas: 'url(/images/Midas-menu.png)',
      },
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
