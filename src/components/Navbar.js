import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
     
  render() {
    
    return (
      <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News 24/7 </Link>

    
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 " id="navItemslist" >
      
      <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
          {/* <Link className="nav-link" to="/sportsTab">Sports</Link> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Follow 
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="https://www.facebook.com">Facebook</a></li>
            <li><a className="dropdown-item" href="https://www.youtube.com">Youtube</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            <li><a className="dropdown-item" href="https://www.twitter.com">Twitter</a></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Link</a>
        </li> */}
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </>
    )
  }
}
