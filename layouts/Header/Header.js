import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { menus, categories } from "../../data";

const useStyles = makeStyles(theme => ({
  header: {
    position: "sticky",
    top: 0,
    left: 0,
    height: 64,
    width: "100%",
    backgroundColor: "#ddd"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 500
  },
  sub__title: {
    marginLeft: 10,
    paddingLeft: 10,
    fontSize: "1.15rem",
    borderLeft: "1px solid"
  }
}));

const Header = props => {
  const { onOpen, selected } = props;
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onOpen}
          >
            <MenuIcon />
          </IconButton>
          <h1 className={classes.title}>잡동사니</h1>
          {Boolean(selected?.length) && (
            <h6 className={classes.sub__title}>
              {categories[selected[0]]} -{" "}
              {menus[categories[selected[0]]][selected[1]]}
            </h6>
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
