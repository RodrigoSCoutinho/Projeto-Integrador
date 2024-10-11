/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 2s ease',  // Inclui fadeOut
        slideIn: 'slideIn 1s ease',  // Inclui slideIn
        slideTop: 'slideTop 1s ease',  // Inclui slideIn
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '0' },  // Começa invisível
          '100%': { opacity: '1' },  // Termina visível
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },  // Começa fora da tela (à direita)
          '100%': { transform: 'translateX(0)', opacity: '1' },   // Termina na posição original
        },
        slideTop: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },  // Começa fora da tela (à direita)
          '100%': { transform: 'translateY(0)', opacity: '1' },   // Termina na posição original
        },
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}
