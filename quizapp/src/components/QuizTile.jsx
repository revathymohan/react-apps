import React from 'react';
import { useState } from 'react';

const QuizTile = () => {
    const [number, setNumber] = useState(1);

    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];
    const next = () => {
        if (number == questions.length - 1) {
            setNumber(1);
        }
        else
            setNumber(number + 1);


    }

    return (
        <div className='question-section'>
            <span> You have answered </span>
            <div className='question-section'>
                <div className='question-count'>
                    <span>Question {number} </span>/{questions.length}
                </div>
                <div className='question-text'>{questions[number]?.questionText}</div>
            </div>
            <div className='answer-section'>

                <button>{questions[number]?.answerOptions[0]?.answerText}</button>
                <button>{questions[number]?.answerOptions[1]?.answerText}</button>
                <button>{questions[number]?.answerOptions[2]?.answerText}</button>
                <button>{questions[number]?.answerOptions[3]?.answerText}</button>
            </div>
            <button className='next' onClick={next}>Next</button>

        </div>
    );

}

export default QuizTile;