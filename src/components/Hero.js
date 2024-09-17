"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  let setting = {
    dots: true,
    infinite: true,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg", 
      title: "Trending Item",
      mainTitle: "Women latest fashion sale",
      price: "$40",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Trending Accessories",
      mainTitle: "Modern Sunglasses",
      price: "$80",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Sale Offer",
      mainTitle: "New fashion summer sale",
      price: "$20",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
      <Slider {...setting}>
        {slideData.map((item) => (
          <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
          />
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Hero;
