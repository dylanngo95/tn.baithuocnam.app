export default interface IRepository<T> {
  add(entity: T): void;
  update(entity: T): void;
  delete(id: number): T;
  findAll(): T[];
  find(id: number): Realm.Results<T>;
}
