import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AvatarGroup } from "@material-ui/lab";

const itemData = [
  {
    img: "https://material-ui.com/static/images/image-list/breakfast.jpg",
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: "https://material-ui.com/static/images/image-list/burgers.jpg",
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: "https://material-ui.com/static/images/image-list/camera.jpg",
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: "https://material-ui.com/static/images/image-list/morning.jpg",
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: "https://material-ui.com/static/images/image-list/hats.jpg",
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: "https://material-ui.com/static/images/image-list/vegetables.jpg",
    title: "Image",
    author: "author",
    cols: 2,
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
  divider: { marginBottom: theme.spacing(1) },
}));

const Rightbar = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Typography className={classes.title} gutterBottom>
          Online Friends
        </Typography>
        <AvatarGroup className={classes.avatarGroup} max={8}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar alt="Remy Sharp" src="" />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </div>
      <div className={classes.item}>
        <Typography className={classes.title} gutterBottom>
          Gallery
        </Typography>
        <ImageList rowHeight={100} className={classes.imageList} cols={2}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className={classes.item}>
        <Typography className={classes.title} gutterBottom>
          Categories
        </Typography>
        <Typography className={classes.root}>
          <Link
            className={classes.link}
            href="#"
            onClick={preventDefault}
            variant="body2"
          >
            Sport
          </Link>
          <Link
            className={classes.link}
            href="#"
            onClick={preventDefault}
            variant="body2"
          >
            Food
          </Link>
          <Link
            className={classes.link}
            href="#"
            onClick={preventDefault}
            variant="body2"
          >
            Movie
          </Link>
          <Divider className={classes.divider} flexItem />
          <Link
            className={classes.link}
            href="#"
            onClick={preventDefault}
            variant="body2"
          >
            Song
          </Link>
          <Link
            className={classes.link}
            href="#"
            onClick={preventDefault}
            variant="body2"
          >
            Story
          </Link>
        </Typography>
      </div>
    </Container>
  );
};

export default Rightbar;
