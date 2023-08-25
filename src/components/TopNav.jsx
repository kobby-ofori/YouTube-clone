import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import menu from "../images/menu.png";
import youtube from "../images/youtube.png";
import search from "../images/search.png";
import microphone from "../images/microphone.png";
import create from "../images/create.png";
import notification from "../images/notification.png";
import "./TopNav.css";

const TopNav = () => {
  return (
    <Container fluid className="navbar-container">
      <Row>
        <Col className="first-col">
          <img src={menu} alt="" height="20px" />
          <img src={youtube} alt="" />
          <span>YouTube<span className="span-gh">GH</span></span>
        </Col>

        <Col xs={7} className="second-col" >
          <Nav className="justify-content-center">
            <input type="text" placeholder="Search" />
            <span>
              <Button type="submit" className="btn youtube-search-btn">
                <img src={search} alt="" height="20px" />
              </Button>
              <span className="microphone-span">
                <img src={microphone} alt="" height="24px" className="microphone-img" />
              </span>
            </span>
          </Nav>
        </Col>

        <Col className="third-col">
          <Nav className="justify-content-end third-col-nav">
            <img src={create} alt="" height="24px" />
            <img src={notification} alt="" height="24px" />
            <span className="third-col-span">E</span>
          </Nav>
        </Col>
      </Row>

    </Container>
  );
};

export default TopNav;
