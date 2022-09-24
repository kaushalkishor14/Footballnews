import React, { Component } from "react";

export class CarItem extends Component {
  render() {
    let { title, description, imageUrl, newUrl, author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://bsmedia.business-standard.com/_media/bs/img/article/2022-05/18/full/1652847247-0983.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-danger">
                By {!author ? "Unknown" : author} On {date}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newUrl}
              traget="_blank"
              className="btn btn-dark"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CarItem;
//traget="_blank"krte hai page new tab mein khulta hai
