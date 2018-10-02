import React, { Component } from 'react';

class Category extends Component {

  render(){
    return(
      <div>
        <h1 onClick={(event)=>this.props.handleCategoryClick(this.props.number, event)}>{this.props.category}</h1>
      </div>
    )
  }

}

export default Category
