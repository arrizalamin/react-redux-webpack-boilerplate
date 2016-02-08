import React, { Component } from 'react';
import {
  Grid, Row, Col, Form, FormGroup, Input, Button
} from 'react-bootstrap';
import {connect} from 'react-redux';
import {selector} from '../selector';

if(!global.__SERVER__) require('../less/main.less');

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Grid>
        <Row>
          {this.props.children}
        </Row>
      </Grid>
    );
  }
}

export default connect(selector)(App);