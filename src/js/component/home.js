import React from "react";
import { Count } from "./count";
import PropType from "prop-types";

//create your first component

export function Home(props) {
	return (
		<div className="text-center mt 5">
			<Count seconds={props.time} />
		</div>
	);
}
Home.propTypes = {
	time: PropType.number
};
