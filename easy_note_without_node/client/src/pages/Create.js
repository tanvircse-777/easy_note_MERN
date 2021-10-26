import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  btn: {
    fontSize: `20px !important`,
  },
  field: {
    marginTop: "20px !important",
    marginBottom: "20px !important",
    display: "block !important",
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [nameError, setNameError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("money");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") setNameError(true);
    else setNameError(false);

    if (details === "") setDetailsError(true);
    else setDetailsError(false);

    if (title && details) {
      fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }
    const postData = async () => {
      e.preventDefault();
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          title,
          details,
          category,
        }),
      });
      const data = await res.json();

      if (data.status == 422 || !data) {
        console.log("invalid");
      } else {
        console.log("succesfully posted data to the server from frontend");
      }
    };
    postData();
  };
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Name"
          color="secondary"
          fullWidth
          required
          variant="outlined"
          error={nameError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          color="secondary"
          fullWidth
          multiline
          rows={4}
          required
          variant="outlined"
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <FormControlLabel
              control={<Radio color="secondary" />}
              value="money"
              label="Money"
            />
            <FormControlLabel
              control={<Radio color="secondary" />}
              value="todo"
              label="Todo"
            />
            <FormControlLabel
              control={<Radio color="secondary" />}
              value="reminders"
              label="Reminders"
            />
            <FormControlLabel
              control={<Radio color="secondary" />}
              value="work"
              label="Work"
            />
          </RadioGroup>
        </FormControl>
        <Button
          className={classes.btn}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
