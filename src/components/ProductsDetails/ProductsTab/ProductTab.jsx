import React from "react";
import DescriptionContent from "./DescriptionContent";
import ReviewsSection from "./ReviewSection";
import ProductSpecifications from "./ProductSpecification";

const ProductDetailsTab = ({ product }) => {
  console.log(product);
  return (
    <div className="row">
      <div className="col-lg-8 col-md-8">
        <div className="product-tabarea">
          <ul
            className="nav nav-tabs productTabs"
            id="productTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="descriptions-tab"
                data-toggle="tab"
                href="#descriptions"
                role="tab"
                aria-controls="descriptions"
                aria-selected="true"
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="reviews-tab"
                data-toggle="tab"
                href="#reviews"
                role="tab"
                aria-controls="reviews"
                aria-selected="false"
              >
                Reviews ({product.reviews && product.reviews.length})
              </a>
            </li>
          </ul>
          <div className="tab-content" id="productTabContent">
            <DescriptionContent description={product.description} />
            <ReviewsSection product={product} />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4">
        <ProductSpecifications features={product.features} />
      </div>
    </div>
  );
};

export default ProductDetailsTab;
