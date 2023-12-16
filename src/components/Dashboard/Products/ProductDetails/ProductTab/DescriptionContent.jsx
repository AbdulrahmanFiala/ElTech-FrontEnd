import React from "react";

const DescriptionContent = ({ description }) => {
	return (
		<div
			className="tab-pane fade show active"
			id="descriptions"
			role="tabpanel"
			aria-labelledby="descriptions-tab"
		>
			<div className="descriptionContent">
				<p>{description}</p>
			</div>
		</div>
	);
};

export default DescriptionContent;
