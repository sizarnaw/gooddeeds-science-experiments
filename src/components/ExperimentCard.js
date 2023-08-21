import { Button, Card, Col } from "react-bootstrap"
import PropTypes from 'prop-types';
export function ExperimentCard(props){


    return (<Card className="h-100">
        <Card.Img variant="top" height="200px" src={props.imageURL} style={{objectFit:"cover"}}/>
    <Card.Body className = "d-flex flex-column">
        <Card.Title className = "d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2>">ID: {props.id}</span>
            <span className="fs-2>">Grade: {props.grade}</span>
            <span className="fs-2>">title: {props.title}</span>

        </Card.Title>
            <span className="fs-2>"><b>Description:{props.description}</b></span>
       
    </Card.Body>
    </Card>
    );
}
ExperimentCard.propTypes = {
    key: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    grade: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired
};