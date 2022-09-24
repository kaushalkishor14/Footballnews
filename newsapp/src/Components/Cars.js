import React, { Component } from "react";
import CarItem from "./CarItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";

export class Cars extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "8",
    category: "general",
  };
  static propTypes = {
    Country: PropTypes.string,
    pageSize: this.prototype.number,
    // category: this.propType.string,
  };
  constructor() {
    console.log("Hello I am a constructor from News component");
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  //lifecycle method hota ye run tb hoga jb aappka render hoga
  // fetching newsapi
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8b1ec50962b4890a13ffc8b7a22d318&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsData = await data.json();
    console.log(parsData);
    this.setState({
      articles: parsData.articles,
      totalResults: parsData.totalResults,
      loading: false,
    });
  }
  handlePreviousClick = async () => {
    console.log("Previous");

    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=e8b1ec50962b4890a13ffc8b7a22d318&page=${this.state.page -
      1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsData = await data.json();
    console.log(parsData);

    this.setState({
      page: this.state.page - 1,
      articles: parsData.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=e8b1ec50962b4890a13ffc8b7a22d318&page=${this.state.page +
        1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsData = await data.json();
      console.log(parsData);

      this.setState({
        page: this.state.page + 1,
        articles: parsData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 style={{ marginTop: "90px" }}> Top Headlines</h2>
        {this.state.loading && <Spinner />}

        <div className="row my-4">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <CarItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-between ">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default Cars;
//element.title.slice(o,45) is used for set word character
// flex box using in button
// this. kr ke call krte jb hum class ke ander hote hai
// onclick fuction use kr rhe next amd previous button mein pager next page ke liye
