import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <Row>
        <Col>
          <Card
            style={{ width: "18rem" }}
            className="card text-center custom-card"
          >
            <Card.Img
              variant="top"
              src=""
              alt="attire-pics"
              className="card-img-top img-responsive custom-img"
            />
            <p className="top-right-tag">Free shipping</p>
            <Card.Body>
              <Card.Title>attire</Card.Title>
              <Card.Text>GHS price</Card.Text>
              <Button variant="primary"></Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
        <Card
            style={{ width: "18rem" }}
            className="card text-center custom-card"
          >
            <Card.Img
              variant="top"
              src=""
              alt="attire-pics"
              className="card-img-top img-responsive custom-img"
            />
            <p className="top-right-tag">Free shipping</p>
            <Card.Body>
              <Card.Title>attire</Card.Title>
              <Card.Text>GHS price</Card.Text>
              <Button variant="primary"></Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
        <Card
            style={{ width: "18rem" }}
            className="card text-center custom-card"
          >
            <Card.Img
              variant="top"
              src=""
              alt="attire-pics"
              className="card-img-top img-responsive custom-img"
            />
            <p className="top-right-tag">Free shipping</p>
            <Card.Body>
              <Card.Title>attire</Card.Title>
              <Card.Text>GHS price</Card.Text>
              <Button variant="primary"></Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
