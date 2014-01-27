/* vim: set tabstop=2 shiftwidth=2 softtabstop=2 expandtab : */
/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('beez-submodule generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('beez-submodule:app', [
        '../../app'
      ]);
      this.app.options['skip-install'] = true;
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'img',
      'index.js',
      'model/index.js',
      'view/index.js',
      'collection/index.js',
      'i18n/ja.js',
      'hbs/mypage.hbs',
      'styl/mypage.styl',
      'test/index.js',
      'mock.mypage.html.hbs'
    ];

    helpers.mockPrompt(this.app, {
      'mvcr': ['Model', 'Collection', 'View'],
      'name': 'mypage',
      'description': 'mypage submodule',
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@example.com'
    });
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
