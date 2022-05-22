import React from 'react';
import { Spinner } from 'native-base';

export function Loading() {
    return (
        <Spinner  size="lg" color="cyan.500" accessibilityLabel="Loading" />
    );
}



