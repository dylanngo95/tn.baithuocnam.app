"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RealmDb_1 = require("../base/RealmDb");
const Tag_1 = require("../models/Tag");
class TagService {
    add(tag) {
        RealmDb_1.default.write(() => {
            RealmDb_1.default.create(Tag_1.Tag.schema.name, tag);
        });
    }
    addIdIncrement(tag) {
        const idMax = RealmDb_1.default.objects(Tag_1.Tag.schema.name).max('id');
        if (idMax) {
            tag.id = idMax + 1;
        }
        else {
            tag.id = 1;
        }
        RealmDb_1.default.write(() => {
            RealmDb_1.default.create(Tag_1.Tag.schema.name, tag);
        });
    }
    getSingle(id) {
        const tags = RealmDb_1.default.objects(Tag_1.Tag.schema.name).filtered('id=' + id);
        return tags[0];
    }
    getByCategoryId(categoryId) {
        return RealmDb_1.default.objects(Tag_1.Tag.schema.name).filtered('categoryId=' + categoryId);
    }
    getByConentId(contentId) {
        return RealmDb_1.default.objects(Tag_1.Tag.schema.name).filtered('contentId=' + contentId);
    }
}
exports.TagService = TagService;
