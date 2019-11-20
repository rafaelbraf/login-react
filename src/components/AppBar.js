import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function AppBarCustom() {
    return(

        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">Login com React e Material Ui</Typography>
          </Toolbar>
        </AppBar>
        
    );
}