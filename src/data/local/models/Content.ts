
import * as Realm from 'realm';

export class Content {
  public static schema: Realm.ObjectSchema = {
    name: 'Contents',
    primaryKey: 'id',
    properties: {
      id: 'string',
      title: 'string',
      content: 'string',
      description: 'string?',
      image: 'string',
      rate: 'double',
      auth: 'string',
      create: 'double',
      update: 'double',
    },
  };

  public id: string;
  public title: string;
  public content: string;
  public description?: string | '';
  public image: string;
  public rate: number;
  public auth: string;
  public create: number;
  public update: number;

}