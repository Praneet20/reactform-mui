import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';







class Personaldetails extends Component {

  

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
      
      const date = {
        color: "rgba(0, 0, 0, 0.04) !important"
      
      };

      const  {values, handleChange} = this.props;
      return (
       
      
        <MuiThemeProvider>
         <React.Fragment>
             <AppBar title="Enter Personal Details"/>
  
             <TextField  
             style={date}

             floatingLabelText="Date of Birth"
           
             type="date"
           
             onChange={handleChange('dob')}
             defaultValue={values.dob}
           
            />
             <br/>
             <TextField
             hintText="Sex"
             floatingLabelText="Sex"
             onChange={handleChange('sex')}
             defaultValue={values.sex}
             
             />
             
             <br/>
             <TextField
             hintText="Enter Your Qualification"
             floatingLabelText="Qualification"
             onChange={handleChange('qualification')}
             defaultValue={values.qualification}
      
             />
      
             
     <br/> <br/>
     <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={values.sex} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
    </FormControl>
    
<br/><br/>
  <RaisedButton
  label="Continue"
  primary={true}
  onClick={this.continueButton}
  />
  <br/><br/>

  <RaisedButton
  label="Back"
  primary={true}
  onClick={this.backButton}
  />

         </React.Fragment>
          </MuiThemeProvider>
      )
    }
  }
export default Personaldetails
