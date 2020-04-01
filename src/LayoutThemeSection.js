import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";

const style = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1
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
      <ListItem>
        <Typography>Layout Theme</Typography>
      </ListItem>
      <ListItem>
        <Typography variant="p" color="terciary">
          {`Current theme is ${props.chosenTheme}`}
        </Typography>
      </ListItem>
      <ListItem>
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
      <Divider />
    </div>
  );
}
