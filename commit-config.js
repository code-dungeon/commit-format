'use strict';

module.exports = {

  types: [
    {value: 'feat',         name: 'feature:     A new feature'},
    {value: 'fix',          name: 'fix:         A bug fix'},
    {value: 'docs',         name: 'docs:        Documentation only changes'},
    {value: 'style',        name: 'style:       Changes that do not affect the meaning of the code\n               (white-space, formatting, missing semi-colons, etc)'},
    {value: 'refactor',     name: 'refactor:    A code change that neither fixes a bug nor adds a feature'},
    {value: 'performance',  name: 'performance: A code change that improves performance'},
    {value: 'test',         name: 'test:        Adding missing tests'},
    {value: 'chore',        name: 'chore:       Changes to the build process or auxiliary tools\n               and libraries such as documentation generation'},
    {value: 'revert',       name: 'revert:      Revert to a commit'},
    {value: 'WIP',          name: 'WIP:         Work in progress'}
  ],

  scopes: [
    {name: 'config'},
    {name: 'module'}
  ],

  // it needs to match the value for field type. Eg.: 'fix'

  scopeOverrides: {
    feature: ['module'],
    test: [
      {name: 'e2e-test'},
      {name: 'unit-test'},
      {name: 'perf-test'}
    ],
    fix: [
      {name: 'config'},
      {name: 'module'},
      {name: 'e2e-test'},
      {name: 'unit-test'},
      {name: 'perf-test'}
    ],
    chore: [
      'pipeline',
      'build',
      'docs'
    ]
  },

  // override the messages, defaults are as follows
  messages: {
    type: 'Select the type of change that you\'re committing:',
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feature', 'fix']

};