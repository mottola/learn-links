// var vids = [];
//
// var fs = require('fs');
//
// var hugeKhanFile = JSON.parse(fs.readFileSync("./topictree.json"));
//
// function processChildren(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].kind == 'Video') {
//       vids.push({
//         name: arr[i].translated_title,
//         thumb: arr[i].thumbnail_urls.default,
//         url: arr[i].relative_url,
//
//       });
//     } else {
//       processChildren (arr[i].children);
//     }
//   }
// }
//
// processChildren(hugeKhanFile.children);
//
// fs.writeFile('khanVids.json', JSON.stringify(vids));
