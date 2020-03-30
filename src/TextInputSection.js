import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const drawerWidth = 240;

const style = makeStyles(theme => ({
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
  formControl: {
    margin: theme.spacing(2),
    minWidth: 80,
    maxHeight: 30,
    fontWeight: 100,
    fontSize: "12px",
    margin: "0px"
  },
  selectEmpty: {
    marginTop: theme.spacing(3)
  },

  outlined: {
    fontWeight: 100,
    fontSize: "12px",
    margin: "0px"
  },

  fontFamilySelector: {
    fontWeight: 100,
    fontSize: "12px",
    marginBottom: "10px"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}));

export default function TextInputSection(props) {
  const classes = style(props);
  return (
    <div className="textInputSection">
      <ListItem>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="select-font-family" style={{ marginBottom: "100px" }}>
            Font Family
          </InputLabel>
          <Select
            labelId="outlined-select"
            id="select-font-family"
            value={props.fontFamily}
            onChange={props.handleFontChange}
            style={{ fontWeight: 100, fontSize: "12px", margin: "0px" }}
          >
            <MenuItem
              value="Gotu, sans-serif"
              id="Gotu, sans-serif"
              style={{ fontWeight: 100, fontSize: "12px", margin: "0px" }}
            >
              Gotu
            </MenuItem>
            <MenuItem
              value="Playfair Display, serif"
              style={{ fontWeight: 100, fontSize: "12px", margin: "0px" }}
            >
              Playfair Display
            </MenuItem>
            <MenuItem
              value="Poppins, sans-serif"
              style={{ fontWeight: 100, fontSize: "12px", margin: "0px" }}
            >
              Poppins
            </MenuItem>
            <MenuItem
              value="Raleway, sans-serif"
              style={{ fontWeight: 100, fontSize: "12px", margin: "0px" }}
            >
              Raleway
            </MenuItem>
          </Select>
        </FormControl>
      </ListItem>
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
