import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";
import MainContentSection from "./MainContent.js";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import BackgroundColorSection from "./BackgroundColorSection.js";
import TextColorSection from "./TextColorSection.js";
import TextInputSection from "./TextInputSection.js";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const drawerWidth = 240;

const style = theme => ({
  root: {
    display: "flex",
    flexGrow: 1
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
      titlePosXOptions: ["300px", "320px", "340px", "360px", "400px", "420px"],
      titlePosX: "300px",
      titlePosYOptions: ["100px", "120px", "180px", "200px", "220px", "240px"],
      titlePosY: "100px",
      subtitlePosXOptions: [
        "300px",
        "500px",
        "600px",
        "650px",
        "700px",
        "720px"
      ],
      subtitlePosX: "400px",
      subtitlePosYOptions: [
        "100px",
        "200px",
        "300px",
        "350px",
        "400px",
        "420px"
      ],
      subtitlePosY: "100px"
    };
    this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(
      this
    );
    this.handleTextColorChange = this.handleTextColorChange.bind(this);
  }

  handleBackgroundColorChange = event => {
    const id = Number(event.currentTarget.id);
    console.log(`change color background to ${id}`);
    this.setState({ backgroundColor: this.state.backgroundColorOptions[id] });
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
          ></BackgroundColorSection>
          <Divider />
          <ListItem>
            <Typography>Layout Theme</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="p" color="terciary">
              {`Current theme is ${this.state.chosenTheme}`}
            </Typography>
          </ListItem>
          <ListItem>
            <MobileStepper
              variant="dots"
              steps={6}
              position="static"
              activeStep={this.state.chosenTheme}
              className={classes.root}
              nextButton={
                <Button
                  size="small"
                  onClick={this.handleNextTheme}
                  disabled={this.state.chosenTheme === 5}
                >
                  Next
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={this.handlePrevTheme}
                  disabled={this.state.chosenTheme === 0}
                >
                  <KeyboardArrowLeft />
                  Back
                </Button>
              }
            />
          </ListItem>
          <List>
            <Divider />
            <TextColorSection
              textColorOptions={this.state.filteredTextColorOptions}
              handleTextColorChange={this.handleTextColorChange}
            ></TextColorSection>
            <TextInputSection
              handleTitleChange={this.props.handleTitleChange}
              title={this.props.title}
              handleSubtitleChange={this.props.handleSubtitleChange}
              subtitleValue={this.props.subtitleValue}
            ></TextInputSection>
          </List>
        </Drawer>
        <MainContentSection
          title={this.props.title}
          subTitle={this.props.subTitle}
          textColor={this.state.textColor}
          titlePosX={this.state.titlePosX}
          titlePosY={this.state.titlePosY}
          subtitlePosX={this.state.subtitlePosX}
          subtitlePosY={this.state.subtitlePosY}
          mainContentBackgroundColor={this.state.backgroundColor}
        ></MainContentSection>
      </div>
    );
  }
}

export default withStyles(style)(LeftDrawer);
