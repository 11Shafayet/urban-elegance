import LineButton from '../common/LineButton';
import one from '../../assets/category1.jpg';

const products = [
  {
    sale: true,
    image: one,
    regPrice: '187',
    salePrice: '175',
  },
  {
    sale: true,
    image: one,
    regPrice: '187',
    salePrice: '175',
  },
  {
    sale: true,
    image: one,
    regPrice: '187',
    salePrice: '175',
  },
  {
    sale: true,
    image: one,
    regPrice: '187',
    salePrice: '175',
  },
  {
    sale: true,
    image: one,
    regPrice: '187',
    salePrice: '175',
  },
];

const ShopProducts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-12">
      {products?.map((item, i) => {
        const { image, title, salePrice, regPrice, sale } = item;
        return (
          <div key={i} className="relative p-4 md:p-6 z-10 group">
            <div className="absolute w-full h-0 group-hover:h-full inset-0 bg-secondary -z-10 duration-500" />
            {sale && (
              <div className="absolute -right-5 -top-5 w-14 h-14 bg-theme rounded-full flex justify-center items-center text-black font-bold text-[13px]">
                SALE!
              </div>
            )}
            <div className="mx-auto flex justify-center items-center">
              <img src={image} alt="product" className="max-w-full h-auto" />
            </div>

            <div className="text-center mt-6">
              <h5 className="text-xl font-semibold">{title}</h5>
              <p className="flex justify-center items-center gap-2 mb-2">
                <span className="line-through opacity-30">${regPrice}.00</span>{' '}
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
  );
};

export default ShopProducts;
