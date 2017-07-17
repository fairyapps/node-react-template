import Helmet from "react-helmet";
import React, { Component } from "react";
import { Container, Column, Row } from "../../components/Grid";
import Discover from "./components/Discover";
import About from "./components/About";

const Profile = props =>
  <Container>
    <Helmet title="Profile" />
    <Discover />
    <About />
  </Container>;

export default Profile;
