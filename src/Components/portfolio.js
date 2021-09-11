import React, { useEffect, useState } from "react";
import "../styles/portfolio.css";
import SectionTitle from "./SectionTitle"
import axios from "axios";


const Portfolio = () => {

    const [portfolios, setPortfoios] = useState([]);

    useEffect ( () => {

        axios.get('../data/data.json').then( (res) => {
            setPortfoios(res.data.portfolio)
        });

    }, [] );

    const portfoliosItems = portfolios.map( (portfolioITem , index) => {
        return (
                <div className="item" key={index}> 
                    <div className="portfolio-box">
                        <img src={portfolioITem.image} alt="welclome" />
                        <p> {portfolioITem.category} </p>
                        <h4> {portfolioITem.title} </h4>
                    </div>
                </div>
        )
    } )
    return (

    <div className="section-portfolio"> 
        <div className="container">

            <SectionTitle title="This is Portfolio Title" subtitle="this is sub title from section title" /> 


            <div className="row">
               {portfoliosItems}
            </div>

        
        
        </div>
    </div>

    )
}

export default Portfolio