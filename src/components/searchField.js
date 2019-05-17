import React from 'react';

function SearchField({onSubmit}) {
  return (
    <div className="header">
      <form onSubmit={onSubmit}>
        <input id="search-filed" type="text" placeholder="Input search request" />
        <button type="submit">Search images</button>
      </form>
      <hr />
    </div>
  );
}

export default SearchField;
