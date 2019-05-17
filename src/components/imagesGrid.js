import React from 'react';

function ImagesGrid({ images }) {
  return (
    <div class="container">
        {
          images.map(({title, farm, server, id, secret}, i) => {
            const url = `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
            return (
              <div className="grid-cell" key={i}>
                <header>{title}</header>
                <img alt={`"${title}"`} src={url}/>
              </div>
            )
          })
        }
    </div>
  );
}

export default ImagesGrid;
