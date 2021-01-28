import React, { Component } from "react";
import classes from "./App.module.css";
import productService from "./ProductService/ProductService";
import ProductItem from "./Components/ProductItem/ProductItem";
import Toolbar from "./Components/Toolbar/Toolbar";
import PaginationComponent from "./Components/UI/Pagination";

class App extends Component {
  state = {
    productContainer: [],

    appliedFilters: "",
    productCategory: "",
    productCode: "",

    productAddedName: "",
    productAddedCode: "",
    productAddedCategory: "",
    productAddedDescription: "",
    productAddedStatus: "",

    totalProducts: 0,
    productsPerPage: 6,
    currentPage: 1,
  };

  getProduct = async () => {
    const data = await productService;
    const totalProducts = await data.length;
    this.setState({ productContainer: data, totalProducts: totalProducts });
    console.log(this.state.productContainer);
  };

  componentDidMount() {
    this.getProduct();
  }

  inputChangedHandler = (e) => {
    e.preventDefault();
    this.setState({ appliedFilters: e.target.value,search:true });
  };

  deleteProductHandler = (idx) => {
    const remainingProduct = this.state.productContainer.splice(idx,1);
    this.setState({ productCode: remainingProduct });
  };


  productNameHandler = (e) => {
    this.setState({ productAddedName: e.target.value });
  };

  productCodeHandler = (e) => {
    this.setState({ productAddedCode: e.target.value });
  };

  productCategoryHandler = (e) => {
    this.setState({ productAddedCategory: e.target.value });
  };

  productDescriptionHandler = (e) => {
    this.setState({ productAddedDescription: e.target.value });
  };

  productStatusHandler = (e) => {
    this.setState({ productAddedStatus: e.target.value });
  };

  addProductHandler = (e) => {
    e.preventDefault();
    this.setState({
      productContainer: [
        ...this.state.productContainer,
        {
          name: this.state.productAddedName,
          code: this.state.productAddedCode,
          category: this.state.productAddedCategory,
          description: this.state.productAddedDescription,
          status: this.state.productAddedStatus,
        }
      ]
    });
  };

  onPageChangeHandler = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const search = this.state.appliedFilters;
    const category = this.state.productCategory;
    const currentPage = this.state.currentPage;
    const productsPerPage = this.state.productsPerPage;
    let filteredProduct = this.state.productContainer
      .slice(
        (currentPage - 1) * productsPerPage,
        (currentPage - 1) * productsPerPage + productsPerPage
      )
      .filter(
        (product) =>
          product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 
      );
  
    return (
      <div className={classes.App}>
        <Toolbar
          changed={(e) => this.inputChangedHandler(e)}
          allClicked={this.allClickedHandler}
          electricalClicked={this.electricalClickedHandler}
          clothingClicked={this.clothingClickedHandler}
          addProduct={(e) => this.addProductHandler(e)}
          productName={(e) => this.productNameHandler(e)}
          productCode={(e) => this.productCodeHandler(e)}
          productCategory={(e) => this.productCategoryHandler(e)}
          productDescription={(e) => this.productDescriptionHandler(e)}
          productStatus={(e) => this.productStatusHandler(e)}
        />

        <PaginationComponent
          totalProducts={this.state.totalProducts}
          productsPerPage={this.state.productsPerPage}
          currentPage={this.state.currentPage}
          onPageChange={(page) => this.onPageChangeHandler(page)}
        />

        <div className={classes.Body}>
          {filteredProduct.map(
            ({ name, code, category, description, status }, idx) => (
              <ProductItem
                key={code}
                name={name}
                code={code}
                category={category}
                description={description}
                status={status}
                clicked={() => this.deleteProductHandler(idx)}
              />
            )
          ) }
        </div>
      </div>
    );
  }
}

export default App;
