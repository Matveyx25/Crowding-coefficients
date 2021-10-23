import React from 'react'
import { NavLink } from 'react-router-dom';

export default function StationPage(props) {
    return (
        <div className="station-page">
            <ul>
                {props.data.map((el,index) => 
                    <NavLink to={'/' + el.id}>
                        <li key={index}>
                            <span className={`${el.type} number-ts`}>
                                {el.name}
                            </span>
                            <div className="w-100">
                                <div className="flex">
                                    <div className={`${el.type} name-ts`}>
                                        {el.name}
                                    </div>
                                    <div className="time-ts">
                                        <span>До прибытия</span>{el.time_to_arrive}
                                    </div>
                                </div>
                                <div className={`occupancy-ts flex ${el.occupancy}`}>
                                    Загруженность<span>{el.occupancy}</span>
                                </div>
                            </div>
                        </li>
                    </NavLink>
                )}
            </ul>
        </div>
    )
}
