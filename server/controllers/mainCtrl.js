const axios = require("axios");
const {apiKey} = require('../config')

let articles = [];

const getNews = (req, res, next) => {
  axios
    .get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
    .then(response => {
      articles.push(response.data.articles); //to access specific pokemon do pokemon[0][0].name
      res.json(articles); 
      console.log(response.data.articles[0]);
    })
    .catch(console.log);  
};

module.exports = {

  getNews: getNews

};


// ...response.data.results