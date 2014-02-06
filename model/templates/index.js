/**
 * @name index.js<<%= slugname %>/model>
 * @author <%= props.authorName %> <<%= props.authorEmail %>>
 * @FileOverview model of <%= slugname %> module
 */

define(function (require, exports, module) {
    'use strict';

    var beez = require('beez');
    var mm = beez.manager.m;
    var logger = beez.getLogger('<%= slugname %>.model.index');

    /**
     * <%= slugname %> Model class
     *
     * @namespace Model
     * @class
     * @name Model
     * @extends {beez.Model}
     * @see beez.Model
     */
    var Model = beez.Model.extend(
        // TODO: put your model
        '<%= slugname %>.model.Model',
        {
            midx : '<%= slugname %>',
            url: function () {
                return _.result(this, 'urlRoot') + '/_/<%= slugname %>';
            }
        }
    );

    return Model;
});
