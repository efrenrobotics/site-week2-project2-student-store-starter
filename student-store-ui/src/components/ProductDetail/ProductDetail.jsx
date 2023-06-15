import React from "react";
import ProductView from "../ProductView/ProductView";
import NotFound from "../NotFound/NotFound";
import { useState } from "react";

const ProductDetail = () => {
  const [curProduct, setCurProduct] = useState({});

  return (
    <div>
      {curProduct.id ? <ProductView product={curProduct} /> : <NotFound />}
    </div>
  );
};

export default ProductDetail;
