import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { format } from "date-fns";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
      minHeight: "100vh",
      padding: "20px 20px 20px 40px",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
      padding: "20px",
    },
    menuitem: {
      borderRadius: "10px !important",
      margin: "10px 0 !important",
    },
    active: {
      backgroundColor: "#f4f4f4 !important",
    },

    appbar: {
      width: `calc(100% - ${drawerWidth + 40}px) !important`,
    },
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const menuItem = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div className={classes.root}>
      {/* appbar */}
      <AppBar className={classes.appbar} elevation={1}>
        <Toolbar>
          <Typography className={classes.date}>
            {" "}
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Tanvir</Typography>
          <Avatar className={classes.avatar} />
        </Toolbar>
      </AppBar>
      {/* sidebar */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5">Easy Notes</Typography>
        </div>
        {/* list item */}
        <List>
          {menuItem.map((item) => (
            <ListItem
              className={
                location.pathname == item.path
                  ? `${classes.menuitem} ${classes.active}`
                  : classes.menuitem
              }
              button
              key={item.text}
              onClick={() => history.push(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
