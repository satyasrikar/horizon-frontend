import React from "react";
import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carousel.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
            Get Motor insurance quotes in{" "}
            <span style={{ color: "orange" }}>5 minutes</span>!
          </h3>
          <p>
            Process your insurance policies in under 5 minutes* with our quick
            and hassle free platform.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carousel.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Choose and compare policies from top partners!</h3>
          <p>
            Compare policies from top partners and avail the best discounts in
            the market right now.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carousel.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>
            Easy checkout and offers to help you save on insurance quotes.
          </h3>
          <p>
            Dont't forget to check for trending offers and coupons to get the
            best price and compare policies easily.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
