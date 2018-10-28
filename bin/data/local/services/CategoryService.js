"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("../models/Category");
const RealmDb_1 = require("../base/RealmDb");
class CategoryService {
    add(category) {
        RealmDb_1.default.write(() => {
            RealmDb_1.default.create(Category_1.Category.schema.name, category);
        });
    }
    addIdIncrement(category) {
        let idMax = RealmDb_1.default.objects(Category_1.Category.schema.name).max('id');
        if (idMax) {
            category.id = idMax + 1;
        }
        else {
            category.id = 1;
        }
        RealmDb_1.default.write(() => {
            RealmDb_1.default.create(Category_1.Category.schema.name, category);
        });
    }
    remove(id) {
        RealmDb_1.default.delete(id);
    }
    update(category) {
        let categorys = RealmDb_1.default.objects(Category_1.Category.schema.name).filtered('id=' + category.id);
        if (categorys) {
            RealmDb_1.default.write(() => {
                categorys[0].index = category.index;
                categorys[0].name = category.name;
                categorys[0].description = category.description;
            });
        }
    }
    getSingle(id) {
        let categorys = RealmDb_1.default.objects(Category_1.Category.schema.name).filtered('id=' + id);
        return categorys[0];
    }
    getAll() {
        let categorys = RealmDb_1.default.objects(Category_1.Category.schema.name);
        return categorys;
    }
}
exports.CategoryService = CategoryService;
