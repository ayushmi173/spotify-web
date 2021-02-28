export const convertSecondsIntoHMS = (seconds) => {
  seconds = Number(seconds);
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor((seconds % 3600) % 60);

  let isHour = h > 0 && h < 10 ? `0${h}` : h === 0 ? "00" : h;
  let isMinute = m > 0 && m < 10 ? `0${m}` : m === 0 ? "00" : m;
  let isSecond = s > 0 && s < 10 ? `0${s}` : s === 0 ? "00" : s;

  if (isHour === "00" && isMinute === "00" && isSecond === "00") {
    return `${isMinute}:${isSecond}`;
  } else if (isHour !== "00") {
    return `${isHour}:${isMinute}:${isSecond}`;
  } else if (isHour === "00") {
    return `${isMinute}:${isSecond}`;
  }
};

export const getProcessedRange = (processedTime, trackDuration) => {
  return (
    (Math.floor(processedTime) / Math.floor(trackDuration)) *
    100
  ).toFixed(2);
};

export const windowPopUp = (url) => {
  let top = window.screen.height - 550;
  top = top > 0 ? top / 2 : 0;
  let left = window.screen.width - 450;
  left = left > 0 ? left / 2 : 0;
  window.open(
    url,
    "Spotify Web App",
    "width=450,height=550" + ",top=" + top + ",left=" + left
  );
};
