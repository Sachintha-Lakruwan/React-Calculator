/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-main": "var(--background-main)",
        "background-keypad": "var(--background-keypad)",
        "background-screen": "var(--background-screen)",

        "reset-key": "var(--reset-key)",
        "reset-key-dark": "var(--reset-key-dark)",

        "equal-key": "var(--equal-key)",
        "equal-key-dark": "var(--equal-key-dark)",

        "digits-key": "var(--digits)",
        "digits-key-dark": "var(--digits-dark)",

        "keys-text": "var(--keys-text)",
        "text-text": "var(--text)",
        "display-text": "var(--display-text)",
      },
      fontFamily: {
        body: ["League Spartan"],
      },
    },
  },
  plugins: [],
};
