import React from 'react';
import './OutputScreenRow.css';

const OutputScreenRow = (props) => {
    return (
        <div className="screen-row">
            <input type="text" readOnly value = {props.value}/>
        </div>
    )
}

export default OutputScreenRow;