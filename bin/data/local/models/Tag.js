"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tag {
}
Tag.schema = {
    name: 'Tags',
    primaryKey: 'id',
    properties: {
        id: 'int',
        contentId: 'int',
        categoryId: 'int',
    },
};
exports.Tag = Tag;
