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
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
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
                        <div className='description'>
                            <h3>Description</h3>
                            <TextComponent className={'property-description'} text={property.description}/>
                        </div>
                        <div className='more_detailing'>
                            <div>
                                <h4>Property Highlights</h4>
                                <ListComponent className='highlights' list={property.highlights} />
                            </div>
                            <div>
                                <h4>Available Area Sizes</h4>
                                <ListComponent className='area-sizes' list={property.area_sizes} />
                            </div>
                            <div>
                                <h4>Address</h4>
                                <TextComponent className='address' text={property.address}/>
                            </div>
                            <div>
                                <h4>Approximate Cost</h4>
                                <TextComponent className='cost' text={property.cost}/>
                            </div>
                        </div>
                    <marquee>
                        <TextComponent className={'legal-text'} text={'Legal opinion will be available, Please Contact us to get'}/>
                    </marquee>
                    <div className='geo_location'>
                        <MapComponent geoLocation={property['geo_location']}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default PropertyDetail;
