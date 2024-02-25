/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const LineButton = ({ link, label, classname }) => {
  return (
    <Link
      className={`uppercase relative tracking-widest group hover:text-theme duration-500 ${
        classname && classname
      }`}
      to={link ? link : '/'}
    >
      {label ? label : 'Explore More'}
      <span className="absolute bg-white w-full h-[1px] -bottom-1 left-0" />
      <span className="absolute bg-theme w-0 h-[1px] -bottom-1 left-0 group-hover:w-full duration-500" />
    </Link>
  );
};

export default LineButton;
