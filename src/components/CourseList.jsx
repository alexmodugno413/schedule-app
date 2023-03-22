import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup } from 'react-bootstrap';
import './CourseList.css';

const CourseList = ({courses}) => (
    <div className="course-list">
        { Object.entries(courses).map(([id, info]) => 
            <Card style={{ width: '13.5rem' }}>
                <Card.Body>
                    <Card.Title>{info.term} CS {info.number}</Card.Title>
                    <Card.Text>{info.title}</Card.Text>
                </Card.Body>
                <ListGroup>
                    <ListGroup.Item>{info.meets}</ListGroup.Item>
                </ListGroup>
            </Card>
        )
        };
    </div>
);

export default CourseList;