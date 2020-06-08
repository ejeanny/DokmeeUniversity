import React, { useState, useEffect } from "react";
import PlayerComponents from "./PlayerComponent";
import { Element, animateScroll as scroll } from "react-scroll";
import HorizontalTabsComponent from "../../shared/components/UiElements/HorizontalTabsComponent";
import DrawerComponent from "../../shared/components/UiElements/VideoDrawerComponents";
import { Paper } from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import AppMarkdown from "../../Markdown File.md";

export default function CourseVideoComponent(props) {
    let markdownValue;
    const [markdown, setMarkdown] = useState();
    const getText = async () => {
        try {
            fetch(AppMarkdown)
                .then(res => res.text())
                .then(text => setMarkdown({ text }));
        } catch (err) {}
    };
    useEffect(() => {
        getText();
    }, []);
    if (markdown) {
        markdownValue = Object.values(markdown);
    }

    return (
        <>
            <div className='react-player'>
                {props.types === "video" ? (
                    <PlayerComponents
                        soft={props.soft}
                        videoId={props.videoId}
                        matches={props.matches}
                    />
                ) : (
                    markdown && (
                        <Element
                            className='element'
                            id='containerElement'
                            style={{
                                position: "relative",
                                height: "700px",
                                width: "80%",
                                overflow: "scroll",
                                padding: "24px",
                            }}>
                            <ReactMarkdown
                                source={markdownValue[0]}
                                escapeHtml={false}
                                width='80%'
                            />
                        </Element>
                    )
                )}
            </div>
            {props.matches && (
                <DrawerComponent
                    videoName={props.course.content}
                    soft={props.soft}
                    slug={props.slug}
                    watched={props.course.courseOver}
                    testId={props.course.testId}
                />
            )}
            <Paper className='video-description'>
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
