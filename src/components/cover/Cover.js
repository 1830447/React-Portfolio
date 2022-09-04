import React from "react";
import "./Cover.css";
import coverVideo from "../../media/video.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Julio Alberto Zuñiga Gallegos</h1>
      <p>Desarrollador web | Ingeniero en TI </p>
    </div>
  );
};

export default Cover;
