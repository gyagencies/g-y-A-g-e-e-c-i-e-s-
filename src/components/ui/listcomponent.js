import React, { Fragment } from 'react';

const ListComponent = (props) => {
    console.log(props)
    return(
        <Fragment>
            <ul className={props.cssClass}>
                {props.list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </Fragment>
    )
};

export default ListComponent;
