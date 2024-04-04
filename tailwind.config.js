module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('../src/assets/admin/Device - Macbook Pro.png')",
        "hero-image2": "url('../src/assets/admin/Device2.png')",
      },
      backgroundPosition: {
        "left-custom": "-70% 50%", // Adjust the values as needed
        "right-custom": "180% 50%", // Adjust the values as needed
        "right-mobile-custom": "100% 30%", // Adjust the values as needed
      },
    },
  },
  plugins: [],
};
