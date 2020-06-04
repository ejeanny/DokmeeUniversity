import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import { AuthContext } from "./shared/context/auth-context";
import Auth from "./Users/pages/Auth";
import NavBar from "./shared/components/Navigation/MainNav";
import Dashboard from "./Users/pages/Dashboard";
import DokmeeCapture from "./Software/pages/DokmeeCapture/DokmeeCapture";
import DokmeeCaptureCourse from "./Software/pages/DokmeeCapture/DokmeeCaptureCourse";
import DokmeeCaptureVideo from "./Software/pages/DokmeeCapture/DokmeeCaptureSingleVideo";
import DokmeeEcm from "./Software/pages/DokmeeECM/DokmeeEcm";
import DokmeeCourse from "./Software/pages/Courses/Course";
import DokmeeAddCourse from "./Software/pages/Courses/AddCourse";
import DokmeeUniversityTest from "./Software/pages/Test/DokmeeUniversityTest";
import SoftNews from "./News/pages/SoftNews";
import logo from "./images/logo.png";
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
        backgroundColor: "#3C3F41",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "#323436",
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
        backgroundColor: "#323436",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: "#323436",
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
        backgroundColor: "#323436",
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
    },
    offWhite: {
        color: "#f7f7f7",
        // textDecoration: none,
    },
    dividerOffWhite: {
        backgroundColor: "#f7f7f7",
    },
}));

function App() {
    const [open, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [userId, setUserId] = useState(false);
    const login = useCallback(uid => {
        setIsLoggedIn(true);
        // setUserId(uid);
    }, []);
    const logout = useCallback(() => {
        setIsLoggedIn(false);
        // setUserId(null);
    }, []);
    const handleDrawerOpen = event => {
        setOpen(true);
    };
    const handleDrawerClose = event => {
        setOpen(false);
    };
    const classes = useStyles();
    let routes;
    if (isLoggedIn) {
        routes = (
            <Switch>
                <Route path='/' exact>
                    <Dashboard />
                </Route>
                <Route path='/features' exact>
                    <SoftNews />
                </Route>

                <Route path='/dokmee-univeristy/dokmee-capture' exact>
                    <DokmeeCapture />
                </Route>
                <Route path='/dokmee-university/test/:testId'>
                    <DokmeeUniversityTest />
                </Route>
                <Route path='/dokmee-univeristy/dokmee-capture/:courseSlug/:videoId'>
                    <DokmeeCaptureVideo />
                </Route>
                <Route path='/dokmee-univeristy/dokmee-capture/:courseSlug'>
                    <DokmeeCaptureCourse />
                </Route>
                <Route path='/dokmee-univeristy/dokmee-ecm' exact>
                    <DokmeeEcm />
                </Route>
                <Route path='/dokmee-univeristy/courses' exact>
                    <DokmeeCourse />
                </Route>
                <Route path='/dokmee-univeristy/courses/add' exact>
                    <DokmeeAddCourse />
                </Route>
                <Route path='/dokmee-univeristy/courses/edit/:cid'>
                    <DokmeeAddCourse />
                </Route>

                <Route path='/dokmee-univeristy/dokmee-ecm/:courseSlug/:videoId'>
                    <DokmeeEcm />
                </Route>
                <Route path='/dokmee-univeristy/dokmee-ecm/:courseSlug'>
                    <DokmeeEcm />
                </Route>
                <Redirect to='/'></Redirect>
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route path='/auth' exact>
                    <Auth />
                </Route>
                <Redirect to='/auth'></Redirect>
            </Switch>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                // userId: userId,
                login: login,
                logout: logout,
            }}>
            <div
                className={
                    isLoggedIn ? `${classes.mainNav}` : `${classes.login}`
                }>
                <Router>
                    {isLoggedIn && (
                        <NavBar
                            classes={classes}
                            handleDrawerOpen={handleDrawerOpen}
                            handleDrawerClose={handleDrawerClose}
                            open={open}></NavBar>
                    )}

                    <main
                        className={isLoggedIn ? `${classes.content}` : "login"}>
                        {isLoggedIn && <div className={classes.toolbar} />}
                        <Switch>{routes}</Switch>
                    </main>
                </Router>
                {!isLoggedIn && (
                    <img src={logo} alt='Dokmee' className={classes.logo}></img>
                )}
            </div>
        </AuthContext.Provider>
    );
}

export default App;
