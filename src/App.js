import React, { Component } from "react";
import "./App.css";
import LeftDrawer from "./DrawerMenu.js";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import axios from "axios";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Quicksand, sans-serif"]
  }
});

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
        console.log(`${res.statusText} file uploaded`);
      });

    setTimeout(() => {
      this.setState({
        selectedUploadedFileURL: this.state.selectedFileURL
      });
    }, 3000);
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <LeftDrawer
            handleTitleChange={this.handleTitleChange}
            subtitleValue={this.state.subtitle}
            handleSubtitleChange={this.handleSubtitleChange}
            title={this.state.title}
            subTitle={this.state.subtitle}
            uploadedImageUrl={this.state.selectedUploadedFileURL}
            selectedFileURL={this.state.selectedFileURL}
            onUploadChangeHandler={this.onUploadChangeHandler}
            onClickUploadHandler={this.onClickUploadHandler}
          ></LeftDrawer>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
