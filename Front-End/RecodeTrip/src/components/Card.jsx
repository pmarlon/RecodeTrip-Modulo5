import React from 'react';
import {Card} from 'react-bootstrap'

const CardInfo = ({cardInfo}) => {
    return ( 
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={cardInfo.imageUrl} />
        <Card.Body>
          <Card.Title>{cardInfo.title}</Card.Title>
          <Card.Text>
           {cardInfo.text}
          </Card.Text>
        </Card.Body>
      </Card>

        );
}
 
export default CardInfo;