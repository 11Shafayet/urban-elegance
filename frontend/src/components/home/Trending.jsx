import product7 from '../../assets/7.png';
import product11 from '../../assets/11.png';
import product12 from '../../assets/12.png';
import product15 from '../../assets/15.png';
import LineButton from '../common/LineButton';

const dummyData = [
  {
    image: product12,
    title: 'Triangle Wood Table',
    regPrice: '187',
    salePrice: '175',
    sale: true,
    id: 1,
  },
  {
    image: product11,
    title: 'Mini Table Lamp',
    regPrice: '97',
    salePrice: '72',
    sale: true,
    id: 1,
  },
  {
    image: product7,
    title: 'Gray Leither Chair',
    regPrice: '134',
    salePrice: '123',
    sale: true,
    id: 1,
  },
  {
    image: product15,
    title: 'Floor Lamp Set',
    regPrice: '157',
    salePrice: '145',
    sale: true,
    id: 1,
  },
];

const Trending = () => {
  return (
    <section className="py-12 md:py-20 relative bg-secondary flex justify-center items-center z-10">
      <div className="container mx-auto px-4 relative">
        {/* number */}
        <div className="absolute top-[-22%] right-[22%] -z-10">
          <h1 className="text-textLight text-7xl md:text-[200px] xl:text-[333px]">
            03
          </h1>
        </div>

        {/* heading wrapper */}
        <div className="text-center max-w-[700px] mx-auto">
          <h5 className="uppercase text-theme tracking-widest font-secondary">
            Hot Deal
          </h5>
          <h2 className="text-4xl !leading-tight font-bold mt-2">
            Trending Furniture This Week
          </h2>
          <p className="opacity-75 text-base !leading-loose mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        {/* products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-12">
          {dummyData?.map((item, i) => {
            const { image, title, salePrice, regPrice, sale } = item;
            return (
              <div key={i} className="bg-primary relative p-4 md:p-6">
                {sale && (
                  <div className="absolute -right-5 -top-5 w-14 h-14 bg-theme rounded-full flex justify-center items-center text-black font-bold text-[13px]">
                    SALE!
                  </div>
                )}
                <div className="mx-auto flex justify-center items-center">
                  <img
                    src={image}
                    alt="product"
                    className="max-w-full h-auto"
                  />
                </div>

                <div className="text-center mt-6">
                  <h5 className="text-xl font-semibold">{title}</h5>
                  <p className="flex justify-center items-center gap-2 mb-2">
                    <span className="line-through opacity-30">
                      ${regPrice}.00
                    </span>{' '}
                    <span className="font-semibold text-lg underline">
                      ${salePrice}.00
                    </span>
                  </p>

                  <div className="mt-4">
                    <LineButton
                      link={`/`}
                      label="Add To Cart"
                      classname={`text-sm`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trending;
