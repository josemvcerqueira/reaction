import React from "react";

import { REACTION_OBJECTS } from "../state/types";
import { useAppContext } from "./hooks";
import { createReaction } from "../state/actions";

const CreateReaction = ({ messageId }) => {
	const {
		state: { username },
		pubsub: { publish }
	} = useAppContext();

	const publishReaction = ({ type, emoji }) => {
		publish(createReaction({ type, emoji, username, messageId }));
	};
	return (
		<div className="CreateReaction">
			{REACTION_OBJECTS.map(obj => {
				const { type, emoji } = obj;

				return (
					<span
						key={type}
						onClick={() => publishReaction({ emoji, type })}
					>
						{emoji}
					</span>
				);
			})}
		</div>
	);
};

export default CreateReaction;
