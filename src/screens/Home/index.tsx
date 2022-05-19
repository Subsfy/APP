import React from 'react';
import { Header, LeftHeader, RightHeader, ScrollView, UserText, NotificationIcon, UserPhoto } from './styles';
import { HomeDTO } from './models/HomeDTO';
import PhotoTest from '../../../assets/PhotoTest2.png';

export function Home({ navigation }: HomeDTO) {
  const userName = ' Nicolas'

  return (
    <>
      <Header>
        <LeftHeader>
          <UserText>Olá, {userName}</UserText>
        </LeftHeader>
        <RightHeader>
          <NotificationIcon name="bell-badge-outline" size={40}></NotificationIcon>
          <UserPhoto source={PhotoTest} />
        </RightHeader>
      </Header>
      <ScrollView></ScrollView>
    </>
  );
}