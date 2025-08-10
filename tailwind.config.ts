import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'input-shadow': '0 63px 59px rgba(26,33,188,.1)',
        'course-shadow': '0 40px 20px rgba(0,0,0,.15)',
        'testimonial-shadow1': '0 5.54348px 11.087px rgba(89,104,118,.05)',
        'testimonial-shadow2': '5.54348px 38.8043px 110.87px rgba(89,104,118,.15)',
      },
      colors: {
        primary: "#8B4513",
        secondary: "#A0522D",
        grey: "#57595f",
        slateGray: "#F5F5DC",
        deepSlate: "#DEB887",
        success: "#228B22",
        midnight_text: "#2F1B14",
      },
      spacing: {
        '75%': '75%',
      },
      backgroundImage: {
        'newsletter-bg': `url('/images/newsletter/bgFile.png')`,
        'newsletter-bg-2': `url('/E-learning/images/newsletter/bgFile.png')`,
      },
    },
  },
  plugins: [],
};
export default config;
