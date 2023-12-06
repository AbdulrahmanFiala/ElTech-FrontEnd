import ShopBanner from "../../components/Shop/ShopBanner/ShopBanner";
import ShopPagination from "../../components/Shop/ShopPagination/ShopPagination";
import ShopDetails from "../../components/Shop/ShopDetails/ShopDetails";

const ShopLayout = () => {
	return (
		<>
			<ShopBanner />
			<section className="shop-fullwidth">
				<ShopDetails />
				{/* <ShopPagination /> */}
			</section>
		</>
	);
};

export default ShopLayout;
