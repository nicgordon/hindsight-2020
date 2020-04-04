module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    'jsx-a11y/anchor-is-valid': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': [1, { custom: 'ignore' }],
  },
};
