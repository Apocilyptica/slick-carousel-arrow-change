import { Container } from "@material-ui/core";
import React, { Component } from "react";
import PrimarySearchAppBar from "./PrimarySearchAppBar";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Container fixed>
          <PrimarySearchAppBar />
        </Container>
      </div>
    );
  }
}
