import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const drawerWidth = 240;

const style = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    fontFamily: "Noto Sans JP"
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
    minWidth: "16px",
    minHeight: "18px",
    transition: "all .2s ease-in-out .2s"
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}));

export default function BackgroundColorSection(props) {
  const classes = style(props);

  return (
    <div className="backgroundColorSelector">
      <ListItem>
        <Typography>Background Color</Typography>
      </ListItem>
      <ListItem style={{ maxWidth: "240px" }}>
        <Grid container spacing={1}>
          {props.backgroundColorOptions.map((value, index) => (
            <Grid item xs={1}>
              <ButtonBase
                className={classes.colorButton}
                focusRipple
                id={index}
                key={index}
                onClick={props.handleBackgroundColorChange}
                style={{
                  borderRadius: props.backgroundColor === value ? "6px" : "0px",
                  backgroundColor: value
                }}
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
