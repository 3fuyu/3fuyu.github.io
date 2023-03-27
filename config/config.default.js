'use strict';

const path = require('path');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537930361837_8448';

  // add your config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.html': 'nunjucks'
    }
  }

  config.openAiKey = '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';
  config.openAiOrg = 'org-JCyfHkh0FBrBGz25rcBhVMOU';

  config.static = {
    prefix: '/assets/',
    dir:[path.join(__dirname, '../app/assets')]
  };

  return config;
};
