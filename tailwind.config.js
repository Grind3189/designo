/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          100: "#FFAD9B",
          200: "#E7816B"
        },
        black: {
          100: "#333136",
          200: "#1D1C1E"
        },
        white: {
          100: "#DCDCDC",
          200: "#DFDFDF"
        }
      },
      screens: {
        md: "768px",
        lg: "1280px",
        xl: "1440px",
      },
      backgroundImage: {
        'web-design-sm': "url('/src/assets/home/mobile/image-web-design.jpg')",
        'web-design-md': "url('/src/assets/home/tablet/image-web-design.jpg')",
        'web-design-lg': "url('/src/assets/home/desktop/image-web-design-large.jpg')",
        'app-design-sm': "url('/src/assets/home/mobile/image-app-design.jpg')",
        'app-design-md': "url('/src/assets/home/tablet/image-app-design.jpg')",
        'app-design-lg': "url('/src/assets/home/desktop/image-app-design.jpg')",
        'graphic-design-sm': "url('/src/assets/home/mobile/image-graphic-design.jpg')",
        'graphic-design-md': "url('/src/assets/home/tablet/image-graphic-design.jpg')",
        'graphic-design-lg': "url('/src/assets/home/desktop/image-graphic-design.jpg')",
        'about-hero-sm': "url('/src/assets/about/mobile/image-about-hero.jpg')",
        'about-hero-md': "url('/src/assets/about/tablet/image-about-hero.jpg')",
        'about-hero-lg': "url('/src/assets/about/desktop/image-about-hero.jpg')",
        'world-class-sm': "url('/src/assets/about/mobile/image-world-class-talent.jpg')",
        'world-class-md': "url('/src/assets/about/tablet/image-world-class-talent.jpg')",
        'world-class-lg': "url('/src/assets/about/desktop/image-world-class-talent.jpg')",
        'real-deal-sm': "url('/src/assets/about/mobile/image-real-deal.jpg')",
        'real-deal-md': "url('/src/assets/about/tablet/image-real-deal.jpg')",
        'real-deal-lg': "url('/src/assets/about/desktop/image-real-deal.jpg')"
      }

    },
  },
  plugins: [],
}