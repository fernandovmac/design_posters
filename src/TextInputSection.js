import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const drawerWidth = 240;

const style = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },

  textInputItem: {
    width: `${drawerWidth}px`,
    paddingLeft: "0px",
    paddingRight: "0px"
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
    minWidth: 80,
    maxHeight: "100px",
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
      <ListItem className={classes.textInputItem}>
        <ExpansionPanel defaultExpanded="true">
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Text Input</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <List>
              <ListItem>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    id="select-font-family"
                    style={{ marginBottom: "100px" }}
                  >
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
                      style={{
                        fontWeight: 100,
                        fontSize: "12px",
                        margin: "0px"
                      }}
                    >
                      Gotu
                    </MenuItem>
                    <MenuItem
                      value="Playfair Display, serif"
                      style={{
                        fontWeight: 100,
                        fontSize: "12px",
                        margin: "0px"
                      }}
                    >
                      Playfair Display
                    </MenuItem>
                    <MenuItem
                      value="Poppins, sans-serif"
                      style={{
                        fontWeight: 100,
                        fontSize: "12px",
                        margin: "0px"
                      }}
                    >
                      Poppins
                    </MenuItem>
                    <MenuItem
                      value="Raleway, sans-serif"
                      style={{
                        fontWeight: 100,
                        fontSize: "12px",
                        margin: "0px"
                      }}
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
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>
    </div>
  );
}
