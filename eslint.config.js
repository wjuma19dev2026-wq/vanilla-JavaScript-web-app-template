// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'

/**
 * Para esta configuracion debses instalar
 * npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier globals
 */
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  js.configs.recommended, // Configuración base de ESLint
  prettierConfig, // Desactiva reglas que chocan con Prettier
  // --- SECCIÓN DE IGNORE (Reemplaza al .eslintignore) ---
  {
    ignores: [
      '**/node_modules/',
      'dist/',
      'build/',
      'public/vendor/',
      '*.min.js',
      'coverage/',
      '.vscode/',
      'package-lock.json',
    ],
  },
  {
    files: ['**/*.js'], // Aplica a todos los archivos JS
    plugins: { prettier: prettierPlugin },
    languageOptions: {
      ecmaVersion: 'latest', // Soporta sintaxis moderna
      sourceType: 'module', // Permite usar import/export
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
      'no-unused-vars': 'warn', // Advierte sobre variables sin uso
      'no-console': 'off', // Permite usar console.log
      eqeqeq: ['error', 'always'], // Exige === en comparaciones
      curly: 'error', // Obliga a usar llaves en bloques
      semi: 'off', // Requiere punto y coma
      quotes: ['error', 'single'], // Usa comillas dobles
      indent: ['error', 2], // Indentación de 2 espacios
      'no-var': 'error',
      'no-undef': 'error',
    },
  },
]
