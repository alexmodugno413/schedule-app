import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup } from 'react-bootstrap';
import './CourseList.css';

const CourseList = ({courses, term}) => {
    const newCourses = Object.entries(courses).filter(([id, info]) => info.term === term);
    return (
        <div className="course-list">
        { Object.entries(newCourses).map(([id, info]) =>
            <Card style={{ width: '13.5rem' }}>
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
    </div> 
    );
};

export default CourseList;