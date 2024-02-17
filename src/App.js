import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';



export default class App extends Component {
  PageSize=8;
  apiKey="b913efa2e7244bc0ac9ce61fb8fe095f"


  state={
    progress:0 //Setting the initial progress as 0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress}); // This arrow function will get the value or progress with state.progress
  }

  render() {
    return (
      <>
         <div >
          <Router basename= "/news24_7">
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
            
          />
          <Navbar/>
         
          
          {/* <NewsCard setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.PageSize} country={'in'}  catagory={'sports'} /> */}
            <Switch>
              <Route exact path="/news24_7"><NewsCard setProgress={this.setProgress} apiKey={this.apiKey}   key="general" pageSize={this.PageSize} country={'in'}  catagory={'general'} /></Route> 
              <Route exact path="/sports"><NewsCard setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.PageSize} country={'in'}  catagory={'sports'} /></Route>
              <Route exact path="/business"><NewsCard setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.PageSize} country={'in'}  catagory={'business'} /></Route>
              <Route exact path="/entertainment"><NewsCard setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.PageSize} country={'in'}  catagory={'entertainment'} /></Route>
              <Route exact path="/science"><NewsCard setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.PageSize} country={'in'}  catagory={'science'} /></Route>
              <Route exact path="/health"><NewsCard setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.PageSize} country={'in'}  catagory={'health'} /></Route>
              <Route exact path="/technology"><NewsCard setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.PageSize} country={'in'}  catagory={'technology'} /></Route>
              <Route exact path="/about"><About catagory={'About'}/></Route>

              {/* <Route exact path="/about"><NewsCard setProgress={this.setProgress} apiKey={this.apiKey}  key="about" pageSize={this.PageSize} country={'in'}  catagory={'general'} /></Route> */}
            </Switch>
            {/* <Footer/> */}
          </Router>
          <Footer/>
        </div>
       
      </>
      
    )
  }
}