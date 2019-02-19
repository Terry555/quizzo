import React from 'react'

const TopicSearch = (props) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
      <input className='prompt' placeholder='search categories' type="text" onChange={props.handleChange} value={props.searchTerm}/>
      <i className='search icon'></i>
      </div>
  </div>
  )
}

export default TopicSearch
