import * as React from 'react';
import {
  View, StyleSheet,
  Text, FlatList, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { getData, changeCategory } from './menu-medicament.actions';

interface ItemProps {
  navigation: any;
  changeCategory: any;
  item: any;
  categoryId: number;
}

interface ItemState {
}

class MyItem extends React.Component<ItemProps, ItemState> {
  public constructor(props: ItemProps) {
    super(props);
    this.state = {
    };
  }

  public componentDidUpdate() {
  }

  public render() {
    let textColor = (this.props.categoryId === this.props.item.id) ? 'blue' : 'black';
    return(
      <TouchableOpacity
      onPress={() => {
        this.props.changeCategory(this.props.item.id);
        this.props.navigation.closeDrawer();
      }}
      style={styles.menu}>
      <Text style={[styles.menu_text, {color: textColor}]}>{this.props.item.name}</Text>
    </TouchableOpacity>
    );
  }
}

export interface MenuMedicamentProps {
  navigation: any;
  categories: any;
  getData: any;
  changeCategory: any;
  categoryId: number;
}

export interface MenuMedicamentState {
}

const mapStateToProps = (state: any) => ({
  categories: state.medicament.categories,
  categoryId: state.medicament.categoryId,
});

const mapDispatchToProps = (dispatch: any) => ({
  getData: () => dispatch(getData()),
  changeCategory: (categoryId: number) => dispatch(changeCategory(categoryId)),
});

class MenuMedicamentComponent extends React.Component<MenuMedicamentProps, MenuMedicamentState> {
  constructor(props: MenuMedicamentProps) {
    super(props);
    this.state = {
    };
    this.props.getData();
  }

  public componentDidMount() {
  }

  public componentDidUpdate() {
    // console.warn('main' + this.props.categoryId);
  }

  private lineButtom = () =>
    <View style={styles.line_buttom} />

  public render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.categories}
          renderItem={({ item }) =>
            <MyItem
              changeCategory={this.props.changeCategory}
              item={item}
              navigation={this.props.navigation}
              categoryId={this.props.categoryId}
            />
          }
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.lineButtom}
          extraData={{
            categoryId: this.props.categoryId,
          }}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuMedicamentComponent);

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
