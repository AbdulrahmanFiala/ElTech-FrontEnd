import ProductCard from "./ProductCard";

const ProductsRow = ({ products, handleAddProductToCart }) => {
	return (
		<div className="row">
			{products.map((product) => {
				return (
					<div key={product.id} className="col-lg-6 col-md-6">
						<ProductCard 
						product={product}
						handleAddProductToCart={handleAddProductToCart}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProductsRow;
