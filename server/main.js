import { Meteor } from 'meteor/meteor';
import { Bookshelves } from '../imports/collections/bookshelves';
import cors from 'cors';
import HTTP from 'meteor/http';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('bookshelves', function () {
    return Bookshelves.find({ ownerId: this.userId });
  });
});

Meteor.methods({
  edx: function (term) {
    if (!term) {
      return [];
    }
    console.log('HEEEEEYYY');
    const response = Meteor.http.call('GET', 'https://www.edx.org/search/api/all', {} );
    return response.data.filter(function (item) {
      if (item.l.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
        return true;
      } else {
        return false;
      }
    });
  }
})
