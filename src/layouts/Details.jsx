import React from "react";
import { Link } from "react-router";

const Details = ({ singleDetails }) => {
  const {category_id, image_url, title, details } = singleDetails;
  return (
    <div className="p-6 rounded-2xl">
      <img className="w-full h-[350px]" src={image_url} alt="" />
      <h1 className="font-bold text-2xl">{title}</h1>
      <p>{details}</p>

      <Link to={`/category/${category_id}`} className="btn bg-secondary text-white">All news in this category</Link>
    </div>
  );
};

export default Details;
