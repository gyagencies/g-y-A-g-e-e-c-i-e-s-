import React from 'react';
import propertiesData from '../../data/properties.json';

function Properties () {
  const propertyTile = propertiesData.map((property, index) => (
      <div className="property-tile" key={property.id}>
        <img src={`../../image_folder/projects/${property.image}`} className="tile-img" />
          <div className="property-tile-title">{property.title}</div>
          <div className="property-view-more">
            <a href="javascript:void(0)" className="view-more-btn">View More</a>
          </div>
      </div>
    ))
  return (
    <div className="property-tiles">
      {propertyTile}
      {/*{propertiesData.map((property, index) => (*/}
      {/*  <div className="property-tile">*/}
      {/*    <img src="image_folder/projects/open_plots/cover_img.jpeg" className="tile-img" />*/}
      {/*      <div className="property-tile-title">Open Plots</div>*/}
      {/*      <div className="property-view-more">*/}
      {/*        <a href="javascript:void(0)" className="view-more-btn">View More</a>*/}
      {/*      </div>*/}
      {/*  </div>*/}
      {/*  ))}*/}
    </div>
  )
}

export default Properties;
