import { Mongo } from 'meteor/mongo';

// add Meteor methods for add/edit/delete

Meteor.methods({
  // add Bookshelf
  'bookshelves.insert': function () {
    return Bookshelves.insert({
      // Default Bookshelf
      createdAt: new Date(),
      content: [],
      ownerId: this.userId
    });
  },

  // remove Bookshelf
  'bookshelves.remove': function(bookshelf) {
    return Bookshelves.remove(bookshelf);
  },

  // edit Bookshelf
  'bookshelves.update': function(bookshelf, content) {
    return Bookshelves.update(bookshelf._id, { $set: { content } });
  }
});

export const BookshelfCollection = new Mongo.Collection('bookshelves-collection');
