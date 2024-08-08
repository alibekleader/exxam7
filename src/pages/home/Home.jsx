import React, { useEffect, useState } from "react";
import AtomicSpinner from "atomic-spinner";

import {
  heroImg,
  aboveChicken,
  belowGraph,
  phone,
  chicken,
  bookMark,
  chickenHell,
  isLike,
  liked,
  star,
  sweDish2,
  sweDish3,
} from "../../assets/index";
import "./Home.scss";

const Home = () => {
  // LOADING
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  // LOADING
  // LOVE REACTION
  const [isLoved, setIsLoved] = useState(false);

  const handleLoveClick = () => {
    setIsLoved(!isLoved);
  };

  // LOVE REACTION
  const handlePage = (id) => {
    setCarrier(id);
    navigate("/details", { replace: true });
  };

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <AtomicSpinner className="spinner" />
        </div>
      ) : (
        <main>
          <section className="container">
            <div className="left-side">
              <p className="whole-users">------ OVER 1000 USERS</p>
              <p className="color_change ">Enjoy Foods All Over The World</p>
              <p>
                EatLy help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a $20 bonus.
              </p>
              <div>
                <button>Get Started</button>
              </div>
            </div>
            <div className="right-side">
              <div className="above-img">
                <img
                  onClick={() => handlePage(product.id)}
                  src={aboveChicken}
                  alt="above-img"
                />
                <div className="chicken-texts">
                  <p>Chicken Hell</p>
                  <p>On The Way</p>
                  <p>3:09 PM</p>
                </div>
              </div>
              <div className="circle-img">
                <img className="food-img" src={heroImg} alt="heroImg" />
              </div>
              <img className="graph" src={belowGraph} alt="graph-img" />
            </div>
          </section>
          <section>
            <div className="second-items container">
              <div className="cards">
                <div className="card one">
                  <p className="first-one">10K+</p>
                  <div className="texts">
                    <p>Satisfied Costumers</p>
                    <p>All Great Over The World </p>
                  </div>
                </div>
                <div className="card one">
                  <p className="first-one">4M</p>
                  <div className="texts">
                    <p>Healthy Dishes Sold</p>
                    <p>Including Milk Shakes Smooth </p>
                  </div>
                </div>
                <div className="card one">
                  <p className="first-one">99.99%</p>
                  <div className="texts">
                    <p>Reliable Customer Support</p>
                    <p>We Provide Great Experiences </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container">
            <img src={phone} alt="Phone-img" />
            <div className="right-side">
              <p>Premium Quality For Your Health</p>
              <li>
                Premium quality food is made with ingredients that are packed
                with essential vitamins, minerals.
              </li>
              <li>
                These foods promote overall wellness by support healthy
                digestion and boosting immunity
              </li>
              <button>Download</button>
            </div>
          </section>
          <section className="container">
            <div className="chicken">
              <img
                className="chicken-img"
                style={{ maxWidth: "1000px" }}
                src={chicken}
                alt="img"
              />
              <div className="below-img">
                <p>The Chicken King</p>
                <img src={bookMark} alt="bookmark-img" />
              </div>
            </div>
          </section>
          <section className="container">
            <div className="title">
              <p>Our Top</p>
              <p>Dishes</p>
            </div>
            <div className="cards">
              <div className="card">
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
                <img className="chickenHell" src={chickenHell} alt="img" />
                <p className="type">Healthy</p>
                <p>Chicken Hell</p>
                <div className="min-rating">
                  <p>24min </p>
                  <img src={star} alt="img" />
                  <p>4.8</p>
                </div>
                <div className="price-add">
                  <p>$12.99</p>
                  <p>+</p>
                </div>
              </div>
              <div className="card">
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
                <img className="chickenHell" src={sweDish2} alt="img" />
                <p className="type">Healthy</p>
                <p>Chicken Hell</p>
                <div className="min-rating">
                  <p>24min </p>
                  <img src={star} alt="img" />
                  <p>4.8</p>
                </div>
                <div className="price-add">
                  <p>$12.99</p>
                  <p>+</p>
                </div>
              </div>
              <div className="card">
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
                <img className="chickenHell" src={sweDish3} alt="img" />
                <p className="type">Healthy</p>
                <p>Chicken Hell</p>
                <div className="min-rating">
                  <p>24min </p>
                  <img src={star} alt="img" />
                  <p>4.8</p>
                </div>
                <div className="price-add">
                  <p>$12.99</p>
                  <p>+</p>
                </div>
              </div>
              <div className="card">
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
                <img className="chickenHell" src={chickenHell} alt="img" />
                <p className="type">Healthy</p>
                <p>Chicken Hell</p>
                <div className="min-rating">
                  <p>24min </p>
                  <img src={star} alt="img" />
                  <p>4.8</p>
                </div>
                <div className="price-add">
                  <p>$12.99</p>
                  <p>+</p>
                </div>
              </div>
              <div className="card">
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
                <img className="chickenHell" src={sweDish2} alt="img" />
                <p className="type">Healthy</p>
                <p>Chicken Hell</p>
                <div className="min-rating">
                  <p>24min </p>
                  <img src={star} alt="img" />
                  <p>4.8</p>
                </div>
                <div className="price-add">
                  <p>$12.99</p>
                  <p>+</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Home;
