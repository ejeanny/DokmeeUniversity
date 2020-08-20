import React from "react";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import NewReleasesOutlinedIcon from "@material-ui/icons/NewReleasesOutlined";
import AnnouncementOutlinedIcon from "@material-ui/icons/AnnouncementOutlined";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";

export default function SideDrawer(props) {
    return (
        <Drawer
            anchor='left'
            open={props.open}
            onClose={props.handleDrawerClose}
            className={clsx(props.classes.drawer, {
                [props.classes.drawerOpen]: props.open,
                [props.classes.drawerClose]: !props.open,
            })}
            classes={{
                paper: clsx({
                    [props.classes.drawerOpen]: props.open,
                    [props.classes.drawerClose]: !props.open,
                }),
            }}>
            <div className={props.classes.toolbar}>
                <IconButton
                    onClick={props.handleDrawerClose}
                    className={props.classes.offWhite}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider className={props.classes.dividerOffWhite} />
            <Link to='/'>
                <List className={`${props.classes.offWhite} nav-button`}>
                    <ListItem button onClick={props.handleDrawerClose}>
                        <ListItemIcon>
                            <DashboardOutlinedIcon
                                className={
                                    props.classes.offWhite
                                }></DashboardOutlinedIcon>
                        </ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItem>
                </List>
            </Link>
            <Divider className={props.classes.dividerOffWhite} />
            <List className={`${props.classes.offWhite} nav-button`}>
                <Link to='/news'>
                    <ListItem button onClick={props.handleDrawerClose}>
                        <ListItemIcon>
                            <AnnouncementOutlinedIcon
                                className={props.classes.offWhite}
                            />
                        </ListItemIcon>
                        <ListItemText primary='Team news' />
                    </ListItem>
                </Link>
                <Link to='/features'>
                    <ListItem button onClick={props.handleDrawerClose}>
                        <ListItemIcon>
                            <NewReleasesOutlinedIcon
                                className={props.classes.offWhite}
                            />
                        </ListItemIcon>
                        <ListItemText primary='New Features' />
                    </ListItem>
                </Link>
            </List>
            {/* !//TODO Add right control  */}
            <Divider className={props.classes.dividerOffWhite} />
            <List className={`${props.classes.offWhite} nav-button`}>
                <Link to='/dokmee-univeristy/dokmee-capture'>
                    <ListItem button onClick={props.handleDrawerClose}>
                        <ListItemIcon>
                            <InboxIcon className={props.classes.offWhite} />
                        </ListItemIcon>
                        <ListItemText primary='Dokmee Capture' />
                    </ListItem>
                </Link>
                <Link to='/dokmee-univeristy/dokmee-ecm'>
                    <ListItem button onClick={props.handleDrawerClose}>
                        <ListItemIcon>
                            <MailIcon className={props.classes.offWhite} />
                        </ListItemIcon>
                        <ListItemText primary='Dokmee ECM' />
                    </ListItem>
                </Link>
                {/*<Link to='/dokmee-univeristy/course'>
                                        <ListItem button onClick={props.handleDrawerClose}>
                                            <ListItemIcon>
                                                <MailIcon className={props.classes.offWhite} />
                                            </ListItemIcon>
                                            <ListItemText primary='Dokmee ECM' />
                                        </ListItem>
                                    </Link> */}
                {/* <Link to='/dokmee-univeristy/dokmee-form'>
                                        <ListItem button onClick={props.handleDrawerClose}>
                                            <ListItemIcon>
                                                <InboxIcon className={props.classes.offWhite} />
                                            </ListItemIcon>
                                            <ListItemText primary='Dokmee Form' />
                                        </ListItem>
                                    </Link> */}
            </List>
        </Drawer>
    );
}
