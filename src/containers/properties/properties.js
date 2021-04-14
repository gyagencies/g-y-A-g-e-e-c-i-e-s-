import React,{useState} from 'react';
import PropertyData from './PropertyData';
import propertiesData from '../../data/properties.json';

function Properties () {
  const [propertyItems, setPropertyItems] = useState([]);
  const [category, setCategory] = useState(null);
  const [propertyClickStatus, setPropertyClickStatus] = useState(false);

  function loadProperties (items, category) {
    setPropertyClickStatus(true);
    setCategory(category);
    setPropertyItems(items)
  }

  const propertyTile = propertiesData.map((property) => (
      <div className="property-tile" key={property.id}>
        <div className='property-img'>
          <img src={`image_folder/projects/${property.image}`} className="tile-img" alt="property tile"/>
        </div>
          <div className="property-tile-title">{property.title}</div>
          <div className="property-view-more">
            <div className="view-more-btn" onClick={() => loadProperties(property.data, property.id)}>
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
      <PropertyData category={category} propertyClickStatus={propertyClickStatus} items={propertyItems}/>
    </div>
  )
}

export default Properties;
