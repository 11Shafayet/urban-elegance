import {
  FaApplePay,
  FaEbay,
  FaFacebookF,
  FaFedex,
  FaGithub,
  FaLinkedinIn,
  FaStripe,
} from 'react-icons/fa';
import { LiaGlobeEuropeSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

const social = [
  {
    icon: <FaFacebookF />,
    label: 'Facebook',
    link: 'https://www.facebook.com/11Shafayet',
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

const paymentMethods = [
  {
    icon: <FaEbay />,
  },
  {
    icon: <FaApplePay />,
  },
  {
    icon: <FaFedex />,
  },
  {
    icon: <FaStripe />,
  },
];

const navMenu = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/shop',
    label: 'Shop',
  },
  {
    link: '/cart',
    label: 'Cart',
  },
  {
    link: '/my-account',
    label: 'My Account',
  },
  {
    link: '/contact',
    label: 'Contact',
  },
];

const Footer = () => {
  return (
    <section className="py-12 bg-secondary mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex gap-4 text-xl">
            {social.map((item, i) => {
              return (
                <Link
                  to={item.link}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-theme hover:-translate-y-1 duration-300 hover:scale-105"
                  key={i}
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>

          <img
            src={logo}
            alt=""
            className="max-w-[200px] h-auto object-cover"
          />

          <div className="flex gap-4 text-xl">
            {paymentMethods.map((item, i) => {
              return (
                <div className="flex items-center gap-6 text-[44px]" key={i}>
                  {item.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF30] w-full h-[1px] my-12" />

      <div></div>
    </section>
  );
};

export default Footer;
