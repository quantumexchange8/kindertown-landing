module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "1000px",
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
