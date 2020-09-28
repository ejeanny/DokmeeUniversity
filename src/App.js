import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hook/auth-hook";

import Auth from "./Users/pages/Auth";
import Signup from "./Users/pages/Signup";
import NavBar from "./shared/components/Navigation/MainNav";
import Dashboard from "./Users/pages/Dashboard";
import DokmeeCapture from "./Software/pages/DokmeeCapture/DokmeeCapture";
import DokmeeCaptureCourse from "./Software/pages/DokmeeCapture/DokmeeCaptureCourse";
import DokmeeCaptureVideo from "./Software/pages/DokmeeCapture/DokmeeCaptureSingleVideo";
import DokmeeEcm from "./Software/pages/DokmeeECM/DokmeeEcm";
import DokmeeECMCourse from "./Software/pages/DokmeeECM/DokmeeECMCourse";
import DokmeeECMSingleVideo from "./Software/pages/DokmeeECM/DokmeeECMSingleVideo";
import DokmeeCourse from "./Admin/pages/Courses/Course.jsx";
import DokmeeAddCourse from "./Admin/pages/Courses/AddCourse.jsx";
import Companies from "./Admin/pages/Companies.js";
import Users from "./Admin/pages/Users.js";
import DokmeeUniversityTest from "./Software/pages/Test/DokmeeUniversityTest";
import SoftNews from "./News/pages/SoftNews";
import logo from "./images/logo.png";

import logoLogin from "./images/logo-login.png";
import "./App.css";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    mainNav: {
        display: "flex",
    },
    logo: {
        position: "absolute",
        bottom: "15px",
        right: "15px",
        width: "15%",
    },
    login: {
        position: "fixed",
        padding: "0",
        margin: "0",

        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        backgroundColor: "#00172C",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "#00172C",
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        backgroundColor: "#CF3339",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: "#CF3339",
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
        backgroundColor: "#CF3339",
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        paddingBottom: "0px",
    },
    offWhite: {
        color: "#f7f7f7",
        fontSize: "2rem", // textDecoration: none,
    },
    sideIcon: {
        // textDecoration: none,
    },
    dividerOffWhite: {
        backgroundColor: "#f7f7f7",
    },
}));

const App = () => {
    const {
        token,
        login,
        logout,
        userId,
        firstName,
        lastName,
        isAdmin,
        captureAccess,
        ecmAccess,
        formAccess,
    } = useAuth();

    const [open, setOpen] = useState(false);
    const handleDrawerOpen = event => {
        setOpen(true);
    };
    const handleDrawerClose = event => {
        setOpen(false);
    };

    const classes = useStyles();
    let routes;
    if (token) {
        routes = (
            <>
                <Route path='/' exact>
                    <Dashboard />
                </Route>
                {captureAccess && (
                    <>
                        <Route path='/dokmee-univeristy/dokmee-capture' exact>
                            <DokmeeCaptureCourse />
                        </Route>
                        <Route path='/dokmee-univeristy/dokmee-capture/:videoId'>
                            <DokmeeCaptureVideo />
                        </Route>
                        <Route path='/dokmee-university/test/:testId'>
                            <DokmeeUniversityTest />
                        </Route>
                    </>
                )}
                {ecmAccess && (
                    <>
                        <Route path='/dokmee-univeristy/dokmee-ecm' exact>
                            <DokmeeECMCourse />
                        </Route>
                        <Route path='/dokmee-univeristy/dokmee-ecm/:courseSlug/:videoId'>
                            <DokmeeECMSingleVideo />
                        </Route>
                        <Route path='/dokmee-univeristy/dokmee-ecm/:courseSlug'>
                            <DokmeeECMCourse />
                        </Route>
                    </>
                )}
                {isAdmin && (
                    <>
                        <Route path='/admin/courses' exact>
                            <DokmeeCourse />
                        </Route>
                        <Route path='/admin/companies' exact>
                            <Companies />
                        </Route>
                        <Route path='/admin/users' exact>
                            <Users />
                        </Route>
                        <Route path='/admin/courses/edit/:cid'>
                            <DokmeeAddCourse />
                        </Route>
                        <Route path='/features' exact>
                            <SoftNews />
                        </Route>
                    </>
                )}

                {/* <Route path='/dokmee-univeristy/courses' exact>
                    <DokmeeCourse />
                </Route>
                <Route path='/dokmee-univeristy/courses/add' exact>
                    <DokmeeAddCourse />
                </Route>
                <Route path='/dokmee-univeristy/courses/edit/:cid'>
                    <DokmeeAddCourse />
                </Route> */}

                <Redirect to='/'></Redirect>
            </>
        );
    } else {
        routes = (
            <>
                <Route path='/auth' exact>
                    <Auth />
                </Route>
                <Route path='/signup' exact>
                    <Signup />
                </Route>
                <Redirect to='/auth'></Redirect>
            </>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                userId: userId,
                firstName: firstName,
                lastName: lastName,
                isAdmin: isAdmin,
                captureAccess: captureAccess,
                ecmAccess: ecmAccess,
                formAccess: formAccess,
                login: login,
                logout: logout,
            }}>
            <div className={token ? `${classes.mainNav}` : `${classes.login}`}>
                <Router>
                    {token && (
                        <NavBar
                            classes={classes}
                            handleDrawerOpen={handleDrawerOpen}
                            handleDrawerClose={handleDrawerClose}
                            isAdmin={isAdmin}
                            open={open}></NavBar>
                    )}

                    <main className={token ? `${classes.content}` : "login"}>
                        {token && <div className={classes.toolbar} />}
                        <Switch>{routes}</Switch>
                    </main>
                </Router>
                {!token && (
                    <img
                        src={logoLogin}
                        alt='Dokmee'
                        className={classes.logo}></img>
                )}
            </div>
        </AuthContext.Provider>
    );
};

export default App;
