import React, { useState } from "react";
import ReactPlayer from "react-player";
export default function PlayerComponent(props) {
    const [playing, setPlaying] = useState(false);
    const handlePlayer = async () => {
        return true;
    };

    return (
        <ReactPlayer
            url={`https://www.etiennejeanny.ovh//video/${props.soft}/${props.videoId}.mp4`}
            width={props.matches ? "75%" : "100%"}
            height={props.matches ? "75%" : "100%"}
            top='0'
            controls={true}
            onReady={handlePlayer}
        />
    );
}
