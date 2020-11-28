import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ShortForm from './ShortForm';

describe('ShortForm component', () => {
  afterEach(() => cleanup());
  it('renders ShortForm', () => {
    const { asFragment } = render(
      <ShortForm
        longUrl="http://test.com"
        onChange={() => {}}
        onSubmit={() => {}}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
