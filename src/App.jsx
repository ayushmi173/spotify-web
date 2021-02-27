import React from "react";
import { api } from "./client/api";
import Audioo from "./components/audio";
import Button from "./components/button";
import ProgressBar from "./components/progressbar";
import SongSquare from "./components/songSquare";
import { healthCheckup, newReleaseTrack } from "./store/action";
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie';


const App = () => {

  const dispatch = useDispatch();
  const health = useSelector((state) => state.healthStatus);
  const trackReleases = useSelector(state => state.entities.releases);

  const handleNewRelease = () => {
    dispatch(newReleaseTrack())
  }

  const handleHealth = () => {
    dispatch(healthCheckup());
  }

  async function handleLogin() {
    const loginUrl = await api("/login");
    if (loginUrl.data) {
      let top = window.screen.height - 550;
      top = top > 0 ? top / 2 : 0;
      let left = window.screen.width - 450;
      left = left > 0 ? left / 2 : 0;
      window.open(loginUrl.data, "Spotify Web App", "width=450,height=550" + ",top=" + top + ",left=" + left);
    }
    const user = Cookies.get("user");
    if (user) {
      dispatch({ type: "LOGIN_SUCCESS" })
    }
  }

  return (
    <>
      <Audioo />

      <h1>Spotify OAuth Login</h1>
      <Button text="Login" onClick={handleLogin} />
      <Button text="Get New Release" onClick={handleNewRelease} />
      <Button text="get Health" onClick={handleHealth} />

      {trackReleases.map((item, index) => {
        return (<SongSquare key={index} title={item.name}
          artistName={item.artists[0].name} imageUrl={item.images[1].url}
          releaseDate={item.release_date} />)
      })}

      {/* <ProgressBar /> */}
    </>
  );
};
export default App;