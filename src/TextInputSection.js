import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

const drawerWidth = 240;

const style = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1
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
  colorButton: {
    // padding: "10px",
    // margin: "10px",
    minWidth: "16px",
    // maxWidth: "8px",
    minHeight: "18px",
    borderRadius: "2px"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}));

export default function TextInputSection(props) {
  const classes = style(props);
  return (
    <div className="textInputSection">
      <ListItem>
        <form>
          <TextField
            name="title"
            label="Main title"
            onChange={props.handleTitleChange}
            margin="normal"
            value={props.title}
          ></TextField>
        </form>
      </ListItem>
      <Divider />
      <ListItem>
        <form>
          <TextField
            name="subtitle"
            label="sub title"
            onChange={props.handleSubtitleChange}
            margin="normal"
            value={props.subtitleValue}
          ></TextField>
        </form>
      </ListItem>
    </div>
  );
}
