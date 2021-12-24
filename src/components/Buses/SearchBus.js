import { Card, CardActionArea, Typography, CardMedia, CardContent } from '@mui/material';

import React from 'react'

export default function BusCard(props) {
    let name = props.name;
    let type = props.type
    let image = props.image;
    let half_pass = props.half_pass;
    let hf_amount = props.half_pass_amount;
    let pass = "No Half/Pass"
    if (half_pass) {
        pass = "Without " + hf_amount + "% Pass";
    }
    if (!image) {
        image = "bus_images/default.jpg"
    }
    let route = props.route;
    let n = route.length;
    let start = route[0][0];
    let end = route[n - 1][1];
    let i = 1;
    if (!end) {
        while (!end) {
            end = route[n - i][1];
            i++;
        }
    }
    let km = props.km;
    let fair = km * 2;
    let base_fair = props.base_fair
    if (fair < base_fair) fair = base_fair
    let service = props.service;
    return (
        <div className='col-3' style={{ float: 'left', padding: '20px' }}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <span className='capitalize'>{name}</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Route: </b><span className='capitalize'>{start} - {end}</span>
                            <br /><b>Fair: </b><font color='green'><b>{fair} Taka</b></font> ({pass})
                            <br /><b>Bus Type: </b>{service}, {type}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div >
    )
}
