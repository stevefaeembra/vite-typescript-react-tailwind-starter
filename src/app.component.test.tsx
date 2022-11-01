import React from 'react';

import { expect, it } from 'vitest';

import App from './app.component';
import { render, screen } from './test/utils';

describe('App', () => {
  it('should render the whole app', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /main content/i })).toBeInTheDocument();
  });
});
