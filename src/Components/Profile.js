import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/profile.css";
import SectionTitle from "./SectionTitle";
import SkillsItem from "./profile/SkillsItem";
import InformationItem from "./profile/InformationItem";


const Profile = () => {

    const [myInformation, setMyInfomation] = useState([]);
    const [mySkills, setmySkills] = useState([]);


    useEffect(() => {
        axios.get("data/data.json").then( (res) => {
            setMyInfomation(res.data.profileInfo)
        } );
        axios.get("data/data.json").then( (res) => {
            setmySkills(res.data.skills)
        } );
   
    }, []);

    const SkillsItems = mySkills.map((skills, index) => (
        <div className="skill-box" key={index}>
            <SkillsItem skills={skills} />
        </div>
            
    ));

    const prof = myInformation.map((info, index) => (
        <div key={index}>
            <InformationItem info={info} />
        </div>     
    ));

 
       
 

    return (
        <div className="section-profile"> 
            <div className="profile_skills">
                <div className="container">

                    <div className="profile">
                        <SectionTitle title="my Profile" subtitle="This is subtitle Profile" />
                        {prof}
                    </div>


                    <div className="skills">
                        <SectionTitle title="my skills" subtitle="This is subtitle skills" />
              
                        {SkillsItems}
                               
                    </div>

                </div>
            </div> 
        </div>
    )
}

export default Profile;