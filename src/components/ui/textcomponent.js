import React, { Fragment } from 'react';

const TextComponent = (props) => {
    return(
        <Fragment>
            <div className={props.className}>{props.text}</div>
        </Fragment>
    )
};

export default TextComponent;