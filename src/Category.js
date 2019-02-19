import React, { Component } from 'react';



class Category extends Component {

  render(){
    return(
      <div onClick={(event)=>this.props.handleCategoryClick(this.props.number, event)} className='ui card'>
        <img src={this.props.image_url} alt="history" className='ui image'/>
        <div className="content">
          <h1>{this.props.category}</h1>
        </div>
    </div>
    )
  }

}

export default Category
