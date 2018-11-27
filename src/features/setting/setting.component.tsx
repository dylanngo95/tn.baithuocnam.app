import * as React from 'react';
import {
  View, StyleSheet,
  Text, Image,
  Button,
  Alert,
} from 'react-native';

import * as fs from 'react-native-fs';
import * as Realm from 'realm';
import { Category } from '../../data/local/models/Category';
import { Content } from '../../data/local/models/Content';
import { Tag } from '../../data/local/models/Tag';
import { RealmDb } from './model-test';

export interface SettingProps {
}

export interface SettingState {
  random: number;
}

export default class SettingComponent extends React.Component<SettingProps, SettingState> {
  constructor(props: SettingProps) {
    super(props);
    this.state = {
      random: 0,
    };
  }


  public render() {
    return (
      <View style={{
        flex: 1,
      }}>
        <Button
          title='random'
          onPress={async () => {
            const res = await RealmDb();
            const result = res.objects(Category.schema.name);
            console.warn(result.length);

          }}
        />
      </View>
    );
  }
}
