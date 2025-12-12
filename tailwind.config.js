export default {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#A78BFA", // soft purple accent
        paper: "#FFF8E7"   // warm light mode
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};