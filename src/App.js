import React, { Component } from "react";
import "./App.css";
import LeftDrawer from "./DrawerMenu.js";
import List from "@material-ui/core/List";
import MainTextInput from "./MainTextInput.js";
import Typography from "@material-ui/core/Typography";
import MainContentSection from "./MainContent.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subtitle: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleSubtitleChange(e) {
    this.setState({
      subtitle: e.target.value
    });
  }
  render() {
    return (
      <div>
        <LeftDrawer
          handleChange={this.handleChange}
          value={this.state.title}
          subtitleValue={this.state.subtitle}
          handleSubtitleChange={this.handleSubtitleChange}
          title={this.state.title}
          subTitle={this.state.subtitle}
        ></LeftDrawer>
      </div>
    );
  }
}

export default App;
