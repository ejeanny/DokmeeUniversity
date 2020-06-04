import React from "react";
import PlayerComponents from "./PlayerComponent";
import HorizontalTabsComponent from "../../shared/components/UiElements/HorizontalTabsComponent";
import DrawerComponent from "../../shared/components/UiElements/VideoDrawerComponents";
import { Paper } from "@material-ui/core";
export default function CourseVideoComponent(props) {
    return (
        <>
            <div className='react-player'>
                <PlayerComponents
                    soft={props.soft}
                    videoId={props.videoId}
                    matches={props.matches}
                />
            </div>
            {props.matches && (
                <DrawerComponent
                    videoName={props.course.video}
                    soft={props.soft}
                    slug={props.slug}
                    watched={props.course.courseOver}
                    testId={props.course.testId}
                />
            )}
            <Paper
                className='video-description'
                elevation={props.elevation || 3}>
                <HorizontalTabsComponent
                    matches={props.matches}
                    information={props.course}
                    videoId={props.videoId}
                    tabs={props.tabs}
                    soft={props.soft}
                    watched={props.course.courseOver}
                    testId={props.course.testId}
                />
            </Paper>
        </>
    );
}
