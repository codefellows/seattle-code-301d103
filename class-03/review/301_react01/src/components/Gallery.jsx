import React from 'react';
// important to import things properly
import { Container, Row, Col } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
import beastValues from '../assets/data.json';

class Gallery extends React.Component {
  render() {
    return (
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {beastValues.map((beast, index) => (
            <Col key={index}>
              <HornedBeast
                title={beast.title}
                image_url={beast.image_url}
                description={beast.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Gallery;

