"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const home_component_1 = require("../../features/home/home.component");
const medicament_component_1 = require("../../features/medicament/medicament.component");
const setting_component_1 = require("../../features/setting/setting.component");
exports.TabbarCustom = react_navigation_1.createBottomTabNavigator({
    Home: {
        screen: home_component_1.default,
    },
    Medicament: {
        screen: medicament_component_1.default,
    },
    Setting: {
        screen: setting_component_1.default,
    },
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});
