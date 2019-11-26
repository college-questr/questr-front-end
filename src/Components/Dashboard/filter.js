import React from 'react';

const Filter = () => {


  return (
    <div className="filter-container">
      <h1>Add Filter</h1>
      <input
        type="text"
        name="filter"
        placeholder="filter"
      />

      <div className="tags">
        <button>Tag</button>
        <button>Tag</button>
        <button>Tag</button>
      </div>
    </div>
  )
}

export default Filter;