import eslint from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import svelteEslint from 'eslint-plugin-svelte';
import eslintConfigPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import svelteParser from 'svelte-eslint-parser';
import tsEslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...svelteEslint.configs['flat/recommended'],
  eslintConfigPrettierRecommended,
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'no-nested-ternary': 'error',
      'linebreak-style': ['error', 'unix'],
      'no-cond-assign': ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/sort-type-constituents': 'error',
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true
        }
      ]
    }
  },
  {
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      import: pluginImport
    },
    rules: {
      semi: 'warn',
      'svelte/sort-attributes': 'warn'
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsEslint.parser
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      'svelte/no-target-blank': 'error',
      'svelte/no-at-debug-tags': 'error',
      'svelte/no-reactive-functions': 'error',
      'svelte/no-reactive-literals': 'error'
    }
  },
  {
    ignores: ['**/node_modules/', '**/dist/', '*.config.cjs']
  }
];
