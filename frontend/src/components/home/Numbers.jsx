import { TbTruckDelivery } from 'react-icons/tb';
import { IoCubeSharp } from 'react-icons/io5';
import { RiEmojiStickerFill } from 'react-icons/ri';
import { FaRegCreditCard } from 'react-icons/fa';

const dummyData = [
  {
    icon: <TbTruckDelivery size={44} />,
    title: 'Express Delivery',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit tellus,luctus ullamcorper.',
  },
  {
    icon: <IoCubeSharp size={44} />,
    title: 'Premium Packaging',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit tellus,luctus ullamcorper.',
  },
  {
    icon: <RiEmojiStickerFill size={44} />,
    title: 'Friendly Services',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit tellus,luctus ullamcorper.',
  },
  {
    icon: <FaRegCreditCard size={44} />,
    title: 'Safe Payment',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit tellus,luctus ullamcorper.',
  },
];

const numbersData = [
  {
    number: '2,167+',
    label: 'Completed Project',
  },
  {
    number: '86+',
    label: 'Expert Employees',
  },
  {
    number: '1,146+',
    label: 'Satisfied Clients',
  },
  {
    number: '37+',
    label: 'Winning Awards',
  },
  {
    number: '114+',
    label: 'Branch Shop',
  },
];

const Numbers = () => {
  return (
    <section className="py-12 md:py-20 relative bg-secondary z-10">
      <div className="container mx-auto px-4 relative">
        {/* number */}
        <div className="absolute top-[-11%] left-0 -z-10">
          <h1 className="text-textLight text-7xl md:text-[200px] xl:text-[333px]">
            06
          </h1>
        </div>

        <div>
          <h5 className="uppercase text-theme tracking-widest font-secondary">
            why choose us
          </h5>
          <h2 className="text-4xl !leading-tight font-bold mt-2">
            We Are Trusted All Over The World!
          </h2>
        </div>

        {/* services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-20 mt-12 md:mt-20">
          {dummyData?.map((item, i) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-4 text-center"
                key={i}
              >
                <div className="flex justify-center items-center p-2 w-16 h-16 bg-primary">
                  {item.icon}
                </div>
                <h5 className=" text-2xl font-medium">{item.title}</h5>
                <p className="opacity-60">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="my-12 md:my-20 bg-theme bg-opacity-50 h-[1px] w-full" />

        {/* numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-20 mt-12 md:mt-20">
          {numbersData?.map((item, i) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-4 text-center"
                key={i}
              >
                <h5 className=" text-4xl font-bold">{item.number}</h5>
                <p className="opacity-60">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
