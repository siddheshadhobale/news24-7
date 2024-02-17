import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <>
           
            {/* className="navbar-brand " */}
            
            <div >
               
            <ul className="nav justify-content-center " style={{backgroundColor: 'rgb(222 208 203)' ,borderTop:'0.5px solid #bababa'}}>
            
                <li className="nav-item my-1 mx-5" >
                    <a className="nav-link active" aria-current="page" href="/">Contact</a>
                </li>
                <li className="nav-item my-1 mx-5">
                    <a className="nav-link" href="/">Locations</a>
                </li>
                <li className="nav-item my-1 mx-5">
                    <a className="nav-link " href="/" >Advertise</a>
                </li>
                <li className="nav-item my-1 mx-5">
                    <a className="nav-link" href="/">Feedback</a>
                </li>
                <li className="nav-item my-1 mx-5">
                    <a className="nav-link " href="/" >Service Terms</a>
                </li>
                <li className="nav-item my-1 mx-5">
                    <a className="nav-link " href="/" >Join Us</a>
                </li>
                
            </ul>
            {/* <hr/> */}
                <div className="nav justify-content-center"  style={{backgroundColor: 'rgb(222 208 203)',borderTop:'0.5px solid #bababa '}}>
                
                    <p style={{color: 'black' ,fontSize:'12px'}} className="justify-content-center my-1 mx-3" >&#169; Copyright News 24/7. All rights reserved 2023 </p>
                </div>
            </div>
            
            
        </>
        
    )
  }
}
