import React from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import TestComponent from "../../components/TestComponents";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import Quiz from "react-quiz-component";
import Quiz from "../../components/Quizz/Quiz";
const DUMMY_TEST = [
    {
        testId: 2,
        quizTitle: "Dokmee Capture Test",
        quizSynopsis:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
        questions: [
            {
                question: "What does OCR means",
                questionType: "text",
                answers: [
                    "Optical character recognition",
                    "I am a wrong answer",
                    "Me too !",
                ],
                correctAnswer: "1",
                messageForCorrectAnswer: "Correct answer. Good job.",
                messageForIncorrectAnswer:
                    "Incorrect answer. Please try again.",
                explanation:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                point: "20",
            },
            {
                question: "What does OMR means",
                questionType: "text",
                answers: [
                    "Optical character recognition",
                    "Optical mark recognition",
                    "I am a wrong answer",
                ],
                correctAnswer: "2",
                messageForCorrectAnswer: "Correct answer. Good job.",
                messageForIncorrectAnswer:
                    "Incorrect answer. Please try again.",
                explanation:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                point: "20",
            },
            {
                question:
                    "Which of the following data sources does Dokmee Capture’s database validation can use:",
                questionType: "text",
                answerSelectionType: "multiple",
                answers: ["Microsoft SQL", "Excel", "Access", "Oracle"],
                correctAnswer: [1, 2, 3],
                messageForCorrectAnswer: "Correct answer. Good job.",
                messageForIncorrectAnswer:
                    "Incorrect answer. Please try again.",
                explanation:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                point: "2",
            },
            {
                question:
                    "What kind of files can you import into Dokmee Capture?",
                questionType: "text",
                answerSelectionType: "single",
                answers: ["Tiff", "PDF", "JPG", "All of above"],
                correctAnswer: "4",
                messageForCorrectAnswer: "Correct answer. Good job.",
                messageForIncorrectAnswer:
                    "Incorrect answer. Please try again.",
                explanation:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                point: "2",
            },
            {
                question:
                    "Dokmee Capture allows you to separate using a patch code in both the zone recognition tab and the separation tab.",
                questionType: "text",
                answerSelectionType: "single",
                answers: ["True", "False"],
                correctAnswer: "2",
                messageForCorrectAnswer: "Correct answer. Good job.",
                messageForIncorrectAnswer:
                    "Incorrect answer. Please try again.",
                explanation:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                point: "2",
            },
            {
                question:
                    "You are able to input manual labor for tracking cost of time spent outside of Dokmee Capture on pre and post processing tasks.",
                questionType: "text",
                answerSelectionType: "single",
                answers: ["True", "False"],
                correctAnswer: "1",
                messageForCorrectAnswer: "Correct answer. Good job.",
                messageForIncorrectAnswer:
                    "Incorrect answer. Please try again.",
                explanation:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                point: "2",
            },
            {
                question:
                    "When creating a zone recognition template, you have the option to either scan or import sample page(s).",
                questionType: "text",
                answerSelectionType: "single",
                answers: ["True", "False"],
                correctAnswer: "1",
                messageForCorrectAnswer: "Correct answer. Good job.",
                messageForIncorrectAnswer:
                    "Incorrect answer. Please try again.",
                explanation:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                point: "2",
            },
            {
                question:
                    "Which of these functions are performed within the Batch Directory?",
                questionType: "text",
                answerSelectionType: "multiple",
                answers: [
                    "Create a Batch",
                    "Rename a Batch",
                    "Create a Batch Detail Report",
                    "Delete Batch",
                ],
                correctAnswer: [1, 4],
                messageForCorrectAnswer: "Correct answer. Good job.",
                messageForIncorrectAnswer:
                    "Incorrect answer. Please try again.",
                explanation:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                point: "2",
            },
        ],
    },

    {
        testId: 1,
        test: [
            {
                id: 1,
                question: "What does is Blue",
                answer: [
                    { text: "A color", answer: true },
                    { text: "I am a wrong answer", answer: false },
                    { text: "Me too !", answer: false },
                ],
            },
            {
                id: 2,
                question: "What does MI means",
                answer: [
                    {
                        text: "Optical character recognition",
                        answer: false,
                    },
                    { text: "I am a wrong answer", answer: false },
                    { text: "Magic Indexing", answer: true },
                    { text: "Me too !", answer: false },
                ],
            },
        ],
    },
];
const useStyles = makeStyles(theme => ({
    Paper: {
        width: "auto",
        margin: "auto",
    },
}));
export default function DokmeeUniversityTest() {
    const testId = useParams().testId;
    const classes = useStyles();
    const courseTest = DUMMY_TEST.find(t => t.testId === parseInt(testId));
    return <Quiz quiz={courseTest} shuffle={true} />;
}
