import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  defaultImg =
    "https://bsmedia.business-standard.com/_media/bs/img/article/2022-07/12/full/1657623691-7117.jpg";

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      pageNumber: 1,
      pageSize: 8,
      totalResults: 0
    };

    document.title = `NewsMoncky - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  async componentDidMount() {
    this.props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.state.pageSize}`;
    this.setState({
        loading: true,
    });
    this.props.setProgress(40);
    let newsData = await fetch(url);
    this.props.setProgress(70);
    let parsedData = await newsData.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    console.log(parsedData.articles);
    this.props.setProgress(100);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  fetchMoreData = async() => {
    this.props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.pageNumber + 1}&pageSize=${this.state.pageSize}`;
      this.props.setProgress(40);
      let newsData = await fetch(url);
      this.props.setProgress(70);
      let parsedData = await newsData.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        pageNumber: this.state.pageNumber + 1
      });
      this.props.setProgress(100);
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">{`NewsMonkey - Top ${this.capitalizeFirstLetter(
          this.props.category
        )} Headlines`}</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {this.state.articles.map((element) => {
              return (
                <div key={element.url ? element.url : ""}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={
                      element.urlToImage ? element.urlToImage : this.defaultImg
                    }
                    newsUrl={element.url ? element.url : ""}
                    source={element.source.name}
                    date={element.publishedAt}
                    author={element.author ? element.author : "Unknown"}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
