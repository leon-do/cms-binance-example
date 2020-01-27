import React from 'react';
import './App.css';
import CMS from './components/CMS'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <Container className="App">
      <h1> Binance CMS </h1>
      <CMS></CMS>
    </Container>
  );
}

export default App;
