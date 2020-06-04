import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ToolBarContent from "./ToolBarContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import SideDrawer from "./SideDrawer";

export default function MiniDrawer(props) {
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
                    />
                </Toolbar>
            </AppBar>
            <SideDrawer
                open={props.open}
                handleDrawerClose={props.handleDrawerClose}
                classes={props.classes}
            />
        </>
    );
}
