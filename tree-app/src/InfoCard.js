import React, { } from 'react'; 
// import axios from 'axios';
// import { useState } from 'react';

function InfoCard({data}) {

    // data.selected && console.log(data.selected.feature.properties);

// const [details, setDetails] = useState(null)
// console.log(details)
// setDetails(null);

// function submit (){
//     let data;
//     axios.get('http://localhost:8000')
//     .then(res => {
//         data = res.data
//         setDetails(data)
//     }).catch(err => {console.log(err)})
// }

    return (
        // <div className="email-form">
        //     <h3>Subscribe for updates!</h3>
        //     <form onClick={submit_email}>
        //         <button type="button">Click here!</button>
        //     </form>
        //     <div className="django">
        //         {details && details.map((output, id) => (
        //             <div key={id}>
        //                 <div>
        //                     <h2>{output.employee}</h2>
        //                     <h4>{output.department}</h4>
        //                     </div>
        //                     </div>
        //         ))}
        //     </div>
        // </div>
        <div className="infoCard">
            <p>tests</p>
            {data.selected && (
                <div>
                    {data.selected.feature.properties.PLANNED_HARVEST_DATE}
                </div>
            )}
        </div>
    )


}


export default InfoCard