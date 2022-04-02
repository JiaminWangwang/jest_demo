const config = {
  plugins: [
    'simple-import-sort',
    'prettier',
    'jest',
    'lodash-fp',
    'react',
    'react-hooks',
    'typescript-custom-sort-keys',
    'jsx-a11y',
  ],
  extends: [
    'standard',
    'plugin:jest/recommended',
    'plugin:lodash-fp/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  env: {
    browser: true,
    'jest/globals': true,
  },
  globals: {
    sforce: true,
    jsdom: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
      webpack: {
        config: 'webpack.config.babel.js',
      },
    },
    react: {
      version: 'detect',
      flowVersion: '0.110.1',
    },
  },
  rules: {
    camelcase: [
      'error',
      {
        allow: [
          'UNSAFE_componentWillMount',
          'UNSAFE_componentWillReceiveProps',
          'UNSAFE_componentWillUpdate',
          '^.+_L[0-9]',
        ],
        properties: 'never',
        ignoreDestructuring: false,
      },
    ],
    'import/extensions': [
      'error',
      'never',
      { ignorePackages: true, ts: 'never', tsx: 'never' },
    ],
    'import/named': 'error',
    'import/no-dynamic-require': 'warn',
    'import/no-cycle': 'warn',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/stories/**/*.{js,ts,tsx}',
          '**/__stories__/**/*.{js,ts,tsx}',
          '**/__tests__/**/*.{js,ts,tsx}',
          '**/webpack.*.js',
        ],
      },
    ],
    'import/no-named-default': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/label-has-for': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
    'jsx-a11y/no-noninteractive-tabindex': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'react/button-has-type': 'warn',
    'react/default-props-match-prop-types': 'warn',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', 'tsx'] },
    ],
    'react/no-array-index-key': 'warn',
    'react/no-multi-comp': 'off',
    'react/no-unused-prop-types': ['error', { skipShapeProps: true }],
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          'everything-else',
          'rendering',
        ],
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react/require-default-props': 'warn',
    'react/display-name': 'warn',
    'react/jsx-key': 'warn',
    'react/no-direct-mutation-state': 'off',
    'simple-import-sort/sort': [
      'warn',
      {
        groups: [
          ['^.*(public-path).*'],
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          ['^(react|redux)'],
          [
            '^(utility-types|jsforce|query|shallow|rmc|reselect|decimal|numeral|date|moment|lodash|recompose|formik|yup|classnames|prop-types|uuid|nanoid|csv|filereader|resize|@react-hook|normalizr)',
          ],
          [
            '^.*(styled|snapshot|enzyme|@storybook|@testing|@salesforce|@nivo).*',
          ],
          // WSP files
          ['^.*(concerns|schema).*'],
          ['^.*constants.*'],
          ['^.*(commons|core).*'],
          ['^.*repositories.*'],
          ['^.*model.*'],
          ['^.*module.*'],
          ['^.*action.*'],
          ['^.*reducers.*'],
          ['^.*utils.*'],
          ['^.*containers.*'],
          ['^.*components.*'],
          ['^.{2}'],
          ['^.*css$'],
        ],
      },
    ],
    'sort-imports': 'off',
    'prettier/prettier': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'lodash-fp/no-unused-result': 'off',
    'lodash-fp/use-fp': 'off',
    'lodash-fp/prefer-constant': 'off',
    'lodash-fp/prefer-composition-grouping': 'warn',
    'lodash-fp/no-extraneous-args': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'typescript-custom-sort-keys/interface': 'off',
    'standard/no-callback-literal': 'off',
    'no-case-declarations': 'off',
  },
};

module.exports = {
  ...config,
  parser: '@babel/eslint-parser', // babel-eslint修改为@babel/eslint-parser
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "requireConfigFile": false,  // 解决import报错
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  plugins: ['flowtype', ...config.plugins],
  extends: [
    'plugin:flowtype/recommended',
    'prettier/flowtype',
    ...config.extends,
  ],
};
