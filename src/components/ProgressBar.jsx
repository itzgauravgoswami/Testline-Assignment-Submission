import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentQuestionIndex, totalQuestions }) => {
    const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;

    return (
        <div className="progress-container">
            <div className="progress" style={{ width: `${progressPercentage}%` }} />
        </div>
    );
};

export default ProgressBar;
