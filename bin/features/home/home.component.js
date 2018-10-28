"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const buttom_custom_1 = require("../../components/buttom-custom");
const CategoryService_1 = require("../../data/local/services/CategoryService");
class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryValue: '',
            categoryService: new CategoryService_1.CategoryService(),
            categories: [],
        };
    }
    render() {
        return (<react_native_1.View style={styles.container}>
         <react_native_1.Text>Category: {this.state.categoryValue}</react_native_1.Text>
         <react_native_1.TextInput style={styles.textInput} placeholder='enter category' value={this.state.categoryValue} onChangeText={(value) => {
            this.setState({ categoryValue: value });
        }}/>
         <buttom_custom_1.default styleButtom={styles.buttonHome} styleText={styles.textButtom} textButtom='Add' onPress={() => {
            const time = new Date().getTime();
            this.state.categoryService.addIdIncrement({
                id: Math.floor(Math.random() * 100),
                index: Math.floor(Math.random() * 100),
                name: this.state.categoryValue,
                description: 'category',
                createDate: time,
                updateDate: time,
            });
        }}/>
         <buttom_custom_1.default styleButtom={styles.buttonHome} styleText={styles.textButtom} textButtom='Get' onPress={() => {
            let result = this.state.categoryService.getAll();
            let categories = Array.from(result);
            this.setState({
                categories: Array.from(result),
            });
        }}/>
        <react_native_1.FlatList style={{ width: '100%' }} data={this.state.categories} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => <react_native_1.View style={{
            height: 150,
            borderWidth: 1,
            borderColor: 'red',
            margin: 10,
            padding: 10,
        }}>
            <react_native_1.Text>{item.id}</react_native_1.Text>
            <react_native_1.Text>{item.name}</react_native_1.Text>
            <react_native_1.Text>{item.description}</react_native_1.Text>
            <react_native_1.Text>{item.createDate}</react_native_1.Text>
            <react_native_1.Text>{item.updateDate}</react_native_1.Text>
          </react_native_1.View>}/>
      </react_native_1.View>);
    }
}
exports.default = HomeComponent;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    homeNumber: {
        marginBottom: 35,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3b5998',
    },
    textButtom: {
        marginBottom: 0,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    textInput: {
        width: '80%',
        height: 50,
        borderColor: '#3b5998',
        borderWidth: 1,
        borderRadius: 10,
        padding: '3%',
    },
    viewButtom: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonHome: {
        height: 50,
        width: 150,
        backgroundColor: '#3b5998',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
    },
});
