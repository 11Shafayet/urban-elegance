/* eslint-disable react/prop-types */
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
} from 'react-icons/fa';
import { LiaGlobeEuropeSolid } from 'react-icons/lia';

import cat1 from '../../assets/category1.jpg';
import cat2 from '../../assets/category2.jpg';
import cat3 from '../../assets/category3.jpg';
import cat4 from '../../assets/category4.jpg';
import cat5 from '../../assets/category5.jpg';
import cat6 from '../../assets/category6.jpg';
import arrival1 from '../../assets/arrival1.png';
import arrival2 from '../../assets/arrival2.png';
import arrival3 from '../../assets/arrival3.png';
import LineButton from '../common/LineButton';
import { Link } from 'react-router-dom';

const categories = [
  {
    image: cat1,
    label: 'All Products',
  },
  {
    image: cat2,
    label: 'Chair',
  },
  {
    image: cat3,
    label: 'Cupboard',
  },
  {
    image: cat4,
    label: 'Lamp',
  },
  {
    image: cat5,
    label: 'Sofa',
  },
  {
    image: cat6,
    label: 'Table',
  },
];

const newArrivals = [
  {
    img: arrival1,
    label: 'Armchair Tosca',
    regPrice: '111',
    link: '',
  },
  {
    img: arrival2,
    label: 'Mini Light Lamp',
    regPrice: '98',
    link: '',
  },
  {
    img: arrival3,
    label: 'Wooden Nightstand',
    regPrice: '154',
    link: '',
  },
];

const social = [
  {
    icon: <FaFacebookF />,
    label: 'Facebook',
    link: 'https://www.facebook.com/11Shafayet',
  },
  {
    icon: <FaInstagram />,
    label: 'Instagram',
    link: 'https://www.instagram.com/md.shafayetur_rahman/',
  },
  {
    icon: <FaLinkedinIn />,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/shafayetur-rahman/',
  },
  {
    icon: <FaGithub />,
    label: 'Github',
    link: 'https://github.com/11Shafayet/',
  },
  {
    icon: <LiaGlobeEuropeSolid />,
    label: 'Website',
    link: 'https://shafayet.me/',
  },
];

const Sidebar = ({ searchedText, setSearchedText, handleSubmit }) => {
  return (
    <div>
      {/* search box */}
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          className="w-[250px] px-3 bg-transparent border border-theme !focus:outline-none !focus:ring-0 leading-none h-12"
          placeholder="Search ..."
          value={searchedText}
          onChange={(e) => setSearchedText(e.target.value)}
        />
        <div className="inline-flex h-full mt-0.5">
          <button
            type="submit"
            className="bg-theme px-6 py-full inline-flex justify-center items-center h-12 hover:bg-opacity-90 ml-1"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      {/* categories */}
      <div className="mt-12">
        <h5 className="text-2xl font-semibold">Product Categories</h5>
        <div className="bg-theme h-0.5 w-11 my-5" />
        <div className="grid grid-cols-2 gap-4 md:gap-12">
          {categories.map((item, i) => {
            return (
              <div key={i}>
                <div className="flex justify-center items-center bg-white">
                  <img
                    src={item.image}
                    alt="category"
                    className="w-full h-auto max-h-[200px] object-cover"
                  />
                </div>
                <p className="mt-4">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-600 w-full h-[1px] my-12" />

      {/* New Arrival */}
      <div className="mt-12">
        <h5 className="text-2xl font-semibold">New Arrival</h5>
        <div className="bg-theme h-0.5 w-11 my-5" />

        <div className="flex flex-col gap-4">
          {newArrivals.map((item, i) => {
            return (
              <div className="flex items-center gap-5" key={i}>
                <div className="w-[30%] h-auto bg-secondary flex justify-center items-center p-3">
                  <img
                    src={item.img}
                    alt="new Arrival"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-[17px] font-bold">{item.label}</h5>
                  <p className="mb-3 mt-1">${item.regPrice}</p>
                  <LineButton label={`Add To Cart`} classname={`text-sm`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-600 w-full h-[1px] my-12" />

      {/* Social Links */}
      <div className="mt-12">
        <h5 className="text-2xl font-semibold">Follow Us</h5>
        <div className="bg-theme h-0.5 w-11 my-5" />

        <div className="flex flex-wrap gap-6 items-center justify-start">
          {social.map((item, i) => {
            return (
              <Link
                to={item.link}
                target="_blank"
                className="flex items-center gap-2 hover:text-theme hover:-translate-y-1 duration-300 hover:scale-105"
                key={i}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
