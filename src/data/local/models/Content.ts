
import * as Realm from 'realm';

export class Content {
  public static schema: Realm.ObjectSchema = {
    name: 'Contents',
    primaryKey: 'id',
    properties: {
      id: 'int',
      categoryId: 'string',
      title: 'string',
      content: 'string',
      description: 'string?',
      image: 'string',
      rate: 'double',
      createDate: 'double',
      updateDate: 'double',
    },
  };

  public id: number;
  public categoryId: string;
  public title: string;
  public content: string;
  public description?: string | '';
  public image: string;
  public rate: number;
  public createDate: number;
  public updateDate: number;

}