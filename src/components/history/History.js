import React, { useEffect, useState } from 'react'
import axios from "axios";
import moment from "moment";
import "./History.css"

function History() {
    const [historydata, setHistory] = useState([])
    useEffect(() => {
        axios.get(`/history`)
            .then((res) => {
                setHistory(res.data.reverse((a, b) => b - a))
            })
            .catch((err) => console.log(err));
    }, [])
    return (
        <>
            <section className='History'>
                <div className="history-home">
                    <h4>History</h4>
                    <p>SpaceX was <b>Founded in 2002 by Elon Musk,</b> with the goal of reducing space transportation
                        costs to enable the colonization of Mars. SpaceX manufactures the Falcon 9 and Falcon Heavy
                        launch vehicles, several rocket engines, Cargo Dragon, crew spacecraft, and Starlink communications
                        satellites.</p>
                </div>
            </section>
            <section className='History-lists'>
                <div className='list'>
                    {
                        historydata.reverse().map((data) => (
                            <div className='row list-content' key={data.id}>
                                <div className='col-6'>
                                    <span className='title'>{data.title}</span>
                                    <span className='description'>{data.details}</span>
                                </div>
                                <span className='col-4 date'>{moment(data.event_date_utc).format('MMMM Do YYYY')}</span>
                                <div className='col-2 link' >
                                    <a href={data.links.wikipedia} > <i class="fa-brands fa-wikipedia-w" ></i></a>
                                    <a href={data.links.article}><i class="fa-solid fa-newspaper mr" ></i></a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default History