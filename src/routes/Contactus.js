import Navbar from '../components/Navbar';
import Shape from '../Assets/Aboutus/titleabout_us.png';
import contactgraphic from '../Assets/Aboutus/contactgraphic.webp';
import contactshadow from '../Assets/Aboutus/contactshadow.png';
import "./Contactusstyles.css";
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser, faMessage } from '@fortawesome/free-solid-svg-icons'

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      First_Name: "",
      Last_Name: "",
      Email: "",
      Phoneno: "",
      Message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { First_Name, Last_Name, Email, Phoneno, Message } = this.state;
    console.log(First_Name, Last_Name, Email, Phoneno, Message);

    const response = await fetch("http://localhost:8080/api/addcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //   Accept: "application/json",
      },
      body: JSON.stringify({
        First_Name,
        Last_Name,
        Email,
        Phoneno,
        Message,
      }),
    });

    const data = await response.json();
    console.log(data, "Contactus");
  }

  render() {
    return (
      <>
        <Navbar />
        <form onSubmit={this.handleSubmit}>
          <div className='container'>
            <div  className='image-header'>
              <img alt="logoimg" src={Shape} width="1300" height="50" />
              <h1 className='image-text'>CONTACT US</h1>
            </div>
          </div>
          <div className='havesomequestions'>
            <h1 className='havesomequestions'>Have Some Questions?</h1>
          </div>
          <div className='container-img md:grid-cols-2'>
            <div className='contactgraphics'>
              <img alt="logoimg" src={contactgraphic} width="400" height="350" />
              <h1 className='getintouch'>Get In Touch</h1>
              <h1 className='blank'>----------------------</h1>
              <h1 className='notext'>
                <FontAwesomeIcon icon={faPhone} className="noicon" />+91 9924285959
              </h1>
              <h1 className='mailtext'>
                <FontAwesomeIcon icon={faEnvelope} className="noicon" />artera2510@gmail.com
              </h1>
            </div>
            <div class="container_contactus">
              <div className='contactshadow'>
                <img alt="logoimg" src={contactshadow} width="450" height="500" />
              </div>
              <div class="centered"> 
                <input
                  type="text"
                  placeholder="First Name"
                  className="c_firstname"
                  onChange={(e) => this.setState({ First_Name: e.target.value })}
                />
                <FontAwesomeIcon icon={faUser} className="c_icons" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="c_lastname"
                  onChange={(e) => this.setState({ Last_Name: e.target.value })}
                />
                <FontAwesomeIcon icon={faUser} className="c_icons" />
                <input
                  type="text"
                  placeholder="Phone"
                  className="c_phone"
                  onChange={(e) => this.setState({ Phoneno: e.target.value })}
                />
                <FontAwesomeIcon icon={faPhone} className="c_icons" />

                <input
                  type="text"
                  placeholder="Email"
                  className="c_email"
                  onChange={(e) => this.setState({ Email: e.target.value })}
                />
                <FontAwesomeIcon icon={faEnvelope} className="c_icons" />
                <input
                  type="text"
                  placeholder="Message"
                  className="c_message"
                  onChange={(e) => this.setState({ Message: e.target.value })}
                />
                <FontAwesomeIcon icon={faMessage} className="c_icons" />
                <div className='c_submit'>
                <input type="submit" value="Submit" className="c_submit" />
                </div>

              </div>  
              </div>
              </div>
              </form>   
        </>
    )
}
}
