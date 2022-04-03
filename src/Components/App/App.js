import React from 'react';
import logo from './../../logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import { FindForm } from '../FindForm/FindForm';
import { AppProvider } from '../Context/Provider';

function App() {
  return (
    <AppProvider> 
      <Container maxWidth="lg" className="App">
        <Paper>
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App + Material-UI
          </Typography>
          <FindForm></FindForm>
        </Paper>
      </Container>
    </AppProvider> 
  );
}

export default App;