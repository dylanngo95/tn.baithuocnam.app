"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const navigations_1 = require("../../navigations");
class StartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<navigations_1.RootStack />);
    }
}
exports.default = StartComponent;
