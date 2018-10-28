"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_types_1 = require("./home.types");
const initState = {
    number: 0,
};
exports.HomeReducer = (state = initState, action) => {
    switch (action.type) {
        case home_types_1.default.HOME_INCREMENT:
            return Object.assign({}, state, { number: state.number + 1 });
        case home_types_1.default.HOME_DECREMENT:
            return Object.assign({}, state, { number: state.number - 1 });
        case home_types_1.default.HOME_SETNUMBER:
            return Object.assign({}, state, { number: action.number });
        case home_types_1.default.HOME_RESET:
            return Object.assign({}, state, { number: 0 });
        default:
            return state;
    }
};
