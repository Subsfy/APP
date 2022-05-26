import { View, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native';
import { GoogleButton } from '../../components/GoogleButton';
import mainLogoImg from '../../../assets/mainlogo-subsfy.png';
import { Container, Image, styles } from './styles';
import { EXPO_CLIENT_ID, IOS_CLIENT_ID, ANDROID_CLIENT_ID, WEB_CLIENT_ID, API_URL } from "react-native-dotenv";
import { api } from '../../services/api';
import { Loading } from '../../components/Loading';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';
import { AppDispatch } from '../../redux/store';


export function Login() {
  const navigation = useNavigation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const dispatch : AppDispatch = useDispatch();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId: EXPO_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
  })

  useEffect(() => {
    (async () => {
      if (response?.type === 'success') {
        setIsAuthenticated(true);
        const result = await api.post('/auth/login', { token: response?.params?.id_token, deviceType: Platform.OS });
        const { name, avatar, email } = result.data.data;
        setIsAuthenticated(false);

        const user = {
          name: name,
          email: email,
          avatar: avatar 
        }

        // Saves user data in redux store
        dispatch(login(user));

        navigation.navigate('Home');
      }
    })()
  }, [response]);

  return (
    <View style={
      {
        flex: 1,
      }
    }>
      <Container data-testID='Container'>
        <LinearGradient
          colors={['#09090a', '#cf09af']}
          style={styles.background}
        >
          <Image source={mainLogoImg}
          />
          <GoogleButton disabled={isAuthenticated} onPress={() => { promptAsync({ showTitle: true, showInRecents: true }) }}></GoogleButton>
        </LinearGradient>
        {isAuthenticated && <Loading />}
      </Container>
    </View>
  );
}