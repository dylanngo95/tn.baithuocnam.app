"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RealmDb_1 = require("../base/RealmDb");
const Content_1 = require("../models/Content");
class ContentService {
    add(content) {
        RealmDb_1.default.write(() => {
            RealmDb_1.default.create(Content_1.Content.schema.name, content);
        });
    }
    addIdIncrement(content) {
        let idMax = RealmDb_1.default.objects(Content_1.Content.schema.name).max('id');
        if (idMax) {
            content.id = idMax + 1;
        }
        else {
            content.id = 1;
        }
        RealmDb_1.default.write(() => {
            RealmDb_1.default.create(Content_1.Content.schema.name, content);
        });
    }
    remove(id) {
        RealmDb_1.default.delete(id);
    }
    update(content) {
        const contents = RealmDb_1.default.objects(Content_1.Content.schema.name).filtered('id=' + content.id);
        if (contents) {
            RealmDb_1.default.write(() => {
                contents[0].categoryId = content.categoryId;
                contents[0].title = content.title;
                contents[0].content = content.content;
                contents[0].description = content.description;
                contents[0].image = content.image;
                contents[0].rate = content.rate;
                contents[0].createDate = content.createDate;
                contents[0].updateDate = content.updateDate;
            });
        }
    }
    getSingle(id) {
        const contents = RealmDb_1.default.objects(Content_1.Content.schema.name).filtered('id=' + id);
        return contents[0];
    }
    getAll() {
        return RealmDb_1.default.objects(Content_1.Content.schema.name);
    }
}
exports.ContentService = ContentService;
