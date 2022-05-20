import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native';

import { GoogleButton } from '../../components/GoogleButton';
import mainLogoImg from '../../../assets/mainlogo-subsfy.png';
import { Container, styles } from './styles';

import { api } from '../../services/api';

export function Login() {
  const navigation = useNavigation()
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId: '305614900935-hpi9o3gc93vtue16sm4ff8u783tmps4p.apps.googleusercontent.com',
    iosClientId: '305614900935-mvm7j4fta5d684ng4editif8nijp3mb6.apps.googleusercontent.com',
    androidClientId: '305614900935-rb82qrn56d28numl01vgkke21fa4f5hi.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
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