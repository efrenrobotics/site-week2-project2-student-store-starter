import React from "react";
import { useState, useEffect } from "react";
import ProductView from "../ProductView/ProductView";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import axios from "axios";

const ProductDetail = ({ handleAddItemToCart, handleRemoveItemToCart }) => {
  console.log("PAGE IS REACHED");
  const url = `https://codepath-store-api.herokuapp.com/store/`;
  const [curProduct, setCurProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  useEffect(() => {
    try {
      axios.get(`${url}${productId}`).then((response) => {
        setCurProduct(response.data.product);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  }, [productId]);

  console.log("This is the product ", curProduct);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <div className="product-detail">
      <p> ProductId: {productId}</p>
      <ProductView product={curProduct} />
    </div>
  );
};

export default ProductDetail;
