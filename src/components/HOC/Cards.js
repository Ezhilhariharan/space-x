import React from 'react'
import moment from "moment";
import "./card.css"
import { Link } from "react-router-dom";

function Cards(props) {
    const { data, index, reDirect } = props
    return (
        <div className="cards col-6" >
            <section className={`bg-card-${index}`}></section>
            <div className="card-date">{moment(data.launch_date_local).format('MMMM Do YYYY')}</div>
            <div className="mission-name">{data.mission_name ? data.mission_name : data.rocket_name}</div>
            <div className="btn">
                {
                    reDirect == "rocket" ?
                        <Link to={`/rockets/info/${data.rocket_id}and${index}`}>
                            <div className="hover"></div>
                            <span>Learn more</span>
                        </Link>
                        :
                        <Link to={`/launches/info/${data.flight_number}and${index}`}>
                            <div className="hover"></div>
                            <span>Learn more</span>
                        </Link>
                }
            </div>
        </div>
    )
}

export default Cards