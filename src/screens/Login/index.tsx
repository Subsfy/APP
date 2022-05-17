import React, { useEffect, useState } from 'react';
import { Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, styles } from './styles';
import { GoogleSignin, GoogleSigninButton, statusCodes, User } from '@react-native-google-signin/google-signin';
import { Home } from '../Home';

import mainLogoImg from '../../../assets/mainlogo-subsfy.png';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
  webClientId: '681590048229-03677p81gnpckeqs7nhdg00ho9i4hg7h.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: '', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

export function Login() {
  const [user, setUser] = useState<User | null>(null);
  const [userIsSignedIn, setUserIsSignedIn] = useState(false);
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);

  useEffect(() => {
    (async () => {
      await isSignedIn();
    })()
  }, []);

  async function signIn() {
    try {
      setIsSigninInProgress(true);
      await GoogleSignin.hasPlayServices();
      console.log('Chegou');
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)
      setUser(userInfo);
    } catch (e: any) {
      if (e.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(e);
      } else if (e.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(e);
      } else if (e.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(e);
      } else {
        // some other error happened
        console.log(e);
      }
    }
  }

  async function getCurrentUserInfo() {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUser(userInfo);
    } catch (e: any) {
      if (e.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        console.log(e);
      } else {
        // some other error
        console.log(e);
      }
    }
  };

  async function isSignedIn() {
    const isSignedIn = await GoogleSignin.isSignedIn();
    setUserIsSignedIn(isSignedIn);
  };

  return (
    <Container data-testID='Container'>
      <LinearGradient
        colors={['#09090a', '#cf09af']}
        style={styles.background}
      >
        <Image source={mainLogoImg}
        />
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
          disabled={isSigninInProgress}
        />
      </LinearGradient>
    </Container>
  );
}