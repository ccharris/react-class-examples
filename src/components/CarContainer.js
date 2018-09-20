import React, { Component } from 'react'
import Car from './Car'

class CarContainer extends Component {
 constructor(props){
  super(props)
  this.state = {
    make: '',
    model: '',
    color: ''
  }
 } 
  // componentDidMount(){
  //   this.setState({
  //     make: 'lamborghini',
  //     model: 'huracan',
  //     color: 'black'
  //   })
  // }

  handleChange = (e) => {
    this.setState({
     [e.target.name]: e.target.value 
    })
  }
  
  render(){
    return(
      <div>
        <Car make={this.state.make} model={this.state.model} color={this.state.color}/>
        <input name='make' onChange={this.handleChange}/>
        <input name='model' onChange={this.handleChange}/>
        <input name='color' onChange={this.handleChange}/>
      </div>
    )
  }

}

export default CarContainer