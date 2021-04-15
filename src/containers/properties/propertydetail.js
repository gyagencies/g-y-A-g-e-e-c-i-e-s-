import React, {Fragment, useEffect} from 'react';
import propertyData from '../../data/properties.json'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./properties.css";
import TextComponent from "../../components/ui/textcomponent";
import ListComponent from "../../components/ui/listcomponent";
import MapComponent from "../../components/ui/mapcomponent";

const PropertyDetail = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const path = props.location.pathname.split('/');
    const category = path[path.length - 2];
    const index = path[path.length - 1];
    let property ;
    for (let i  in propertyData){
        if (propertyData[i].id === category){
            property = propertyData[i]['data'][index];
            break;
        }
    }
     let propertyImages = property.images.map(item => {
         return `${window.location.protocol}//${window.location.host}/image_folder/projects/${item}`
    });
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <Fragment>
            <div className='container' style={{ marginTop: '110px'}}>
                <div className='property_detail'>
                    <TextComponent className={'property-title'} text={property.title}/>
                    <div className='slider'>
                        <Slider {...settings}>
                            {propertyImages.map((img, index) => {
                                return (
                                    <img src={img} key={index}/>
                                )
                            })}
                        </Slider>
                    </div>
                    <div className="property-details">Property Details:</div>
                    <TextComponent className={'property-description'} text={property.description}/>
                    <div className='more_detailing'>
                        <b>Highlights:</b> <ListComponent cssClass='highlights' list={property['highlights']} />
                        <b>Area sizes:</b> <ListComponent cssClass='area-sizes' list={property['area_sizes']} />
                        <b>Address:</b> <TextComponent cssClass='address' text={property.address}/>
                        <b>Cost:</b> <TextComponent cssClass='cost' text={property['cost']}/>
                    </div>
                    <div className='geo_location'>
                        <MapComponent geoLocation={property['geo_location']}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default PropertyDetail;
