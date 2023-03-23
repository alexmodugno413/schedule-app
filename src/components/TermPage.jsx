import { useState } from 'react';
import CourseList from './CourseList';

const terms = ['Fall', 'Winter', 'Spring'];

const TermButton = ({term, selection, setSelection}) => (
    <div>
        <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
        onChange={() => setSelection(term)} />
        <label className="btn btn-success mb-1 p-2" htmlFor={term}>
        { term }
        </label>
    </div>
);

const TermSelector = ({selection, setSelection}) => (
    <div className="btn-group">
      { 
        terms.map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
      }
    </div>
);

const TermPage = ({courseData}) => {
    const [selection, setSelection] = useState(terms[0]);
    const [popUp, setPopUp] = useState(false);
    return (
    <div>
      <div style={{float: "right"}}>
        <label className="btn btn-success mb-1 p-2" onClick={() => setPopUp(!popUp)}>
        Toggle Courses Selected / All
        </label>
      </div>

      <div>
        <TermSelector selection={selection} setSelection={setSelection}/>
        <CourseList courses={courseData} term={selection} popUp={popUp}/>
      </div>

    </div>
    );
};

export default TermPage;