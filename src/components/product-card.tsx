import React from 'react';
import { IProduct } from "../models/product.type";


 function productCard({id,title,description,image}:IProduct) {
  return (
    <div className="card border-primary">
      <img className="card-img-top" src={image} alt="Title"/>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default productCard
