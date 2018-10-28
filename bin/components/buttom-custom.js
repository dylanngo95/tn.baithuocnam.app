"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const ButtomCustom = (props) => (<react_native_1.TouchableOpacity onPress={props.onPress} style={props.styleButtom}>
    <react_native_1.Text style={props.styleText}>{props.textButtom}</react_native_1.Text>
  </react_native_1.TouchableOpacity>);
exports.default = ButtomCustom;
