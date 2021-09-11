import Footer from '../Components/footer'
import Portfolio from '../Components/portfolio'
import Profile from '../Components/Profile'
import Works from '../Components/work'
import BannerHero from '../Components/header'

const Home = () => {
    return (
        <div className="main">
            
            <BannerHero />
            <Works />
            <Portfolio />
            <Profile />
            <Footer />

        </div>
    )
}

export default Home