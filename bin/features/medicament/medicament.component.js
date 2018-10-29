"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const navigationbar_react_native_1 = require("navigationbar-react-native");
const ComponentLeft = () => {
    return (<react_native_1.View style={{ flex: 1, alignItems: 'flex-start' }}>
      <react_native_1.Image source={require('../../../assets/images/ic_search.png')} style={{ resizeMode: 'contain', width: 25, height: 25, marginLeft: 10, alignSelf: 'flex-start' }}/>
    </react_native_1.View>);
};
const ComponentCenter = () => {
    return (<react_native_1.View style={{ flex: 1 }}>
      <react_native_1.Image source={require('../../../assets/images/ic_google.png')} style={{ resizeMode: 'contain', width: 200, height: 35, alignSelf: 'center' }}/>
    </react_native_1.View>);
};
const ComponentRight = () => {
    return (<react_native_1.View style={{ flex: 1 }}>
      <react_native_1.Image source={require('../../../assets/images/ic_profile.png')} style={{ resizeMode: 'contain', width: 35, height: 35, marginRight: 10, alignSelf: 'flex-end' }}/>
    </react_native_1.View>);
};
class MedicamentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<react_native_1.View style={styles.container}>
        <navigationbar_react_native_1.NavigationBar componentLeft={() => <ComponentLeft />} componentCenter={() => <ComponentCenter />} componentRight={() => <ComponentRight />} navigationBarStyle={{ backgroundColor: '#ffffff' }} statusBarStyle={{ barStyle: 'dark-content', backgroundColor: '#ffffff' }}/>
        <react_native_1.Text>Medicament Component</react_native_1.Text>
      </react_native_1.View>);
    }
}
exports.default = MedicamentComponent;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});
