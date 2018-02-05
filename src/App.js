import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Save from "./SaveComponent/SaveComponent";
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newsArticles: [],
      savedArticles: [],
    }
    this.deleteArticle = this.deleteArticle.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
  }
  componentDidMount(){
    axios.get("/api/getNews").then(response => {
      this.setState({ newsArticles: response.data[0] })
      console.log(response.data[0]);
      console.log(response.data);
  })}

  saveArticle(articleObj){
    let tempArr = this.state.savedArticles
    tempArr.push(articleObj);
    this.setState({
      savedArticles : tempArr
    })
  }


  deleteArticle(i){
    let deleteArr = this.state.savedArticles;
    deleteArr.splice(i,1);
    this.setState({
      savedArticles: deleteArr
    })
  }


  render() {
    console.log(this.state.savedArticles)
  const  renderNews = this.state.newsArticles.map((articleObj,i) => {
  return <div className = "mainDiv"> 
      <div className="articleDiv" key = {i}>
      <h1 className="titles">{articleObj.title}</h1>
        <p className="descriptions">{articleObj.description}</p>
        <p>{articleObj.author}</p>
          <button onClick={() => this.saveArticle(articleObj)}>Save Me Fo Later</button>
          <button className=""> <a href={articleObj.url}>Click Me</a></button>
        </div>
        {console.log(articleObj.url)}
  </div>
  
  }
  );

  const  renderSaved = this.state.savedArticles.map((articleObj,i) => {
    return <div className = "mainDivSave"> 
        <div className="articleDiv" key = {i}>
        <h1 className="titles">{articleObj.title}</h1>
          <p className="descriptions">{articleObj.description}</p>
          <p>{articleObj.author}</p>
            <button onClick={() => this.deleteArticle(i)}>Delete Me</button>
            <button className=""> <a href={articleObj.url}>Click Me</a></button>
          </div>
          {console.log(articleObj.url)}
    </div>
    
    }
    );


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">NewsNow</h1>
        </header>
        <div className = "articlesDisplay">
          {this.state.newsArticles.length > 0 && renderNews}
        </div>  
        <div className ="articlesSaved">
          {this.state.savedArticles.length > 0 && renderSaved}
        </div>
      </div>
      
    );
  }
}

export default App;