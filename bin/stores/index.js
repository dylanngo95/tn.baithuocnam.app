"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const home_reducer_1 = require("../features/home/home.reducer");
const store = redux_1.createStore(redux_1.combineReducers({ home: home_reducer_1.HomeReducer }));
exports.default = store;
