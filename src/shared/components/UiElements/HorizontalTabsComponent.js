import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

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

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        "aria-controls": `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component='a'
            onClick={event => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    bar: {
        backgroundColor: "#323436",
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

export default function NavTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [descriptionExpanded, setDescriptionExpanded] = React.useState(false);
    const [panelExpanded, setPanelExpanded] = React.useState("panel1");

    const handlePanelChange = panel => (event, newExpanded) => {
        setPanelExpanded(newExpanded ? panel : false);
    };

    const handleDescriptionExpandClick = () => {
        setDescriptionExpanded(!descriptionExpanded);
    };
    const handleDescriptionChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.bar}>
                <Tabs
                    variant='fullWidth'
                    value={value}
                    onChange={handleDescriptionChange}
                    aria-label='Course Tab'>
                    {props.tabs.map((text, index) => {
                        return (
                            <LinkTab
                                label={text}
                                key={index}
                                {...a11yProps(index)}
                            />
                        );
                    })}
                    {!props.matches && (
                        <LinkTab
                            label='Course Content'
                            href='/spam'
                            {...a11yProps(3)}
                        />
                    )}
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <Typography variant='h5'>
                    <b>About this course</b>
                </Typography>

                <Typography className={classes.tabsContent}>
                    {props.information.about}
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant='h5'>
                    <b>Description</b>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: descriptionExpanded,
                        })}
                        onClick={handleDescriptionExpandClick}
                        aria-expanded={descriptionExpanded}
                        aria-label='show more'>
                        <ExpandMoreIcon />
                    </IconButton>
                </Typography>

                <Collapse in={descriptionExpanded} collapsedHeight={20}>
                    <Typography paragraph>
                        {props.information.description}
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography variant='h6'>
                        <b>Creator</b>
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
                                    {props.information.instructor ||
                                        props.information.Instructor}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Collapse>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography variant='h5'>
                    <b>Question and Answers</b>
                </Typography>
                <Divider className={classes.divider} />
                <div className={classes.tabsContent}>
                    {props.information.question.map((a, i) => {
                        return (
                            <React.Fragment key={i}>
                                <Grid container spacing={3}>
                                    <Grid item lg={1} md={1} sm={1} xs={1}>
                                        <Avatar>{i === 0 ? "EB" : "BR"}</Avatar>
                                    </Grid>
                                    <Grid item lg={8} md={8} sm={8} xs={8}>
                                        <Typography
                                            paragraph
                                            className={classes.badgeLine}>
                                            {a.creator}
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <Typography
                                            paragraph
                                            className={classes.badgeLine}>
                                            {a.date}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid
                                        item
                                        lg={1}
                                        md={1}
                                        sm={1}
                                        xs={1}></Grid>
                                    <Grid item lg={8} md={8} sm={8} xs={8}>
                                        <Typography paragraph>
                                            {a.content}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {props.information.announcement.length !==
                                    i + 1 && (
                                    <Divider className={classes.divider} />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography variant='h5'>
                    <b>Announcement</b>
                </Typography>
                <div className={classes.tabsContent}>
                    {props.information.announcement.map((a, i) => {
                        return (
                            <React.Fragment key={i}>
                                <Grid container spacing={3}>
                                    <Grid item lg={1} md={1} sm={1} xs={1}>
                                        <Avatar>EJ</Avatar>
                                    </Grid>
                                    <Grid item lg={8} md={8} sm={8} xs={8}>
                                        <Typography
                                            paragraph
                                            className={classes.badgeLine}>
                                            {a.creator}
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <Typography
                                            paragraph
                                            className={classes.badgeLine}>
                                            {a.date}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid
                                        item
                                        lg={1}
                                        md={1}
                                        sm={1}
                                        xs={1}></Grid>
                                    <Grid item lg={8} md={8} sm={8} xs={8}>
                                        <Typography paragraph>
                                            {a.content}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {props.information.announcement.length !==
                                    i + 1 && (
                                    <Divider className={classes.divider} />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </TabPanel>
            {!props.matches && (
                <TabPanel value={value} index={3}>
                    <List>
                        {props.information.content.map((v, index) => (
                            <ExpansionPanel
                                square
                                expanded={
                                    handlePanelChange ===
                                    `panel${parseInt(index) + 1}`
                                }
                                onChange={handlePanelChange(
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
                                                <ListItemText
                                                    primary={v.slug}
                                                />
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
                </TabPanel>
            )}
        </div>
    );
}
