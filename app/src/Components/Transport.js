import React from 'react'
import { data, getTransport } from '../store';

const TransportPage = (props) => {
    return  (
    <div className="station-page">
            {props.data.name}
    </div>
    )
}

export default TransportPage