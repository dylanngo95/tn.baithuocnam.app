import * as Realm from 'realm';

export class Category {
  public static schema: Realm.ObjectSchema = {
    name: 'Categories',
    primaryKey: 'id',
    properties: {
      id: 'int',
      index: 'int',
      name: 'string',
      description: 'string?',
      createDate: 'double',
      updateDate: 'double',
    },
  };

  public id: number;
  public index: number;
  public name: string;
  public description?: string | '';
  public createDate: number;
  public updateDate: number;

}