import * as React from 'react';
import {
  View, StyleSheet, Text,
  TextInput,
  FlatList,
  Image
} from 'react-native';
import ButtomCustom from '../../components/buttom-custom';
import { CategoryService } from '../../data/local/services/CategoryService';
import HeaderComponent from '../../components/header.component';

export interface HomeProps {
}

export interface HomeState {
  categoryValue: string;
  categoryService: CategoryService;
  categories: any;
}

export default class HomeComponent extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    console.log('home render');
    this.state = {
      categoryValue: '',
      categoryService:  new CategoryService(),
      categories: [],
    };
  }

  public render() {
    return (
      <View style={styles.container}>
         <HeaderComponent />
         <Text>Category: {this.state.categoryValue}</Text>
         <TextInput
          style={styles.textInput}
          placeholder='enter category'
          value={this.state.categoryValue}
          onChangeText={(value) => {
            this.setState({ categoryValue:  value});
          }}
         />
         <ButtomCustom
          styleButtom={styles.buttonHome}
          styleText={styles.textButtom}
          textButtom='Add'
          onPress={() => {
            const time = new Date().getTime();
            this.state.categoryService.addIdIncrement({
              id: Math.floor(Math.random() * 100),
              index: Math.floor(Math.random() * 100),
              name: this.state.categoryValue,
              description: 'category',
              createDate: time,
              updateDate: time,
            });
          }}
         />
         <ButtomCustom
          styleButtom={styles.buttonHome}
          styleText={styles.textButtom}
          textButtom='Get'
          onPress={() => {
            let result = this.state.categoryService.getAll();
            let categories = Array.from(result);
            this.setState({
              categories: Array.from(result),
            });
          }}
         />
        <FlatList
          style={{ width: '100%'}}
          data={this.state.categories}
          keyExtractor={(item, index) => index.toString() }
          renderItem={({item}) =>
          <View style={{
            height: 150,
            borderWidth: 1,
            borderColor: 'red',
            margin: 10,
            padding: 10,
          }}>
            <Text>{(item as any).id}</Text>
            <Text>{(item as any).name}</Text>
            <Text>{(item as any).description}</Text>
            <Text>{(item as any).createDate}</Text>
            <Text>{(item as any).updateDate}</Text>
          </View>
        }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
