import * as Realm from 'realm';

export class Tag {
  public static schema: Realm.ObjectSchema = {
    name: 'Tags',
    primaryKey: 'id',
    properties: {
      id: 'string',
      contentId: 'string',
      categoryId: 'string',
    },
  };

  public id: string;
  public contentId: string;
  public categoryId: string;

}