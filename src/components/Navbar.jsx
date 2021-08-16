import { Avatar, Badge } from "@material-ui/core";
import { AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLarge: {
    display: "none",
    [theme.breakpoints.up("sm")]: { display: "block" },
  },
  logoSmall: {
    display: "block",
    [theme.breakpoints.up("sm")]: { display: "none" },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "80%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: { display: "none" },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: { display: "none" },
  },
  icons: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLarge}>
          Hi Suso
        </Typography>
        <Typography variant="h6" className={classes.logoSmall}>
          Hi
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={23} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={23} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
