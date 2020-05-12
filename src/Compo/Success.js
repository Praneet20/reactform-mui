import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';


class Success extends Component {

  
  
    render() {
      return (
        <MuiThemeProvider>
         <React.Fragment>
             <AppBar title="Success"/>
  
           <h1>Thanks for Submission</h1>
            
            <h2>You will get email with instructions</h2>
        

         </React.Fragment>
          </MuiThemeProvider>
      )
    }
  }
export default Success
