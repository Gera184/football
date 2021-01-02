import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Team } from "./Teams/Team";
import { Main } from "./main/Main";
import { Container } from "react-bootstrap";
import { Stadium } from "./stadiums/Stadium";

export default () => {
  return (
    <div>
      <Container fluid>
        <Router>
          <Switch>
            <Route path="/home" component={Main} />
            <Route exact path="/" component={Main} />
            <Route exact path="/playerdata" component={Team} />
            <Route exact path="/stadium" component={Stadium} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
};
