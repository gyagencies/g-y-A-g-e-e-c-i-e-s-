import React, { Fragment } from 'react';

const MapComponent = (props) => {
  return(
    <Fragment>
      <div className="project-location-heading">
        Project Location:
      </div>
      <iframe
        src={props['geoLocation']}
        loading="lazy"
        className="map-frame" />
    </Fragment>
  )
};

export default MapComponent;
