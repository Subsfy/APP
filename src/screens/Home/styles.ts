import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = styled.View`
background-color: #3F3F46;
width: 100%;
height: ${RFValue(107)}px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-top: 30px;
`
export const LeftHeader = styled.View`
justify-content: center;
margin-left: 10px;
`
export const UserText = styled.Text`
font-size: 23px;
color: #CF09AF;
font-weight: bold;
`

export const RightHeader = styled.View`
flex-direction: row;
align-items: center;
margin-right: 10px;
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