import { Meteor } from 'meteor/meteor';
import { Bookshelves } from '../imports/collections/bookshelves';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('bookshelves', function () {
    return Bookshelves.find({ ownerId: this.userId });
  });
});
