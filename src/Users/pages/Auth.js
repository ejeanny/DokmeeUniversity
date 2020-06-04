import React, { useState, useContext } from "react";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { AuthContext } from "../../shared/context/auth-context";
import Input from "../../shared/components/FormElements/Input";
import Title from "../../shared/components/UiElements/Title";
import ButtonComponent from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hook/form-hooks";
import { useHttpClient } from "../../shared/hook/http-hooks";
import {
    Paper,
    Box,
    Checkbox,
    FormControlLabel,
    Button,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const CustomCheckbox = withStyles({
    root: {
        color: "#3c3f41",
        "&$checked": {
            color: "#3c3f41",
        },
    },
    checked: {},
})(props => <Checkbox color='default' {...props} />);
export default function Auth() {
    const auth = useContext(AuthContext); //initialize the auth context for this components
    const [isLoginMode, setIsLoginMode] = useState(true);
    const { isLoading, error, sendRequest, clearError } = useHttpClient(); //initialize the http hooks for this components
    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: "",
                isValid: false,
            },
        },
        false
    ); // check if the input are input are Valid
    const switchModeHandler = () => {
        if (isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    password: undefined,
                },
                formState.inputs.email.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                },
                false
            );
        }
        setIsLoginMode(prevMode => !prevMode);
    };
    const authentificationSubmitHandler = event => {
        event.preventDefault();
        auth.login();
    };
    const [checked, setChecked] = useState(false);

    const handleChange = event => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <Paper elevation={3} className='authentication'>
                {isLoginMode ? (
                    <>
                        <Title title='Sign In' />
                        <form onSubmit={authentificationSubmitHandler}>
                            <Input
                                id='email'
                                element='login'
                                type='email'
                                label='Email'
                                validators={[VALIDATOR_EMAIL()]}
                                onInput={inputHandler}
                                mainClasses='first-input'
                                subMainClasses='auth-input'
                                errorText='please enter a valid email'></Input>
                            <Input
                                id='password'
                                element='password'
                                type='password'
                                label='Password'
                                subMainClasses='auth-input'
                                validators={[VALIDATOR_MINLENGTH(6)]}
                                onInput={inputHandler}
                                errorText='At least 6 characters for the password'></Input>
                            <Box display='flex' className='auth-action'>
                                <Box display='flex' flexGrow={1}>
                                    <Button
                                        onClick={switchModeHandler}
                                        className='auth-forgot'
                                        size='small'>
                                        Forgot Password
                                    </Button>
                                </Box>
                                <Box display='flex'>
                                    <FormControlLabel
                                        control={
                                            <CustomCheckbox
                                                checked={checked}
                                                onChange={handleChange}
                                                name='remember'
                                                color='#cf3339'
                                            />
                                        }
                                        label='Remember me'
                                    />
                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='flex-start'>
                                <ButtonComponent
                                    type='submit'
                                    disabled={!formState.isValid}>
                                    Login
                                </ButtonComponent>
                            </Box>
                        </form>
                    </>
                ) : (
                    <>
                        <Title title='Forgot Password' />
                        <form onSubmit={authentificationSubmitHandler}>
                            <Input
                                id='email'
                                element='login'
                                type='email'
                                label='Email'
                                validators={[VALIDATOR_EMAIL()]}
                                onInput={inputHandler}
                                mainClasses='first-input'
                                subMainClasses='auth-input'
                                errorText='please enter a valid email'></Input>
                            <Box display='flex'>
                                <Box display='flex' flexGrow={1}>
                                    <ButtonComponent
                                        type='submit'
                                        className='auth-forgot '
                                        disabled={!formState.isValid}>
                                        Submit
                                    </ButtonComponent>
                                </Box>
                                <Box
                                    display='flex'
                                    className='auth-forgot-back'>
                                    <Button
                                        className='auth-forgot'
                                        onClick={switchModeHandler}
                                        size='small'>
                                        <span>Back to login page</span>
                                    </Button>
                                </Box>
                            </Box>
                        </form>
                    </>
                )}
            </Paper>
        </>
    );
}
