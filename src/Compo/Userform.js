import React, { Component } from 'react';
import Userdetails from './Userdetails';
import Personaldetails from './Personaldetails';
import Confirm from './Confirm';
import Success from './Success'
class Userform extends Component {

   state = {
       step: 1,
       firstName: '',
       lastName: '',
       email: '',
       occupation: '',
       city:'',
       dob:'',
       sex:'',
       qualification:''
   }

   //For continue button
   nextStep = () =>
   {
       const {step} = this.state;
this.setState({
    step: step+1
});
   }
    
    //For previous button
    previousStep = () =>
    {
        const {step} = this.state;
 this.setState({
     step: step-1
 });
    }

    //Handle fields change
 handleChange = (input) => e =>
 {
     this.setState({[input]: e.target.value});
 }
    
    
  render() {
      const {step} = this.state;
      const {firstName, lastName, email, occupation, city, dob, sex, qualification} = this.state;
      const values = {firstName, lastName, email, occupation, city, dob, sex, qualification}
     
    switch(step)
    {
case 1:
return(
    <Userdetails
    nextStep={this.nextStep}
   
    handleChange={this.handleChange}
    values={values}
   />
)

case 2: 
return (
    <Personaldetails
    nextStep={this.nextStep}
    previousStep={this. previousStep}
    handleChange={this.handleChange}
    values={values}
   />
)
case 3:
   return (
    <Confirm
    nextStep={this.nextStep}
    previousStep={this. previousStep}
    
    values={values}
    
   />
   )
case 4:
    return( <Success/>)

    }
    
  }
}

export default Userform
