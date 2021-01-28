import React from "react";
import classes from "./Toolbar.module.css";
import ProductModal from "../UI/ProductModal";


const Toolbar = ({
  changed,
  addProduct,
  productName,
  productCode,
  productCategory,
  productDescription,
  productStatus,
}) => {
  return (
    <div className={classes.Toolbar}>
      <ProductModal
        addProduct={addProduct}
        productName={productName}
        productCode={productCode}
        productDescription={productDescription}
        productStatus={productStatus}
        productCategory={productCategory}
      />
      <input type="text" placeholder="Search by name" onChange={changed} />
    </div>
  );
};

export default Toolbar;
