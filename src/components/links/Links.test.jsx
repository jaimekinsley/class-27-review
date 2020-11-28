import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Links from './Links';

describe('Links component', () => {
  afterEach(() => cleanup());
  it('renders Links', () => {
    const { asFragment } = render(
      <Links
        links={['http://test.com', 'test2.com']}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
