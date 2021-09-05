import { Drawer } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import TreeView from "@material-ui/lab/TreeView";
import { makeStyles } from "@material-ui/styles";
import React, { useMemo } from "react";
import { CustomTreeItem } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 400
  }
}));

const Sidebar = props => {
  const { open, onClose, menus, onClick } = props;
  const classes = useStyles();

  const keys = useMemo(() => Object.keys(menus), [menus]);

  return (
    <Drawer anchor={"left"} open={open} onClose={onClose}>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
      >
        {keys.map((mainText, mainKey) => {
          const inner = Object.keys(menus[mainText]);

          return (
            <CustomTreeItem
              key={mainKey}
              nodeId={`${mainText} ${mainKey}`}
              labelText={mainText}
              name={mainText}
              color="#3c8039"
              bgColor="#e6f4ea"
            >
              {inner.map((date, dateKey) => {
                return (
                  <CustomTreeItem
                    key={dateKey}
                    nodeId={`${mainText} ${date} ${dateKey}`}
                    labelText={menus[mainText][date]}
                    name={mainText}
                    color="#3c8039"
                    bgColor="#e6f4ea"
                    onClick={e => {
                      onClick([mainKey, dateKey]);
                      onClose();
                    }}
                  ></CustomTreeItem>
                );
              })}
            </CustomTreeItem>
          );
        })}
      </TreeView>
    </Drawer>
  );
};

export default Sidebar;
