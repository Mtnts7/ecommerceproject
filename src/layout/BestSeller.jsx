import React from "react";
import ProductCards from "../components/ProductCards";

function BestSeller() {
  return (
    <div className="container m-auto">
      <div className="text-center pt-10 font-montserrat">
        <h4 className="font-bold text-textgrey">Featured Products</h4>
        <h3 className=" font-bold">BESTSELLER PRODUCTS</h3>
        <p className="text-textgrey">
          Problem trying to resolve the conflict between
        </p>
      </div>
      <div className="flex">
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
      </div>
    </div>
  );
}

export default BestSeller;
