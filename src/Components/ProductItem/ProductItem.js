import React from "react";
import classes from "./ProductItem.module.css";
import AlertDialogBox from '../UI/AlertDialog';

const ProductItem = ({ name, code, category, description, status,clicked }) => {
  return (
    <div className={classes.ProductItem}>
      <h2 style={{fontWeight:"bold",fontSize:"20px",marginBottom:"5px"}}>{name}</h2>
      <p>Code: {code}</p>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <p>Status: {status}</p>
      <AlertDialogBox  clicked={clicked}/>
    </div>

  );
};

export default ProductItem;
