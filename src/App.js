import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Router from "./components/Router";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";

function App() {
  return (
    <Container fluid>
      <Row>
        <TopNav />
      </Row>
      <Row>
        <Col xs={2}><SideNav /></Col>
        <Col><Router /></Col>
      </Row>
    </Container>
  );
}

export default App;
