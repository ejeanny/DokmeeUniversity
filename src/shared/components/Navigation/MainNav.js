import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ToolBarContent from "./ToolBarContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import SideDrawer from "./SideDrawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function MiniDrawer(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <>
            <CssBaseline />
            <AppBar
                position='fixed'
                className={clsx(props.classes.appBar, {
                    [props.classes.appBarShift]: props.open,
                })}>
                <Toolbar>
                    <ToolBarContent
                        classes={props.classes}
                        handleDrawerOpen={props.handleDrawerOpen}
                        isAdmin={props.isAdmin}
                        isLoggedIn={props.isLoggedIn}
                        matches={matches}
                        handleAdminMode={props.handleAdminMode}
                    />
                </Toolbar>
            </AppBar>
            {!matches && (
                <SideDrawer
                    open={props.open}
                    handleDrawerClose={props.handleDrawerClose}
                    classes={props.classes}
                    isAdmin={props.isAdmin}
                />
            )}
        </>
    );
}
