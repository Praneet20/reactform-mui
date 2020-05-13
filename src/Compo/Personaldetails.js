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
import { withStyles } from '@material-ui/core/styles';

const Styles = theme =>
(
  {
    field: {
     color: "rgba(0, 0, 0, 0.04)",
     padding:"10px"
    }
  }
);

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
        color: "rgba(0, 0, 0, 0.04) !important",
         paddingTop:"20px"
      };

     const form = {
       marginLeft:"-180px",
       marginTop:"10px"
     }

     const formInput =
     {
      color: "grey"
     }

      const  {values, handleChange} = this.props;
      return (
       
      
        <MuiThemeProvider>
         <React.Fragment>
             <AppBar title="Enter Personal Details"/>
  
             <TextField  
            

             floatingLabelText="Date of Birth"
            style={date}
             type="date"
             inputStyle={{color: "rgba(0, 0, 0, 0.38)"}}
             onChange={handleChange('dob')}
             defaultValue={values.dob}
           
            />
            {/* <br/>
            <TextField
             hintText="Sex"
             floatingLabelText="Sex"
             onChange={handleChange('sex')}
             defaultValue={values.sex}
             
             /> */}
             
             {/* <br/>
             <TextField
             hintText="Enter Your Qualification"
             floatingLabelText="Qualification"
             onChange={handleChange('qualification')}
             defaultValue={values.qualification}
      
             /> */}

<br/> <br/>
     <FormControl component="fieldset" style={form}>
      <FormLabel component="legend">Qualification</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" onChange={handleChange('qualification')} value={values.qualification} >
        <FormControlLabel style={formInput} value="Undergraduate" control={<Radio />} label="Undergraduate" />
        <FormControlLabel style={formInput} value="Graduate" control={<Radio />} label="Graduate" />
        <FormControlLabel  style={formInput} value="Postgraduate" control={<Radio />} label="Postgraduate" />
      
        </RadioGroup>
    </FormControl>  
     <br/> <br/>
     <FormControl component="fieldset" style={form}>
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" onChange={handleChange('sex')} value={values.sex} >
        <FormControlLabel style={formInput} value="female" control={<Radio />} label="Female" />
        <FormControlLabel style={formInput} value="male" control={<Radio />} label="Male" />
        <FormControlLabel  style={formInput} value="other" control={<Radio />} label="Other" />
        
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
