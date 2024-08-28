/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Very_bg_dark_blue: "hsl(233, 47%, 7%)",
                c_Dark_card_bg_desaturated_blue: "hsl(244, 38%, 16%)",
                c_Soft_accent_violet: "hsl(277, 64%, 61%)",
                c_Slightly_main_paragraph_transparent_white : "hsla(0, 0%, 100%, 0.75)",
                c_Slightly_stat_headings_transparent_white : "hsla(0, 0%, 100%, 0.6)",
            },
            fontFamily: {
                inter:[ "Inter", "sans-serif"],
                lexend_deca: ["Lexend Deca", "sans-serif"]
            }
        },
    },
    plugins: [],
}

