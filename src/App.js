import React, { useReducer } from "react";

import reducer, { initialState } from "./state/reducer";

const App = props => {
	const [state, dispatch] = useReducer(reducer, initialState);

	console.log("state", state);

	return <h2>Reaction</h2>;
};

export default App;
