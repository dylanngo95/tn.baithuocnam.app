import * as Realm from 'realm';
import { Platform } from 'react-native';
import { Category } from '../../data/local/models/Category';
import { Content } from '../../data/local/models/Content';
import { Tag } from '../../data/local/models/Tag';

import * as fs from 'react-native-fs';


export const RealmDb = async () => {
  if (Platform.OS === 'ios') {
    const realm = new Realm(
      {
        path: fs.MainBundlePath + '/default.realm',
        schema: [Category.schema, Content.schema, Tag.schema],
      });
    return realm;
  } else {
    try {
      const res = await fs.copyFileAssets('db/default.realm', fs.DocumentDirectoryPath + '/default.realm');
    } catch (error) {
     console.warn(error);
    }
    const realm = new Realm(
      {
        path: fs.DocumentDirectoryPath + '/default.realm',
        schema: [Category.schema, Content.schema, Tag.schema],
      });
    return realm;
  }
};
