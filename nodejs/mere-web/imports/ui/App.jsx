import React, { Component } from 'react';

 
//import Parent from './Parent.jsx';
 
// App component - represents the whole app
export default class App extends Component {
    
    handleTestClick(event){
        console.log("handleTestClick entry:"+event);
        Meteor.call('sendNotification');
    }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Parent Profile</h1>
        </header>
 
        Name:
            <br/>
        Mobile:
            <br/>
        
            <button type="button" onClick={this.handleTestClick.bind(this)}>
                Send Test Notification</button>
      </div>
    );
  }
}