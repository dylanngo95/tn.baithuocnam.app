import * as Realm from 'realm';

export class Tag {
  public static schema: Realm.ObjectSchema = {
    name: 'Tags',
    primaryKey: 'id',
    properties: {
      id: 'int',
      contentId: 'int',
      categoryId: 'int',
    },
  };

  public id: number;
  public contentId: number;
  public categoryId: number;

}