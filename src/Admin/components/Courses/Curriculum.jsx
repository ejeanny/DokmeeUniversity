import React, { useState } from "react";
import QuizForm from "./Quizz/QuizForm";
import QuizFormResult from "./Quizz/QuizFormResult";

export default function Curriculum() {
    const [result, setFormResult] = useState();

    const setResult = values => {
        setFormResult(JSON.stringify(values, null, 2));
    };

    return (
        <>
            <QuizForm onSubmit={setResult} />
        </>
    );
}
