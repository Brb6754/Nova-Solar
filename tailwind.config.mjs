/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Paleta Nova Solar. Naranja y ámbar salen del logo.svg real.
                noche: '#090604',
                carbon: '#150f0a',
                brasa: '#ff6400',
                ambar: '#fbbb35',
                arena: '#ede3d9',
                ceniza: '#8c8078',
            },
            fontFamily: {
                sans: ['Archivo', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
            },
            borderColor: {
                DEFAULT: 'rgba(237,227,217,0.10)',
                calida: 'rgba(255,100,0,0.22)',
            },
            maxWidth: {
                prosa: '62ch',
            },
        },
    },
    plugins: [],
}
