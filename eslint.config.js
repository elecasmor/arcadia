import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-simple-import-sort'

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        plugins: { 'simple-import-sort': importPlugin },
        rules: {
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        ['^react$', '^@?\\w'],
                        ['^@arcadia/*'],
                        ['^\\./'],
                        ['^.+\\.(module.css|module.scss)$'],
                        ['^.+\\.(gif|png|svg|jpg)$'],
                    ],
                },
            ],
        },
    }
)
