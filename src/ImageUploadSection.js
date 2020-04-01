import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const style = makeStyles(theme => ({
  root: {
    fontFamily: "Noto Sans JP"
  },
  content: {
    flexGrow: 1,
    padding: 6,
    backgroundColor: props => props.mainContentBackgroundColor,
    minWidth: "800px",
    minHeight: "1500px"
  },
  input: {
    display: "none"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}));

export default function ImageUploadSection(props) {
  const classes = style(props);

  return (
    <div className="containerImageUploadSection">
      <ListItem>
        <Typography>Image Upload</Typography>
      </ListItem>
      <ListItem>
        <form method="post" action="#" id="#">
          <div className="form-group files">
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            <input
              type="file"
              accept="image/*"
              className={classes.input}
              multiple=""
              id="icon-button-file"
              onChange={props.onUploadChangeHandler}
            />
            <Button
              variant="contained"
              color="primary"
              component="span"
              onClick={props.onClickUploadHandler}
              size="small"
            >
              Upload
            </Button>
          </div>
        </form>
      </ListItem>
      <Divider />
    </div>
  );
}
