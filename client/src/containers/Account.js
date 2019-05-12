import React, { Component } from 'react';
import User from './User';
import '../App.css';

class Account extends Component {
    constructor() {
        super()
        this.state = {
          balance: []
        }
      }
    render() {
        return (
            <div className="Account">
            Account
              <User />
            </div>
        )
    }
}

export default Account