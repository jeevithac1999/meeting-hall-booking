import React from "react";
import { Row, Col} from "reactstrap";

import { Link} from 'react-router-dom'

const Main =()=> {
  return (
    <div>
      <Row noGutters className="text-center align-items-center">
        <Col>
          <p className="looking-for-hall">
            If you're looking for meeting hall
            {/* <i className="fas fa-pizza-slice pizza-slice"></i> */}
          </p>
          <Link to="/booking" className="book-room-l">Book a Hall
          </Link>
      
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src={require("../images/meeting room.png")}
            alt="Meeting Hall"
            className="big-img"
          />
        </Col>
      </Row>
    </div>
  );
};
export default Main;