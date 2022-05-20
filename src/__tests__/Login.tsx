import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../../App';

describe('<Login />', () => {
  it('has 1 children', () => {
    const component = render(<App />);
    console.log(component)
    // expect(tree.children.length).toBe(1);
  });
});