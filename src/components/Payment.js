import React from 'react'
import { Button, TextField, Container, FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function payment() {
    return (
        <div>
            <Container maxWidth="sm" style={{ background: '' }}>
                <h1>পেমেন্ট</h1>
                <form method='get'>
                    <TextField id="filled-basic" label="যাত্রীর ইউজার নেইম" value='anupam.akib' variant="filled" name='bus_name' size='medium' fullWidth required />
                    <br /><br />
                    <TextField id="filled-basic" label="রুট (From - To)" value='Mirpur 1 - Dhanmondi 32' variant="filled" name='bus_base_fair' type='text' fullWidth inputProps={{ readOnly: true, }} />
                    <br /><br />
                    <TextField id="filled-basic" label="রুটের দূরত্ব" value='7.2 Kilometers' variant="filled" name='bus_base_fair' type='text' fullWidth inputProps={{ readOnly: true, }} />
                    <br /><br />
                    <div style={{ width: '100%', backgroundColor: 'whitesmoke', padding: '15px' }}>
                        প্রতি কিলোমিটারের ভাড়াঃ ২.০৫ টাকা <br />
                        মোট ভাড়াঃ ২.০৫ * ৭.২ <br />
                        <font color='green' size='7'>৳15</font>
                    </div><br />
                    <Button size='large' variant='contained' type='submit' fullWidth>ভাড়া পরিশোধ করুন ও স্লিপ ডাউনলোড করুন</Button>
                    <br /><br />
                </form>
            </Container>
        </div>
    )
}
