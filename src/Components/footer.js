import "../styles/footer.css"
import SocialLinksMedia from "../Components/SocialLinks"




const Footer = () => {
    

    
    return (
        <footer className="footer">
            
            <div className="container">

            <SocialLinksMedia />  
           


            <div className="copyright text-center">
                &copy; 2021 Nour All Rights Reserved By
                <a href="#" target="_blank">NourEgy</a>
            </div>
            
            </div>
         
         
     </footer>
    )
}

export default Footer