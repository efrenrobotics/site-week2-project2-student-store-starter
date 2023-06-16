import React from "react";
import { useState, useParams, useEffect } from "react";
import ProductView from "../ProductView/ProductView";
import NotFound from "../NotFound/NotFound";
import axios from "axios";

const ProductDetail = ({ handleAddItemToCart, handleRemoveItemToCart }) => {
  const url = `https://codepath-store-api.herokuapp.com/store/:`;
  const [curProduct, setCurProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  useEffect(() => {
    try {
      axios.get(url + productId).then((response) => {
        setCurProduct(response.data);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  }, [productId]);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (!product) {
    return <NotFound />;
  }
  return (
    <div className="product-detail">
      <p>{curProduct}</p>
      <p> ProductId: {productId}</p>
    </div>
  );
};

export default ProductDetail;
