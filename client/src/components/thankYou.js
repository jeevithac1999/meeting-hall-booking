import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import jwt_decode from 'jwt-decode'

class _ extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name
    })
  }

render(){
  return (
    <div>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Thank You!</p>
          {/* <i className="fas fa-pizza-slice thank-you-pizza"></i> */}
          <p className="thanks-subtext">
          {this.state.first_name}
          </p>
        </Col>
      </Row>
    </div>
  );}
};


export default _