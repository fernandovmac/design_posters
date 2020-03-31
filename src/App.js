import React, { Component } from "react";
import "./App.css";
import LeftDrawer from "./DrawerMenu.js";
import List from "@material-ui/core/List";
import MainTextInput from "./MainTextInput.js";
import Typography from "@material-ui/core/Typography";
import MainContentSection from "./MainContent.js";
import { Button } from "@material-ui/core";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "title",
      subtitle: "subtitle",
      selectedFile: null,
      selectedFileURL: "",
      selectedUploadedFileURL: ""
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleSubtitleChange(e) {
    this.setState({
      subtitle: e.target.value
    });
  }

  onUploadChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      selectedFileURL: event.target.files[0].name,
      loaded: 0
    });
  };

  onClickUploadHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:8000/upload", data, {
        // receive two parameter endpoint url ,form data
      })
      .then(res => {
        // then print response status
        console.log(res.statusText);
      });

    setTimeout(() => {
      this.setState({
        selectedUploadedFileURL: this.state.selectedFileURL
      });
    }, 3000);
  };

  render() {
    return (
      <div>
        <LeftDrawer
          handleTitleChange={this.handleTitleChange}
          subtitleValue={this.state.subtitle}
          handleSubtitleChange={this.handleSubtitleChange}
          title={this.state.title}
          subTitle={this.state.subtitle}
          uploadedImageUrl={this.state.selectedUploadedFileURL}
          selectedFileURL={this.state.selectedFileURL}
        ></LeftDrawer>
        <div
          className="container"
          style={{ position: "absolute", left: "300px" }}
        >
          <div className="row">
            <div className="col-md-6">
              <form method="post" action="#" id="#">
                <div className="form-group files">
                  <label>Upload Your File </label>
                  <input
                    type="file"
                    className="form-control"
                    multiple=""
                    onChange={this.onUploadChangeHandler}
                  />
                  <button
                    type="button"
                    class="btn btn-success btn-block"
                    onClick={this.onClickUploadHandler}
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
            {/* <div className="uploadedImageContainer">
              {this.state.selectedUploadedFileURL === "" ? null : (
                <div className="displayUploadedImage">
                  <img
                    style={{
                      minHeight: "200px",
                      minWidth: "200px"
                    }}
                    src={require(`./${this.state.selectedFileURL}`)}
                    // src={require("/Users/fernandomacedo/Documents/Repos/react-colorpicker/colorpicker-app/src/Residence_Permit-FRONT.jpg")}
                  ></img>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
