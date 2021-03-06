# generator-beez-submodule [![Build Status](https://secure.travis-ci.org/Layzie/generator-beez-submodule.png?branch=master)](https://travis-ci.org/Layzie/generator-beez-submodule)

A generator for beez submodule using [Yeoman](http://yeoman.io).


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-beez-submodule from npm, run:

```sh
$ npm install -g generator-beez-submodule
```

### Usage

```sh
$ mkdir mypage && $_ # Make your submodule directory & cd the directory.
$ yo beez-submodule # make submodule.
```

or following way.

```sh
$ cd YOURPROJECTDIR # cd your root directory of your project.
$ yo beez-submodule foo # put name on 1st argument, then make `foo` submodule directory.
```

#### subgenerator

You can generat only a specific parts.

```sh
$ cd YOURPROJECTDIR/mypage # cd your root directory of your project.
$ yo beez-submodule:controller foo # put name on 1st argument, then make `foo` controller.
$ yo beez-submodule:view foo # put name on 1st argument, then make `foo` view.
$ yo beez-submodule:model foo # put name on 1st argument, then make `foo` model.
$ yo beez-submodule:collection foo # put name on 1st argument, then make `foo` collection.
```
### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/Layzie/generator-beez-submodule/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

