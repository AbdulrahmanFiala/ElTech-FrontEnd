import { useState } from 'react';
import { showToast } from '../../../src/utils/toastUtil';


const DiscountCoupon = ({ handleCoupon }) => {
	const [formData, setFormData] = useState({code: ''});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async () => {
		try {
			await handleCoupon(formData);
			showToast('coupon code applied successfully', 'success');
		} catch (error) {
			showToast(error.toString())
		}
	};

	return (
		<div className="col-md-6">
			<div className="coupon">
				<h3>Coupon discount</h3>

				<p>
					Enter your code if you have one. Pellentesque habitant morbi
					tristique senectus et netus et malesuada fames ac turpis
					egestas.
				</p>
				<input
					type="text"
					name="code"
					placeholder="Enter Your code Here"
					onChange={handleChange}
				/>
				<button
					type="button"
					className="button"
					name="apply_coupon"
					onClick={handleSubmit}
				>
					Apply coupon
				</button>

			</div>
		</div>
	);
};

export default DiscountCoupon;
