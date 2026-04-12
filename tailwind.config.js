/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                arabic: ['Cairo', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            },
            colors: {
                brand: {
                    50: '#e6f5f4',
                    100: '#c2e8e6',
                    200: '#9dd9d6',
                    300: '#78c9c5',
                    400: '#5fbfbb',
                    500: '#1A8780',
                    600: '#167471',
                    700: '#136059',
                    800: '#0f4d42',
                    900: '#0c3a32',
                    950: '#062724',
                },
                gold: {
                    50: '#f5f8e6',
                    100: '#e8eec2',
                    200: '#d4de92',
                    300: '#c0ce63',
                    400: '#98BA33',
                    500: '#7fa02a',
                    600: '#678122',
                    700: '#4e611a',
                    800: '#364213',
                    900: '#1e230b',
                    950: '#0f1205',
                },
            },
            animation: {
                'fade-up': 'fadeUp 0.7s ease forwards',
                'fade-in': 'fadeIn 0.6s ease forwards',
                'slide-left': 'slideLeft 0.6s ease forwards',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: 0, transform: 'translateY(30px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                slideLeft: {
                    '0%': { opacity: 0, transform: 'translateX(30px)' },
                    '100%': { opacity: 1, transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
}