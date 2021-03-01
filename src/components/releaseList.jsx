import React, { useEffect } from "react";
import styled from "styled-components";
import SongSquare from "./songSquare";
import { newReleaseTrack } from "../store/action";
import Header from './header';
import { useDispatch, useSelector } from 'react-redux';
import GlobalStyle from '../globalCss';
import Audio from './audio';
import Cookies from "js-cookie";
import { v1 as uuidv1 } from 'uuid';

const SongWrapper = styled.div`
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;
`;

const ReleaseList = () => {
    const dispatch = useDispatch();
    const trackReleases = useSelector(state => state.entities.releases);
    const isLogin = useSelector(state => state.isLogin);
    const user = Cookies.get("user");

    useEffect(() => {
        if (isLogin || user) {
            dispatch(newReleaseTrack())
        }
    }, [])

    return <>
        <GlobalStyle />
        <Header />
        <Audio />
        <SongWrapper>
            {Object.values(trackReleases).map((item) => {
                if (item.images[1]) {
                    return (
                        <SongSquare key={uuidv1()} title={item.name}
                            artistName={item.artists[0].name} imageUrl={item.images[1].url}
                            releaseDate={item.release_date} />
                    )
                }
            })}
        </SongWrapper>

    </>;
};
export default ReleaseList;
