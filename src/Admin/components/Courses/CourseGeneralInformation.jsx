import React, { useState, useContext } from "react";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../../../shared/util/validators";
import Input from "../../../shared/components/FormElements/Input";
import Title from "../../../shared/components/UiElements/Title";
import ButtonComponent from "../../../shared/components/FormElements/Button";
import { useForm } from "../../../shared/hook/form-hooks";
import { useHttpClient } from "../../../shared/hook/http-hooks";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Editor } from "react-draft-wysiwyg";

export default function CourseGeneralInformation() {
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

    return (
        <>
            <form>
                <Input
                    id='name'
                    element='text'
                    type='text'
                    label='Course Title'
                    validators={[VALIDATOR_MINLENGTH(4)]}
                    onInput={inputHandler}
                    variant='outlined'
                    mainClasses='first-input'
                    subMainClasses='auth-input'
                    errorText='please enter a valid name'></Input>
                <Input
                    id='courseSubtitle'
                    element='text'
                    type='text'
                    label='Course Subtitle'
                    validators={[VALIDATOR_MINLENGTH(20)]}
                    onInput={inputHandler}
                    variant='outlined'
                    mainClasses='first-input'
                    subMainClasses='auth-input'
                    errorText='please enter a valid name'></Input>
                <div className='demo-wrapper rdw-editor-wrapper'>
                    <Editor
                        wrapperClassName='demo-wrapper'
                        editorClassName='demo-editor'
                        hashtag={{}}
                    />
                </div>
                <Box display='flex' className='auth-action'>
                    <Box display='flex' flexGrow={1}></Box>
                    <Box display='flex'></Box>
                </Box>
                <Box display='flex' justifyContent='flex-start'>
                    <ButtonComponent
                        type='submit'
                        disabled={!formState.isValid}>
                        Save
                    </ButtonComponent>
                </Box>
            </form>
        </>
    );
}
