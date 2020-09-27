import React, { useState, useEffect } from "react";
import PlayerComponents from "./PlayerComponent";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// import HorizontalTabsComponent from "../../shared/components/UiElements/HorizontalTabsComponent";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import DrawerComponent from "../../shared/components/UiElements/VideoDrawerComponents";
import { Paper } from "@material-ui/core";
import "github-markdown-css";
import ReactMarkdown from "react-markdown";
import Stackedit from "stackedit-js";
import AppMarkdown from "../../Markdown File.md";
import { Divider } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: "80%",
    },
    rootMobile: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: "100%",
    },
    bar: {
        backgroundColor: "#323436",
        color: "#fff",
        boxShadow: "none",
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    divider: {
        marginBottom: "1rem",
        marginTop: "1rem",
    },
    tabsContent: {
        marginTop: "1rem",
    },
    badgeLine: {
        paddingTop: "0.5rem",
    },
}));

export default function CourseVideoComponent(props) {
    let markdownValue;
    const classes = useStyles();
    const [markdown, setMarkdown] = useState();
    const [descriptionExpanded, setDescriptionExpanded] = React.useState(false);
    const stackedit = new Stackedit();

    const handleDescriptionExpandClick = () => {
        setDescriptionExpanded(!descriptionExpanded);
    };
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
            <div className='player'>
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
                                    width: "100%",
                                    height: props.matches ? "700px" : "400px",
                                    overflow: "scroll",
                                    padding: props.matches
                                        ? "24px 200px"
                                        : "24px 50px",
                                }}>
                                <ReactMarkdown
                                    source={markdownValue[0]}
                                    className='markdown-body lecture'
                                />
                            </Element>
                        )
                    )}
                </div>
                {props.matches ? (
                    <>
                        <DrawerComponent
                            videoName={props.content}
                            soft={props.soft}
                            slug={props.slug}
                            watched={props.courseOver}
                            testId={props.testId}
                        />
                        <Paper className='video-description' elevation={2}>
                            <Typography variant='h5'>
                                <b>{props.videoInfo.slug}</b>
                            </Typography>

                            <Typography className={classes.tabsContent}>
                                {props.videoInfo.overview}
                            </Typography>

                            <Divider className={classes.divider} />
                            <Typography variant='h6'>
                                <b>Instructor</b>
                            </Typography>
                            <div className={classes.tabsContent}>
                                <Grid container spacing={3}>
                                    <Grid item lg={1} md={1} sm={1} xs={1}>
                                        <Avatar>EJ</Avatar>
                                    </Grid>
                                    <Grid item lg={8} md={8} sm={8} xs={8}>
                                        <Typography
                                            paragraph
                                            className={classes.badgeLine}>
                                            {props.instructor ||
                                                props.Instructor}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Paper>
                    </>
                ) : (
                    <Paper className='video-description' elevation={2}>
                        <List>
                            {props.content.map((v, index) => (
                                <Link
                                    key={v.id}
                                    className='duLink'
                                    to={`/dokmee-univeristy/${props.soft}/${props.slug}/${v.id}`}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            {v.type === "video" ? (
                                                <PlayCircleFilledWhiteOutlinedIcon />
                                            ) : (
                                                <FileCopyOutlinedIcon />
                                            )}
                                        </ListItemIcon>
                                        <ListItemText primary={v.slug} />
                                    </ListItem>
                                </Link>
                            ))}
                            {!props.courseOver ? (
                                <Tooltip
                                    title='You should watched the course before taking the test'
                                    placement='top'>
                                    <span>
                                        <Button
                                            variant='outlined'
                                            size='medium'
                                            color='primary'
                                            className={classes.margin}
                                            disabled>
                                            Take the test
                                        </Button>
                                    </span>
                                </Tooltip>
                            ) : (
                                <Link
                                    to={`/dokmee-university/test/${props.testId}`}>
                                    <Button
                                        variant='outlined'
                                        size='medium'
                                        color='primary'
                                        className={classes.margin}>
                                        Take the test
                                    </Button>
                                </Link>
                            )}
                        </List>
                    </Paper>
                )}
            </div>
        </>
    );
}
