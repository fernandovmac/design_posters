import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

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

export default function BackgroundColorSection(props) {
  const classes = style(props);
  return (
    <div className="textColorSection">
      <ListItem>
        <Typography>Text</Typography>
      </ListItem>
      <ListItem>
        <Grid container spacing={1}>
          {props.textColorOptions.map((value, index) => (
            <Grid item xs={1}>
              <ButtonBase
                className={classes.colorButton}
                focusRipple
                id={index}
                key={index}
                onClick={props.handleTextColorChange}
                // size="small"
                style={{ backgroundColor: value }}
                centerRipple="true"
              ></ButtonBase>
            </Grid>
          ))}
        </Grid>
      </ListItem>
      <Divider />
    </div>
  );
}
