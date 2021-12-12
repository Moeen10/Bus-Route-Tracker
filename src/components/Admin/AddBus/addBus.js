import React from 'react'
import { useState } from 'react'
import './addBus.css'
import { Button, TextField, Container, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PassAmount from './PassAmount'

export default function AddBus() {
    const [half_pass, setHalf_pass] = useState('')
    const [route, setRoute] = useState([])

    const half_pass_handleOnChange = (e) => {
        //console.log(e.target.value)
        let val = e.target.value;
        setHalf_pass(val);
    }
    const routeChange = (e) => {
        const route_data = [];
        var lines = e.target.value.split('\n');
        for (var i = 0; i < lines.length; i++) {
            route_data.push(lines[i].split('-'));
        }
        //console.log(route_data);
        setRoute(route_data)
    }

    return (
        <div>
            <Container maxWidth="sm" style={{ background: '' }}>
                <h1>নতুন বাস যুক্ত করুন</h1><br />
                <center>
                    <form method='get'>
                        <TextField id="filled-basic" label="বাসের নাম" variant="filled" name='bus_name' size='medium' fullWidth required />
                        <br /><br />
                        <TextField id="filled-basic" label="বাসের ভিত্তি ভাড়া" variant="filled" name='bus_base_fair' type='number' fullWidth required />
                        <br /><br />
                        <div className='col-6 inputCard'>
                            বাসের সার্ভিস নির্বাচন করুনঃ <hr />
                            <RadioGroup
                                aria-label="bus_service"
                                defaultValue="Sitting"
                                name="bus_service"
                            >
                                <FormControlLabel value="Sitting" control={<Radio />} label="সিটিং " />
                                <FormControlLabel value="Non Sitting" control={<Radio />} label="নন সিটিং " />
                            </RadioGroup>
                        </div>

                        <div className='col-6 inputCard'>
                            বাসের ধরণ নির্বাচন করুনঃ <hr />
                            <RadioGroup
                                aria-label="bus_type"
                                defaultValue="AC"
                                name="bus_type"
                            >
                                <FormControlLabel value="AC" control={<Radio />} label="এসি " />
                                <FormControlLabel value="Non AC" control={<Radio />} label="নন এসি " />
                            </RadioGroup>
                        </div>
                        <div className='col-6 inputCard'>
                            হাফ/পাশ গ্রহণ করা হয়?<hr />
                            <RadioGroup
                                aria-label="half_pass"
                                defaultValue="Yes"
                                name="half_pass"
                                onChange={half_pass_handleOnChange}
                            >
                                <FormControlLabel value="Yes" control={<Radio />} label="হ্যাঁ" />
                                <FormControlLabel value="No" control={<Radio />} label="না" />
                            </RadioGroup>
                        </div>

                        <div className='col-6' style={{ float: 'left', padding: '10px' }}>
                            <PassAmount flag={half_pass} />
                        </div>


                        <div className='col-12 inputCard' style={{ float: 'left' }}>
                            <p>{JSON.stringify(route)}</p>
                            বাসের রুট: (Use 'hiphen/Enter' to seperate all string and numbers)<br /><p align='left'>Sample: <br /><b>From - To - Distance(KM)<br />Shukrabad - Dhanmondi 27 - 0.5<br />Shyamoli - Kallanpur - 1</b></p><hr />
                            <textarea name="route" className="form-control" placeholder="Enter Bus Route" onChange={routeChange}></textarea>
                        </div>


                        <div className='col-12 inputCard' style={{ float: 'left' }}>
                            বাসের ছবি যুক্ত করুন<hr />
                            <input className="form-control" type="file" id="formFile" />
                        </div>

                        <div className='col-12' style={{ float: 'left' }}>
                            <br />
                            <Button startIcon={<AddBoxIcon />} size='large' variant='contained' type='submit' fullWidth>বাসটি যুক্ত করুন</Button>
                        </div>
                    </form>
                </center>
            </Container>
        </div>
    )
}
