import React, { Component } from "react";
import "../styles/news.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    let ourDate = new Date();

    //Change it so that it is 7 days in the past.
    let pastDate = ourDate.getDate() - 7;
    ourDate.setDate(pastDate);
    let formatted_date = ourDate.getFullYear() + "-" + (ourDate.getMonth() + 1) + "-" + ourDate.getDate()
    let token = 'b99c449398942dcd191ea9ada1869818'
    let query = 'climate'
    fetch(
      `https://gnews.io/api/v4/search?token=${token}&q=${query}&lang=en`
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          articles: myJson.articles
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="News">
        {this.state.articles.map((item, index) => {
          if (!(item.image == null) && !(item.image === "null")) {
            return (
              <div className="news-wrapper">
                <h2>{item.title}</h2>
                <b className="news-author">{item.source.name}</b>
                <div className="img-wrapper">
                  <img
                    className="news-image"
                    src={item.image}
                    alt="Unavailable"
                  />
                </div>
                <p className="news-content">
                  {item.description}
                  <br></br>
                  <a className="news-url" href={item.url}>
                    Read More
                  </a>
                  <br></br>
                </p>
              </div>
            );
          }
          return <div></div>;
        })}
      </div>
    );
  }
}

export default News;
