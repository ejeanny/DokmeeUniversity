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
import ErrorModal from "../../shared/components/UiElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UiElements/LoadingSpinner";
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

export default function Signup() {
    const { isLoading, error, sendRequest, clearError } = useHttpClient(); //initialize the http hooks for this components
    const auth = useContext(AuthContext);
    const authentificationSubmitHandler = async event => {
        event.preventDefault();
        try {
            const responseData = await sendRequest(
                "http://localhost:5050/api/users/signup",
                "POST",
                JSON.stringify({
                    firstName: formState.inputs.firstName.value,
                    lastName: formState.inputs.lastName.value,
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value,
                    companyName: formState.inputs.companyName.value,
                    companyToken: formState.inputs.companyToken.value,
                }),
                {
                    "Content-Type": "application/json",
                }
            );
            auth.login(responseData.userId, responseData.token);
        } catch (err) {}
    };

    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: "",
                isValid: false,
            },
        },
        false
    ); // check if the input are input are Valid

    return (
        <>
            <ErrorModal error={error} onClear={clearError} />
            <Paper elevation={3} className='authentication'>
                {isLoading && <LoadingSpinner asOverlay />}

                <>
                    <Title title='Sign Up' />

                    <form onSubmit={authentificationSubmitHandler}>
                        <Input
                            id='companyName'
                            element='company'
                            type='text'
                            label='Company Name'
                            validators={[VALIDATOR_REQUIRE()]}
                            onInput={inputHandler}
                            mainClasses='first-input'
                            subMainClasses='auth-input'
                            errorText='please enter a valid email'></Input>
                        <Input
                            id='companyToken'
                            element='code'
                            type='text'
                            label='Company Code'
                            validators={[VALIDATOR_REQUIRE()]}
                            onInput={inputHandler}
                            mainClasses='first-input'
                            subMainClasses='auth-input'
                            errorText='please enter a valid email'></Input>
                        <Input
                            id='firstName'
                            element='name'
                            type='text'
                            label='First Name'
                            validators={[VALIDATOR_REQUIRE()]}
                            onInput={inputHandler}
                            mainClasses='first-input'
                            subMainClasses='auth-input'
                            errorText='please enter a valid email'></Input>
                        <Input
                            id='lastName'
                            element='name'
                            type='text'
                            label='Last Name'
                            validators={[VALIDATOR_REQUIRE()]}
                            onInput={inputHandler}
                            mainClasses='first-input'
                            subMainClasses='auth-input'
                            errorText='please enter a valid email'></Input>
                        <Input
                            id='email'
                            element='login'
                            type='text'
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

                        <Box display='flex'>
                            <Box display='flex' flexGrow={1}>
                                <ButtonComponent
                                    type='submit'
                                    className='auth-forgot '
                                    disabled={!formState.isValid}>
                                    Sign-up
                                </ButtonComponent>
                            </Box>
                            <Box display='flex' className='auth-forgot-back'>
                                <Link to='/auth'>
                                    <Button
                                        className='auth-forgot'
                                        size='small'>
                                        <span>Back to login page</span>
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </form>
                </>
            </Paper>
        </>
    );
}
