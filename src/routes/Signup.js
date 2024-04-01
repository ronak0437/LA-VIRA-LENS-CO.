import React, { Component } from 'react';
import loginshadow from '../Assets/Aboutus/cardimage.jpg';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Shape from '../Assets/Aboutus/titleabout_us.png';
import { faEnvelope, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./signupstyles.css";
import signupgraphic from "../Assets/Home/project_home.jpg";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm_password: "",
      errors: {},
      showPassword: false  
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShowPassword = this.handleShowPassword.bind(this);
  }

  handleShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  
  async handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      const { email, password, confirm_password } = this.state;
      console.log(email, password, confirm_password);

      try {
        const response = await fetch("http://localhost:8080/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            confirm_password,
          }),
        });

        const data = await response.json();

        if(response.status==200)
        {
          console.log(data, "userRegister");
          alert("Thank you you are signup successfully,please login..")

        }
       
       
        // Handle successful response here
      } catch (error) {
        // Handle error response here
        console.error(error);
      }
    }
  }
  

  validateForm() {
    let errors = {
      email: "",
      password: "",
      confirm_password: ""
    };
    let formIsValid = true;

    // Email validation
    if (!this.state.email) {
      formIsValid = false;
      alert ("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      formIsValid = false;
      alert ( "Email is invalid");
    }

    // Password validation
    else if (!this.state.password) {
      formIsValid = false;
    
    alert(  "Password is required")
    } else if (this.state.password.length < 8) {
      formIsValid = false;
       alert("Password must be at least 8 characters long");
    }

    // Confirm password validation
    else if (!this.state.confirm_password) {
      formIsValid = false;
      alert ("Confirm password is required");
    } else if (this.state.password !== this.state.confirm_password) {
      formIsValid = false;
      alert ("Passwords do not match");
    }

    this.setState({ errors });
    return formIsValid;
  }

  render() {
    const { errors, showPassword } = this.state; 
    return (
      <>
       <div className='container'>
       </div>
        <form onSubmit={this.handleSubmit}>
          <div className='container-img'>
            <div className='signupgraphic'>
              <img alt="signin" src={signupgraphic} width="800" height="700" />
            </div>

            <div class="container_signup"  style={{position:'absolute',marginLeft:500}}>

              <img alt="logoimg" src={loginshadow} width="600" height="650" />

              <div class="centered">
                <div>
                <text style={{color:'white',fontSize:32,marginLeft:160}}> Signup</text>
                </div>
              

                <div className='signupemail'  >
                <div className='signup-container'>
                  <input type="text" placeholder='Email'
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                 <div className='emailvalidation'>
                 
                  </div>
                  <FontAwesomeIcon icon={faEnvelope} className='rmailicon' />
                </div>
                </div>
                

                <div className='signuppass'>
                            <div className='signup-container'>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                />
                                <div className='inputspass'>
                                    <div className='passvalidation'>
                               
                                </div>
                                <FontAwesomeIcon
                                    icon={showPassword ? faUnlock : faLock}
                                    onClick={this.handleShowPassword}  // Change to use handleShowPassword function
                                />
                            </div>
                            </div>
                        </div>

                        <div className='signupcpass'>
                            <div className='signup-container'>
                                <input
                                    type="password"
                                    placeholder='Confirm Password'
                                    onChange={(e) => this.setState({ confirm_password: e.target.value })}
                                />
                                 <div className='inputspass'>
                                 <div className='cpassvalidation'>
        
                               </div>
                                <FontAwesomeIcon
                                    icon={showPassword ? faUnlock : faLock}
                                    onClick={this.handleShowPassword}  // Change to use handleShowPassword function
                                />
                                </div>
                            </div>
                        </div>

                            
                        <input type="submit" placeholder='Submit' style={{backgroundColor:'white',color:'black'}}></input>
                        <Link to='../'><Button size="small" style={{color:'white'}}>have an Account?</Button></Link>
                            
                        </div>
                        
                    </div>  

                </div>
                </form>  
            </>
        )
    }
}

//export default Signup;
