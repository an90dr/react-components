export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#2f2f2f',
      },
      {
        name: 'light',
        value: '#ffffff',
      },
    ],
  },
};
