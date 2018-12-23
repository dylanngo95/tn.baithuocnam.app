import { RealmDb } from '../base/RealmDb';
import { Tag } from '../models/Tag';

export class TagRepository {

  private Realm = RealmDb();


  public add(tag: Tag) {
    this.Realm.write(() => {
      this.Realm.create(Tag.schema.name, tag);
    });
  }

  // public addIdIncrement(tag: Tag) {
  //   const idMax = this.Realm.objects(Tag.schema.name).max('id');
  //   if (idMax) {
  //     tag.id = idMax as number + 1;
  //   } else {
  //     tag.id = 1;
  //   }
  //   this.Realm.write(() => {
  //     this.Realm.create(Tag.schema.name, tag);
  //   });
  // }

  public getSingle(id: string) {
    const tags = this.Realm.objects(Tag.schema.name).filtered(`id="${id}"`);
    return tags[0];
  }

  public getByCategoryId(categoryId: string) {
    return this.Realm.objects(Tag.schema.name).filtered(`categoryId="${categoryId}"`);
  }

  public getByConentId(contentId: string) {
    return this.Realm.objects(Tag.schema.name).filtered(`contentId="${contentId}"`);
  }

}
