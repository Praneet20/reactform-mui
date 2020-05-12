import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class Userdetails extends Component {
continueButton = (e) =>
{
e.preventDefault();
this.props.nextStep();
this.props.handleChange('hello')
}



   
  render() {
    const  {values, handleChange} = this.props;

    
    return (
      <MuiThemeProvider>
       <React.Fragment>
           <AppBar title="Enter User Details"/>
           <TextField
           hintText="Enter Your First Name"
           floatingLabelText="First Name"
           onChange={handleChange('firstName')}
           defaultValue={values.firstName}
           />
           <br/>
           <TextField
           hintText="Enter Your Last Name"
           floatingLabelText="Last Name"
           onChange={handleChange('lasttName')}
           defaultValue={values.lastName}
           />
           <br/>
           <TextField
           hintText="Enter Your Email"
           floatingLabelText="Email"
           onChange={handleChange('email')}
           defaultValue={values.email}
    
           />
           <br/>
           <TextField
           hintText="Enter Your Occupation"
           floatingLabelText="Occupation"
           onChange={handleChange('occupation')}
           defaultValue={values.occupation}
     
           />
           <br/>
           <TextField
           hintText="Enter Your City"
           floatingLabelText="city"
           onChange={handleChange('city')}
           defaultValue={values.city}
           />
   <br/> <br/>
<RaisedButton
label="Continue"
primary={true}
onClick={this.continueButton}
/>

       </React.Fragment>
        </MuiThemeProvider>
    )
  }
}

export default Userdetails
