import React, { useContext, useState } from "react";
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
import { AuthContext } from "../../context/auth-context";

/* ------------------------------------ Modal import ----------------------------------- */
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import Input from "../FormElements/Input";
import LoadingSpinner from "../UiElements/LoadingSpinner";
import { useHttpClient } from "../../hook/http-hooks";
import { useForm } from "../../hook/form-hooks";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../../util/validators";

import ButtonComponent from "../FormElements/Button";
import InputComponent from "../FormElements/Input";

/* ------------------------- Custom javascript style ------------------------ */
const useStyles = makeStyles(theme => ({
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

/* ----------------------------- Component start ---------------------------- */
export default function ToolBarContent(props) {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const classes = useStyles();
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const [formState, inputHandler, setFormData] = useForm(
        {
            firstName: {
                value: "",
                isValid: false,
            },
            lastName: {
                value: "",
                isValid: false,
            },
            lastName: {
                value: "",
                isValid: false,
            },
        },
        false
    ); // check if the input are input are Valid

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

    const openProfileModal = () => setShowProfileModal(true);

    const closeProfileHandler = () => setShowProfileModal(false);

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
            <MenuItem onClick={openProfileModal}>My account</MenuItem>
            <MenuItem onClick={auth.logout}>Logout</MenuItem>
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
            <MenuItem onClick={openProfileModal}>My account</MenuItem>
            <MenuItem onClick={auth.logout}>Logout</MenuItem>
        </Menu>
    );
    return (
        <>
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
            <Link to='/'>
                <img src={logo} alt='Dokmee' className='nav-logo'></img>
            </Link>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                {/* <Button onClick={props.handleAdminMode} className='nav-button'>
                    {props.isAdmin ? "Student" : "Admin"}
                </Button> */}
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
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={showProfileModal}
                onClose={closeProfileHandler}>
                <DialogTitle>My Profile</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <Input
                                id='firstName'
                                element='name'
                                type='text'
                                label='First Name'
                                initialValue={auth.firstName}
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                mainClasses='first-input'
                                subMainClasses='auth-input'
                                errorText='Required'></Input>
                            <Input
                                id='lastName'
                                element='name'
                                type='text'
                                label='Last Name'
                                initialValue={auth.lastName}
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                mainClasses='first-input'
                                subMainClasses='auth-input'
                                errorText='Required'></Input>
                            {/* <Button
                                onClick={switchModeHandler}
                                className='auth-forgot'
                                size='small'>
                                Forgot Password
                            </Button> */}
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <ButtonComponent onClick={closeProfileHandler} dark={true}>
                        Cancel
                    </ButtonComponent>
                    <ButtonComponent
                        type='submit'
                        disabled={!formState.isValid}
                        // onClick={profilSubmithandler}
                    >
                        Modify
                    </ButtonComponent>
                </DialogActions>
            </Dialog>
        </>
    );
}
