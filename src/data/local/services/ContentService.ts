import RealmDb from '../base/RealmDb';
import { Content } from '../models/Content';

export class ContentService {

  public add(content: Content) {
    RealmDb.write(() => {
      RealmDb.create(Content.schema.name, content);
    });
  }

  public addIdIncrement(content: Content) {
    let idMax = RealmDb.objects(Content.schema.name).max('id');
    if (idMax) {
      content.id = idMax as number + 1;
    } else {
      content.id = 1;
    }
    RealmDb.write(() => {
      RealmDb.create(Content.schema.name, content);
    });
  }

  public remove(id: number) {
    RealmDb.delete(id);
  }

  public update(content: Content) {
    const contents = RealmDb.objects(Content.schema.name).filtered('id=' + content.id);
    if (contents) {
      RealmDb.write(() => {
        (<Content>contents[0]).categoryId = content.categoryId;
        (<Content>contents[0]).title = content.title;
        (<Content>contents[0]).content = content.content;
        (<Content>contents[0]).description = content.description;
        (<Content>contents[0]).image = content.image;
        (<Content>contents[0]).rate = content.rate;
        (<Content>contents[0]).createDate = content.createDate;
        (<Content>contents[0]).updateDate = content.updateDate;
      });
    }
  }

  public getSingle(id: number) {
    const contents = RealmDb.objects(Content.schema.name).filtered('id=' + id);
    return contents[0];
  }

  public getAll() {
    return RealmDb.objects(Content.schema.name);
  }

}