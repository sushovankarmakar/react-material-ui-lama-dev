import {
  Container,
  MenuItem,
  Fab,
  Modal,
  Tooltip,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Snackbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";

const visibilities = [
  {
    value: "Public",
    label: "Public",
  },
  {
    value: "Private",
    label: "Private",
  },
  {
    value: "Unlisted",
    label: "Unlisted",
  },
];

const commentVisibilities = [
  {
    value: "Everybody",
    label: "Everybody",
    isDisabled: false,
  },
  {
    value: "My Friends",
    label: "My Friends",
    isDisabled: false,
  },
  {
    value: "NoBody",
    label: "NoBody",
    isDisabled: false,
  },
  {
    value: "Custom",
    label: "Custom (Premium)",
    isDisabled: true,
  },
];

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vh",
      height: "100vh",
    },
  },
  textField: {
    width: "100%",
  },
  button: {
    marginRight: 20,
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(2),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [visibility, setVisibility] = useState("Public");
  const [commentVisibility, setCommentVisibility] = useState("Everybody");

  const handleVisibility = (event) => {
    setVisibility(event.target.value);
  };

  const handleCommentVisibility = (event) => {
    setCommentVisibility(event.target.value);
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCreate = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} noValidate autoComplete="off">
            <div className={classes.item}>
              <TextField
                className={classes.textField}
                id="standard-basic"
                label="Title"
                size="small"
              />
            </div>
            <div className={classes.item}>
              <TextField
                className={classes.textField}
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Tell your story..."
                variant="outlined"
                label="Description"
                size="small"
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-select-visibility"
                select
                value={visibility}
                onChange={handleVisibility}
                label="Visibility"
                helperText="Please select your visibility"
              >
                {visibilities.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={classes.item}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Who can comment ?</FormLabel>
                <RadioGroup
                  aria-label="Comment Visibility"
                  name="commentVisibility"
                  value={commentVisibility}
                  onChange={handleCommentVisibility}
                >
                  {commentVisibilities.map((option) => (
                    <FormControlLabel
                      value={option.value}
                      control={<Radio size="small" />}
                      label={option.label}
                      disabled={option.isDisabled}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <div className={classes.item}>
              <Button
                className={classes.button}
                color="primary"
                variant="outlined"
                onClick={handleCreate}
              >
                Create
              </Button>
              <Button
                className={classes.button}
                color="secondary"
                variant="outlined"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          You have create your post!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
