/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				amethyst: {
					50: '#fbf5fe',
					100: '#f5ebfc',
					200: '#ecd6f8',
					300: '#dfb6f1',
					400: '#cd8ae8',
					500: '#b55dd8',
					600: '#a44ac4',
					700: '#82309b',
					800: '#6c297f',
					900: '#5b2669',
					950: '#390e44'
				}
			}
		}
	},
	plugins: []
};
