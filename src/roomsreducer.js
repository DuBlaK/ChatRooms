let initialState = [];

export default function(state = initialState, action){
	switch (action.type){
		case "ALL_ROOMS" :
		return action.payload.chats;
	}
	return state
};