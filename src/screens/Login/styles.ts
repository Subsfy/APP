import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  }
});

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`

`