/* vim: set tabstop=2 shiftwidth=2 softtabstop=2 expandtab : */
'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGnerator (args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the view subgenerator with the argument ' + this.name + '.');
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.askFor = function askFor() {
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

    // view & view manager setting
    this.props.view = true;
    this.props.view = true;

    cb();
  }.bind(this));
};

ViewGenerator.prototype.viewFiles = function viewFiles() {
  this.template('index.js', 'view/index.js');
};
