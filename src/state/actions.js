import { NEW_MESSAGE, SET_USERNAME } from "./types";
import uuid from "uuid/v4";

export const newMessage = ({ text, username }) => ({
	type: NEW_MESSAGE,
	item: { id: uuid(), text, username, timestamp: Date.now() }
});

export const setUsername = username => ({
	type: SET_USERNAME,
	username
});
