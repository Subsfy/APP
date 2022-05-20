import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = styled.View`
background-color: #3F3F46;
width: 100%;
height: ${RFValue(107)}px;
display: flex;
flex-direction: row;
`
export const LeftHeader = styled.View`
flex: 50%;
padding-top: 70px;
padding-left: 25px;
`
export const UserText = styled.Text`
font-size: 25px;
color: #CF09AF;
font-weight: bold;
`

export const RightHeader = styled.View`
flex: 50%;
padding-top: 45px;
padding-right: 25px;
flex-direction: row;
justify-content: flex-end;
align-items: center;
`

export const NotificationIcon = styled(Icon)`
margin-right: 15px;
color: #CF09AF;
`

export const UserPhoto = styled.Image`
border-width: 4px;
border-color: #CF09AF;
border-radius: 50px;
width: 55px;
height: 55px;
`

export const ScrollView = styled.ScrollView`
background-color: #09090A;
`