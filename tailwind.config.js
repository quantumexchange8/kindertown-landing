module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('../src/assets/admin/Device - Macbook Pro.png')",
        "hero-image2": "url('../src/assets/admin/Device2.png')",
      },
      backgroundPosition: {
        "left-custom": "-150% 50%", // Adjust the values as needed
        "left-mobile-custom": "-100% 50%", // Adjust the values as needed
        "right-custom": "10% 50%", // Adjust the values as needed
        "right-mobile-custom": "110% 30%", // Adjust the values as needed
      },
    },
  },
  plugins: [],
};
