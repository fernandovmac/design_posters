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

const drawerWidth = 240;

const style = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "black"
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
    padding: 6,
    backgroundColor: props => props.mainContentBackgroundColor,
    minWidth: "800px",
    minHeight: "1500px"
  },

  title: {
    position: "absolute",
    color: props => props.textColor,
    left: props => props.titlePosX
  },

  subTitle: {
    position: "absolute",
    left: props => props.subtitlePosX,
    top: "700px",
    color: props => props.textColor
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}));

export default function MainContentSection(props) {
  const classes = style(props);
  const { color, ...other } = props;
  return (
    <div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography
          variant="h1"
          component="h2"
          className={classes.title}
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography variant="h3" gutterBottom className={classes.subTitle}>
          {props.subTitle}
        </Typography>
      </main>
    </div>
  );
}
