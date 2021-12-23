import React from 'react'

export default function PassAmount(props) {
    let val = props.flag
    if (val === 'No') {
        return (
            <div style={{ opacity: 0.4 }}>
                হাফ/পাশের পরিমাণঃ<hr />
                <h3>প্রযোজ্য নয়</h3>
            </div>
        )
    }
    else {
        return (
            <div>
                হাফ/পাশের পরিমাণঃ<hr />
                নির্বাচন করুনঃ
                <select name='half_pass_amount' className='select_btn'>
                    <option value='10'>10%</option>
                    <option value='25'>25%</option>
                    <option value='50' selected>50%</option>
                    <option value='75'>75%</option>
                    <option value='100'>100%</option>
                </select>
            </div>
        )
    }
}
