/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const FillButton = ({ icon, link, label, classname }) => {
  return (
    <Link
      className={`flex justify-center items-center gap-2 py-3 px-8 bg-white text-black uppercase relative tracking-widest group hover:text-white duration-500 z-10 ${
        classname && classname
      }`}
      to={link ? link : '/'}
    >
      {icon && icon}
      {label ? label : 'Buy Now'}

      <span className="absolute bg-theme w-0 h-full inset-0 group-hover:w-full duration-500 -z-10" />
    </Link>
  );
};

export default FillButton;
