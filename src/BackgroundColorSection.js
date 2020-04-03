import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const drawerWidth = 240;

const style = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    width: "100%"
  },
  backgroundColorItem: {
    width: `${drawerWidth}px`,
    paddingLeft: "0px",
    paddingRight: "0px"
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
      <ListItem className={classes.backgroundColorItem}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Background Color
            </Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
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
                      borderRadius:
                        props.backgroundColor === value ? "6px" : "0px",
                      backgroundColor: value
                    }}
                    centerRipple="true"
                  ></ButtonBase>
                </Grid>
              ))}
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>
    </div>
  );
}
