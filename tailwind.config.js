// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            boxShadow: {
                insetDefault: 'inset 0px 4px 4px 0px rgba(0,0,0,0.25)',
            },
        },
    },
    plugins: [],
})
