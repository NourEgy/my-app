import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/banner.css"

const BannerHero = () => {

    const [banner, setBanner] = useState([]);

    useEffect ( () => {
        axios.get('data/data.json').then( (res) => {
            setBanner(res.data.profileInfo);
        });
    }, [] );
    

    const header = banner.map( (bannerItem , index ) => {
        return (
            <div className="info-header table-cell" key={index}>
                
                <h1>hay There! <br /> <span> i'm  {!bannerItem.name ? null : `${bannerItem.name}`} </span> </h1>
                <ul className="banner-meta">

                  {!bannerItem.WhatIDo1 ? null : <li>{bannerItem.WhatIDo1}</li>  }
                  {!bannerItem.WhatIDo2 ? null : <li>{bannerItem.WhatIDo2}</li>  }
                  {!bannerItem.WhatIDo3 ? null : <li>{bannerItem.WhatIDo3}</li>  }

         
                </ul>

                <div className="banner-btn">
                    <a href="#" className="btn-two">Let's Work!</a>    
                </div>
            </div>
        )
    } );

    return (
        <div className="main">
            
            <section id="home" className="home"> 
                <div className="overlay"></div>
                <div className="container">
                <div className="banner display-table text-center">
                        {header}
                </div>
                </div>
            </section>

        </div>
    )
}

export default BannerHero;