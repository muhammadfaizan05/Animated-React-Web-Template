import React from "react";
import './Services.css';
import Fade from 'react-reveal/Fade';

export default function Services(){

    let data=[{src:'24callsign.png',heading:'24/7 Support',detail:'Duis mollis gravida commodo id luctus erat porttitor ligula,...', detail2:"eget lacinia odio sem aget elit nullam quis risus eget.,"},
    {src:'Secure_Payment.png',heading:'Secure Payments',detail:'Duis mollis gravida commodo id luctus erat porttitor ligula,...', detail2:"eget lacinia odio sem aget elit nullam quis risus eget.,"},  
    {src:'Daily_Updates.png',heading:'Daily Updates',detail:'Duis mollis gravida commodo id luctus erat porttitor ligula,...', detail2:"eget lacinia odio sem aget elit nullam quis risus eget.,"},  
    {src:'Markete_Research.png',heading:'Market Research',detail:'Duis mollis gravida commodo id luctus erat porttitor ligula,...', detail2:"eget lacinia odio sem aget elit nullam quis risus eget.,"},  
    {src:'System_Integration.png',heading:'System Integration',detail:'Duis mollis gravida commodo id luctus erat porttitor ligula,...', detail2:"eget lacinia odio sem aget elit nullam quis risus eget.,"},  
    {src:'Seo_Services.png',heading:'SEO Services',detail:'Duis mollis gravida commodo id luctus erat porttitor ligula,...', detail2:"eget lacinia odio sem aget elit nullam quis risus eget.,"},  
]



return<>
    <div className="services_cover">

    {data.map((element)=>{
        return<div className="service_card">
             <Fade top cascade>
            <img src={element.src}/>
            <hr className="hrrule"/>
            <h3>{element.heading}</h3>
            <p>{element.detail}</p>
            <p className="hideifneeded">{element.detail2}</p>
            </Fade>
        </div>
    })}
    </div>
    </>
}