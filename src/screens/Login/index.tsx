import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native';
import { GoogleButton } from '../../components/GoogleButton';
import mainLogoImg from '../../../assets/mainlogo-subsfy.png';
import { Container, styles } from './styles';
import { EXPO_CLIENT_ID, IOS_CLIENT_ID, ANDROID_CLIENT_ID, WEB_CLIENT_ID, API_URL } from "react-native-dotenv";
import { api } from '../../services/api';

export function Login() {
  const navigation = useNavigation()

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId: EXPO_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
  })

  useEffect(() => {
    (async () => {
      if (response?.type === 'success') {
        const result = await api.post('/auth/login', { token: response?.params?.id_token })
        const { name, avatar } = result.data.data
        navigation.navigate('Home', { name, avatar })
      }
    })()
  }, [response]);

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