import { getData, postData } from "./myService";

export function getAllRooms(){
	let promises = getData("http://localhost:6060/api");

	return {
		type: "ALL_ROOMS",
		payload: promises,
	}
};

export function getMessages(roomId){
	let promise = getData(`http://localhost:6060/api/${roomId}/messages`);

	return {
		type: "MESSAGES",
		payload: promise,
	}
};

// export function getMessages(roomId){
// 	return function(dispatch){
// 		getData(`http://localhost:6060/api/${roomId}/messages`)
// 		.then(res => {
// 			dispatch({
// 				type: "MESSAGES",
// 				payload: res,
// 			});
// 		});
// 	}
// };

export function setRoomId(id){
	return {
		type: "CURR_ROOM",
		payload: id,
	}
};

export function postMessages(msgObj){
	return function(dispatch){
		postData("http://localhost:6060/api/addmessage", JSON.stringify(msgObj))
		.then(res => {
			getData(`http://localhost:6060/api/${msgObj.roomId}/messages`)
			.then(res => {
				dispatch({
					type: "MESSAGES",
					payload: res,
				})
			})
		})
	}
};