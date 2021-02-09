import React from "react";
import PropTypes from "prop-types";

export function Count(props) {
	let counter1 = Math.floor(props.seconds / 100) + "";
	let counter2 = Math.floor(props.seconds / 10) + "";
	let counter3 = Math.floor(props.seconds / 1) + "";

	return (
		<div className="bigcounter">
			<div>
				<i className="far fa-clock"></i>
			</div>
			<div>{counter1.charAt(counter1.length - 1)}</div>
			<div>{counter2.charAt(counter2.length - 1)}</div>
			<div>{counter3.charAt(counter3.length - 1)}</div>
		</div>
	);
}
Count.propTypes = {
	seconds: PropTypes.number
};
