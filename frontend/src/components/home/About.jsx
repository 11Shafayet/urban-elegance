import banner2 from '../../assets/banner2.jpg';

const About = () => {
  return (
    <section className="py-12 md:py-20 relative min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20  xl:gap-44 items-center">
          {/* number */}
          <div className="absolute bottom-[-11%] -left-6 xl:-left-24">
            <h1 className="text-textLight text-7xl md:text-[200px] xl:text-[333px]">
              02
            </h1>
          </div>

          <div>
            <h5 className="uppercase text-theme tracking-widest font-secondary">
              ABOUT Urban Elegance
            </h5>
            <h2 className="text-4xl md:text-5xl !leading-tight font-bold max-w-[650px] mt-2">
              Ready For Urban Elegance New Collection?
            </h2>
            <p className="opacity-75  text-base !leading-loose mt-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciuntipsam voluptatem quia
              voluptas . Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
          </div>

          <div>
            <img
              src={banner2}
              alt="banner"
              className="max-h-[600px] h-full w-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
