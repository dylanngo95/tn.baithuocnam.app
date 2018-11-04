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
      create: 'double',
      update: 'double',
    },
  };

  public id: number;
  public index: number;
  public name: string;
  public description?: string | '';
  public create: number;
  public update: number;

}