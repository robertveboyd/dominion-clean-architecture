import React from "react";
import { actions } from "../redux";
import { useDispatch } from "react-redux";
import { useStyles } from "../styles";
import { withStyles, WithStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

interface Props extends WithStyles<typeof useStyles> {}

const Header: React.FC<Props> = ({ classes }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.Header}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.AppBar_menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => dispatch(actions.toggleSidebar())}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.AppBar_title}>
            Dominion
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.defaultProps = {};

export default withStyles(useStyles)(Header);
