/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-bg": "url('/src/assets/images/hero-bg.jpg')",
                "stack-bg": "url('/src/assets/images/stack-bg.jpg')",
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
            boxShadow: {
                image: "10px 20px 3px rgba(0,0,0,0.5)",
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
                ".resume-2": {
                    "@apply bg-slate-200 bg-top p-5": {},
                },
                ".resume-1": {
                    "@apply bg-slate-100 bg-no-repeat bg-cover bg-top p-5": {},
                },
            });
            addUtilities({});
        }),
    ],
};
