import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
const Product = ({ title, price, image, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="product__ratingStar" />
            ))}
        </p>
      </div>
      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
