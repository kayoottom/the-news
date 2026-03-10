import React from "react";
import logoImg from"../../assets/images/logo.png"
import "./styles.css";



export class Navbar extends React.Component {
  render() {
    return (
        <header>
          <nav id='nav-bar'>
            <div className='nav-brand' >
              <img src={logoImg} width="80" alt="Logo" />

              <h1>The News</h1>
            </div>



            <ul className='nav-list'>
             <li><a href= "#">Home</a></li>
              <li><a href= "#">Trending</a></li>
              <li><a href= "#">Categories</a></li>
              <li><a href= "#">About us</a></li>



            </ul>
          </nav>
        </header>
    )
  } 

}





