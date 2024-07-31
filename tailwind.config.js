/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-bg": "url('/src/assets/images/hero-bg.jpg')",
                "stack-bg" : "url('/src/assets/images/stack-bg.jpg')",
            },
            keyframes: {
                animate: {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(50px)" },
                },
            },
            animation: {
                animate: "animate 2s infinite ease alternate",
            },
        },
    },
    plugins: [
        plugin(({ addBase, addComponents, addUtilities }) => {
            addBase({});
            addComponents({
                ".card": {
                    "@apply rounded-xl bg-white/10 w-[100%] sm:w-[50%] md:w-[30%] lg:w-[30%]":
                        {},
                },
            });
            addUtilities({});
        }),
    ],
};
