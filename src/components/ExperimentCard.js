import { Button, Card, Col } from "react-bootstrap"

export function ExperimentCard(){


    return <Card className="h-100">
        <Card.Img variant="top" height="200px" style={{objectFit:"cover"}}/>
    <Card.Body className = "d-flex flex-column">
        <Card.Title className = "d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2>">sdfdsf</span>
            <span className="fs-2>">sdfsdf</span>
            <span className="fs-2>">Stock:sdfsdf</span>

        </Card.Title>
            <span className="fs-2>"><b>Description:</b>sdfsdf</span>
       
    </Card.Body>
    </Card>
}