import React, { useEffect, useState } from 'react'
import "../rockets/Rockets.css"
import "../HOC/card.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

function Launches_info() {
    const [launchdata, setLaunch] = useState([])
    const history = useNavigate();
    let userId = useParams();
    let getData = userId.id.split("and")
    let id = getData[0]
    let index = getData[1]
    console.log("userId", getData)
    useEffect(() => {
        initalRender()
        return () => {
            initalRender()
            index = "";
            id = "";
            getData = ""
        }
    }, [])
    const initalRender = () => {
        if (getData) {
            axios.get(`/launches/${id}`)
                .then((res) => {
                    console.log("Rockets", res);
                    setLaunch(res.data)
                })
                .catch((err) => console.log(err));
        }
    }
    return (
        <div className='Rocket-info'>
            <div className='btn-back' onClick={() => history(-1)}>
                <span><i class="fa-solid fa-angle-left"></i>
                    Back To Launches </span>
            </div>
            <div className='info-img'>
                <section className={`bg-card-${index}`}></section>
            </div>
            <div className='info-img'>
                <div className='info-details'>
                    <div className='details-content'>
                        <span className='value'>{moment(launchdata?.launch_date_utc).format('MMMM Do YYYY')}</span>
                        <a href={launchdata?.links?.video_link}><i class="fa-brands fa-youtube"></i></a>
                        <a href={launchdata?.links?.wikipedia} className="mr"> <i class="fa-brands fa-wikipedia-w" ></i></a>
                        <a href={launchdata?.links?.article_link} className="mr"><i class="fa-solid fa-newspaper"></i></a>
                    </div>
                    <div className='details-content'>
                        <span className='heading'>Mission Name</span>
                        <span className='value'>{launchdata?.mission_name}</span>
                    </div>
                    <div className='details-content'>
                        <span className='heading'>Rocket Name</span>
                        <span className='value'>{launchdata?.rocket?.rocket_name}</span>
                        <span className='gap'></span>
                        <span className='heading'>Rocket Type</span>
                        <span className='value'>{launchdata?.rocket?.rocket_type}</span>
                    </div>
                    <div className='details-content'>
                        <span className='value'>{launchdata?.details}</span>
                    </div>
                    <div className='details-content'>
                        <div className="btn">
                            <div className="hover"></div>
                            <span>{launchdata?.launch_success ? "Launched Successfully" : "Failure"}</span>
                        </div>
                    </div>
                    {launchdata?.launch_failure_details &&
                        <div className='details-content'>
                            <span className='heading'>Launch Failure Details</span>
                            <span className='value'>{launchdata?.launch_failure_details?.reason}</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Launches_info