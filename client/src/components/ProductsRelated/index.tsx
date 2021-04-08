import React from "react";
import ProductCard from "../ProductCard";
import { StyledProductsRelated } from "./StyledProductsRelated";
import { Link } from "react-router-dom";

export default function ProductsRelated({ products, title}) {
  return (
    <>
    <h3>{title}</h3>
    <div className="photo">
      <ul>
        {products ? (
          products.map((item, i) => (
            <li key={i}>
              <ProductCard item={item}></ProductCard>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  </>
  );
}
