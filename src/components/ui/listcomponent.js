import React, { Fragment } from 'react';

const ListComponent = (props) => {
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
