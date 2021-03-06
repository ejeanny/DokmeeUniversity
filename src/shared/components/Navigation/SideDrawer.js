import React, { useContext } from "react";
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
import BusinessIcon from "@material-ui/icons/Business";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExtensionRoundedIcon from "@material-ui/icons/ExtensionRounded";
import KitchenRoundedIcon from "@material-ui/icons/KitchenRounded";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import { AuthContext } from "../../context/auth-context";

export default function SideDrawer(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const auth = useContext(AuthContext);
    if (matches) {
        return (
            <Drawer
                variant='permanent'
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
                        <ListItem button>
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
                {props.isAdmin && (
                    <>
                        <List
                            className={`${props.classes.offWhite} nav-button`}>
                            <Link to='/admin/companies'>
                                <ListItem button>
                                    <ListItemIcon>
                                        <BusinessIcon
                                            className={props.classes.offWhite}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary='Companies' />
                                </ListItem>
                            </Link>
                            <Link to='/admin/users'>
                                <ListItem button>
                                    <ListItemIcon>
                                        <AccountBoxIcon
                                            className={props.classes.offWhite}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary='Users' />
                                </ListItem>
                            </Link>
                            <Link to='/admin/courses'>
                                <ListItem button>
                                    <ListItemIcon>
                                        <LibraryBooksOutlinedIcon
                                            className={props.classes.offWhite}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary='Courses' />
                                </ListItem>
                            </Link>
                        </List>
                    </>
                )}
                <Divider className={props.classes.dividerOffWhite} />
                <>
                    <List className={`${props.classes.offWhite} nav-button`}>
                        {auth.captureAccess && (
                            <Link to='/dokmee-univeristy/dokmee-capture'>
                                <ListItem button>
                                    <ListItemIcon>
                                        <ExtensionRoundedIcon
                                            className={props.classes.offWhite}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary='Dokmee Capture' />
                                </ListItem>
                            </Link>
                        )}
                        {auth.ecmAccess && (
                            <Link to='/dokmee-univeristy/dokmee-ecm'>
                                <ListItem button>
                                    <ListItemIcon>
                                        <KitchenRoundedIcon
                                            className={props.classes.offWhite}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary='Dokmee ECM' />
                                </ListItem>
                            </Link>
                        )}
                    </List>
                </>
            </Drawer>
        );
    } else {
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
                    <Link to='/dokmee-univeristy/dokmee-capture'>
                        <ListItem button onClick={props.handleDrawerClose}>
                            <ListItemIcon>
                                <ExtensionRoundedIcon
                                    className={props.classes.offWhite}
                                />
                            </ListItemIcon>
                            <ListItemText primary='Dokmee Capture' />
                        </ListItem>
                    </Link>
                    <Link to='/dokmee-univeristy/dokmee-ecm'>
                        <ListItem button onClick={props.handleDrawerClose}>
                            <ListItemIcon>
                                <KitchenRoundedIcon
                                    className={props.classes.offWhite}
                                />
                            </ListItemIcon>
                            <ListItemText primary='Dokmee ECM' />
                        </ListItem>
                    </Link>
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
}
