import React, {useState, useEffect} from "react";
import axios from 'axios';


function SocialLinksMedia() {

  const [socialLinks, setSocialLinks] = useState([]);

    useEffect ( () => {
        axios.get('data/data.json').then( (res) => {
          setSocialLinks(res.data.socialLinks) 
            });
    }, [] );
  
  
    const allSocialLinks = socialLinks.map( (socialLink , index) => {
        return (
            <ul className="social-media"  key={index}>
            
                {!socialLink.facebook ? null : <li>
                  <a target="_blank" href={socialLink.facebook}>
                  <i className="fab fa-facebook"></i>
                  </a>
                </li>}

                {!socialLink.twitter ? null : <li>
                  <a target="_blank" href={socialLink.twitter}>
                     <i className="fab fa-twitter"></i>
                  </a>
                </li>}


                {!socialLink.behance ? null : <li>
                  <a target="_blank" href={socialLink.behance}>
                  <i className="fab fa-behance"></i>
                  </a>
                </li>}

                {!socialLink.youtube ? null : <li>
                  <a target="_blank" href={socialLink.youtube}>
                     <i className="fab fa-youtube"></i>
                  </a>
                </li>}


                {!socialLink.instagram ? null : <li>
                  <a target="_blank" href={socialLink.instagram}>
                  <i className="fab fa-instagram"></i>
                  </a>
                </li>}

                {!socialLink.linkedin ? null : <li>
                  <a target="_blank" href={socialLink.linkedin}>
                     <i className="fab fa-linkedin"></i>
                  </a>
                </li>}

                {!socialLink.dribbble ? null : <li>
                  <a target="_blank" href={socialLink.dribbble}>
                     <i className="fab fa-dribbble"></i>
                  </a>
                </li>}


                {!socialLink.github ? null : <li>
                  <a target="_blank" href={socialLink.github}>
                  <i className="fab fa-github"></i>
                  </a>
                </li>}

               </ul>
        )
    })

  return (
   <div>{allSocialLinks}</div>
  );
}

export default SocialLinksMedia;
