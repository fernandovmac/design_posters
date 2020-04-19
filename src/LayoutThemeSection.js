import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";

const drawerWidth = 240;

const style = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  layoutThemeItem: {
    width: `${drawerWidth}px`,
    paddingLeft: "0px",
    paddingRight: "0px"
  },

  themeSelector: {
    background: "none",
    paddingLeft: "0px",
    fontWeight: 100,
    fontSize: "10px"
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}));

export default function LayoutThemeSection(props) {
  const classes = style(props);
  return (
    <div className="containerLayoutThemeSection">
      <ListItem className={classes.layoutThemeItem}>
        <ExpansionPanel style={{ width: "240px" }} defaultExpanded="true">
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Layou Theme </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              <ListItem style={{ paddingLeft: "0px" }}>
                <Typography variant="p">
                  {`Current theme is ${props.chosenTheme}`}
                </Typography>
              </ListItem>
              <ListItem style={{ paddingLeft: "0px" }}>
                <MobileStepper
                  variant="dots"
                  steps={6}
                  position="static"
                  activeStep={props.chosenTheme}
                  className={classes.themeSelector}
                  nextButton={
                    <Button
                      size="small"
                      onClick={props.handleNextTheme}
                      disabled={props.chosenTheme === 5}
                      className={classes.themeSelector}
                    >
                      Next
                      <KeyboardArrowRight />
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={props.handlePrevTheme}
                      disabled={props.chosenTheme === 0}
                      className={classes.themeSelector}
                    >
                      <KeyboardArrowLeft />
                      Back
                    </Button>
                  }
                />
              </ListItem>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>
    </div>
  );
}
