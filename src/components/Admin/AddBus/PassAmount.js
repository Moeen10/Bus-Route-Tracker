import React from 'react'

export default function PassAmount(props) {
    let val = props.flag
    if (val === 'No') {
        return (
            <div>

            </div>
        )
    }
    else {
        return (
            <div>
                Half/Pass Amount:<hr />
                Select half/pass amount from below.
                <select name='half_pass_amount' className='select_btn'>
                    <option>10%</option>
                    <option>25%</option>
                    <option selected>50%</option>
                    <option>75%</option>
                    <option>100%</option>
                </select>
            </div>
        )
    }
}
