import React from 'react';
import { useRoute } from '@react-navigation/native';

import { IHomeProps } from '../../dtos/IHomeDTO';
import { Header, LeftHeader, RightHeader, ScrollView, UserText, NotificationIcon, UserPhoto } from './styles';

export function Home() {
  const { params } = useRoute()
  const { name, avatar } = params as IHomeProps
  return (
    <>
      <Header>
        <LeftHeader>
          <UserText>Olá, {name}</UserText>
        </LeftHeader>
        <RightHeader>
          <NotificationIcon name="bell-badge-outline" size={40}></NotificationIcon>
          <UserPhoto source={{ uri: avatar }} />
        </RightHeader>
      </Header>
      <ScrollView></ScrollView>
    </>
  );
}