import { RealmDb } from '../base/RealmDb';
import { Content } from '../models/Content';

export class ContentRepository {

  private Realm = RealmDb();


  public add(content: Content) {
    this.Realm.write(() => {
      this.Realm.create(Content.schema.name, content);
    });
  }

  // public addIdIncrement(content: Content) {
  //   let idMax = this.Realm.objects(Content.schema.name).max('id');
  //   if (idMax) {
  //     content.id = idMax as number + 1;
  //   } else {
  //     content.id = 1;
  //   }
  //   this.Realm.write(() => {
  //     this.Realm.create(Content.schema.name, content);
  //   });
  // }

  public remove(id: string) {
    this.Realm.delete(id);
  }

  public update(content: Content) {
    const contents = this.Realm.objects(Content.schema.name).filtered('id=' + content.id);
    if (contents) {
      this.Realm.write(() => {
        (<Content>contents[0]).title = content.title;
        (<Content>contents[0]).content = content.content;
        (<Content>contents[0]).description = content.description;
        (<Content>contents[0]).image = content.image;
        (<Content>contents[0]).rate = content.rate;
        (<Content>contents[0]).create = content.create;
        (<Content>contents[0]).update = content.update;
      });
    }
  }

  public getSingle(id: string) {
    const contents = this.Realm.objects(Content.schema.name).filtered(`id="${id}"`);
    return contents[0];
  }

  public getAll() {
    return this.Realm.objects(Content.schema.name);
  }

  public count() {
    let number =  this.Realm.objects(Content.schema.name);
    return number.length;
  }

  public deleteAll() {
    this.Realm.write(() => {
      this.Realm.deleteAll();
    });
  }

}