import About from '../components/home/About';
import BestSale from '../components/home/BestSale';
import Featured from '../components/home/Featured';
import Hero from '../components/home/Hero';
import Numbers from '../components/home/Numbers';
import Sale from '../components/home/Sale';
import Testimonial from '../components/home/Testimonial';
import Trending from '../components/home/Trending';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Trending />
      <BestSale />
      <Numbers />
      {/* <Sale />
      <Featured />
      <Testimonial /> */}
    </>
  );
};

export default Home;
