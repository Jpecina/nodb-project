import React, { Component } from "react";
import App from "../App"

class Save extends Component {
    constructor(){
    super();
    this.state = {
        savedArr:[]
    }
}


    render (){
        return (
        <div>
        <button>Save Article</button>
        </div>
        )
    }
}



export default Save;