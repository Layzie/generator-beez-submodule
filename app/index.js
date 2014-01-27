/* vim: set tabstop=2 shiftwidth=2 softtabstop=2 expandtab : */
'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var BeezSubmoduleGenerator = module.exports = function BeezSubmoduleGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(BeezSubmoduleGenerator, yeoman.generators.Base);

BeezSubmoduleGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'checkbox',
    name: 'mvcr',
    message: 'Check necessary parts',
    // choices: [
    //   'Model', 'Collection', 'View'
    // ],
    choices: [
      {
        name: 'Model',
        checked: false
      },
      {
        name: 'Collection',
        checked: false
      },
      {
        name: 'View',
        checked: true
      }
    ],
    validate: function (c) {
      var done = this.async();

      if (c.length === 0) {
        done('At least check one property');
      }

      done(true);
    }
  }, {
    name: 'name',
    message: 'Submodule Name',
    default: path.basename(process.cwd()),
    validate: function (w) {
      var done = this.async();

      // if no name then show message.
      if (!/[a-z-]/.test(w)) {
        done('You should put lowercase alphabet in module name.');
        return;
      }

      done(true);
    }
  }, {
    name: 'description',
    message: 'Description',
    default: 'The best submodule ever.'
  }, {
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
    this.slugname = this._.slugify(props.name);
    this.safeSlugname = this.slugname.replace(
      /-([a-z])/g,
      function (g) { return g[1].toUpperCase(); }
    );

    if (props.mvcr.length >= 0) {
      props.mvcr.forEach(function (i) {
        if (i === 'Model') {
          props.model = true;
        }
        if (i === 'View') {
          props.view = true;
        }
        if (i === 'Collection') {
          props.collection = true;
        }
      });
    }

    this.props = props;

    cb();
  }.bind(this));
};

BeezSubmoduleGenerator .prototype.app = function app() {
  var submoduleName = this.props.name;

  // bower & npm install settings
  this.installDependencies({
    bower: false,
    npm: true,
    skipInstall: true,
    skipMessage: true
  });

  this.template('index.js');

  if (this.props.model) {
    this.template('model/index.js');
  }
  if (this.props.collection) {
    this.template('collection/index.js');
  }
  if (this.props.view) {
    this.template('view/index.js');
  }

  this.template('i18n/ja.js');
  this.template('hbs/submodule.hbs', 'hbs/' + submoduleName + '.hbs');
  this.template('styl/submodule.styl', 'styl/' + submoduleName + '.styl');
  this.template('test/index.js');
  this.template('mock.submodule.html.hbs', 'mock.' + submoduleName + '.html.hbs');
};

BeezSubmoduleGenerator .prototype.projectfiles = function projectfiles() {
  this.template('_package.json', 'package.json');
};
