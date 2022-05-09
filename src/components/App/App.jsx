import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { IconButton, Box, Typography, Stack, Paper, Grid, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

function App() {
  return (
    <>
      <Box sx={{
        backgroundColor: '#08468c',
        padding: '2em',
        color: 'white',
        marginBottom: '1em',
      }}>
        <img src="images/headshot.png" width="260" />
        <Typography sx={{ fontSize: "2em" }}>Maggie Jenkins</Typography>
        <IconButton href="https://www.github.com/adairjenkins">
          <SiGithub size="3em" />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/margaret-jenkins-86391a1a2" >
        <SiLinkedin size="3em" />
        </IconButton>
      </Box>
      <ImageList gap={10}>
        <ImageListItem sx={{ margin: 3 }}>
          <img src="images/exposure-log.png" />
          <ImageListItemBar title="Solo Project: Exposure Log" position="below" />
        </ImageListItem>
        <ImageListItem>
          <img src="images/movie-sagas.png" />
          <ImageListItemBar title="Solo Project: Exposure Log" position="below" />
        </ImageListItem>
        <ImageListItem>
          <img src="images/react-gallery.gif" />
          <ImageListItemBar title="Solo Project: Exposure Log" position="below" />
        </ImageListItem>
        <ImageListItem>
          <img src="images/to-do-list.png" />
          <ImageListItemBar title="Solo Project: Exposure Log" position="below" />
        </ImageListItem>
        <ImageListItem>
          <img src="images/jquery-calculator.png" />
          <ImageListItemBar title="Solo Project: Exposure Log" position="below" />
        </ImageListItem>
        <ImageListItem>
          <img src="images/salary-calculator.png" />
          <ImageListItemBar title="Solo Project: Exposure Log" position="below" />
        </ImageListItem>
      </ImageList>

      {/* <Grid container>
        <Grid item>
          <Paper sx={{padding:'1em', width:200}}>
            <img src="images/exposure-log.png" />
          </Paper>
        </Grid>
        <Grid item>
          <Paper sx={{padding:'1em', height:200}}>
            <img src="images/movie-sagas.png" />
          </Paper>
        </Grid>
        <Grid item>
          <Paper sx={{padding:'1em', height:200}}>
            <img src="images/react-gallery.gif" />
          </Paper>
        </Grid>
      </Grid> */}
    </>
  );
}

export default App;
