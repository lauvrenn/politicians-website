const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        ...defaultTheme,
        extend: {
            backgroundColor: theme => ({
                ...theme('colors'),
                creme: '#F4DBC9'
            })
        }
    },
    variants: {},
    plugins: []
};