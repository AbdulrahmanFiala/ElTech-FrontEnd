import { useEffect, useState, useRef } from "react";

import $ from "jquery";
import "jquery-countdown";

import { getWeeklyDeal } from "../../api/services/user/product-services";

import img1 from "../../assets/images/home/1.jpg";
import shape3 from "../../assets/images/home/shape3.png";
import { Link } from "react-router-dom";

function WeeklyDeal() {
	const countdownRef = useRef();
	const [weeklyDeal, setWeeklyDeal] = useState();

	useEffect(() => {
		const fetchWeeklyDeal = async () => {
			const data = await getWeeklyDeal();
			if (data && data.deal_time) {
				const [year, month, day] = data.deal_time.split("-");
				data.year = parseInt(year);
				data.month = parseInt(month) - 1;
				data.day = parseInt(day);
				setWeeklyDeal(data);
			}
		};

		fetchWeeklyDeal();
	}, []);

	useEffect(() => {
		if (weeklyDeal) {
			$(countdownRef.current).countdown(
				new Date(weeklyDeal.deal_time),
				function (event) {
					$(this).html(
						event.strftime(
							`<span class="countdown-row countdown-show4">
                  <span class="countdown-section">
                  <span class="countdown-amount">%D</span>
                  <span class="countdown-period">Days</span>
                </span>
                <span class="countdown-section">
                  <span class="countdown-amount">%H</span>
                  <span class="countdown-period">Hours</span>
                </span>
                <span class="countdown-section">
                  <span class="countdown-amount">%M</span>
                  <span class="countdown-period">Minutes</span>
                </span>
                <span class="countdown-section">
                  <span class="countdown-amount">%S</span>
                  <span class="countdown-period">Seconds</span>
                </span>
              </span>`
						)
					);
				}
			);
		}
	}, [weeklyDeal]);
	// 	if (weeklyDeal) {
	// 		const dealDate = new Date(weeklyDeal.deal_time);
	// 		const day = dealDate.getDate();
	// 		const month = dealDate.getMonth() + 1; // JavaScript months are 0-indexed.
	// 		const year = dealDate.getFullYear();
	// 		console.log(day, month, year);

	// 		$(countdownRef.current).countdown({
	// 			until: new Date(year, month - 1, day),
	// 			layout:
	// 				'<div class="countdown-row countdown-show4">' +
	// 				'<span class="countdown-section">' +
	// 				'<span class="countdown-amount">{dnn}</span>' +
	// 				'<span class="countdown-period">Days</span>' +
	// 				"</span>" +
	// 				'<span class="countdown-section">' +
	// 				'<span class="countdown-amount">{hnn}</span>' +
	// 				'<span class="countdown-period">Hours</span>' +
	// 				"</span>" +
	// 				'<span class="countdown-section">' +
	// 				'<span class="countdown-amount">{mnn}</span>' +
	// 				'<span class="countdown-period">Minutes</span>' +
	// 				"</span>" +
	// 				'<span class="countdown-section">' +
	// 				'<span class="countdown-amount">{snn}</span>' +
	// 				'<span class="countdown-period">Seconds</span>' +
	// 				"</span>" +
	// 				"</div>",
	// 		});
	// 	}
	// }, [weeklyDeal]);

	return (
		<section className="coupone-discount-sec" id="coupone">
			<div className="sec-heading rotate-tb">
				Coupon <span>Deals</span>
			</div>
			{!weeklyDeal && (
				<h1 className="text-center">
					Sorry, there is no weekly deal available!
				</h1>
			)}
			{weeklyDeal && (
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-5">
							<div className="dis-product-detail">
								<h4>Weekly Deal</h4>
								<div className="product-price clearfix">
									<span className="price">
										<span>
											<span className="woocommerce-Price-currencySymbol">
												$
											</span>
											{weeklyDeal.product.price}
										</span>
									</span>
								</div>
								<div
									id="countdown-coupone"
									className="clearfix"
									data-day={weeklyDeal.day}
									data-month={weeklyDeal.month}
									data-year={weeklyDeal.year}
									ref={countdownRef}
								></div>
								<Link
									className="goru-btn"
									to={`/product/${weeklyDeal.product.id}`}
								>
									Shop Now
								</Link>
							</div>
						</div>
						<div className="col-lg-6 col-md-7">
							<div className="dis-pro-thumb">
								<img
									src={weeklyDeal.product.thumbnail.image}
									alt=""
									style={{
										maxWidth: "500px",
										maxHeight: "590px",
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			)}

			<div className="couple-shape">
				<img src={shape3} alt="" />
			</div>
		</section>
	);
}

export default WeeklyDeal;
