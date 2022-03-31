import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="top-5">
        <div className="cards-description">
          <h3 className="cards-titles">
            Top 5 performing stocks since inception
          </h3>
        </div>

        <div className="cards__container1">
          <div className="cards__wrapper1">
            <img
              className="cards__items1"
              src="images/img-stocks1.jpg"
              width={100}
              height={150}
              path="/services"
            />
            <img
              className="cards__items1"
              src="images/img-stocks2.jpg"
              width={100}
              height={150}
              path="/services"
            />
            <img
              className="cards__items1"
              src="images/img-stocks3.jpg"
              width={100}
              height={150}
              path="/services"
            />
            <img
              className="cards__items1"
              src="images/img-stocks4.jpg"
              width={100}
              height={150}
              path="/services"
            />
            <img
              className="cards__items1"
              src="images/img-stocks5.jpg"
              width={100}
              height={150}
              path="/services"
            />
          </div>
        </div>
      </div>

      <div className="latest">
        <div className="cards-description">
          <h3 className="cards-titles">Latest Updates</h3>
        </div>
        <div className="cards__container2">
          <div className="cards__wrapper2">
            <img
              className="cards__items2"
              src="images/img-2b1.jpg"
              width={100}
              text="WPP AUNZ Ltd"
              path="/services"
            />
            <img
              className="cards__items2"
              src="images/img-2b1.jpg"
              width={100}
              text="Coca Cola Amatil"
              path="/services"
            />
            <img
              className="cards__items2"
              src="images/img-2b1.jpg"
              width={100}
              text="Amaysim Ltd"
              path="/services"
            />
            <img
              className="cards__items2"
              src="images/img-2b1.jpg"
              width={100}
              text="Vocus Group"
              path="/services"
            />
            <img
              className="cards__items2"
              src="images/img-2b1.jpg"
              width={100}
              text="ASX Event Portfolio"
              path="/services"
            />
          </div>
        </div>
      </div>

      <div className="aboutasx">
        <div className="cards-description">
          <h3 className="cards-titles">About ASX Grouth Portfolio</h3>
        </div>
        <ul className="cards__items-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EzghUOScJXI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ul>
      </div>

      <div className="dividends">
        <div className="cards-description">
          <h3 className="cards-titles">Dividends, IPOs and more</h3>
        </div>
        <div className="cards__container1">
          <div className="cards__wrapper1">
            <img
              className="cards__items1"
              src="images/img-8b1.jpg"
              width={100}
              height={100}
              path="/services"
            />
            <img
              className="cards__items1"
              src="images/img-8b1.jpg"
              width={100}
              height={100}
              path="/services"
            />
            <img
              className="cards__items1"
              src="images/img-8b1.jpg"
              width={100}
              height={100}
              path="/services"
            />
            <img
              className="cards__items1"
              src="images/img-8b1.jpg"
              width={100}
              height={100}
              path="/services"
            />
            <img
              className="cards__items1"
              src="images/img-8b1.jpg"
              width={100}
              height={100}
              path="/services"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
