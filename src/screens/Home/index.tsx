import React from 'react';
import { Header, LeftHeader, RightHeader, ScrollView, UserText, NotificationIcon, UserPhoto } from './styles';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';

export function Home() {
  const { user } = useSelector(selectUser)

  return (
    <>
      <Header>
        <LeftHeader>
          <UserText>Olá, {user.name}</UserText>
        </LeftHeader>
        <RightHeader>
          <NotificationIcon name="bell-badge-outline" size={40}></NotificationIcon>
          <UserPhoto source={{ uri: user.avatar }} />
        </RightHeader>
      </Header>
      <ScrollView></ScrollView>
    </>
  );
}
