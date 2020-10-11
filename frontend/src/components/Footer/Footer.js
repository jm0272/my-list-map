import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";


import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';

import "./Footer.scss";

const useStyles = makeStyles({
  root: {
    // width: 500,
    width: "100%",
    position: "fixed",
    bottom: 0,
    background: "#B2CCFF",
  },
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="story"
        value="story"
        component={Link}
        to={"/"}
        icon={<ListIcon />}
      />
      <BottomNavigationAction
        label="map"
        value="map"
        component={Link}
        to={"/map"}
        icon={<MapIcon />}
      />
    </BottomNavigation>
  );
};

export default Footer;
