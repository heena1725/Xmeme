import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, caption, url } = this.props.image;
    return (
      <div className="card mb-3">
        <img className="card-img-top" src={url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">#{caption}</p>
        </div>
      </div>
    );
  }
}
