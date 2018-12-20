import * as React from 'react';
import {
  View, StyleSheet,
  Text, TouchableOpacity,
  Image, FlatList, Easing,
  ImageStyle,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import HeaderComponent from '../../components/header.component';
import StarRating from '../../components/starrating';
import {
  NavigationScreenProp,
} from 'react-navigation';
import ImagePlaceHolder from '../../components/image-placeholder';
import { Category } from '../../data/local/models/Category';
import { Content } from '../../data/local/models/Content';
import { RootStackGlobal } from '../../common/global/rootstack.global';


const images = {
  starFilled: require('../../../assets/images/icon_star.png'),
  starUnfilled: require('../../../assets/images/star_unfill.png'),
  share: require('../../../assets/images/ic_share.png'),
};



export interface MedicamentProps {
  navigation: NavigationScreenProp<any, any>;
  contents: Content[];
}

export interface MedicamentState {
  loading: boolean;
}

const mapStateToProps = (state: any) => ({
  contents: state.medicament.contents,
});

const mapDispatchToProps = (dispatch: any) => ({
});

class MedicamentComponent extends React.Component<MedicamentProps, MedicamentState> {
  constructor(props: MedicamentProps) {
    super(props);
    this.state = {
      loading: true,
    };

  }

  public componentDidMount = () => {
  }

  private ComponentLeft = () => (navigation: NavigationScreenProp<any, any>) => () =>
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}
      style={{ flex: 1, alignItems: 'flex-start' }} >
      <Image
        source={require('../../../assets/images/ic_menu.png')}
        style={{ resizeMode: 'contain', width: 25, height: 25, marginLeft: 16, alignSelf: 'flex-start' }}
      />
    </TouchableOpacity>

  private renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View
        style={{
          marginTop: 20,
        }}
      >
        <ActivityIndicator animating size='small' />
      </View>
    );
  }

  private openMedicamentDetail = (content: Content)  =>
    RootStackGlobal.get().navigate('MedicamentDetail', {
      content: content,
    })

  public render() {
    return (
      <View style={styles.container}>
        <HeaderComponent
          componentLeft={this.ComponentLeft()(this.props.navigation)}
        />
        <FlatList
          data={this.props.contents}
          removeClippedSubviews
          keyExtractor={(item, index) => (item as any).id.toString()}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.cell_container} >
                <TouchableOpacity
                  onPress={() => this.openMedicamentDetail(item)}
                  style={styles.cell_view_top} >
                  <View style={styles.cell_view_top_container} >
                    <Text
                      style={styles.cell_view_top_container_text}
                      numberOfLines={3}
                    >{(item as any).title}
                    </Text>
                  </View>
                  <ImagePlaceHolder
                    width={80}
                    height={80}
                    imageOprions={{
                      uri: (item as any).image as string,
                      borderRadius: 10,
                    }}
                  />
                </TouchableOpacity>
                <View style={styles.cell_view_bottom} >
                  <StarRating
                    max={5}
                    initial={(item as any).rate}
                    onChange={(rating: number) => console.log(rating)}
                    selectedStar={images.starFilled}
                    unselectedStar={images.starUnfilled}
                    config={{
                      easing: Easing.inOut(Easing.ease),
                      duration: 350,
                    }}
                    stagger={50}
                    maxScale={1.6}
                    starStyle={{
                      width: 14,
                      height: 14,
                      margin: 1,
                    }}
                    editable={false}
                  />
                  <View style={styles.cell_view_bottom_right}>
                    <Text
                      style={styles.cell_view_bottom_right_text}
                    >{(item as any).auth}
                    </Text>
                    <TouchableOpacity>
                      <Image
                        resizeMode='contain'
                        style={styles.cell_view_bottom_right_image as ImageStyle}
                        source={images.share}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={styles.cell_bottom_line}
                />
              </View>
            );
          }}
          ListFooterComponent={this.renderFooter()}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicamentComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  cell_container: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  cell_view_top: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell_view_top_container: {
    flexDirection: 'column',
    width: 1, flexGrow: 1,
  },
  cell_view_top_container_text: {
    margin: 5,
    fontSize: 14,
    fontWeight: '600',
    height: 55,
  },
  cell_view_top_container_image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  cell_view_bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell_view_bottom_right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cell_view_bottom_right_text: {
    fontSize: 12,
    marginLeft: 5,
    fontFamily: 'UVNVan',
    fontStyle: 'italic',
    marginRight: 5,
    fontWeight: '500',
  },
  cell_view_bottom_right_image: {
    width: 20, height: 20,
    marginRight: 5,
  },
  cell_bottom_line: {
    backgroundColor: '#CCCCCC',
    height: 0.5,
    marginTop: 7,
  },
});
