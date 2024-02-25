import banner4 from '../../assets/banner4.jpg';
import banner5 from '../../assets/banner5.jpg';
import LineButton from '../common/LineButton';

const BestSale = () => {
  return (
    <section className="relative z-10">
      <div className="container mx-auto px-4 max-w-[1200px] relative">
        {/* number */}
        <div className="absolute top-[22%] right-0 -z-10">
          <h1 className="text-textLight text-7xl md:text-[200px] xl:text-[333px]">
            04
          </h1>
        </div>

        {/* item */}
        {/* item */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img
              src={banner4}
              alt="banner"
              className="w-full h-auto object-cover max-h-[200px] md:max-h-[750px]"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-20">
            <h5 className="text-3xl font-semibold">Modern Living Room</h5>
            <p className="mt-2 tracking-widest">$448 Full Set Items</p>

            <p className="mt-10 max-w-[455px] leading-loose mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut oditaut sunt explicabo.
            </p>

            <LineButton label="Explore More" />
          </div>
        </div>

        {/* item */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2">
            <img
              src={banner5}
              alt="banner"
              className="w-full h-auto object-cover max-h-[200px] md:max-h-[750px]"
            />
          </div>
          <div className="w-full md:w-1/2  md:pr-20">
            <h5 className="text-3xl font-semibold">Luxury Furniture</h5>
            <p className="mt-2 tracking-widest">$521 Full Set Items</p>

            <p className="mt-10 max-w-[455px] leading-loose mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut oditaut sunt explicabo.
            </p>

            <LineButton label="Explore More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSale;
