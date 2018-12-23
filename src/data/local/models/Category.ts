import * as Realm from 'realm';

export class Category {
  public static schema: Realm.ObjectSchema = {
    name: 'Categories',
    primaryKey: 'id',
    properties: {
      id: 'string',
      index: 'int',
      name: 'string',
      description: 'string?',
      create: 'double',
      update: 'double',
    },
  };

  public id: string;
  public index: number;
  public name: string;
  public description?: string | '';
  public create: number;
  public update: number;

}