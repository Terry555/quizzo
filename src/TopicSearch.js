import React from 'react'

const TopicSearch = (props) => {
  return (
    <div className="ui huge fluid icon input">
      <input type="text" onChange={props.handleChange} value={props.searchTerm}/>
      <i className="circular search link icon"></i>
    </div>
  )
}

export default TopicSearch
