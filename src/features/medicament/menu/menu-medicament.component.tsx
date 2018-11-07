import * as React from 'react';
import {
  View, StyleSheet,
  Text, FlatList, TouchableOpacity,
} from 'react-native';
import { CategoryRepository } from '../../../data/local/repository/CategoryRepository';
import { Category } from '../../../data/local/models/Category';


export interface MenuMedicamentProps {
  navigation: any;
}

export interface MenuMedicamentState {
  categories: any;
}

export default class MenuMedicamentComponent extends React.Component<MenuMedicamentProps, MenuMedicamentState> {
  constructor(props: MenuMedicamentProps) {
    super(props);
    this.state = {
      categories: [],
    };
    console.log(this.props);
  }

  public componentDidMount() {
    let categoryRepository: CategoryRepository = new CategoryRepository();
    this.setState({
      categories: categoryRepository.getAll(),
    });
  }

  private lineButtom = () =>
  <View style={styles.line_buttom}/>

  public render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.categories}
          renderItem={({item}) =>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.closeDrawer();
              }}
              style={styles.menu}>
              <Text style={styles.menu_text}>{(item as any).name}</Text>
            </TouchableOpacity>
          }
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.lineButtom}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
  },
  menu_text: {
    marginLeft: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
  line_buttom: {
    backgroundColor: '#CCCCCC',
    height: 0.5,
  },
});
