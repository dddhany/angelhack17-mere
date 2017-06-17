import React, { Component } from 'react';

 
//import Parent from './Parent.jsx';
 
// App component - represents the whole app
export default class App extends Component {
    
    handleClickTestNotif(e){
        //console.log("handleTestClick entry:"+event);
        Meteor.call('sendNotification');
    }
    
    handleClickSave(e){
        console.log("click save");
    }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Parent Profile</h1>
        </header>
 
        Name: <input
              type="text"
              ref="parentName"
              placeholder="Enter Name"
            />
            <br/>
        Relationship:
            <select ref="parentRel">
                <option></option>
                <option>Father</option>
                <option>Mother</option>
            </select>
            <br/>
        Mobile:
            <input
              type="text"
              ref="parentMobile"
              placeholder="Enter Mobile Number"
            />
            <br/>
            
            <button type="button" onClick={this.handleClickSave.bind(this)}>
                Save</button>
            <button type="button" onClick={this.handleClickTestNotif.bind(this)}>
                Send Test Notification</button>
      </div>
    );
  }
}