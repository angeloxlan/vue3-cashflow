module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        indent: ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    overrides: [
        {
            files: ['src/components/**/*.vue'],
            rules: {
                'vue/multi-word-component-names': 0,
            },
        },
    ],
};
