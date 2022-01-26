import _ from 'lodash';
import mongoose, { Document, PaginateModel, SlugifyDocument } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import mongooseSlugify, { ISlugifyOptions } from '@lib/slugify-mongoose/slugify-mongoose';
//--------------------------------------------------------------------------------------------

let Schema = mongoose.Schema;

// you can add methods to document for intellisense
export interface IArticle extends Document, SlugifyDocument {
  id: string;
  author: string;
  slug: string;
  title: string;
  text: string;
  imageURL: string;
  updated: Date;
  created: Date;
};

// you can add methods to collection for intellisense
export interface IArticleModel extends PaginateModel<IArticle> {}

export const articleSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  slug: {
    type: String,
    unique: true,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    default: '/storage/imgs/articles/default.png'
  },
  updated: {
    type: Date
  },
  created: {
    type: Date,
    default: Date.now
  }
});

//
// PLUGINS LOADS
//
articleSchema.plugin<ISlugifyOptions>(mongooseSlugify, {
  modelName: 'Article',
  fields: ['title']
});

articleSchema.plugin(mongoosePaginate);

//
// HOOKS
//
articleSchema.pre('save', function (next) {
  // if (this.isModified('password')) {
  //   let password = this.get('password');
  //   this.set('password', encryptPassword(password));
  // }

  next();
});

//
// CUSTOM REPOSITORY METHODS (DON'T FORGET TO ADD TO IArticle)
//

//
// CUSTOM REPOSITORY STATICS (DON'T FORGET TO ADD TO IModelArticle)
//

export const Article = mongoose.model<IArticle, IArticleModel>('Article', articleSchema);

export default Article;