import React, { useEffect, useState } from 'react';
import { Button, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, styles } from './styles';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleButton } from '../../components/GoogleButton';

import mainLogoImg from '../../../assets/mainlogo-subsfy.png';

export function Login() {

    const [request, response, promptAsync] = Google.useAuthRequest({
      expoClientId: '305614900935-hpi9o3gc93vtue16sm4ff8u783tmps4p.apps.googleusercontent.com',
      iosClientId: '305614900935-mvm7j4fta5d684ng4editif8nijp3mb6.apps.googleusercontent.com',
      androidClientId: '305614900935-rb82qrn56d28numl01vgkke21fa4f5hi.apps.googleusercontent.com',
      webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    });

    useEffect(() => {
      if (response?.type === 'success') {
        const { authentication } = response;
        console.log(response);
        }
    }, [response]);


  return (
    <Container data-testID='Container'>
      <LinearGradient
        colors={['#09090a', '#cf09af']}
        style={styles.background}
      >
        <Image source={mainLogoImg}
        />
        <Button title="Google" onPress={() => {promptAsync()}}></Button>
      </LinearGradient>
    </Container>
  );
}