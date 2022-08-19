/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"card-bg-image-mobile":
					"url('/src/assets/images/bg-main-mobile.png')",
				"card-bg-image-desktop":
					"url('/src/assets/images/bg-main-desktop.png')",
			},
			fontFamily: {
				"space-grotesk": ["'Space Grotesk'", "sans-serif"],
			},
		},
	},
	plugins: [],
};
