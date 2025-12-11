import Plants from '../../components/Home/Plants'
import Banner from './Banner'
import ContactUs from './ContactUs '
import FeaturedSection from './FeaturedSection '

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedSection></FeaturedSection>
      <ContactUs></ContactUs>
      <Plants />
      {/* More components */}
    </div>
  )
}

export default Home
