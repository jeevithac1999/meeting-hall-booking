import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

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


  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <Link to="/book" className="nav-link">
            Book
          </Link>
        </li>
        <li className="nav-item">
          <a href="/#" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
        <li className="nav-item">
          <em className="nav-link">
          {this.state.first_name}
          {/* Profile */}
          </em>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)
