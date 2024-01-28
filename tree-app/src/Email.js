import React, { } from 'react'; 
import axios from 'axios';
import { useState } from 'react';

function Email() {

const [details, setDetails] = useState(null)

function submit_email (){
    let data;
    axios.get('http://localhost:8000')
    .then(res => {
        data = res.data
        setDetails(data)
    }).catch(err => {console.log(err)})
}

    return (
        <div className="email-form">
            <h3>Subscribe for updates!</h3>
            <form onClick={submit_email}>
                <button type="button">Click here!</button>
            </form>
            <div className="django">
                {details && details.map((output, id) => (
                    <div key={id}>
                        <div>
                            <h2>{output.employee}</h2>
                            <h4>{output.department}</h4>
                            </div>
                            </div>
                ))}
            </div>
        </div>
    )


}


export default Email