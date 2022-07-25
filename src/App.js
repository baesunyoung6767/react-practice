import React, { useState } from 'react';
import './style.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Header() {
  return (
    <header>
      <h1>welcome</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li> html </li>
        <li> css </li>
      </ol>
    </nav>
  );
}

function Article() {
  const [open, setOpen] = useState(false);

  return (
    <article>
      <h2> Welcome! </h2>
      The HyperText Markup Language or HTML is the standard markup language for
      documents designed to be displayed in a web browser. It can be assisted by
      technologies such as Cascading Style Sheets (CSS) and scripting languages
      such as JavaScript. Web browsers receive HTML documents from a web server
      or from local storage and render the documents into multimedia web pages.
      HTML describes the structure of a web page semantically and originally
      included cues for the appearance of the document. HTML elements are the
      building blocks of HTML pages. With HTML constructs, images and other
      objects such as interactive forms may be embedded into the rendered page.
      <br />
      <ButtonGroup>
        <Button
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          CREATE
        </Button>
        <Button variant="outlined"> UPDATE </Button>
        <Button variant="outlined"> DELETE </Button>
      </ButtonGroup>
      <Dialog open={open}>
        <DialogTitle>CREATE</DialogTitle>
        <DialogContent>
          <DialogContentText>Hello create!</DialogContentText>
          <DialogActions>
            <Button variant="outlined"> Create </Button>
          </DialogActions>
          <DialogActions>
            <Button
            variant="outlined"
            onClick={() => {
              setOpen(false);
            }}
          > 
            Cancel 
          </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </article>
  );
}

export default function App() {
  return (
    <Container>
      <Header></Header>
      <Grid container>
        <Grid item xs="2">
          <Nav></Nav>
        </Grid>
        <Grid item xs="10">
          <Article> </Article>
        </Grid>
      </Grid>
    </Container>
  );
}
