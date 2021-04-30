import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

export const Header = () => (
  <React.Fragment>
    <header>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={4}>
              <Typography variant="h6">CodeTest</Typography>
            </Grid>
            <Grid item xs={4}>
              <form>
                <TextField 
                      id="user-mail" 
                      label="E mail" 
                      type="email" 
                      placeholder="Email" />
                </form>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    </header>
  </React.Fragment>
);
