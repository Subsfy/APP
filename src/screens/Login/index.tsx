import React from 'react';
import { Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, styles } from './styles';
// import { GoogleButton } from '../../components/GoogleButton';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

import mainLogoImg from '../../../assets/mainlogo-subsfy.png';

export function Login() {

  return (
    <Container data-testID='Container'>
      <LinearGradient
        colors={['rgba(9, 9, 10, 1)', 'rgba(207, 9, 175, 1)']}
        style={styles.background}
      >
        <Image source={mainLogoImg}
        />
      </LinearGradient>
      {/* <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
      />; */}

      {/* <GoogleButton /> */}
      
    </Container>
  );
}