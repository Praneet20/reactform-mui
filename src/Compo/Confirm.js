import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';

class Confirm extends Component {

  continueButton = (e) =>
  {
  e.preventDefault();
  this.props.nextStep();
  }

  backButton = (e) =>
  {
  e.preventDefault();
  this.props.previousStep();
  }
  
    render() {
      const  {values: {firstName, lastName, email, occupation, city, dob, sex, qualification}, handleChange} = this.props;
   
      return (
        <MuiThemeProvider>
         <React.Fragment>
             <AppBar title="Confirm User Data"/>
  
           
            <list>
                <ListItem
                primaryText="First Name"
              
                secondaryText={ firstName }
                
                />
                <ListItem
                primaryText="Last Name"
                secondaryText={ lastName }
                />
                <ListItem
                primaryText="Email"
                secondaryText={ email } 
                />
                <ListItem
                primaryText="Occupation"
                secondaryText={ occupation }
                />
                <ListItem
                primaryText="city"
                secondaryText={ city }
                />
                <ListItem
                primaryText="dob"
                secondaryText={ dob }
                />

<ListItem
                primaryText="Sex"
                secondaryText={ sex }
                />

<ListItem
                primaryText="Qualificatione"
                secondaryText={ qualification }
                />
            </list>
             
     <br/> <br/>
  <RaisedButton
  label="Confirm and Continue"
  primary={true}
  onClick={this.continueButton}
  />
  <br/><br/>

  <RaisedButton
  label="Back"
  primary={false}
  onClick={this.backButton}
  />

         </React.Fragment>
          </MuiThemeProvider>
      )
    }
  }
export default Confirm
