import React from "react";
import "./Product.css";

const Product = ({ data }) => {
  // Note: this id should come from api
  const product = { id: 1 };
  console.log(data);
  return (
    <div className="prodbox">
      {data.map((el) => {
        return (
          <div  key={el.id}>
            <div className="Sprod" data-cy={`product-${el.id}`}>
              <h3 data-cy="product-name">{el.name}</h3>
              <h6 data-cy="product-description">{el.description}</h6>
              <button data-cy="product-add-item-to-cart-button">
                ADD TO CART
              </button>
              <div>
                <button data-cy="product-increment-cart-item-count-button">
                  -
                </button>
                <span data-cy="product-count">{}</span>
                <button data-cy="product-decrement-cart-item-count-button">
                  +
                </button>
                <button data-cy="product-remove-cart-item-button">
                  Remove From Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
