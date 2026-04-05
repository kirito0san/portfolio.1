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
                    50: '#f0f4ff',
                    100: '#dde6ff',
                    200: '#c3d1ff',
                    300: '#9db4ff',
                    400: '#748bff',
                    500: '#4f61fb',
                    600: '#3940ef',
                    700: '#2e31d4',
                    800: '#272caa',
                    900: '#252b86',
                    950: '#16184e',
                },
                gold: {
                    400: '#f5c842',
                    500: '#e4a900',
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