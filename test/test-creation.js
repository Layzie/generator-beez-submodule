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

  it('creates expected files on controller subgenerator', function (done) {
    var expected = [
      'index.js'
    ],
    // add controller generator
    controller = helpers.createGenerator('beez-submodule:controller', [
      '../../controller'
    ], ['foo']);

    helpers.mockPrompt(controller, {
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@example.com'
    });

    controller.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates expected files on model subgenerator', function (done) {
    var expected = [
      'model/index.js'
    ],
    // add model generator
    model = helpers.createGenerator('beez-submodule:model', [
      '../../model'
    ], ['foo']);

    helpers.mockPrompt(model, {
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@example.com'
    });

    model.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates expected files on view subgenerator', function (done) {
    var expected = [
      'view/index.js'
    ],
    // add view generator
    view = helpers.createGenerator('beez-submodule:view', [
      '../../view'
    ], ['foo']);

    helpers.mockPrompt(view, {
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@example.com'
    });

    view.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates expected files on collection subgenerator', function (done) {
    var expected = [
      'collection/index.js'
    ],
    // add collection generator
    collection = helpers.createGenerator('beez-submodule:collection', [
      '../../collection'
    ], ['foo']);

    helpers.mockPrompt(collection, {
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@example.com'
    });

    collection.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates expected files(no argument)', function (done) {
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

  it('creates expected files(with argument)', function (done) {
    var expected = [
      // add files you expect to exist here.
      'foo/img',
      'foo/index.js',
      'foo/model/index.js',
      'foo/view/index.js',
      'foo/collection/index.js',
      'foo/i18n/ja.js',
      'foo/hbs/foo.hbs',
      'foo/styl/foo.styl',
      'foo/test/index.js',
      'foo/mock.foo.html.hbs'
    ];

    helpers.mockPrompt(this.app, {
      'mvcr': ['Model', 'Collection', 'View'],
      'name': 'foo',
      'description': 'mypage submodule',
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@example.com'
    });

    this.app.args = ['foo'];

    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

});
