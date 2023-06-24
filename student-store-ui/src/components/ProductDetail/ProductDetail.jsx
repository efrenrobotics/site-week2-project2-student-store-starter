import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductView from "../ProductView/ProductView";
import NotFound from "../NotFound/NotFound";
import axios from "axios";

const ProductDetail = ({
  handleAddItemToCart,
  handleRemoveItemToCart,
  setShoppingCart,
}) => {
  const url = `http://localhost:3001/store/`;
  const [curProduct, setCurProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  useEffect(() => {
    try {
      console.log(`${url}${productId}`);
      axios.get(`${url}${productId}`).then((response) => {
        setCurProduct(response.data.product);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  }, [productId]);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <div className="product-detail">
      <ProductView product={curProduct} />
    </div>
  );
};

export default ProductDetail;
