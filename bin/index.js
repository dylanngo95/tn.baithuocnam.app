"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const index_1 = require("./stores/index");
const start_component_1 = require("./features/start/start.component");
class AppComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<react_redux_1.Provider store={index_1.default}>
        <start_component_1.default />
      </react_redux_1.Provider>);
    }
}
exports.default = AppComponent;
