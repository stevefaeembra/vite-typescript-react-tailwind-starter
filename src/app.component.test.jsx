import React from 'react';

import { render, screen } from '~/test/utils';

import App from './app.component';

describe('Footer', () => {
  it('should render the footer', () => {
    render(<App />);

    expect(
      screen.getByRole('link', { name: /learn react/i }),
    ).toBeInTheDocument();
  });
});
