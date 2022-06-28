import React from 'react';
import { Header, LeftHeader, RightHeader, ScrollView, UserText, NotificationIcon, UserPhoto } from './styles';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';

export function Home() {
  const { userInfo } = useSelector(selectUser)

  return (
    <>
      <Header>
        <LeftHeader>
          <UserText>Olá, {userInfo.name}</UserText>
        </LeftHeader>
        <RightHeader>
          <NotificationIcon name="bell-badge-outline" size={40}></NotificationIcon>
          <UserPhoto source={{ uri: userInfo.avatar }} />
        </RightHeader>
      </Header>
      <ScrollView></ScrollView>
    </>
  );
}
