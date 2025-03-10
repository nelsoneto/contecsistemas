/* eslint-disable prettier/prettier */
import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {

				'3xl': '1920px', // Adiciona um novo breakpoint
			},
			colors: {
				'overlay-dark': 'rgba(0, 0, 0, 0.5)',
			},
			backgroundImage: {
				bannerImg: 'url(/images/freepik-woman-bus.jpg)',
				pattern: 'url(/images/bg.png)',
				maleImg: 'url(/images/happy-young-asian-businesswoman5.jpg)',
				midas: 'url(/images/Midas-menu.png)',
			},
			fontFamily: {
				sans: 'var(--font-roboto)',
				alt: 'var(--font-bai-jamjuree)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-animate'),
		require('@tailwindcss/typography'),
	],
}
export default config
