import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup } from 'react-bootstrap';
import './CourseList.css';
import { useState } from 'react';

const CourseList = ({courses, term, popUp}) => {
    const [toggled, setToggled] = useState([]);

    const onClickFunction = (id) => {
        toggled.includes(id) ? setToggled(toggled.filter(x => x !== id)) : setToggled([...toggled, id]);
    }

    const newCourses = Object.entries(courses).filter(([id, info]) => info.term === term);
    console.log(newCourses);
    return (
        (popUp == false) ?
        <div className="course-list">
        { Object.entries(newCourses).map(([id, info]) =>
            <Card style={{ width: '13.5rem' }} bg={toggled.includes(id) ? 'success' : ''}>
                <button onClick={() => onClickFunction(id)}>Select Class</button>
                <Card.Body>
                    <Card.Title>{info[1].term} CS {info[1].number}</Card.Title>
                    <Card.Text>{info[1].title}</Card.Text>
                </Card.Body>
                <ListGroup>
                    <ListGroup.Item>{info[1].meets}</ListGroup.Item>
                </ListGroup>
            </Card>
        )
        };
        </div> : (toggled.length == 0) ? <div>'Please select courses by clicking "Select Course"'</div> :
        <div className="course-list">
        { Object.entries(newCourses).map(([id, info]) =>
        (toggled.includes(id)) ?
        <Card style={{ width: '13.5rem' }} bg={'success'}>
            <Card.Body>
                <Card.Title>{info[1].term} CS {info[1].number}</Card.Title>
                <Card.Text>{info[1].title}</Card.Text>
            </Card.Body>
            <ListGroup>
                <ListGroup.Item>{info[1].meets}</ListGroup.Item>
            </ListGroup>
        </Card>
        :
        ''
        )
        }
        </div>
    );
};

export default CourseList;