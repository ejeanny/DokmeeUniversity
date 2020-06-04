import React from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        float: "right",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SelectComponents(props) {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={props.data}
                onChange={props.handleProgressionChange}>
                {props.menuItem.map(element => {
                    return (
                        <MenuItem key={element} value={element}>
                            {element}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
}
