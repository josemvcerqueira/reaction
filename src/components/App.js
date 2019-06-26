import React, { useReducer } from "react";

import reducer, { initialState } from "../state/reducer";
import Context from "../state/context";
import PublishMessage from "./PublishMessage";
import MessageBoard from "./MessageBoard";

const App = props => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Context.Provider value={{ state, dispatch }}>
			<h2>
				Reaction
				<hr />
				<PublishMessage />
				<hr />
				<MessageBoard />
			</h2>
		</Context.Provider>
	);
};

export default App;
