import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ExpensionpanelComponent from "./ExpensionPanelComponents";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}>
            {value === index && <Box p={3}>{children}</Box>}
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
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation='vertical'
                variant='scrollable'
                value={value}
                onChange={handleChange}
                aria-label='Vertical tabs example'
                className={classes.tabs}>
                <Tab label='Video One' {...a11yProps(0)} />
                <Tab label='Video Two' {...a11yProps(1)} />
                <Tab label='Video Three' {...a11yProps(2)} />
                <Tab label='Video Four' {...a11yProps(3)} />
                <Tab label='Video Five' {...a11yProps(4)} />
                <Tab label='Video Six' {...a11yProps(5)} />
                <Tab label='Video Seven' {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                {props.children}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {props.children}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {props.children}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {props.children}
            </TabPanel>
            <TabPanel value={value} index={4}>
                {props.children}
            </TabPanel>
            <TabPanel value={value} index={5}>
                {props.children}
            </TabPanel>
            <TabPanel value={value} index={6}>
                {props.children}
            </TabPanel>
        </div>
    );
}
