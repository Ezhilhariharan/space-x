import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../launches/launches.css"
import Cards from "../HOC/Cards"

function Rockets() {
    const [rocketsdata, setRockets] = useState([])
    useEffect(() => {
        axios.get(`/rockets`)
            .then((res) => {
                console.log("Rockets", res);
                setRockets(res.data)
            })
            .catch((err) => console.log(err));
    }, [])
    return (
        <>
            <section className="section-animate bg-Rockets"></section>
            <div className="section-inner-center">
                <h3>Rockets</h3>
            </div>
            <div className="card-layout">
                <div className="row center">
                    {
                        rocketsdata.map((data, index) => (
                            <Cards data={data} index={index} key={data.id} reDirect="rocket" />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Rockets