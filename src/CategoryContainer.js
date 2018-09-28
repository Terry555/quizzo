import React, { Component } from 'react';
import Category from './Category';
import v4 from 'uuid'


class CategoryContainer extends Component {

  // const categoryIterator = this.props.category.map(category => {
  //   return <Category key={v4()} {...category}/>
  // })

  render() {
    console.log(this.props.category)
    return(
      <div>
        {'categoryIterator'}
      </div>
    )
    }


  }

export default CategoryContainer;
