import React from 'react';
import { Text, Container, Image, Button } from './styles';

interface googleButtonProps {
    onPress: () => void,
    disabled: boolean
}

export function GoogleButton({ onPress, disabled }: googleButtonProps) {
    return (
        <Button onPress={onPress} disabled={disabled}>
            <Container>
                <Image style={disabled ? { opacity: 0.4 } : { opacity: 1 }} source={require('../../../assets/google-icon.png')} />
                <Text style={disabled ? { opacity: 0.4 } : { opacity: 1 }}>Sign up with Google</Text>
            </Container>
        </Button>
    );
}