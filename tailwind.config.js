const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'rgba(15, 15, 15, 1)',
                secondary: 'rgba(38, 38, 38, 1)',
                lightwhite: 'rgba(255, 255, 255, 1)',
                lightgrey: 'rgba(153, 153, 153, 1)',
                lightred: 'rgba(229, 0, 0, 1)',

            },
            backgroundImage: {
                'home': "url('./assets/home.jpg')",
                'post': "url('./assets/post.png')",
                'movie': "url('./assets/shows.png')"
            }
        },
        screens: {
            xs: '390px',
            ss: '',
            sm: '',
            md: '',
            xs: '1140px ',
            xl: '1920px',
        },
    },
    plugins: [],
})