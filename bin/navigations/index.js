"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const tabbar_1 = require("./tabbar");
exports.RootStack = react_navigation_1.createStackNavigator({
    Main: {
        screen: tabbar_1.TabbarCustom,
        navigationOptions: {
            header: null,
        },
    },
}, {
    initialRouteName: 'Main',
});
