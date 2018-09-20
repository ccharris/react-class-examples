import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      listItem: ""
    };
  }

  handleChange = e => {
    this.setState({ listItem: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault()
    let listArray = this.state.list
    listArray.push(this.state.listItem)
    this.setState({list: listArray})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} />
          <button type="submit">+</button>

          {this.state.list.map((item, index) => {
            return(
              <ListItem item={item} key={index}/>
            )
          })}
        </form>
      </div>
    );
  }
}
