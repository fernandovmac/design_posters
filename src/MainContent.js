import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
    left: props => props.titlePosX,
    top: props => props.titlePosY,
    transition: "all .3s ease-in-out .2s"
  },

  subTitle: {
    position: "absolute",
    left: props => props.subtitlePosX,
    top: props => props.subtitlePosY,
    color: props => props.textColor,
    transition: "all .7s ease-in-out .2s"
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
