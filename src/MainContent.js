import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const style = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: 6,
    backgroundColor: props => props.mainContentBackgroundColor,
    minWidth: "800px",
    minHeight: "1500px"
  },

  title: {
    position: "absolute",
    fontFamily: props => props.titleFontFamily,
    color: props => props.textColor,
    left: props => props.titlePosX,
    top: props => props.titlePosY,
    transition: "all .3s ease-in-out .2s",
    zIndex: 99
  },

  subTitle: {
    position: "absolute",
    fontFamily: props => props.subtitleFontFamily,
    left: props => props.subtitlePosX,
    top: props => props.subtitlePosY,
    color: props => props.textColor,
    transition: "all .3s ease-in-out .2s",
    zIndex: 99
  },

  image: {
    position: "absolute",
    left: "500px",
    top: "150px",
    height: "200px",
    width: "200px",
    backgroundPosition: "center",
    zIndex: 2
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}));

export default function MainContentSection(props) {
  const classes = style(props);
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
        <Typography variant="h4" gutterBottom className={classes.subTitle}>
          {props.subTitle}
        </Typography>
        <div className="uploadedImageContainer">
          {props.uploadedImageURL === "" ? null : (
            <div className={classes.image}>
              <img
                style={{ height: "200px" }}
                src={require(`./${props.selectedFileURL}`)}
                alt=""
                // src={require("/Users/fernandomacedo/Documents/Repos/react-colorpicker/colorpicker-app/src/Residence_Permit-FRONT.jpg")}
              ></img>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
