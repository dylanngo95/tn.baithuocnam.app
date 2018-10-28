import * as Realm from 'realm';
import { Category } from '../models/Category';
import { Content } from '../models/Content';
import { Tag } from '../models/Tag';

export default new Realm({ schema: [Category.schema, Content.schema, Tag.schema]});