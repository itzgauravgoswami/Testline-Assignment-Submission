import React from 'react';
import './Result.css';
const Result = ({ score, totalQuestions }) => {
    return (
        <div className="result-container">
            <h2 className="result-title">Quiz Completed!</h2>
            <p className="result-score">
                Your score: <span>{score}</span> out of {totalQuestions}
            </p>
        </div>
    );
};

export default Result;
