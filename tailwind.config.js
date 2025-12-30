/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury wedding color palette
        gold: {
          50: '#fefdf8',
          100: '#fef9e7',
          200: '#fdf2d1',
          300: '#fce7a8',
          400: '#f9d574',
          500: '#f5c23a',
          600: '#e6a91a',
          700: '#c0850f',
          800: '#9a6a14',
          900: '#7d5514',
        },
        cream: {
          50: '#fefcf9',
          100: '#fdf7f0',
          200: '#faece0',
          300: '#f6dcc4',
          400: '#f0c49e',
          500: '#e8a777',
          600: '#dc8a54',
          700: '#c76f42',
          800: '#a35a3a',
          900: '#844a32',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b1a3',
          400: '#7d8f7d',
          500: '#5f735f',
          600: '#4a5a4a',
          700: '#3d493d',
          800: '#333c33',
          900: '#2c322c',
        },
        blush: {
          50: '#fef7f7',
          100: '#fdeaea',
          200: '#fad5d5',
          300: '#f5b3b3',
          400: '#ed8484',
          500: '#e25a5a',
          600: '#d13d3d',
          700: '#b02d2d',
          800: '#922929',
          900: '#7a2727',
        },
        charcoal: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#313131',
        }
      },
      fontFamily: {
        'serif': ['Lora', 'serif'],
        'sans': ['Source Sans Pro', 'Arial', 'sans-serif'],
        'lora': ['var(--font-lora)'],
        'source-sans': ['var(--font-source-sans)'],
        'luxury': ['var(--font-lora)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
