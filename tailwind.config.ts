import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: 'url(/images/freepik-woman-bus.jpg)',
        pattern: 'url(/images/bg.png)',
        stars: 'url(/images/smart-technology.jpg)',
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
