import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: { marginBottom: theme.spacing(3) },
  media: {
    height: "250px",
    [theme.breakpoints.down("sm")]: { height: "150px" },
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My first post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum animi
            exercitationem suscipit voluptatibus facilis eius commodi iure?
            Facilis, ipsa vero eligendi, cumque velit a eius, saepe nihil dicta
            numquam consequuntur. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eum animi exercitationem suscipit voluptatibus
            facilis eius commodi iure? Facilis, ipsa vero eligendi, cumque velit
            a eius, saepe nihil dicta numquam consequuntur.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Post;
