import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import abc from "./myphotos/img1.jpg";
import { FcHome,FcAlarmClock,FcGlobe, FcMenu  } from "react-icons/fc";

function Myreactbootstrap() {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Card>
            <Card.Img variant="top" src={abc} />
            <Card.Body>
              <Card.Title>Card Title<FcHome/></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={3}>
          <Card>
            <Card.Img variant="top" src={abc} />
            <Card.Body>
              <Card.Title>Card Title<FcAlarmClock/></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={3}>
          <Card>
            <Card.Img variant="top" src={abc} />
            <Card.Body>
              <Card.Title>Card Title<FcGlobe/></Card.Title>
              <Card.Text>
                 Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={3}>
          <Card>
            <Card.Img variant="top" src={abc} />
            <Card.Body>
              <Card.Title>Card Title<span className="text-denger">< FcMenu /></span></Card.Title>
              <Card.Text>
                 Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Myreactbootstrap;
