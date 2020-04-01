import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import domtoimage from "dom-to-image";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const style = makeStyles(theme => ({
  content: {
    backgroundColor: props => props.mainContentBackgroundColor,
    minWidth: "720px",
    minHeight: "720px",
    left: "240px",
    position: "absolute"
  },

  title: {
    position: "absolute",
    fontFamily: props => props.titleFontFamily,
    color: props => props.textColor,
    left: props => props.titlePosX,
    top: props => props.titlePosY,
    transitionProperty: "top, left",
    transition: " .3s ease-in-out .2s",
    zIndex: 99
  },

  subTitle: {
    position: "absolute",
    fontFamily: props => props.subtitleFontFamily,
    left: props => props.subtitlePosX,
    top: props => props.subtitlePosY,
    color: props => props.textColor,
    transitionProperty: "top, left",
    transition: ".3s ease-in-out .2s",
    zIndex: 99
  },

  image: {
    position: "absolute",
    left: "300px",
    top: "150px",
    height: "200px",
    width: "200px",
    backgroundPosition: "center",
    zIndex: 2
  },

  exportButton: {
    position: "fixed",
    top: "380px",
    left: "560px"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}));

export default function MainContentSection(props) {
  const classes = style(props);

  const exportImage = () => {
    console.log("exporting image?");
    const node = document.getElementById("main-content");
    const scale = 2;

    domtoimage
      .toPng(node, {
        quality: 1,
        height: node.offsetHeight * scale,
        width: node.offsetWidth * scale,
        style: {
          transform: `scale(${scale}) translate(${node.offsetWidth /
            6 /
            scale}px, ${node.offsetHeight / 3.15 / scale}px)`
        }
      })
      .then(function(dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <div>
      <main className={classes.content} id="main-content">
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
      <Fab
        color="primary"
        aria-label="add"
        className={classes.exportButton}
        onClick={exportImage}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
