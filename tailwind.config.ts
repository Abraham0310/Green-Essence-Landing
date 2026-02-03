import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}", // Esta línea abarca todo dentro de src
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#064e3b",
                    light: "#059669",
                    dark: "#022c22",
                },
                accent: {
                    DEFAULT: "#d4af37",
                    light: "#fcd34d",
                    subtle: "#fffbeb",
                },
                surface: {
                    light: "#ffffff",
                    offwhite: "#f8fafc",
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                serif: ['var(--font-playfair)'],
            }
        },
    },
    plugins: [],
};
export default config;