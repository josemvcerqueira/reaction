import React from "react";

import { useAppContext } from "./hooks";
import CreateReaction from "./CreateReaction";

const MessageBoard = () => {
	const {
		state: { messages }
	} = useAppContext();
	return (
		<div>
			{messages.map(messageItem => {
				const { id, text, timestamp, username } = messageItem;
				return (
					<div key={id}>
						<h4>{new Date(timestamp).toLocaleString()}</h4>
						<p>{text}</p>
						<h4>- {username}</h4>
						<CreateReaction />
					</div>
				);
			})}
		</div>
	);
};

export default MessageBoard;
