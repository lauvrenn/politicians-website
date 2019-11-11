const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        ...defaultTheme,
        extend: {
            colors: {
                creme: '#F4DBC9',
                navy: '#1a3952',
                lightGreen: '#e3f17f',
                liveGreen: '#cddc39',
                liveBlue: '#0ddef2'
            },
            borderRadius: {
                xl: '10px',
                twoxl: '20px',
                threexl: '30px'
            }
        }
    },
    variants: {},
    plugins: []
};