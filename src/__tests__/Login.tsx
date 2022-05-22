import React from 'react';
import { render } from '@testing-library/react-native';
import { MockedNavigator } from '../__mocks__/MockedNavigator';
import { Login } from '../screens/Login';

describe('<Login />', () => {
  it('has 1 children', () => {
    jest.mock('expo-auth-session/providers/google', () => {})
    const { toJSON } = render(<MockedNavigator component={Login} />);
    const json: any = toJSON()
    const container = json?.children[0].children[0].children[1].children[0].children[0].props['data-testID'];
    expect(container).toBe('Container');
  });
});