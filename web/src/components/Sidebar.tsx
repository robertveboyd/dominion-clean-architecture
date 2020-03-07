import React from "react";
import { expansions as expansionList } from "core";
import { actions, useTypedSelector } from "../redux";
import { useDispatch } from "react-redux";
import { useStyles } from "../styles";
import { withStyles, WithStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";

interface Props extends WithStyles<typeof useStyles> {}

const Sidebar: React.FC<Props> = ({ classes }) => {
  const expansions = useTypedSelector(state => state.expansions);
  const sidebar = useTypedSelector(state => state.view.showSidebar);
  const dispatch = useDispatch();
  return (
    <Drawer open={sidebar} onClose={() => dispatch(actions.toggleSidebar())}>
      <div className={classes.Drawer__list}>
        <List>
          {expansionList.map((expansion, index) => (
            <ListItem
              button
              key={expansion}
              onClick={() => dispatch(actions.toggleExpansion(expansion))}
            >
              <ListItemIcon>
                <img
                  className={classes.Icon}
                  src={`/assets/images/icons/${expansion}.svg`}
                  alt={expansion}
                  key={index}
                  onClick={() => dispatch(actions.toggleExpansion(expansion))}
                />
              </ListItemIcon>
              <ListItemText primary={expansion} />
              <ListItemSecondaryAction>
                <Switch
                  key={index}
                  edge="end"
                  onChange={() => dispatch(actions.toggleExpansion(expansion))}
                  checked={expansions.includes(expansion)}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

Sidebar.defaultProps = {};

export default withStyles(useStyles)(Sidebar);
