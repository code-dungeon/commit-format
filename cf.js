#!/usr/bin/env node
'use strict';

const args = require('args');

args.command('commit', 'Runs an interactive git commit that can be parsed into a changelog.');

args.parse(process.argv);