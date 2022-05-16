import React from 'react';
import renderer from 'react-test-renderer';
import { Image } from 'react-native';
import { Login } from '../screens/Login';
import App from '../../App';

it('renders the login screen when the app is first rendered', () => {
  const rendered = renderer.create(<App />);
  const LoginRendered = rendered.root.findByType(Login);
  const ImageRendered = LoginRendered.findByType(Image);
  expect(ImageRendered).toBeTruthy();
});