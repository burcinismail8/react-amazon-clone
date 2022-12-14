import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
            {basket.map((item, id) => (
              <CheckoutProduct
                key={id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <h2 className="checkout__right">
          <Subtotal />
        </h2>
      </div>
    </>
  );
};

export default Checkout;
