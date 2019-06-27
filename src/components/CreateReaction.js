import React from "react";

import { REACTION_OBJECTS } from "../state/types";

const CreateReaction = props => {
	return (
		<div className="CreateReaction">
			{REACTION_OBJECTS.map(obj => {
				const { type, emoji } = obj;

				return <span key={type}>{emoji}</span>;
			})}
		</div>
	);
};

export default CreateReaction;
