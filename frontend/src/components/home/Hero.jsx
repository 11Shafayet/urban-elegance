import LineButton from '../common/LineButton';
import FillButton from '../common/FillButton';
import { IoIosBasket } from 'react-icons/io';

import banner3 from '../../assets/banner3.jpg';
import product1 from '../../assets/16.png';

const Hero = () => {
  return (
    <header className="relative min-h-[90vh] flex justify-center items-center z-10">
      {/* number */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-6 xl:-left-24">
        <h1 className="text-textLight text-7xl md:text-[200px] xl:text-[333px]">
          01
        </h1>
      </div>
      {/* background image */}
      <div
        className="absolute right-0 h-full w-[66%] bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${banner3})` }}
      >
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40" />
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12">
          <div>
            <h5 className="uppercase text-theme tracking-widest font-secondary">
              Urban Elegance Collections
            </h5>
            <h2 className="text-4xl md:text-6xl lg:text-[80px] !leading-[1.1] font-bold">
              New Interior Concept
            </h2>
            <p className="opacity-75  text-base !leading-loose mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              ipsum, dolore libero molestiae dolor quasi facere, obcaecati porro
              doloribus accusamus error quam reprehenderit repellendus amet!
              Quibusdam quos maxime architecto blanditiis quaerat, culpa dolor
              quod perspiciatis, quis nulla dolores, ducimus quae.
            </p>
            <div className="mt-8">
              <LineButton link={`/shop`} label={`Get Started`} />
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="bg-primary p-4 md:p-6 flex flex-col max-w-[350px]">
              <div className="relative flex justify-center items-center lg:pr-5">
                <img
                  src={product1}
                  alt="product"
                  className="max-w-full h-auto"
                />
                {/* left tooltip */}
                <span className="absolute w-4 h-4 bg-white rounded-full top-[42%] left-[20%] group cursor-pointer hover:bg-theme duration-300">
                  <span className="bubble_animation absolute inset-0 w-full h-full bg-white group-hover:bg-theme rounded-full duration-300" />
                  <span className="bg-textLight py-2 px-4 text-white absolute top-1/2 -translate-y-1/2 left-[144%] text-[12px] whitespace-nowrap group-hover:scale-100 scale-0 duration-500 origin-left">
                    Thick Plastic Coating
                  </span>
                </span>
                {/* top right tooltip */}
                <span className="absolute w-4 h-4 bg-white rounded-full top-[20%] right-[20%] group cursor-pointer hover:bg-theme duration-300">
                  <span className="bubble_animation absolute inset-0 w-full h-full bg-white group-hover:bg-theme rounded-full duration-300" />
                  <span className="bg-textLight py-2 px-4 text-white absolute top-1/2 -translate-y-1/2 left-[144%] text-[12px] whitespace-nowrap group-hover:scale-100 scale-0 duration-500 origin-left">
                    Premium Dacron
                  </span>
                </span>
                {/* bottom tooltip */}
                <span className="absolute w-4 h-4 bg-white rounded-full bottom-1/3 left-1/2 group cursor-pointer hover:bg-theme duration-300">
                  <span className="bubble_animation absolute inset-0 w-full h-full bg-white group-hover:bg-theme rounded-full duration-300" />
                  <span className="bg-textLight py-2 px-4 text-white absolute top-1/2 -translate-y-1/2 left-[144%] text-[12px] whitespace-nowrap group-hover:scale-100 scale-0 duration-500 origin-left">
                    Original Teak Wook
                  </span>
                </span>
              </div>

              <h5 className="text-2xl font-bold !leading-none">
                Cloe Armchair
              </h5>
              <p className="opacity-75 my-3.5">Starts from $111</p>
              <div className="w-44">
                <FillButton icon={<IoIosBasket />} label={`buy now`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
