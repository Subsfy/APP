import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, styles } from './styles';
import { GoogleButton } from '../../components/GoogleButton';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

export function Login() {

  return (
    <Container>
      <LinearGradient
        colors={['rgba(9, 9, 10, 1)', 'rgba(207, 9, 175, 1)']}
        style={styles.background}
      >
        <Image source={require('../../../assets/mainlogo-subsfy.png')}
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