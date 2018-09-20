import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import { Form } from './components/Form';

const MovieWrapper = styled.div`
  background: magenta;
  height: 100%;
  width: 100%;
  padding: 10px;
`

class App extends Component {
  render() {
    return (
      <MovieWrapper>
          <Form />
      </MovieWrapper>
    );
  }
}

export default App;
