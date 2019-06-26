import PubNub from "pubnub";
import pubnubConfig from "./pubnub.config.json";

export const MESSAGE_CHANNEL = "MESSAGE_CHANNEL";

function PubSub() {
	const pubnub = new PubNub(pubnubConfig);
	pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });

	this.addListener = listenerConfig => {
		pubnub.addListener(listenerConfig);
	};

	this.publish = message => {
		console.log("publish message", message);
		pubnub.publish({
			message,
			channel: MESSAGE_CHANNEL
		});
	};
}

export default PubSub;

// pubnub.addListener({
// 	message: messageObject => {
// 		console.log("messageObject", messageObject);
// 	}
// });
//
// setTimeout(() => {
// 	pubnub.publish({
// 		message: "foo",
// 		channel: MESSAGE_CHANNEL
// 	});
// }, 1000);
