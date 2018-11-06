import RealmDb from '../base/RealmDb';
import { Tag } from '../models/Tag';

export class TagRepository {

  public add(tag: Tag) {
    RealmDb.write(() => {
      RealmDb.create(Tag.schema.name, tag);
    });
  }

  public addIdIncrement(tag: Tag) {
    const idMax = RealmDb.objects(Tag.schema.name).max('id');
    if (idMax) {
      tag.id = idMax as number + 1;
    } else {
      tag.id = 1;
    }
    RealmDb.write(() => {
      RealmDb.create(Tag.schema.name, tag);
    });
  }

  public getSingle(id: number) {
    const tags = RealmDb.objects(Tag.schema.name).filtered('id=' + id);
    return tags[0];
  }

  public getByCategoryId(categoryId: number) {
    return RealmDb.objects(Tag.schema.name).filtered('categoryId=' + categoryId);
  }

  public getByConentId(contentId: number) {
    return RealmDb.objects(Tag.schema.name).filtered('contentId=' + contentId);
  }

}
