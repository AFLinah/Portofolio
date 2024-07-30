/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-bg": "url('/src/assets/images/hero-bg.jpg')",
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
    plugins: [],
};
