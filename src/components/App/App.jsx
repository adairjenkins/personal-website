import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { IconButton, Box, Typography, Stack, Paper, Container, Grid, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Info } from '@mui/icons-material';

function App() {
  return (
    <>
      <Box sx={{
        backgroundColor: '#032142',
        padding: '2em',
        paddingLeft: '3em',
        paddingRight: '3em',
        color: 'white',
      }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">

          <Stack direction="row" alignItems="center" spacing={6}>
            <img src="images/headshot.png" width="200" />
            <Box>
              <Typography sx={{ fontSize: "3em" }}>MAGGIE JENKINS</Typography>
              <Typography sx={{ fontSize: "1.3em" }}>Minneapolis, MN • adair.jenkins@gmail.com</Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={3}>
            <IconButton href="https://www.github.com/adairjenkins">
              <SiGithub color="white" size="2em" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/margaret-jenkins-86391a1a2" >
              <SiLinkedin color="white" size="2em" />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{padding:'2em', backgroundColor:'#3D3D3D'}}>
        <ImageList gap={20}>
          <ImageListItem >
            <img src="images/exposure-log-sq.png" />
            <ImageListItemBar title="Solo Project: Exposure Log" position="below"
              actionIcon={
                <IconButton>
                  <Info />
                </IconButton>}
            />
          </ImageListItem>
          <ImageListItem>
            <img src="images/movie-sagas-sq.png" />
            <ImageListItemBar title="Solo Project: Exposure Log" position="below"/>
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
            <img src="images/jquery-calculator-sq.png" />
            <ImageListItemBar title="Solo Project: Exposure Log" position="below" />
          </ImageListItem>
          <ImageListItem>
            <img src="images/salary-calculator-sq.png" />
            <ImageListItemBar title="Solo Project: Exposure Log" position="below" />
          </ImageListItem>
        </ImageList>
      </Box>

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
