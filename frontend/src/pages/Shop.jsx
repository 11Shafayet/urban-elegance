import { useState } from 'react';
import SecondaryHeader from '../components/common/SecondaryHeader';
import ShopProducts from '../components/shop/ShopProducts';
import Sidebar from '../components/shop/Sidebar';

const Shop = () => {
  const [searchedText, setSearchedText] = useState('');
  const [catFilter, setCatFilter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <SecondaryHeader path="Shop" label="Products" />

      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-3 gap-4 md:gap-12">
          <div className="col-span-3 lg:col-span-2">
            <ShopProducts />
          </div>
          <div className="col-span-3 lg:col-span-1">
            <Sidebar
              searchedText={searchedText}
              setSearchedText={setSearchedText}
              handleSubmit={handleSubmit}
              setCatFilter={setCatFilter}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
