import React from 'react';

function ImagesGrid({ images, noResults }) {
  return (
    <div className="container">
      { noResults ? (
          <h1>There is no results on your query</h1>
        ) : (
          images.map(({title, farm, server, id, secret}, i) => {
            const url = `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
            return (
              <div className="grid-cell" key={i}>
                <header>{title}</header>
                <img alt={`"${title}"`} src={url}/>
              </div>
            )
          })
        )
      }
    </div>
  );
}

export default ImagesGrid;
