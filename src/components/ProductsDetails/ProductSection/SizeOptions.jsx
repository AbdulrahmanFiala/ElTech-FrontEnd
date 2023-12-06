import React from 'react';

const ProductSizeOptions = () => {
  return (
    <div className="product-size">
      <h5>Size:</h5>
      <div className="size-wrapper">
        <div className="size-btn clearfix">
          <input type="radio" id="x" name="size" value="x" />
          <label htmlFor="x">x</label>
        </div>
        <div className="size-btn clearfix">
          <input type="radio" id="xr" name="size" value="xr" />
          <label htmlFor="xr">XR</label>
        </div>
        <div className="size-btn clearfix">
          <input checked="checked" type="radio" id="xs" name="size" value="xs" />
          <label htmlFor="xs">xs</label>
        </div>
        <div className="size-btn clearfix">
          <input type="radio" id="xm" name="size" value="xm" />
          <label htmlFor="xm">xm</label>
        </div>
      </div>
    </div>
  );
};

export default ProductSizeOptions;
