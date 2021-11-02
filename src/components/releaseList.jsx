import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import { v1 as uuidv1 } from 'uuid';
import SongSquare from "./songSquare";
import { newReleaseTrack } from "../store/action";
import Header from './header';
import { useDispatch, useSelector } from 'react-redux';
import GlobalStyle from '../globalCss';
import Audio from './audio';
import { SONGS } from '../constant/constant'

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
    const trackUrl = useSelector(state => state.trackUrl);
    const [uuId, setUuid] = useState("");

    useEffect(() => {
        if (isLogin || user) {
            dispatch(newReleaseTrack())
        }
    }, [])

    useEffect(() => {
        if (trackUrl !== "") {
            setUuid(uuidv1());
        }
    }, [trackUrl]);

    function urlPath(index) {
        if (index > 40) {
            return SONGS[index - 30]
        }
        return SONGS[index];
    }

    return <>
        <GlobalStyle />
        <Header />
        <Audio trackUrl={trackUrl} />
        <SongWrapper>
            {Object.values(trackReleases).map((item, index) => {
                if (item.images[1]) {
                    return (
                        <SongSquare key={uuidv1()} url={urlPath(index)} title={item.name}
                            artistName={item.artists[0].name} imageUrl={item.images[1].url}
                            generatedMusicId={uuId} />
                    )
                }
            })}
        </SongWrapper>

    </>;
};
export default ReleaseList;
