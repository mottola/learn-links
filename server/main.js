import { Meteor } from 'meteor/meteor';
import { Bookshelves } from '../imports/collections/bookshelves';
import cors from 'cors';
import HTTP from 'meteor/http';
import fs from 'fs';
import path from 'path';
var khanResults = [];

Meteor.startup(() => {
  // code to run on server at startup
  fs.readFile( '../../../../../server/khanVids.json', function (err, data) {
    if (err) {
      throw err;
    }
    khanResults = JSON.parse(data);
  });

  Meteor.publish('bookshelves', function () {
    return Bookshelves.find({ ownerId: this.userId });
  });
});

Meteor.methods({
  edx: function (term) {
    if (!term) {
      return [];
    }
    const response = Meteor.http.call('GET', 'https://www.edx.org/search/api/all', {} );
    return response.data.filter(function (item) {
      if (item.l.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
        return true;
      } else {
        return false;
      }
    }).slice(0, 8);
  },

  khan: function(term) {
    if (!term) {
      return [];
    }
    return (
      khanResults.filter(function(item) {
        if(!item.name) {
          item.name = '';
        }
        if (item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
          return true;
        } else {
          return false;
        }
      }).slice(0, 8)
    )
  }
    //
    // quora: function (term) {
    //   if (!term) {
    //     return [];
    //   }
    //   const response = Meteor.http.call('GET', `https://www.quora.com/search.json?q=Algorithms`, {} );
    //   return response.data.filter(function (item) {
    //     if (item.l.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }).slice(0, 4);
    // }
});


// Meteor.methods({
//   stackOverflow: function (term) {
//     if (!term) {
//       return [];
//     }
//     const response = Meteor.http.call('GET', `http://stackoverflow.com/questions/tagged/${term}?sort=votes&pageSize=10`, {} );
//     return response.data.filter(function (item) {
//       if (item.l.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
//         return true;
//       } else {
//         return false;
//       }
//     }).slice(0, 4);
//   }
// });
//
// Meteor.methods({

// });
