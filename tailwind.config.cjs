const { redirect } = require("react-router");

/** @type {import("tailwindcss").Config} */
module.exports = {
    darkMode : "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "wiggle": "wiggle 1s linear 0s infinite",
                "wiggle-hold" : "wiggle 1s linear 1s infinite",

                "wiggle-and-grow-once" : "wiggle-and-grow .5s linear 0s 1",
                "dark-wiggle-and-grow-once" : "dark-wiggle-and-grow .5s linear 0s 1",

                "drop-fade-in-10" : "drop-fade-in-10 1s linear 0s",
                "drop-fade-in-10-slow" : "drop-fade-in-10 2s linear 0s",
                "drop-fade-in-10-fast" : "drop-fade-in-10 .5s linear 0s",

                "drop-fade-in-100" : "drop-fade-in-100 1s linear 0s",
                "drop-fade-in-100-slow" : "drop-fade-in-100 2s linear 0s",
                "drop-fade-in-100-fast" : "drop-fade-in-100 .5s linear 0s"
            },
            keyframes: {
                wiggle: {
                    "0%, 100%" : {  },
                    "25%": { transform: "rotate(3deg)" },
                    "75%": { transform: "rotate(-3deg)" },
                },
                "wiggle-and-grow" : {
                    "0%, 50%, 100%" : {
                        color: "#fff",
                        transform: "rotate(0deg) scale(1)"
                    },
                    "25%": {
                        transform: "rotate(3deg) scale(1)"
                    },
                    "50%" :{
                        transform: "rotate(0deg) scale(1.5)"
                    },
                    "75%": {
                        transform: "rotate(-3deg) scale(1)"
                    }
                },
                "dark-wiggle-and-grow" : {
                    "0%, 50%, 100%" : {
                        color: "rgb(254 215 170)", //orange-200
                        transform: "rotate(0deg) scale(1)"
                    },
                    "25%": {
                        transform: "rotate(3deg) scale(1)"
                    },
                    "50%" :{
                        transform: "rotate(0deg) scale(1.5)"
                    },
                    "75%": {
                        transform: "rotate(-3deg) scale(1)"
                    }
                },
                "drop-fade-in-10" : {
                    "0%" : {
                        opacity: 0,
                        transform: "translateY(-10%)"
                    },
                    "100%" : {
                        opacity: 1,
                        transform: "translateY(0%)"
                    }
                },
                "drop-fade-in-100" : {
                    "0%" : {
                        opacity: 0,
                        transform: "translateY(-100%)"
                    },
                    "100%" : {
                        opacity: 1,
                        transform: "translateY(0%)"
                    }
                }
            },
            fontFamily : {
                "display" : "Burtons"
            }
        },
        plugins: [],
    }
}