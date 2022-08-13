import React, { useEffect, useState } from 'react'
import "./Rockets.css"
import "../HOC/card.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

function Rocket_info() {
    const [rocketsdata, setRockets] = useState([])
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
            axios.get(`/rockets/${id}`)
                .then((res) => {
                    console.log("Rockets", res);
                    setRockets(res.data)
                })
                .catch((err) => console.log(err));
        }
    }
    return (
        <div className='Rocket-info'>
            <div className='btn-back' onClick={() => history(-1)}>
                <span><i class="fa-solid fa-angle-left"></i>
                    Back To Rockets </span>
            </div>
            <div className='info-img'>
                <section className={`bg-card-${index}`}></section>
            </div>
            <div className='info-img'>
                <div className='info-details'>
                    <div className='details-content'>
                        <span className='heading'>Rocket Name</span>
                        <span className='value'>{rocketsdata?.rocket_name}</span>
                        <a href={rocketsdata?.wikipedia}> <i class="fa-brands fa-wikipedia-w" ></i></a>
                    </div>
                    <div className='details-content'>
                        <span className='heading'>Country</span>
                        <span className='value'>{rocketsdata?.country}</span>
                    </div>

                    <div className='details-content'>
                        <span className='heading'>ENGINES</span>
                        <span className='heading'>Type</span>
                        <span className='value'>{rocketsdata?.engines?.type}</span>
                        <span className='gap'></span>
                        <span className='heading'>Version</span>
                        <span className='value'>{rocketsdata?.engines?.version}</span>
                        <span className='gap'></span>
                        <span className='heading'>Propellant-1</span>
                        <span className='value'>{rocketsdata?.engines?.propellant_1}</span>
                        <span className='gap'></span>
                        <span className='heading'>Propellant-1</span>
                        <span className='value'>{rocketsdata?.engines?.propellant_2}</span>
                    </div>
                    <div className='details-content'>
                        <span className='heading'>Stages </span>
                        <span className='value'>{rocketsdata?.stages}</span>
                    </div>
                    <div className='details-content'>
                        <span className='heading'>FIRST STAGE</span>
                        <span className='heading'>Burn time </span>
                        <span className='value'>{rocketsdata?.first_stage?.burn_time_sec}</span>
                        <span className='gap'></span>
                        <span className='heading'>Fuel Amount Tons </span>
                        <span className='value'>{rocketsdata?.first_stage?.fuel_amount_tons}</span>
                        <span className='gap'></span>
                        <span className='heading'>{rocketsdata?.second_stage?.reusable ? "Reusable" : "Not Reusable"} </span>
                    </div>
                    <div className='details-content'>
                        <span className='heading'>SECOND STAGE</span>
                        <span className='heading'>Burn time </span>
                        <span className='value'>{rocketsdata?.second_stage?.burn_time_sec}</span>
                        <span className='gap'></span>
                        <span className='heading'>Fuel Amount Tons </span>
                        <span className='value'>{rocketsdata?.second_stage?.fuel_amount_tons}</span>
                        <span className='gap'></span>
                        <span className='heading'>{rocketsdata?.second_stage?.reusable ? "Reusable" : "Not Reusable"} </span>
                    </div>
                    <div className='details-content'>
                        <div className='row '>
                            {
                                rocketsdata?.flickr_images?.length > 0 && rocketsdata?.flickr_images.map((data, index) => (
                                    <img src={data} alt="img" key={index} className='col-6' />
                                ))
                            }
                        </div>
                    </div>
                    <div className='details-content'>
                        <span className='value'>{rocketsdata?.description}</span>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Rocket_info