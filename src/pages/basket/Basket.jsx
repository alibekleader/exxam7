import React, { useEffect, useState } from "react";
import AtomicSpinner from "atomic-spinner";
import "./Basket.scss";
import { aboveChicken } from "../../assets";
import useProduct from "../../App/useProducts";

const Basket = () => {
  const {
    loading,
    products,
    error,
    getProducts,
    chosenFood,
    Foods,
    addTodo,
    getChosenPro,
  } = useProduct();

  const [isLoading, setIsLoading] = useState(true);
  const [totalCost, setTotalCost] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    getChosenPro();
    console.log(Foods);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <AtomicSpinner className="spinner" />
        </div>
      ) : (
        <div className="container basket-pg">
          <div className="cards">
            <div className="card">
              {Foods.map((pro, i) => (
                <div className="pro-items" key={i}>
                  <div className="left-part">
                    <img src={aboveChicken} alt="img" />
                    <div className="name-price">
                      <p>{pro.name}</p>
                      <p>{pro.price}</p>
                    </div>
                  </div>
                  <div>
                    <div className="plus-minus">
                      <button
                        onClick={() => {
                          if (totalCost > 1) {
                            setTotalCost(totalCost - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      <span>{totalCost}</span>
                      <button onClick={() => setTotalCost(totalCost + 1)}>
                        +
                      </button>
                    </div>
                    <div className="price-total"> {pro.price * totalCost} </div>
                  </div>
                </div>
              ))}
              <div></div>
            </div>
          </div>
          <div className="payment">
            <div className="subtotal">
              <p>Subtotal</p>
              <p>$58.96</p>
            </div>
            <div className="delivery">
              <p>Delivery</p>
              <p>$3.5</p>
            </div>
            <div className="total">
              <p>Total</p>
              <p>12.99</p>
            </div>
            <button>Review Payment</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Basket;

<div className="container basket-pg">
  <div className="cards">
    <div className="card">
      <div>
        <div className="left-part">
          <img src={aboveChicken} alt="img" />
          <div className="name-price">
            <p>Chicken Hell</p>
            <p>$12.99</p>
          </div>
        </div>
      </div>
      <div>
        <div className="plus-minus">
          <button>-</button>
          <span></span>
          <button>+</button>
        </div>
        <div className="price">12.99</div>
      </div>
    </div>
  </div>
</div>;
