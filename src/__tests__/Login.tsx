import React from 'react';
import {jest} from '@jest/globals';
import { render } from '@testing-library/react-native';

import { Login } from '../screens/Login';

describe('<Login />', () => {
  it('has 1 children', () => {
    const tree: any = render(<Login />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});