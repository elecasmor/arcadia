import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [preact(), tailwindcss()],
    resolve: {
        alias: [
            { find: 'react', replacement: 'preact/compat' },
            { find: 'react-dom', replacement: 'preact/compat' },
            {
                find: '@arcadia/components',
                replacement: path.resolve(__dirname, 'src/components'),
            },
            {
                find: '@arcadia/views',
                replacement: path.resolve(__dirname, 'src/views'),
            },
            {
                find: '@arcadia/layout',
                replacement: path.resolve(__dirname, 'src/layout'),
            },
            {
                find: '@arcadia/hooks',
                replacement: path.resolve(__dirname, 'src/hooks'),
            },
            {
                find: '@arcadia/dictionary',
                replacement: path.resolve(
                    __dirname,
                    'src/helpers/dictionary.ts'
                ),
            },
        ],
    },
})
