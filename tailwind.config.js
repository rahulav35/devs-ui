/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        userpic: "url(/Assets/darkmode/user.png)",
        bgimage: "url(/Assets/images/mesh.png)",
        bgmobileimage: "url(/Assets/images/mesh-mobile.png)",
      },
      colors: {
        discordcolor: "#5865F2",
      },
    },
  },
  plugins: [],
};
