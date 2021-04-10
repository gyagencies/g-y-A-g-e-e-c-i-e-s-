import React,{useState} from 'react';
import propertiesData from '../../data/properties.json';

function Properties () {
  const [propertyItems, setPropertyItems] = useState([]);
  const [propertyClickStatus, setPropertyClickStatus] = useState(false);

  function loadProperties (items) {
    const propertyItem = items.map((item, index) =>(
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
    setPropertyItems(propertyItem)
    setPropertyClickStatus(true)
  }

  const propertyTile = propertiesData.map((property) => (
      <div className="property-tile" key={property.id}>
        <div className='property-img'>
          <img src={`image_folder/projects/${property.image}`} className="tile-img" alt="property tile"/>
        </div>
          <div className="property-tile-title">{property.title}</div>
          <div className="property-view-more">
            <div className="view-more-btn" onClick={() => loadProperties(property.data)}>
              View More
            </div>
          </div>
      </div>
    ))

  return (
      <div className='container'>
        <div className="property-tiles">
          {propertyTile}
        </div>
        <div className="property-available-status">
          {
            ! propertyItems.length >= 1 && propertyClickStatus ?
              <div className="no-properties">
                No properties found
              </div> : propertyItems.length >= 1 && propertyClickStatus ?
              <div className="available-properties">
                Available Properties
              </div> : null
          }
        </div>
        <div className="property-items">
          {propertyItems}
        </div>
      </div>
  )
}

export default Properties;
