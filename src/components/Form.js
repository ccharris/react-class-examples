import React, { Component, Fragment } from "react";
import FormResults from "./FormResults";
import styled from 'styled-components';
import { key } from '../keys';

const Search = styled.input`
  width: 250px;
  margin: 10px 0 10px 0;
  color: magenta;
  padding: 10px;
`

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  }; 

  handleKeyUp = (e) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${e.target.value}&page=1&include_adult=false`
    )
      .then(res => {
        if (res.status !== 200) {
          console.log("Error: " + res.status);
          return;
        }
        res.json().then(data => {
          this.setState({ results: data.results });
        });
      })
      .catch(err => {
        console.log("Fetch Error: ", err);
      });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <Search onKeyUp={this.handleKeyUp} placeholder="Search a movie"/>
        </form>
        {this.state.results === [] ? <div /> : <FormResults results={this.state.results} />}
      </Fragment>
    );
  }
}
