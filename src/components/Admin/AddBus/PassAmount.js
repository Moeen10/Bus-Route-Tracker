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
