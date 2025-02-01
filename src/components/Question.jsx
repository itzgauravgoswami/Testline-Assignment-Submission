import React from 'react';
import './Question.css';

const Question = ({ options, onAnswer }) => {
    // Check if options is defined and is an array
    if (!Array.isArray(options) || options.length === 0) {
        return <div>No options available.</div>;
    }

    return (
        <div className="question-container">
            {options.map((option) => (
                <button 
                    key={option.id || Math.random()} 
                    onClick={() => onAnswer(option.is_correct)}
                    className="option-button"
                >
                    {option.description || 'Option'} {}
                </button>
            ))}
        </div>
    );
};

export default Question;
