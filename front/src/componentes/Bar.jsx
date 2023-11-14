import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

 const Bar = ({funcPeso, funcNac, funcAltura, funcNormal}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={funcNormal}>Ver todos</Button>
          <Button color="inherit" onClick={funcNac}>Cargar por nacionalidad</Button>
          <Button color="inherit" onClick={funcPeso}>Por peso</Button>
          <Button color="inherit" onClick={funcAltura}>Por altura</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Bar