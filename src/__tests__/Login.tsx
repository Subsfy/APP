import React from 'react';
import { render } from '@testing-library/react-native';
import { MockedNavigator } from '../__mocks__/MockedNavigator';
import { Login } from '../screens/Login';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('<Login />', () => {
  const initialState = {
    output: {
      user: {
        name: '',
        email: '',
        avatar: ''
      }
    }
  }
  const mockStore = configureStore()
  let store
  it('has 1 children', () => {
    store = mockStore(initialState)
    jest.mock('expo-auth-session/providers/google', () => { })
    const { toJSON } = render(<Provider store={store}><MockedNavigator component={Login} /></Provider>);
    const json: any = toJSON()
    const container = json?.children[0].children[0].children[1].children[0].children[0].props['data-testID'];
    expect(container).toBe('Container');
  });
});