import React, { useReducer, useEffect } from "react";

import { validate } from "../../util/validators";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import "./Input.css";

const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators),
            };
        case "TOUCH": {
            return {
                ...state,
                isTouched: true,
            };
        }
        default:
            return state;
    }
};

const InputComponent = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || "",
        isTouched: false,
        isValid: props.initialValid || false,
    });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({
            type: "CHANGE",
            val: event.target.value,
            validators: props.validators,
        });
    };
    const [values, setValues] = React.useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const touchHandler = () => {
        dispatch({
            type: "TOUCH",
        });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    let element;
    switch (props.element) {
        case "login":
            element = (
                <div className={props.mainClasses}>
                    <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
                    <Input
                        id={props.id}
                        type={props.type}
                        placeholder={props.placeholder}
                        onChange={changeHandler}
                        onBlur={touchHandler}
                        value={inputState.value}
                        className={`${props.subMainClasses}`}
                        startAdornment={
                            <InputAdornment position='start'>
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                    {!inputState.isValid && inputState.isTouched && (
                        <FormHelperText id={props.id} className='input-error'>
                            {props.errorText}
                        </FormHelperText>
                    )}
                </div>
            );
            break;
        case "password":
            element = (
                <div className={props.mainClasses}>
                    <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
                    <Input
                        id={props.id}
                        type={values.showPassword ? "text" : "password"}
                        label={props.label}
                        placeholder={props.placeholder}
                        onChange={handleChange("password")}
                        onChange={changeHandler}
                        onBlur={touchHandler}
                        value={inputState.value}
                        className={`${props.subMainClasses}`}
                        startAdornment={
                            <InputAdornment position='start'>
                                <LockIcon />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}>
                                    {values.showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {!inputState.isValid && inputState.isTouched && (
                        <FormHelperText id={props.id} className='input-error'>
                            {props.errorText}
                        </FormHelperText>
                    )}
                </div>
            );
            break;
        case "multiple":
            element = (
                <TextField
                    id={props.id}
                    rows={props.rows || 3}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}
                />
            );
            break;
        default:
            {
                props.variant
                    ? (element = (
                          <TextField
                              id={props.id}
                              type={props.type}
                              label={props.label}
                              variant={props.variant}
                              placeholder={props.placeholder}
                              onChange={changeHandler}
                              onBlur={touchHandler}
                              value={inputState.value}
                          />
                      ))
                    : (element = (
                          <TextField
                              id={props.id}
                              type={props.type}
                              label={props.label}
                              placeholder={props.placeholder}
                              onChange={changeHandler}
                              onBlur={touchHandler}
                              value={inputState.value}
                          />
                      ));
            }
            break;
    }

    if (!inputState.isValid && inputState.isTouched) {
        return (
            <FormControl error className='form-control-input'>
                {element}
            </FormControl>
        );
    } else {
        return (
            <FormControl className='form-control-input'>{element}</FormControl>
        );
    }
};

export default InputComponent;
