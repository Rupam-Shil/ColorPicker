import { createStore } from 'vuex';

export default createStore({
	state: {
		isGradient: false,
	},
	mutations: {
		changeGradient(state) {
			state.isGradient = !state.isGradient;
		},
	},
	actions: {},
	modules: {},
});
