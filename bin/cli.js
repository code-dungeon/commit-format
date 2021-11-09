#!/usr/bin/env node
'use strict';

const path = require('path');
const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;

bootstrap({
  cliPath: path.dirname(require.resolve('commitizen/package.json')),
  config: {
    path: 'cz-customizable'
  }
});
