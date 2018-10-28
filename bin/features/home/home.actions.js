"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_types_1 = require("./home.types");
exports.increment = () => ({
    type: home_types_1.default.HOME_INCREMENT,
});
exports.decrement = () => ({
    type: home_types_1.default.HOME_DECREMENT,
});
exports.setNumber = (number) => ({
    type: home_types_1.default.HOME_SETNUMBER,
    number: number,
});
exports.reset = () => ({
    type: home_types_1.default.HOME_RESET,
});
