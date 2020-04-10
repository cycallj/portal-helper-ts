const glob = require('glob');
const path = require('path');

const { resolve } = require('../utils');

let entryObj = {};

let files = glob.sync(path.resolve(resolve('app/pages'), '**/*.tsx'));
files.forEach((page) => {
  let key = page.replace(/(.*\/)*([^.]+).*/ig,'$2');

  entryObj[key] = [page];
});

module.exports = entryObj;