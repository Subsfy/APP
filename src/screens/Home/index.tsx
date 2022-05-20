import React from 'react';
import { Header, LeftHeader, RightHeader, ScrollView, UserText, NotificationIcon, UserPhoto } from './styles';
import { HomeDTO } from './models/HomeDTO';
import PhotoTest from '../../../assets/PhotoTest2.png';

export function Home(params: { route: { params: { avatar: any; name: string; }; }; }, { navigation }: HomeDTO) {
  const { avatar, name } = params.route.params

  return (
    <>
      <Header>
        <LeftHeader>
          <UserText>Olá, {name}</UserText>
        </LeftHeader>
        <RightHeader>
          <NotificationIcon name="bell-badge-outline" size={40}></NotificationIcon>
          <UserPhoto source={avatar} />
        </RightHeader>
      </Header>
      <ScrollView></ScrollView>
    </>
  );
}