import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import MainContentSection from "./MainContent.js";
import ImageUploadSection from "./ImageUploadSection.js";
import LayoutThemeSection from "./LayoutThemeSection.js";
import BackgroundColorSection from "./BackgroundColorSection.js";
import TextColorSection from "./TextColorSection.js";
import TextInputSection from "./TextInputSection.js";

const drawerWidth = 240;

const style = theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    fontFamily: "Noto Sans JP"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
});

class LeftDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "",
      backgroundColorOptions: [
        "#e92f71",
        "#1b9591",
        "#5201cf",
        "#005577",
        "#81d8d0",
        "#b2987c",
        "#f9e8e2",
        "#aabcb9",
        "#f58e84",
        "#ae6a9a",
        "#e6d2e0",
        "#49a8de",
        "#ffedea"
      ],
      selectedBackgroundColorButton: null,
      textColor: "",
      filteredTextColorOptions: [
        "#e92f71",
        "#1b9591",
        "#5201cf",
        "#005577",
        "#81d8d0",
        "#b2987c",
        "#f9e8e2",
        "#aabcb9",
        "#f58e84",
        "#ae6a9a",
        "#e6d2e0",
        "#49a8de",
        "#ffedea"
      ],
      unfilteredTextColorOptions: [
        ["#e92f71", "#1b9591", "#5201cf", "#005577"],
        ["#b2987c", "#f9e8e2", "#aabcb9", "#f58e84"],
        ["#aabcb9", "#f58e84", "#ae6a9a", "#e6d2e0", "#49a8de", "#ffedea"]
      ],
      chosenTheme: 0,
      titlePosXOptions: ["0px", "20px", "40px", "60px", "100px", "120px"],
      titlePosX: "0px",
      titlePosYOptions: ["100px", "120px", "180px", "200px", "220px", "240px"],
      titlePosY: "50px",
      titleFontSize: "70px",
      subtitlePosXOptions: [
        "200px",
        "220px",
        "280px",
        "300px",
        "350px",
        "400px"
      ],
      subtitlePosX: "100px",
      subtitlePosYOptions: [
        "100px",
        "200px",
        "300px",
        "350px",
        "400px",
        "420px"
      ],
      subtitlePosY: "100px",
      subTitleFontSize: "40px",
      fontFamily: "Gotu, sans-serif",
      imageSize: "200px"
    };
    this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(
      this
    );
    this.handleTextColorChange = this.handleTextColorChange.bind(this);
    this.handleTitleFontSizeChange = this.handleTitleFontSizeChange.bind(this);
    this.handleSubTitleFontSizeChange = this.handleSubTitleFontSizeChange.bind(
      this
    );
    this.handleImageSizeChange = this.handleImageSizeChange.bind(this);
  }

  handleBackgroundColorChange = event => {
    const id = Number(event.currentTarget.id);

    this.setState({ backgroundColor: this.state.backgroundColorOptions[id] });
    this.setState({ selectedBackgroundColorButton: id });
    console.log(
      `change color background to ${id} and the button is ${this.state.selectedButton}`
    );
    this.setState({
      filteredTextColorOptions: this.state.unfilteredTextColorOptions[
        Math.floor(Math.random() * 3)
      ]
    });
  };

  handleTextColorChange = event => {
    const id = Number(event.currentTarget.id);
    console.log(`change color text to ${id}`);
    this.setState({ textColor: this.state.filteredTextColorOptions[id] });
  };

  handleNextTheme = () => {
    this.setState({ chosenTheme: (this.state.chosenTheme += 1) });
    this.setState({
      titlePosX: this.state.titlePosXOptions[this.state.chosenTheme]
    });
    this.setState({
      titlePosY: this.state.titlePosYOptions[this.state.chosenTheme]
    });
    this.setState({
      subtitlePosX: this.state.subtitlePosXOptions[this.state.chosenTheme]
    });
    this.setState({
      subtitlePosY: this.state.subtitlePosYOptions[this.state.chosenTheme]
    });
  };

  handlePrevTheme = () => {
    this.setState({ chosenTheme: (this.state.chosenTheme -= 1) });
    this.setState({
      titlePosX: this.state.titlePosXOptions[this.state.chosenTheme]
    });
    this.setState({
      titlePosY: this.state.titlePosYOptions[this.state.chosenTheme]
    });
    this.setState({
      subtitlePosX: this.state.subtitlePosXOptions[this.state.chosenTheme]
    });
    this.setState({
      subtitlePosY: this.state.subtitlePosYOptions[this.state.chosenTheme]
    });
  };

  handleFontChange = event => {
    this.setState({ fontFamily: event.target.value });
    console.log(this.state.fontFamily);
  };

  handleTitleFontSizeChange = (event, newValue) => {
    this.setState({ titleFontSize: `${newValue}px` });
  };

  handleSubTitleFontSizeChange = (event, newValue) => {
    this.setState({ subTitleFontSize: `${newValue}px` });
  };

  handleImageSizeChange = (event, newValue) => {
    this.setState({ imageSize: `${newValue}px` });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Color Picker
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <Divider />
          <BackgroundColorSection
            backgroundColorOptions={this.state.backgroundColorOptions}
            handleBackgroundColorChange={this.handleBackgroundColorChange}
            backgroundColor={this.state.backgroundColor}
          ></BackgroundColorSection>
          <LayoutThemeSection
            chosenTheme={this.state.chosenTheme}
            handleNextTheme={this.handleNextTheme}
            handlePrevTheme={this.handlePrevTheme}
          ></LayoutThemeSection>
          <List>
            <TextColorSection
              textColorOptions={this.state.filteredTextColorOptions}
              handleTextColorChange={this.handleTextColorChange}
              textColor={this.state.textColor}
              handleTitleFontSizeChange={this.handleTitleFontSizeChange}
              handleSubTitleFontSizeChange={this.handleSubTitleFontSizeChange}
            ></TextColorSection>
            <TextInputSection
              handleTitleChange={this.props.handleTitleChange}
              title={this.props.title}
              handleSubtitleChange={this.props.handleSubtitleChange}
              subtitleValue={this.props.subtitleValue}
              handleFontChange={this.handleFontChange}
              fontFamily={this.state.fontFamily}
            ></TextInputSection>
            <ImageUploadSection
              onUploadChangeHandler={this.props.onUploadChangeHandler}
              onClickUploadHandler={this.props.onClickUploadHandler}
              handleImageSizeChange={this.handleImageSizeChange}
            ></ImageUploadSection>
          </List>
        </Drawer>
        <MainContentSection
          title={this.props.title}
          subTitle={this.props.subTitle}
          textColor={this.state.textColor}
          titlePosX={this.state.titlePosX}
          titlePosY={this.state.titlePosY}
          titleFontSize={this.state.titleFontSize}
          subtitlePosX={this.state.subtitlePosX}
          subtitlePosY={this.state.subtitlePosY}
          subTitleFontSize={this.state.subTitleFontSize}
          mainContentBackgroundColor={this.state.backgroundColor}
          titleFontFamily={this.state.fontFamily}
          subtitleFontFamily={this.state.fontFamily}
          uploadedImageURL={this.props.uploadedImageUrl}
          selectedFileURL={this.props.selectedFileURL}
          imageSize={this.state.imageSize}
        ></MainContentSection>
      </div>
    );
  }
}

export default withStyles(style)(LeftDrawer);
