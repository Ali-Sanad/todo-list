import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import * as parser from '@typescript-eslint/parser'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: parser,
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 2020
      }
    },

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      '@typescript-eslint/await-thenable': 'error',
      ...reactHooks.configs.recommended.rules,
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks:
            '(useRecoilCallback|useRecoilTransaction_UNSTABLE)'
        }
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  }
)
