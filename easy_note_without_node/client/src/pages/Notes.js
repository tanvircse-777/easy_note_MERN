import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import NoteCard from "../components/NoteCard";
import "./notes.css";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .then((data) => {
        if (data !== null) setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:3000/notes/" + id, {
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <>
      {!loading ? (
        <>
          <Container sx={{ maxWidth: "100% !important" }}>
            <Masonry
              breakpointCols={breakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {notes.map((note, index) => (
                <NoteCard key={index} note={note} handleDelete={handleDelete} />
              ))}
              {/* array of JSX items */}
            </Masonry>
            <Link style={{ textDecoration: "none" }} to="/create">
              <Button
                sx={{ textDecoration: "none" }}
                variant="outlined"
                color="secondary"
              >
                Add New Note
              </Button>
            </Link>
          </Container>
        </>
      ) : (
        <>
          <Grid container spacing={1}>
            <p style={{ marginLeft: "30px" }}>Loading...</p>
          </Grid>
        </>
      )}
    </>
  );
}
