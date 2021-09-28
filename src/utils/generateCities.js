// import states from 'statesInNigeria.json'

const states = require('./statesInNigeria.json');

// console.log(states.data);
const generatedStates = [];
const getStates = () => {
	states.data.map((state) => {
		//   console.log(state.states)
		const { name, id } = state.states;
		generatedStates.push({ name: name, value: name });
		//   console.log(name,id)
	});
};
getStates();

const getCities = (stateName) => {
	console.log(states);
	let selectedState = states.data.filter((state) => {
		// console.log(stateId, 'id');
		return state.states.name === stateName;
	});
	// console.log(selectedState);
	return selectedState[0].states.locals;
};

module.exports = { generatedStates, getCities };
