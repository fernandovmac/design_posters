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
import Slider from "@material-ui/core/Slider";
import List from "@material-ui/core/List";

const drawerWidth = 240;

const style = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  textColorItem: {
    minWidth: `${drawerWidth}px`,
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
    borderRadius: "2px",
    transition: "all .2s ease-in-out .2s"
  },

  sliderTitle: {
    fontSize: "12px"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}));

export default function BackgroundColorSection(props) {
  const classes = style(props);

  function titleSliderValueText(value) {
    return `${value}`;
  }

  function subtitleSliderValueText(value) {
    return `${value}`;
  }

  return (
    <div className="textColorSection">
      <ListItem className={classes.textColorItem}>
        <ExpansionPanel className={classes.textColorItem}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Text Color</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ paddingLeft: "0px" }}>
            <List className={classes.textColorItem}>
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
                        style={{
                          borderRadius:
                            props.textColor === value ? "6px" : "0px",
                          backgroundColor: value,
                          marginRight: "3px"
                        }}
                        centerRipple="true"
                      ></ButtonBase>
                    </Grid>
                  ))}
                </Grid>
              </ListItem>
              <ListItem>
                <Typography
                  id="discrete-slider"
                  gutterBottom
                  className={classes.sliderTitle}
                >
                  Title size
                </Typography>
                <Slider
                  defaultValue={70}
                  getAriaValueText={titleSliderValueText}
                  onChange={props.handleTitleFontSizeChange}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={50}
                  max={120}
                />
              </ListItem>
              <ListItem>
                <Typography
                  id="discrete-slider"
                  gutterBottom
                  className={classes.sliderTitle}
                >
                  Sub size
                </Typography>
                <Slider
                  defaultValue={40}
                  getAriaValueText={subtitleSliderValueText}
                  onChange={props.handleSubTitleFontSizeChange}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={30}
                  max={80}
                />
              </ListItem>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>
    </div>
  );
}
