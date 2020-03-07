import React from "react";
import { useStyles } from "../styles";
import { withStyles, WithStyles } from "@material-ui/styles";
import CardList from "./CardList";
import RandomizeButton from "./RandomizeButton";

interface Props extends WithStyles<typeof useStyles> {}

const Main: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.Main}>
      <CardList />
      <RandomizeButton />
    </div>
  );
};

Main.defaultProps = {};

export default withStyles(useStyles)(Main);
