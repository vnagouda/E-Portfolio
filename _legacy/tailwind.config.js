/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
	  transform: ['group-hover'],
	  rotate: {
		'y-180': 'rotateY(180deg)',
	  },
	  transformOrigin: {
		'center': 'center center',
	  }
	},
  },
  plugins: [],
}
