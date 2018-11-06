import * as React from 'react';
import {
  View, StyleSheet,
  Text, Image,
  Button,
  Alert,
} from 'react-native';

import ImagePlaceHolderComponent from '../../components/image-placeholder';


export interface SettingProps {
}

export interface SettingState {
  random: number;
}

const Images = [
  'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?cs=srgb&dl=animal-animal-photography-big-cat-145939.jpg&fm=jpg',
  'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?cs=srgb&dl=abstract-ai-art-373543.jpg&fm=jpg',
  'https://images.pexels.com/photos/1029640/pexels-photo-1029640.jpeg?cs=srgb&dl=big-leaf-bright-color-1029640.jpg&fm=jpg',
  'https://images.pexels.com/photos/641314/pexels-photo-641314.jpeg?cs=srgb&dl=adolescent-adult-beautiful-641314.jpg&fm=jpg',
  'https://images.pexels.com/photos/87284/ocean-seacoast-rocks-water-87284.jpeg?cs=srgb&dl=pebbles-rocks-shapes-87284.jpg&fm=jpg',
  'https://images.pexels.com/photos/225406/pexels-photo-225406.jpeg?cs=srgb&dl=adorable-animal-animal-photography-225406.jpg&fm=jpg',
];

export default class SettingComponent extends React.Component<SettingProps, SettingState> {
  constructor(props: SettingProps) {
    super(props);
    this.state = {
      random: 0,
    };
  }

  public render() {
    return (
      <View style = {{
        flex: 1,
      }}>
        {/* <ImagePlaceHolderComponent
          width={400}
          height={400}
          imageOprions = {{
            uri: Images[this.state.random],
            borderRadius: 10,
          }}
        /> */}
        <Button
          title='random'
          onPress={() => {
            this.setState({
              random: Math.floor(Math.random() * 5) + 1,
            }, () => {
              console.warn('value: ' + this.state.random);
            });
          }}
        />
      </View>
    );
  }
}
