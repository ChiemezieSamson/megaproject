/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
// const defaultTheme = require('tailwindcss/defaultTheme')


export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: 'class',
	corePlugins: {
		preflight: true,
	},
	theme: {
		screens: {
			xx: "300px",
			xs: "466px",
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				round: ["Varela Round", "sans-serif"],
				poppins: ["poppins", "sans-serif"],
				lora: ["Lora", "serif"],
				josefin: ["Josefin Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
