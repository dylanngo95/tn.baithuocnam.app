"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const tabbar_1 = require("../../navigations/tabbar");
class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<react_native_1.View>
         <react_native_1.Text>Main Component</react_native_1.Text>
         <tabbar_1.TabbarCustom />
      </react_native_1.View>);
    }
}
exports.default = MainComponent;
