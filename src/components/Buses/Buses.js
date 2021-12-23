import React from 'react';
import { useState, useEffect } from 'react';
import BusCard from '../Home/BusCard'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Buses = (props) => {
    let all_bus_info = [];
    const [fetched_bus, set_fetched_bus] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://akib-server.herokuapp.com/allBus', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                set_fetched_bus(data);
                setLoading(false)
            })
    }, []);

    for (let i = 0; i < fetched_bus.length; i++) {
        all_bus_info.push(<BusCard name={fetched_bus[i].bus_name} image={fetched_bus[i].bus_image} route={fetched_bus[i].route} service={fetched_bus[i].bus_service} fair={fetched_bus[i].bus_base_fair} />);
    }
    let to = props.to;
    let from = props.from;

    if (isLoading) {
        return (
            <>
                <br /><br /><br />
                <CircularProgress /><br />দয়া করে অপেক্ষা করুন
            </>
        )
    }

    if (to != from) {
        return (
            <>
                <h1>From: {from}</h1>
                <h1>to: {to}</h1>
            </>
        )
    }

    return (
        <>
            <h1>সকল বাসের তথ্য</h1><br />
            <div className='container'>
                {all_bus_info}
            </div>
        </>
    );
};

export default Buses;