/**
 * @name index.js<<%= slugname %>/view>
 * @author <%= props.authorName %> <<%= props.authorEmail %>>
 * @fileOverview view of <%= slugname %> module
 */
define(function (require, exports, module) {
    'use strict';

    var beez = require('beez');
    var logger = beez.getLogger('<%= slugname %>.view.index');
    /**
     * View class
     *
     * @namespace View
     * @class
     * @name View
     * @extends {beez.View}
     * @see beez.View
     */
    var View = beez.View.extend(
        // TODO: put your view
        '<%= slugname %>.view.View',
        {
            tagName: 'div',
            id: '<%= slugname %>',
            className: '<%= slugname %>',
            vidx: '<%= slugname %>',

            initialize: function () {
                // super
                View.__super__.initialize.apply(this, arguments);
            },

            beforeOnce: function beforeOnce() {
                this.getParent().$el.append(this.$el);
            },

        });

    return View;
});
