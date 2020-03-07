import React from "react";
import { actions, useTypedSelector } from "../redux";
import { useDispatch } from "react-redux";
import { useStyles } from "../styles";
import { withStyles, WithStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShuffleIcon from "@material-ui/icons/Shuffle";

interface Props extends WithStyles<typeof useStyles> {}

const RandomizeButton: React.FC<Props> = ({ classes }) => {
  const isRandomizing = useTypedSelector(state => state.view.isRandomizing);
  const hasInitialDeck = useTypedSelector(state => state.view.hasInitialDeck);
  const dispatch = useDispatch();
  if (!hasInitialDeck) {
    dispatch(actions.initializeDeck());
  }
  return (
    <div className={classes.Container}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(actions.randomizeDeck())}
        disabled={isRandomizing.includes(true)}
      >
        <Typography variant="h6">Randomize</Typography>
        <ShuffleIcon className={classes.RandomIcon} />
      </Button>
    </div>
  );
};

RandomizeButton.defaultProps = {};

export default withStyles(useStyles)(RandomizeButton);
