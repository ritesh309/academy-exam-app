import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import answer from '../../assets/img/answer.png';

import options from '../../assets/img/options.PNG';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Exam - Instructions</title></Helmet>
        <div className="instructions container">
            <h1>Important ! Instructions </h1>
            <p>Ensure you read this guide from start to finish.</p>
            <ul className="browser-default" id="main-list">
                <li>The game has a duration of 3 min 00 sec  and ends as soon as your time elapses.</li>
                <li>Each game consists of 15 questions.</li>
                <li>
                    Every question contains 4 options.
                    <img src={options} alt="Quiz App options example" />
                </li>
                <li>
                    Select the option which best answers the question by clicking (or selecting) it.
                    <img src={answer} alt="Quiz App answer example" />
                </li>

                <li>Feel free to quit (or retire from) the game at any time. In that case your score will be revealed afterwards.</li>
                <li>The timer starts as soon as the game loads.</li>
                <li>Let's do this if you think you've got what it takes?</li>
            </ul>
            <div>
                <span className="left"><Link to="/">No take me back</Link></span>
                <span className="right"><Link to="/play">Okay, Let's do this!</Link></span>
            </div>
        </div>
    </Fragment>
);

export default QuizInstructions;