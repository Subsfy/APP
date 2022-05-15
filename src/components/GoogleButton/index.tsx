import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Text, Container } from './styles';

export function GoogleButton() {
    return (
        <TouchableOpacity>
            <Container>
                <Image source={require('../../../assets/google-icon.png')} />
                <Text>Sign up with Google</Text>
            </Container>
        </TouchableOpacity>
    );
}