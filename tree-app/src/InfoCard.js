import React, { } from 'react'; 
// import axios from 'axios';
// import { useState } from 'react';

function InfoCard({data}) {
    
    data.selected && console.log(data.selected.feature.properties);
    const properties = data.selected ? data.selected.feature.properties : null;

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

function getDate(date){
    const yr = date.slice(0, 4);
    const mth = date.slice(4, 6);
    const day = date.slice(6, 8);
    console.log(yr, mth, day);
    
    return new Date(yr, mth, day).toDateString();
}

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
        <>
        {data.selected &&  (
        <div className="infoCard">
            <div>
                <b>Client: {data.selected.feature.properties.CLIENT_NAME}</b>
            </div>
            <div>
                Activity: {properties.LIFE_CYCLE_STATUS_CODE}
            </div>
            <div>
                Harvest Date: {getDate(properties.PLANNED_HARVEST_DATE)}
            </div>
          
        </div>
        )}
        </>
    )


}


export default InfoCard