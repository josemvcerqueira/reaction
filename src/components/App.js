import React, { useReducer, useEffect } from "react";

import reducer, { initialState } from "../state/reducer";
import Context from "../state/context";
import PubSub from "../pubsub";
import PublishMessage from "./PublishMessage";
import MessageBoard from "./MessageBoard";

const pubsub = new PubSub();

const App = props => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		pubsub.addListener({
			message: messageObject => {
				const { channel, message } = messageObject;

				console.log("Received Message", message, "channel", channel);

				dispatch(message);
			}
		});
	}, []);

	console.log(state);

	return (
		<Context.Provider value={{ state, dispatch, pubsub }}>
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
