import React from 'react';
import propertiesData from '../../data/properties.json';

function Properties () {
  const propertyTile = propertiesData.map((property) => (
      <div className="property-tile" key={property.id}>
        <div className='property-img'>
          <img src={`image_folder/projects/${property.image}`} className="tile-img" />
        </div>
          <div className="property-tile-title">{property.title}</div>
          <div className="property-view-more">
            <div className="view-more-btn">View More</div>
          </div>
      </div>
    ))
  return (
      <div className='container'>
        <div className="property-tiles">
          {propertyTile}
        </div>
      </div>
  )
}

export default Properties;
