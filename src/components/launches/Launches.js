import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./launches.css"
import Cards from "../HOC/Cards"

let scrollStarted = false;
function Launches() {
    const [launchesdata, setLaunches] = useState([])
    const counters = document.querySelectorAll('.counter');

    useEffect(() => {
        window.addEventListener("scroll", trigger)

        axios.get(`/launches`)
            .then((res) => {
                console.log("launches", res.data.slice(0, 6));
                setLaunches(res.data.slice(0, 6))
            })
            .catch((err) => console.log(err));
        return () => {
            window.removeEventListener('scroll', trigger);
        };
    }, [])
    const trigger = () => {
        const scrollPos = window.scrollY

        if (scrollPos > 100 && !scrollStarted) {
            countUp();
            scrollStarted = true;
        } else if (scrollPos < 100 && scrollStarted) {
            reset();
            scrollStarted = false;
        }
    }
    const countUp = () => {
        counters.forEach((counter) => {
            counter.innerText = '0';

            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;
                const increment = target / 100;

                if (c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 75);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        })
    }
    const reset = () => {
        counters.forEach((counter) => (counter.innerHTML = '0'));
    }
    return (
        <>
            <section className="section-animate bg-launches"></section>
            <div className="section-inner-center">
                <h3>Launches</h3>
            </div>
            <div className="stats">
                <div>
                    <span className="counter" data-target="173">0</span>
                    <h4>Total Launches</h4>
                </div>
                <div>
                    <span className="counter" data-target="135">0</span>
                    <h4>Total Landings</h4>
                </div>
                <div>
                    <span className="counter" data-target="111">0</span>
                    <h4>Total Reflights</h4>
                </div>
            </div>
            <div className="card-layout">
                <div className="row center">
                    {
                        launchesdata.map((data, index) => (
                            <Cards data={data} index={index} key={data.id} reDirect="launch" />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Launches