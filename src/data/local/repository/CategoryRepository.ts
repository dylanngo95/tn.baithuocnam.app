import { Category } from '../models/Category';
import { RealmDb } from '../base/RealmDb';

export class CategoryRepository {

  private Realm = RealmDb();

  public add(category: Category) {
    this.Realm.write(() => {
      this.Realm.create(Category.schema.name, category);
    });
  }

  public addIdIncrement(category: Category) {
    let idMax = this.Realm.objects(Category.schema.name).max('id');
    if (idMax) {
      category.id = idMax as number + 1;
    } else {
      category.id = 1;
    }
    this.Realm.write(() => {
      this.Realm.create(Category.schema.name, category);
    });
  }

  public remove(id: number) {
   this.Realm.delete(id);
  }

  public update(category: Category) {
    let categorys = RealmDb().objects(Category.schema.name).filtered('id=' + category.id);
    if (categorys) {
      this.Realm.write(() => {
        (<Category>categorys[0]).index = category.index;
        (<Category>categorys[0]).name = category.name;
        (<Category>categorys[0]).description = category.description;
      });
    }
  }

  public getSingle(id: number) {
    let categorys = this.Realm.objects(Category.schema.name).filtered('id=' + id);
    return categorys[0];
  }

  public getAll() {
    return this.Realm.objects(Category.schema.name).sorted('index');
  }

  public count() {
    let number =  this.Realm.objects(Category.schema.name);
    return number.length;
  }

}