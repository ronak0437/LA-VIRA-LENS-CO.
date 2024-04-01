import { Component } from "react";
import "./navbarstyles.css";
import { menuitems } from "./menuitems";
import {Link, link} from "react-router-dom";
import logo from '../Assets/Logo/logo.png'

class Navbar extends Component{
    render(){
        return(
        <nav className="NavbarItems" >
            <div className="navbar-logo">
                <img alt="logoimg" src={logo} width="100" height="90"/>
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
            </ul>
        </nav>
        )
        
    }
}
export default Navbar;