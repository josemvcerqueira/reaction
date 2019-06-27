import React from "react";

import { useAppContext } from "./hooks";
import { setUsername } from "../state/actions";

const SetUsername = props => {
	const {
		state: { username },
		dispatch
	} = useAppContext();

	const updateUsername = event => {
		dispatch(setUsername(event.target.value));
	};

	return (
		<div>
			<h3>Username</h3>
			<input onChange={updateUsername} value={username} type="text" />
		</div>
	);
};

export default SetUsername;
