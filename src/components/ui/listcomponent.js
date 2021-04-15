import React, { Fragment } from 'react';

const ListComponent = (props) => {
    return(
        <Fragment>
            <ul className={props.className}>
                {props.list.map((item) => {
                    return (<li>{item}</li>)
                 })}
            </ul>
        </Fragment>
    )
};

export default ListComponent;