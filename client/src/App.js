import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
// import User from './containers/User'
import Login from './containers/Login';
import Register from './containers/Register';
import Account from './containers/Account';
// import { returnUser } from './actions/App'
import Auth from './modules/Auth'
import { API_URL } from './actions/apiUrl'

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated()
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

  handleRegistrationSubmit = (event, data) => {
    event.preventDefault()
    fetch(`${API_URL}/users`, {
      method: 'POST',
      body: JSON.stringify({
        user: data
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      Auth.authenticateToken(res.token)
      this.setState({
        auth: Auth.isUserAuthenticated(),
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <Router>
        <React.Fragment>
        <h1 className="AppTitle" >Bread Expense Tracker</h1>
          
          <Route 
            exact path="/register" 
            render={ () => <Register handleRegistrationSubmit={this.handleRegistrationSubmit} /> }
          />
          {/* {this.props.login.login ? 
          <div>
            <Router>
            <Switch>
            <Route exact path="/" component={Account}/>
            </Switch>
            </Router>
          </div> : 
          <div>
            <Router>
            <Switch>
            <Route exact path="*" component={Login}/>
            </Switch>
            </Router>
          </div>} */}
        </React.Fragment>
      </Router>
    ); 
  }
}

const mapStatetoProps = (state) => {
  return ({
    login: state.login
  })
}

export default connect(mapStatetoProps, null)(App)