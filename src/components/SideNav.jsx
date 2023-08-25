import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link>
        <Link to="/">Home</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="ShortsPage">Shorts</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="Subscriptions">Subscriptions</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="Library">Library</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="History">History</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="YourVideos">Your videos</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="WatchLater">Watch later</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="LikedVideos">Liked videos</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="Trending">Trending</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="Music">Music</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="Gaming">Gaming</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="Sports">Sports</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="YouTube Studio">YouTube Studio</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="YouTubeKids">YouTube Kids</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="Settings">Settings</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="Reporthistory">Report history</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="Help">Help</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="SendFeedback">Send feedback</Link>
      </Nav.Link>
    </Nav>
  );
};

export default SideNav;
