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

                "drop-fade-in-10" : "drop-fade-in-10 1s linear 0s",
                "drop-fade-in-10-slow" : "drop-fade-in-10 2s linear 0s",
                "drop-fade-in-10-fast" : "drop-fade-in-10 .5s linear 0s",

                "drop-fade-in-100" : "drop-fade-in-100 1s linear 0s",
                "drop-fade-in-100-slow" : "drop-fade-in-100 2s linear 0s",
                "drop-fade-in-100-fast" : "drop-fade-in-100 .5s linear 0s"
            },
            keyframes: {
                wiggle: {
                    "0%, 50%, 100%" : { transform: "rotate(0deg)" },
                    "25%": { transform: "rotate(3deg)" },
                    "75%": { transform: "rotate(-3deg)" },
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