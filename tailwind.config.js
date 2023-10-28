const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'theme-orange': '#f36100',
            },
        },
        // screens: {
        //     '2xl': { 'max': '1535px' },
        //     // => @media (max-width: 1535px) { ... }

        //     'xl': { 'max': '1279px' },
        //     // => @media (max-width: 1279px) { ... }

        //     'lg': { 'max': '1023px' },
        //     // => @media (max-width: 1023px) { ... }

        //     'md': { 'max': '767px' },
        //     // => @media (max-width: 767px) { ... }

        //     'sm': { 'max': '639px' },
        //     // => @media (max-width: 639px) { ... }
        // }
    },

    plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/forms')
    ],
};
