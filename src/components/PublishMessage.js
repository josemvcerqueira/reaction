import React, { useState } from "react";
import { useAppContext } from "./hooks";
import { newMessage } from "../state/actions";

const PublishMessage = () => {
	const {
		state: { username },
		pubsub: { publish }
	} = useAppContext();
	const [text, setText] = useState("");

	const updateText = event => {
		setText(event.target.value);
	};

	const publishMessage = () => {
		publish(newMessage({ text, username }));
	};

	const handleKeyPress = event => {
		if (event.key === "Enter") publishMessage();
	};

	return (
		<div>
			<h3>Got something to say?</h3>
			<input
				onChange={updateText}
				value={text}
				type="text"
				onKeyPress={handleKeyPress}
			/>
			<button onClick={publishMessage}>Publish it!</button>
		</div>
	);
};

export default PublishMessage;
