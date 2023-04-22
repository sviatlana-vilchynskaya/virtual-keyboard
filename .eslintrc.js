module.exports = {
  extends: 'airbnb-base',
  rules: {
    // your rules here
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'import/extensions': [
          'error',
          'always',
          {
            ignorePackages: true,
          },
        ],
      },
    },
  ],
};
