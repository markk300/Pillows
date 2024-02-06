import React from "react";
import starsImg from "../../assets/Icons/Path 55.png";

export const StarsComponent = ({ stars }) => {
  const review = [];
  for (let i = 0; i < stars; i++) {
    review.push(<img key={i} src={starsImg} alt="star" />);
  }

  return <div className="flex justify-center">{review}</div>;
};
