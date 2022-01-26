import mongoose from 'mongoose';
import _ from 'lodash';
import slugify from 'slugify';

/// <reference types="mongoose" />

declare module 'mongoose' {
  interface SlugifyDocument {
    generateSlug(): Promise<string>;
  }
};

export interface ISlugifyOptions {
  modelName: string,
  fields: string[]
};

export default function mongooseSlugifyPlugin(schema: any, options: ISlugifyOptions) {
  schema.add({
    slug: {
      type: String,
      unique: true,
      required: true
    }
  });

  schema.methods.generateSlug = async function () {
    let model = mongoose.model(options.modelName);

    for (let field of options.fields) {
      if (!this[field]) {
        throw new Error('SlugifyMongoosePlugin error : Cannot find field ' + field + ' in ' + options.modelName + ' schema');
      }
    }

    let slug = slugifyFromFields(this);
    let matches = await model.find({ slug: new RegExp(slug) }, ['slug'], { sort: { slug: -1 } });

    // if not matches found, slug is free to be used
    if (matches.length === 0) {
      return slug;
    }

    // return same slug if entity exist and not changed
    if (this.id) {
      for (let match of matches) {
        if (match.id == this.id) {
          return match['slug'];
        }
      }
    }

    // increment from last match
    let lastMatch = matches[0];
    let inc = extractIncrementFromSlug(slug, lastMatch['slug']);

    return (inc) ? slug + '-' + (++inc) : slug + '-' + 1;
  };

  //
  // SLUGIFY FROM FIELDS
  //
  function slugifyFromFields(doc: any) {
    let obj = _.pick(doc, options.fields);
    let values = _.values(obj);

    return slugify(values.join(' '));
  };

  //
  // EXTRACT INCREMENT FROM SLUG
  //
  function extractIncrementFromSlug(baseSlug: string, slug: string) {
    let extrator = new RegExp(baseSlug + '-([0-9]+)$');
    let hasInc = extrator.exec(slug);

    if (hasInc && hasInc[1]) {
      return parseInt(hasInc[1]);
    }

    return null;
  };
};

