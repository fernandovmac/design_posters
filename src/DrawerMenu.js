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
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import MainContentSection from "./MainContent.js";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const drawerWidth = 240;

const style = theme => ({
  root: {
    display: "flex"
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
      backgroundColorOptions: ["#e92f71", "#1b9591", "#5201cf", "#005577"],
      textColor: "",
      textColorOptions: ["#e92f71", "#1b9591", "#5201cf", "#005577"]
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
  };

  handleTextColorChange = event => {
    const id = Number(event.currentTarget.id);
    console.log(`change color text to ${id}`);
    this.setState({ textColor: this.state.textColorOptions[id] });
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

          <List>
            <ListItem>
              <Typography>Background Color</Typography>
            </ListItem>
            <ListItem style={{ maxWidth: "240px" }}>
              <ButtonGroup>
                {this.state.backgroundColorOptions.map((value, index) => (
                  <Button
                    id={index}
                    key={index}
                    onClick={this.handleBackgroundColorChange}
                    size="medium"
                    style={{ backgroundColor: value }}
                  ></Button>
                ))}
              </ButtonGroup>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
              <Typography>Title</Typography>
            </ListItem>
            <ListItem>
              <ButtonGroup>
                {this.state.textColorOptions.map((value, index) => (
                  <Button
                    id={index}
                    key={index}
                    onClick={this.handleTextColorChange}
                    style={{ backgroundColor: value }}
                  ></Button>
                ))}
                {/* <Button onClick={this.handleTextColorChangeRed}>Red</Button>
                <Button onClick={this.handleTextColorChangeBlue}>Blue</Button>
                <Button onClick={this.handleTextColorChangeYellow}>
                  Yellow
                </Button> */}
              </ButtonGroup>
            </ListItem>
            <ListItem>
              <form>
                <TextField
                  name="title"
                  label="Main title"
                  onChange={this.props.handleChange}
                  margin="normal"
                  value={this.props.value}
                ></TextField>
              </form>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
              <form>
                <TextField
                  name="subtitle"
                  label="sub title"
                  onChange={this.props.handleSubtitleChange}
                  margin="normal"
                  value={this.props.subtitleValue}
                ></TextField>
              </form>
            </ListItem>
          </List>
        </Drawer>
        <MainContentSection
          title={this.props.title}
          subTitle={this.props.subTitle}
          textColor={this.state.textColor}
          titlePosX="500px"
          subtitlePosX="700px"
          mainContentBackgroundColor={this.state.backgroundColor}
        ></MainContentSection>
      </div>
    );
  }
}

export default withStyles(style)(LeftDrawer);
