import React, {useState, useEffect} from "react";
import axios from 'axios';


function SocialiMedia(props){
    
    const [socialLinks, setSocialLinks] = useState({});
  
    useEffect(() => {
        axios.get("data/data.json").then( (res) => {
            setSocialLinks(res.data.socialLinks);
        } );
     }, []);

  const SocialIconss = socialLinks.map((SocialIcons, index) => (
    
        <ul className="social-media text-center"  key={index}>
            {SocialIcons.facebook ? null : <li>
                <a target="_blank" href={SocialIcons.facebook}>
                <i className="fab fa-facebook-f"></i>
                </a>
            </li>}
    
        </ul>
   
    ));

  
  return (
    <div>

    {SocialIconss}
    </div>
  );
}

export default SocialiMedia;
