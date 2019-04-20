let initialState = [];

export default function(state = initialState, action){
	switch (action.type){
		case "MESSAGES" :
		return action.payload;
	}
	return state
};