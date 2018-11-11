import { Category } from '../models/Category';
import RealmDb from '../base/RealmDb';

export class CategoryRepository {

  public add(category: Category) {
    RealmDb.write(() => {
      RealmDb.create(Category.schema.name, category);
    });
  }

  public addIdIncrement(category: Category) {
    let idMax = RealmDb.objects(Category.schema.name).max('id');
    if (idMax) {
      category.id = idMax as number + 1;
    } else {
      category.id = 1;
    }
    RealmDb.write(() => {
      RealmDb.create(Category.schema.name, category);
    });
  }

  public remove(id: number) {
    RealmDb.delete(id);
  }

  public update(category: Category) {
    let categorys = RealmDb.objects(Category.schema.name).filtered('id=' + category.id);
    if (categorys) {
      RealmDb.write(() => {
        (<Category>categorys[0]).index = category.index;
        (<Category>categorys[0]).name = category.name;
        (<Category>categorys[0]).description = category.description;
      });
    }
  }

  public getSingle(id: number) {
    let categorys = RealmDb.objects(Category.schema.name).filtered('id=' + id);
    return categorys[0];
  }

  public getAll() {
    return RealmDb.objects(Category.schema.name).sorted('index');
  }

  public count() {
    let number =  RealmDb.objects(Category.schema.name);
    return number.length;
  }

}