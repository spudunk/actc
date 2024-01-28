/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        notoSans: ["Noto Sans", "sans-serif"],
        notoSerif: ["Noto Serif", "serif"],
        display: ["Bebas Neue", "sans-serif"],
      },
      backgroundImage: {
        kitchen: "url('https://actc.pro/cdn-cgi/imagedelivery/XvH0UEoGmg1LgCBcC8XRgw/cb913a2d-0214-4b3b-956a-6e91585c2700/public')",
      },
    },
  },
  plugins: [],
};
