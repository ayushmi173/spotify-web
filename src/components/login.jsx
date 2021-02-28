import React, { useEffect } from 'react';
import styled from 'styled-components';
import { api } from "../client/api";
import { useHistory } from 'react-router-dom';
import GlobalStyle from '../globalCss'
import Header from './header'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie';
import Logo from '../shared/images/Spotify_Icon.png'
import { COLORS } from "../constant/constant";
import { windowPopUp } from '../shared/utils'

const LoginButtonLogo = styled.span`
 display:flex;
 align-self:center;
 height:30px;
 width:40px;
 background-size: contain;
 background-repeat: no-repeat;
 background-image: url('${Logo}');
`

const LoginButtonText = styled.span`
display:flex;
font-size: 16px;
align-items:center;
font-weight:700;
color: ${COLORS.TEXT};
`

const LoginButtonWrapper = styled.div`
display:flex;
flex-direction:row;
background-color: ${COLORS.WHITE};
justify-content:center;
margin:auto;
margin-top:10%;
cursor: pointer;
height:48px;
width:15%; 
min-width:250px;
border-radius:  30px;
-webkit-box-shadow: 0 0 13px ${COLORS.WHITE};
        box-shadow: 0 0 13px ${COLORS.WHITE};
&:hover{
background-color:${COLORS.TEXT};
color:${COLORS.WHITE};
:nth-last-child(){
  color: ${COLORS.WHITE}
  }
}
`
const LaunchWrapper = styled.div`
display:flex;
font-size:16px;
margin-top:100px;
justify-content:center;
padding:0px 20%;
color:${COLORS.WHITE};
text-align:center;
font-weight:600;
`;


const Login = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const user = Cookies.get("user");

    async function handleLogin() {
        const loginLink = await api("/login");
        if (loginLink.data) {
            windowPopUp(loginLink.data);
            dispatch({ type: "POPUP_WINDOW_OPEN" })
        }
    }

    useEffect(() => {
        if (user) {
            dispatch({ type: "LOGIN_SUCCESS" });
        }
    }, [user])

    return <>
        <GlobalStyle />
        <Header />
        <LaunchWrapper>Music for Every Moment And Every Mood. Try Spotify® for Free Today! Top Releases. Listen on Several Devices. Play Music for Free. Discover Great New Music. Types: Bollywood, Indie Pop, Rock, Classical, Pop, Hollywood, Punjabi, Disco, Retro.</LaunchWrapper>
        <LoginButtonWrapper onClick={handleLogin}>
            <LoginButtonLogo></LoginButtonLogo>
            <LoginButtonText>Login with Spotify</LoginButtonText>
        </LoginButtonWrapper>
        {user ? history.push("/releases") : <></>}
    </>
}

export default Login;