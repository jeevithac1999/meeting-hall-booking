import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
// import Profile from './components/Profile'
import Main from "./components/main";
import Book from "./components/book";
import ThankYou from "./components/thankYou";

const App=()=> {
    return (
      <Router>
        <div className="App">
        <Navbar/>
          <Route exact path="/" component={Landing} />
          <div className="container">
        <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route exact path="/book" component={Main} />
            <Route exact path="/booking" component={Book} />
            <Route exact path="/thank" component={ThankYou} />
            </Switch>
          </div>
        </div>
      </Router>
    )
}

export default App