import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const ExpansionPanel = withStyles({
    root: {
        border: "1px solid rgba(0, 0, 0, .125)",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
        "&$expanded": {
            margin: "auto",
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: "rgba(0, 0, 0, .03)",
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        minHeight: 56,
        "&$expanded": {
            minHeight: 56,
        },
    },
    content: {
        "&$expanded": {
            margin: "12px 0",
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        display: "block",
    },
}))(MuiExpansionPanelDetails);
const useStyles = makeStyles(theme => ({
    drawerRoot: {
        display: "flex",
    },
    margin: {
        display: "flex",
        margin: "2rem auto",
    },
    drawer: {
        width: "18%",
        flexShrink: 0,
    },
    drawerPaper: {
        width: "18%",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function PermanentDrawerRight(props) {
    const classes = useStyles();

    return (
        <div className={classes.drawerRoot}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant='permanent'
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor='right'>
                <div className={classes.toolbar} />
                <Divider />
                <List className='no-padding-top'>
                    {props.videoName.map((v, index) => (
                        <Link
                            key={v.id}
                            className='duLink'
                            to={`/dokmee-univeristy/${props.soft}/${v.id}`}>
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
                    {!props.watched ? (
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
                        <Link to={`/dokmee-university/test/${props.testId}`}>
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
            </Drawer>
        </div>
    );
}
