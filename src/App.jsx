import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [count, setCount] = useState(0);

  const schedule = {
    "title": "CS Courses for 2018-2019",
    "courses": {
      "F101": {
        "term": "Fall",
        "number": "101",
        "meets": "MWF 11:00-11:50",
        "title": "Computer Science: Concepts, Philosophy, and Connections"
      },
      "F110": {
        "term": "Fall",
        "number": "110",
        "meets": "MWF 10:00-10:50",
        "title": "Intro Programming for non-majors"
      },
      "F111": {
        "term": "Fall",
        "number": "111",
        "meets": "MWF 12:00-12:50",
        "title": "Fundamentals of Computer Programming I"
      },
      "W111": {
        "term": "Winter",
        "number": "111",
        "meets": "MWF 12:00-12:50",
        "title": "Fundamentals of Computer Programming I"
      },
      "F211": {
        "term": "Fall",
        "number": "211",
        "meets": "MWF 1:00-1:50",
        "title": "Fundamentals of Computer Programming II"
      },
    }
    
  };

  const today = new Date();
  const day = today.toLocaleString([], {weekday: 'long'});
  const date = today.toLocaleDateString([], {dateStyle: 'long'})

  return (
    <div className="App">
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} />
    </div>
  );
};

export default App;
