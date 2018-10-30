import * as React from 'react';
import {
  View, StyleSheet,
  Text,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import { number } from 'prop-types';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});

export interface StarRatingProps {
  max: number;
  initial: number;
  onChange: any;
  config: {
    easing: any,
    duration: any
  };
  editable: boolean;
  stagger: number;
  maxScale: number;
  starStyle: any;
  containerStyle: any;
  selectedStar: any;
  unselectedStar: any;
  onAnimationComplete: any;

}

export interface StarRatingState {
  selected: number;
}

const initializeAnimatedValues = (max: number, initial: number) =>
  Array(max)
    .fill(null)
    .map((value, index) => new Animated.Value(index + 1 <= initial ? 1 : 0));

const createAnimations = (config: any, values: any, prev: number, curr: number) => {
  if (curr > prev) {
    const startIndex = prev === 0 ? 0 : prev - 1;
    return values.slice(startIndex, curr).map((value: any) =>
      Animated.timing(value, {
        ...config,
        toValue: 1,
        useNativeDriver: true,
      })
    );
  }
  return values
    .slice(curr, prev)
    .map((value: any) =>
      Animated.timing(value, {
        ...config,
        toValue: 0,
        useNativeDriver: true,
      })
    )
    .reverse();
};

export default class StarRating extends React.PureComponent<StarRatingProps, StarRatingState> {
  public static defaultProps: Partial<StarRatingProps> = {
    max: 5,
    initial: 0,
    onChange: () => { },
    config: {
      easing: Easing.elastic(1),
      duration: 400,
    },
    stagger: 100,
    maxScale: 1.1,
    starStyle: {
      width: 36,
      height: 36,
    },
    editable: true,
    containerStyle: { flexDirection: 'row' },
    onAnimationComplete: () => { },
  };

  constructor(props: StarRatingProps) {
    super(props);
    this.state = {
      selected: props.initial,
    };
  }

  public animatedValues = initializeAnimatedValues(this.props.max, this.props.initial);

  public getSelectedOpacity = (index: number) =>
    this.animatedValues[index].interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    })

  public getUnselectedOpacity = (index: number) =>
    this.animatedValues[index].interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    })

  public getScale = (index: number) =>
    this.animatedValues[index].interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, this.props.maxScale, 1],
      extrapolate: 'clamp',
    })

  public animate = (curr: number) => () => {
    const { config, stagger, onChange, onAnimationComplete } = this.props;
    const animations = createAnimations(config, this.animatedValues, this.state.selected, curr);
    this.setState(
      () => ({
        selected: curr,
      }),
      () => {
        onChange(this.state.selected);
        Animated.stagger(stagger, animations).start(() => onAnimationComplete(this.state.selected));
      }
    );
  }

  public renderStar = (value: any, index: number) => (
    <View key={index}>
      {
        <TouchableWithoutFeedback
          disabled={!this.props.editable}
          onPress={this.animate(index + 1)}>
          <View style={this.props.starStyle}>
            <View style={styles.imageContainer}>
              <Animated.Image
                style={[
                  styles.image,
                  {
                    opacity: this.getUnselectedOpacity(index),
                    transform: [{ scale: this.getScale(index) }],
                  },
                ]}
                source={this.props.unselectedStar}
              />
            </View>
            <View style={styles.imageContainer}>
              <Animated.Image
                style={[
                  styles.image,
                  {
                    opacity: this.getSelectedOpacity(index),
                    transform: [{ scale: this.getScale(index) }],
                  },
                ]}
                source={this.props.selectedStar}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      }
    </View>
  )

  public render() {
    return <View style={this.props.containerStyle}>{this.animatedValues.map(this.renderStar)}</View>;
  }
}
