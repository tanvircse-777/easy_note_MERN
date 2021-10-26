import { DeleteOutline } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { blue, green, pink, yellow } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category == "reminders") {
        return `${yellow[700]} !important`;
      }
      if (note.category == "money") {
        return `${green[700]} !important`;
      }
      if (note.category == "todos") {
        return `${pink[700]} !important`;
      }
      return `${blue[700]} !important`;
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <Card elevation={3}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutline />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography
          sx={{ wordWrap: "break-word" }}
          variant="body2"
          color="textSecondary"
        >
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
