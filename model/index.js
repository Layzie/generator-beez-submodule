/* vim: set tabstop=2 shiftwidth=2 softtabstop=2 expandtab : */
'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the model subgenerator with the argument ' + this.name + '.');
};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    name: 'authorName',
    message: 'Author\'s Name',
    validate: function (w) {
      var done = this.async();

      // if no author name then show message.
      if (w.length === 0) {
        done('You should put your name.');
      }

      done(true);
    },
      // use git username when set
    default: this.user.git.username
  }, {
    name: 'authorEmail',
    message: 'Author\'s Email',
    validate: function (w) {
      var done = this.async();

      // if no email then show message.
      if (w.length === 0) {
        done('You should put your email.');
      }

      done(true);
    },
    // use git email when set
    default: this.user.git.email
  }];

  this.prompt(prompts, function (props) {
    // slugify name
    this.slugname = this._.slugify(this.name);

    this.props = props;

    // model & view manager setting
    this.props.view = true;
    this.props.model = true;

    cb();
  }.bind(this));
};

ModelGenerator.prototype.modelFiles = function modelFiles() {
  this.template('index.js', 'model/index.js');
};
