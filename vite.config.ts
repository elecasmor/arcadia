import preact from '@preact/preset-vite'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [preact()],
    resolve: {
        alias: [
            { find: 'react', replacement: 'preact/compat' },
            { find: 'react-dom', replacement: 'preact/compat' },

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
