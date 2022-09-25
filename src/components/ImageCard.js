import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ImageCard = ({image}) => {

    return (
                <Card className="mx-auto">
                    <Card.Img variant="top" src={image.webformatURL} alt="Display"/>
                    <Card.Body>
                        <Card.Title>Photo by {image.user}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><strong>views:</strong>
                            {image.views}</ListGroup.Item>
                        <ListGroup.Item><strong>downloads:</strong>
                            {image.downloads}</ListGroup.Item>
                        <ListGroup.Item><strong>likes:</strong>
                            {image.likes}</ListGroup.Item>
                    </ListGroup>
                </Card>
    )
}
export default ImageCard;
