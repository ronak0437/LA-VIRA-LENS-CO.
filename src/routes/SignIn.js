import React, { useEffect, useState } from "react";
//import Shape from '../asset/titleabout_us';
import ReactDOM from "react-dom";
import logingraphic from "../Assets/Home/project_home.jpg";
import loginshadow from "../Assets/Aboutus/cardimage.jpg";
import Button from "@mui/material/Button";
import "./signinstyles.css";
import {
  faEnvelope,
  faLock,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@fortawesome/fontawesome-svg-core/styles.css";

import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState([]);
  const [dataemail, setDataemail] = useState([]);
  const [datapassword, setDatapassword] = useState([]);
  const navigation = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    console.log("Hiii");
    const res = await fetch(`http://localhost:8080/api/getAllUser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Response", data.data);
        setData(data.data);
      });
  };

  function checkuser() {
    data.map((e) => {
      if (email === "admin@gmail.com" || password === "1234@abc") {
        //link to admin home
        console.log("//link to admin home");
        navigation("/AdminHome");
      } else if (email === e.email || password === e.password) {
        //link to user home
        console.log("//link to user home");
        navigation("/home");
      }
    });
  }

  return (
    <>
      <div className="container-img " style={{top:0}}>
        
          <img alt="signin" src={logingraphic} width="80%" height="750" />
      

        <div class="container_signin" style={{position:'absolute',marginLeft:550,top:0 ,}}>
          <img
            alt="logoimg"
            src={loginshadow}
            width="600"
            height="550"
            style={{top:0,borderTopLeftRadius:80}}
          />
          <div class="centered">
            <div className="login" style={{ color: "white" }}>
              Login
            </div>
            <div className="logintoyouraccount" style={{ color: "white" }}>
              Login to your Account
            </div>

            <div className="signinemail">
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <FontAwesomeIcon icon={faEnvelope} className="iconemail" />
              </div>
            </div>

            <div className="signinpassword">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="iconpassword">
                <FontAwesomeIcon
                  icon={showPassword ? faUnlock : faLock}
                  onClick={handleShowPassword}
                />
              </div>
            </div>
            <div className="forgotpass">
              {" "}
              <Button size="small" style={{ color: "white" }}>
                Forgot Password?
              </Button>
            </div>
            <div className="signupsubmit">
              <input
                type="submit"
                onClick={checkuser}
                placeholder="Submit"
                style={{backgroundColor:'white',color:'black'}}
              ></input>
            </div>

            <div className="donthaveanacc">
              <Link to="../Signup">
                <Button size="small" style={{ color: "white" }}>
                  Don't have an Account?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
