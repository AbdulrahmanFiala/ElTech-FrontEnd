import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SocialCard({ user }) {
	return (
		<div className="card mt-3" id="userSocialCard">
			<ul className="list-group list-group-flush">
				{/* <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-globe mr-2 icon-inline"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    Website
                  </h6>
                  <span className="text-secondary">https://bootdey.com</span>
                </li> */}

				{user && user.twitter_profile && (
					<Link
						to={user.twitter_profile}
						target="_blank"
						className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
					>
						<h6 className="mb-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="feather feather-twitter mr-2 icon-inline text-info"
							>
								<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
							</svg>
							Twitter
						</h6>
						{/* <span className="text-secondary">@bootdey</span> */}
					</Link>
				)}

				{user && user.instagram_profile && (
					<Link
						to={user.instagram_profile}
						target="_blank"
						className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
					>
						<h6 className="mb-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="feather feather-instagram mr-2 icon-inline text-danger"
							>
								<rect
									x="2"
									y="2"
									width="20"
									height="20"
									rx="5"
									ry="5"
								></rect>
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
								<line
									x1="17.5"
									y1="6.5"
									x2="17.51"
									y2="6.5"
								></line>
							</svg>
							Instagram
						</h6>
						{/* <span className="text-secondary">bootdey</span> */}
					</Link>
				)}

				{user && user.facebook_profile && (
					<Link
						to={user.facebook_profile}
						target="_blank"
						className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
					>
						<h6 className="mb-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="feather feather-facebook mr-2 icon-inline text-primary"
							>
								<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
							</svg>
							Facebook
						</h6>
						{/* <span className="text-secondary">bootdey</span> */}
					</Link>
				)}
			</ul>
		</div>
	);
}
