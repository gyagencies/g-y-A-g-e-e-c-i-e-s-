import React, {Fragment, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import TextComponent from "../../components/ui/textcomponent";

function PropertyData (props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Fragment>
      <div className="property-available-status" id="property-available-status">
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
                  {item.ready_to_occupy ? <TextComponent className='label_ready_to_occupy' text='Ready to occupy' /> : null}
                <img src={`image_folder/projects/${item.images[0]}`} alt={item.title}/>
              </div>
              <div className="property-item-title">
                {item.title}
              </div>
              <div className="view-property">
                <NavLink to={`/property-detail/${props.category}/${index}`}> View Property</NavLink>
              </div>
            </div>
          ))
        }
      </div>
    </Fragment>
  )
}

export default PropertyData;
