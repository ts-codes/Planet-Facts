/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
      },
      colors: {
        theme_dark_bg: '#070724',
        theme_dark_gray: '#38384f',
        theme_light_gray: '#838391',
        theme_mercury_active: '#419ebb',
        theme_venus_active: '#eda249',
        theme_earth_active: '#6d2ed5',
        theme_mars_active: '#d14c32',
        theme_jupiter_active: '#d83a34',
        theme_saturn_active: '#cd5120',
        theme_uranus_active: '#1ec1a2',
        theme_neptune_active: '#2d68f0',
      },
    },
  },
  plugins: [],
};
