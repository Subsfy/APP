import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Text, Container } from './styles';

interface googleButtonProps {
    onPress: () => void
}

export function GoogleButton({onPress}: googleButtonProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Container>
                <Image source={require('../../../assets/google-icon.png')} />
                <Text>Sign up with Google</Text>
            </Container>
        </TouchableOpacity>
    );
}