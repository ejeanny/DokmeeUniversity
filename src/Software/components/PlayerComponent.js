import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../../node_modules/video-react/dist/video-react.css";
import {
    Player,
    ControlBar,
    PlayToggle,
    ReplayControl,
    ForwardControl,
    PlaybackRateMenuButton,
    BigPlayButton,
    LoadingSpinner,
} from "video-react";
export default function PlayerComponent(props) {
    return (
        // <ReactPlayer
        //     url={`https://www.etiennejeanny.ovh//video/${props.soft}/${props.videoId}.mp4`}
        //     width={props.matches ? "80%" : "100%"}
        //     height={props.matches ? "80%" : "100%"}
        //     top='0'
        //     controls={true}
        //     onReady={handlePlayer}
        // />
        <Player
            src={`https://www.etiennejeanny.ovh//video/${props.soft}/${props.videoId}.mp4`}
            playsInline
            poster='/assets/poster.png'>
            <LoadingSpinner />
            <BigPlayButton position='center' />
            <ControlBar autoHide={false}>
                <ReplayControl seconds={10} order={2.1} />
                <ForwardControl seconds={10} order={3.1} />
                <PlaybackRateMenuButton
                    rates={[2, 1.5, 1.4, 1.3, 1.2, 1.1, 1, 0.75, 0.5]}
                />
                <PlayToggle />
            </ControlBar>
        </Player>
    );
}
