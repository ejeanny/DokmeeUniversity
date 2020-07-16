import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, FieldArray, reduxForm, formValueSelector } from "redux-form";
import { Box, Grid } from "@material-ui/core";
import { Editor } from "react-draft-wysiwyg";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import range from "lodash/range";
import ButtonComponent from "../../../../shared/components/FormElements/Button";
import validate from "./validate";

import "./QuizForm.css";

class QuizForm extends Component {
    renderInputField = ({ input, label, type, meta: { touched, error } }) => (
        <TextField id='standard-basic' label={label} className='full-width' />
    );

    renderEditor = ({ input, label, type, meta: { touched, error } }) => (
        <Editor
            wrapperClassName='demo-wrapper'
            editorClassName='demo-editor'
            hashtag={{}}
        />
    );

    renderTextareaField = ({
        input,
        label,
        type,
        meta: { touched, error },
    }) => <TextField label={label} multiline rows={4} className='full-width' />;

    renderSelectField = ({
        input,
        label,
        type,
        meta: { touched, error },
        children,
    }) => (
        <div>
            <label>{label}</label>
            <div>
                <select {...input}>{children}</select>
                {touched && error && <span className='error'>{error}</span>}
            </div>
        </div>
    );

    renderSelectQuestionTypeField = ({
        input,
        label,
        type,
        meta: { touched, error },
        children,
    }) => (
        <div>
            <label>{label}</label>
            <div>
                <Select
                    labelId='demo-simple-select-helper-label'
                    id='demo-simple-select-helper'>
                    {children}
                </Select>
                {touched && error && <span>{error}</span>}
            </div>
        </div>
    );

    renderTextAnswers = ({ fields, question, meta: { error } }) => (
        <>
            <ul>
                <Grid container spacing={1}>
                    <Grid item lg={6} md={6} sm={6} xs={6} container>
                        <li>
                            <Button onClick={() => fields.push()}>
                                Add Answer
                            </Button>
                        </li>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={6} container>
                        <li>
                            <Field
                                name={`${question}.correctAnswer`}
                                component={this.renderSelectField}
                                label='Correct Answer'>
                                <option value=''>
                                    Please select correct answer
                                </option>
                                {fields.map((answer, index) => (
                                    <option
                                        key={index + 1}
                                        value={index + 1}>{`Answer #${
                                        index + 1
                                    }`}</option>
                                ))}
                            </Field>
                        </li>
                    </Grid>
                </Grid>

                {fields.map((answer, index) => (
                    <li key={index}>
                        {/* <button
                        type='button'
                        title='Remove Answer'
                        onClick={() => fields.remove(index)}
                    /> */}
                        <Grid container spacing={1}>
                            <Grid
                                item
                                lg={11}
                                md={11}
                                sm={11}
                                xs={11}
                                container
                                justify='space-evenly'>
                                <Field
                                    name={answer}
                                    type='text'
                                    component={this.renderInputField}
                                    label={`Answer #${index + 1}`}
                                />
                            </Grid>
                            <Grid
                                item
                                lg={1}
                                md={1}
                                sm={1}
                                xs={1}
                                container
                                justify='space-evenly'>
                                <IconButton
                                    aria-label='delete'
                                    className='marginTop-10'
                                    onClick={() => fields.remove(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </li>
                ))}

                {error && <li className='error'>{error}</li>}
            </ul>
        </>
    );

    renderQuestions = ({ fields, meta: { touched, error, submitFailed } }) => (
        <>
            <Button className='negative-margin' onClick={() => fields.push({})}>
                Add Question
            </Button>
            {(touched || submitFailed) && error && (
                <span className='error'>{error}</span>
            )}
            <ul>
                {fields.map((question, index) => (
                    <li key={index} className='question-list'>
                        <Grid container spacing={1}>
                            <Grid item lg={2} md={2} sm={2} xs={2} container>
                                <h4 className='text-alin-left padding-10px'>
                                    Question #{index + 1}
                                </h4>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xs={6} container>
                                <Field
                                    name={`${question}.question`}
                                    type='text'
                                    component={this.renderInputField}
                                    label='Question Title'
                                />
                            </Grid>
                            <Grid item lg={3} md={3} sm={3} xs={3} container>
                                <IconButton
                                    aria-label='delete'
                                    className='padding-10px'
                                    onClick={() => fields.remove(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                            {/* <Grid item lg={6} md={6} sm={6} xs={6} container>
                                <Field
                                    name={`${question}.questionType`}
                                    component={
                                        this.renderSelectQuestionTypeField
                                    }
                                    label='Question Type'>
                                    <option value='text'>Text</option>
                                </Field>
                            </Grid> */}
                            <Grid
                                item
                                lg={12}
                                md={12}
                                sm={12}
                                xs={12}
                                container>
                                <FieldArray
                                    name={`${question}.answers`}
                                    component={this.renderTextAnswers}
                                    question={question}
                                />
                            </Grid>
                            <Grid
                                item
                                lg={6}
                                md={6}
                                sm={6}
                                xs={6}
                                container
                                justify='space-evenly'>
                                <Field
                                    name={`${question}.messageForCorrectAnswer`}
                                    type='text'
                                    component={this.renderTextareaField}
                                    label='Correct Answer Message'
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6} container>
                                <Field
                                    name={`${question}.messageForIncorrectAnswer`}
                                    type='text'
                                    component={this.renderTextareaField}
                                    label='Incorrect Answer Message'
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6} container>
                                <Field
                                    name={`${question}.explanation`}
                                    type='text'
                                    component={this.renderTextareaField}
                                    label='Explanation'
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6} container>
                                <Field
                                    name={`${question}.point`}
                                    type='number'
                                    component={this.renderInputField}
                                    label='Point'
                                />
                            </Grid>
                            <Grid
                                item
                                lg={12}
                                md={12}
                                sm={12}
                                xs={12}
                                container>
                                <span className='separator' />
                            </Grid>
                        </Grid>
                    </li>
                ))}
            </ul>
        </>
    );

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <div className='QuizForm'>
                <form
                    name='quiz-form'
                    className='quiz-form'
                    onSubmit={handleSubmit}>
                    <Grid container spacing={1}>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            container
                            justify='space-evenly'>
                            <Field
                                name='quizTitle'
                                type='text'
                                component={this.renderInputField}
                                label='Test Title'
                                className='full-width'
                            />
                        </Grid>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            container
                            justify='space-evenly'>
                            <div className='demo-wrapper rdw-editor-wrapper'>
                                <Field
                                    name='quizSynopsis'
                                    type='text'
                                    component={this.renderEditor}
                                    label='Test Synopsis'
                                />
                            </div>
                        </Grid>
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            container
                            justify='space-evenly'>
                            <div className='full-width'>
                                <FieldArray
                                    name='questions'
                                    component={this.renderQuestions}
                                    className='full-width'
                                />
                            </div>
                        </Grid>
                        <Grid
                            item
                            lg={6}
                            md={6}
                            sm={6}
                            xs={6}
                            container
                            justify='space-evenly'>
                            <Button type='submit' disabled={submitting}>
                                Submit
                            </Button>
                            <Button
                                type='button'
                                disabled={pristine || submitting}
                                onClick={reset}>
                                Clear Values
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}

QuizForm = reduxForm({
    form: "quizForm",
    validate,
})(QuizForm);

const selector = formValueSelector("quizForm");

QuizForm = connect(state => {
    const questions = selector(state, "questions");
    const questionType =
        questions && questions.map(question => question.questionType);

    return { questionType: questionType };
})(QuizForm);

export default QuizForm;
