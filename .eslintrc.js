module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'script',
    ecmaFeatures: {
      jsx: true,
      globalReturn: false
    }
  },
  plugins: ['@typescript-eslint', 'sort-exports', 'react-hooks', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'react-app',
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error'],
    // typescript
    '@typescript-eslint/array-type': [
      'error',
      { default: 'array-simple', readonly: 'generic' }
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { fixStyle: 'inline-type-imports' }
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/semi': 'off',
    // react
    'react-hooks/rules-of-hooks': 'error',
    // default
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: 0,
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { after: true, before: false }],
    'comma-style': ['error', 'last'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: ['error', 'always'],
    indent: 'off',
    'keyword-spacing': ['error', { after: true, before: true }],
    'newline-after-var': 'error',
    'no-async-promise-executor': 'error',
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['warn', 'error'] }]
        : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-var': 'error',
    'object-curly-spacing': 'off',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    'sort-exports/sort-exports': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple']
      }
    ],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': 'off',
    'prefer-spread': 'error',
    'symbol-description': 'error',
    yoda: 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],
    'no-return-await': 'error',
    'no-throw-literal': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-mixed-operators': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-array-constructor': 'error',
    'no-confusing-arrow': 'error',
    'no-delete-var': 'error',
    'no-else-return': 'error',
    'class-methods-use-this': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'off',
    'func-names': 'error',
    'no-promise-executor-return': 'error',
    'no-setter-return': 'error',
    'no-this-before-super': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-optional-chaining': 'error',
    'array-callback-return': 'error',
    'no-await-in-loop': 'error',
    'no-dupe-args': 'error'
  }
}
