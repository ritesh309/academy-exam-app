import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Exam from './components/quiz/Exam';
import ExamSummary from './components/quiz/ExamSummary';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/play/instructions" exact component={QuizInstructions} />
      <Route path="/play" exact component={Exam} />
      <Route path="/play/quizSummary" exact component={ExamSummary} />
    </Router>
  );
}

export default App;