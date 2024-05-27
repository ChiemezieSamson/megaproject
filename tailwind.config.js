/** @type {import('tailwindcss').Config} */


export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class",
	corePlugins: {
		preflight: true,
	},
	theme: {
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
