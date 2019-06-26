import { NEW_MESSAGE } from "./types";

const reducer = (state, action) => {
	switch (action.type) {
		case NEW_MESSAGE: {
			return { ...state, messages: [...state.messages, action.item] };
		}
		default:
			return state;
	}
};

export const initialState = { messages: [] };

export default reducer;
