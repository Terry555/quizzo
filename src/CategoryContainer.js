import React, { Component } from 'react';
import Category from './Category';
import v4 from 'uuid'


class CategoryContainer extends Component {


  render() {
    const categoryIterator = this.props.category.map((category) => {
      return <Category key={v4()} {...category} handleCategoryClick={this.props.handleCategoryClick}/>
    })

    return(
      <div>
        {categoryIterator}
      </div>
    )
    }


  }

export default CategoryContainer;
