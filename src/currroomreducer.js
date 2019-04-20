export default function(state = null, action){
	switch (action.type){
		case "CURR_ROOM" :
		return action.payload;
	}
	return state
};