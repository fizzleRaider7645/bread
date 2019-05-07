import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
// import User from './containers/User'
import Login from './containers/Login';
import Register from './containers/Register';
import Account from './containers/Account';
// import { returnUser } from './actions/App'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoginOpen: true, isRegisterOpen: true
    };
  }
/* get the session - via function 
   determine if user is logged in
   if so, set login to be true else to false
*/
  // componentDidMount() {
  //   const cookies = document.cookie.split(';')
  //   const baked = {}
  //   cookies.forEach((cookie) => {
  //     let pieces = cookie.split('=')
  //     baked[pieces[0]] = pieces[1]
  //   })
  //   this.props.returnUser(baked['userLoggedin'])
  // }

  render() {
    return (
      <React.Fragment>
        <h1 className="AppTitle" >Bread Expense Tracker</h1>
          {this.props.login.login ? 
          <div>
            <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Account}/>
            </Switch>
            </BrowserRouter>
          </div> : 
          <div>
            <BrowserRouter>
            <Switch>
            <Route exact path="*" component={Login}/>
            </Switch>
            </BrowserRouter>
          </div>}
      </React.Fragment>
    ); 
  }
}

const mapStatetoProps = (state) => {
  return ({
    login: state.login
  })
}

export default connect(mapStatetoProps, null)(App)