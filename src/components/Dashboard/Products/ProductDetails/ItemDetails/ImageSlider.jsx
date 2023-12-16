const ProductSlider = ({ product }) => {
	return (
		<div
			id="product-slider"
			className="carousel slide product-slider"
			data-ride="carousel"
		>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<div className="ps-img">
						<img
							src={product.thumbnail && product.thumbnail.image}
							alt=""
							style={{ maxWidth: "501px", maxHeight: "513px" }}
						/>
					</div>
				</div>
				{product.images &&
					product.images.map((image) => {
						if (image.image !== product.thumbnail.image) {
							return (
								<div className="carousel-item" key={image.id}>
									<div className="ps-img">
										<img
											src={image.image}
											alt=""
											style={{
												maxWidth: "501px",
												maxHeight: "513px",
											}}
										/>
									</div>
								</div>
							);
						}
						return <></>;
					})}
			</div>
			<ol className="carousel-indicators clearfix">
				<li
					data-target="#product-slider"
					data-slide-to="0"
					className="active"
				>
					<img
						src={product.thumbnail && product.thumbnail.image}
						alt=""
						style={{ maxWidth: "100px", maxHeight: "100px" }}
					/>
				</li>
				{product.images &&
					product.images.map((image, index) => {
						if (image.image !== product.thumbnail.image) {
							return (
								<li
									data-target="#product-slider"
									data-slide-to={index}
									key={image.id}
								>
									<img
										src={image.image}
										alt=""
										style={{
											maxWidth: "100px",
											maxHeight: "100px",
										}}
									/>
								</li>
							);
						}
						return <></>;
					})}
			</ol>
		</div>
	);
};

export default ProductSlider;
