import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

const useStyles = makeStyles((theme) => ({
  rightbar: {
    [theme.breakpoints.down("sm")]: { display: "none" },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.rightbar}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
};

export default App;
