import React, { useEffect, useState } from "react";
import AtomicSpinner from "atomic-spinner";
import "./Dishes.scss";
import useProduct from "../../App/useProducts";

import {
  isLike,
  liked,
  chickenHell,
  star,
  sweDish2,
  sweDish3,
} from "../../assets/index";
import { useNavigate } from "react-router-dom";

const Dishes = ({ setCarrier }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoved, setIsLoved] = useState(false);
  const [accordionData, setAccordionData] = useState([]);
  const { loading, products, error, getProducts, chosenFood, addTodo } =
    useProduct();
  const [title, setTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const handlePage = (id) => {
    setCarrier(id);
    navigate("/details", { replace: true });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setAccordionData([
      {
        isOpen: true,
        question: "How long does delivery take?",
        content:
          "You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?",
      },
      {
        question: "How Does It Work ?",
        content: "Excellent job",
      },
      {
        question: "How does your food delivery service work?",
        content: "It is amazing",
      },
      {
        question: "What payment options do you accept?",
        content: "There are a lot of options",
      },
      {
        question: "Do you offer discounts or promotions?",
        content: "We have a lot of discounts",
      },
    ]);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  const handleLoveClick = () => {
    setIsLoved(!isLoved);
  };

  const handleAccordionClick = (index) => {
    setAccordionData((prevState) => {
      const newState = [...prevState];
      newState[index].isOpen = !newState[index].isOpen;
      return newState;
    });
  };

  const filteredProducts = products.filter((product) => {
    if (filter !== "All" && product.type !== filter) {
      return false;
    }
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <AtomicSpinner className="spinner" />
        </div>
      ) : (
        <section className="container dishes-hero">
          <div className="input-filter">
            <div className="search">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="cards">
            {filteredProducts.length > 0 ? (
              <div className="cards">
                {filteredProducts.map((product) => (
                  <div className="card" key={product.id}>
                    <div className="love-reaction-container">
                      <button
                        className={`love-reaction-button ${
                          isLoved ? "loved" : ""
                        }`}
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
                    <p onClick={() => handlePage(product.id)}>{product.name}</p>
                    <div className="min-rating">
                      <p>{product.time} </p>
                      <img src={star} alt="img" />
                      <p>{product.rating}</p>
                    </div>
                    <div className="price-add">
                      <p>{product.price}</p>
                      <button onClick={() => addTodo(product)}>+</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h1 style={{ fontFamily: "sans-serif" }}>No dishes found.</h1>
            )}
          </div>
          <hr />
          <div className="down-side">
            <div className="frequent">
              <p>Frequently Asked</p>
              <p>Questions</p>
            </div>
            {accordionData.map(({ question, content, isOpen }, index) => (
              <div className="accordion" key={index}>
                <div
                  className="show-part-first"
                  onClick={() => handleAccordionClick(index)}
                >
                  <p>{question}</p>
                  <span className={`accordion-arrow ${isOpen ? "open" : ""}`}>
                    {isOpen ? "-" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <div className="get-info">
                    <p>{content}</p>
                  </div>
                )}
              </div>
            ))}
            <hr />
          </div>
        </section>
      )}
    </>
  );
};

export default Dishes;
