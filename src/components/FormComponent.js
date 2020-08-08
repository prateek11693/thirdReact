import React, { Component } from "react";

const url = "http://localhost:8900/artists";

class FormComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      cover: "",
      bio: "",
      genre: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    console.log(this.state);
    var random = Math.floor(Math.random() * 1000);
    var data = {
      id: random,
      name: this.state.name,
      cover: this.state.cover,
      bio: this.state.bio,
      genre: this.state.genre,
    };

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this.props.history.push("/"));
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">Add Artist</div>
            <div className="panel-body">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Cover</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.cover}
                  name="cover"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.bio}
                  name="bio"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Genre</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.genre}
                  name="genre"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-success"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default FormComponent;
