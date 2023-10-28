import React from "react";

export const Song = ({ currentSong }) => {
  return (
    <div className="songContainer">
      <img src={currentSong.cover} alt={currentSong.name} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};
export default Song;
