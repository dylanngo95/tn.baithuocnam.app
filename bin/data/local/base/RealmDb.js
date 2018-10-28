"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Realm = require("realm");
const Category_1 = require("../models/Category");
const Content_1 = require("../models/Content");
const Tag_1 = require("../models/Tag");
exports.default = new Realm({ schema: [Category_1.Category.schema, Content_1.Content.schema, Tag_1.Tag.schema] });
