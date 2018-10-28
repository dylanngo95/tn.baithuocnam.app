"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Category {
}
Category.schema = {
    name: 'Categories',
    primaryKey: 'id',
    properties: {
        id: 'int',
        index: 'int',
        name: 'string',
        description: 'string?',
        createDate: 'double',
        updateDate: 'double',
    },
};
exports.Category = Category;
