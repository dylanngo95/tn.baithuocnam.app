"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
}
Content.schema = {
    name: 'Contents',
    primaryKey: 'id',
    properties: {
        id: 'int',
        categoryId: 'string',
        title: 'string',
        content: 'string',
        description: 'string?',
        image: 'string',
        rate: 'double',
        createDate: 'double',
        updateDate: 'double',
    },
};
exports.Content = Content;
