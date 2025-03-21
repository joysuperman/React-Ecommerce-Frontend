import {React} from 'react'
import Layout from './common/Layout';
import Hero from './common/Hero';
import LatestProducts from './common/LatestProducts';
import FeaturedProducts from './common/FeaturedProducts';


const Home = () => {
  return (
    <>
        <Layout>
            <Hero/>
            <LatestProducts/>
            <FeaturedProducts/>
        </Layout>
    </>
  )
}

export default Home;