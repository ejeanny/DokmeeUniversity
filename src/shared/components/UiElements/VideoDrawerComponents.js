import React, { useContext } from "react";
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
        margin: theme.spacing(10),
    },
    drawer: {
        width: "20%",
        flexShrink: 0,
    },
    drawerPaper: {
        width: "20%",
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

    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    console.log(props);

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
                <List>
                    {props.videoName.map((v, index) => (
                        <ExpansionPanel
                            square
                            expanded={
                                expanded === `panel${parseInt(index) + 1}`
                            }
                            onChange={handleChange(
                                `panel${parseInt(index) + 1}`
                            )}>
                            <ExpansionPanelSummary
                                aria-controls={` panel${
                                    parseInt(index) + 1
                                }d-content`}
                                id={`panel${parseInt(index) + 1}d-header`}>
                                <Typography>{v.sectionName}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                {v.sectionVideo.map(v => (
                                    <Link
                                        key={v.id}
                                        className='duLink'
                                        to={`/dokmee-univeristy/${props.soft}/${props.slug}/${v.id}`}>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <PlayCircleFilledWhiteOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={v.slug} />
                                        </ListItem>
                                    </Link>
                                ))}
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
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
