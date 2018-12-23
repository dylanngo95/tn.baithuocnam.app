import * as Realm from 'realm';
import { Category } from '../models/Category';
import { Content } from '../models/Content';
import { Tag } from '../models/Tag';
import { Platform } from 'react-native';

import * as fs from 'react-native-fs';
export const RealmDb = () => {
  // const realm = new  Realm({
  //   schema: [Category.schema, Content.schema, Tag.schema],
  // });
  // return realm;
  if (Platform.OS === 'ios') {
    const realm = new Realm(
      {
        path: fs.MainBundlePath + '/default.realm',
        schema: [Category.schema, Content.schema, Tag.schema],
      });
    return realm;
  } else {
    const realm = new Realm(
      {
        path: fs.DocumentDirectoryPath + '/default.realm',
        schema: [Category.schema, Content.schema, Tag.schema],
      });
    return realm;
  }
};
