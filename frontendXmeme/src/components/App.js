import React from "react";
import ImageList from "./ImageList";
import "./App.css";
import axios from "axios";
import meme from "./meme.jpg";

const baseURL = "https://heena-backend-xmeme.herokuapp.com/memes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [], name: "", caption: "", url: "" };
    this.getImages();
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    let data = {
      name: this.state.name,
      caption: this.state.caption,
      url: this.state.url,
    };
    this.onSubmitForm(data);
  };
  getImages = async () => {
    const response = await axios.get(baseURL);
    response.data.sort((a, b) => {
      let one = a.id;
      let two = b.id;
      if (one > two) return -1;
      return 1;
    });
    response.data.splice(100);
    console.log(response.data);
    this.setState({ images: response.data });
  };

  onSubmitForm = async (data) => {
    const response = await axios.post(baseURL, data);
    console.log(data);
    response.data.sort((a, b) => {
      let one = a.id;
      let two = b.id;
      if (one > two) return -1;
      return 1;
    });
    response.data.splice(100);
    console.log(response.data);
    this.setState({ images: response.data });
  };

  render() {
    return (
      // <div className="ui container" style={{ marginTop: "10px" }}>
      //   <h1 className="ui header">Xmeme</h1>
      //   <SubmitForm onSubmitForm={this.onSubmitForm} />
      //   <ImageList images={this.state.images} />
      // </div>
      <div>
        <div className="container">
          <img src={meme} alt="Meme" width="118.7%" height="500px" />
          <div className="text">
            <h1>Meme Stream Page</h1>
          </div>
        </div>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block", textAlign: "left" }}>
            <form onSubmit={this.onFormSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputtext">Name:</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  id="name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="exampleInputtext">Caption:</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Caption"
                  id="caption"
                  value={this.state.caption}
                  onChange={(e) => this.setState({ caption: e.target.value })}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="exampleInputurl">URL:</label>
                <br />
                <input
                  type="url"
                  className="form-control"
                  placeholder="Enter URL"
                  id="url"
                  value={this.state.url}
                  onChange={(e) => this.setState({ url: e.target.value })}
                />
              </div>
              <br />
              <br />
              <div style={{ textAlign: "center" }}>
                <button type="submit" className="btn btn-dark btn-lg">
                  Submit
                </button>
              </div>
              <br />
              <br />
            </form>
          </div>
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}
export default App;
