import React from 'react';

// import { BrowserRouter } from 'react-router-dom';

import 'tailwindcss/tailwind.css';

// export const decorators = [
//   (Story, context) => (
//     <BrowserRouter>
//       <Story {...context} />
//     </BrowserRouter>
//   ),
// ];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light', left: '☀️' },
        { value: 'dark', title: 'Dark', left: '🌒' },
      ],
    },
  },
};
