import { Component } from "react";
import "./Admin_navbarstyles.css";
import { menuitems } from "./Admin_menuitems";
import {Link, link} from "react-router-dom";
import logo from '../Assets/Logo/logo.png'

class Navbar extends Component{
    render(){
        return(
        <nav className="NavbarItems" >
            <div className="navbar-logo">
                <img alt="logoimg" src={logo} width="70" height="70"/>
                <b4>LA'VIRA LENS CO.</b4>
            </div>
            <div></div>
            <ul className="nav-menu">
                {menuitems.map((item,index)=>{
                    return(
                        <li key={index}>
                        <Link className={item.cName} to={item.url}>
                            <i classname= ""></i>{item.title}</Link>
                    </li>
                    )
                })}
               {/*<button>Sign In</button>*/}
            </ul>
        </nav>
        )
        
    }
}
export default Navbar;