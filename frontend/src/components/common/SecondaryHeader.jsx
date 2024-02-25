/* eslint-disable react/prop-types */
const SecondaryHeader = ({ path, label }) => {
  return (
    <section className="py-12 md:py-20 min-h-[35vh] flex flex-col  justify-center items-center lg:w-[66%] bg-secondary text-center">
      <p>
        Home <span className="text-theme">/ {path}</span>
      </p>
      <h5 className="text-3xl md:text-6xl font-bold">{label}</h5>
    </section>
  );
};

export default SecondaryHeader;
