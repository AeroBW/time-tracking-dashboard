/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      blue: "#5847eb",
      work: "#ff8c66",
      play: "#56c2e6",
      study: "#ff5c7c",
      exercise: "#4acf81",
      social: "#7536d3",
      "self-care": "#f1c65b",
      veryDarkBlue: "#0f1424",
      darkBlue: "#1c1f4a",
      desaturatedBlue: "#6f76c8",
      paleBlue: "#bdc1ff",
    },
    extend: {
      backgroundImage: {
        work: "url(/images/icon-work.svg)",
        play: "url(/images/icon-play.svg)",
        study: "url(/images/icon-study.svg)",
        exercise: "url(/images/icon-exercise.svg)",
        social: "url(/images/icon-social.svg)",
        "self-care": "url(/images/icon-self-care.svg)",
      },
      screens: {
        tablet: "700px",
        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
