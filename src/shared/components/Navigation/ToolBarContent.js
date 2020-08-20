import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import logo from "../../../images/logo.png";
import "./Nav.css";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
    navBar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));

export default function ToolBarContent(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}>
            {props.isLoggedIn ? (
                <>
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
                </>
            ) : (
                <>
                    <MenuItem onClick={handleMenuClose}>Log in</MenuItem>
                </>
            )}
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            {/* <MenuItem>
                <Button onClick={props.handleAdminMode}>
                    {props.isAdmin ? "Student" : "Admin"}
                </Button>
            </MenuItem> */}
            <MenuItem>
                <IconButton
                    aria-label='show 11 new notifications'
                    color='inherit'>
                    <Badge badgeContent={11} color='secondary'>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label='account of current user'
                    aria-controls='primary-search-account-menu'
                    aria-haspopup='true'
                    color='inherit'>
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    return (
        <>
            <div className={classes.navBar}>
                {!props.matches && (
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick={props.handleDrawerOpen}
                        edge='start'
                        className={clsx(props.classes.menuButton, {
                            [props.classes.hide]: props.open,
                        })}>
                        <MenuIcon />
                    </IconButton>
                )}
                <Link to='/'>
                    <img src={logo} alt='Dokmee' className='nav-logo'></img>
                    <span>Becomes a Dokmee Expert</span>
                </Link>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <Button
                        onClick={props.handleAdminMode}
                        className='nav-button'>
                        {props.isAdmin ? "Student" : "Admin"}
                    </Button>
                    <IconButton
                        aria-label='show 17 new notifications'
                        color='inherit'
                        className='nav-button'>
                        <Link to='/notification'>
                            <Badge badgeContent={17} color='secondary'>
                                <NotificationsIcon />
                            </Badge>
                        </Link>
                    </IconButton>
                    <IconButton
                        edge='end'
                        aria-label='account of current user'
                        aria-controls={menuId}
                        aria-haspopup='true'
                        onClick={handleProfileMenuOpen}
                        color='inherit'>
                        <AccountCircle />
                    </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton
                        aria-label='show more'
                        aria-controls={mobileMenuId}
                        aria-haspopup='true'
                        onClick={handleMobileMenuOpen}
                        color='inherit'>
                        <MoreIcon />
                    </IconButton>
                </div>
                {renderMobileMenu}
                {renderMenu}
            </div>
        </>
    );
}
