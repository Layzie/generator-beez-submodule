/**
 * @name index.js<<%= slugname %>/collection>
 * @author <%= props.authorName %> <<%= props.authorEmail %>>
 * @fileOverview collection of <%= slugname %> module
 */

define(function (require, exports, module) {
    'use strict';

    var beez = require('beez');
    var mm = beez.manager.m;
    var logger = beez.getLogger('<%= slugname %>.collection.index');

    /**
     * <%= slugname %> Collection class
     *
     * @namespace Collection
     * @class
     * @name Collection
     * @extends {beez.Collection}
     * @see beez.Collection
     */
    var Collection = beez.Collection.extend(
        // TODO: put your collection
        '<%= slugname %>.collection',
        {
            midx: '<%= slugname %>',

            initialize: function (models, options) {
                Collection.__super__.initialize.apply(this, arguments);
            },

            url: function () {
                return _.result(this, 'urlRoot') + '/_/<%= slugname %>';
            },
        }
    );

    return Collection;

});
