import { Meteor } from 'meteor/meteor';
import { BookshelfCollection } from '../imports/collections/bookshelves-collection';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('bookshelves-collection', function () {
    return Bookshelves.find({ ownerId: this.userId });
  });
});
