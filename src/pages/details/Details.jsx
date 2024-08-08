import React, { useEffect, useState } from "react";
import AtomicSpinner from "atomic-spinner";
import "./Details.scss";
import useProduct from "../../App/useProducts";
import { isLike, liked, chickenHell, star } from "../../assets/index";

const Details = ({ carrier }) => {
  // LOADING
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  // LOADING
  const [goods, setGoods] = useState([]);

  let { loading, products, error, getProducts } = useProduct();

  const filtering = () => {
    const news = products.filter((pr) => pr.id === carrier);
    setGoods(news);
  };
  useEffect(() => {
    filtering();
  }, []);
  const [isLoved, setIsLoved] = useState(false);

  const handleLoveClick = () => {
    setIsLoved(!isLoved);
  };

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <AtomicSpinner className="spinner" />
        </div>
      ) : (
        <div className="out-card">
          {goods.map((product) => (
            <div className="card" key={product.id}>
              <div className="love-reaction-container">
                <button
                  className={`love-reaction-button ${isLoved ? "loved" : ""}`}
                  onClick={handleLoveClick}
                >
                  <span className="heart" role="img" aria-label="Love">
                    {isLoved ? (
                      <img src={liked} alt="img" />
                    ) : (
                      <img src={isLike} alt="img" />
                    )}
                  </span>
                </button>
              </div>
              <img
                onClick={() => handlePage(product.id)}
                className="chickenHell"
                src={chickenHell}
                alt="img"
              />
              <p className="type">{product.brand}</p>
              <p>{product.name}</p>
              <div className="min-rating">
                <p>{product.time} </p>
                <img src={star} alt="img" />
                <p>{product.rating}</p>
              </div>
              <div className="price-add">
                <p>{product.price}</p>
                <button>+</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Details;
