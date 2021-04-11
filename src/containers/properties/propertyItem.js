import React,{Fragment} from 'react';

function PropertyItem (props) {

  return (
    <Fragment>
      <div className="property-available-status">
        {
          ! props.items.length >= 1 && props.propertyClickStatus ?
            <div className="no-properties">
              No properties found
            </div> : props.items.length >= 1 && props.propertyClickStatus ?
            <div className="available-properties">
              Available Properties
            </div> : null
        }
      </div>
      <div className="property-items">
        {
          props.items.map((item, index) =>(
            <div className="property-item" key={index}>
              <div className="property-item-img">
                <img src={`image_folder/projects/${item.images[0]}.jpeg`} alt={item.title}/>
              </div>
              <div className="property-item-title">
                {item.title}
              </div>
              <div className="view-property">
                View Property
              </div>
            </div>
          ))
        }
      </div>
    </Fragment>
  )
}

export default PropertyItem;
