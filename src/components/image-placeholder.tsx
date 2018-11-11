import * as React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';

export type ImageResizeMode = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';

export interface ImageOprions {
  uri: string;
  resizeMode?: ImageResizeMode | 'cover';
  borderRadius?: number | 0;

}

export interface ImagePlaceHolderProps {
  imageOprions: ImageOprions;
  width: number;
  height: number;
  viewLoading?: any;
}

export interface ImagePlaceHolderState {
  stateImage: number;
}

export default class ImagePlaceHolder extends React.Component<ImagePlaceHolderProps, ImagePlaceHolderState> {
  constructor(props: ImagePlaceHolderProps) {
    super(props);
    this.state = {
      stateImage: 0,
    };
  }

  public render() {
    return (
      <View
        style={{
          width: this.props.width,
          height: this.props.height,
          backgroundColor: 'transparent',
          borderRadius: this.props.imageOprions.borderRadius,
        }}
      >
        <Image
          borderRadius={this.props.imageOprions.borderRadius}
          resizeMode={this.props.imageOprions.resizeMode}
          style={{
            width: this.props.width,
            height: this.props.height,
          }}
          source={{
            uri: this.props.imageOprions.uri,
            cache: 'default',
          }}
          onError={() => {
            // console.warn('error');
            this.setState({ stateImage: 1 });
          }}
          onLoad={() => {
            // console.warn('loaded');
            this.setState({ stateImage: 3 });
          }}
        />
        {
          this.state.stateImage !== 3 ?
            <View
              style={{
                width: this.props.width,
                height: this.props.height,
                backgroundColor: 'white',
                position: 'absolute',
              }}
            >
              <Image
                resizeMode='contain'
                style={{
                  width: this.props.width,
                  height: this.props.height,
                }}
                source={require('../../assets/images/ic_placeholder.png')}
              />
            </View>
            :
            null
        }
      </View>
    );
  }
}
