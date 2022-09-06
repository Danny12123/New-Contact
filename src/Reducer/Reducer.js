import { v4 as uuidv4 } from 'uuid';
let initialState = {users:[
		{ name: " Naa", contact: " 024443536", location: " Ghana", id: uuidv4() },
		{ name: " Wini", contact: " +1 244535645", location: " USA", id: uuidv4() },
	]}


const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_NEW_USER":
			return {...state,  users : [...state.users, action.payload]}
			break;
	
		default:
			return state;
	}

    
}
export default Reducer