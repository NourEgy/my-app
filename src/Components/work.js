import { Component } from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/work.css";
import SectionTitle from "./SectionTitle"
import { FaNapster, FaPhp, FaRedhat  } from 'react-icons/fa';


const Works = () => {

    const [services, setServices] = useState([]);

    useEffect ( () => {
        axios.get('data/data.json').then( (res) => {
            setServices(res.data.works) 
            });
    }, [] );
  
  
    const ServicesList = services.map( (workItem , index) => {
        return (
            <div  key={index} className="item">
                <div className="work-item"> 
                    <div className="content-box">
                        <span> <i className={workItem.icon_name}></i>  </span>
                        <h4> {workItem.title} </h4>
                        <p>{workItem.body}</p>
                    </div>
                </div>
                </div>
        )
    })
    return (
        // this is Props From Section Title
        <section className="section-work">
            <div className="container">
            <SectionTitle title="This is Work Title" subtitle="this is sub title from section title" /> 

            <div className="row">
                
                    {ServicesList}
              
            </div>
        </div>
        </section>
         
    )

}

export default Works