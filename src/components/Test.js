import React, { Component } from 'react'

export default class Test extends Component {
    constructor()
    {
        console.log("Constructor running...");
    }
    componentDidMount()
    {
        console.log("componentDidMount running...");
    }
  render() {
    console.log("Rendering...");
    return (
      <div>
         
      </div>
    )
  }
}
