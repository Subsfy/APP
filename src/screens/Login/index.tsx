import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, styles } from './styles';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleButton } from '../../components/GoogleButton';
import mainLogoImg from '../../../assets/mainlogo-subsfy.png';
import { LoginDTO } from './models/LoginDTO';

const axios = require('axios');

export function Login({ navigation } : LoginDTO) {

  const [accessToken, setAccessToken] = useState<string | undefined | null>(null);
  const [userInfo, setUserInfo] = useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '305614900935-hpi9o3gc93vtue16sm4ff8u783tmps4p.apps.googleusercontent.com',
    iosClientId: '305614900935-mvm7j4fta5d684ng4editif8nijp3mb6.apps.googleusercontent.com',
    androidClientId: '305614900935-rb82qrn56d28numl01vgkke21fa4f5hi.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication?.accessToken);
    }
  }, [response]);

  useEffect(() => {
    (async () => {
      try {
        console.log('accessToken')
        console.log(accessToken)
        const userInfoResponse = await axios.get("https://www.googleapis.com/userinfo/v2/me", {
          headers: { 'Authorization': `Bearer ${accessToken}`, 'content-type': 'application/json', 'accept': 'application/json' }
        });


        const data = userInfoResponse.data
        setUserInfo(data);

        if (data) {
          navigation.navigate('Home')
        }

      } catch (error) {
        console.log(error)
      }
    })()
  }, [accessToken]);

  return (
    <View style={
      { flex: 1 }
    }>
      <Container data-testID='Container'>
        <LinearGradient
          colors={['#09090a', '#cf09af']}
          style={styles.background}
        >
          <Image source={mainLogoImg}
          />
          <GoogleButton onPress={() => { promptAsync({ showTitle: true, showInRecents: true }) }}></GoogleButton>
        </LinearGradient>
      </Container>
    </View>
  );
}