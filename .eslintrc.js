module.exports = {
    'env': {
        'browser': true,
        'amd': true,
        'node': true,
        'es2021': true
    },
    //"extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    'extends': 'react-app',
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 13,
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
        'json-format'
    ],
    'rules': {
        'quotes': ['error', 'single'],
        'one-var-declaration-per-line': ['error', 'initializations']
    }
}