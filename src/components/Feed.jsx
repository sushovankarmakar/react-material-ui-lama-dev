import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  post: {},
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post className={classes.post} />
      <Post className={classes.post} />
      <Post className={classes.post} />
      <Post className={classes.post} />
      <Post className={classes.post} />
      <Post className={classes.post} />
    </Container>
  );
};

export default Feed;
