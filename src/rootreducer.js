import { combineReducers } from "redux";
import roomsReducer from "./roomsreducer";
import msgReducer from "./msgreducer";
import currRoomReducer from "./currroomreducer"

let rootReducer = combineReducers({
	allRooms: roomsReducer, // []
	messages: msgReducer, // 
	currRoomId: currRoomReducer, // null
});

export default rootReducer;