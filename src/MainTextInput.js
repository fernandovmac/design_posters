import React, { Component } from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Paper, Button } from "@material-ui/core";

class MainTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        { id: 1, title: "Bench Press" },
        { id: 2, title: "Deadlift" }
      ]
      //   title: ""
    };
  }

  //   handleChange = ({ target: { name, value } }) =>
  //     this.setState({ [name]: value });

  //   handleChange = event => {
  //     this.setState({ title: event.target.value });
  //   };
  handleCreate = e => {
    e.preventDefault();
    if (this.state.title) {
      this.setState(({ exercises, title }) => ({
        exercises: [...exercises, { title, id: Date.now() }]
        // title: ""
      }));
    }
  };

  render() {
    const { title, exercises } = this.state;
    return (
      <React.Fragment>
        <ListItem>
          <form>
            <TextField
              name="title"
              label="Exercise"
              value={this.state.title}
              //   onChange={this.handleChange}
              onChange={this.props.handleChange}
              margin="normal"
            ></TextField>
          </form>
        </ListItem>
        <ListItem>
          <List>
            {exercises.map(({ id, title }) => (
              <ListItem key={id}>
                <ListItemText primary={title} />{" "}
              </ListItem>
            ))}
          </List>
        </ListItem>
      </React.Fragment>
    );
  }
}

export default MainTextInput;
