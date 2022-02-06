module.exports = {
  content: ["./*.html", "./assets/**/*.js"],

  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#18191F",
        dark: "#1d354f",
        primary: "#4985C5",
        secondary: "#FEDD59",
        "body-color": "#EDF3F9",
        warning: "#FBBF24",
      },
      boxShadow: {
        feature: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 60px 120px -20px #EBEFFD",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: {
        'split-primary-white-v': "linear-gradient(to right, #4985C5 66% , white 34%);",
        'split-white-black-v': "linear-gradient(to right, white 34%, #18191F 66%);",
        'split-white-primary-h': "linear-gradient(to bottom, #4985C5 66% , white 34%);",
        'split-primary-white-h': "linear-gradient(to right, white 34%, #4985C5 66%);"
      }
    },
  },
  plugins: [],
};
