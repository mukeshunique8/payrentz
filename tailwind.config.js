/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        b1: "#2D2D2D",
        b2:"#1D1D1D",
        b3:"#858585",
        gray:"#DBDBDB",
        red:"#ED1F28",
        lblue:"#F3F7FF",
        blue:"#2B5CAB",
        gradblue:"#3E88D7",
        gradblue1:"#236BB7",
        gradred:"#EC2027",
        gradred1:"#D91B21",

      },
    },
  },
  plugins: [],
};
